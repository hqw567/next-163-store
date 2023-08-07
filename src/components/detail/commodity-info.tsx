import type { Coupon, product } from '@/http/detail/type'

export default function CommodityInfo({
  product,
  coupons,
}: {
  product: product
  coupons: Coupon[]
}) {
  const commodityService = [
    {
      title: '7天无理由退货',
      subtitle:
        '该商品支持7天无理由退货，买家在商品签收日起7天内可在线发起退货申请',
    },
    {
      title: '15天无忧换货',
      subtitle:
        '该商品支持15天无忧换货，买家在商品签收之日起15天内可在线发起换货申请',
    },
    {
      title: '满119包邮',
      subtitle: '单笔订单金额（不含运费）满119元享受包邮服务',
    },
    {
      title: '商家发货',
      subtitle:
        '该商品由深圳市恒天鸿业科技有限公司在2个工作日内发货（法定节假日顺延）。严格审核供应商资质，正品保证，100%正规渠道商品',
    },
    {
      title: '网易自营',
      subtitle: '该商品为网易自营，品质保证',
    },
  ]

  return (
    <>
      <div className="w-[580px]">
        <h1 className="text-[24px] text-[#333]">{product.name}</h1>
        <p className="mt-2 text-sm text-[#999]">{product.suggestWord}</p>
        <p className="my-5 text-[30px] text-[#d33a31]">
          ￥{product.skus[0].price}
        </p>
        <ul className=" space-y-5 text-xs">
          <li className="flex items-center space-x-3">
            <span className=" shrink-0 text-[#999]">促销：</span>
            <div className=" w-full space-x-2 border border-[#f8e2e0] bg-[#fdf5f4] p-2">
              <span className="border border-[#d33a31] px-1 text-[#d33a31]">
                领券专享
              </span>
              <span>200元 数码</span>
              <span className="cursor-pointer text-[#328ad4]">领券</span>
            </div>
          </li>
          <li className="flex items-center space-x-3">
            <span className=" shrink-0 text-[#999]">颜色：</span>
            <div>
              {product.skus.map((sku, index) => (
                <button
                  className="border-[ #e5e5e5] mb-[10px] mr-[10px] h-[30px] border px-5 text-[#333]"
                  key={index}
                >
                  {sku.attrs[0].attrValue}
                </button>
              ))}
            </div>
          </li>
          <li className="flex items-center space-x-3">
            <span className=" shrink-0 text-[#999]">数量：</span>
            <div className=" h-[30px] border border-[#e5e5e5]">
              <button className="h-full w-10 cursor-pointer border border-[#e5e5e5] text-xl font-bold">
                -
              </button>
              <input
                type="text"
                className="h-full w-[60px] text-center"
                value={1}
              />
              <button className="h-full w-10 cursor-pointer border  border-[#e5e5e5] text-xl font-bold">
                +
              </button>
            </div>
          </li>
          <li className="flex items-center space-x-3">
            <span className=" shrink-0 text-[#999]">服务：</span>
            <ul className=" flex space-x-5">
              {commodityService.map((item, index) => (
                <li key={index} className="flex items-center justify-center">
                  <i className="mr-1 h-1 w-1 rounded-full bg-[#d33a31]"></i>
                  <span className="text-[#666]">{item.title}</span>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <p className="mt-[30px] flex space-x-2">
          <button className="flex h-[50px] w-[170px] items-center justify-center border-2 border-[#d33a31] text-[18px] text-[#d33a31]">
            立即购买
          </button>
          <button className="flex h-[50px] w-[170px] items-center justify-center bg-[#d33a31] text-[18px] text-white">
            加入购物车
          </button>
        </p>
      </div>
    </>
  )
}
