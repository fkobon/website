<?php

/**
 * This sets the context the application is running in.
 * It allows to change certain behavior depending on context.
 * The currently supported contexts are:
 *
 * development		Used in the development environment
 * production		Used on the live website
 */
$context = @is_file(dirname( __FILE__ ) . DIRECTORY_SEPARATOR . 'wp-config-development.php') ? 'development' : 'production';
define('CONTEXT', $context);

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

define('WP_CACHE', true); //Added by WP-Cache Manager
define( 'WPCACHEHOME', '/var/www/sites/website/wp-content/plugins/wp-super-cache/' ); //Added by WP-Cache Manager


/**
 * Don't reveal any of the credentials or other
 * sensible configurations in GIT!!!!
 * Thus include 'em from an external file but
 * keep the dummy config.php for Wordpress
 */
if (CONTEXT == 'development') {
	require_once('wp-config-development.php');
} else {
	require_once('/etc/xbmc/wordpress/wp-config-private.php');
}

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
        define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
?>