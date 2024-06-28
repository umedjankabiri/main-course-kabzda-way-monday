import './App.css'
import {Rating} from "common/components/Rating.tsx";
import {Accordion} from "common/components/Accordion/Accordion.tsx";
import {AppTitle} from "../app/AppTitle.tsx";

function App() {
  console.log("App rendering")

  return (
    <div>
        <AppTitle/>
        Article 1
      <Rating/>
      <Accordion/>
        Article 2
      <Rating/>
    </div>
  )
}

export default App