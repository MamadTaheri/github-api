import React from "react";
import "./styles/About.css"

// image
// import img from '../assets/images/img.jpg'
import img from '../assets/images/clean.png'

const About = () => {
  return (
    <div className="container p-3 p-md-5">
      <div className="row custom-row-for-responsive">
        <div className="col-md-6">
          <br />
          <p>
            Hi. My name is mohammad. I'm originally from Iran. I have Master of
            Computer Engineering degree. After a long journey on different
            works, I decided to start my career on the IT world.
          </p>
          <p>
            In order to make progress, You need to learn. Sometimes, learning
            and gaining new knowledge from books and courses can be hard. But,
            It's an vital key to success.
          </p>
          <p>
            So, I started working on Web technology. First of all, I started
            with Wordpress, a good and easy-to-learn CMS. Then, I studied PHP
            language and i used it to make some simple websites. PHP is a
            powerfull language which vastly used all over the world. Also,
            concurrently I started learning The Three Musketeers of Frontend :
          </p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVA SCRIPT</li>
          </ul>
          <p>
            Looking for more abilities and performances, I found Laravel as a
            very powerfull and convenient framework to advance in web
            programming using PHP language. Knowadays, I'm trying to make
            progress as much as I can in working with laravel.
          </p>
        </div>

        <div className="col-md-6">
           <img src={img} alt="Mohammad Taheri" className="img-fluid custom-avatar" />
        </div>
      </div>
    </div>
  );
};

export default About;
