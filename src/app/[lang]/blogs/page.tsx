import { FC } from "react";

import {
  Desktop_BlogSectionFirst,
  Desktop_BlogSectionSecond,
} from "@/sections/Blogs/Desktop";

import {
  Mobile_BlogSectionFirst,
  Mobile_BlogSectionSecond,
} from "@/sections/Blogs/Mobile";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

import { Mobile_Footer } from "@/sections/Footer/Mobile";
import ContactForm from "@/sections/ContactForm";
import Layout from "@/layout";

interface BlogProps {
  params: { lang: Locale };
}

const Blogs: FC<BlogProps> = async ({ params }) => {
  const { page } = await getDictionary(params.lang);
  return (
    <Layout params={params}>
      <div>
        <div className="2xl:block xl:block lg:block hidden">
          <Desktop_BlogSectionFirst />
        </div>
        <div className="2xl:hidden xl:hidden lg:hidden block">
          <Mobile_BlogSectionFirst page={page} lang={params.lang} />
        </div>
      </div>
      <div>
        <div className="2xl:block xl:block lg:block hidden">
          <Desktop_BlogSectionSecond page={page} lang={params.lang} />
        </div>
        <div className="2xl:hidden xl:hidden lg:hidden block">
          <Mobile_BlogSectionSecond />
        </div>
      </div>
      <div>
        <div className="2xl:hidden xl:hidden lg:hidden block">
          <Mobile_Footer page={page} lang={params.lang} />
        </div>
      </div>
      <div>
        <div className="2xl:block xl:block lg:block hidden">
          <ContactForm page={page} lang={params.lang} />
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;
