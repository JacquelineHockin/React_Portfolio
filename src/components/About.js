import React from "react";

function About() {
  return (
    <section id="aboutMe" className="my-5 intro">
      <p class="me1"></p>

      <div class=" flex-row wrapper">
        <div class="intro-img">
          <img id="profpic" src="profpic.jpg" alt="prof-pic" />
          <p class="me">
          Hello! My name is Jacqueline. I am a health/wellness practitioner and community activist building apps to do a lil somethin' good. 
        I'm interested in working with individuals and teams that have a philanthropic lens. I find that I'm the most driven and creative
        when connected to the 'why'. Please don't hesitate to reach out if there's a project you believe I'd be a good addition to. 
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
