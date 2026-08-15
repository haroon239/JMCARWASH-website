export type Service = {
  slug: string;
  title: string;
  tag: string;
  image: string;
  shortDescription: string;
  description: string;
  duration: string;
  idealFor: string;
  included: readonly string[];
  benefits: readonly { title: string; text: string }[];
  process: readonly { title: string; text: string }[];
  faqs: readonly { question: string; answer: string }[];
};

export const services: readonly Service[] = [
  {
    slug: "luxury-hand-wash",
    title: "Luxury Hand Wash",
    tag: "Most Popular",
    image: "/images/services-v2-img1-DVMnCvPF.jpg",
    shortDescription: "A meticulous exterior clean with premium products and careful hand finishing.",
    description: "Our Luxury Hand Wash is a careful, paint-safe exterior treatment created for drivers who want more than a quick rinse. We remove loose dirt, road film, dust, and residue by hand before finishing every visible surface for a clean, refined appearance.",
    duration: "45–60 minutes",
    idealFor: "All cars, SUVs and luxury vehicles",
    included: ["Pre-wash and safe rinse", "Premium hand shampoo", "Wheel and tyre cleaning", "Door-jamb wipe-down", "Streak-free exterior glass", "Microfibre hand drying", "Tyre finish", "Final quality inspection"],
    benefits: [
      { title: "Paint-safe care", text: "Careful methods help reduce avoidable swirls and harsh surface contact." },
      { title: "Detailed finish", text: "Edges, wheels, glass, and finishing details receive individual attention." },
      { title: "Premium products", text: "Professional products leave a clean finish without aggressive residue." },
    ],
    process: [
      { title: "Inspect", text: "We assess the paint, wheels, and areas that need extra attention." },
      { title: "Clean", text: "The vehicle is safely rinsed, hand washed, and carefully detailed." },
      { title: "Finish", text: "We dry, dress, inspect, and present your vehicle ready to drive." },
    ],
    faqs: [
      { question: "Is hand washing safe for ceramic-coated vehicles?", answer: "Yes. We use suitable products and gentle wash methods for coated vehicles. Please mention your coating when booking." },
      { question: "Does this service include interior cleaning?", answer: "This package focuses on the exterior. Interior Detailing can be added if you would like a complete cabin refresh." },
      { question: "Can you wash larger SUVs?", answer: "Yes. We service cars, SUVs, and luxury vehicles. Final timing may vary slightly based on size and condition." },
    ],
  },
  {
    slug: "interior-detailing",
    title: "Interior Detailing",
    tag: "Deep Clean",
    image: "/images/services-v2-img2-DkG_Fdke.jpg",
    shortDescription: "Deep interior cleaning, vacuuming, conditioning, and a refreshed cabin finish.",
    description: "Interior Detailing restores comfort and cleanliness throughout your cabin. Our team works methodically across seats, carpets, mats, trim, glass, storage areas, and high-touch surfaces using treatments selected for each material.",
    duration: "2–3 hours",
    idealFor: "Daily drivers, family cars and used vehicles",
    included: ["Full cabin vacuum", "Carpet and mat cleaning", "Seat surface treatment", "Dashboard and console care", "Door-panel cleaning", "Interior glass cleaning", "Vent and crevice detailing", "Cabin deodorising"],
    benefits: [
      { title: "Healthier cabin", text: "Removes accumulated dust, debris, and residue from frequently used areas." },
      { title: "Material-specific care", text: "Leather, fabric, plastic, and trim receive suitable cleaning treatments." },
      { title: "Fresh presentation", text: "A tidy, refreshed interior makes every journey more comfortable." },
    ],
    process: [
      { title: "Assess", text: "We identify materials, stains, and areas requiring deeper treatment." },
      { title: "Deep clean", text: "Surfaces, fabrics, crevices, glass, and storage areas are treated carefully." },
      { title: "Refresh", text: "We condition, deodorise, inspect, and reset the cabin for handover." },
    ],
    faqs: [
      { question: "Can you remove every stain?", answer: "Many common stains can be removed or significantly improved. Results depend on the material, stain type, and how long it has been present." },
      { question: "Is leather conditioning included?", answer: "Leather-safe cleaning is included where applicable. Please ask our team about conditioning options for your vehicle." },
      { question: "How soon can I use the car afterwards?", answer: "The car is normally ready at handover. Deep fabric extraction may require a little additional ventilation or drying time." },
    ],
  },
  {
    slug: "paint-protection",
    title: "Paint Protection",
    tag: "Premium Care",
    image: "/images/services-v2-img3-D3NDZh6D.jpg",
    shortDescription: "Professional wax and polish protection for a brilliant, longer-lasting shine.",
    description: "Our Paint Protection service enhances gloss and adds a sacrificial protective layer against everyday dust, road film, water spotting, and environmental contamination. The paint is prepared first so the final protection bonds evenly and looks refined.",
    duration: "2–4 hours",
    idealFor: "New, premium and regularly maintained vehicles",
    included: ["Exterior decontamination wash", "Paint condition inspection", "Surface preparation", "Light gloss enhancement", "Protective wax or sealant", "Exterior trim finishing", "Wheel-face cleaning", "Final finish inspection"],
    benefits: [
      { title: "Enhanced gloss", text: "Prepared and protected paint reflects more clearly for a richer appearance." },
      { title: "Easier maintenance", text: "A protected surface is easier to wash and less likely to hold everyday grime." },
      { title: "Added defence", text: "The protective layer helps shield the finish from common environmental exposure." },
    ],
    process: [
      { title: "Prepare", text: "We wash, decontaminate, and inspect the paint before applying protection." },
      { title: "Enhance", text: "The surface is refined as appropriate to improve clarity and gloss." },
      { title: "Protect", text: "Protection is applied evenly, cured, and checked under suitable lighting." },
    ],
    faqs: [
      { question: "How long does the protection last?", answer: "Durability depends on the selected protection, vehicle storage, driving conditions, and maintenance routine. We will explain the suitable option before work begins." },
      { question: "Will this remove deep scratches?", answer: "This service improves gloss and may reduce the appearance of very light marks. Deep scratches require separate paint-correction assessment." },
      { question: "When can I wash the car again?", answer: "Curing guidance varies by product. Our team will give you clear aftercare instructions at handover." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
