# eddAddtoCartIfNotBought
Add to cart button for free products if EDD (easy digital downloads) free product plugin active

SETUP
- Add addtocartifnotbought.js to your website (it also has one line css file, you can remove it and add it to any of your css file)
- Upload custom_shortcodes.php to your theme folder and write an include line accordingly e.g. 
require_once get_template_directory_uri() . '/custom_shortcodes.php';


USAGE

You can use addToCartButtonIfNotBought shortcode to your Toolset template as following:

 [addToCartButtonIfNotBought id="[wpv-post-id]"]Add to Downloads[/addToCartButtonIfNotBought]
 

If you are using free products plugin and toolset, your template should look like this 

 [wpv-conditional if="( $(edd_price) gt '0' )"]
    [purchase_link id="[wpv-post-id]" style="button"]
        [/wpv-conditional]
        
         [wpv-conditional if="( $(edd_price) eq '0' )"]
                [edd_is_user_logged_in]
        
     			[purchase_link id="[wpv-post-id]" style="button"]
    
                [addToCartButtonIfNotBought id="[wpv-post-id]"]Add to Downloads[/addToCartButtonIfNotBought]

        [/edd_is_user_logged_in]
        
        
        [edd_is_user_logged_out]
       <a href="http://dtl.foxrobinson.com/register" class="button blue edd-submit"><span class="edd-add-to-cart-label">Download</span></a>
        [/edd_is_user_logged_out]
    [/wpv-conditional]

 
