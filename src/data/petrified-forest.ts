import type { Park } from "@/types/park";

export const petrifiedForest: Park = {
  slug: "petrified-forest",
  name: "Petrified Forest",
  state: "Arizona",
  coordinates: { lat: 34.91, lng: -109.8068 },
  tagline: "A rainbow desert paved with 225-million-year-old stone trees.",
  established: "December 9, 1962",
  themeColor: "#9a4a25",
  heroImage:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Old_Bridge_in_Painted_Desert-_Petrified_Forest_National_Park_%2816589902487%29.jpg/3840px-Old_Bridge_in_Painted_Desert-_Petrified_Forest_National_Park_%2816589902487%29.jpg",
  heroCredit: "Andrew Kearns · CC BY 2.0 · Wikimedia Commons",
  tags: ["Desert", "Fossils", "Painted Desert", "Route 66", "Stargazing"],

  stats: [
    { label: "Established", value: "1962", note: "monument since 1906" },
    { label: "Area", value: "221,390 ac", note: "high Colorado Plateau" },
    { label: "Annual Visitors", value: "~590K", note: "right off I-40" },
    { label: "Highest Point", value: "6,235 ft", note: "Pilot Rock" },
    { label: "Fossil Age", value: "~225M yrs", note: "Late Triassic" },
    { label: "Wilderness", value: "50,260 ac", note: "an NPS first, 1970" },
  ],

  overview: [
    "Petrified Forest protects one of the world's largest and most colorful concentrations of petrified wood — fallen trees from a vanished Triassic floodplain, their every cell replaced by quartz until the logs turned to jeweled stone. Scattered across the badlands, they glitter in reds, purples, and golds that look almost too vivid to be real.",
    "But the wood is only half the story. The park straddles the Painted Desert, a vast expanse of banded, candy-striped hills, and preserves the longest surviving stretch of historic Route 66. Add 13,000 years of human history, world-class fossil beds, and some of the darkest night skies in the Southwest, and a place often mistaken for a quick roadside stop reveals itself as something far deeper.",
  ],

  history: [
    {
      year: "~225 M BCE",
      title: "A Triassic Floodplain",
      description:
        "Giant conifers fall and wash into a tropical river system, get buried in silt and volcanic ash, and slowly mineralize into solid quartz — the petrified wood seen today.",
    },
    {
      year: "1906",
      title: "Saved From the Souvenir Trade",
      description:
        "As wholesale looting and even dynamiting of petrified wood accelerates, President Theodore Roosevelt declares Petrified Forest a National Monument to protect it.",
    },
    {
      year: "1930s",
      title: "The Painted Desert Inn",
      description:
        "The Civilian Conservation Corps builds and refines the adobe-style Painted Desert Inn, now a National Historic Landmark overlooking the badlands.",
    },
    {
      year: "1962",
      title: "National Park Status",
      description:
        "Congress redesignates the monument as Petrified Forest National Park, recognizing its scientific and scenic value.",
    },
    {
      year: "1970",
      title: "A Wilderness First",
      description:
        "The park's backcountry becomes one of the very first designated wilderness areas in the National Park System.",
    },
    {
      year: "2004",
      title: "Doubling the Park",
      description:
        "Congress authorizes a major boundary expansion to protect additional fossil beds and archaeological sites surrounding the original park.",
    },
  ],

  indigenousHistory:
    "People have lived on this land for more than 13,000 years. By around 1300 CE, Ancestral Puebloans farmed here and built Puerco Pueblo, a 100-plus-room village beside the Puerco River. They left behind thousands of petroglyphs — including a solar calendar that marks the summer solstice, and the panels at Newspaper Rock. The Hopi, Zuni, Navajo, and other tribes trace ancestral ties to this landscape and its stories today.",

  funFacts: [
    "Petrified wood isn't wood at all anymore — it's quartz that replaced the original tissue cell by cell, preserving the grain in stone.",
    "Taking even a pebble is illegal. The park receives 'conscience letters' year-round from visitors mailing back pieces they swear brought them bad luck.",
    "A rusted 1932 Studebaker and a line of telephone poles mark where historic Route 66 once cut through the park.",
    "The Painted Desert's bands of color come from iron and manganese minerals in the ancient Chinle Formation.",
    "Its fossil beds preserve early dinosaurs, giant crocodile-like phytosaurs, and car-sized amphibians from the dawn of the dinosaur age.",
  ],

  wildlife: [
    {
      name: "Pronghorn",
      scientificName: "Antilocapra americana",
      status: "least-concern",
      blurb:
        "The fastest land animal in North America, clocking 55 mph across the open grasslands. Watch for small herds grazing the plateau near the park road.",
      bestSeason: "Year-round",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Pronghorn_Yellowstone.jpg/960px-Pronghorn_Yellowstone.jpg",
      imageCredit: "Thomas Wolf · CC BY-SA 3.0 · Wikimedia Commons",
    },
    {
      name: "Coyote",
      scientificName: "Canis latrans",
      status: "least-concern",
      blurb:
        "Endlessly adaptable, coyotes trot the badlands at dawn and dusk. Their yipping chorus is one of the classic sounds of a desert night.",
      bestSeason: "Year-round",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Coyote_portrait.jpg/960px-Coyote_portrait.jpg",
      imageCredit: "Christopher Bruno · CC BY-SA 3.0 · Wikimedia Commons",
    },
    {
      name: "Collared Lizard",
      scientificName: "Crotaphytus collaris",
      status: "least-concern",
      blurb:
        "A flash of turquoise on warm rocks. When startled, this lizard sprints away on its hind legs like a tiny dinosaur — fitting, in this park.",
      bestSeason: "Spring–Summer",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Crotaphytus_collaris_-_Wilhelma_01.jpg/960px-Crotaphytus_collaris_-_Wilhelma_01.jpg",
      imageCredit: "H. Zell · CC BY-SA 3.0 · Wikimedia Commons",
    },
    {
      name: "Golden Eagle",
      scientificName: "Aquila chrysaetos",
      status: "least-concern",
      blurb:
        "A master of the thermals rising off the mesas, hunting jackrabbits and prairie dogs with a wingspan over seven feet.",
      bestSeason: "Year-round",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg/960px-015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg",
      imageCredit: "Giles Laurent · CC BY-SA 4.0 · Wikimedia Commons",
    },
    {
      name: "Gunnison's Prairie Dog",
      scientificName: "Cynomys gunnisoni",
      status: "near-threatened",
      blurb:
        "A keystone of the grassland. Their burrow towns shelter dozens of other species, but disease and habitat loss have shrunk their range dramatically.",
      bestSeason: "Spring–Fall",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/7b/Gunnison%27s_prairie_dog%2C_sitting_up.jpg",
      imageCredit: "NPS · Public domain · Wikimedia Commons",
    },
    {
      name: "Black-tailed Jackrabbit",
      scientificName: "Lepus californicus",
      status: "least-concern",
      blurb:
        "Not a rabbit but a hare, with enormous ears that radiate heat to stay cool. It relies on explosive, zig-zagging speed to escape eagles and coyotes.",
      bestSeason: "Year-round",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Black-tailed_Jack_Rabbit_%28Lepus_californicus%29.jpg/960px-Black-tailed_Jack_Rabbit_%28Lepus_californicus%29.jpg",
      imageCredit: "Chuck Homler / Focus On Wildlife · CC BY-SA 4.0 · Wikimedia Commons",
    },
  ],

  safetyNotes: [
    {
      title: "No water, little shade",
      body: "This is high desert with almost no shade and no water sources on the trails. Carry far more water than feels necessary, wear sun protection, and avoid strenuous hikes during midday summer heat.",
    },
    {
      title: "Monsoon storms & flash floods",
      body: "July and August bring sudden, violent afternoon thunderstorms. Lightning is a real danger on exposed mesas, and dry washes can flood in minutes — never enter a wash when storms threaten.",
    },
    {
      title: "Leave every piece",
      body: "Removing petrified wood or any fossil or artifact is a federal crime. Beyond the law, each piece taken erodes the place a little more — admire it, photograph it, and leave it exactly where it lies.",
    },
  ],

  trails: [
    {
      name: "Blue Mesa Trail",
      difficulty: "moderate",
      distanceMi: 1.0,
      elevationGainFt: 100,
      estTime: "45 min",
      dogFriendly: true,
      highlight: "A loop descending into surreal blue-and-purple banded badlands.",
      elevationProfile: [5500, 5460, 5400, 5360, 5380, 5440, 5500],
    },
    {
      name: "Crystal Forest",
      difficulty: "easy",
      distanceMi: 0.75,
      elevationGainFt: 30,
      estTime: "30 min",
      dogFriendly: true,
      highlight: "A paved loop through one of the densest fields of petrified logs.",
      elevationProfile: [5420, 5430, 5440, 5435, 5425, 5420],
    },
    {
      name: "Giant Logs",
      difficulty: "easy",
      distanceMi: 0.4,
      elevationGainFt: 40,
      estTime: "20 min",
      dogFriendly: true,
      highlight: "Meet 'Old Faithful,' a 35-ft log nearly ten feet wide at its base.",
      elevationProfile: [5460, 5475, 5490, 5485, 5470, 5460],
    },
    {
      name: "Painted Desert Rim",
      difficulty: "easy",
      distanceMi: 1.0,
      elevationGainFt: 80,
      estTime: "40 min",
      dogFriendly: true,
      highlight: "Cliff-edge views over the candy-striped Painted Desert.",
      elevationProfile: [5800, 5820, 5840, 5835, 5815, 5800],
    },
    {
      name: "Long Logs & Agate House",
      difficulty: "moderate",
      distanceMi: 2.6,
      elevationGainFt: 150,
      estTime: "1.5 hrs",
      dogFriendly: true,
      highlight: "Ends at Agate House, an 8-room pueblo built entirely of petrified wood.",
      elevationProfile: [5440, 5470, 5500, 5520, 5500, 5470, 5440],
    },
    {
      name: "Onyx Bridge (off-trail)",
      difficulty: "hard",
      distanceMi: 4.0,
      elevationGainFt: 250,
      estTime: "3–4 hrs",
      dogFriendly: true,
      highlight: "A wilderness route across open badlands to a petrified-log bridge.",
      elevationProfile: [5650, 5560, 5480, 5420, 5460, 5540, 5650],
    },
  ],

  bestTime: [
    { month: "Jan", crowd: "low", highTempF: 47, lowTempF: 21, note: "Crisp, quiet days; occasional snow dusts the badlands." },
    { month: "Feb", crowd: "low", highTempF: 53, lowTempF: 25, note: "Cold mornings, mild afternoons, very few visitors." },
    { month: "Mar", crowd: "moderate", highTempF: 60, lowTempF: 30, note: "Spring break brings the first real crowds. Windy." },
    { month: "Apr", crowd: "moderate", highTempF: 68, lowTempF: 36, note: "Comfortable hiking weather — one of the best months." },
    { month: "May", crowd: "moderate", highTempF: 78, lowTempF: 44, note: "Warm and dry; ideal before summer heat sets in." },
    { month: "Jun", crowd: "high", highTempF: 89, lowTempF: 53, note: "Hot, dry, and busy. Hike early in the day." },
    { month: "Jul", crowd: "high", highTempF: 91, lowTempF: 60, note: "Peak heat and afternoon monsoon thunderstorms." },
    { month: "Aug", crowd: "high", highTempF: 88, lowTempF: 58, note: "Monsoon continues; dramatic skies, sudden downpours." },
    { month: "Sep", crowd: "moderate", highTempF: 82, lowTempF: 50, note: "Heat eases, crowds thin — a sweet spot for visiting." },
    { month: "Oct", crowd: "moderate", highTempF: 71, lowTempF: 38, note: "Clear, mild, and golden. Excellent for photography." },
    { month: "Nov", crowd: "low", highTempF: 57, lowTempF: 28, note: "Cool and calm as the season winds down." },
    { month: "Dec", crowd: "low", highTempF: 47, lowTempF: 21, note: "Brisk and serene; the park is at its most peaceful." },
  ],

  gettingThere: {
    nearestAirports: [
      { code: "FLG", name: "Flagstaff Pulliam", driveTime: "~2 hrs" },
      { code: "ABQ", name: "Albuquerque Intl", driveTime: "~3 hrs" },
      { code: "PHX", name: "Phoenix Sky Harbor", driveTime: "~3.5 hrs" },
    ],
    drivingFrom: [
      { city: "Flagstaff", time: "2 hrs", miles: 110 },
      { city: "Albuquerque", time: "3 hrs", miles: 200 },
      { city: "Phoenix", time: "3.5 hrs", miles: 210 },
      { city: "Las Vegas", time: "6.5 hrs", miles: 380 },
    ],
    entranceFee: "$25 per vehicle (7-day pass) · $15 per person on foot/bike",
    hours:
      "Open daily except December 25, but the park road has gates — roughly 8am–6pm with hours shifting seasonally. Plan to exit before closing.",
    cellSignal:
      "Limited. Some service near the visitor centers and along I-40; little to none in the backcountry. Download maps before arriving.",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Petrified+Forest+National+Park",
  },

  gallery: [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/f/f3/PetrifiedWood.jpg",
      alt: "Petrified logs scattered across the desert",
      credit: "Jon Sullivan · Public domain · Wikimedia Commons",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Painted_Desert_badlands_Tawa_Point.jpg/1920px-Painted_Desert_badlands_Tawa_Point.jpg",
      alt: "Banded hills of the Painted Desert from Tawa Point",
      credit: "Finetooth · CC BY-SA 3.0 · Wikimedia Commons",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/8/80/Blue_Mesa-Petrified_Forest_National_Park-Arizona1225.JPG",
      alt: "The blue badlands of Blue Mesa",
      credit: "Diego Delso · CC BY-SA 4.0 · Wikimedia Commons",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/The_PEFO_Tepees.jpg/1920px-The_PEFO_Tepees.jpg",
      alt: "The striped Tepees formations",
      credit: "Finetooth · CC BY-SA 3.0 · Wikimedia Commons",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Newspaper_Rock%2C_Petrified_Forest%2C_AZ.jpg/1920px-Newspaper_Rock%2C_Petrified_Forest%2C_AZ.jpg",
      alt: "Ancestral Puebloan petroglyphs at Newspaper Rock",
      credit: "Potok71 · CC BY-SA 4.0 · Wikimedia Commons",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Agate_Bridge_in_Petrified_Forest_NP.jpg/1920px-Agate_Bridge_in_Petrified_Forest_NP.jpg",
      alt: "Agate Bridge, a petrified log spanning a wash",
      credit: "Jon Zander (Digon3) · CC BY-SA 3.0 · Wikimedia Commons",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Route_66_car_petrified_forest.jpg/1920px-Route_66_car_petrified_forest.jpg",
      alt: "The historic Route 66 alignment marked by an old car",
      credit: "Finetooth · CC BY-SA 3.0 · Wikimedia Commons",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Painted_Desert_Inn_2013.JPG/1920px-Painted_Desert_Inn_2013.JPG",
      alt: "The historic Painted Desert Inn",
      credit: "TheCatalyst31 · CC BY-SA 3.0 · Wikimedia Commons",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Petrified_Forest_National_Park_pano_08_-_Jasper_Forest.jpg/1920px-Petrified_Forest_National_Park_pano_08_-_Jasper_Forest.jpg",
      alt: "Petrified logs strewn across Jasper Forest",
      credit: "Joe Mabel · CC BY-SA 4.0 · Wikimedia Commons",
    },
  ],
};
