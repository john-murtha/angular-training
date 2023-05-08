import { Component, Input } from '@angular/core';
import { stringify } from 'querystring';
import { Asset } from './models/asset'
import { AssetService } from './services/asset.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name: string;
  assets: Asset[];
  searchText = "";

  constructor(private assetService: AssetService){
    this.name = 'CGI Member';
  }

  ngOnInit(){
    this.getAssets();
  }

  // demo function that creates a new asset
  public addAssetDemo() {
    let newAsset = new Asset();
    newAsset.assetType = 'Computer';
    newAsset.description= 'Demo of creating a new asset'
    newAsset.assignedTo= '1234';

    console.log(document.getElementById('employeeID'));
    
    this.assetService.createAsset(newAsset)
      .subscribe(asset => { 
          this.getAssets(); // refresh assets list
        }, 
        error => {});
  }

  public addAsset(_assetType: string, _description: string, _assignedTo: string) {
    let newAsset = new Asset();
    newAsset.assetType = _assetType;
    newAsset.description = _description;
    newAsset.assignedTo = _assignedTo;

    this.assetService.createAsset(newAsset)
      .subscribe(asset => {
        this.getAssets();
      },
      error => {});
  }

  // retrieves the list of assets from mock backend 
  public getAssets(){
    this.assetService.getAssets().subscribe(data => this.assets = data);
  }
}
