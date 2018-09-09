/*********************************************************/
/***** JS HELPER FOR addToCartButtonIfNotBought *****/
/*******************************************************/

// CSS style
$addToCartButtonIfNotBoughtStyle= '<style>#addToCartButtonIfNotBought {margin-top: 5px;}</style>';

// Adding css style dynamically to head of html
$('head').append($addToCartButtonIfNotBoughtStyle);

// getting ID of download
var $downloadId = $("#addToCartButtonIfNotBought .button").attr('id');

// preparing Ajax URL
var $ajaxUrl = location.protocol + "//" + location.host+ "/?edd_action=add_to_cart&download_id=" +$downloadId;

// preparing checkout page URL which is http://domain.com/checkout/
var $checkoutUrl = location.protocol + "//" + location.host+ "/checkout/";

// adding current button state to session cache
var $isAdded = localStorage[$downloadId] || 'No';

$( document ).on( "click", '#addToCartButtonIfNotBought .button',function() {

  if ($isAdded == 'No') {

                $.ajax({url: $ajaxUrl,context: document.body
           }).done(function() {
             // updating session cache
              localStorage[$downloadId] = 'Yes';

              // disable button while loading and change its text to adding
              $("#addToCartButtonIfNotBought .button").attr("disabled", true);
              $("#addToCartButtonIfNotBought .button").html('Adding to Cart');

                location.reload();
             });

           } else {
             // if alredy added to cart, the url redirects to checkout page
             location.href = $checkoutUrl;
           }

 });

$(window).ready(function() {

    if ($isAdded == 'Yes') {
          $("#addToCartButtonIfNotBought .button").html('Go to Checkout');

    }

  });
