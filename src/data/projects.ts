export interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imgUrl: string;
  projectUrl: string;
  codeUrl: string;
  screenshots: string[];
  contributions: string[];
}

export const projects: Project[] = [
  {
    title: 'Beacon',
    description: "Beacon is an AI-powered web application designed to provide critical support and resource navigation for individuals experiencing homelessness. Developed during the GenAI Genesis hackathon in March 2026, the project leverages generative AI to bridge the gap between vulnerable populations and the essential services they need.",
    longDescription: "Beacon is an AI-powered web application designed to provide critical support and resource navigation for individuals experiencing various crises and lack of basic human needs. The platform's core feature is an intelligent conversational AI assistant that provides real-time, geo-located information on nearby shelters, food banks, and healthcare services. What sets Beacon apart is its AI-generated Survival Roadmap; leveraging LangChain, the agentic logic processes a user's unique situation and dynamically generates a personalized step-by-step guide to stabilization. This roadmap integrates real-time data from various service APIs to ensure the information is always current and relevant. Developed during the GenAI Genesis hackathon in March 2026, the project was built with a mobile-first approach to ensure accessibility for users on the go.",
    technologies: ['Typescript','React','LangChain','Git'],
    imgUrl: "/images/beacon/beacon_icon.png",
    projectUrl: 'https://github.com/raihanCarder/genaigenesis2026',
    codeUrl: '#',
    screenshots: [
      "/images/beacon/home.jpg",
      "/images/beacon/dashboard.jpg",
      "/images/beacon/chatbot.jpg",
      "/images/beacon/saved.jpg",
      "/images/beacon/roadmap.jpg"
    ],
    contributions: [
      "Developed the web app's roadmap feature, providing a user with a comprehensive, step-by-step plan for escaping situations of crisis.",
      "Utilized LangChain and Agentic AI to create an AI-powered workflow that analyzes the user's current situation, creating a profile which is then fed into a ReAct agent, that is capable of actively searching the web for resources and information to construct roadmap",
    ]
  },
  {
    title: 'Battleship',
    description: " A multiplayer server built for the classic game of Battleship. The project allows users to register on the server and send pre-formatted commands to bomb specified locations on an opponent's grid in order to win the game.",
    longDescription: "A multiplayer server built for the classic game of Battleship. The project allows users to register on the server and send pre-formatted commands to bomb specified locations on an opponent's grid in order to win the game. The server is built in C and uses epoll for efficient handling of multiple client connections. The game logic is implemented on the server-side, and clients can connect to the server using a simple terminal-based interface.",
    technologies: ['C', 'Epoll', 'Sockets'],
    imgUrl: "/images/battleship/Gameplay_1.png",
    projectUrl: 'https://github.com/liamkitsingh/battleship',
    codeUrl: '#',
    screenshots: [
      '/images/battleship/Gameplay_1.png',
      '/images/battleship/Gameplay_2.png', 
      '/images/battleship/Gameplay_3.png'
    ],
    contributions: [
      "This was a solo project, entirely completed by me."
    ]
  },
  {
    title: 'noted.',
    description: 'A secure desktop notes application built with Python. It features a modern, sleek graphical user interface (GUI) and allows users to create, view, edit, and delete (CRUD) note entries. To ensure security, it employs full database encryption—requiring a user-specified decryption key to unlock and access notes, with the key never being stored on file. The app also includes a searchable entry table for easy note lookup.',
    longDescription: 'A secure desktop notes application built with Python. It features a modern, sleek graphical user interface (GUI) and allows users to create, view, edit, and delete (CRUD) note entries. To ensure security, it employs full database encryption—requiring a user-specified decryption key to unlock and access notes, with the key never being stored on file. The app also includes a searchable entry table for easy note lookup. The GUI is built using Tkinter, and the database is encrypted using the Fernet symmetric encryption algorithm.',
    technologies: ['Python', 'Tkinter', 'SQL'],
    imgUrl:"/images/noted/dashboard.png",
    projectUrl: 'https://github.com/liamkitsingh/noted',
    codeUrl: '#',
    screenshots: [
      '/images/noted/dashboard.png',
      '/images/noted/create_entry.png', 
      '/images/noted/edit_entry.png', 
      '/images/noted/view_entries.png'
    ],
    contributions: [
      "This was a solo project, entirely completed by me"
    ]
  },
  {
    title: 'SMART-AIR',
    description: "An asthma tracking app built for Android. Designed for use by children, the app allows parents to monitor their child's medicine intake and emergencies.",
    longDescription: "An asthma tracking app built for Android. Designed for use by children, the app allows parents to monitor their child's medicine intake and emergencies. The app allows users to log their asthma symptoms, triggers, and medication use. It also provides a customizable emergency action plan. The data is stored locally on the device and can be exported as a PDF to be shared with healthcare providers.",
    technologies: ['Java', 'Android', 'Firebase', 'Git'],
    imgUrl: "/images/smart_air/dashboard.png",
    projectUrl: 'https://github.com/finn-abel/CSCB07_Final_Project_SMARTAIR',
    codeUrl: '#',
    screenshots: [
      "/images/smart_air/dashboard.png",
      "/images/smart_air/triage.png",
      "/images/smart_air/pef_entry.png"
    ],
    contributions: [
      "Developed a triage feature that allows users to perform a quick check for symptoms and triggers, and utilizes a critical decision making system that determines whether to escalate the situation to emergency services, or provide at-home remedies.",
      "Implemented a PEF entry feature",
    ]
  },
  {
    title: 'MovieMind',
    description: 'A content-based movie recommendation system, built after cleaning and transforming a kaggle dataset, and implementing a vector-space model to provide users with recommendations',
    longDescription: 'A content-based movie recommendation system, built after cleaning and transforming a kaggle dataset, and implementing a vector-space model to provide users with recommendations. The system uses natural language processing to extract features from movie descriptions and then uses a cosine similarity metric to find similar movies. The recommendations are served through a REST API built with FastAPI.',
    technologies: ['Python', 'FastAPI', 'Pandas', 'scikit-learn', 'React'],
    imgUrl: "/images/moviemind/Nolan.png",
    projectUrl: 'https://github.com/liamkitsingh/MovieMind',
    codeUrl: '#',
    screenshots: [
      '/images/moviemind/blank.png',
      '/images/moviemind/Nolan.png', 
      '/images/moviemind/greek.png',
      '/images/moviemind/Chalamet.png'
    ],
    contributions: [
      "This was a solo project, entirely completed by me"
    ]
  },
];
