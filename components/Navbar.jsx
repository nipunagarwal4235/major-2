import React from "react";
import {CgProfile} from "react-icons/cg";
import {BsHouseDoor} from "react-icons/bs";
import {TfiCup} from "react-icons/ti";
import {BsNewspaper} from "react-icons/bs";
import {RxCubeFill} from "react-icons/ri";
import {BsTelephone} from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Total Sales
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  <CgProfile/>
                </dd>
              </div>

              <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Official Addons
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  24
                </dd>
              </div>

              <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Total Addons
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  86
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
