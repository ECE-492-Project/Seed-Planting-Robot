(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5970)}])},1460:function(e,t,n){"use strict";n.d(t,{Av:function(){return j},PB:function(){return v},TU:function(){return p},Un:function(){return S},ZP:function(){return m}});var r=n(5893),a=n(7916),i=n(5859),o=n(6447),l=n(913),s=n(3841),c=n(4226),u=n(5819),d=n(1903),h=n(3454),g=n(6420),x=n(7383),f=n(7294);let p=["Seed 1","Seed 2","Seed 3","Seed 4"],v=["red","green","blue","orange"],j={};for(let b=0;b<p.length;b++)j[p[b]]=v[b];let S={Satellite:{icon:(0,r.jsx)(a.Z,{}),url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"},Road:{icon:(0,r.jsx)(i.Z,{}),url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}};function m(e){let{seed:t,setSeed:n,numSeeds:a,setNumSeeds:i,mapTile:v,setMapTile:j}=e,[b,m]=(0,f.useState)(!1);return(0,r.jsxs)(o.Z,{direction:"row",spacing:2,mx:"auto",children:[(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(s.Z,{children:"Seed Type"}),(0,r.jsx)(c.Z,{value:t,label:"Seed Type",onChange:e=>n(e.target.value),sx:{width:"200px"},required:!0,children:p.map((e,t)=>(0,r.jsx)(u.Z,{value:e,children:e},t))})]}),(0,r.jsx)(d.Z,{type:"number",label:"Num of Seeds",defaultValue:a,InputProps:{inputProps:{min:1,max:10,step:1}},error:b,helperText:b?"Must be between 1 and ".concat(10):"",onChange:e=>{var t;(t=e.target.value)&&t>=1&&t<=10?(i(Number(e.target.value)),m(!1)):m(!0)},sx:{width:"200px"},required:!0}),(0,r.jsxs)(o.Z,{direction:"row",alignItems:"center",spacing:2,marginLeft:"55px !important",children:[(0,r.jsxs)(s.Z,{sx:{fontSize:"12px"},children:["Map",(0,r.jsx)("br",{}),"View"]}),(0,r.jsx)(h.Z,{value:v,exclusive:!0,onChange:(e,t)=>!!t&&j(t),children:Object.entries(S).map((e,t)=>{let[n,a]=e;return(0,r.jsx)(g.Z,{value:a.url,children:(0,r.jsx)(x.Z,{title:n,children:a.icon})},t)})})]})]})}},1990:function(e,t,n){"use strict";n.d(t,{n:function(){return P},Z:function(){return _}});var r=n(5893),a=n(2293),i=n(155),o=n(5861),l=n(9008),s=n.n(l),c=n(5675),u=n.n(c),d=n(7294),h=n(1460),g=n(1774),x=n(3321),f=n(8456),p=n(8838),v=n.n(p),j=n(6486),b=n(1876).Buffer;let S=e=>{console.log("CHANGED:",e.target.value.getUint8(0)+"%")},m=e=>{let t=e.target;alert("Device ".concat(t.name," is disconnected."))},w=async e=>{console.log("Transmitting data:",e);let t="6e400001-b5a3-f393-e0a9-e50e24dcca9e";try{let n=await navigator.bluetooth.requestDevice({filters:[{name:"SPR",id:"TDh83w3Qnb1C+KOkhyvMUw=="}],optionalServices:[t]});n.addEventListener("gattserverdisconnected",m),window.onbeforeunload=function(){n.gatt.disconnect()},console.log("Device:",n);let r=await n.gatt.connect();console.log("Server:",r);let a=await r.getPrimaryService(t);console.log("Service:",a);let i=await a.getCharacteristic("6e400003-b5a3-f393-e0a9-e50e24dcca9e");console.log("rxCharacteristic:",i);let o=await a.getCharacteristic("6e400002-b5a3-f393-e0a9-e50e24dcca9e");console.log("txCharacteristic:",o),i.startNotifications().catch(e=>console.error("Failed to start notifications:",e)).then(()=>console.log("Notifications started")),i.addEventListener("characteristicvaluechanged",S);let l=JSON.stringify(e),s=b.from(l);console.log("txValue",s),o.writeValueWithoutResponse(s).then(()=>console.log("Wrote value:",s.toString())).catch(e=>console.error("Failed to write value:",e))}catch(c){console.error(c)}},Z=e=>{let{setLoading:t,coords:n,myPosition:r,setPath:a}=e;return async e=>{e.preventDefault(),t(!0),console.log("Coords received:",n);let i=function(e,t){let n,r,a=(0,j.cloneDeep)(t),i=e,o=[];for(;a.length>0;){n=Number.MAX_VALUE;for(let l=0;l<a.length;l++){let s=a[l].latlng,c=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r=e.lat,a=e.lng,i=t.lat,o=t.lng;var l=Math.PI*r/180,s=Math.PI*i/180,c=Math.sin(l)*Math.sin(s)+Math.cos(l)*Math.cos(s)*Math.cos(Math.PI*(a-o)/180);return c=180*(c=Math.acos(c))/Math.PI*69.09,"K"==n&&(c*=1.609344),"M"==n&&(c*=.8684),c}(i,s);c<n&&(n=c,r=s)}v()(!!r,"Closest point should be defined"),i=r,o.push(r),a=a.filter(e=>e.latlng!==r)}return o}(r,n);console.log("Computed path:",i),a(i),await w(i),t(!1)}};function M(e){let{loading:t,...n}=e;return(0,r.jsx)(x.Z,{variant:"contained",startIcon:t?(0,r.jsx)(f.Z,{size:20}):(0,r.jsx)(g.Z,{}),sx:{ml:"auto"},type:"submit",...n,children:"Start Planting"})}let P="100px",C="#f3dabc";function _(e){let[t,n]=(0,d.useState)(!1),{coords:l}=e;return(0,r.jsx)("form",{onSubmit:Z({...e,setLoading:n}),children:(0,r.jsx)(a.Z,{position:"static",variant:"outlined",elevation:0,sx:{bgcolor:C},children:(0,r.jsxs)(i.Z,{variant:"dense",sx:{bgcolor:C,color:"rgb(100,100,100)"},children:[(0,r.jsx)(s(),{children:(0,r.jsx)("title",{children:"Seed Planting Robot"},"title")}),(0,r.jsx)(u(),{src:"logo.png",alt:"",width:100,height:100}),(0,r.jsxs)(o.Z,{variant:"h5",component:"span",sx:{lineHeight:1,fontWeight:500,letterSpacing:1,ml:1},children:[(0,r.jsx)("strong",{children:"S"}),"eed ",(0,r.jsx)("br",{}),(0,r.jsx)("strong",{children:"P"}),"lanting ",(0,r.jsx)("br",{}),(0,r.jsx)("strong",{children:"R"}),"obot"]}),(0,r.jsx)(h.ZP,{...e}),(0,r.jsx)(M,{loading:t,disabled:t||0==l.length})]})})})}},5970:function(e,t,n){"use strict";n.r(t),n.d(t,{DEFAULT_CENTER:function(){return d},default:function(){return h}});var r=n(5893),a=n(1460),i=n(1990),o=n(1458),l=n(7357),s=n(5152),c=n.n(s),u=n(7294);let d={lat:53.527,lng:-113.53};function h(){let[e,t]=(0,u.useState)(a.TU[0]),[s,h]=(0,u.useState)(1),[g,x]=(0,u.useState)(a.Un.Satellite.url),[f,p]=(0,u.useState)([]),[v,j]=(0,u.useState)(d),[b,S]=(0,u.useState)([]),m=(0,u.useMemo)(()=>c()(()=>Promise.all([n.e(269),n.e(160)]).then(n.bind(n,160)),{loadableGenerated:{webpack:()=>[160]},loading:()=>(0,r.jsx)(o.Z,{}),ssr:!1}),[]),w={seed:e,setSeed:t,numSeeds:s,setNumSeeds:h,mapTile:g,setMapTile:x,coords:f,setCoords:p,myPosition:v,setMyPosition:j,path:b,setPath:S};return(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(i.Z,{...w}),(0,r.jsx)(m,{...w})]})}}},function(e){e.O(0,[662,91,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);