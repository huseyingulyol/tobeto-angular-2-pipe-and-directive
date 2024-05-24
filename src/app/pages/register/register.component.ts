import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../../interfaces/iuser';
import { CommonModule, JsonPipe } from '@angular/common';
import { UserService } from '../../services/user.service';
import { FormControlErrorMessagePipe } from '../../pipes/form-control-error-message.pipe';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormControlErrorMessagePipe,JsonPipe],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  dataLoaded : boolean = false;
  route: ActivatedRoute = inject(ActivatedRoute);
  userService = inject(UserService);

  user : IUser | undefined;
  applyForm = this.fb.group({
    id: [0, Validators.required],
    username: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(15)]],
    password: ['',[Validators.required, Validators.minLength(2),Validators.maxLength(15)]],
  });
  

  constructor(private fb : FormBuilder, private router: Router) {
    this.dataLoaded = true;
  }
  
  submitApplication() {
    const user : IUser = 
    {
      id: this.user?.id ?? 0,
      username: this.applyForm.value.username ?? '',
      password: this.applyForm.value.password ?? '',
    }; 

    console.log("Register successfully! : " + user);
    
  }
}
