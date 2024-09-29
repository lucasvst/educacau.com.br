export default function Screenshot () {
  return (
    <div className="px-4 pt-5 my-5 text-center border-bottom">
      <h1 className="display-4 mb-5 fw-bold">Educação na palma da mão</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-5">
          Quantas vezes você já teve que resolver um problema na sua lavoura sozinho,
          sem saber se tomou a melhor decisão? O seu sofrimento acaba agora!
          Tenha um técnico virtual à sua disposição 24 horas por dia.
          Suas dúvidas agora terão respostas rápidas e diretas.
          E o melhor? Tudo na palma da sua mão, direto no seu WhatsApp.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Tenho interesse</button>
        </div>
      </div>
      <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
        <div className="container px-5">
          <img src="/screenshot.jpg" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
        </div>
      </div>
      {/* <p className="lead mb-4">
        Com nosso assistente virtual, você
        terá um especialista em cacau à sua disposição 24 horas
        por dia, 7 dias por semana, para tirar suas dúvidas
        e te ajudar a otimizar sua produção. Inove no campo
        e colha resultados ainda mais saborosos!
      </p> */}
    </div>
  )
}
