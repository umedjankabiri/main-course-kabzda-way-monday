import {Rating} from "common/components/Rating/Rating.tsx";
import {action} from "@storybook/addon-actions";

export default {
    title: "Rating stories",
    component: Rating,
    args: {
        value: 0,
        onClick: () => {}
    }
}

const onClickHandler = action("Clicked handler")
export const EmptyRating = () => <Rating value={0} onClick={onClickHandler} />
