export interface GenerateMetadataParams {
  params: {
    [key: string]: string
  }
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}
