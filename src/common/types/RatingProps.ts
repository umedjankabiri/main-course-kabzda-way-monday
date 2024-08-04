import {RatingValueProps} from "common/types/RatingValueProps.ts";

export type RatingProps = {
    value: RatingValueProps
    onClick?: (value: RatingValueProps) => void
}