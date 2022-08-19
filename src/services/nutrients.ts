// Macronutrients
export const PROTEINA = 0
export const GLUC_COMP = 1
export const GLUC_SIMP = 2
export const LIPIDOS = 4

export type Macro = typeof PROTEINA | typeof GLUC_COMP | typeof GLUC_SIMP | typeof LIPIDOS

// Micronutrients
export const VITAMINAS = 5 
export const SALES = 6

export type Micro = typeof VITAMINAS | typeof SALES

// Agua
export const AGUA_BAJO = 7 
export const AGUA_MEDIO = 8
export const AGUA_ALTO = 9

export type Agua = typeof AGUA_BAJO | typeof AGUA_MEDIO | typeof AGUA_ALTO

// Minerals
export const CA = 10
export const P = 11
export const K = 12
export const MG = 13
export const FE = 14
export const I = 15
export const ZN = 16
export const SE = 17

export type Minerals = typeof CA | typeof P | typeof K | typeof MG | typeof FE | typeof I | typeof ZN | typeof SE

// Vitamins
export const B1 = 18
export const B9 = 19
export const B12 = 20
export const C = 21
export const A = 22
export const D = 23
export const E = 24
export const VitK = 25

export type Vitamins = typeof B1 | typeof B9 | typeof B12 | typeof C | typeof A | typeof D | typeof E | typeof VitK
