import clsx from 'clsx'
import styles from './CategoryFilters.module.less'

const CATEGORIES = [
  'Электроника',
  'Бытовая техника',
  'Смартфоны',
  'Телевизоры',
  'Ноутбуки',
  'Квадрокоптеры',
  'Холодильники',
  'Крупная техника для кухни',
]

interface CategoryFiltersProps {
  activeCategory?: string
  className?: string
}

export const CategoryFilters = (props: CategoryFiltersProps) => {
  const { activeCategory = 'Электроника', className } = props

  return (
    <nav className={clsx(styles['category-filters'], className)}>
      <div className={styles['category-filters__list']}>
        {CATEGORIES.map((category) => (
          <button
            key={category}
            className={clsx(
              styles['category-filters__item'],
              category === activeCategory && styles['category-filters__item_active']
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </nav>
  )
}
