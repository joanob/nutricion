import {PROTEINA, GLUC_COMP, GLUC_SIMP, LIPIDOS, VITAMINAS, SALES, AGUA_BAJO, AGUA_MEDIO, AGUA_ALTO, Agua, Minerals, Vitamins, Macro, Micro} from "./nutrients"

export interface Food {
    name: string;
    list: {
        macro?: Macro[],
        micro?: Micro[],
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
            macro: [GLUC_COMP]
        }, 
        info: "Riquísimo con aceite y pimentón." 
    },
    { 
        name: "Pan integral", 
        list: {
            macro: [GLUC_COMP],
            fibra: true
        }, 
        info: "Estupendo para bocadillos." 
    },
    { 
        name: "Lechuga", 
        list: {
            micro: [VITAMINAS, SALES],
            agua: AGUA_MEDIO,
            fibra: true
        },
        info: "En ensalada o en bocadillo." 
    },
    { 
        name: "Huevo", 
        list: {
            macro: [PROTEINA, LIPIDOS],
            micro: [VITAMINAS]
        }, 
        info: "Un alimento muy completo." 
    },
    { 
        name: "Nueces", 
        list: {
            macro: [PROTEINA, LIPIDOS],
            fibra: true
        }, 
        info: "Un puñado sacia mucho." 
    },
    { 
        name: "Fresas", 
        list: {
            macro: [GLUC_SIMP],
            micro: [VITAMINAS, SALES],
            agua: AGUA_MEDIO,
            fibra: true
        },
        info: "Contienen muy pocos azúcares, que son de liberación lenta." },
    { 
        name: "Hummus de garbanzo", 
        list: {
            macro: [GLUC_COMP, PROTEINA],
            agua: AGUA_MEDIO
        }, 
        info: "Dipeando con zanahoria está buenísimo." 
    },
    { 
        name: "Zumo de naranja", 
        list: {
            macro: [GLUC_SIMP],
            micro: [VITAMINAS],
            agua: AGUA_MEDIO
        }, 
        info: "Una pieza entera de fruta es mejor." 
    },
    { 
        name: "Manzana", 
        list: {
            macro: [GLUC_SIMP],
            micro: [VITAMINAS, SALES],
            agua: AGUA_MEDIO,
            fibra: true
        }, 
        info: "Deliciosamente crujiente. Los azúcares que contiene son de liberación lenta." 
    },
    { 
        name: "Patata asada", 
        list: {
            macro: [GLUC_COMP],
            fibra: true
        }, 
        info: "Un manjar, bien aliñada con aceite de pimentón." },
    { 
        name: "Lentejas", 
        list: {
            macro: [GLUC_COMP, PROTEINA],
            fibra: true
        }, 
        info: "Si las comes con arroz, obtienes todos los aminoácidos esenciales." },
    { 
        name: "Avellanas", 
        list: {
            macro: [LIPIDOS, PROTEINA],
            fibra: true
        }, 
        info: "Crujientes y deliciosas." 
    },
    { 
        name: "Alubias", 
        list: {
            macro: [GLUC_COMP, PROTEINA],
            fibra: true
        }, 
        info: "Muy versátiles. Para platos de cuchara y ensaladas." 
    },
    { 
        name: "Judías verdes", 
        list: {
            micro: [VITAMINAS, SALES],
            agua: AGUA_MEDIO,
            fibra: true
        }, 
        info: "Imprescindibles en el hervido." 
    },
    { 
        name: "Aguacate", 
        list: {
            macro: [LIPIDOS],
            micro: [VITAMINAS],
            fibra: true
        }, 
        info: "Muy rico en lípidos saludables." 
    },
    { 
        name: "Sandía", 
        list: {
            micro: [VITAMINAS, SALES],
            agua: AGUA_MEDIO,
            fibra: true
        }, 
        info: "Muy hidratante y refrescante. Los azúcares que contiene son de liberación lenta." 
    },
    { 
        name: "Aceitunas", 
        list: {
            macro: [LIPIDOS],
            micro: [VITAMINAS],
            fibra: true
        }, 
        info: "Los encurtidos son probióticoos." 
    },
    { 
        name: "Aceite de coco", 
        list: {
            macro: [LIPIDOS]
        }, 
        info: "Desconocido para la mayoría de nosotros." 
    },
    { 
        name: "Patatas fritas", 
        list: {
            macro: [GLUC_COMP, GLUC_SIMP, LIPIDOS]
        }, 
        info: "Mejor no abusar de ellas." 
    },
    { 
        name: "Plátano", 
        list: {
            macro: [GLUC_COMP, GLUC_SIMP],
            micro: [VITAMINAS, SALES],
            fibra: true
        }, 
        info: "Muy rico en potasio. Los azúcares que contiene son de liberación lenta." 
    },
    { 
        name: "Pimiento rojo", 
        list: {
            micro: [VITAMINAS, SALES],
            agua: AGUA_MEDIO,
            fibra: true
        }, 
        info: "Contiene gran cantidad de vitamina C." 
    },
    { 
        name: "Guisantes", 
        list: {
            macro: [GLUC_COMP, PROTEINA],
            fibra: true
        }, 
        info: "Fantástico encebollado, y con arroz." 
    },
    { 
        name: "Queso fresco", 
        list: {
            macro: [PROTEINA, LIPIDOS],
            micro: [VITAMINAS, SALES]
        }, 
        info: "Óptimo para tomar en bocadillos y ensaladas." 
    },
    { 
        name: "Queso curado", 
        list: {
            macro: [LIPIDOS, PROTEINA],
            micro: [VITAMINAS, SALES]
        }, 
        info: "Muy calórico." 
    },
    { 
        name: "Chocolate negro", 
        list: {
            macro: [LIPIDOS, GLUC_SIMP]
        }, 
        info: "Cuanto más porcentaje de cacao, mejor." 
    },
    { 
        name: "Alcachofas", 
        list: {
            micro: [VITAMINAS, SALES],
            agua: AGUA_MEDIO,
            fibra: true
        }, 
        info: "La reina de la parrillada de verduras." 
    },
    { 
        name: "Chocolate blanco", 
        list: {
            macro: [LIPIDOS, GLUC_SIMP]
        }, 
        info: "El chocolate blanco no existe." 
    },
    { 
        name: "Espinacas", 
        list: {
            micro: [VITAMINAS, SALES],
            agua: AGUA_MEDIO,
            fibra: true
        }, 
        info: "Contiene oxalatos y ácido fólico." 
    },
    { 
        name: "Aceite de oliva", 
        list: {
            macro: [LIPIDOS]
        }, 
        info: "Sabroso, de nuestra tierra." 
    },
    { 
        name: "Aceite de girasol", 
        list: {
            macro: [LIPIDOS]
        }, 
        info: "Aceite con sabor suave." 
    },
    { 
        name: "Melón", 
        list: {
            macro: [GLUC_SIMP],
            micro: [VITAMINAS, SALES],
            agua: AGUA_MEDIO,
            fibra: true
        },
        info: "Hidratante y bajo en calorías. Los azúcares que contiene son de liberación lenta." 
    },
    { 
        name: "Bizcocho", 
        list: {
            macro: [GLUC_SIMP, GLUC_COMP, LIPIDOS]
        }, 
        info: "Mejor si es casero, hecho con poco azúcar." 
    },
    { 
        name: "Galletas", 
        list: {
            macro: [GLUC_SIMP, GLUC_COMP, LIPIDOS]
        }, 
        info: "Conviene tomarlas solo esporádicamente." 
    },
    { 
        name: "Rosquilletas de pipas", 
        list: {
            macro: [GLUC_SIMP, GLUC_COMP, LIPIDOS]
        }, 
        info: "No conviene abusar de ellas." 
    }
]

export default dataset