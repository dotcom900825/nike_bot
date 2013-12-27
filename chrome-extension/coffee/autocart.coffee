parseCartInfo = () ->
  cartInfo = {}
  cartForm = $('.add-to-cart-form').serializeArray()
  for c in cartForm
    cartInfo[c.name] = c.value
  return cartInfo

getSkuId = () ->
  availableSize = []
  $('select[name="skuAndSize"] option').each () ->
    if $(this).hasClass('exp-pdp-size-not-in-stock')
      return
    availableSize .push $(this).val()
  if availableSize.length == 0
    return null
  skuId = availableSize[0].split(':')[0]
  rt =
    sizes: availableSize
    skuId: skuId
  return rt

addToCart = (qty) ->
  if qty is undefined
    qty = 1
  cartInfo = parseCartInfo()
  cartInfo.qty = qty
  sku = getSkuId()
  if sku == null
    return
  cartInfo.skuAndSize = sku.sizes[0]
  cartInfo.skuId = sku.skuId
  request =
    url: 'https://secure-store.nike.com/us/services/jcartService'
    dataType: 'jsonp'
    data: cartInfo
  $.ajax request

$(document).ready () ->
  addToCart()
