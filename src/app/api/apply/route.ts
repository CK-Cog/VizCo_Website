import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const role = String(formData.get('role') || 'Founding Engineer (Full-Stack)');
    const coverLetterText = String(formData.get('coverLetter') || '');
    const resume = formData.get('resume') as File | null;
    const coverLetterFile = formData.get('coverLetterFile') as File | null;

    if (!name || !email || !resume) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const attachments: Array<{ filename: string; content: Buffer }> = [];

    const fileToBuffer = async (file: File) => Buffer.from(await file.arrayBuffer());

    attachments.push({ filename: resume.name || 'resume.pdf', content: await fileToBuffer(resume) });
    if (coverLetterFile) {
      attachments.push({ filename: coverLetterFile.name || 'cover-letter.txt', content: await fileToBuffer(coverLetterFile) });
    }

    const host = process.env.SMTP_HOST || 'smtp.gmail.com';
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const fromAddress = process.env.SMTP_FROM || user || 'no-reply@vizco.co';

    if (!user || !pass) {
      console.error('SMTP_USER/SMTP_PASS not set');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `Vizco Careers <${fromAddress}>`,
      to: 'chris@vizco.co',
      replyTo: email,
      subject: `New application: ${role} — ${name}`,
      text: `A new candidate applied.\n\nRole: ${role}\nName: ${name}\nEmail: ${email}\n\nCover Letter (text):\n${coverLetterText || '(none provided)'}\n`,
      attachments,
    });

    const url = new URL('/careers/thanks', request.url);
    return NextResponse.redirect(url, { status: 303 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
}
