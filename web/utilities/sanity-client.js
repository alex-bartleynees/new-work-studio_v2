import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "snzv7bf5",
  dataset: "production",
  apiVersion: "2023-06-13",
  useCdn: false,
});
