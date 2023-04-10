import React from "react";
import "./styles/contact.scss";

const Contact = () => {
  return (
    <div>
      <div className="container rtl p-3 p-md-5 persian-font">
        <div className="row">
          <div className="col-md-12 p-2 p-md-5">
            <div className="border-bottom-primary">
              <span className="">تماس با من</span>
            </div>
            <h5>
              جهت تماس با من میتوانید از مسیرهای ارتباطی زیر استفاده کنید:
            </h5>
            <ul className="contact-list p-1 p-md-4">
              <li>
                <i className="fa fa-envelope-open-o" aria-hidden="true"></i>
                <span>ایمیل :</span>
                <h5>
                  <a href="mailto:mamad.taheri.68@gmail.com">
                    mamad.taheri.68@gmail.com
                  </a>
                </h5>
              </li>

              <li>
                <i className="fa fa-github" aria-hidden="true"></i>
                <span>لینکدین :</span>
                <h5>
                  <a
                    href="https://www.linkedin.com/in/mohammad-taheri1/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://www.linkedin.com/in/mohammad-taheri1/
                  </a>
                </h5>
              </li>

              <li>
                <i className="fa fa-github" aria-hidden="true"></i>
                <span>گیت هاب :</span>
                <h5>
                  <a
                    href="https://github.com/mohammad-taheri1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://github.com/mohammad-taheri1
                  </a>
                </h5>
              </li>

              <li>
                <i className="fa fa-telegram" aria-hidden="true"></i>
                <span> تلگرام :</span>
                <h5>
                  <a
                    href="http://t.me/mohammad_taheri_1989"
                    target="_blank"
                    rel="noreferrer"
                  >
                    t.me/mohammad_taheri_1989
                  </a>
                </h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
