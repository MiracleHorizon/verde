export class NotFoundException extends Error {
  public readonly status: number

  constructor() {
    super('Not found')
    this.name = 'NotFoundException'
    this.status = 404
  }
}
