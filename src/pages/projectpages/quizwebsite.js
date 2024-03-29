import React from "react"
import NavBar from "../../components/navbar"
import Head from "../../components/head"
import JulyBlogPostPhoto1 from "../images/quizwebimg/singlePlayer.jpg"
import JulyBlogPostPhoto2 from "../images/quizwebimg/quizSelection.jpg"
import JulyBlogPostPhoto3 from "../images/quizwebimg/quizResults.jpg"
import JulyBlogPostPhoto4 from "../images/quizwebimg/quizLayout.jpg"
import JulyBlogPostPhoto5 from "../images/quizwebimg/quizHomepage.jpg"
import JulyBlogPostPhoto6 from "../images/quizwebimg/quizHistory.jpg"
import JulyBlogPostPhoto7 from "../images/quizwebimg/newGroup.jpg"
import JulyBlogPostPhoto8 from "../images/quizwebimg/groupLeaderboard.jpg"
import JulyBlogPostPhoto9 from "../images/quizwebimg/groupChallenge.jpg"
import JulyBlogPostPhoto10 from "../images/quizwebimg/editGroup.jpg"
import JulyBlogPostPhoto11 from "../images/quizwebimg/tableDesign.jpg"
import AugustBlogPostPhoto from "../images/quizwebimg/trelloExample.png"
import SeptemberBlogPostPhoto from "../images/quizwebimg/buttonPlan.jpg"
import OctoberBlogPostPhoto from "../images/quizwebimg/groupSignInError.png"
import DecemberBlogPostPhoto from "../images/quizwebimg/cssSheepExample.png"
import Header from "../../components/header"

const QuizProject = () => {
  return (
    <div>
      <Head />
      <Header name="Quiz Website Project" />
      <NavBar />

      <section className="blog">
        <section id="synopsis">
          <h2>Synopsis</h2>
          <p>
            The goal of this project is to build a history quiz webpage which
            supports a wide variety of topics. It will allow players to create
            profiles and choose quiz topics to start or continue. It will
            include both individual and group challenge quiz formats. The group
            challenges are created by a group creator; who names the group,
            selects the quiz the group will take, and invites players to accept
            the challenge. Individual quiz takers can take any quiz as many
            times as they like and their progress will be saved and reported for
            the most recent attempt of each quiz.
          </p>
          <p>
            In a previous project, I introduced myself to AWS for the first time
            and practiced using some of the services like S3 and Route 53. In
            this project, I intend to expand my knowledge into some of AWS's
            more dynamic service offeriings including; Lambda, API Gateway, and
            DynamoDB services. I also hope to learn significantly more about IAM
            and the principles of secure service architectures.
          </p>
        </section>

        <section className="update">
          <h2>July 12, 2020</h2>
          <p>
            In May 2020, I made a simple history quiz for my web development
            className, but I wanted to expand on it and utilize enterprise
            scaled cloud services. Before getting started on the tech however, I
            needed a detailed plan. First, I created rough sketches to visualize
            the end product. Once I was happy with the general look, I bought
            three different size sketchbooks to simulate desktop, tablet, and
            mobile screens. I illustrated each web page as a separate sheet to
            help visualize user actions and noted the button event handlers on
            each page to track interactions. Once I finished, I had it reviewed
            by my family to integrate direct feedback into the design. For
            instance, it was suggested that a create/edit player page should be
            added. I updated my design to include the recommendation. I saw the
            value in allowing players to control their information.
          </p>
          <div className="update-img">
            <figure>
              <a href={JulyBlogPostPhoto1}>
                <img
                  src={JulyBlogPostPhoto1}
                  alt="Design of Single Player Page"
                  target="_blank"
                />
              </a>
            </figure>
            <figure>
              <a href={JulyBlogPostPhoto2}>
                <img
                  src={JulyBlogPostPhoto2}
                  alt="Design of Quiz Selection Page"
                  target="_blank"
                />
              </a>
            </figure>
            <figure>
              <a href={JulyBlogPostPhoto3}>
                <img
                  src={JulyBlogPostPhoto3}
                  alt="Design of Quiz Results Page"
                  target="_blank"
                />
              </a>
            </figure>
            <figure>
              <a href={JulyBlogPostPhoto4}>
                <img
                  src={JulyBlogPostPhoto4}
                  alt="Design of Quiz Layout"
                  target="_blank"
                />
              </a>
            </figure>
            <figure>
              <a href={JulyBlogPostPhoto5}>
                <img
                  src={JulyBlogPostPhoto5}
                  alt="Design of Quiz Homepage"
                  target="_blank"
                />
              </a>
            </figure>
            <figure>
              <a href={JulyBlogPostPhoto6}>
                <img
                  src={JulyBlogPostPhoto6}
                  alt="Design of Quiz History Page"
                  target="_blank"
                />
              </a>
            </figure>
            <figure>
              <a href={JulyBlogPostPhoto7}>
                <img
                  src={JulyBlogPostPhoto7}
                  alt="Design of New Group Page"
                  target="_blank"
                />
              </a>
            </figure>
            <figure>
              <a href={JulyBlogPostPhoto8}>
                <img
                  src={JulyBlogPostPhoto8}
                  alt="Design of Group Leaderboard Page"
                  target="_blank"
                />
              </a>
            </figure>
            <figure>
              <a href={JulyBlogPostPhoto9}>
                <img
                  src={JulyBlogPostPhoto9}
                  alt="Design of Group Challenge Page"
                  target="_blank"
                />
              </a>
            </figure>
            <figure>
              <a href={JulyBlogPostPhoto10}>
                <img
                  src={JulyBlogPostPhoto10}
                  alt="Design of Edit Group Page"
                  target="_blank"
                />
              </a>
            </figure>
          </div>
        </section>

        <section className="update">
          <h2>July 22, 2020</h2>
          <p>
            I chose to use DynamoDB by AWS as my database. DynamoDB is both
            flexible and scalable but is also a NoSQL database which is the
            better fit for my needs over a SQL database. I chose NoSQL because
            of the performance and cost benefits. I am mainly doing gets and
            scans of my DynamoDB tables, using partition and sort key values.
            DynamoDB is cheaper and performs these tasks equal to or better than
            SQL based options. SQL is best for structured data, but outside of
            direct queries and scans, I have no need for complex filters or
            table joins. The scalability of a NoSQL database is also an added
            benefit.
            <br />
            <br />
            Once I settled the NoSQL vs. SQL database debate, I designed the
            tables. I listed out the information I would need to access for my
            site; category, quiz, quiz questions, player, group, game, and game
            index. Being less practiced in table design, I had help expanding
            each table. I learned the importance of separating the game
            information from the player and group data. The game data would have
            been more complicated to access for a particular group or player,
            without separation and indexing.
          </p>
          <div className="update-img">
            <figure>
              <a href={JulyBlogPostPhoto11}>
                <img
                  id="db-tables"
                  src={JulyBlogPostPhoto11}
                  alt="Design of Dynamo DB tables"
                  target="_blank"
                />
              </a>
            </figure>
          </div>
        </section>

        <section className="update">
          <h2>August 2, 2020</h2>
          <p>
            While thinking about the project I knew I needed to set up a GitHub
            account to create a web development portfolio. I worked to get my
            git repositories set up and connected to my VS studio. I set all
            that up before getting started on designing the logic and behavior.
            The next step in the project was to design the Application
            Programming Interface (API). API’s define the interaction between
            two applications. Based on my DynamoDB tables, I needed at least 11
            APIs. Before I started writing the code, I created the APIDOC
            detailing the behavior I expected based on the request type. The
            document contains request types, return types, descriptions of
            behavior, examples of requests and returns, and error handling for
            each API. The document is an essential part of the build process.
            Creating a document before writing the code helped me break the
            tasks down into more manageable pieces and provides a blueprint to
            follow that saves time and reduces the risk of errors.
          </p>
        </section>

        <section className="update">
          <h2>August 7, 2020</h2>
          <p>
            One of the best things I took away from University was that stopping
            and making a plan is crucial to success. I did a lot of paper
            writing as a history major. I did copious amounts of research for a
            wide range of topics. To write a successful paper I needed sort
            through my research to lay out arguments and provide evidence to
            support my claims. The first few papers taught me where my
            weaknesses were in my planning process. As my college career went on
            I worked on improving my planning strategy. Entering the world of
            web development, I was introduced to Trello as a way to track tasks.
            I was using sticky notes and notebooks before Trello. The
            time-stamped Trello task cards allow me to evaluate the
            effectiveness of my approach. With sticky notes they can get lost or
            lose meaning the longer your separated from the task. The Kanban
            planning style of Trello over the sticky note method allows for
            better organization of tasks.
            <br />
            <br />
            Making a plan cannot be understated. It is important to break down
            work into small manageable pieces with specific goals. Tasks need to
            be measurable. Otherwise motivation, focus, and confidence become
            difficult to maintain. For example, a task labeled, work on the
            project, lacks any direction or focus. If the card states, fill the
            DynamoDB tables with test data, there is a measurable start and end.
            The task is not challenging, but the ability to see progress builds
            confidence in handling more complex tasks. My task list was designed
            to maintain focus, motivation, and build confidence.
          </p>
          <div className="update-img">
            <figure>
              <a href={AugustBlogPostPhoto}>
                <img
                  src={AugustBlogPostPhoto}
                  alt="Example of Task Breakdown"
                  target="_blank"
                />
              </a>
            </figure>
          </div>
        </section>

        <section className="update">
          <h2>August 10, 2020</h2>
          <p>
            In order to manage user quiz data I needed to learn how to use the
            data management tools AWS provides. I needed to learn API Gateway,
            AWS Lambda and DynamoDB. I learned how to integrate API Gateway with
            AWS Lambda, and AWS Lambda to DynamoDB. AWS Lambda lets you run code
            without provisioning or managing servers. API Gateway is an API
            management tool that sits between a client and a collection of
            backend services. It protects APIs from overuse and abuse and
            monitors how the APIs are being used.
            <br />
            <br />
            I will walk through the process of someone visiting my site and
            making an API call. The request from the user is sent to API
            Gateway. It routes it to AWS Lambda if the name and request type
            match. The Lambda function evaluates the request. The lambda runs
            the code and interacts with Dynamo to get or store (manage) state.
            The result of that interaction is then sent back through API
            Gateway. And back to the user depending on the response logic
            outside the API call.
            <br />
            <br />
            To do this project, I needed to understand how these services
            interacted with each other. I read through the documentation and
            practiced in the AWS console. Once I was comfortable and had a good
            understanding, I built the skeletal structure for the AWS interface.
            While working on this aspect of the project, I became more familiar
            with Identity and Access Management (IAM). IAM allows creation and
            management of AWS users and groups, and uses permissions to allow
            and deny them access to AWS resources. I opted out of using the
            generic roles and instead created specific roles within IAM to fit
            my specific use cases.
          </p>
          <div className="update-img">
            <figure>
              <a href="https://d2908q01vomqb2.cloudfront.net/cb4e5208b4cd87268b208e49452ed6e89a68e0b8/2016/12/20/serverless-arch-1024x553.png">
                <img
                  src="https://d2908q01vomqb2.cloudfront.net/cb4e5208b4cd87268b208e49452ed6e89a68e0b8/2016/12/20/serverless-arch-1024x553.png"
                  alt="Example of Serverless Architecture AWS"
                />
              </a>
              <figcaption>
                Image Source:{" "}
                <a href="https://aws.amazon.com/blogs/startups/introducing-the-startup-kit-serverless-workload/">
                  AWS Serverless Architecture
                </a>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="update">
          <h2>August 17, 2020</h2>
          <p>
            After all the planning and designing I started building the APIs. I
            started with getQuizList, getQuiz and createPlayer. They do not have
            complex logic and are fairly simple. They grab data from the
            specified table, or in createPlayer case, puts the input from the
            user into the specified table. The API’s were incredibly helpful in
            my endeavor to learn, deploy and test my code in Lambda. The testing
            helped me visualize the process of API Gateway, AWS Lambda and
            DynamoDB. The API testing helped me correct my assumptions and learn
            how to approach my more complex APIs in a more efficient way. Get
            Leaderboard was changed from returning a game id to returning an
            array of player ids, total number of questions, and the score. Get
            Answer was created so that I could provide more information to the
            player on the get results page, without overloading the get results
            API. I updated both after correcting my limited understanding when I
            designed them.
            <br />
            <br />
            As I built each API I felt more and more comfortable with the tools
            and saw how to improve the API’s I had yet to build. Get Leaderboard
            and Get Answer were changed and created after I understood how I
            could utilize them better.
            <br />
            <br />
            The two robust APIs in my list were newGame and recordAnswer. Both
            were central to setting up state and later reading. New Game had to
            determine, based on inputs, whether the user was a single player or
            group. It then put the new game information in three different
            tables based on the evaluation. Record Answer had to evaluate the
            given quiz answer with the correct answer to get the score. It would
            then record the given answer and score for the given player, quiz,
            question num in the games table. The create group, delete group, and
            playerSignIn were more than the simple get and put requests but not
            as logic heavy as newGame and recordAnswer. They fit in complexity
            with getLeaderboard and getAnswer. Thanks to the simple API’s early
            on I was able to do these API’s with little trouble and improve upon
            them as I built them.
            <br />
            <br />
            The API’s built off each other and allowed me to build my confidence
            with each API. Each API helped me stretch my understanding of the
            AWS tools and improve my logic and assumptions.
          </p>
        </section>

        <section className="update">
          <h2>September 9, 2020</h2>
          <p>
            In the next step of the project, I started on frontend development.
            The best approach was to focus on the website’s buttons. I focused
            on one button at a time. I mapped out how the player would use the
            buttons and what event handler should trigger from the button click.
            I listed out how a player could leave and come back to the site. I
            wanted to be able to save player data if they were to accidentally
            leave or refresh the page in the middle of a quiz. Understanding
            this behavior helped me determine the best order to call, store, and
            delete player information in the local storage. I utilize the local
            storage to help maintain the quiz data.
            <br />
            <br />I check the existence of data in local storage in key places,
            like starting a quiz, to reduce the risk of overwriting a quiz the
            player may already be taking. It also keeps the site from making
            unnecessary API calls. Making unnecessary API calls can increase
            latency and cost. My website is small enough that the cost is
            minimal, but if I want to expand in the future, I need to build it
            with scalability in mind.
          </p>
          <div className="update-img">
            <figure>
              <a href={SeptemberBlogPostPhoto}>
                <img
                  src={SeptemberBlogPostPhoto}
                  alt="Example of Button Functionality Plan"
                  target="_blank"
                />
              </a>
            </figure>
          </div>
        </section>

        <section className="update">
          <h2>October 22, 2020</h2>
          <p>
            As I worked through building the functionality of each button, I
            came across fixes I needed to make to my API’s. A few of my API’s
            like getAnswers and getGroupLeaderboard were missing the ability to
            take the user input group name and generate the UUID to make the
            proper backend calls. I also modified the group landing pages,
            facilitating the need for a new API. I created getGroupQuizId and
            groupSignIn.
            <br />
            <br />
            GetGroupQuizId was created to help retrieve the quiz associated with
            the group. GroupSignIn was created to verify that a group exists.
            Both are crucial to the function of the group challenge portion of
            the website and were missed in my first round of planning. Something
            to watch out for in my next project plan.
          </p>
          <div className="update-img">
            <figure>
              <a href={OctoberBlogPostPhoto}>
                <img
                  src={OctoberBlogPostPhoto}
                  alt="Example of Group Sign in Error"
                  target="_blank"
                />
              </a>
            </figure>
          </div>
        </section>

        <section className="update">
          <h2>November 6, 2020</h2>
          <p>
            I spent this time building each button and addressing issues that
            popped up during the testing. Things like error messages not
            disappearing when they should or having buttons generate before all
            the information was retrieved. I did not have any major issues. I
            had a few API tweaks as mentioned before, some reordering and making
            a few functions async to help reduce the timing issues.
            <br />
            <br />
            Once I got the code to where it was working with no errors, I went
            through and refactored my code. I had made logic assumptions that
            needed to be corrected, and I cleaned up functions that had become
            cluttered. My main programming crime was nesting too many if
            statements and for loops, nothing horrendous but more than
            necessary. With more practice, this will become a smaller and
            smaller occurrence.
            <br />
            <br />
            After the fixes, I noticed increased speed from when the button is
            clicked to the generation of the next screen.
          </p>
        </section>

        <section className="update">
          <h2>December 31, 2020</h2>
          <p>
            In the final stages of the project, I used CSS to style my web page.
            I wanted to learn to build from the ground up, so I avoided using
            toolkits like bootstrap. It forces me to understand the basics of
            design before I start to use the tools. It was challenging but I
            feel I gained a lot from the process. Positioning pictures was a fun
            challenge. As I continue to expand my knowledge with future
            projects, I plan to delve into these tools.
            <br />
            <br />
            The history researcher in me had a really fun time researching and
            building the quiz questions. The CSS helped me bring my vision for
            the site to life. It may not be the best looking, but as I learn
            more and utilize the tools of web design, I’ll be creating top
            quality web pages in no time.
          </p>
          <div className="update-img">
            <figure>
              <a href={DecemberBlogPostPhoto}>
                <img
                  src={DecemberBlogPostPhoto}
                  alt="Example of CSS"
                  target="_blank"
                />
              </a>
            </figure>
          </div>
        </section>

        <section className="update">
          <h2>January 13, 2021</h2>
          <p>
            In the next phase I sent out my new website to friends and family to
            test it out. I got some good quality feedback, mainly for the mobile
            version. I had sent the a in a text and almost all opened my site on
            their phones. The feedback I heard the most from everyone was about
            adding a next/previous button to the bottom of the quiz. It was a
            minor inconvenience for the desktop but it was a mildly frustrating
            experience for the mobile users. Luckily it was something I could
            easily fix and was able to rather quickly. I also changed the create
            player page to automatically log in players after they created a
            player. The previous design caused a little friction so it was worth
            changing.
            <br />
            <br />
            The second round of testing after the fixes were a much better user
            experience. I also may have gained a reputation for making really
            hard quizzes.
          </p>
        </section>
      </section>
    </div>
  )
}

export default QuizProject
