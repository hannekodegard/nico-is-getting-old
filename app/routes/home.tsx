import { useEffect, useState } from "react";

import type { Route } from "./+types/home";

const ACCESS_KEY = "nicoBirthdayVoucherAccess:v1";
const CHOICE_KEY = "nicoBirthdayVoucherChoice:v1";

const PASSWORDS = ["OLDMAN", "AWESOMEGIRLFRIEND"];

const CASES = [
  {
    number: "CASE NO. 33-2026",
    title: "THE PEOPLE v. NICO",
    charge: "Premature Onset of Old Age",

    content: (
      <>
        <p>
          The Defendant is charged with{" "}
          <strong>Premature Onset of Old Age</strong>, contrary to common
          sense, physical evidence, and the increasingly frequent use of the
          phrase:
        </p>

        <blockquote>
          "I'm getting too old for this."
        </blockquote>

        <p>
          The Defendant is presumed <strong>not old</strong> until proven
          otherwise.
        </p>

        <p>
          The burden of proof rests with the Prosecution.
        </p>

        <p>
          Unfortunately for the Defendant, the evidence is overwhelming.
        </p>

        <h3>I. Statement of Facts</h3>

        <ol>
          <li>
            The Defendant is now <strong>33 years old</strong>.
          </li>

          <li>
            The Defendant maintains that 33 is "still young."
          </li>

          <li>
            No reasonable person could review the evidence and conclude that
            the Defendant is behaving like someone in his twenties.
          </li>

          <li>
            The Defendant has, on at least one occasion, voluntarily gone to
            bed because it was "getting late."
          </li>

          <li>
            Late nights are now followed by a period of significant recovery.
          </li>

          <li>
            The Defendant has developed opinions regarding the appropriate
            volume of music in public establishments.
          </li>

          <li>
            The Defendant has begun making noises when standing up.
          </li>

          <li>
            It may be noted that the Defendant is increasingly enthusiastic
            about comfortable furniture.
          </li>

          <li>
            A particularly troubling development is the Defendant's willingness
            to describe something as "too loud."
          </li>

          <li>
            One final piece of evidence is the Defendant's use of the phrase
            "when I was younger" without irony.
          </li>

          <li>
            The Defendant is therefore required to answer one important
            question.
          </li>
        </ol>

        <h3>II. Exhibit A — Age</h3>

        <p>
          The Prosecution submits the following evidence:
        </p>

        <div className="exhibit-box">
          <span className="exhibit-label">EXHIBIT A</span>
          <strong>THIRTY-THREE</strong>
        </div>

        <p>
          The Court notes that this number is sufficiently large to be
          concerning.
        </p>

        <p>
          The Prosecution further submits that <strong>33 is the key</strong>.
        </p>

        <h3>III. Exhibit B — Witness Statement</h3>

        <p>
          The following statement has been admitted into evidence:
        </p>

        <blockquote>
          "I remember when being tired meant I had stayed up too late.
          <br />
          <br />
          Now being tired means I have been awake for approximately forty-five
          minutes."
        </blockquote>

        <p>
          The witness has declined to comment further.
        </p>

        <h3>IV. Exhibit C — Expert Evidence</h3>

        <p>
          The Court has considered expert testimony concerning the recognised
          symptoms of advancing age.
        </p>

        <p>
          The following characteristics have been identified:
        </p>

        <ul className="evidence-list">
          <li>
            Going home early is no longer disappointing.
          </li>
          <li>
            A quiet evening is considered an excellent evening.
          </li>
          <li>
            A good night's sleep is regarded as an achievement.
          </li>
          <li>
            A comfortable chair is a legitimate reason to remain somewhere.
          </li>
          <li>
            "I can't do two late nights in a row" has become an entirely
            reasonable statement.
          </li>
          <li>
            The Defendant occasionally knows what time it is without checking
            his phone.
          </li>
          <li>
            The Defendant has strong opinions about the temperature of a room.
          </li>
          <li>
            The Defendant has begun saying things like{" "}
            <strong>"when I was younger."</strong>
          </li>
        </ul>

        <p>
          The Court considers the final item particularly damaging.
        </p>

        <h3>V. The Matter of the Missing Password</h3>

        <p>
          The Court has determined that the evidence contains a password.
        </p>

        <p>
          Counsel is directed to the following citations:
        </p>

        <div className="case-citations">
          <code>3:2</code>
          <code>5:1</code>
          <code>7:4</code>
          <code>8:2</code>
          <code>9:1</code>
          <code>10:2</code>
        </div>

        <p>
          Counsel should be familiar with the concept of a citation.
          However, for the purposes of this proceeding, the Court has adopted
          the following format:
        </p>

        <div className="citation-rule">
          <strong>FIRST NUMBER = SENTENCE</strong>
          <br />
          <strong>SECOND NUMBER = LETTER</strong>
          <br />
          <span>
            Spaces and punctuation are not counted.
          </span>
        </div>

        <p>
          For example, <strong>3:2</strong> means the second letter of the
          third sentence.
        </p>

        <p>
          Counsel should apply the citations to the{" "}
          <strong>Statement of Facts</strong> above.
        </p>

        <div className="case-extraction">
          <div>3:2 → ______</div>
          <div>5:1 → ______</div>
          <div>7:4 → ______</div>
          <div>8:2 → ______</div>
          <div>9:1 → ______</div>
          <div>10:2 → ______</div>
        </div>

        <div className="case-final-note">
          <strong>Hint:</strong> If you have correctly interpreted the
          citations, the six letters describe the Defendant rather accurately.
        </div>

        <h3>VI. Judgment</h3>

        <p>
          Having reviewed the evidence, heard submissions from Counsel, and
          considered the Defendant's increasingly questionable relationship
          with late nights, comfortable furniture, and loud music, the Court
          finds as follows:
        </p>

        <ol>
          <li>
            The Defendant is, in fact, getting old.
          </li>
          <li>
            The Defendant's claim that 33 is "still young" is noted but
            rejected.
          </li>
          <li>
            The evidence establishes a clear and continuing pattern of
            old-man behaviour.
          </li>
          <li>
            The password has been successfully established.
          </li>
        </ol>

        <h3>Sentence</h3>

        <p>
          The Defendant is sentenced to:
        </p>

        <div className="verdict-box">
          <strong>ONE (1) BIRTHDAY</strong>
        </div>

        <p>
          The sentence shall commence immediately.
        </p>

        <p>
          There shall be <strong>no right of appeal</strong>.
        </p>

        <p>
          Any application to the Court on the grounds that 33 is "not actually
          old" shall be dismissed as frivolous.
        </p>

        <p>
          The Defendant is further advised that, upon reaching the age of 34,
          the following privileges may become available:
        </p>

        <ul className="evidence-list">
          <li>complaining about loud music;</li>
          <li>leaving parties before midnight;</li>
          <li>becoming disproportionately excited about comfortable furniture;</li>
          <li>saying "kids these days";</li>
          <li>discussing the weather at length;</li>
          <li>and making an involuntary noise when sitting down.</li>
        </ul>

        <p>
          The Court expects full compliance.
        </p>

        <div className="court-adjourned">
          COURT IS ADJOURNED.
        </div>
      </>
    ),
  },

  {
    number: "CASE NO. GF-2026",
    title: "IN THE MATTER OF THE AWESOME GIRLFRIEND",
    charge: "Possession of an Exceptionally Good Girlfriend",

    content: (
      <>
        <p>
          The Court has been asked to determine whether the Defendant is
          currently in possession of an{" "}
          <strong>Awesome Girlfriend</strong>.
        </p>

        <p>
          The Prosecution submits that the answer is obvious. Nevertheless,
          Counsel has requested that the matter be established on the evidence.
        </p>

        <h3>I. Statement of Facts</h3>

        <ol>
          <li>
            The Defendant has been in a relationship with the alleged Awesome
            Girlfriend for a period of time deemed sufficient by the Court.
          </li>

          <li>
            The alleged Awesome Girlfriend voluntarily continues to spend time
            with the Defendant.
          </li>

          <li>
            She has demonstrated exceptional judgment by selecting the
            Defendant as her boyfriend.
          </li>

          <li>
            She has demonstrated further judgment by remaining in the
            relationship despite the Defendant's increasingly questionable
            behaviour as he approaches the age of 33.
          </li>

          <li>
            She has organised a birthday operation involving multiple
            classified cases, which is objectively more effort than the
            Defendant deserves.
          </li>

          <li>
            She is therefore presumed by this Court to be extremely awesome.
          </li>
        </ol>

        <h3>II. Exhibit A — Character Evidence</h3>

        <p>
          The Prosecution submits that the following qualities have been
          observed:
        </p>

        <div className="exhibit-box">
          <span className="exhibit-label">EXHIBIT A</span>
          <strong>GOOD JUDGMENT</strong>
        </div>

        <p>
          Specifically, the evidence demonstrates that she chose to date the
          Defendant.
        </p>

        <p>
          The Court considers this both compelling evidence of excellent
          judgment and, frankly, a little surprising.
        </p>

        <h3>III. Exhibit B — Documentary Evidence</h3>

        <p>
          The Court has received the following documentary evidence:
        </p>

        <blockquote>
          A birthday website containing two password-protected cases, three
          possible birthday adventures, and an unreasonable amount of effort
          spent making the Defendant feel special.
        </blockquote>

        <p>
          Counsel is invited to consider who would have gone to such lengths.
        </p>

        <h3>IV. Exhibit C — Expert Evidence</h3>

        <p>
          The Court has obtained expert testimony concerning the Defendant's
          relationship.
        </p>

        <p>
          The expert has identified the following findings:
        </p>

        <ul className="evidence-list">
          <li>
            The girlfriend is demonstrably thoughtful.
          </li>
          <li>
            The girlfriend has excellent taste.
          </li>
          <li>
            The girlfriend possesses considerable patience.
          </li>
          <li>
            The girlfriend is responsible for a suspiciously elaborate
            birthday surprise.
          </li>
          <li>
            The girlfriend is, on the balance of probabilities, awesome.
          </li>
        </ul>

        <p>
          The Court notes that the expert evidence is essentially
          uncontroverted.
        </p>

        <h3>V. Cross-Examination</h3>

        <p>
          Counsel is now required to answer the following questions:
        </p>

        <div className="question-block">
          <p>
            <strong>Question 1.</strong> Who has demonstrated exceptional
            judgment by dating the Defendant?
          </p>

          <p>
            <strong>Question 2.</strong> Who has put together this entire
            birthday operation?
          </p>

          <p>
            <strong>Question 3.</strong> Who is responsible for the Defendant
            having such an unnecessarily elaborate birthday website?
          </p>

          <p>
            <strong>Question 4.</strong> Who is clearly the best girlfriend?
          </p>
        </div>

        <h3>VI. Final Submission</h3>

        <p>
          The Court observes that all four questions have the same obvious
          answer.
        </p>

        <p>
          Counsel is therefore directed to identify the common subject of the
          evidence.
        </p>

        <div className="verdict-box">
          <strong>THE AWESOME GIRLFRIEND</strong>
        </div>

        <p>
          Remove the spaces and enter the resulting phrase as the passphrase.
        </p>

        <h3>VII. Judgment</h3>

        <p>
          Having considered the evidence, the Court finds beyond reasonable
          doubt that the Defendant has an Awesome Girlfriend.
        </p>

        <p>
          Indeed, the Court finds that the Defendant's possession of an
          Awesome Girlfriend is perhaps the strongest evidence yet submitted
          in his favour.
        </p>

        <h3>Sentence</h3>

        <p>
          The Defendant is ordered to:
        </p>

        <ul className="evidence-list">
          <li>have an excellent birthday;</li>
          <li>choose one birthday operation;</li>
          <li>spend quality time with his girlfriend;</li>
          <li>and appreciate how lucky he is.</li>
        </ul>

        <p>
          There shall be no right of appeal, primarily because the Court is
          confident the Defendant will agree with its findings.
        </p>

        <div className="court-adjourned">
          COURT IS ADJOURNED.
        </div>
      </>
    ),
  },
] as const;

const choices = [
  {
    id: "fujairah-diving",
    title: "Diving weekend in Fujairah",
    eyebrow: "Operation deep blue",
    code: "01 / Coast",
    description:
      "A proper sea-air escape with diving, a relaxed stay, and enough post-dive food to make the surface interval count.",
    includes: [
      "Weekend get away at a nice resort",
      "Padi Discover Scuba diving experience",
      "Sooo many turtles",
      "Scenic drive with you own personal lady chaffeur"
    ],
    accent: "teal",
    image:
      "https://images.unsplash.com/photo-1586508577428-120d6b072945?auto=format&fit=crop&fm=jpg&q=78&w=1600",
    imageAlt:
      "Scuba divers exploring a coral reef in blue water.",
    banner:
      "/Fujairah.png",
  },
  {
    id: "dubai-staycation",
    title: "Romantic staycation in Dubai",
    eyebrow: "Operation soft landing",
    code: "02 / City",
    description:
      "A dressed-up Dubai reset with a lovely hotel, dinner, pool time, and the rare luxury of doing absolutely nothing on purpose. (Or are we?)",
    includes: [
      "Weekend away from home",
      "Romance you don't have to plan for once",
      "Lazy mornings together (Promise I won't drag you out of bed for anything other than breakfast)",
    ],
    accent: "rose",
    image:
      "https://images.unsplash.com/photo-1784285550785-885d49cd7579?auto=format&fit=crop&fm=jpg&q=78&w=1600",
    imageAlt:
      "Dubai skyline glowing at night above a pool.",
    banner:
      "/Staycation.png",
  },
  {
    id: "abu-dhabi-riverdance",
    title: "Riverdance weekend in Abu Dhabi",
    eyebrow: "Operation footwork",
    code: "03 / Stage",
    description:
      "A playful Abu Dhabi weekend built around Riverdance, good seats, a nice meal, and a tiny bit of cultural razzle dazzle.",
    includes: [
      "Riverdance ofc",
      "A nice weekend in Abu Dhabi",
      "Learning the secrets of Abu Dhabi seen through a former resident",
      "Must be redeemed on the weekend of the 31st of October/1st of November"
    ],
    accent: "gold",
    image:
      "https://images.unsplash.com/photo-1761229661497-30a087499566?auto=format&fit=crop&fm=jpg&q=78&w=1600",
    imageAlt:
      "Dancers performing under blue stage lighting.",
    banner:
      "/Riverdance.png",
  },
] as const;

type ChoiceId = (typeof choices)[number]["id"];

type StoredChoice = {
  id: ChoiceId;
  title: string;
  selectedAt: string;
  banner: string;
};

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nico's 33rd Birthday Voucher" },
    {
      name: "description",
      content:
        "A birthday voucher unlocked by riddles and claimed once.",
    },
  ];
}

function normalizePassword(value: string) {
  return value.trim().replace(/\s+/g, "").toLowerCase();
}

function readStoredChoice(): StoredChoice | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = window.localStorage.getItem(CHOICE_KEY);

    return stored
      ? (JSON.parse(stored) as StoredChoice)
      : null;
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
  const [storedChoice, setStoredChoice] =
    useState<StoredChoice | null>(null);

  const [openCase, setOpenCase] = useState<number | null>(null);

  useEffect(() => {
    const storedAccess =
      window.localStorage.getItem(ACCESS_KEY) === "true";

    const choice = readStoredChoice();

    setUnlocked(storedAccess || Boolean(choice));
    setShowChoices(Boolean(choice));
    setStoredChoice(choice);

    if (storedAccess || choice) {
      const timer = window.setTimeout(
        () => setShowChoices(true),
        350,
      );

      return () => window.clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (!unlocked || showChoices) return;

    const timer = window.setTimeout(
      () => setShowChoices(true),
      3400,
    );

    return () => window.clearTimeout(timer);
  }, [showChoices, unlocked]);

  useEffect(() => {
    if (openCase === null) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenCase(null);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [openCase]);

  function handlePasswordSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (
      normalizePassword(password) !==
      normalizePassword(PASSWORDS[step])
    ) {
      setError("Signal rejected. Re-check the phrase.");
      return;
    }

    setPassword("");
    setError("");

    if (step === PASSWORDS.length - 1) {
      window.localStorage.setItem(
        ACCESS_KEY,
        "true",
      );

      setUnlocked(true);
      return;
    }

    setStep((currentStep) => currentStep + 1);
  }

  function handleChoose(
    choice: (typeof choices)[number],
  ) {
    if (storedChoice) return;

    const nextChoice: StoredChoice = {
      id: choice.id,
      title: choice.title,
      selectedAt: new Date().toISOString(),
      banner: choice.banner
    };

    console.log(choice.banner)

    window.localStorage.setItem(
      CHOICE_KEY,
      JSON.stringify(nextChoice),
    );

    window.localStorage.setItem(
      ACCESS_KEY,
      "true",
    );

    setStoredChoice(nextChoice);
  }

  const activeCase =
    openCase !== null ? CASES[openCase] : null;

    console.log(storedChoice?.banner)

  return (
    <main className="voucher-shell">
      {!unlocked ? (
        <section
          className="gate-panel vault-panel"
          aria-labelledby="gate-title"
        >
          <div className="vault-header">
            <span>Voucher access</span>

            <span>
              Gate {String(step + 1).padStart(2, "0")} / 02
            </span>
          </div>

          <div
            className="cipher-mark"
            aria-hidden="true"
          >
            <span>33</span>
            <span>N-ACCESS</span>
          </div>

          <p className="kicker">
            Answer required
          </p>

          <h1 id="gate-title">
            Enter passphrase
          </h1>

          <p className="gate-copy">
            Two cases. Two investigations. Two exact
            phrases. One birthday file waiting behind
            the lock.
          </p>

          <form
            onSubmit={handlePasswordSubmit}
            className="password-form"
          >
            <div className="password-label-row">
              <button
                type="button"
                className="case-link"
                onClick={() => setOpenCase(step)}
              >
                {CASES[step].number}
              </button>

              <label htmlFor="voucher-password">
                Submit passphrase
              </label>
            </div>

            <input
              id="voucher-password"
              autoComplete="off"
              value={password}
              onChange={(event) =>
                setPassword(
                  event.currentTarget.value,
                )
              }
              placeholder="type the recovered phrase"
            />

            {error ? (
              <p className="form-error">
                {error}
              </p>
            ) : null}

            <button type="submit">
              Verify phrase
            </button>
          </form>
        </section>
      ) : (
        <section
          className="birthday-stage"
          aria-live="polite"
        >
          {!showChoices ? (
            <div className="birthday-reveal">
              <div
                className="scan-card"
                aria-hidden="true"
              >
                <span>33</span>
                <span>ACCESS GRANTED</span>
              </div>

              <p className="kicker">
                Birthday protocol unlocked
              </p>

              <h1>
                Happy birthday, Nico.
              </h1>

              <p>
                Clearance approved for one of three
                carefully classified birthday
                operations.
              </p>
            </div>
          ) : (
            <div className="choice-screen">
              <div className="choice-heading">
                <div className="briefing-tag">
                  <span>Nico / 33</span>
                  <span>
                    Single-use voucher
                  </span>
                </div>

                <p className="kicker">
                  Birthday dossier
                </p>

                <h1>
                  Select the assignment.
                </h1>

                <p>
                  One choice can be claimed from
                  this browser. The selected file
                  will stay locked so the plan can
                  be built from there.
                </p>
              </div>

              {storedChoice ? (
                <div
                  className="locked-choice"
                  role="status"
                >
                  <p className="kicker">
                    Choice locked
                  </p>

                  <h2>
                    {storedChoice.title}
                  </h2>

                  <img src={storedChoice.banner}/>

                  <p>
                    Excellent decision. Your
                    birthday coordinator can now
                    update the plan around this
                    choice.
                  </p>
                </div>
              ) : null}

              <div className="choice-grid">
                {choices.map((choice) => {
                  const isSelected =
                    storedChoice?.id ===
                    choice.id;

                  const isLockedOut =
                    Boolean(storedChoice) &&
                    !isSelected;

                  return (
                    <article
                      className={`choice-card choice-card-${choice.accent} ${
                        isSelected
                          ? "is-selected"
                          : ""
                      } ${
                        isLockedOut
                          ? "is-locked-out"
                          : ""
                      }`}
                      key={choice.id}
                    >
                      <div className="choice-photo">
                        <img
                          src={choice.image}
                          alt={choice.imageAlt}
                        />

                        <span>
                          {choice.code}
                        </span>
                      </div>

                      <div className="choice-body">
                        <p className="choice-eyebrow">
                          {choice.eyebrow}
                        </p>

                        <h2>
                          {choice.title}
                        </h2>

                        <p>
                          {choice.description}
                        </p>

                        <ul>
                          {choice.includes.map(
                            (item) => (
                              <li key={item}>
                                {item}
                              </li>
                            ),
                          )}
                        </ul>

                        <button
                          disabled={Boolean(
                            storedChoice,
                          )}
                          onClick={() =>
                            handleChoose(choice)
                          }
                          type="button"
                        >
                          {isSelected
                            ? "Selected"
                            : "Choose"}
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

      {activeCase ? (
        <div
          className="case-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              setOpenCase(null);
            }
          }}
        >
          <div
            className="case-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-modal-title"
          >
            <div className="case-modal-header">
              <div>
                <p className="kicker">
                  {activeCase.number}
                </p>

                <h2 id="case-modal-title">
                  {activeCase.title}
                </h2>
              </div>

              <button
                type="button"
                className="case-modal-close"
                onClick={() =>
                  setOpenCase(null)
                }
                aria-label="Close case"
              >
                ×
              </button>
            </div>

            <div className="case-modal-charge">
              <span>CHARGE</span>

              <strong>
                {activeCase.charge}
              </strong>
            </div>

            <div className="case-modal-content">
              {activeCase.content}
            </div>

            <div className="case-modal-footer">
              <button
                type="button"
                onClick={() =>
                  setOpenCase(null)
                }
              >
                Return to case file
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}