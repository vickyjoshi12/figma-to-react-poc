import type { ProductData } from '../../../types/dashboard'
import ProductRow from '../../../components/ui/ProductRow'
import chickenNoodlesImage from '../../../assets/product-chicken-noodles.png'
import freshSaladBowlImage from '../../../assets/product-fresh-salad-bowl.png'
import hotChickenWingsImage from '../../../assets/product-hot-chicken-wings.png'
import smoothieFruitsImage from '../../../assets/product-smoothie-fruits.png'

interface MostOrderedPanelProps {
  products: ProductData[]
}

const productImages: Record<string, string> = {
  'fresh-salad-bowl': freshSaladBowlImage,
  'chicken-noodles': chickenNoodlesImage,
  'smoothie-fruits': smoothieFruitsImage,
  'hot-chicken-wings': hotChickenWingsImage,
}

function MostOrderedPanel({ products }: MostOrderedPanelProps) {
  return (
    <section aria-labelledby="most-ordered-title" className="dashboard-panel most-ordered-panel">
      <h2 id="most-ordered-title">Most Ordered Food</h2>
      <p className="panel-description">Adipiscing elit, sed do eiusmod tempor</p>
      <ul className="product-list">
        {products.map((product) => (
          <ProductRow
            key={product.id}
            product={{ ...product, imageUrl: productImages[product.id] ?? product.imageUrl }}
          />
        ))}
      </ul>
    </section>
  )
}

export default MostOrderedPanel
