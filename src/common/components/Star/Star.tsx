import {StarProps} from "common/types/StarProps.ts";

export const Star = (props: StarProps) => {
    console.log("Star rendering")
    if (props.selected) {
        return <span><b>Star </b></span>
    } else
        return <span>Star </span>
};