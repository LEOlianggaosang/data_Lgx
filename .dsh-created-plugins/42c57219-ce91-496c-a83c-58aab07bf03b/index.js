/**
 * Host half of the knowledge-tree design editor bundle.
 *
 * The capability is entirely browser-side: this entry exists so the bundle has
 * a Loader row, and a Loader row is what makes the Client module composition
 * serve and activate `./client`. There is no Host service, tool, or data source
 * to register here.
 */
export function apply() {}
