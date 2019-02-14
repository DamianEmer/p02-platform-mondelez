export interface Report {
    id: number;
    line: string;
    geTurno: Turno[];
    oeeTurno: Turno[];
    infoWeek: Day[];
    infoMonth: Week[];
    volplan: number;
    volreal: number;
    kgvar: number;
}

interface Turno {
    id: number; // id del turno
    turn?: number; // tiempo del turno
    value: number; // valor del turno GE/OEE
}

interface Day {
    id: number; // numero de dia
    day?: string, // Nombre del dia
    valueGE: number // valor de GE del dia
}

interface Week {
    week: number; // numero de la semana
    valueGE: number; // Valor de GE de la semana
}