import { Button } from "@heroui/react";
import { NavLink } from "react-router-dom";
import { Image } from "@heroui/react";

export default function Engineering() {
  return (
    <>
      {/* Materials  */}
      <div className=" px-[5%] min-h-[90vh]">
        <div className="heading m-12">
          <h1 className="text-4xl font-semibold text-center CardTittle ">
            Bihar Engineering
          </h1>
          <p className="text-sm text-center text-gray-500 ">
            Explore every engineering resources for free
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-12 card md:grid-cols-2 lg:grid-cols-3 content-stretch">
          {/*BTech   */}
          <div className="gap-12 m-auto border shadow-sm border-zinc-300/10 hover:shadow-xl bg-white/5 rounded-lg overflow-clip">
            <div>
              <Image
                className={` object-cover aspect-[16/9] ease-in duration-200 delay-0  z-0 w-full h-full `}
                src="/images/plant.jpg"
                alt=""
              />
            </div>

            <div className="grid justify-center p-[5%]">
              <h1>B.Tech</h1>
              <p className="text-sm text-gray-500">
                Stay updated with the latest exam results and academic
                achievements.
              </p>
              <div className="flex gap-2 mt-4 lint_buttons">
                <Button
                  as={NavLink}
                  to="BEU_Syllabus"
                  className="items-center text-sm max-w-min rounded-xl"
                  size="sm"
                  color="primary"
                  variant="flat"
                >
                  Syllabus
                </Button>

                <Button
                  as={NavLink}
                  to="BEU_Notes"
                  className="items-center text-sm max-w-min rounded-xl"
                  size="sm"
                  color="primary"
                  variant="flat"
                >
                  Notes
                </Button>

                <Button
                  as={NavLink}
                  to="BEU_PYQs"
                  className="items-center text-sm max-w-min rounded-xl"
                  size="sm"
                  color="primary"
                  variant="flat"
                >
                  PYQs
                </Button>
              </div>
            </div>
          </div>
          {/* State: Bihar Board Materials / */}
          <div className="gap-12 m-auto border shadow-sm border-zinc-300/10 hover:shadow-xl bg-white/5 rounded-lg overflow-clip">
            <div>
              <Image
                className="bg-black p-4 object-cover aspect-[16/9] ease-in duration-200 delay-0  z-0 w-full h-full "
                src="/images/collezian_cloud.png"
                alt=""
              />
            </div>

            <div className="grid justify-center p-[5%]">
              <h1>Polytechnic</h1>
              <p className="text-sm text-gray-500">
                Access engineering study materials, latest syllabus PDF, notes,
                and more.
              </p>
              <div className="flex gap-2 mt-4 lint_buttons">
                <Button
                  as={NavLink}
                  to="/SBTE_Syllabus"
                  className="items-center text-sm max-w-min rounded-xl"
                  size="sm"
                  color="primary"
                  variant="flat"
                >
                  Syllabus
                </Button>

                <Button
                  as={NavLink}
                  to="/Bihar/SBTE/Notes"
                  className="items-center text-sm max-w-min rounded-xl"
                  size="sm"
                  color="primary"
                  variant="flat"
                >
                  Notes
                </Button>

                <Button
                  as={NavLink}
                  to="/Bihar/SBTE/PYQs"
                  className="items-center text-sm max-w-min rounded-xl"
                  size="sm"
                  color="primary"
                  variant="flat"
                >
                  PYQs
                </Button>
              </div>
            </div>
          </div>

          {/* BCECE LE   */}
          <div className="gap-12 m-auto border shadow-sm border-zinc-300/50 hover:shadow-xl bg-white/5 rounded-lg overflow-clip">
            <div>
              <Image
                className="object-cover aspect-[16/9] ease-in duration-200 delay-0  z-0 w-full h-full "
                src="/images/laptop-desktop.jpg"
                alt=""
              />
            </div>

            <div className="grid justify-center p-[5%]">
              <h1>BCECE LE 2025</h1>
              <p className="text-sm text-gray-500">
                Take the next step in your educational journey! Explore BCECE LE
                resources and materials.
              </p>
              <div className="flex gap-2 mt-4 ">
                <Button
                  as={NavLink}
                  className="items-center text-sm max-w-min rounded-xl"
                  size="sm"
                  color="primary"
                  variant="flat"
                >
                  Syllabus
                </Button>
                <Button
                  as={NavLink}
                  to="https://t.me/collezian_bcece_le"
                  className="items-center text-sm max-w-min rounded-xl"
                  size="sm"
                  color="primary"
                  variant="flat"
                >
                  Join Telegram
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
