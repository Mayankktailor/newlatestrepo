(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2],{9869:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/success",function(){return n(8823)}])},8823:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=n(5893),r=n(7294),i=n(1664),o=n.n(i),s=n(3750),c=n(8524),l={};!function e(t,n,a,r){var i,o=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL);function s(){}function c(e){var a=n.exports.Promise,r=void 0!==a?a:t.Promise;return"function"==typeof r?new r(e):(e(s,s),null)}var l,u,h,d,f,m,g,b,p=(h=Math.floor(1e3/60),d={},f=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(l=function(e){var t=Math.random();return d[t]=requestAnimationFrame(function n(a){f===a||f+h-1<a?(f=a,delete d[t],e()):d[t]=requestAnimationFrame(n)}),t},u=function(e){d[e]&&cancelAnimationFrame(d[e])}):(l=function(e){return setTimeout(e,h)},u=function(e){return clearTimeout(e)}),{frame:l,cancel:u}),v=(b={},function(){if(m)return m;if(!a&&o){var t=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}",].join("\n");try{m=new Worker(URL.createObjectURL(new Blob([t])))}catch(n){return console,"function"==typeof console.warn&&console.warn("\uD83C\uDF8A Could not load worker",n),null}!function(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(n,a,r){if(g)return t(n,null),g;var i=Math.random().toString(36).slice(2);return g=c(function(a){function o(t){t.data.callback===i&&(delete b[i],e.removeEventListener("message",o),g=null,r(),a())}e.addEventListener("message",o),t(n,i),b[i]=o.bind(null,{data:{callback:i}})})},e.reset=function(){for(var t in e.postMessage({reset:!0}),b)b[t](),delete b[t]}}(m)}return m}),y={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function M(e,t,n){var a,r,i;return r=e&&null!=(a=e[t])?e[t]:y[t],n?n(r):r}function w(e){return e<0?0:Math.floor(e)}function x(e,t){return Math.floor(Math.random()*(t-e))+e}function C(e){return parseInt(e,16)}function k(e){return e.map(T)}function T(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:C(t.substring(0,2)),g:C(t.substring(2,4)),b:C(t.substring(4,6))}}function I(e){var t=M(e,"origin",Object);return t.x=M(t,"x",Number),t.y=M(t,"y",Number),t}function E(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function N(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function S(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*e.startVelocity+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*e.gravity,ovalScalar:.6,scalar:e.scalar}}function _(e,n){var i,s=!e,l=!!M(n||{},"resize"),u=M(n,"disableForReducedMotion",Boolean),h=o&&M(n||{},"useWorker")?v():null,d=s?E:N,f=!!e&&!!h&&!!e.__confetti_initialized,m="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function g(n){var o,g,b=u||M(n,"disableForReducedMotion",Boolean),v=M(n,"zIndex",Number);if(b&&m)return c(function(e){e()});s&&i?e=i.canvas:s&&!e&&(o=v,(g=document.createElement("canvas")).style.position="fixed",g.style.top="0px",g.style.left="0px",g.style.pointerEvents="none",g.style.zIndex=o,e=g,document.body.appendChild(e)),l&&!f&&d(e);var y={width:e.width,height:e.height};function C(){if(h){var t={getBoundingClientRect:function(){if(!s)return e.getBoundingClientRect()}};d(t),h.postMessage({resize:{width:t.width,height:t.height}});return}y.width=y.height=null}function T(){i=null,l&&t.removeEventListener("resize",C),s&&e&&(document.body.removeChild(e),e=null,f=!1)}return(h&&!f&&h.init(e),f=!0,h&&(e.__confetti_initialized=!0),l&&t.addEventListener("resize",C,!1),h)?h.fire(n,y,T):function(t,n,o){for(var s,l,u,h,f,m,g,b,v,y,C=M(t,"particleCount",w),T=M(t,"angle",Number),E=M(t,"spread",Number),N=M(t,"startVelocity",Number),_=M(t,"decay",Number),P=M(t,"gravity",Number),j=M(t,"drift",Number),F=M(t,"colors",k),O=M(t,"ticks",Number),z=M(t,"shapes"),R=M(t,"scalar"),L=I(t),A=C,B=[],V=e.width*L.x,D=e.height*L.y;A--;)B.push(S({x:V,y:D,angle:T,spread:E,startVelocity:N,color:F[A%F.length],shape:z[x(0,z.length)],ticks:O,decay:_,gravity:P,drift:j,scalar:R}));return i?i.addFettis(B):(s=e,h=n,b=B.slice(),v=s.getContext("2d"),y=c(function(e){function t(){m=g=null,v.clearRect(0,0,h.width,h.height),o(),e()}function n(){a&&!(h.width===r.width&&h.height===r.height)&&(h.width=s.width=r.width,h.height=s.height=r.height),h.width||h.height||(d(s),h.width=s.width,h.height=s.height),v.clearRect(0,0,h.width,h.height),(b=b.filter(function(e){return function(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.wobble+=t.wobbleSpeed,t.velocity*=t.decay,t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble);var n,a,r,i,o,s,c,l=t.tick++/t.totalTicks,u=t.x+t.random*t.tiltCos,h=t.y+t.random*t.tiltSin,d=t.wobbleX+t.random*t.tiltCos,f=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-l)+")",e.beginPath(),"circle"===t.shape)e.ellipse?e.ellipse(t.x,t.y,Math.abs(d-u)*t.ovalScalar,Math.abs(f-h)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):(n=e,a=t.x,r=t.y,i=Math.abs(d-u)*t.ovalScalar,o=Math.abs(f-h)*t.ovalScalar,s=Math.PI/10*t.wobble,c=2*Math.PI,n.save(),n.translate(a,r),n.rotate(s),n.scale(i,o),n.arc(0,0,1,0,c,void 0),n.restore());else if("star"===t.shape)for(var m=Math.PI/2*3,g=4*t.scalar,b=8*t.scalar,p=t.x,v=t.y,y=5,M=Math.PI/y;y--;)p=t.x+Math.cos(m)*b,v=t.y+Math.sin(m)*b,e.lineTo(p,v),m+=M,p=t.x+Math.cos(m)*g,v=t.y+Math.sin(m)*g,e.lineTo(p,v),m+=M;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(h)),e.lineTo(Math.floor(d),Math.floor(f)),e.lineTo(Math.floor(u),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}(v,e)})).length?m=p.frame(n):t()}m=p.frame(n),g=t}),(i={addFettis:function(e){return b=b.concat(e),y},canvas:s,promise:y,reset:function(){m&&p.cancel(m),g&&g()}}).promise)}(n,y,T)}return g.reset=function(){h&&h.reset(),i&&i.reset()},g}function P(){return i||(i=_(null,{useWorker:!0,resize:!0})),i}n.exports=function(){return P().apply(this,arguments)},n.exports.reset=function(){P().reset()},n.exports.create=_}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),l,!1);var u=l.exports;l.exports.create;var h=function(){var e=function(e,t){return Math.random()*(t-e)+e},t=Date.now()+5e3,n={startVelocity:30,spread:360,ticks:60,zIndex:0},a=setInterval(function(){var r=t-Date.now();if(r<=0)return clearInterval(a);var i=50*(r/5e3);u(Object.assign({},n,{particleCount:i,origin:{x:e(.1,.3),y:Math.random()-.2}})),u(Object.assign({},n,{particleCount:i,origin:{x:e(.7,.9),y:Math.random()-.2}}))},250)},d=function(){var e=(0,c.F)(),t=e.setCartItems,n=e.setTotalPrice,i=e.setTotalQuantities;return(0,r.useEffect)(function(){localStorage.clear(),t([]),n(0),i(0),h()},[]),(0,a.jsx)("div",{className:"success-wrapper",children:(0,a.jsxs)("div",{className:"success",children:[(0,a.jsx)("p",{className:"icon",children:(0,a.jsx)(s.Vno,{})}),(0,a.jsx)("h2",{children:"Thank you for your order!"}),(0,a.jsx)("p",{className:"email-msg",children:"Check your email inbox for the receipt."}),(0,a.jsxs)("p",{className:"description",children:["If you have any questions, please email",(0,a.jsx)("a",{className:"email",href:"mailto:mayank@xgentech.net",children:"mayank@xgentech.net"})]}),(0,a.jsx)(o(),{href:"/",children:(0,a.jsx)("button",{type:"button",width:"300px",className:"btn",children:"Continue Shopping"})})]})})}}},function(e){e.O(0,[13,774,888,179],function(){return e(e.s=9869)}),_N_E=e.O()}]);