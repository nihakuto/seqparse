import { ParseOptions, Seq } from ".";
/**
 * Get a remote sequence from NCBI or the iGEM registry.
 */
declare const _default: (accession: string, options?: ParseOptions) => Promise<Seq>;
export default _default;
/** returns whether the passed ID is an accession in iGEM or NCBI */
export declare const isAccession: (accession: string) => boolean;
