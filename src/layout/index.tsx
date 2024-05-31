import { Topbar } from "@/components/topbar";
import { Locale } from "@/i18n.config";
import { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
  params: { lang: Locale };
}

const Layout: FC<LayoutProps> = ({ children, params }) => {
  return (
    <>
      <Topbar lang={params.lang} />
      <>{children}</>
    </>
  );
};

export default Layout;