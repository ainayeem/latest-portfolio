/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const getAllSkills = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/skills`);
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
