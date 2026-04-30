import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const locations = {
  temple: {
    city: "Temple",
    address: "201 Clinite Grove Blvd Ste 110, Temple, TX 76502",
    region: "Central Texas",
    county: "Bell County",
    risks: ["hail storms", "tornadoes", "severe thunderstorms", "flash flooding"],
    keywords: ["Temple TX insurance", "Central Texas insurance", "Bell County coverage"]
  },
  corpusChristi: {
    city: "Corpus Christi",
    address: "3837 S Padre Island Dr, Corpus Christi, TX 78415",
    region: "Coastal Texas",
    county: "Nueces County",
    risks: ["hurricanes", "tropical storms", "coastal flooding", "wind damage"],
    keywords: ["Corpus Christi insurance", "Coastal Texas coverage", "Nueces County insurance"]
  }
};

const productPrompts: Record<string, string> = {
  "Auto Insurance": `Write SEO-optimized content for Auto Insurance covering:
- Texas state minimum requirements and full coverage options
- Specific risks in Central Texas (hail damage in Temple area) and Coastal Texas (hurricane debris in Corpus Christi)
- Benefits of local agents who understand Texas driving conditions
- Include keywords: Temple TX auto insurance, Corpus Christi car insurance, Texas liability coverage`,

  "Home Insurance": `Write SEO-optimized content for Home Insurance covering:
- Protection for Texas homes from regional weather threats
- Temple area: hail, tornadoes, severe storms (Bell County)
- Corpus Christi area: hurricanes, wind damage, coastal flooding (Nueces County)
- Benefits of family-owned agency with local market knowledge
- Include keywords: Temple TX homeowners insurance, Corpus Christi home coverage`,

  "Renters Insurance": `Write SEO-optimized content for Renters Insurance covering:
- Affordable coverage for Texas renters starting at $5/month
- Protection for belongings from theft, fire, and Texas weather
- Liability coverage importance for apartment dwellers
- Serving renters in Temple, Corpus Christi, and all of Texas`,

  "Life Insurance": `Write SEO-optimized content for Life Insurance covering:
- Term, whole, and universal life options for Texas families
- Protecting families in Bell County and Nueces County
- Legacy planning with a fourth-generation family agency
- Financial security for loved ones across Texas`,

  "Business Insurance": `Write SEO-optimized content for Business Insurance covering:
- General liability, commercial auto, workers' comp for Texas businesses
- Industry-specific coverage for Temple and Corpus Christi businesses
- Protection for small businesses and growing enterprises
- Local expertise in Texas commercial insurance requirements`,

  "Flood & Storm Coverage": `Write SEO-optimized content for Flood & Storm Coverage covering:
- Critical protection for Coastal Texas (Corpus Christi, Gulf Coast)
- Inland flood protection for Temple and Central Texas
- FEMA flood zones and insurance requirements
- Don't wait until hurricane season - prepare now`,

  "Motorcycle & Boat": `Write SEO-optimized content for Motorcycle & Boat Insurance covering:
- Texas motorcycle coverage for highway and city riding
- Boat insurance for Gulf Coast waters near Corpus Christi
- Lake coverage for Central Texas recreational boating
- Adventure protection from a family-owned Texas agency`,

  "Umbrella Policies": `Write SEO-optimized content for Umbrella Insurance covering:
- Extended liability beyond auto and home limits
- Protecting Texas families' assets and future earnings
- Affordable additional coverage from local experts
- Peace of mind for families in Temple and Corpus Christi`
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { productType } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const productPrompt = productPrompts[productType];
    if (!productPrompt) {
      throw new Error(`Unknown product type: ${productType}`);
    }

    const systemPrompt = `You are an expert SEO copywriter for Maxwell Insurance, a fourth-generation, family-owned insurance agency in Texas with 30+ years of experience.

Locations:
- Temple Office: ${locations.temple.address} (${locations.temple.region}, ${locations.temple.county})
- Corpus Christi Office: ${locations.corpusChristi.address} (${locations.corpusChristi.region}, ${locations.corpusChristi.county})

Writing guidelines:
- Warm, professional, trustworthy tone
- Include local Texas keywords naturally
- Reference specific regional risks when relevant
- Keep descriptions concise: 2-3 sentences for short version, 4-5 sentences for detailed version
- Highlight the benefits of working with a local, family-owned agency
- Use action-oriented language

Return a JSON object with exactly these fields:
{
  "shortDescription": "2-3 sentence SEO-optimized description for product cards",
  "detailedDescription": "4-5 sentence expanded description with more local keywords",
  "localKeywords": ["array", "of", "5-7", "SEO", "keywords"]
}`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: productPrompt }
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required. Please add funds to your workspace." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("No content received from AI");
    }

    // Parse the JSON response from the AI
    let parsedContent;
    try {
      // Extract JSON from potential markdown code blocks
      const jsonMatch = content.match(/```json\s*([\s\S]*?)\s*```/) || content.match(/```\s*([\s\S]*?)\s*```/);
      const jsonStr = jsonMatch ? jsonMatch[1] : content;
      parsedContent = JSON.parse(jsonStr.trim());
    } catch (parseError) {
      console.error("Failed to parse AI response:", content);
      // Fallback to returning the raw content
      parsedContent = {
        shortDescription: content.substring(0, 200),
        detailedDescription: content,
        localKeywords: []
      };
    }

    return new Response(JSON.stringify({
      productType,
      ...parsedContent,
      locations: {
        temple: locations.temple,
        corpusChristi: locations.corpusChristi
      }
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error generating product content:", error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : "Unknown error" 
    }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
