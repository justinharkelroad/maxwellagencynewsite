/**
 * Staff roster — single source of truth.
 *
 * Imported by StaffPage.tsx (renders the pages) and lib/seo.ts (generates their
 * per-route <head> metadata at prerender time). Keep this module free of React,
 * env vars, and path aliases: scripts/prerender.ts pulls it in through seo.ts
 * outside the Vite graph.
 */
export interface StaffMember {
  name: string;
  slug: string;
  title: string;
  location: string;
  bio?: string;
  image?: string;
  phone?: string;
  email?: string;
  hideQuoteButton?: boolean;
}

export const staffMembers: StaffMember[] = [
  // Leadership Team
  {
    name: "Kristin Maxwell",
    slug: "kristin",
    title: "Agency Owner",
    location: "Corpus Christi, TX",
    image: "Kristin Headshot.jpg",
    phone: "361-985-2875",
    email: "KristinMaxwell@Allstate.com",
    hideQuoteButton: true,
    bio: "Meet Kristin Maxwell, primary agency owner of Maxwell Financial Group — the continuation of the Laura Harris Agency, the Corpus Christi insurance practice founded by Kristin's mother. With over 30 years of experience in the insurance industry, Kristin has built her career on a commitment to exceptional service, strong relationships, and trusted guidance for her clients.\n\nSince beginning her career in 1994, Kristin has helped protect Coastal Texas families for decades while growing the agency into a respected, community-focused organization known for reliability and personalized solutions. Today, she proudly serves clients across the entire state of Texas. She specializes in a wide range of coverages, including auto, home, renter's, landlord, windstorm, flood, commercial, & life insurance, ensuring clients are protected through every stage of life.\n\nKristin is passionate about developing people and fostering a positive, growth-oriented team culture. As a leader, she is dedicated to empowering those around her while maintaining the high standards that define the agency.\n\nOutside of the office, Kristin enjoys spending time with her family, exploring the outdoors, and creating meaningful experiences with her four children. Her leadership is grounded in integrity, compassion, and a genuine desire to make a lasting impact on both her team and the community.",
  },
  {
    name: "Bill Maxwell",
    slug: "bill",
    title: "Agency Co-Owner",
    location: "Corpus Christi, TX",
    image: "Bill Headshot.jpg",
    phone: "361-985-2875",
    email: "WilliamMaxwell@Allstate.com",
    hideQuoteButton: true,
    bio: "Meet Bill Maxwell, Agency Co-Owner of Maxwell Financial Group. Bill plays a key role in driving sales strategy, coaching team members, and supporting the overall growth and performance of the agency.\n\nWith a strong understanding of insurance products and client needs, Bill helps ensure customers receive tailored coverage that protects what matters most. He is experienced across a wide range of policies, including auto, home, landlord, boat, condo, renters, ATV/ORV, motorcycle, windstorm, and flood insurance.\n\nBill is especially passionate about developing others. He focuses on coaching, mentorship, and building confidence within the team to deliver exceptional service and results. His direct and practical approach helps team members navigate challenges, improve performance, and grow in their roles.\n\nOutside of the office, Bill enjoys spending time with his family and working on cars. His leadership is grounded in accountability, consistency, and a commitment to helping both clients and team members succeed.\n\nBill's focus on performance, development, and client relationships makes him an integral part of the agency's continued success.",
  },
  {
    name: "Grace Koch",
    slug: "grace",
    title: "Director of Customer Relations",
    location: "Corpus Christi, TX",
    image: "Grace headshot.jpg",
    phone: "361-985-2875",
    email: "GKoch@Allstate.com",
    hideQuoteButton: true,
    bio: "Meet Grace Koch, Director of Customer Relations at Maxwell Financial Group. With over 30 years of experience in the insurance industry, Grace brings deep knowledge, steady leadership, and a genuine passion for helping clients navigate their coverage needs with confidence.\n\nGrace began her insurance career in 1988 in Allstate's Claims Department, where she developed a strong foundation in evaluating risk and guiding customers through real-life claim situations. She specializes in a wide range of coverage, including auto, home, landlord, boat, condo, renters, ATV/ORV, motorcycle, windstorm, and flood insurance.\n\nAs the leader of the service team, Grace is dedicated to creating a seamless and supportive experience for every client. She takes pride in helping customers understand their coverage, navigate complex situations, and feel confident in their decisions. Her leadership is rooted in strong relationships, consistency, and a commitment to excellence.\n\nOutside of the office, Grace enjoys traveling on cruises and spending time with her family. She is also fluent in both English and Spanish, allowing her to connect with and serve a diverse range of clients.\n\nGrace's experience, compassion, and dedication make her a trusted resource for both clients and her team, and a key part of the agency's continued success.",
  },
  {
    name: "Kara Townsend",
    slug: "kara",
    title: "Administrative Manager",
    location: "Corpus Christi, TX",
    image: "Kara headshot.jpg",
    phone: "361-985-2875",
    email: "KaraTownsend@Allstate.com",
    hideQuoteButton: true,
    bio: "Meet Kara Townsend, Administrative Manager at Maxwell Insurance Group. With a lifetime of experience in the insurance industry, Kara brings a deep understanding of agency operations, strong attention to detail, and a commitment to keeping everything running efficiently behind the scenes.\n\nRaised in a family deeply rooted in the insurance industry, Kara has developed extensive knowledge across a wide range of coverage, including auto, home, landlord, boat, condo, renters, ATV/ORV, motorcycle, windstorm, and flood insurance. Her experience allows her to support both clients and team members with accuracy, organization, and consistency.\n\nAs the manager of the administrative team, Kara plays a critical role in maintaining the processes, systems, and workflows that keep the agency operating smoothly. She is dedicated to ensuring compliance, supporting internal operations, and creating structure that allows the entire team to perform at a high level.\n\nOutside of the office, Kara enjoys staying active and has a strong passion for personal growth. She earned her black belt in Tae Kwon Do in Seoul, Korea, an accomplishment that reflects her discipline, perseverance, and commitment to excellence.\n\nKara's reliability, attention to detail, and operational expertise make her an essential part of the agency's success and a trusted resource for both clients and her team.",
  },
  {
    name: "Chris Guillen",
    slug: "chris",
    title: "Director of Sales",
    location: "Temple, TX",
    image: "Chris Guillen.jpeg",
    phone: "254-549-8565",
    email: "ChrisGuillen@Allstate.com",
    bio: "Meet Chris Guillen, Director of Sales at Maxwell Financial Group. Chris leads the sales team with a hands-on approach, helping individuals and families find coverage for their auto, home, renters, flood, and specialty insurance needs. He focuses on understanding each client's unique situation and offering clear, practical options that protect what matters most.\n\nAs a leader, Chris is dedicated to mentoring his team, driving growth, and ensuring every customer receives the personalized attention they deserve. His approachable style and commitment to excellence set the tone for the entire sales department.\n\nOutside of work, Chris enjoys spending time with his family, playing golf, and cheering on both the Dallas Cowboys and the Texas Longhorns during football season. Chris' dedication to service and leadership make him a trusted resource for customers and team members across Texas.",
  },
  // Sales Team
  {
    name: "Brandon Foley",
    slug: "brandon",
    title: "Licensed Insurance Agent",
    location: "Corpus Christi, TX",
    image: "Brandon Foley.jpg",
    phone: "361-356-1063",
    email: "BFoley@Allstate.com",
    bio: "Brandon Foley is a licensed insurance agent with over 10 years of experience helping customers find coverage that fits their needs across auto, home, renters, flood, and specialty policies. He takes pride in offering clear guidance and dependable support, so clients feel confident and protected. Outside of work, Brandon enjoys spending time with his wife Katrina and daughter and unwinding with a round of golf. His steady, thoughtful approach makes him a trusted resource for customers navigating important insurance decisions.",
  },
  {
    name: "Jennifer Boggiano",
    slug: "jennifer",
    title: "Licensed Insurance Agent",
    location: "Corpus Christi, TX",
    image: "Jennifer Boggiano.jpg",
    phone: "361-470-2327",
    email: "JBoggiano@Allstate.com",
    bio: "Jennifer Boggiano is an experienced insurance professional with over 20 years in the industry, specializing in auto, homeowners, life, and commercial insurance. She enjoys helping customers feel confident and supported as they choose coverage that fits their lives. Outside of work, Jennifer values time with her family and loves getting lost in a good book. She is bilingual in English and Spanish, allowing her to serve a diverse range of clients.",
  },
  {
    name: "Natalia Fuentes",
    slug: "natalia",
    title: "Licensed Insurance Agent",
    location: "Temple, TX",
    image: "Natalia Fuentes.jpg",
    phone: "361-214-7339",
    email: "NataliaFuentes@Allstate.com",
    bio: "Natalia Fuentes is a licensed insurance agent who helps individuals and families find coverage for auto, home, renters, and motorcycle insurance. She is passionate about guiding customers through their options with care and clarity, helping them feel informed and confident in their decisions. Outside of work, Natalia is a proud mother who enjoys staying active, spending time with her children, and continuing to grow both personally and professionally. Her thoughtful, supportive approach helps customers feel heard and protected.",
  },
  // Customer Service Team
  {
    name: "Alayna Sudduth",
    slug: "alayna",
    title: "Insurance Professional",
    location: "Temple, TX",
    image: "Alayna Sudduth.jpg",
    phone: "361-541-6307",
    email: "AlaynaSudduth@Allstate.com",
    bio: "Meet Alayna Sudduth, a relationship-focused professional who brings energy and genuine care to every client interaction. With a background in the service industry, she understands the importance of listening, asking the right questions, and making sure every customer feels heard and valued. Alayna's goal is to help clients find the right coverage at a competitive rate while making the process simple and comfortable.\n\nOutside of the office, Alayna enjoys spending time outdoors riding ATVs at mud parks, reading under the stars, and making memories with her son and dog. She's also a proud fan of the Baylor Bears and the Denver Broncos.",
  },
  {
    name: "Angel Delgadillo",
    slug: "angel",
    title: "Insurance Professional",
    location: "Corpus Christi, TX",
    image: "Angel headshot.jpg",
    phone: "361-470-2167",
    email: "AngelDelgadillo@Allstate.com",
    bio: "Angel Delgadillo is an insurance professional known for his thoughtful approach and creativity. He focuses on helping clients feel comfortable and informed by breaking down coverage in a clear, relatable way. Outside of work, Angel enjoys spending time outdoors hiking and playing disc golf, as well as writing, gaming, and unwinding with his cat, Peanut. Angel's curiosity and steady, personable nature make him a trusted advisor who's ready to help in any way he can!",
  },
  {
    name: "Gina Oliva",
    slug: "gina",
    title: "Insurance Professional",
    location: "Corpus Christi, TX",
    image: "Gina headshot.jpg",
    phone: "361-298-3407",
    email: "GinaOliva@Allstate.com",
    bio: "Gina Oliva is a licensed insurance professional with over two decades of experience in the insurance industry. Gina specializes in helping clients secure comprehensive coverage solutions, including Auto, Homeowners, Renters, and Life insurance. As a proud mother of four and a lifelong resident of the Coastal Bend, Gina understands the importance of family, community, and reliable coverage. Known for her strong local knowledge and client-focused approach, Gina is committed to guiding individuals and families through their insurance decisions with clarity, care, and confidence.",
  },
  {
    name: "Haley Blackmon",
    slug: "haley",
    title: "Insurance Professional",
    location: "Temple, TX",
    image: "Haley Headshot.png",
    phone: "254-331-8251",
    email: "HBlackmon@Allstate.com",
    bio: "Haley Blackmon is a dedicated insurance professional who brings heart, creativity, and a genuine passion for helping others into everything she does. Haley enjoys building meaningful relationships with clients and takes pride in ensuring families are properly protected for what matters most. Outside of work, she is an animal lover who spends much of her free time with her six Australian Shepherds, as well as painting, practicing calligraphy, and enjoying board games with family. Her warmth, creativity, and genuine care make her a valued member of our team and a trusted resource for clients.",
  },
  {
    name: "Lola Flores",
    slug: "lola",
    title: "Insurance Professional",
    location: "Corpus Christi, TX",
    image: "Lola headshot.jpg",
    phone: "361-320-6640",
    email: "LolaFlores@Allstate.com",
    bio: "Lola Flores is a licensed insurance professional who helps customers navigate coverage questions and policy details with clarity and confidence. She enjoys breaking down complex information and making insurance easier to understand in everyday terms. Outside of work, Lola loves live music, attending concerts and local festivals, and spending time with her two sons. Her energetic personality and genuine love for connecting with people make every interaction a positive experience.",
  },
  {
    name: "Nicole Tafur",
    slug: "nicole",
    title: "Insurance Professional",
    location: "Corpus Christi, TX",
    image: "Nicole headshot.jpg",
    phone: "361-266-2343",
    email: "NTafur@Allstate.com",
    bio: "Nicole Tafur is a Licensed Agent who brings a clear, approachable style to helping clients understand and choose insurance coverage that fits their needs. She focuses on simplifying the process and providing guidance that helps clients feel confident in their decisions. Known for her warm and attentive approach, Nicole enjoys building lasting relationships with the people she serves. Outside of work, she values time with her family and enjoys being on the water boating and fishing.",
  },
  {
    name: "Salina Rodriguez",
    slug: "salina",
    title: "Insurance Professional",
    location: "Corpus Christi, TX",
    image: "Salina Headshot.png",
    phone: "361-730-1928",
    email: "SmRodriguez@Allstate.com",
    bio: "Salina Rodriguez is a knowledgeable insurance professional with nearly two decades of experience supporting customers through coverage questions and policy decisions. She is known for explaining insurance in a clear, practical way that helps customers feel comfortable and informed. Outside of work, Salina enjoys traveling, cheering on her favorite sports teams, and spending quality time with her family. Her calm, knowledgeable presence helps customers navigate insurance with confidence.",
  },
  {
    name: "Star Perry",
    slug: "star",
    title: "Insurance Professional",
    location: "Corpus Christi, TX",
    image: "Star headshot.jpg",
    phone: "361-494-5989",
    email: "StarPerry@Allstate.com",
    bio: "Star Perry brings a steady, reassuring presence to every client interaction, helping customers navigate insurance decisions with clarity and confidence. She focuses on simplifying complex coverage options and providing guidance that feels thoughtful and easy to understand. Star values building genuine relationships and supporting clients through important decisions. Originally from New Mexico, she carries an appreciation for the outdoors and a grounded perspective that shapes the way she connects with others.",
  },
];
