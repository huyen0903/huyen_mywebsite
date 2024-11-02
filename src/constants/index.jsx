import dish1 from "../assets/dish1.jpg";
import dish2 from "../assets/dish2.jpg";
import dish3 from "../assets/dish3.jpg";
import dish4 from "../assets/dish4.jpg";
import dish5 from "../assets/dish5.jpg";
import dish6 from "../assets/dish6.jpg";
import dish7 from "../assets/dish7.jpg";
import dish8 from "../assets/dish8.jpg";

import cup_happy from "../assets/cup_happy.jpg";

import incre3 from "../assets/incre3.jpg";
import incre4 from "../assets/incre4.jpg";
import incre5 from "../assets/incre5.jpg";
import incre6 from "../assets/incre6.jpg";

import buom1 from "../assets/buom1.jpg";

import re1 from "../assets/re1.jpg";
import re2 from "../assets/re2.jpg";

import cds1 from "../assets/cds1.jpg";
import cds2 from "../assets/cds2.jpg";
import cds3 from "../assets/cds3.jpg";

import italian from "../assets/italian.jpeg";
import japanese from "../assets/japanese.jpeg";
import indian from "../assets/indian.jpeg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "My Art Gallery", targetId: "arts" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Expertise", targetId: "expertise" },
  { text: "Recommendation", targetId: "recommendation" },
  { text: "Contact", targetId: "contact" },
];

export const DISHES = [
  {
    image: dish1,
    title: "Elephant – Strength and Nobility",
    description:
      "The elephant symbolizes majesty, wisdom, and gentle power in Vietnamese culture. The painting highlights its dignity, while the plush form embodies strength and warmth, celebrating true power as compassionate—a gentle giant.",
  },
  {
    image: dish2,
    title: "Chicken – Resilience and Vitality",
    description:
      "The chicken symbolizes resilience, bravery, and vitality in Vietnamese culture. The painting depicts its energetic strength, emphasizing its role in family life. The plush version captures this lively spirit, using bright colors to celebrate resilience, cheerfulness found in both family and community",
  },
  {
    image: dish3,
    title: "Turtle – Longevity and Stability",
    description:
      "The turtle symbolizes longevity, patience, and stability in Vietnamese culture. The painting highlights its resilience with layered shell patterns, while the plush version conveys warmth and reliability. Together, they celebrate the turtle's legacy of strength paired with compassion.",
  },
  {
    image: dish4,
    title: "Horse – Freedom and Determination",
    description:
      "The horse symbolizes strength, freedom, and determination in Vietnamese culture. The painting captures its powerful stance, while the plush version conveys loyalty and gentler resolve. Together, they reflect how true strength balances fierceness with warmth.",
  },
  {
    image: dish5,
    title: "Tiger – Power and Bravery",
    description:
      "The tiger is an emblem of strength, courage, and authority in Vietnamese culture. The painting depicts its commanding nature, while the plush version softens its ferocity, illustrating strength with compassion. This dual portrayal reflects bravery as both fierce and nurturing.",
  },
  {
    image: dish6,
    title: "Buffalo – Hard Work and Endurance",
    description:
      "The buffalo repressents hard work, patience, and endurance in Vietnamese culture, representing rural resilience. The painting emphasizes its strength, while the plush version highlights loyalty and warmth. Together, they honor the buffalo's role in tradition and companionship.",
  },
  {
    image: dish7,
    title: "Pig – Abundance and Contentment",
    description:
      "In Vietnamese culture, the pig symbolizes prosperity, warmth, and abundance. The painting features a joyful, round pig representing contentment and a plush version conveying comfort. This dual image blends tradition with modern simplicity, highlighting enduring prosperity across generations.",
  },
  {
    image: dish8,
    title: "Dragon – Wisdom and Protection",
    description:
      "In traditional Vietnamese art, the dragon symbolizes wisdom, protection, and prosperity. Its intricate, sacred design guards against evil and brings good fortune, while its friendlier form offers comfort and support. This duality illustrates how wisdom can be both powerful and approachable, serving as a protective force in both mythical and everyday life.",
  },
];

export const ABOUT = {
  header: "Hi there, welcome!",
  content:
    "I'm Huyen Pham, a passionate learner and changemaker from Hanoi, Vietnam, whose journey is fueled by a combination of learning, creativity, and community building. My life is enriched with a blend of passions - from data and analytics to expressive realms of debate, silk painting, and creative storytelling - all united by a single purpose: to empower people and catalyze meaningful growth. My projects connect generations and communities: inclusive education through guiding the elderly to active use of modern technologies, bringing bright moments of English lessons to young students all over Vietnam. Debate gives me a voice; painting is an expression of my heritage and imagination. And with data, I show insights that create bridges of understanding. With every project that I lead or every piece I create, it would always be toward that larger mission: a world where goodness shall result from imagination and learning. Let's inspire one another, project after project, contact after contact, blending learning with tradition and innovation.",
};

export const MISSION =
  "Through debate, I cultivate critical thinking, build confidence, and refine persuasive communication skills. ";

export const CUSINES = [
  {
    image: italian, // Replace with actual image path or URL
    title: "Professional Advisor • CDS - CSP Debate Society",
    subtitle:
      "Largest Debate Club of Hanoi National University of Education - High School for Gifted Students",
    bulletPoints: [
      "Designed comprehensive debate training modules to onboard new members, covering debate structure, research methodologies, and argument development",
      "Partnered with Chief Adjudication Panels to establish competition regulations and spearheaded the SKOUT DEBATE CHAMPIONSHIP 2023, engaging 250 primary and secondary school students in Hanoi",
      "Led a team of 70 organizing staff in planning and executing the Warm-up Debating Championship, attracting 230 contestants nationwide and securing features in five major electronic newspapers in Vietnam",
    ],
    images: [cds1, cds2, cds3],
  },
  {
    image: japanese, // Replace with actual image path or URL
    title: "The Incredibles Project",
    subtitle:
      "Pioneering project teaching English to primary school students utilizing Visual Learning techniques",
    bulletPoints: [
      "Spearheaded The Incredibles Project, pioneering visual learning techniques to teach English to over 200 ethnic minority primary school students nationwide",
      "Developed and executed comprehensive lesson plans and an 8-session online course, “Super Scholars,” engaging 160 primary school students across the country",
      "Trained and mentored instructors in communicative and visual teaching methodologies, enhancing classroom management and instructional quality",
      "Secured and allocated 50 million VND to equip Chieng Cang Primary School with new learning materials, benefiting teachers and more than 200 students in Son La province",
    ],
    images: [incre3, incre4, incre5, incre6],
  },
  {
    image: indian, // Replace with actual image path or URL
    title: "Founder & President • Cup of Happy Tea",
    subtitle:
      "Project teaches the elderly in my neighborhood to use technology for entertainment, learning, and connecting with relatives and friends",
    bulletPoints: [
      "Coordinated with the elderly health care center, guiding local residents to use social networks to read news and connect with relatives",
      "Organized instructional sessions on how to use smartphones and register for online courses (cooking, health care, gardening, etc.)",
    ],
    images: [cup_happy],
  },
  {
    image: indian, // Replace with actual image path or URL
    title: "Vice President • The Renouveau Project season 2",
    subtitle:
      "Social volunteer club to support the reconstruction of community works to support the homeless elderly people",
    bulletPoints: [
      "Led a fundraising bake sale earning 20 million VND",
      "Donated profits to Hanoi Chung Tay organization, and worked with them to renovate the garden space and living room for social housing",
    ],
    images: [re1, re2],
  },
  {
    image: indian,
    title: "Head of Academics • Buom",
    subtitle:
      "Non-profit teaching project for high school seniors using visual learning methods to prepare knowledge for high school entrance exams",
    bulletPoints: [
      "Managed and ensured the quality of 50 lesson plans for math, literature, and English for the entire program",
      "Converted lecture content into visual lesson plans to make for easier understanding of vocabulary and grammar concepts.",
      "100% of students qualified for top-ranked public schools with English entrance exam scores of 9 or higher out of 10",
    ],
    images: [buom1],
  },
];

export const REVIEW = {
  name: "Xaviour Fernando",
  profession: "Food Critic",
  content:
    "“As a seasoned food critic, my expectations are always high when stepping into a new dining establishment. Restaura, with its unassuming exterior and elegantly designed interior, promised a unique culinary experience from the moment I walked in. And I must say, it delivered beyond my expectations.”",
};

export const CONTACT = [
  {
    key: "address",
    value: "Address: 1 Ton That Tung Street, Hanoi, Vietnam 100000",
  },
  { key: "phone", value: "Phone: (+84) 88 891 3900" },
  { key: "email", value: "Email: huyenpk090307@gmail.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];
