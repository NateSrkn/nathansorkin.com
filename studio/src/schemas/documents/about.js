export default {
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    {
      name: 'Author',
      title: 'Author',
      type: 'string'
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'bodyPortableText',
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ name: 'links', type: 'links' }]
    }
  ]
}