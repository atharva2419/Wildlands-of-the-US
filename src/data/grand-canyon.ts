import type { Park } from "@/types/park";

export const grandCanyon: Park = {
  slug: "grand-canyon",
  name: "Grand Canyon",
  state: "Arizona",
  coordinates: { lat: 36.1069, lng: -112.1129 },
  tagline: "A mile-deep cathedral of stone, carved by a single relentless river.",
  established: "February 26, 1919",
  themeColor: "#b05a2f",
  heroImage:
    "https://upload.wikimedia.org/wikipedia/commons/c/c2/Grand_Canyon_South_Rim_at_Sunrise_2.jpg",
  heroCredit: "Jon Zander (Digon3) · CC BY-SA 3.0 · Wikimedia Commons",
  tags: ["Canyon", "Desert", "Stargazing", "Rafting", "World Heritage"],

  stats: [
    { label: "Established", value: "1919", note: "monument since 1908" },
    { label: "Area", value: "1.2M ac", note: "277 river miles" },
    { label: "Annual Visitors", value: "~4.7M", note: "2nd most visited" },
    { label: "Depth", value: "~6,000 ft", note: "over a mile deep" },
    { label: "Highest Point", value: "8,803 ft", note: "Point Imperial, N. Rim" },
    { label: "Oldest Rock", value: "~1.8B yrs", note: "Vishnu Schist" },
  ],

  overview: [
    "Some places impress you; the Grand Canyon rearranges your sense of scale. A mile deep, up to eighteen miles wide, and 277 river-miles long, it exposes nearly two billion years of Earth's history in bands of rose, ochre, and slate — a cross-section of deep time you can take in with a single glance.",
    "Most visitors meet it at the South Rim, open all year, where overlooks and a rim trail string together the classic views. The higher, forested North Rim — a thousand feet above and buried in snow much of the year — offers solitude for those willing to drive the extra hours. And far below both, the Colorado River still grinds away, carving the canyon a little deeper with every flood.",
  ],

  history: [
    {
      year: "~1.8 B BCE",
      title: "The Basement Rocks",
      description:
        "The Vishnu Schist at the canyon's bottom forms — rock nearly half as old as the Earth itself, later buried under layer upon layer of sediment.",
    },
    {
      year: "~5–6 M BCE",
      title: "The River Goes to Work",
      description:
        "The Colorado River establishes its course and begins slicing downward, exploiting uplift of the Colorado Plateau to carve the canyon we see today.",
    },
    {
      year: "1869",
      title: "Powell's Expedition",
      description:
        "One-armed Civil War veteran John Wesley Powell leads the first documented boat expedition through the canyon's rapids, mapping the last blank space on the U.S. map.",
    },
    {
      year: "1903",
      title: "Roosevelt's Plea",
      description:
        "Standing on the rim, President Theodore Roosevelt urges Americans to 'leave it as it is,' setting the stage for federal protection.",
    },
    {
      year: "1919",
      title: "National Park Established",
      description:
        "Three years after the founding of the National Park Service, Congress establishes Grand Canyon National Park.",
    },
    {
      year: "1979",
      title: "World Heritage Site",
      description:
        "UNESCO designates the Grand Canyon a World Heritage Site, recognizing its global geological and scenic significance.",
    },
  ],

  indigenousHistory:
    "Eleven tribes hold the Grand Canyon as ancestral and sacred ground. The Havasupai — 'people of the blue-green water' — have lived in and around the canyon for centuries and still reside at Supai village deep within it. The Hopi regard the canyon as the place of their emergence into this world; the Hualapai, Navajo, Zuni, Southern Paiute, and others maintain deep ties. Ancestral Puebloans farmed the rims and inner canyon over 800 years ago, leaving granaries and dwellings still visible today.",

  funFacts: [
    "Despite its depth, you won't find a single dinosaur fossil here — the canyon's rocks are far older than the dinosaurs.",
    "The canyon makes its own weather: it can be 70°F at the river while the rim sits below freezing.",
    "The North Rim is about 1,000 feet higher than the South Rim and closes each winter under heavy snow.",
    "Only a small fraction of visitors ever hike below the rim — most experience the canyon entirely from the top.",
    "The Colorado River drops roughly 2,000 feet through the park, churning up more than 160 named rapids.",
  ],

  wildlife: [
    {
      name: "California Condor",
      scientificName: "Gymnogyps californianus",
      status: "endangered",
      blurb:
        "North America's largest land bird, with a wingspan near 10 feet. Driven to just 22 individuals in the 1980s, condors were reintroduced nearby and now soar over the canyon — watch for numbered wing tags.",
      bestSeason: "Spring–Fall",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Californian_Condor_50_MC.jpg/960px-Californian_Condor_50_MC.jpg",
      imageCredit: "Christian Mehlführer · CC BY-SA 3.0 · Wikimedia Commons",
    },
    {
      name: "Elk",
      scientificName: "Cervus canadensis",
      status: "least-concern",
      blurb:
        "Often seen grazing the South Rim near the village, especially at dawn and dusk. Impressive and habituated — but give bulls a wide berth, particularly during the fall rut.",
      bestSeason: "Year-round",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Elk_in_Rocky_Mountain_National_Park.jpg/960px-Elk_in_Rocky_Mountain_National_Park.jpg",
      imageCredit: "Andrew Russell · CC BY 2.0 · Wikimedia Commons",
    },
    {
      name: "Mule Deer",
      scientificName: "Odocoileus hemionus",
      status: "least-concern",
      blurb:
        "Named for their large ears, mule deer browse the piñon-juniper of the rims and are the canyon's most commonly seen large mammal.",
      bestSeason: "Year-round",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Odocoileus_hemionus_%28Calibas%29.jpg/960px-Odocoileus_hemionus_%28Calibas%29.jpg",
      imageCredit: "Calibas · CC BY-SA 3.0 · Wikimedia Commons",
    },
    {
      name: "Desert Bighorn Sheep",
      scientificName: "Ovis canadensis nelsoni",
      status: "least-concern",
      blurb:
        "Perfectly at home on sheer canyon walls, bighorns navigate ledges that would stop any predator. Look for them on rocky slopes below the rims.",
      bestSeason: "Year-round",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Ovis_canadensis_nelsoni_183339570.jpg/960px-Ovis_canadensis_nelsoni_183339570.jpg",
      imageCredit: "Millie Basden · CC BY 4.0 · Wikimedia Commons",
    },
    {
      name: "Rock Squirrel",
      scientificName: "Otospermophilus variegatus",
      status: "least-concern",
      blurb:
        "Cute, bold, and statistically the park's most dangerous animal — it bites more visitors than anything else. Never feed it, no matter how convincing the begging.",
      bestSeason: "Spring–Fall",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/CA_Ground_Squirrel_on_rock.jpg/960px-CA_Ground_Squirrel_on_rock.jpg",
      imageCredit: "Holly Cheng · CC BY-SA 3.0 · Wikimedia Commons",
    },
    {
      name: "Ringtail",
      scientificName: "Bassariscus astutus",
      status: "least-concern",
      blurb:
        "Arizona's state mammal — a wide-eyed, raccoon-cousin with a boldly banded tail. Strictly nocturnal, it's a rare and magical sighting around inner-canyon camps.",
      bestSeason: "Year-round (nocturnal)",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Ringtail_cat_%28Bassariscus_astutus%29.jpg/960px-Ringtail_cat_%28Bassariscus_astutus%29.jpg",
      imageCredit: "Theo Kruse / Burgers' Zoo · CC BY-SA 4.0 · Wikimedia Commons",
    },
  ],

  safetyNotes: [
    {
      title: "Going down is optional — coming up is mandatory",
      body: "The hike out is far harder than the hike in, in rising heat and altitude. Do not attempt to reach the river and return in a single day. Turn around with plenty of energy and water to spare.",
    },
    {
      title: "Heat, water & salty food",
      body: "Inner-canyon temperatures can top 110°F in summer. Drink consistently and eat salty snacks — drinking lots of water without replacing salts can cause dangerous hyponatremia.",
    },
    {
      title: "Mind the edge",
      body: "Many viewpoints have no railings, and the rock can be loose. Stay back from the rim, keep a firm hold on children, and never back up while looking through a camera.",
    },
  ],

  trails: [
    {
      name: "Rim Trail",
      difficulty: "easy",
      distanceMi: 2.0,
      elevationGainFt: 200,
      estTime: "1–2 hrs",
      dogFriendly: true,
      highlight: "A mostly flat, partly paved stroll along the South Rim with shuttle stops — endless views, leashed pets welcome.",
      elevationProfile: [7000, 7010, 7020, 7015, 7005, 7000, 6995, 7000],
    },
    {
      name: "South Kaibab to Ooh Aah Point",
      difficulty: "moderate",
      distanceMi: 1.8,
      elevationGainFt: 600,
      estTime: "1.5–2 hrs",
      dogFriendly: false,
      highlight: "A short, steep drop to a jaw-dropping panorama — the fastest taste of the inner canyon. Carry water; there's none.",
      elevationProfile: [7200, 7050, 6900, 6760, 6900, 7050, 7200],
    },
    {
      name: "South Kaibab to Skeleton Point",
      difficulty: "hard",
      distanceMi: 6.0,
      elevationGainFt: 2040,
      estTime: "4–6 hrs",
      dogFriendly: false,
      highlight: "Your first view of the Colorado River far below, on the park's most scenic ridgeline descent.",
      elevationProfile: [7200, 6800, 6400, 6000, 5200, 6000, 6400, 6800, 7200],
    },
    {
      name: "Bright Angel to Havasupai Gardens",
      difficulty: "strenuous",
      distanceMi: 9.0,
      elevationGainFt: 3040,
      estTime: "6–9 hrs",
      dogFriendly: false,
      highlight: "A classic descent through shaded switchbacks to a green creekside oasis. A serious day hike — start at dawn.",
      elevationProfile: [6850, 6200, 5600, 5000, 3800, 5000, 5600, 6200, 6850],
    },
    {
      name: "Hermit Trail to Santa Maria Spring",
      difficulty: "hard",
      distanceMi: 5.0,
      elevationGainFt: 1680,
      estTime: "4–6 hrs",
      dogFriendly: false,
      highlight: "A rugged, quieter wilderness route off the beaten path, with a historic stone rest house at the turnaround.",
      elevationProfile: [6640, 6200, 5800, 5400, 4960, 5400, 5800, 6200, 6640],
    },
    {
      name: "North Kaibab to Coconino Overlook",
      difficulty: "moderate",
      distanceMi: 1.5,
      elevationGainFt: 800,
      estTime: "1.5 hrs",
      dogFriendly: false,
      highlight: "A short North Rim sampler through aspen and fir to a cliff-edge view — only reachable mid-May to mid-October.",
      elevationProfile: [8240, 8000, 7760, 7440, 7760, 8000, 8240],
    },
  ],

  camping: [
    {
      name: "Mather Campground",
      type: "Tent & RV",
      sites: "327 sites",
      booking: "Reservation",
      season: "Year-round",
      fee: "$18–30 / night",
      location: "Grand Canyon Village, South Rim",
      elevation: "6,900 ft",
      highlight: "The main South Rim campground, walkable to the rim and shuttle stops. No hookups. Books months ahead in summer.",
      reserveUrl: "https://www.recreation.gov/search?q=Mather+Campground+Grand+Canyon",
    },
    {
      name: "Desert View Campground",
      type: "Tent & RV",
      sites: "50 sites",
      booking: "Reservation",
      season: "Apr–Oct",
      fee: "$18 / night",
      location: "Desert View, East South Rim",
      elevation: "7,400 ft",
      highlight: "Smaller and quieter, near the historic Watchtower and 25 miles east of the village crowds.",
      reserveUrl: "https://www.recreation.gov/search?q=Desert+View+Campground+Grand+Canyon",
    },
    {
      name: "Trailer Village RV Park",
      type: "RV",
      sites: "Full hookups",
      booking: "Reservation",
      season: "Year-round",
      fee: "From ~$70 / night",
      location: "Grand Canyon Village, South Rim",
      elevation: "6,900 ft",
      highlight: "The only South Rim campground with full RV hookups, right beside Mather.",
      reserveUrl: "https://www.recreation.gov/search?q=Trailer+Village+Grand+Canyon",
    },
    {
      name: "North Rim Campground",
      type: "Tent & RV",
      sites: "90 sites",
      booking: "Reservation",
      season: "May–Oct",
      fee: "$18–25 / night",
      location: "North Rim",
      elevation: "8,200 ft",
      highlight: "Cool, forested, and far from the crowds — some sites perch near the canyon edge. Seasonal only.",
      reserveUrl: "https://www.recreation.gov/search?q=North+Rim+Campground+Grand+Canyon",
    },
    {
      name: "Bright Angel Campground",
      type: "Backcountry",
      sites: "Permit only",
      booking: "Permit",
      season: "Year-round",
      fee: "Permit fee",
      location: "Canyon bottom, by the Colorado River",
      elevation: "2,480 ft",
      highlight: "Sleep beside the river at the bottom of the canyon, near Phantom Ranch. Requires a coveted backcountry permit.",
      reserveUrl: "https://www.nps.gov/grca/planyourvisit/backcountry-permit.htm",
    },
    {
      name: "Havasupai Gardens Campground",
      type: "Backcountry",
      sites: "Permit only",
      booking: "Permit",
      season: "Year-round",
      fee: "Permit fee",
      location: "Bright Angel Trail, mid-canyon",
      elevation: "3,800 ft",
      highlight: "A shaded creekside camp halfway down the Bright Angel Trail — a popular first night below the rim.",
      reserveUrl: "https://www.nps.gov/grca/planyourvisit/backcountry-permit.htm",
    },
  ],
  campingNote:
    "Rim campgrounds book out months in advance for summer, and the North Rim is open only mid-May to mid-October. Camping below the rim (Bright Angel and Havasupai Gardens) requires a backcountry permit that is in high demand — apply early.",

  bestTime: [
    { month: "Jan", crowd: "low", highTempF: 41, lowTempF: 18, note: "Snowy, serene South Rim. North Rim closed." },
    { month: "Feb", crowd: "low", highTempF: 45, lowTempF: 21, note: "Cold and quiet; crisp clear views." },
    { month: "Mar", crowd: "moderate", highTempF: 51, lowTempF: 25, note: "Spring break crowds build; chilly mornings." },
    { month: "Apr", crowd: "moderate", highTempF: 60, lowTempF: 32, note: "Pleasant rim weather — a great time to hike." },
    { month: "May", crowd: "high", highTempF: 70, lowTempF: 39, note: "North Rim reopens mid-month; ideal conditions." },
    { month: "Jun", crowd: "high", highTempF: 81, lowTempF: 47, note: "Hot inner canyon, busy rims, dry and clear." },
    { month: "Jul", crowd: "high", highTempF: 84, lowTempF: 54, note: "Peak crowds and dramatic monsoon thunderstorms." },
    { month: "Aug", crowd: "high", highTempF: 82, lowTempF: 53, note: "Monsoon continues; lightning over the canyon." },
    { month: "Sep", crowd: "moderate", highTempF: 76, lowTempF: 47, note: "Crowds ease, weather stays excellent." },
    { month: "Oct", crowd: "moderate", highTempF: 65, lowTempF: 36, note: "Golden, crisp days. North Rim closes mid-month." },
    { month: "Nov", crowd: "low", highTempF: 52, lowTempF: 27, note: "Quiet shoulder season; first snows possible." },
    { month: "Dec", crowd: "low", highTempF: 43, lowTempF: 20, note: "Winter calm; snow-rimmed overlooks." },
  ],

  gettingThere: {
    nearestAirports: [
      { code: "FLG", name: "Flagstaff Pulliam", driveTime: "~1.5 hrs" },
      { code: "PHX", name: "Phoenix Sky Harbor", driveTime: "~3.5 hrs" },
      { code: "LAS", name: "Las Vegas Harry Reid", driveTime: "~4.5 hrs" },
    ],
    drivingFrom: [
      { city: "Flagstaff", time: "1.5 hrs", miles: 80 },
      { city: "Sedona", time: "2.5 hrs", miles: 115 },
      { city: "Phoenix", time: "3.5 hrs", miles: 230 },
      { city: "Las Vegas", time: "4.5 hrs", miles: 275 },
    ],
    entranceFee: "$35 per vehicle (7-day pass) · $20 per person on foot/bike",
    hours:
      "South Rim open 24/7, year-round. North Rim is seasonal, roughly mid-May through mid-October (closed by snow in winter).",
    cellSignal:
      "Limited. Some service in Grand Canyon Village; little to none below the rim or at the North Rim. Download maps in advance.",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Grand+Canyon+National+Park+South+Rim",
  },

  gallery: [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Grand_Canyon_South_Rim_at_Sunset.jpg/1920px-Grand_Canyon_South_Rim_at_Sunset.jpg",
      alt: "The South Rim glowing at sunset",
      credit: "Mgimelfarb · CC0 · Wikimedia Commons",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Grand_Canyon_Hopi_Point_with_rainbow_2013.jpg/1920px-Grand_Canyon_Hopi_Point_with_rainbow_2013.jpg",
      alt: "A rainbow over the canyon from Hopi Point",
      credit: "Tuxyso · CC BY-SA 3.0 · Wikimedia Commons",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Grand_Canyon_%28Arizona%2C_USA%29%2C_South_Rim_nahe_Tusayan_--_2012_--_5848.jpg/1920px-Grand_Canyon_%28Arizona%2C_USA%29%2C_South_Rim_nahe_Tusayan_--_2012_--_5848.jpg",
      alt: "Layered cliffs and buttes of the South Rim",
      credit: "Dietmar Rabich · CC BY-SA 4.0 · Wikimedia Commons",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Grand_Canyon_%28Arizona%2C_USA%29%2C_South_Rim_nahe_Tusayan_--_2012_--_6040.jpg/1920px-Grand_Canyon_%28Arizona%2C_USA%29%2C_South_Rim_nahe_Tusayan_--_2012_--_6040.jpg",
      alt: "Sunset light flooding the canyon walls",
      credit: "Dietmar Rabich · CC BY-SA 4.0 · Wikimedia Commons",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/USA_09847_Grand_Canyon_Luca_Galuzzi_2007.jpg/1920px-USA_09847_Grand_Canyon_Luca_Galuzzi_2007.jpg",
      alt: "Buttes and side canyons in afternoon light",
      credit: "Luca Galuzzi · CC BY-SA 2.5 · Wikimedia Commons",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Le_Grand_Canyon_2016_Desert_View_Watchtower_%286%29.JPG/1920px-Le_Grand_Canyon_2016_Desert_View_Watchtower_%286%29.JPG",
      alt: "The historic Desert View Watchtower",
      credit: "Pierre André · CC BY-SA 4.0 · Wikimedia Commons",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Grand_Canyon_Powell_Point_Evening_Light_2013.jpg/1920px-Grand_Canyon_Powell_Point_Evening_Light_2013.jpg",
      alt: "Evening light from Powell Point",
      credit: "Tuxyso · CC BY-SA 3.0 · Wikimedia Commons",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Grand_Canyon_Winter_Snow_from_Yavapai_Point_%285456736287%29.jpg/1920px-Grand_Canyon_Winter_Snow_from_Yavapai_Point_%285456736287%29.jpg",
      alt: "Snow dusting the South Rim in winter from Yavapai Point",
      credit: "Grand Canyon NPS · Public domain · Wikimedia Commons",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Rafting_the_Colorado_River._Grand_Canyon_National_Park%2C_Arizona_%2826383483155%29.jpg/1920px-Rafting_the_Colorado_River._Grand_Canyon_National_Park%2C_Arizona_%2826383483155%29.jpg",
      alt: "Rafting the rapids of the Colorado River",
      credit: "Paxson Woelber · CC BY 2.0 · Wikimedia Commons",
    },
  ],
};
