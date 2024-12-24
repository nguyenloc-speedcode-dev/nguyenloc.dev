import { NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";

export async function middleware(request: NextRequest) {
  const defaultLocale = request.headers.get("x-your-custom-locale") || "en";

  const handleI18nRouting = createIntlMiddleware({
    locales: ["en", "vi"],
    defaultLocale: "en",
    localePrefix: "never",
  });

  const i18nResponse = handleI18nRouting(request);

  i18nResponse.headers.set("x-your-custom-locale", defaultLocale);

  return i18nResponse || NextResponse.next();
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
