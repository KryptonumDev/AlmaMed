import Advantages from '../components/advantages';
import BlogSlider from '../components/blog-slider';
import Cta from '../components/cta';
import Localization from '../components/localization';
import Newsletter from '../components/newsletter';
import Scoring from '../components/scoring';

export default function Index() {
  return (
    <>
      {/* Hero */}
      <Scoring
        patients={800}
        averageRating={'4.9/5'}
        percentTakenCalls={82}
      />
      <Localization
        title={'Gdzie nas znajdziesz?'}
        cards={[]}
        ctaTitle='Masz pytanie lub potrzebujesz pomocy? Skontaktuj się z nami – nasi specjaliści pomogą Ci najszybciej, jak to możliwe.'
        ctaLink={{}}
      />
      <Advantages
        title={'Dlaczego warto wybrać centrum medyczne Alma Med?'}
        text={
          'Sprawdź, jak nasze nowoczesne podejście do leczenia pozwala nam zadbać o zdrowie i wygodę pacjentów!'
        }
        advantages={[]}
      />
      <Newsletter />
      <Cta
        title={'Jak zapisać się do przychodni?'}
        text={
          'Chcesz zostać naszym pacjentem, ale nie wiesz jak? Kliknij przycisk obok, a przeprowadzimy Cię przez cały proces rejestracji!'
        }
        link={{}}
      />
      <BlogSlider
        title='Zdrowie w pigułce'
        text='Na naszym blogu dzielimy się wartościową wiedzą z zakresu zdrowia i profilaktyki. Odkryj porady lekarzy i dowiedz się, jak zadbać o siebie i swoich bliskich!'
        posts={[]}
      />
    </>
  );
}
