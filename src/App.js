import { useState } from "react";
import "./App.css";

export default function App() {
  const [step, setStep] = useState(0);
  const next = () => setStep(step + 1);

  return (
    <div className="bg">
      <div className="hearts"></div>

      <div className="card">
        {step === 0 && (
          <div className="screen fade">
            <h1>Hey ❤️</h1>
            <p>I made this just for you.</p>
            <button onClick={next}>Open</button>
          </div>
        )}

        {step === 1 && (
          <div className="screen slide">
            <h1>You Changed My World</h1>
            <p>
              Every moment feels lighter, warmer, and real — because of you.
            </p>
            <button onClick={next}>Next</button>
          </div>
        )}

        {step === 2 && (
          <div className="screen fade">
            <h1>So I Have One Question…</h1>
            <p>Something I want to ask you from my heart.</p>
            <button onClick={next}>Continue</button>
          </div>
        )}

        {step === 3 && (
          <div className="screen pop">
            <h1>Will You Be My Valentine? 🌹</h1>
            <p>Not just today. Every day.</p>
            <button onClick={next}>Yes 💖</button>
          </div>
        )}

        {step === 4 && (
          <div className="screen glow">
            <h1>I Love You</h1>
            <p>Call me. I want to hear your voice right now.</p>
            <a href="tel:+918101037745" className="call">
              Call Me 📞
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
