import { postNotify } from "./line-notify-api/mod.ts";
import { config, parse, pathResolver } from "./deps.ts";
const resolve = pathResolver(import.meta);
const args = parse(Deno.args);

const env = config({
  path: resolve("./.env"),
  safe: true,
  example: resolve("./.env.example"),
});
const bearerToken = env["LINE_BEARERTOKEN"];

const unitName = args["u"];
if (!unitName) throw new Error("invalid unitName");

let message = unitName;
message += "が異常終了しました。";
const res = await postNotify(bearerToken, { message });
console.log("notify", message, res);
