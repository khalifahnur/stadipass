"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Mockup() {
  return (
    <section
      className="py-12 md:py-16 overflow-hidden relative my-10 md:my-14"
      id="mobile"
    >
            <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-14">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
          <div className="w-full lg:w-1/2 max-w-[600px] text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-[clamp(2.2rem,4.5vw,3.5rem)] text-[#111827] font-semibold leading-[1.1] tracking-tight mb-4 font-sans">
                Your favorite pass, <br className="hidden lg:block" />
                coming soon.
              </h2>
              <p className="text-base md:text-lg leading-relaxed font-normal text-slate-600 mb-8 font-sans">
                Stadi Pass Mobile puts the ultimate matchday experience in your pocket. Book stadium passes, explore 3D seat views, and access live events effortlessly from anywhere. Coming soon on Android and iOS.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <div
                  className="inline-flex items-center justify-center sm:justify-start gap-3 bg-[#111827] text-white w-full sm:w-auto px-5 py-2.5 rounded-xl shadow-md cursor-default select-none"
                >
                  <svg
                    className="w-6 h-6 shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 11.5 24 31.1 24 55.4v401.1c0 24.3 10 43.9 23 55.4L271.5 256 47 0zm412 211.1c17.5 10 27 26.6 27 44.9s-9.5 34.9-27 44.9L391.1 343l-60.1-60.1 61.3-61.2 66.7 39.4zM325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z" />
                  </svg>
                  <div className="flex flex-col items-start text-left">
                    <span className="text-[10px] uppercase tracking-wider opacity-80 leading-none mb-1">
                      Coming Soon on
                    </span>
                    <span className="text-[14px] font-medium leading-none">
                      Google Play
                    </span>
                  </div>
                </div>
                <div
                  className="inline-flex items-center justify-center sm:justify-start gap-3 bg-[#111827] text-white w-full sm:w-auto px-5 py-2.5 rounded-xl shadow-md cursor-default select-none"
                >
                  <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.84.94-2.91-.92.04-2.02.62-2.67 1.38-.58.67-1.09 1.76-.95 2.81 1.03.08 2.06-.52 2.68-1.28z"/>
                  </svg>
                  <div className="flex flex-col items-start text-left">
                    <span className="text-[10px] uppercase tracking-wider opacity-80 leading-none mb-1">
                      Coming Soon on
                    </span>
                    <span className="text-[14px] font-medium leading-none">
                      App Store
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center mt-12 lg:mt-0">
            <div className="relative w-full max-w-90 aspect-1/2 md:aspect-8/16 ">
              <Image
                src="/mockup.png"
                alt="stadi pass mockup"
                fill
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
