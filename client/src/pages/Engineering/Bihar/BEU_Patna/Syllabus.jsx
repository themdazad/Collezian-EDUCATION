import { Accordion, AccordionItem, Button } from "@heroui/react";
import { NavLink } from "react-router-dom";
export const BEU_Syllabus = () => {
  
  return (
    <>
    
      <div className="heading m-12">
          <h1 className="text-4xl font-semibold text-center CardTittle ">
          Syllabus
          </h1>
          <p className="text-sm text-center text-gray-500 ">
          Bihar Engineering University, Patna
          </p>
        </div>

      <section className="px-[5%]">
        <Accordion >
          <AccordionItem a className="gap-4" key="1" aria-label="Accordion 1" subtitle="Click here to expand" title="Electrical Engineering">
            <div className="flex gap-4 my-2 pdf_download_btn">
              <Button variant="flat" color="primary" >1st </Button>
              <Button isDisabled variant="flat" color="primary" >2nd </Button>
              <Button as={NavLink} to="https://drive.google.com/file/d/11yV_uiqtJT5jI_sinUxCJEfdX-JOviEO/view?usp=sharing" variant="flat" color="primary" >3rd </Button>
              <Button as={NavLink} to="https://drive.google.com/file/d/1C3VeBfl9k5dl0wWNygM1Mgky2-IyNUkg/view?usp=sharing" variant="flat" color="primary" >4th </Button>
              <Button isDisabled variant="flat" color="primary" >5th </Button>
              <Button isDisabled variant="flat" color="primary" >6th </Button>
              <Button isDisabled variant="flat" color="primary" >7th </Button>
              <Button isDisabled variant="flat" color="primary" >8th </Button>
            </div>

          </AccordionItem>

          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            subtitle="Click here to expand"
            title="Electrical and Electronics Engineering"
          >
            <div className="flex gap-4 my-2 pdf_download_btn">
              <Button isDisabled variant="flat" color="primary" >1st </Button>
              <Button isDisabled variant="flat" color="primary" >2nd </Button>
              <Button isDisabled variant="flat" color="primary" >3rd </Button>
              <Button isDisabled variant="flat" color="primary" >4th </Button>
              <Button isDisabled variant="flat" color="primary" >5th </Button>
              <Button isDisabled variant="flat" color="primary" >6th </Button>
              <Button isDisabled variant="flat" color="primary" >7th </Button>
              <Button isDisabled variant="flat" color="primary" >8th </Button>
            </div>
          </AccordionItem>
          
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            subtitle="Click here to expand"
            title="Electroncis and Communication Engineering"
          >
            <div className="flex gap-4 my-2 pdf_download_btn">
              <Button isDisabled variant="flat" color="primary" >1st </Button>
              <Button isDisabled variant="flat" color="primary" >2nd </Button>
              <Button isDisabled variant="flat" color="primary" >3rd </Button>
              <Button isDisabled variant="flat" color="primary" >4th </Button>
              <Button isDisabled variant="flat" color="primary" >5th </Button>
              <Button isDisabled variant="flat" color="primary" >6th </Button>
              <Button isDisabled variant="flat" color="primary" >7th </Button>
              <Button isDisabled variant="flat" color="primary" >8th </Button>
            </div>
          </AccordionItem>

          <AccordionItem key="4" aria-label="Accordion 4" subtitle="Click here to expand " title="Computer Science and Engineering ">
          <span>
            <p className="">Core</p>
            <div className="flex gap-4 my-2 pdf_download_btn">
              <Button isDisabled variant="flat" color="primary" >1st </Button>
              <Button isDisabled variant="flat" color="primary" >2nd </Button>
              <Button isDisabled variant="flat" color="primary" >3rd </Button>
              <Button isDisabled variant="flat" color="primary" >4th </Button>
              <Button isDisabled variant="flat" color="primary" >5th </Button>
              <Button isDisabled variant="flat" color="primary" >6th </Button>
              <Button isDisabled variant="flat" color="primary" >7th </Button>
              <Button isDisabled variant="flat" color="primary" >8th </Button>
            </div>
            </span>
            <span>
            <p className="">IoT</p>
            <div className="flex gap-4 my-2 pdf_download_btn">
              <Button isDisabled variant="flat" color="primary" >1st </Button>
              <Button isDisabled variant="flat" color="primary" >2nd </Button>
              <Button as={NavLink} to={'https://drive.google.com/file/d/12kbGzflKvi3FpFScQMbJh1LUHOY0q5i8/view?usp=sharing'} variant="flat" color="primary" >3rd </Button>
              <Button isDisabled variant="flat" color="primary" >4th </Button>
              <Button isDisabled variant="flat" color="primary" >5th </Button>
              <Button isDisabled variant="flat" color="primary" >6th </Button>
              <Button isDisabled variant="flat" color="primary" >7th </Button>
              <Button isDisabled variant="flat" color="primary" >8th </Button>
            </div>
            </span>
            <span>
            <p className="">AI & ML</p>
            <div className="flex gap-4 my-2 pdf_download_btn">
              <Button isDisabled variant="flat" color="primary" >1st </Button>
              <Button isDisabled variant="flat" color="primary" >2nd </Button>
              <Button isDisabled variant="flat" color="primary" >3rd </Button>
              <Button isDisabled variant="flat" color="primary" >4th </Button>
              <Button isDisabled variant="flat" color="primary" >5th </Button>
              <Button isDisabled variant="flat" color="primary" >6th </Button>
              <Button isDisabled variant="flat" color="primary" >7th </Button>
              <Button isDisabled variant="flat" color="primary" >8th </Button>
            </div>
            </span>
            <span>
            <p className="">Data Science</p>
            <div className="flex gap-4 my-2 pdf_download_btn">
              <Button isDisabled variant="flat" color="primary" >1st </Button>
              <Button isDisabled variant="flat" color="primary" >2nd </Button>
              <Button isDisabled variant="flat" color="primary" >3rd </Button>
              <Button isDisabled variant="flat" color="primary" >4th </Button>
              <Button isDisabled variant="flat" color="primary" >5th </Button>
              <Button isDisabled variant="flat" color="primary" >6th </Button>
              <Button isDisabled variant="flat" color="primary" >7th </Button>
              <Button isDisabled variant="flat" color="primary" >8th </Button>
            </div>
            </span><span>
            <p className="">Cyber Security</p>
            <div className="flex gap-4 my-2 pdf_download_btn">
              <Button isDisabled variant="flat" color="primary" >1st </Button>
              <Button isDisabled variant="flat" color="primary" >2nd </Button>
              <Button isDisabled variant="flat" color="primary" >3rd </Button>
              <Button isDisabled variant="flat" color="primary" >4th </Button>
              <Button isDisabled variant="flat" color="primary" >5th </Button>
              <Button isDisabled variant="flat" color="primary" >6th </Button>
              <Button isDisabled variant="flat" color="primary" >7th </Button>
              <Button isDisabled variant="flat" color="primary" >8th </Button>
            </div>
            </span>

          </AccordionItem>


          <AccordionItem
            key="5"
            aria-label="Accordion 5"
            subtitle="Click here to expand"
            title="Mechanical Engineering"
          >
            <div className="flex gap-4 my-2 pdf_download_btn">
              <Button isDisabled variant="flat" color="primary" >1st </Button>
              <Button isDisabled variant="flat" color="primary" >2nd </Button>
              <Button as={NavLink} to={'https://drive.google.com/file/d/12Kn7oxFnqip7iR08QTmsOwDW6tnjWR_2/view?usp=sharing'} variant="flat" color="primary" >3rd </Button>
              <Button isDisabled variant="flat" color="primary" >4th </Button>
              <Button isDisabled variant="flat" color="primary" >5th </Button>
              <Button isDisabled variant="flat" color="primary" >6th </Button>
              <Button isDisabled variant="flat" color="primary" >7th </Button>
              <Button isDisabled variant="flat" color="primary" >8th </Button>
            </div>
          </AccordionItem>
          <AccordionItem
            key="6"
            aria-label="Accordion 6"
            subtitle="Click here to expand"
            title="Civil Engineering"
          >
            <div className="flex gap-4 my-2 pdf_download_btn">
              <Button isDisabled variant="flat" color="primary" >1st </Button>
              <Button isDisabled variant="flat" color="primary" >2nd </Button>
              <Button as={NavLink} to={'https://drive.google.com/file/d/138bOLuou2kY-UKmqwE0Wt9lAAUG1Bshb/view?usp=sharing'} variant="flat" color="primary" >3rd </Button>
              <Button isDisabled variant="flat" color="primary" >4th </Button>
              <Button isDisabled variant="flat" color="primary" >5th </Button>
              <Button isDisabled variant="flat" color="primary" >6th </Button>
              <Button isDisabled variant="flat" color="primary" >7th </Button>
              <Button isDisabled variant="flat" color="primary" >8th </Button>
            </div>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
};
