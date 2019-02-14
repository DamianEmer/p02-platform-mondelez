export interface CheckReport {
    line: string;
    days: Day[];
}

interface Day {
    id: number;
    lineByDay: LineByDay[];
}

interface LineByDay {
    id: number,
    line: string;
    product_designation: string;
    line_global_waterfall: string;
    product_global_waterfall: string;
    day: number;
    shift: number;
    product_speed: number;
    maximum_time:  number;
    legal_non_operating_time: number;
    no_demand: number;
    force_majeure: number;
    minutes_used: number;
    planned_maintenance: number;
    planned_autonomoue_maintenance: number;
    sanitation: number;
    changeovers: number;
    planned_stops: number;
    consumables_replacement: number;
    start_and_finish_production: number;
    production_time: number;
    minor_stoppages: number;
    breakdowns: number;
    operational_losses: number;
    line_delays: number;
    labor_management_losses: number;
    speed_loss: number;
    quality_loss: number;
    operating_time: number;
    lu: number;
    ge: number;
    oee: number;
    volume_defect_free: number;
    volume_defect_losses: number;
    producto_terminado: number;
}