import {RatingValueProps} from "common/types/RatingValueProps.ts";

export type StarProps = {
    value: RatingValueProps
    selected: boolean
    onClick?: (value: RatingValueProps) => void
}