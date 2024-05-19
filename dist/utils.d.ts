/**
 * Return the filtered sequence and its complement if its an empty string, return the same for both.
 */
export declare const complement: (origSeq: string) => {
    compSeq: string;
    seq: string;
};
/**
 * Return the reverse complement of a DNA sequence
 */
export declare const reverseComplement: (inputSeq: string) => string;
export declare const firstElement: (arr: any) => any;
/**
 * Parse the user defined direction, estimate the direction of the element
 *
 * ```js
 * parseDirection("FWD") => 1
 * parseDirection("FORWARD") => 1
 * ```
 */
export declare const parseDirection: (direction: number | string | undefined) => -1 | 0 | 1;
/** Infer the type of a sequence. This only allows a couple wildcard characters so may be overly strict. */
export declare const guessType: (seq: string) => "dna" | "rna" | "aa" | "unknown";
