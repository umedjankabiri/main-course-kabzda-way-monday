import {AccordionTitle} from "common/components/Accordion/AccordionTitle.tsx";
import {AccordionBody} from "common/components/Accordion/AccordionBody.tsx";
import {AccordionProps} from "common/types/AccordionProps.ts";

export const Accordion = (props: AccordionProps) => {
    console.log("Accordion rendering")

    return props.collapsed ? <AccordionTitle title = {props.title}/>
        : (
            <>
                <AccordionTitle title = {props.title}/>
                <AccordionBody/>
            </>

    );
};