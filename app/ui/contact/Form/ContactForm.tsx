"use client";

import { z } from "zod";
import { useState } from "react";

import emailjs from "@emailjs/browser";
import Alert from "../../components/core/Alert/Alert";

// Define the form schema for validation
const FormSchema = z.object({
  firstName: z.string().min(1, "Please enter a first name."),
  lastName: z.string().min(1, "Please enter a last name."),
  email: z.string().email("Invalid email address."),
  phoneNumber: z.string().min(1, "Please enter a phone number."),
  message: z.string().min(1, "Please enter a message"),
});

export default function ContactForm() {
  const [alertDisplay, setAlertDisplay] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Extract form data
    const formData = new FormData(event.currentTarget);

    // Validate form data using Zod
    const validationResult = FormSchema.safeParse({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phoneNumber: formData.get("phoneNumber"),
      message: formData.get("message"),
    });

    if (!validationResult.success) {
      // Map validation errors to a state object
      const fieldErrors = validationResult.error.flatten()
        .fieldErrors as Record<string, string>;
      setErrors(fieldErrors);
      return;
    }

    // If validation passes, clear errors
    setErrors({});

    try {
      await emailjs.sendForm(
        "uklick-studios",
        "template_7vn6gee",
        event.currentTarget,
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY || ""
      );
      setAlertDisplay(true);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <form
      method="POST"
      className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48"
      onSubmit={sendEmail}
    >
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold text-gray-900"
            >
              First name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold text-gray-900"
            >
              Last name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
            )}
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-900"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="sm:col-span-2">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-semibold text-gray-900"
            >
              Phone number
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              className="mblock w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            />
            {errors.phoneNumber && (
              <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>
            )}
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                defaultValue={""}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex justify-end gap-4">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500  focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send message
          </button>
          {alertDisplay && <Alert />}
        </div>
      </div>
    </form>
  );
}
