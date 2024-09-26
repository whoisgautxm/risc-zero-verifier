/* tslint:disable */
/* eslint-disable */
/**
* @param {Uint8Array} journal
* @returns {any}
*/
export function json_obj_from_journal_bytes(journal: Uint8Array): any;
/**
* @param {Uint8Array} journal
* @returns {any}
*/
export function statement_from_journal_bytes(journal: Uint8Array): any;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly json_obj_from_journal_bytes: (a: number, b: number, c: number) => void;
  readonly statement_from_journal_bytes: (a: number, b: number, c: number) => void;
  readonly sys_sha_buffer: (a: number, b: number, c: number, d: number) => void;
  readonly sys_sha_compress: (a: number, b: number, c: number, d: number) => void;
  readonly sys_panic: (a: number, b: number) => void;
  readonly sys_pause: (a: number, b: number) => void;
  readonly sys_halt: (a: number, b: number) => void;
  readonly sys_rand: (a: number, b: number) => void;
  readonly syscall_2: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly sys_verify_integrity: (a: number) => void;
  readonly sys_cycle_count: () => number;
  readonly sys_log: (a: number, b: number) => void;
  readonly sys_read: (a: number, b: number, c: number) => number;
  readonly sys_read_words: (a: number, b: number, c: number) => number;
  readonly sys_bigint: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly sys_write: (a: number, b: number, c: number) => void;
  readonly sys_getenv: (a: number, b: number, c: number, d: number) => number;
  readonly sys_argc: () => number;
  readonly sys_argv: (a: number, b: number, c: number) => number;
  readonly sys_alloc_words: (a: number) => number;
  readonly sys_alloc_aligned: (a: number, b: number) => number;
  readonly sys_verify: (a: number, b: number, c: number) => void;
  readonly syscall_0: (a: number, b: number, c: number, d: number) => void;
  readonly syscall_1: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly syscall_3: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly syscall_4: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => void;
  readonly syscall_5: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
