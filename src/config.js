import firebase from "firebase";



export const firebaseConfig =
    {
        apiKey: "AIzaSyB-DdQRRDMnXe9bLE8JPNa7k-PaS3tt6RI",
        authDomain: "react-test-project-2672a.firebaseapp.com",
        projectId: "react-test-project-2672a",
        storageBucket: "react-test-project-2672a.appspot.com",
        messagingSenderId: "623433452626",
        appId: "1:623433452626:web:0ed86e7640afc7a070a38b",
        measurementId: "G-XJFS1C28J4"
    };

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
        "Area(km2)": 395,
        "Population (2011)": "1,744,240",
        "Province": "3",
        "LocalBodiesType": ["Municipality", "Metropolitan"]
    },
    {
        "Name": "Bhojpur",
        "Nepali": "भोजपुर",
        "Headquarters": "Bhojpur",
        "Population (2011)": "182,459",
        "Area(km2)": "1,507",
        "Province": "1",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Dhankuta",
        "Nepali": "धनकुटा",
        "Headquarters": "Dhankuta",
        "Population (2011)": "163,412",
        "Area(km2)": "0,892",
        "Province": "1",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Ilam",
        "Nepali": "इलाम",
        "Headquarters": "Ilam",
        "Population (2011)": "290,254",
        "Area(km2)": "1,703",
        "Province": "1",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Jhapa",
        "Nepali": "झापा",
        "Headquarters": "Bhadrapur",
        "Population (2011)": "812,650",
        "Area(km2)": "1,606",
        "Province": "1",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Khotang",
        "Nepali": "खोटाँग",
        "Headquarters": "Diktel",
        "Population (2011)": "206,312",
        "Area(km2)": "1,591",
        "Province": "1",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Morang",
        "Nepali": "मोरंग",
        "Headquarters": "Biratnagar",
        "Population (2011)": "965,370",
        "Area(km2)": "1,855",
        "Province": "1",
        "LocalBodiesType": ["Municipality", "Rural Municipality", "Metropolitan"]
    },
    {
        "Name": "Okhaldhunga",
        "Nepali": "ओखलढुंगा",
        "Headquarters": "Siddhicharan",
        "Population (2011)": "147,984",
        "Area(km2)": "1,074",
        "Province": "1",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Panchthar",
        "Nepali": "पांचथर",
        "Headquarters": "Phidim",
        "Population (2011)": "191,817",
        "Area(km2)": "1,241",
        "Province": "1",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Sankhuwasabha",
        "Nepali": "संखुवासभा",
        "Headquarters": "Khandbari",
        "Population (2011)": "158,742",
        "Area(km2)": "3,480",
        "Province": "1",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Solukhumbu",
        "Nepali": "सोलुखुम्बू",
        "Headquarters": "Salleri",
        "Population (2011)": "105,886",
        "Area(km2)": "3,312",
        "Province": "1",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Sunsari",
        "Nepali": "सुनसरी",
        "Headquarters": "Inaruwa",
        "Population (2011)": "763,497",
        "Area(km2)": "1,257",
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
        "Population (2011)": "127,461",
        "Area(km2)": "3,646",
        "Province": "1",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Terhathum",
        "Nepali": "तेह्रथुम",
        "Headquarters": "Myanglung",
        "Population (2011)": "113,111",
        "Area(km2)": "0,679",
        "Province": "1",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Udayapur",
        "Nepali": "उदयपुर",
        "Headquarters": "Gaighat",
        "Population (2011)": "317,532",
        "Area(km2)": "2,063",
        "Province": "1",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Saptari",
        "Nepali": "सप्तरी",
        "Headquarters": "Rajbiraj",
        "Population (2011)": "639,284",
        "Area(km2)": "1,363",
        "Province": "2",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Parsa",
        "Nepali": "पर्सा",
        "Headquarters": "Birgunj",
        "Population (2011)": "601,017",
        "Area(km2)": "1,353",
        "Province": "2",
        "LocalBodiesType": ["Municipality", "Rural Municipality", "Metropolitan"]
    },
    {
        "Name": "Sarlahi",
        "Nepali": "सर्लाही",
        "Headquarters": "Malangwa",
        "Population (2011)": "769,729",
        "Area(km2)": "1,259",
        "Province": "2",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Bara",
        "Nepali": "बारा",
        "Headquarters": "Kalaiya",
        "Population (2011)": "687,708",
        "Area(km2)": "1,190",
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
        "Population (2011)": "637,328",
        "Area(km2)": "1,188",
        "Province": "2",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Dhanusha",
        "Nepali": "धनुषा",
        "Headquarters": "Janakpur",
        "Population (2011)": "754,777",
        "Area(km2)": "1,180",
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
        "Population (2011)": "686,722",
        "Area(km2)": "1,126",
        "Province": "2",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Mahottari",
        "Nepali": "महोत्तरी",
        "Headquarters": "Jaleshwar",
        "Population (2011)": "627,580",
        "Area(km2)": "1,002",
        "Province": "2",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Sindhuli",
        "Nepali": "सिन्धुली",
        "Headquarters": "Kamalamai",
        "Area(km2)": "2,491",
        "Population (2011)": "296,192",
        "Province": "3",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Ramechhap",
        "Nepali": "रामेछाप",
        "Headquarters": "Manthali",
        "Area(km2)": "1,546",
        "Population (2011)": "202,646",
        "Province": "3",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Dolakha",
        "Nepali": "दोलखा",
        "Headquarters": "Bhimeshwar",
        "Area(km2)": "2,191",
        "Population (2011)": "186,557",
        "Province": "3",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Bhaktapur",
        "Nepali": "भक्तपुर",
        "Headquarters": "Bhaktapur",
        "Area(km2)": 119,
        "Population (2011)": "304,651",
        "Province": "3",
        "LocalBodiesType": ["Municipality"]
    },
    {
        "Name": "Dhading",
        "Nepali": "धादिङ",
        "Headquarters": "Nilkantha",
        "Area(km2)": "1,926",
        "Population (2011)": "336,067",
        "Province": "3",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },

    {
        "Name": "Kavrepalanchok",
        "Nepali": "काभ्रेपलान्चोक",
        "Headquarters": "Dhulikhel",
        "Area(km2)": "1,396",
        "Population (2011)": "381,937",
        "Province": "3",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Lalitpur",
        "Nepali": "ललितपुर",
        "Headquarters": "Lalitpur",
        "Area(km2)": 385,
        "Population (2011)": "468,132",
        "Province": "3",
        "LocalBodiesType": ["Municipality", "Rural Municipality", "Metropolitan"]
    },
    {
        "Name": "Nuwakot",
        "Nepali": "नुवाकोट",
        "Headquarters": "Bidur",
        "Area(km2)": "1,121",
        "Population (2011)": "277,471",
        "Province": "3",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Rasuwa",
        "Nepali": "रसुवा",
        "Headquarters": "Dhunche",
        "Area(km2)": "1,544",
        "Population (2011)": "43,300",
        "Province": "3",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Sindhupalchok",
        "Nepali": "सिन्धुपाल्चोक",
        "Headquarters": "Chautara",
        "Area(km2)": "2,542",
        "Population (2011)": "287,798",
        "Province": "3",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Chitwan",
        "Nepali": "चितवन",
        "Headquarters": "Bharatpur",
        "Area(km2)": "2,218",
        "Population (2011)": "579,984",
        "Province": "3",
        "LocalBodiesType": ["Municipality", "Rural Municipality", "Metropolitan"]
    },
    {
        "Name": "Makwanpur",
        "Nepali": "मकवानपुर",
        "Headquarters": "Hetauda",
        "Area(km2)": "2,426",
        "Population (2011)": "420,477",
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
        "Area(km2)": "1,784",
        "Population (2011)": "268,613",
        "Province": "Gandaki",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Gorkha",
        "Nepali": "गोरखा",
        "Headquarters": "Gorkha",
        "Area(km2)": "3,610",
        "Population (2011)": "271,061",
        "Province": "Gandaki",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Kaski",
        "Nepali": "कास्की",
        "Headquarters": "Pokhara",
        "Area(km2)": "2,017",
        "Population (2011)": "492,098",
        "Province": "Gandaki",
        "LocalBodiesType": ["Municipality", "Rural Municipality", "Metropolitan"]
    },
    {
        "Name": "Lamjung",
        "Nepali": "लमजुङ",
        "Headquarters": "Besisahar",
        "Area(km2)": "1,692",
        "Population (2011)": "167,724",
        "Province": "Gandaki",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Manang",
        "Nepali": "मनाङ",
        "Headquarters": "Chame",
        "Area(km2)": "2,246",
        "Population (2011)": "6,538",
        "Province": "Gandaki",
        "LocalBodiesType": ["Rural Municipality"]
    },
    {
        "Name": "Mustang",
        "Nepali": "मुस्ताङ",
        "Headquarters": "Jomsom",
        "Area(km2)": "3,573",
        "Population (2011)": "13,452",
        "Province": "Gandaki",
        "LocalBodiesType": ["Rural Municipality"]
    },
    {
        "Name": "Myagdi",
        "Nepali": "म्याग्दी",
        "Headquarters": "Beni",
        "Area(km2)": "2,297",
        "Population (2011)": "113,641",
        "Province": "Gandaki",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Nawalpur",
        "Nepali": "नवलपुर",
        "Headquarters": "Kawasoti",
        "Area(km2)": "1,043.1",
        "Population (2011)": "310,864",
        "Province": "Gandaki",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Parbat",
        "Nepali": "पर्वत",
        "Headquarters": "Kusma",
        "Area(km2)": 494,
        "Population (2011)": "146,590",
        "Province": "Gandaki",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Syangja",
        "Nepali": "स्याङग्जा",
        "Headquarters": "Putalibazar",
        "Area(km2)": "1,164",
        "Population (2011)": "289,148",
        "Province": "Gandaki",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Tanahun",
        "Nepali": "तनहुँ",
        "Headquarters": "Damauli",
        "Area(km2)": "1,546",
        "Population (2011)": "323,288",
        "Province": "Gandaki",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Kapilvastu",
        "Nepali": "कपिलवस्तु",
        "Headquarters": "Taulihawa",
        "Area(km2)": "1,738",
        "Population (2011)": "571,936",
        "Province": "5",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Parasi",
        "Nepali": "परासी",
        "Headquarters": "Ramgram",
        "Area(km2)": 634.88,
        "Population (2011)": "321,058",
        "Province": "5",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Rupandehi",
        "Nepali": "रुपन्देही",
        "Headquarters": "Siddharthanagar",
        "Area(km2)": "1,360",
        "Population (2011)": "880,196",
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
        "Area(km2)": "1,193",
        "Population (2011)": "197,632",
        "Province": "5",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Gulmi",
        "Nepali": "गुल्मी",
        "Headquarters": "Tamghas",
        "Area(km2)": "1,149",
        "Population (2011)": "280,160",
        "Province": "5",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Palpa",
        "Nepali": "पाल्पा",
        "Headquarters": "Tansen",
        "Area(km2)": "1,373",
        "Population (2011)": "261,180",
        "Province": "5",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Dang",
        "Nepali": "दाङ",
        "Headquarters": "Ghorahi",
        "Area(km2)": "2,955",
        "Population (2011)": "552,583",
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
        "Area(km2)": "1,309",
        "Population (2011)": "228,102",
        "Province": "5",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Rolpa",
        "Nepali": "रोल्पा",
        "Headquarters": "Liwang",
        "Area(km2)": "1,879",
        "Population (2011)": "224,506",
        "Province": "5",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Eastern Rukum",
        "Nepali": "पूर्वी रूकुम",
        "Headquarters": "Rukumkot",
        "Area(km2)": "1,161.13",
        "Population (2011)": "53,018",
        "Province": "5",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Banke",
        "Nepali": "बाँके",
        "Headquarters": "Nepalganj",
        "Area(km2)": "2,337",
        "Population (2011)": "491,313",
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
        "Area(km2)": "2,025",
        "Population (2011)": "426,576",
        "Province": "5",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Western Rukum",
        "Nepali": "पश्चिमी रूकुम",
        "Headquarters": "Musikot",
        "Area(km2)": "1,213.49",
        "Population (2011)": "154,272",
        "Province": "Karnali",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Salyan",
        "Nepali": "सल्यान",
        "Headquarters": "Salyan",
        "Area(km2)": "1,462",
        "Population (2011)": "242,444",
        "Province": "Karnali",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Dolpa",
        "Nepali": "डोल्पा",
        "Headquarters": "Dunai",
        "Area(km2)": "7,889",
        "Population (2011)": "36,700",
        "Province": "Karnali",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Humla",
        "Nepali": "हुम्ला",
        "Headquarters": "Simikot",
        "Area(km2)": "5,655",
        "Population (2011)": "50,858",
        "Province": "Karnali",
        "LocalBodiesType": ["Rural Municipality"]
    },
    {
        "Name": "Jumla",
        "Nepali": "जुम्ला",
        "Headquarters": "Chandannath",
        "Area(km2)": "2,531",
        "Population (2011)": "108,921",
        "Province": "Karnali",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Kalikot",
        "Nepali": "कालिकोट",
        "Headquarters": "Manma",
        "Area(km2)": "1,741",
        "Population (2011)": "136,948",
        "Province": "Karnali",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Mugu",
        "Nepali": "मुगु",
        "Headquarters": "Gamgadhi",
        "Area(km2)": "3,535",
        "Population (2011)": "55,286",
        "Province": "Karnali",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Surkhet",
        "Nepali": "सुर्खेत",
        "Headquarters": "Birendranagar",
        "Area(km2)": "2,451",
        "Population (2011)": "350,804",
        "Province": "Karnali",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Dailekh",
        "Nepali": "दैलेख",
        "Headquarters": "Narayan",
        "Area(km2)": "1,502",
        "Population (2011)": "261,770",
        "Province": "Karnali",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Jajarkot",
        "Nepali": "जाजरकोट",
        "Headquarters": "Khalanga",
        "Area(km2)": "2,230",
        "Population (2011)": "171,304",
        "Province": "Karnali",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Kailali",
        "Nepali": "कैलाली",
        "Headquarters": "Dhangadhi",
        "Area(km2)": "3,235",
        "Population (2011)": "775,709",
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
        "Area(km2)": "1,680",
        "Population (2011)": "257,477",
        "Province": "SudurPaschim",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Doti",
        "Nepali": "डोटी",
        "Headquarters": "Dipayal Silgadhi",
        "Area(km2)": "2,025",
        "Population (2011)": "211,746",
        "Province": "SudurPaschim",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Bajhang",
        "Nepali": "बझाङ",
        "Headquarters": "Jayaprithvi",
        "Area(km2)": "3,422",
        "Population (2011)": "195,159",
        "Province": "SudurPaschim",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Bajura",
        "Nepali": "बाजुरा",
        "Headquarters": "Martadi",
        "Area(km2)": "2,188",
        "Population (2011)": "134,912",
        "Province": "SudurPaschim",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Kanchanpur",
        "Nepali": "कंचनपुर",
        "Headquarters": "Bhimdatta",
        "Area(km2)": "1,610",
        "Population (2011)": "451,248",
        "Province": "SudurPaschim",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Dadeldhura",
        "Nepali": "डडेलधुरा",
        "Headquarters": "Amargadhi",
        "Area(km2)": "1,538",
        "Population (2011)": "142,094",
        "Province": "SudurPaschim",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Baitadi",
        "Nepali": "बैतडी",
        "Headquarters": "Dasharathchand",
        "Area(km2)": "1,519",
        "Population (2011)": "250,898",
        "Province": "SudurPaschim",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    },
    {
        "Name": "Darchula",
        "Nepali": "दार्चुला",
        "Headquarters": "Darchula",
        "Area(km2)": "2,322",
        "Population (2011)": "133,274",
        "Province": "SudurPaschim",
        "LocalBodiesType": ["Municipality", "Rural Municipality"]
    }
];