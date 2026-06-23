import type { Park } from "@/types/park";

export const joshuaTree: Park = {
  slug: "joshua-tree",
  name: "Joshua Tree",
  state: "California",
  coordinates: { lat: 33.8734, lng: -115.901 },
  tagline: "Where two deserts meet, granite glows, and the night sky comes alive.",
  established: "October 31, 1994",
  themeColor: "#6b5f87",
  heroImage:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Lost_Palms_Sunset_-_Joshua_Tree_National_Park_%2825535938566%29.jpg/3840px-Lost_Palms_Sunset_-_Joshua_Tree_National_Park_%2825535938566%29.jpg",
  heroCredit: "Tony Webster · CC BY-SA 2.0 · Wikimedia Commons",
  tags: ["Desert", "Stargazing", "Rock Climbing", "Dark Sky", "Two Deserts"],

  stats: [
    { label: "Established", value: "1994", note: "monument since 1936" },
    { label: "Area", value: "795,156 ac", note: "two deserts meet" },
    { label: "Annual Visitors", value: "~3M", note: "among the top 10" },
    { label: "Highest Point", value: "5,814 ft", note: "Quail Mountain" },
    { label: "Night Skies", value: "Dark Sky Park", note: "designated 2017" },
    { label: "Climbing Routes", value: "8,000+", note: "world-class bouldering" },
  ],

  overview: [
    "Joshua Tree is a park of thresholds — the place where the high Mojave Desert grades into the low Colorado Desert, and where the ordinary rules of the desert seem suspended. Across the higher western half stand the park's namesake: the Joshua tree, a spiky, Seuss-like yucca that grows wild almost nowhere else on Earth, its arms thrown up against the sky.",
    "Between the trees rise mountains of golden monzogranite, weathered into rounded boulders and improbable arches that draw rock climbers from around the world. By day it's a landscape of stone and spine; by night, far from city light, it becomes one of Southern California's darkest skies — a ceiling of stars that has made the park a pilgrimage for stargazers.",
  ],

  history: [
    {
      year: "~A.D. 1",
      title: "Desert Dwellers",
      description:
        "The Pinto Culture — among the earliest known peoples of the Southwest — and later the Serrano, Cahuilla, Chemehuevi, and Mojave live and travel through the region, leaving petroglyphs and bedrock mortars.",
    },
    {
      year: "1850s",
      title: "A Prophet's Name",
      description:
        "Mormon emigrants crossing the Mojave reportedly name the yucca the 'Joshua tree,' seeing the biblical prophet beckoning them westward with upraised arms.",
    },
    {
      year: "1936",
      title: "Minerva Hoyt's Monument",
      description:
        "After Pasadena activist Minerva Hoyt campaigns to stop the wholesale stripping of desert plants, President Franklin Roosevelt declares Joshua Tree National Monument.",
    },
    {
      year: "1976",
      title: "Wilderness Protection",
      description:
        "Congress designates vast portions of the monument as wilderness, protecting the backcountry from development.",
    },
    {
      year: "1994",
      title: "National Park Status",
      description:
        "The California Desert Protection Act elevates Joshua Tree to a National Park and restores acreage that had been removed for mining decades earlier.",
    },
    {
      year: "2017",
      title: "Dark Sky Park",
      description:
        "Joshua Tree is certified an International Dark Sky Park, recognizing — and committing to protect — its exceptional night skies.",
    },
  ],

  indigenousHistory:
    "Humans have lived in this desert for thousands of years, beginning with the Pinto Culture who hunted and gathered along an ancient river when the climate was wetter. Later the Serrano, Cahuilla, Chemehuevi, and Mojave peoples moved seasonally through the land, harvesting piñon nuts, mesquite, and cactus fruit and tending the fan-palm oases. They left behind petroglyphs and pictographs — like those near Barker Dam — and bedrock mortars worn into the granite where seeds were ground. Their descendants remain connected to this landscape today.",

  funFacts: [
    "The Joshua tree isn't a tree or a cactus — it's a giant yucca, and it depends entirely on the yucca moth, its only pollinator, to reproduce.",
    "The park straddles two deserts: the higher, cooler Mojave (where Joshua trees grow) and the lower, hotter Colorado (cholla, ocotillo, and creosote).",
    "Its golden monzogranite boulders make Joshua Tree one of the world's premier rock-climbing and bouldering destinations, with over 8,000 routes.",
    "Hidden fan-palm oases — fed by faults that force groundwater to the surface — shelter the only palm tree native to California.",
    "As an International Dark Sky Park, it offers some of the starriest night skies within a few hours of Los Angeles.",
  ],

  wildlife: [
    {
      name: "Desert Bighorn Sheep",
      scientificName: "Ovis canadensis nelsoni",
      status: "least-concern",
      blurb:
        "Superbly adapted climbers that scale the park's rocky slopes with ease. They can go for long stretches without water, drawing moisture from the plants they eat.",
      bestSeason: "Year-round",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Ovis_canadensis_nelsoni_183339570.jpg/960px-Ovis_canadensis_nelsoni_183339570.jpg",
      imageCredit: "Millie Basden · CC BY 4.0 · Wikimedia Commons",
    },
    {
      name: "Coyote",
      scientificName: "Canis latrans",
      status: "least-concern",
      blurb:
        "The desert's great survivor, trotting the washes at dawn and dusk. Its yipping chorus carries for miles across the still night air.",
      bestSeason: "Year-round",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Coyote_Canis_latrans_mearnsi.jpg/960px-Coyote_Canis_latrans_mearnsi.jpg",
      imageCredit: "Susan Lynn Peterson · CC BY 2.5 · Wikimedia Commons",
    },
    {
      name: "Desert Tortoise",
      scientificName: "Gopherus agassizii",
      status: "vulnerable",
      blurb:
        "A threatened icon of the Mojave that can live 50+ years and survive a year without drinking, storing water in its bladder. It spends most of its life in burrows.",
      bestSeason: "Spring–Fall (after rain)",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Gopherus_agassizii.jpg/960px-Gopherus_agassizii.jpg",
      imageCredit: "Tigerhawkvok · CC BY-SA 3.0 · Wikimedia Commons",
    },
    {
      name: "Chuckwalla",
      scientificName: "Sauromalus ater",
      status: "least-concern",
      blurb:
        "A big, harmless herbivorous lizard that basks on the boulders. When threatened it wedges into a rock crevice and gulps air to inflate, making itself impossible to pull out.",
      bestSeason: "Spring–Summer",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/52/Sauromalus_ater_Phoenix.jpg",
      imageCredit: "Kaldari · Public domain · Wikimedia Commons",
    },
    {
      name: "Desert Kangaroo Rat",
      scientificName: "Dipodomys deserti",
      status: "least-concern",
      blurb:
        "A nocturnal marvel that never needs to drink — it extracts all the water it requires from the dry seeds it eats, and bounds across the sand on oversized hind feet.",
      bestSeason: "Year-round (nocturnal)",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/2d/Dipodomys-deserti.jpg",
      imageCredit: "USFWS · CC BY 2.0 · Wikimedia Commons",
    },
    {
      name: "Golden Eagle",
      scientificName: "Aquila chrysaetos",
      status: "least-concern",
      blurb:
        "A powerful raptor that rides the thermals above the rock formations, hunting jackrabbits and ground squirrels with a wingspan over seven feet.",
      bestSeason: "Year-round",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg/960px-015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg",
      imageCredit: "Giles Laurent · CC BY-SA 4.0 · Wikimedia Commons",
    },
  ],

  safetyNotes: [
    {
      title: "Carry far more water than you think",
      body: "There is no drinking water at most of the park, and summer temperatures top 100°F with no shade. Carry at least a gallon per person per day, hike early, and turn back before you're tired.",
    },
    {
      title: "It's easy to get lost",
      body: "The repetitive rock and desert terrain disorients hikers, and there's little to no cell signal. Carry a map, tell someone your route, and stay on marked trails — the desert has claimed underprepared visitors.",
    },
    {
      title: "Look before you reach",
      body: "Rattlesnakes shelter under rocks and in shade, and scorpions hide in crevices. Watch where you put your hands and feet, especially while scrambling, and give cholla cactus a wide berth.",
    },
  ],

  trails: [
    {
      name: "Hidden Valley Nature Trail",
      difficulty: "easy",
      distanceMi: 1.0,
      elevationGainFt: 100,
      estTime: "45 min",
      dogFriendly: false,
      highlight: "A loop into a boulder-ringed valley once said to hide rustled cattle — and a perfect intro to the park's rock.",
      elevationProfile: [4240, 4270, 4300, 4290, 4260, 4240],
    },
    {
      name: "Barker Dam Loop",
      difficulty: "easy",
      distanceMi: 1.3,
      elevationGainFt: 50,
      estTime: "1 hr",
      dogFriendly: false,
      highlight: "Passes a historic cattle-era dam and a panel of Native American petroglyphs; good for wildlife at the water.",
      elevationProfile: [4280, 4300, 4320, 4305, 4290, 4280],
    },
    {
      name: "Cholla Cactus Garden",
      difficulty: "easy",
      distanceMi: 0.25,
      elevationGainFt: 20,
      estTime: "20 min",
      dogFriendly: false,
      highlight: "A short loop through a dense stand of teddybear cholla — stunning at sunrise, but don't touch.",
      elevationProfile: [2240, 2250, 2255, 2248, 2240],
    },
    {
      name: "Ryan Mountain",
      difficulty: "strenuous",
      distanceMi: 3.0,
      elevationGainFt: 1050,
      estTime: "2–3 hrs",
      dogFriendly: false,
      highlight: "A steady climb to a 5,457-ft summit with the park's best 360° panorama. Carry water; there's no shade.",
      elevationProfile: [4500, 4750, 5000, 5250, 5457, 5250, 5000, 4750, 4500],
    },
    {
      name: "49 Palms Oasis",
      difficulty: "moderate",
      distanceMi: 3.0,
      elevationGainFt: 300,
      estTime: "2–3 hrs",
      dogFriendly: false,
      highlight: "Over a rocky ridge to a hidden grove of native fan palms — a green surprise in the bare desert.",
      elevationProfile: [2700, 2850, 3000, 2880, 2800, 2880, 3000, 2850, 2700],
    },
    {
      name: "Lost Horse Mine",
      difficulty: "moderate",
      distanceMi: 4.0,
      elevationGainFt: 550,
      estTime: "3 hrs",
      dogFriendly: false,
      highlight: "A loop to one of the best-preserved gold-mining sites in the California desert, with valley views.",
      elevationProfile: [4500, 4650, 4800, 4950, 5050, 4950, 4800, 4650, 4500],
    },
  ],

  camping: [
    {
      name: "Jumbo Rocks",
      type: "Tent & RV",
      sites: "124 sites",
      booking: "Reservation",
      season: "Year-round",
      fee: "$25 / night",
      location: "Central park, among the boulders",
      elevation: "4,400 ft",
      highlight: "The largest and most beloved campground, with sites tucked among giant granite formations. No water — bring your own.",
      reserveUrl: "https://www.recreation.gov/search?q=Jumbo+Rocks+Joshua+Tree",
    },
    {
      name: "Hidden Valley",
      type: "Tent only",
      sites: "44 sites",
      booking: "First-come",
      season: "Year-round",
      fee: "$20 / night",
      location: "Central park",
      elevation: "4,200 ft",
      highlight: "A first-come favorite of rock climbers, surrounded by world-class boulders. Fills early on weekends.",
      reserveUrl: "https://www.recreation.gov/search?q=Hidden+Valley+Joshua+Tree",
    },
    {
      name: "Black Rock",
      type: "Tent & RV",
      sites: "99 sites",
      booking: "Reservation",
      season: "Oct–May",
      fee: "$30 / night",
      location: "Northwest corner, near Yucca Valley",
      elevation: "4,000 ft",
      highlight: "One of the few campgrounds with water and flush toilets, set among Joshua trees away from the crowds.",
      reserveUrl: "https://www.recreation.gov/search?q=Black+Rock+Joshua+Tree",
    },
    {
      name: "Indian Cove",
      type: "Tent & RV",
      sites: "101 sites",
      booking: "Reservation",
      season: "Year-round",
      fee: "$25 / night",
      location: "North side, against the Wonderland of Rocks",
      elevation: "3,200 ft",
      highlight: "Dramatic sites nestled against towering rock formations on the park's north edge. No water.",
      reserveUrl: "https://www.recreation.gov/search?q=Indian+Cove+Joshua+Tree",
    },
    {
      name: "Cottonwood",
      type: "Tent & RV",
      sites: "62 sites",
      booking: "Reservation",
      season: "Year-round",
      fee: "$25 / night",
      location: "South end, Colorado Desert",
      elevation: "3,000 ft",
      highlight: "The southern gateway, with water and flush toilets — a good base for the cholla garden and Lost Palms.",
      reserveUrl: "https://www.recreation.gov/search?q=Cottonwood+Joshua+Tree",
    },
    {
      name: "White Tank",
      type: "Tent & RV",
      sites: "15 sites",
      booking: "First-come",
      season: "Year-round",
      fee: "$20 / night",
      location: "Central-east, near Arch Rock",
      elevation: "3,800 ft",
      highlight: "A small, quiet, first-come campground steps from the Arch Rock trail. No water.",
      reserveUrl: "https://www.recreation.gov/search?q=White+Tank+Joshua+Tree",
    },
  ],
  campingNote:
    "Most Joshua Tree campgrounds have no water or hookups — only Black Rock and Cottonwood have potable water, so bring plenty of your own. Reservations are required at the larger campgrounds in the busy cool season (October–May), and first-come sites fill by Friday morning on weekends.",

  bestTime: [
    { month: "Jan", crowd: "moderate", highTempF: 60, lowTempF: 35, note: "Cold nights, sunny days — prime rock-climbing season." },
    { month: "Feb", crowd: "moderate", highTempF: 64, lowTempF: 37, note: "Mild and clear; wildflowers may begin in warm years." },
    { month: "Mar", crowd: "high", highTempF: 70, lowTempF: 42, note: "Peak wildflower season and big spring-break crowds." },
    { month: "Apr", crowd: "high", highTempF: 78, lowTempF: 48, note: "Warm, beautiful, and busy — reserve camping ahead." },
    { month: "May", crowd: "moderate", highTempF: 87, lowTempF: 56, note: "Heating up fast; hike early, especially at low elevations." },
    { month: "Jun", crowd: "low", highTempF: 96, lowTempF: 64, note: "Hot and quiet. Dawn outings only." },
    { month: "Jul", crowd: "low", highTempF: 100, lowTempF: 70, note: "Peak heat with rare monsoon storms. Avoid midday." },
    { month: "Aug", crowd: "low", highTempF: 99, lowTempF: 69, note: "Still brutally hot; warm, clear nights for stargazing." },
    { month: "Sep", crowd: "moderate", highTempF: 92, lowTempF: 61, note: "Heat starts to ease and crowds thin out." },
    { month: "Oct", crowd: "high", highTempF: 80, lowTempF: 50, note: "Crisp, golden days return — one of the best months." },
    { month: "Nov", crowd: "high", highTempF: 68, lowTempF: 40, note: "Cool and clear; excellent hiking and climbing." },
    { month: "Dec", crowd: "moderate", highTempF: 60, lowTempF: 34, note: "Quiet, cold nights; a rare dusting of snow on the peaks." },
  ],

  gettingThere: {
    nearestAirports: [
      { code: "PSP", name: "Palm Springs Intl", driveTime: "~45 min" },
      { code: "ONT", name: "Ontario Intl", driveTime: "~1.5 hrs" },
      { code: "LAX", name: "Los Angeles Intl", driveTime: "~2.5 hrs" },
    ],
    drivingFrom: [
      { city: "Palm Springs", time: "45 min", miles: 45 },
      { city: "Los Angeles", time: "2.5 hrs", miles: 130 },
      { city: "San Diego", time: "3 hrs", miles: 165 },
      { city: "Las Vegas", time: "3 hrs", miles: 180 },
    ],
    entranceFee: "$30 per vehicle (7-day pass) · $15 per person on foot/bike",
    hours: "Open 24 hours a day, year-round. Three entrances: west, north, and south.",
    cellSignal:
      "Little to none inside the park. Service is available in the gateway towns (Joshua Tree, Twentynine Palms, Yucca Valley) — download maps before you enter.",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Joshua+Tree+National+Park",
  },

  gallery: [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Joshua_Tree_Park_approaching_thunderstorm_02_2013.jpg/1920px-Joshua_Tree_Park_approaching_thunderstorm_02_2013.jpg",
      alt: "Joshua trees beneath an approaching desert storm",
      credit: "Tuxyso · CC BY-SA 3.0 · Wikimedia Commons",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Stars_over_Joshua_Tree_National_Park_%2821309138101%29.jpg/1920px-Stars_over_Joshua_Tree_National_Park_%2821309138101%29.jpg",
      alt: "The Milky Way over Joshua Tree's dark skies",
      credit: "Joshua Tree NPS · Public domain · Wikimedia Commons",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Jumbo_Rocks_Campground_in_Joshua_Tree_National_Park_-_06.jpg/1920px-Jumbo_Rocks_Campground_in_Joshua_Tree_National_Park_-_06.jpg",
      alt: "The granite boulders of Jumbo Rocks",
      credit: "Joshua Tree NPS · Public domain · Wikimedia Commons",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Joshua_Tree_National_Park_%28California%2C_USA%29_--_2012_--_5669.jpg/1920px-Joshua_Tree_National_Park_%28California%2C_USA%29_--_2012_--_5669.jpg",
      alt: "Boulders and Joshua trees in the high desert",
      credit: "Dietmar Rabich · CC BY-SA 4.0 · Wikimedia Commons",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Joshua_tree_keys_view_pano_more_vertical.jpg/1920px-Joshua_tree_keys_view_pano_more_vertical.jpg",
      alt: "The sweeping vista from Keys View",
      credit: "Wikimedia Commons · CC BY-SA 3.0 · Wikimedia Commons",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Skull_Rock%2C_Joshua_Tree_National_Park.jpg/1920px-Skull_Rock%2C_Joshua_Tree_National_Park.jpg",
      alt: "The wind-carved Skull Rock",
      credit: "G. Narasimha Murthy · CC0 · Wikimedia Commons",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Joshua_Tree_National_Park_-_Joshua_Tree_-_14.jpg/1920px-Joshua_Tree_National_Park_-_Joshua_Tree_-_14.jpg",
      alt: "Joshua trees among the desert rocks",
      credit: "Jarek Tuszyński · CC BY-SA 3.0 · Wikimedia Commons",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Joshua_Tree%2C_Arch_Rock_Nature_Trail%2C_Joshua_Tree_National_Park%2C_Dec_2025.jpg/1920px-Joshua_Tree%2C_Arch_Rock_Nature_Trail%2C_Joshua_Tree_National_Park%2C_Dec_2025.jpg",
      alt: "The natural span of Arch Rock",
      credit: "E. Bailey · CC0 · Wikimedia Commons",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Joshua_tree_%28Yucca_brevifolia%29_%2851308534677%29.jpg/1920px-Joshua_tree_%28Yucca_brevifolia%29_%2851308534677%29.jpg",
      alt: "A lone Joshua tree against the sky",
      credit: "Joshua Tree NPS · Public domain · Wikimedia Commons",
    },
  ],
};
