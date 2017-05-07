var map = new BMap.Map("myMap"); 
//注意在调用此构造函数时应确保容器元素myMap已经添加到地图上。
var point = new BMap.Point(120.13,30.27);
map.centerAndZoom(point, 15);   
//地图必须经过初始化才可以执行其他操作。
map.setMapStyle({style:"grayscale"});

//控件
map.addControl(new BMap.NavigationControl());
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.ScaleControl()); 
map.addControl(new BMap.MapTypeControl());  
map.setCurrentCity("杭州");   
map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

function hotel(){
	map.centerAndZoom(new BMap.Point(120.13,30.27), 14);
	var local = new BMap.LocalSearch(map, {
		pageCapacity: 0,
  		renderOptions: {
    	map: map,
    	autoViewport: true,
    	panel: "information"
  		}
	});
	local.search("宾馆");
}

//公交导航
function route(){
	//var destination=prompt("请输入您终点的宾馆名称：(起点默认为杭州师范大学（仓前）)" , "");
	map.centerAndZoom(new BMap.Point(120.13,30.27), 14);
	var local = new BMap.LocalSearch(map, {
		pageCapacity: 0,
  		renderOptions: {
    	map: map,
    	autoViewport: true,
    	panel: "information"
  		}
	});
	local.search("宾馆");

	var markerArr = [];
	var transit = new BMap.TransitRoute(map, {
					renderOptions: {
						map: map,
						panel:"information"
					}
				});
	local.setMarkersSetCallback(function(pois) {
		    for (var i = 0; i < pois.length; i++) {
			markerArr[i] = pois[i].marker;
			pois[i].marker.addEventListener("click", function(e) {
				transit.search("杭州师范大学-杭州国际服务工程学院", this.z.title);
				transit.clearResults();
			})
		}
	})
}


var school_info=[
  [120.012436,30.296295,"篮球场"],
  [120.013436,30.295195,"操场"],
  [120.015355,30.295605,"足球场"],
  [120.016976,30.295294,"博文苑1号楼便利超市"],
  [120.015413,30.295005,"博文苑4号楼萌站"],
  [120.017012,30.295566,"博文苑5号楼电脑维修店"],
  [120.016239,30.295862,"博文苑6号楼菜鸟驿站"],
  [120.014748,30.295831,"博文苑7号楼医务室"],
  [120.015745,30.296533,"博文苑9号楼学生事务服务中心"],
  [120.019976,30.294841,"恕园1号楼杭州国际服务工程学院"],
  [120.02231,30.298464,"恕园36号楼图书馆"],
  [120.019127,30.296423,"恕园13号楼一鸣奶吧"],
  [120.017924,30.29573, "食堂"],
  [120.02065,30.297404,"恕园16号楼实验楼"]
];


var opts = {
  width: 200, // 信息窗口宽度    
  height: 200, // 信息窗口高度      
}
function OnClick(address,point){
	point.addEventListener("click",function(e){
	var p = e.target;
	var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
	var div=document.createElement("div");
	div.style.width='200px';
	div.style.height="150px";
	var img = document.createElement('img');
	img.style.width='200px';
	img.style.height='180px';
	img.src='../img/1.png';
	div.append(img);
	div.append(address);
	var infoWindow = new BMap.InfoWindow(div,opts);
	map.openInfoWindow(infoWindow,point);
	});
}
function school(){
	map.centerAndZoom(new BMap.Point(120.015355,30.295605), 17);//设置中心
	for(var i = 0;i < school_info.length;i++){
	var point= new BMap.Marker(new BMap.Point(school_info[i][0],school_info[i][1]));//设置marker的坐标
	var address = school_info[i][2];
	map.addOverlay(point);
	OnClick(address,point);

}
}