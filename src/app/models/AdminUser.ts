
export class AdminUser   {
  constructor(
    public adminUserId: number,
    public userName: string,
    public email: string,
    public firstName: string,
    public lastName: string,
    public password: string,
    public authenticated: string,
    public phoneNumber: string,
    public dateAdded: string
  ) {}
}
