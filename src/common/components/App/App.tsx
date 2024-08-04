import 'common/components/App/App.css'
import {Rating} from "common/components/Rating/Rating.tsx";
import {Accordion} from "common/components/Accordion/Accordion.tsx";
import {PageTitle} from "common/components/App/PageTitle.tsx";
import {OnOff} from "common/components/OnOff/OnOff.tsx";
import {UncontrolledOnOff} from "common/components/UncontrolledOnOff/UncontrolledOnOff.tsx";
import {UncontrolledAccordion} from "common/components/UncontrolledAccordion/UncontrolledAccordion.tsx";
import {UncontrolledRating} from "common/components/UncontrolledRating/UncontrolledRating.tsx";
import {useState} from "react";
import {RatingValueProps} from "common/types/RatingValueProps.ts";

function App() {
    console.log("App rendering")
    const [ratingValue, setRatingValue] = useState<RatingValueProps>(0)
    const [accordionMenu, setAccordionMenu] = useState<boolean>(false)
    const [accordionUsers, setAccordionUsers] = useState<boolean>(false)
    const [on, setOn] = useState<boolean>(false)

    return (
        <div>
            <h1>Controlled components</h1>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <Accordion title={'Menu'} collapsed={accordionMenu} onClick={setAccordionMenu}/>
            <Accordion title={'Users'} collapsed={accordionUsers} onClick={setAccordionUsers}/>
            Article 2
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <OnOff on={on} onClick={setOn}/>

            <h1>Uncontrolled components</h1>
            <UncontrolledOnOff/>
            <UncontrolledAccordion title="Menu"/>
            <UncontrolledAccordion title="Users"/>
            <UncontrolledRating/>
        </div>
    )
}

export default App