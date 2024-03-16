import type { APIRoute } from "astro";

import { db, NewsLetter, eq } from "astro:db";

const isAlreadyRegisted = async (email: FormDataEntryValue) => {
    const users = await db
        .select()
        .from(NewsLetter)
        .where(eq(NewsLetter.email, email.toString()));
    return users.length > 0;
};

export const POST: APIRoute = async ({ request }) => {
    const data = await request.formData();
    const email = data.get("email");
    // Validate the data - you'll probably want to do more than this
    if (!email) {
        return new Response(
            JSON.stringify({
                type: "error",
                message: "Please provide an email address.",
            }),
            { status: 400 }
        );
    }
    if (await isAlreadyRegisted(email)) {
        return new Response(
            JSON.stringify({
                type: "info",
                message: "You're already registered"
            }), { status: 409 }
        )
    }
    // Do something with the data, then return a success response
    await db.insert(NewsLetter).values({ email: email.toString(), appSubsribed: "flexilla" });
    return new Response(
        JSON.stringify({
            type: "success",
            message: "You've been added to our newsletter."
        }),
        { status: 200 }
    );
};