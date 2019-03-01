import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckReport } from '../models/checkReport';
import { HttpParams, HttpClient } from '@angular/common/http';

interface Data {
  week: number;
  day: number;
}

@Injectable({
  providedIn: 'root'
})
export class CheckReportService {

  report: CheckReport = 
    {
      line: 'Pack Line 2',
      days: [
        {          
          id: 1,
          lineByDay: [
            {
              id: 1,
              line: 'pack line 2',
              product_designation: '',
              line_global_waterfall: '20 Pack Philadelphia',
              product_global_waterfall: '75010026151810',
              day: 1,
              shift: 1,
              product_speed: null,
              maximum_time:  480,
              legal_non_operating_time: 0,
              no_demand: null,
              force_majeure: 0,
              minutes_used: 480,
              planned_maintenance: 0,
              planned_autonomoue_maintenance: 0,
              sanitation: 0,
              changeovers: 15,
              planned_stops: 0,
              consumables_replacement: 0,
              start_and_finish_production: 0,
              production_time: 465,
              minor_stoppages: 0,
              breakdowns: 0,
              operational_losses: 0,
              line_delays: 0,
              labor_management_losses: 0,
              speed_loss: -1,
              quality_loss: 0,
              operating_time: 0,
              lu: 100,
              ge: 97.09,
              oee: 100.22,
              volume_defect_free: 35742,
              volume_defect_losses: 0,
              producto_terminado: 3132
            },
            {
              id: 2,
              line: 'pack line 2',
              product_designation: '',
              line_global_waterfall: '20 Pack Philadelphia',
              product_global_waterfall: '75010026151810',
              day: 1,
              shift: 1,
              product_speed: null,
              maximum_time:  480,
              legal_non_operating_time: 0,
              no_demand: null,
              force_majeure: 0,
              minutes_used: 480,
              planned_maintenance: 0,
              planned_autonomoue_maintenance: 0,
              sanitation: 0,
              changeovers: 15,
              planned_stops: 0,
              consumables_replacement: 0,
              start_and_finish_production: 0,
              production_time: 465,
              minor_stoppages: 0,
              breakdowns: 0,
              operational_losses: 0,
              line_delays: 0,
              labor_management_losses: 0,
              speed_loss: -1,
              quality_loss: 0,
              operating_time: 0,
              lu: 100,
              ge: 97.09,
              oee: 100.22,
              volume_defect_free: 35742,
              volume_defect_losses: 0,
              producto_terminado: 3132
            },
            {
              id: 3,
              line: 'pack line 2',
              product_designation: '',
              line_global_waterfall: '20 Pack Philadelphia',
              product_global_waterfall: '75010026151810',
              day: 1,
              shift: 1,
              product_speed: null,
              maximum_time:  480,
              legal_non_operating_time: 0,
              no_demand: null,
              force_majeure: 0,
              minutes_used: 480,
              planned_maintenance: 0,
              planned_autonomoue_maintenance: 0,
              sanitation: 0,
              changeovers: 15,
              planned_stops: 0,
              consumables_replacement: 0,
              start_and_finish_production: 0,
              production_time: 465,
              minor_stoppages: 0,
              breakdowns: 0,
              operational_losses: 0,
              line_delays: 0,
              labor_management_losses: 0,
              speed_loss: -1,
              quality_loss: 0,
              operating_time: 0,
              lu: 100,
              ge: 97.09,
              oee: 100.22,
              volume_defect_free: 35742,
              volume_defect_losses: 0,
              producto_terminado: 3132
            },
            {
              id: 5,
              line: 'pack line 2',
              product_designation: '',
              line_global_waterfall: '20 Pack Philadelphia',
              product_global_waterfall: '75010026151810',
              day: 1,
              shift: 1,
              product_speed: null,
              maximum_time:  480,
              legal_non_operating_time: 0,
              no_demand: null,
              force_majeure: 0,
              minutes_used: 480,
              planned_maintenance: 0,
              planned_autonomoue_maintenance: 0,
              sanitation: 0,
              changeovers: 15,
              planned_stops: 0,
              consumables_replacement: 0,
              start_and_finish_production: 0,
              production_time: 465,
              minor_stoppages: 0,
              breakdowns: 0,
              operational_losses: 0,
              line_delays: 0,
              labor_management_losses: 0,
              speed_loss: -1,
              quality_loss: 0,
              operating_time: 0,
              lu: 100,
              ge: 97.09,
              oee: 100.22,
              volume_defect_free: 35742,
              volume_defect_losses: 0,
              producto_terminado: 3132
            },
            {
              id: 6,
              line: 'pack line 2',
              product_designation: '',
              line_global_waterfall: '20 Pack Philadelphia',
              product_global_waterfall: '75010026151810',
              day: 1,
              shift: 1,
              product_speed: null,
              maximum_time:  480,
              legal_non_operating_time: 0,
              no_demand: null,
              force_majeure: 0,
              minutes_used: 480,
              planned_maintenance: 0,
              planned_autonomoue_maintenance: 0,
              sanitation: 0,
              changeovers: 15,
              planned_stops: 0,
              consumables_replacement: 0,
              start_and_finish_production: 0,
              production_time: 465,
              minor_stoppages: 0,
              breakdowns: 0,
              operational_losses: 0,
              line_delays: 0,
              labor_management_losses: 0,
              speed_loss: -1,
              quality_loss: 0,
              operating_time: 0,
              lu: 100,
              ge: 97.09,
              oee: 100.22,
              volume_defect_free: 35742,
              volume_defect_losses: 0,
              producto_terminado: 3132
            }
          ]
        },
      ]
    };


    apiURL = 'host:port/v1';

  constructor( private http: HttpClient) { }

  //GET
  getLine(info?: Data): Observable<CheckReport>{
    // const httpParams = new HttpParams()
    //   .set('week', info.week.toString())
    //   .set('day', info.day.toString());
    return Observable.create( observer => {
      observer.next(this.report);
    });
    // return this.http.get<CheckReport>(`${this.apiURL}/check-report`, {params: httpParams } );
  }
}
