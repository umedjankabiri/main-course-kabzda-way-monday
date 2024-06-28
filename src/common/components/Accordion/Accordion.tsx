import {AccordionTitle} from "common/components/Accordion/AccordionTitle.tsx";
import {AccordionBody} from "common/components/Accordion/AccordionBody.tsx";

export const Accordion = () => {
    console.log("Accordion rendering")

    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    );
};