const BRAND_PRIMARY = "#1E3A8A";

export interface EnquiryEmailData {
  fullName: string;
  phone: string;
  email: string;
  company?: string;
  service: string;
  budget: string;
  message: string;
  referral?: string;
}

/**
 * HTML email template for enquiry form submissions.
 * Uses brand color #1E3A8A as header background.
 */
export function buildEnquiryEmailHtml(data: EnquiryEmailData): string {
  const rows = [
    ["Full Name", data.fullName],
    ["Phone", `+91 ${data.phone}`],
    ["Email", data.email],
    ["Company", data.company || "—"],
    ["Service Required", data.service],
    ["Project Budget", data.budget],
    ["How did you hear about us?", data.referral || "—"],
    ["Message", data.message],
  ];

  const tableRows = rows
    .map(
      ([label, value]) => `
    <tr>
      <td style="padding: 10px 16px; border-bottom: 1px solid #E5E7EB; font-weight: 600; color: #374151;">${label}</td>
      <td style="padding: 10px 16px; border-bottom: 1px solid #E5E7EB; color: #4B5563;">${escapeHtml(String(value))}</td>
    </tr>`
    )
    .join("");

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.5;">
  <div style="max-width: 600px; margin: 0 auto; padding: 24px;">
    <table cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
      <thead>
        <tr>
          <th colspan="2" style="background: ${BRAND_PRIMARY}; color: #fff; padding: 16px 20px; font-size: 18px; text-align: left;">
            New Enquiry from BenK Tech Labs Website
          </th>
        </tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table>
    <p style="margin-top: 24px; font-size: 12px; color: #9CA3AF;">
      This enquiry was submitted via the contact form at benktechlabs.com.
    </p>
  </div>
</body>
</html>
  `.trim();
}

/**
 * HTML email template for auto-reply to enquirer.
 * Warm thank-you message with #1E3A8A header.
 */
export function buildEnquiryAutoReplyHtml(fullName: string, service: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6;">
  <div style="max-width: 560px; margin: 0 auto; padding: 24px;">
    <table cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
      <thead>
        <tr>
          <th style="background: ${BRAND_PRIMARY}; color: #fff; padding: 20px; font-size: 18px; text-align: left;">
            Thank you for reaching out
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 24px; background: #fff; color: #374151;">
            <p style="margin: 0 0 16px;">Dear ${escapeHtml(fullName)},</p>
            <p style="margin: 0 0 16px;">
              Thank you for your interest in our <strong>${escapeHtml(service)}</strong> services. We&apos;ve received your enquiry and appreciate you taking the time to connect with us.
            </p>
            <p style="margin: 0 0 16px;">
              Our team will review your request and get back to you within 24 hours.
            </p>
            <p style="margin: 24px 0 0;">
              Best regards,<br>
              <strong>The BenK Tech Labs Team</strong>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</body>
</html>
  `.trim();
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\n/g, "<br>");
}
