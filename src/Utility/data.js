import img1 from "../Images/individualpair.jpg";
import img2 from "../Images/couple4.jpg";
import img3 from "../Images/therapy.jpg";
import img4 from "../Images/group2.png";
import { FiInstagram, FiFacebook } from "react-icons/fi";
import Individual from "../Images/individualman.jpg";
import Couple from "../Images/couple2.jpg";
import Group from "../Images/group5.jpg";
import Evaluation from "../Images/therapy.jpg";

export const navLinks = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About Us",
  },
  {
    url: "/services",
    text: "Therapy Services",
  },
  {
    url: "/faqs",
    text: "FAQs",
  },
  {
    url: "/contact",
    text: "Contact",
  },
];


export const footerLinks = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/",
    text: "Mission",
  },
  {
    url: "/about",
    text: "Dr. Selisha Nelson-Smith Ph.D, LCP",
  },
  {
    url: "/services",
    text: "Therapy Services",
  },
  {
    url: "/faqs",
    text: "FAQs",
  },
  {
    url: "/contact",
    text: "Contact",
  },
  {
    url: "/",
    text: "Appointment Request",
  },
  {
    url: "/",
    text: "Psychology Today",
  },
];

export const socialLinks = [
  {
    url: "https://www.instagram.com/visions_of_hope_ps/",
    icon: <FiInstagram />,
    text: "Instagram",
  },
  {
    url: "https://www.facebook.com/Visions-of-Hope-Psychological-Services-LLC-103516475078124/",
    icon: <FiFacebook />,
    text: "Facebook",
  },
];

export const services = [
  {
    text: "Individual Therapy",
    url: "/services",
    image: img1,
  },
  {
    text: "Couples Therapy",
    url: "/services",
    image: img2,
  },
  {
    text: "Group Therapy",
    url: "/services",
    image: img4,
  },
  {
    text: "Psychological Assessments",
    url: "/services",
    image: img3,
  },
];

export const quotes = [
  {
    text: "With over 14 years of professional experience, our hallmark has been focused on attention to individual needs, competently delivered with compassion and sensitivity.",
    author: "- Dr. Selisha Nelson-Smith PhD, LCP",
  },
  {
    text: "Our belief is that we all possess the tools, resources, and capacities to heal. We pride ourselves on helping to facilitate restoration, growth, and change. ",
    author: "- Dr. Selisha Nelson-Smith PhD, LCP",
  },
];

export const servicesButtons = ["Individual Therapy", "Couples Therapy", "Group Therapy", "Psychological Evaluations"];

export const serviceDescriptions = [
  {
    title: "Individual Therapy",
    description:
      "We serve a broad range of psychosocial needs and client demographics. We specialize in supporting clients through experiences with depression, anxiety, posttraumatic stress, ADHD, occupational stressors, personal/sexual/racial identity issues, challenges in interpersonal relationships, grief, substance abuse, legal problems, disability, workers compensation and psychological evaluations.",
    btn: "Schedule Appointment",
    img: Individual,
    url: "/contact",
  },
  {
    title: "Couples Therapy",
    description:
      "Couples therapy is a type of psychotherapy focused on supporting couples in working through interpersonal challenges, understanding delicate intricacies of their relationship, improving communication, learning to attune to one another, and developing healthier ways of relating to one another. Specific therapeutic techniques and interventions are used to support the couple's goals.",
    btn: "Schedule Appointment",
    img: Couple,
    url: "/contact",
  },
  {
    title: "Group Therapy",
    description1:
      "Coming Soon: Dialectical Behavioral Therapy Skills Group. This group will be for adults only and adolescents only. There will be 6 to 8 participants per group.",
    description2:
      "Coming Soon: Therapy Support Group for the LGBTQIA Community!",
    btn: "Join the waiting list",
    img: Group,
    url: "/contact",
  },
  {
    title: "Psychological Evaluations",
    description1:
      "Psychological Evaluations are used to assess cognitive, personality, and emotional functioning. Evaluations can also be facilitated for child custody, competency to stand trial, employment purposes, etc.",
    description2: "*Psychological Evaluations are administered in person.",
    btn: "Schedule Appointment",
    img: Evaluation,
    url: "/contact",
  },
];

