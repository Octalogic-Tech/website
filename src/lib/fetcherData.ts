export interface GraphQLResponse<DataType> {
  data: DataType;
  errors?: {
    message: string;
    locations?: { line: number; column: number }[];
    path?: string[];
  }[];
}

export async function fetchDatoCMS<DataType>(
  query: string,
  variables: Record<string, unknown> = {},
): Promise<DataType> {
  const endpoint = import.meta.env.DATOCMS_ENDPOINT;
  const token = import.meta.env.DATOCMS_API_TOKEN;

  if (!endpoint || !token) {
    throw new Error("Missing DatoCMS environment variables");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = (await response.json()) as GraphQLResponse<DataType>;

  if (json.errors && json.errors.length > 0) {
    // console.error("DatoCMS Errors:", json.errors);
    throw new Error("Failed to fetch data from DatoCMS");
  }

  return json.data;
}
