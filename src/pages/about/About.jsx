import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Faq = () => {
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  
  return (
    <main className="mx-auto max-w-7xl px-4 md:px-8 lg:px-10 2xl:px-14 flex min-h-[80vh] items-center justify-center">
      <section className="md: w-[60%] mx-auto border-2 border-[var(--bg-primary)] p-4 md:p-8 lg:p-12">
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>Can I read ebooks on any device?</AccordionHeader>
        <AccordionBody className="text-lg">
        Yes, you can! Our ebooks are compatible with a wide range of devices, including smartphones, tablets, e-readers, and computers. Simply download our ebooks in a format supported by your device, such as PDF, EPUB, or MOBI.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
           Can I print pages from your ebooks?
        </AccordionHeader>
        <AccordionBody>
        es, you can! Our ebooks are formatted to be printer-friendly, allowing you to print individual pages or sections for personal use. However, please note that distributing printed copies or reproducing content for commercial purposes may be subject to copyright restrictions.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>Can I share ebooks with friends or family?
        </AccordionHeader>
        <AccordionBody className="text-lg">
        While we encourage sharing the joy of reading, please keep in mind that sharing ebooks with others may infringe on copyright laws. We recommend directing your friends and family to our website, where they can purchase their own copy of the ebook.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>Do I need to create an account to download ebooks?
        </AccordionHeader>
        <AccordionBody className="text-lg">
        No, you do not need to create an account to download ebooks from our website. All our ebooks are accessible to everyone without the need for registration.
        </AccordionBody>
      </Accordion>
      
      <Accordion open={open === 5}>
        <AccordionHeader onClick={() => handleOpen(5)}>Can I request specific ebooks to be added to your collection?
        </AccordionHeader>
        <AccordionBody className="text-lg">
        Yes, we welcome suggestions for new ebooks to add to our collection. If there is a particular ebook you would like to see on our website, please contact us with your recommendation, and we will do our best to accommodate your request.
        </AccordionBody>
      </Accordion>


        <Link to="/contact"> <p className="w-full mx-auto text-center mt-24 text-lg font-medium">Click <span className="font-bold text-[var(--clr-accent)] text-xl hover:underline">Here</span> to contact us for more info</p></Link>
      </section>





    </main>
  );
};

export default Faq;