import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('About')
        .child(
          S.editor()
            .id('about')
            .schemaType('about')
            .documentId('about')
        ),
        S.listItem()
          .title('General')
          .child(
            S.editor()
              .id('general')
              .schemaType('general')
              .documentId('general')
          ),
        ...S.documentTypeListItems().filter(listItem => !['about', 'general'].includes(listItem.getId()))
    ])