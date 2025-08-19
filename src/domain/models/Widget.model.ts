export default class Widget {
  constructor(
    public title: string,
    public value: number,
    public description: string,
    public badget: number,
    public icon?: React.ElementType,
    
  ) {}
}