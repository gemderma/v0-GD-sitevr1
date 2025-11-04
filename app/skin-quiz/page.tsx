"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

interface QuizQuestion {
  id: number
  question: string
  options: string[]
  category: string
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What is your primary skin concern?",
    options: ["Acne & Breakouts", "Wrinkles & Fine Lines", "Dark Spots & Discoloration", "Dryness & Sensitivity"],
    category: "concern",
  },
  {
    id: 2,
    question: "How would you describe your skin type?",
    options: ["Oily", "Combination", "Dry", "Sensitive"],
    category: "type",
  },
  {
    id: 3,
    question: "What is your age range?",
    options: ["18-25", "26-35", "36-45", "45+"],
    category: "age",
  },
  {
    id: 4,
    question: "How often do you currently use skincare treatments?",
    options: ["Daily", "2-3 times per week", "Weekly", "Rarely"],
    category: "frequency",
  },
  {
    id: 5,
    question: "Do you have sensitive skin or allergies?",
    options: ["No, my skin is resilient", "Mild sensitivity", "Moderate sensitivity", "Very sensitive"],
    category: "sensitivity",
  },
]

interface RecommendationCard {
  title: string
  description: string
  benefits: string[]
}

const RECOMMENDATIONS: Record<string, RecommendationCard> = {
  "acne-control": {
    title: "GemDerma Pro",
    description:
      "Advanced 4-in-1 device combining RF, LED, and microcurrent technology for deep acne treatment and prevention.",
    benefits: [
      "Reduces acne-causing bacteria",
      "Minimizes pore size",
      "Prevents future breakouts",
      "Improves skin clarity",
    ],
  },
  "anti-aging": {
    title: "GemDerma Pro",
    description:
      "Professional-grade microneedling with RF technology to boost collagen production and smooth fine lines.",
    benefits: ["Increases collagen synthesis", "Reduces fine lines", "Improves skin firmness", "Restores radiance"],
  },
  brightening: {
    title: "GemDerma Pro + GemSan",
    description: "Microneedling for texture improvement paired with GemSan sterilization for pure, clear skin.",
    benefits: ["Fades dark spots", "Evens skin tone", "Reduces discoloration", "Enhances radiance"],
  },
  "eye-care": {
    title: "GemDerma Eye",
    description: "Specialized eye treatment device designed for the delicate under-eye area.",
    benefits: ["Reduces puffiness", "Minimizes dark circles", "Firms skin", "Brightens eyes"],
  },
}

export default function SkinQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (answer: string) => {
    const newAnswers = {
      ...answers,
      [QUIZ_QUESTIONS[currentQuestion].category]: answer,
    }
    setAnswers(newAnswers)

    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const getRecommendation = (): string => {
    const concern = answers.concern
    if (concern?.includes("Acne")) return "acne-control"
    if (concern?.includes("Wrinkles")) return "anti-aging"
    if (concern?.includes("Dark Spots")) return "brightening"
    return "eye-care"
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
  }

  const recommendation = RECOMMENDATIONS[getRecommendation()]

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="bg-background py-20 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
          {!showResults ? (
            <div>
              <div className="mb-12">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Find Your Perfect Solution
                </h1>
                <p className="text-lg text-muted-foreground">
                  Answer a few questions to discover which GemDerma product is right for your skin.
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-muted-foreground">
                    Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}
                  </span>
                  <span className="text-sm font-semibold text-accent">
                    {Math.round(((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    className="bg-accent h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                  {QUIZ_QUESTIONS[currentQuestion].question}
                </h2>

                {/* Options */}
                <div className="space-y-3">
                  {QUIZ_QUESTIONS[currentQuestion].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      className="w-full p-4 text-left border-2 border-border rounded-lg hover:border-accent hover:bg-secondary transition-all duration-200 font-sans text-lg text-foreground hover:text-foreground"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-12 text-center">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Your Perfect Match</h2>
                <p className="text-lg text-muted-foreground">Based on your answers, we recommend:</p>
              </div>

              {/* Recommendation Card */}
              <div className="bg-secondary border-2 border-accent p-8 md:p-12 rounded-lg mb-12">
                <h3 className="font-serif text-4xl font-bold text-accent mb-4">{recommendation.title}</h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{recommendation.description}</p>

                <div className="mb-8">
                  <h4 className="font-serif text-xl font-bold text-foreground mb-4">Key Benefits:</h4>
                  <ul className="space-y-3">
                    {recommendation.benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-3">
                        <span className="text-accent font-bold">✓</span>
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-accent text-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity mb-4">
                  Explore Product
                </button>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleReset}
                  className="flex-1 border-2 border-border py-3 rounded-lg font-semibold hover:border-accent transition-colors"
                >
                  Retake Quiz
                </button>
                <button className="flex-1 bg-foreground text-background py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Shop Products
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
