// ============================================================
// DADES DE L'APP — PARC NATURAL (dades reals)
// ------------------------------------------------------------
// Àrees d'Informació amb els seus trams i aparcaments, i els
// camps del formulari (extrets dels formularis de Google del Parc).
//
// Els punts poden ser text simple (sense número) o objecte {num, nom}.
// Aquí van sense número, tal com als formularis actuals.
//
// Cada àrea mostra només les seccions que té:
//   - Coll de Meianell i Collada Fonda: només trams.
//   - Daió i Fontalba: Pista (com a tram) i Aparcament.
// ============================================================

// Camps comuns a totes les àrees del Parc
const CAMPS_PARC = [
  { id: "veh_aparcament", etiqueta: "Vehicles en aparcament", tipus: "number", obligatori: false },
  { id: "veh_fora_aparcament", etiqueta: "Vehicles fora d'aparcament", tipus: "number", obligatori: false },
  { id: "veh_impedeixen_pas", etiqueta: "Vehicles que impedeixen el pas", tipus: "number", obligatori: false },
  { id: "autocaravana_pernocta", etiqueta: "Autocaravanes / furgonetes en pernocta", tipus: "number", obligatori: false },
  { id: "camping_excessiu", etiqueta: "Càmping excessiu (més d'una taula i 2 cadires)", tipus: "number", obligatori: false },
  { id: "veh_fora_pista", etiqueta: "Vehicles motoritzats fora de pista (cotxes, bicis elèctriques, motos, etc.)", tipus: "number", obligatori: false },
  { id: "tendes", etiqueta: "Tendes", tipus: "number", compacte: true, obligatori: false },
  { id: "deixalles", etiqueta: "Nivell de deixalles", tipus: "escala", opcions: ["1", "2", "3", "4", "5"], etiquetaMin: "Poques", etiquetaMax: "Moltes", obligatori: false },
  { id: "observacions", etiqueta: "Observacions", tipus: "textarea", obligatori: false }
];

const DADES = {
  arees: [
    {
      nom: "AI Coll de Meianell",
      camps: CAMPS_PARC,
      trams: [
        "Tram de Tregurà",
        "Tram de la Creu de Fusta",
        "Tram del revolt de Salavert",
        "Tram del revolt de la Vaca Morta",
        "Tram del collet de la Gralla",
        "Tram de la ribera de Fontlletera",
        "Tram del refugi del Balandrau",
        "Tram del Placondal",
        "Tram del Cerverís",
        "Tram del coll de Meianell",
        "Tram de la serra de la Guilla",
        "Tram del bosc de Pardinelles",
        "Tram del Solei de Cornador",
        "Tram del refugi del Pla de l'Erola",
        "Tram del bosc de Vilardell",
        "Tram de Ribesaltes"
      ],
      aparcaments: []
    },
    {
      nom: "AI Collada Fonda",
      camps: CAMPS_PARC,
      trams: [
        "Tram les Boneres",
        "Tram revolt de Concròs",
        "Tram revolt de Carboners",
        "Tram de la Baidana",
        "Tram del Pla Cominal",
        "Tram de la cabana d'en Moixina",
        "Tram de la pista de la Balmeta",
        "Tram de la Collada Fonda",
        "Tram del revolt de la collada de Llamps",
        "Tram del Refugi Saleres - Mànega",
        "Tram del revolt de la Canyola",
        "Tram dels revolts del Rost d'en Guillot",
        "Tram del torrent de la Casassa",
        "Tram de la plana Joliva"
      ],
      aparcaments: []
    },
    {
      nom: "AI Queralbs - Daió",
      camps: CAMPS_PARC,
      trams: [
        "Pista"
      ],
      aparcaments: [
        "Aparcament"
      ]
    },
    {
      nom: "AI Queralbs - Fontalba",
      camps: CAMPS_PARC,
      trams: [
        "Pista"
      ],
      aparcaments: [
        "Aparcament"
      ]
    }
  ]
};
