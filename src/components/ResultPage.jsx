// import questions from "../questions"
import { useState } from "react";
export default function ResultPage({ result ,onRestart,questions}) {


  const correct_answer = questions.reduce((total, question, index) => {
    let answerIndex = result[index]
    if (question.correct_answer.trim().toLowerCase() === question.options[answerIndex].trim().toLowerCase()) {
      return total + 1
    } else {
      return total
    }
  }, 0)

  const total = questions.length
  const incorrect = total - correct_answer

  return (
    <>
      <div className="bg-purple-950/70 p-10 rounded-2xl shadow-lg w-[600px] max-w-full text-center">
        <div className="text-2xl font-bold mb-4">QUIZ COMPLETED!</div>
        <div className="flex justify-around text-lg mb-6">
          <div>
            <span className="text-2xl font-bold">0</span>
            <p className="text-sm">Skipped</p>
          </div>
          <div>
            <span className="text-2xl font-bold">{correct_answer / total * 100}%</span>
            <p className="text-sm">Answered Correctly</p>
          </div>
          <div>
            <span className="text-2xl font-bold">{incorrect / total * 100}%</span>
            <p className="text-sm">Answered Incorrectly</p>
          </div>
        </div>
        {/* <Link
          to="/"
          className="bg-pink-500 hover:bg-pink-600 py-2 px-6 rounded-xl"
        >
          Restart Quiz
        </Link> */}
      </div>

      <div className="bg-purple-950/70 p-10 rounded-2xl shadow-lg w-[600px] max-w-full mt-8 space-y-6">

        {
          questions.map((question, index) => {
            let answerIndex = result[index]
            let selectedAnswer = question.options[answerIndex]

            const isCorrect = selectedAnswer.trim().toLowerCase() === question.correct_answer.trim().toLowerCase()

            return (
              <div key={index}>
                <p className="text-sm">{index + 1}. {question.question}</p>
                <p className={isCorrect ? "text-green-400 font-semibold" : "text-red-400 font-semibold"}>
                  {selectedAnswer}
                </p>
              </div>
            )

          })
        }

        <button
          onClick={onRestart}
          className="bg-pink-500 hover:bg-pink-600 py-2 px-6 rounded-xl mt-6"
        >
          Try Again
        </button>

      </div>
    </>
  );
}
