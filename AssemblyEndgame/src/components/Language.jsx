import { languages } from "../custom/language";

export default function Language({ wrongGuessCount }) {
  return (
    <>
      <div className="languageContainer">
        {languages.map((language, index) => (
          <span
            style={{
              backgroundColor: language.backgroundColor,
              color: language.color,
            }}
            className={`language ${index < wrongGuessCount ? "lost" : ""}`}
            key={language.name}
          >
            {language.name}
          </span>
        ))}
      </div>
    </>
  );
}
