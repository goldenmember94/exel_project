//'utils.js' файл с наборами функций, которые не привязаны
//к конкретному участку кода. которые в дальнейшем будут переиспользованы.

//делает первую букву строки заглавной
export function capitalize(string) {
  if (typeof string !== 'string') {
    return ''
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}