export interface InfoMonth {
    id: number;
    line: string;
    dates: Week[];
    volplan: number;
    volreal: number;
    kgvar: number; 
}

interface Week {
    id: number;
    value: number;
}