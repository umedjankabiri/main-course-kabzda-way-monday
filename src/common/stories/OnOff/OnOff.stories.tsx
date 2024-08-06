import {OnOff} from "common/components/OnOff/OnOff.tsx";
import {useState} from "react";
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
export const switchedOff = () => <OnOff on={false} onClick={onClickHandler}/>
export const DemonstrationOnOff = () => {
    const [on, setOn] = useState<boolean>(false);

    return (
        <>
            <OnOff on={on} onClick={setOn}/>
        </>
    )
}