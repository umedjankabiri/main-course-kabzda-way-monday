import './App.css'
import {Rating} from "common/components/Rating.tsx";
import {Accordion} from "common/components/Accordion.tsx";
import {AppTitle} from "common/components/AppTitle.tsx";

function App() {


  return (
    <>
      <AppTitle/>
      <Rating/>
      <Accordion/>
    </>
  )
}

export default App
