export class Cv {
  constructor(
    public id: number = 0,
    public name: string = 'Unknown',
    public profession: string = 'Not Specified',
    public quote: string = '',
    public motto: string = '',
    public jobDescription: string = 'No description provided',
    public followers: number = 0,
    public following: number = 0,
    public projects: number = 0,
    public coverImage: string = 'assets/images/rotating_card_thumb2.png',
    public profileImage: string = ''
  ) {}
}
