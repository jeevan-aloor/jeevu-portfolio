// pages/404.js

import { useState, useEffect } from 'react';
import styles from '../../styles/404.module.css'; // Create a CSS module for styling

export default function Custom404() {
  const [balloons, setBalloons] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Generate balloons
    const newBalloons = [];
    for (let i = 0; i < 10; i++) {
      newBalloons.push({
        id: i,
        left: Math.random() * 90,
        top: Math.random() * 90,
      });
    }
    setBalloons(newBalloons);
  }, []);

  const handleBalloonClick = (id) => {
    setBalloons(balloons.filter((balloon) => balloon.id !== id));
    setScore(score + 1);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Page Not Found</h1>
      <img src="https://img.freepik.com/free-vector/400-error-bad-request-concept-illustration_114360-1902.jpg?size=626&ext=jpg&ga=GA1.1.588902471.1712837051&semt=ais_user" alt="not-found" style={{height:"300px"}}/>
      <p className={styles.description}>But you can play a game instead!</p>
      <p className={styles.score}>Score: {score}</p>
      <div className={styles.gameArea}>
        {balloons.map((balloon) => (
          <div
            key={balloon.id}
            className={styles.balloon}
            style={{ left: `${balloon.left}%`, top: `${balloon.top}%` }}
            onClick={() => handleBalloonClick(balloon.id)}
          ></div>
        ))}
      </div>
    </div>
  );
}
