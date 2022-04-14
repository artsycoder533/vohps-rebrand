import img1 from "../Images/individualpair.jpg";
import img2 from "../Images/couple4.jpg";
import img3 from "../Images/therapy.jpg";
import img4 from "../Images/group4.jpg";
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
    url: "/contact",
    text: "Appointment Request",
  },
  {
    url: "https://www.psychologytoday.com/us/therapists/dr-selisha-nelson-north-chesterfield-va/179620",
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

export const faqs = [
  {
    question: "What are your rates?",
    answer: [
      "Psychiatric Diagnostic Intake Evaluation: $200",
      "Individual Therapy: $165",
      "Couple's Therapy: $175",
      "Psychological Evaluation: $175 per hour",
    ],
  },
  {
    question: "What insurance do you accept?",
    answer:
      "We currently accept Aetna, Cigna, Optima, Optum, United HealthCare, Virginia Premier, Medicare and Out of Network.",
  },
  {
    question: "What forms of payment do you accept?",
    answer:
      "We accept cash, checks, Health Savings Accounts, and all major credit cards.",
  },
  {
    question: "How do you connect with my insurance?",
    answer:
      "When you register as a new client, we will contact your insurance provider in order to determine your co-payment amount. This amount will be collected at the end of each session.",
  },
  {
    question: "What if my insurance has changed?",
    answer:
      "Please let us know immediatedly if there are any changes to your insurance coverage. We make every effort to promptly and accurately submit claims, but unpaid balances do remain the individuals responsiblity.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "If you miss a session without prior cancellation or cancel with less than a 24-hour notice, our policy is to collect an $80 cancellation/no-show fee. This fee may be waived upon mutual agreement that your inability to attend was due circumstances beyond your control. Typically, the first cancellation/no show fee will be waived because we understand that life happens. However, any subsequent cancellations/no-shows will incur a fee. It is important to note that insurance companies do not provide reimbursement for cancelled sessions; thus you will be responsible for the portion of the fee as described above. If is possible, we will try to reschedule your appointment if our schedule permits.",
  },
  {
    question: "What if I am late to my appointment?",
    answer:
      "You are responsible for arriving on time. If you arrive late, your appointment will still need to end at the scheduled time.",
  },
];

export const noSurprises = [
  "Under Section 2799B-6 of the Public Health Service Act, health care providers and health care facilities are required to inform individuals who are not enrolled in a plan or coverage or a Federal health care program, or not seeking to file a claim with their plan or coverage both orally and in writing of their ability, upon request or at the time of scheduling health care items and services, to receive a “Good Faith Estimate” of expected charges.",
];

export const goodFaith = [
  {
    heading:
      "You have the right to receive a “Good Faith Estimate” explaining how much your medical care will cost.",
    p1: "Under the law, health care providers need to give patients who don’t have insurance or who are not using insurance an estimate of the bill for medical items and services.",
    list: [
      "You have the right to receive a Good Faith Estimate for the total expected cost of any non-emergency items or services. This includes related costs like medical tests, prescription drugs, equipment, and hospital fees.",
      "Make sure your health care provider gives you a Good Faith Estimate in writing at least 1 business day before your medical service or item. You can also ask your health care provider, and any other provider you choose, for a Good Faith Estimate before you schedule an item or service.",
      "Make sure your health care provider gives you a Good Faith Estimate in writing at least 1 business day before your medical service or item. You can also ask your health care provider, and any other provider you choose, for a Good Faith Estimate before you schedule an item or service.",
      "Make sure your health care provider gives you a Good Faith Estimate in writing at least 1 business day before your medical service or item. You can also ask your health care provider, and any other provider you choose, for a Good Faith Estimate before you schedule an item or service.",
    ],
    footer:
      "For questions or more information about your right to a Good Faith Estimate, visit: ",
    linkText: "www.cms.gov/nosurpsises",
    link: "https://www.cms.gov/nosurprises",
  },
];