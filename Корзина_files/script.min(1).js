function setQuantity(e,t,a){var i,o=parseFloat(BX("QUANTITY_INPUT_"+e).value);t=parseFloat(t),i="up"==a?o+t:o-t,0>i&&(i=0),i>0&&(BX("QUANTITY_INPUT_"+e).value=i,BX("QUANTITY_INPUT_"+e).defaultValue=o,totalSum=0,$("#basket_form tr[data-id="+e+"]").closest("table").find("tbody tr[data-id]").each(function(e,t){id=$(t).attr("data-id"),count=BX("QUANTITY_INPUT_"+id).value,price=$(document).find("#basket_form input[name=item_price_"+id+"]").val(),sum=count*price,totalSum+=sum,$(document).find("#basket_form [data-id="+id+"] .summ-cell .price").html(jsPriceFormat(sum))}),$("#basket_form .top_total_row span.price").html(jsPriceFormat(totalSum)),$("#basket_form .top_total_row div.discount").fadeTo("slow",.2),timerBasketUpdate&&(clearTimeout(timerBasketUpdate),timerBasketUpdate=!1),timerBasketUpdate=setTimeout(function(){updateQuantity("QUANTITY_INPUT_"+e,e,t),timerBasketUpdate=!1},700))}function updateQuantity(e,t,a,i){var o=BX(e).defaultValue,d=parseFloat(BX(e).value)||0;if(bValidChange=!1,d||(bValidChange=!1,BX(e).value=o),0==a||1==a)bValidChange=!0;else{var n=1e4*d,s=1e4*a,r=n%s;0==r&&(bValidChange=!0)}if($("#"+e).hasClass("focus")&&(d-=d%a),d=0==a||1==a?parseInt(d):parseFloat(d).toFixed(1),isRealValue(BX("QUANTITY_SELECT_"+t)))var c,l=BX("QUANTITY_SELECT_"+t).options,p=l.length;for(;p--;)c=l[p],parseFloat(c.value).toFixed(2)==parseFloat(d).toFixed(2)&&(c.selected=!0);BX("QUANTITY_"+t).value=d,BX("QUANTITY_INPUT_"+t).value=d,$("form[name^=basket_form]").prepend('<input type="hidden" name="BasketRefresh" value="Y" />'),BX("COUPON")&&(BX("COUPON").disabled=!0),$.post($("#cur_page").val(),$("form[name^=basket_form]").serialize(),$.proxy(function(e){0==timerBasketUpdate&&($("#basket-replace").html(e),$("#basket-replace .bigdata_recommended_products_container").css({position:"absolute",opacity:0,visibility:"hidden"}),$("#basket-replace").find("span[id*=bigdata_recommended_]").length&&$("#basket-replace").find("span[id*=bigdata_recommended_]").css({position:"absolute",opacity:0,visibility:"hidden"}))}))}function basketAjaxReload(){BX("COUPON")&&(BX("COUPON").disabled=!0),$.post($("#cur_page").val(),$("form[name^=basket_form]").serialize(),$.proxy(function(e){$("#basket-replace").html(e),$("#basket-replace .bigdata_recommended_products_container").css({position:"absolute",opacity:0,visibility:"hidden"}),$("#basket-replace").find("span[id*=bigdata_recommended_]").length&&$("#basket-replace").find("span[id*=bigdata_recommended_]").css({position:"absolute",opacity:0,visibility:"hidden"})}))}function delete_all_items(e,t,a,i){$.post(arMShopOptions.SITE_DIR+"ajax/action_basket.php","TYPE="+e+"&CLEAR_ALL=Y",$.proxy(function(e){$('input[name="BasketOrder"]').remove(),basketAjaxReload()}))}function deleteProduct(e,t,a){function i(e,t){$.post($("#cur_page").val()+"?action=delete&id="+e,$.proxy(function(e){$("#basket-replace").html(e),$("#basket-replace .bigdata_recommended_products_container").css({position:"absolute",opacity:0,visibility:"hidden"}),$("#basket-replace").find("span[id*=bigdata_recommended_]").length&&$("#basket-replace").find("span[id*=bigdata_recommended_]").css({position:"absolute",opacity:0,visibility:"hidden"})}))}checkCounters()?(delFromBasketCounter(a),setTimeout(function(){i(e,t)},100)):i(e,t)}function delayProduct(e,t){$.post($("#cur_page").val()+"?action=delay&id="+e,function(e){$("#basket-replace").html(e),$("#basket-replace .bigdata_recommended_products_container").css({position:"absolute",opacity:0,visibility:"hidden"}),$("#basket-replace").find("span[id*=bigdata_recommended_]").length&&$("#basket-replace").find("span[id*=bigdata_recommended_]").css({position:"absolute",opacity:0,visibility:"hidden"})})}function addProduct(e,t){$.post($("#cur_page").val()+"?action=add&id="+e,function(e){$("#basket-replace").html(e),$("#basket-replace .bigdata_recommended_products_container").css({position:"absolute",opacity:0,visibility:"hidden"}),$("#basket-replace").find("span[id*=bigdata_recommended_]").length&&$("#basket-replace").find("span[id*=bigdata_recommended_]").css({position:"absolute",opacity:0,visibility:"hidden"})})}function checkOut(e){function t(e){"undefined"==typeof e?BX("basket_form").submit():location.href=e}BX("COUPON")&&(BX("COUPON").disabled=!0),e=e||window.event;var a=$(e.target).parent();return checkCounters("google")?(checkoutCounter(1,a.data("text"),function(){t(a.data("href"))}),setTimeout(function(){t(a.data("href"))},600)):t(a.data("href")),!0}var basketTimeout,totalSum,timerBasketUpdate=!1;