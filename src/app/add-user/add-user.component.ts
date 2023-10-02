import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../_Models/User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // Initialize the form with default values and validation rules
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      profession: ['', Validators.required],
      accountCategory: ['', Validators.required],
      picture: [''], // Optional field
    });
  }

  // Function to submit the form and create a new user
  addUser() {
    if (this.userForm.valid) {
      const newUser: User = { ...this.userForm.value, idCustomer: 0 }; // Assuming idCustomer is auto-generated
      // You can send this newUser object to your backend API or perform any desired action
      console.log('New User:', newUser);
      // Reset the form after adding a user
      this.userForm.reset();
    }
  }
}
