import { LeadForm } from "./LeadForm";

export default function LeadSection () {
  return (
    <div className="container col-xl-10 col-xxl-8 px-4 pt-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-6 fw-bold lh-1 mb-3">Por <b>R$129,90</b>, você terá acesso:</h1>
          <div className="col-lg-10 fs-4">
            <p>Técnico virtual 24 horas por dia</p>
            <p>Plataforma com mais de 200 vídeos curtos sobre identificação e solução de pragas, ESG, crédito financeiro e muito mais!</p>
          </div>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <LeadForm />
        </div>
      </div>
    </div>
  )
}
