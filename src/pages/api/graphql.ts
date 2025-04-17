import type { APIRoute } from "astro";

export const prerender = false;

export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
};

export const POST: APIRoute = async ({ request }) => {
  const { DATOCMS_ENDPOINT, DATOCMS_API_TOKEN } = import.meta.env;

  try {
    const body = await request.json();

    const datoCMSResponse = await fetch(DATOCMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${DATOCMS_API_TOKEN}`,
        "X-Include-Drafts": "true",
      },
      body: JSON.stringify({
        query: body.query,
        variables: body.variables || {},
      }),
    });

    const datoCMSData = await datoCMSResponse.json();

    if (datoCMSData.data?.[0]?.type === "api_error") {
      throw new Error(`DatoCMS API Error: ${datoCMSData.data[0].attributes.code}`);
    }

    return new Response(JSON.stringify(datoCMSData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        errors: [{ message: error instanceof Error ? error.message : String(error) }],
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      },
    );
  }
};
