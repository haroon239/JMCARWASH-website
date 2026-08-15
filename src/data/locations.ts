export type ServiceLocation = {
  slug: string;
  name: string;
  area: string;
  image: string;
  introduction: string;
};

export const locations: readonly ServiceLocation[] = [
  { slug: "jbr", name: "JBR", area: "Jumeirah Beach Residence", image: "/images/jbr.jpg", introduction: "Convenient premium car washing and detailing for residents and vehicle owners in the JBR community." },
  { slug: "emaar", name: "Emaar", area: "Downtown Dubai", image: "/images/emaar.png", introduction: "Professional vehicle care serving customers across Emaar communities and the Downtown Dubai area." },
  { slug: "west-wharf", name: "West Wharf", area: "Business Bay", image: "/images/DUBAIWESTWHARF.jpg", introduction: "Reliable car cleaning and detailing for West Wharf residents and customers throughout Business Bay." },
  { slug: "dip", name: "DIP", area: "Dubai Investment Park", image: "/images/dip.jpg", introduction: "Careful, convenient vehicle cleaning for homes, professionals, and businesses in Dubai Investment Park." },
  { slug: "damac", name: "DAMAC", area: "Maison Privé", image: "/images/damac-maison-prive-19200.jpg", introduction: "Premium car-care appointments for DAMAC Maison Privé customers and surrounding communities." },
  { slug: "remraam", name: "Remraam", area: "Dubailand", image: "/images/remraam.jpg", introduction: "Professional car washing and detailing conveniently available to the Remraam community in Dubailand." },
];

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}
