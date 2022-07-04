// Macronutrients
export const PROTEINA = 0
export const GLUC_COMP = 1
export const GLUC_SIMP = 2
export const LIPIDOS = 4
// Micronutrients
export const VITAMINAS = 5 
export const SALES = 6
// Agua
export const AGUA_BAJO = 7 
export const AGUA_MEDIO = 8
export const AGUA_ALTO = 9

export type Nutrient = typeof PROTEINA | typeof GLUC_COMP | typeof GLUC_SIMP | typeof LIPIDOS | typeof VITAMINAS | typeof SALES

export type Agua = typeof AGUA_BAJO | typeof AGUA_MEDIO | typeof AGUA_ALTO