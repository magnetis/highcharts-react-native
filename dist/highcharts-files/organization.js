/*
 Highcharts JS v7.1.1 (2019-04-09)
 Organization chart series type

 (c) 2019-2019 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define("highcharts/modules/organization",["highcharts","highcharts/modules/sankey"],function(e){b(e);b.Highcharts=e;return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){function e(b,e,l,a){b.hasOwnProperty(e)||(b[e]=a.apply(null,l))}b=b?b._modules:{};e(b,"modules/organization.src.js",[b["parts/Globals.js"]],function(b){var e=b.pick,l=b.seriesTypes.sankey.prototype;
b.seriesType("organization","sankey",{borderColor:"#666666",borderRadius:3,linkRadius:10,borderWidth:1,dataLabels:{nodeFormatter:function(){function a(a){return Object.keys(a).reduce(function(c,d){return c+d+":"+a[d]+";"},'style\x3d"')+'"'}var c={width:"100%",height:"100%",display:"flex","flex-direction":"row","align-items":"center","justify-content":"center"},g={"max-height":"100%","border-radius":"50%"},d={width:"100%",padding:0,"text-align":"center","white-space":"normal"},b={margin:0},f={margin:0},
k={opacity:.75,margin:"5px"};this.point.image&&(g["max-width"]="30%",d.width="70%");this.series.chart.renderer.forExport&&(c.display="block",d.position="absolute",d.left=this.point.image?"30%":0,d.top=0);c="\x3cdiv "+a(c)+"\x3e";this.point.image&&(c+='\x3cimg src\x3d"'+this.point.image+'" '+a(g)+"\x3e");c+="\x3cdiv "+a(d)+"\x3e";this.point.name&&(c+="\x3ch4 "+a(b)+"\x3e"+this.point.name+"\x3c/h4\x3e");this.point.title&&(c+="\x3cp "+a(f)+"\x3e"+(this.point.title||"")+"\x3c/p\x3e");this.point.description&&
(c+="\x3cp "+a(k)+"\x3e"+this.point.description+"\x3c/p\x3e");return c+"\x3c/div\x3e\x3c/div\x3e"},style:{fontWeight:"normal",fontSize:"13px"},useHTML:!0},hangingIndent:20,linkColor:"#666666",linkLineWidth:1,nodeWidth:50,tooltip:{nodeFormat:"{point.name}\x3cbr\x3e{point.title}\x3cbr\x3e{point.description}"}},{pointAttribs:function(a,c){var g=l.pointAttribs.call(this,a,c),d=this.mapOptionsToLevel[a.isNode?a.level:a.fromNode.level],b=a.options,f=d.states[c]||{};c=["borderRadius","linkColor","linkLineWidth"].reduce(function(a,
c){a[c]=e(f[c],b[c],d[c]);return a},{});a.isNode?c.borderRadius&&(g.r=c.borderRadius):(g.stroke=c.linkColor,g["stroke-width"]=c.linkLineWidth,delete g.fill);return g},createNode:function(a){a=l.createNode.call(this,a);a.getSum=function(){return 1};return a},createNodeColumn:function(){var a=l.createNodeColumn.call(this);b.wrap(a,"offset",function(a,g,d){a=a.call(this,g,d);return g.hangsFrom?{absoluteTop:g.hangsFrom.nodeY}:a});return a},translateNode:function(a,c){l.translateNode.call(this,a,c);a.hangsFrom&&
(a.shapeArgs.height-=this.options.hangingIndent,this.chart.inverted||(a.shapeArgs.y+=this.options.hangingIndent));a.nodeHeight=this.chart.inverted?a.shapeArgs.width:a.shapeArgs.height},curvedPath:function(a,c){var g=[],d,b,f,k,e,h,n,m,p;for(d=0;d<a.length;d++)b=a[d][0],f=a[d][1],0===d?g.push("M",b,f):d===a.length-1?g.push("L",b,f):c?(k=a[d-1][0],h=a[d-1][1],e=a[d+1][0],n=a[d+1][1],k!==e&&h!==n&&(m=k<e?1:-1,p=h<n?1:-1,g.push("L",b-m*Math.min(Math.abs(b-k),c),f-p*Math.min(Math.abs(f-h),c),"C",b,f,b,
f,b+m*Math.min(Math.abs(b-e),c),f+p*Math.min(Math.abs(f-n),c)))):g.push("L",b,f);return g},translateLink:function(a){var c=a.fromNode,b=a.toNode,d=Math.round(this.options.linkLineWidth)%2/2,e=Math.floor(c.shapeArgs.x+c.shapeArgs.width)+d,f=Math.floor(c.shapeArgs.y+c.shapeArgs.height/2)+d,k=Math.floor(b.shapeArgs.x)+d,l=Math.floor(b.shapeArgs.y+b.shapeArgs.height/2)+d,h,n=this.options.hangingIndent;h=b.options.offset;var m=/%$/.test(h)&&parseInt(h,10),p=this.chart.inverted;p&&(e-=c.shapeArgs.width,
k+=b.shapeArgs.width);h=Math.floor(k+(p?1:-1)*(this.colDistance-this.nodeWidth)/2)+d;m&&(50<=m||-50>=m)&&(h=k=Math.floor(k+(p?-.5:.5)*b.shapeArgs.width)+d,l=b.shapeArgs.y,0<m&&(l+=b.shapeArgs.height));b.hangsFrom===c&&(this.chart.inverted?(f=Math.floor(c.shapeArgs.y+c.shapeArgs.height-n/2)+d,l=b.shapeArgs.y+b.shapeArgs.height):f=Math.floor(c.shapeArgs.y+n/2)+d,h=k=Math.floor(b.shapeArgs.x+b.shapeArgs.width/2)+d);a.plotY=1;a.shapeType="path";a.shapeArgs={d:this.curvedPath([[e,f],[h,f],[h,l],[k,l]],
this.options.linkRadius)}},alignDataLabel:function(a,c,g){if(g.useHTML){var d=a.shapeArgs.width,e=a.shapeArgs.height,f=this.options.borderWidth+2*this.options.dataLabels.padding;this.chart.inverted&&(d=e,e=a.shapeArgs.width);e-=f;d-=f;b.css(c.text.element.parentNode,{width:d+"px",height:e+"px"});b.css(c.text.element,{left:0,top:0,width:"100%",height:"100%",overflow:"hidden"});c.getBBox=function(){return{width:d,height:e}}}b.seriesTypes.column.prototype.alignDataLabel.apply(this,arguments)}})});e(b,
"masters/modules/organization.src.js",[],function(){})});
//# sourceMappingURL=organization.js.map
