export const ROUTES = {
  home: "",
  about: "about",
  contact: "contact",
};

export const NAVIGATION = [
  {
    key: "home",
    route: ROUTES.home,
    end: true,
  },
  {
    key: "about",
    route: ROUTES.about,
  },
  {
    key: "contact",
    route: ROUTES.contact,
  },
];

export function getRoute(language, route) {
  if (!route) {
    return `/${language}`;
  }

  return `/${language}/${route}`;
}
