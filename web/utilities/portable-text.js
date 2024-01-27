import { PortableText as PortableTextInternal } from "astro-portabletext";

export function sanityPortableText(portabletext) {
  return PortableTextInternal(portabletext);
}
