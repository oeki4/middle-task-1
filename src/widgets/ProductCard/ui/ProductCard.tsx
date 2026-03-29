import { Button } from '@shared/ui/Button'
import styles from './ProductCard.module.less'

interface ProductCardProps {
  image: string
  price: string
  title: string
  ratingStars: number
  reviewsCount: number
  variantsText?: string
  recommendedText?: string
}

export const ProductCard = (props: ProductCardProps) => {
  const {
    image,
    price,
    title,
    ratingStars,
    reviewsCount,
    variantsText,
    recommendedText,
  } = props

  const starsString = '★'.repeat(ratingStars).padEnd(5, '☆')

  return (
    <article className={styles.ProductCard}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
      </div>

      <div className={styles.info}>
        <div className={styles.price}>{price}</div>

        <div className={styles.rating}>
          <div className={styles.stars}>
            {starsString}
          </div>
          <span className={styles.reviewsCount}>{reviewsCount}</span>
        </div>

        <div className={styles.title}>
          {title}
        </div>

        {variantsText && (
          <div className={styles.variants}>
            {variantsText}
          </div>
        )}

        {recommendedText && (
          <div className={styles.recommended}>
            {recommendedText}
          </div>
        )}
      </div>

      <Button variant="yellow" className={styles.button}>
        В корзину
      </Button>
    </article>
  )
}
