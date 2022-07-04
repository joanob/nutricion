import dataset, { IFood } from "./dataset"

export const getRandomFood = (): IFood => {
    const random = Math.floor(Math.random() * dataset.length)
    return dataset[random]
}