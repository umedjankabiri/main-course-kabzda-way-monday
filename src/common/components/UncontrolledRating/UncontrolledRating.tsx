import {Star} from "common/components/Star/Star.tsx";
import {useState} from "react";

export const UncontrolledRating = () => {
    console.log("Rating rendering")
    const [value, setValue] = useState<number>(0);

    return (
        <div>
            <Star selected={value >= 0}/>
            <button onClick={()=> setValue(0)}>0</button>
            <Star selected={value >= 1}/>
            <button onClick={()=> setValue(1)}>1</button>
            <Star selected={value >= 2}/>
            <button onClick={()=> setValue(2)}>2</button>
            <Star selected={value >= 3}/>
            <button onClick={()=> setValue(3)}>3</button>
            <Star selected={value >= 4}/>
            <button onClick={()=> setValue(4)}>4</button>
        </div>
    );
};