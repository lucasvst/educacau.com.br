export default function PricingSection () {
  return (
    <div className="container col-xl-10 col-xxl-8 px-4 pt-3">
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal">Investimento</h1>
      </div>
      <div className="row row-cols-1 row-cols-md-2 mb-3 text-center">
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Semestral</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">R$399,90<small className="text-muted fw-light">/mês</small></h1>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm border-primary">
            <div className="card-header py-3 text-white bg-primary border-primary">
              <h4 className="my-0 fw-normal">Anual</h4>
            </div>
            <div className="card-body position-relative">
              <h1 className="card-title pricing-card-title">R$349,90<small className="text-muted fw-light">/mês</small></h1>
              <span className="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger">
                12,5% de desconto
            </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
