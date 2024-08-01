import {Star} from "common/components/Star/Star.tsx";
import {useState} from "react";

export const UncontrolledRating = () => {
    console.log("Rating rendering")
    const [value, setValue] = useState<number>(0);

    return (
        <div>
            <Star selected={value > 0} onClick={()=> setValue(1)}/>
            <Star selected={value > 1} onClick={()=> setValue(2)}/>
            <Star selected={value > 2} onClick={()=> setValue(3)}/>
            <Star selected={value > 3} onClick={()=> setValue(4)}/>
            <Star selected={value > 4} onClick={()=> setValue(5)}/>
        </div>
    );
};