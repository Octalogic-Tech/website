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
    <section className="mx-auto flex min-h-[150vh] max-w-[90%] flex-col items-center justify-center gap-20 px-4 py-8 md:px-8 md:py-12">
      <div className="flex w-full flex-col items-center justify-center gap-6">
        <Typography variant="H2Medium64" className="text-center uppercase text-[#0A3D62]">
          {data?.title}
        </Typography>
        <Typography
          variant="BodyMMedium16"
          className="w-full text-center text-[#737373] md:max-w-[70%]"
        >
          {data?.description}
        </Typography>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6 md:flex-row">
          {data?.posts.map((post, index) => (
            <Card
              key={index}
              className="flex flex-col gap-3 rounded-2xl border border-[#E5E5E5] p-2"
            >
              <div className="h-[30vh] w-full">
                <img
                  src={post?.image.url}
                  alt={post?.image.alt}
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>

              <div className="flex flex-col gap-4 p-4">
                <Typography variant="CaptionMSemiBold12" className="text-[#A3A3A3]">
                  {post?.date}
                </Typography>

                <Typography variant="H5SemiBold32" className="uppercase">
                  {post?.title}
                </Typography>

                <Typography variant="CaptionMMedium14" className="text-[#A3A3A3]">
                  {post?.description}
                </Typography>

                <div className="flex flex-wrap gap-2">
                  {post?.tags?.map((tag: string, tagIndex: number) => (
                    <span
                      key={tagIndex}
                      className="rounded-[4px] border border-[#0284C7] bg-[#F0F9FF] px-3 py-1"
                    >
                      <Typography variant="CaptionMMedium14" className="uppercase text-[#0284C7]">
                        {tag}
                      </Typography>
                    </span>
                  ))}
                </div>
                <div>
                  <Button variant="outline" className="mt-2 w-full rounded-3xl !py-6" asChild>
                    <a href={post?.button.buttonUrl}>
                      <Typography variant="H6SemiBold24" className="uppercase text-[#0A3D62]">
                        {post?.button.buttonLabel}
                      </Typography>
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="primary" className="w-full rounded-full p-8 md:w-auto">
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
