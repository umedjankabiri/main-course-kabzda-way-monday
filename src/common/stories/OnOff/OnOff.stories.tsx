import {OnOff} from "common/components/OnOff/OnOff.tsx";
import {action} from "@storybook/addon-actions";
import {Meta} from "@storybook/react";

const meta: Meta<typeof OnOff> = {
    title: 'OnOff stories',
    component: OnOff,
    args: {
        on: true,
        onClick: () => {}
    }
}

export default meta

const onClickHandler = action("Clicked handler")
export const switchedOn = () => <OnOff on={true} onClick={onClickHandler}/>
