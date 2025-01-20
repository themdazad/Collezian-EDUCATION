import {
  Tabs,
  Tab,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@heroui/react";
// icons
import { CgNotes } from "react-icons/cg";
import { FaBookOpen } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

const TabBar = () => {
  return (
    <div className="max-w-[1440px] m-auto flex flex-col items-center ">
      <Tabs
        aria-label="Options"
        color="primary"
        variant="light"
        size="lg"
        radius="full"
      >
        <Tab
          key="photos"
          title={
            <div className="flex items-center space-x-2">
              <CgNotes />
              <span>Syllabus</span>
            </div>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 w-full">
            {/* col-1 card */}
            <TabCards
              image={"/images/beupatna_logo.jpeg"}
              heading={"BEU Patna"}
              title={"Bihar Engineering University"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat aliquid nobis?"
              }
              link={"#"}
            />
            {/* col-2 card */}
            <TabCards
              image={"/images/sbtebihar_logo.png"}
              heading={"SBTE Bihar"}
              title={"State Board of Technical Education"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat aliquid nobis?"
              }
              link={"#"}
            />
          </div>
        </Tab>
        <Tab
          key="notes"
          title={
            <div className="flex items-center space-x-2">
              <FaBookOpen />
              <span>Notes</span>
            </div>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-3  gap-6 mt-12 w-full">
            {/*Branch wise for all engineering stream */}
            <TabCards
              image={"/images/beupatna_logo.jpeg"}
              heading={"Electrical Engineering"}
              title={"Diploma | B.Tech"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi in cupiditate atque, sequi dolor labore?"
              }
            />
            <TabCards
              image={"/images/beupatna_logo.jpeg"}
              heading={"Civil Engineering"}
              title={"Diploma | B.Tech"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi in cupiditate atque, sequi dolor labore?"
              }
            />
            <TabCards
              image={"/images/beupatna_logo.jpeg"}
              heading={"Computer Science Engineering"}
              title={"Diploma | B.Tech"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi in cupiditate atque, sequi dolor labore?"
              }
            />
            
          </div>
        </Tab>
        <Tab
          key="videos"
          title={
            <div className="flex items-center space-x-2">
              <FaBook />
              <span>Question Bank</span>
            </div>
          }
        >
          <Card className="w-full mt-12" varient="outlined">
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.lorem13 Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Repellat quasi ex
              laudantium.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabBar;

export function TabCards({ image, heading, title, description, link }) {
  return (
    <Link isExternal href={link}>
      <Card className="max-w-[400px] rounded-3xl"  varient="outlined">
        <CardHeader className="flex gap-3">
          <Image
            alt="heroui logo"
            height={40}
            radius="sm"
            src={image}
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">{heading}</p>
            <p className="text-small text-default-500">{title}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>{description}</p>
        </CardBody>

        <CardFooter></CardFooter>
      </Card>
    </Link>
  );
}
