import { useEffect, useState } from "react";
import type { Route } from "./+types/home";

const ACCESS_KEY = "nicoBirthdayVoucherAccess:v1";
const CHOICE_KEY = "nicoBirthdayVoucherChoice:v1";

const PASSWORDS = ["I am getting old", "I have an awesome girlfriend"];

const choices = [
  {
    id: "fujairah-diving",
    title: "Diving weekend in Fujairah",
    eyebrow: "Operation deep blue",
    code: "01 / Coast",
    description:
      "A proper sea-air escape with diving, a relaxed overnight stay, and enough post-dive food to make the surface interval count.",
    includes: ["Two-day weekend plan", "Diving focus", "Slow coastal evenings"],
    accent: "teal",
    image:
      "https://images.unsplash.com/photo-1586508577428-120d6b072945?auto=format&fit=crop&fm=jpg&q=78&w=1600",
    imageAlt: "Scuba divers exploring a coral reef in blue water.",
  },
  {
    id: "dubai-staycation",
    title: "Romantic staycation in Dubai",
    eyebrow: "Operation soft landing",
    code: "02 / City",
    description:
      "A dressed-up Dubai reset with a lovely hotel, dinner, pool time, and the rare luxury of doing absolutely nothing on purpose.",
    includes: ["Hotel night", "Romantic dinner", "Lazy morning together"],
    accent: "rose",
    image:
      "https://images.unsplash.com/photo-1784285550785-885d49cd7579?auto=format&fit=crop&fm=jpg&q=78&w=1600",
    imageAlt: "Dubai skyline glowing at night above a pool.",
  },
  {
    id: "abu-dhabi-riverdance",
    title: "Riverdance weekend in Abu Dhabi",
    eyebrow: "Operation footwork",
    code: "03 / Stage",
    description:
      "A playful Abu Dhabi weekend built around Riverdance, good seats, a nice meal, and a tiny bit of cultural razzle dazzle.",
    includes: ["Riverdance plans", "Weekend in Abu Dhabi", "Dinner and wandering"],
    accent: "gold",
    image:
      "https://images.unsplash.com/photo-1761229661497-30a087499566?auto=format&fit=crop&fm=jpg&q=78&w=1600",
    imageAlt: "Dancers performing under blue stage lighting.",
  },
] as const;

type ChoiceId = (typeof choices)[number]["id"];

type StoredChoice = {
  id: ChoiceId;
  title: string;
  selectedAt: string;
};

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nico's 33rd Birthday Voucher" },
    {
      name: "description",
      content: "A birthday voucher unlocked by riddles and claimed once.",
    },
  ];
}

function normalizePassword(value: string) {
  return value.trim().replace(/\s+/g, " ").toLowerCase();
}

function readStoredChoice(): StoredChoice | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = window.localStorage.getItem(CHOICE_KEY);
    return stored ? (JSON.parse(stored) as StoredChoice) : null;
  } catch {
    return null;
  }
}

export default function Home() {
  const [step, setStep] = useState(0);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [showChoices, setShowChoices] = useState(false);
  const [storedChoice, setStoredChoice] = useState<StoredChoice | null>(null);

  useEffect(() => {
    const storedAccess = window.localStorage.getItem(ACCESS_KEY) === "true";
    const choice = readStoredChoice();

    setUnlocked(storedAccess || Boolean(choice));
    setShowChoices(Boolean(choice));
    setStoredChoice(choice);

    if (storedAccess || choice) {
      const timer = window.setTimeout(() => setShowChoices(true), 350);
      return () => window.clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (!unlocked || showChoices) return;

    const timer = window.setTimeout(() => setShowChoices(true), 3400);
    return () => window.clearTimeout(timer);
  }, [showChoices, unlocked]);

  function handlePasswordSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (normalizePassword(password) !== normalizePassword(PASSWORDS[step])) {
      setError("Signal rejected. Re-check the phrase.");
      return;
    }

    setPassword("");
    setError("");

    if (step === PASSWORDS.length - 1) {
      window.localStorage.setItem(ACCESS_KEY, "true");
      setUnlocked(true);
      return;
    }

    setStep((currentStep) => currentStep + 1);
  }

  function handleChoose(choice: (typeof choices)[number]) {
    if (storedChoice) return;

    const nextChoice: StoredChoice = {
      id: choice.id,
      title: choice.title,
      selectedAt: new Date().toISOString(),
    };

    window.localStorage.setItem(CHOICE_KEY, JSON.stringify(nextChoice));
    window.localStorage.setItem(ACCESS_KEY, "true");
    setStoredChoice(nextChoice);
  }

  return (
    <main className="voucher-shell">
      {!unlocked ? (
        <section className="gate-panel vault-panel" aria-labelledby="gate-title">
          <div className="vault-header">
            <span>Voucher access</span>
            <span>Gate {String(step + 1).padStart(2, "0")} / 02</span>
          </div>
          <div className="cipher-mark" aria-hidden="true">
            <span>33</span>
            <span>N-ACCESS</span>
          </div>
          <p className="kicker">Answer required</p>
          <h1 id="gate-title">Enter passphrase</h1>
          <p className="gate-copy">
            Two physical clues. Two exact phrases. One birthday file waiting
            behind the lock.
          </p>
          <form onSubmit={handlePasswordSubmit} className="password-form">
            <label htmlFor="voucher-password">Case {step + 1}</label>
            <label htmlFor="voucher-password">Phrase {step + 1}</label>
            <input
              id="voucher-password"
              autoComplete="off"
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
              placeholder="type the recovered phrase"
            />
            {error ? <p className="form-error">{error}</p> : null}
            <button type="submit">Verify phrase</button>
          </form>
        </section>
      ) : (
        <section className="birthday-stage" aria-live="polite">
          {!showChoices ? (
            <div className="birthday-reveal">
              <div className="scan-card" aria-hidden="true">
                <span>33</span>
                <span>ACCESS GRANTED</span>
              </div>
              <p className="kicker">Birthday protocol unlocked</p>
              <h1>Happy birthday, Nico.</h1>
              <p>
                Clearance approved for one of three carefully classified
                birthday operations.
              </p>
            </div>
          ) : (
            <div className="choice-screen">
              <div className="choice-heading">
                <div className="briefing-tag">
                  <span>Nico / 33</span>
                  <span>Single-use voucher</span>
                </div>
                <p className="kicker">Birthday dossier</p>
                <h1>Select the assignment.</h1>
                <p>
                  One choice can be claimed from this browser. The selected
                  file will stay locked so the plan can be built from there.
                </p>
              </div>

              {storedChoice ? (
                <div className="locked-choice" role="status">
                  <p className="kicker">Choice locked</p>
                  <h2>{storedChoice.title}</h2>
                  <p>
                    Excellent decision. Your birthday coordinator can now
                    update the plan around this choice.
                  </p>
                </div>
              ) : null}

              <div className="choice-grid">
                {choices.map((choice) => {
                  const isSelected = storedChoice?.id === choice.id;
                  const isLockedOut = Boolean(storedChoice) && !isSelected;

                  return (
                    <article
                      className={`choice-card choice-card-${choice.accent} ${
                        isSelected ? "is-selected" : ""
                      } ${isLockedOut ? "is-locked-out" : ""}`}
                      key={choice.id}
                    >
                      <div className="choice-photo">
                        <img src={choice.image} alt={choice.imageAlt} />
                        <span>{choice.code}</span>
                      </div>
                      <div className="choice-body">
                        <p className="choice-eyebrow">{choice.eyebrow}</p>
                        <h2>{choice.title}</h2>
                        <p>{choice.description}</p>
                        <ul>
                          {choice.includes.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                        <button
                          disabled={Boolean(storedChoice)}
                          onClick={() => handleChoose(choice)}
                          type="button"
                        >
                          {isSelected ? "Selected" : "Choose"}
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          )}
        </section>
      )}
    </main>
  );
}
