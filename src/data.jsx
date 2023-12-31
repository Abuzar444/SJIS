import { nanoid } from 'nanoid';
import { FaPassport, FaXRay, FaCcVisa, FaDraftingCompass, FaTradeFederation } from 'react-icons/fa';
import { MdLocalPolice, MdOutlineEmail, MdLocationOn, MdFamilyRestroom, MdAirlines } from 'react-icons/md'
import { FcCollaboration } from 'react-icons/fc'
import { BsFillTelephoneFill, BsWhatsapp } from 'react-icons/bs'
import { CgWebsite } from 'react-icons/cg'
import { GiMightyHorn, GiHealthIncrease, GiPoliceOfficerHead } from 'react-icons/gi'
import { AiTwotoneInsurance } from 'react-icons/ai'
import { SiPassport } from 'react-icons/si'
import { LiaFileInvoiceSolid } from 'react-icons/lia'

export const links = [
  { id: nanoid(), href: '/', text: 'home' },
  { id: nanoid(), href: '/works', text: 'works' },
  { id: nanoid(), href: '/about', text: 'about' },
  { id: nanoid(), href: '/services', text: 'services' },
  { id: nanoid(), href: '/contact', text: 'contact' }
];

export const works = [
  {
    id: nanoid(),
    title: 'Passport',
    icon: <FaPassport className='h-16 w-16 text-emerald-500' />,
    text: 'We are in the process of creating passports for all countries.',
  },
  {
    id: nanoid(),
    title: 'Police cards',
    icon: <MdLocalPolice className='h-16 w-16 text-emerald-500' />,
    text: 'All type of police work we do with great affort',
  },
  {
    id: nanoid(),
    title: 'Labour',
    icon: <FcCollaboration className='h-16 w-16 text-emerald-500' />,
    text: 'We do work on all type of labour visa with responsibility and privacy.',
  },
];

export const services = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'first project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'second project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];

export const phoneContact = [
  {
    number: '+971 52 5252 706',
    icon: <BsFillTelephoneFill />,
  },
  {
    number: '+971 50 7841 076',
    icon: <BsWhatsapp />
  },
  {
    number: '+971 56 6181 832',
    icon: <FaXRay />
  }
]

export const emailContact = [
  {
    address: 'www.alwazirtyping.com',
    icon: <CgWebsite />
  },
  {
    address: 'alwazrityping@gmail.com',
    icon: <MdOutlineEmail />
  },
  {
    address: 'location abudhabi',
    icon: <MdLocationOn />
  }
]

export const activities = [
  {
    activity: 'ALL IMMIGRATION WORKING',
    icon: <GiMightyHorn />
  },
  {
    activity: 'Family visa typing',
    icon: <MdFamilyRestroom />
  },
  {
    activity: 'Daman health insurance',
    icon: <GiHealthIncrease />
  },
  {
    activity: 'Visit visa service',
    icon: <FaCcVisa />
  },
  {
    activity: 'All airlines tickets',
    icon: <MdAirlines />
  },
  {
    activity: 'Vihicles insurance',
    icon: <AiTwotoneInsurance />
  },
  {
    activity: 'New company opening',
    icon: <FaDraftingCompass />
  },
  {
    activity: 'All trade license work',
    icon: <FaTradeFederation />
  },
  {
    activity: 'Passport renewel',
    icon: <SiPassport />
  },
  {
    activity: 'CV Quation invoices',
    icon: <LiaFileInvoiceSolid />
  },
  {
    activity: 'TRAFIC & POLICE DEPARTMENT WORKS',
    icon: <GiPoliceOfficerHead />
  }
]

export const heroText = `Starting a business in Dubai can be a complex process, but we're here to simplify it for you. With our expertise and knowledge of the local business landscape, we provide comprehensive support to help you kickstart your entrepreneurial journey in this thriving city. From company registration and legal formalities to understanding the market dynamics, we offer a tailored approach to suit your specific needs. Dubai's strategic location and business-friendly environment present incredible opportunities, and we are dedicated to assisting you every step of the way to turn your business aspirations into a successful reality. Let us be your trusted partner in realizing your dreams of establishing a thriving business in Dubai. `

export const aboutContent = [
  {
    title: 'About SJIS',
    content: `At SJIS, we are your dedicated partner in making your entrepreneurial dreams come true in the vibrant city of Dubai. Our mission is to simplify the complex process of starting a business in this dynamic and prosperous environment.`
  },
  {
    title: 'Who We Are',
    content: `We are a team of experienced professionals with an in-depth understanding of the local business landscape in Dubai. With our expertise, we provide comprehensive support tailored to your specific needs.`
  },
]
export const aboutContent2 = [
  {
    title: 'Why Choose SJIS?',
    content: `Experience: With a proven track record, we've assisted numerous entrepreneurs in establishing successful businesses in Dubai.
Tailored Approach: We understand that each business is unique. Our solutions are customized to meet your specific requirements.
Dedicated Support: We stand by your side every step of the way, from inception to growth, ensuring your success.`
  },
  {
    title: ` Your Dreams`,
    content: `Dubai is a city of limitless possibilities, and we're here to help you turn your business aspirations into reality. With SJIS as your trusted partner, you can confidently take the first steps towards establishing and growing your business in this thriving city.`
  },
]