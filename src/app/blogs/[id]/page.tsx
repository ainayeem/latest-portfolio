import SectionTitle from "@/components/shared/SectionTitle";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getBlogById } from "@/services/blog";
import { TBlog } from "@/types/blog.type";
import { Calendar, Tag } from "lucide-react";
import Image from "next/image";

export default async function BlogDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const { data: blog } = (await getBlogById(id)) as { data: TBlog };

  return (
    <div className="lg:max-w-screen-2xl p-4 mx-auto pt-20">
      <SectionTitle title="Blog Details" />

      <div>
        {/* Blog Category */}
        <div className="mb-4">
          <Badge className=" bg-indigo-900/50 text-indigo-300 px-3 py-1 text-sm">
            <Tag className="w-4 h-4 mr-1" />
            {blog?.category}
          </Badge>
        </div>

        {/* Blog Title */}
        <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">{blog?.title}</h1>

        {/* Author and Date */}
        <div className="flex flex-wrap items-center gap-6 mb-10 text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            {/* {blog?.createdBy?.profileImage && (
                <Image
                  src={blog.createdBy.profileImage || "/placeholder.svg"}
                  alt={blog.createdBy.name}
                  width={40}
                  height={40}
                  className="rounded-full mr-3 border-2 border-indigo-200 dark:border-indigo-800"
                />
              )} */}
            <div>
              <p className="font-medium text-white">{blog?.authorName}</p>
              <div className="flex items-center text-sm text-white">
                <Calendar className="w-4 h-4 mr-1 text-indigo-500" />
                {new Date(blog?.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
          </div>
        </div>

        <Card className="overflow-hidden border-0 shadow-xl rounded-xl bg-custom-black-100">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
            <Image src={blog?.thumbnail || "/placeholder.svg"} alt={blog?.title} fill className="object-cover rounded-md" priority />
          </div>
        </Card>

        {blog?.tags && blog?.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-4 mt-6 mb-10 text-gray-600 dark:text-gray-400">
            {blog?.tags.map((tag: string, index: number) => (
              <Badge key={index} className=" text-indigo-300 bg-gray-900/80 text-sm border-indigo-800/50 px-3 py-1">
                <Tag className="w-4 h-4 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <Card className="border-0 backdrop-blur-sm bg-custom-black-100">
          <h1>{blog?.introduction}</h1>
          <CardContent className="py-6 md:py-10 px-0">
            <div className="prose prose-lg prose-indigo dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: blog?.mainContent }} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
