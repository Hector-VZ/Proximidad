import { Component, ChangeDetectorRef } from "@angular/core";
import { NavController, Platform } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  beaconData: any;

  constructor(
    public navCtrl: NavController,
    private platform: Platform,
    private change: ChangeDetectorRef
  ) {}

  scanBeacon() {
    this.platform.ready().then(() => {
      evothings.eddystone.startScan(
        data => {
          this.beaconData = data;
          console.log(this.beaconData);
          setTimeout(() => {
            this.change.detectChanges();
          }, 1000);
        },
        error => console.error(error)
      );
    });
  }
}
