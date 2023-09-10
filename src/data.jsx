import { nanoid } from 'nanoid';
import { FaPassport, FaJs, FaReact } from 'react-icons/fa';
import { MdLocalPolice } from 'react-icons/md'
import { FcCollaboration } from 'react-icons/fc'

export const links = [
  { id: nanoid(), href: '/', text: 'home' },
  { id: nanoid(), href: '/works', text: 'works' },
  { id: nanoid(), href: '/about', text: 'about' },
  { id: nanoid(), href: '/services', text: 'services' },
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
    number: '+971 52 5252 706'
  },
  {
    number: '+971 50 7841 076'
  },
  {
    number: '+971 56 6181 832'
  }
]
export const emailContact = [
  {
    address: 'www.alwazirtyping.com'
  },
  {
    address: 'alwazrityping@gmail.com'
  },
  {
    address: 'location abudhabi'
  }
]