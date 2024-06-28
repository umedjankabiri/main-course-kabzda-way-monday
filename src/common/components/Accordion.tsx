import {AccordionTitle} from "common/components/AccordionTitle.tsx";
import {AccordionBody} from "common/components/AccordionBody.tsx";

export const Accordion = () => {
    console.log("Accordion rendering")

    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    );
};