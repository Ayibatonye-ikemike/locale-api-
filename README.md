# README.md

## Location Data API

This is a RESTful API built with Node.js and Express, which provides location data, specifically for regions, states and local governments.

This API uses a database of location data and a caching mechanism for better performance. You will need to provide an API key for authorization. The API endpoints can be found below.

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed on your local machine. [Install](https://nodejs.org/en/download/)
- MongoDB installed on your local machine. [Install](https://docs.mongodb.com/manual/installation/)
- Redis installed on your local machine. [this link](https://redis.io/docs/getting-started/) for guideline

I have hosted it on: 

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Ayibatonye-ikemike/locale-api-.git
   ```
2. Navigate into the project directory:
   ```
   cd locale-api-
   ```
3.  Add the project dependecies: 
    ```
   npm init -y
   ```
4. Install the project dependencies:
   ```
   npm install
   ```
5. Make a copy of .env and populate file with required credentials


6. Start the development server:
   ```
   npm start:dev
   ```

---

## API Endpoints

The API provides the following endpoints:

1. **Get Regions**: `/region`

   Fetches the data of a specific region or all regions if no region name is provided. You can also specify whether you want to include Local Government Areas (LGAs) by setting the `lga` query parameter to `true`.

2. **Get States**: `/state`

   Fetches the data of a specific state or all states if no state name is provided. You can also specify whether you want to include Local Government Areas (LGAs) by setting the `lga` query parameter to `true`.

3. **Get Local Government**: `/lga`

   Fetches the data of a specific or all local government.

---

### API Usage

To test on your local with swagger, use
```
localhost:3000/api-docs
```

The API uses bearer token for authorization, so you have to include your API key in the Authorization header as follows:

```
Authorization: your_api_key
```

Here is an example of how to use the API:

**Request:**

```
GET /region?region=south south&state=true
Authorization: your_api_key
```

**Response:**

```

```
{
  "regions": [
    {
      "senatorial_districts": [],
      "_id": "64998967d70d97f9548278bc",
      "state": "Akwa Ibom",
      "capital": "Uyo",
      "region": "South South",
      "slogan": "Land of Promise",
      "landmass": "7,081 km2 (2,735 sq mi)",
      "population": "5,450,758",
      "dialect": "Ibibio",
      "latitude": "4.9833",
      "longitude": "7.9167",
      "created_date": "1987-09-23T00:00:00.000Z",
      "borders": [
        "Cross River",
        "Abia",
        "Rivers",
        "Bayelsa"
      ],
      "known_for": [
        "Bridge of No Return, Ikot Abasi",
        "Amalgamtion House",
        "Ibibio Museu and State Park",
        "National Museum of Colonial History"
      ]
    },
    {
      "senatorial_districts": [],
      "_id": "64998967d70d97f9548278c1",
      "state": "Bayelsa",
      "capital": "Yenagoa",
      "region": "South South",
      "slogan": "Glory of all Lands",
      "landmass": "10,773 km2 (4,158 sq mi)",
      "population": "1,704,515",
      "dialect": "Ijaw",
      "latitude": "4.9267",
      "longitude": "6.2676",
      "created_date": "1996-10-01T00:00:00.000Z",
      "borders": [
        "Rivers",
        "Delta"
      ],
      "known_for": [
        "The Ox-Bow Lake, Yenagoa",
        "Oloibiri Oil Museum, Oloibiri",
        "Isaac Boro Garden Park, Yenagoa",
        "Peace Park, Yenagoa",
        "Akassa Wildlife Forest, Akassa",
        "Ogboinbiri Oil Well, Ogboinbiri"
      ]
    },
    {
      "senatorial_districts": [],
      "_id": "64998967d70d97f9548278c2",
      "state": "Cross River",
      "capital": "Calabar",
      "region": "South South",
      "slogan": "The People's Paradise",
      "landmass": "20,156 km2 (7,781 sq mi)",
      "population": "2,888,966",
      "dialect": "Efik",
      "latitude": "5.6367",
      "longitude": "8.3333",
      "created_date": "1967-05-27T00:00:00.000Z",
      "borders": [
        "Benue",
        "Ebonyi",
        "Enugu",
        "Benue",
        "Kogi",
        "Akwa Ibom"
      ],
      "known_for": [
        "Obudu Cattle Ranch",
        "Obudu Mountain Resort",
        "Kwa Falls",
        "Agbokim Waterfalls",
        "Tinapa Resort",
        "Cross River National Park",
        "Cross River Gorilla",
        "Cross River State National Park",
        "Cross River State National Park"
      ]
    },
    {
      "senatorial_districts": [],
      "_id": "64998967d70d97f9548278c3",
      "state": "Delta",
      "capital": "Asaba",
      "region": "South South",
      "slogan": "The Big Heart",
      "landmass": "17,698 km2 (6,826 sq mi)",
      "population": "4,112,445",
      "dialect": "Igbo",
      "latitude": "5.6367",
      "longitude": "8.3333",
      "created_date": "1991-08-27T00:00:00.000Z",
      "borders": [
        "Edo",
        "Ondo",
        "Anambra",
        "Imo",
        "Rivers",
        "Bayelsa"
      ],
      "known_for": [
        "Nana of Itsekiri’s palace/Nana Living History Museum, Koko",
        "Ogbeowele Forest Reserve, Abraka",
        "Ogbe-Ijoh Waterside Market, Warri",
        "Ogbeke Square, Asaba",
        "Lander Brothers Anchorage, Asaba",
        "Ogbeogonogo Modern Market, Asaba",
        "Okpuzu Waterfa,ll, Ibusa"
      ]
    },
    {
      "senatorial_districts": [],
      "_id": "64998967d70d97f9548278c5",
      "state": "Edo",
      "capital": "Benin City",
      "region": "South South",
      "slogan": "Heartbeat of the Nation",
      "landmass": "17,802 km2 (6,873 sq mi)",
      "population": "3,233,366",
      "dialect": "Bini",
      "latitude": "6.3167",
      "longitude": "8.1000",
      "created_date": "1991-08-27T00:00:00.000Z",
      "borders": [
        "Delta",
        "Kogi",
        "Ondo",
        "Anambra",
        "Rivers"
      ],
      "known_for": [
        "Benin Moat, Benin City",
        "Benin National Museum, Benin City",
        "Emotan Statue, Benin City",
        "Igun Bronze Casters Guild, Benin City"
      ]
    },
    {
      "senatorial_districts": [],
      "_id": "64998967d70d97f9548278da",
      "state": "Rivers",
      "capital": "Port Harcourt",
      "region": "South South",
      "slogan": "Treasure Base of the Nation",
      "landmass": "11,077 km2 (4,276 sq mi)",
      "population": "5,198,716",
      "dialect": "Port Harcourt",
      "latitude": "7.2500",
      "longitude": "5.2000",
      "created_date": "1967-05-27T00:00:00.000Z",
      "borders": [
        "Abia",
        "Akwa Ibom",
        "Bayelsa",
        "Imo",
        "Abia",
        "Akwa Ibom",
        "Bayelsa",
        "Imo"
      ],
      "known_for": [
        "Port Harcourt",
        "Port Harcourt"
      ]
    }
  ]
}
---

## Contributing

If you would like to contribute to this project, please feel free to fork the repository, create a feature branch, and open a Pull Request!

---

## Contact

You can contact me with my email ayibatonyeikemike94@gmail.com.

---
