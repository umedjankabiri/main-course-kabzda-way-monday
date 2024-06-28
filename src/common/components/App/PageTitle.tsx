import {PageTitleProps} from "common/types/PageTitleProps.ts";

export const PageTitle = (props: PageTitleProps) => {
    console.log("PageTitle rendering")

    return <h1>{props.title}</h1>
};