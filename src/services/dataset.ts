import {
  PROTEINA,
  GLUC_COMP,
  GLUC_SIMP,
  LIPIDOS,
  Macro,
  AGUA_BAJO,
  AGUA_MEDIO,
  AGUA_ALTO,
  Agua,
  CA,
  P,
  K,
  MG,
  FE,
  I,
  ZN,
  SE,
  Minerals,
  B1,
  B9,
  B12,
  C,
  A,
  D,
  E,
  VitK,
  Vitamins,
} from "./nutrients";

export interface Food {
  name: string;
  list: {
    macro: Macro[];
    vitamins: Vitamins[];
    minerals: Minerals[];
    agua: Agua;
    fibra: boolean;
  };
  info: string;
}

const dataset: Food[] = [
  {
    name: "Pan",
    list: {
      macro: [GLUC_COMP, PROTEINA],
      vitamins: [],
      minerals: [],
      agua: AGUA_BAJO,
      fibra: false,
    },

    info: "Riquísimo con aceite y pimentón.",
  },
  {
    name: "Pan integral",
    list: {
      macro: [GLUC_COMP],
      vitamins: [B1],
      minerals: [],
      agua: AGUA_BAJO,
      fibra: true,
    },
    info: "Estupendo para bocadillos.",
  },
  {
    name: "Lechuga",
    list: {
      macro: [],
      vitamins: [VitK, C],
      minerals: [],
      agua: AGUA_ALTO, // TODO
      fibra: true, // TODO
    },
    info: "En ensalada o en bocadillo.",
  },
  {
    name: "Huevo",
    list: {
      macro: [PROTEINA, LIPIDOS],
      vitamins: [A, D, B1, B12], // I alguna vitamina B
      minerals: [CA, FE, I, MG, P, SE],
      agua: AGUA_ALTO,
      fibra: false, // TODO
    },
    info: "Un alimento muy completo.",
  },
  {
    name: "Nueces",
    list: {
      macro: [PROTEINA, LIPIDOS],
      vitamins: [B9, B1],
      minerals: [FE, MG, ZN, K, P, SE],
      agua: AGUA_BAJO,
      fibra: true,
    },
    info: "Un puñado sacia mucho.",
  },
  {
    name: "Fresas",
    list: {
      macro: [GLUC_SIMP],
      vitamins: [A, C],
      minerals: [],
      agua: AGUA_ALTO,
      fibra: true,
    },
    info: "Contienen muy pocos azúcares, que son de liberación lenta.",
  },
  {
    name: "Hummus de garbanzo",
    list: {
      macro: [GLUC_COMP, PROTEINA, LIPIDOS],
      vitamins: [E, B1, B9],
      minerals: [CA, FE, K, P, SE],
      agua: AGUA_MEDIO,
      fibra: true, // TODO
    },
    info: "Dipeando con zanahoria está buenísimo.",
  },
  {
    name: "Zumo de naranja",
    list: {
      macro: [GLUC_SIMP],
      vitamins: [C],
      minerals: [],
      agua: AGUA_ALTO,
      fibra: false, // TODO
    },
    info: "Una pieza entera de fruta es mejor.",
  },
  {
    name: "Manzana",
    list: {
      macro: [GLUC_SIMP],
      vitamins: [C],
      minerals: [K],
      agua: AGUA_ALTO,
      fibra: true,
    },
    info: "Deliciosamente crujiente. Los azúcares que contiene son de liberación lenta.",
  },
  {
    name: "Patata asada",
    list: {
      macro: [GLUC_COMP],
      vitamins: [],
      minerals: [K],
      agua: AGUA_ALTO,
      fibra: true,
    },
    info: "Un manjar, bien aliñada con aceite de pimentón.",
  },
  {
    name: "Lentejas",
    list: {
      macro: [GLUC_COMP, PROTEINA],
      vitamins: [B1, B9],
      minerals: [FE, MG, ZN, K, P, SE],
      agua: AGUA_BAJO,
      fibra: true,
    },
    info: "Si las comes con arroz, obtienes todos los aminoácidos esenciales.",
  },
  {
    name: "Avellanas",
    list: {
      macro: [LIPIDOS, PROTEINA],
      vitamins: [B1, B9],
      minerals: [CA, FE, MG, K, P],
      agua: AGUA_BAJO,
      fibra: true,
    },
    info: "Crujientes y deliciosas.",
  },
  {
    name: "Alubias",
    list: {
      macro: [GLUC_COMP, PROTEINA],
      vitamins: [B1],
      minerals: [CA, FE, MG, ZN, K, P, SE],
      agua: AGUA_ALTO,
      fibra: true,
    },
    info: "Muy versátiles. Para platos de cuchara y ensaladas.",
  },
  {
    name: "Judías verdes",
    list: {
      macro: [],
      vitamins: [],
      minerals: [],
      agua: AGUA_ALTO,
      fibra: true,
    },
    info: "Imprescindibles en el hervido.",
  },
  {
    name: "Aguacate",
    list: {
      macro: [LIPIDOS],
      vitamins: [E, C],
      minerals: [K],
      agua: AGUA_ALTO,
      fibra: true,
    },
    info: "Muy rico en lípidos saludables.",
  },
  {
    name: "Sandía",
    list: {
      macro: [],
      vitamins: [A],
      minerals: [K],
      agua: AGUA_ALTO,
      fibra: true,
    },
    info: "Muy hidratante y refrescante. Los azúcares que contiene son de liberación lenta.",
  },
  {
    name: "Aceitunas",
    list: {
      macro: [LIPIDOS],
      vitamins: [E],
      minerals: [],
      agua: AGUA_MEDIO,
      fibra: true,
    },
    info: "Los encurtidos son probióticoos.",
  },
  {
    name: "Aceite de girasol",
    list: {
      macro: [LIPIDOS],
      vitamins: [E],
      minerals: [],
      agua: AGUA_BAJO,
      fibra: true, // TODO
    },
    info: "Es una fuente importante de vitamina E.",
  },
  {
    name: "Patatas fritas",
    list: {
      macro: [GLUC_COMP, GLUC_SIMP, LIPIDOS],
      vitamins: [],
      minerals: [],
      agua: AGUA_BAJO,
      fibra: true, // TODO
    },
    info: "Mejor no abusar de ellas.",
  },
  {
    name: "Plátano",
    list: {
      macro: [GLUC_COMP, GLUC_SIMP],
      vitamins: [],
      minerals: [K],
      agua: AGUA_MEDIO,
      fibra: true,
    },
    info: "Muy rico en potasio. Los azúcares que contiene son de liberación lenta.",
  },
  {
    name: "Pimiento rojo",
    list: {
      macro: [],
      vitamins: [A, C],
      minerals: [],
      agua: AGUA_ALTO,
      fibra: true,
    },
    info: "Contiene gran cantidad de vitamina C.",
  },
  {
    name: "Guisantes",
    list: {
      macro: [GLUC_COMP, PROTEINA],
      vitamins: [B1, B9, C],
      minerals: [K, P],
      agua: AGUA_ALTO,
      fibra: true,
    },
    info: "Fantástico encebollado, y con arroz.",
  },
  {
    name: "Yogur natural",
    list: {
      macro: [PROTEINA, GLUC_SIMP, LIPIDOS],
      vitamins: [],
      minerals: [CA, P],
      agua: AGUA_ALTO,
      fibra: false, // TODO
    },
    info: "Mezclado con futas es una merienda muy sabrosa",
  },
  {
    name: "Queso curado",
    list: {
      macro: [LIPIDOS, PROTEINA],
      vitamins: [A, B9, B12],
      minerals: [CA, ZN, K, P],
      agua: AGUA_BAJO,
      fibra: false, // TODO
    },
    info: "Muy calórico.",
  },
  {
    name: "Chocolate negro",
    list: {
      macro: [LIPIDOS, GLUC_SIMP],
      vitamins: [],
      minerals: [FE, MG, P],
      agua: AGUA_BAJO,
      fibra: true, // TODO
    },
    info: "Cuanto más porcentaje de cacao, mejor.",
  },
  {
    name: "Alcachofas",
    list: {
      macro: [],
      vitamins: [],
      minerals: [K, P],
      agua: AGUA_ALTO,
      fibra: true,
    },
    info: "La reina de la parrillada de verduras.",
  },
  {
    name: "Chocolate blanco",
    list: {
      macro: [LIPIDOS, GLUC_SIMP],
      vitamins: [],
      minerals: [],
      agua: AGUA_BAJO,
      fibra: false,
    },
    info: "El chocolate blanco no existe.",
  },
  {
    name: "Espinacas",
    list: {
      macro: [],
      vitamins: [A, E, VitK, B9, C],
      minerals: [FE, K],
      agua: AGUA_ALTO,
      fibra: true,
    },
    info: "Contienen oxalatos y ácido fólico. Aunque contienen hierro este no se absorbe completamente",
  },
  {
    name: "Aceite de oliva",
    list: {
      macro: [LIPIDOS],
      vitamins: [E],
      minerals: [],
      agua: AGUA_BAJO,
      fibra: false,
    },
    info: "Sabroso, de nuestra tierra.",
  },
  {
    name: "Lomo de cerdo",
    list: {
      macro: [PROTEINA, LIPIDOS],
      vitamins: [],
      minerals: [],
      agua: AGUA_ALTO,
      fibra: true,
    },
    info: "Aceite con sabor suave.",
  },
  {
    name: "Brocoli",
    list: {
      macro: [GLUC_SIMP],
      vitamins: [A, VitK, C],
      minerals: [K],
      agua: AGUA_ALTO,
      fibra: true,
    },
    info: "Salteado con otras verduras crujientes resulta delicioso.",
  },
  {
    name: "Bollería",
    list: {
      macro: [GLUC_SIMP, GLUC_COMP, LIPIDOS],
      vitamins: [],
      minerals: [],
      agua: AGUA_MEDIO,
      fibra: true,
    },
    info: "Mejor si es casera, hecha con poco azúcar.",
  },
  {
    name: "Arroz blanco",
    list: {
      macro: [GLUC_SIMP, GLUC_COMP, LIPIDOS],
      vitamins: [],
      minerals: [],
      agua: AGUA_BAJO,
      fibra: true,
    },
    info: "Muy versátil y típico de la cocina valenciana.",
  },
  {
    name: "Champiñones",
    list: {
      macro: [GLUC_SIMP, GLUC_COMP, LIPIDOS],
      vitamins: [B1],
      minerals: [],
      agua: AGUA_ALTO,
      fibra: true,
    },
    info: "Dan un toque de sabor a guisos y pizzas.",
  },
  {
    name: "Champiñones",
    list: {
      macro: [GLUC_SIMP, GLUC_COMP, LIPIDOS],
      vitamins: [B1],
      minerals: [],
      agua: AGUA_ALTO,
      fibra: true,
    },
    info: "Dan un toque de sabor a guisos y pizzas.",
  },
  {
    name: "Champiñones",
    list: {
      macro: [GLUC_SIMP, GLUC_COMP, LIPIDOS],
      vitamins: [B1],
      minerals: [],
      agua: AGUA_ALTO,
      fibra: true,
    },
    info: "Dan un toque de sabor a guisos y pizzas.",
  },
  {
    name: "Pechuga de pollo",
    list: {
      macro: [PROTEINA, LIPIDOS],
      vitamins: [],
      minerals: [P],
      agua: AGUA_MEDIO,
      fibra: false,
    },
    info: "La pechuga de pollo es una carne magra que aporta pocos lípidos.",
  },
  {
    name: "Tomate",
    list: {
      macro: [],
      vitamins: [B1, A, C],
      minerals: [],
      agua: AGUA_ALTO,
      fibra: true,
    },
    info: "El verano es la mejor estación para comerlo.",
  },
  {
    name: "Piñones",
    list: {
      macro: [LIPIDOS, PROTEINA],
      vitamins: [B1, E, VitK],
      minerals: [FE, MG, ZN, K, P],
      agua: AGUA_BAJO,
      fibra: true,
    },
    info: "Los consumimos crudos, tosdados y en guisos",
  },
];

export default dataset;
