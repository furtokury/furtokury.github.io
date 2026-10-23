import { register, init } from "svelte-i18n";

register("ko", () => import("$lib/languages/ko.json"));
register("ja", () => import("$lib/languages/ja.json"));
register("en", () => import("$lib/languages/en.json"));
register("za", () => import("$lib/languages/za.json"));

init({
  fallbackLocale: "ko",
  initialLocale: "ko",
});
