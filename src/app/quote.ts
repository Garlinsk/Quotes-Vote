export class Quote {
  public showDescription: boolean;

  constructor(
    public name: string,
    public author: string,
    public quote: string,
    public upvotes: number,
    public downvotes: number,
    public myDate: Date) {
      this.showDescription=false;
    }
    // this.upvotes = 0
    // this.downvotes = 0
    // this.myDate = new Date()

  
}
