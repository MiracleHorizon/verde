import { OrderProductList } from './OrderProductList'
import type { Order } from '@interfaces/Order'
import styles from './OrderProducts.module.scss'

export function OrderProducts({ products }: Pick<Order, 'products'>) {
  return (
    <>
      <div className={styles.divider} />
      {products.length > 0 && (
        <section>
          <article>
            <h4 className={styles.title}>Состав заказа</h4>
          </article>
          <OrderProductList products={products} />
          <div className={styles.divider} />
        </section>
      )}
    </>
  )
}
