import { Tabs, Tab } from "@heroui/react";
import './ResultCheck.css'
// icons
import { CgNotes } from "react-icons/cg";
import { FaBook } from "react-icons/fa";

import { BUEResult } from "./components/BEUResult";
import { SBTEResult } from "./components/SBTEResult";

export const ResultCheck = () => {
  return (

      <div className="max-w-[1440px] mt-12 m-auto flex flex-col items-center ">
        <Tabs
          aria-label="Options"
          color="primary"
          variant="light"
          size="lg"
          radius="full"
        >
          <Tab
            key="beu"
            title={
              <div className="flex items-center space-x-2">
                <CgNotes />
                <span>BEU Result</span>
              </div>
            }
          >
            <div className="mt-12 w-full">
              <BUEResult />
            </div>
          </Tab>

          <Tab
            key="sbte"
            title={
              <div className="flex items-center space-x-2">
                <FaBook />
                <span>SBTE Result</span>
              </div>
            }
          >
            <SBTEResult />
          </Tab>
        </Tabs>
      </div>
 );
};
