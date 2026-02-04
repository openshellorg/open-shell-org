import { Title } from "@solidjs/meta";
import { createSignal } from "solid-js";
import { validateHelpOutput } from "@sos/validator-core";

export default function Home() {
  const [input, setInput] = createSignal("");
  const [result, setResult] = createSignal<{ success: boolean; message: string } | null>(null);

  const handleValidate = () => {
    setResult(validateHelpOutput(input()));
  };

  return (
    <main>
      <Title>Open Shell Organization (OSO)</Title>

      <header>
        <div class="oso-logo">
          <span class="oso-braces">{"{"}</span>
          <span class="oso-o1">O</span>
          <span class="oso-s">S</span>
          <span class="oso-o2">O</span>
          <span class="oso-braces">{"}"}</span>
        </div>
        <h1>Save Our Syntax</h1>
        <p>
          Implementing the <strong>Standardized Operations Syntax (SOS)</strong> to resolve "Syntax Fracture".
          The universal spec for modern CLI interfaces.
        </p>
      </header>

      <section class="validator-box">
        <h2>Compliance Validator</h2>
        <p>Paste your <code>--help</code> output below to verify SOS-Standard compliance.</p>
        <textarea
          placeholder="my-app --help output here..."
          value={input()}
          onInput={(e) => setInput(e.currentTarget.value)}
        />
        <button onClick={handleValidate}>Validate Compliance</button>

        {result() && (
          <div class={`result ${result()?.success ? "success" : "failure"}`}>
            <strong>{result()?.success ? "PASS" : "FAIL"}:</strong> {result()?.message}
          </div>
        )}
      </section>

      <section style={{ "margin-top": "2rem" }}>
        <h3>Market Position</h3>
        <p>
          The OSO resolves "Syntax Fracture" by providing a single source of truth.
          The SOS renders the "GNU vs. BSD vs. Windows" syntax debate obsolete.
        </p>
        <a href="http://localhost:4321" style={{ color: "var(--oso-blue)" }}>Read the SOS Specification &rarr;</a>
      </section>
    </main>
  );
}
