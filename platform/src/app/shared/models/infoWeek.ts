export interface InfoWeek {
    id: number;
    line: string;
    dates: Day[]
    volplan: number;
    volreal: number;
    kgvar: number;
}

interface Day {
    id: number;
    value: number;
}