export default function PricingSection () {
  return (
    <div className="container col-xl-10 col-xxl-8 px-4 pt-5">
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal">Pricing</h1>
        <p className="fs-5 text-muted">
          Quickly build an effective pricing table for your potential customers with this Bootstrap example.
          It’s built with default Bootstrap components and utilities with little customization.
        </p>
      </div>
      <div className="row row-cols-1 row-cols-md-2 mb-3 text-center">
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Mensal</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">R$149,90<small className="text-muted fw-light">/mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm border-primary">
            <div className="card-header py-3 text-white bg-primary border-primary">
              <h4 className="my-0 fw-normal">Anual</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">R$129,90<small className="text-muted fw-light">/mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>30 users included</li>
                <li>15 GB of storage</li>
                <li>Phone and email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
