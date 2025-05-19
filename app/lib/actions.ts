"use server";

import { z } from "zod";

const FormSchema = z.object({
  firstName: z.string({
    invalid_type_error: "Please enter a first name.",
  }),
  lastName: z.string({
    invalid_type_error: "Please enter a last name.",
  }),
  email: z
    .string({
      invalid_type_error: "Please enter an email address.",
    })
    .email("Invalid email address."),
  phoneNumber: z.number({
    invalid_type_error: "Please enter a phone number.",
  }),
});

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function sendContactEmail(prevState: State, formData: FormData) {
  // Validate form using Zod
  const validatedFields = FormSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phoneNumber: formData.get("phoneNumber"),
  });

  // If form validation fails, return errors early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please correct the errors and try again.",
    };
  }

  // Extract validated data
  const { firstName, lastName, email, phoneNumber } = validatedFields.data;

  try {
    // Send email using EmailJS or another service
    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "uklick-studios",
          template_id: "template_7vn6gee",
          user_id: process.env.EMAIL_JS_PUBLIC_KEY, // Ensure this is set in your .env file
          template_params: {
            firstName,
            lastName,
            email,
            phoneNumber,
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send email.");
    }

    return {
      message: "Your message has been sent successfully!",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      errors: { general: ["Failed to send email. Please try again later."] },
      message: "Failed to send email.",
    };
  }
}
