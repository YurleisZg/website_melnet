import { NextResponse } from "next/server";
import { z } from "zod";

const LeadSchema = z.object({
  name: z.string().min(2).max(80),
  phone: z.string().min(7).max(20),
  zone: z.string().min(2).max(120),
  planId: z.string().optional().or(z.literal("")),
  notes: z.string().max(1000).optional().or(z.literal("")),
});

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  const parsed = LeadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Datos inválidos", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  // TODO: aquí conectas: DB / Google Sheets / Telegram / WhatsApp / CRM
  // Por ahora: simulamos ok.
  return NextResponse.json({ ok: true, lead: parsed.data }, { status: 200 });
}
