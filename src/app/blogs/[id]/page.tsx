import SectionTitle from "@/components/shared/SectionTitle";
import { getBlogById } from "@/services/blog";

export default async function BlogDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const { data: blog } = await getBlogById(id);

  return (
    <div className="lg:max-w-screen-2xl p-4 mx-auto ">
      <SectionTitle title="Blog Details" />
      {/* <BlogDetails blog={blog} /> */}
    </div>
  );
}
