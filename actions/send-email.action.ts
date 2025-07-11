"use server";

import transporter from "@/lib/nodemailer";
import { send } from "process";

export async function sendEmailAction({
    to,
    subject,
    meta,
}: {
    to: string;
    subject: string;
    meta: {
        description: string;
        link: string;
    };
}) {
    const mailOptions = {
        from: process.env.NODEMAILER_USER,
        to,
        subject,
        text: meta.description,
        html: `
<div style="font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; line-height: 1.5; color: #333333; margin: 0; padding: 20px;">
    <p style="margin-bottom: 20px;">Hello,</p>
    <p style="margin-bottom: 20px;">You requested a link. Here it is:</p>
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 20px;">
        <tr>
            <td align="center" style="border-radius: 6px;" bgcolor="#2563eb">
                <a href="${meta.link}" target="_blank" style="font-size: 16px; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; color: #ffffff; text-decoration: none; border-radius: 6px; padding: 10px 20px; border: 1px solid #2563eb; display: inline-block; font-weight: 700;">
                    Click Here
                </a>
            </td>
        </tr>
    </table>
    <p style="margin-top: 20px; font-size: 14px; color: #666666;">If you did not request this, please ignore this email.</p>
</div>
`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error("sendEmailAction", error);
        return { success: false };
    }
}