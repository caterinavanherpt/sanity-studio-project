import { contextDocumentTypeName } from "@sanity/assist"

export const myStructure = (S) =>
    S.list()
      .title('Content')
      .items([
        ...S.documentTypeListItems().filter((item) => item.getId() !== contextDocumentTypeName)
    ])

export const singletonStructure = (S) =>
  S.list()
  .title('Content')
  .items([
    ...S.documentTypeListItems().filter((
      (item) => item.getId() !== 'homeType'
    )),
    S.listItem()
    .id('homeType')
    .schemaType('homeType')
    .title('Home')
    .child(
      S.editor()
        .id('homeType')
        .schemaType('homeType')
        .documentId('homeType')
    )
  ])




