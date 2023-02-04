import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

function handler(_req: Request): Response {
  return new Response("Hello, this is a Deno (https://deno.land/) web app deployed on Zeabur (https://zeabur.com)");
}

serve(handler, { port: Deno.env.get("PORT") });

