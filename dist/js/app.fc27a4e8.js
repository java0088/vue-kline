(function(e){function t(t){for(var o,s,r=t[0],c=t[1],l=t[2],d=0,A=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&A.push(i[s][0]),i[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(A.length)A.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],o=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(o=!1)}o&&(n.splice(t--,1),e=s(s.s=a[0]))}return e}var o={},i={app:0},n=[];function s(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=o,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(a,o,function(t){return e[t]}.bind(null,o));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"01be":function(e,t,a){"use strict";a("ad49")},2395:function(e,t,a){},"3aff":function(e,t,a){},"41cb":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEqElEQVRYR62XXWwUVRTH/2e32w+DFG2oLTtd28RqbINlZpvuLAUjibEGIyEYhBhN2mhU/HjwAcQEpH4kKryYqGAMhEYfxPpAAmjUmJBYZGc33VlKbYn2oaWdhUqLClb6se4cM9tuuzszu9u1vckms3PO+Z/fvXPPmTuERY5vBwaKym6WtDJ4LRwON5irARg/YwyBaAi6HiVQ7/WVkx2ba2unFyNNuZx+UgdWF9FtrczcBuD+XP5z9ktEdHyab3U8KNWOZYvJChBUo68y8R4whEUmTncjaMR00Ce5P8oUnxEgENZOEGHH/0psCmLGV36vsNNOyxZACWvDIFQtR/J5DcaI7BU8Zk0LgKJqPQAeWNbkC2IXZUloSNVOAwio2j4C3kk6EFE7M/yA7gdoZf5QNArwEAA5GcvAfr8kvDufI3kRimitOuN4Gh3rj/q8nu97ekbLJ3X9KXD8aYC8cz5/JcpvdhjluGr2ksNEjtNx0o+uX1cVPd89vNXhcJxM1XUQ2ppEocO4l1gBo9QKqUS17PaZklJZLruZGvxzRFs3g9jQJrHGAJgfZyODqwrhqm4WhQvm+yXs+jNt9QjaDE9KRokmAIKR6G5mPmhdYme9LFX257/0CxGKerUOiPdZNh/RHp/oPkRGh7vz75KIXZMh0HM+yX1sKQBBNfosg4/aaFz64/ZJkYJh7QUmfGqXJE4QzUuaL4zxyJwMY4KWQYwXKahqhxnYZTXzG7JU9X6+Ce38FXVkL0DvWR4DcISUsHYGhMfMRqZYjV+sSe7yJXEEIoPVxK5BiwjjG1JU7SKAtSbjiCxZu9ZSKBRVGwYs3bXXADDKqdQkHpIlwbeUhOZYRdWCAJpM928YAOMAyswGWRLmGsvyYGSY6HUDIJDaKufTEd8ri1UDy5FeiYzUguk3Gy3FAPgcwDNmowN4qUkSjiwHQEjVdunAYRutLyikavv0lBdQ0okIv85MxP0bN96d3kbzJOrqunxH4QpngBn32UxyPwXC0R1EfMK2URC1+0T3W3nmTHMPRqIHmLndToOZdlIoNFjBBa4gA5bDghFktFFXcfGbjXWrr+YD0t0/VhmbmnrbaOe2kwOG6d+YL/EyCqgjrxMo2fW2c5zHyYndAG2eC75CRJ+xTmfiNDVepBePNTauuZUq3NnZV+jxlJZzAZU7nHicmZ8HsCYTNIP3+qWqDxIAZ/uurSiZjgUBrjP+E+FJnyh8rajR7wBuMYvIkpDpKNcFwobcK0X9k0Uu36b68ol5ISU8/DLI8XEimGhCB1rWi+7zwUj0F2auXyhPvCaLwod2SewOH7YwrL8iez2fJFKlOiiq1glg+6yBTvsk9xbjoFEUdz7kdDobwNCyvZ6V3t/vQiw2mm0FmPmk31u1bb7azM6pEMx6m9/rSRydFjsUVeOMvsw/3ChwbWtpqPgnI4BhSIUA4RyBfkwG5CrLLACB+OTU1ubme66lAmb8MEmDSInItAGTLhkAeovIuUUUKy2v96yfZsqFK49A141yeiKZIE+AXhAfiztcXzY3VKTNPOsjsOyL7ssb4Cg4APDDiwIgnGPWD/klz6lceyfn13EugaXa/wPOQ82Oof2W0wAAAABJRU5ErkJggg=="},"498f":function(e,t,a){"use strict";a("4bff")},"4bff":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("4de4"),a("b680"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{style:{backgroundColor:e.bgColor},attrs:{id:"app"}},[a("nav-bar",{attrs:{title:e.title,"background-color":e.bgColor}}),a("keep-alive",[a("router-view")],1),a("tab-bar",{attrs:{list:e.tabList,"background-color":e.bgColor},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}})],1)},n=[],s=(a("b0c0"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"k-nav-bar",style:{backgroundColor:e.backgroundColor,color:e.color}},[o("div",{staticClass:"k-nav-left"}),o("div",{staticClass:"k-nav-title"},[e._v(e._s(e.title))]),o("div",{staticClass:"k-nav-right",on:{click:e.handleUrlClick}},[o("img",{staticClass:"img-icon",attrs:{src:a("41cb"),alt:""}})])])}),r=[],c={name:"NavBar",props:{title:{type:String,default:""},backgroundColor:{type:String,default:"#131f31"},color:{type:String,default:"#c8cee4"}},mounted:function(){console.log(this.$slots)},methods:{handleLeftClick:function(){this.$emit("click-left")},handleRightClick:function(){this.$emit("click-right")},handleUrlClick:function(){window.open("https://github.com/java0088/vue-kline")}}},l=c,u=(a("498f"),a("2877")),d=Object(u["a"])(l,s,r,!1,null,"45cfbb51",null),A=d.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"k-tab-bar",class:{border:e.border},style:{backgroundColor:e.backgroundColor,color:e.color}},e._l(e.list,(function(t,o){return a("div",{key:o,staticClass:"k-tab-bar-item",style:{color:o===e.value?e.activeColor:e.color},on:{click:function(a){return e.handleItemClick(t,o)}}},[a("span",{staticClass:"k-icon",class:[o===e.value?t.activeIcon:t.icon]}),a("span",{staticClass:"k-tab-text"},[e._v(e._s(t.cnName))])])})),0)},g=[],m=(a("99af"),a("a9e3"),{props:{value:{type:Number,default:0},backgroundColor:{type:String,default:"#fff"},color:{type:String,default:"#6b809b"},list:{type:Array,default:function(){return[]}},activeColor:{type:String,default:"#54c6b7"},border:{type:Boolean}},data:function(){return{}},methods:{handleItemClick:function(e,t){this.$router.push("/?type=".concat(t,"&name=").concat(e.name,"&enName=").concat(e.enName)),this.$emit("input",t)}}}),p=m,v=(a("9989"),Object(u["a"])(p,h,g,!1,null,"5b279250",null)),f=v.exports,b=["#1b2741","#ffffff","#f2e9f5"],y=["#09b699","#d74a5d","#bd9fe5","#79879a","#7e8da3","#ece3c2"],D={name:"App",components:{NavBar:A,TabBar:f},watch:{$route:function(e){var t=parseInt(e.query.type);this.title="K线图-".concat(e.query.enName,"/USDT"),this.bgColor=b[t]}},mounted:function(){this.$route.query.name&&(this.active=parseInt(this.$route.query.type),this.bgColor=b[this.active],this.title="K线图-".concat(this.$route.query.name,"/USDT"))},data:function(){return{tabList:[{id:0,cnName:"比特币",name:"btcusdt",enName:"BTC",icon:"k-icon-btc-o",activeIcon:"k-icon-btc"},{id:1,cnName:"以太坊",name:"ethusdt",enName:"ETH",icon:"k-icon-eth-o",activeIcon:"k-icon-eth"},{id:2,cnName:"柚子币",name:"eosusdt",enName:"EOS",icon:"k-icon-eos-o",activeIcon:"k-icon-eos"}],active:0,bgColor:b[0],title:"K线图-BTC/USDT"}}},x=D,I=(a("7c55"),Object(u["a"])(x,i,n,!1,null,null,null)),w=I.exports,k=a("8c4f"),O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("div",{staticClass:"data-box"},[a("div",{staticClass:"left"},[a("h3",[e._v(e._s(e._f("toFixed")(e.titleCal.end_price,4)))]),a("div",{staticClass:"rate"},[e._v("≈"+e._s(e._f("toFixed")(e.titleCal.end_price,4))+"CNY")])])]),a("div",{staticClass:"nav-box"},e._l(e.navList,(function(t,o){return a("div",{key:o,staticClass:"item",class:e.currentNav===o?"active":"",on:{click:function(a){return e.handleNavClick(o,t.opt)}}},[e._v(" "+e._s(t.text)+" ")])})),0),a("div",{staticClass:"chart-box",style:{backgroundImage:"url("+e.bgImg+")"},on:{click:function(t){return t.stopPropagation(),e.handleChartClick(t)}}},[a("div",{staticClass:"top"},e._l(e.postTop,(function(t,o){return a("span",{key:o,staticClass:"yellow-color",style:{color:t.color}},[e._v(" "+e._s(t.name)+":"+e._s(e._f("toFixed")(t.value))+" ")])})),0),a("div",{staticClass:"middle"},e._l(e.chengJiao,(function(t,o){return a("span",{key:o,staticClass:"base-color",style:{color:t.color}},[e._v(" "+e._s(t.name)+":"+e._s(e._f("toFixed")(t.value))+" ")])})),0),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showTool,expression:"showTool"}],staticClass:"tool-box",class:e.dataPos?"pos-right":"pos-left"},e._l(e.toolList1,(function(t,o){return a("p",{key:o},[5===o?[a("span",[e._v(e._s(t.name))]),a("span",{class:t.value>=0?"color_green":"color_red"},[e._v(e._s(e._f("toFixed")(t.value,2)))])]:6===o?[a("span",[e._v(e._s(t.name))]),a("span",{class:t.value>=0?"color_green":"color_red"},[e._v(e._s(e._f("toFixed")(t.value,2))+"%")])]:[a("span",[e._v(e._s(t.name))]),a("span",[e._v(e._s(e._f("toFixed")(t.value,2)))])]],2)})),0),a("div",{ref:"chartBox",staticClass:"chart"})])])},C=[],E=(a("a434"),a("d3b7"),a("ac1f"),a("5319"),a("4c53"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("313e")),B=a.n(E),N=a("d7ac"),Q=a.n(N),S=(a("b64b"),{postSelect:function(e,t){for(var a={datas:{},ma:{},vol:{}},o={},i=0;i<e.length;i++){var n=e[i];switch(n.seriesIndex){case 0:a.datas={date:{name:"时间",value:n.name},open:{name:"开",value:n.value[1]},close:{name:"收",value:n.value[2]},low:{name:"低",value:n.value[3]},heigh:{name:"高",value:n.value[4]},zhangd:{name:"涨跌额",value:(parseFloat(n.value[2])-parseFloat(n.value[1])).toFixed(2),color:n.color},zhenf:{name:"涨跌幅",value:100*((parseFloat(n.value[2])-parseFloat(n.value[1]))/parseFloat(n.value[1])).toFixed(4)}};break;case 1:a.ma.ma5={name:n.seriesName,value:n.value,color:n.color};break;case 2:a.ma.ma10={name:n.seriesName,value:n.value,color:n.color};break;case 3:a.ma.ma20={name:n.seriesName,value:n.value,color:n.color};break;case 4:a.vol.ma5={name:n.seriesName,value:n.value,color:t[5]};break;case 5:a.vol.ma10={name:n.seriesName,value:n.value,color:t[0]};break;case 6:a.vol.vol={name:n.seriesName,value:n.value,color:t[4]};break;default:break}}var s=[];for(var r in a.datas)s.push({name:a.datas[r].name,value:a.datas[r].value});s.push(a.vol.vol),o.toolList1=s;for(var c=Object.keys(a.ma),l=[],u=0;u<c.length;u++)l.push({name:a.ma[c[u]].name,value:a.ma[c[u]].value,color:a.ma[c[u]].color});o.postTop=l,o.chengJiao={name:a.vol.name,value:a.vol.value,color:a.vol.color};for(var d=Object.keys(a.vol),A=[],h=d.length-1;h>=0;h--){A.push({name:a.vol[d[h]].name,value:a.vol[d[h]].value,color:a.vol[d[h]].color});break}return o.chengJiao=A,o.toolList1.push(o.chengJiao),o},calculateMA:function(e,t){for(var a=[],o=0,i=e.datas.length;o<i;o++)if(o<t)a.push("-");else{for(var n=0,s=0;s<t;s++)n+=e.datas[o-s][1];a.push(n/t)}return a},splitData:function(e){for(var t=[],a=[],o=[],i=0;i<e.length;i++)t.push([e[i][1],e[i][2],e[i][3],e[i][4]]),a.push(e[i][0]),o.push(e[i][5]);return{datas:t,times:a,vols:o}}}),H={data:function(){return{navList:[{text:"1分钟",opt:"1min"},{text:"5分钟",opt:"5min"},{text:"15分钟",opt:"15min"},{text:"30分钟",opt:"30min"},{text:"1小时",opt:"60min"},{text:"4小时",opt:"4hour"}],usdtPrice:8,currentNav:0,currencyInfo:{name:"btcusdt",enName:"BTC"},bgImg:a("dc68"),showFenshiBox:!1,dataPos:!1,toolList1:[],postTop:[],postMiddle:[],chengJiao:[],showTool:!1,chartData:[],titleCal:{},interval:null,flag:!1,haurl:"wss://api.huobiasia.vip/ws",requestK:{req:"market.eosusdt.kline.1min"},subK:{sub:"market.eosusdt.kline.1min"},socketK:{},chartOtherData:[],Zstart:100,Zend:90}},watch:{$route:function(e){var t=this;this.socketK.close&&this.socketK.close(),window.clearInterval(this.interval),this.currencyInfo=e.query,this.requestK.req="market.".concat(this.currencyInfo.name,".kline.1min"),this.subK.sub="market.".concat(this.currencyInfo.name,".kline.1min"),setTimeout((function(){t.handleInitWebsoket(),t.handleNavClick(0,"1min")}),1e3)}},created:function(){var e=this;this.requestK.req="market.".concat(this.currencyInfo.name,".kline.1min"),this.subK.sub="market.".concat(this.currencyInfo.name,".kline.1min"),setTimeout((function(){e.handleInitWebsoket(),e.handleNavClick(0,"1min")}),1e3)},methods:{handleNavClick:function(e,t){var a=this,o=this.currencyInfo.name;0!==e&&(this.Zstart=90,this.Zend=80),this.chartData=[],this.chartOtherData=[],this.socketK.close&&this.socketK.close(),clearTimeout(this.interval),this.currentNav=e,this.requestK.req="market.".concat(o,".kline.").concat(t),this.subK.sub="market.".concat(o,".kline.").concat(t),this.handleInitWebsoket(),setTimeout((function(){a.draw()}),1e3)},handleInitWebsoket:function(){var e=this;e.socketK=new WebSocket(e.haurl),e.socketK.onopen=function(){e.socketK.send(JSON.stringify(e.subK)),e.socketK.send(JSON.stringify(e.requestK))},e.socketK.onmessage=function(t){var a=t.data,o=new FileReader;o.onload=function(t){var a=new Uint8Array(t.target.result),o=Q.a.inflate(a,{to:"string"});e.handleData(o)},o.readAsArrayBuffer(a,"utf-8")}},handleData:function(e){var t=JSON.parse(e);if(t.ping)this.socketK.send(JSON.stringify({pong:t.ping}));else if("ok"==t.status&&t.data){if(this.chartOtherData.length<10){this.chartOtherData=t.data;for(var a=[],o=this.chartOtherData,i=0;i<o.length-1;i++){if(i===o.length-1){var n=o[i];this.titleCal={cny:8*n.close,end_price:n.close,max_price:n.high,min_price:n.low,num:n.count,per:(n.close-n.open)/n.open,start_price:n.open,ud_price:8}}var s=o[i];s.time=this.getFormatDate(s.id);var r=[s.time,s.open,s.close,s.low,s.high,s.vol];a.push(r)}this.chartData=a}}else if(t.tick){var c=t.tick;this.titleCal={cny:8,end_price:c.close,max_price:c.high,min_price:c.low,num:c.count,per:(c.close-c.open)/c.open,start_price:c.open,ud_price:8},c.time=this.getFormatDate(c.id);var l=[c.time,c.open,c.close,c.low,c.high,c.vol],u=this.chartData[this.chartData.length-1]&&this.chartData[this.chartData.length-1][0],d=l[0]&&l[0]==u;d&&this.chartData.splice(this.chartData.length-1,1,l),d||(this.chartOtherData.push(t.tick),this.chartData.push(l),this.chartData.shift())}},getFormatDate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MM-dd HH:mm";if(!e)return"";var a=new Date(1e3*e);return t.replace("MM",a.getMonth()+1>=10?a.getMonth()+1:"0"+(a.getMonth()+1)).replace("dd",a.getDate()>=10?a.getDate():"0"+a.getDate()).replace("HH",a.getHours()>=10?a.getHours():"0"+a.getHours()).replace("mm",a.getMinutes()>=10?a.getMinutes():"0"+a.getMinutes())},sendHeartMessage:function(e){this.socketK.send(JSON.stringify({pong:e}))},handleChartClick:function(e){this.showTool=!0;var t=this.$refs.chartBox,a=t.offsetWidth/e.clientX;this.dataPos=a>2},draw:function(){var e=this,t=B.a.init(this.$refs.chartBox),a=S.splitData(this.chartData),o=e.Zstart,i=e.Zend,n={tooltip:{show:!0,trigger:"axis",triggerOn:"mousemove|click",confine:!0,axisPointer:{type:"line",crossStyle:{color:"#6b809b",width:1},lineStyle:{width:6,color:"rgba(201,219,246,0.3)"}},formatter:function(t){if(t.length>0){var a=S.postSelect(t,y),o=a.toolList1,i=a.postTop,n=a.chengJiao;e.toolList1=o,e.postTop=i,e.chengJiao=n}}},xAxis:[{show:!1,scale:!0,nameGap:15,gridIndex:0,splitNumber:0,axisLine:{lineStyle:{color:"#4a657a"}},splitLine:{show:!1,lineStyle:{color:y[4],width:1,type:"solid"}},axisLabel:{show:!1},axisTick:{show:!1},data:a.times,axisPointer:{label:{show:!1}}},{show:!1,scale:!1,nameGap:15,gridIndex:1,splitNumber:5,axisLabel:{show:!1},axisTick:{show:!1},data:a.times,axisPointer:{label:{show:!1}}},{show:!0,scale:!0,gridIndex:2,axisLine:{lineStyle:{color:"transparent"}},axisLabel:{textStyle:{color:"#4a657a"}},data:a.times},{gridIndex:3,show:!1,type:"value"}],yAxis:[{position:"right",show:!0,scale:!0,gridIndex:0,axisLine:{lineStyle:{color:"rgba(0,0,0,0)"}},axisTick:{show:!1},minorTick:{show:!1},nameTextStyle:{width:"200px"},axisLabel:{show:!0,textStyle:{color:y[4]}},splitLine:{show:!1,lineStyle:{color:y[4],width:1,type:"solid"}}},{position:"right",gridIndex:1,show:!1,splitNumber:2,axisLine:{lineStyle:{color:"#4a657a"}},axisLabel:{textStyle:{color:"#4a657a"}},splitLine:{show:!1}},{position:"right",gridIndex:2,show:!1,splitNumber:3,offset:10,max:function(e){return e.max+.0096},axisLine:{lineStyle:{color:"#4a657a"}},axisLabel:{textStyle:{color:"#4a657a"}},splitLine:{show:!1,lineStyle:{color:"4a657a",type:"dashed"}}}],dataZoom:[{show:!1,type:"inside",start:o,end:i,xAxisIndex:[0,0]},{show:!1,type:"slider",start:o,end:i,xAxisIndex:[0,1]},{show:!1}],axisPointer:{show:!0,type:"line",label:{show:!0},link:[{xAxisIndex:[0,1]}]},series:[{type:"candlestick",name:"K",xAxisIndex:0,yAxisIndex:0,data:a.datas,markLine:{symbol:"",data:[{yAxis:a.datas[a.datas.length-1][1],label:{position:"end",padding:0},lineStyle:{type:"dashed",color:"#347bef"}}]},itemStyle:{color:y[0],color0:y[1],borderColor:y[0],borderColor0:y[1]}},{type:"line",name:"MA5",data:S.calculateMA(a,5),smooth:.5,symbol:"circle",showSymbol:!1,lineStyle:{color:y[5],width:1.5},itemStyle:{color:y[5],borderWidth:12,borderColor:"rgba(255,255,255,0.3)"}},{type:"line",smooth:.9,symbol:"circle",name:"MA10",data:S.calculateMA(a,10),showSymbol:!1,symbolSize:2,lineStyle:{color:y[0],width:1.5},itemStyle:{color:y[0],borderWidth:12,borderColor:"rgba(255,255,255,0.3)"}},{type:"line",name:"MA15",data:S.calculateMA(a,15),smooth:.9,symbol:"circle",showSymbol:!1,symbolSize:2,lineStyle:{color:y[2],width:1.5},tooltip:{backgroundColor:"transparent"},itemStyle:{color:y[2],borderWidth:12,borderColor:"rgba(255,255,255,0.3)"}},{type:"line",name:"MA10",xAxisIndex:1,yAxisIndex:1,data:S.calculateMA(a,10),symbol:"none",lineStyle:{color:"rgba(0,0,0,0)"}},{type:"line",name:"MA5",xAxisIndex:1,yAxisIndex:1,data:S.calculateMA(a,5),symbol:"none",lineStyle:{color:"rgba(0,0,0,0)"}},{type:"bar",name:"成交量",xAxisIndex:1,yAxisIndex:1,data:a.vols,barCategoryGap:"20%",itemStyle:{normal:{color:function(e){var t;return t=a.datas[e.dataIndex][1]>=a.datas[e.dataIndex][0]?y[0]:y[1],t}}}}],grid:[{top:"8%",left:5,right:"12%",bottom:"25%"},{left:5,right:"12%",top:"75%",bottom:"6%"},{left:5,top:"80%",right:"12%",bottom:"5%"},{left:"88",right:"0"}]};function s(){e.interval=setTimeout((function(){clearTimeout(e.interval),r(),s()}),3e3)}function r(){a=S.splitData(e.chartData),a.datas.shift(),a.times.shift(),a.vols.shift(),t.setOption({xAxis:[{data:a.times},{data:a.times},{data:a.times}],series:[{data:a.datas}]})}t.setOption(n),s(),r(),window.addEventListener("resize",(function(){t.resize()}))}}},M=H,Z=(a("01be"),Object(u["a"])(M,O,C,!1,null,"68578e8c",null)),L=Z.exports;o["a"].use(k["a"]);var j=new k["a"]({routes:[{path:"/",component:L}]});a("3aff"),a("82da");o["a"].config.productionTip=!1,o["a"].filter("toFixed",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return"string"===typeof e&&(e=parseFloat(e)),e&&e.toFixed(t)})),new o["a"]({router:j,render:function(e){return e(w)}}).$mount("#app")},"62af":function(e,t,a){},"7c55":function(e,t,a){"use strict";a("2395")},"82da":function(e,t,a){},9989:function(e,t,a){"use strict";a("62af")},ad49:function(e,t,a){},dc68:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXcAAAF+CAYAAAB5z1o2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODk3REZEQjhBOTM2MTFFQUE1QTFCQjYwN0RCRkE4QTciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODk3REZEQjdBOTM2MTFFQUE1QTFCQjYwN0RCRkE4QTciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNGOEZGQzVFQTBGMTExRUE4RThEQ0ZBRDZERjlDOTlFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNGOEZGQzVGQTBGMTExRUE4RThEQ0ZBRDZERjlDOTlFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+wHU0VgAABSdJREFUeNrs3TFSg0AYhmHXI3AHtqXk/h100JIzwBH8xc4qWSeJIcvzzFjpOMkHvDpMJkkR8UGZedxy1zeLJa5u1O4bXSxhI/u91qcJAMQdAHEHQNwBEHcAxB1A3AEQdwDEHQBxB0DcAcQdAHEHQNwBEHcAxB0AcQcQdwDEHQBxB0DcARB3AHEHQNwBEHcAxB0AcQdA3AFOIk3Dms3AP4uzX3cH3iB+PcajHquff0q/nKc3TrKIs19n5eZxy13fLJa4ulG7b3SxhI3s9/q/gACIOwDiDoC4AyDuAIg7gLgDIO4AiDsA4g6AuMORJRMg7gCIOwDiDiDuAIg7AOIOgLgDIO4A4g6AuAMg7gCIOwDiDoC4A4g7AOIOgLgDIO7ASfkkK3EHKhQmEHcAcQdA3AEQdwDEHQBxB0DcAcQdAHEHQNwBEHcAxB2ojjcOE3cAcQdA3AEQdwDEHQBxB0DcAcQd/sJrkEHcARB3AMQdQNwBEHcAxB0AcQdA3AEQdwBxB0DcARB3AMQdAHEHEHcAxB0AcQdA3AEQdwDEHUDcAXg3aRrW9tbP7F9x5XsAJeJR3Xrg76o37hE2KjWPW+76ZrGEjWxkv6NzWwZA3AEQdwDEHQBxB0DcAcQdAHEHQNwBEHcAxB1A3E0AIO4AiDsA4g6AuAMg7gDiDoC4AyDuAIg7AOIOIO4AiDsA4g6AuAMg7gCIO4C4AyDuAIg7AOIOgLgDiDsA4g6AuAMg7gCIOwDiDiDuAIg7AOIOgLgDIO4A4g6AuAMg7gCIOwDiDoC4A4g7AOIOgLgDIO4AiDuAuAMg7gCIOwDiDoC4AyDuAOIOgLgDIO4AiDsA4g4g7gCIOwDiDoC4A3CvNA1rNgOwi3fp1hs91kcfm1R6rFJEOKULzeOWu75ZLGEjG9nv6NyWARB3AMQdAHEHQNwBEHcAcQdA3AEQdwDEHQBxBxB3EwCIOwDiDoC4AyDuAIg7gLgDIO4AiDsA4g6AuAOIOwDiDoC4AyDuAIg7AOIOIO4AiDsA4g6AuAMg7gDiDoC4AyDuAIg7AOIOgLgDiDsA4g6AuAMg7gCIO4C4AyDuAIg7AOIOgLgDIO4A4g6AuAMg7gCIOwDiDiDuAIg7AOIOgLgDIO4AiDuAuAMg7gCIOwDiDoC4A4g7AOIOgLgDIO4A3CtNw5rNAFWJ2rtVyXN86nNIEeFSKDSPW+76ZrGEjWxkv6NzWwZA3AEQdwDEHQBxB0DcAcQdAHEHQNwBEHcAxB1A3E0AIO4AiDsA4g6AuAMg7gDiDoC4AyDuAIg7AOIOIO4AiDsA4g6AuAMg7gCIO4C4AyDuAIg7AOIOgLgDiDsA4g6AuAMg7gCIOwDiDiDuAIg7AOIOgLgDIO4A4g6AuAMg7gCIOwDiDoC4A4g7AOIOgLgDIO4AiDuAuAMg7gCIOwDiDvULEyDuAIg7AOIOIO4AiDsA4g6AuAMg7gDiDoC4AyDuAIg7AOIOwEeahjWbAaCyuEd499FS87jlrm8WS9jozo3afaOLJZxjz+S2DIC4AyDuAIg7AOIOgLgDiDsA4g6AuAMg7gCIO4C4mwBA3AEQdwDEHQBxB0DcgTr4hCFxBxB3AMQdAHEHQNwBEHcAxJ0n8jI1EHcAxB0AcQcQdwDEHQBxB0DcARB3AMQdQNwBEHcAxB0AcQdA3AHEHQBxB0DcARB3AMQdAHEHEHcAxB0AcQdA3AEQdwBxB0DcARB3AMQdAHEHQNwBxB0AcQdA3AEQdwDEHeCUvgUYAFc7li8pUeVCAAAAAElFTkSuQmCC"}});
//# sourceMappingURL=app.fc27a4e8.js.map