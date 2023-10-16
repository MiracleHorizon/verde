export interface PageProps {
  params: Params
  searchParams: SearchParams
}

interface Params {
  [key: string]: string
}

interface SearchParams {
  [key: string]: string | string[] | undefined
}
