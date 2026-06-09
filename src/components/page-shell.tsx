import type { ReactNode } from "react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </>
  );
}
