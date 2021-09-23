import React from 'react';

const Contact = () => {
    return (
        <div>
            <div class="container rtl">
              <div class="row">
                <div class="col-md-12 p-2 p-md-5">
                <h2>تماس با من</h2>
                <h5>جهت تماس با من میتوانید از مسیرهای ارتباطی زیر استفاده کنید:</h5>
                <ul class="contact-list p-1 p-md-4">

                    <li>
                        <i class="fa fa-envelope-open-o" aria-hidden="true"></i>
                        <span>ایمیل :</span>
                        <span>mamad.taheri.68@gmail.com</span>
                    </li>

                    <li>
                        <i class="fa fa-github" aria-hidden="true"></i>
                        <span>لینکدین :</span>
                        <a href="https://www.linkedin.com/in/mohammad-taheri-186101177/" target="_blank">مشاهده لینک</a>
                    </li>

                    <li>
                        <i class="fa fa-github" aria-hidden="true"></i>
                        <span>گیت هاب :</span>
                        <a href="https://github.com/MamadTaheri68" target="_blank">مشاهده لینک</a>
                    </li>

                    <li>
                        <i class="fa fa-telegram" aria-hidden="true"></i>
                        <span>  تلگرام :</span>
                        <a href="http://t.me/mohammad_taheri_1989" target="_blank">مشاهده لینک</a>
                    </li>

                </ul>


            </div>
        </div>
    </div>
        </div>
    );
};

export default Contact;