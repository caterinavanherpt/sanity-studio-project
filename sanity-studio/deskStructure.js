import { contextDocumentTypeName } from "@sanity/assist"

export const myStructure = (S) =>
    S.list()
      .title('Content')
      .items([
        ...S.documentTypeListItems().filter((item) => item.getId() !== contextDocumentTypeName)
    ])

