export interface ISearchsuggest {
  id: number
  defaultKey: string
  configKey: ISearchsuggestConfigKey[]
}

export interface ISearchsuggestConfigKey {
  '1'?: string
  '2'?: string
  '3'?: string
  '4'?: string
  '5'?: string
}

export interface IResultBanner {
  banners: IHomeBanner[]
}
export interface IHomeBanner {
  id: number
  productId: number
  picId: number
  backendPicId: number
  addTime: number
  position: number
  type: number
  url: string
  bannerExtJson: any
  isSetTime: number
  beginTime: any
  endTime: any
  picStr: string
  backendPicStr: string
}

export interface IHotProductRoot {
  count: number
  hasMore: boolean
  hotProduct: IHotProduct[]
}

export interface IHotProduct {
  db_create_time: number
  id: number
  name: string
  price: any
  productId: number
  resourceUrl: any
  orderWeight: number
  products: IProducts
  db_update_time: number
}

export interface IProducts {
  stock: number
  saleNum: number
  sumMoney: any
  skus: any
  discount: any
  pickUp: boolean
  tags: any[]
  display: number
  couponLabelFlag: number
  label: string
  couponLabelDesc: string
  distributeTags: IDistributeTag[]
  suggestWord: string
  category2: number
  brandName: string
  statistics: number
  picUrls: string[]
  alterStock: number
  createTime: number
  priceType: number
  category1: number
  drawTime: number
  levelLimit: number
  vipLimit: boolean
  allowDupBuy: boolean
  extInfo: IExtInfo
  specialType: number
  shopId: number
  exchangeType: number
  useVipPrice: boolean
  picIds: string[]
  name: string
  id: number
  type: number
  status: number
  iap: boolean
  pubTime: number
  coverUrl: string
  coverIdStr: string
  performanceTime: number
  minPrice: number
  originalCost: number
  maxPrice: number
  alg: string
}

export interface IDistributeTag {
  tagId: string
  tagName: string
}

export interface IExtInfo {
  albumId: number
  songId: number
  goodVipType: number
  quotaOfOrder: number
  extProductId: number
  extProductStatus: number
  extShelfStatus: number
  concertId: number
  buysingle: boolean
  showStartProId: number
  needMessage: number
  preSale: number
  defaultMessage: string
  tax: string
  albumSaleDisplayType: number
  restrict: number
  giftSet: number
  hiddenCanBuy: boolean
  preSaleFlag: boolean
}

export interface IAllProductRoot {
  count: number
  hasMore: boolean
  allProduct: IAllProduct[]
}

export interface IAllProduct {
  stock: number
  saleNum: number
  sumMoney: any
  skus: any
  discount: any
  pickUp: boolean
  status: number
  tags: any[]
  display: number
  useVipPrice: boolean
  label: string
  priceType: number
  levelLimit: number
  vipLimit: boolean
  allowDupBuy: boolean
  createTime: number
  couponLabelFlag: number
  extInfo: IExtInfo
  specialType: number
  shopId: number
  exchangeType: number
  category1: number
  coverUrl: string
  coverIdStr: string
  performanceTime: number
  drawTime: number
  suggestWord: string
  category2: number
  brandName: string
  statistics: number
  picUrls: string[]
  alterStock: number
  iap: boolean
  couponLabelDesc: any
  distributeTags: any[]
  pubTime: number
  picIds: string[]
  name: string
  id: number
  type: number
  vipMinPrice: number
  vipMaxPrice: number
  minPrice: number
  originalCost: number
  maxPrice: number
}

export interface ISearchKeyRoot {
  code: number
  all: number
  size: number
  more: boolean
  products: IProducts[]
}

export interface IGetSearchKeyParams {
  key: string
  sort?: string
  offset: number
  limit: number
}
