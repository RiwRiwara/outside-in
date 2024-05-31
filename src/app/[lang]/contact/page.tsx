"use client";
import { FC, useState, useEffect } from "react";
import {
  Desktop_ContactSectionFirst,
  Desktop_ContactSectionSecond,
} from "@/sections/Contact/Desktop";
import {
  Mobile_ContactSectionFirst,
  Mobile_ContactSectionSecond,
} from "@/sections/Contact/Mobile";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Loading from "@/components/loading";
import Layout from "@/layout";

interface ContactProps {
  params: { lang: Locale };
}

const Contact: FC<ContactProps> = ({ params }) => {
  const [page, setPage]: any = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getDictionary(params.lang);
      setPage(result.page);
    };

    fetchData();
  }, [params.lang]);

  if (!page) {
    return <Loading />;
  }
  return (
    <Layout params={params}>
      <div>
        <div className="2xl:block xl:block lg:block hidden">
          <Desktop_ContactSectionFirst page={page} lang={params.lang} />
        </div>
        <div className="2xl:hidden xl:hidden lg:hidden block">
          <Mobile_ContactSectionFirst page={page} lang={params.lang} />
        </div>
      </div>
      <div>
        <div className="2xl:block xl:block lg:block hidden">
          <Desktop_ContactSectionSecond page={page} lang={params.lang} />
        </div>
        <div className="2xl:hidden xl:hidden lg:hidden block">
          <Mobile_ContactSectionSecond page={page} lang={params.lang} />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
