import { Image,Button } from "@heroui/react";
import { NavLink } from "react-router-dom";

const card = {
    Width:"300px",
    Height:"400px",
    src:"/images/plant.jpg",
    alt:"",
    Description:"dasdfdfsgfg",
    Link:"Add Link",

}

export const Card = () => {
    
  return (
    <div className="w-[300px] gap-12 m-auto border shadow-sm border-zinc-300/10 hover:shadow-xl bg-white/5 rounded-lg overflow-clip">
            <div>
              <Image
                className="object-cover aspect-[16/9] ease-in duration-200 delay-0  z-0 w-full h-full "
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
  )
}
