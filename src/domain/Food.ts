import { Macro, Vitamins, Minerals, Agua } from "./Nutrients"

export interface Food {
    name: string;
    list: {
        macro: Macro[],
        vitamins: Vitamins[]
        minerals: Minerals[],
        agua: Agua,
        fibra: boolean,

    };
    info: string;
}