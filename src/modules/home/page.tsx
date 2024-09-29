"use client"

import { LeadForm } from "./LeadForm"
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

        <h1 className="mb-4">Educação na palma da mão</h1>

          <p className="lead mb-2">
            Dê um salto de produtividade com o Educacau. Nossa plataforma inteligente
            conecta você ao mundo do cacau, oferecendo informações precisas e
            atualizadas sobre as melhores práticas de cultivo, pragas,
            doenças e muito mais.
          </p>

          <p className="lead mb-4">
            Com nosso assistente virtual, você
            terá um especialista em cacau à sua disposição 24 horas
            por dia, 7 dias por semana, para tirar suas dúvidas
            e te ajudar a otimizar sua produção. Inove no campo
            e colha resultados ainda mais saborosos!
          </p>

        <LeadForm />

      </main>
    </div>
  )
}
