import { pageType } from './document/pageType';
import { caseType } from './document/caseType';
import { postType } from './document/postType';
import { navigationType } from './document/navigationType';

import { navItem } from './object/navItem';
import { link } from './object/link';
import { gradient } from './object/gradient';
import { theme } from './object/theme';
import { section } from './object/section';
import { contentColumns } from './object/contentColumns';
import { picture } from './object/picture';
import { article } from './object/article';
import { definitionList } from './object/definitionList';
import { textBlock } from './object/textBlock';
import { gridTeaser } from './object/gridTeaser';
import { logoWall } from './object/logoWall';
import { contact } from './object/contact';

import { accordion } from './object/accordion';
import { accordionItem } from './object/accordionItem';

import { caseTeasers } from './object/case-teasers';
import { caseTeaser } from './object/case-teaser';
import { scrollTracker } from './object/scrollTracker';

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
  contentColumns,

  picture,
  article,
  definitionList,
  textBlock,
  gridTeaser,
  logoWall,
  contact,

  accordion,
  accordionItem,

  caseTeasers,
  caseTeaser,
  scrollTracker
];