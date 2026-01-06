import React from "react";

function Stats() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left side */}
        <div className="col-md-6 px-4">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>

          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted" style={{ maxWidth: "500px" }}>
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>

          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted" style={{ maxWidth: "500px" }}>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted" style={{ maxWidth: "500px" }}>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted" style={{ maxWidth: "500px" }}>
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        {/* Right side */}
        <div className="col-md-6 px-4 text-center">
          <img
            src="/media/img/ecosystem.png"
            alt="Zerodha ecosystem"
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />

          <div className="d-flex justify-content-center gap-5 mt-4">
            <a href="#" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>

            <a href="#" style={{ textDecoration: "none" }}>
              Try Kite demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;


/* import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>

          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>

          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        <div className="col-6 p-5">
          <img
            src="/media/img/ecosystem.png"
            alt="Zerodha ecosystem"
            style={{ width: "90%" }}
          />

          <div className="text-center mt-3">
          <a href="#" className="mx-5" style={{ textDecoration: "none" }}>
            Explore our products{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          
          <a href="#" style={{ textDecoration: "none" }}>
            Try Kite demo{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
 */