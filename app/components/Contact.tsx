"use client";

import { Formik, ErrorMessage } from "formik";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Yup from "yup";
import Top from "./Top";
import { Map, Mail, Phone, UserPen, NotebookPen } from "lucide-react";

export const runtime = "edge";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const messageSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(100, "Too Long! Max length 100")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string()
    .required("Required")
    .max(3000, "Too Long! Max Length 3000"),
});

const Contact: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [contact, setContactForm] = useState<ContactFormValues>({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (!contact.name || !contact.email || !contact.message) return;
    const sendMessage = async () => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            contact,
          }),
        });
        if (response.ok) {
          setShowModal(true);
        }
      } catch (error) {
        console.error(error);
      }
    };
    sendMessage();
  }, [contact]);

  if (showModal === true) {
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  }

  return (
    <>
      <div className="mt-12 mb-12" data-testid="contact">
        <p className="text-4xl text-center font-semibold  text-zinc-200 sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl">
          Let&apos;s
          <span className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl text-green-500 font-extrabold">
            {" "}
            Connect
          </span>
          .
        </p>
      </div>
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center mt-12 mb-12"
          >
            <div
              className="max-w-xs bg-zinc-800 text-sm text-white rounded-md shadow-lg"
              role="alert"
            >
              <div className="flex p-4 text-sm font-semibold">
                Message Sent Success
                <div className="mt-[3px] ml-2">
                  <button
                    type="button"
                    className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-md text-white/[.6] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-800 focus:ring-zinc-500 transition-all text-sm dark:focus:ring-offset-zinc-500 dark:focus:ring-zinc-700"
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="w-3.5 h-3.5"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="flex flex-wrap justify-center md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row gap-4 "
        id="contact"
      >
        <div className="flex hover:shadow-lg hover:shadow-zinc-500 bg-zinc-900 p-8 rounded-3xl  h-auto w-auto  sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 gap-4">
          <div className="w-full justify-center ">
            <Formik
              initialValues={contact}
              validationSchema={messageSchema}
              onSubmit={async (values, actions) => {
                actions.setSubmitting(false);
                setContactForm(values);
                actions.resetForm({
                  values: {
                    name: "",
                    email: "",
                    message: "",
                  },
                });
              }}
            >
              {({
                isSubmitting,
                values,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                  className="flex flex-col"
                >
                  <div className="mb-4">
                    <div className="flex gap-x-2">
                      <UserPen
                        color="white"
                        size={18}
                        strokeWidth={1.5}
                        absoluteStrokeWidth={false}
                      />
                      <label
                        htmlFor="name"
                        className=" block mb-2 text-sm font-medium text-zinc-300"
                      >
                        {" "}
                        Name
                      </label>
                    </div>

                    <input
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      name="name"
                      id="name"
                      className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg block  p-2.5 "
                      placeholder="Your awesome name"
                    />
                    <div className="text-red-500 text-sm p-1">
                      <ErrorMessage name="name" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex gap-x-2">
                      <Mail
                        color="white"
                        size={18}
                        strokeWidth={1.5}
                        absoluteStrokeWidth={false}
                      />
                      <label
                        htmlFor="email"
                        className=" w-full  block mb-2 text-sm font-medium text-zinc-300"
                      >
                        Email
                      </label>
                    </div>

                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg block w-full p-2.5  "
                      placeholder="your@email.com"
                    />
                    <div className="text-red-500 text-sm p-1">
                      <ErrorMessage name="email" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex gap-x-2">
                      <NotebookPen
                        color="white"
                        size={18}
                        strokeWidth={1.5}
                        absoluteStrokeWidth={false}
                      />
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-zinc-300"
                      >
                        Your message
                      </label>
                    </div>

                    <textarea
                      id="message"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                      rows={4}
                      className="block p-2.5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                      placeholder="Your thoughts here..."
                    />
                    <div className="text-red-500 text-sm p-1">
                      <ErrorMessage name="message" />
                    </div>
                  </div>

                  <div className="mt-6 flex justify-start">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-zinc-700 w-full  hover:border-zinc-200 hover:bg-zinc-600 focus:ring-1 focus:ring-zinc-300 text-zinc-200 text-md font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                    >
                      Send
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
          <div className="border-r-2 border-zinc-700" />
          <div className="w-full flex flex-col mt-2">
            <div className="flex gap-x-2">
              <Phone
                color="white"
                size={18}
                strokeWidth={1.5}
                absoluteStrokeWidth={false}
              />
              <p className=" block mb-2 text-sm font-medium text-zinc-300">
                (+92) 332711471
              </p>
            </div>
            <div className="flex gap-x-2">
              <Mail
                color="white"
                size={18}
                strokeWidth={1.5}
                absoluteStrokeWidth={false}
              />

              <p className=" block mb-2 text-sm font-medium text-zinc-300">
                faaizaslam75@live.com{" "}
              </p>
            </div>
            <div className="flex gap-x-2">
              <Map
                color="white"
                size={18}
                strokeWidth={1.5}
                absoluteStrokeWidth={false}
              />
              <p className=" block mb-2 text-sm font-medium text-zinc-300">
                Location
              </p>
            </div>

            <div className="aspect-w-16 aspect-h-16 sm:aspect-h-16 md:aspect-h-16 lg:aspect-h-9 xl:aspect-h-9 ">
              <iframe src="https://maps.google.com/maps?width=100%25&amp;height=200%&amp;hl=en&amp;q=+(islamabad)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
            </div>
          </div>
        </div>
      </div>
      <Top />
    </>
  );
};

export default Contact;
