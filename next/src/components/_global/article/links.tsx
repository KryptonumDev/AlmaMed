import Button from '@/components/ui/button';
import styles from './article.module.scss';

export default function Links({ links }: { links: any[] }) {
  console.log(links);
  return (
    <div className={styles.links}>
      {links.map((link: any, index: number) => (
        <Button
          key={index}
          url={link.href}
          type={link.theme}
          title={link.text}
          arrow={true}
        />
      ))}
    </div>
  );
}
