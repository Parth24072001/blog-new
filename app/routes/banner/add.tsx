import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { mongodb } from "~/utils/db.server";

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const banner = {
    title: formData.get("title"),
    year: formData.get("year"),
  };
  const db = await mongodb.db("blogging");
  const collection = await db.collection("banners");
  const result = await collection.insertOne(banner);
  return redirect(`/banners/${result.insertedId}`);
}

export default function Index() {
  return (
    <div>
      <h2>Add a banner</h2>
      <Form method="POST" action="/banners/add">
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="year" placeholder="Year" />
        <button type="submit">Search</button>
      </Form>
    </div>
  );
}
