// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

var requestConfig = {
    prefix: "api/SysApi/",
    projectUrl: "http:///139.196.107.167/ubm/index.php/"
}

var modelsConfig = {
    getConfig(modelName, project) {
        var model = modelsConfig[modelName];
        var baseUrl = requestConfig.projectUrl;
        var url = requestConfig.prefix + model.url;
        return {
            url: url,
            baseUrl: baseUrl
        }
    },
    getModelConfig(modelName) {
        return modelsConfig[modelName];
    },
    requestConfig: requestConfig,
    ///////////////////////////////////////////
    /*
      以下是接口
      命名：接口命名 + Model
    */
    ///////////////////////////////////////////
    getNavTreeModel: {
        // 系统导航
        url: 'getNavTree',
    },
    getNewsListModel: {
        // 新闻列表
        url: "getNewsList",
    },
    getExhibitionByIdModel: {
        // 展会信息
        url: 'getExhibitionById'
    },
    getExhibitorByIdModel: {
        // 展商信息
        url: 'getExhibitorById'
    },
    getProductByIdModel: {
        // 展品信息
        url: 'getProductById'
    },
    getSpeakerByIdModel: {
        // 嘉宾信息
        url: 'getSpeakerById'
    },
    getExhibitLinkerListModel: {
        // 展会链接信息
        url: 'getExhibitLinkerList'
    },
    getExhibitionListModel: {
        // 展会信息
        url: 'getExhibitionList'
    },
    getExhibitorListModel: {
        // 全部展商信息
        url: 'getExhibitorList'
    },
    getSlideByGroupModel: {
        // 广告列表
        url: 'getSlideByGroup'
    },
    getProductListModel: {
        // 全部展品列表
        url: 'getProductList'
    },
    getSpeakerListModel: {
        // 嘉宾列表
        url: 'getSpeakerList'
    },
    getNewsByIdModel: {
        // 新闻详情
        url: 'getNewsById'
    },
    getSystemLinkerListModel: {
        // 友情链接
        url: 'getSystemLinkerList'
    },
    getEnumListModel: {
        // 数据字典
        url: 'getEnumList'
    },
    submitOrderFormModel: {
        // 展位预约单提交
        url: 'submitOrderForm'
    },
    submitNewsSubscribeModel: {
        // 订阅展会
        url: 'submitNewsSubscribe'
    },
    

}

export default modelsConfig