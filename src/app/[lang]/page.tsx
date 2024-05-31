"use client";
import { FC, useState, useEffect } from "react";
import { Locale } from "@/i18n.config";
import {
  Desktop_HomeSectionFirst,
  Desktop_HomeSectionSecond,
  Desktop_HomeSectionThird,
  Desktop_HomeSectionFourth,
} from "@/sections/Home/Desktop";
import ContactForm from "@/sections/ContactForm";
import {
  Mobile_HomeSectionFirst,
  Mobile_HomeSectionSecond,
} from "@/sections/Home/Mobile";

import { Mobile_Footer } from "@/sections/Footer/Mobile";
import { getDictionary } from "@/lib/dictionary";
import Loading from "@/components/loading";
import Layout from "@/layout";

interface HomeProps {
  params: { lang: Locale }; // th | en
}

const Home: FC<HomeProps> = ({ params }) => {
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
          <Desktop_HomeSectionFirst page={page} lang={params.lang} />
        </div>
        <div className="2xl:hidden xl:hidden lg:hidden block">
          <Mobile_HomeSectionFirst page={page} lang={params.lang} />
        </div>
      </div>
      <div>
        <div className="2xl:block xl:block lg:block hidden">
          <Desktop_HomeSectionSecond page={page} lang={params.lang} />
        </div>
        <div className="2xl:hidden xl:hidden lg:hidden block">
          <Mobile_HomeSectionSecond page={page} lang={params.lang} />
        </div>
      </div>
      <div>
        <div className="2xl:block xl:block lg:block hidden">
          <Desktop_HomeSectionThird page={page} lang={params.lang} />
        </div>
        <div className="2xl:hidden xl:hidden lg:hidden block">
          <Mobile_Footer page={page} lang={params.lang} />
        </div>
      </div>
      <div>
        <div className="2xl:block xl:block lg:block hidden">
          <Desktop_HomeSectionFourth page={page} lang={params.lang} />
        </div>
      </div>
      <div className="bg-[#383838]">
        <div className="2xl:block xl:block lg:block hidden">
          {/* <ContactForm page={page} lang={params.lang} /> */}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
