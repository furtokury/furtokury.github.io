import { register, init } from "svelte-i18n";

register("ko", () => import("$lib/languages/ko.json"));
register("ja", () => import("$lib/languages/ja.json"));

init({
  fallbackLocale: "ko",
  initialLocale: "ja",
});
