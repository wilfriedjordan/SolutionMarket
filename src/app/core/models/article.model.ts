export class Article {
  public id!:number
  public title!: string;
  public img!: string;
  public description?: string;
  public price!: number;
  public createAt!: Date;
  public updateAt?: Date;
}
