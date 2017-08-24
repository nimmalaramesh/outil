
import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
selector: 'home',
templateUrl: 'home.component.html',
providers: [UserService]
})

export class HomeComponent implements OnInit {

title = 'POST Request';
username: string;
password: string;
results = [];
userService: any;

constructor(@Inject(UserService) userService) {
    this.userService = userService;
    this.getUsers();
}

ngOnInit() {
    this.results = [];
    this.getUsers();
}

getUsers() {
    this.userService.getUsers()
        .map(res => res.json())
        .subscribe(results => this.results = results);
    }
}
