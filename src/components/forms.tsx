"use client";

import { useActionState, type ReactNode } from "react";
import { requestSample, sendMessage, subscribe, type FormState } from "@/app/actions";

const idle: FormState = { status: "idle" };

const inputClass =
  "mt-1.5 w-full border border-line bg-white/70 px-3.5 py-2.5 text-[15px] text-ink placeholder:text-muted/70 focus:border-forest focus:outline-none";

function Field({
  name,
  label,
  state,
  optional,
  children,
}: {
  name: string;
  label: string;
  state: FormState;
  optional?: boolean;
  children?: ReactNode;
}) {
  const error = state.status === "error" ? state.errors[name] : undefined;
  const value = state.status === "error" ? state.values?.[name] : undefined;
  return (
    <label className="block text-sm">
      <span className="font-medium">
        {label}
        {optional && <span className="font-normal text-muted"> (optional)</span>}
      </span>
      {children ?? (
        <input
          name={name}
          type={name === "email" ? "email" : "text"}
          autoComplete={name === "email" ? "email" : name === "name" ? "name" : undefined}
          defaultValue={value}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
          className={inputClass}
        />
      )}
      {error && (
        <span id={`${name}-error`} className="mt-1 block text-[13px] text-[#8a2c1d]">
          {error}
        </span>
      )}
    </label>
  );
}

function Done({ message }: { message: string }) {
  return (
    <div role="status" className="border border-forest/30 bg-white/70 p-6">
      <p className="font-serif text-xl text-forest">Received.</p>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">{message}</p>
    </div>
  );
}

function Submit({ pending, children }: { pending: boolean; children: ReactNode }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-forest px-6 py-3 text-[15px] font-medium text-oat transition-colors hover:bg-forest-deep disabled:opacity-60"
    >
      {pending ? "Sending…" : children}
    </button>
  );
}

export function SampleForm() {
  const [state, action, pending] = useActionState(requestSample, idle);
  if (state.status === "done") return <Done message={state.message} />;
  return (
    <form action={action} noValidate className="grid gap-5 md:grid-cols-2">
      <Field name="cafe" label="Café name" state={state} />
      <Field name="name" label="Your name" state={state} />
      <Field name="email" label="Email" state={state} />
      <Field name="city" label="City" state={state} />
      <Field name="cups" label="Milk drinks a day" state={state} optional>
        <select name="cups" className={inputClass} defaultValue={state.status === "error" ? state.values?.cups ?? "" : ""}>
          <option value="" disabled>Choose one</option>
          <option>Fewer than 50</option>
          <option>50–150</option>
          <option>More than 150</option>
        </select>
      </Field>
      <Field name="now" label="Oat drink you use now" state={state} optional />
      <div className="md:col-span-2">
        <Submit pending={pending}>Request a sample box</Submit>
      </div>
    </form>
  );
}

export function NewsletterForm() {
  const [state, action, pending] = useActionState(subscribe, idle);
  if (state.status === "done") return <Done message={state.message} />;
  const error = state.status === "error" ? state.errors.email : undefined;
  return (
    <form action={action} noValidate className="flex flex-col gap-3 sm:flex-row sm:items-start">
      <label className="flex-1 text-sm">
        <span className="sr-only">Email</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Your email"
          defaultValue={state.status === "error" ? state.values?.email : undefined}
          aria-invalid={!!error}
          aria-describedby={error ? "newsletter-error" : undefined}
          className={`${inputClass} mt-0`}
        />
        {error && (
          <span id="newsletter-error" className="mt-1 block text-[13px] text-[#8a2c1d]">
            {error}
          </span>
        )}
      </label>
      <Submit pending={pending}>Subscribe</Submit>
    </form>
  );
}

export function ContactForm() {
  const [state, action, pending] = useActionState(sendMessage, idle);
  if (state.status === "done") return <Done message={state.message} />;
  return (
    <form action={action} noValidate className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field name="name" label="Name" state={state} />
        <Field name="email" label="Email" state={state} />
      </div>
      <Field name="topic" label="About" state={state} optional>
        <select name="topic" className={inputClass} defaultValue={state.status === "error" ? state.values?.topic : "General"}>
          <option>General</option>
          <option>Café supply</option>
          <option>Retail</option>
          <option>Press</option>
        </select>
      </Field>
      <Field name="message" label="Message" state={state}>
        <textarea
          name="message"
          rows={5}
          defaultValue={state.status === "error" ? state.values?.message : undefined}
          aria-invalid={state.status === "error" && !!state.errors.message}
          aria-describedby={state.status === "error" && state.errors.message ? "message-error" : undefined}
          className={inputClass}
        />
      </Field>
      <div>
        <Submit pending={pending}>Send message</Submit>
      </div>
    </form>
  );
}
