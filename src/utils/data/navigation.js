import { v4 as uuidv4 } from "uuid";

// Used to render all the navigation links.
export const pencilNavData = {
  mainNav: {
    name: "Pencils",
    url: "/pencils",
  },
  subNav: [
    {
      name: "Graphite Pencils",
      url: "/pencils/graphite-pencils",
      key: uuidv4(),
    },
    {
      name: "Colored Pencils",
      url: "/pencils/colored-pencils",
      key: uuidv4(),
    },
    {
      name: "Mechanical Pencils",
      url: "/pencils/mechanical-pencils",
      key: uuidv4(),
    },
  ],
};

export const paperNavData = {
  mainNav: {
    name: "Papers",
    url: "/papers",
  },
  subNav: [
    {
      name: "Sketch Paper",
      url: "/papers/sketch-paper",
      key: uuidv4(),
    },
    {
      name: "Sketchbooks",
      url: "/papers/sketchbooks",
      key: uuidv4(),
    },
  ],
};

export const inksNavData = {
  mainNav: {
    name: "Inks",
    url: "/inks",
  },
  subNav: [
    {
      name: "Artist Inks",
      url: "/inks/artist-inks",
      key: uuidv4(),
    },
    {
      name: "Inking Pens",
      url: "/inks/inking-pens",
      key: uuidv4(),
    },
  ],
};

export const accountNavData = {
  mainNav: {
    name: "Account",
    url: "/profile",
  },
  subNav: [
    {
      name: "Login",
      url: "/login",
      key: uuidv4(),
    },
    {
      name: "New Account",
      url: "/register",
      key: uuidv4(),
    },
  ],
  isLoggedIn: [
    {
      name: "View Profile",
      url: "/profile",
      key: uuidv4(),
    },
    {
      name: "Logout",
      url: "/",
      key: uuidv4(),
    },
  ],
};
