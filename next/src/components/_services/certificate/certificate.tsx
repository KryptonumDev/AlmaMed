import styles from './certificate.module.scss';
import { Props } from './certificate.constants';
import Markdown from '@/components/ui/markdown';
import Image from '@/components/ui/image';

export default function Certificate({ title, image }: Props) {
  return (
    <section className={`${styles.wrapper} container`}>
      <div>
        <svg
          width='44'
          height='44'
          viewBox='0 0 44 44'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M13.8903 0.500001H30.1098C32.8449 0.49996 35.0496 0.499927 36.7835 0.733048C38.5837 0.97508 40.0995 1.49287 41.3033 2.6967C42.5071 3.90053 43.0249 5.41628 43.267 7.2165C43.5001 8.95044 43.5 11.1551 43.5 13.8903V22.1097C43.5 24.8449 43.5001 27.0496 43.267 28.7835C43.0249 30.5837 42.5071 32.0995 41.3033 33.3033C40.3075 34.2991 39.0937 34.8291 37.6722 35.1186C36.9477 35.2661 36.1448 35.3557 35.2603 35.4106C35.2649 35.4208 35.2694 35.4311 35.2738 35.4414C35.8196 36.7221 35.3539 38.2117 34.114 38.9145C33.7413 39.1258 33.3405 39.2019 33.0602 39.2453C32.7673 39.2907 32.4012 39.3265 31.9948 39.3663L31.9551 39.3702C31.6936 39.3958 31.5452 39.4107 31.4349 39.4264C31.3848 39.4335 31.3583 39.4388 31.3477 39.4412C31.3165 39.4534 31.2955 39.4686 31.2818 39.4816C31.2717 39.4914 31.2642 39.5013 31.2587 39.5113C31.2565 39.5225 31.2531 39.5408 31.2489 39.5677C31.2333 39.6685 31.2182 39.806 31.1914 40.0583L31.187 40.0996C31.1458 40.4863 31.1079 40.842 31.0596 41.1281C31.0131 41.404 30.9296 41.8108 30.6972 42.1876C29.9487 43.4013 28.4546 43.7765 27.2253 43.2949C26.8415 43.1446 26.5336 42.8997 26.3114 42.7087C26.0837 42.513 25.8156 42.2559 25.5153 41.968L22 38.5978L18.4847 41.9679C18.1844 42.2559 17.9163 42.513 17.6886 42.7087C17.4664 42.8997 17.1585 43.1446 16.7747 43.2949C15.5454 43.7765 14.0513 43.4013 13.3028 42.1876C13.0705 41.8108 12.9869 41.404 12.9404 41.1281C12.8921 40.842 12.8542 40.4862 12.813 40.0995L12.8086 40.0583C12.7818 39.806 12.7667 39.6685 12.7511 39.5677C12.7469 39.5408 12.7436 39.5225 12.7413 39.5113C12.7358 39.5013 12.7283 39.4914 12.7182 39.4816C12.7045 39.4686 12.6835 39.4534 12.6523 39.4412C12.6417 39.4389 12.6152 39.4335 12.5651 39.4264C12.4548 39.4107 12.3064 39.3958 12.0449 39.3702L12.0052 39.3663C11.5988 39.3265 11.2327 39.2907 10.9398 39.2453C10.6595 39.2019 10.2587 39.1258 9.88597 38.9145C8.64615 38.2117 8.18037 36.7221 8.72623 35.4414C8.73064 35.431 8.73514 35.4207 8.7397 35.4105C7.94236 35.361 7.21429 35.2836 6.55271 35.1621C5.03671 34.8836 3.74656 34.3532 2.6967 33.3033C1.49287 32.0995 0.975081 30.5837 0.733048 28.7835C0.499927 27.0496 0.49996 24.8449 0.500001 22.1098V13.8903C0.49996 11.1551 0.499927 8.95044 0.733048 7.2165C0.975081 5.41629 1.49287 3.90054 2.6967 2.6967C3.90053 1.49287 5.41628 0.975081 7.2165 0.733048C8.95043 0.499927 11.1551 0.49996 13.8903 0.500001ZM11.4658 32.4924L13.0974 30.9282L14.5158 29.5098C14.7683 25.5962 18.0226 22.5 22 22.5C25.9774 22.5 29.2318 25.5962 29.4842 29.5098L30.9026 30.9282L32.6243 32.5788L32.6234 32.4915C34.5968 32.4706 36.0035 32.3968 37.0736 32.1789C38.1026 31.9694 38.7181 31.6459 39.182 31.182C39.7355 30.6285 40.0964 29.8513 40.2937 28.3838C40.4968 26.8731 40.5 24.8708 40.5 22V14C40.5 11.1292 40.4968 9.12694 40.2937 7.61624C40.0964 6.14869 39.7355 5.37155 39.182 4.81802C38.6285 4.2645 37.8513 3.9036 36.3838 3.7063C34.8731 3.50319 32.8708 3.5 30 3.5H14C11.1292 3.5 9.12694 3.50319 7.61624 3.7063C6.14869 3.9036 5.37155 4.2645 4.81802 4.81802C4.2645 5.37155 3.9036 6.14869 3.7063 7.61624C3.50319 9.12695 3.5 11.1292 3.5 14V22C3.5 24.8708 3.50319 26.8731 3.7063 28.3838C3.9036 29.8513 4.2645 30.6285 4.81802 31.182C5.30493 31.6689 5.96108 32.0032 7.0947 32.2115C8.17147 32.4093 9.56125 32.4736 11.4658 32.4924ZM28.8319 33.0989C28.0187 34.8887 26.5229 36.3027 24.6769 37.0082L27.5638 39.7759C27.8198 40.0214 28.0018 40.1953 28.1437 40.3244C28.162 40.1729 28.1823 39.9839 28.2082 39.7405C28.2118 39.7074 28.2153 39.6737 28.2188 39.6393C28.257 39.272 28.3021 38.837 28.4538 38.4442C28.7897 37.5742 29.4899 36.917 30.353 36.6107C30.7416 36.4728 31.1717 36.4316 31.5589 36.3945C31.5939 36.3912 31.6285 36.3878 31.6627 36.3845C31.8776 36.3635 32.0533 36.3461 32.1999 36.3305C32.086 36.2189 31.9461 36.0846 31.7715 35.9171L28.8319 33.0989ZM22.0603 34.4996L22 34.4418L21.9397 34.4996C19.4822 34.4674 17.5 32.4652 17.5 30C17.5 27.5147 19.5147 25.5 22 25.5C24.4853 25.5 26.5 27.5147 26.5 30C26.5 32.4652 24.5178 34.4673 22.0603 34.4996ZM19.3231 37.0082L16.4362 39.7759C16.1802 40.0214 15.9983 40.1953 15.8563 40.3244C15.838 40.1729 15.8177 39.9839 15.7918 39.7405C15.7882 39.7074 15.7847 39.6737 15.7812 39.6393C15.743 39.272 15.6979 38.837 15.5462 38.4442C15.2103 37.5742 14.5101 36.917 13.647 36.6107C13.2584 36.4728 12.8282 36.4316 12.441 36.3945C12.4061 36.3912 12.3715 36.3878 12.3373 36.3845C12.1224 36.3635 11.9467 36.3461 11.8001 36.3305C11.914 36.2189 12.0539 36.0846 12.2285 35.9171L15.1681 33.0989C15.9813 34.8887 17.4771 36.3027 19.3231 37.0082ZM14.5 10C14.5 9.17157 15.1716 8.5 16 8.5H28C28.8284 8.5 29.5 9.17157 29.5 10C29.5 10.8284 28.8284 11.5 28 11.5H16C15.1716 11.5 14.5 10.8284 14.5 10ZM10.5 17C10.5 16.1716 11.1716 15.5 12 15.5H32C32.8284 15.5 33.5 16.1716 33.5 17C33.5 17.8284 32.8284 18.5 32 18.5H12C11.1716 18.5 10.5 17.8284 10.5 17Z'
            fill='#012F4C'
          />
        </svg>
        <Markdown.h2 className='h4'>{title}</Markdown.h2>
      </div>
      <Image data={image} />
    </section>
  );
}
