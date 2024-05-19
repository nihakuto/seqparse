import { Seq } from "..";
/**
 * takes an SBOL file, as a string, and converts it into our DB
 * representation of a part(s). an example of this type of file can be
 * found in ../examples/j5.SBOL.xml
 */
declare const _default: (sbol: string) => Seq[];
export default _default;
