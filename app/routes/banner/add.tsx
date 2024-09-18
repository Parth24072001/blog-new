import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { insertDocument } from "~/db-helpers.server";

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const banner = {
    title: formData.get("title"),
    year: formData.get("year"),
  };

  const insertedId = await insertDocument("banners", banner);
  return redirect(`/banner/${insertedId}`);
}

export default function Index() {
  return (
    <div>
      <h2>Add a banner</h2>
      <Form method="POST" action="/banner/add">
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="year" placeholder="Year" />
        <button type="submit">Search</button>
      </Form>
    </div>
  );
}
