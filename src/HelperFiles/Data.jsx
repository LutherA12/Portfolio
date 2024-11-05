import AI from "../Assets/AI.png";
import WildWaves from "../Assets/WildWaves.png";
import Monster from "../Assets/Monster.png";
import Zstory from "../Assets/Zstory.png";

export const cards = [
  {
    desc: `GPT3 is a full landing page that can be altered to fit any customers
        needs. On the technical side I've added functionality since the initial
        design. The buttons will now take you to a sign in page where I've used
        Regex for user verification, the articles and links at the bottom of the
        page are clickable & will go to different pages, also the navbar moves
        you to different portions of the page while the home link will bring you
        back here.`,
    img: AI,
    title: "GPT3",
    linkTo: "/GPT3App",
    altImg: "AI img not found",
    cardLinkColor: "gpt3-card-link",
    cardTitleDiv: "ai-card-title",
    cardDescColor: "ai-desc",
    cardContainer: "gpt3-card-container",
  },
  {
    desc: `Wild Waves is an amusement park ticketing application that can be
        expanded. This version allows a user to select from three different
        attractions, fill out the proper information, & based on that
        information the user is either allowed or denied a ticket. On the
        technical side, I've employed the useState hook along with a few ternary
        operations, the setTimout hook as well as use of Regex for user input
        verification.`,
    img: WildWaves,
    title: "Wild Waves",
    linkTo: "/WildWavesApp",
    altImg: "Wild Waves img not found",
    cardLinkColor: "wild-card-link",
    cardTitleDiv: "wild-card-title",
    cardDescColor: "wild-desc",
    cardContainer: "wild-card-container",
  },
  {
    desc: `The Monster Rolodex is a simple filtering app that allows the user to
        search & sort each monster as they type it in by name. On the technical
        side, I've written this using a class component that consumes an api
        then parses the returned object into JSON, I then use the filter method
        for the name (target.value) in order search & sort each name as it is
        typed.`,
    img: Monster,
    title: "Monster Rolodex",
    linkTo: "/MonsterApp",
    altImg: "Monster img not found",
    cardLinkColor: "monster-card-link",
    cardTitleDiv: "monster-card-title",
    cardDescColor: "monster-desc",
    cardContainer: "monster-card-container",
  },
  {
    desc: `I hope you will forgive me, but I wanted to do something fun for this
        app. As a child, I used to read the "Choose your adventure" Goosebumps
        books by R.L. Stein. This app is essencially the same thing, but I've added buttons & sounds.
        There is nothing sexual in this story, but there is
        some profanity. On the technical side, I've employed useState very
        heavily in this app. The story isn't fully finished yet but the codebase will stay largely the same aside from a few tweaks in the coming weeks.`,
    img: Zstory,
    title: "Z Story",
    linkTo: "/ZStoryApp",
    altImg: "Z Story img not found",
    cardLinkColor: "zstory-card-link",
    cardTitleDiv: "zstory-card-title",
    cardDescColor: "zstory-desc",
    cardContainer: "zstory-card-container",
  },
];

export const headerText = {
  textA: `I'm a self-taught developer that has been coding in React for about two
        years. I also have experience in Firebase (a database service), fetching
        API's, & using Context. Vite is the framework being used for this
        project & here is a link to my`,
  textB: `repositories. I've worked hard to ensure my codebases are scalable,
        maintainable, reuseable & DRY as far as the technical aspect & my
        current knowledge will allow, however, I believe my strongest skills are
        my soft skills. I'm a forever student that is always willing to learn &
        teach, furthermore, I have an extensive background in customer service.
        For 15 years now I've engaged with many different customers face to
        face, door to door, through emails, phone calls, & even a few written
        letters; so I'm not only experienced on how to speak to others with
        kindness, respect, & empathy, but I also know how to translate technical
        jorgon into everyday language without being condesending. I'm also
        primarily a kinesthetic learner so I very much enjoy researching &
        learning by doing.`,
};

export const cardText = {
  textA: `The second section here features few of my applications on the cards
        below along with a short description. I've added an error page for all
        routes if there is a typo in the address bar & each application has a
        home link that will bring you right back to this page. Please explore &
        enjoy!`,
};

export const footerText = {
  textA: `For this final section, I think it's best to end with the question of "why
      hire me?". I've already mentioned that I'm a forever student & that
      customer service & technology have been at the forefront of my
      professional career, but more than that, I've worked with & talked to a
      lot of different people from many different cultures & walks of life. I
      believe I will be a valuable asset in regard to being teachable without
      being arrogant, collabrative without being controlling, communicative
      without being condecending & if put in a position of power, firm without
      being overbearing.Thank you for taking the time to visit my website & for
      giving me an opportunity to work for you.`,
};

/**
 * 
 *   {
    desc: `Crown is a fully realized clothing app with the Firebase database
        attached. The features include sign in/sign out via Google popup &
        email/password, various web pages each with links that are fully
        functional & I was able to learn about & use context for this project so
        as to leverage the the consumed user object from the sign in/sign up
        forms at the highest level instead of prop drilling.`,
    img: "",
    title: "Crown Clothing",
    linkTo: "",
    altImg: "Crown not found",
    cardLinkColor: "crown-card-link",
    cardTitleDiv: "crown-card-title",
    cardDescColor: "crown-desc",
    cardContainer: "crown-card-container",
  },
  {
    desc: `Crown is a fully realized clothing app with the Firebase database
    attached. The features include sign in/sign out via Google popup &
    email/password, various web pages each with links that are fully
    functional & I was able to learn about & use context for this project so
    as to leverage the the consumed user object from the sign in/sign up
    forms at the highest level instead of prop drilling.`,
    img: "",
    title: "Crown Clothing",
    linkTo: "",
    altImg: "Crown not found",
    cardLinkColor: "crown-card-link",
    cardTitleDiv: "crown-card-title",
    cardDescColor: "crown-desc",
    cardContainer: "crown-card-container",
  },
 * 
 * 
 */
