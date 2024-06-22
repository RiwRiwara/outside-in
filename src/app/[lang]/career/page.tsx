"use client";
import { FC, useState, useEffect } from "react";
import { Locale } from "@/i18n.config";

import { Desktop_CareerSectionFirst } from "@/sections/Career/Desktop";
import { Mobile_CareerSectionFirst } from "@/sections/Career/Mobile";
import { Mobile_Footer } from "@/sections/Footer/Mobile";
import { getDictionary } from "@/lib/dictionary";
import Loading from "@/components/loading";
import ContactForm from "@/sections/ContactForm";
import Layout from "@/layout";

interface CareerProps {
  params: { lang: Locale };
}

const Career: FC<CareerProps> = ({ params }) => {
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
          <Desktop_CareerSectionFirst page={page} lang={params.lang} />
        </div>
        <div className="2xl:hidden xl:hidden lg:hidden block">
          <Mobile_CareerSectionFirst page={page} lang={params.lang} />
        </div>
      </div>
      <div>
        <div className="2xl:hidden xl:hidden lg:hidden block">
          <Mobile_Footer page={page} lang={params.lang} />
        </div>
      </div>
      {/* <div>
        <div className="2xl:block xl:block lg:block hidden">
          <ContactForm page={page} lang={params.lang} />
        </div>
      </div> */}
    </Layout>
  );
};

export default Career;
