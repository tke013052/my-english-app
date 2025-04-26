import { useState } from "react";

function App() {
  const sentences = [
    { jp: "明日は会議があります", en: "We have a meeting tomorrow." },
    {
      jp: "私は新しいプロジェクトを始めました",
      en: "I started a new project.",
    },
    {
      jp: "駅までどのくらいかかりますか？",
      en: "How long does it take to get to the station?",
    },
  ];

  const [index, setIndex] = useState(0); // 今何問目か
  const [showAnswer, setShowAnswer] = useState(false); // 英語を見せるかどうか

  const handleClick = () => {
    if (showAnswer) {
      // 英語が表示された後なら次の問題へ
      setIndex((prev) => (prev + 1) % sentences.length);
      setShowAnswer(false);
    } else {
      // 最初は日本語だけ表示 → 次に英語を見せる
      setShowAnswer(true);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <h1 style={{ fontSize: "24px", color: "black" }}>
        {showAnswer ? sentences[index].en : sentences[index].jp}
      </h1>

      <button
        onClick={handleClick}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        {showAnswer ? "次の問題へ！" : "答えを見る！"}
      </button>
    </div>
  );
}

export default App;
