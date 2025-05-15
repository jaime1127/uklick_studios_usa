"use client";

import { Hero } from "../components/content";
import Pricing from "../components/content/Pricing/Pricing";
import Faq from "../components/content/Faq/Faq";

const team = [
  {
    name: "Jaime Guitron",
    role: "Co-Founder & Photographer",
    imageUrl:
      "",
  },
  {
    name: "Rizalyn Guitron",
    role: "Co-Founder & Photographer",
    imageUrl:
      "",
  },
];

export default function Example() {
  return (
    <main className="relative">
      <Hero
        blog="Not just a studio"
        heading="Experience Photography Freedom"
        description="At our studio, you can take your own pictures using a remote clicker and professional gear, or let us capture the moments for you. Rent our space by the minute and create memories your way."
        video={false}
      />

      {/* Content section */}
      <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 p-8">
        <div className="mx-auto  lg:mx-0 lg:max-w-none">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Our Mission
          </h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full  lg:flex-auto">
              <p className="text-xl/8 text-gray-600">
                At our studio, we believe in empowering you to create your own
                memories in a professional setting. Whether you're celebrating a
                milestone, capturing family moments, or simply exploring your
                creativity, we provide the tools and space to make it happen.
              </p>
              <p className="mt-6 text-xl/8 text-gray-600">
                Our unique offering allows you to take control of your
                photography experience. With a remote clicker and a
                professional-grade setup, you can take your own pictures at your
                own pace. It's like having your own personal photobooth, but
                with the quality and precision of a professional studio.
              </p>
              <p className="mt-6 text-xl/8 text-gray-600">
                If you'd rather leave the photography to us, our skilled team is
                here to capture the perfect shots for you. Whether it's a family
                portrait, a professional headshot, or a creative concept, we
                ensure every moment is beautifully preserved.
              </p>
              <p className="mt-6 text-xl/8 text-gray-600">
                We charge by the minute, making it easy and affordable to rent
                our space and equipment. This flexibility allows you to focus on
                what matters most—creating memories that last a lifetime.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Pricing />
      <Faq />
      {/* Image section */}
      <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          className="aspect-5/2 w-full object-cover xl:rounded-3xl"
        />
      </div>

      {/* Values section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
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

      {/* Team section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Our team
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {team.map((person) => (
            <li key={person.name}>
              <img
                alt=""
                src={person.imageUrl}
                className="mx-auto size-24 rounded-full"
              />
              <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-sm/6 text-gray-600">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
