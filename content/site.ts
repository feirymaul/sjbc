export const site = {
  name: "San Juan Baptist Church",
  shortName: "SJBC",
  tagline: "A church family in Maite, Siquijor",
  location: "Maite, San Juan, Siquijor",
  addressLine: "5F4W+855 · Maite, San Juan, Siquijor",
  addressNote: "Beside the old municipal cemetery",
  mapsUrl: "https://maps.app.goo.gl/8UcU8Jx3vsFrDwLu9",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15906.059165699876!2d123.4770338!3d9.1557712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ab3f00038814eb%3A0x8fcb065f94930087!2sSan%20Juan%20Baptist%20Church!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph",
  email: "sjbcsiquijor@gmail.com",
  phone: "+63 961 530 9826",
  phoneHref: "tel:+639615309826",
  facebook: "https://www.facebook.com/profile.php?id=61576682513008",
  description:
    "San Juan Baptist Church in Maite, San Juan, Siquijor. A Baptist congregation preaching Christ and holding to the 1689 confession.",
} as const;

export const serviceTimes = [
  { label: "Sunday School", time: "9:30am", note: "Children · Youth · Adult classes" },
  { label: "Morning Service", time: "10:50am", note: "Lord's Day worship" },
  { label: "Afternoon Service", time: "1:30pm", note: "Last Sunday of the month" },
  { label: "Cottage Prayer", time: "7:00pm", note: "Every Wednesday" },
] as const;

export const primaryNav = [
  { label: "Life", href: "/life" },
  { label: "Beliefs", href: "/beliefs" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
] as const;

export const footerNav = [
  { label: "Home", href: "/" },
  { label: "Life", href: "/life" },
  { label: "Beliefs", href: "/beliefs" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
  { label: "Visit", href: "/visit" },
  { label: "FAQ", href: "/faq" },
] as const;
