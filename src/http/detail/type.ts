export interface IGetProductDetailRoot {
  addCartFlag: boolean
  bought: boolean
  canBuy: boolean
  code: number
  coupons: Coupon[]
  product: product
  reserveFlag: boolean
  showCoupon: boolean
}

export interface Coupon {
  couponId: number
  couponCode: string
  couponLabel: string
  couponName: string
  couponDesc: string
  startTime: number
  endTime: number
  fixDay: number
  drawStatus: number
  drawLimit: DrawLimit
  effectAction: EffectAction
  welfareType: number
  curTime: number
  randomCodes: any
}

export interface DrawLimit {
  drawType: number
  drawUserType: number
  point: number
}

export interface EffectAction {
  actionType: number
  minMoney: number
  effectType: number
  effectValue: number
}

export interface product {
  stock: number
  saleNum: number
  sumMoney: any
  skus: Sku[]
  discount: boolean
  pickUp: boolean
  tags: any[]
  display: number
  priceType: number
  levelLimit: number
  vipLimit: boolean
  allowDupBuy: boolean
  extInfo: ExtInfo
  specialType: number
  shopId: number
  exchangeType: number
  useVipPrice: boolean
  createTime: number
  suggestWord: string
  category2: number
  brandName: string
  statistics: number
  picUrls: string[]
  alterStock: number
  iap: boolean
  label: string
  drawTime: number
  pubTime: number
  couponLabelFlag: number
  coverUrl: string
  coverIdStr: string
  performanceTime: number
  category1: number
  status: number
  picIds: string[]
  couponLabelDesc: string
  distributeTags: DistributeTag[]
  name: string
  id: number
  type: number
  serviceType: string[]
  descr: Descr[]
  appleDescr: any[]
  businessName: string
  videoId: string
}

export interface Sku {
  attrs: Attr[]
  snapshotId: string
  nearTicketTime: boolean
  price: number
  spePrice: number
  stock: number
  picUrl: string
  skuExtInfo: SkuExtInfo
  iapDesc: any
  iapName: any
  iapPrice: number
  iapSpePrice: number
  supplyPrice: any
  sales: number
  iapProductId: any
  ipadIapProductId: string
  vipSpePrice: number
  id: number
}

export interface Attr {
  attrId: number
  attr: string
  attrValueId: number
  attrValue: string
  calValue: number
  displayValue: string
  productSKUAttrDataList: any
}

export interface SkuExtInfo {
  concertTicketId: number
  productPlayid: number
  priceStatus: number
  priceNum: number
  showStartlimitBuyNum: number
  showStartDate: number
  showEndDate: number
  originPrice: number
  showTicketStartTime: number
  supplyPrice: string
  supPriBegin: number
  supPriEnd: number
  sortNum: number
  exPriceType: number
}

export interface ExtInfo {
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

export interface DistributeTag {
  tagId: string
  tagName: string
}

export interface Descr {
  type: number
  resource: string
  rawResource?: string
}
