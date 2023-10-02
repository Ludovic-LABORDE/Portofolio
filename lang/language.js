export const language = {
    en: {
        Button: {
            FakeButton: "CONTACT ME",
            ButtonSubmit: "SEND MESSAGE",
            ButtonProject: "My Projects",
            ButtonDownload: "Download my cv"
        },
        Card: {
            firstStatus: "Web",
            secondStatus: "Developer",
            copyright: "© 2023 All Rights Reserved"
        },
        Navbar: [
            {
                id: 1,
                class: 'las la-home',
                section: 'Introduce',
                alt: 'Home'
            },
            {
                id: 2,
                class: 'lar la-user',
                section: 'About',
                alt: 'About'
            },
            {
                id: 3,
                class: 'las la-briefcase',
                section: 'Resume',
                alt: 'Resume'
            },
            {
                id: 4,
                class: 'las la-grip-vertical',
                section: 'Project',
                alt: 'Project'
            },
            {
                id: 5,
                class: 'las la-shapes',
                section: 'Skills',
                alt: 'Skills'
            },
            {
                id: 6,
                class: 'las la-envelope',
                section: 'Contact',
                alt: 'Contact'
            },
        ],
        Social: {
            name: "Sociale"
        },
        Section: {
            TitleSection: [
                {
                    id: 1,
                    name: 'introduction',
                    class: 'las la-home'
                },
                {
                    id: 2,
                    name: 'about me',
                    class: 'lar la-user'
                },
                {
                    id: 3,
                    name: 'resume',
                    class: 'las la-briefcase'
                },
                {
                    id: 4,
                    name: 'Project',
                    class: 'las la-grip-vertical'
                },
                {
                    id: 5,
                    name: 'my skills',
                    class: 'las la-shapes'
                },
                {
                    id: 6,
                    name: 'contact me',
                    class: 'las la-envelope'
                },
            ],
            About: {
                title: "My background in web",
                secondTitle: "development",
                firstText: "I've been drawn to computers since childhood, and have always been curious about what lies behind computer programs and how computers work.",
                secondText: "My ascent began over a year ago, when I started learning the basics of web development. I then got specialized in front-end development by taking a course dedicated to React-JS.",
                thirdText: "Since then, I've never stopped learning new things and perfecting the skills I've already acquired.",
            },
            Contact: {
                title: "Let's work",
                secondTitle: "together",
                textarea: {
                    placeholder: "Your message",
                    label: "MESSAGE",
                },
                input: [
                    {
                        id: 1,
                        name: 'name',
                        placeholder: 'Your Full name',
                        label: 'Full name',
                        type: 'text',
                        required: true
                    },
                    {
                        id: 2,
                        name: 'email',
                        placeholder: 'Your email adress',
                        label: 'Email',
                        type: 'email',
                        required: true,
                    },
                    {
                        id: 3,
                        name: 'phone',
                        placeholder: 'Your number phone',
                        label: 'Phone (optionnal)',
                        type: 'number',
                        required: false,
                    },
                    {
                        id: 4,
                        name: 'subject',
                        placeholder: 'Your subject',
                        label: 'Subject',
                        type: 'text',
                        required: true,
                    },
                ]
            },
            Introduce: {
                title: "Hello, I'm ",
                secondTitle: "Ludovic",
                thirdTitle: ", a passionate web developer.",
                text: '"Every line of code I write is an opportunity to create, innovate, and let my passion for development shape the digital future."',
                numberExperience: "1+",
                experience: "YEARS OF EXPERIENCE",
                numberProject: "5+",
                project: "PROJECTS COMPLETED",
            },
            Resume: {
                title: "Education & ",
                secondTitle: "Experience",
                web: {
                    firstDate: "2023 - Present",
                    firstTitle: "Web Developer & Web Mobile",
                    firstSubtitle: "Final Training Project at O'clock",
                    firstRole: "Git Master / Front-end Developer React-JS",
                    firstText: "Collaborative Web Application Development, from Conceptualization to MVP Deployment using Agile Methodology.",
                    secondSubtitle: "O'clock school",
                    secondTraining: "Complete Web Developer Training Programs: 798 Hours",
                    secondSkills: "Fundamental skills of web developmnent: HTML5/CSS3/JavaScript/PHP/MySQL",
                    secondSpe: "1 month of specialization: React-JS",
                },
                operator: {
                    firstDate: "2022 - 2023",
                    firstTitle: "Production Operator & Multifunctional Agent",
                    firstSubtitle: "‌Eviosys Packaging France",
                    firstRole: "Prepare for production and execution of necessary adjustments",
                    firstText: "Carry out preventive and corrective maintenance interventions",
                }
            },
            Skills: {
                title: "My",
                secondTitle: "Advantages"
            },
            Project: {
                title: "My ",
                secondTitle: "Projects",
                Cosmokids: {
                    title: "Cosmokids - Educationnal Plateform for kids",
                    firstTechno: "React-JS",
                    secondTechno: "Laravel/PHP",
                    Inner: [
                        {
                            id: 1,
                            name: 'CosmoKids',
                            alt: "Mockup cosmokids",
                            description: 'A web application where childrens can learn astronomy through fun and interactive content.',
                            picture: 'static/images/cosmokids/Mockup-application-800x400.png'
                        },
                        {
                            id: 2,
                            name: 'Landing page',
                            alt:"Landing page cosmokids",
                            description: "With NASA's API, every visit to the site welcomes an image of the cosmos and its history.",
                            picture: 'static/images/cosmokids/Landing.png'
                        },
                        {
                            id: 3,
                            name: 'Quiz',
                            alt:"Quiz cosmokids",
                            description: 'This quiz is linked to several lessons on the project.',
                            picture: 'static/images/cosmokids/Quizz.png'
                        },
                    ]
                }
            }
        }
    },

    fr: {
        Button: {
            FakeButton: "CONTACTEZ-MOI",
            ButtonSubmit: "ENVOYEZ MOI UN MESSAGE",
            ButtonProject: "Mes projets",
            ButtonDownload: "Télécharger mon cv"
        },
        Card: {
            firstStatus: "Web",
            secondStatus: "Developpeur",
            copyright: "© 2023 Tous droits réservés"
        },
        Navbar: [
            {
                id: 1,
                class: 'las la-home',
                section: 'Introduction',
                alt: 'Maison'
            },
            {
                id: 2,
                class: 'lar la-user',
                section: 'About',
                alt: 'À propos'
            },
            {
                id: 3,
                class: 'las la-briefcase',
                section: 'Resume',
                alt: 'Résumé'
            },
            {
                id: 4,
                class: 'las la-grip-vertical',
                section: 'Projects',
                alt: 'Projets'
            },
            {
                id: 5,
                class: 'las la-shapes',
                section: 'Skills',
                alt: 'Talents'
            },
            {
                id: 6,
                class: 'las la-envelope',
                section: 'Contact',
                alt: 'Contact'
            },
        ],
        Social: {
            name: "Sociale"
        },
        Section: {
            TitleSection: [
                {
                    id: 1,
                    name: 'introduction',
                    class: 'las la-home'
                },
                {
                    id: 2,
                    name: 'À propos',
                    class: 'lar la-user'
                },
                {
                    id: 3,
                    name: 'Résumé',
                    class: 'las la-briefcase'
                },
                {
                    id: 4,
                    name: 'Projets',
                    class: 'las la-grip-vertical'
                },
                {
                    id: 5,
                    name: 'Talents',
                    class: 'las la-shapes'
                },
                {
                    id: 6,
                    name: 'Contactez-moi',
                    class: 'las la-envelope'
                },
            ],
            About: {
                title: "Mon parcours dans le développment",
                secondTitle: "web",
                firstText: "Je suis attirée par les ordinateurs depuis mon enfance et j'ai toujours été curieux de savoir ce qui se cache derrière les programmes informatiques et comment les ordinateurs fonctionnent",
                secondText: "Mon ascension a commencé il y a plus d'un an, lorsque j'ai commencé à apprendre les bases du développement web. Je me suis ensuite spécialisé dans le développement front-end en suivant une formation dédiée à React-JS.",
                thirdText: "Depuis, je n'ai jamais cessé d'apprendre de nouvelles choses et de perfectionner les compétences que j'avais déjà acquises.",
            },
            Contact: {
                title: "Travaillons",
                secondTitle: "ensemble !",
                textarea: {
                    placeholder: "Votre message",
                    label: "Message",
                },
                input: [
                    {
                        id: 1,
                        name: 'name',
                        placeholder: 'Votre nom',
                        label: 'Nom',
                        type: 'text',
                        required: true
                    },
                    {
                        id: 2,
                        name: 'email',
                        placeholder: 'Votre adress e-mail',
                        label: 'Email',
                        type: 'email',
                        required: true,
                    },
                    {
                        id: 3,
                        name: 'phone',
                        placeholder: 'Votre numéros de téléphone',
                        label: 'Téléphone (Optionnel)',
                        type: 'number',
                        required: false,
                    },
                    {
                        id: 4,
                        name: 'subject',
                        placeholder: 'Votre sujet',
                        label: 'Sujet',
                        type: 'text',
                        required: true,
                    },
                ]
            },
            Introduce: {
                title: "Bonjour, je suis ",
                secondTitle: "Ludovic",
                thirdTitle: ", un développeur passioné.",
                text: "''Chaque ligne de code que j'écris est une occasion de créer, d'innover et de laisser ma passion pour le développement façonner l'avenir numérique.''",
                numberExperience: "1+",
                experience: "ANNÉES D'EXPÉRIENCE",
                numberProject: "5+",
                project: "PROJETS ACHEVÉS",
            },
            Resume: {
                title: "Formation  & ",
                secondTitle: "Expérience",
                web: {
                    firstDate: "2023 - Aujourd'hui",
                    firstTitle: "Développeur Web & Web Mobile",
                    firstSubtitle: "Projet de fin de formation",
                    firstRole: "Git Master / Développeur Front-end en React-JS",
                    firstText: "Développement collaboratif d'applications Web, de la conceptualisation au déploiement de MVP à l'aide d'une méthodologie agile.",
                    secondSubtitle: "École O'clock",
                    secondTraining: "Programmes complets de formation de développeurs Web : 798 heures",
                    secondSkills: "Compétences fondamentales en matière de développement web : HTML5/CSS3/JavaScript/PHP/MySQL",
                    secondSpe: "1 mois de spécialisation : React-JS",
                },
                operator: {
                    firstDate: "2022 - 2023",
                    firstTitle: "Opérateur de production et agent polyvalent",
                    firstSubtitle: "‌Eviosys Packaging France",
                    firstRole: "Préparation de la production et exécution des ajustements nécessaires",
                    firstText: "Effectuer des interventions de maintenance préventive et corrective",
                }
            },
            Skills: {
                title: "Mes",
                secondTitle: "Avantages"
            },
            Project: {
                title: "Mes ",
                secondTitle: "Projets",
                Cosmokids: {
                    title: "Cosmokids - Plateforme d'éducation pour enfants",
                    firstTechno: "React-JS",
                    secondTechno: "Laravel/PHP",
                    Inner: [
                        {
                            id: 1,
                            name: 'CosmoKids',
                            alt:"Mockup cosmokids",
                            description: "Une application web où les enfants peuvent apprendre l'astronomie grâce à un contenu amusant et interactif.",
                            picture: 'static/images/cosmokids/Mockup-application-800x400.png'
                        },
                        {
                            id: 2,
                            name: 'Landing page',
                            alt:"Page d'attérissage cosmokids",
                            description: "Grâce à l'API de la NASA, chaque visite sur le site accueille une image du cosmos et de son histoire.",
                            picture: 'static/images/cosmokids/Landing.png'
                        },
                        {
                            id: 3,
                            name: 'Quiz',
                            alt:"Quiz cosmokids",
                            description: 'Ce quiz est lié à plusieurs leçons sur le projet.',
                            picture: 'static/images/cosmokids/Quizz.png'
                        },
                    ]
                }
            }
        }
    }
};
