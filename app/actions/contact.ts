"use server";

import { IFormData } from "../components/molecules/ContactForm";

export const contact = async (data: IFormData) => {
  const accessKey = process.env.FORM_ACCESS_KEY;

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...data, access_key: accessKey }),
  });

  if (!response.ok) {
    return { success: false };
  }

  const responseData = await response.json();

  return { success: true, data: responseData };
};
