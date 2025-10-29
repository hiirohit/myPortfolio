// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import AdvanteFuelSystemlogo from './assets/company_logo/Advantek Fuel System.png'

// Education Section Logo's
import pdmLogo from './MyPhoto/PDM.png';
import nios from './MyPhoto/NIOS.png'
import cbse from './MyPhoto/CBSE.png'
import diploma from './MyPhoto/Amb.png'

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import UserManagement from './MyPhoto/UserManagment.png';
import LoginSystem from './MyPhoto/Login Page.png';
import MyWeatherApp from './MyPhoto/MyWeatherApp.png';
import Note_Taking_Web_Application from './MyPhoto/NoteProject.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },


    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Fullstack Developer",
    company: "Webverse Digital",
    date: "April 2024 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: AdvanteFuelSystemlogo,
    role: "Service Enginner",
    company: "Advantek Fuel System",
    date: "november 2021 - june-2022",
    desc: " Service Engineer - Advantek Fuel Systems Responsible for flashing and updating Engine Control Modules (ECMs) to ensure optimal performance. Diagnose and troubleshoot ECMs to identify faults and implement solutions. Conduct testing and performance verification of ECMs and related fuel system components. Prepare Technical Evaluation & Maintenance Sheets (TEMS) to document inspections, tests, and repairs. Collaborate with the technical team to ensure quality service and adherence to safety standards.",
    skills: [
      "ECM flashing and programming",
      "Fuel system testing and calibration",
      "Electrical and electronic system understanding",
      "Use of diagnostic tools and software",
    ],
  },
];

export const education = [
  {
   id: 0,
  img: pdmLogo, // replace with your actual logo import or path
  school: "PDM University",
  date: "August 2022 - July 2025",
  grade: "7.65 CGPA",
  degree: "Bachelor of Technology (B.Tech) - Computer Science & Applications",
  desc: "I have completed my Bachelor of Technology (B.Tech) in Computer Science & Applications from PDM University in July 2025, with a CGPA of 7.65. Throughout my studies, I gained a strong foundation in programming, software development, and computer science principles. My coursework included Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I also participated in technical workshops, coding competitions, and projects that strengthened my programming skills and practical problem-solving abilities. This degree has equipped me with a solid technical background and hands-on experience for a successful career in software development and IT."
  },
  {
    id: 1,
    img: diploma,
    school: "ambedkar institute of technology shakarpur",
    date: "Aug 2018 - june 2021",
    grade: "First Division with Distinction (≈78%)",
    desc: "I completed a 3-year Diploma in Medical Electronics at Ambedkar Institute of Technology, Shakarpur, graduating with First Division (65%). During this course, I gained practical knowledge and hands-on experience in medical instrumentation, electronic circuits, biomedical devices, and healthcare technology. I also participated in technical workshops and projects, which strengthened my skills in electronics, problem-solving, and medical device development.",
    degree: "Diploma in Medical Electronics",
  },
  {
    id: 2,
    img: nios,
    school: "National Institute of Open Schooling (NIOS)",
    date: "Aug 2020 - June 2021",
    grade: "60.2%",
    desc: "I completed my Senior Secondary education (10+2) in the Arts stream from the National Institute of Open Schooling (NIOS) with 60.2%. My subjects included Hindi, History, Economics, Sociology, and English. This academic foundation enhanced my understanding of social systems, communication, and critical thinking, preparing me for analytical and interdisciplinary approaches in my higher education journey.",
    degree: "Senior Secondary (10+2) – Arts Stream",
  },
  {
    id: 3,
    img: cbse,
    school: "DSM Public School",
    date: "Apr 2017 - March 2018",
    grade: "49%",
    desc: "I completed my 10th grade from DSM Public School, a private institution. I was an average student but focused on building a good understanding of my subjects. My school years helped me develop discipline, consistency, and a balanced approach toward academics and personal growth.",
    degree: "Secondary School Certificate (SSC)",
  },
];

export const projects = [
  {
    id: 0,
    title: "GitHub Profile Detective",
    description:
      "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
    webapp: "https://githubprofiledetective.netlify.app/",
  },
   {
    id: 1,
    title: "User Management System",
    description: "Developed a dynamic User Management System using Java Servlets and JDBC, allowing administrators to manage user data efficiently. The application provides full CRUD (Create, Read, Update, Delete) functionality through a web interface and stores data securely in a MySQL database.",
    image: UserManagement,
    tags : ["Java","Servlet","MySQL","HTML","CSS","JDBC","Tomcat"],
    github:"",
    webapp:"http://localhost:7083/userMgmt/"
  },
  {
    id: 2,
    title: "Login System",
    description: "Developed a simple Login Authentication System using Java Servlets.The system provides a user-friendly login page that validates user credentials entered in the form and redirects users to either a welcome page or an error page based on the input provided.",
    image: LoginSystem,
    tags : ["Java","Servlet","HTML","CSS","Tomcat"],
    github:"",
    webapp:"http://localhost:8082/ServletProject/" 
  },
  {
     id: 3,
    title: "WeatherApp web Application",
    description: "Developed a dynamic Weather Application using Java Servlets and JSP that provides real-time weather updates for any city worldwide.The application integrates with the OpenWeather API to fetch current weather data and displays it in a visually appealing and responsive user interface.",
    image: MyWeatherApp,
    tags : ["HTML","CSS","JS","Java","Servlet","JSP","OpenWeatherAPI","Tomcat"],
    github:"",
    webapp:"http://localhost:8082/MyWeatherApp/" 
  },
  {
    id: 4,
    title: "Note Taking Web Application",
    description: "The Note Taking Web Application is a simple yet efficient CRUD-based web project that allows users to create, read, update, and delete notes online.It is developed using Java Servlets, JSP (Java Server Pages) for the frontend, Hibernate ORM for database communication, MySQL as the database, and Apache Tomcat as the web server.",
    image: Note_Taking_Web_Application,
    tags : ["Java","Hibernate","JSP","MySQL","Tomcat"],
    github:"",
    webapp:"http://localhost:7083/NoteTake/index.jsp"
  }
];  