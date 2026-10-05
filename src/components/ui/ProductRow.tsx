import type { ProductData } from '../../types/dashboard'

interface ProductRowProps {
  product: ProductData
}

function ProductRow({ product }: ProductRowProps) {
  return (
    <li className="product-row">
      {product.imageUrl ? (
        <img className="product-row__image" src={product.imageUrl} alt="" />
      ) : (
        <span aria-hidden="true" className="product-row__image product-row__image--placeholder" />
      )}
      <span className="product-row__name">{product.name}</span>
      <span className="product-row__price">
        {product.currency} {product.price.toLocaleString('id-ID')}
      </span>
    </li>
  )
}

export default ProductRow
