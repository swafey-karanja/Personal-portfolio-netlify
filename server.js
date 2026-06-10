// server.js — LOCAL DEVELOPMENT ONLY. Not deployed.
// Run with: node server.js  →  open http://localhost:3000

require("dotenv").config();
const express = require("express");
const { Resend } = require("resend");

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "kswafey@gmail.com";
const FROM_EMAIL = "noreply@swafey.top"; // Resend sandbox — no domain needed locally

app.use(express.json());
app.use(express.static("."));

app.post("/api/contact", async (req, res) => {
  const { name, email, project, message } = req.body ?? {};

  if (!name || !email || !message)
    return res
      .status(400)
      .json({ error: "Name, email, and message are required." });

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: project
        ? `Portfolio enquiry: ${project}`
        : `Portfolio enquiry from ${name}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p>${project ? `<p><b>Project:</b> ${project}</p>` : ""}<p><b>Message:</b><br>${message}</p>`,
      text: `Name: ${name}\nEmail: ${email}${project ? `\nProject: ${project}` : ""}\n\nMessage:\n${message}`,
    });
    res.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    res.status(500).json({ error: "Failed to send email." });
  }
});

app.listen(3000, () =>
  console.log("✅  Dev server running → http://localhost:3000"),
);
