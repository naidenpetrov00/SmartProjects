export const paths = {
  home: {
    path: '/',
  },
  contacts: {
    path: '/contacts',
  },
  ourWork: {
    path: '/ourWork',
  },
  aboutUs: {
    path: '/aboutUs',
  },
} as const;

export const pagesForNavigationBar = [
  { text: 'HOME', path: paths.home.path },
  { text: 'CONTACTS', path: paths.contacts.path },
  { text: 'OUR WORK', path: paths.ourWork.path },
  { text: 'ABOUT US', path: paths.aboutUs.path },
];
