"use client";
import { Locale } from "@/i18n.config";
import { FC, useEffect, useState } from "react";
import { getDictionary } from "@/lib/dictionary";

interface PolicyProps {
  params: { lang: Locale };
}

const Policy: FC<PolicyProps> = ({ params }) => {
  const [page, setPage]: any = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getDictionary(params.lang);
      setPage(result.page);
    };

    fetchData();
  }, [params.lang, page]);

  return (
    <>
      {page !== undefined && page !== null && (
        <div className="2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[80%] sm:w-[85%] w-[95%] m-auto p-4">
          {Object.keys(page.policy).map((key, index) => (
            <div key={index} className="my-8">
              <h1 className="text-[30px] text-black font-[700] fcsubject_regular">
                {page.policy[key].title}
              </h1>
              <h2 className="text-[16px] text-black font-[500] mt-6 fcsubject_regular" dangerouslySetInnerHTML={{ __html: page.policy[key].description }}>
              </h2>

              {page.policy[key].descriptions && (
                <>
                  {Object.values(page.policy[key].descriptions).map(
                    (item: any, desIdx: number) => (
                      <h2
                        className="text-[16px] text-black font-[500] mt-6 fcsubject_regular"
                        key={desIdx}
                        dangerouslySetInnerHTML={{
                          __html: item,
                        }}
                      ></h2>
                    )
                  )}
                </>
              )}

              {page.policy[key].sub_title && (
                <>
                  {Object.values(page.policy[key].sub_title).map(
                    (subKey: any, subIdx: number) => (
                      <div key={subIdx} className="my-8">
                        <h1 className="text-[18px] text-black font-[700] fcsubject_regular">
                          {subKey.title}
                        </h1>
                        <h2 className="text-[16px] text-black font-[500] mt-6 fcsubject_regular">
                          {subKey.description}
                        </h2>
                      </div>
                    )
                  )}
                </>
              )}

              {page.policy[key].guard && (
                <>
                  {Object.values(page.policy[key].guard).map(
                    (guardKey: any, guardIdx: number) => (
                      <div key={guardIdx} className="my-20">
                        <h1 className="text-[18px] text-black font-[700] fcsubject_regular">
                          {guardKey.title}
                        </h1>
                        {guardKey.descriptions && (
                          <>
                            {Object.values(guardKey.descriptions).map((guardDesKey: any, guardDesIdx: number) => (
                              <h2
                                key={guardDesIdx}
                                className="text-[16px] text-black font-[500] mt-6 fcsubject_regular"
                              >
                                {guardDesKey}
                              </h2>
                            ))}
                          </>
                        )}
                      </div>
                    )
                  )}
                </>
              )}

              {page.policy[key].lists && (
                <ul className="list-disc ml-10 mt-7">
                  {Object.values(page.policy[key].lists).map(
                    (item: any, listIndex) => (
                      <li
                        key={listIndex}
                        className="text-[16px] text-black font-[500] mt-2 fcsubject_regular"
                      >
                        {item}
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Policy;
