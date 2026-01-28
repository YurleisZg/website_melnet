import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, phone, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'MelNet Contacto <contacto@melnetinternet.com>', 
      to: ['melnetinternet@gmail.com'],
      subject: `Nueva solicitud de: ${name}`,
      html: `
        <h1>Nueva solicitud desde la Web</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Mensaje o Dirección:</strong> ${message}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}