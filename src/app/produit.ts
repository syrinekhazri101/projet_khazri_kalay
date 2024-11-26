export class Produit {
  constructor(  public id:number,
    public nom: string,
    public photo: string,
   public  categId:number,
   public fabricant:string,
    public prix: string,
    public description: string,
    public garantie: boolean,
    public disponibilite: string[],
     public enStock: boolean, ){}
}
