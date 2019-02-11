/** Estructura de un dia por linea */

export interface InfoDay{
    id: number;
    line: string;
    geTurno: Turno[];
    oeeTurno: Turno [];
    volplan: number;
    volreal: number;
    kgvar: number;
}

interface Turno{
    turno: number;
    value: number;
}