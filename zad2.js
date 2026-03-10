export function sortAndTransformProducts(products, sortOrder = 'asc') {
  const sortedProducts = [...products].sort((a, b) => {
    return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
  });

  return sortedProducts.map(product => ({
    id: product.id,
    name: product.name,
    priceWithSale: product.price * 0.8
  }));
}
