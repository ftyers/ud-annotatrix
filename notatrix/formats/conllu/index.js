"use strict";

module.exports = {

  name: "CoNLL-U",
  fields: require("./fields"),
  split: require("../default-splitter"),
  detect: require("./detector"),
  parse: require("./parser"),
  generate: require("./generator"),

};

/*
{
  semicolon: Boolean || undefined,
  isEmpty: Boolean || undefined,
  index: String || undefined,
  form: String || null || undefined,
  lemma: String || null || undefined,
  upostag: String || null || undefined,
  xpostag: String || null || undefined,
  feats: String || null || undefined,
  head: String || null || undefined,
  deprel: String || null || undefined,
  deps: String || null || undefined,
  other: Array || undefined,
  analyses: [
    subTokens: [
      semicolon: Boolean || undefined,
      isEmpty: Boolean || undefined,
      index: String || undefined,
      form: String || null || undefined,
      lemma: String || null || undefined,
      upostag: String || null || undefined,
      xpostag: String || null || undefined,
      feats: String || null || undefined,
      head: String || null || undefined,
      deprel: String || null || undefined,
      deps: String || null || undefined,
      other: Array || undefined,
    ]
  ]
}
*/
