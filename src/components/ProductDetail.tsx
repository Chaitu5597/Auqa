import { ArrowLeft, Shield, Leaf, TrendingUp, Droplets, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import aquaGreenProductImage from "figma:asset/f2837d7d1f5b6a1b3133f2961699c98f6c1afb03.png";
import impetusProductImage from "figma:asset/bd3eb5bd84f4e538e95910b5c5464520bcbe4cbc.png";
import maricidinProductImage from "figma:asset/1a08eda53058be16636a28c8aedfdad7276d64cd.png";
import maricidinBottomImage from "figma:asset/75e2ded75ccbcc63992f52e3ccc42748e6309f4e.png";
import sporexProductImage from "figma:asset/0c2989b7fdfae6ae073d3258fd789b04cf1fee8b.png";
import vibroshieldProductImage from "figma:asset/b736b7d12251085a4c66b31f308795262e006d8a.png";
import marinoxProductImage from "figma:asset/583f58778288ac74fd1412e8873372f8708059aa.png";
import ecocystProductImage from "figma:asset/6a60b93fd54d4f7a489e0272a9519d050bdf3100.png";
import crustaminProductImage from "figma:asset/d6ab9faa9ddffe1ca19a3536c5264a6060eccfcb.png";
import detoxifyXProductImage from "figma:asset/75b74a47613e17f1c8eff360b420990e40935c6c.png";
import sporexBottomImage from "../assets/sporex.jpg";
import vibroBottomImage from "../assets/vibromin.jpg";
import ecocystBottomImage from "../assets/ecocyst.jpg";
import DetoxifyBottomImage from "../assets/Detoxify.jpg";
import morinoxBottomImage from "../assets/marinox.jpg";


interface ProductDetailProps {
  productId: string;
  onBack: () => void;
}

export function ProductDetail({ productId, onBack }: ProductDetailProps) {
  // const productsData: { [key: string]: any } = {
  //   "aqua-green": {
  //     name: "AQUA GREEN",
  //     tagline: "Soil Organic Carbon Enhancer",
  //     image: aquaGreenProductImage,
  //     description: "AQUA GREEN is an advanced soil organic carbon enhancer specifically designed to improve pond bottom conditions. It enriches the soil with beneficial organic matter, promoting a healthier ecosystem for shrimp farming.",
  //     benefits: [
  //       "Enhances soil organic carbon content",  
  //       "Improves pond bottom health",
  //       "Promotes beneficial microbial activity",
  //       "Reduces toxic gas accumulation",
  //       "Supports sustainable aquaculture practices"
  //     ],
  //     dosage: "Apply 5-10 kg per acre during pond preparation. Repeat every 30 days for optimal results.",
  //     composition: [
  //       { component: "Organic Carbon", percentage: "40%" },
  //       { component: "Humic Acids", percentage: "25%" },
  //       { component: "Fulvic Acids", percentage: "15%" },
  //       { component: "Trace Minerals", percentage: "10%" },
  //       { component: "Bio-activators", percentage: "10%" }
  //     ]
  //   },
  //   "impetus": {
  //     name: "Impetus",
  //     tagline: "Granulated Aqua Probiotics",
  //     image: impetusProductImage,
  //     description: "Impetus is a scientifically formulated Granulated aqua probiotic blend designed to maintain optimal water and soil quality in aquaculture ponds. This advanced formulation supports natural biological processes, enhances disease prevention, and promotes a healthy pond ecosystem for superior shrimp growth.",
  //     benefits: [
  //       "Maintains beneficial bacterial balance",
  //       "Improves water quality parameters",
  //       "Reduces ammonia and nitrite levels",
  //       "Enhances nutrient cycling",
  //       "Supports shrimp immunity"
  //     ],
  //     dosage: "Apply 1-2 kg per acre weekly. Increase to 2-3 kg during high stocking density periods.",
  //     composition: [
  //       { component: "Bacillus subtilis", percentage: "30%" },
  //       { component: "Bacillus licheniformis", percentage: "25%" },
  //       { component: "Lactobacillus spp.", percentage: "20%" },
  //       { component: "Nitrosomonas spp.", percentage: "15%" },
  //       { component: "Carrier & stabilizers", percentage: "10%" }
  //     ]
  //   },
  //   "maricidin": {
  //     name: "Maricidin",
  //     tagline: "Nano Disinfectant for clean ponds",
  //     image: maricidinProductImage,
  //     description: "Maricidin is an advanced nano-technology based disinfectant that provides superior pathogen control while being safe for shrimp and the environment. This cutting-edge formulation offers broad-spectrum antimicrobial action to maintain pristine pond conditions.",
  //     benefits: [
  //       "Nano-particle technology for enhanced efficacy",
  //       "Broad-spectrum pathogen control",
  //       "Safe for shrimp and beneficial organisms",
  //       "Quick action and long-lasting effect",
  //       "Environmentally friendly formulation"
  //     ],
  //     dosage: "Mix 500ml-1L per acre in water. Apply during pond preparation and every 15 days during culture.",
  //     composition: [
  //       { component: "Nano Silver particles", percentage: "15%" },
  //       { component: "Stabilized Hydrogen peroxide", percentage: "20%" },
  //       { component: "Organic acids", percentage: "25%" },
  //       { component: "Surfactants", percentage: "10%" },
  //       { component: "Water & stabilizers", percentage: "30%" }
  //     ]
  //   },
  //   "sporex": {
  //     name: "Sporex",
  //     tagline: "EHP Control solution",
  //     image: sporexProductImage,
  //     description: "Sporex is a specially formulated solution targeting Enterocytozoon hepatopenaei (EHP) in shrimp. This advanced formulation combines phytogenic extracts with probiotics to effectively manage EHP and support overall shrimp health and growth performance.",
  //     benefits: [
  //       "Targets EHP spores effectively",
  //       "Reduces EHP load in pond environment",
  //       "Supports digestive health",
  //       "Improves growth performance",
  //       "Natural and safe formulation"
  //     ],
  //     dosage: "Apply 2-3 kg per acre bi-weekly. For high EHP pressure, use weekly at 3-4 kg per acre.",
  //     composition: [
  //       { component: "Phytogenic extracts", percentage: "35%" },
  //       { component: "Specific probiotics", percentage: "30%" },
  //       { component: "Immunostimulants", percentage: "20%" },
  //       { component: "Organic acids", percentage: "10%" },
  //       { component: "Carriers", percentage: "5%" }
  //     ]
  //   },
  //   "vibroshield": {
  //     name: "VibroShield",
  //     tagline: "Vibrio Control for shrimp health",
  //     image: vibroshieldProductImage,
  //     description: "VibroShield is an advanced Vibrio control solution utilizing competitive exclusion and natural antimicrobials. This powerful formulation effectively manages pathogenic Vibrio species while maintaining beneficial bacteria for optimal pond health.",
  //     benefits: [
  //       "Controls pathogenic Vibrio species",
  //       "Maintains beneficial bacterial balance",
  //       "Reduces disease incidence",
  //       "Improves survival rates",
  //       "Eco-friendly and non-toxic"
  //     ],
  //     dosage: "Apply 1.5-2 kg per acre twice weekly. During disease outbreaks, increase to 3 kg daily.",
  //     composition: [
  //       { component: "Competitive bacteria", percentage: "40%" },
  //       { component: "Bacteriophages", percentage: "20%" },
  //       { component: "Organic acids blend", percentage: "25%" },
  //       { component: "Herbal extracts", percentage: "10%" },
  //       { component: "Stabilizers", percentage: "5%" }
  //     ]
  //   },
  //   "marinox": {
  //     name: "MarinoX",
  //     tagline: "Nano Selenium + Vitamin C",
  //     image: marinoxProductImage,
  //     description: "MarinoX is a premium antioxidant formulation combining nano selenium with vitamin C for enhanced bioavailability. This cutting-edge feed supplement supports shrimp immunity, promotes growth, and enhances stress resistance.",
  //     benefits: [
  //       "Enhanced bioavailability through nano-technology",
  //       "Powerful antioxidant protection",
  //       "Boosts immune system",
  //       "Improves stress tolerance",
  //       "Promotes healthy molting"
  //     ],
  //     dosage: "Mix 500g-1kg per ton of feed. Double the dose during stress periods or disease challenges.",
  //     composition: [
  //       { component: "Nano Selenium", percentage: "25%" },
  //       { component: "Vitamin C (stabilized)", percentage: "30%" },
  //       { component: "Vitamin E", percentage: "15%" },
  //       { component: "Amino acids", percentage: "20%" },
  //       { component: "Carriers & binders", percentage: "10%" }
  //     ]
  //   },
  //   "ecocyst": {
  //     name: "EcoCyst",
  //     tagline: "Microcystis Control",
  //     image: ecocystProductImage,
  //     description: "EcoCyst is a biological solution for controlling harmful blue-green algae (Microcystis). This advanced formulation uses competitive microorganisms and natural algicides to maintain balanced phytoplankton populations and ensure clear, healthy pond water.",
  //     benefits: [
  //       "Controls harmful blue-green algae",
  //       "Prevents algal bloom formation",
  //       "Maintains water clarity",
  //       "Reduces toxin production",
  //       "Promotes beneficial phytoplankton"
  //     ],
  //     dosage: "Apply 2-3 kg per acre at first sign of Microcystis. Repeat every 7-10 days if needed.",
  //     composition: [
  //       { component: "Competitive algae strains", percentage: "35%" },
  //       { component: "Beneficial bacteria", percentage: "30%" },
  //       { component: "Natural algicides", percentage: "20%" },
  //       { component: "Enzyme complex", percentage: "10%" },
  //       { component: "Stabilizers", percentage: "5%" }
  //     ]
  //   },
  //   "crustamin": {
  //     name: "CrustaMin Pro",
  //     tagline: "Chelated Mineral Supplement",
  //     image: crustaminProductImage,
  //     description: "CrustaMin Pro is a complete chelated mineral supplement formulated specifically for crustaceans. This premium feed supplement provides essential minerals in highly bioavailable form for optimal shell formation, successful molting, and enhanced growth.",
  //     benefits: [
  //       "Chelated minerals for superior absorption",
  //       "Supports strong exoskeleton formation",
  //       "Improves molting success",
  //       "Enhances growth rates",
  //       "Prevents mineral deficiencies"
  //     ],
  //     dosage: "Mix 500g-1kg per ton of feed. Apply 2-3 kg per acre in water during molting periods.",
  //     composition: [
  //       { component: "Chelated Calcium", percentage: "25%" },
  //       { component: "Chelated Magnesium", percentage: "15%" },
  //       { component: "Chelated Zinc", percentage: "10%" },
  //       { component: "Chelated Iron", percentage: "8%" },
  //       { component: "Trace minerals & carriers", percentage: "42%" }
  //     ]
  //   },
  //   "detoxify-x": {
  //     name: "Detoxify-X",
  //     tagline: "Pond Bottom Management",
  //     image: detoxifyXProductImage,
  //     description: "Detoxify-X is a comprehensive pond bottom management solution that neutralizes toxic compounds and improves sediment quality. This powerful formulation combines oxidizers, minerals, and beneficial microbes to create a healthier pond environment.",
  //     benefits: [
  //       "Neutralizes toxic gases (H2S, NH3)",
  //       "Improves pond bottom conditions",
  //       "Reduces sludge accumulation",
  //       "Enhances oxygen levels",
  //       "Creates healthier pond environment"
  //     ],
  //     dosage: "Apply 5-8 kg per acre every 15 days. Increase to 10 kg during heavy feeding periods.",
  //     composition: [
  //       { component: "Mineral oxidizers", percentage: "30%" },
  //       { component: "Zeolites", percentage: "25%" },
  //       { component: "Beneficial bacteria", percentage: "20%" },
  //       { component: "Organic acids", percentage: "15%" },
  //       { component: "Bio-catalysts", percentage: "10%" }
  //     ]
  //   }
  // };














  const productsData: { [key: string]: any } = {
    "aqua-green": {
      name: "AQUA GREEN",
      tagline: "Soil Organic Carbon Enhancer",
      image: aquaGreenProductImage,
      description: "AQUA GREEN is an advanced soil organic carbon enhancer specifically designed to improve pond bottom conditions. It enriches the soil with beneficial organic matter, promoting a healthier ecosystem for shrimp farming.",
      benefits: [
        "Enhances soil organic carbon content",
        "Improves pond bottom health",
        "Promotes beneficial microbial activity",
        "Reduces toxic gas accumulation",
        "Supports sustainable aquaculture practices",
      ],
      // dosage: "Apply 5-10 kg per acre during pond preparation. Repeat every 30 days for optimal results.",
      additionalDosage: [
        { des1: "Pond Preparation", dat: "1MT per acre of pond." },
        { des1: "Pond Management", dat: "25 to 50 kg per acre of pond." }
      ],
      composition: [
        { component: "Soil Organic Carbon", percentage: "40%" },
        { component: "Natural Minerals", percentage: "25%" },
        { component: "Bio-enhancers", percentage: "15%" },
        // { component: "Trace Minerals", percentage: "10%" },
        // { component: "Bio-activators", percentage: "10%" },
      ],
    },
    impetus: {
      name: "Impetus",
      tagline: "Granulated Aqua Probiotics",
      image: impetusProductImage,
      description:
        "Impetus is a scientifically formulated Granulated aqua probiotic blend designed to maintain optimal water and soil quality in aquaculture ponds. This advanced formulation supports natural biological processes, enhances disease prevention, and promotes a healthy pond ecosystem for superior shrimp growth.",
      benefits: [
        "Maintains beneficial bacterial balance",
        "Improves water quality parameters",
        "Reduces ammonia and nitrite levels",
        "Enhances nutrient cycling",
        "Supports shrimp immunity",
      ],
      dosage:
        "Apply 1-2 kg per acre weekly. Increase to 2-3 kg during high stocking density periods.",
      composition: [
        { component: "Bacillus spp" },
        { component: "Lactobacillus spp" },
        { component: "Enzyme producers" },
        { component: "TVC (Total Viable Count) : 15 billion cfu/gm" },

      ],
    },
    maricidin: {
      name: "Maricidin",
      tagline: "Nano Disinfectant",
      image: maricidinProductImage,
      description:
        "Maricidin is an advanced nano-technology based disinfectant that provides superior pathogen control while being safe for shrimp and the environment. This cutting-edge formulation offers broad-spectrum antimicrobial action to maintain pristine pond conditions.",
      benefits: [
        "Nano-particle technology for enhanced efficacy",
        "Broad-spectrum pathogen control",
        "Safe for shrimp and beneficial organisms",
        "Quick action and long-lasting effect",
        "Environmentally friendly formulation",
      ],
      dosage:
        "Apply 5 liters per acre of pond water",
      composition: [
        { component: "Silver-Based Metal Nanoparticles", percentage: "15%" },
        { component: "Stabilizing Agents and Inert Carriers", percentage: "20%" },
        // { component: "Organic acids", percentage: "25%" },
        // { component: "Surfactants", percentage: "10%" },
        // { component: "Water & stabilizers", percentage: "30%" },
      ],
      extraSection: {
        title: "Advanced Nano Technology",
        paragraphs: [
          "Maricidin utilizes cutting-edge nano-particle technology to deliver superior pathogen control in aquaculture environments. The advanced formulation ensures deep penetration and long-lasting antimicrobial action.",
          "Our nano-silver particles work at the molecular level to eliminate harmful pathogens while maintaining the delicate balance of beneficial microorganisms essential for a healthy pond ecosystem.",
          "Designed for maximum efficacy and minimal environmental impact, Maricidin represents the next generation of aquaculture biosecurity solutions.",
        ],
        highlight: {
          title: "Safe & Effective",
          description:
            "Thoroughly tested and proven safe for shrimp, fish, and beneficial pond organisms while providing powerful protection against pathogenic threats.",
        },
        image: maricidinBottomImage,
      },
    },
    sporex: {
      name: "Sporex",
      tagline: "EHP Control",
      image: sporexProductImage,
      description:
        "Sporex is a specially formulated solution targeting Enterocytozoon hepatopenaei (EHP) in shrimp. This advanced formulation combines phytogenic extracts with probiotics to effectively manage EHP and support overall shrimp health and growth performance.",
      benefits: [
        "Targets EHP spores effectively",
        "Reduces EHP load in pond environment",
        "Supports digestive health",
        "Improves growth performance",
        "Natural and safe formulation",
      ],
      dosage:
        "Mix 5-10 ml of SPOREX per 1kg of shrimp feed.",
      composition: [
        { component: "Botanical Extracts" },
        { component: "Beneficial Bacterial Strains" },
        { component: "Nano-emulsion" },

      ],
      extraSection: {
        title: "Synergistic Action",
        paragraphs: [
          "Sporex combines the power of specialized phytogenic extracts with targeted probiotics to create a comprehensive solution against Enterocytozoon hepatopenaei (EHP). This dual-action approach provides both immediate and long-term protection.",
          "The carefully selected herbal components work synergistically to reduce EHP spore load in the pond environment while supporting the shrimp's natural defense mechanisms. Our probiotic strains competitively exclude harmful organisms and enhance digestive efficiency.",
          "By addressing EHP at multiple levels - environmental control, digestive support, and immune enhancement - Sporex delivers superior results compared to single-mechanism solutions..",
        ],
        highlight: {
          title: "Natural & Sustainable",
          description:
            "Formulated with naturally derived ingredients, Sporex offers an eco-friendly alternative to chemical treatments while delivering consistent, reliable results in EHP management.",
        },
        image: sporexBottomImage,
      },
    },
    vibroshield: {
      name: "VibroShield",
      tagline: "Control Vibro Species",
      image: vibroshieldProductImage,
      description:
        "VibroShield is an advanced Vibrio control solution utilizing competitive exclusion and natural antimicrobials. This powerful formulation effectively manages pathogenic Vibrio species while maintaining beneficial bacteria for optimal pond health.",
      benefits: [
        "Controls pathogenic Vibrio species",
        "Maintains beneficial bacterial balance",
        "Reduces disease incidence",
        "Improves survival rates",
        "Eco-friendly and non-toxic",
      ],
      dosage:
        "Mix 10 ml of VIBROSHIELD per 1kg of shrimp feed.",
      composition: [
        { component: "Nano Metal Particles", percentage: "40%" },
        // { component: "Stabilizing Agents and Inert Carriers", percentage: "20%" },
        // { component: "Organic acids blend", percentage: "25%" },
        // { component: "Herbal extracts", percentage: "10%" },
        // { component: "Stabilizers", percentage: "5%" },
      ],
      extraSection: {
        title: "How It Works",
        paragraphs: [
          "VibroShield employs a multi-faceted approach to Vibrio control through competitive exclusion, targeted bacteriophages, and natural antimicrobials. This comprehensive strategy ensures effective pathogen management without disrupting beneficial bacterial populations.",
          "Our competitive bacterial strains rapidly colonize the pond environment, outcompeting pathogenic Vibrio species for nutrients and space. Simultaneously, specific bacteriophages target and eliminate harmful Vibrio strains with precision.",
          "The organic acid blend creates an unfavorable environment for pathogenic bacteria while supporting beneficial microflora. Combined with herbal extracts that enhance shrimp immunity, VibroShield provides complete protection against Vibrio-related diseases.",
        ],
        highlight: {
          title: "Proven Performance",
          description:
            "Field-tested across diverse aquaculture operations, VibroShield has consistently demonstrated significant reductions in Vibrio counts and improved survival rates in commercial shrimp farming.",
        },
        image: vibroBottomImage,
      },
    },
    marinox: {
      name: "MarinoX",
      tagline: "Feed Supplement",
      image: marinoxProductImage,
      description:
        "MarinoX is a premium antioxidant formulation combining nano selenium with vitamin C for enhanced bioavailability. This cutting-edge feed supplement supports shrimp immunity, promotes growth, and enhances stress resistance.",
      benefits: [
        "Enhanced bioavailability through nano-technology",
        "Powerful antioxidant protection",
        "Boosts immune system",
        "Improves stress tolerance",
        "Promotes healthy molting",
      ],
      // dosage:
      //   [" < 30 Days of Culture (DOC): Mix 3 mL per kg of feed > 30 DOC: Mix 5 mL per kg of feed",],

      additionalDosage: [
        { des1: "< 30 Days of Culture (DOC) ", dat: "<  Mix 3 mL per kg of feed." },
        { des1: "> 30 DOC ", dat: " Mix 5 mL per kg of feed" }
      ],
      composition: [
        { component: "Nano-Selenium", percentage: "25%" },
        { component: "Nano-Vitamin C ", percentage: "30%" },
        // { component: "Vitamin E", percentage: "15%" },
        // { component: "Amino acids", percentage: "20%" },
        // { component: "Carriers & binders", percentage: "10%" },
      ],
      extraSection: {
        title: "Advanced Nano Technology",
        paragraphs: [
          "MarinoX harnesses the power of nanotechnology to deliver selenium and vitamin C with unprecedented bioavailability. Our nano-sized particles are rapidly absorbed and efficiently utilized at the cellular level, maximizing antioxidant protection.",
          "Traditional selenium supplements often have limited absorption and can accumulate to toxic levels. Our nano selenium formulation overcomes these challenges, providing optimal benefits at lower doses while ensuring complete safety.",
          "The combination of nano selenium with stabilized vitamin C creates a powerful synergistic effect, enhancing immune response, reducing oxidative stress, and supporting healthy growth and molting cycles in shrimp.",
        ],
        highlight: {
          title: "Superior Bioavailability",
          description:
            "Studies show that nano selenium provides up to 3x better absorption compared to conventional forms, ensuring your shrimp receive maximum nutritional benefit from every dose.",
        },
        image: morinoxBottomImage,
      },
    },
    ecocyst: {
      name: "EcoCyst",
      tagline: "Microcystis Control",
      image: ecocystProductImage,
      description:
        "EcoCyst is a biological solution for controlling harmful blue-green algae (Microcystis). This advanced formulation uses competitive microorganisms and natural algicides to maintain balanced phytoplankton populations and ensure clear, healthy pond water.",
      benefits: [
        "Controls harmful blue-green algae",
        "Prevents algal bloom formation",
        "Maintains water clarity",
        "Reduces toxin production",
        "Promotes beneficial phytoplankton",
      ],
      // dosage:
      //   "2 liters per acre once every 15 days 2 liters per acre every 5–7 days until bloom subsides",
      additionalDosage: [
        { des1: "2 liters per acre once every 15 days.", dat: "" },
        { des1: "2 liters per acre for every  5–7 days .", dat: "" }
      ],
      composition: [
        { component: "Botanical Extracts", percentage: "35%" },
        { component: "Inert Carriers", percentage: "30%" },
        // { component: "Natural algicides", percentage: "20%" },
        // { component: "Enzyme complex", percentage: "10%" },
        // { component: "Stabilizers", percentage: "5%" },
      ],
      extraSection: {
        title: "Microcystin Control Mechanism",
        paragraphs: [
          "EcoCyst employs a multi-pronged approach to combat harmful microcystin-producing cyanobacteria in aquaculture ponds. Our specialized probiotic consortium actively outcompetes toxic algal blooms while enzymatic components break down existing microcystin toxins.",
          "The formulation includes microcystin-degrading bacteria that produce microcystinase enzymes, capable of cleaving the cyclic peptide structure of microcystins into non-toxic linear peptides. This biological degradation is both safe and effective.",
          "By combining competitive exclusion with active toxin degradation, EcoCyst provides comprehensive protection against microcystin contamination, ensuring water quality and shrimp safety throughout the culture period.",
        ],
        highlight: {
          title: "Rapid Detoxification",
          description:
            "EcoCyst can reduce microcystin levels by up to 80% within 72 hours of application, providing quick relief from toxic algal blooms and restoring pond health rapidly.",
        },
        image: ecocystBottomImage,
      },
    },
    crustamin: {
      name: "CrustaMin Pro",
      tagline: "Feed Supplement",
      image: crustaminProductImage,
      description:
        "CrustaMin Pro is a complete chelated mineral supplement formulated specifically for crustaceans. This premium feed supplement provides essential minerals in highly bioavailable form for optimal shell formation, successful molting, and enhanced growth.",
      benefits: [
        "Chelated minerals for superior absorption",
        "Supports strong exoskeleton formation",
        "Improves molting success",
        "Enhances growth rates",
        "Prevents mineral deficiencies",
      ],
      // dosage:
      // "Mix 500g-1kg per ton of feed. Apply 2-3 kg per acre in water during molting periods.",
      additionalDosage: [
        { des1: "Feed Supplementation", dat: "Mix 5-10 grams of CrustaMin Pro per 1kg of feed." },
        { des1: "Pond Application", dat: "Apply 6kg per acre." }
      ],
      composition: [
        { component: "Chelated Trace Minerals", percentage: "25%" },
        { component: "Stabilized Vitamins", percentage: "15%" },
        { component: "Natural Antioxidants", percentage: "10%" },
        { component: "Metabolite", percentage: "8%" },
        // { component: "Trace minerals & carriers", percentage: "42%" },
      ],
    },
    "detoxify-x": {
      name: "Detoxify-X",
      tagline: "Pond Bottom Management",
      image: detoxifyXProductImage,
      description:
        "Detoxify-X is a comprehensive pond bottom management solution that neutralizes toxic compounds and improves sediment quality. This powerful formulation combines oxidizers, minerals, and beneficial microbes to create a healthier pond environment.",
      benefits: [
        "Neutralizes toxic gases (H2S, NH3)",
        "Improves pond bottom conditions",
        "Reduces sludge accumulation",
        "Enhances oxygen levels",
        "Creates healthier pond environment",
      ],
      dosage:
        "Apply 2-3 liters per acre of pond water.",
      composition: [
        { component: "Paracoccus spp", percentage: "30%" },
        { component: "Purple Non-Sulfur Bacteria", percentage: "25%" },
        // { component: "Beneficial bacteria", percentage: "20%" },
        // { component: "Organic acids", percentage: "15%" },
        // { component: "Bio-catalysts", percentage: "10%" },
      ],
      extraSection: {
        title: "Heavy Metal Chelation Technology",
        paragraphs: [
          "          Detoxify-X works through a natural bioremediation process that rejuvenates the pond bottom and improves overall water quality. After application, the beneficial microbes—Para coccus spp. and Purple Non-Sulfur Bacteria (PNSB)—rapidly colonize the pond bottom, where they begin decomposing accumulated organic matter such as uneaten feed, fecal waste, and dead plankton. This microbial activity breaks down sludge into simpler, harmless compounds while actively consuming sulfur and nitrogen sources that otherwise generate toxic gases like Hydrogen Sulfide (H₂S) and Ammonia (NH₃). As Detoxify-X neutralizes these harmful gases, it restores aerobic conditions and enhances dissolved oxygen at the pond bottom. The result is a cleaner, healthier aquatic environment that supports better shrimp and fish growth, improves feed conversion, and minimizes stress and mortality throughout the culture cycle."],
        highlight: {
          title: "Proven Results",
          description:
            "Field trials demonstrate that Detoxify-X can reduce heavy metal concentrations by over 75% and significantly improve water quality parameters within one week of treatment.",
        },
        image: DetoxifyBottomImage,
      },
    },
  };

  const product = productsData[productId];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4" style={{ fontSize: '24px' }}>Product not found</h2>
          <Button onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  const iconMap: { [key: string]: any } = {
    0: Shield,
    1: Leaf,
    2: TrendingUp,
    3: Droplets,
    4: CheckCircle
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/20 to-background">
      {/* Header / Back */}
      <div className="container mx-auto px-8 lg:px-8 pt-8 pb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#4A5A3C] hover:text-[#4A5A3C]/80 transition-colors mb-6 group"
        >
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          <span style={{ fontSize: "16px", fontWeight: 600 }}>Back to Products</span>
        </button>

        {/* Product Overview - Image Left (sticky), Description Right (scrolls as page) */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT: Sticky image at top */}
          {/* <div className="md:sticky md:top-0 self-start">
            {productId === "aqua-green" ? (
              <div className="relative rounded-lg p-8 overflow-visible">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-contain animate-float-uneven scale-110 relative"
                  style={{ top: "-10px" }}
                />
              </div>
            ) : productId === "impetus" ||
              productId === "maricidin" ||
              productId === "sporex" ||
              productId === "vibroshield" ||
              productId === "marinox" ||
              productId === "ecocyst" ||
              productId === "crustamin" ||
              productId === "detoxify-x" ? (
              <div className="p-8 bg-white rounded-lg shadow-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-contain animate-float-uneven scale-110 relative"
                  style={{ top: "-10px" }}
                />
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-xl p-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-contain relative"
                  style={{ top: "-10px" }}
                />
              </div>
            )}
          </div> */}

          <div className="md:sticky md:top-0 self-start">
            {productId === "aqua-green" ? (
              <div className="relative rounded-lg p-8 overflow-visible">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-3/4 mx-auto h-auto object-contain animate-float-uneven relative"
                  style={{ top: "-10px" }}
                />
              </div>
            ) : productId === "impetus" ||
              productId === "maricidin" ||
              productId === "sporex" ||
              productId === "vibroshield" ||
              productId === "marinox" ||
              productId === "ecocyst" ||
              productId === "crustamin" ||
              productId === "detoxify-x" ? (
              <div className="p-8 bg-white rounded-lg shadow-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-1/4 mx-auto h-1/2 object-contain animate-float-uneven relative"
                  style={{ top: "-10px" }}
                />
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-xl p-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-3/4 mx-auto h-auto object-contain relative"
                  style={{ top: "-10px" }}
                />
              </div>
            )}
          </div>


          {/* RIGHT: Content scrolls normally */}
          <div>
            <h1 className="text-[#4A5A3C] mb-6" style={{ fontSize: "42px", fontWeight: 700, lineHeight: 1.2 }}>
              {product.name}
            </h1>

            <div className="mb-4">
              <span
                className="inline-block px-4 py-1 rounded-full"
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  backgroundColor: "rgba(0 , 150, 136 ,0.1)",
                  color: "rgba(0 , 150, 136 ,1)",
                }}
              >
                {product.tagline}
              </span>
            </div>

            <div className="mb-8">
              <h2 className="text-[#4A5A3C] mb-4" style={{ fontSize: "24px", fontWeight: 600 }}>
                Product Description
              </h2>
              <p className="text-foreground/80" style={{ fontSize: "16px", lineHeight: 1.8 }}>
                {product.description}
              </p>
            </div>

            {/* Composition */}
            <div style={{ marginBottom: "50px" }}>
              <h3 className="text-[#4A5A8C] mb-4" style={{ fontSize: "20px", fontWeight: 600 }}>
                Composition
              </h3>
              <div className="space-y-2">
                {product.composition.map((item: any, index: number) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded">
                    <span className="text-foreground" style={{ fontSize: "15px" }}>
                      {item.component}
                    </span>
                    {/* {item.percentage && (
                      <span className="text-[#4A5A3C]" style={{ fontSize: "15px", fontWeight: 600 }}>
                        {item.percentage}
                      </span>
                    )} */}
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-l-4 border-l-accent mb-10">
              <CardContent className="p-6">
                <h3 className="text-[#4A5A3C] mb-3" style={{ fontSize: "18px", fontWeight: 600 }}>
                  Dosage & Application
                </h3>
                <p className="text-foreground mb-4" style={{ fontSize: "16px" }}>
                  {product.dosage}
                </p>

                {product.additionalDosage && (
                  <ul className="list-disc pl-5 space-y-2 text-foreground/80" style={{ fontSize: "16px", lineHeight: 1.8 }}>
                    {product.additionalDosage.map((desc: any, index: number) => (
                      <li key={index}>
                        <strong>{desc.des1}:</strong> {desc.dat}
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-16">
          <h2 className="text-[#4A5A3C] mb-8 text-center" style={{ fontSize: "32px", fontWeight: 600 }}>
            Key Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {product.benefits.map((benefit: string, index: number) => {
              const Icon = iconMap[index % 5];
              return (
                <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-secondary" />
                        </div>
                      </div>
                      <p className="text-foreground flex-1" style={{ fontSize: "16px", lineHeight: 1.6 }}>
                        {benefit}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Extra Section */}
        {product.extraSection && (
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div>
                <h2 style={{ fontSize: "32px", fontWeight: 600 }} className="text-[#4A5A3C] mb-6">
                  {product.extraSection.title}
                </h2>
                <div className="space-y-4" style={{ fontSize: "16px", lineHeight: 1.8 }}>
                  {product.extraSection.paragraphs.map((p: string, i: number) => (
                    <p key={i}>{p}</p>
                  ))}
                  <div className="mt-8 p-6 bg-primary/5 rounded-lg border-l-4 border-l-primary">
                    <h4 style={{ fontSize: "18px", fontWeight: 600 }} className="text-[#4A5A3C] mb-2">
                      {product.extraSection.highlight.title}
                    </h4>
                    <p className="text-foreground/90">{product.extraSection.highlight.description}</p>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="flex items-center justify-center">
                <img
                  src={product.extraSection.image}
                  alt={product.extraSection.title}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}























