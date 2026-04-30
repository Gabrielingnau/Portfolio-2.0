import { resend } from '@/lib/resend';
import { ContactEmailTemplate } from '@/components/emails/contact-form';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'Portfolio <contato@email.gabrielingnau.com>',
      to: ['gabrielingnau@gmail.com'],
      subject: `Novo contato: ${name}`,
      replyTo: email,
      react: ContactEmailTemplate({ name, email, message }),
    });

    if (error) {
      console.error("Erro Resend:", error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    // Tipagem segura: verificamos se 'err' é uma instância de Error
    const errorMessage = err instanceof Error ? err.message : "Erro desconhecido";
    
    console.error("Erro na API Route:", errorMessage);
    
    return NextResponse.json(
      { error: { message: "Erro interno no servidor" } },
      { status: 500 }
    );
  }
}