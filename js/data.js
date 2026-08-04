// ============================================================
//  RADHA ENTERPRISE — EDITABLE CONTENT CONFIG
//  Change any value below to update your website content.
// ============================================================

const SITE_DATA = {

  // ── COMPANY BASICS ─────────────────────────────────────────
  company: {
    name:        "Radha Enterprise",
    tagline:     "Your Trusted Steel Partner",
    description: "Leading stainless steel supplier and trader in Rajkot, Gujarat, delivering premium quality steel products to industrial, construction, and manufacturing sectors.",
    founded:     2004,
    city:        "Rajkot",
    state:       "Gujarat",
    country:     "India",
    pincode:     "360002",
    address:     "1-Samrat Industrial Area, B/H S.T. Workshop, Rajkot",
    gst:         "24XXXXX0000X1ZX",         // Update with your GST number
    email:       "info@radhaenterprise.in",  // Update
    whatsapp:    "919000000000",             // Update (with country code, no +)
  },

  // ── CONTACT NUMBERS ────────────────────────────────────────
  phones: [
    { name: "Sales",   number: "90000 00000", tel: "+919000000000" },
    { name: "Support", number: "90000 00001", tel: "+919000000001" },
  ],

  // ── SOCIAL MEDIA ───────────────────────────────────────────
  social: {
    facebook:  "#",   // Update with your Facebook URL
    instagram: "#",   // Update with your Instagram URL
    linkedin:  "#",   // Update with your LinkedIn URL
    youtube:   "#",   // Update with your YouTube URL
  },

  // ── STATS (shown on Home page) ────────────────────────────
  stats: [
    { value: 18,   suffix: "+", label: "Years of Experience" },
    { value: 500,  suffix: "+", label: "Happy Clients" },
    { value: 50,   suffix: "+", label: "Product Variants" },
    { value: 15,   suffix: "+", label: "States Served" },
  ],

  // ── HOME PAGE — WHY CHOOSE US ──────────────────────────────
  whyUs: [
    { icon: "fa-medal",        title: "Premium Quality",     desc: "Every product meets strict quality standards and industry certifications." },
    { icon: "fa-truck",        title: "Fast Delivery",       desc: "On-time delivery across Gujarat and all major Indian cities." },
    { icon: "fa-tags",         title: "Best Pricing",        desc: "Competitive rates with transparent pricing — no hidden charges." },
    { icon: "fa-headset",      title: "Expert Support",      desc: "Dedicated team to guide you in selecting the right grade and size." },
    { icon: "fa-industry",     title: "Wide Stock Range",    desc: "Massive inventory of SS grades in bars, pipes, sheets, and flats." },
    { icon: "fa-handshake",    title: "Trusted Relationships", desc: "Long-term partnerships built on consistency and reliability." },
  ],

  // ── TESTIMONIALS ───────────────────────────────────────────
  testimonials: [
    {
      name:    "Ramesh Patel",
      company: "Patel Fabrication Works, Ahmedabad",
      text:    "Radha Enterprise has been our go-to steel supplier for 5+ years. Excellent quality and always delivered on time.",
      rating:  5,
    },
    {
      name:    "Suresh Mehta",
      company: "Mehta Engineering Co., Surat",
      text:    "Very competitive pricing and the team is knowledgeable. They helped us choose the right SS grade for our project.",
      rating:  5,
    },
    {
      name:    "Dinesh Shah",
      company: "Shah Industries, Rajkot",
      text:    "Consistent quality, prompt response, and no compromise on delivery timelines. Highly recommended.",
      rating:  5,
    },
  ],

  // ── PRODUCTS ───────────────────────────────────────────────
  products: [
    {
      category: "Round Bars",
      icon: "fa-circle",
      items: [
        { name: "SS 304 Round Bar",   grades: ["SS 304"], sizes: "6mm – 300mm dia", finish: "Bright / Black", use: "General fabrication, food industry" },
        { name: "SS 316 Round Bar",   grades: ["SS 316"], sizes: "6mm – 200mm dia", finish: "Bright / Black", use: "Marine, chemical, pharmaceutical" },
        { name: "SS 410 Round Bar",   grades: ["SS 410"], sizes: "6mm – 250mm dia", finish: "Black / Turned", use: "Cutlery, pump shafts, valves" },
        { name: "SS 420 Round Bar",   grades: ["SS 420"], sizes: "6mm – 200mm dia", finish: "Bright / Black", use: "Surgical instruments, blades" },
        { name: "SS 431 Round Bar",   grades: ["SS 431"], sizes: "10mm – 200mm dia", finish: "Bright", use: "High strength, aerospace parts" },
      ],
    },
    {
      category: "Flat Bars",
      icon: "fa-minus",
      items: [
        { name: "SS 304 Flat Bar",    grades: ["SS 304"],  sizes: "10×3mm – 200×25mm", finish: "2B / No.4 / Mirror", use: "Structural, ornamental" },
        { name: "SS 316 Flat Bar",    grades: ["SS 316"],  sizes: "10×3mm – 150×20mm", finish: "2B / No.4",          use: "Marine, chemical equipment" },
        { name: "SS 410 Flat Bar",    grades: ["SS 410"],  sizes: "10×3mm – 150×25mm", finish: "Black / Bright",     use: "Cutlery, general engineering" },
      ],
    },
    {
      category: "Pipes & Tubes",
      icon: "fa-arrows-alt-h",
      items: [
        { name: "SS 304 Seamless Pipe",   grades: ["SS 304"],  sizes: "1/4\" – 6\" NB", finish: "Plain / Bevelled",   use: "Food, dairy, pharma" },
        { name: "SS 316L Seamless Pipe",  grades: ["SS 316L"], sizes: "1/4\" – 4\" NB", finish: "Plain / Bevelled",   use: "Chemical, oil & gas" },
        { name: "SS 304 ERW Tube",        grades: ["SS 304"],  sizes: "12mm – 200mm OD", finish: "Polished / Plain",  use: "Structural, handrail" },
        { name: "SS 316 ERW Tube",        grades: ["SS 316"],  sizes: "12mm – 150mm OD", finish: "Polished / Plain",  use: "Marine, architectural" },
      ],
    },
    {
      category: "Sheets & Plates",
      icon: "fa-square",
      items: [
        { name: "SS 304 Sheet",       grades: ["SS 304"],  sizes: "0.5mm – 6mm thick", finish: "2B / BA / No.4 / Mirror / Hair Line", use: "Kitchen, equipment, cladding" },
        { name: "SS 316 Sheet",       grades: ["SS 316"],  sizes: "0.5mm – 6mm thick", finish: "2B / No.4",                           use: "Marine, chemical tanks" },
        { name: "SS 430 Sheet",       grades: ["SS 430"],  sizes: "0.5mm – 3mm thick", finish: "2B / BA",                             use: "Automotive trim, appliances" },
        { name: "MS Plate",           grades: ["MS"],      sizes: "3mm – 50mm thick",  finish: "Black / HR",                          use: "Structural, heavy fabrication" },
      ],
    },
    {
      category: "Angles & Channels",
      icon: "fa-angle-right",
      items: [
        { name: "SS 304 Angle",       grades: ["SS 304"], sizes: "20×20 – 100×100mm",  finish: "2B / No.4", use: "Frames, supports, brackets" },
        { name: "SS 316 Angle",       grades: ["SS 316"], sizes: "20×20 – 75×75mm",   finish: "2B",         use: "Marine structures" },
        { name: "MS Angle",           grades: ["MS"],     sizes: "25×25 – 150×150mm", finish: "Black",       use: "Structural construction" },
        { name: "MS Channel",         grades: ["MS"],     sizes: "75mm – 300mm",       finish: "Black",       use: "Structural, frames" },
      ],
    },
  ],

  // ── CHEMISTRY / CHEMICAL COMPOSITION ──────────────────────
  chemistry: [
    {
      grade: "SS 304",
      type:  "Austenitic",
      elements: {
        "C (Carbon)":      "≤ 0.08%",
        "Mn (Manganese)":  "≤ 2.00%",
        "Si (Silicon)":    "≤ 0.75%",
        "P (Phosphorus)":  "≤ 0.045%",
        "S (Sulfur)":      "≤ 0.030%",
        "Cr (Chromium)":   "18.0 – 20.0%",
        "Ni (Nickel)":     "8.0 – 10.5%",
        "N (Nitrogen)":    "≤ 0.10%",
        "Fe (Iron)":       "Balance",
      },
      mechanical: { "Tensile Strength": "515 MPa min", "Yield Strength": "205 MPa min", "Elongation": "40% min", "Hardness": "≤ 201 HB" },
      use: "Food equipment, kitchen utensils, chemical containers, architectural",
    },
    {
      grade: "SS 304L",
      type:  "Austenitic",
      elements: {
        "C (Carbon)":      "≤ 0.030%",
        "Mn (Manganese)":  "≤ 2.00%",
        "Si (Silicon)":    "≤ 0.75%",
        "P (Phosphorus)":  "≤ 0.045%",
        "S (Sulfur)":      "≤ 0.030%",
        "Cr (Chromium)":   "18.0 – 20.0%",
        "Ni (Nickel)":     "8.0 – 12.0%",
        "N (Nitrogen)":    "≤ 0.10%",
        "Fe (Iron)":       "Balance",
      },
      mechanical: { "Tensile Strength": "485 MPa min", "Yield Strength": "170 MPa min", "Elongation": "40% min", "Hardness": "≤ 201 HB" },
      use: "Welded components, chemical processing, food & dairy equipment",
    },
    {
      grade: "SS 316",
      type:  "Austenitic",
      elements: {
        "C (Carbon)":      "≤ 0.08%",
        "Mn (Manganese)":  "≤ 2.00%",
        "Si (Silicon)":    "≤ 0.75%",
        "P (Phosphorus)":  "≤ 0.045%",
        "S (Sulfur)":      "≤ 0.030%",
        "Cr (Chromium)":   "16.0 – 18.0%",
        "Ni (Nickel)":     "10.0 – 14.0%",
        "Mo (Molybdenum)": "2.0 – 3.0%",
        "N (Nitrogen)":    "≤ 0.10%",
        "Fe (Iron)":       "Balance",
      },
      mechanical: { "Tensile Strength": "515 MPa min", "Yield Strength": "205 MPa min", "Elongation": "40% min", "Hardness": "≤ 217 HB" },
      use: "Marine applications, pharmaceutical, oil & gas, chemical plants",
    },
    {
      grade: "SS 316L",
      type:  "Austenitic",
      elements: {
        "C (Carbon)":      "≤ 0.030%",
        "Mn (Manganese)":  "≤ 2.00%",
        "Si (Silicon)":    "≤ 0.75%",
        "P (Phosphorus)":  "≤ 0.045%",
        "S (Sulfur)":      "≤ 0.030%",
        "Cr (Chromium)":   "16.0 – 18.0%",
        "Ni (Nickel)":     "10.0 – 14.0%",
        "Mo (Molybdenum)": "2.0 – 3.0%",
        "N (Nitrogen)":    "≤ 0.10%",
        "Fe (Iron)":       "Balance",
      },
      mechanical: { "Tensile Strength": "485 MPa min", "Yield Strength": "170 MPa min", "Elongation": "40% min", "Hardness": "≤ 217 HB" },
      use: "Welding-critical applications, marine, pharmaceutical, cryogenic",
    },
    {
      grade: "SS 410",
      type:  "Martensitic",
      elements: {
        "C (Carbon)":      "≤ 0.15%",
        "Mn (Manganese)":  "≤ 1.00%",
        "Si (Silicon)":    "≤ 1.00%",
        "P (Phosphorus)":  "≤ 0.040%",
        "S (Sulfur)":      "≤ 0.030%",
        "Cr (Chromium)":   "11.5 – 13.5%",
        "Fe (Iron)":       "Balance",
      },
      mechanical: { "Tensile Strength": "450 MPa min", "Yield Strength": "205 MPa min", "Elongation": "20% min", "Hardness": "≤ 217 HB" },
      use: "Cutlery, pump parts, valves, turbine blades",
    },
    {
      grade: "SS 420",
      type:  "Martensitic",
      elements: {
        "C (Carbon)":      "0.15 – 0.40%",
        "Mn (Manganese)":  "≤ 1.00%",
        "Si (Silicon)":    "≤ 1.00%",
        "P (Phosphorus)":  "≤ 0.040%",
        "S (Sulfur)":      "≤ 0.030%",
        "Cr (Chromium)":   "12.0 – 14.0%",
        "Fe (Iron)":       "Balance",
      },
      mechanical: { "Tensile Strength": "700 MPa min", "Yield Strength": "400 MPa min", "Elongation": "15% min", "Hardness": "≤ 241 HB" },
      use: "Surgical instruments, knife blades, dental equipment",
    },
    {
      grade: "SS 431",
      type:  "Martensitic",
      elements: {
        "C (Carbon)":      "≤ 0.20%",
        "Mn (Manganese)":  "≤ 1.00%",
        "Si (Silicon)":    "≤ 1.00%",
        "P (Phosphorus)":  "≤ 0.040%",
        "S (Sulfur)":      "≤ 0.030%",
        "Cr (Chromium)":   "15.0 – 17.0%",
        "Ni (Nickel)":     "1.25 – 2.50%",
        "Fe (Iron)":       "Balance",
      },
      mechanical: { "Tensile Strength": "862 MPa min", "Yield Strength": "655 MPa min", "Elongation": "15% min", "Hardness": "≤ 285 HB" },
      use: "High-strength bolts, pump shafts, marine propellers",
    },
    
  ],

  // ── ABOUT PAGE ─────────────────────────────────────────────
  about: {
    story: "Radha Enterprise was established in 2004 in the heart of Rajkot, Gujarat's industrial hub. Starting as a small trading firm, we grew into one of the region's most trusted stainless steel suppliers. Over the years, we have built long-lasting partnerships with leading manufacturers and served clients across 15+ states in India.",
    mission: "To deliver the highest quality stainless steel products at competitive prices, backed by expert guidance and reliable service.",
    vision:  "To become the most preferred steel partner for industries across India, setting new benchmarks in quality, availability, and customer satisfaction.",
    timeline: [
      { year: "2004", event: "Radha Enterprise founded in Rajkot, Gujarat" },
      { year: "2008", event: "Expanded product range to include pipes & tubes" },
      { year: "2012", event: "Opened large-scale warehouse and processing unit" },
      { year: "2016", event: "Achieved 200+ active client base across Gujarat" },
      { year: "2020", event: "Expanded operations to serve pan-India clients" },
      { year: "2024", event: "Crossed 500+ satisfied clients milestone" },
    ],
    team: [
      { name: "Mr. [Owner Name]",   role: "Founder & Director",    initials: "RK" },
      { name: "Mr. [Manager Name]", role: "Operations Manager",    initials: "SM" },
      { name: "Mr. [Sales Name]",   role: "Sales Head",            initials: "DM" },
    ],
    certifications: [
      "ISO 9001:2015 Quality Management",
      "BIS Certified Products",
      "ASTM / AISI Grade Certified",
      "GST Registered Business",
    ],
  },

};
