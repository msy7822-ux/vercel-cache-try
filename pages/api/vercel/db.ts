import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

async function create(formData: FormData) {
  "use server";
  const { rows } = await sql`
    INSERT INTO products (name)
    VALUES (${formData.get("name") as string})
  `;
  redirect(`/product/${rows[0].slug}`);
}
