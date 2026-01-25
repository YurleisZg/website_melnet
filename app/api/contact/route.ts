import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, phone, email, message } = await req.json();

    const data = await resend.emails.send({
      from: 'Web Contacto <melnetinternet.com>', // Luego puedes usar tu propio dominio
      to: ['zuluagayurleis@gmail.com'], // <--- AQUÍ PONES TU CORREO
      subject: `Nueva solicitud de: ${name}`,
      html: `
        <h1>Nueva solicitud de contacto</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: "Error enviando el mensaje" }, { status: 500 });
  }
}