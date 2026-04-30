import { resend } from '@/lib/resend';
import { ContactEmailTemplate } from '@/components/emails/contact-form';
import { NextResponse } from 'next/server';

// No App Router, exportamos uma função com o nome do método HTTP (POST)
export async function POST(req: Request) {
  try {
    // Pegamos os dados reais que vêm do seu formulário
    const body = await req.json();
    const { name, email, message } = body;

    const { data, error } = await resend.emails.send({
      // Usando seu domínio verificado
      from: 'Portfolio <contato@email.gabrielingnau.com>',
      to: ['gabrielingnau@gmail.com'],
      subject: `Novo contato: ${name}`,
      replyTo: email,
      react: ContactEmailTemplate({ name, email, message }), // Passando os dados para o template
    });

    if (error) {
      console.error("Erro Resend:", error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("Erro na API Route:", err.message);
    return NextResponse.json(
      { error: { message: "Erro interno no servidor" } },
      { status: 500 }
    );
  }
}