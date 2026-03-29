import { ProductCard } from '@widgets/ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import iphoneImg from '@shared/assets/iphone.png'
import airpodsImg from '@shared/assets/airpods.png'
import styles from './HomePage.module.less'

const PRODUCTS = [
  {
    id: 1,
    image: iphoneImg,
    price: '161 689 ₽',
    title: 'Смартфон Apple iPhone 13 Pro Max 128 ГБ, небесно-голубой',
    ratingStars: 4,
    reviewsCount: 292,
    variantsText: 'Ещё 12 вариантов',
    recommendedText: '90% рекомендуют',
  },
  {
    id: 2,
    image: airpodsImg,
    price: '24 990 ₽',
    title: 'Наушники Apple AirPods Pro (2-е поколение, 2023) MagSafe Case (USB-C)',
    ratingStars: 5,
    reviewsCount: 1540,
    variantsText: 'Ещё 2 варианта',
    recommendedText: '98% рекомендуют',
  },
  {
    id: 3,
    image: iphoneImg,
    price: '142 500 ₽',
    title: 'Смартфон Apple iPhone 13 Pro Max 128 ГБ, графитовый',
    ratingStars: 4,
    reviewsCount: 85,
    variantsText: 'Ещё 8 вариантов',
    recommendedText: '85% рекомендуют',
  },
  {
    id: 4,
    image: airpodsImg,
    price: '12 400 ₽',
    title: 'Наушники Apple AirPods (2-е поколение) с зарядным футляром',
    ratingStars: 4,
    reviewsCount: 3200,
    recommendedText: '95% рекомендуют',
  },
]

function HomePage() {
  return (
    <>
      <section className={styles.center}>
        <div className={styles.carouselContainer}>
          <Swiper
            spaceBetween={20}
            slidesPerView={'auto'}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            className={styles.mySwiper}
          >
            {PRODUCTS.map((product) => (
              <SwiperSlide key={product.id} className={styles.slide}>
                <ProductCard {...product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <div className={styles.ticks}></div>
      <section className={styles.spacer}></section>
    </>
  )
}

export default HomePage
