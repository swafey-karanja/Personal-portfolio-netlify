// netlify/functions/contact.js — Netlify serverless function

const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "kswafey@gmail.com";
const FROM_EMAIL = "Portfolio <noreply@swafey.top>"; // ← swap to your verified Resend domain

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body ?? "{}");
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

  const { name, email, project, message } = body;

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Name, email, and message are required." }),
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid email address." }),
    };
  }

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: project
        ? `Portfolio enquiry: ${project}`
        : `Portfolio enquiry from ${name}`,
      html: `
        <h2 style="margin:0 0 16px;font-family:sans-serif;">New message from your portfolio</h2>
        <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%;">
          <tr>
            <td style="padding:8px 12px;background:#f4f4f5;font-weight:600;width:120px;">Name</td>
            <td style="padding:8px 12px;border-bottom:1px solid #e4e4e7;">${escHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;background:#f4f4f5;font-weight:600;">Email</td>
            <td style="padding:8px 12px;border-bottom:1px solid #e4e4e7;">
              <a href="mailto:${escHtml(email)}">${escHtml(email)}</a>
            </td>
          </tr>
          ${
            project
              ? `
          <tr>
            <td style="padding:8px 12px;background:#f4f4f5;font-weight:600;">Project</td>
            <td style="padding:8px 12px;border-bottom:1px solid #e4e4e7;">${escHtml(project)}</td>
          </tr>`
              : ""
          }
          <tr>
            <td style="padding:8px 12px;background:#f4f4f5;font-weight:600;vertical-align:top;">Message</td>
            <td style="padding:8px 12px;white-space:pre-wrap;">${escHtml(message)}</td>
          </tr>
        </table>
      `,
      text: `New portfolio message\n\nName: ${name}\nEmail: ${email}${project ? `\nProject: ${project}` : ""}\n\nMessage:\n${message}`,
    });

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error("Resend error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to send email. Please try again later.",
      }),
    };
  }
};

function escHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
