import img1 from "../Images/individualpair.jpg";
import img2 from "../Images/couple4.jpg";
import img3 from "../Images/therapy.jpg";
import img4 from "../Images/group2.png";
import { FiInstagram, FiFacebook } from "react-icons/fi";

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
    url: "/faq",
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
    url: "/",
    text: "Therapy Services",
  },
  {
    url: "/",
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
    url: "/individual",
    image: img1,
  },
  {
    text: "Couples Therapy",
    url: "/couples",
    image: img2,
  },
  {
    text: "Group Therapy",
    url: "/group",
    image: img4,
  },
  {
    text: "Psychological Assessments",
    url: "/assessments",
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

