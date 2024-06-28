import {Star} from "common/components/Star";

export const Rating = () => {
    console.log("Rating rendering")

    return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
            </div>
    );
};