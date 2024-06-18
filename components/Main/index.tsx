"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Main = () => {
  const togglePanel = (panelId: string) => {
    const panelContent = document.getElementById(panelId);
    if (panelContent) {
      panelContent.classList.toggle("hidden");
    }
  };

  return (
    <>
      <section
        id="me"
        className="flex flex-col md:flex-row md:p-20 md:pl-[18rem] pl-16 justify-around"
      >
        <div className="">
          <Image
            src={"/assets/profile-pic.jpg"}
            alt="Priya Singh profile picture"
            height={100}
            width={250}
            className="rounded-full overflow-hidden"
          />
        </div>
        <div className="flex flex-col gap-y-6 pl-2 md:pl-20 flex-grow">
          <p className="text-lg">Hello, I am</p>
          <h1 className="text-lg font-bold">Priya Singh</h1>
          <p className="text-2xl font-medium">Frontend Developer</p>
          <div className="flex gap-x-8 pr-8">
            <button
              className="text-xl font-medium text-black border-solid border-2 rounded-full p-4"
              onClick={() => window.open("/assets/Priya-singh-resume.pdf")}
            >
              Download CV
            </button>
            <button
              className="text-xl font-medium text-black border-solid border-2 rounded-full p-4"
              onClick={() => (window.location.href = "./#contact")}
            >
              Contact Info
            </button>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="flex flex-col justify-between items-center w-full p-4"
      >
        <p className="text-base">Get To Know More</p>
        <h1 className="text-2xl font-medium">About Me</h1>
        <div className="flex flex-col md:flex-row items-center gap-x-4">
          {/* <div className="flex justify-around items-center"> */}
          {/* <div className="flex flex-col justify-between items-center w-[20%] border-solid border-2 h-full rounded-md"> */}
          <Image
            src={"/assets/about-me.jpg"}
            alt="about icon"
            height={155}
            width={350}
            className="rounded-lg md:ml-10"
          />
          {/* </div> */}
          <div className="flex flex-col justify-between items-center w-[80%] h-full p-2">
            <div className="flex flex-col md:flex-row justify-around items-center lg:w-[60%] h-full p-2 md:gap-x-4 sm: gap-y-4">
              <div className="flex items-center p-4 md:p-4 border-solid border-2 w-full rounded-lg">
                <Image
                  src="/assets/experience.png"
                  alt="Experience icon"
                  height={150}
                  width={50}
                  className="icon"
                />
                <div className="flex flex-col justify-between items-center gap-y-2">
                  <h3 className="font-bold">Experience</h3>
                  <p>3+ years Frontend Development</p>
                </div>
              </div>
              <div className="flex items-center p-4 md:p-4 border-solid border-2 w-full rounded-lg">
                <Image
                  src="/assets/education.png"
                  alt="Education icon"
                  height={150}
                  width={50}
                  className="icon"
                />
                <div className="flex flex-col justify-between items-center gap-y-2">
                  <h3 className="font-bold">Education</h3>
                  <p>Bachelor of Technology Degree</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-black">
                With over 3+ years of experience, I specialize in dynamic web
                application development, emphasizing user experience and
                accessibility. I have contributed to projects involving dynamic
                form creation, user data interaction systems, and critical issue
                resolution within design systems. My expertise includes React,
                TypeScript, Redux, Styled Components, React Native and
                comprehensive testing practices to ensure reliability and
                adherence to accessibility standards like WCAG 2.1.
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/assets/arrow.png"
          alt="Arrow icon"
          height={80}
          width={50}
          className="icon arrow ml-[90%]"
          onClick={() => (window.location.href = "./#experience")}
        />
      </section>
      <section
        id="experience"
        className="flex flex-col justify-between items-center w-full p-4"
      >
        <p className="text-base">Explore My</p>
        <h1 className="text-2xl font-medium">Experience</h1>
        <div className="flex flex-col gap-y-4 bg-white rounded-lg shadow-md p-4 border-solid border-2 w-full mt-8">
          <div className="bg-white hover:bg-gray-200 rounded-lg border-solid border-2 p-4 ">
            <div
              className="flex flex-col"
              onClick={() => togglePanel("panel1")}
            >
              <h3 className="font-bold">Frontend Developer</h3>
              <p>Freston Analytics | Apr 2023 - Apr-2024 </p>
            </div>
            <br></br>
            {/* <h3
              className="flex h-14 cursor-pointer items-center font-bold"
              onClick={() => togglePanel('panel1')}
              >
              Expand & Collapse Me
            </h3> */}
            <div id="panel1" className="hidden">
              <ul className="list-disc pl-6">
                <li>
                  Developed dynamic forms feature facilitating user data input
                  and progression visualization using CoolIce, JavaScript, HTML,
                  and CSS.
                </li>
                <li>
                  Collaborated in design sessions to align feature development
                  with project objectives, ensuring seamless integration of
                  frontend solutions.
                </li>
                <li>
                  Enhanced project template to maintain consistency and
                  scalability across platforms, leveraging CoolIce and CSS.
                </li>
                <li>
                  Utilized React with TypeScript to develop robust frontend
                  solutions, incorporating Redux for state management and Styled
                  Components for styling.
                </li>
                <li>
                  Demonstrated an understanding of UI/UX principles, ensuring
                  seamless user experiences across various devices.
                </li>
                <li>
                  Conducted comprehensive testing to ensure reliability and
                  adherence to data analysis and manipulation requirements.
                  Utilized problem-solving skills to address critical issues and
                  enhance application functionalities.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white hover:bg-gray-200 rounded-lg border-solid border-2 p-4">
            <div
              className="flex flex-col"
              onClick={() => togglePanel("panel2")}
            >
              <h3 className="font-bold">Assistant System Engineer</h3>
              <p>Freston Analytics | Apr 2023 - Apr-2024 </p>
            </div>
            <br></br>

            <div id="panel2" className="hidden">
              <ul className="list-disc pl-6">
                <li>
                  Developed and maintained web applications using JavaScript,
                  HTML5, and CSS3, incorporating Responsive Web Design
                  principles for optimal user experiences.
                </li>
                <li>
                  Designed mobile-first, accessible web applications using
                  semantic HTML and CSS/SCSS, aligning with data manipulation
                  requirements.
                </li>
                <li>
                  Ensured seamless user experiences across various devices,
                  adhering to WCAG 2.1 guidelines and leveraging tools like
                  Voiceover.
                </li>
                <li>
                  Developed Oracle scripts for database interactions, supporting
                  backend processes and data manipulation tasks.
                </li>
                <li>
                  Developed Oracle scripts for data manipulation tasks,
                  supporting backend processes and enhancing application
                  functionality.
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white hover:bg-gray-200 rounded-lg border-solid border-2 p-4 ">
            <div
              className="flex flex-col"
              onClick={() => togglePanel("panel3")}
            >
              <h3 className="font-bold">Software Engineer</h3>
              <p>NDTV Convergence | Jun 2019 - Dec 2019 </p>
            </div>
            <br></br>

            <div id="panel3" className="hidden">
              <ul className="list-disc pl-6">
                <li>
                  Collaborated with stakeholders to understand feature
                  requirements, implementing application logic using React.
                </li>
                <li>
                  Managed version control using Git, ensuring efficient
                  collaboration and code management.
                </li>
                <li>
                  Demonstrated proficiency in Agile methodologies, ensuring
                  timely delivery of quality deliverables.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Image
          src="/assets/arrow.png"
          alt="Arrow icon"
          height={80}
          width={50}
          className="icon arrow ml-[90%] pt-8"
          onClick={() => (window.location.href = "./#contact")}
        />
      </section>
      <section
        id="contact"
        className="flex flex-col justify-between items-center w-full p-4"
      >
        <p className="text-base">Get In Touch</p>
        <h1 className="text-2xl font-medium">Contact Me</h1>
        <div className="flex items-center gap-x-2 p-2 border-solid border-2 rounded-full m-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-x-2 p-2">
            <Image
              src="/assets/email.png"
              alt="Email icon"
              height={150}
              width={40}
              className="icon contact-icon email-icon"
            />
            <p>priyasingh2996@gmail.com</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-x-2 p-2">
            <Image
              src="/assets/linkedin.png"
              alt="LinkedIn icon"
              height={150}
              width={40}
              className="icon contact-icon"
            />
            <p>
              <Link href="https://www.linkedin.com/in/priya-singh-dev/">
                LinkedIn
              </Link>
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-x-2 p-2">
            <Image
              src="/assets/github.png"
              alt="Github icon"
              height={150}
              width={40}
              className="icon contact-icon"
            />
            <p>
              <Link href="https://github.com/priya-singh-dev">Github</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
