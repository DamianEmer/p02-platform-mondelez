export interface DetailLine {
    id: number;
    nummberWeek: number;
    date: string;
    line: string;   
    operator: string;
    turn: number;
    turnTime: number;
    idSku: string;
    descriptionSku: string;
    oee: number;
    ge: number;
    timeProduction: number;
    volume: number;
    tld: number;
    waste: number;
    typeWaste: number;
    retentions: number;
    typeRetention: number;
    reprocess: number;
    typeReprocess: number;
    lostSpeed: number;
    unplannedStoppages: Stoppages[];
    plannedStoppages: Stoppages[];
}

interface Stoppages {
    id:string;
    description: string;
    minutes: number;
    times: number;
    typeWF:string; 
}
