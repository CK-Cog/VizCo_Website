import { NextResponse } from 'next/server';

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

    const attachments: Array<{ filename: string; content: string }> = [];

    // Helper to convert File -> base64 string
    const fileToBase64 = async (file: File) => {
      const buffer = Buffer.from(await file.arrayBuffer());
      return buffer.toString('base64');
    };

    const resumeBase64 = await fileToBase64(resume);
    attachments.push({ filename: resume.name || 'resume.pdf', content: resumeBase64 });

    if (coverLetterFile) {
      const clBase64 = await fileToBase64(coverLetterFile);
      attachments.push({ filename: coverLetterFile.name || 'cover-letter.txt', content: clBase64 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const fromAddress = process.env.RESEND_FROM || 'onboarding@resend.dev';

    const emailPayload = {
      from: fromAddress,
      to: ['chris@vizco.co'],
      subject: `New application: ${role} — ${name}`,
      text: `A new candidate applied.\n\nRole: ${role}\nName: ${name}\nEmail: ${email}\n\nCover Letter (text):\n${coverLetterText || '(none provided)'}\n`,
      attachments,
    } satisfies {
      from: string;
      to: string[];
      subject: string;
      text: string;
      attachments: { filename: string; content: string }[];
    };

    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    });

    if (!resp.ok) {
      const err = await resp.text();
      console.error('Resend error:', err);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    const url = new URL('/careers/thanks', request.url);
    return NextResponse.redirect(url, { status: 303 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
}
