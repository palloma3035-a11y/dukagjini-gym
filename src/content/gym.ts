export const gym = {
  name: "Dukagjini GYM",
  tagline: "Forma jote. Forca jote.",
  heroTagline: "Forma jote. Forca jote. ",
  phoneDisplay: "+383 49 45 47 87",
  phoneHref: "tel:+38349454787",
  whatsappUrl: "https://wa.me/38349454787",
  instagramHandle: "@dukagjini_gym",
  instagramUrl: "https://www.instagram.com/dukagjini_gym/",
  address: "Rruga “Dëshmorët e Kombit”, Klinë, Kosovë",
  mapsQuery: "Rruga Dëshmorët e Kombit, Klinë, Kosovo",
  about:
    "Dukagjini GYM është palestër lokale në Klinë, e fokusuar t’ju ndihmojë të përmirësoni forcën, kondicionin dhe mirëqenien fizike në një ambient motivues.",
  openingHours: "Hënë–Shtunë: 07:00–22:00\nE diel: e mbyllur",
} as const;

// Çmimet e anëtarësimit — përditësohen vetëm këtu kur të ndryshojnë.
export const memberships = [
  { name: "1 Muaj", priceFemale: "€15", priceMale: "€20", recommended: false },
  { name: "3 Muaj", priceFemale: "€30", priceMale: "€45", recommended: false },
  { name: "5 Muaj", priceFemale: "€45", priceMale: "€70", recommended: false },
  { name: "Vjetore", priceFemale: "€90", priceMale: "€120", recommended: true },
] as const;

export const couplesPlan = {
  name: "Qifte",
  price: "€200",
  duration: "Anëtarësim vjetor për dy persona",
} as const;
