let reviews = [
    {
        id: 1,
        name: "Berkly Shepley",
        dealership: 15,
        review: "Total grid-enabled service-desk",
        purchase: true,
        purchase_date: "07/11/2020",
        car_make: "Audi",
        car_model: "A6",
        car_year: 2010
      },
      {
        id: 2,
        name: "Gwenora Zettoi",
        dealership: 23,
        review: "Future-proofed foreground capability",
        purchase: true,
        purchase_date: "09/17/2020",
        car_make: "Pontiac",
        car_model: "Firebird",
        car_year: 1995
      },
      {
        id: 3,
        name: "Lion Reames",
        dealership: 29,
        review: "Expanded global groupware",
        purchase: true,
        purchase_date: "10/20/2020",
        car_make: "Mazda",
        car_model: "MX-5",
        car_year: 2003
      },
      {
        id: 4,
        name: "Iorgos Colley",
        dealership: 13,
        review: "Optional heuristic software",
        purchase: false,
        purchase_date: "03/28/2020",
        car_make: "Kia",
        car_model: "Spectra",
        car_year: 2002
      },
      {
        id: 5,
        name: "Kissee Noirel",
        dealership: 46,
        review: "Diverse client-server success",
        purchase: false,
        purchase_date: "04/12/2020",
        car_make: "GMC",
        car_model: "Yukon",
        car_year: 1992
      },
      {
        id: 6,
        name: "Derron Masedon",
        dealership: 49,
        review: "Re-contextualized leading edge software",
        purchase: true,
        purchase_date: "10/05/2020",
        car_make: "Chevrolet",
        car_model: "Aveo",
        car_year: 2007
      },
      {
        id: 7,
        name: "Casey Pallasch",
        dealership: 11,
        review: "Synergistic cohesive budgetary management",
        purchase: false,
        purchase_date: "05/17/2020",
        car_make: "Toyota",
        car_model: "4Runner",
        car_year: 1994
      },
      {
        id: 8,
        name: "Marmaduke Ashbe",
        dealership: 17,
        review: "Polarised asynchronous Graphical User Interface",
        purchase: true,
        purchase_date: "05/06/2020",
        car_make: "BMW",
        car_model: "530",
        car_year: 2006
      },
      {
        id: 9,
        name: "Rudy Lougheed",
        dealership: 41,
        review: "Proactive bottom-line attitude",
        purchase: true,
        purchase_date: "07/05/2020",
        car_make: "Cadillac",
        car_model: "Escalade ESV",
        car_year: 2003
      },
      {
        id: 10,
        name: "Inglebert Keech",
        dealership: 22,
        review: "Distributed transitional policy",
        purchase: false,
        purchase_date: "05/18/2020",
        car_make: "Dodge",
        car_model: "Ram Van 3500",
        car_year: 1997
      },
      {
        id: 11,
        name: "Cosme Spolton",
        dealership: 13,
        review: "Reactive background implementation",
        purchase: true,
        purchase_date: "11/06/2020",
        car_make: "Audi",
        car_model: "A6",
        car_year: 1999
      },
      {
        id: 12,
        name: "Olympe Chippindall",
        dealership: 28,
        review: "Cloned clear-thinking strategy",
        purchase: true,
        purchase_date: "10/14/2020",
        car_make: "Saab",
        car_model: "9-5",
        car_year: 1999
      },
      {
        id: 13,
        name: "Alvan Hawthorne",
        dealership: 42,
        review: "Multi-channelled secondary archive",
        purchase: true,
        purchase_date: "07/25/2020",
        car_make: "Lotus",
        car_model: "Exige",
        car_year: 2004
      },
      {
        id: 14,
        name: "Mildred Penhale",
        dealership: 45,
        review: "Customer-focused responsive moderator",
        purchase: true,
        purchase_date: "09/17/2020",
        car_make: "Alfa Romeo",
        car_model: "Spider",
        car_year: 1994
      },
      {
        id: 15,
        name: "Lisabeth Izatson",
        dealership: 27,
        review: "Upgradable neutral matrix",
        purchase: false,
        purchase_date: "12/31/2020",
        car_make: "BMW",
        car_model: "550",
        car_year: 2006
      }  
]

let dealerships = [
    {
        id: 1,
        city: "El Paso",
        state: "Texas",
        st: "TX",
        address: "3 Nova Court",
        zip: "88563",
        lat: 31.6948,
        long: -106.3,
        short_name: "Holdlamis",
        full_name: "Holdlamis Car Dealership"
      },
      {
        id: 2,
        city: "Minneapolis",
        state: "Minnesota",
        st: "MN",
        address: "6337 Butternut Crossing",
        zip: "55402",
        lat: 44.9762,
        long: -93.2759,
        short_name: "Temp",
        full_name: "Temp Car Dealership"
      },
      {
        id: 3,
        city: "Birmingham",
        state: "Alabama",
        st: "AL",
        address: "9477 Twin Pines Center",
        zip: "35285",
        lat: 33.5446,
        long: -86.9292,
        short_name: "Sub-Ex",
        full_name: "Sub-Ex Car Dealership"
      },
      {
        id: 4,
        city: "Dallas",
        state: "Texas",
        st: "TX",
        address: "85800 Hazelcrest Circle",
        zip: "75241",
        lat: 32.6722,
        long: -96.7774,
        short_name: "Solarbreeze",
        full_name: "Solarbreeze Car Dealership"
      },
      {
        id: 5,
        city: "Baltimore",
        state: "Maryland",
        st: "MD",
        address: "93 Golf Course Pass",
        zip: "21203",
        lat: 39.2847,
        long: -76.6205,
        short_name: "Regrant",
        full_name: "Regrant Car Dealership"
      },
      {
        id: 6,
        city: "Wilkes Barre",
        state: "Pennsylvania",
        st: "PA",
        address: "2 Burrows Hill",
        zip: "18763",
        lat: 41.2722,
        long: -75.8801,
        short_name: "Stronghold",
        full_name: "Stronghold Car Dealership"
      },
      {
        id: 7,
        city: "Pueblo",
        state: "Colorado",
        st: "CO",
        address: "9 Cambridge Park",
        zip: "81010",
        lat: 38.1286,
        long: -104.5523,
        short_name: "Job",
        full_name: "Job Car Dealership"
      },
      {
        id: 8,
        city: "Topeka",
        state: "Kansas",
        st: "KS",
        address: "288 Larry Place",
        zip: "66642",
        lat: 39.0429,
        long: -95.7697,
        short_name: "Bytecard",
        full_name: "Bytecard Car Dealership"
      },
      {
        id: 9,
        city: "Dallas",
        state: "Texas",
        st: "TX",
        address: "253 Hanson Junction",
        zip: "75216",
        lat: 32.7086,
        long: -96.7955,
        short_name: "Job",
        full_name: "Job Car Dealership"
      },
      {
        id: 10,
        city: "Washington",
        state: "District of Columbia",
        st: "DC",
        address: "108 Memorial Pass",
        zip: "20005",
        lat: 38.9067,
        long: -77.0312,
        short_name: "Alphazap",
        full_name: "Alphazap Car Dealership"
      },
      {
        id: 11,
        city: "Carol Stream",
        state: "Illinois",
        st: "IL",
        address: "8108 Dryden Court",
        zip: "60351",
        lat: 41.9166,
        long: -88.1208,
        short_name: "Rank",
        full_name: "Rank Car Dealership"
      },
      {
        id: 12,
        city: "Silver Spring",
        state: "Maryland",
        st: "MD",
        address: "168 Pawling Lane",
        zip: "20918",
        lat: 39.144,
        long: -77.2076,
        short_name: "Tin",
        full_name: "Tin Car Dealership"
      },
      {
        id: 13,
        city: "Baltimore",
        state: "Maryland",
        st: "MD",
        address: "452 Fair Oaks Drive",
        zip: "21275",
        lat: 39.2847,
        long: -76.6205,
        short_name: "Y-Solowarm",
        full_name: "Y-Solowarm Car Dealership"
      },
      {
        id: 14,
        city: "San Francisco",
        state: "California",
        st: "CA",
        address: "2109 Scott Parkway",
        zip: "94147",
        lat: 37.7848,
        long: -122.7278,
        short_name: "It",
        full_name: "It Car Dealership"
      },
      {
        id: 15,
        city: "San Antonio",
        state: "Texas",
        st: "TX",
        address: "5057 Pankratz Hill",
        zip: "78225",
        lat: 29.3875,
        long: -98.5245,
        short_name: "Tempsoft",
        full_name: "Tempsoft Car Dealership"
      }
    ]

let cars = [
    {
        make: "Nissan",
        model: "Pathfinder",
        bodyType: "SUV",
        year: 2023,
        dealer_id: 1,
        mileage: 15000
    },
    {
        make: "Kia",
        model: "Seltos",
        bodyType: "SUV",
        year: 2022,
        dealer_id: 8,
        mileage: 8000
    },
    {
        make: "Audi",
        model: "A4",
        bodyType: "Sedan",
        year: 2021,
        dealer_id: 15,
        mileage: 12000
    },
    {
        make: "Mercedes",
        model: "GLE",
        bodyType: "SUV",
        year: 2020,
        dealer_id: 22,
        mileage: 5000
    },
    {
        make: "Toyota",
        model: "Camry",
        bodyType: "Sedan",
        year: 2023,
        dealer_id: 30,
        mileage: 10000
    },
    {
        make: "Nissan",
        model: "Rogue",
        bodyType: "SUV",
        year: 2022,
        dealer_id: 2,
        mileage: 6000
    },
    {
        make: "Kia",
        model: "Telluride",
        bodyType: "SUV",
        year: 2021,
        dealer_id: 11,
        mileage: 3000
    },
    {
        make: "Audi",
        model: "Q5",
        bodyType: "SUV",
        year: 2020,
        dealer_id: 18,
        mileage: 20000
    },
    {
        make: "Mercedes",
        model: "C-Class",
        bodyType: "Sedan",
        year: 2023,
        dealer_id: 25,
        mileage: 7000
    },
    {
        make: "Toyota",
        model: "Highlander",
        bodyType: "SUV",
        year: 2022,
        dealer_id: 33,
        mileage: 15000
    },
    {
      make: "Nissan",
      model: "Altima",
      bodyType: "Sedan",
      year: 2022,
      dealer_id: 5,
      mileage: 18000
    },
    {
        make: "Kia",
        model: "Sportage",
        bodyType: "SUV",
        year: 2021,
        dealer_id: 12,
        mileage: 12000
    },
    {
        make: "Audi",
        model: "A3",
        bodyType: "Hatchback",
        year: 2020,
        dealer_id: 19,
        mileage: 8000
    },
    {
        make: "Mercedes",
        model: "E-Class",
        bodyType: "Sedan",
        year: 2023,
        dealer_id: 26,
        mileage: 3000
    },
    {
        make: "Toyota",
        model: "RAV4",
        bodyType: "SUV",
        year: 2022,
        dealer_id: 35,
        mileage: 25000
    },
    {
        make: "Nissan",
        model: "Maxima",
        bodyType: "Sedan",
        year: 2021,
        dealer_id: 3,
        mileage: 10000
    },
    {
        make: "Kia",
        model: "Cadenza",
        bodyType: "Sedan",
        year: 2020,
        dealer_id: 14,
        mileage: 15000
    },
    {
        make: "Audi",
        model: "Q7",
        bodyType: "SUV",
        year: 2023,
        dealer_id: 21,
        mileage: 5000
    },
    {
        make: "Mercedes",
        model: "GLC",
        bodyType: "SUV",
        year: 2022,
        dealer_id: 28,
        mileage: 7000
    },
    {
        make: "Toyota",
        model: "Corolla",
        bodyType: "Sedan",
        year: 2021,
        dealer_id: 38,
        mileage: 12000
    }
]

export default { reviews, dealerships, cars }