import { Component, OnInit } from "@angular/core";
import { UserService } from "../../users/service/user.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    images = [
        { id: '1', url: 'assets/image1.jpg' },
        { id: '2', url: 'assets/image2.jpg' },
        { id: '3', url: 'assets/image3.jpg' }
    ];

    customOptions: any = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        center: true,
        navSpeed: 700,
        navText: ['Previous', 'Next'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        },
        nav: true
    };
    isLogged = false;
    username = '';

    constructor(private userService: UserService) { }

    ngOnInit() {
        if (this.userService.getToken()) {
            this.isLogged = true;
            this.username = this.userService.getUserName();
        } else {
            this.isLogged = false;
            this.username = '';
        }
    }
}