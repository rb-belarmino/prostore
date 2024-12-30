import ProductList from '@/components/shared/products/product-list'
import sampleData from '@/db/sample-data'

const HomePage = () => {
  console.log(sampleData)
  return (
    <>
      <ProductList
        data={sampleData.products}
        title="Newest Arrivals"
        limit={4}
      />
    </>
  )
}

export default HomePage
