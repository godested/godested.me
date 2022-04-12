import { Transition } from 'framer-motion';
import * as styles from 'common/components/theme/theme-provider-mixins.module.scss';

export const TRANSITION: Transition = {
  type: 'spring',
  stiffness: parseInt(styles.themeChangingDuration, 10),
  damping: 10,
};
