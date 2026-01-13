import { register, init } from "svelte-i18n";

register("ko", () => import("$lib/languages/ko.json"));

init({
  fallbackLocale: "ko",
  initialLocale: "ko",
});
