/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const getAllBlogs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs`, {
      next: {
        tags: ["blogs"], // Add cache tag
        revalidate: 50, // Revalidate every 10 seconds);
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getBlogById = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs/${id}`, {
      next: {
        tags: ["blogs"], // Add cache tag
        revalidate: 50, // Revalidate every 10 seconds);
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
