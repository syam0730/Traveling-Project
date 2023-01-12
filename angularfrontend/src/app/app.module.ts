import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllindiatripComponent } from './allindiatrip/allindiatrip.component';
import { HomeComponent } from './home/home.component';
import { ZonewiseComponent } from './zonewise/zonewise.component';
import { SpecialplacesComponent } from './specialplaces/specialplaces.component';
import { WondersinindiaComponent } from './wondersinindia/wondersinindia.component';
import { HistoricalplacesComponent } from './historicalplaces/historicalplaces.component';
import { NatureplacesComponent } from './natureplaces/natureplaces.component';
import { EnjoyingplacesComponent } from './enjoyingplaces/enjoyingplaces.component';
import { GodtemplesComponent } from './godtemples/godtemples.component';
import { SeasonalplacesComponent } from './seasonalplaces/seasonalplaces.component';
import { StatewiseComponent } from './statewise/statewise.component';
import { UnionterritoriesComponent } from './unionterritories/unionterritories.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';

@NgModule({
  declarations: [
    AppComponent,
    AllindiatripComponent,
    HomeComponent,
    ZonewiseComponent,
    SpecialplacesComponent,
    WondersinindiaComponent,
    HistoricalplacesComponent,
    NatureplacesComponent,
    EnjoyingplacesComponent,
    GodtemplesComponent,
    SeasonalplacesComponent,
    StatewiseComponent,
    UnionterritoriesComponent,
    SidebarComponent,
    RegistrationformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
