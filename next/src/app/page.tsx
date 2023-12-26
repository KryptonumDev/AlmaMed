import Advantages from "../components/advantages";
import Localization from "../components/localization";
import Newsletter from "../components/newsletter";
import Scoring from "../components/scoring";

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
        ctaTitle="Masz pytanie lub potrzebujesz pomocy? Skontaktuj się z nami – nasi specjaliści pomogą Ci najszybciej, jak to możliwe."
        ctaLink={{}}
      />
      <Advantages
        title={'Dlaczego warto wybrać centrum medyczne Alma Med?'}
        text={'Sprawdź, jak nasze nowoczesne podejście do leczenia pozwala nam zadbać o zdrowie i wygodę pacjentów!'}
        advantages={[]}
      />
      <Newsletter
      />
    </>
  )
}