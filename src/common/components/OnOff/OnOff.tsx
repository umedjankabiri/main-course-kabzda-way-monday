import {OnOffProps} from "common/types/OnOffProps.ts";
import s from "common/components/OnOff/onOff.module.css"

export const OnOff = (props: OnOffProps) => {

    return (
        <div className={s.mainWrapper}>
            <div style={props.onOff ? {backgroundColor: "green"} : {backgroundColor: "white"}} className={s.on}>
                ON
            </div>
            <div style={!props.onOff ? {backgroundColor: "red"} : {backgroundColor: "white"}} className={s.off}>
                OFF
            </div>
            <div style={props.onOff ? {backgroundColor: "green"} : {backgroundColor: "red"}} className={s.circle}>

            </div>
        </div>
    );
};