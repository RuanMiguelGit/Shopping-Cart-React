export async function getCategories() {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const data = await fetch(URL);
  const json = await data.json();
  return json;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId === '') {
    const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    return fetch(URL).then((result) => result.json().then((data) => data.results));
  }

  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const data = await fetch(URL);
  const json = await data.json();
  return json;
}

export async function getProductsFromQuery(query) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  return fetch(URL).then((result) => result.json().then((data) => data.results));
}
