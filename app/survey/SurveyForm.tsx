"use client";

import { FormEvent, useState } from "react";
import { USER_SURVEY_QUESTIONS } from "../../lib/survey";

type Answers = Record<string, { answer: string; comment: string }>;

function initialAnswers(): Answers {
  return USER_SURVEY_QUESTIONS.reduce<Answers>((acc, question) => {
    acc[question.id] = { answer: "", comment: "" };
    return acc;
  }, {});
}

export default function SurveyForm({ initialEmail, source = "site" }: { initialEmail?: string; source?: string }) {
  const [email, setEmail] = useState(initialEmail ?? "");
  const [answers, setAnswers] = useState<Answers>(() => initialAnswers());
  const [questionIndex, setQuestionIndex] = useState(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const currentQuestion = USER_SURVEY_QUESTIONS[questionIndex];
  const currentAnswer = answers[currentQuestion.id];
  const isLastQuestion = questionIndex === USER_SURVEY_QUESTIONS.length - 1;
  const progress = ((questionIndex + 1) / USER_SURVEY_QUESTIONS.length) * 100;
  const canSubmitCurrent = currentQuestion.commentOnly || Boolean(currentAnswer?.answer);
  const canSubmitAll = USER_SURVEY_QUESTIONS.every((question) => question.commentOnly || answers[question.id]?.answer);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmitCurrent || status === "submitting") return;

    if (!isLastQuestion) {
      setError("");
      setQuestionIndex((current) => current + 1);
      return;
    }

    if (!canSubmitAll) {
      setError("Please answer each multiple-choice question before submitting.");
      return;
    }

    setStatus("submitting");
    setError("");

    const response = await fetch("/api/survey", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.trim() || null,
        source,
        answers,
      }),
    });

    if (!response.ok) {
      const body = await response.json().catch(() => null);
      setError(body?.error ?? "We could not submit the survey. Please try again.");
      setStatus("error");
      return;
    }

    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl p-8 text-center" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
        <h2 className="text-2xl font-bold mb-3">Thank you</h2>
        <p style={{ color: "var(--muted)" }}>
          Your feedback was sent to the TRL/Active team.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="rounded-2xl p-5 space-y-4" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
        <div className="flex items-center justify-between gap-4 text-sm">
          <span style={{ color: "var(--muted)" }}>
            Question {questionIndex + 1} of {USER_SURVEY_QUESTIONS.length}
          </span>
          <span className="font-semibold" style={{ color: "var(--accent)" }}>
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
          <div
            className="h-full rounded-full transition-all"
            style={{ width: `${progress}%`, background: "var(--accent)" }}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="survey-email">
            Email
          </label>
          <input
            id="survey-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-xl px-4 py-3 outline-none"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)", color: "var(--foreground)" }}
          />
        </div>
      </div>

      <section
        key={currentQuestion.id}
        className="rounded-2xl p-5"
        style={{ background: "var(--card)", border: "1px solid var(--border)" }}
      >
        <div className="flex items-start gap-3 mb-4">
          <span className="shrink-0 w-7 h-7 rounded-full grid place-items-center text-sm font-bold" style={{ background: "var(--accent)", color: "#050505" }}>
            {questionIndex + 1}
          </span>
          <h2 className="text-lg font-semibold">{currentQuestion.title}</h2>
        </div>

        {!currentQuestion.commentOnly ? (
          <div className="grid sm:grid-cols-2 gap-3">
            {currentQuestion.options.map((option) => {
              const selected = currentAnswer?.answer === option;
              return (
                <label
                  key={option}
                  className="cursor-pointer rounded-xl px-4 py-3 text-sm font-medium transition-opacity hover:opacity-90"
                  style={{
                    background: selected ? "var(--accent-glow)" : "rgba(255,255,255,0.04)",
                    border: selected ? "1px solid var(--accent)" : "1px solid var(--border)",
                    color: selected ? "var(--foreground)" : "var(--muted)",
                  }}
                >
                  <input
                    type="radio"
                    name={currentQuestion.id}
                    value={option}
                    checked={selected}
                    onChange={() => setAnswers((current) => ({
                      ...current,
                      [currentQuestion.id]: { ...current[currentQuestion.id], answer: option },
                    }))}
                    className="sr-only"
                    required
                  />
                  {option}
                </label>
              );
            })}
          </div>
        ) : null}

        <label className="block text-sm font-medium mt-4 mb-2" htmlFor={`${currentQuestion.id}-comment`} style={{ color: "var(--muted)" }}>
          {currentQuestion.commentOnly ? "Anything else you want us to know?" : "Optional comment"}
        </label>
        <textarea
          id={`${currentQuestion.id}-comment`}
          value={currentAnswer?.comment ?? ""}
          onChange={(event) => setAnswers((current) => ({
            ...current,
            [currentQuestion.id]: { ...current[currentQuestion.id], comment: event.target.value },
          }))}
          rows={3}
          maxLength={600}
          placeholder="Anything you want us to know?"
          className="w-full rounded-xl px-4 py-3 outline-none resize-y"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)", color: "var(--foreground)" }}
        />
      </section>

      {error ? <p className="text-sm" style={{ color: "#ff6b6b" }}>{error}</p> : null}

      <div className="flex gap-3">
        {questionIndex > 0 ? (
          <button
            type="button"
            onClick={() => setQuestionIndex((current) => current - 1)}
            className="rounded-full px-5 py-4 font-semibold transition-opacity"
            style={{ border: "1px solid var(--border)", color: "var(--foreground)" }}
          >
            Back
          </button>
        ) : null}
        <button
          type="submit"
          disabled={!canSubmitCurrent || status === "submitting"}
          className="flex-1 rounded-full px-6 py-4 font-semibold transition-opacity disabled:opacity-50"
          style={{ background: "var(--accent)", color: "#050505" }}
        >
          {status === "submitting" ? "Submitting..." : isLastQuestion ? "Submit survey" : "Submit answer"}
        </button>
      </div>
    </form>
  );
}
