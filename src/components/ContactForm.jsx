import React from "react";

const ContactForm = () => {
  return (
    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
      <div className="mt-12 flex flex-col items-center">
        <div className="w-full flex-1 mt-8">
          <div className="mx-auto max-w-xs">
            <input
              className="w-full px-7 py-4 font-medium bg-neutral-800 border-b border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-yellow-400 transition-all"
              type="email"
              placeholder="Email"
            />
            <textarea
              className="w-full px-7 py-4 font-medium bg-neutral-800 border-b border-gray-200 placeholder-gray-500 text-sm focus:outline-none mt-5 focus:border-yellow-400 transition-all"
              placeholder="message"
              rows="4"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
