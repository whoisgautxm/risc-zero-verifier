import React, { useState } from "react";
import "./App.css";
import { Verifier } from "@eqty/risc-zero-verifier-react";
import cx from "classnames";

function App() {
  const [verificationResult, setVerificationResult] = useState(null);
  const onVerifierStatus = (result) => {
    console.log("🚀 ~ onVerifierStatus ~ result:", result);
    setVerificationResult(result);
  };

  const classList = cx("App", {
    "is-verified": verificationResult && verificationResult.verified,
    "is-unverified": verificationResult && !verificationResult.verified,
    "": !verificationResult,
  });

  return (
    <div className="AppContainer">
      <div className={classList}>
        <div className="header">
          <h1>RISC Zero Verifier</h1>
          <p>
            This is a verifier for{" "}
            <a href="https://dev.risczero.com/api/zkvm/">RISC Zero zkVM</a>{" "}
            execution receipts.
          </p>
        </div>
        <Verifier
          enableJournalParser={true}
          onStatus={onVerifierStatus}
          registryUrl="http://localhost:3001/registry.json"
          ipfsGateway="https://ipfs.filebase.io"
        />
        <div className="info">
          <p>
            This verifier is developed by{" "}
            <a href="https://www.eqtylab.io/">EQTY Lab</a> and the code is{" "}
            <a href="https://github.com/eqtylab/risc-zero-verifier">
              available on GitHub
            </a>
            .
          </p>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
