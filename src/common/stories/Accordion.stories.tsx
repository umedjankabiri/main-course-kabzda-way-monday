import {Meta} from "@storybook/react";
import {Accordion} from "common/components/Accordion/Accordion.tsx";

const meta: Meta<typeof Accordion> = {
    title: 'Accordion',
    component: Accordion,
    args: {
        title: 'Accordion',
        collapsed: false,
        onClick: () => {}
    }
}

export default meta;

export const CollapsedAccordion = () => <Accordion title={"Collapsed Accordion"} collapsed={true} onClick={()=> {}} />
export const OpenedAccordion = () => <Accordion title={"Opened Accordion"} collapsed={false} onClick={()=> {}}/>
