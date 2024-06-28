import './App.css'
import {Rating} from "common/components/Rating.tsx";
import {Accordion} from "common/components/Accordion/Accordion.tsx";
import {PageTitle} from "../app/PageTitle.tsx";

function App() {
  console.log("App rendering")

  return (
    <div>
        <PageTitle title={'This is APP component'}/>
        <PageTitle title={'My friends'}/>
        Article 1
      <Rating value={3}/>
      <Accordion title={'Menu'}/>
      <Accordion title={'Users'}/>
        Article 2
      <Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>
    </div>
  )
}

export default App