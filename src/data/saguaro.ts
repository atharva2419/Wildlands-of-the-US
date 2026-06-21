import type { Park } from "@/types/park";

export const saguaro: Park = {
  slug: "saguaro",
  name: "Saguaro",
  state: "Arizona",
  coordinates: { lat: 32.2967, lng: -111.1666 },
  tagline: "A forest of giants — the cactus that became the symbol of the American West.",
  established: "October 14, 1994",
  themeColor: "#5f7138",
  heroImage:
    "https://upload.wikimedia.org/wikipedia/commons/b/b1/Saguaro_National_Park_at_sunset.jpg",
  heroCredit: "National Park Service · Public domain · Wikimedia Commons",
  tags: ["Desert", "Sonoran", "Stargazing", "Wildlife", "Sky Island"],

  stats: [
    { label: "Established", value: "1994", note: "monument since 1933" },
    { label: "Area", value: "91,716 ac", note: "two districts" },
    { label: "Annual Visitors", value: "~1.1M", note: "flanking Tucson" },
    { label: "Highest Point", value: "8,666 ft", note: "Mica Mountain" },
    { label: "Tallest Saguaros", value: "45+ ft", note: "up to ~200 yrs old" },
    { label: "Saguaros", value: "~2M", note: "protected here" },
  ],

  overview: [
    "The saguaro is the cactus of a thousand Westerns — arms raised against a desert sunset — and it grows wild nowhere on Earth but the Sonoran Desert. Saguaro National Park protects nearly two million of them across two districts that bracket the city of Tucson, where they stand in dense, cathedral-like forests on the bajadas.",
    "There's far more here than cactus. The park climbs from saguaro flats up into the Rincon Mountains, a 'sky island' whose 8,666-foot summit wears pine and fir forest — a different world a vertical mile above the desert floor. Between them lie ancient petroglyphs, some of Arizona's darkest skies, and a desert that is anything but empty.",
  ],

  history: [
    {
      year: "~200–1450",
      title: "The Hohokam",
      description:
        "The Hohokam people farm the Tucson Basin for over a thousand years, leaving behind petroglyphs still visible at Signal Hill.",
    },
    {
      year: "1933",
      title: "A Monument is Born",
      description:
        "President Herbert Hoover establishes Saguaro National Monument to protect the towering cactus forest east of Tucson.",
    },
    {
      year: "1961",
      title: "A Second District",
      description:
        "The Tucson Mountain District west of the city — home to especially dense saguaro stands — is added to the monument.",
    },
    {
      year: "1976",
      title: "Wilderness Protection",
      description:
        "Congress designates large portions of both districts as wilderness, safeguarding the high Rincon backcountry.",
    },
    {
      year: "1994",
      title: "National Park Status",
      description:
        "Saguaro is redesignated a National Park, recognizing both its iconic cactus forests and its sky-island ecosystems.",
    },
  ],

  indigenousHistory:
    "The Tohono O'odham — the 'Desert People' — are descendants of the ancient Hohokam and have lived alongside the saguaro for countless generations. To them the saguaro is not a thing but a relative, a person. Each summer they harvest its ruby fruit (bahidaj) with long ribs of dead saguaro, cooking it into syrup and wine for a ceremony that marks the O'odham new year and calls the monsoon rains. The Hohokam petroglyphs at Signal Hill, pecked into basalt over a thousand years ago, still mark the land.",

  funFacts: [
    "A fully hydrated saguaro can drink up to 200 gallons of water in a single rain and weigh more than a ton.",
    "Saguaros grow agonizingly slowly — barely an inch in their first eight years — and may not sprout an arm until they're 50 to 70 years old.",
    "They grow only in the Sonoran Desert; you won't find a wild saguaro anywhere else on the planet.",
    "Gila woodpeckers carve nest holes that harden into 'saguaro boots,' later reused by tiny elf owls and other birds.",
    "The night-blooming saguaro flower is Arizona's state flower — each bloom opens after dark and lasts less than 24 hours.",
  ],

  wildlife: [
    {
      name: "Cactus Wren",
      scientificName: "Campylorhynchus brunneicapillus",
      status: "least-concern",
      blurb:
        "Arizona's state bird and the largest wren in the U.S. It builds football-shaped nests deep in spiny cholla, where few predators dare follow.",
      bestSeason: "Year-round",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Campylorhynchus_brunneicapillus_02.jpg/960px-Campylorhynchus_brunneicapillus_02.jpg",
      imageCredit: "Bernard Gagnon · CC BY-SA 3.0 · Wikimedia Commons",
    },
    {
      name: "Gila Woodpecker",
      scientificName: "Melanerpes uropygialis",
      status: "least-concern",
      blurb:
        "The architect of the saguaro forest, drilling nest cavities into the cactus that, once abandoned, shelter owls, flycatchers, and more.",
      bestSeason: "Year-round",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Gilawoodpecker.jpg/960px-Gilawoodpecker.jpg",
      imageCredit: "Polinova · CC BY-SA 4.0 · Wikimedia Commons",
    },
    {
      name: "Gila Monster",
      scientificName: "Heloderma suspectum",
      status: "near-threatened",
      blurb:
        "One of only a handful of venomous lizards on Earth, beaded in black and orange. It spends over 90% of its life underground — a lucky, harmless-if-left-alone sighting.",
      bestSeason: "Spring (after rain)",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Gila_monster_%28Heloderma_suspectum%29.jpg/960px-Gila_monster_%28Heloderma_suspectum%29.jpg",
      imageCredit: "Theo Kruse / Burgers' Zoo · CC BY-SA 4.0 · Wikimedia Commons",
    },
    {
      name: "Desert Tortoise",
      scientificName: "Gopherus morafkai",
      status: "vulnerable",
      blurb:
        "A living survivor that can reach 50+ years and go a year without drinking, storing water in its bladder. It shelters in burrows from the brutal heat.",
      bestSeason: "Spring–Fall (after rain)",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Gopherus_agassizii.jpg/960px-Gopherus_agassizii.jpg",
      imageCredit: "Tigerhawkvok · CC BY-SA 3.0 · Wikimedia Commons",
    },
    {
      name: "Javelina",
      scientificName: "Dicotyles tajacu",
      status: "least-concern",
      blurb:
        "Not a pig but a collared peccary, javelinas travel the desert in tight family herds, snuffling for prickly pear pads — spines and all.",
      bestSeason: "Year-round",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tayassu_tajacu.jpg/960px-Tayassu_tajacu.jpg",
      imageCredit: "Chrumps · CC BY-SA 3.0 · Wikimedia Commons",
    },
    {
      name: "Greater Roadrunner",
      scientificName: "Geococcyx californianus",
      status: "least-concern",
      blurb:
        "A ground-dwelling cuckoo that sprints over 20 mph, snapping up lizards and even rattlesnakes. Far more impressive — and faster — than the cartoon suggests.",
      bestSeason: "Year-round",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Grand_g%C3%A9ocoucou.jpg/960px-Grand_g%C3%A9ocoucou.jpg",
      imageCredit: "Bernard Gagnon · CC BY-SA 3.0 · Wikimedia Commons",
    },
  ],

  safetyNotes: [
    {
      title: "Heat is the real danger",
      body: "Summer temperatures routinely top 100°F with almost no shade. Hike at dawn, turn back by mid-morning, carry far more water than you expect to need, and know the signs of heat illness.",
    },
    {
      title: "Watch where you step and reach",
      body: "Rattlesnakes, Gila monsters, and scorpions are part of the desert. Stay on trails, watch your footing, and never put hands or feet where you can't see — especially around rocks and burrows.",
    },
    {
      title: "Respect the cactus",
      body: "Cholla segments detach at the lightest brush ('jumping cactus') and saguaro spines run deep. Keep your distance, carry a comb for cholla removal, and never lean on or carve a cactus — they're protected and fragile.",
    },
  ],

  trails: [
    {
      name: "Valley View Overlook Trail",
      difficulty: "easy",
      distanceMi: 0.8,
      elevationGainFt: 100,
      estTime: "30–45 min",
      dogFriendly: false,
      highlight: "A short walk in the west district to an overlook above a sea of saguaros — a sunset favorite.",
      elevationProfile: [2600, 2640, 2680, 2700, 2680, 2640, 2600],
    },
    {
      name: "Signal Hill Petroglyphs Trail",
      difficulty: "easy",
      distanceMi: 0.5,
      elevationGainFt: 40,
      estTime: "20–30 min",
      dogFriendly: false,
      highlight: "A quick climb to a basalt outcrop covered in Hohokam petroglyphs over a thousand years old.",
      elevationProfile: [2700, 2720, 2740, 2730, 2705],
    },
    {
      name: "Freeman Homestead Trail",
      difficulty: "easy",
      distanceMi: 1.0,
      elevationGainFt: 80,
      estTime: "45 min",
      dogFriendly: false,
      highlight: "An east-district loop past some of the park's largest, oldest saguaros and old homestead ruins.",
      elevationProfile: [2900, 2930, 2960, 2945, 2915, 2900],
    },
    {
      name: "Hugh Norris Trail to Wasson Peak",
      difficulty: "strenuous",
      distanceMi: 9.8,
      elevationGainFt: 2080,
      estTime: "5–7 hrs",
      dogFriendly: false,
      highlight: "A spectacular ridgeline climb to Wasson Peak (4,687 ft), the highest point in the west district.",
      elevationProfile: [2660, 3100, 3500, 3900, 4300, 4687, 4300, 3900, 3500, 3100, 2660],
    },
    {
      name: "Tanque Verde Ridge",
      difficulty: "hard",
      distanceMi: 6.0,
      elevationGainFt: 1800,
      estTime: "4–6 hrs",
      dogFriendly: false,
      highlight: "A steady east-district climb out of the cactus and up toward the Rincon sky island, with huge valley views.",
      elevationProfile: [3100, 3500, 3900, 4300, 4900, 4300, 3900, 3500, 3100],
    },
  ],

  camping: [
    {
      name: "Manning Camp",
      type: "Backcountry",
      sites: "Permit only",
      booking: "Permit",
      season: "Year-round",
      fee: "Permit fee",
      location: "Rincon Mountains (east district)",
      elevation: "8,000 ft",
      highlight: "The highest and most prized backcountry camp, in cool pine forest near Mica Mountain — a strenuous 12+ mile hike up from the desert.",
      reserveUrl: "https://www.nps.gov/sagu/planyourvisit/backcountry-camping.htm",
    },
    {
      name: "Douglas Spring Camp",
      type: "Backcountry",
      sites: "Permit only",
      booking: "Permit",
      season: "Year-round",
      fee: "Permit fee",
      location: "Rincon Mountains (east district)",
      elevation: "4,800 ft",
      highlight: "The first wilderness camp many hikers reach, about 6 miles up the Douglas Spring Trail.",
      reserveUrl: "https://www.nps.gov/sagu/planyourvisit/backcountry-camping.htm",
    },
    {
      name: "Gilbert Ray Campground",
      type: "Tent & RV",
      sites: "130 sites",
      booking: "First-come",
      season: "Year-round",
      fee: "From ~$20 / night",
      location: "Tucson Mountain Park (~10 min from west district)",
      highlight: "A Pima County campground with electric sites right next to the west district — the most convenient developed option.",
      reserveUrl: "https://www.recreation.gov/search?q=Gilbert+Ray+Campground+Tucson",
    },
    {
      name: "Catalina State Park",
      type: "Tent & RV",
      sites: "120 sites",
      booking: "Reservation",
      season: "Year-round",
      fee: "From ~$30 / night",
      location: "North of Tucson (~40 min)",
      highlight: "An Arizona state park at the foot of the Santa Catalinas, with full hookups, showers, and its own saguaro-studded trails.",
      reserveUrl: "https://azstateparks.com/catalina",
    },
  ],
  campingNote:
    "Saguaro has no drive-in or developed campgrounds. The only camping inside the park is backcountry — designated wilderness camps high in the Rincon Mountains, reached by strenuous hikes of 6+ miles and requiring a permit. For RV and tent camping with amenities, use the county and state parks around Tucson.",

  bestTime: [
    { month: "Jan", crowd: "high", highTempF: 65, lowTempF: 40, note: "Warm, sunny, and busy with winter visitors. Prime season." },
    { month: "Feb", crowd: "high", highTempF: 68, lowTempF: 42, note: "Beautiful desert weather; peak snowbird crowds." },
    { month: "Mar", crowd: "high", highTempF: 73, lowTempF: 46, note: "Wildflowers begin; ideal hiking conditions." },
    { month: "Apr", crowd: "moderate", highTempF: 82, lowTempF: 52, note: "Warming fast; saguaro buds start to form." },
    { month: "May", crowd: "moderate", highTempF: 92, lowTempF: 60, note: "Saguaro bloom peaks — but hike early, it's getting hot." },
    { month: "Jun", crowd: "low", highTempF: 101, lowTempF: 69, note: "Brutally hot and dry. Dawn hikes only." },
    { month: "Jul", crowd: "low", highTempF: 100, lowTempF: 74, note: "Monsoon thunderstorms bring drama and humidity." },
    { month: "Aug", crowd: "low", highTempF: 98, lowTempF: 72, note: "Monsoon continues; lush desert, sudden downpours." },
    { month: "Sep", crowd: "low", highTempF: 95, lowTempF: 67, note: "Still hot, but easing. Quiet trails." },
    { month: "Oct", crowd: "moderate", highTempF: 85, lowTempF: 56, note: "Heat breaks; one of the best months to visit." },
    { month: "Nov", crowd: "high", highTempF: 73, lowTempF: 45, note: "Clear, mild, and gorgeous — crowds return." },
    { month: "Dec", crowd: "high", highTempF: 65, lowTempF: 39, note: "Cool nights, warm days; occasional snow on the peaks." },
  ],

  gettingThere: {
    nearestAirports: [
      { code: "TUS", name: "Tucson Intl", driveTime: "~30 min" },
      { code: "PHX", name: "Phoenix Sky Harbor", driveTime: "~2 hrs" },
    ],
    drivingFrom: [
      { city: "Tucson", time: "30 min", miles: 15 },
      { city: "Phoenix", time: "2 hrs", miles: 115 },
      { city: "Flagstaff", time: "4 hrs", miles: 270 },
      { city: "Las Vegas", time: "6.5 hrs", miles: 400 },
    ],
    entranceFee: "$25 per vehicle (7-day pass, valid for both districts)",
    hours:
      "Both districts are open daily; the scenic loop drives run roughly sunrise to sunset, with visitor centers open ~9am–5pm. The two districts sit on opposite sides of Tucson, about an hour apart.",
    cellSignal:
      "Reliable near the Tucson edges of both districts; spotty to none in the Rincon backcountry.",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Saguaro+National+Park",
  },

  gallery: [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Saguaro_National_Park_East%2C_Arizona%2C_USA_2024_5.jpg/1920px-Saguaro_National_Park_East%2C_Arizona%2C_USA_2024_5.jpg",
      alt: "A forest of saguaro cacti",
      credit: "dconvertini · CC BY-SA 2.0 · Wikimedia Commons",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Saguaro_cactus_on_Camelback_Mountain.jpg/1920px-Saguaro_cactus_on_Camelback_Mountain.jpg",
      alt: "A saguaro silhouetted against the sunset",
      credit: "Quintin Soloviev · CC BY 4.0 · Wikimedia Commons",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Saguaro_Cactus_Bloom.jpg",
      alt: "The white blossoms of a saguaro in bloom",
      credit: "Velvetlady0 · CC BY-SA 4.0 · Wikimedia Commons",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/1/16/Hanging_cholla%2C_Saguaro_National_Park_%28Rincon_Mountain_District%29._%28b4065910-c2b2-400e-a99c-9c1379ef3cb9%29.jpg",
      alt: "Chain-fruit cholla in the Rincon Mountain District",
      credit: "Alice Wondrak-Biel · Public domain · Wikimedia Commons",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Saguaro_National_Park_Petroglyphs_at_Saguaro_NP_9817.jpg/1920px-Saguaro_National_Park_Petroglyphs_at_Saguaro_NP_9817.jpg",
      alt: "Hohokam petroglyphs at Signal Hill",
      credit: "National Park Service · Public domain · Wikimedia Commons",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/2010_Sonoran_Desert_04.jpg/1920px-2010_Sonoran_Desert_04.jpg",
      alt: "Teddy-bear cholla glowing in the Sonoran Desert",
      credit: "Nicholas Hartmann · CC BY-SA 4.0 · Wikimedia Commons",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Top_of_saguaro_with_snow_%2850615702201%29.jpg",
      alt: "A rare dusting of snow atop a saguaro",
      credit: "Saguaro NPS · Public domain · Wikimedia Commons",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Spring_flowers_at_sunset_near_Peridot%2C_AZ.jpg/1920px-Spring_flowers_at_sunset_near_Peridot%2C_AZ.jpg",
      alt: "Spring wildflowers across the desert floor",
      credit: "John Fowler · CC BY 2.0 · Wikimedia Commons",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Carnegiea_gigantea_in_Saguaro_National_Park_near_Tucson%2C_Arizona_during_November_%2858%29.jpg/1920px-Carnegiea_gigantea_in_Saguaro_National_Park_near_Tucson%2C_Arizona_during_November_%2858%29.jpg",
      alt: "Saguaros near Tucson at golden hour",
      credit: "WClarke · CC BY-SA 3.0 · Wikimedia Commons",
    },
  ],
};
