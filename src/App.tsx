import './App.css';
import './reset.css';

import { useEffect, useState } from 'react';

function App() {
  return (
    <>
      <div className="bg">
        <Intro></Intro>
        <div className="info-section">
          <div style={{ height: '450px' }} />
          <h2>화살표를 하나씩 눌러보세요.</h2>
          <MBTI></MBTI>
          <Sports></Sports>
          <Hobby></Hobby>
        </div>
      </div>
    </>
  );
}

const Intro = () => {
  return (
    <div className="intro">
      <h4 style={{ fontSize: '30px', marginBottom: '15px' }}>Name: 최장혁</h4>
      <h4 style={{ fontSize: '30px', marginBottom: '15px' }}>
        Major: 산업공학과
      </h4>
      <h4 style={{ fontSize: '30px', marginBottom: '15px' }}>Age: 25세</h4>
    </div>
  );
};

const MBTI = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [animatedText, setAnimatedText] = useState('');
  const fullText = '  ENTP';

  useEffect(() => {
    if (showInfo) {
      setAnimatedText('');
      let i = 0;
      const typingEffect = setInterval(() => {
        if (i < fullText.length) {
          setAnimatedText((prev) => prev + fullText.charAt(i));
          i++;
        } else {
          clearInterval(typingEffect);
        }
      }, 200);

      return () => {
        clearInterval(typingEffect);
      };
    }
  }, [showInfo]);

  const handleArrowClick = () => {
    setShowInfo(!showInfo);
  };
  return (
    <div>
      <h1>
        MBTI
        <button className="arrow-button" onClick={handleArrowClick}>
          &#8594;
        </button>
        {showInfo && <span className="animated-text">{animatedText}</span>}
      </h1>
    </div>
  );
};

const Sports = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [animatedText, setAnimatedText] = useState('');
  const fullText = '  Climbing, Swimming, Running';

  useEffect(() => {
    if (showInfo) {
      setAnimatedText('');
      let i = 0;
      const typingEffect = setInterval(() => {
        if (i < fullText.length) {
          setAnimatedText((prev) => prev + fullText.charAt(i));
          i++;
        } else {
          clearInterval(typingEffect);
        }
      }, 150);

      return () => {
        clearInterval(typingEffect);
      };
    }
  }, [showInfo]);

  const handleArrowClick = () => {
    setShowInfo(!showInfo);
  };
  return (
    <div>
      <h1>
        Sports
        <button className="arrow-button" onClick={handleArrowClick}>
          &#8594;
        </button>
        {showInfo && <span className="animated-text">{animatedText}</span>}
      </h1>
    </div>
  );
};

const Hobby = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [animatedText, setAnimatedText] = useState('');
  const fullText = '  Coffee, Camera, Writing';

  useEffect(() => {
    if (showInfo) {
      setAnimatedText('');
      let i = 0;
      const typingEffect = setInterval(() => {
        if (i < fullText.length) {
          setAnimatedText((prev) => prev + fullText.charAt(i));
          i++;
        } else {
          clearInterval(typingEffect);
        }
      }, 150);

      return () => {
        clearInterval(typingEffect);
      };
    }
  }, [showInfo]);

  const handleArrowClick = () => {
    setShowInfo(!showInfo);
  };
  return (
    <div>
      <h1>
        Hobby
        <button className="arrow-button" onClick={handleArrowClick}>
          &#8594;
        </button>
        {showInfo && <span className="animated-text">{animatedText}</span>}
      </h1>
    </div>
  );
};

export default App;
