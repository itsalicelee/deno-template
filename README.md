# deno-template

- This is a repository for sample [Deno](https://deno.land/) app deployed on Zeabur.
- In this repository, there are two examples:
    - For [Fresh framework](https://fresh.deno.dev/), please refer to  `./fresh-demo`
    - For [Typescript](https://www.typescriptlang.org/), please refer to `./typescript-demo`

### `fresh-demo`

- Follow the commands to bootstrap your Fresh project:

``` shell
deno run -A -r https://fresh.deno.dev my-project
cd my-project
deno task start
```

- In `./fresh-demo/main.ts`, add `port: Deno.env.get("PORT")` to the `start` function and listen to the custom port given the `.env` file

```typescript
start(manifest, { plugins: [twindPlugin(twindConfig)], port: Deno.env.get("PORT")}, );
```

- To run locally, copy `.env.defaults` to the new file `.env`, and assign the port that you would like to run your web application.
- Don't add `fresh.gen.ts` to your `.gitignore` file.

### `typescript-demo`

- Use `Deno.env.get("PORT")` in your serving function.

```typescript
import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

function handler(_req: Request): Response {
  return new Response("Hello World!");
}

serve(handler, { port: Deno.env.get("PORT") });
```

- Create a file `deno.json` and add the starting command.

```json
{
  "tasks": {
    "start": "deno run --allow-net --allow-env --allow-read main.ts"
  }
}

```
- To run locally, copy `.env.defaults` to the new file `.env`, and assign the port that you would like to run your web application.
