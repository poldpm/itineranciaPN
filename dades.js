// ============================================================
// DADES DE L'APP — PARC NATURAL (dades reals)
// ------------------------------------------------------------
// Àrees d'Informació amb els seus trams i aparcaments, i els
// camps del formulari (extrets dels formularis de Google del Parc).
//
// Els punts poden ser text simple (sense número) o objecte {num, nom}.
// Coll de Meianell i Collada Fonda porten el NÚMERO del mapa oficial (per
// identificar de seguida a quin tram s'entren les dades); les àrees de
// Queralbs (Pista + Aparcament) van sense número.
//
// Cada àrea mostra només les seccions que té:
//   - Coll de Meianell i Collada Fonda: només trams.
//   - Daió, Fontalba i Collet de les Barraques: Pista (com a tram) i Aparcament.
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
        { num: 1,  nom: "Tram de Tregurà" },
        { num: 2,  nom: "Tram de la Creu de Fusta" },
        { num: 3,  nom: "Tram del revolt de Salavert" },
        { num: 4,  nom: "Tram del revolt de la Vaca Morta" },
        { num: 5,  nom: "Tram del collet de la Gralla" },
        { num: 6,  nom: "Tram de la ribera de Fontlletera" },
        { num: 7,  nom: "Tram del refugi del Balandrau" },
        { num: 8,  nom: "Tram del Placondal" },
        { num: 9,  nom: "Tram del Cerverís" },
        { num: 10, nom: "Tram del coll de Meianell" },
        { num: 11, nom: "Tram de la serra de la Guilla" },
        { num: 12, nom: "Tram del bosc de Pardinelles" },
        { num: 13, nom: "Tram del Solei de Cornador" },
        { num: 14, nom: "Tram del refugi del Pla de l'Erola" },
        { num: 15, nom: "Tram del bosc de Vilardell" },
        { num: 16, nom: "Tram de Ribesaltes" }
      ],
      aparcaments: []
    },
    {
      nom: "AI Collada Fonda",
      camps: CAMPS_PARC,
      trams: [
        { num: 1,  nom: "Tram les Boneres" },
        { num: 2,  nom: "Tram revolt de Concròs" },
        { num: 3,  nom: "Tram revolt de Carboners" },
        { num: 4,  nom: "Tram de la Baidana" },
        { num: 5,  nom: "Tram del Pla Cominal" },
        { num: 6,  nom: "Tram de la cabana d'en Moixina" },
        { num: 7,  nom: "Tram de la pista de la Balmeta" },
        { num: 8,  nom: "Tram de la Collada Fonda" },
        { num: 9,  nom: "Tram del revolt de la collada de Llamps" },
        { num: 10, nom: "Tram del Refugi Saleres - Mànega" },
        { num: 11, nom: "Tram del revolt de la Canyola" },
        { num: 12, nom: "Tram dels revolts del Rost d'en Guillot" },
        { num: 13, nom: "Tram del torrent de la Casassa" },
        { num: 14, nom: "Tram de la plana Joliva" }
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
    },
    {
      nom: "AI Queralbs - Collet de les Barraques",
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
