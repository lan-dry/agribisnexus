const config = {
    dbUrl: process.env.DBURL || "mongodb://localhost/abn",
    port: process.env.PORT || 8000,
    env: process.env.NODE_ENV || "development",
    logDir: process.env.LOGDIR || "logs",
    viewEngine: process.env.VIEW_ENGINE || "html"
  };
  
  module.exports = config;