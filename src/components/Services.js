import React from "react";

export default function Services() {
  return (
    <div id="service" className="px-3 container mx-auto">
      <div className="text-center">
        <h1 className="text-xl font-semibold lg:text-3xl py-2 lg:py-7 headline">
          SERVICES
        </h1>
        <h2 className="text-3xl lg:max-w-3xl lg:mx-auto lg:text-5xl font-bold px-2">
          Design that solves problems, one product at a time.
        </h2>
      </div>
      <div className="my-14 lg:flex items-end justify-center  lg:gap-14">
        <div className="mb-14">
          <img className="my-4" src="/assets/icon1.svg" alt="icon" />
          <h1 className="text-lg lg:text-xl font-semibold">
            What i can do for you
          </h1>
          <p className="mb-6 mt-2 lg:text-lg">
            faster, better products that your users love. Here's all the
            services provides
          </p>
          <div className="px-4">
            <ul className="list-disc flex lg:text-lg flex-col gap-3">
              <li className="font-semibold ">Front-end Development</li>
              <li className="font-semibold">Web3 Development</li>
              <li className="font-semibold">Backend Development</li>
            </ul>
          </div>
        </div>
        <div className="mb-14 ">
          <img className="my-4" src="/assets/icon2.svg" alt="icon" />
          <h1 className="text-lg lg:text-xl font-semibold">
            Application i'm fluent with
          </h1>
          <p className="mb-6 mt-2 lg:text-lg">
            Every developer needs the right tools to do the perfect job.
            Thankfully, I'm multilingual.
          </p>
          <div className="px-4">
            <ul className="list-disc flex  lg:text-lg flex-col gap-3">
              <li className="font-semibold ">Nextjs</li>
              <li className="font-semibold">Nodejs</li>
              <li className="font-semibold">React</li>
            </ul>
          </div>
        </div>{" "}
        <div className="mb-14">
          <img className="my-4" src="/assets/icon3.svg" alt="icon" />
          <h1 className="text-lg lg:text-xl font-semibold">
            What you can expect
          </h1>
          <p className="mb-6 mt-2 lg:text-lg">
            I develop products that are more than pretty. I make them shippable
            and usable.
          </p>
          <div className="px-4">
            <ul className="list-disc lg:text-lg flex flex-col gap-3">
              <li className="font-semibold ">Clean and functional</li>
              <li className="font-semibold">Device and user friendly</li>
              <li className="font-semibold">Efficient and maintainable</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
