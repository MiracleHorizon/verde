export class UnauthorizedException extends Error {
  public readonly status: number

  constructor() {
    super('Wrong credentials')
    this.name = 'UnauthorizedException'
    this.status = 401
  }
}
