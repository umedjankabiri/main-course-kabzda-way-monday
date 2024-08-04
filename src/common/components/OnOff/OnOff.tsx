import {OnOffProps} from "common/types/OnOffProps.ts";
import s from "common/components/OnOff/onOff.module.css"

export const OnOff = (props: OnOffProps) => {
    const onClickOnHandler = () => props.onClick && props.onClick(true)
    const onClickOffHandler = () => props.onClick && props.onClick(false)

    return (
        <div className={s.mainWrapper}>
            <div style={props.on ? {backgroundColor: "green"} : {backgroundColor: "white"}} className={s.on} onClick={onClickOnHandler}>
                ON
            </div>
            <div style={!props.on ? {backgroundColor: "red"} : {backgroundColor: "white"}} className={s.off} onClick={onClickOffHandler}>
                OFF
            </div>
            <div style={props.on ? {backgroundColor: "green"} : {backgroundColor: "red"}} className={s.circle}>
            </div>
        </div>
    );
};