import { ArrowLeft, Shield, Leaf, TrendingUp, Droplets, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import aquaGreenProductImage from "../assets/aqualife.png";
import VikrantProductImage from "../assets/vikranth.png";
import MeikProductImage from "../assets/meik.png";
import MeikBottomImage from "figma:asset/75e2ded75ccbcc63992f52e3ccc42748e6309f4e.png";
import meiclProductImage from "../assets/meicl.png";
import SEALProductImage from "../assets/seal.png";
import TRUBOONProductImage from "../assets/turboon.png";
import BIOMASSProductImage from "../assets/biomass.png";
import ALLCIDAProductImage from "../assets/allcida.png";
import ride from "../assets/ride.png";
import ensure from "../assets/ensure.png";
import thinkmin from "../assets/thinkmin.png";
import meizn from "../assets/meizn.png";
import liquipro from "../assets/liquipro.png";
import algae from "../assets/algae.png";
import neo from "../assets/neo.png";
import proline from "../assets/proline.png";
import invictus from "../assets/invictus.png";
import Armour from "../assets/Armour.png";

import detoxifyXProductImage from "figma:asset/75b74a47613e17f1c8eff360b420990e40935c6c.png";
import meiclBottomImage from "../assets/meicl.jpg";
import vibroBottomImage from "../assets/vibromin.jpg";
import BIOMASSBottomImage from "../assets/BIOMASS.jpg";
import DetoxifyBottomImage from "../assets/Detoxify.jpg";
// import morinoxBottomImage from "../assets/TRUBOON.jpg";



interface ProductDetailProps {
  productId: string;
  onBack: () => void;
}

export function ProductDetail({ productId, onBack }: ProductDetailProps) {
  // const productsData: { [key: string]: any } = {
  //   "Aqua-Life": {
  //     name: "Aqua Life",
  //     tagline: "Advanced Solution for Water Quality and Pond Ecosystem Health",
  //     image: aquaGreenProductImage,
  //     description: "Aqua Life is an advanced soil organic carbon enhancer specifically designed to improve pond bottom conditions. It enriches the soil with beneficial organic matter, promoting a healthier ecosystem for shrimp farming.",
  //     benefits: [
  //       "Water Quality Optimization: Improves water parameters through natural biological processes.",  
  //       "Organic Sludge Degradation: Breaks down and detoxifies organic sludge at pond bottoms, minimizing harmful gas emissions.",
  //       "Ecosystem Balance: Supports balanced pond ecosystems by promoting phytoplankton growth and sustaining a stable nutrient cycle.",
  //       "Pathogen Control: Inhibits pathogen growth via competitive exclusion and antagonistic interactions.",
  //       "Salinity Adaptability: Contains halotolerant probiotic strains that perform effectively across a range of salinity levels"
  //     ],
  //     dosage: "Apply 5-10 kg per acre during pond preparation. Repeat every 30 days for optimal results.",
  //     composition: [
  //       { component: "Organic Carbon", percentage: "40%" },
  //       { component: "Humic Acids", percentage: "25%" },
  //       { component: "Fulvic Acids", percentage: "15%" },
  //       { component: "Bifidobacterium bifidum", percentage: "10%" },
  //       { component: "Bio-activators", percentage: "10%" }
  //     ]
  //   },
  //   "Vikrant": {
  //     name: "Vikrant",
  //     tagline: "Granulated Aqua Probiotics",
  //     image: VikrantProductImage,
  //     description: "Vikrant is a scientifically formulated Granulated aqua probiotic blend designed to maintain optimal water and soil quality in aquaculture ponds. This advanced formulation supports natural biological processes, enhances disease prevention, and promotes a healthy pond ecosystem for superior shrimp growth.",
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
  //   "Meik": {
  //     name: "Meik",
  //     tagline: "Nano Disinfectant for clean ponds",
  //     image: MeikProductImage,
  //     description: "Meik is an advanced nano-technology based disinfectant that provides superior pathogen control while being safe for shrimp and the environment. This cutting-edge formulation offers broad-spectrum antimicrobial action to maintain pristine pond conditions.",
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
  //   "meicl": {
  //     name: "meicl",
  //     tagline: "EHP Control solution",
  //     image: meiclProductImage,
  //     description: "meicl is a specially formulated solution targeting Enterocytozoon hepatopenaei (EHP) in shrimp. This advanced formulation combines phytogenic extracts with probiotics to effectively manage EHP and support overall shrimp health and growth performance.",
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
  //   "SEAL": {
  //     name: "SEAL",
  //     tagline: "Vibrio Control for shrimp health",
  //     image: SEALProductImage,
  //     description: "SEAL is an advanced Vibrio control solution utilizing competitive exclusion and natural antimicrobials. This powerful formulation effectively manages pathogenic Vibrio species while maintaining beneficial bacteria for optimal pond health.",
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
  //   "TRUBOON": {
  //     name: "TRUBOON",
  //     tagline: "Nano Selenium + Vitamin C",
  //     image: TRUBOONProductImage,
  //     description: "TRUBOON is a premium antioxidant formulation combining nano selenium with vitamin C for enhanced bioavailability. This cutting-edge Shrimp Protector Farmer Benefiter supports shrimp immunity, promotes growth, and enhances stress resistance.",
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
  //   "BIOMASS": {
  //     name: "BIOMASS",
  //     tagline: "PRODUCTIVITY · SUSTAINABILITY · PROFITABILITY",
  //     image: BIOMASSProductImage,
  //     description: "BIOMASS is a biological solution for controlling harmful blue-green algae (Microcystis). This advanced formulation uses competitive microorganisms and natural algicides to maintain balanced phytoplankton populations and ensure clear, healthy pond water.",
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
  //   "ALLCIDA": {
  //     name: "ALLCIDA Pro",
  //     tagline: "Chelated Mineral Supplement",
  //     image: ALLCIDAProductImage,
  //     description: "ALLCIDA Pro is a complete chelated mineral supplement formulated specifically for crustaceans. This premium Shrimp Protector Farmer Benefiter provides essential minerals in highly bioavailable form for optimal shell formation, successful molting, and enhanced growth.",
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
  //       { component: "Bifidobacterium bifidum & carriers", percentage: "42%" }
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
    "Aqua-Life": {
      name: "Aqua Life",
      // tagline: "Advanced Solution for Water Quality and Pond Ecosystem Health",
      image: aquaGreenProductImage,
      description: "Aqua Life is an innovative probiotic formulation engineered to enhance water quality and support pond ecosystem health through sustainable release technology. This granular blend comprises a robust consortium of probiotics, designed to adapt and thrive across diverse oxygen and salinity conditions within pond environments.",
      benefits: [
        "Water Quality Optimization: Improves water parameters through natural biological processes.",
        "Organic Sludge Degradation: Breaks down and detoxifies organic sludge at pond bottoms, minimizing harmful gas emissions.",
        "Ecosystem Balance: Supports balanced pond ecosystems by promoting phytoplankton growth and sustaining a stable nutrient cycle.",
        "Pathogen Control: Inhibits pathogen growth via competitive exclusion and antagonistic interactions.",
        "Salinity Adaptability: Contains halotolerant probiotic strains that perform effectively across a range of salinity levels",
        "Moulting Cycle Regularity: Stabilizes the moulting cycle in aquatic organisms, encouraging uniform growth.",
        "Proprietary Strains: Utilizes unique strains sourced from indigenous environments and registered under the Budapest Treaty (IDA).",
      ],
      // dosage: "Apply 5-10 kg per acre during pond preparation. Repeat every 30 days for optimal results.",
      additionalDosage: [
        { des1: "Apply 500g per acre, distributing evenly across the pond surface.", dat: "" },
        // { des1: "Bacillus megaterium", dat: "25 to 50 kg per acre of pond." },
        // { des1: "Lactobacillus acidophilus,", dat: " " },
        // { des1: "Bifidobacterium bifidum", dat: " " },
        // { des1: "Rhodobacter, Rhodococcus,", dat: "" },
        // { des1: "Bifidobacterium bifidum", dat: "" }
      ],
      composition: [
        { component: "Each gram contains 1.0 × 10¹⁰ CFU/g of Bacillus subtilis", percentage: "40%" },
        { component: "Bacillus megaterium", percentage: "25%" },
        { component: "Lactobacillus acidophilus", percentage: "15%" },
        { component: "Bifidobacterium bifidum", percentage: "10%" },
        { component: "Rhodobacter", percentage: "10%" },
        { component: "Rhodococcus", percentage: "10%" },

      ],
    },
    Vikrant: {
      name: "Vikrant",
      // tagline: "Granulated Aqua Probiotics",
      image: VikrantProductImage,
      // description:
      //   "Vikrant is a scientifically formulated Granulated aqua probiotic blend designed to maintain optimal water and soil quality in aquaculture ponds. This advanced formulation supports natural biological processes, enhances disease prevention, and promotes a healthy pond ecosystem for superior shrimp growth.",
      benefits: [
        "Incredible Virucidal Liquid",
        "Improves survival rate",
        "Noval Shrimp Protective Liquid contains antimicrobial nanoencapsulated phytoextracts",
        "Effective against all types of pathogenic bacteria, including Vibrio spp.",

      ],
      dosage: [
        "Add 10ml Vikrant per liter of water to soak 2kg feed.  ",
        "Duration: 4 to 6 days in all feeds."
      ],
      composition: [
        { component: "Silver Nano Particles – 5%" },
        // { component: "Lactobacillus spp" },
        // { component: "Enzyme producers" },
        // { component: "TVC (Total Viable Count) : 15 billion cfu/gm" },

      ],
    },
    Meik: {
      name: "Mei-k",
      // tagline: "Nano Disinfectant",
      image: MeikProductImage,
      description:
        "Mei-K is a cutting-edge potassium-based solution formulated using advanced Microbe Assisted Micron-Sized Particles (MAMSP) technology.This innovative product addresses potassium deficiency in shrimp, a critical factor for their growth and productivity.Potassium deficiency can lead to irregular moulting and hindered development. Mei-K is enriched with Vitamin D3, B-complex vitamins, and fulvic acid compounds, ensuring optimal growth and health for aquatic animals.",
      benefits: [
        "Enhanced Nutrient Absorption: Micron-sized potassium particles maximize bioavailability for better nutrient uptake.y",
        "Broad-spectrum pathogen controlOptimized Moulting Process: Improves and facilitates smooth moulting in aquatic species.",
        "Rejuvenation & Health: Boosts vitality and overall well-being of shrimp and aquatic animals.",
        "Accelerated Growth: Fortified vitamins promote faster and healthier growth rates.",
        "Strong Exoskeleton Development: Supports robust exoskeleton formation.",
        "Stress Reduction: Reduces stress levels, improving resilience and productivity."
      ],
      dosage: [
        "Pond Application: Dilute 500 ml of Mei-K in water and distribute evenly across the pond every two weeks.",
        "Feed Application: Mix 5 ml of Mei-K per kg of feed for regular use.",
        "Mei-K is suitable for both feed and water applications."
      ],
      composition: [
        { component: "Micron-Sized Potassium Particles: 1%", percentage: "15%" },
        { component: "Revolutionize your aquaculture practices with Mei-K,", percentage: "20%" },
        { component: "the trusted solution for shrimp health and growth!,", percentage: "20%" },
        // { component: "Organic acids", percentage: "25%" },
        // { component: "Surfactants", percentage: "10%" },
        // { component: "Water & stabilizers", percentage: "30%" },
      ],
      // extraSection: {
      //   title: "Advanced Nano Technology",
      //   paragraphs: [
      //     "Meik utilizes cutting-edge nano-particle technology to deliver superior pathogen control in aquaculture environments. The advanced formulation ensures deep penetration and long-lasting antimicrobial action.",
      //     "Our nano-silver particles work at the molecular level to eliminate harmful pathogens while maintaining the delicate balance of beneficial microorganisms essential for a healthy pond ecosystem.",
      //     "Designed for maximum efficacy and minimal environmental impact, Meik represents the next generation of aquaculture biosecurity solutions.",
      //   ],
      //   highlight: {
      //     title: "Safe & Effective",
      //     description:
      //       "Thoroughly tested and proven safe for shrimp, fish, and beneficial pond organisms while providing powerful protection against pathogenic threats.",
      //   },
      //   image: Mei,
      // },
    },
    meicl: {
      name: "Mei-cl",
      // tagline: "EHP Control",
      image: meiclProductImage,
      description:
        "Mei-Cl is a micronutrient-based formulation created using Microbe Assisted Micron Sized Particles (MAMSP) technology.It contains nano-form Calcium, Magnesium, Iron, Zinc, Manganese, Copper, Boron, Molybdenum, and Vitamin D3.The nutrient particles rapidly integrate into the physiology of aquatic animals, addressing deficiencies effectively.",
      benefits: [
        "Provides balanced nutrition.",
        "Enhances growth and weight gain.",
        "Improves exoskeleton formation.",
        "Facilitates the moulting process.",
        "Strengthens the immune system.",
        "Effectively addresses loose shell issues."
      ],
      dosage: [

        "Feed Application: 5 ml per kg of feed.",
        "Pond Application: Dilute 500 ml in sufficient water and distribute evenly."
      ],
      composition: [
        { component: "Mixture of Nano Micronutrients: 1%" },
        // { component: "Beneficial Bacterial Strains" },
        // { component: "Nano-emulsion" },

      ],
      // extraSection: {
      //   title: "Synergistic Action",
      //   paragraphs: [
      //     "meicl combines the power of specialized phytogenic extracts with targeted probiotics to create a comprehensive solution against Enterocytozoon hepatopenaei (EHP). This dual-action approach provides both immediate and long-term protection.",
      //     "The carefully selected herbal components work synergistically to reduce EHP spore load in the pond environment while supporting the shrimp's natural defense mechanisms. Our probiotic strains competitively exclude harmful organisms and enhance digestive efficiency.",
      //     "By addressing EHP at multiple levels - environmental control, digestive support, and immune enhancement - meicl delivers superior results compared to single-mechanism solutions..",
      //   ],
      //   highlight: {
      //     title: "Natural & Sustainable",
      //     description:
      //       "Formulated with naturally derived ingredients, meicl offers an eco-friendly alternative to chemical treatments while delivering consistent, reliable results in EHP management.",
      //   },
      //   image: meiclBottomImage,
      // },
    },
    SEAL: {
      name: "SEAL",
      tagline: "A Growth Zeal Liquid",
      image: SEALProductImage,
      description:
        "SEAL is a pioneering aquaculture solution crafted with advanced Microbe Assisted Micron-Sized Particles (MAMSP) technology.This innovative product features nano selenium and nano vitamin C, essential components for mitigating oxidative stress caused by biotic and abiotic factors.Seal sets a new benchmark for enhancing the health, immunity, and growth of aquatic animals. is an advanced Vibrio control solution utilizing competitive exclusion and natural antimicrobials. This powerful formulation effectively manages pathogenic Vibrio species while maintaining beneficial bacteria for optimal pond health.",
      benefits: [
        "Stress Reduction: Effectively alleviates oxidative stress in aquatic species.",
        "Health Rejuvenation: Revitalizes diseased and weakened aquatic animals.",
        "Optimized Moulting: Improves and accelerates the moulting process.",
        "Enhanced Nutrient Absorption: Nano selenium and vitamin C ensure superior absorption and bioavailability.",
        "Immune System Support: Acts as an immunomodulatory agent to strengthen immunity.",
        "Powerful Antioxidant: Quickly counteracts oxidative stress, ensuring better resilience.",
        "Improved Growth & Weight: Promotes healthy growth and weight gain in aquatic animals.",
      ],
      dosage:
        "Feed Application: Mix 5 ml of Seafactor per kg of feed for optimal results.",
      composition: [
        { component: "Nano Selenium: 1%", percentage: "40%" },
        { component: "Nano Selenium: 1%", percentage: "20%" },
        { component: "Elevate the health and performance of your aquatic animals with Seal, your trusted partner for aquaculture success!", percentage: "25%" },
        // { component: "Herbal extracts", percentage: "10%" },
        // { component: "Stabilizers", percentage: "5%" },
      ],
      // extraSection: {
      //   title: "How It Works",
      //   paragraphs: [
      //     "SEAL employs a multi-faceted approach to Vibrio control through competitive exclusion, targeted bacteriophages, and natural antimicrobials. This comprehensive strategy ensures effective pathogen management without disrupting beneficial bacterial populations.",
      //     "Our competitive bacterial strains rapidly colonize the pond environment, outcompeting pathogenic Vibrio species for nutrients and space. Simultaneously, specific bacteriophages target and eliminate harmful Vibrio strains with precision.",
      //     "The organic acid blend creates an unfavorable environment for pathogenic bacteria while supporting beneficial microflora. Combined with herbal extracts that enhance shrimp immunity, SEAL provides complete protection against Vibrio-related diseases.",
      //   ],
      //   highlight: {
      //     title: "Proven Performance",
      //     description:
      //       "Field-tested across diverse aquaculture operations, SEAL has consistently demonstrated significant reductions in Vibrio counts and improved survival rates in commercial shrimp farming.",
      //   },
      //   image: vibroBottomImage,
      // },
    },
    TRUBOON: {
      name: "TRUBOON",
      tagline: "Shrimp Protector Farmer Benefiter",
      image: TRUBOONProductImage,
      description:
        "Truboon is an innovative nanotechnology-based product designed to effectively manage oxidative stress in aquatic animals.It contains selenium nanoparticles, ascorbic acid, niacin, and essential amino acids, which work synergistically to control reactive oxygen species and enhance overall aquatic health. is a premium antioxidant formulation combining nano selenium with vitamin C for enhanced bioavailability. This cutting-edge Shrimp Protector Farmer Benefiter supports shrimp immunity, promotes growth, and enhances stress resistance.",
      benefits: [
        "Reduces oxidative stress, ensuring healthier aquatic animals.",

        "Enhances the immune system to fight diseases effectively.",

        "Acts as a potent antioxidant, removing harmful free radicals.",

        "Rejuvenates diseased aquatic animals, improving recovery rates.",

        "Improves feed intake and optimizes feed utilization.",
        "Enhances feed conversion ratio (FCR) and promotes weight gain.",
      ],
      // dosage:
      //   [" < 30 Days of Culture (DOC): Mix 3 mL per kg of feed > 30 DOC: Mix 5 mL per kg of feed",],

      additionalDosage: [
        { des1: "Pond Application: 300 tablets per acre of the pond. ", },
        // { des1: "> 30 DOC ", dat: " Mix 5 mL per kg of feed" }
      ],
      composition: [
        { component: "Nano Selenium", percentage: "1%" },
        { component: "Ascorbic Acid ", percentage: "1%" },
        { component: "Niacin", percentage: "0.1%" },
        { component: "Essential Amino Acids", percentage: "1%" },
        // { component: "Carriers & binders", percentage: "10%" },
      ],
      // extraSection: {
      //   title: "Advanced Nano Technology",
      //   paragraphs: [
      //     "TRUBOON harnesses the power of nanotechnology to deliver selenium and vitamin C with unprecedented bioavailability. Our nano-sized particles are rapidly absorbed and efficiently utilized at the cellular level, maximizing antioxidant protection.",
      //     "Traditional selenium supplements often have limited absorption and can accumulate to toxic levels. Our nano selenium formulation overcomes these challenges, providing optimal benefits at lower doses while ensuring complete safety.",
      //     "The combination of nano selenium with stabilized vitamin C creates a powerful synergistic effect, enhancing immune response, reducing oxidative stress, and supporting healthy growth and molting cycles in shrimp.",
      //   ],
      //   highlight: {
      //     title: "Superior Bioavailability",
      //     description:
      //       "Studies show that nano selenium provides up to 3x better absorption compared to conventional forms, ensuring your shrimp receive maximum nutritional benefit from every dose.",
      //   },
      //   image: morinoxBottomImage,
      // },
    },
    BIOMASS: {
      name: "BIOMASS",
      tagline: "PRODUCTIVITY · SUSTAINABILITY · PROFITABILITY",
      image: BIOMASSProductImage,
      description:
        "Biomass is a distinctive probiotic formulation containing proprietary microbial strains, enzymes, and metabolites. It is specially designed to control diseases, promote growth, and enhance the overall health of aquatic animals. By utilizing indigenous microbial strains registered under the IDA Budapest Treaty, Bioton ensures improved feed efficiency and pathogen elimination. is a biological solution for controlling harmful blue-green algae (Microcystis). This advanced formulation uses competitive microorganisms and natural algicides to maintain balanced phytoplankton populations and ensure clear, healthy pond water.",
      benefits: [
        "Enhances Feed Conversion Ratio (FCR): Promotes weight gain and efficient feed utilization.",

        "Pathogen Elimination: Effectively eliminates pathogenic microbes.",
        "Improved Digestion: Supports better feed digestion and nutrient absorption.",
        "Disease Prevention: Reduces the risk of diseases, including Red Disease.",

        "Gut Health: Maintains a healthy gut microbiome for optimal growth and immunity."
      ],
      // dosage:
      //   "2 liters per acre once every 15 days 2 liters per acre every 5–7 days until bloom subsides",
      additionalDosage: [
        { des1: "Initial Dose", dat: "2.5 kg per acre of the pond." },
        { des1: "Maintenance Dose", dat: "1 kg per acre as required." }
      ],
      composition: [
        { component: "(1.0 × 10¹⁰ CFU/g):Each gram contains:", percentage: "35%" },
        { component: "Bacillus subtilis", percentage: "30%" },
        { component: "Bacillus megaterium", percentage: "30%" },
        { component: "Bacillus licheniformis", percentage: "30%" },
        { component: "Bacillus amyloliquefaciens", percentage: "30%" },
        { component: "Bacillus mesentericus", percentage: "30%" },
        { component: "Lactobacillus acidophilus", percentage: "30%" },
        { component: "Lactobacillus plantarum", percentage: "30%" },
        { component: "Lactobacillus casei", percentage: "30%" },
        { component: "Lactobacillus lactis", percentage: "30%" },
        { component: "Bifidobacterium bifidum", percentage: "30%" },
        { component: "Rhodobacter", percentage: "30%" },
        { component: "Rhodococcus", percentage: "20%" },
        // { component: "Enzyme complex", percentage: "10%" },
        // { component: "Stabilizers", percentage: "5%" },
      ],
      // extraSection: {
      //   title: "Microcystin Control Mechanism",
      //   paragraphs: [
      //     "BIOMASS employs a multi-pronged approach to combat harmful microcystin-producing cyanobacteria in aquaculture ponds. Our specialized probiotic consortium actively outcompetes toxic algal blooms while enzymatic components break down existing microcystin toxins.",
      //     "The formulation includes microcystin-degrading bacteria that produce microcystinase enzymes, capable of cleaving the cyclic peptide structure of microcystins into non-toxic linear peptides. This biological degradation is both safe and effective.",
      //     "By combining competitive exclusion with active toxin degradation, BIOMASS provides comprehensive protection against microcystin contamination, ensuring water quality and shrimp safety throughout the culture period.",
      //   ],
      //   highlight: {
      //     title: "Rapid Detoxification",
      //     description:
      //       "BIOMASS can reduce microcystin levels by up to 80% within 72 hours of application, providing quick relief from toxic algal blooms and restoring pond health rapidly.",
      //   },
      //   image: BIOMASSBottomImage,
      // },
    },
    ALLCIDA: {
      name: "ALLCIDA ",
      tagline: "Shrimp Protector Farmer Benefiter",
      image: ALLCIDAProductImage,
      description:
        "Allcida is a cutting-edge disinfectant formulated using nanotechnology. It contains metal nanoparticles that provide broad-spectrum antimicrobial properties, which are more effective than traditional bulk antimicrobial agents. These nanoparticles work by disrupting the genetic material of pathogenic microbes, ensuring their elimination and preventing resistance development. Pro is a complete chelated mineral supplement formulated specifically for crustaceans. This premium Shrimp Protector Farmer Benefiter provides essential minerals in highly bioavailable form for optimal shell formation, successful molting, and enhanced growth.",
      benefits: [
        "Effectively controls pathogens, including Vibrio spp.",

"Non-stressful for aquatic animals.",

"Broad-spectrum antimicrobial activity for comprehensive pathogen control.",
"Leaves no antibiotic residues, ensuring a safer environment.",

"Helps maintain the pond ecosystem by targeting harmful microbes.",

"Disrupts the genetic material of pathogens, reducing the chance of resistance.",
      ],
      // dosage:
      // "Mix 500g-1kg per ton of feed. Apply 2-3 kg per acre in water during molting periods.",
      additionalDosage: [
        { des1: "5 L per acre of pond.", dat: "" },
        // { des1: "Allcida ensures a cleaner and safer aquatic environment, promoting healthier aquatic animals while maintaining the integrity of the ecosystem.", dat: "Apply 6kg per acre." }
      ],
      composition: [
        { component: "Metal nanoparticles", percentage: "5%" },
        { component: "Allcida ensures a cleaner and safer aquatic environment, promoting healthier aquatic animals while maintaining the integrity of the ecosystem.", percentage: "15%" },
        // { component: "Natural Antioxidants", percentage: "10%" },
        // { component: "Metabolite", percentage: "8%" },
        // { component: "Bifidobacterium bifidum & carriers", percentage: "42%" },
      ],
    },
    // "detoxify-x": {
    //   name: "Detoxify-X",
    //   tagline: "Pond Bottom Management",
    //   image: detoxifyXProductImage,
    //   description:
    //     "Detoxify-X is a comprehensive pond bottom management solution that neutralizes toxic compounds and improves sediment quality. This powerful formulation combines oxidizers, minerals, and beneficial microbes to create a healthier pond environment.",
    //   benefits: [
    //     "Neutralizes toxic gases (H2S, NH3)",
    //     "Improves pond bottom conditions",
    //     "Reduces sludge accumulation",
    //     "Enhances oxygen levels",
    //     "Creates healthier pond environment",
    //   ],
    //   dosage:
    //     "Apply 2-3 liters per acre of pond water.",
    //   composition: [
    //     { component: "Paracoccus spp", percentage: "30%" },
    //     { component: "Purple Non-Sulfur Bacteria", percentage: "25%" },
    //     // { component: "Beneficial bacteria", percentage: "20%" },
    //     // { component: "Organic acids", percentage: "15%" },
    //     // { component: "Bio-catalysts", percentage: "10%" },
    //   ],
    //   // extraSection: {
    //   //   title: "Heavy Metal Chelation Technology",
    //   //   paragraphs: [
    //   //     "          Detoxify-X works through a natural bioremediation process that rejuvenates the pond bottom and improves overall water quality. After application, the beneficial microbes—Para coccus spp. and Purple Non-Sulfur Bacteria (PNSB)—rapidly colonize the pond bottom, where they begin decomposing accumulated organic matter such as uneaten feed, fecal waste, and dead plankton. This microbial activity breaks down sludge into simpler, harmless compounds while actively consuming sulfur and nitrogen sources that otherwise generate toxic gases like Hydrogen Sulfide (H₂S) and Ammonia (NH₃). As Detoxify-X neutralizes these harmful gases, it restores aerobic conditions and enhances dissolved oxygen at the pond bottom. The result is a cleaner, healthier aquatic environment that supports better shrimp and fish growth, improves feed conversion, and minimizes stress and mortality throughout the culture cycle."],
    //   //   highlight: {
    //   //     title: "Proven Results",
    //   //     description:
    //   //       "Field trials demonstrate that Detoxify-X can reduce heavy metal concentrations by over 75% and significantly improve water quality parameters within one week of treatment.",
    //   //   },
    //   //   image: DetoxifyBottomImage,
    //   // },
    // },
    ride: {
  name: "RIDE",
  tagline: "For Red Disease & Columnaris",
  image: ride,
  description:
    "RIDE is a cutting-edge solution for managing Epizootic Ulcerative Syndrome (EUS), commonly referred to as Red Disease in fishes. Engineered with MAMSP (Microbe Assisted Micron Sized Particles) technology, RIDE effectively combats the fungal pathogen Aphanomyces invadans while promoting fish health and growth.",
  benefits: [
    "Effectively controls Epizootic Ulcerative Syndrome (Red Disease) in fish",
    "Non-stressful treatment ensuring fish well-being",
    "Rapidly stops the spread of the disease",
    "Effectively manages secondary infections",
    "Enhances growth and weight gain in fish populations",
  ],
  dosage: "Use 500 ml to 1 L per tonne weight of fish.",
  composition: [
    { component: "Micron-sized metal particles", percentage: "5%" },
  ],
},

thinkmin: {
  name: "Thinkmin",
  tagline: "Liquid Micro Sized Minerals",
  image: thinkmin,
  description:
    "Thinkmin is a water mineral-based product formulated with micron-sized nutrient particles using MAMSP (Microbe Assisted Micron Sized Particles) technology. This advanced formulation ensures superior bioavailability and nutrient absorption, addressing the limitations of traditional mineral and nutrient mixtures that tend to settle at the pond bottom, leading to imbalanced ecosystems and disease outbreaks. Thinkmin helps maintain a healthy, balanced pond environment, ensuring optimal growth and health of aquatic animals.",
  benefits: [
    "Rapidly addresses nutrient deficiencies in aquatic animals",
    "Balances the pond ecosystem promoting overall health",
    "Enhances the growth of phytoplankton and zooplankton",
    "Offers superior bioavailability for better nutrient absorption",
    "Improves feed conversion ratio (FCR) and promotes weight gain in aquatic animals",
  ],
  dosage: "5 L per acre of pond.",
  composition: [
    { component: "Micro-sized nutrients (Ca, Mg, B, Mn, Zn, K, S, Cu, Se, Co, P, Fe etc.)", percentage: "5%" },
  ],
},
meizn: {
  name: "MeiZn",
  tagline: "For Shrimp Growth & Immunity",
  image: meizn,
  description:
    "MeiZn is a cutting-edge product formulated with Micron/Nano-sized particles using MAMSP (Microbe Assisted Micron Sized Particles) technology. It is specifically designed to provide superior bioavailability and absorption of zinc, which is crucial for shrimp growth and overall health. Compared to traditional zinc supplements, MeiZn ensures more efficient nutrient uptake, promoting optimal development in shrimp.",
  benefits: [
    "Promotes robust muscle development in shrimp",
    "Minimizes cellular damage caused by oxidative stress, ensuring better overall health",
    "Supports healthy weight gain, contributing to better yields",
    "Enhances nervous system function, ensuring vitality and resilience",
    "Improves immune responses, protecting shrimp from diseases",
  ],
  dosage: "500 ml - 1 L per acre of pond.",
  composition: [
    { component: "Micron-sized Zinc EDTA", percentage: "12%" },
  ],
},

ensure: {
  name: "Ensure",
  tagline: "A Shrimp Sure Liquid (EHP Control)",
  image: ensure,
  description:
    "Ensure is a cutting-edge product developed using plant-derived marker molecules, which are microencapsulated and nano-emulsified to enhance their efficacy. This advanced formulation is specially designed to control microsporidian fungi, the primary causative agent of Enterocytozoon hepatopenaei (EHP). EHP targets the hepatopancreas of aquatic animals, leading to growth retardation and immune system impairment. Ensure efficiently combats this issue, promoting overall health and performance in aquaculture.",
  benefits: [
    "Efficiently targets and controls microsporidian fungi that cause EHP",
    "The plant marker molecules rupture microsporidian spores within tissues, reducing recurrence risk",
    "Improves hepatopancreas functionality and enhances overall health",
    "Enhances feed conversion ratio (FCR) and promotes growth, improving feed efficiency",
    "Contributes to weight enhancement, ensuring optimal growth and development",
  ],
  dosage:
    "Primary Dose: Mix 10 ml of Ensure with 1 L of clean water. Soak 2 kg of shrimp feed in the mixture and leave for 24 hours before use. Maintenance Dose: Use once weekly post-recovery.",
  composition: [
    { component: "Plant marker molecules : 5%", percentage: "5%" },
  ],
},

liquipro: {
  name: "Liquipro",
  tagline: "Liquid Probiotic",
  image: liquipro,
  description:
    "Liquipro is an innovative blend of probiotics designed to improve water quality parameters and control Vibrio spp. This microencapsulated formulation contains a consortium of probiotics capable of thriving in various oxygenic environments within the pond. Developed using advanced microencapsulation technology.",
  benefits: [
    "Detoxifies pond bottom sludge.",
    "Enhances water quality parameters.",
    "Balances the pond ecosystem and promotes phytoplankton growth.",
    "Effectively controls pathogens through competitive inhibition and antagonism.",
    "Contains halotolerant probiotic strains that can sustain various salinity concentrations.",
    "Regularises the moulting process.",
    "Balances pond pH.",
    "Utilises proprietary probiotic strains (deposited in IDA, Budapest treaty) sourced from indigenous environments.",
  ],
  dosage: "1–2 L per acre pond. Apply uniformly across the pond.",
  composition: [
    { component: "Bacillus subtilis", percentage: "-" },
    { component: "Bacillus megaterium", percentage: "-" },
    { component: "Bacillus licheniformis", percentage: "-" },
    { component: "Bacillus amyloliquefaciens", percentage: "-" },
    { component: "Bacillus mesentericus", percentage: "-" },
    { component: "Lactobacillus acidophilus", percentage: "-" },
    { component: "Lactobacillus plantarum", percentage: "-" },
    { component: "Lactobacillus casei", percentage: "-" },
    { component: "Lactobacillus lactis", percentage: "-" },
    { component: "Bifidobacterium bifidum", percentage: "-" },
    { component: "Rhodobacter", percentage: "-" },
    { component: "Rhodococcus", percentage: "-" },
  ],
},

algaedefender: {
  name: "Algae Defender",
  tagline: "Botanical Algae Control Solution",
  image: algae,
  description:
    "Algae Defender is a botanical extract-based formulation specifically designed to control toxic cyanobacteria, particularly Microcystis aeruginosa. This species is known to cause algal blooms on pond surfaces, leading to oxygen depletion and the release of harmful toxins that adversely affect aquatic life. Algae Defender efficiently mitigates these harmful effects, promoting a healthier pond environment and supporting the well-being of aquatic animals.",
  benefits: [
    "Effectively controls Microcystis aeruginosa and other harmful algal species.",
    "Detoxifies harmful compounds produced by algae, ensuring safer water conditions.",
    "Prevents the formation of detrimental algal blooms, maintaining a balanced ecosystem.",
    "Enhances dissolved oxygen levels in ponds, supporting aquatic respiration.",
    "Improves feed intake and feed conversion ratio (FCR), promoting growth and performance.",
    "Contributes to the growth of aquatic animals, improving overall productivity in the pond.",
  ],
  dosage:
    "Apply Algae Defender 1–2 times every 8 days in severe algal conditions. Dilute 1–2 L of Algae Defender in 100 L of water and distribute evenly across the pond surface.",
  composition: [
    { component: "Botanical extracts : 5%", percentage: "5%" },
  ],
},
neo: {
  name: "Neo",
  tagline: "Plant-Based Solution for WSSV Management",
  image: neo, 
  description:
    "Neo is an advanced formulation designed to combat White Spot Syndrome Virus (WSSV), a major pathogen responsible for white spots on shrimp exoskeletons and high mortality rates. It utilizes plant-derived marker molecules, microencapsulated and nano-emulsified to enhance efficacy and stability, offering an effective solution for managing WSSV outbreaks in aquaculture.",
  benefits: [
    "Effectively controls the White Spot Syndrome Virus (WSSV), reducing its impact on shrimp populations.",
    "Helps limit the transmission of WSSV across shrimp populations.",
    "Plant marker molecules act as immunomodulators, boosting shrimp’s immune response.",
    "Free from antibiotic residues, ensuring a safe and natural treatment.",
    "Reduces disease-related stress, improving shrimp health and productivity.",
  ],
  composition: [
    { component: "Microencapsulated plant marker molecules", percentage: "5%" },
  ],
  dosage: {
    pond: "Dilute 100 mL of Neo in 10 L of clean water and evenly distribute across the pond surface. Repeat every 7–10 days.",
    feed: "Mix 100 mL of Neo in 20 Kg of feed and ensure proper mixing for uniform distribution.",
  },
  packSize: "1 Litre",
},

proline: {
  name: "Proline",
  tagline: "Gut Probiotic for Enhanced Digestive Health & Feed Efficiency",
  image: proline, // replace with actual image link
  description:
    "Proline is a synbiotic formulation that combines probiotics, prebiotics, and metabiotics to improve digestive health and boost feed conversion ratio (FCR) in aquaculture. Its carefully selected probiotic strains acidify the gut environment, reduce pathogenic loads, and enhance nutrient absorption.",
  benefits: [
    "Promotes the breakdown and absorption of nutrients from feed (Enhanced Enzyme Production).",
    "Improves FCR, leading to better weight gain and growth rates in aquatic animals.",
    "Supports gut health by inhibiting harmful microbes like Vibrio spp. and maintaining a balanced microbiome.",
    "Contains unique proprietary strains registered under the Budapest Treaty (IDA) for sustained effectiveness.",
  ],
  composition: [
    {
      component:
        "Bacillus subtilis, Lactobacillus plantarum, Bifidobacterium bifidum, and additional beneficial strains",
      percentage: "2.0 × 10¹⁰ CFU/g",
    },
  ],
  dosage: "Mix 10–20 g per kg of feed, ensuring even distribution.",
  packSize: "500 g & 1 kg",
},
invictus: {
  name: "Invictus",
  tagline: "For Vibriosis",
  image: invictus, // replace with actual image link
  description:
    "Invictus is a powerful formulation containing plant marker molecules derived from Camellia sinensis (green tea) and Moringa oleifera (moringa). The active ingredients are microencapsulated and nano-emulsified to improve absorption, effectiveness, and immediate action. Invictus provides a targeted solution to combat Vibrio spp., the primary pathogen responsible for White Gut Disease in shrimp, offering an eco-friendly, non-toxic alternative to antibiotics.",
  benefits: [
    "Effectively controls Vibrio spp., responsible for White Gut Disease.",
    "Nano-emulsified formulation ensures superior absorption and immediate action.",
    "Rejuvenates diseased aquatic animals, aiding recovery.",
    "Contains no antibiotic residues, ensuring a safe and sustainable solution for aquaculture.",
    "Acts as an immunomodulator, enhancing the shrimp’s natural defense mechanisms.",
    "Eco-friendly and non-toxic, ensuring safe usage for both shrimp and the environment.",
  ],
  composition: [
    {
      component:
        "Microencapsulated plant marker molecules from Camellia sinensis and Moringa oleifera",
      percentage: "5%",
    },
  ],
  dosage: {
    feed: "Mix 10 mL of Invictus with 1 L of clean water. Soak 2 Kg of shrimp feed in the solution for 24 hours, ensuring proper absorption, then mix thoroughly before use.",
  },
  packSize: "1 Litre",
},

armour: {
  name: "Armour",
  tagline: "For White Gut Diseases",
  image: Armour, // replace with actual image link
  description:
    "Armour is an advanced pathogen control solution developed using green nanotechnology. This formulation incorporates nanoparticles designed to specifically target and disrupt the genetic material of pathogens such as Vibrio spp., providing effective protection against White Gut Disease while avoiding the induction of pathogen resistance.",
  benefits: [
    "Effective Pathogen Control: Nanoparticles denature the genetic material of pathogens, ensuring efficient infection management.",
    "Resistance Management: Innovative mode of action eliminates pathogen resistance risk.",
    "Rapid Results: Quick efficacy with no residual toxicity in aquatic animals.",
    "Environmental Safety: Non-toxic, environmentally friendly, antibiotic-free formulation.",
  ],
  composition: [
    { component: "Metal nanoparticles synthesized using plant marker molecules", percentage: "1%" },
  ],
  dosage:
    "Add 5–10 mL per kg of feed depending on disease intensity. Treatment should span 24 to 36 consecutive feeds without interruption.",
  packSize: "1 Litre",
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
            {productId === "Aqua-Life" ? (
              <div className="relative rounded-lg p-8 overflow-visible">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-contain animate-float-uneven scale-110 relative"
                  style={{ top: "-10px" }}
                />
              </div>
            ) : productId === "Vikrant" ||
              productId === "Meik" ||
              productId === "meicl" ||
              productId === "SEAL" ||
              productId === "TRUBOON" ||
              productId === "BIOMASS" ||
              productId === "ALLCIDA" ||
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
            {productId === "Aqua-Life" ? (
              <div className="relative rounded-lg p-8 overflow-visible">
                <img
                  src={product.image}
                  alt={product.name}
                  className=" mx-auto h-auto object-contain animate-float-uneven relative"
                  style={{ top: "50px", width: '40%' }}
                />
              </div>
            ) : productId === "Vikrant" ||
              productId === "Meik" ||
              productId === "meicl" ||
              productId === "SEAL" ||
              productId === "TRUBOON" ||
              productId === "BIOMASS" ||
              productId === "ALLCIDA" ||
              productId === "detoxify-x" ? (
              <div className="p-8  ">
                <img
                  src={product.image}
                  alt={product.name}
                  className=" mx-auto h-1/2 object-contain animate-float-uneven relative"
                  style={{ top: "0px", width: '40%' }}
                />
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-xl p-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className=" mx-auto h-auto object-contain relative"
                  style={{ top: "0px", width: '40%' }}
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
          <h2 className="text-[#4A5A3C] mb-8 text-center" style={{ fontSize: "32px", fontWeight: 600, marginTop: '50px' }}>
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























