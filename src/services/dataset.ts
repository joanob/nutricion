import {PROTEINA, GLUC_COMP, GLUC_SIMP, LIPIDOS, Macro, AGUA_BAJO, AGUA_MEDIO, AGUA_ALTO, Agua, CA, P, K, MG, FE, I, ZN, SE, Minerals, B1, B9, B12, C, A, D, E, VitK, Vitamins } from "./nutrients"

export interface Food {
    name: string;
    list: {
        macro?: Macro[],
        agua?: Agua,
        fibra?: boolean,
        minerals?: Minerals[],
        vitamins?: Vitamins[]

    };
    info: string;
}

const dataset: Food[] =  [
    { 
        name: "Pan", 
        list: {
            macro: [GLUC_COMP, PROTEINA],
            agua: AGUA_MEDIO,
        }, 
        

        info: "Riquísimo con aceite y pimentón." 
    },
    { 
        name: "Pan integral", 
        list: {
            macro: [GLUC_COMP],
            agua: AGUA_MEDIO,
            fibra: true
        }, 
        info: "Estupendo para bocadillos." 
    },
    { 
        name: "Lechuga", 
        list: {
            agua: AGUA_ALTO,
            fibra: true
        },
        info: "En ensalada o en bocadillo." 
    },
    { 
        name: "Huevo", 
        list: {
            macro: [PROTEINA, LIPIDOS],
            vitamins: [A,D], // I alguna vitamina B
            minerals: [I,P,SE],
            agua: AGUA_ALTO,
        }, 
        info: "Un alimento muy completo." 
    },
    { 
        name: "Nueces", 
        list: {
            macro: [PROTEINA, LIPIDOS],
            agua: AGUA_BAJO,
            minerals: [CA],
            fibra: true
        }, 
        info: "Un puñado sacia mucho." 
    },
    { 
        name: "Fresas", 
        list: {
            macro: [GLUC_SIMP],
            agua: AGUA_ALTO,
            fibra: true
        },
        info: "Contienen muy pocos azúcares, que son de liberación lenta." },
    { 
        name: "Hummus de garbanzo", 
        list: {
            macro: [GLUC_COMP, PROTEINA],
            agua: AGUA_ALTO
        }, 
        info: "Dipeando con zanahoria está buenísimo." 
    },
    { 
        name: "Zumo de naranja", 
        list: {
            macro: [GLUC_SIMP],
            agua: AGUA_ALTO
        }, 
        info: "Una pieza entera de fruta es mejor." 
    },
    { 
        name: "Manzana", 
        list: {
            macro: [GLUC_SIMP],
            agua: AGUA_ALTO,
            fibra: true
        }, 
        info: "Deliciosamente crujiente. Los azúcares que contiene son de liberación lenta." 
    },
    { 
        name: "Patata asada", 
        list: {
            macro: [GLUC_COMP],
            agua: AGUA_ALTO,
            minerals: [K],
            fibra: true
        }, 
        info: "Un manjar, bien aliñada con aceite de pimentón." },
    { 
        name: "Lentejas", 
        list: {
            macro: [GLUC_COMP, PROTEINA],
            agua: AGUA_MEDIO,
            fibra: true
        }, 
        info: "Si las comes con arroz, obtienes todos los aminoácidos esenciales." },
    { 
        name: "Avellanas", 
        list: {
            macro: [LIPIDOS, PROTEINA],
            agua: AGUA_BAJO,
            fibra: true
        }, 
        info: "Crujientes y deliciosas." 
    },
    { 
        name: "Alubias", 
        list: {
            macro: [GLUC_COMP, PROTEINA],
            agua: AGUA_ALTO,
            fibra: true
        }, 
        info: "Muy versátiles. Para platos de cuchara y ensaladas." 
    },
    { 
        name: "Judías verdes", 
        list: {
            agua: AGUA_ALTO,
            fibra: true
        }, 
        info: "Imprescindibles en el hervido." 
    },
    { 
        name: "Aguacate", 
        list: {
            macro: [LIPIDOS],
            agua: AGUA_BAJO,
            fibra: true
        }, 
        info: "Muy rico en lípidos saludables." 
    },
    { 
        name: "Sandía", 
        list: {
            agua: AGUA_ALTO,
            fibra: true
        }, 
        info: "Muy hidratante y refrescante. Los azúcares que contiene son de liberación lenta." 
    },
    { 
        name: "Aceitunas", 
        list: {
            macro: [LIPIDOS],
            agua: AGUA_MEDIO,
            fibra: true
        }, 
        info: "Los encurtidos son probióticoos." 
    },
    { 
        name: "Aceite de coco", 
        list: {
            macro: [LIPIDOS],
            agua: AGUA_BAJO
        }, 
        info: "Desconocido para la mayoría de nosotros." 
    },
    { 
        name: "Patatas fritas", 
        list: {
            macro: [GLUC_COMP, GLUC_SIMP, LIPIDOS],
            agua: AGUA_MEDIO
        }, 
        info: "Mejor no abusar de ellas." 
    },
    { 
        name: "Plátano", 
        list: {
            macro: [GLUC_COMP, GLUC_SIMP],
            agua: AGUA_MEDIO,
            fibra: true
        }, 
        info: "Muy rico en potasio. Los azúcares que contiene son de liberación lenta." 
    },
    { 
        name: "Pimiento rojo", 
        list: {
            agua: AGUA_ALTO,
            fibra: true
        }, 
        info: "Contiene gran cantidad de vitamina C." 
    },
    { 
        name: "Guisantes", 
        list: {
            macro: [GLUC_COMP, PROTEINA],
            agua: AGUA_MEDIO,
            fibra: true
        }, 
        info: "Fantástico encebollado, y con arroz." 
    },
    { 
        name: "Queso fresco", 
        list: {
            macro: [PROTEINA, LIPIDOS],
            agua: AGUA_MEDIO
        }, 
        info: "Óptimo para tomar en bocadillos y ensaladas." 
    },
    { 
        name: "Queso curado", 
        list: {
            macro: [LIPIDOS, PROTEINA],
            agua: AGUA_BAJO
        }, 
        info: "Muy calórico." 
    },
    { 
        name: "Chocolate negro", 
        list: {
            macro: [LIPIDOS, GLUC_SIMP],
            agua: AGUA_BAJO
        }, 
        info: "Cuanto más porcentaje de cacao, mejor." 
    },
    { 
        name: "Alcachofas", 
        list: {
            agua: AGUA_ALTO,
            fibra: true
        }, 
        info: "La reina de la parrillada de verduras." 
    },
    { 
        name: "Chocolate blanco", 
        list: {
            macro: [LIPIDOS, GLUC_SIMP],
            agua: AGUA_BAJO
        }, 
        info: "El chocolate blanco no existe." 
    },
    { 
        name: "Espinacas", 
        list: {
            agua: AGUA_ALTO,
            fibra: true
        }, 
        info: "Contiene oxalatos y ácido fólico." 
    },
    { 
        name: "Aceite de oliva", 
        list: {
            macro: [LIPIDOS],
            agua: AGUA_BAJO
        }, 
        info: "Sabroso, de nuestra tierra." 
    },
    { 
        name: "Aceite de girasol", 
        list: {
            macro: [LIPIDOS],
            agua: AGUA_BAJO
        }, 
        info: "Aceite con sabor suave." 
    },
    { 
        name: "Melón", 
        list: {
            macro: [GLUC_SIMP],
            agua: AGUA_ALTO,
            fibra: true
        },
        info: "Hidratante y bajo en calorías. Los azúcares que contiene son de liberación lenta." 
    },
    { 
        name: "Bizcocho", 
        list: {
            macro: [GLUC_SIMP, GLUC_COMP, LIPIDOS],
            agua: AGUA_MEDIO
        }, 
        info: "Mejor si es casero, hecho con poco azúcar." 
    },
    { 
        name: "Galletas", 
        list: {
            macro: [GLUC_SIMP, GLUC_COMP, LIPIDOS],
            agua: AGUA_BAJO
        }, 
        info: "Conviene tomarlas solo esporádicamente." 
    },
    { 
        name: "Rosquilletas de pipas", 
        list: {
            macro: [GLUC_SIMP, GLUC_COMP, LIPIDOS],
            agua: AGUA_BAJO
        }, 
        info: "No conviene abusar de ellas." 
    }
]

export default dataset