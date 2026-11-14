export const cast = [
  {
    id: "walter",
    name: "Walter White",
    alias: "The chemist",
    color: "#a9c66b",
    location: "Albuquerque, NM",
  },
  {
    id: "jesse",
    name: "Jesse Pinkman",
    alias: "The partner",
    color: "#8ec7cb",
    location: "The RV / Route 40",
  },
  {
    id: "gus",
    name: "Gustavo Fring",
    alias: "The distributor",
    color: "#d2b56b",
    location: "Los Pollos Hermanos",
  },
  {
    id: "saul",
    name: "Saul Goodman",
    alias: "The lawyer",
    color: "#cc9b75",
    location: "Constitution Ave.",
  },
  
  {
    id: "mike",
    name: "Mike Ehrmantraut",
    alias: "The fixer",
    color: "#a6b5ad",
    location: "On surveillance",
  },

  {
    id: "hank",
    name: "Hank Schrader",
    alias: "The investigator",
    color: "#b8a0c5",
    location: "DEA / Albuquerque",
  },
  
  {
    id: "skyler",
    name: "Skyler White",
    alias: "The strategist",
    color: "#8fb8a1",
    location: "A1A Car Wash",
  },
];

export const periodOf = (element) => {
  if (element.row === 9) return 6;
  if (element.row === 10) return 7;

  return element.row;
};

export const reactions = {
  noble: {
    effect: "drift",
    title: "A quiet kind of chemistry.",
    label: "Discharge glow",
    text: "Noble gases are generally very unreactive. These floating lights imagine a gas discharge: excited atoms emit light. The animation is illustrative; actual emission colors depend on the element.",
  },

  alkali: {
    effect: "sparks",
    title: "A little energy. A big reaction.",
    label: "Energy sparks",
    text: "Alkali metals readily lose one outer electron. Many react vigorously with water. These sparks are a visual metaphor, not an experiment to try.",
  },

  alkaline: {
    effect: "metal",
    title: "Built to give something back.",
    label: "Metallic reflection",
    text: "Alkaline earth metals tend to form ions with a +2 charge. The moving reflection represents their metallic character.",
  },

  transition: {
    effect: "metal",
    title: "The backbone of the operation.",
    label: "Metallic reflection",
    text: "Transition metals are typically good conductors of heat and electricity. Many have several oxidation states and form colorful compounds.",
  },

  post: {
    effect: "metal",
    title: "Heavy on character.",
    label: "Metallic reflection",
    text: "These metals generally conduct heat and electricity, though their hardness, melting points and reactivity vary widely.",
  },

  metalloid: {
    effect: "lattice",
    title: "Somewhere between two worlds.",
    label: "Crystal lattice",
    text: "Metalloids share properties of metals and nonmetals. Some are useful semiconductors. This lattice is an artistic motif, not an atomic structure model.",
  },

  nonmetal: {
    effect: "vapor",
    title: "Small atoms. Extraordinary range.",
    label: "Molecular drift",
    text: "Nonmetals include solids and gases with very different properties. The drifting trails are an atmospheric motif; they do not indicate this element’s physical state.",
  },

  halogen: {
    effect: "sparks",
    title: "Always looking for a connection.",
    label: "Reactive pulse",
    text: "Halogens are reactive nonmetals that commonly form −1 ions in compounds. Their reactivity varies; the pulses represent chemical activity, not a visible reaction.",
  },

  lanthanide: {
    effect: "lattice",
    title: "Rare earth. Remarkable possibilities.",
    label: "Crystal lattice",
    text: "Lanthanides have closely related chemistry and are used in magnets, phosphors and optical materials. This pattern is illustrative.",
  },

  actinide: {
    effect: "decay",
    title: "An unstable arrangement.",
    label: "Decay pulses",
    text: "All actinides are radioactive. These pulses symbolize nuclear decay. Radiation is not ordinarily visible as a green glow.",
  },

  unknown: {
    effect: "scan",
    title: "The case is still open.",
    label: "Research scan",
    text: "Many properties of these short-lived superheavy elements remain uncertain. The scanning line represents ongoing research; it is not a measured property.",
  },
};

export const characterImages = {
  walter: "/images/walter.jpg",
  jesse: "/images/jesse.jpg",
  gus: "/images/gus.jpg",
  saul: "/images/saul.jpg",
  mike: "/images/mike.jpg",
  hank: "/images/hank.jpg",
  skyler: "/images/skyler.jpg",
};

export const familyTitles = {
  noble: "A quiet kind of chemistry.",
  alkali: "A little energy. A big reaction.",
  alkaline: "Built to give something back.",
  transition: "The backbone of the operation.",
  post: "Heavy on character.",
  metalloid: "Somewhere between two worlds.",
  nonmetal: "Small atoms. Extraordinary range.",
  halogen: "Always looking for a connection.",
  lanthanide: "Rare earth. Remarkable possibilities.",
  actinide: "An unstable arrangement.",
  unknown: "The case is still open.",
};