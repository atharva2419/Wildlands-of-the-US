import type { Park } from "@/types/park";

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const yosemite: Park = {
  slug: "yosemite",
  name: "Yosemite",
  state: "California",
  coordinates: { lat: 37.8651, lng: -119.5383 },
  tagline: "Granite cathedrals, thundering falls, and a thousand-year silence.",
  established: "October 1, 1890",
  themeColor: "#3f6b44",
  heroImage: u("1516233758813-a38d024919c5", 2400),
  tags: ["Mountain", "Waterfalls", "Stargazing", "Rock Climbing", "Old Growth"],

  stats: [
    { label: "Established", value: "1890", note: "3rd U.S. national park" },
    { label: "Area", value: "759,620 ac", note: "larger than Rhode Island" },
    { label: "Annual Visitors", value: "~3.9M", note: "among the top 10" },
    { label: "Highest Point", value: "13,114 ft", note: "Mount Lyell" },
    { label: "Waterfalls", value: "25+", note: "Yosemite Falls: 2,425 ft" },
    { label: "Designated Wilderness", value: "95%", note: "of total park area" },
  ],

  overview: [
    "Carved by ancient glaciers and framed by sheer granite walls, Yosemite is the park that taught a young nation what wilderness was worth protecting. Its valley floor — barely seven square miles — holds some of the most photographed scenery on Earth: the sheer face of El Capitan, the cleaved dome of Half Dome, and waterfalls that fall further than any in North America.",
    "But the valley is only the prologue. Beyond it lie the high meadows of Tuolumne, groves of giant sequoias older than the Roman Empire, and 750,000 acres of backcountry where a hiker can walk for days without crossing a road.",
  ],

  history: [
    {
      year: "1864",
      title: "The Yosemite Grant",
      description:
        "President Lincoln signs the Yosemite Grant Act, protecting Yosemite Valley and the Mariposa Grove — the first time the U.S. government set aside land purely for preservation and public use.",
    },
    {
      year: "1868",
      title: "John Muir Arrives",
      description:
        "A young John Muir walks into the valley and never really leaves. His writing turns Yosemite into a national cause and helps invent the idea of the wilderness preserve.",
    },
    {
      year: "1890",
      title: "National Park Established",
      description:
        "Largely through Muir's advocacy, Congress establishes Yosemite National Park, protecting the high country surrounding the valley.",
    },
    {
      year: "1903",
      title: "Roosevelt & Muir Camp Out",
      description:
        "Muir and President Theodore Roosevelt spend three nights camping in the backcountry. The trip shapes Roosevelt's conservation policy for the rest of his presidency.",
    },
    {
      year: "1916",
      title: "Into the National Park Service",
      description:
        "Yosemite becomes part of the newly created National Park Service, formalizing the stewardship it still operates under today.",
    },
  ],

  indigenousHistory:
    "For at least 8,000 years before it was a 'park,' Yosemite Valley was home to the Ahwahnechee people, who called the valley Ahwahnee — 'place of the gaping mouth.' Their land management, including controlled burns that kept the valley's meadows open, shaped the very landscape early visitors mistook for untouched wilderness. The Southern Sierra Miwuk and other tribes maintain deep ties to the region today.",

  funFacts: [
    "El Capitan's sheer wall rises ~3,000 ft — roughly twice the height of the Empire State Building.",
    "Yosemite Falls is the tallest waterfall in North America at 2,425 feet.",
    "On rare clear February evenings, sunset light sets Horsetail Fall glowing like lava — the famous 'Firefall.'",
    "Some giant sequoias in the Mariposa Grove are over 2,000 years old.",
    "Yosemite was the inspiration for the U.S. national park idea that spread worldwide.",
  ],

  wildlife: [
    {
      name: "American Black Bear",
      scientificName: "Ursus americanus",
      status: "least-concern",
      blurb:
        "Yosemite's black bears are often cinnamon-brown, not black. Roughly 300–500 roam the park; you'll most likely spot one foraging in meadows at dawn or dusk.",
      bestSeason: "Spring–Fall",
      image: u("1589656966895-2f33e7653819", 800),
    },
    {
      name: "Mule Deer",
      scientificName: "Odocoileus hemionus",
      status: "least-concern",
      blurb:
        "Named for their large, mule-like ears. The most commonly seen large mammal, grazing the valley meadows in early morning and evening.",
      bestSeason: "Year-round",
      image: u("1484406566174-9da000fda645", 800),
    },
    {
      name: "Sierra Nevada Bighorn Sheep",
      scientificName: "Ovis canadensis sierrae",
      status: "endangered",
      blurb:
        "One of the rarest mammals in North America. Reintroduced to the park's high country, fewer than 600 survive in the entire Sierra Nevada.",
      bestSeason: "Summer (high country)",
      image: u("1551316679-9c6ae9dec224", 800),
    },
    {
      name: "Peregrine Falcon",
      scientificName: "Falco peregrinus",
      status: "recovering",
      blurb:
        "The fastest animal on Earth, diving at over 200 mph. Nests on Yosemite's cliff faces — climbing routes are sometimes closed to protect them.",
      bestSeason: "Spring–Summer",
      image: u("1552728089-57bdde30beb3", 800),
    },
    {
      name: "Bobcat",
      scientificName: "Lynx rufus",
      status: "least-concern",
      blurb:
        "Elusive and mostly solitary, bobcats hunt rodents and rabbits across the valley. Lucky visitors glimpse one slipping through meadow grass at dusk.",
      bestSeason: "Year-round",
      image: u("1605904033296-c5b1f0a4e8d1", 800),
    },
    {
      name: "Great Gray Owl",
      scientificName: "Strix nebulosa",
      status: "vulnerable",
      blurb:
        "North America's tallest owl. Yosemite hosts a genetically distinct population — perhaps only 200–300 birds — found in mountain meadows.",
      bestSeason: "Spring–Fall",
      image: u("1543549790-8b5f4a028cfb", 800),
    },
  ],

  safetyNotes: [
    {
      title: "If you encounter a black bear",
      body: "Never run. Stay calm, make yourself look big, make noise, and back away slowly. Store all food in bear lockers or canisters — a bear that gets human food often has to be euthanized. Keep at least 50 yards away.",
    },
    {
      title: "Water crossings & waterfalls",
      body: "Rocks near waterfalls and rivers are deceptively slick. Stay behind railings — most park fatalities involve water. Spring snowmelt makes currents far stronger than they look.",
    },
    {
      title: "Altitude & heat",
      body: "Tuolumne and the high country sit above 8,000 ft; ascend gradually and hydrate. The valley can exceed 95°F in summer — carry more water than you think you need.",
    },
  ],

  trails: [
    {
      name: "Mist Trail to Vernal Fall",
      difficulty: "moderate",
      distanceMi: 3.0,
      elevationGainFt: 1000,
      estTime: "3–4 hrs",
      dogFriendly: false,
      highlight: "Climb a granite staircase through the spray of a 317-ft waterfall.",
      elevationProfile: [4000, 4150, 4400, 4650, 4900, 5000, 4650, 4150, 4000],
    },
    {
      name: "Half Dome via Cables",
      difficulty: "strenuous",
      distanceMi: 16.0,
      elevationGainFt: 4800,
      estTime: "10–14 hrs",
      dogFriendly: false,
      highlight: "The legendary cable ascent up bare granite to an 8,800-ft summit. Permit required.",
      elevationProfile: [4000, 5000, 6000, 6800, 7400, 8000, 8800, 6000, 4000],
    },
    {
      name: "Lower Yosemite Fall Loop",
      difficulty: "easy",
      distanceMi: 1.0,
      elevationGainFt: 50,
      estTime: "30 min",
      dogFriendly: false,
      highlight: "A flat, paved loop to the base of North America's tallest waterfall.",
      elevationProfile: [3950, 3970, 3990, 4000, 3990, 3970, 3950],
    },
    {
      name: "Glacier Point Trail",
      difficulty: "easy",
      distanceMi: 0.6,
      elevationGainFt: 100,
      estTime: "30 min",
      dogFriendly: false,
      highlight: "A short walk to a 3,200-ft overlook above the valley — sunset and stargazing favorite.",
      elevationProfile: [7200, 7180, 7150, 7180, 7214],
    },
    {
      name: "Cathedral Lakes",
      difficulty: "hard",
      distanceMi: 7.0,
      elevationGainFt: 1000,
      estTime: "4–6 hrs",
      dogFriendly: false,
      highlight: "A Tuolumne high-country classic to alpine lakes beneath Cathedral Peak.",
      elevationProfile: [8600, 8900, 9200, 9400, 9500, 9400, 9200, 8900, 8600],
    },
  ],

  bestTime: [
    { month: "Jan", crowd: "low", highTempF: 49, lowTempF: 28, note: "Snow-dusted valley, fewest crowds. Tioga Rd closed." },
    { month: "Feb", crowd: "moderate", highTempF: 55, lowTempF: 30, note: "Possible 'Firefall' on Horsetail Fall at sunset." },
    { month: "Mar", crowd: "moderate", highTempF: 59, lowTempF: 33, note: "Waterfalls begin to swell with snowmelt." },
    { month: "Apr", crowd: "moderate", highTempF: 65, lowTempF: 37, note: "Waterfalls near peak; dogwoods bloom." },
    { month: "May", crowd: "high", highTempF: 73, lowTempF: 42, note: "Peak waterfall season — and rising crowds." },
    { month: "Jun", crowd: "high", highTempF: 82, lowTempF: 48, note: "Tioga Rd usually opens; high country thaws." },
    { month: "Jul", crowd: "high", highTempF: 90, lowTempF: 54, note: "Hot valley, perfect high country. Busiest month." },
    { month: "Aug", crowd: "high", highTempF: 90, lowTempF: 53, note: "Warm, dry, ideal for Tuolumne hikes." },
    { month: "Sep", crowd: "moderate", highTempF: 87, lowTempF: 47, note: "Crowds thin, weather still excellent." },
    { month: "Oct", crowd: "moderate", highTempF: 74, lowTempF: 39, note: "Golden cottonwoods, crisp air. A local favorite." },
    { month: "Nov", crowd: "low", highTempF: 58, lowTempF: 32, note: "Quiet shoulder season; first snows arrive." },
    { month: "Dec", crowd: "low", highTempF: 49, lowTempF: 28, note: "Winter calm; Badger Pass ski area opens." },
  ],

  gettingThere: {
    nearestAirports: [
      { code: "FAT", name: "Fresno Yosemite Intl", driveTime: "~2.5 hrs" },
      { code: "OAK", name: "Oakland Intl", driveTime: "~4 hrs" },
      { code: "SFO", name: "San Francisco Intl", driveTime: "~4 hrs" },
    ],
    drivingFrom: [
      { city: "San Francisco", time: "4 hrs", miles: 195 },
      { city: "Sacramento", time: "3.5 hrs", miles: 175 },
      { city: "Los Angeles", time: "6 hrs", miles: 280 },
      { city: "Las Vegas", time: "8 hrs", miles: 400 },
    ],
    entranceFee: "$35 per vehicle (7-day pass) · $20 per person on foot/bike",
    hours: "Open year-round, 24 hours. Some roads close seasonally for snow.",
    cellSignal:
      "Spotty to none in most of the park. Limited service in Yosemite Village; download offline maps before you arrive.",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Yosemite+National+Park",
  },

  gallery: [
    { src: u("1516233758813-a38d024919c5"), alt: "Granite cliffs of Yosemite Valley at dusk", credit: "Unsplash" },
    { src: u("1433086966358-54859d0ed716"), alt: "A long waterfall cascading down a forested cliff", credit: "Unsplash" },
    { src: u("1469474968028-56623f02e42e"), alt: "Sun breaking over a forested mountain range", credit: "Unsplash" },
    { src: u("1426604966848-d7adac402bff"), alt: "A wide green valley framed by mountains", credit: "Unsplash" },
    { src: u("1506905925346-21bda4d32df4"), alt: "Alpine lake reflecting snowy peaks", credit: "Unsplash" },
    { src: u("1470071459604-3b5ec3a7fe05"), alt: "Mist drifting through an evergreen forest", credit: "Unsplash" },
    { src: u("1441974231531-c6227db76b6e"), alt: "Sunlight filtering through tall forest trees", credit: "Unsplash" },
    { src: u("1454496522488-7a8e488e8606"), alt: "Starry night sky above mountain silhouettes", credit: "Unsplash" },
  ],
};
