export const homeApi = async () => {
  try {
    const data = await fetch('https://dummyjson.com/products');
    const res = await data.json();
    return res.products;
  } catch (error) {
    console.log(error, 'error.status');
  }
};

export const searchApi = async (query: string) => {
  try {
    const data = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const res = await data.json();
    return res.products;
  } catch (error) {
    console.log(error, 'error.status');
  }
};
