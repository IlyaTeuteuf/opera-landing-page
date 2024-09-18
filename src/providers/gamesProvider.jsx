import { createContext, useContext, useState } from "react";

const GamesContext = createContext();

function GamesProvider({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const gamesData = [
    {
      screenshot: "/whentaken_ss.png",
      screenshot_mobile: "/whentaken_mobile_ss.png",
      href: "https://whentaken.com/",
      logoData: {
        logo: "\\src\\assets\\whentaken_logo.svg",
        bold: false,
        name: [
          { text: "When", style: { fontWeight: "bold" } },
          { text: "Taken" },
        ],
      },
      descriptionData: {
        heading: `GUESS WHEN AND WHERE A PHOTO WAS TAKEN`,
        info: "Test your detective skills with our daily game, check out the archive or create your own game in the Community section.",
      },
    },
    {
      screenshot: "/geogridgame_ss.png",
      screenshot_mobile: "/geogridgame_mobile_ss.png",
      href: "https://www.geogridgame.com/",
      logoData: { logo: "🌎", bold: false, name: [{ text: "GeoGrid" }] },
      descriptionData: {
        heading:
          "Guess a country for each box in the grid by criterion",
        info: "Players have 10 guesses to fill out the grid, less common answers yield higher score. A country can only be used once per game board.",
      },
    },
    {
      screenshot: "/worldle_ss.png",
      screenshot_mobile: "/worldle_mobile_ss.png",
      href: "https://worldle.teuteuf.fr/",
      logoData: {
        logo: "🌎",
        bold: true,
        name: [
          { text: "WOR" },
          { text: "L", style: { color: "#16a34a" } },
          { text: "DLE" },
        ],
      },
      descriptionData: {
        heading:
          "Guess the country by its' shape",
        info: "Test your visual memory by guessing the country by its' shape! Includes numerous bonus rounds, such as guessing the neighbours, capital, population, and others.",
      },
    },
    {
      screenshot: "/flagle_ss.png",
      screenshot_mobile: "/flagle_mobile_ss.png",
      href: "https://www.flagle.io/",
      logoData: {
        logo: "🌎",
        bold: true,
        name: [{ text: "FLAG" }, { text: "LE", style: { color: "#1a76d2" } }],
      },
      descriptionData: {
        heading:
          'Guess which country does the flag belong to',
        info: 'Think you know flags? Test your memory! Each guess reveals a tile, and bonus rounds add coat of arms and capital city flags. How fast can you guess? Let\'s play!',
      },
    },
  ];

  return (
    <GamesContext.Provider value={{ activeIndex, setActiveIndex, gamesData }}>
      {children}
    </GamesContext.Provider>
  );
}

function useGames() {
  const context = useContext(GamesContext);
  if (!context)
    throw new Error("GamesContext was used outside of GamesProvider");
  return context;
}

export { GamesProvider, useGames };
