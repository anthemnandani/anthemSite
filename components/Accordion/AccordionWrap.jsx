"use client";

import React from "react";
import Accordion, { AccordionItem, AccordionTitle, AccordionContent } from "@/components/Accordion";

const AccordionWrap = () => {
  return (
    <div className="agency-accordion max-mb-n30">
      <Accordion>
        <AccordionItem id="one">
          <AccordionTitle id="one">
            <span className="text-primary fw-bold">
              What services does Anthem Infotech offer?
            </span>
          </AccordionTitle>
          <AccordionContent id="one">
            <span className="text-primary fw-bold">Answer: </span>
            <br />
            At Anthem Infotech, we provide a comprehensive range of technology services tailored to meet the unique needs of businesses across industries. Our core offerings include:
            <ul>
              <li>Custom Software Development</li>
              <li>Web & Mobile Application Development</li>
              <li>Generative AI Solutions</li>
              <li>Chat GPT Integration</li>
              <li>AI/ML Development</li>
              <li>Marketing Automation</li>
              <li>MVP Development</li>
              <li>Enterprise Software Solutions</li>
              <li>Data Analysis & ETL</li>
              <li>UI/UX Design</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Repeat AccordionItem blocks for all other FAQs */}
        {/* Ensure each AccordionItem has a unique `id` */}
      </Accordion>
    </div>
  );
};

export default AccordionWrap;
