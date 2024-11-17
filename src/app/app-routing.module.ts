import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from "./app.component";
import {HomeComponent} from "./components/home/home.component";
import {HistoryComponent} from "./components/history/history.component";
import {NewsComponent} from "./components/news/news.component";
import {OcComitteeComponent} from "./components/oc-comittee/oc-comittee.component";
import {PartnerComponent} from "./components/partner/partner.component";
import {HotelComponent} from "./components/hotel/hotel.component";
import {StadiumComponent} from "./components/stadium/stadium.component";
import {TeamComponent} from "./components/team/team.component";
import {ScheduleComponent} from "./components/schedule/schedule.component";
import {LogoComponent} from "./components/logo/logo.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'logos', component: LogoComponent},
  {path: 'news', component: NewsComponent},
  {path: 'oc', component: OcComitteeComponent},
  {path: 'partner', component: PartnerComponent},
  {path: 'hotel', component: HotelComponent},
  {path: 'stadium', component: StadiumComponent},
  {path: 'team', component: TeamComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
