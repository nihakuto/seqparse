import { Annotation } from "..";
/**
 * takes in a string representation of a GenBank file and outputs our
 * part representation of it. an example of a Genbank file can be found
 * at ./parsers/Gebank, though there is significant variability to the
 * format
 *
 * another official example can be found at:
 * https://www.ncbi.nlm.nih.gov/Sitemap/samplerecord.html
 */
declare const _default: (fileInput: string, fileName: string) => {
    annotations: Annotation[];
    name: string;
    primers: never[];
    seq: string;
    type: "dna" | "rna" | "aa" | "unknown";
}[];
export default _default;
