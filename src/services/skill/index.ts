/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const getAllSkills = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/skills`, {
      next: {
        tags: ["skills"], // Add cache tag
        revalidate: 50, // Revalidate every 10 seconds
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch skills");
  }
};
