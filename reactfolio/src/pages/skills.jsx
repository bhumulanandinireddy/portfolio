import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import { 
  FaCode, FaServer, FaDatabase, FaCloud, FaTools, FaCogs, FaDocker, FaLinux, FaWindows, FaNetworkWired 
} from "react-icons/fa";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import SEO from "../data/seo";
import INFO from "../data/user";

import "./styles/skills.css";

const skillsData = [
  {
    category: "Programming Languages",
    icon: <FaCode />,
    items: ["Java (17/11)", "J2EE 1.8", "Python", "JavaScript"],
  },
  {
    category: "Technologies & Frameworks",
    icon: <FaServer />,
    items: [
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Hibernate",
      "JDBC",
      "JSP",
      "JSTL",
      "Node.js",
      "Angular",
      "ReactJS",
      "Redux",
      "RxJS",
      "Material-UI",
      "Bootstrap",
    ],
  },
  {
    category: "Database",
    icon: <FaDatabase />,
    items: [
      "Redis",
      "Azure Blob Storage",
      "Cassandra",
      "Oracle",
      "MySQL",
      "MS SQL PL/SQL",
      "S3",
    ],
  },
  {
    category: "Web Services",
    icon: <FaNetworkWired />,
    items: ["SOAP", "REST"],
  },
  {
    category: "Messaging",
    icon: <FaCloud />,
    items: ["Azure Service Bus", "Solr", "RabbitMQ", "Kafka"],
  },
  {
    category: "CI/CD & DevOps",
    icon: <FaCogs />,
    items: ["Jenkins", "JIRA", "Docker", "Kubernetes"],
  },
  {
    category: "Version Control System",
    icon: <FaTools />,
    items: ["Git", "Perforce", "SVN"],
  },
  {
    category: "IDE used",
    icon: <FaCode />,
    items: ["Visual Studio", "Rider", "Eclipse", "NetBeans"],
  },
  {
    category: "Tools",
    icon: <FaTools />,
    items: ["SonarQube", "Robo Manager", "PuTTY", "WinSCP", "Postman"],
  },
  {
    category: "Monitoring Tools",
    icon: <FaCloud />,
    items: ["Dynatrace", "AWS CloudWatch", "Splunk"],
  },
  {
    category: "Cloud Technologies",
    icon: <FaCloud />,
    items: ["AWS", "Microsoft Azure", "GCP"],
  },
  {
    category: "Operating Systems",
    icon: <FaWindows />,
    items: ["Windows", "Linux/Unix"],
  },
];

const Skills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "skills");

  return (
    <>
      <Helmet>
        <title>{`Skills | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO?.description || ""} />
        <meta name="keywords" content={currentSEO?.keywords.join(", ") || ""} />
      </Helmet>

      <div className="page-content">
        <NavBar active="skills" />
        <div className="content-wrapper">
          <div className="skills-logo-container">
            <Logo width={46} />
          </div>

          <section className="skills-section">
            <h1 className="skills-title">My Skills & Expertise</h1>
            <p className="skills-subtitle">
			As a Senior Full Stack Developer, I have cultivated a comprehensive and versatile skill set that spans front-end and back-end technologies, cloud platforms, DevOps practices, and modern development tools. With extensive experience designing, building, and maintaining scalable, performant applications, I leverage these skills to deliver end-to-end solutions that meet complex business requirements.

This page provides a detailed overview of the technologies and tools I have mastered throughout my career. I am committed to continuous learning and staying at the forefront of evolving technologies to drive innovation and efficiency in every project I undertake.
            </p>

            <div className="skills-grid">
              {skillsData.map(({ category, items, icon }, idx) => (
                <div className="skill-category" key={idx}>
                  <h2 className="category-title">
                    <span className="category-icon">{icon}</span> {category}
                  </h2>
                  <ul className="skill-items">
                    {items.map((skill, i) => (
                      <li className="skill-item" key={i}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Skills;
