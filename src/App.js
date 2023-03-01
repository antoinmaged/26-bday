/** @format */

import sound from "./sound.mp3";
import celebratemp3 from "./celebrate.mp3";
import "./App.css";
import React from "react";

function App() {
  const [currentIndex, setCurrentIndex] = React.useState(-1);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audio = new Audio(sound);
  const celebrate = new Audio(celebratemp3)
  audio.loop = true;
  function renderSwitch(param) {
    switch (param) {
      case 0:
        setTimeout(() => {
          setCurrentIndex(1);
        }, 14000);
        return <img src="./wave.gif" />;
      case 1:
        setTimeout(() => {
          setCurrentIndex(2);
        }, 2000);
        return <img src="./madness.gif" />;
        case 2:
          setTimeout(() => {
            setCurrentIndex(3);
          }, 5500);
          return (<div
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <div
            style={{
              height: "222px",
              display: "flex",
              width: "100%",
            }}
          >
            <img src="./t1.gif" />
            <img src="./t2.gif" />
            <img src="./t3.gif" />
          </div>
        </div>)
        case 3:
          setTimeout(() => {
            setCurrentIndex(4);
          }, 12000);
        return (
          <div
            style={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            <div
              style={{
                height: "222px",
                display: "flex",
                width: "100%",
              }}
            >
              <img src="./1pm.gif" />
              <img src="./friday.gif" />
            </div>
            <div
              style={{
                height: "222px",
                display: "flex",
                width: "100%",
              }}
            >
              <img src="./3pm.gif" />
              <img src="./Saturday.gif" />
            </div>
            <div
              style={{
                height: "222px",
                display: "flex",
                width: "100%",
              }}
            >
              <img src="./nvm.gif" />
              <img src="./Sunday.gif" />
            </div>
          </div>
        );
        case 4:
            setCurrentIndex(5)
            celebrate.loop = true;
            celebrate.play();
        return <img src="./happybday.gif" />;
        case 5:
          return <img src="./happybday.gif" />;
      default:
        return <h1 style={{ color: 'wheat'}}> Please check your sound is on ! then tap</h1>;
    }
  }
  return (
    <div
      className="App"
      style={{
        width: "100%",
        height: "1080px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('./bgd.gif')",
      }}
      onClick={() => {
        setCurrentIndex(0);
        audio.loop = false;
        audio.play();
      }}
    >
      <div>{renderSwitch(currentIndex)}</div>
    </div>
  );
}

export default App;
