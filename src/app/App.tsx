import './App.css'
import {Rating} from "common/components/Rating.tsx";
import {Accordion} from "common/components/Accordion.tsx";
import {AppTitle} from "common/components/AppTitle.tsx";

function App() {
  console.log("App rendering")

  return (
    <>
      <AppTitle/>
      <Rating/>
      <Accordion/>
      <Rating/>
    </>
  )
}

export default App