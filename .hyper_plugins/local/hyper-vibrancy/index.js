module.exports.onWindow = browserWindow => browserWindow.setVibrancy('dark');

module.exports.decorateConfig = config => {
  config.backgroundColor = 'rgba(10,10,10,.7)';
  return config;
}
