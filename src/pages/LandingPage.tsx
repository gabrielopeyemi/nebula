import React from "react"
import Header from "@/components/landingpage/Header"
import CodeSnippet from "@/components/landingpage/CodeSnippet"
import WalkThrough from "@/components/landingpage/WalkThrough"
import ChooseSection from "@/components/landingpage/ChooseSection"

const LandingPage = () => {
  return (
    <div>
      <Header />
      <CodeSnippet />
      <WalkThrough />
      <ChooseSection />
    </div>
  )
}

export default LandingPage
