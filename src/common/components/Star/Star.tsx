import {StarProps} from "common/types/StarProps.ts";

export const Star = (props: StarProps) => {
    console.log("Star rendering")
    return (
        <span onClick={props.onClick}>
            {props.selected ? <b>Star </b> : "Star "}
        </span>
    )
};