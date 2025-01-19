import { Accordion, AccordionItem, Button } from "@heroui/react";
export const BEU_PYQS = () => {
  return (
    <>
    
      <div className="heading m-12">
          <h1 className="text-4xl font-semibold text-center CardTittle ">
          Question Bank
          </h1>
          <p className="text-sm text-center text-gray-500 ">
          Bihar Engineering University, Patna
          </p>
        </div>

      <section className="px-[5%]">
        <Accordion >
          <AccordionItem
            a
            className="gap-4"
            key="1"
            aria-label="Accordion 1"
            subtitle="Click here to expand"
            title="Electrical Engineering"
          >
            <div className="flex gap-4 my-2 pdf_download_btn">
              <Accordion>
                <AccordionItem
                 
                  className="gap-4"
                 
                  aria-label="Accordion 1"
                  subtitle=""
                  title="Analog Electronics"
                >
                  <div className="flex gap-4 my-2 pdf_download_btn">
                    
                    <Button isDisabled  size="sm" variant="flat" color="primary">
                      2023
                    </Button>
                    <Button isDisabled  size="sm" variant="flat" color="primary">
                      2022
                    </Button>
                    <Button isDisabled  size="sm" variant="flat" color="primary">
                      2021
                    </Button>
                    <Button isDisabled  size="sm" variant="flat" color="primary">
                      2020
                    </Button>
                    
                  </div>
                </AccordionItem>
              </Accordion>
             
            </div>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
};
