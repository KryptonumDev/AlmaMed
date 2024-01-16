
import styles from './search.module.scss'
import {Props} from './search.constants'

export default function Search ({ categories, specialists, posts, services, localizations }: Props) {

  const searchArray = [
    ...categories.map((item) => ({...item, type: 'Kategoria'})),
    ...specialists.map((item) => ({...item, type: 'Specjalista'})),
    ...posts.map((item) => ({...item, type: 'Artykuł'})),
    ...services.map((item) => ({...item, type: 'Usługa'})),
    ...localizations.map((item) => ({...item, type: 'Lokalizacja'})),
    {
      name: 'Strona główna',
      slug: {
        current: '/'
      },
      type: 'Strona'
    },
    {
      name: ''
    }
  ]

  return (
    <section className={`${styles.wrapper} container`}>

    </section>
  )
}
