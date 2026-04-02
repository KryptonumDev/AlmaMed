import styles from './styles.module.scss';

type SocialLinksProps = {
  facebook?: string | null;
  youtube?: string | null;
};

export function SocialLinks({ facebook, youtube }: SocialLinksProps) {
  const links = [];

  if (facebook?.trim()) {
    links.push({
      href: facebook.trim(),
      label: 'Facebook Alma Med (otwiera się w nowej karcie)',
      title: 'Facebook',
      Icon: Facebook,
    });
  }

  if (youtube?.trim()) {
    links.push({
      href: youtube.trim(),
      label: 'YouTube Alma Med (otwiera się w nowej karcie)',
      title: 'YouTube',
      Icon: Youtube,
    });
  }

  if (!links.length) {
    return null;
  }

  return (
    <nav aria-label='Media społecznościowe' className={styles.social}>
      {links.map(({ href, label, title, Icon }) => (
        <a
          key={title}
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={label}
          title={title}
          className={styles.socialLink}
        >
          <Icon />
        </a>
      ))}
    </nav>
  );
}

const Facebook = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='28'
    height='28'
    fill='none'
    viewBox='0 0 25 26'
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M25 13.32C25 6.375 19.403.744 12.5.744S0 6.375 0 13.32c0 6.276 4.57 11.479 10.547 12.423v-8.787H7.372V13.32h3.175v-2.77c0-3.152 1.867-4.894 4.721-4.894 1.368 0 2.799.246 2.799.246v3.095H16.49c-1.552 0-2.037.969-2.037 1.965v2.358h3.466l-.553 3.636h-2.913v8.788C20.43 24.8 25 19.598 25 13.32z'
      clipRule='evenodd'
    ></path>
  </svg>
);

const Youtube = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='28'
    height='28'
    fill='none'
    viewBox='0 0 54 39'
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M51.055 3.125a6.91 6.91 0 011.752 3.07v.001c1.784 7.284 1.372 18.787.035 26.352a6.91 6.91 0 01-1.752 3.07 6.765 6.765 0 01-3.027 1.778c-4.19 1.16-21.056 1.16-21.056 1.16s-16.866 0-21.056-1.16a6.766 6.766 0 01-3.027-1.778 6.91 6.91 0 01-1.752-3.07C-.622 25.296-.131 13.785 1.137 6.23a6.91 6.91 0 011.752-3.07 6.766 6.766 0 013.027-1.779C10.106.222 26.973.188 26.973.188s16.865 0 21.055 1.159a6.766 6.766 0 013.027 1.778zM33.75 19.372l-13.5 6.395v-12.79l13.5 6.395z'
      clipRule='evenodd'
    ></path>
  </svg>
);
