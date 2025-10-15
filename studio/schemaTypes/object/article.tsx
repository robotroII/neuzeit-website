import {defineType, defineArrayMember} from 'sanity'

const HighlightIcon = () => (
  <span style={{fontWeight: 'bold'}}>H</span>
);

const HighlightDecorator = (props: { children: React.ReactNode }) => (
  <span style={{ backgroundColor: 'yellow', color: 'black' }} className="bg-textColor"><span className="text">{props.children}</span></span>
);

const TextAlign = (props: any) => (
  <div style={{ textAlign: props.value ? props.value : 'left', width: '100%' }}>{props.children}</div>
);

export const article = defineType({
  title: 'Block content article',
  name: 'article',
  type: 'array',
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'H5', value: 'h5' },
        { title: 'H6', value: 'h6' },
        { title: 'Quote', value: 'blockquote' },
        { title: 'Emphasize', value: 'em' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
          { 
            title: 'Highlight',
            value: 'highlight',
            icon: HighlightIcon,
            component: HighlightDecorator
          },
          {
            title: 'Left',
            value: 'left',
            icon: () => (
              <span style={{fontWeight: 'bold'}}>&lt;</span>
            ),
            component: (props) => TextAlign(props)
          },
          {
            title: 'Center',
            value: 'center',
            icon: () => (
              <span style={{fontWeight: 'bold'}}>=</span>
            ),
            component: (props) => TextAlign(props)
          },
          {
            title: 'Right',
            value: 'right',
            icon: () => (
              <span style={{fontWeight: 'bold'}}>&gt;</span>
            ),
            component: (props) => TextAlign(props)
          },
          // { title: 'Keyword', value: 'keyword', icon: FaBolt, render: keyword },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [

          // { type: 'twitter' },
          // { type: 'externalLink' },
          // { type: 'internalLink' },
          // { type: 'keyword' },
        ],
      },
    }),
    defineArrayMember({
      type: "image",
      fields: [
        {
          type: "string",
          name: "caption",
        },
      ],
      options: { hotspot: true },
    }),
  ],
})
