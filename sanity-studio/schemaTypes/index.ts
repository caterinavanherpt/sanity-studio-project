import { pageType } from "./documents/pages/pageType"
import { pageBuilderType } from "./documents/pages/pageBuilderType"
import { blockContentType } from "./objects/pageSections/blockContentType"
import { user_terms_and_conditions_type } from "./userTermsandConditionsType"
import { seoType } from './objects/seoType'
import { articleType } from "./documents/article/articleType"
import { tagType } from "./documents/article/tagType"

export const schemaTypes = [pageType, pageBuilderType, blockContentType, user_terms_and_conditions_type, seoType, articleType, tagType]
