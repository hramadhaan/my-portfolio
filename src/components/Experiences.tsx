"use client";

import { ChevronRight } from "lucide-react";
import { Separator } from "./ui/separator";

const DATA_EXPERIENCE = [
  {
    id: 1,
    company: "Ruparupa",
    role: "Mobile Apps Engineer",
    date: "2022-Present",
  },
  {
    id: 2,
    company: "Ruparupa",
    role: "Mobile Apps Developer",
    date: "2021-2022",
  },
  {
    id: 3,
    company: "Telkom Indonesia",
    role: "Backend Developer",
    date: "2020-2021",
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="min-h-screen w-full py-20">
      <div className="flex flex-col gap-y-10">
        <div className="font-bold text-2xl">✍️ Experience so far</div>
        <div>
          {/* Card */}
          {DATA_EXPERIENCE.map((item, index) => {
            return (
              <div
                key={`experience-item-${index}`}
                className="mb-3 last:mb-0 hover:bg-primary group group-hover:bg-black rounded-md transition-all py-3 px-4 ease-in-out duration-300 hover:translate-x-2 hover:-translate-y-2 cursor-pointer"
              >
                <div
                  key={`experience-item-${index}`}
                  className="flex flex-row items-center justify-between"
                >
                  <div className="flex-1">
                    <span className="font-medium text-sm text-zinc-500 group-hover:text-zinc-100 group-hover:dark:text-black">
                      {item.date}
                    </span>
                    <p className="font-semibold text-xl group-hover:text-white group-hover:dark:text-black">
                      {item.company}
                    </p>
                  </div>
                  <div className="self-center text-center flex-1">
                    <span className="font-medium text-sm text-zinc-500 group-hover:text-zinc-100 group-hover:dark:text-black">
                      Role
                    </span>
                    <p className="font-semibold text-xl group-hover:text-white group-hover:dark:text-black">
                      {item.role}
                    </p>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-row items-center justify-end">
                      <span className="text-md group-hover:text-white group-hover:dark:text-black">
                        Fine out more
                      </span>
                      <ChevronRight className="group-hover:text-white group-hover:dark:text-black" />
                    </div>
                  </div>
                </div>
                <Separator className="mt-3" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
