import { Injectable } from '@angular/core';
import { ApplicationSettings } from '@nativescript/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class GlobalService {

  private userSource = new BehaviorSubject<User>(new User());
  user = this.userSource.asObservable();

  set me(user: User) {
    ApplicationSettings.setString('account', JSON.stringify(user));
    this.userSource.next(user);
  }

}
