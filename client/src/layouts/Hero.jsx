import { Button, Link } from "@heroui/react";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="min-h-[540px] max-w-[1440px] m-auto px-[5%] grid place-content-center ">
      <div className="text-center space-y-6">
        <h3 className=" text-6xl font-bold">
          Your engineering journey<br/> begins here...
        </h3>

        <p className="text-lg text-gray-500 ">
          Connect, collaborate, and get inspired by your peers.
        </p>
        <Button
          as={Link}
          className="items-center shadow-md border-1max-w-min"
          href="https://chat.whatsapp.com/HmEXaa6y1zE1Rdi60n7VA5"
          target="_blank"
          color="primary"
          variant="flat"
          size="lg"
          startContent={<FaWhatsapp />}
        >
          Connect
        </Button>
      </div>
      {/* <Image className="max-md:hidden object-cover justify-self-center" width={700} height={700} src="/images/collezian_ai.png" /> */}
    </div>
  );
};

export default Hero;
