import { Locale } from "@/i18n.config";
import ContactForm from "@/sections/ContactForm";
import { FC } from "react";

interface DesktopContactProps {
  page: any;
  lang: Locale;
}

export const Desktop_ContactSectionFirst: FC<DesktopContactProps> = ({ page, lang }) => {
  return (
    <section className="relative w-full min-h-screen h-auto">
      <div className="desktop-serviceSectionFirst-bg"></div>
    </section>
  );
};

export const Desktop_ContactSectionSecond: FC<DesktopContactProps> = ({
  page,
  lang,
}) => {
  return <ContactForm page={page} lang={lang} />;
};
