"use client"

import { LeadForm } from "./LeadForm"
import { LeadText } from "./LeadText"
import "./page.css"

export default function Home () {
  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">

      <header className="mb-auto">
        <div>
          <h3 className="mb-0">Educacau</h3>
          {/* <nav className="nav nav-masthead justify-content-center float-md-end">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#">Features</a>
            <a className="nav-link" href="#">Contact</a>
          </nav> */}
        </div>
      </header>

      <main className="px-3">

        <LeadText />

        <LeadForm />

      </main>
    </div>
  )
}
