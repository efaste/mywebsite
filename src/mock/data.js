import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Efaste Mushundusi', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: ' ', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Efaste Mushundusi',
  subtitle: 'I am student at Northern Illinois University College of Business majoring in Operation Management and Information System an emphasis in Data analytics',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: ' ',
  paragraphOne: 'My name is Efaste Mushundusi I am a student from Northern Illinois University College of Business majoring in operation management and information system.',
  paragraphTwo: 'The biggest value I bring to your company is my communication and leadership skills and my academic experience and skills. ',
  paragraphThree: 'The one thing that sets me apart from other potential employees is my thirst for learning new technology and skills that will benefit the company and the stakeholders.',
  resume: 'https://my.indeed.com/p/efastem-79uc46x', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'DatabasePicture4.png',
    title: 'Loan Company Database created with Microsoft Sql Server Management Studio',
    info: 'This is a database Project I created for my Database Management Class, created with microsoft sql server management studio.',
    url: 'https://youtu.be/lz5N1jKogxU',
    info2: '',
    repo: 'https://youtu.be/lz5N1jKogxU', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Games.PNG',
    title: 'Global Video Game Sales Report Dashboard" ',
    info: 'This dashboard shows global video games sales from major market and top platforms over the years.',
    info2: '',
    url: 'https://public.tableau.com/profile/efaste#!/vizhome/GlobalVideoGameSalesReportDashboard/GlobalVideoGameSalesReportDashboard',
    repo: 'https://public.tableau.com/profile/efaste#!/vizhome/GlobalVideoGameSalesReportDashboard/GlobalVideoGameSalesReportDashboard', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Hotel.PNG',
    title: 'Hotel Customer Booking Report Dashboard" ',
    info: 'This dashboard shows global customer booking data by customer type.',
    info2: '',
    url: 'https://public.tableau.com/profile/efaste#!/vizhome/HotelCustomerBookingReportDashboard/HotelCustomerBookingReportDashboard',
    repo: 'https://public.tableau.com/profile/efaste#!/vizhome/HotelCustomerBookingReportDashboard/HotelCustomerBookingReportDashboard', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Supermarket.PNG',
    title: 'Supermarket statistics by gender',
    info: 'This dashboard shows the activities of shoppers by their gender type. ',
    info2: '',
    url: 'https://public.tableau.com/profile/efaste#!/vizhome/Supermarketstatisticsbygender/Supermarketstatisticsbygender',
    repo: 'https://public.tableau.com/profile/efaste#!/vizhome/Supermarketstatisticsbygender/Supermarketstatisticsbygender', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Coffee.PNG',
    title: 'Coffee Sales Report Dashboard',
    info: 'This dashboard shows the sales of coffee by each states and by their brand name. ',
    info2: '',
    url: 'https://public.tableau.com/profile/efaste#!/vizhome/SummaryofCoffeeSales/CoffeeSalesReportDashBoard',
    repo: 'https://public.tableau.com/profile/efaste#!/vizhome/SummaryofCoffeeSales/CoffeeSalesReportDashBoard', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Superstore.PNG',
    title: 'Superstore Report Dashboard" ',
    info: 'This dashboard shows sales and profit by manager region.',
    info2: '',
    url: 'https://public.tableau.com/profile/efaste#!/vizhome/OMIS473Combochart/SuperstoreReportDashboard',
    repo: 'https://public.tableau.com/profile/efaste#!/vizhome/OMIS473Combochart/SuperstoreReportDashboard', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'efastemushundusi@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/efaste-mushundusi-9a95471b1/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
