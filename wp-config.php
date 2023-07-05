<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '$mab+W@*A`1q!X&Ntm1%WE36`l6H+7Vof)]&}E869Q&SF?#J(~+{OSxj^tum}9$B' );
define( 'SECURE_AUTH_KEY',  '8FOR7bp*qm.wU-L{m_At/:!XP`Em=o#Vkz1wuD`15djFkHBu?]=5lI{6hr4,fo<P' );
define( 'LOGGED_IN_KEY',    'JAr$.I(} o}x.LVB-/ *CN>Ev6>lih(ZMC#>$NuC5LAPAXUtx,A)TZLMX}Ek&8f<' );
define( 'NONCE_KEY',        'W1s-VIzhSfp3c0a5f9-yZi}(#xG a8kwo)2R3PElO;i`~E5gY#gC ;uT&gRk1sx>' );
define( 'AUTH_SALT',        'KgTION=ZG8j6N9J}/A4$>KG~Zr[~etaTyw3HGx6_;P 7_ lP{6^jYDfc<2v=KVbn' );
define( 'SECURE_AUTH_SALT', 'C%@v %tb, o-W4^]eNM7.;*oY]gk8!?5n>MOsJgftG&=JTOxn3#|<~=m$!jhod15' );
define( 'LOGGED_IN_SALT',   'RlDs7;BT4I}ECq$aaAevc9J|JcP$(E6e]sS3r0t~ilhB}Z*l3O{Lp:ZdRk=9Qy/3' );
define( 'NONCE_SALT',       'P8P>SL,/aCu#ml|t:7gps,?3lPA~|dgjhd<oP[SEP?&%F[Ow$aqYO;1*0dTwWbzS' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
