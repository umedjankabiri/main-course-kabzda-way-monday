import {AccordionTitle} from "common/components/Accordion/AccordionTitle.tsx";
import {AccordionBody} from "common/components/Accordion/AccordionBody.tsx";
import {AccordionProps} from "common/types/AccordionProps.ts";

export const Accordion = (props: AccordionProps) => {
    console.log("Accordion rendering")

    return (
        <>
            <AccordionTitle title={props.title} collapsed={!props.collapsed} onClick={props.onClick}/>
            {!props.collapsed && <AccordionBody/>}
        </>
    );
};