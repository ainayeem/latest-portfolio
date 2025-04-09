import SectionTitle from "@/components/shared/SectionTitle";
import { getAllBlogs } from "@/services/blog";
import { Fragment } from "react";

export default async function BlogsPage() {
  const { data: blogs } = await getAllBlogs();
  return (
    <Fragment>
      <div className="lg:max-w-screen-2xl p-4 mx-auto ">
        <SectionTitle title="Blogs" />
        {/* <Blogs blogs={blogs} /> */}
      </div>
    </Fragment>
  );
}
