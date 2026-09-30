"use server";

/**
 * The site’s three forms, validated on the server the way a live brand site
 * would be. Nothing is stored or sent: this is a concept, and a form that
 * quietly collected real people’s details for a brand that does not exist
 * would be dishonest. The replies say so.
 */
export type FormState =
  | { status: "idle" }
  | { status: "error"; errors: Record<string, string>; values: Record<string, string> }
  | { status: "done"; message: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(form: FormData, key: string) {
  return String(form.get(key) ?? "").trim();
}

/** What was typed, handed back so a failed submit doesn't empty the form. */
function values(form: FormData) {
  const out: Record<string, string> = {};
  form.forEach((v, k) => {
    if (typeof v === "string" && !k.startsWith("$")) out[k] = v;
  });
  return out;
}

function check(fields: Record<string, string>, required: string[]) {
  const errors: Record<string, string> = {};
  for (const key of required) {
    if (!fields[key]) errors[key] = "Please fill this in.";
  }
  if (fields.email && !EMAIL.test(fields.email)) errors.email = "That email address doesn’t look right.";
  return errors;
}

export async function requestSample(_: FormState, form: FormData): Promise<FormState> {
  const fields = {
    cafe: text(form, "cafe"),
    name: text(form, "name"),
    email: text(form, "email"),
    city: text(form, "city"),
  };
  const errors = check(fields, ["cafe", "name", "email", "city"]);
  if (Object.keys(errors).length) return { status: "error", errors, values: values(form) };
  return {
    status: "done",
    message: `Thank you, ${fields.name}. On a live site, a sample box of Barista would now be on its way to ${fields.cafe} in ${fields.city}. This is a concept, so nothing was sent and nothing was kept.`,
  };
}

export async function subscribe(_: FormState, form: FormData): Promise<FormState> {
  const fields = { email: text(form, "email") };
  const errors = check(fields, ["email"]);
  if (Object.keys(errors).length) return { status: "error", errors, values: values(form) };
  return {
    status: "done",
    message: "You’d be on the list now. This is a concept site, so your address wasn’t saved.",
  };
}

export async function sendMessage(_: FormState, form: FormData): Promise<FormState> {
  const fields = { name: text(form, "name"), email: text(form, "email"), message: text(form, "message") };
  const errors = check(fields, ["name", "email", "message"]);
  if (Object.keys(errors).length) return { status: "error", errors, values: values(form) };
  return {
    status: "done",
    message: `Thanks, ${fields.name}. A real team would reply within two working days. This is a concept site, so your message wasn’t sent or stored.`,
  };
}
