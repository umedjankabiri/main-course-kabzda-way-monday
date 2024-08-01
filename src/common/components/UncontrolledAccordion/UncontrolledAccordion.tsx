import {useState} from "react";
import {AccordionTitle} from "common/components/Accordion/AccordionTitle.tsx";
import {AccordionBody} from "common/components/Accordion/AccordionBody.tsx";
import {UncontrolledAccordionProps} from "common/types/UncontrolledAccordionProps.ts";

export const UncontrolledAccordion = (props: UncontrolledAccordionProps) => {
    console.log("Accordion rendering")
    const [collapsed, setCollapsed] = useState(false);

    return (
            <>
                <AccordionTitle title = {props.title} onClick={()=> setCollapsed(!collapsed)}/>
                { collapsed && <AccordionBody/>}
            </>
    );
};