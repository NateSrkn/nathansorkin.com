export default {
  name: 'portableText',
  type: 'array',
  title: 'Content',
  of: [
    {
      type: 'block',
      marks: {
        annotations: [
          {
            name: 'externalLink',
            type: 'object',
            title: 'External Link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
                validation: Rule => 
                  Rule.uri({
                    scheme: ['http', 'https', 'tel', 'mailto'],
                    allowRelative: true
                  })
              }
            ]
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal Link',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                  { type: 'project' }
                ]
              }
            ]
          }
        ]
      }
    }
  ]
}