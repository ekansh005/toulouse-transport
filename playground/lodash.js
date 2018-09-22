const _ = require('lodash');

let places = [
  {
    "category": "Arrêts",
    "className": "stop",
    "id": "1970324837186008",
    "key": "Casselardit TOULOUSE",
    "label": "Casselardit (TOULOUSE)",
    "network": "Tisséo",
    "rank": "1",
    "x": "1.406487",
    "y": "43.603864"
  },
  {
    "category": "Rues",
    "className": "road",
    "key": "Avenue de Casselardit TOULOUSE",
    "label": "Avenue de Casselardit (TOULOUSE)",
    "rank": "2",
    "x": "1.401581",
    "y": "43.613395"
  },
  {
    "address": "",
    "category": "Points d'intérêts",
    "cityName": "TOULOUSE",
    "className": "public_place",
    "id": "3659651438608610",
    "key": "FONTAINES /CASSELARDIT TOULOUSE",
    "label": "FONTAINES /CASSELARDIT (TOULOUSE)",
    "postcode": "",
    "rank": "3",
    "type": "VélôToulouse",
    "typeCompressed": "k",
    "veloStation": "226",
    "x": "1.407211",
    "y": "43.604190"
  },
  {
    "address": "",
    "category": "Points d'intérêts",
    "cityName": "TOULOUSE",
    "className": "public_place",
    "id": "3659648970917821",
    "key": "Desserte Bibliobus Casselardit TOULOUSE",
    "label": "Desserte Bibliobus Casselardit (TOULOUSE)",
    "postcode": "",
    "rank": "4",
    "type": "loisirs culture",
    "typeCompressed": "r",
    "x": "1.409995",
    "y": "43.604910"
  },
  {
    "address": "",
    "category": "Points d'intérêts",
    "cityName": "TOULOUSE",
    "className": "public_place",
    "id": "3659647208533097",
    "key": "Chapelle Sainte-Marie de Casselardit TOULOUSE",
    "label": "Chapelle Sainte-Marie de Casselardit (TOULOUSE)",
    "postcode": "",
    "rank": "5",
    "type": "église",
    "typeCompressed": "fd",
    "x": "1.407940",
    "y": "43.605940"
  },
  {
    "address": "",
    "category": "Points d'intérêts",
    "cityName": "TOULOUSE",
    "className": "public_place",
    "id": "3659647660990334",
    "key": "Ecole maternelle publique Fontaine Casselardit TOULOUSE",
    "label": "Ecole maternelle publique Fontaine Casselardit (TOULOUSE)",
    "postcode": "",
    "rank": "6",
    "type": "enseignement",
    "typeCompressed": "c",
    "x": "1.409532",
    "y": "43.604143"
  }
];

let grouped = _.groupBy(places, 'className');
console.log(grouped);
