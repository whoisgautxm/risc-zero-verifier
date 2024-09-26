use risc0_zkvm::Journal;
use wasm_bindgen::{prelude::wasm_bindgen, JsValue};
use ethers_core::types::{H160, H256};

#[wasm_bindgen]
pub fn statement_from_journal_bytes(journal: Vec<u8>) -> Result<JsValue, JsValue> {
    // Create a new journal instance from the raw bytes
    let journal = Journal::new(journal);

    // Attempt to decode the journal
    let decoded_journal = journal
        .decode::<(H160, u64, u64, u64, H160, H256)>()  // Adjust types based on expected journal content
        .map_err(|e| JsValue::from_str(&format!("Failed to decode journal: {e}")))?;

    // Destructure the decoded journal into individual fields
    let (signer_address, threshold_age, current_timestamp, attestation_time, recipient_address, domain_separator) = decoded_journal;

    // Convert H160 and H256 types to full hex strings
    let signer_address_hex = format!("{:?}", signer_address);
    let recipient_address_hex = format!("{:?}", recipient_address);
    let domain_separator_hex = format!("{:?}", domain_separator);

    // Create a formatted statement with full address and separator
    let statement = format!(
        "The data committed in the journal is: \n\
        - Signer address: {}\n\
        - Threshold age: {}\n\
        - Current timestamp: {}\n\
        - Attestation time: {}\n\
        - Recipient address: {}\n\
        - Domain separator: {}",
        signer_address_hex,      // Full H160 address as hex
        threshold_age,           // u64 -> Display as number
        current_timestamp,       // u64 -> Display as number
        attestation_time,        // u64 -> Display as number
        recipient_address_hex,   // Full H160 address as hex
        domain_separator_hex     // Full H256 domain separator as hex
    );

    // Return the formatted statement as a JsValue
    Ok(JsValue::from_str(&statement))
}
