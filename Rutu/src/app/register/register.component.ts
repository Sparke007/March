import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  Departments: any = ['Accounts and Finance',
    'HR',
    'Sales and marketing (Business development)',
    'Infrastructures',
    'Research and development',
    'Learning and development',
    'IT services',
    'Product development',
    'Admin department',
    'Security and transport'];
  constructor() { }
  ngOnInit() {
  }
}
