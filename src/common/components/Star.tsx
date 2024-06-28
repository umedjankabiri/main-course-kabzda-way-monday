export const Star = (props: any) => {
    console.log("Star rendering")
    if (props.selected) {
        return <span><b>Start </b></span>
    } else
        return <span>Start </span>
};