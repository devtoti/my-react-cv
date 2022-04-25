import Flags from "country-flag-icons/react/3x2";
import { JSIcon, HTMLIcon, CSSIcon, ReactIcon } from "./svg-icons";
import { useState } from "react";

export default function Languages() {
  const [showHtml, setShowHtml] = useState(false);
  const [showCss, setShowCss] = useState(false);
  const [showJs, setShowJs] = useState(false);
  const [showReact, setShowReact] = useState(false);

  const contentShowing = [showHtml, showCss, showJs, showReact];
  const isContentShowing = contentShowing.includes(true);

  const languageList = ["HTML", "CSS", "Javascript", "React"];
  const programList = [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Figma",
    "Adobe XD"
  ];
  const spokenLanguages = [
    { id: 0, lan: "English", lvl: "Fluent", unicode: "US" },
    { id: 1, lan: "Spanish", lvl: "Fluent", unicode: "ES" },
    { id: 2, lan: "French", lvl: "Advanced", unicode: "FR" },
    { id: 3, lan: "German", lvl: "Intermediate", unicode: "DE" },
    { id: 4, lan: "Portuguese", lvl: "Beginner", unicode: "BR" }
  ];

  const Languages = ({ arr }) => {
    return (
      <div className="lang-table">
        <table style={{ width: "80vh" }}>
          <thead></thead>
          <tbody>
            {arr.map((data, ix) => {
              const { lan, lvl, unicode, id } = data;
              let uc = [data.unicode];
              const Table = Flags[uc];
              return (
                <tr key={id}>
                  <td>{lan}</td>
                  <td>{lvl}</td>
                  <td className="flags">
                    <Table key={id} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  const myPrograms = programList.map((item, ix) => {
    return <p key={ix}>{item}</p>;
  });

  const myLanguages = languageList.map((i, iz) => {
    return <p key={iz}>{i}</p>;
  });

  return (
    <>
      {!isContentShowing && (
        <main style={{ padding: "1rem 0" }}>
          <div className="visible-content">
            <h2>Languages / Frameworks </h2>
            <div className="languages--section">{myLanguages}</div>
            <div className="languages--block">
              <HTMLIcon setShowHtml={setShowHtml} />
              <CSSIcon setShowCss={setShowCss} />
              <JSIcon setShowJs={setShowJs} />
              <ReactIcon setShowReact={setShowReact} />
            </div>
            <h2 onClick={() => console.log("working")}>Programs</h2>
            {myPrograms}
            <h2>Communication Skills</h2>
            <Languages arr={spokenLanguages} />
          </div>
        </main>
      )}
      {showHtml && <InfoHtml setShowHtml={setShowHtml} />}
      {showCss && <InfoCSS setShowCss={setShowCss} />}
      {showJs && <InfoJs setShowJs={setShowJs} />}
      {showReact && <InfoReact setShowReact={setShowReact} />}
    </>
  );
}
const InfoHtml = ({ setShowHtml }) => {
  return (
    <div className="lang-info">
      <button
        classname="btn-close"
        type="button"
        onClick={() => setShowHtml((c) => !c)}
      >
        X
      </button>
      <div className="lang-section">
        <h1>HTML Knowledge</h1>
        <h3>This is what I can do:</h3>
        <div className="learned">
          {htmlKnowledge.map((i, ix) => (
            <p key={ix}>{i}</p>
          ))}
        </div>
        <h3>Currently learning:</h3>
        <div className="to-learn">
          {htmlToDo.map((i, ix) => (
            <p key={ix}>{i}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

const InfoCSS = ({ setShowCss }) => {
  return (
    <div className="lang-info">
      <button
        classname="btn-close"
        type="button"
        onClick={() => setShowCss((c) => !c)}
      >
        X
      </button>
      <div className="lang-section">
        <h1>CSS Knowledge</h1>
        <h3>This is what I can do:</h3>
        <div className="learned">
          {cssKnowledge.map((i, ix) => (
            <p key={ix}>{i}</p>
          ))}
        </div>
        <h3>Currently learning:</h3>
        <div className="to-learn">
          {cssToDo.map((i, ix) => (
            <p key={ix}>{i}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
const InfoJs = ({ setShowJs }) => {
  return (
    <div className="lang-info">
      <button
        classname="btn-close"
        type="button"
        onClick={() => setShowJs((c) => !c)}
      >
        X
      </button>
      <div className="lang-section">
        <h1>JS Knowledge</h1>
        <h3>This is what I can do:</h3>
        <div className="learned">
          {jsKnowledge.map((i, ix) => (
            <p key={ix}>{i}</p>
          ))}
        </div>
        <h3>Currently learning:</h3>
        <div className="to-learn">
          {jsToDo.map((i, ix) => (
            <p key={ix}>{i}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
const InfoReact = ({ setShowReact }) => {
  return (
    <div className="lang-info">
      <button
        classname="btn-close"
        type="button"
        onClick={() => setShowReact((c) => !c)}
      >
        X
      </button>
      <div className="lang-section">
        <h1>React Knowledge</h1>
        <h3>This is what I can do:</h3>
        <div className="learned">
          {reactKnowledge.map((i, ix) => (
            <p key={ix}>{i}</p>
          ))}
        </div>
        <h3>Currently learning:</h3>
        <div className="to-learn">
          {reactToDo.map((i, ix) => (
            <p key={ix}>{i}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

const htmlKnowledge = [
  "DOM",
  "forms",
  "validation",
  "accesibility",
  "attributes",
  "layout",
  "navigation"
];

const htmlToDo = ["SEO", "markup data"];

const cssKnowledge = [
  "flexbox",
  "css grid",
  "floats",
  "box models",
  "positioning",
  "prototypes",
  "responsiveness",
  "media queries",
  "pseudo elements",
  "keyframes"
];

const cssToDo = [
  "effects",
  "transitions",
  "animations",
  "dropdown menu",
  "modern CSS"
];
const jsKnowledge = [
  "flexbox",
  "css grid",
  "floats",
  "box models",
  "positioning",
  "prototypes",
  "responsiveness",
  "media queries"
];

const jsToDo = [
  "effects",
  "transitions",
  "animations",
  "dropdown menu",
  "modern CSS"
];
const reactKnowledge = [
  "flexbox",
  "css grid",
  "floats",
  "box models",
  "positioning",
  "prototypes",
  "responsiveness",
  "media queries"
];

const reactToDo = [
  "effects",
  "transitions",
  "animations",
  "dropdown menu",
  "modern CSS"
];
