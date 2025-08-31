// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import QuizPage from "./pages/QuizPage";
// import ResultPage from "./pages/ResultPage";

// export default function App() {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white font-sans">
//         <div className="text-center mb-10">
//           <div className="text-4xl font-bold tracking-widest">REACTQUIZ</div>
//         </div>

//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/quiz" element={<QuizPage />} />
//           <Route path="/result" element={<ResultPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }




import React, { useEffect, useState } from 'react'
import Header from './components/header'
import HomePage from './components/HomePage'
import QuizPage from './components/QuizPage'
import questions from "./questions"
import ResultPage from './components/ResultPage'

function App() {
  // const [data, setData] = useState([])


  const [loading, setLoading] = useState(false)
  const [questinIndex, setQuestinIndex] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState({})
  // useEffect(() => {
  //   fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple")
  //     .then((response) => response.json())
  //     .then((jsonData) => {
  //       setData(jsonData)
  //       setLoading(false)
  //       console.log('====================================');
  //       console.log("data fetch succesfully :",data);
  //       console.log('====================================');
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching data:", err);
  //       setLoading(false)
  //     })
  // }, [])
  const { question, correct_answer, options, } = questions[questinIndex]


  const nextQuestion = (answerIndex) => {


    setResult((preReult) => ({
      ...preReult,
      [questinIndex]: answerIndex
    }))



    if (questinIndex < questions.length - 1) {
      setQuestinIndex(pre => pre + 1)
    }
    else {
      setShowResult(true)
    }
  }

  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-pink-500 border-solid"></div>
      </div>
    )
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white font-sans">
      <div className="text-center mb-10">
        <div className="text-4xl font-bold tracking-widest">REACTQUIZ</div><br /><br />
        {/* <HomePage/> */}
        {!showResult
          ? <QuizPage qustionNum={question} answer={correct_answer} options={options} onAnswer={nextQuestion} />
          : <ResultPage result={result} />
        }
      </div>
    </div>
  )
}

export default App
