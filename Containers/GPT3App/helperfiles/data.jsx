import blog2 from "../assets/blog02.png";
import blog3 from "../assets/blog03.png";
import blog4 from "../assets/blog04.png";
import blog5 from "../assets/blog05.png";

export const verification = {
  validation: /^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/,
  errorTextDelay: 18000,
  errorMessage: `*Please fill out all information : Username & Password max 30 chars min 8 chars : Alphanumeric & Special characters are allowed*`,
  maxLength: 30,
  minLength: 8,
};

export const BlogData = [
  {
    img: blog2,
    title: "Is AI really dangerous?",
    date: "Jan 22 2022",
    link: "Read Full Article",
    linkTo: "/AiDangerArticle",
  },
  {
    img: blog3,
    title: "Breaking off the Chains of the Past!",
    date: "Oct 10, 2021",
    link: "Read Full Article",
    linkTo: "/BreakingArticle",
  },
  {
    img: blog4,
    title: "Data, Data & more Data!",
    date: "Jul 25, 2021",
    link: "Read Full Article",
    linkTo: "/DataArticle",
  },
  {
    img: blog5,
    title: "What's the Point?!",
    date: "Jan 6, 2019",
    link: "Read Full Article",
    linkTo: "/PointArticle",
  },
];

export const FeaturesData = [
  {
    title: "Improving End User Mistrust",
    text: "It's very easy to mistrust anyone working with AI, & robotics in general, remember skynet? Well, we aim to rectify that issue & help end users understand that AI is undoubtedly under our control!",
  },
  {
    title: "Becoming Active",
    text: "One of our goals is to become very active in any community we can, & that may mean community service, giving to local churches & food shelters, or anything else we can do to assist!",
  },
  {
    title: "Our message is clear",
    text: "Helping people with technology & doing what we can for the community, it's that or nothing!",
  },
  {
    title: "Ethics",
    text: "Ethics are & will always be a large part of AI & bias is unavoidable, so we do our best to have as many points of view while coding these systems in order to eliminate as much bias as we can!",
  },
];

export const Gpt3DataA = [
  {
    title: "What is GPT-3",
    text: `As we've covered a little bit in the intro, GPT-3 is a cutting edge AI
       that is very similar to Chat GPT with a few key differences! Sounds good
       right? We think so!`,
  },
  {
    title: "Convenience",
    text: `Convenience is something that is everywhere nowadays & GPT-3 has no shortage of convenient ways for usage.
        Your phone, laptop, video game console, tablet, just about any smart electronic device can use GPT-3!`,
  },
];

export const Gpt3DataB = [
  {
    title: "Chatbots",
    text: `These chatbots will be deployed in various places to support the main
         "head" of GPT3. Anyone who signs up now will have free access!`,
  },
  {
    title: "Knowledgebase",
    text: `GPT3 pulls from an extensive knowledgebase to give you the widest array
         of answers possible. We are very serious about truth & we want you to
         have all the information you can at your disposal so that you can make
         the most informed decision possible!`,
  },
  {
    title: "Education",
    text: `Learning & knowledge, that is what we are all about & we ensure that
         GPT3 is up to speed on the latest & greatest things! Don't believe us?
         We dare you to try it!`,
  },
];

export const headerText = {
  bodyA: "Let's Build Something Amazing with GPT-3 OpenAI!!",
  bodyB: `Have you ever been excited about something? Silly question right? We all
      have! What excites us the most is what we call GPT-3 an extremely
      intelligent AI system that will be the next big thing! We know you've
      visited this site for a reason and since you're here please allow us to
      make it worth your time!`,
  bodyC: "Get Started!",
  bodyD:
    "We've had at least 1,600 people request access and visit our site in the last 24 hours",
};
