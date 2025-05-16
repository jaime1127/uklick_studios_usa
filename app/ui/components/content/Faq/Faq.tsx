import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What is a self-photo studio?",
    answer:
      "Just like other studios, a self-photo studio is professionally equipped and setup. However, there won't be a photographer in the studio with you. You are your own model and photographer. You will be provided with a remote control to capture as many photographs as you want. If you feel awkward or camera shy when a stranger takes your photo, our studio is here for you!",
  },
  {
    question: "Why are the packages so afforable?",
    answer:
      "We want you to capture special moments without breaking the bank. Besides, you took your own pictures, why charge you for your own effort?",
  },
  {
    question: "Will my timer be paused when backdrop is being changed?",
    answer:
      "Yes! Just let us know once ready for the backdrop change and we'll assist.",
  },
  {
    question: "Can I add more than one backdrops?",
    answer:
      "Of course! If multiple backdrops are not included in the package booked, please request to add one has to be done upon booking as this will consume time and might affect next booking.",
  },
  {
    question: "Can I bring my own props?",
    answer:
      "Absolutely! As long as your props will fit our door. If props need setting up, you can use your given 10 mins prep time before your session. Studio timer will start after the 10 mins prep time.",
  },
  {
    question: "Can I change outfits?",
    answer:
      "Of course! You can use our restroom next to our studio room. But please know that timer will not be paused during the change outfit.",
  },
];

export default function Faq() {
  return (
    <div className="bg-gray-500">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Frequently asked questions
          </h2>
          <dl className="mt-16 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure
                key={faq.question}
                as="div"
                className="py-6 first:pt-0 last:pb-0"
              >
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-white">
                    <span className="text-base/7 font-semibold">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon
                        aria-hidden="true"
                        className="size-6 group-data-open:hidden"
                      />
                      <MinusSmallIcon
                        aria-hidden="true"
                        className="size-6 group-not-data-open:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-300">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
