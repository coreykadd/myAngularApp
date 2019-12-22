import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
    user: any;
    userForm;

    constructor(private userService: UserService, private formBuilder: FormBuilder, private toastrService : ToastrService) { }

    ngOnInit() {
        this.getUser();
        this.setupUserForm();
    }

    setupUserForm() {
        this.userForm = this.formBuilder.group({
            firstName: this.user.firstName || '',
            lastName: this.user.lastName || '',
            email: this.user.email || '',
            address: this.formBuilder.group({
                address1: this.user.address1 || '',
                address2: this.user.address2 || '',
                address3: this.user.address3 || '',
                country: this.user.country || '',
                zip: this.user.zip || ''
            })
        });
    }

    getUser() {
        this.user = this.userService.getUser();
        console.log('  > ', this.user);
    }

    updateUserAccount() {
        console.log('userForm >> ', this.userForm.value);

        this.userService.updatedUser(this.userForm.value, this.user._id).subscribe(
            res => this.onUpdateUserAccountSuccess(res),
            err => this.onError(err)
        );
    }

    onUpdateUserAccountSuccess(res) {
        console.log('update res >', res);
        this.toastrService.success('Account updated', 'Succuess');
    }

    onError(err) {
        console.error(err);
    }

}
