App.info({
  name: 'Entrepreneur\'s Chinese',
  description: 'Learn about business and entrepreneurship in China (while learning the language).',
  author: 'Dyana N, Emma Y, Seb K, Gary W, Tom T, Kevin B',
  email: 'kevin@bluer.com',
  website: 'http://www.entrepreneurschinese.com/',
  version: '1.0'
});

App.icons({
  // iOS
  'iphone': 'resources/icons/icon-60.png',
  'iphone_2x': 'resources/icons/icon-60@2x.png',
  'iphone_3x': 'resources/icons/icon-60@3x.png',
  'ipad': 'resources/icons/icon-72.png',
  'ipad_2x': 'resources/icons/icon-72@2x.png',

  // Android
  'android_ldpi': 'resources/icons/drawable-ldpi-icon.png',
  'android_mdpi': 'resources/icons/drawable-mdpi-icon.png',
  'android_hdpi': 'resources/icons/drawable-hdpi-icon.png',
  'android_xhdpi': 'resources/icons/drawable-xhdpi-icon.png'
});

App.launchScreens({
  // iOS
  'iphone': 'resources/splash/Default~iphone.png',
  'iphone_2x': 'resources/splash/Default@2x~iphone.png',
  // 'iphone5': 'resources/splash/splash-320x568@2x.png',
  // 'ipad_portrait': 'resources/splash/splash-768x1024.png',
  // 'ipad_portrait_2x': 'resources/splash/splash-768x1024@2x.png',
  // 'ipad_landscape': 'resources/splash/splash-1024x768.png',
  // 'ipad_landscape_2x': 'resources/splash/splash-1024x768@2x.png',

  // Android
  // 'android_ldpi_portrait': 'resources/splash/splash-200x320.png',
  // 'android_ldpi_landscape': 'resources/splash/splash-320x200.png',
  // 'android_mdpi_portrait': 'resources/splash/splash-320x480.png',
  // 'android_mdpi_landscape': 'resources/splash/splash-480x320.png',
  // 'android_hdpi_portrait': 'resources/splash/splash-480x800.png',
  // 'android_hdpi_landscape': 'resources/splash/splash-800x480.png',
  // 'android_xhdpi_portrait': 'resources/splash/splash-720x1280.png',
  // 'android_xhdpi_landscape': 'resources/splash/splash-1280x720.png'
});

App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#000000');

