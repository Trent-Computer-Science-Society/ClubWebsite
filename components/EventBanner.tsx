// CSS
import styles from '../styles/components/EventBanner.module.scss';
// Config
import * as config from '../config.yaml';
import ReactMarkdown from 'react-markdown';

interface Props {
  color?: string;
  contextKey?: string;
}

export default function EventBanner({
  color = 'event-banner',
  contextKey = 'bannerInfo',
}: Props) {
  const bannerInfo = config[contextKey] || [];

  if (bannerInfo.length === 0 || bannerInfo?.hidden) {
    return null;
  }

  const eventMarkdown = bannerInfo.text;
  if (!eventMarkdown) {
    return null;
  }

  return (
    <div className={styles.EventBanner} style={{ backgroundColor: color }}>
      {/* Event Content */}
      <div className={styles.EventContent}>
        <ReactMarkdown className={styles.Markdown}>
          {eventMarkdown}
        </ReactMarkdown>
      </div>
    </div>
  );
}
