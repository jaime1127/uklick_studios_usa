"use client";

import RichText from "../components/content/RichText";
import Image from "next/image";

const team = [
  {
    name: "Jaime Guitron",
    role: "Co-Founder & Photographer",
    imageUrl: "/jaime.jpg",
    bio: "Jaime is a seasoned photographer with experience in capturing stunning visuals. His passion for photography started at a young age, and he has since honed his skills to become a master of his craft.",
  },
  {
    name: "Rizalyn Guitron",
    role: "Co-Founder & Photographer",
    imageUrl: "/riza.jpg",
    bio: "Rizalyn is a talented photographer with a keen eye for detail and composition. With a background in fine arts, she brings a unique artistic flair to her photography.",
  },
];

interface AboutUsProps {
  content?: any;
}

export default function Team({ content = [] }: AboutUsProps) {
  return (
    <div className="my-6">
      <div className="mx-auto max-w-7xl p-9 bg-gray-100">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <RichText content={content} />
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {team.map((person) => (
            <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
              <Image
                src={person?.imageUrl || "/camera.jpg"}
                alt={"Hero Image"}
                width={1200}
                height={1200}
                loading="lazy"
                className="aspect-4/5 lg:w-80 flex-none rounded-2xl object-cover"
              />
              <div className="flex-auto">
                <h3 className="text-lg/8 font-semibold tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base/7 text-indigo-600">{person.role}</p>
                <p className="mt-6 text-base/7 text-gray-600">{person.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
