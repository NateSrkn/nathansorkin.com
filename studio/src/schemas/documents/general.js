export default {
  name: 'general',
  type: 'document',
  title: 'General',
  fields: [
    {
      name: 'contactBlurb',
      title: 'Contact Blurb',
      type: 'portableText',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'array',
      of: [
        {
          name: 'reference',
          title: 'Reference',
          type: 'reference',
          to: [
            { type: 'project' }
          ]
        }
      ]
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ name: 'links', type: 'links' }]
    }
  ]
}