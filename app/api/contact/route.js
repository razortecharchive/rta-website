import { Resend } from 'resend';

export async function POST(req) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json({ error: 'Email service not configured' }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, email, message } = await req.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'razor.techarchive@gmail.com',
      subject: 'RTAサイトからのお問い合わせ',
      html: `<p>名前：${escapeHtml(name)}</p><p>メール：${escapeHtml(email)}</p><p>内容：${escapeHtml(message)}</p>`,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
