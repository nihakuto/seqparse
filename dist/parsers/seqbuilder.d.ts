import { Annotation } from "..";
/**
 * takes in a string representation of a SeqBuilder file and outputs our
 * part representation of it. an example of a SeqBuilder file can be found
 * at imports/io/examples/seqbuilder, though there may be variations to the
 * format
 */
declare const _default: (fileInput: string, fileName: string) => {
    annotations: Annotation[];
    name: string;
    seq: string;
    type: "dna" | "rna" | "aa" | "unknown";
}[];
export default _default;
