
import styles from './styles.module.scss';
import { Logo } from '../../ui/logo';
import Link from 'next/link';

const links = [
  {
    name: 'Dla Pacjenta',
    links: [
      {
        name: 'Przychodnia rodzinna',
        link: '#',
      },
      {
        name: 'Przychodnia specjalistyczna',
        link: '#',
      },
      {
        name: 'Pozostałe usługi',
        link: '#',
      },
      {
        name: 'Polityka prywatności',
        link: '#',
      },
    ],
  },
  {
    name: 'O nas',
    links: [
      {
        name: 'Nasz personel',
        link: '#',
      },
      {
        name: 'Specjaliści',
        link: '#',
      },
      {
        name: 'Opieka koordynowana',
        link: '#',
      },
      {
        name: 'Mapa strony',
        link: '#',
      },
    ],
  },
  {
    name: 'Kontakt',
    links: [
      {
        name: 'Formularz kontaktowy',
        link: '#',
      },
      {
        name: 'Przychodnia Bocki',
        link: '#',
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={`container ${styles.container}`}>
        <div className={styles.information}>
          <Logo className={styles.logo} />
          <div className={styles.content}>
            <h3 className='h5'>Centrum Medyczne Alma Med</h3>
            <p className='p'>W trosce o dobre zdrowie Naszych Pacjentów</p>
          </div>
        </div>
        <div className={styles.copyright}>
          <p className='p'>
            Wykonanie:{' '}
            <a
              href='https://kryptonum.eu/pl'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                width='111'
                height='20'
                viewBox='0 0 111 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M13.4757 10.002C13.4755 10.7404 13.2499 11.4629 12.8263 12.0808C12.4027 12.6988 11.7996 13.1855 11.0908 13.4813V19.8672H7.91082V13.4795C7.202 13.1842 6.59884 12.6979 6.17525 12.0802C5.75167 11.4625 5.52605 10.7402 5.52605 10.002C5.52605 9.26368 5.75167 8.54145 6.17525 7.92375C6.59884 7.30605 7.202 6.81973 7.91082 6.52438V0.136719H11.0908V6.52261C11.7998 6.81823 12.403 7.30485 12.8267 7.92286C13.2503 8.54087 13.4758 9.26341 13.4757 10.002Z'
                  fill='#2DD282'
                />
                <path
                  d='M19.1844 0V4.55315L15.8632 7.72343L14.2739 6.20554L13.2503 7.18262C13.0173 6.90052 12.7503 6.64561 12.4548 6.42317L19.1844 0Z'
                  fill='#2DD282'
                />
                <path
                  d='M15.8624 12.2788L19.1836 15.4491V20.0022L12.4548 13.5791C12.7501 13.3568 13.0169 13.1022 13.2498 12.8204L14.2731 13.7967L15.8624 12.2788Z'
                  fill='#2DD282'
                />
                <path
                  d='M4.73301 10.0001C4.73103 11.0224 5.09161 12.0153 5.75605 12.817L1.55305 16.8299V12.2767L3.14316 10.7591V9.24119L1.55305 7.72356V3.17041L5.75605 7.1825C5.09138 7.98442 4.73079 8.97757 4.73301 10.0001Z'
                  fill='#202123'
                />
                <path
                  d='M34.996 4.304L27.364 14.128V11.072L32.58 4.304H34.996ZM27.844 4.304V16H25.796V4.304H27.844ZM29.7 10.88L31.012 9.12L35.044 16H32.676L29.7 10.88ZM41.4893 8.064V9.872H40.7692C40.0546 9.872 39.4946 10.064 39.0892 10.448C38.6839 10.8213 38.4812 11.392 38.4812 12.16V16H36.5292V8.112H38.3692L38.5292 9.744H38.3372C38.4439 9.22133 38.6946 8.79467 39.0892 8.464C39.4839 8.13333 39.9959 7.968 40.6252 7.968C40.7639 7.968 40.9026 7.97333 41.0413 7.984C41.1799 7.99467 41.3293 8.02133 41.4893 8.064ZM44.4529 8.096L47.0289 15.392L45.9729 17.392L42.3889 8.096H44.4529ZM42.5969 19.664V18.048H43.7649C44.0209 18.048 44.2449 18.016 44.4369 17.952C44.6289 17.8987 44.7995 17.792 44.9489 17.632C45.1089 17.472 45.2422 17.2373 45.3489 16.928L48.6289 8.096H50.6449L46.7729 17.76C46.4849 18.4853 46.1222 19.0133 45.6849 19.344C45.2475 19.6747 44.7035 19.84 44.0529 19.84C43.7755 19.84 43.5142 19.824 43.2689 19.792C43.0342 19.7707 42.8102 19.728 42.5969 19.664ZM51.9936 19.664V8.096H53.8016L53.9296 9.296C54.1643 8.83733 54.527 8.48533 55.0176 8.24C55.5083 7.984 56.047 7.856 56.6336 7.856C57.391 7.856 58.0416 8.02667 58.5856 8.368C59.1403 8.70933 59.5723 9.184 59.8816 9.792C60.191 10.4 60.3456 11.12 60.3456 11.952C60.3456 12.7733 60.2016 13.504 59.9136 14.144C59.6256 14.784 59.2043 15.2907 58.6496 15.664C58.1056 16.0267 57.439 16.208 56.6496 16.208C56.063 16.208 55.5243 16.096 55.0336 15.872C54.5536 15.648 54.191 15.3387 53.9456 14.944V19.664H51.9936ZM53.9616 12.048C53.9616 12.5173 54.0523 12.9333 54.2336 13.296C54.415 13.6587 54.671 13.9467 55.0016 14.16C55.343 14.3627 55.7376 14.464 56.1856 14.464C56.6443 14.464 57.039 14.3627 57.3696 14.16C57.7003 13.9467 57.951 13.6587 58.1216 13.296C58.2923 12.9333 58.3776 12.5173 58.3776 12.048C58.3776 11.5787 58.2923 11.1627 58.1216 10.8C57.951 10.4373 57.7003 10.1547 57.3696 9.952C57.039 9.73867 56.6443 9.632 56.1856 9.632C55.7376 9.632 55.343 9.73333 55.0016 9.936C54.671 10.1387 54.415 10.4213 54.2336 10.784C54.0523 11.1467 53.9616 11.568 53.9616 12.048ZM61.2777 8.096H66.2697V9.728H61.2777V8.096ZM64.7497 16H62.7977V5.632H64.7497V16ZM67.1971 12.032C67.1971 11.2107 67.3785 10.4907 67.7411 9.872C68.1038 9.24267 68.6051 8.752 69.2451 8.4C69.8851 8.048 70.6105 7.872 71.4211 7.872C72.2425 7.872 72.9678 8.048 73.5971 8.4C74.2371 8.752 74.7385 9.24267 75.1011 9.872C75.4638 10.4907 75.6451 11.2107 75.6451 12.032C75.6451 12.8533 75.4638 13.5787 75.1011 14.208C74.7385 14.8267 74.2371 15.312 73.5971 15.664C72.9678 16.016 72.2425 16.192 71.4211 16.192C70.6105 16.192 69.8851 16.016 69.2451 15.664C68.6051 15.312 68.1038 14.8267 67.7411 14.208C67.3785 13.5787 67.1971 12.8533 67.1971 12.032ZM69.1491 12.032C69.1491 12.512 69.2451 12.9333 69.4371 13.296C69.6398 13.6587 69.9065 13.9413 70.2371 14.144C70.5785 14.3467 70.9731 14.448 71.4211 14.448C71.8691 14.448 72.2638 14.3467 72.6051 14.144C72.9465 13.9413 73.2131 13.6587 73.4051 13.296C73.5971 12.9333 73.6931 12.512 73.6931 12.032C73.6931 11.5413 73.5971 11.12 73.4051 10.768C73.2131 10.4053 72.9465 10.1227 72.6051 9.92C72.2638 9.71733 71.8691 9.616 71.4211 9.616C70.9731 9.616 70.5785 9.71733 70.2371 9.92C69.9065 10.1227 69.6398 10.4053 69.4371 10.768C69.2451 11.12 69.1491 11.5413 69.1491 12.032ZM79.3844 16H77.4324V8.096H79.2404L79.4004 9.12C79.6457 8.72533 79.9924 8.416 80.4404 8.192C80.899 7.968 81.395 7.856 81.9284 7.856C82.9204 7.856 83.667 8.14933 84.1684 8.736C84.6804 9.32267 84.9364 10.1227 84.9364 11.136V16H82.9844V11.6C82.9844 10.9387 82.835 10.448 82.5364 10.128C82.2377 9.79733 81.8324 9.632 81.3204 9.632C80.7124 9.632 80.2377 9.824 79.8964 10.208C79.555 10.592 79.3844 11.104 79.3844 11.744V16ZM92.4543 8.096H94.4063V16H92.5983L92.4543 14.944C92.2196 15.3173 91.8676 15.6213 91.3983 15.856C90.9289 16.0907 90.4276 16.208 89.8943 16.208C88.9876 16.208 88.2783 15.92 87.7663 15.344C87.2543 14.768 86.9983 14 86.9983 13.04V8.096H88.9503V12.352C88.9503 13.0987 89.0943 13.6373 89.3823 13.968C89.6703 14.2987 90.0863 14.464 90.6303 14.464C91.2489 14.464 91.7076 14.2827 92.0063 13.92C92.3049 13.5467 92.4543 12.9867 92.4543 12.24V8.096ZM98.6144 16H96.6624V8.096H98.4544L98.6944 9.504L98.4704 9.312C98.6304 8.928 98.9237 8.592 99.3504 8.304C99.777 8.00533 100.31 7.856 100.95 7.856C101.644 7.856 102.209 8.03733 102.646 8.4C103.094 8.76267 103.404 9.24267 103.574 9.84H103.254C103.372 9.24267 103.67 8.76267 104.15 8.4C104.641 8.03733 105.233 7.856 105.926 7.856C106.886 7.856 107.622 8.128 108.134 8.672C108.646 9.20533 108.902 9.92533 108.902 10.832V16H106.966V11.344C106.966 10.7787 106.822 10.352 106.534 10.064C106.257 9.76533 105.884 9.616 105.414 9.616C105.116 9.616 104.838 9.68533 104.582 9.824C104.337 9.96267 104.14 10.1707 103.99 10.448C103.841 10.7253 103.766 11.0827 103.766 11.52V16H101.814V11.328C101.814 10.7733 101.676 10.352 101.398 10.064C101.121 9.776 100.753 9.632 100.294 9.632C99.985 9.632 99.7024 9.70133 99.4464 9.84C99.1904 9.968 98.9877 10.176 98.8384 10.464C98.689 10.7413 98.6144 11.0933 98.6144 11.52V16Z'
                  fill='#202123'
                />
              </svg>
            </a>
          </p>
        </div>
        <div className={styles.links}>
          {links.map((link, index) => (
            <ul key={index}>
              <li className='p bold'>{link.name}</li>
              {link.links.map((sub, index) => (
                <li key={index}>
                  <Link
                    className='p'
                    href={sub.link}
                  >
                    {sub.name}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </footer>
  );
}
