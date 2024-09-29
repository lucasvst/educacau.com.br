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

        <div className="b-example-divider"></div>

        <ScreenshotSection />

        <PricingSection />

        <LeadSection />

        <div className="b-example-divider"></div>

      </main>

    </body>
  )
}
