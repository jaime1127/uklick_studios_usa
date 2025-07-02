"use client";

import { Hero } from "../components/content";

import Pricing from "./Pricing";
import Faq from "./Faq";
import RichText from "../components/content/RichText";
import Team from "./Team";

interface AboutUsProps {
  content?: any;
}

export default function AboutUs({ content = [] }: AboutUsProps) {
  return (
    <main className="relative">
      <Hero
        blog="Not just a studio"
        heading="Experience Photography Freedom"
        description="At our studio, you can take your own pictures using a remote clicker and professional gear, or let us capture the moments for you. Rent our space by the minute and create memories your way."
        video={false}
      />
      {/* Our misson*/}
      <div className="mx-auto max-w-7xl p-9 bg-white">
        <RichText content={content[0].raw} />
      </div>
      <Team content={content[1].raw} />
      <Pricing />
      <Faq />

      {/* Values section */}
      <div className="mx-auto max-w-7xl p-9 bg-white">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Our Values
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            At our studio, we are guided by principles that ensure every client
            has a memorable and empowering experience. These values shape
            everything we do, from the services we offer to the way we interact
            with our clients.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <dt className="font-semibold text-gray-900">Empower Creativity</dt>
            <dd className="mt-1 text-gray-600">
              We provide the tools and space for you to express yourself freely,
              whether you're taking your own photos or collaborating with our
              team.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-900">
              Professional Excellence
            </dt>
            <dd className="mt-1 text-gray-600">
              From our high-end equipment to our skilled team, we ensure every
              detail meets the highest standards of quality and professionalism.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-900">
              Flexibility and Accessibility
            </dt>
            <dd className="mt-1 text-gray-600">
              Our by-the-minute rental model makes professional photography
              accessible and affordable for everyone.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-900">
              Client-Centered Approach
            </dt>
            <dd className="mt-1 text-gray-600">
              Your vision is our priority. We work closely with you to ensure
              your experience is tailored to your needs and preferences.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-900">Innovation</dt>
            <dd className="mt-1 text-gray-600">
              We embrace new ideas and technologies to provide a modern and
              unique photography experience.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-900">Memories That Last</dt>
            <dd className="mt-1 text-gray-600">
              Our goal is to help you create and preserve moments that you’ll
              cherish for a lifetime.
            </dd>
          </div>
        </dl>
      </div>
    </main>
  );
}
