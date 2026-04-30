import { Resend } from 'resend';

// Adicione este log para debugar (SÓ PARA TESTE, remova depois)
if (!process.env.RESEND_API_KEY) {
  console.error("ERRO: A variável RESEND_API_KEY não foi encontrada!");
}

export const resend = new Resend(process.env.RESEND_API_KEY);