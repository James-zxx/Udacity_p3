/**
 * Created by mr.zhang on 2017/8/4.
 */
// 天气密钥:lmsvjquagunylllp

module.exports = function(ko) {
   function  viewModel() {
        this.mapsList=ko.observable();
        this.searchMapName=function () {
           var sName = $('.input-map-name').val();
            searchMapName(sName);
        };
        this.showLocaltion = function (localtion) {
            searchMapName(localtion.name);
        };
    };
    /**
     * 初始化数据
     */
    var map;
    function initData() {
         this.mapData = [
             {
                 "name": "北京市",
                 "center": "116.405285,39.904989",
                 "type": 0,
                 "subDistricts": []
             }, {
                 "name": "天津市",
                 "center": "117.190182,39.125596",
                 "type": 1,
                 "subDistricts": []
             }, {
                 "name": "河北省",
                 "center": "114.502461,38.045474",
                 "type": 1,
                 "subDistricts": []
             }, {
                 "name": "山西省",
                 "center": "112.549248,37.857014",
                 "type": 1,
                 "subDistricts": []
             }, {
                 "name": "内蒙古自治区",
                 "center": "111.670801,40.818311",
                 "type": 1,
                 "subDistricts": []
             }, {
                 "name": "辽宁省",
                 "center": "123.429096,41.796767",
                 "type": 1,
                 "subDistricts": []
             }, {
                 "name": "吉林省",
                 "center": "125.3245,43.886841",
                 "type": 1,
                 "subDistricts": []
             }, {
                 "name": "黑龙江省",
                 "center": "126.642464,45.756967",
                 "type": 1,
                 "subDistricts": []
             }, {
                 "name": "上海市",
                 "center": "121.472644,31.231706",
                 "type": 1,
                 "subDistricts": []
             }, {
                 "name": "江苏省",
                 "center": "118.767413,32.041544",
                 "type": 1,
                 "subDistricts": []
             }, {
                 "name": "浙江省",
                 "center": "120.153576,30.287459",
                 "type": 1,
                 "subDistricts": []
             }, {
                 "name": "安徽省",
                 "center": "117.283042,31.86119",
                 "type": 1,
                 "subDistricts": []
             }, {
                 "name": "福建省",
                 "center": "119.306239,26.075302",
                 "type": 1,
                 "subDistricts": []
             }, {
                 "name": "江西省",
                 "center": "115.892151,28.676493",
                 "type": 1,
                 "subDistricts": []
             }, {
                 "name": "山东省",
                 "center": "117.000923,36.675807",
                 "type": 1,
                 "subDistricts": []
             }, {
                 "name": "河南省",
                 "center": "113.665412,34.757975",
                 "type": 1,
                 "subDistricts": []
             }, {
                 "name": "湖北省",
                 "center": "114.298572,30.584355",
                 "type": 1,
                 "subDistricts": []
             }, {
                 "name": "湖南省",
                 "center": "112.982279,28.19409",
                 "type": 1,
                 "subDistricts": []
             }, {
                 "name": "广东省",
                 "center": "113.280637,23.125178",
                 "type": 1,
                 "subDistricts": []
             }, {
                 "name": "广西壮族自治区",
                 "center": "108.320004,22.82402",
                 "type": 1,
                 "subDistricts": []
             }, {
                 "name": "海南省",
                 "center": "110.33119,20.031971",
                 "type": 1,
                 "subDistricts": []
             }, {
                 "name": "重庆市",
                 "center": "106.504962,29.533155",
                 "type": 1,
                 "subDistricts": []
             }, {
                 "name": "四川省",
                 "center": "104.065735,30.659462",
                 "type": 1,
                 "subDistricts": []
             }, {
                 "name": "贵州省",
                 "center": "106.713478,26.578343",
                 "type": 1,
                 "subDistricts": []
             }, {
                 "name": "云南省",
                 "center": "102.712251,25.040609",
                 "type": 1,
                 "subDistricts": []
             }, {
                 "name": "西藏自治区",
                 "center": "91.132212,29.660361",
                 "type": 1,
                 "subDistricts": []
             }, {
                 "name": "陕西省",
                 "center": "108.948024,34.263161",
                 "type": 1,
                 "subDistricts": []
             }, {
                 "name": "甘肃省",
                 "center": "103.823557,36.058039",
                 "type": 1,
                 "subDistricts": []
             }, {
                 "name": "青海省",
                 "center": "101.778916,36.623178",
                 "type": 1,
                 "subDistricts": []
             }, {
                 "name": "宁夏回族自治区",
                 "center": "106.278179,38.46637",
                 "type": 1,
                 "subDistricts": []
             }, {
                 "name": "新疆维吾尔自治区",
                 "center": "87.617733,43.792818",
                 "type": 1,
                 "subDistricts": []
             }, {
                 "name": "台湾省",
                 "center": "121.509062,25.044332",
                 "type": 2,
                 "subDistricts": []
             }, {
                 "name": "香港特別行政區",
                 "center": "114.173355,22.320048",
                 "type": 1,
                 "subDistricts": []
             }, {
                 "name": "澳門特別行政區",
                 "center": "113.54909,22.198951",
                 "type": 1,
                 "subDistricts": []
             }
        ];
        /**
         * @description 加载地图
         * @type {AMap.Map}
         */
        map = new AMap.Map('container', {
            resizeEnable: true
        });
        /**
         * 地图工具加载
         */
        AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.OverView'],
            function(){
                map.addControl(new AMap.ToolBar());

                map.addControl(new AMap.Scale());

                map.addControl(new AMap.OverView({isOpen:true}));
            });
        var markers = [];
        var infoWindow = new AMap.InfoWindow({offset:new AMap.Pixel(0,-30)});

        for (var i = 0; i < this.mapData.length; i += 1) {
            var marker;

            marker = new AMap.Marker({
                position: this.mapData[i].center.split(','),
                title: this.mapData[i].name,
                map: map,
            });
            markers.push(marker);
            marker.content=this.mapData[i].name;
            //给Marker绑定单击事件
            marker.on('click', markerClicks);
            marker.emit('click',{target:marker});
            marker.setAnimation('AMAP_ANIMATION_DROP');
        }

        function markerClicks(e){
            e.target.setAnimation('AMAP_ANIMATION_DROP');
            infoWindow.setContent(e.target.content);
            infoWindow.open(map, e.target.getPosition());
        }

        map.setFitView();
    }
    /**
     * marker数据模型
     */
    function markModel() {
            id= '';
            position = [];
            markerLabel='';
            infoWinContent = '';
            listDesc = ''
    }
    
    function weatherData() {
        province="";//省份名
        city="";//城市
        weather="";//天气
        temperature="";//温度
        winddirection="";//方向
        windpower="";//风力
        humidity="";//湿度
        reporttime="";//数据发布时间
    }
    var viewModel = new viewModel();//初始化viewModel
    var data_init = new initData();//初始化数据
    var weatherModel = new weatherData();

    ko.applyBindings(viewModel);//绑定监听
    viewModel.mapsList(data_init.mapData);//赋值默认数据
    new getWeather();
    /**
     * @description 根据名称搜索
     * @param name
     */
    function searchMapName(name) {
        AMap.service(["AMap.PlaceSearch"], function() {
            var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
                city: "", //城市
                map: map,
            });
            //关键字查询
            placeSearch.search(name, function(status, result) {
                if(result.info == 'OK'){
                    var list = result.poiList.pois;
                    viewModel.mapsList(list);
                    markShowMap(list);
                }else if(result.info == 'TIP_CITIES'){
                    viewModel.mapsList(result.cityList);
                }
                else{
                    alert('搜索异常,请重新搜索');
                }
            });
        });
    };

    function markShowMap(list) {
        viewModel.mapsList([]);//清空节点
        var dataMark = [];
        for(var i = 0;i <list.length;i++){
            var markObj = list[i];
            var model = new markModel();
            model.id = markObj.name;//名称
            model.infoWinContent = markObj.cityname+markObj.address;
            model.listDesc = markObj.name;
            model.position = [markObj.location.lng,markObj.location.lat];
            model.listDesc = markObj.type;
            dataMark.push(model);
        }

        AMapUI.loadUI(['misc/MarkerList'], function(MarkerList) {

            var markerList = new MarkerList({
                //关联的map对象
                map: map,

                //列表的dom容器的id
                listContainer: 'my-list',

                //选中状态（通过点击列表或者marker）时在Marker和列表节点上添加的class，可以借此编写css控制选中时的展示效果
                selectedClassNames: 'selected',

                //返回数据项的Id
                getDataId: function(dataItem, index) {
                    //index表示该数据项在数组中的索引位置，从0开始，如果确实没有id，可以返回index代替
                    return dataItem.id;
                },
                //返回数据项的位置信息，需要是AMap.LngLat实例，或者是经纬度数组，比如[116.789806, 39.904989]
                getPosition: function(dataItem) {
                    return dataItem.position;
                },
                //返回数据项对应的Marker
                getMarker: function(dataItem, context, recycledMarker) {

                    //marker的标注内容
                    var content = dataItem.markerLabel;

                    var label = {
                        offset: new AMap.Pixel(16, 18), //修改label相对于marker的位置
                        content: content
                    };

                    //存在可回收利用的marker
                    if (recycledMarker) {
                        //直接更新内容返回
                        recycledMarker.setLabel(label);
                        return recycledMarker;
                    }
                    //返回一个新的Marker
                    return new AMap.Marker({
                        label: label,
                        animation:"AMAP_ANIMATION_DROP"
                    });
                },
                //返回数据项对应的infoWindow
                getInfoWindow: function(dataItem, context, recycledInfoWindow) {

                    var tpl = '<p><%- dataItem.id %>：<%- dataItem.infoWinContent %><p>';

                    //MarkerList.utils.template支持underscore语法的模板
                    var content = MarkerList.utils.template(tpl, {
                        dataItem: dataItem,
                        dataIndex: context.index
                    });

                    if (recycledInfoWindow) {
                        //存在可回收利用的infoWindow, 直接更新内容返回
                        recycledInfoWindow.setContent(content);
                        return recycledInfoWindow;
                    }

                    //返回一个新的InfoWindow
                    return new AMap.InfoWindow({
                        offset: new AMap.Pixel(0, -23),
                        content: content
                    });
                },
                //返回数据项对应的列表节点
                getListElement: function(dataItem, context, recycledListElement) {

                    var tpl = '<a><%- dataItem.id %><a>';

                    var content = MarkerList.utils.template(tpl, {
                        dataItem: dataItem,
                        dataIndex: context.index
                    });

                    if (recycledListElement) {
                        //存在可回收利用的listElement, 直接更新内容返回
                        recycledListElement.innerHTML = content;
                        return recycledListElement;
                    }

                    //返回一段html，MarkerList将利用此html构建一个新的dom节点
                    return '<li>' + content + '</li>';
                }

            });

            //监听选中改变
            markerList.on('selectedChanged', function(event, info) {
                console.log(event, info);
            });

            //监听Marker和ListElement上的点击
            markerList.on('markerClick listElementClick', function(event, record) {
                console.log(event, record);
            });
            // //展示该数据
            markerList.render(dataMark);
        });
    };
    /**
     * @description 获取天气
     */
    function getWeather(cityName) {
        var KEY = "72b8b778414fe6d5cf48f8e2cd9ad0dd"; // 测试用key，请更换成您自己的 Key
        var API = "http://restapi.amap.com/v3/weather/weatherInfo?"; // 获取天气实况
        var CITY = "310000"; //上海
        var url = API + "city="+CITY+"&key="+KEY;
        $.ajax(
            {
                url:url,
                type:"GET",
                success:function (data) {
                    if(data.status == 1){//成功
                        var wData = data.lives[0];
                        weatherModel.province = wData.province;
                        weatherModel.city = wData.city;
                        weatherModel.weather = wData.weather;
                        weatherModel.temperature = wData.temperature;
                        weatherModel.windpower = wData.windpower;
                        weatherModel.humidity = wData.humidity;
                        weatherModel.reporttime = wData.reporttime;
                        openInfo();

                    }else{//失败

                    }
                },
                error:function (e) {
                    
                }
            }
        )

    }

    //在指定位置打开信息窗体
    function openInfo() {
        //构建信息窗体中显示的内容
        var info = [];
        info.push("<div style=\"padding:0px 0px 0px 4px; \">天气");
        info.push("城市:"+weatherModel.city);
        info.push("天气:"+weatherModel.weather);
        info.push("温度:"+weatherModel.temperature);
        info.push("风向:"+weatherModel.windpower);
        info.push("空气湿度:"+weatherModel.humidity);


        info.push("发布时间:"+weatherModel.reporttime+"</div></div>");
        infoWindow = new AMap.InfoWindow({
            content: info.join("<br/>")  //使用默认信息窗体框样式，显示信息内容
        });
        infoWindow.open(map, [121.472644,31.231706]);//默认显示的是上海
    }

};
