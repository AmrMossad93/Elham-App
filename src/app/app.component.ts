import {Component, OnInit} from '@angular/core';
import {NavigationEnd, NavigationStart, Router, Event,} from '@angular/router';
import {LoaderService} from "./Services/loader.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'elhamApp';
  currentUrl: string = '';

  constructor(public router: Router, private loaderService: LoaderService) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.loaderService.show();
        this.currentUrl = routerEvent.url.substring(
          routerEvent.url.lastIndexOf('/') + 1
        );
      }
      if (routerEvent instanceof NavigationEnd) {
        this.loaderService.hide();
      }
      window.scrollTo(0, 0);
    });
  }
}
