// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

var requestConfig = {
    default: "cloud",
    cloud: {
      prefix: "tech/monitor/",
      projectUrl: "requestUrl"
    },
    vbox: {
      prefix: "vbox/local/",
      projectUrl: "vboxRequestUrl"
    }
  }
  
  var modelsConfig = {
    getConfig(modelName, project) {
      var model = modelsConfig[modelName];
      var api = model.api || requestConfig.default;
      var _requestConfig = requestConfig[api];
      var baseUrl = project[_requestConfig.projectUrl];
      var url = _requestConfig.prefix + model.url;
      return {
        url: url,
        baseUrl: baseUrl,
        api: api,
        dataType: model.dataType
      }
    },
    getModelConfig(modelName) {
      return modelsConfig[modelName];
    },
    requestConfig: requestConfig,
    ///////////////////////////////////////////
    /*
      以下是云端接口
      命名：接口命名 + Model
    */
    ///////////////////////////////////////////
    monitorLoginModel: {
      url: "userLogin",
    },
    sendPhoneMsgModel: {
      url: 'sendPhoneMsg',
    },
    getMonitorScreenModel: {
      url: 'getMonitorScreen'
    },
    getFaultScreenModel: {
      url: 'getFaultScreen'
    },
    getAlarmListModel: {
      url: 'getAlarmList'
    },
    getVboxListModel: {
      url: 'getVboxList'
    },
    getVBoxScreenModel: {
      url: 'getVBoxScreen'
    },
    getFlowListModel: {
      url: 'getFlowList'
    },
    getFlowListModel: {
      url: 'getFlowList'
    },
    recoveringFaultModel: {
      url: 'recoveringFault'
    },
    recoveredFaultModel: {
      url: 'recoveredFault'
    }
  
  }
  
  export default modelsConfig
  