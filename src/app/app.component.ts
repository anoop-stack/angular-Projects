import { Component, OnInit, } from '@angular/core';
// Import the Router and navigation events
import {
  Router, NavigationStart, NavigationEnd,
  NavigationCancel, NavigationError, Event
} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /**
   * To implement the loading indicator, we are going to make use of the Angular Router Navigation events. We discussed these events in our previous video. These navigation events range from when the navigation starts and ends to many points in between. When the navigation starts, we want to show the loading indicator, and when the navigation ends, hide the loading indicator.

    To be able to react and execute some code in response to the router navigation events, subscribe to the Angular router events observable.
   */
  showLoadingIndicator = true;

  constructor(private _router: Router) { }

  ngOnInit() {
    // Subscribe to the router events observable
    this._router.events.subscribe((routerEvent: Event) => {

      // On NavigationStart, set showLoadingIndicator to ture
      // On NavigationStart, set showLoadingIndicator to ture
      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }

      // On NavigationEnd or NavigationError or NavigationCancel
      // set showLoadingIndicator to false
      if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationError ||
        routerEvent instanceof NavigationCancel) {
        this.showLoadingIndicator = false;
      }

    });
  }
}
