import Markdown from '@/components/ui/markdown';
import Image from '@/components/ui/image';
import CooperationForm from './cooperation-form';
import { CooperationSectionProps } from './form.constants';
import styles from './form.module.scss';

export default function FormSection({ title, text, image, subjects, targetEmail }: CooperationSectionProps) {
  if (!title && !subjects?.length) return null;

  return (
    <section id='formularz-wspolpracy' className={`${styles.wrapper} container`}>
      <div className={styles.column}>
        {title && (
          <Markdown.h2 className='h3'>
            {title}
          </Markdown.h2>
        )}
        {text && (
          <Markdown.p className={styles.text}>
            {text}
          </Markdown.p>
        )}
        {image?.asset?.url && (
          <Image className={styles.image} data={image} />
        )}
      </div>
      <CooperationForm subjects={subjects || []} targetEmail={targetEmail || ''} />
    </section>
  );
}
