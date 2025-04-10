import BlogCard from "@/components/BlogCard";
import SectionTitle from "@/components/shared/SectionTitle";
import { getAllBlogs } from "@/services/blog";
import { TBlog } from "@/types/blog.type";

export default async function BlogsPage() {
  const { data: blogs } = await getAllBlogs();
  return (
    <div className="lg:max-w-screen-2xl p-4 mx-auto pt-20">
      <SectionTitle className="mb-10" title="Blogs" />
      {/* <Projects projects={projects} /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-30">
        {blogs?.map((blog: TBlog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
