import { FC } from "react";
import Image from "next/image";
import { blogLists } from "@/utils/blogData";
import Layout from "@/layout";
import { Locale } from "@/i18n.config";

interface BlogProps {
  params: {
    id: number;
    lang: Locale;
  };
}

const BlogIndex: FC<BlogProps> = ({ params }) => {
  const blogData = blogLists[params?.id];
  return (
    <Layout params={params}>
      <div className="py-36 2xl:px-10 xl:px-10 lg:px-10 px-5 2xl:w-[90%] xl:w-[90%] lg:w-[90%] w-[98%] min-h-[100dvh] h-auto m-auto">
        <h1 className="2xl:text-[40px] xl:text-[40px] lg:text-[40px] text-[30px] font-[700]">
          {blogData.title}
        </h1>
        <div className="2xl:w-[80%] xl:w-[80%] lg:w-[80%] w-[100%] m-auto mt-8">
          <Image
            className="w-full h-full object-cover"
            src={blogData.image}
            width={800}
            height={800}
            alt="blogImage"
          />
        </div>
        <div className="mt-10">
          <p className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] text-[16px] font-[500]">
            {blogData.description}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default BlogIndex;
