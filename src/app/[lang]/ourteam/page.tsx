"use client";
import { FC, useEffect, useState } from "react";
import { Locale } from "@/i18n.config";
import {
  Desktop_OurteamSectionFirst,
  Desktop_OurteamSectionSecond,
  Desktop_OurteamSectionThird,
  Desktop_OurteamSectionFourth,
} from "@/sections/Ourteam/Desktop";

import {
  Mobile_OurteamSectionFirst,
  Mobile_OurteamSectionSecond,
  Mobile_OurteamSectionThird,
} from "@/sections/Ourteam/Mobile";

import { Mobile_Footer } from "@/sections/Footer/Mobile";
import { getDictionary } from "@/lib/dictionary";
import Loading from "@/components/loading";
import ContactForm from "@/sections/ContactForm";
import Layout from "@/layout";

interface OurteamProps {
  params: { lang: Locale };
}

const OurTeam: FC<OurteamProps> = ({ params }) => {
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
          <Desktop_OurteamSectionFirst page={page} lang={params.lang} />
        </div>
        <div className="2xl:hidden xl:hidden lg:hidden block">
          <Mobile_OurteamSectionFirst page={page} lang={params.lang} />
        </div>
      </div>
      <div>
        <div className="2xl:block xl:block lg:block hidden">
          <Desktop_OurteamSectionSecond page={page} lang={params.lang} />
        </div>
        <div className="2xl:hidden xl:hidden lg:hidden block">
          <Mobile_OurteamSectionSecond page={page} lang={params.lang} />
        </div>
      </div>
      <div>
        <div className="2xl:block xl:block lg:block hidden">
          <Desktop_OurteamSectionThird page={page} lang={params.lang} />
        </div>
        <div className="2xl:hidden xl:hidden lg:hidden block">
          <Mobile_OurteamSectionThird page={page} lang={params.lang} />
        </div>
      </div>
      <div>
        <div className="2xl:block xl:block lg:block hidden">
          <Desktop_OurteamSectionFourth page={page} lang={params.lang} />
        </div>
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

export default OurTeam;
