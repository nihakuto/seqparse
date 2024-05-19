import { Seq } from "..";
/**
 * Converts an SBOL file to our Seq format.
 *
 * SBOL v2.0 schema definition can be found at: http://sbolstandard.org/wp-content/uploads/2016/06/SBOL-data-model-2.2.1.pdf
 * differs from SBOL v1.0 in that the ComponentDefinitions are like the root parts,
 * and the sequence and annotations are separated (they're no longer defined relationally
 * by nesting but, instead, by id) we only care about components that have sequence information
 */
declare const _default: (sbol: string, fileName: string) => Seq[];
export default _default;
