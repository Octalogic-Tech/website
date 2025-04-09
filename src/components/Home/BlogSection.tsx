import React from "react";
import { Typography } from "../common/template";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import type { BlogSectionData } from "@/types/home";

interface BlogSectionProps {
  data?: BlogSectionData;
}

const BlogSection: React.FC<BlogSectionProps> = ({ data }) => {
  return (
    <section className="flex w-full flex-col gap-20 px-4 py-16 md:px-24 md:py-36">
      <div className="flex w-full flex-col items-center justify-center gap-[24px]">
        <Typography variant="H2Medium64" className="text-center uppercase text-[#0A3D62]">
          {data?.title}
        </Typography>
        <Typography
          variant="BodyMMedium16"
          className="w-full max-w-[860px] text-center text-[#737373]"
        >
          {data?.description}
        </Typography>
      </div>

      <div className="flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[24px] md:flex-row">
          {data?.posts.map((post, index) => (
            <Card
              key={index}
              className="flex flex-col gap-[12px] rounded-[24px] border border-[#E5E5E5] p-[8px] md:w-[440px]"
            >
              <div className="h-[240px] w-full">
                <img
                  src={post?.image}
                  alt={post?.title}
                  className="h-full w-full rounded-[16px] object-cover"
                />
              </div>

              <div className="flex flex-col gap-[16px] p-[16px]">
                <Typography variant="CaptionMSemiBold12" className="text-[#A3A3A3]">
                  {post?.date}
                </Typography>

                <Typography variant="H5SemiBold32" className="uppercase">
                  {post?.title}
                </Typography>

                <Typography variant="CaptionMMedium14" className="text-[#A3A3A3]">
                  {post?.description}
                </Typography>

                <div className="flex flex-wrap gap-[8px]">
                  {post?.tags?.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-[4px] border border-[#0284C7] bg-[#F0F9FF] px-[12px] py-[4px]"
                    >
                      <Typography variant="CaptionMMedium14" className="uppercase text-[#0284C7]">
                        {tag}
                      </Typography>
                    </span>
                  ))}
                </div>
                <div>
                  <Button variant="outline" className="mt-2 w-full rounded-3xl !py-6">
                    <Typography variant="H6SemiBold24" className="uppercase text-[#0A3D62]">
                      {data?.buttons?.readMore}
                    </Typography>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="primary" className="rounded-xl p-8">
            <Typography variant="H6SemiBold24" className="uppercase text-[#0A3D62]">
              {data?.buttons?.viewAll}
            </Typography>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
