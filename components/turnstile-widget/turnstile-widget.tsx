import Script from "next/script";
import * as vars from "../../config/vars";

export function TurnstileWidget({ widgetId }: { widgetId: string }) {
  return (
    <>
      <Script id="cf-turnstile-callback">
        {`window.onloadTurnstileCallback = function () {
          window.turnstile.render('#${widgetId}', {
            sitekey: "${vars.turnstileSiteKey}",
          })
        }`}
      </Script>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback"
        async={true}
        defer={true}
      />
    </>
  );
}

export default TurnstileWidget;
