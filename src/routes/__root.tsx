import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import "@fontsource/cairo/400.css";
import "@fontsource/cairo/600.css";
import "@fontsource/cairo/700.css";
import "@fontsource/cairo/800.css";
import "@fontsource/tajawal/400.css";
import "@fontsource/tajawal/500.css";
import "@fontsource/tajawal/700.css";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "google-site-verification",
        content: "Zr8auoU9DrYnlz6xYt-UYBsaSM-udHrDnZ8qSBv_loQ",
      },
      {
        title:
          "سفلتة مداخل الفلل والمنازل بالرياض | سفلتة مواقف وأحواش | نخبة الأسفلت",
      },

      {
        name: "description",
        content:
          "متخصصون في سفلتة مداخل الفلل، مداخل المنازل، المواقف، الأحواش، والاستراحات في مدينة الرياض. تنفيذ سريع وجودة عالية وأسعار مناسبة مع معاينة مجانية.",
      },

      {
        name: "keywords",
        content:
          "سفلتة الرياض, سفلتة مداخل فلل بالرياض, سفلتة مداخل منازل, سفلتة مواقف, سفلتة أحواش, سفلتة استراحات, ترميم أسفلت, مقاول سفلتة الرياض, أسفلت الرياض",
      },

      { name: "author", content: "نخبة الأسفلت" },

      {
        property: "og:title",
        content:
          "سفلتة مداخل الفلل والمواقف بالرياض | نخبة الأسفلت",
      },

      {
        property: "og:description",
        content:
          "نوفر خدمات سفلتة مداخل الفلل، المواقف، الأحواش والاستراحات في الرياض بجودة عالية وأسعار منافسة.",
      },

      {
        property: "og:type",
        content: "website",
      },

      {
        name: "twitter:card",
        content: "summary_large_image",
      },

      {
        name: "twitter:title",
        content:
          "سفلتة مداخل الفلل والمواقف بالرياض | نخبة الأسفلت",
      },

      {
        name: "twitter:description",
        content:
          "أفضل خدمات سفلتة المداخل والمواقف والأحواش في الرياض مع سرعة في التنفيذ وجودة مضمونة.",
      },

      {
        property: "og:image",
        content: "/logo.png",
      },

      {
        name: "twitter:image",
        content: "/logo.png",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",

          name: "نخبة الأسفلت",

          image: "https://nokhbat-alasphalt.vercel.app/logo.png",

          url: "https://nokhbat-alasphalt.vercel.app",

          telephone: "+966597522413",

          address: {
            "@type": "PostalAddress",
            addressLocality: "الرياض",
            addressCountry: "SA",
          },

          areaServed: "الرياض",

          description:
            "متخصصون في سفلتة مداخل الفلل، المواقف، الأحواش، والاستراحات في مدينة الرياض.",

          priceRange: "$$",

          openingHours: "Sa-Th 08:00-18:00",
        }),
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ar-SA" dir="rtl">      <head>
      <HeadContent />
    </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
