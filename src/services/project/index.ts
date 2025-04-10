/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const getAllProjects = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
      next: {
        tags: ["projects"], // Add cache tag
        revalidate: 50, // Revalidate every 10 seconds
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getFeaturedProject = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects/featured-project`, {
      next: {
        tags: ["projects"], // Add cache tag
        revalidate: 50, // Revalidate every 10 seconds );
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getProjectById = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects/${id}`, {
      next: {
        tags: ["projects"], // Add cache tag
        revalidate: 50, // Revalidate every 10 seconds
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
