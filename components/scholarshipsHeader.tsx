import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ScholarshipsHeader = () => {
  return (
    <section>
      <div className="bg-[#4F3996] relative bottom-35 md:bottom-20 lg:bottom-0 mb-10 shadow-2xl flex flex-col items-center justify-center p-5 sm:p-8 md:p-10 lg:p-12 rounded-tl-[45px] sm:rounded-tl-[65px] md:rounded-tl-[75px] lg:rounded-tl-[85px] rounded-br-[45px] sm:rounded-br-[65px] md:rounded-br-[75px] lg:rounded-br-[85px] w-full max-w-[95%] mx-auto">
        <Image
          src="/Logo/SecondLogo.png"
          width={300}
          height={300}
          alt="Scholarships Header Logo"
          className="w-48 h-auto sm:w-64 md:w-72 lg:w-[300px]"
        />

        <div className="flex flex-col lg:flex-row mt-10 sm:mt-16 lg:mt-20 relative justify-center items-center w-full gap-6 lg:gap-0">
          <div className="w-full lg:w-[45%]">
            <h1 className="text-white font-semibold text-xl sm:text-2xl lg:text-2xl">
              SCHOLARSHIPS FOR <br />
              THE 2026 ACADEMIC YEAR
            </h1>
            <p className="text-justify text-white mt-4 text-sm sm:text-base">
              In recognition of multiple oil and gas discoveries in the Orange
              Basin offshore Namibia and continued exploration activities,
              PETROFUND is intensifying efforts to build a skilled workforce for
              the next phases of the upstream petroleum industry. <br />
              <br />
              As part of this drive, scholarships for 2026 are now available to
              equip Namibians with vital skills ahead of the Final Investment
              Decision by petroleum exploration licence holders.
            </p>
          </div>
          <div className="hidden lg:block w-full lg:w-[50%] overflow-hidden">
            <Image
              src="/SectionImages/scholars.png"
              width={650}
              height={650}
              alt="Scholarships Header Image"
              className="hidden lg:block lg:absolute lg:bottom-[-48px] lg:right-[-5px]"
            />
          </div>
        </div>
      </div>

      {/* Scholarship Info */}
      <main className="min-h-screen mb-10 relative bottom-35 md:bottom-0 lg:bottom-0 py-8 px-4 sm:py-2 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-6">
          {/* Section 1: Scholarship Opportunities */}
          <section className="rounded-2xl bg-[#4F3996] p-6 shadow-lg sm:p-8">
            <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Scholarship Opportunities:
            </h1>
            <p className="mb-6 text-base leading-relaxed text-white sm:text-lg">
              The following scholarships are open to high-performing, dedicated
              Namibians eager to join the upstream petroleum industry and pursue
              full-time studies in the following fields:
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              {/* Undergraduate Scholarships */}
              <AccordionItem
                value="undergraduate"
                className="rounded-lg border-2 border-purple-200 bg-purple-50 px-4"
              >
                <AccordionTrigger className="text-left text-xl font-bold text-purple-900 hover:no-underline sm:text-2xl">
                  Undergraduate Scholarships in the SADC Region
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pt-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-orange-600">•</span>
                      <span>
                        BSc. /B. Engineering in Civil, Marine, Chemical,
                        Electrical, Power, Industrial and Mechanical
                        Engineering.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-orange-600">•</span>
                      <span>BSc. Geosciences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-orange-600">•</span>
                      <span>
                        Diploma in Instrumentation Engineering Technology in Oil
                        and Gas (Check list of institution on the website)
                      </span>
                    </li>
                  </ul>
                  <div className="mt-4 rounded-lg border-2 border-purple-300 bg-white p-4">
                    <p className="mb-2 text-sm text-gray-700">
                      <strong className="text-purple-900">
                        Application Instructions:
                      </strong>{" "}
                      Candidates must submit applications via the PETROFUND
                      website:{" "}
                      <a
                        href="https://esaspetrofund.org/login"
                        className="font-bold text-orange-600 underline hover:text-orange-700"
                      >
                        https://esaspetrofund.org/login
                      </a>
                    </p>
                    <p className="text-sm text-gray-700">
                      Application forms have been sent to all Regional Councils
                      for distribution to candidates in areas with limited or no
                      internet network access.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Postgraduate at UNAM */}
              <AccordionItem
                value="unam"
                className="rounded-lg border-2 border-orange-200 bg-orange-50 px-4"
              >
                <AccordionTrigger className="text-left text-xl font-bold text-orange-700 hover:no-underline sm:text-2xl">
                  Postgraduate Scholarships at University of Namibia
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pt-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-purple-600">•</span>
                      <span>MSc. Petroleum Geology</span>
                    </li>
                  </ul>
                  <div className="mt-4 rounded-lg border-2 border-orange-300 bg-white p-4">
                    <p className="text-sm text-gray-700">
                      <strong className="text-orange-700">
                        Application Instructions:
                      </strong>{" "}
                      Candidates must submit applications via the PETROFUND
                      website:{" "}
                      <a
                        href="https://esaspetrofund.org/login"
                        className="font-bold text-purple-700 underline hover:text-purple-800"
                      >
                        https://esaspetrofund.org/login
                      </a>
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Postgraduate Overseas */}
              <AccordionItem
                value="overseas"
                className="rounded-lg border-2 border-purple-200 bg-purple-50 px-4"
              >
                <AccordionTrigger className="text-left text-xl font-bold text-purple-900 hover:no-underline sm:text-2xl">
                  Postgraduate Scholarships at Overseas Universities
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-3 text-sm font-semibold text-purple-700">
                    For the September intake:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-orange-600">•</span>
                      <span>
                        MSc. Exploration Geophysics / MSc. Geophysics with
                        specialisation in Petroleum Geophysics
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-orange-600">•</span>
                      <span>MSc. Reservoir Evaluation Management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-orange-600">•</span>
                      <span>
                        MSc. Petroleum Engineering and Project Development
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-orange-600">•</span>
                      <span>MSc. Marine Engineering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-orange-600">•</span>
                      <span>MSc. Drilling Engineering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-orange-600">•</span>
                      <span>MSc. Oil and Gas Engineering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-orange-600">•</span>
                      <span>MSc. Fire Safety Engineering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-orange-600">•</span>
                      <span>
                        MSc. Naval Engineering / MSc. Advanced Naval
                        Architecture / MSc. Marine Technology: Atlantic Master's
                        Ship Operation and Naval Engineering
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-orange-600">•</span>
                      <span>MSc. Aerospace Engineering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-orange-600">•</span>
                      <span>MSc. Process Safety</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-orange-600">•</span>
                      <span>MSc. Carbon Capture Management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-orange-600">•</span>
                      <span>MSc. Oil and Gas Law</span>
                    </li>
                  </ul>

                  <div className="mt-4 space-y-3">
                    <div className="rounded-lg border-2 border-orange-300 bg-white p-4">
                      <p className="text-sm text-gray-700">
                        <strong className="text-orange-700">
                          For UK programmes:
                        </strong>{" "}
                        Candidates must submit applications on both the
                        PETROFUND website:{" "}
                        <a
                          href="https://esaspetrofund.org/login"
                          className="font-bold text-purple-700 underline hover:text-purple-800"
                        >
                          https://esaspetrofund.org/login
                        </a>{" "}
                        and the Chevening website:{" "}
                        <a
                          href="https://www.chevening.org/namibia/"
                          className="font-bold text-purple-700 underline hover:text-purple-800"
                        >
                          https://www.chevening.org/namibia/
                        </a>
                      </p>
                    </div>
                    <div className="rounded-lg border-2 border-purple-300 bg-white p-4">
                      <p className="text-sm text-gray-700">
                        <strong className="text-purple-700">
                          For non-UK programmes:
                        </strong>{" "}
                        Candidates must submit applications through the
                        PETROFUND website only.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            {/* </CHANGE> */}
          </section>

          {/* Section 2: Requirements */}
          <section className="rounded-2xl bg-white/95 shadow-lg">
            <div className="rounded-t-2xl bg-[#F47C20] px-6 py-4 sm:px-8">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Requirements for All Scholarships
              </h2>
            </div>
            <div className="p-6 sm:p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {/* Eligibility Requirements */}
                <AccordionItem
                  value="eligibility"
                  className="rounded-lg border-2 border-purple-200 bg-purple-50 px-4"
                >
                  <AccordionTrigger className="text-left text-lg font-bold text-purple-900 hover:no-underline sm:text-xl">
                    Eligibility Requirements
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3 pt-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700">
                          ✓
                        </span>
                        <span>Namibian citizenship</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700">
                          ✓
                        </span>
                        <span>
                          Demonstrate outstanding academic performance for
                          undergraduate students currently enrolled at the
                          university
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700">
                          ✓
                        </span>
                        <span>
                          Excellent passes in mathematics, sciences and English
                          at grade 12 or Advanced Subsidiary (AS) level with a
                          minimum of 30 points in five (5) subjects as per the
                          recognised universities' scales for high school
                          applicants (current AS Level learners to submit
                          September results)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700">
                          ✓
                        </span>
                        <span>
                          Hold a relevant honours degree with a minimum average
                          pass mark of 60% for the master's scholarship
                          applicants
                        </span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Study Commencement & Admission */}
                <AccordionItem
                  value="admission"
                  className="rounded-lg border-2 border-orange-200 bg-orange-50 px-4"
                >
                  <AccordionTrigger className="text-left text-lg font-bold text-orange-700 hover:no-underline sm:text-xl">
                    Study Commencement & Admission Requirements
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3 pt-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-700">
                          ✓
                        </span>
                        <span>
                          Be willing to commence studies in January 2026 for
                          scholarships within the SADC region and in September
                          2026 for overseas scholarships
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-700">
                          ✓
                        </span>
                        <span>
                          Provide proof of admission for the intended course for
                          MSc. overseas scholarships
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-700">
                          ✓
                        </span>
                        <span>
                          Submit proof of admission for SADC region scholarships
                          by January 2026 for undergraduate and MSc. Petroleum
                          Geology applicants
                        </span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Application Process */}
                <AccordionItem
                  value="application"
                  className="rounded-lg border-2 border-purple-200 bg-purple-50 px-4"
                >
                  <AccordionTrigger className="text-left text-lg font-bold text-purple-900 hover:no-underline sm:text-xl">
                    Application Process & Documentation
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3 pt-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700">
                          ✓
                        </span>
                        <span>
                          Provide certified copies of all required supporting
                          documents by the Namibian Police
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700">
                          ✓
                        </span>
                        <span>
                          Complete the relevant online PETROFUND or Chevening
                          scholarship application form at:{" "}
                          <a
                            href="https://esaspetrofund.org/login"
                            className="font-bold text-purple-700 underline hover:text-purple-800"
                          >
                            https://esaspetrofund.org/login
                          </a>{" "}
                          or{" "}
                          <a
                            href="https://www.chevening.org/namibia/"
                            className="font-bold text-purple-700 underline hover:text-purple-800"
                          >
                            https://www.chevening.org/namibia/
                          </a>
                        </span>
                      </li>
                    </ul>

                    <div className="mt-4 rounded-lg border-l-4 border-orange-500 bg-white p-4">
                      <p className="font-bold text-orange-700">
                        Applicants are reminded that applications for courses
                        other than those mentioned herein will not be
                        considered.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Important Information */}
                <AccordionItem
                  value="important"
                  className="rounded-lg border-2 border-orange-200 bg-orange-50 px-4"
                >
                  <AccordionTrigger className="text-left text-lg font-bold text-orange-700 hover:no-underline sm:text-xl">
                    Important Information for Applicants
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3 pt-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="mt-1 text-orange-600">•</span>
                        <span>
                          Only shortlisted candidates will be contacted and
                          invited for oral interviews. Interview dates will be
                          communicated directly to shortlisted applicants.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 text-orange-600">•</span>
                        <span>
                          Information on universities offering the advertised
                          postgraduate programmes is available on the PETROFUND
                          website as well as a guide on how to complete the
                          application form.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 text-orange-600">•</span>
                        <span>
                          Candidates submitting manual applications should do so
                          at their constituency offices.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 text-orange-600">•</span>
                        <span>
                          Manual applications are reserved for individuals with
                          limited or no access to online facilities.
                        </span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              {/* </CHANGE> */}

              <div className="mt-6 rounded-lg bg-purple-50 p-4">
                <h3 className="mb-3 text-xl font-bold text-purple-900">
                  Enquiries:
                </h3>
                <p className="mb-2 text-gray-700">
                  All enquiries should be directed to Ms. Elizabeth Muundjua or
                  Ms. Loide Ashaadhila at{" "}
                  <a
                    href="tel:+26461400443"
                    className="font-bold text-purple-700 hover:underline"
                  >
                    +264 61 400 443
                  </a>{" "}
                  or{" "}
                  <a
                    href="mailto:petrofund@namcor.com.na"
                    className="font-bold text-purple-700 hover:underline"
                  >
                    petrofund@namcor.com.na
                  </a>
                  .
                </p>
              </div>

              <div className="mt-6 rounded-lg border-2 border-orange-500 bg-gradient-to-r from-orange-50 to-orange-100 p-6">
                <p className="text-center text-lg font-bold text-orange-700 sm:text-xl">
                  Deadline for Submitting all Applications:
                </p>
                <p className="mt-2 text-center text-2xl font-bold text-orange-900 sm:text-3xl">
                  Tuesday, 7 October 2025 at 13:00
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="rounded-2xl bg-[#F47C20] text-white p-6 text-center shadow-lg sm:p-8">
            <p className="mb-4 ">
              For more information, visit the PETROFUND website.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 text-gray-600 sm:flex-row sm:gap-8">
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-purple-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-white">petrofund@namcor.com.na</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-purple-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-white">+264 61 400 443</span>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </section>
  );
};

export default ScholarshipsHeader;
