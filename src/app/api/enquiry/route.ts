import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  buildEnquiryEmailHtml,
  buildEnquiryAutoReplyHtml,
} from "@/lib/email-templates/enquiry";

const EMAIL_CEO = "ceo@benktechlabs.com";
const EMAIL_FROM =
  process.env.RESEND_FROM ?? "noreply@benktechlabs.com";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isTenDigitPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length === 10;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const website = body.website ?? "";
    if (website && String(website).trim() !== "") {
      return NextResponse.json(
        { success: true, message: "Enquiry received" },
        { status: 200 }
      );
    }

    const fullName = body.fullName?.trim();
    const phone = body.phone ?? "";
    const email = body.email?.trim();
    const company = body.company?.trim();
    const service =
      body.service?.trim() ?? body.serviceRequired?.trim() ?? "";
    const budget =
      body.budget?.trim() ?? body.projectBudget?.trim() ?? "";
    const message = body.message?.trim() ?? "";
    const referral =
      body.referral?.trim() ?? body.howDidYouHear?.trim() ?? "";

    if (!fullName) {
      return NextResponse.json(
        { success: false, error: "Full name is required." },
        { status: 400 }
      );
    }
    if (!isTenDigitPhone(phone)) {
      return NextResponse.json(
        { success: false, error: "Phone must be a valid 10-digit number." },
        { status: 400 }
      );
    }
    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email is required." },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }
    if (!service) {
      return NextResponse.json(
        { success: false, error: "Service is required." },
        { status: 400 }
      );
    }
    if (!budget) {
      return NextResponse.json(
        { success: false, error: "Project budget is required." },
        { status: 400 }
      );
    }
    if (message.length < 20) {
      return NextResponse.json(
        { success: false, error: "Message must be at least 20 characters." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[enquiry] RESEND_API_KEY is not configured");
      return NextResponse.json(
        {
          success: false,
          error: "Something went wrong. Please try again.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const html = buildEnquiryEmailHtml({
      fullName,
      phone: phone.replace(/\D/g, "").slice(-10),
      email,
      company: company || undefined,
      service,
      budget,
      message,
      referral: referral || undefined,
    });

    const { error: notifyError } = await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_CEO,
      subject: `New Enquiry from ${fullName} — ${service}`,
      html,
    });

    if (notifyError) {
      console.error("[enquiry] Resend error (internal notify):", notifyError);
      return NextResponse.json(
        {
          success: false,
          error: "Something went wrong. Please try again.",
        },
        { status: 500 }
      );
    }

    const autoReplyHtml = buildEnquiryAutoReplyHtml(fullName, service);
    const { error: autoReplyError } = await resend.emails.send({
      from: EMAIL_FROM,
      to: email,
      replyTo: EMAIL_CEO,
      subject: "Thanks for reaching out — BenK Tech Labs",
      html: autoReplyHtml,
    });

    if (autoReplyError) {
      console.error("[enquiry] Resend error (auto-reply):", autoReplyError);
    }

    return NextResponse.json(
      { success: true, message: "Enquiry received" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
