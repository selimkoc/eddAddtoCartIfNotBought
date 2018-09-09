<?php
function atcbinb($atts, $content = null) {
        extract(shortcode_atts(array(
                                'id' => 0
                                  ), $atts));
  // get current wordpress user id
  $currentUser = get_current_user_id();

  if(edd_has_user_purchased($currentUser, $id) )
        {
          return '';
        }
        else
        {
          return '<div id="addToCartButtonIfNotBought"><a id="'.$id.'"class="button blue edd-submit" href="#">'.$content.'</a></div>';
        }

}
// add addToCartButtonIfNotBought shortcode to wordpress
// atcbiab comes from  (a)dd(T)o(C)art(B)utton(I)f(N)ot(B)ought
add_shortcode('addToCartButtonIfNotBought', 'atcbinb');
