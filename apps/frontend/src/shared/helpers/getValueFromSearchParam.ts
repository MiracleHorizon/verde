/**
 * @param searchParam - the search parameter, which can be a string or an
 * array of strings.
 */
export function getValueFromSearchParam(
  searchParam: string | string[]
): string {
  if (!Array.isArray(searchParam)) {
    return searchParam
  }

  if (searchParam.length === 0) {
    return ''
  }

  return searchParam[0]
}
