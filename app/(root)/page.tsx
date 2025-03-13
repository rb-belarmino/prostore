import ProductList from '@/components/shared/products/product-list'
import {
  getLatestProducts,
  getFeaturedProducts
} from '@/lib/actions/product.actions'
import ProductCarousel from '@/components/shared/products/product-carousel'
import ViewAllProductsButton from '@/components/view-all-products-button'

const HomePage = async () => {
  const latestProducts = await getLatestProducts()
  const featuredProducts = await getFeaturedProducts()

  return (
    <>
      {featuredProducts.length > 0 && (
        <ProductCarousel data={featuredProducts} />
      )}
      <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
      <ViewAllProductsButton />
    </>
  )
}

export default HomePage
