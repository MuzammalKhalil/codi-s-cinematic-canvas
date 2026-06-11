import { motion } from "framer-motion";
import { Building2, Mail, Phone } from "lucide-react";
import { useState } from "react";

const socials = [
  { l: "ABOUT STUDIO", v: "Premium Digital Design & Web Development", h: "#", i: Building2 },
  { l: "CONTACT INFO", v: "muzammalkhaliloffical@gmail.com", h: "mailto:muzammalkhaliloffical@gmail.com", i: Mail },
  { l: "PHONE", v: "+92 304 162 5523", h: "tel:+923041625523", i: Phone },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setStatusMessage("Email service is not configured yet.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    setStatusMessage("");

    try {
      const emailjs = await import("@emailjs/browser");

      await emailjs.send(
        serviceId,
        templateId,
        {
          first_name: formData.get("first_name"),
          last_name: formData.get("last_name"),
          user_email: formData.get("user_email"),
          message: formData.get("message"),
        },
        { publicKey },
      );

      form.reset();
      setStatus("success");
      setStatusMessage("Message sent. We will get back to you soon.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(error instanceof Error ? error.message : "Message could not be sent.");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="pulse-glow absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.55 0.18 195 / 0.3), transparent 70%)",
          filter: "blur(60px)",
        }} />
      <div className="relative mx-auto max-w-[1440px] px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-4 max-w-4xl font-display text-4xl md:text-6xl font-semibold"
        >
          GET IN <span className="chrome-text italic">TOUCH</span>
        </motion.h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-sm">
          Any questions or remarks? Just write us a message!
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mt-12 grid max-w-2xl gap-4 text-left">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1 block">First Name</label>
              <input name="first_name" placeholder="John" required className="glass rounded-2xl px-5 py-4 outline-none transition focus:border-primary focus:shadow-[0_0_30px_oklch(0.55_0.18_195/0.3)] w-full" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1 block">Last Name</label>
              <input name="last_name" placeholder="Doe" required className="glass rounded-2xl px-5 py-4 outline-none transition focus:border-primary focus:shadow-[0_0_30px_oklch(0.55_0.18_195/0.3)] w-full" />
            </div>
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1 block">Email</label>
            <input name="user_email" placeholder="Enter a valid email address" type="email" required className="glass rounded-2xl px-5 py-4 outline-none transition focus:border-primary focus:shadow-[0_0_30px_oklch(0.55_0.18_195/0.3)] w-full" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1 block">Message</label>
            <textarea name="message" placeholder="How can we help you?" rows={5} required
              className="glass rounded-2xl px-5 py-4 outline-none transition focus:border-primary focus:shadow-[0_0_30px_oklch(0.55_0.18_195/0.3)] w-full" />
          </div>
          <button type="submit" disabled={status === "sending"} className="mt-4 w-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 py-4 font-semibold text-background transition disabled:cursor-not-allowed disabled:opacity-60">
            {status === "sending" ? "SENDING..." : "SUBMIT MESSAGE"}
          </button>
          {statusMessage ? (
            <p className={`text-center text-sm ${status === "error" ? "text-red-400" : "text-primary"}`}>
              {statusMessage}
            </p>
          ) : null}
        </form>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {socials.map((s) => {
            const IconComponent = s.i;
            return (
              <a key={s.l} href={s.h} target="_blank" rel="noreferrer"
                className="group flex flex-col items-center gap-4 p-5 transition">
                <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">{s.l}</span>
                <span className="text-sm text-muted-foreground max-w-xs text-center transition group-hover:text-primary">{s.v}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
