/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const addContact = async (contactData: any) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    });

    const data = await res.json();

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
