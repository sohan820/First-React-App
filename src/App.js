import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [step, setStep] = useState(0);
  const [showRedRain, setShowRedRain] = useState(false);
  const [heartbeat, setHeartbeat] = useState(false);
  
  useEffect(() => {
    // Heartbeat effect every 3 seconds
    const heartbeatInterval = setInterval(() => {
      setHeartbeat(true);
      setTimeout(() => setHeartbeat(false), 500);
    }, 3000);
    
    // Red rain effect
    setShowRedRain(true);
    
    return () => clearInterval(heartbeatInterval);
  }, []);

  const next = () => {
    if (step < 4) setStep(step + 1);
  };

  return (
    <div className="red-valentine-container">
      {/* Red Theme Background Elements */}
      <div className="red-bg">
        <div className="red-gradient"></div>
        <div className="red-aura"></div>
        <div className="red-haze"></div>
      </div>

      {/* Falling Red Hearts Rain */}
      <div className={`red-hearts-rain ${showRedRain ? 'active' : ''}`}>
        {[...Array(50)].map((_, i) => (
          <div key={i} className="red-heart-drop" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
            fontSize: `${Math.random() * 2 + 1}rem`,
            opacity: Math.random() * 0.7 + 0.3
          }}>
            {['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍'][i % 8]}
          </div>
        ))}
      </div>

      {/* Floating Red Roses */}
      <div className="red-roses-floating">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="red-rose" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${10 + Math.random() * 10}s`
          }}>
            🌹
          </div>
        ))}
      </div>

      {/* Pulsing Red Orbs */}
      <div className="red-orbs">
        <div className="red-orb orb1"></div>
        <div className="red-orb orb2"></div>
        <div className="red-orb orb3"></div>
      </div>

      {/* Main Valentine Card */}
      <div className="red-card-container">
        <div className={`red-card ${heartbeat ? 'heartbeat-effect' : ''}`}>
          
          {/* Step 0 - Opening with Red Rose */}
          {step === 0 && (
            <div className="red-step fade-in-red">
              <div className="red-rose-large">
                <div className="rose-petal petal1"></div>
                <div className="rose-petal petal2"></div>
                <div className="rose-petal petal3"></div>
                <div className="rose-petal petal4"></div>
                <div className="rose-center">❤️</div>
              </div>
              <h1 className="red-title">For My Riya</h1>
              <p className="red-subtitle">私の愛 (My Love)</p>
              <p className="red-message">A red rose for my red rose...</p>
              <button className="red-btn pulse-red" onClick={next}>
                Open Your Heart 💌
              </button>
            </div>
          )}

          {/* Step 1 - Passion Message */}
          {step === 1 && (
            <div className="red-step slide-red">
              <div className="flaming-heart">
                <div className="flame flame1"></div>
                <div className="flame flame2"></div>
                <div className="flame flame3"></div>
                <div className="heart-center">❤️‍🔥</div>
              </div>
              <h2 className="red-heading gradient-red">You Set My Soul on Fire</h2>
              <p className="red-description">
                Every moment with you burns brighter than a thousand flames. 
                Your love ignites my heart like nothing else.
              </p>
              <div className="red-quote">
                <span className="japanese-red">あなたは私の情熱です</span>
                <span className="romaji-red">(Anata wa watashi no jōnetsu desu)</span>
              </div>
              <button className="red-btn flame-btn" onClick={next}>
                Burn Brighter 🔥
              </button>
            </div>
          )}

          {/* Step 2 - Deep Love Message */}
          {step === 2 && (
            <div className="red-step zoom-red">
              <div className="deep-love-container">
                <div className="pulse-ring"></div>
                <div className="pulse-ring2"></div>
                <div className="love-core">💗</div>
              </div>
              <h2 className="red-heading">My Heart Beats Only for You</h2>
              <div className="red-poem">
                <p className="poem-line-red">In the sea of a million faces,</p>
                <p className="poem-line-red">My eyes search only for yours.</p>
                <p className="poem-line-red">In the symphony of life,</p>
                <p className="poem-line-red">My heart beats only your name.</p>
              </div>
              <p className="japanese-deep">心から愛してる</p>
              <p className="romaji-red">(Kokoro kara aishiteru)</p>
              <button className="red-btn deep-btn" onClick={next}>
                Deeper Into Love 💕
              </button>
            </div>
          )}

          {/* Step 3 - The Proposal with Red Theme */}
          {step === 3 && (
            <div className="red-step proposal-red">
              <div className="proposal-ring-container">
                <div className="ring-glow"></div>
                <div className="diamond"></div>
                <div className="ring-band"></div>
              </div>
              
              <h1 className="proposal-title-red">Riya...</h1>
              
              <div className="red-question-box">
                <p className="big-question">Will you be my Valentine?</p>
                <p className="japanese-question">私のバレンタインになってくれますか？</p>
                <p className="romaji-red">(Watashi no Valentine ni natte kuremasu ka?)</p>
              </div>

              <div className="red-choices">
                <button className="red-btn yes-btn" onClick={next}>
                  Yes, Forever! 💖
                  <span className="yes-glow"></span>
                </button>
                <button 
                  className="red-btn no-btn" 
                  onClick={() => {
                    alert("I knew you'd say yes! My heart already knew it ❤️");
                    next();
                  }}
                >
                  No (Just Kidding)
                </button>
              </div>
            </div>
          )}

          {/* Step 4 - Final Celebration with Red Passion */}
          {step === 4 && (
            <div className="red-step celebration-red">
              <div className="red-fireworks">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="red-firework" style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                  }}>
                    {['❤️', '🔥', '🌹', '💕', '💗', '💓'][i % 6]}
                  </div>
                ))}
              </div>

              <div className="beating-heart-red">
                <div className="heart-main">❤️</div>
                <div className="heart-shadow"></div>
                <div className="heart-glow"></div>
              </div>

              <h1 className="celebration-title-red">I Love You, Riya!</h1>
              <p className="celebration-sub-red">愛してるよ (Aishiteru yo)</p>

              <div className="red-message-box">
                <p className="love-message-red">
                  You are my today and all of my tomorrows. 
                  My love for you burns eternal, deeper than the deepest red.
                </p>
                <p className="japanese-promise-red">
                  永遠に愛してる
                  <span className="romaji-red">(Eien ni aishiteru)</span>
                </p>
              </div>

              <div className="red-call-section">
                <a href="tel:+916295301151" className="red-call-btn">
                  <span className="call-icon-red">📞</span>
                  <span className="call-text-red">Hear My Heartbeat</span>
                  <span className="call-ripple-red"></span>
                </a>
                <p className="waiting-red">I'm waiting to hear your voice...</p>
              </div>

              <div className="red-petals-final">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="red-petal" style={{
                    left: `${i * 10}%`,
                    animationDelay: `${i * 0.2}s`
                  }}>🌹</div>
                ))}
              </div>
            </div>
          )}

          {/* Red Theme Progress */}
          <div className="red-progress">
            {[0, 1, 2, 3, 4].map((dot, index) => (
              <div 
                key={dot} 
                className={`red-dot ${step === index ? 'active-red' : ''} ${step > index ? 'visited-red' : ''}`}
                onClick={() => setStep(index)}
              >
                <span className="dot-number">{index + 1}</span>
              </div>
            ))}
            <div className="red-progress-line" style={{width: `${step * 25}%`}}></div>
          </div>
        </div>
      </div>

      {/* Floating Red Messages */}
      <div className="floating-red-messages">
        <div className="red-message-float">❤️ Riya</div>
        <div className="red-message-float">🌹 My Love</div>
        <div className="red-message-float">💕 大好き</div>
      </div>

      {/* Red Sparks */}
      <div className="red-sparks">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="spark" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`
          }}>✨</div>
        ))}
      </div>
    </div>
  );
}