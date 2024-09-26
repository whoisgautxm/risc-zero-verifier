// src/zk_proof.rs
// use crate::structs:: DateOfBirth;
use ethers_core::types::Signature;
use ethers_core::types::{H160, H256};
use methods::ADDRESS_ELF;
use risc0_zkvm::{ExecutorEnv, ProverOpts, Receipt, VerifierContext,default_prover};
use crate::structs::Attest;
// use tracing_subscriber::registry::Data;

pub fn prove_address(
    signer_address: &H160,
    signature: &Signature,
    threshold_age: &u64,
    current_timestamp: &u64,
    attest: &Attest,
    domain_separator: H256,
) -> Receipt {
    let input: (
        &H160,
        &Signature,
        &u64,
        &u64,
        &Attest,
        H256,
    ) = (
        signer_address,
        signature,
        threshold_age,
        current_timestamp,
        attest,
        domain_separator,
    );

    let env = ExecutorEnv::builder()
        .write(&input)
        .unwrap()
        .build()
        .unwrap();

    let prover = default_prover();
    prover.prove(env, ADDRESS_ELF).unwrap().receipt
}


// let receipt = default_prover()
// .prove_with_ctx(
//     env,
//     &VerifierContext::default(),
//     ADDRESS_ELF,
//     &ProverOpts::groth16(),
// )?
// .receipt