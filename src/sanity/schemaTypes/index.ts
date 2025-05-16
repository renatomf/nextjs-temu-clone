import { type SchemaTypeDefinition } from 'sanity'
import { promotionCode } from './schemas/promotion-code'
import { productCategory } from './schemas/product-category'
import { promotionCampaign } from './schemas/promotion-campaign'
import { product } from './schemas/product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    promotionCode,
    promotionCampaign,

    product,
    productCategory,
  ],
}
