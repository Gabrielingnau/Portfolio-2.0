import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function ContactEmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div style={{
      backgroundColor: '#f9fafb',
      padding: '40px 20px',
      fontFamily: 'sans-serif',
      color: '#1f2937'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        overflow: 'hidden',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          backgroundColor: '#3b82f6',
          padding: '24px',
          textAlign: 'center'
        }}>
          <h1 style={{ color: '#ffffff', margin: 0, fontSize: '24px' }}>
            Nova Mensagem de Contato
          </h1>
        </div>

        <div style={{ padding: '32px' }}>
          <p style={{ fontSize: '16px', lineHeight: '24px', marginBottom: '24px' }}>
            Olá, <strong>Gabriel</strong>! Você recebeu um novo contato através do seu portfólio.
          </p>

          <div style={{
            backgroundColor: '#f3f4f6',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '24px'
          }}>
            <p style={{ margin: '0 0 10px 0' }}>
              <strong>👤 Nome:</strong> {name}
            </p>
            <p style={{ margin: '0 0 10px 0' }}>
              <strong>📧 E-mail:</strong> <a href={`mailto:${email}`} style={{ color: '#3b82f6' }}>{email}</a>
            </p>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ 
              fontSize: '18px', 
              marginBottom: '12px', 
              borderBottom: '2px solid #f3f4f6', 
              paddingBottom: '8px' // <-- CORREÇÃO AQUI
            }}>
              Mensagem:
            </h2>
            <p style={{ 
              fontSize: '16px', 
              lineHeight: '26px', 
              whiteSpace: 'pre-wrap',
              color: '#4b5563',
              fontStyle: 'italic'
            }}>
              {message}
            </p>
          </div>

          <div style={{ textAlign: 'center', borderTop: '1px solid #e5e7eb', paddingTop: '24px' }}>
            <p style={{ fontSize: '12px', color: '#9ca3af' }}>
              Este e-mail foi enviado automaticamente pelo formulário do seu portfólio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}