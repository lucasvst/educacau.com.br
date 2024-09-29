export default function Screenshot () {
  return (
    <div className="px-4 pt-5 my-5 text-center border-bottom">
      <h1 className="display-4 fw-bold">Educação na palma da mão</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Dê um salto de produtividade com o Educacau. Nossa plataforma inteligente
          conecta você ao mundo do cacau, oferecendo informações precisas e
          atualizadas sobre as melhores práticas de cultivo, pragas,
          doenças e muito mais.
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
