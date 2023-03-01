import React from 'react';
import { useForm, ValidationError } from '@formspree/react';



const Impact = () => {

    function ContactForm() {
        const [state, handleSubmit] = useForm("mlekngyp");
       
        if (state.succeeded) {
            return <p>Thanks Sending your request!</p>;
        }
        return (
            <form onSubmit={handleSubmit}>
                <h1>FUND RAISING FORM</h1>
                <p>fill the forms below and let us know what you need to raise funds for.</p>
  <div className="row">
    <div className="col">
    <label htmlFor="Fullname">
              FullName:
            </label><br />
            <input
              id="Fullname"
              type="text" 
              name="Fullname"
              className="form-control" required
            />
            <ValidationError 
              prefix="Fullname" 
              field="Fullname"
              errors={state.errors}
            />
    </div>
    <div className="col">
    <label htmlFor="FundAmount">
              Fund Amount:
            </label><br />
            <input
              id="FundAmount"
              type="number" 
              name="FundAmount"
              className="form-control" required
            />
            <ValidationError 
              prefix="FundAmount" 
              field="FundAmount"
              errors={state.errors}
            />
    </div>
  </div>

            <br />
            <label htmlFor="email">
              Email Address
            </label><br />
            <input
              id="email"
              type="email" 
              name="email"
              className="form-control" required
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
            <label htmlFor="message">
                Reasons for fund:
            </label>
            <textarea
              id="message"
              name="message"
              className="form-control" required
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            <span id="error"></span> <br />
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>
        );
      }

    return(
        <div className="Impact" id="Impact">
            <div className="container">
                <div className="row headline">
                    <div className="col-md-6 left-side">
                        <p data-aos="fade-up">Need Help?</p>
                        <h1 data-aos="fade-up">Transforming Communities <span> Impacted by COVID-19 </span></h1>
                    </div>
                    <div className="col-md-6">
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 left-side pt-3">
                        <h1 data-aos="fade-left">Request For Funds</h1>
                       <p data-aos="fade-up">
                        If you or someone you know has been affected by COVID-19, we encourage you to reach out to us for assistance. Our team of dedicated professionals and volunteers is here to help you access the resources and support you need to get through this difficult time. Whether you need help with food and household supplies, medical care, or other critical support, we are here to assist you in any way we can.</p>
                        <button data-aos="zoom-in" data-toggle="modal" data-target="#requestingFunds"><i className="fa-solid fa-hand-holding-hand"></i>Request Funds</button>
                    </div>
                    <div data-aos="zoom-in-up" className="col-md-6 pt-3 right-side">
                    </div>
                </div>
            </div>
            <div>

            <div className="modal fade" id="requestingFunds" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
        </div>
        </div>
    )
}

export default Impact;