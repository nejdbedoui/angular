import { Component } from '@angular/core';
import { User } from '../_Models/User';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
   userList: User[] = [
    new User(
      1,
      'John',
      'Doe',
      '1990-01-15',
      'john@example.com',
      'password123',
      'Engineer',
      'Standard',
      'admin.png'
    ),
    new User(
      2,
      'Jane',
      'Smith',
      '1992-05-20',
      'jane@example.com',
      'secret456',
      'Designer',
      'Premium',
      'customer.png'
    ),
    new User(
      3,
      'Alice',
      'Johnson',
      '1985-09-03',
      'alice@example.com',
      'alicepass',
      'Teacher',
      'Standard',
      'golden.png'
    ),
    new User(
      4,
      'Bob',
      'Williams',
      '1988-11-12',
      'bob@example.com',
      'bob123',
      'Accountant',
      'Premium',
      'blocked.png'
    ),
  ];


   deleteUser(id: number) {
    const index = this.userList.findIndex((user) => user.idCustomer === id);
    if (index !== -1) {
      this.userList.splice(index, 1);
    }
  }
}
