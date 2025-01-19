import ReactDOM from "react-dom/client";
import "./index.css";
import { HeroUIProvider } from "@heroui/react";
import Path from "./routes.jsx";
import { Navigation } from "./components/Header_Footer/Navigation.jsx";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Header_Footer/Footer.jsx";
import { motion } from "framer-motion";
import { Top_Message_Bar } from "./components/utils/Notifications/Top_Message_Bar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <HeroUIProvider>
      <main className="dark:dark dark:text-foreground dark:bg-[#040a14] bg-[#ececec] bg-[url('/bg_image/blur_bg.png')] bg-cover bg-no-repeat max-w-[1920px] m-auto">
      {/* New Announcement  */}
      <Top_Message_Bar/>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true, amount: 0 }}
        >
          <Navigation />
        </motion.div>
        <Path />
        <Footer/>
      </main>
    </HeroUIProvider>
  </BrowserRouter>
);
