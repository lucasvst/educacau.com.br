"use client"

import ScreenshotSection from "./ScreenshotSection"
import LeadSection from "./LeadSection"

import "./page.css"
import PricingSection from "./PricingSection"

export default function Home () {
  return (
    <body>

      <main>
        <h1 className="visually-hidden">Educacau</h1>

        <img
          src="/logo.png"
          className="img-fluid border rounded-3 shadow-lg mt-5"
          // alt="Example image"
          width="100"
          height="100"
        />

        {/* <div className="b-example-divider"></div> */}

        <ScreenshotSection />

        <PricingSection />

        <LeadSection />

      </main>

    </body>
  )
}
