import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllindiatripComponent } from './allindiatrip/allindiatrip.component';
import { EnjoyingplacesComponent } from './enjoyingplaces/enjoyingplaces.component';
import { GodtemplesComponent } from './godtemples/godtemples.component';
import { HistoricalplacesComponent } from './historicalplaces/historicalplaces.component';
import { HomeComponent } from './home/home.component';
import { NatureplacesComponent } from './natureplaces/natureplaces.component';
import { SeasonalplacesComponent } from './seasonalplaces/seasonalplaces.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SpecialplacesComponent } from './specialplaces/specialplaces.component';
import { StatewiseComponent } from './statewise/statewise.component';
import { UnionterritoriesComponent } from './unionterritories/unionterritories.component';
import { WondersinindiaComponent } from './wondersinindia/wondersinindia.component';
import { ZonewiseComponent } from './zonewise/zonewise.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, children: [{ path: 'sidebar', component: SidebarComponent }] },
  { path: 'allindiatrip', component: AllindiatripComponent },
  { path: 'zonewise', component: ZonewiseComponent },
  { path: 'statewise', component: StatewiseComponent },
  { path: 'unionterritories', component: UnionterritoriesComponent },
  { path: 'specialplaces', component: SpecialplacesComponent },
  { path: 'wondersinindia', component: WondersinindiaComponent },
  { path: 'historicalplaces', component: HistoricalplacesComponent },
  { path: 'natureplaces', component: NatureplacesComponent },
  { path: 'enjoyingplaces', component: EnjoyingplacesComponent },
  { path: 'godtemples', component: GodtemplesComponent },
  { path: 'seasonalplaces', component: SeasonalplacesComponent },
  { path: 'registrationform', component: RegistrationformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
