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
    <article className={styles['product-card']}>
      <div className={styles['product-card__image-wrapper']}>
        <img src={image} alt={title} className={styles['product-card__image']} />
      </div>

      <div className={styles['product-card__info']}>
        <div className={styles['product-card__price']}>{price}</div>

        <div className={styles['product-card__rating']}>
          <div className={styles['product-card__stars']}>
            {starsString}
          </div>
          <span className={styles['product-card__reviews-count']}>{reviewsCount}</span>
        </div>

        <div className={styles['product-card__title']}>
          {title}
        </div>

        {variantsText && (
          <div className={styles['product-card__variants']}>
            {variantsText}
          </div>
        )}

        {recommendedText && (
          <div className={styles['product-card__recommended']}>
            {recommendedText}
          </div>
        )}
      </div>

      <Button variant="yellow" className={styles['product-card__button']}>
        В корзину
      </Button>
    </article>
  )
}
