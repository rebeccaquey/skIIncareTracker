const sampleData = [
  {
    category: 'Cleanser',
    item: 'Tatcha Cleansing Oil',
    size: 'Full',
    status: 'Opened',
    price: 48,
    purchase_date: '2018-08-27',
    expiration_date: '2020-08-27',
    repurchase: true,
    notes: 'Favorite oil based cleanser',
    favorites: true,
    photo: 'https://mvp-skincare.s3-us-west-1.amazonaws.com/tatchaCleansingOil.jpg',
  },
  {
    category: 'Cleanser',
    item: 'Youth To The People Cleanser',
    size: 'Full',
    status: 'Opened',
    price: 35,
    purchase_date: '2019-03-05',
    expiration_date: '2021-03-05',
    repurchase: true,
    notes: 'Love the pump on the bottle; decent job cleansing',
    favorites: false,
    photo: 'https://mvp-skincare.s3-us-west-1.amazonaws.com/yttpCleanser.jpeg',
  },
  {
    category: 'Essence',
    item: 'SKII Essence',
    size: 'Full',
    status: 'Opened',
    price: 199,
    purchase_date: '2019-10-10',
    expiration_date: '2021-10-10',
    repurchase: true,
    notes: 'Favorite essence!!',
    favorites: true,
    photo: 'https://mvp-skincare.s3-us-west-1.amazonaws.com/skiiEssence.jpeg',
  },
  {
    category: 'Serum',
    item: 'The Ordinary Hyaluronic Acid',
    size: 'Full',
    status: 'Opened',
    price: 13,
    purchase_date: '2018-11-30',
    expiration_date: '2020-11-30',
    repurchase: false,
    notes: 'Meh. Consistency was goopy; didn\'t see any results',
    favorites: false,
    photo: 'https://mvp-skincare.s3-us-west-1.amazonaws.com/ordinarySerum.jpeg',
  },
  {
    category: 'Serum',
    item: 'Kiehl\'s Midnight Recovery Concentrate',
    size: 'Full',
    status: 'New',
    price: 88,
    purchase_date: '2020-02-15',
    expiration_date: '2022-02-15',
    repurchase: true,
    notes: 'HG serum',
    favorites: true,
    photo: 'https://mvp-skincare.s3-us-west-1.amazonaws.com/kiehlsSerum.jpeg',
  },
  {
    category: 'Toner',
    item: 'Thayers Witch Hazel Toner',
    size: 'Full',
    status: 'New',
    price: 10,
    purchase_date: '2020-07-02',
    expiration_date: '2022-07-02',
    repurchase: true,
    notes: 'Unbeatable price!',
    favorites: true,
    photo: 'https://mvp-skincare.s3-us-west-1.amazonaws.com/thayersToner.jpg',
  },
  {
    category: 'Sunscreen',
    item: 'Supergoop The Unseen Sunscreen',
    size: 'Full',
    status: 'Opened',
    price: 36,
    purchase_date: '2020-04-15',
    expiration_date: '2022-04-15',
    repurchase: true,
    notes: 'Gel-like texture, easy application, no white residue',
    favorites: true,
    photo: 'https://mvp-skincare.s3-us-west-1.amazonaws.com/supergoopSunscreen.jpg',
  },
  {
    category: 'Moisturizer',
    item: 'Belif Aqua Bomb',
    size: 'Full',
    status: 'New',
    price: 62,
    purchase_date: '2020-07-20',
    expiration_date: '2022-07-20',
    repurchase: true,
    notes: 'Lightweight and moisturizing',
    favorites: true,
    photo: 'https://mvp-skincare.s3-us-west-1.amazonaws.com/belifAquaBomb.jpg',
  },
  {
    category: 'Moisturizer',
    item: 'Clinique Moisture Surge Overnight Mask',
    size: 'Full',
    status: 'New',
    price: 36,
    purchase_date: '2019-03-07',
    expiration_date: '2021-03-07',
    repurchase: false,
    notes: 'Okay, but feels very sticky after application',
    favorites: false,
    photo: 'https://mvp-skincare.s3-us-west-1.amazonaws.com/cliniqueMoisturizer.jpg',
  },
  {
    category: 'Eye Cream',
    item: 'Murad Renewing Eye Cream',
    size: 'Full',
    status: 'Opened',
    price: 'Free',
    purchase_date: '2019-06-22',
    expiration_date: '2021-06-22',
    repurchase: false,
    notes: 'Gift from cindy; decent, but wouldn\'t purchase on my own',
    favorites: false,
    photo: 'https://mvp-skincare.s3-us-west-1.amazonaws.com/muradEyeCream.jpeg',
  },
  {
    category: 'Oil',
    item: 'Herbivore Phoenix Oil',
    size: 'Full',
    status: 'Opened',
    price: 79,
    purchase_date: '2019-10-24',
    expiration_date: '2021-10-24',
    repurchase: true,
    notes: 'Smells great and always makes my skin look gooood',
    favorites: true,
    photo: 'https://mvp-skincare.s3-us-west-1.amazonaws.com/herbivorePhoenixOil.jpg',
  },
  {
    category: 'Serum',
    item: 'Caudalie Vinosource SOS Deep Hydration',
    size: 'Full',
    status: 'Opened',
    price: 42,
    purchase_date: '2020-04-10',
    expiration_date: '2022-11-10',
    repurchase: true,
    notes: 'Lightweight and super moisturizing',
    favorites: true,
    photo: 'https://mvp-skincare.s3-us-west-1.amazonaws.com/caudalieSerum.jpg',
  },
  {
    category: 'Exfoliator',
    item: 'Tatcha Deep Cleanse',
    size: 'Full',
    status: 'Opened',
    price: 55,
    purchase_date: '2019-06-10',
    expiration_date: '2021-06-10',
    repurchase: true,
    notes: 'Gentle daily exfoliating cleanser',
    favorites: false,
    photo: 'https://mvp-skincare.s3-us-west-1.amazonaws.com/tatchaDeepCleanse.jpg',
  },
  {
    category: 'Sheet Mask',
    item: 'Tony Moly Snail Mask 6 Pack',
    size: 'Full',
    status: 'New',
    price: 5,
    purchase_date: '2018-12-05',
    expiration_date: '2020-12-05',
    repurchase: true,
    notes: 'Bought in HK, super hydrating',
    favorites: true,
    photo: 'https://mvp-skincare.s3-us-west-1.amazonaws.com/tonyMolyMask.jpg',
  },
  {
    category: 'Sheet Mask',
    item: 'Dr. Jart+ Water Jet Viral Hydra Mask',
    size: 'Full',
    status: 'New',
    price: 6,
    purchase_date: '2019-12-15',
    expiration_date: '2021-12-15',
    repurchase: false,
    notes: 'Never tried, but I like the brand',
    favorites: false,
    photo: 'https://mvp-skincare.s3-us-west-1.amazonaws.com/drJartMask.jpg',
  },
  {
    category: 'Toner',
    item: 'The Ordinary Glycolic Acid Toner',
    size: 'Full',
    status: 'Opened',
    price: 9,
    purchase_date: '2020-04-22',
    expiration_date: '2022-04-22',
    repurchase: false,
    notes: 'Super hype because of the price, but not a fan, makes my skin act up',
    favorites: false,
    photo: 'https://mvp-skincare.s3-us-west-1.amazonaws.com/ordinaryToner.jpeg',
  },
  {
    category: 'Essence',
    item: 'Belif Hungarian Water Essence',
    size: 'Full',
    status: 'Opened',
    price: 42,
    purchase_date: '2018-10-01',
    expiration_date: '2020-10-01',
    repurchase: false,
    notes: 'Not bad, but can\'t compare with SKII',
    favorites: false,
    photo: 'https://mvp-skincare.s3-us-west-1.amazonaws.com/belifEssence.jpg',
  },
  {
    category: 'Cleanser',
    item: 'First Aid Beauty Cleanser',
    size: 'Full',
    status: 'New',
    price: 20,
    purchase_date: '2020-07-15',
    expiration_date: '2022-07-15',
    repurchase: true,
    notes: 'Favorite cleanser! I always come back to this one <3',
    favorites: true,
    photo: 'https://mvp-skincare.s3-us-west-1.amazonaws.com/fabCleanser.jpg',
  },
  {
    category: 'Exfoliator',
    item: 'Murad AHA BHA Exfoliating Cleanser',
    size: 'Full',
    status: 'Opened',
    price: 32,
    purchase_date: '2020-04-15',
    expiration_date: '2022-04-15',
    repurchase: true,
    notes: 'Does a good job exfoliating while being very gentle and not stripping the skin',
    favorites: true,
    photo: 'https://mvp-skincare.s3-us-west-1.amazonaws.com/muradExfoliator.jpg',
  },
  {
    category: 'Moisturizer',
    item: 'Laneige Cream Skin Toner & Moisturizer',
    size: 'Full',
    status: 'Opened',
    price: 30,
    purchase_date: '2019-12-10',
    expiration_date: '2021-12-10',
    repurchase: false,
    notes: 'Lightweight, but better as a prep product instead of moisturizer',
    favorites: false,
    photo: 'https://mvp-skincare.s3-us-west-1.amazonaws.com/laneigeMoisturizer.jpg',
  },
  {
    category: 'Sunscreen',
    item: 'Murad City Skin Age Defense Sunscreen',
    size: 'Full',
    status: 'New',
    price: 68,
    purchase_date: '2020-04-27',
    expiration_date: '2022-04-27',
    repurchase: false,
    notes: 'Recommended by mama! UVA, UVB, & blue light protection',
    favorites: false,
    photo: 'https://mvp-skincare.s3-us-west-1.amazonaws.com/muradSunscreen.jpeg',
  },
  {
    category: 'Eye Cream',
    item: 'Laneige Eye Sleeping Mask',
    size: 'Full',
    status: 'Opened',
    price: 30,
    purchase_date: '2018-12-12',
    expiration_date: '2020-12-12',
    repurchase: false,
    notes: 'Not bad, but haven\'t used it enough to know whether it works or not',
    favorites: false,
    photo: 'https://mvp-skincare.s3-us-west-1.amazonaws.com/laneigeEyeMask.jpg',
  },
  {
    category: 'Oil',
    item: 'Herbivore Emerald CBD + Adaptogens Oil',
    size: 'Deluxe',
    status: 'Opened',
    price: 'Free',
    purchase_date: '2019-12-03',
    expiration_date: '2021-12-03',
    repurchase: true,
    notes: 'Christmas gift from Fareedha; love it!',
    favorites: true,
    photo: 'https://mvp-skincare.s3-us-west-1.amazonaws.com/herbivoreEmeraldOil.jpg',
  },
  {
    category: 'Serum',
    item: 'Algenist Genius Liquid Collagen',
    size: 'Full',
    status: 'Opened',
    price: 'Free',
    purchase_date: '2019-06-24',
    expiration_date: '2021-06-24',
    repurchase: false,
    notes: 'Cindy gave this to me, I like it, but would not buy on my own',
    favorites: false,
    photo: 'https://mvp-skincare.s3-us-west-1.amazonaws.com/algenistCollagen.jpg',
  },
  {
    category: 'Oil',
    item: 'Drunk Elephant Virgin Marula Oil',
    size: 'Deluxe',
    status: 'Opened',
    price: 'Free',
    purchase_date: '2019-07-25',
    expiration_date: '2021-07-25',
    repurchase: true,
    notes: 'Got this as a GWP, would repurchase to try the full size',
    favorites: false,
    photo: 'https://mvp-skincare.s3-us-west-1.amazonaws.com/deOil.jpg',
  },
]

module.exports.sampleData = sampleData;