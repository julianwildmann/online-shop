(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(45)},21:function(e,t,n){},40:function(e,t,n){e.exports=n.p+"static/media/product-image-1.ec7af2a2.png"},41:function(e,t,n){e.exports=n.p+"static/media/product-image-2.e52ce555.png"},42:function(e,t,n){e.exports=n.p+"static/media/product-image-3.d774c01c.png"},43:function(e,t,n){e.exports=n.p+"static/media/product-image-4.54605eea.png"},44:function(e,t,n){e.exports=n.p+"static/media/product-image-5.8f614533.png"},45:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(13),c=n.n(r),o=n(1),l=n(2),s=n(4),u=n(3),d=n(5),m=(n(21),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Eames Side Chair"))}}]),t}(a.a.Component)),p=n(14),h=n.n(p),f=(n(39),function(e){function t(){var e,i;Object(o.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(i=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).items=[n(40),n(41),n(42),n(43),n(44)],i.state={currentIndex:0,responsive:{1024:{items:1}},galleryItems:i.galleryItems()},i.slideTo=function(e){return i.setState({currentIndex:e})},i.onSlideChanged=function(e){return i.setState({currentIndex:e.item})},i.slideNext=function(){return i.setState({currentIndex:i.state.currentIndex+1})},i.slidePrev=function(){return i.setState({currentIndex:i.state.currentIndex-1})},i.thumbItem=function(e,t){return a.a.createElement("span",{onClick:function(){return i.slideTo(t)}},a.a.createElement("img",{src:e,alt:"productimage+i",width:"100px"}))},i}return Object(d.a)(t,e),Object(l.a)(t,[{key:"galleryItems",value:function(){return this.items.map(function(e){return a.a.createElement("img",{key:e,src:e,alt:"productimage+i",width:"300px"})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.galleryItems,i=t.responsive,r=t.currentIndex;return a.a.createElement("div",null,a.a.createElement(h.a,{dotsDisabled:!1,buttonsDisabled:!0,items:n,responsive:i,slideToIndex:r,onSlideChanged:this.onSlideChanged,infinite:!1,keysControlDisabled:!1,playButtonEnabled:!1,autoPlay:!1,showSlideIndex:!0}),a.a.createElement("ul",null,this.items.map(this.thumbItem)),a.a.createElement("button",{onClick:function(){return e.slidePrev()}},"Prev button"),a.a.createElement("button",{onClick:function(){return e.slideNext()}},"Next button"))}}]),t}(a.a.Component)),b=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"Heading"},a.a.createElement("h1",null,"Produktbeschreibung"),a.a.createElement("p",null,"Beim Dining Height Side Chair Wood Base (DSW) kombinierten Charles und Ray Eames die organische Sitzschale mit einem Vierbein-Holzuntergestell. Die Kombination von Kunststoff und Holz verleiht dem Klassiker eine gewisse W\xe4rme, eine besonders wohnliche Note. Die Sitzschalen k\xf6nnen mit Sitzpolstern oder einer kompletten Polsterung ausgestattet werden, deren Auswahl an Stofffarben eine Vielzahl von individuellen Konfigurationen erm\xf6glicht."))}}]),t}(a.a.Component),g=function(e){function t(){var e,n;Object(o.a)(this,t);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={todos:[{id:1,title:"Take out the trash",completed:!1},{id:2,title:"Dinner with wife",completed:!1},{id:3,title:"Meeting with boss",completed:!1}]},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log(this.state.todos),a.a.createElement("div",{className:"App"},a.a.createElement(m,null),a.a.createElement(f,null),a.a.createElement(b,null))}}]),t}(i.Component);c.a.render(a.a.createElement(g,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d80a6bad.chunk.js.map