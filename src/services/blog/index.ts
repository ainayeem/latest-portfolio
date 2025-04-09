/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const getAllBlogs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs`);
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getBlogById = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs/${id}`);
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
