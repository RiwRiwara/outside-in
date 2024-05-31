"use client";
import { FC, useEffect, useState } from "react";
import {
  Mobile_Louver,
  Mobile_PanelCladding,
  Mobile_Perforated,
  Mobile_Innovative_Adative,
} from "@/components/services/mobile";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Loading from "@/components/loading";
import Layout from "@/layout";

interface ServiceTypeProps {
  params: {
    type: string;
    lang: Locale;
  };
}

const ServiceTypePage: FC<ServiceTypeProps> = ({ params }) => {
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
      <div className="2xl:hidden xl:hidden lg:hidden block">
        {params?.type === "louver" && (
          <Mobile_Louver page={page} lang={params.lang} />
        )}
        {params?.type === "panel_cladding" && (
          <Mobile_PanelCladding page={page} lang={params.lang} />
        )}
        {params?.type === "perforated" && (
          <Mobile_Perforated page={page} lang={params.lang} />
        )}
        {params?.type === "innovative_adative" && (
          <Mobile_Innovative_Adative page={page} lang={params.lang} />
        )}
      </div>
    </Layout>
  );
};

export default ServiceTypePage;
