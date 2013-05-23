<?php

/**
 * Don't reveal any of the credentials or other
 * sensible configurations in GIT!!!!
 * Thus include 'em from an external file but
 * keep the dummy config.php for Wordpress
 */
include('/etc/xbmc/wordpress/wp-config-private.php');

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
        define('ABSPATH', dirname(__FILE__) . '/');

/* WP SuperCache settings */
define( 'WP_CACHE', true );	
define( 'WP_CACHE', __FILE__.'/wp-content/cache/' ); 
define( 'WPCACHEHOME', __FILE__.'/opt/site-data/wordpress/cache/' ); 
		
		
/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
?>