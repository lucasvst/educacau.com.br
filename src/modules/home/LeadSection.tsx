import { LeadForm } from "./LeadForm";

export default function LeadSection () {
  return (
    <div className="container col-xl-10 col-xxl-8 px-4 pt-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">Vertically centered hero sign-up form</h1>
          <p className="col-lg-10 fs-4">
            Com nosso assistente virtual, você terá um especialista em cacau à sua disposição 24 horas por dia,
            7 dias por semana, para tirar suas dúvidas e te ajudar a otimizar sua produção.
            Inove no campo e colha resultados ainda mais saborosos!
          </p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <LeadForm />
        </div>
      </div>
    </div>
  )
}
