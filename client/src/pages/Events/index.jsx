import { Image, Link } from "@heroui/react";
import { MdOutlineArrowRight } from "react-icons/md";
import { motion } from "framer-motion";

const event_data = [
  {
    image: "/events/techkshitizThumbnail.png",
    tittle: "TechKshitiz '24",
    description:
      "First ever technical event organizing by Government Engineering College, Siwan",
    last_date: "Last Date - 19 Sept 2024",
    registration_link:
      "https://techkshitiz.in/government-engineering-college-siwan/total/events/list",
  },
  {
    image: "/events/techkshitizThumbnail.png",
    tittle: "TechKshitiz '24",
    description:
      "First ever technical event organizing",
    last_date: "Last Date - 19 Sept 2024",
    registration_link:
      "https://techkshitiz.in/government-engineering-college-siwan/total/events/list",
  },
  {
    image: "/events/techkshitizThumbnail.png",
    tittle: "TechKshitiz '24",
    description:
      "First ever technical event organizing by Government Engineering College, Siwan",
    last_date: "Last Date - 19 Sept 2024",
    registration_link:
      "https://techkshitiz.in/government-engineering-college-siwan/total/events/list",
  },
];

export function Events() {
  return (
    <>
      <div className="heading m-12">
        <h1 className="text-4xl font-semibold text-center CardTittle ">
          Events
        </h1>
        <p className="text-sm text-center text-gray-500 ">
          Catch up with the latest college events happening around you.
        </p>
      </div>

      <div className="my-16 min-h-[90vh] px-[5%]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {event_data.map((event, i) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              key={1}
              className=" min-w-[240px] gap-12 m-auto shadow-md  transition-shadow duration-350  bg-white/5 rounded-lg overflow-clip my-2"
            >
              <Image
                className=" object-cover aspect-[16/9]  ease-in duration-350 delay-0  z-0 w-full h-full "
                src={event.image}
                radius="none"
                alt="collezian-study-materials-image"
              />

              <div className="grid justify-center justif p-[5%] ">
                <h1>
                  {event.tittle.length === 0 ? "Coming Soon" : event.tittle}{" "}
                </h1>
                <p className="text-sm text-gray-500">
                  {event.description.length === 0
                    ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, ducimus."
                    : event.description}
                </p>
                <h3 className="my-1 text-sm text-danger">
                  {event.tittle.length === 0 ? "---" : event.last_date}{" "}
                </h3>
                <Link
                  href={event.registration_link}
                  target="_blank"
                  className="text-sm font-semibold cursor-pointer "
                  color="primary"
                  variant="flat"
                >
                  {event.tittle.length === 0
                    ? "Add Your College Event"
                    : "Register Now"}{" "}
                  <MdOutlineArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
