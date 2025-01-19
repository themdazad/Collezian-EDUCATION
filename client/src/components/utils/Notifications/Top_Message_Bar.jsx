import { motion } from "framer-motion";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

export const Top_Message_Bar = () => {
  return <Morquee />;
};

export function Morquee() {
  const [show, setShow] = useState(false);
  // change it to 'true' | currently this is hidden.
  return (
    <>
      {show && (
        <div className="bg-sky-400 text-black w-full overflow-hidden flex">
          <div className="flex w-full items-center  whitespace-nowrap">
            <h1
              className="text-[1vw] text-center w-full px-4"
            >
             Bihar Engineering University Syllabus is now available on the website.
            </h1>
          </div>
          <div className="text-3xl pointer px-2" onClick={()=>setShow(false)}>
            <IoIosClose />
          </div>
        </div>
      )}
    </>
  );
}
