import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
    user: any;
    userForm;

    constructor(private userService: UserService, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.getUser();
        this.setupUserForm();
    }

    setupUserForm() {
        this.userForm = this.formBuilder.group({
            firstName: this.user.firstName || '',
            lastName: this.user.lastName || '',
            email: this.user.email || '',
            phoneNumber: this.user.phoneNumber || '',
            dob: this.user.dob || ''
        });
    }

    getUser() {
        // this.user = this.userService.currentUser.subscribe(
        //     res => console.log(res)
        // );
        this.user = this.userService.getUser();
        console.log('  > ', this.user);
    }

    onGetUserSuccess(data) {
        this.user = data;
        console.log(this.user);
    }

    onGetUserError(err) {
        console.log(err);
    }

}
