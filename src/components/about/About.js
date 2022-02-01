import React from "react";

function About() {
  return (
    <div>
      <div>
        <br />
        {/* <!-- ======= About Us Section ======= --> */}
        <div className="container p-2">
          <div className="card box-shadow">
            <div className="card-head">
              <div className="section-title">
                <h2 className="text-primary">
                  <strong>ABOUT</strong>
                </h2>
                <hr />
                <p className="p p-5">
                  <strong className="text-primary">Fashion5</strong> is a
                  private site that provides you with Purchasable Clothing
                  assesories with easy Clicks. A Platform to Purchase with easy
                  steps.
                </p>
                <p className="p">
                  Private stores can also reach out to sell on this platform.
                  Terms & Conditions may apply.
                </p>
              </div>
            </div>
            <div className="card-body">
              <section id="about" className="about">
                <div className="container-form">
                  <div className="column">
                    <div className="col-12 pt-4 pt-lg-0 order-2 order-lg-1 content">
                      <p className="font-italic">
                        For Inquiries, General Information, please send a Email:
                        <strong>Fashion5@gmail.com</strong> and response with be
                        provided Shortly.
                      </p>
                    </div>
                  </div>
                  <hr />
                </div>
              </section>
            </div>
          </div>
        </div>
        <br />
        <br />
        {/* <!-- @*#############################################################################*@ --> */}
        {/* <!-- End About Us Section --> */}
      </div>
    </div>
  );
}

export default About;
