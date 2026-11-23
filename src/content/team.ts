export type TeamMember = {
  name: string;
  role: string;
  prev?: string;
  img?: string;
  email?: string;
  linkedin?: string;
};

export const TEAM: TeamMember[] = [
  {
    name: "Chris Kelly, Ph.D.",
    role: "Co-Founder & CEO",
    prev: "Previously Stanford, MIT",
    img: "/Chris.png",
    email: "chris@vizco.co",
    linkedin: "https://www.linkedin.com/in/christopherkellyphd/",
  },
  {
    name: "Tanay Baswa",
    role: "Co-Founder & CTO",
    prev: "Previously UC Berkeley, Enkrypt AI",
    img: "/Tanay.png",
    email: "tanay@vizco.co",
    linkedin: "https://www.linkedin.com/in/tanaybaswa/",
  },
  {
    name: "Mark Farrelly",
    role: "Founding GTM Lead",
    prev: "Previously HBAN, Microsoft, Enterprise Ireland",
    img: "/Mark.jpg",
    email: "mark@vizco.co",
    linkedin: "https://www.linkedin.com/in/markfarrelly64/",
  },
];

export const FOUNDERS = TEAM.filter((m) => m.role.startsWith("Co-Founder"));

export const ADVISORS: TeamMember[] = [
  {
    name: "Alan Boehme",
    role: "Advisor",
    img: "/Alan.jpg",
    linkedin: "https://www.linkedin.com/in/alanboehme/",
  },
  {
    name: "Junaid Islam",
    role: "Advisor",
    img: "/Junaid.jpg",
    linkedin: "https://www.linkedin.com/in/junaidislam/",
  },
  {
    name: "Carlos Colombo",
    role: "Advisor",
    img: "/Carlos.jpg",
    linkedin: "https://www.linkedin.com/in/carlos-colombo-5059787/",
  },
];
