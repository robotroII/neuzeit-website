import { pageType } from './document/pageType';
import { caseType } from './document/caseType';
import { postType } from './document/postType';
import { navigationType } from './document/navigationType'

import { navItem } from './object/navItem'
import { link } from './object/link'

export const schemaTypes = [
  pageType,
  caseType,
  postType,
  navigationType,

  navItem,
  link
];