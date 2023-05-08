import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
// used to create fake backend
import { mockBackendProvider } from './helpers/mock-backend';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AssetService } from './services/asset.service';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { AssetDetailsComponent } from './asset-details/asset-details.component';
import { AssetTableComponent } from './asset-table/asset-table.component';
import { EmployeeEquipmentComponent } from './employee-equipment/employee-equipment.component';
import { HeaderComponent } from './header/header.component';
import { AssetSearchComponent } from './asset-search/asset-search.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule],
  declarations: [ AppComponent, HelloComponent, AddAssetComponent, AssetDetailsComponent, AssetTableComponent, EmployeeEquipmentComponent, HeaderComponent, AssetSearchComponent],
  bootstrap:    [ AppComponent ],
  providers: [AssetService, mockBackendProvider]
})
export class AppModule { }
