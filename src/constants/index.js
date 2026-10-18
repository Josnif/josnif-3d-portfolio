import {
    mobile,
    backend,
    web,
    javascript,
    reactjs,
    tailwind,
    nodejs,
    docker,
    threejs,
    vuejs,
    laravel,
    php,
    python,
    solidity,
    nextjs,
    mysql,
    josnifIco,
    kryptbase,
    kryptbaseVue,
    whitelistDapp,
    daneffy,
    adminDashboard,
    blogApp,
    nftLanding,
    netflixAnalysis,
    samson,
    ayomide,
  } from "../assets";

export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "works",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
];

export const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Josnif",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/joseph-ogunkunle-4b6312180/",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/Josnif_Joseph",
    },
];

const services = [
    {
      title: "Full-Stack Web Developer",
      icon: web,
    },
    {
      title: "Mobile App Developer",
      icon: mobile,
    },
    {
      title: "Backend & API Developer",
      icon: backend,
    },
    {
      title: "Web3 & Blockchain Developer",
      icon: solidity,
    },
];

// Each BallCanvas creates its own WebGL context and browsers cap these at ~16,
// so keep this list at 13 or fewer (hero, stars and earth use the other three).
const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Solidity",
      icon: solidity,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Vue JS",
      icon: vuejs,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Docker",
      icon: docker,
    },
];

const experiences = [
    {
      title: "Managing Director",
      company_name: "Jotweb Technologies Nig. Ltd.",
      initials: "JT",
      iconBg: "#915EFF",
      date: "2025 - Present",
      points: [
        "Provide strategic direction and oversee the day-to-day operations of the company.",
        "Lead software and web development projects from planning through delivery, coordinating teams and monitoring progress.",
        "Work directly with clients to understand business needs and translate them into practical digital solutions.",
        "Oversee product development, quality assurance, business processes, partnerships and client relationships.",
      ],
    },
    {
      title: "Full-Stack Web Developer (Contract)",
      company_name: "Dataczar · Remote",
      initials: "DC",
      iconBg: "#383E56",
      date: "2022 - Present",
      points: [
        "Develop and maintain SaaS platforms that let businesses build websites, manage customer lists and run email marketing campaigns.",
        "Troubleshoot and resolve frontend and backend issues affecting web templates and system functionality.",
        "Enhance customer and admin dashboards using Vue.js and jQuery.",
        "Integrate APIs between internal systems and third-party services, improving performance through scalable architecture.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "E-Access Hub · Remote",
      initials: "EA",
      iconBg: "#E6DEDD",
      date: "2022 - Present",
      points: [
        "Build and deploy modern web and mobile applications.",
        "Implement security practices including encrypted data transmission and secure authentication.",
        "Develop and maintain APIs supporting application functionality and business operations.",
        "Manage application releases and updates on the Google Play Store and Apple App Store.",
      ],
    },
    {
      title: "Freelance Web Developer",
      company_name: "Casper Web · Contract",
      initials: "CW",
      iconBg: "#383E56",
      date: "2022 - 2023",
      points: [
        "Designed and developed websites based on client requirements and project specifications.",
        "Managed projects from initial discussions through development, testing and delivery.",
        "Provided ongoing website support, updates and troubleshooting.",
      ],
    },
    {
      title: "WordPress Developer",
      company_name: "Freelance",
      initials: "WP",
      iconBg: "#E6DEDD",
      date: "2021 - 2022",
      points: [
        "Developed, customized and maintained WordPress websites for clients and businesses.",
        "Managed website content, themes, plugins and site optimization.",
        "Worked with clients to deliver functional, user-friendly websites.",
      ],
    },
    {
      title: "Full-Stack Developer / Freelance Engineer",
      company_name: "Jotweb Studio · Remote",
      initials: "JS",
      iconBg: "#383E56",
      date: "2020 - Present",
      points: [
        "Develop scalable web applications using React.js, Vue.js, Laravel and Node.js.",
        "Build cross-platform mobile and desktop apps and PWAs with React Native, Quasar, Ionic and Expo.",
        "Create CMS-powered websites using WordPress, Shopify, Wix and WooCommerce.",
        "Lead freelance projects from concept to deployment while maintaining strong coding standards.",
      ],
    },
];

const testimonials = [
    {
      testimonial: "Very loyal and good.",
      name: "Adesanoye Samson",
      company: "Samson",
      image: samson,
    },
    {
      testimonial: "A very hardworking person.",
      name: "Babalola Ayomide",
      company: "Buzpeaks",
      image: ayomide,
    },
];

const projects = [
    {
      name: "Josnif ICO",
      description:
        "Web3 initial coin offering platform where users connect their wallet to claim or mint Josnif tokens, backed by Solidity smart contracts on Ethereum.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "solidity",
          color: "green-text-gradient",
        },
        {
          name: "web3",
          color: "pink-text-gradient",
        },
      ],
      image: josnifIco,
      source_code_link: "https://github.com/Josnif/josnif-ico",
      live_link: "https://josnif-ico.vercel.app/",
    },
    {
      name: "Kryptbase",
      description:
        "Web 3.0 app for sending crypto across the world. Users connect a wallet, transfer ETH with a message and GIF keyword, and view their transaction history.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "solidity",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: kryptbase,
      source_code_link: "https://github.com/Josnif/kryptbase",
      live_link: "https://kryptbase.vercel.app/",
    },
    {
      name: "Whitelist Dapp",
      description:
        "Decentralized app that lets early supporters join the whitelist for an NFT collection, with the whitelist limit and membership enforced on-chain.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "solidity",
          color: "green-text-gradient",
        },
        {
          name: "ethers",
          color: "pink-text-gradient",
        },
      ],
      image: whitelistDapp,
      source_code_link: "https://github.com/Josnif/Whitelist-Dapp",
      live_link: "https://whitelist-dapp-josnif.vercel.app/",
    },
    {
      name: "DaNeffy",
      description:
        "Cross-platform NFT marketplace mobile app for discovering and viewing NFTs, built with React Native and Expo.",
      tags: [
        {
          name: "reactnative",
          color: "blue-text-gradient",
        },
        {
          name: "expo",
          color: "green-text-gradient",
        },
        {
          name: "mobile",
          color: "pink-text-gradient",
        },
      ],
      image: daneffy,
      source_code_link: "https://github.com/Josnif/DaNeffy",
    },
    {
      name: "Kryptbase Vue",
      description:
        "Vue.js version of the Kryptbase Web 3.0 app, with a dark theme, wallet connection and Ethereum transfers through a Solidity smart contract.",
      tags: [
        {
          name: "vuejs",
          color: "blue-text-gradient",
        },
        {
          name: "solidity",
          color: "green-text-gradient",
        },
        {
          name: "web3",
          color: "pink-text-gradient",
        },
      ],
      image: kryptbaseVue,
      source_code_link: "https://github.com/Josnif/kryptbase-vuejs",
    },
    {
      name: "Admin Panel SPA",
      description:
        "Minimal single-page admin dashboard with user management, using a Laravel API backend and a Vue.js frontend.",
      tags: [
        {
          name: "laravel",
          color: "blue-text-gradient",
        },
        {
          name: "vuejs",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
      ],
      image: adminDashboard,
      source_code_link: "https://github.com/Josnif/Admin-Panel-SPA",
    },
    {
      name: "Blog Web App",
      description:
        "Blog website with categories and posts, managed through a full admin panel built on Laravel Voyager.",
      tags: [
        {
          name: "laravel",
          color: "blue-text-gradient",
        },
        {
          name: "voyager",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
      ],
      image: blogApp,
      source_code_link: "https://github.com/Josnif/Blog-with-voyager",
    },
    {
      name: "NFT Marketplace Landing",
      description:
        "Responsive app showcase and landing page for an NFT marketplace, built with React.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "landingpage",
          color: "pink-text-gradient",
        },
      ],
      image: nftLanding,
      source_code_link: "https://github.com/Josnif/nftmarketplace-landingpage",
    },
    {
      name: "Netflix Data Analysis",
      description:
        "Exploratory data analysis and visualization of Netflix TV shows and movies, from the Zero to Pandas data analysis course.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pandas",
          color: "green-text-gradient",
        },
        {
          name: "matplotlib",
          color: "pink-text-gradient",
        },
      ],
      image: netflixAnalysis,
      live_link: "https://jovian.ml/josephnifemi89/explanatory-data-analysis-netflix",
    },
];

export { services, technologies, experiences, testimonials, projects };
