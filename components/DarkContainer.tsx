import { CTASection } from "./sections/CTA"
import Faq from "./sections/Faq"
import Niches from "./sections/Niches"
import RoadmapJourney from "./sections/RoadmapJourney"

const DarkContainer = () => {
  return (
    <>
        <Niches/>
        <RoadmapJourney/>
        <Faq/>
        <CTASection/>
    </>
  )
}

export default DarkContainer