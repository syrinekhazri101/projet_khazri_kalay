import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router :Router=inject(Router);
  let statec=localStorage.getItem('state');
  if(statec=="connected")
    return true;
  
  else{
    router.navigate(['/login']);
    return false;
  }
  
};
