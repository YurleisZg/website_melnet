"use client";

import { useMemo, useState } from "react";
import { plans } from "@/content/plans";

type Status = "idle" | "loading" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState<string>("");

  const planOptions = useMemo(() => plans.map(p => ({ id: p.id, label: `${p.name} — ${p.speed}` })), []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMsg("");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message ?? "Error");

      setStatus("success");
      setMsg("Listo. Te contactaremos pronto para confirmar cobertura e instalación.");
      e.currentTarget.reset();
    } catch (err: any) {
      setStatus("error");
      setMsg(err?.message ?? "No se pudo enviar. Intenta de nuevo.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium">Nombre</label>
          <input name="name" required className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Tu nombre" />
        </div>

        <div>
          <label className="text-sm font-medium">Teléfono / WhatsApp</label>
          <input
            name="phone"
            required
            className="mt-1 w-full rounded-xl border px-3 py-2"
            placeholder="3001234567"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Zona / Barrio</label>
          <input
            name="zone"
            required
            className="mt-1 w-full rounded-xl border px-3 py-2"
            placeholder="Ej: Olaya / Centro / Vereda..."
          />
        </div>

        <div>
          <label className="text-sm font-medium">Plan de interés</label>
          <select name="planId" className="mt-1 w-full rounded-xl border px-3 py-2" defaultValue="">
            <option value="">No estoy seguro</option>
            {planOptions.map(o => (
              <option key={o.id} value={o.id}>{o.label}</option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="text-sm font-medium">Notas</label>
          <textarea
            name="notes"
            className="mt-1 w-full rounded-xl border px-3 py-2"
            placeholder="Ej: necesito para cámaras / trabajo remoto / gaming..."
            rows={4}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-5 w-full rounded-xl bg-black px-5 py-3 text-sm font-medium text-white disabled:opacity-60"
      >
        {status === "loading" ? "Enviando..." : "Enviar solicitud"}
      </button>

      {msg && (
        <p
          className={[
            "mt-4 rounded-xl border px-4 py-3 text-sm",
            status === "success" ? "border-green-200 bg-green-50 text-green-800" : "",
            status === "error" ? "border-red-200 bg-red-50 text-red-800" : "",
          ].join(" ")}
        >
          {msg}
        </p>
      )}
    </form>
  );
}
