import { Component, OnInit } from '@angular/core';
import { RedditService } from './services/reddit.service';
import { AuthService } from './services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Token } from './model/token';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public token = new Token();

    constructor(
        private authService: AuthService,
        private redditService: RedditService,
        private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            if (params.code !== undefined && params.code !== null) {
                this.authService.getAuthToken(params.code, params.state).subscribe(res => {
                    this.token = res;
                    this.redditService.getMe(this.token).subscribe(rees => {
                        console.log(rees);
                    });
                });
            }
        });
    }

    getToken() {
        this.authService.redirect();
    }
}
