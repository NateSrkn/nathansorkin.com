export default {
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    {
      name: 'author',
      title: 'Author',
      type: 'string'
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'bodyPortableText',
    }
  ]
}