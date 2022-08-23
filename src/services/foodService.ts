import dataset, { Food } from "./dataset"

export const getRandomFood = (): Food => {
    const random = Math.floor(Math.random() * dataset.length)
    return dataset[random]
}