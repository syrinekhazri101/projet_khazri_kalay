import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Produit } from '../produit';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Categorie } from '../categorie';

const URL="http://localhost:3000/produits";
const URL_CATEG="http://localhost:3000/categories";


@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  private readonly http:HttpClient=inject(HttpClient);

  public getProduits():Observable<Produit[]>{
    return this.http.get<Produit[]>(URL);
    }
    getProductById(productId: number): Observable<Produit> {
      const url = `${URL}/${productId}`;
        return this.http.get<Produit>(url);
    }
    public getProduitByFabricant(fabricant:string):Observable<Produit[]>{
    
        const params = new HttpParams().set('fabricant', fabricant.charAt(0).toUpperCase() + fabricant.slice(1).toLowerCase());
        return this.http.get<Produit[]>(URL, { params });
      }
    
    public getProductByCategorie(categId:number):Observable<Produit[]>{
      return this.http.get<Produit[]>(`${URL}?categId=${categId}`);
    }
    public getcategorie():Observable<Categorie[]>{
      return this.http.get<Categorie[]>(URL_CATEG)
    }
    public addProduct(product:Produit):Observable<Produit>{
      return this.http.post<Produit>(URL, product);
    }

updateProduct(id:number, p:Produit):Observable<Produit>{
  return this.http.put<Produit>(URL+"/"+ id, p);
  }
  deleteProduct(id:number){
    return this.http.delete(URL+"/"+ id);
    }
    URL_admin="http://localhost:3000/admins";
    login(name: string, password: string): Observable<boolean> {
      return this.http
        .get<any[]>(`${this.URL_admin}?name=${name}&password=${password}`)
        .pipe(map(users => users.length > 0));
    }
    changePassword(name: string, newPassword: string): Observable<any> {
      return this.http.patch(`${this.URL_admin}?name=${name}`, { password: newPassword });
    }
  
    
    
}
