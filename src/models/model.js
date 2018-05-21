import $ from 'jquery'
import _ from 'underscore'
import axios from 'axios'
// import store from '../store'
import modelsConfig from './modelconfig'
import tokyo from '../common/util'
var _axios = function (modelName, param = {}) {
  var promise = new Promise(function (res, rej) {
    var _modelConfig = modelsConfig.getConfig(modelName);
    var _param = {
      method: "post",
      dataType: "json",
      url: _modelConfig.baseUrl + _modelConfig.url,
      timeout: 60000,
      //`withCredentials`表明是否跨域请求，
      //应该是用证书
      withCredentials: false, //默认值
    }

    //如果是formdata
    if (param.isFormData) {
      if (token) {
        param.append("token", token);
      }
      _param.processData = false;
      _param.contentType = false;
    } else {
      //value如果非json string,则转一下
      _.each(param, function (value, key) {
        if (!_.isString(value)) {
          param[key] = JSON.stringify(value);
        }
      })
    }

    if (param.isFormData) {
      _param.data = param;
    } else {
      _param.data = param;
    }

    if (_modelConfig.dataType == "json") {
      _param.transformRequest = null;
      if (param) {
        _param.data = JSON.stringify(param);
      }
    }

    promise = $.ajax(_param);
    promise.then(function (info) {
      res(info);
    }).catch(err => {
      rej(err);
    });
  });
  return promise;
}
var post = function (modelName, param) {
  var promise = _axios(modelName, param);
  var modelConfig = modelsConfig.getModelConfig(modelName);
  var result = new Promise(function (res, rej) {
    promise.then(function (info) {
      res(info);
    }).catch(err => {
      rej(err);
    });
  });
  return result;
}
var getModel = function (modelName) {
  return {
    $post: function (param) {
      return post(modelName, param);
    }
  }
}
export default getModel
