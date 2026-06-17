/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, TeamMember, Testimonial, WellnessPlan, BlogPost, OpenPosition } from '../types';

export const IMAGES = {
  heroCatDog: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1200", // happy play group
  goldenDog: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800", // happy golden retriever looking up
  fancyCat: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800", // grey British Shorthair lying down
  rabbitExotic: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&q=80&w=800", // cute guinea pigs/lagomorph exotics
  clinicInterior: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200", // high-end clinical space
  dentalCare: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&q=80&w=800", // premium pet dental care
  surgeryTheatre: "https://images.unsplash.com/photo-1579684389782-64d84b5e901d?auto=format&fit=crop&q=80&w=1200", // state-of-the-art veterinary surgery
  ultrasoundLab: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800", // high-speed radiography & ultrasound diagnostics suite
  groomingSpa: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800", // corgi puppy in bath wrapped in blue towel
  medicalBoarding: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=800", // secure clinic boarding comfort
  emergencyCare: "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?auto=format&fit=crop&q=80&w=800", // diagnostic care tracking
  drKim: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600", // medical professional headshot
  drVance: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600", // exotics doctor headshot
  sarahLin: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600", // clinic supervisor
  leoJenkins: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=600", // professional nursing assistant
  generalPetCare: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800" // happy retriever being examined/guided
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'routine-exams',
    title: 'Routine Exams',
    description: 'Comprehensive head-to-tail wellness examinations tailored to monitor and optimize your pet\'s development and longevity.',
    icon: 'Stethoscope',
    imageUrl: IMAGES.goldenDog,
    details: [
      'Comprehensive eye, ear, and oral checkups',
      'Weight assessment and nutritional planning',
      'Joint, bone, and spinal integrity examinations',
      'Heart, lung, and abdominal sound evaluation'
    ]
  },
  {
    id: 'vaccinations',
    title: 'Vaccinations & Prevention',
    description: 'Defense against continuous environmental biological threats. Custom, individualized schedules based on your pet\'s exposure risks.',
    icon: 'ShieldAlert',
    imageUrl: IMAGES.fancyCat,
    details: [
      'Core & non-core immunization sequences',
      'Year-round heartworm protection mapping',
      'Ectoparasite defense (fleas, ticks, mites)',
      'Lifestyle and exposure assessment interviews'
    ]
  },
  {
    id: 'exotic-pets',
    title: 'Exotic Pets Care',
    description: 'Specialized healthcare for rabbits, guinea pigs, hamsters, ferrets, and other unique non-traditional companion small mammals.',
    icon: 'Rabbit',
    imageUrl: IMAGES.rabbitExotic,
    details: [
      'Species-specific custom husbandry guidance',
      'Specialized, delicate physical diagnostic exams',
      'Nutritional profiling for exotic herbivores',
      'Comprehensive diagnostics & dental management'
    ]
  },
  {
    id: 'dental-care',
    title: 'Dental Care',
    description: 'Advanced ultrasonic scaling, polishing, and surgical correction to protect against systemic cardiovascular disease.',
    icon: 'Sparkles',
    imageUrl: IMAGES.dentalCare,
    details: [
      'Digital direct oral radiography',
      'Ultrasonic hand scaling & detailed polish',
      'Periodontal charting & custom therapy',
      'Safe, monitored general anesthesia protocols'
    ]
  },
  {
    id: 'geriatric-care',
    title: 'Geriatric Care',
    description: 'Dedicated compassionate support systems prioritizing pain management, mobility, cognitive ease, and senior organ health.',
    icon: 'Heart',
    imageUrl: IMAGES.generalPetCare,
    details: [
      'Bi-annual thorough senior wellness checks',
      'Osteoarthritis and chronic pain calibration',
      'Organ index baseline panels (Kidney, Liver, Thyroid)',
      'Cognitive dysfunction support therapies'
    ]
  },
  {
    id: 'internal-medicine',
    title: 'Internal Medicine',
    description: 'Specialized diagnosis and long-term care management for complex endocrine, renal, hepatic, and gastrointestinal conditions.',
    icon: 'Activity',
    imageUrl: IMAGES.ultrasoundLab,
    details: [
      'Endocrine management (Diabetes, Cushing\'s)',
      'Chronic Renal Insufficiency support models',
      'Immune-mediated condition containment',
      'Advanced direct ultrasound visualization imaging'
    ]
  },
  {
    id: 'grooming',
    title: 'Pet Grooming',
    description: 'Luxury therapeutic coat washes, professional breed-specific trims, and dermatological soothing skin care routines.',
    icon: 'Scissors',
    imageUrl: IMAGES.groomingSpa,
    details: [
      'Warm therapeutic visual bath massage',
      'Nail trims, filing, and sanitary trims',
      'Ear purification and expression protocols',
      'Custom dematting & breed standard scissoring'
    ]
  },
  {
    id: 'boarding',
    title: 'Pet Hotel & Boarding',
    description: 'Peace of mind with clinical supervision, curated dietary routines, play groups, and 24/7 care logs for your dogs and cats.',
    icon: 'Building',
    imageUrl: IMAGES.medicalBoarding,
    details: [
      'Fully climate-controlled sanitized suites',
      'Direct on-site veterinary doctor supervision',
      'Daily individualized active enrichment sessions',
      'Meticulous multi-dose medicine administration plans'
    ]
  },
  {
    id: 'emergency-care',
    title: 'Emergency Care',
    description: 'Equipped to manage critical care, toxic ingestions, acute traumas, and breathing distress immediately during clinic hours.',
    icon: 'Flame',
    imageUrl: IMAGES.emergencyCare,
    details: [
      'Rapid trauma stabilization protocols',
      'In-house high-speed toxic panel analysis',
      'Oxygen chamber therapy and ICU monitoring',
      'Emergency surgery readiness'
    ]
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'dr-kim',
    name: 'Dr. Evelyn Kim, DVM',
    role: 'Medical Director & Chief Vet',
    credentials: 'DVM, Cornell University College of Veterinary Medicine',
    bio: 'Dr. Kim has dedicated over 18 years to surgical excellence and companion animal wellness. When she isn\'t caring for your dogs, cats, and rabbits, she serves as a board consultant and enjoys spending time outdoors in Milton with her Frenchie Molly, cat Aphrodite, and her daughter\'s bearded dragon.',
    imageUrl: IMAGES.drKim,
    socials: {
      twitter: '#',
      linkedin: '#',
      email: 'dr.kim@johnscreekvet.com'
    }
  },
  {
    id: 'dr-vance',
    name: 'Dr. Marcus Vance, DVM',
    role: 'Senior Veterinarian & Exotics Lead',
    credentials: 'DVM, University of Georgia',
    bio: 'With a specialty in exotic mammal cardiology and delicate orthopedic surgeries, Dr. Vance brings 12+ years of critical care experience to Johns Creek. He lives in Roswell with his golden retriever, Sunny, and two rescue rabbits, Barnaby and Penelope.',
    imageUrl: IMAGES.drVance,
    socials: {
      linkedin: '#',
      email: 'dr.vance@johnscreekvet.com'
    }
  },
  {
    id: 'sarah-lin',
    name: 'Sarah Lin, RVT',
    role: 'Hospital Practice Coordinator',
    credentials: 'LVT, RVT, AS in Veterinary Technology',
    bio: 'Sarah oversees all nursing workflows, specialized lab analyses, and clinical compliance policies. Her organizational vision guarantees that your pets experience a tranquil, soothing, and strictly sanitary stay.',
    imageUrl: IMAGES.sarahLin,
    socials: {
      linkedin: '#'
    }
  },
  {
    id: 'leo-jenkins',
    name: 'Leo Jenkins',
    role: 'Lead Veterinary Nursing Assistant',
    credentials: 'BAS Veterinary Assistant, Elite Groomer Certification',
    bio: 'Leo spearheads our therapeutic grooming, custom styling, and inpatient clinical monitoring with a famously comforting touch. His patient, warm, and loving style excels at calming anxious senior dogs and cats.',
    imageUrl: IMAGES.leoJenkins
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Golda S.',
    rating: 5,
    content: 'Couldn\'t be happier with the quality of care my Frenchie, Shoshanna, receives here. Everyone from the front desk to the vets are incredibly sweet, accommodating, and invested in my puppy. I recommend this clinic to everyone.',
    petName: 'Shoshanna',
    petType: 'French Bulldog'
  },
  {
    id: 'test-2',
    author: 'Allison C.',
    rating: 5,
    content: 'Our dog has been seeing a John’s Creek Vet since we brought her home 8 years ago. She always gets taken care of, the service is quick and she gets her grooming there. We board her on vacations as well and have always had a great experience.',
    petName: 'Bella',
    petType: 'Golden Retriever'
  },
  {
    id: 'test-3',
    author: 'April C.',
    rating: 5,
    content: 'Dr Kim is the best!! She takes such good care of my dog Molly and my cat Aphrodite. She even takes care of my daughter’s bearded dragon. We have had a few health challenges over the years but I know who I can entrust my family’s care to.',
    petName: 'Molly, Aphrodite & Spike',
    petType: 'Dog, Cat & Beardie'
  },
  {
    id: 'test-4',
    author: 'Richard N.',
    rating: 5,
    content: 'The level of modern luxury this facility exhibits is matched only by their incredible diagnostic speed. My rabbit Barnaby received immediate critical internal checks and recovered flawlessly. Absolutely world-class care!',
    petName: 'Barnaby',
    petType: 'Holland Lop Rabbit'
  }
];

export const WELLNESS_PLANS: WellnessPlan[] = [
  {
    id: 'cats-plan',
    name: 'Feline Comprehensive Plan',
    target: 'Cats of all ages',
    priceMonthly: '49',
    priceYearly: '540',
    description: 'Nurture your feline friend with consistent, preventive care mapped out to detect health shifts early, keeping them playful and agile.',
    features: [
      'Unlimited office consultations & physical exams',
      'All core annual booster vaccines (Rabies, FVRCP)',
      'Intestinal parasite screen & deworming treatments',
      'Comprehensive senior or junior chemical blood profile',
      '10% direct discount on dental surgery & pet lodging',
      'Direct call access to on-duty nurse advice hotline'
    ],
    includesDental: false
  },
  {
    id: 'small-dog',
    name: 'Small Dog Champion Plan',
    target: 'Dogs under 20 lbs',
    priceMonthly: '55',
    priceYearly: '600',
    description: 'Perfect for toy breeds and small canine companions under 20 lbs requiring specialized diagnostic baselines and vital dental protection.',
    features: [
      'Unlimited office consultations & physical exams',
      'All annual critical booster vaccines (Rabies, DHPP, Bordetella)',
      'Annual Heartworm blood test panel',
      'Fecal companion microscopic assessment',
      'Comprehensive complete blood count and chemistry evaluation',
      '10% direct discount on grooming services and prescription food'
    ],
    includesDental: false
  },
  {
    id: 'medium-dog',
    name: 'Medium Dog Vitality Plan',
    target: 'Dogs 21 to 50 lbs',
    priceMonthly: '65',
    priceYearly: '720',
    description: 'Mainstream health shielding for active companion dogs between 21 and 50 lbs, supporting strong joint health and tick-borne defense.',
    features: [
      'Unlimited comprehensive physical exams',
      'Full immunization boosters sequence (Rabies, DHPP, Leptospirosis, Bordetella)',
      'Diagnostic Heartworm & Lyme Disease screens',
      'Full internal biochemistry wellness lab panel',
      '15% direct discount on dental cleanings and extraction procedures',
      'Two complimentary therapeutic grooming spa visits per calendar year'
    ],
    includesDental: true
  },
  {
    id: 'large-dog',
    name: 'Large Dog Guardian Plan',
    target: 'Dogs 51 to 80 lbs',
    priceMonthly: '75',
    priceYearly: '840',
    description: 'Designed around the specific cardiorespiratory, joint, and gastric tracking needs of larger active canine systems between 51 and 80 lbs.',
    features: [
      'Unlimited health consultations and office visits',
      'Targeted orthopedic joint and bone health assessments',
      'Complete annual disease defense immunizations',
      'Bi-annual comprehensive diagnostic lab work panels',
      'Direct cardiorespiratory stress screening baseline ECG',
      '15% direct discount on surgical procedures and boarding suites'
    ],
    includesDental: true
  },
  {
    id: 'xl-dog',
    name: 'Extra Large Proactive Plan',
    target: 'Dogs 81 to 110 lbs',
    priceMonthly: '89',
    priceYearly: '990',
    description: 'Intense preventive support and musculoskeletal health screening tailored specifically for working and active giant breeds up to 110 lbs.',
    features: [
      'Unlimited comprehensive clinical exams',
      'Senior multi-organ baseline metabolic reviews',
      'Proactive osteoarthritic screening & cartilage support recommendations',
      'Full vaccine line updates with heartworm prevention cycles',
      'Dedicated diagnostic ultrasound and radiographic reviews (15% off)',
      'Included annual professional ultrasonic dental scaling & polish'
    ],
    includesDental: true
  },
  {
    id: 'giant-dog',
    name: 'Giant Majesty Shield Plan',
    target: 'Dogs over 110 lbs',
    priceMonthly: '105',
    priceYearly: '1150',
    description: 'The highest tier of diagnostic focus for massive breeds (Great Danes, Mastiffs, St. Bernards) prioritizing long-term cardiovascular and gastric health.',
    features: [
      'Unlimited priority booking clinical consults',
      'Chest baseline X-ray screening & respiratory checks',
      'Full comprehensive senior complete biochemistry testing panel',
      'Advanced gastrointestinal and nutritional balance design visits',
      'Included complete professional veterinary dental scaling, polish, and digital charting',
      'Unlimited administrative medication refills and express medication direct dispensing'
    ],
    includesDental: true
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Designing the Ideal Feline Nutrition Plan',
    excerpt: 'Explore professional dietary practices to keep your house cats hydrated, lean, and highly energized across senior developmental cycles.',
    content: 'Transitioning cats to specific moisture-rich diets protects critical feline renal functions. Consult deep nutrient balance maps with our clinic exotics and feline health leaders.',
    category: 'Nutrition',
    date: 'June 12, 2026',
    readTime: '4 min read',
    imageUrl: IMAGES.fancyCat
  },
  {
    id: 'blog-2',
    title: 'Recognizing Early Silent Signs of Vet Dental Distress',
    excerpt: 'Periodontal disease often develops silently. Learn to identify micro-behaviors that indicate your pet is suffering from dental discomfort.',
    content: 'Excessive pawing at the muzzle, visual head tilting while chewing kibble, or progressive bad breath can trigger systematic kidney challenges. Professional ultrasonic cleanings are standard.',
    category: 'Dental Health',
    date: 'May 28, 2026',
    readTime: '5 min read',
    imageUrl: IMAGES.dentalCare
  },
  {
    id: 'blog-3',
    title: 'Summer Safety & Hydration Dynamics for Giants',
    excerpt: 'Johns Creek summers require aggressive dehydration tracking and safety precautions to protect massive breed hearts and joints.',
    content: 'Giant active systems radiate heat slower. Restricting rigorous activity between 11 AM and 4 PM while creating multiple hydration stations blocks acute heat stroke emergencies.',
    category: 'Safety',
    date: 'April 19, 2026',
    readTime: '6 min read',
    imageUrl: IMAGES.goldenDog
  }
];

export const PROMOTIONS = [
  {
    id: 'promo-1',
    title: 'New Patient Complimentary Diagnostic Consult',
    description: 'Receive a complimentary head-to-tail veterinary clinical review on your initial visit to Johns Creek Veterinary Clinic.',
    validity: 'Valid throughout 2026 for first-time hospital clients',
    badge: 'Welcome Special',
    code: 'JCVWELCOME26'
  },
  {
    id: 'promo-2',
    title: 'Dental Preventive Awareness Month: 15% Off Cleans',
    description: 'Get an automatic 15% discount on all professional ultrasonic dental scalings, digital charts, and polishes under full anesthesia.',
    validity: 'Ends July 31st, 2026',
    badge: 'Seasonal Special',
    code: 'JCVBRIGHTS26'
  }
];

export const FAQS = [
  {
    question: 'How often should my pet have professional examinations?',
    answer: 'We recommend routine preventive wellness exams once per year for healthy adult pets. For fragile puppies, small exotics, and senior pets over 7 years old, we recommend bi-annual (twice a year) physical checkups to catch chronic conditions early.'
  },
  {
    question: 'Do you treat non-traditional pets like rabbits & bearded dragons?',
    answer: 'Yes! Dr. Marcus Vance is our dedicated Lead for Exotics and has over 12 years of specialized education in rabbits, pocket mammals, guinea pigs, ferrets, and turtles. We provide routine diagnostics, expert feeding reviews, and soft tissue surgery.'
  },
  {
    question: 'What happens during a veterinary dental scaling procedure?',
    answer: 'Your pet is safely placed under a highly monitored general anesthesia protocol. We utilize digital dental X-Rays to evaluate bone health below the gum lines, perform ultrasonic scaling of plaque and tartar, and complete a high-shine dynamic polish to protect surfaces.'
  },
  {
    question: 'Are wellness plans the same as pet insurance?',
    answer: 'No. Wellness plans are design-focused programs that bundle everyday preventive care costs (vaccinations, routine office visits, basic tests, and direct clinical scaling) into easy, interest-free monthly payments. True pet insurance covers unexpected injuries, chronic issues, and traumas.'
  }
];

export const CAREER_POSITIONS: OpenPosition[] = [
  {
    id: 'vet-dvm',
    title: 'Associate Veterinarian (DVM)',
    department: 'Medical Services',
    type: 'Full-time / Part-time',
    description: 'We are seeking an enthusiastic, detail-oriented DVM eager to lead surgical diagnostics, exotic care, and wellness sessions in our premium Johns Creek clinic. Enjoy competitive high-tier compensation, regular schedules, full medical/dental coverage, CE stipends, and an incredibly positive support culture.',
    requirements: [
      'Doctor of Veterinary Medicine (DVM) degree from an accredited institution',
      'Active GA Veterinary license (or ability to secure prior to starting)',
      'Compassionate clinical bedside style and dedication to continuous pet development',
      'Strong base skills in elective soft tissue surgeries and dental restorations'
    ]
  },
  {
    id: 'rvt-tech',
    title: 'Registered Veterinary Technician (RVT)',
    department: 'Clinical Operations',
    type: 'Full-time',
    description: 'Partner with our chief veterinarians in executing clinical diagnostics, managing ICU patients, preparing digital radiography/bloodwork, and managing sterile surgical environments. We fully support CE training and recognize the RVT role as central to patient advocacy.',
    requirements: [
      'Valid certification as a Registered/Licensed Veterinary Technician in Georgia',
      'Practical clinical comfort with anesthesia induction, monitoring, and IV catheter placement',
      'Empathetic, clear family communication and positive collaborative team style'
    ]
  }
];
