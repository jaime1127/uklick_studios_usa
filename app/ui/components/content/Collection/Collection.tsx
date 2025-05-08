const callouts = [
    {
      name: "Christmas Collection",
      description: "Capture the festive spirit with twinkling lights and cozy holiday setups.",
      imageSrc:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-01.jpg",
      imageAlt:
        "A festive Christmas setup with a decorated tree, gifts, and warm lighting.",
      href: "#",
    },
    {
      name: "Fall Collection",
      description: "Embrace the warmth of autumn with pumpkins, leaves, and golden tones.",
      imageSrc:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-02.jpg",
      imageAlt:
        "A cozy fall setup with pumpkins, leaves, and warm earthy tones.",
      href: "#",
    },
    {
      name: "Baking Collection",
      description: "Celebrate the joy of baking with rustic and charming kitchen scenes.",
      imageSrc:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-03.jpg",
      imageAlt: "A collection of baking essentials with a rustic kitchen setup.",
      href: "#",
    },
  ];

export default function Collection() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Holiday Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <img
                  alt={callout.imageAlt}
                  src={callout.imageSrc}
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                />
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
