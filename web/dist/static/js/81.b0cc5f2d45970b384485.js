webpackJsonp([81],{Xuru:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={name:"gpuDetail",data:function(){return{cname:"charts",nodeId:"",gpuTemp:{option:{}},gpuSe:{option:{}},powUsage:{option:{}},mem:{option:{}},clock:{option:{}},appClock:{option:{}}}},beforeRouteLeave:function(e,t,a){"nodeControlDetail"===e.name&&void 0===e.query.nodeId?this.$router.push({name:"nodeControlDetail",query:{nodeId:this.nodeId}}):a()},methods:{chartData:function(e){this.gpuTemp.option={tooltip:{trigger:"axis"},title:{text:"GPU"+this.gpuId+"_GPUTemp(C)",left:20,textStyle:{fontSize:14,fontWeight:"normal"}},legend:{right:45,borderRadius:0,data:["GPUTemp"]},calculable:!0,color:["#3bd0ac","#15c6e6"],xAxis:[{type:"category",boundaryGap:!1,data:e.x_axis}],yAxis:[{type:"value"}],series:[{name:"GPUTemp",type:"line",areaStyle:{color:"#8fe2ce",opacity:.7},smooth:!0,z:4,data:e.gpu_temp}]},this.gpuSe.option={tooltip:{trigger:"axis"},title:{text:"GPU"+this.gpuId+"_GPUSE(%)",left:20,textStyle:{fontSize:14,fontWeight:"normal"}},legend:{right:45,borderRadius:0,data:["GPUUtil","MemUsage"]},calculable:!0,color:["#3bd0ac","#15c6e6"],xAxis:[{type:"category",boundaryGap:!1,data:e.x_axis}],yAxis:[{type:"value"}],series:[{name:"GPUUtil",type:"line",areaStyle:{color:"#8fe2ce",opacity:.7},smooth:!0,z:4,data:e.gpu_se}]},this.powUsage.option={tooltip:{trigger:"axis"},title:{text:"GPU"+this.gpuId+"_PowUsage(W)",left:20,textStyle:{fontSize:14,fontWeight:"normal"}},legend:{right:45,borderRadius:0,data:["Power"]},calculable:!0,color:["#3bd0ac","#15c6e6"],xAxis:[{type:"category",boundaryGap:!1,data:e.x_axis}],yAxis:[{type:"value"}],series:[{name:"Power",type:"line",areaStyle:{color:"#8fe2ce",opacity:.7},smooth:!0,z:4,data:e.gpu_power_used}]},this.mem.option={tooltip:{trigger:"axis"},title:{text:"GPU"+this.gpuId+"_Mem(MB)",left:20,textStyle:{fontSize:14,fontWeight:"normal"}},legend:{right:45,borderRadius:0,data:["MemTotal","MemUsed"]},calculable:!0,color:["#3bd0ac","#15c6e6"],xAxis:[{type:"category",boundaryGap:!1,data:e.x_axis}],yAxis:[{type:"value"}],series:[{name:"MemTotal",type:"line",areaStyle:{color:"#8fe2ce",opacity:.7},smooth:!0,z:4,data:e.gpu_ram_max},{name:"MemUsed",type:"line",areaStyle:{color:"#27d9e9",opacity:.5},smooth:!0,z:3,data:e.gpu_ram_use}]},this.clock.option={tooltip:{trigger:"axis"},title:{text:"GPU"+this.gpuId+"_GPUFan(%)",left:20,textStyle:{fontSize:14,fontWeight:"normal"}},legend:{right:45,borderRadius:0,data:["GPUFan"]},calculable:!0,color:["#3bd0ac","#15c6e6"],xAxis:[{type:"category",boundaryGap:!1,data:e.x_axis}],yAxis:[{type:"value"}],series:[{name:"GPUFan",type:"line",areaStyle:{color:"#8fe2ce",opacity:.7},smooth:!0,z:4,data:e.fanspeed}]}},getData:function(e){var t=this;this.$get("/cluster/gpustate",{uuid:e}).then(function(e){for(var a=[],o={},i=0;i<6;i++){var s=t.timestampToTime(120*i+e.data.start-0,"h:m:s");a.push(s)}o.x_axis=a,o.gpu_temp=e.data.gpu_temp_use,o.fanspeed=e.data.fanspeed,o.gpu_power_used=e.data.gpu_power_used,o.gpu_ram_use=e.data.gpu_ram_use,o.gpu_ram_max=e.data.gpu_ram_max,o.gpu_se=e.data.gpu_se,t.chartData(o)})}},created:function(){this.uuid=this.$route.query.uuid,this.gpuId=this.$route.query.gpuId,this.nodeId=this.$route.query.nodeId,this.getData(this.uuid)}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"views-cluster-monitoring-node-control-detail-gpu"},[a("div",{staticClass:"item"},[a("sedu-echarts",{attrs:{domId:"a",cname:e.cname,option:e.gpuTemp.option}})],1),e._v(" "),a("div",{staticClass:"item"},[a("sedu-echarts",{attrs:{domId:"b",cname:e.cname,option:e.gpuSe.option}})],1),e._v(" "),a("div",{staticClass:"item"},[a("sedu-echarts",{attrs:{domId:"c",cname:e.cname,option:e.powUsage.option}})],1),e._v(" "),a("div",{staticClass:"item"},[a("sedu-echarts",{attrs:{domId:"d",cname:e.cname,option:e.mem.option}})],1),e._v(" "),a("div",{staticClass:"item"},[a("sedu-echarts",{attrs:{domId:"e",cname:e.cname,option:e.clock.option}})],1)])},staticRenderFns:[]},s=a("C7Lr")(o,i,!1,null,null,null);t.default=s.exports}});