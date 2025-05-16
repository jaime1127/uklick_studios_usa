import { CheckCircleIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Basic",
    id: "tier-basic",
    price: { session: "$40" },
    description: "Everything necessary to get started.",
    time: "45 minutes session",
    features: [
      "10 edited pictures",
      "Soft copy of all raw photos",
      "1 4R printed picture",
      "1 backdrop",
      "MAX of 3 pets FREE",
    ],
  },
  {
    name: "Classic",
    id: "tier-classic",
    price: { session: "$60" },
    description: "Everything in Basic, plus additional features.",
    time: "65 minutes session",
    features: [
      "15 edited pictures",
      "Soft copy of all raw photos",
      "2 4R printed picture",
      "2 backdrop",
      "MAX of 3 pets FREE",
    ],
  },
  {
    name: "Premium",
    id: "tier-premium",
    price: { session: "$90" },
    description: "Our most popular plan, with all the features.",
    time: "90 minutes session",
    features: [
      "25 edited pictures",
      "Soft copy of all raw photos",
      "5 4R printed picture",
      "3 backdrop",
      "MAX of 3 pets FREE",
    ],
  },
  {
    name: "Add-ons",
    id: "tier-addons",
    price: { session: "" },
    description: "Everything in Basic, plus additional features.",
    time: "",
    features: [
      "Addtional per person - $10 each",
      "Additional 10 minutes - $10 ",
      "Addtional backdrop - $10 each",
      "Addtional pet - $5 each",
      "Edited pictures - $5 each",
      "4R printed picture - $5 each",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="bg-white p-9">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Pricing</h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl sm:text-balance">
            Pricing that grows with you
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-pretty text-gray-600 sm:text-center sm:text-xl/8">
          Choose an affordable plan that’s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
        <div className="mt-20 flow-root">
          <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-4 lg:divide-x lg:divide-y-0 xl:-mx-4">
            {tiers.map((tier) => (
              <div key={tier.id} className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                <h3
                  id={tier.id}
                  className="text-base/7 font-semibold text-gray-900"
                >
                  {tier.name}
                </h3>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-5xl font-semibold tracking-tight text-gray-900">
                    {tier.price.session}
                  </span>
                </p>
                <p className="mt-3 text-sm/6 text-gray-500">{tier.time}</p>
                <p className="mt-10 text-sm/6 font-semibold text-gray-900">
                  {tier.description}
                </p>
                <ul
                  role="list"
                  className="mt-6 space-y-3 text-sm/6 text-gray-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckCircleIcon
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-indigo-600"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
