import React from "react";
import "./App.css";
import BreakingBadQuotes from "./components/BreakingBadQuotes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://png2.cleanpng.com/sh/bed2a5e4f17357b7673b043e1f5315bc/L0KzQYm3VMA2N6Rrj5H0aYP2gLBuTgdidKVqip9CaHn3dX7xhgN0bV51gdD0bXHxPcT7ifNsbaMyfNdsYXywccP7TgdidKVqip9CaHn3dX68gfM2bGE7fqpvNkC1QXA5UsM3PWg1TKMAMkK8QYS6WcE2QGg4RuJ3Zx==/kisspng-walter-white-jesse-pinkman-sticker-decal-art-walter-white-5ac5d06f8f6021.2236570415229133915873.png"
          className="App-logo"
          alt="logo"
        />
        <img
          src="https://png2.cleanpng.com/sh/30b9820e5fe341224dd5b2e94668f094/L0KzQYm3WME3N6pripH0aYP2gLBuTfxwb5Cyj9N1dHX1PcjvigRmNadqeAZ4cj3qgrL3iPlke155fd5udnn2ebF1TgNpd6gyeuRuYXvsfri0gvFlNaFzf586OD24coi8VPUyOJI1TaQEOD65Q4mCUMkyOmI6S6Y9MUS2RYO9VcY4NqFzf3==/kisspng-logo-walter-white-vector-graphics-television-show-breaking-bad-png-18-5b754e10a05298.6389091215344143526567.png"
          className="App-logo02"
          alt="logo-name"
        />
      </header>

      <BreakingBadQuotes />
    </div>
  );
}

export default App;
