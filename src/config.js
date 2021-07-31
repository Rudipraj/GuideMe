import firebase from "firebase";



export const firebaseConfig = {
    apiKey: "AIzaSyB-ZguW3F3a7e2drdK4rLdPvhESPLBdTPk",
    authDomain: "guide-me-a542c.firebaseapp.com",
    projectId: "guide-me-a542c",
    storageBucket: "guide-me-a542c.appspot.com",
    messagingSenderId: "144774095775",
    appId: "1:144774095775:web:bd56f35ec7756cde6593aa",
    measurementId: "G-FCSMP8B37S"
};
export const isAdmin = (email) => {
    let admins = ['sudhirbhattarai2@gmail.com','khatiwadarudeep@gmail.com','rihdusbhattarai71@gmail.com', 'sudhirbhattarai71@gmail.com']
    return admins.includes(email);
}
export const randomIdGenerator = () => {
    return Math.random().toString(36).slice(2);
}
if (firebase.apps.length===0) {
    firebase.initializeApp(firebaseConfig);
}else {
    firebase.app(); // if already initialized, use that one
}
export const database=firebase.firestore();
export const districts=[
    {
        "Name": "Kathmandu",
        "Nepali": "काठमाण्डौ",
        "Headquarters": "Kathmandu",
        "area": 395,
        "population": "1,744,240",
        "Province": "3",
        "LocalBodiesType": ["Municipality", "Metropolitan"]
    },
    {
        "Name": "Bhojpur",
        "Nepali": "भोजपुर",
        "Headquarters": "Bhojpur",
        "population": "182,459",
        "area": "1,507",
        "Province": "1",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Dhankuta",
        "Nepali": "धनकुटा",
        "Headquarters": "Dhankuta",
        "population": "163,412",
        "area": "0,892",
        "Province": "1",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Ilam",
        "Nepali": "इलाम",
        "Headquarters": "Ilam",
        "population": "290,254",
        "area": "1,703",
        "Province": "1",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Jhapa",
        "Nepali": "झापा",
        "Headquarters": "Bhadrapur",
        "population": "812,650",
        "area": "1,606",
        "Province": "1",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Khotang",
        "Nepali": "खोटाँग",
        "Headquarters": "Diktel",
        "population": "206,312",
        "area": "1,591",
        "Province": "1",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Morang",
        "Nepali": "मोरंग",
        "Headquarters": "Biratnagar",
        "population": "965,370",
        "area": "1,855",
        "Province": "1",
        "LocalBodiesType": ["Municipality", "Rural Municipality", "Metropolitan"]
    },
    {
        "Name": "Okhaldhunga",
        "Nepali": "ओखलढुंगा",
        "Headquarters": "Siddhicharan",
        "population": "147,984",
        "area": "1,074",
        "Province": "1",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Panchthar",
        "Nepali": "पांचथर",
        "Headquarters": "Phidim",
        "population": "191,817",
        "area": "1,241",
        "Province": "1",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Sankhuwasabha",
        "Nepali": "संखुवासभा",
        "Headquarters": "Khandbari",
        "population": "158,742",
        "area": "3,480",
        "Province": "1",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Solukhumbu",
        "Nepali": "सोलुखुम्बू",
        "Headquarters": "Salleri",
        "population": "105,886",
        "area": "3,312",
        "Province": "1",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Sunsari",
        "Nepali": "सुनसरी",
        "Headquarters": "Inaruwa",
        "population": "763,497",
        "area": "1,257",
        "Province": "1",
        "LocalBodiesType": [
            "Municipality",
            "Rural Municipality",
            "Sub-Metropolitan"
        ]
    },
    {
        "Name": "Taplejung",
        "Nepali": "ताप्लेजुङ",
        "Headquarters": "Taplejung",
        "population": "127,461",
        "area": "3,646",
        "Province": "1",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Terhathum",
        "Nepali": "तेह्रथुम",
        "Headquarters": "Myanglung",
        "population": "113,111",
        "area": "0,679",
        "Province": "1",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Udayapur",
        "Nepali": "उदयपुर",
        "Headquarters": "Gaighat",
        "population": "317,532",
        "area": "2,063",
        "Province": "1",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Saptari",
        "Nepali": "सप्तरी",
        "Headquarters": "Rajbiraj",
        "population": "639,284",
        "area": "1,363",
        "Province": "2",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Parsa",
        "Nepali": "पर्सा",
        "Headquarters": "Birgunj",
        "population": "601,017",
        "area": "1,353",
        "Province": "2",
        "LocalBodiesType": ["Municipality", "Rural Municipality", "Metropolitan"]
    },
    {
        "Name": "Sarlahi",
        "Nepali": "सर्लाही",
        "Headquarters": "Malangwa",
        "population": "769,729",
        "area": "1,259",
        "Province": "2",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Bara",
        "Nepali": "बारा",
        "Headquarters": "Kalaiya",
        "population": "687,708",
        "area": "1,190",
        "Province": "2",
        "LocalBodiesType": [
            "Municipality",
            "Rural Municipality",
            "Sub-Metropolitan"
        ]
    },
    {
        "Name": "Siraha",
        "Nepali": "सिराहा",
        "Headquarters": "Siraha",
        "population": "637,328",
        "area": "1,188",
        "Province": "2",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Dhanusha",
        "Nepali": "धनुषा",
        "Headquarters": "Janakpur",
        "population": "754,777",
        "area": "1,180",
        "Province": "2",
        "LocalBodiesType": [
            "Municipality",
            "Rural Municipality",
            "Sub-Metropolitan"
        ]
    },
    {
        "Name": "Rautahat",
        "Nepali": "रौतहट",
        "Headquarters": "Gaur",
        "population": "686,722",
        "area": "1,126",
        "Province": "2",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Mahottari",
        "Nepali": "महोत्तरी",
        "Headquarters": "Jaleshwar",
        "population": "627,580",
        "area": "1,002",
        "Province": "2",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Sindhuli",
        "Nepali": "सिन्धुली",
        "Headquarters": "Kamalamai",
        "area": "2,491",
        "population": "296,192",
        "Province": "3",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Ramechhap",
        "Nepali": "रामेछाप",
        "Headquarters": "Manthali",
        "area": "1,546",
        "population": "202,646",
        "Province": "3",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Dolakha",
        "Nepali": "दोलखा",
        "Headquarters": "Bhimeshwar",
        "area": "2,191",
        "population": "186,557",
        "Province": "3",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Bhaktapur",
        "Nepali": "भक्तपुर",
        "Headquarters": "Bhaktapur",
        "area": 119,
        "population": "304,651",
        "Province": "3",
        "LocalBodiesType": ["Municipality"]
    },
    {
        "Name": "Dhading",
        "Nepali": "धादिङ",
        "Headquarters": "Nilkantha",
        "area": "1,926",
        "population": "336,067",
        "Province": "3",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },

    {
        "Name": "Kavrepalanchok",
        "Nepali": "काभ्रेपलान्चोक",
        "Headquarters": "Dhulikhel",
        "area": "1,396",
        "population": "381,937",
        "Province": "3",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Lalitpur",
        "Nepali": "ललितपुर",
        "Headquarters": "Lalitpur",
        "area": 385,
        "population": "468,132",
        "Province": "3",
        "LocalBodiesType": ["Municipality", "Rural Municipality", "Metropolitan"]
    },
    {
        "Name": "Nuwakot",
        "Nepali": "नुवाकोट",
        "Headquarters": "Bidur",
        "area": "1,121",
        "population": "277,471",
        "Province": "3",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Rasuwa",
        "Nepali": "रसुवा",
        "Headquarters": "Dhunche",
        "area": "1,544",
        "population": "43,300",
        "Province": "3",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Sindhupalchok",
        "Nepali": "सिन्धुपाल्चोक",
        "Headquarters": "Chautara",
        "area": "2,542",
        "population": "287,798",
        "Province": "3",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Chitwan",
        "Nepali": "चितवन",
        "Headquarters": "Bharatpur",
        "area": "2,218",
        "population": "579,984",
        "Province": "3",
        "LocalBodiesType": ["Municipality", "Rural Municipality", "Metropolitan"]
    },
    {
        "Name": "Makwanpur",
        "Nepali": "मकवानपुर",
        "Headquarters": "Hetauda",
        "area": "2,426",
        "population": "420,477",
        "Province": "3",
        "LocalBodiesType": [
            "Municipality",
            "Rural Municipality",
            "Sub-Metropolitan"
        ]
    },
    {
        "Name": "Baglung",
        "Nepali": "बागलुङ",
        "Headquarters": "Baglung",
        "area": "1,784",
        "population": "268,613",
        "Province": "Gandaki",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Gorkha",
        "Nepali": "गोरखा",
        "Headquarters": "Gorkha",
        "area": "3,610",
        "population": "271,061",
        "Province": "Gandaki",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Kaski",
        "Nepali": "कास्की",
        "Headquarters": "Pokhara",
        "area": "2,017",
        "population": "492,098",
        "Province": "Gandaki",
        "LocalBodiesType": ["Municipality", "Rural Municipality", "Metropolitan"]
    },
    {
        "Name": "Lamjung",
        "Nepali": "लमजुङ",
        "Headquarters": "Besisahar",
        "area": "1,692",
        "population": "167,724",
        "Province": "Gandaki",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Manang",
        "Nepali": "मनाङ",
        "Headquarters": "Chame",
        "area": "2,246",
        "population": "6,538",
        "Province": "Gandaki",
        "LocalBodiesType": ["Rural Municipality"]
    },
    {
        "Name": "Mustang",
        "Nepali": "मुस्ताङ",
        "Headquarters": "Jomsom",
        "area": "3,573",
        "population": "13,452",
        "Province": "Gandaki",
        "LocalBodiesType": ["Rural Municipality"]
    },
    {
        "Name": "Myagdi",
        "Nepali": "म्याग्दी",
        "Headquarters": "Beni",
        "area": "2,297",
        "population": "113,641",
        "Province": "Gandaki",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Nawalpur",
        "Nepali": "नवलपुर",
        "Headquarters": "Kawasoti",
        "area": "1,043.1",
        "population": "310,864",
        "Province": "Gandaki",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Parbat",
        "Nepali": "पर्वत",
        "Headquarters": "Kusma",
        "area": 494,
        "population": "146,590",
        "Province": "Gandaki",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Syangja",
        "Nepali": "स्याङग्जा",
        "Headquarters": "Putalibazar",
        "area": "1,164",
        "population": "289,148",
        "Province": "Gandaki",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Tanahun",
        "Nepali": "तनहुँ",
        "Headquarters": "Damauli",
        "area": "1,546",
        "population": "323,288",
        "Province": "Gandaki",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Kapilvastu",
        "Nepali": "कपिलवस्तु",
        "Headquarters": "Taulihawa",
        "area": "1,738",
        "population": "571,936",
        "Province": "5",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Parasi",
        "Nepali": "परासी",
        "Headquarters": "Ramgram",
        "area": 634.88,
        "population": "321,058",
        "Province": "5",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Rupandehi",
        "Nepali": "रुपन्देही",
        "Headquarters": "Siddharthanagar",
        "area": "1,360",
        "population": "880,196",
        "Province": "5",
        "LocalBodiesType": [
            "Municipality",
            "Rural Municipality",
            "Sub-Metropolitan"
        ]
    },
    {
        "Name": "Arghakhanchi",
        "Nepali": "अर्घाखाँची",
        "Headquarters": "Sandhikharka",
        "area": "1,193",
        "population": "197,632",
        "Province": "5",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Gulmi",
        "Nepali": "गुल्मी",
        "Headquarters": "Tamghas",
        "area": "1,149",
        "population": "280,160",
        "Province": "5",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Palpa",
        "Nepali": "पाल्पा",
        "Headquarters": "Tansen",
        "area": "1,373",
        "population": "261,180",
        "Province": "5",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Dang",
        "Nepali": "दाङ",
        "Headquarters": "Ghorahi",
        "area": "2,955",
        "population": "552,583",
        "Province": "5",
        "LocalBodiesType": [
            "Municipality",
            "Rural Municipality",
            "Sub-Metropolitan"
        ]
    },
    {
        "Name": "Pyuthan",
        "Nepali": "प्युठान",
        "Headquarters": "Pyuthan",
        "area": "1,309",
        "population": "228,102",
        "Province": "5",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Rolpa",
        "Nepali": "रोल्पा",
        "Headquarters": "Liwang",
        "area": "1,879",
        "population": "224,506",
        "Province": "5",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Eastern Rukum",
        "Nepali": "पूर्वी रूकुम",
        "Headquarters": "Rukumkot",
        "area": "1,161.13",
        "population": "53,018",
        "Province": "5",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Banke",
        "Nepali": "बाँके",
        "Headquarters": "Nepalganj",
        "area": "2,337",
        "population": "491,313",
        "Province": "5",
        "LocalBodiesType": [
            "Municipality",
            "Rural Municipality",
            "Sub-Metropolitan"
        ]
    },
    {
        "Name": "Bardiya",
        "Nepali": "बर्दिया",
        "Headquarters": "Gulariya",
        "area": "2,025",
        "population": "426,576",
        "Province": "5",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Western Rukum",
        "Nepali": "पश्चिमी रूकुम",
        "Headquarters": "Musikot",
        "area": "1,213.49",
        "population": "154,272",
        "Province": "Karnali",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Salyan",
        "Nepali": "सल्यान",
        "Headquarters": "Salyan",
        "area": "1,462",
        "population": "242,444",
        "Province": "Karnali",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Dolpa",
        "Nepali": "डोल्पा",
        "Headquarters": "Dunai",
        "area": "7,889",
        "population": "36,700",
        "Province": "Karnali",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Humla",
        "Nepali": "हुम्ला",
        "Headquarters": "Simikot",
        "area": "5,655",
        "population": "50,858",
        "Province": "Karnali",
        "LocalBodiesType": ["Rural Municipality"]
    },
    {
        "Name": "Jumla",
        "Nepali": "जुम्ला",
        "Headquarters": "Chandannath",
        "area": "2,531",
        "population": "108,921",
        "Province": "Karnali",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Kalikot",
        "Nepali": "कालिकोट",
        "Headquarters": "Manma",
        "area": "1,741",
        "population": "136,948",
        "Province": "Karnali",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Mugu",
        "Nepali": "मुगु",
        "Headquarters": "Gamgadhi",
        "area": "3,535",
        "population": "55,286",
        "Province": "Karnali",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Surkhet",
        "Nepali": "सुर्खेत",
        "Headquarters": "Birendranagar",
        "area": "2,451",
        "population": "350,804",
        "Province": "Karnali",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Dailekh",
        "Nepali": "दैलेख",
        "Headquarters": "Narayan",
        "area": "1,502",
        "population": "261,770",
        "Province": "Karnali",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Jajarkot",
        "Nepali": "जाजरकोट",
        "Headquarters": "Khalanga",
        "area": "2,230",
        "population": "171,304",
        "Province": "Karnali",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Kailali",
        "Nepali": "कैलाली",
        "Headquarters": "Dhangadhi",
        "area": "3,235",
        "population": "775,709",
        "Province": "SudurPaschim",
        "LocalBodiesType": [
            "Municipality",
            "Rural Municipality",
            "Sub-Metropolitan"
        ]
    },
    {
        "Name": "Achham",
        "Nepali": "अछाम",
        "Headquarters": "Mangalsen",
        "area": "1,680",
        "population": "257,477",
        "Province": "SudurPaschim",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Doti",
        "Nepali": "डोटी",
        "Headquarters": "Dipayal Silgadhi",
        "area": "2,025",
        "population": "211,746",
        "Province": "SudurPaschim",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Bajhang",
        "Nepali": "बझाङ",
        "Headquarters": "Jayaprithvi",
        "area": "3,422",
        "population": "195,159",
        "Province": "SudurPaschim",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Bajura",
        "Nepali": "बाजुरा",
        "Headquarters": "Martadi",
        "area": "2,188",
        "population": "134,912",
        "Province": "SudurPaschim",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Kanchanpur",
        "Nepali": "कंचनपुर",
        "Headquarters": "Bhimdatta",
        "area": "1,610",
        "population": "451,248",
        "Province": "SudurPaschim",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Dadeldhura",
        "Nepali": "डडेलधुरा",
        "Headquarters": "Amargadhi",
        "area": "1,538",
        "population": "142,094",
        "Province": "SudurPaschim",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Baitadi",
        "Nepali": "बैतडी",
        "Headquarters": "Dasharathchand",
        "area": "1,519",
        "population": "250,898",
        "Province": "SudurPaschim",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Darchula",
        "Nepali": "दार्चुला",
        "Headquarters": "Darchula",
        "area": "2,322",
        "population": "133,274",
        "Province": "SudurPaschim",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    }
];