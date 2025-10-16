import { pageType } from './document/pageType';
import { caseType } from './document/caseType';
import { postType } from './document/postType';
import { navigationType } from './document/navigationType';

import { navItem } from './object/navItem';
import { link } from './object/link';
import { gradient } from './object/gradient';
import { theme } from './object/theme';
import { section } from './object/section';
import { article } from './object/article';
import { textBlock } from './object/textBlock';
import { contentItem } from './object/contentItem';
import { contentColumns } from './object/contentColumns';

export const schemaTypes = [
  pageType,
  caseType,
  postType,
  navigationType,

  navItem,
  link,
  gradient,
  theme,

  section,
  article,

  textBlock,

  contentColumns,
  contentItem,
];