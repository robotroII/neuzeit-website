import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, Slug } from '@sanity/types';
import groq from 'groq';

const imageBlock = groq`
  ...,
  "src": @.asset->url,
  "alt": @.asset->altText,
  "caption": @.asset->caption,
`;

const teaserBlock = groq`
  ...,
  "slug": @.internalLink->slug.current,
  "href": @.internalLink->_type + "/" + @.internalLink->slug.current,
  @.internalLink->_type == 'page' => {
    "href": @.internalLink->slug.current,
  },
  "theme": @.internalLink->theme,
  text{
    ...,
    content[]{
      ...,
      asset{
        ...,
        "src": @->url,
      }
    }
  },
  sectionTheme{
    ...,
    "backgroundImage": @.backgroundImage.asset->url,
  },
  items[]{
    ...,
    _type == 'imageBlock' => {
      ...,
      "src": @.asset->url,
      "alt": @.asset->alt,
    },
    _type == 'linkList' => {
      ...,
      items[]{
        ...,
        "href": @.internalLink->_type + "/" + @.internalLink->slug.current,
        @.internalLink->_type == 'page' => {
          "href": @.internalLink->slug.current,
        }
      }
    }
  }
`;

const teaserGallery = groq`
  ...,
  sectionTheme{
    ...,
    "backgroundImage": @.backgroundImage.asset->url
  },
  items[]{
    ...,
    "src": @.asset->url,
    "alt": @.asset->altText,
    "caption": @.asset->caption,
    body[]{
      ...,
      asset{
        ...,
        "src": @->url,
      }
    }

  },
`;

const teaserList = groq`
  ...,
  "mainImage": {
    ...,
    "src": @.mainImage.asset->url,
  },
  sectionTheme{
    ...,
    "backgroundImage": @.backgroundImage.asset->url
  },
  items[]{
    ...,
    "slug": @.internalLink->slug.current,
    "href": @.internalLink->_type + "/" + @.internalLink->slug.current,
    @.internalLink->_type == 'page' => {
      "href": @.internalLink->slug.current,
    },
    "theme": @.internalLink->theme,
    picture{
      ...,
      "src": @.asset->url,
      sources[]{
        ...,
        "srcset": @.srcset.asset->url,
      }
    },
  },
`;

const logoWall = groq`
  ...,
  items[]{
    ...,
    "src": @.asset->url,
    "alt": @.asset->altText,
    "caption": @.asset->caption,
  },
`;

const contactBlock = groq`
  ...,
  "name": @.author->name,
  "slug": @.author->slug.current,
  "role": @.author->role,
  "about": @.author->about,
  "links": @.author->links,
  "picture": @.author->picture.asset->url,
`;

const stage = groq`
  ...,
  text{
    ...,
    title[]{
      ...,
      "src": @->url,
    },
    subtitle[]{
      ...,
      "src": @->url,
    }
  },
`;

const pageSection = groq`
  ...,
  background{
    ...,
    "src": @.asset->url,
    sources[]{
      ...,
      "srcset": @.srcset.asset->url,
    }
  },
  foreground[] {
    ...,
    _type == 'stage' => {
      ${stage}
    },
    _type == 'imageBlock' => {
      ${imageBlock}
    },
    _type == 'teaserBlock' => {
      ${teaserBlock}
    },
    _type == 'teaserList' => {
      ${teaserList}
    },
    _type == 'teaserGallery' => {
      ${teaserGallery}
    },
    _type == 'logoWall' => {
      ${logoWall}
    },
    _type == 'contactBlock' => {
      ${contactBlock}
    },
    _type == 'contact' => {
      ...,
      picture {
        ...,
        "src": @.asset->url,
        sources[]{
          ...,
          "srcset": @.srcset.asset->url,
        }
      }
    },
  }
`;

// export const pageQuery = groq`*[_type == "page" && (slug.current == $slug || _id == $id)][0]{
//   ...,
//   mainImage{
//     ...,
//     "src": @.asset->url,
//     "alt": @.asset->altText,
//     "caption": @.asset->caption,
//   },
//   sections[]{
//     ...,
//     _type == 'pageSection' => {
//       ${pageSection}
//     },
//     _type == 'imageBlock' => {
//       ${imageBlock}
//     },
//     _type == 'teaserBlock' => {
//       ${teaserBlock}
//     },
//     _type == 'teaserList' => {
//       ${teaserList}
//     },
//     _type == 'teaserGallery' => {
//       ${teaserGallery}
//     },
//     _type == 'logoWall' => {
//       ${logoWall}
//     },
//     _type == 'contactBlock' => {
//       ${contactBlock}
//     },
//     _type == 'contact' => {
//       ...,
//       picture {
//         ...,
//         "src": @.asset->url,
//         sources[]{
//           ...,
//           "srcset": @.srcset.asset->url,
//         }
//       }
//     },
//   },
//   teaserList {
//     ...,
//     items[]{
//       ...,
//       "slug": @.internalLink->slug.current,
//       "href": @.internalLink->_type + "/" + @.internalLink->slug.current,
//       "headline": coalesce(headline, @->title),
//       "subheadline": coalesce(subheadline, @->subtitle),
//       "body": coalesce(body, @->body),
//       "mainImage": coalesce(mainImage, @->mainImage),
//       "theme": @->theme,
//       picture{
//         ...,
//         "src": @.asset->url,
//         sources[]{
//           ...,
//           "srcset": @.srcset.asset->url,
//         }
//       }
//     }
//   }
// }`;
// export const pagesQuery = groq`*[_type == "page"]`;
export const pageQuery = groq`
  *[_type == "translation.metadata" && 
    references(*[_type == "page" && slug.current == $slug][0]._id)
  ][0].translations[_key == $language][0].value->{
    ...,
    "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
      ...,
    },
  }
`;
export const pagesQuery = groq`*[_type == "page" && language == $language]{
  _id,
  title,
  slug,
  language,
  "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
    title,
    slug,
    language
  },
}`;
/*
{
  title,
  slug,
  language,
  "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
    ...,
    title,
    slug,
	body,
    language
  },
}
*/
const caseHero = groq`
  ...,
  mainImage{
    ...,
    "src": @.asset->url,
  }
`;

const textBlock = groq`
  ...,
  sectionTheme{
    ...,
    "backgroundImage": @.backgroundImage.asset->url
  },
  text{
    ...,
    content[]{
      ...,
      asset{
        ...,
        "src": @->url,
      }
    }
  },
`;

export const caseQuery = groq`*[_type == "case" && slug.current == $slug][0]{
  ...,
  sections[]{
    ...,
    _type == 'caseHero' => {
      ${caseHero}
    },
    _type == 'textBlock' => {
      ${textBlock}
    },
  },
}`;

export const casesQuery = groq`*[_type == "case"]{
  ...,
  "slug": "case/" +@.slug.current,
  "headline": @.title,
}`;
/*
{
  title,
  slug,
  language,
  "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
    ...,
    title,
    slug,
	body,
    language
  },
}
*/
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]`;
export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`;

export const navQuery = groq`*[_type == "navigation"]{
  ...,
  "slug": @.slug.current,
  items[]{
    ...,
    "slug": @.navigationItemUrl.internalLink->slug.current,
    "text": @.text[0].value,
  }
}`;

export interface Page {
	_type: 'page';
	title?: string;
	slug: Slug;
	mainImage?: ImageAsset;
}

export interface Post {
	_type: 'post';
	_createdAt: string;
	title?: string;
	slug: Slug;
	excerpt?: string;
	mainImage?: ImageAsset;
	body: PortableTextBlock[];
}
