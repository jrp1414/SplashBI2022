import { AfterContentInit, AfterViewInit, Component, ContentChild, OnInit, ViewChild } from "@angular/core";

import { AdDirective } from "./ad.directive";
import { AdComponent, AdItem, AdService } from "./ad.service";

@Component({
    selector: "ad-banner",
    template: `
    <h3>Advertisements</h3>
    <ng-template adHost></ng-template>
    `
})
export class AdBannerComponent implements AfterContentInit {
    ads: AdItem[] = [];
    currentAdIndex = -1;
    interval: any;

    @ViewChild(AdDirective, { read: true, static: false }) adHost!: AdDirective;

    constructor(private adService: AdService) {
        this.ads = this.adService.getAds();
    }
    ngAfterContentInit(): void {

    }
    ngAfterViewInit(): void {
        this.loadComponent();
        this.chnageAd();
    }

    ngOnInit(): void {

    }

    loadComponent() {
        this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
        const adItem = this.ads[this.currentAdIndex];

        const vc = this.adHost?.viewContainerRef;
        vc.clear();

        const compRef = vc.createComponent<AdComponent>(adItem.component);
        compRef.instance.data = adItem.data;
    }

    chnageAd() {
        this.interval = setInterval(() => {
            this.loadComponent();
        }, 3000);
    }
}