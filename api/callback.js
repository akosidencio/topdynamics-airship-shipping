const Router = require('koa-router')
const koaBody = require('koa-body')
const router = new Router()
const axios = require('axios')
// provinces
const phProvinces =  [
    {
        "id": 3846585024678,
        "country_id": 366676476070,
        "name": "Abra",
        "code": "PH-ABR",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846585057446,
        "country_id": 366676476070,
        "name": "Agusan del Norte",
        "code": "PH-AGN",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846585090214,
        "country_id": 366676476070,
        "name": "Agusan del Sur",
        "code": "PH-AGS",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846585122982,
        "country_id": 366676476070,
        "name": "Aklan",
        "code": "PH-AKL",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846585155750,
        "country_id": 366676476070,
        "name": "Albay",
        "code": "PH-ALB",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846585188518,
        "country_id": 366676476070,
        "name": "Antique",
        "code": "PH-ANT",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846585221286,
        "country_id": 366676476070,
        "name": "Apayao",
        "code": "PH-APA",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846585254054,
        "country_id": 366676476070,
        "name": "Aurora",
        "code": "PH-AUR",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846585286822,
        "country_id": 366676476070,
        "name": "Basilan",
        "code": "PH-BAS",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846585319590,
        "country_id": 366676476070,
        "name": "Bataan",
        "code": "PH-BAN",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846585352358,
        "country_id": 366676476070,
        "name": "Batanes",
        "code": "PH-BTN",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846585385126,
        "country_id": 366676476070,
        "name": "Batangas",
        "code": "PH-BTG",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846585417894,
        "country_id": 366676476070,
        "name": "Benguet",
        "code": "PH-BEN",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846585450662,
        "country_id": 366676476070,
        "name": "Biliran",
        "code": "PH-BIL",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846585483430,
        "country_id": 366676476070,
        "name": "Bohol",
        "code": "PH-BOH",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846585516198,
        "country_id": 366676476070,
        "name": "Bukidnon",
        "code": "PH-BUK",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846585548966,
        "country_id": 366676476070,
        "name": "Bulacan",
        "code": "PH-BUL",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846585581734,
        "country_id": 366676476070,
        "name": "Cagayan",
        "code": "PH-CAG",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846585614502,
        "country_id": 366676476070,
        "name": "Camarines Norte",
        "code": "PH-CAN",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846585647270,
        "country_id": 366676476070,
        "name": "Camarines Sur",
        "code": "PH-CAS",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846585680038,
        "country_id": 366676476070,
        "name": "Camiguin",
        "code": "PH-CAM",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846585712806,
        "country_id": 366676476070,
        "name": "Capiz",
        "code": "PH-CAP",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846585745574,
        "country_id": 366676476070,
        "name": "Catanduanes",
        "code": "PH-CAT",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846585778342,
        "country_id": 366676476070,
        "name": "Cavite",
        "code": "PH-CAV",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846585811110,
        "country_id": 366676476070,
        "name": "Cebu",
        "code": "PH-CEB",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846585843878,
        "country_id": 366676476070,
        "name": "Cotabato",
        "code": "PH-NCO",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846585942182,
        "country_id": 366676476070,
        "name": "Davao de Oro",
        "code": "PH-COM",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846585974950,
        "country_id": 366676476070,
        "name": "Davao del Norte",
        "code": "PH-DAV",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846586007718,
        "country_id": 366676476070,
        "name": "Davao del Sur",
        "code": "PH-DAS",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846585876646,
        "country_id": 366676476070,
        "name": "Davao Occidental",
        "code": "PH-DVO",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846585909414,
        "country_id": 366676476070,
        "name": "Davao Oriental",
        "code": "PH-DAO",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846586040486,
        "country_id": 366676476070,
        "name": "Dinagat Islands",
        "code": "PH-DIN",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846586073254,
        "country_id": 366676476070,
        "name": "Eastern Samar",
        "code": "PH-EAS",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846586106022,
        "country_id": 366676476070,
        "name": "Guimaras",
        "code": "PH-GUI",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846586138790,
        "country_id": 366676476070,
        "name": "Ifugao",
        "code": "PH-IFU",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846586171558,
        "country_id": 366676476070,
        "name": "Ilocos Norte",
        "code": "PH-ILN",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846586204326,
        "country_id": 366676476070,
        "name": "Ilocos Sur",
        "code": "PH-ILS",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846586237094,
        "country_id": 366676476070,
        "name": "Iloilo",
        "code": "PH-ILI",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846586269862,
        "country_id": 366676476070,
        "name": "Isabela",
        "code": "PH-ISA",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846586302630,
        "country_id": 366676476070,
        "name": "Kalinga",
        "code": "PH-KAL",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846586335398,
        "country_id": 366676476070,
        "name": "La Union",
        "code": "PH-LUN",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846586368166,
        "country_id": 366676476070,
        "name": "Laguna",
        "code": "PH-LAG",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846586400934,
        "country_id": 366676476070,
        "name": "Lanao del Norte",
        "code": "PH-LAN",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846586433702,
        "country_id": 366676476070,
        "name": "Lanao del Sur",
        "code": "PH-LAS",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846586466470,
        "country_id": 366676476070,
        "name": "Leyte",
        "code": "PH-LEY",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846586499238,
        "country_id": 366676476070,
        "name": "Maguindanao",
        "code": "PH-MAG",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846586532006,
        "country_id": 366676476070,
        "name": "Marinduque",
        "code": "PH-MAD",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846586564774,
        "country_id": 366676476070,
        "name": "Masbate",
        "code": "PH-MAS",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846586597542,
        "country_id": 366676476070,
        "name": "Metro Manila",
        "code": "PH-00",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846586630310,
        "country_id": 366676476070,
        "name": "Misamis Occidental",
        "code": "PH-MSC",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846586663078,
        "country_id": 366676476070,
        "name": "Misamis Oriental",
        "code": "PH-MSR",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846586695846,
        "country_id": 366676476070,
        "name": "Mountain Province",
        "code": "PH-MOU",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846586728614,
        "country_id": 366676476070,
        "name": "Negros Occidental",
        "code": "PH-NEC",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846586761382,
        "country_id": 366676476070,
        "name": "Negros Oriental",
        "code": "PH-NER",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846586794150,
        "country_id": 366676476070,
        "name": "Northern Samar",
        "code": "PH-NSA",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846586826918,
        "country_id": 366676476070,
        "name": "Nueva Ecija",
        "code": "PH-NUE",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846586859686,
        "country_id": 366676476070,
        "name": "Nueva Vizcaya",
        "code": "PH-NUV",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846586892454,
        "country_id": 366676476070,
        "name": "Occidental Mindoro",
        "code": "PH-MDC",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846586925222,
        "country_id": 366676476070,
        "name": "Oriental Mindoro",
        "code": "PH-MDR",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846586957990,
        "country_id": 366676476070,
        "name": "Palawan",
        "code": "PH-PLW",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846586990758,
        "country_id": 366676476070,
        "name": "Pampanga",
        "code": "PH-PAM",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846587023526,
        "country_id": 366676476070,
        "name": "Pangasinan",
        "code": "PH-PAN",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846587056294,
        "country_id": 366676476070,
        "name": "Quezon",
        "code": "PH-QUE",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846587089062,
        "country_id": 366676476070,
        "name": "Quirino",
        "code": "PH-QUI",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846587121830,
        "country_id": 366676476070,
        "name": "Rizal",
        "code": "PH-RIZ",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846587154598,
        "country_id": 366676476070,
        "name": "Romblon",
        "code": "PH-ROM",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846587187366,
        "country_id": 366676476070,
        "name": "Samar",
        "code": "PH-WSA",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846587220134,
        "country_id": 366676476070,
        "name": "Sarangani",
        "code": "PH-SAR",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846587252902,
        "country_id": 366676476070,
        "name": "Siquijor",
        "code": "PH-SIG",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846587285670,
        "country_id": 366676476070,
        "name": "Sorsogon",
        "code": "PH-SOR",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846587318438,
        "country_id": 366676476070,
        "name": "South Cotabato",
        "code": "PH-SCO",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846587351206,
        "country_id": 366676476070,
        "name": "Southern Leyte",
        "code": "PH-SLE",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846587383974,
        "country_id": 366676476070,
        "name": "Sultan Kudarat",
        "code": "PH-SUK",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846587416742,
        "country_id": 366676476070,
        "name": "Sulu",
        "code": "PH-SLU",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846587449510,
        "country_id": 366676476070,
        "name": "Surigao del Norte",
        "code": "PH-SUN",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846587482278,
        "country_id": 366676476070,
        "name": "Surigao del Sur",
        "code": "PH-SUR",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846587515046,
        "country_id": 366676476070,
        "name": "Tarlac",
        "code": "PH-TAR",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846587547814,
        "country_id": 366676476070,
        "name": "Tawi-Tawi",
        "code": "PH-TAW",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846587580582,
        "country_id": 366676476070,
        "name": "Zambales",
        "code": "PH-ZMB",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846587646118,
        "country_id": 366676476070,
        "name": "Zamboanga del Norte",
        "code": "PH-ZAN",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846587678886,
        "country_id": 366676476070,
        "name": "Zamboanga del Sur",
        "code": "PH-ZAS",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    },
    {
        "id": 3846587613350,
        "country_id": 366676476070,
        "name": "Zamboanga Sibugay",
        "code": "PH-ZSI",
        "tax": 0,
        "tax_name": "VAT",
        "tax_type": null,
        "shipping_zone_id": null,
        "tax_percentage": 0
    }
];
// sender ids
const sellersIds = {
    'topdynamics': {
        'airagraceatabay@gmail.com': 5346,
        'isabelamay.villa@gmail.com': 5347,
        'keishasegui@gmail.com': 5348,
        'dannyolaguer@yahoo.com': 5351,
        'maricor.sotto.16.ms@gmail.com': 5352,
        'emelypineda215@gmail.com': 5353,
        'alyssa.marielle16@gmail.com': 5354,
        'jersheydizon8@gmail.com': 5355,
        'gregorioangelica653@gmail.com': 5356,
        'cejygorgonio07@gmail.com': 5357,
        'shinhill07@gmail.com': 5358,
        'tpauline12@yahoo.com': 5359,
        'junebviray@yahoo.com': 5360,
        'nerisscinco@yahoo.com': 5361,
        'miletaquino@gmail.com': 5362,
        'gwenlibrodo@yahoo.com': 5363,
        'a.endrenal@gmail.com': 5364,
        'shekinahsummer@gmail.com': 5365,
        'chlsgdrnb@gmail.com': 5366,
        'waynebcastillo@hotmail.com': 5367,
        'jairrayap14@gmail.com': 5368,
        'joannasingson00@gmail.com': 5369,
        'mkzamoraa@gmail.com': 5370,
        'maraaadg@gmail.com': 5371,
        'kimberlycabugao26@gmail.com': 5372,
        'estrada.josefina@gmail.com': 5373,
        'kachina098@gmail.com': 5374,
        'chitoaguro@gmail.com': 5406,
        'avcelestinea@gmail.com': 5407,
        'diazsarahjeane9@gmail.com': 5408,
        'tinlaceda@yahoo.com': 5409,
        'meaghan.reyess@gmail.com': 5410,
        'jesdecastro94@gmail.com': 5411,
        'lutherauthor@gmail.com': 5412,
        'diolapogi@gmail.com': 5417,
        'anmaje.calvan@gmail.com': 5418,
        'balaneannshazny@gmail.com': 5419,
        'josefelcastillo@gmail.com': 5420,
        'alextramae@gmail.com': 5422,
        'eveaguila.medbilling@gmail.com': 5423,
        'paisley.retail@gmail.com': 5424,
        'scarletmedos@gmail.com': 5425,
        'keykbianca@gmail.com': 5426,
        'rosenda.m.orbillo@gmail.com': 5428,
        'aubreymendoza0106@gmail.com': 5429,
        'gelabau03@gmail.com': 5430,
        'peredowilson8888@gmail.com': 5431,
        'yashreinpaula@gmail.com': 5432,
        'alyssatueres@gmail.com': 5435,
        'luisamaula@gmail.com': 5436,
        'ganalgianna@gmail.com': 5437,
        'estrada.josefina@gmail.com': 5438,
        'jasmintan.books@gmail.com': 5439,
        'airagraceatabay@gmail.com': 5441,
        'isabelamay.villa@gmail.com': 5442,
        'dannyolaguer@yahoo.com': 5443,
        'maricor.sotto.16.ms@gmail.com': 5444,
        'alyssa.marielle16@gmail.com': 5445,
        'jersheydizon8@gmail.com': 5446,
        'shinhill07@gmail.com': 5447,
        'tpauline12@yahoo.com': 5449,
        'miletaquino@gmail.com': 5450,
        'gwenlibrodo@yahoo.com': 5451,
    },
}
// Api keys
const topDynamicsKeys = {
    secretKey: '70e72ad8-bf08-445d-a3db-b73e7781f7b3',
    apiKey: '52f24a29-44e8-41b5-8569-59491ccd6c69'
}
// Couriers
const topDynamics = [
    {
        "id": 1401,
        "name": "Abra"
    },
    {
        "id": 1602,
        "name": "Agusan Del Norte"
    },
    {
        "id": 1603,
        "name": "Agusan Del Sur"
    },
    {
        "id": 604,
        "name": "Aklan"
    },
    {
        "id": 505,
        "name": "Albay"
    },
    {
        "id": 606,
        "name": "Antique"
    },
    {
        "id": 1481,
        "name": "Apayao"
    },
    {
        "id": 377,
        "name": "Aurora"
    },
    {
        "id": 1507,
        "name": "Basilan"
    },
    {
        "id": 308,
        "name": "Bataan"
    },
    {
        "id": 209,
        "name": "Batanes"
    },
    {
        "id": 410,
        "name": "Batangas"
    },
    {
        "id": 1411,
        "name": "Benguet"
    },
    {
        "id": 878,
        "name": "Biliran"
    },
    {
        "id": 712,
        "name": "Bohol"
    },
    {
        "id": 1013,
        "name": "Bukidnon"
    },
    {
        "id": 314,
        "name": "Bulacan"
    },
    {
        "id": 215,
        "name": "Cagayan"
    },
    {
        "id": 516,
        "name": "Camarines Norte"
    },
    {
        "id": 517,
        "name": "Camarines Sur"
    },
    {
        "id": 1018,
        "name": "Camiguin"
    },
    {
        "id": 619,
        "name": "Capiz"
    },
    {
        "id": 520,
        "name": "Catanduanes"
    },
    {
        "id": 421,
        "name": "Cavite"
    },
    {
        "id": 722,
        "name": "Cebu"
    },
    {
        "id": 1182,
        "name": "Compostela Valley"
    },
    {
        "id": 1247,
        "name": "Cotabato"
    },
    {
        "id": 1298,
        "name": "Cotabato City"
    },
    {
        "id": 1123,
        "name": "Davao Del Norte"
    },
    {
        "id": 1124,
        "name": "Davao Del Sur"
    },
    {
        "id": 1186,
        "name": "Davao Occidental"
    },
    {
        "id": 1125,
        "name": "Davao Oriental"
    },
    {
        "id": 1685,
        "name": "Dinagat Islands"
    },
    {
        "id": 826,
        "name": "Eastern Samar"
    },
    {
        "id": 679,
        "name": "Guimaras"
    },
    {
        "id": 1427,
        "name": "Ifugao"
    },
    {
        "id": 128,
        "name": "Ilocos Norte"
    },
    {
        "id": 129,
        "name": "Ilocos Sur"
    },
    {
        "id": 630,
        "name": "Iloilo"
    },
    {
        "id": 231,
        "name": "Isabela"
    },
    {
        "id": 1432,
        "name": "Kalinga"
    },
    {
        "id": 133,
        "name": "La Union"
    },
    {
        "id": 434,
        "name": "Laguna"
    },
    {
        "id": 1035,
        "name": "Lanao Del Norte"
    },
    {
        "id": 1536,
        "name": "Lanao Del Sur"
    },
    {
        "id": 837,
        "name": "Leyte"
    },
    {
        "id": 1538,
        "name": "Maguindanao"
    },
    {
        "id": 1740,
        "name": "Marinduque"
    },
    {
        "id": 541,
        "name": "Masbate"
    },
    {
        "id": 1339,
        "name": "Metro Manila"
    },
    {
        "id": 1042,
        "name": "Misamis Occidental"
    },
    {
        "id": 1043,
        "name": "Misamis Oriental"
    },
    {
        "id": 1444,
        "name": "Mountain Province"
    },
    {
        "id": 645,
        "name": "Negros Occidental"
    },
    {
        "id": 746,
        "name": "Negros Oriental"
    },
    {
        "id": 848,
        "name": "Northern Samar"
    },
    {
        "id": 349,
        "name": "Nueva Ecija"
    },
    {
        "id": 250,
        "name": "Nueva Vizcaya"
    },
    {
        "id": 1751,
        "name": "Occidental Mindoro"
    },
    {
        "id": 1752,
        "name": "Oriental Mindoro"
    },
    {
        "id": 1753,
        "name": "Palawan"
    },
    {
        "id": 354,
        "name": "Pampanga"
    },
    {
        "id": 155,
        "name": "Pangasinan"
    },
    {
        "id": 456,
        "name": "Quezon"
    },
    {
        "id": 257,
        "name": "Quirino"
    },
    {
        "id": 458,
        "name": "Rizal"
    },
    {
        "id": 1759,
        "name": "Romblon"
    },
    {
        "id": 1280,
        "name": "Sarangani"
    },
    {
        "id": 761,
        "name": "Siquijor"
    },
    {
        "id": 562,
        "name": "Sorsogon"
    },
    {
        "id": 1263,
        "name": "South Cotabato"
    },
    {
        "id": 864,
        "name": "Southern Leyte"
    },
    {
        "id": 1265,
        "name": "Sultan Kudarat"
    },
    {
        "id": 1566,
        "name": "Sulu"
    },
    {
        "id": 1667,
        "name": "Surigao Del Norte"
    },
    {
        "id": 1668,
        "name": "Surigao Del Sur"
    },
    {
        "id": 369,
        "name": "Tarlac"
    },
    {
        "id": 1570,
        "name": "Tawi-tawi"
    },
    {
        "id": 371,
        "name": "Zambales"
    },
    {
        "id": 972,
        "name": "Zamboanga Del Norte"
    },
    {
        "id": 973,
        "name": "Zamboanga Del Sur"
    },
    {
        "id": 983,
        "name": "Zamboanga Sibugay"
    }
];
// calculate / get shipping fees
const calculateShipping = async (name, courierProvinces, apiKey, secretKey, sender_id, destinationProvince, destinationCity, destinationAddress, sellerProvince) => {
    const isDestinationServiceable = courierProvinces.some((el) => el.name === destinationProvince);
    let shippingRate = null;
    if(isDestinationServiceable) {
        const isSellerServiceable = courierProvinces.some((el) => el.name === sellerProvince);
        if(isSellerServiceable) {
            const province = courierProvinces.find((el) => el.name === destinationProvince);
            try {
                const availableCities = await axios.get(`https://rest.airship.live/v1/provinces/${province.id}`, {
                    headers:
                        {
                            'X-API-KEY': apiKey,
                            'X-SECRET-KEY': secretKey,
                        }
                })
                if (availableCities && availableCities.data.data.length > 0) {
                    const city = availableCities && availableCities.data.data.find((el) => el.name.trim().toLowerCase() === `${destinationCity.toLowerCase()} City` || el.name.trim().toLowerCase() === `${destinationCity.toLowerCase()} city` || el.name.trim().toLowerCase() === destinationCity.toLowerCase())
                    if(city) {
                        // get city package types
                        const availablePackages = await axios.get(`https://rest.airship.live/v1/package_types?city_id=${city.id}`, {
                            headers:
                                {
                                    'X-API-KEY': apiKey,
                                    'X-SECRET-KEY': secretKey,
                                }
                        })
                        if(availablePackages && availablePackages.data.data.length > 0) {
                            const params = {
                                sender_address_id: sender_id,
                                receiver_address: destinationAddress,
                                receiver_city_id: city.id,
                                receiver_province_id: province.id,
                                package_type_id: availablePackages.data.data[2].id
                            }
                            const quotations = await axios.post('https://rest.airship.live/v1/quotations', params, {
                                headers: {
                                    'X-API-KEY': apiKey,
                                    'X-SECRET-KEY': secretKey,
                                }
                            })
                            if (quotations && quotations.data.data) {
                                const rate = {
                                    service_name: name,
                                    service_code: name.toString()
                                        .trim()
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")
                                        .replace(/[^\w\-]+/g, "")
                                        .replace(/\-\-+/g, "-")
                                        .replace(/^-+/, "")
                                        .replace(/-+$/, ""),
                                    description:  name,
                                    currency:     'PHP',
                                    total_price:  quotations.data.data.shipping_fee * 100,
                                    min_delivery_date: "",
                                    max_delivery_date: "",
                                }
                                shippingRate = rate
                                return shippingRate;
                            }
                        }
                    }
                }
            } catch(err) {}
        }
    }
    return shippingRate;
}

router.post('/api/callback', koaBody(), async (ctx, next) => {
    // get request body
    const origin = ctx.request.body.rate.origin
    const destination = ctx.request.body.rate.destination
    const items = ctx.request.body.rate.items
    const sellers = [...new Set(items.map(item => item.vendor))]

    const province = phProvinces.find((el) => el.code === destination.province);
    const destinationProvince = province.name;
    const destinationCity = destination.city;
    const destinationAddress = destination.address1

    const rates = [];

    if (items.length >= 2 && sellers.length > 0) { // if multiple seller
        let sellerInfos = [];
        for(let item of items) {
            const filter = {
                product_name: item.name
            }
            const sellerProduct = await axios.get(`https://mvmapi.webkul.com/api/v2/products.json?filter=${JSON.stringify(filter)}`, {
                headers: {
                    'Authorization': 'Bearer OGViOGE0OTc2MzdlMGZmNTFkMDA4YmE0ZjU3NmNkZjk5MzNkMWMzZDQ0YzQxMjY1YTgxMjlhMTQxNmRlMWI2OQ'
                }
            })
            if(sellerProduct.data.products.length > 0) {
                const seller = await axios.get(`https://mvmapi.webkul.com/api/v2/sellers/${sellerProduct.data.products[0].seller_id}.json`, {
                    headers: {
                        'Authorization': 'Bearer OGViOGE0OTc2MzdlMGZmNTFkMDA4YmE0ZjU3NmNkZjk5MzNkMWMzZDQ0YzQxMjY1YTgxMjlhMTQxNmRlMWI2OQ'
                    }
                })
                if (seller && seller.data.seller) {
                    const parsedSeller = JSON.parse(seller.data.seller.custom_fields);
                    const id = seller.data.seller.id;
                    const sellerProvince = Object.values(parsedSeller)[0].value;
                    const sellerCity = seller.data.seller.city;
                    const sellerAddress = seller.data.seller.store_address;
                    const sellerEmail = seller.data.seller.email;
                    const sellerInfo = {
                        id: id,
                        province: sellerProvince,
                        address: sellerAddress,
                        email: sellerEmail,
                        city: sellerCity,
                        sellerIds: {
                            'topdynamics': sellersIds['topdynamics'][seller.data.seller.email] || null,
                        }
                    }
                    sellerInfos.push(sellerInfo)
                }
            }
        }
        const uniqueVendors = sellerInfos.filter((obj, index, self) =>
            index === self.findIndex((el) => (
                el['id'] === obj['id']
            ))
        )
        if(uniqueVendors.length > 0) {
            // top dynamics
            const topDynamicsFees = []
            for (let seller of uniqueVendors) {
                const topdynamicsSenderId = seller.sellerIds['topdynamics'];
                const topdynamicsRate = await calculateShipping('Top Dynamics', topDynamics, topDynamicsKeys.apiKey, topDynamicsKeys.secretKey, topdynamicsSenderId, destinationProvince, destinationCity, destinationAddress, seller.province);
                if (!topdynamicsRate) {
                    isAllowed = false
                    break
                }
                isAllowed = true
                topDynamicsFees.push(topdynamicsRate.total_price)
            }
            if (isAllowed) {
                const tTotalFees = topDynamicsFees.reduce((a, b) => {
                    return a + b;
                });
                rates.push({
                    service_name: 'Top Dynamics',
                    service_code: 'top-dynamics',
                    description:  'Top Dynamics',
                    currency:     'PHP',
                    total_price:  tTotalFees,
                    min_delivery_date: "",
                    max_delivery_date: "",
                })
            }
        }
    } else { // if single seller only
        const filter = {
            product_name: items[0].name
        }
        const sellerProduct = await axios.get(`https://mvmapi.webkul.com/api/v2/products.json?filter=${JSON.stringify(filter)}`, {
            headers: {
                'Authorization': 'Bearer OGViOGE0OTc2MzdlMGZmNTFkMDA4YmE0ZjU3NmNkZjk5MzNkMWMzZDQ0YzQxMjY1YTgxMjlhMTQxNmRlMWI2OQ'
            }
        })
        if (sellerProduct.data.products.length > 0) {
            const seller = await axios.get(`https://mvmapi.webkul.com/api/v2/sellers/${sellerProduct.data.products[0].seller_id}.json`, {
                headers: {
                    'Authorization': 'Bearer OGViOGE0OTc2MzdlMGZmNTFkMDA4YmE0ZjU3NmNkZjk5MzNkMWMzZDQ0YzQxMjY1YTgxMjlhMTQxNmRlMWI2OQ'
                }
            })
            if (seller && seller.data.seller) {
                const parsedSeller   = JSON.parse(seller.data.seller.custom_fields);
                const sellerProvince = Object.values(parsedSeller)[0].value;
                const sellerCity     = seller.data.seller.city;
                const sellerAddress  = seller.data.seller.store_address;
                // top dynamics
                const topdynamicsSenderId = sellersIds['topdynamics'][seller.data.seller.email]
                const topdynamicsRate = await calculateShipping('Top Dynamics', topDynamics, topDynamicsKeys.apiKey, topDynamicsKeys.secretKey, topdynamicsSenderId, destinationProvince, destinationCity, destinationAddress, sellerProvince)
                if(topdynamicsRate) {
                    rates.push(topdynamicsRate)
                }
            }
        }
    }
    // return
    ctx.body = {
        rates: rates
    }
})

module.exports = router
