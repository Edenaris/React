import './index.css'
import Header from "./component/Header"
import Section from "./component/Section"
import SectionLower from "./component/SectionLower"
function App() {
  const year = 2095;
  const dataT = new Date().getFullYear();
  return (
    <>
      <Header data={dataT}></Header>
      <Section yearData={year} title=" Stranger Things2 "
      text ="In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries."
      ></Section>
      <SectionLower popular={"POPULAR THIS WEEK2"}></SectionLower>
    </>
  )
}

export default App
