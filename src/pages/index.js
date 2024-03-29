import React from "react"
import NavBar from "../components/navbar"
import Head from "../components/head"
import Header from "../components/header"
import selfie from "./images/mainpageimg/sydney.jpg"
import archer from "./images/mainpageimg/archer.jpg"
import baboo from "./images/mainpageimg/baboo.jpg"

export default function Home() {
  return (
    <div>
      <Head />
      <Header name="Sydney Peterson" />
      <NavBar />
      <section>
        <h2>About Me</h2>
        <hr width="95%" />
        <article id="about">
          <img src={selfie} alt="Sydney Selfie" />
        </article>
        <div id="about-text">
          <p>
            I was born and raised in eastern Washington. After graduating high
            school, I moved to the Seattle area to work, go to school, and be
            with my now husband. I have been there ever since.
          </p>

          <p>
            After high school I started work in retail. As I worked my way into
            management, I realized my potential to grow was severely limited
            without furthering my education. In the summer of 2016, I started my
            college career at Edmonds Community College. After time and
            dedication, I was admitted to University of Washington (UW) in the
            summer of 2018. While there, I discovered my passion for history
            early on. I quickly fell in love with the research process and was
            fortunate enough to have professors that found new and interesting
            ways to engage students in history and research.
          </p>

          <p>
            In one course, I was tasked with creating a website based off my
            research of a block on the Seattle Waterfront. This project gave me
            a deeper understanding of Washington State and the city of Seattle.
            In another course focused on Postwar Japan, I researched Japan’s pop
            culture mediums before, during, and after World War II. I learned
            how politics influences pop culture and, in turn, the power pop
            culture has over people’s perceptions of events. As an enthusiast of
            pop culture this was an impactful research project for me.
          </p>

          <p>
            As I got more ingrained in history, I started to look for
            opportunities to continue exploring historical research outside of
            the college setting. I gravitated toward Archives and Museums. I
            started by volunteering at Museum of Pop Culture (MoPop) in 2019 and
            soon afterward at the National Archives and Records Administration
            (NARA). I also interned at the Washington State Archive (WSA) in
            Bellevue WA in 2020 until Covid-19 hit. Now I have a much better
            understanding of how these institutions operate and the value they
            provide to the public.
          </p>

          <p>
            During the Covid-19 epidemic, I took the opportunity to learn web
            development at UW. Learning how to use tools such as; html, css,
            javascript, node.js, and sql allowed me to improve my ability to
            organize and communicate complex ideas in a more consumable
            environment. I quickly found ways to combine my love of history and
            research with my new skills in web development. As part of a class
            project, I created a website to host a history quiz.
          </p>

          <p>
            After graduating from UW, I am continuing to expand my knowledge of
            full stack development. I am currently, working on combining the
            skills I learned in school with scalable cloud solutions like AWS.
            This very website is hosted on S3 with Route53 as my DNS. My next
            goal will be to build a more fully fledged out version of my history
            quiz onto AWS and to make it public.
          </p>

          <p>
            When I’m not expanding my knowledge of history or programming, I can
            be found between the pages of a good book or trying to create
            interesting worlds of my own. I also have a love of movies and
            television and am known, among friends, as the go-to for pop
            culture.
          </p>
        </div>
      </section>

      <section>
        <h2>Adorable Pets</h2>
        <div id="cats">
          <figure>
            <img src={archer} alt="Archer helping with homework" />
            <figcaption>Archer</figcaption>
          </figure>
          <figure>
            <img src={baboo} alt="Baboo helping with homework" />
            <figcaption>Baboo</figcaption>
          </figure>
        </div>
      </section>
    </div>
  )
}
