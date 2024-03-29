import styles from './newsletter.module.scss';
import Button from '../../ui/button';
import Form from './newsletter-form';
import { Props } from './newsletter.constants';
import Image from '../../ui/image';
import Markdown from '../../ui/markdown';
import Link from 'next/link';
import { transformDateFormat } from '../../../utils/date-formatter';

export default function Newsletter({ content, title, text, icon, link, post, id }: Props) {
  return (
    <section className={`${styles.wrapper} container`}>
      {post ? (
        <div className={styles.post}>
          <Link href={`/blog/${post?.slug.current}`} />
          <Markdown.h2
            className='h3'
            children={'Zobacz artykuł'}
          />
          <Image data={post?.thumbnail} />
          <p className='p'>{transformDateFormat(post?._updatedAt)}</p>
          <p className={`${styles.title} h5`}>{post?.name}</p>
        </div>
      ) : (
        <div className={styles.left}>
          <Image data={icon} />
          <div>
            <Markdown.p
              className='h4'
              children={content}
            />
            {link && (
              <Button
                arrow={true}
                title={link.text}
                url={link.href}
                type={link.theme}
              />
            )}
          </div>
        </div>
      )}
      <div className={styles.right}>
        <Markdown.h2
          className='h3'
          children={title}
        />
        <Markdown.p children={text} />
        <Form
          successTitle='<strong>Dziękujemy</strong> za zapis do newslettera!'
          successText={`Na Twój adres e-mailowy wysłaliśmy link z prośbą o potwierdzenie subskrypcji.
Zapisz się do naszego newslettera, aby nie przegapić informacji o zdrowiu!`}
          id={id}
        />
      </div>
    </section>
  );
}
