import { FC } from "react";

import {
  Desktop_ServiceSectionFirst,
  Desktop_ServiceSectionSecond,
  Desktop_ServiceSectionFourth,
  Desktop_ServiceSectionFifth,
  Desktop_ServiceSectionSixth,
  Desktop_ServiceSectionSeventh,
} from "@/sections/Services/Desktop";
import ContactForm from "@/sections/ContactForm";
import { Mobile_ServiceSectionFirst } from "@/sections/Services/Mobile";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Layout from "@/layout";

interface ServicesProps {
  params: { lang: Locale };
}

const Services: FC<ServicesProps> = async ({ params }) => {
  const { page } = await getDictionary(params.lang);
  return (
    <Layout params={params}>
      <div>
        <div className="2xl:block xl:block lg:block hidden">
          <Desktop_ServiceSectionFirst page={page} lang={params.lang} />
        </div>
        <div className="2xl:hidden xl:hidden lg:hidden block">
          <Mobile_ServiceSectionFirst page={page} lang={params.lang} />
        </div>
      </div>
      <div>
        <div className="2xl:block xl:block lg:block hidden">
          <Desktop_ServiceSectionSecond page={page} lang={params.lang} />
        </div>
        <div className="2xl:hidden xl:hidden lg:hidden block"></div>
      </div>
      <div>
        <div className="2xl:block xl:block lg:block hidden">
          <ContactForm page={page} lang={params.lang} />
        </div>
        <div className="2xl:hidden xl:hidden lg:hidden block"></div>
      </div>
      <div>
        <div className="2xl:block xl:block lg:block hidden">
          <Desktop_ServiceSectionFourth page={page} lang={params.lang} />
        </div>
        <div className="2xl:hidden xl:hidden lg:hidden block"></div>
      </div>
      <div>
        <div className="2xl:block xl:block lg:block hidden">
          <Desktop_ServiceSectionFifth page={page} lang={params.lang} />
        </div>
        <div className="2xl:hidden xl:hidden lg:hidden block"></div>
      </div>
      <div>
        <div className="2xl:block xl:block lg:block hidden">
          <Desktop_ServiceSectionSixth page={page} lang={params.lang} />
        </div>
        <div className="2xl:hidden xl:hidden lg:hidden block"></div>
      </div>
      <div>
        <div className="2xl:block xl:block lg:block hidden">
          <Desktop_ServiceSectionSeventh page={page} lang={params.lang} />
        </div>
        <div className="2xl:hidden xl:hidden lg:hidden block"></div>
      </div>
      <div>
        <div className="2xl:block xl:block lg:block hidden">
          <ContactForm page={page} lang={params.lang} />
        </div>
      </div>
    </Layout>
  );
};

export default Services;
