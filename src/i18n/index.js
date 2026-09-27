import ukCommon from "./locales/uk/ui/common.json";
import ukHeader from "./locales/uk/ui/header.json";
import ukFooter from "./locales/uk/ui/footer.json";

import ukHome from "./locales/uk/content/home.json";
import ukAbout from "./locales/uk/content/about.json";
import ukContact from "./locales/uk/content/contact.json";
import ukNotFound from "./locales/uk/content/notFound.json";

import ukSeo from "./locales/uk/seo.json";


import enCommon from "./locales/en/ui/common.json";
import enHeader from "./locales/en/ui/header.json";
import enFooter from "./locales/en/ui/footer.json";

import enHome from "./locales/en/content/home.json";
import enAbout from "./locales/en/content/about.json";
import enContact from "./locales/en/content/contact.json";
import enNotFound from "./locales/en/content/notFound.json";

import enSeo from "./locales/en/seo.json";


const translations = {
  uk: {
    common: ukCommon,
    header: ukHeader,
    footer: ukFooter,

    home: ukHome,
    about: ukAbout,
    contact: ukContact,
    notFound: ukNotFound,

    seo: ukSeo,
  },

  en: {
    common: enCommon,
    header: enHeader,
    footer: enFooter,

    home: enHome,
    about: enAbout,
    contact: enContact,
    notFound: enNotFound,

    seo: enSeo,
  },
};

export default translations;