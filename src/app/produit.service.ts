import { inject, Injectable } from '@angular/core';
import {HttpClient, HttpParams}from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Produit } from './produit';
import { Categorie } from './categorie';
import { Compte } from './compte';
import { Panier } from './panier';
const URL="http://localhost:3000/produits";

const URL_CATEG="http://localhost:3000/categories";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
navigate(arg0: string[]) {
  throw new Error('Method not implemented.');
}
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
totalPrix:number=0;


 URL_COMPT="http://localhost:3000/utilisateurs";
register(user:Compte): Observable<Compte> {
  const completeUser = {
    nom: user.nom_complet,
    adresse_email:user.adresse_email,
    mot_de_passe: user.mot_de_passe,
    Total_prix:"0",
    panier:[],
  };

  return this.http.post<Compte>(this.URL_COMPT, completeUser);
}
login(name: string, password: string): Observable<boolean> {
  return this.http.get<any[]>(`${this.URL_COMPT}?nom=${name}&mot_de_passe=${password}`).pipe(
    map(users => users.length > 0)
  );
}

addProductToUser(nom: string, product: { produit_id: number; quantité: number; prix: number }): Observable<any> {
   return this.http.get<any[]>(this.URL_COMPT).pipe(
     map((users) => {

       const user = users.find(user => user.nom === nom);
       user.panier.push(product);
       user.Total_prix += product.prix * product.quantité;

     })
  );
}

public getPanier(name:any):Observable<any[]>{
  return this.http.get<any[]>(`${this.URL_COMPT}?nom=${name}`)
}


}


