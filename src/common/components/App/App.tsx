import 'common/components/App/App.css'
import {Rating} from "common/components/Rating/Rating.tsx";
import {Accordion} from "common/components/Accordion/Accordion.tsx";
import {PageTitle} from "common/components/App/PageTitle.tsx";
import {OnOff} from "common/components/OnOff/OnOff.tsx";
import {LocalOnOff} from "common/components/LocalOnOff/LocalOnOff.tsx";
import {UncontrolledAccordion} from "common/components/UncontrolledAccordion/UncontrolledAccordion.tsx";
import {UncontrolledRating} from "common/components/UncontrolledRating/UncontrolledRating.tsx";

function App() {
    console.log("App rendering")

    return (
        <div>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <Rating value={3}/>
            <Accordion title={'Menu'} collapsed={false}/>
            <Accordion title={'Users'} collapsed={false}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <OnOff on={true}/>
            <LocalOnOff/>
            <UncontrolledAccordion title="Menu"/>
            <UncontrolledAccordion title="Users"/>
            <UncontrolledRating/>
        </div>
    )
}

export default App