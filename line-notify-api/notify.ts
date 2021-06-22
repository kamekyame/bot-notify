// https://notify-bot.line.me/doc/ja/

import { getUrl } from "./util.ts";
import { bearerFetch } from "./deps.ts";

interface NotifyParam {
  message: string;
} // TODO: other parameter

export async function postNotify(bearerToken: string, param: NotifyParam) {
  const url = getUrl("api/notify");
  const formData = new FormData();
  for (const [key, value] of Object.entries(param)) {
    formData.append(key, value);
  }
  //console.log(url, formData);

  const res = await bearerFetch(url, bearerToken, {
    method: "POST",
    body: formData,
  });
  return await res.json();
}
