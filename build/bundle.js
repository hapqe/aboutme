var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function s(e,t){e.appendChild(t)}function i(e,t,n){e.insertBefore(t,n||null)}function c(e){e.parentNode.removeChild(e)}function l(e){return document.createElement(e)}function u(){return e=" ",document.createTextNode(e);var e}function f(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function d(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function p(e,t,n,r){null===n?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}let m;function v(e){m=e}function h(){if(!m)throw new Error("Function called outside component initialization");return m}function b(){const e=h();return(t,n,{cancelable:r=!1}={})=>{const o=e.$$.callbacks[t];if(o){const a=function(e,t,{bubbles:n=!1,cancelable:r=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(e,n,r,t),o}(t,n,{cancelable:r});return o.slice().forEach((t=>{t.call(e,a)})),!a.defaultPrevented}return!0}}const g=[],_=[],y=[],w=[],x=Promise.resolve();let $=!1;function z(e){y.push(e)}const k=new Set;let P=0;function E(){const e=m;do{for(;P<g.length;){const e=g[P];P++,v(e),q(e.$$)}for(v(null),g.length=0,P=0;_.length;)_.pop()();for(let e=0;e<y.length;e+=1){const t=y[e];k.has(t)||(k.add(t),t())}y.length=0}while(g.length);for(;w.length;)w.pop()();$=!1,k.clear(),v(e)}function q(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(z)}}const A=new Set;let j;function M(e,t){e&&e.i&&(A.delete(e),e.i(t))}function L(e,t,n,r){if(e&&e.o){if(A.has(e))return;A.add(e),j.c.push((()=>{A.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function T(e){e&&e.c()}function C(e,n,a,s){const{fragment:i,on_mount:c,on_destroy:l,after_update:u}=e.$$;i&&i.m(n,a),s||z((()=>{const n=c.map(t).filter(o);l?l.push(...n):r(n),e.$$.on_mount=[]})),u.forEach(z)}function V(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function S(e,t){-1===e.$$.dirty[0]&&(g.push(e),$||($=!0,x.then(E)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function I(t,o,a,s,i,l,u,f=[-1]){const d=m;v(t);const p=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:o.target||d.$$.root};u&&u(p.root);let h=!1;if(p.ctx=a?a(t,o.props||{},((e,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&i(p.ctx[e],p.ctx[e]=o)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](o),h&&S(t,e)),n})):[],p.update(),h=!0,r(p.before_update),p.fragment=!!s&&s(p.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);p.fragment&&p.fragment.l(e),e.forEach(c)}else p.fragment&&p.fragment.c();o.intro&&M(t.$$.fragment),C(t,o.target,o.anchor,o.customElement),E()}v(d)}class B{$destroy(){V(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var F="undefined"!=typeof Float32Array?Float32Array:Array;function O(){var e=new F(16);return F!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function R(e,t){var n=t[0],r=t[1],o=t[2],a=t[3],s=t[4],i=t[5],c=t[6],l=t[7],u=t[8],f=t[9],d=t[10],p=t[11],m=t[12],v=t[13],h=t[14],b=t[15],g=n*i-r*s,_=n*c-o*s,y=n*l-a*s,w=r*c-o*i,x=r*l-a*i,$=o*l-a*c,z=u*v-f*m,k=u*h-d*m,P=u*b-p*m,E=f*h-d*v,q=f*b-p*v,A=d*b-p*h,j=g*A-_*q+y*E+w*P-x*k+$*z;return j?(j=1/j,e[0]=(i*A-c*q+l*E)*j,e[1]=(o*q-r*A-a*E)*j,e[2]=(v*$-h*x+b*w)*j,e[3]=(d*x-f*$-p*w)*j,e[4]=(c*P-s*A-l*k)*j,e[5]=(n*A-o*P+a*k)*j,e[6]=(h*y-m*$-b*_)*j,e[7]=(u*$-d*y+p*_)*j,e[8]=(s*q-i*P+l*z)*j,e[9]=(r*P-n*q-a*z)*j,e[10]=(m*x-v*y+b*g)*j,e[11]=(f*y-u*x-p*g)*j,e[12]=(i*k-s*E-c*z)*j,e[13]=(n*E-r*k+o*z)*j,e[14]=(v*_-m*w-h*g)*j,e[15]=(u*w-f*_+d*g)*j,e):null}function U(e,t,n,r){var o,a,s,i,c,l,u,f,d,p,m,v,h,b,g,_,y,w,x,$,z,k,P,E,q=r[0],A=r[1],j=r[2],M=Math.hypot(q,A,j);return M<1e-6?null:(q*=M=1/M,A*=M,j*=M,o=Math.sin(n),s=1-(a=Math.cos(n)),i=t[0],c=t[1],l=t[2],u=t[3],f=t[4],d=t[5],p=t[6],m=t[7],v=t[8],h=t[9],b=t[10],g=t[11],_=q*q*s+a,y=A*q*s+j*o,w=j*q*s-A*o,x=q*A*s-j*o,$=A*A*s+a,z=j*A*s+q*o,k=q*j*s+A*o,P=A*j*s-q*o,E=j*j*s+a,e[0]=i*_+f*y+v*w,e[1]=c*_+d*y+h*w,e[2]=l*_+p*y+b*w,e[3]=u*_+m*y+g*w,e[4]=i*x+f*$+v*z,e[5]=c*x+d*$+h*z,e[6]=l*x+p*$+b*z,e[7]=u*x+m*$+g*z,e[8]=i*k+f*P+v*E,e[9]=c*k+d*P+h*E,e[10]=l*k+p*P+b*E,e[11]=u*k+m*P+g*E,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}function D(){var e=new F(3);return F!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function G(){var e=new F(2);return F!=Float32Array&&(e[0]=0,e[1]=0),e}function H(t){let n,r,o,a;return{c(){n=l("div"),r=l("input"),d(r,"type","range"),d(r,"min","0"),d(r,"max","100"),r.value=t[0],d(r,"class","slider svelte-jjszio"),d(r,"id","myRange"),d(n,"class","slidecontainer svelte-jjszio")},m(e,c){i(e,n,c),s(n,r),o||(a=f(r,"input",t[1]),o=!0)},p(e,[t]){1&t&&(r.value=e[0])},i:e,o:e,d(e){e&&c(n),o=!1,a()}}}function N(e,t,n){const r=b();let{startValue:o=0}=t;return e.$$set=e=>{"startValue"in e&&n(0,o=e.startValue)},[o,function(e){r("slide",{value:e.target.value/100})}]}Math.hypot||(Math.hypot=function(){for(var e=0,t=arguments.length;t--;)e+=arguments[t]*arguments[t];return Math.sqrt(e)}),D(),function(){var e,t=(e=new F(4),F!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0),e)}(),function(){var e=G()}();class Y extends B{constructor(e){super(),I(this,e,N,H,a,{startValue:0})}}function W(t){let n;return{c(){n=l("h6"),n.textContent='No GPU adapter found! Try updating chrome and enabling the experimental flag "#enable-unsafe-webgpu" under "chrome://flags.',p(n,"color","black"),p(n,"justify-content","center"),p(n,"display","flex"),p(n,"position","absolute"),p(n,"bottom","0"),p(n,"width","100vw"),d(n,"class","svelte-rlzfdb")},m(e,t){i(e,n,t)},p:e,i:e,o:e,d(e){e&&c(n)}}}function K(t){let n,o,a,m,v,h,b,g,_,y,w,x,$,z,k,P,E,q,A,j,S,I,B,F,O,R,U,D,G,H,N,W,K,X,J,Q,Z,ee,te,ne,re,oe,ae,se,ie,ce,le,ue,fe,de;return a=new Y({props:{startValue:50}}),a.$on("slide",t[4]),g=new Y({props:{startValue:16}}),g.$on("slide",t[5]),$=new Y({props:{startValue:0}}),$.$on("slide",t[6]),j=new Y({props:{startValue:15}}),j.$on("slide",t[8]),R=new Y({props:{startValue:25}}),R.$on("slide",t[9]),N=new Y({props:{startValue:0}}),N.$on("slide",t[10]),Q=new Y({props:{startValue:0}}),Q.$on("slide",t[11]),ae=new Y({props:{startValue:0}}),ae.$on("slide",t[13]),{c(){n=l("div"),o=l("span"),T(a.$$.fragment),m=u(),v=l("h6"),v.textContent="iteration_count",h=u(),b=l("span"),T(g.$$.fragment),_=u(),y=l("h6"),y.textContent="fractal_power",w=u(),x=l("span"),T($.$$.fragment),z=u(),k=l("h6"),k.textContent="color",P=u(),E=l("h6"),E.textContent="[randomize]",q=u(),A=l("span"),T(j.$$.fragment),S=u(),I=l("h6"),I.textContent="noise",B=u(),F=l("div"),O=l("span"),T(R.$$.fragment),U=u(),D=l("h6"),D.textContent="chromatic_abberation",G=u(),H=l("span"),T(N.$$.fragment),W=u(),K=l("h6"),K.textContent="normal_strenght",X=u(),J=l("span"),T(Q.$$.fragment),Z=u(),ee=l("h6"),ee.textContent="randomness",te=u(),ne=l("h6"),ne.textContent="[reseed]",re=u(),oe=l("span"),T(ae.$$.fragment),se=u(),ie=l("h6"),ie.textContent="wobble_speed",ce=u(),le=l("h6"),le.textContent="- x -",d(v,"class","svelte-rlzfdb"),d(o,"class","svelte-rlzfdb"),d(y,"class","svelte-rlzfdb"),d(b,"class","svelte-rlzfdb"),d(k,"class","svelte-rlzfdb"),d(E,"class","bg-inverse svelte-rlzfdb"),d(x,"class","svelte-rlzfdb"),d(I,"class","svelte-rlzfdb"),d(A,"class","svelte-rlzfdb"),d(n,"class","svelte-rlzfdb"),d(D,"class","svelte-rlzfdb"),d(O,"class","svelte-rlzfdb"),d(K,"class","svelte-rlzfdb"),d(H,"class","svelte-rlzfdb"),d(ee,"class","svelte-rlzfdb"),d(ne,"class","bg-inverse svelte-rlzfdb"),d(J,"class","svelte-rlzfdb"),d(ie,"class","svelte-rlzfdb"),d(oe,"class","svelte-rlzfdb"),d(F,"class","right svelte-rlzfdb"),p(le,"position","absolute"),p(le,"bottom","0"),p(le,"width","100vw"),p(le,"text-align","center"),p(le,"margin","0"),p(le,"transform","translateY(-10px)"),d(le,"class","svelte-rlzfdb")},m(e,r){i(e,n,r),s(n,o),C(a,o,null),s(o,m),s(o,v),s(n,h),s(n,b),C(g,b,null),s(b,_),s(b,y),s(n,w),s(n,x),C($,x,null),s(x,z),s(x,k),s(x,P),s(x,E),s(n,q),s(n,A),C(j,A,null),s(A,S),s(A,I),i(e,B,r),i(e,F,r),s(F,O),C(R,O,null),s(O,U),s(O,D),s(F,G),s(F,H),C(N,H,null),s(H,W),s(H,K),s(F,X),s(F,J),C(Q,J,null),s(J,Z),s(J,ee),s(J,te),s(J,ne),s(F,re),s(F,oe),C(ae,oe,null),s(oe,se),s(oe,ie),i(e,ce,r),i(e,le,r),ue=!0,fe||(de=[f(E,"click",t[7]),f(ne,"click",t[12])],fe=!0)},p:e,i(e){ue||(M(a.$$.fragment,e),M(g.$$.fragment,e),M($.$$.fragment,e),M(j.$$.fragment,e),M(R.$$.fragment,e),M(N.$$.fragment,e),M(Q.$$.fragment,e),M(ae.$$.fragment,e),ue=!0)},o(e){L(a.$$.fragment,e),L(g.$$.fragment,e),L($.$$.fragment,e),L(j.$$.fragment,e),L(R.$$.fragment,e),L(N.$$.fragment,e),L(Q.$$.fragment,e),L(ae.$$.fragment,e),ue=!1},d(e){e&&c(n),V(a),V(g),V($),V(j),e&&c(B),e&&c(F),V(R),V(N),V(Q),V(ae),e&&c(ce),e&&c(le),fe=!1,r(de)}}}function X(e){let t,n,o,a,s,f,m,v,h,b,g,_,y,w,x,$,z,k,P;const E=[K,W],q=[];function A(e,t){return e[2]?0:1}return t=A(e),n=q[t]=E[t](e),{c(){n.c(),o=u(),a=l("h6"),a.innerHTML="|<br/>\n\t|<br/>\n\t+--",s=u(),f=l("h6"),f.innerHTML="|<br/>\n\t|<br/>\n\t--+",m=u(),v=l("div"),v.innerHTML='<h6 id="about-konrad" style="margin-top: 12px; height: fit-content;" class="black bg-inverse svelte-rlzfdb">about_konrad</h6>',h=u(),b=l("canvas"),g=u(),_=l("div"),_.innerHTML='<div id="me-wrapper" style="width: 60%; height: 60%;" class="svelte-rlzfdb"><h5 id="about-text" class="svelte-rlzfdb"></h5></div>',y=u(),w=l("link"),x=u(),$=l("link"),z=u(),k=l("link"),d(a,"class","black svelte-rlzfdb"),p(a,"position","absolute"),p(a,"bottom","0"),d(f,"class","black svelte-rlzfdb"),p(f,"position","absolute"),p(f,"bottom","0"),p(f,"right","0"),p(f,"text-align","right"),p(v,"width","100vw"),p(v,"display","flex"),p(v,"justify-content","center"),d(v,"class","svelte-rlzfdb"),d(b,"class","svelte-rlzfdb"),p(_,"position","absolute"),p(_,"width","100vw"),p(_,"height","100vh"),p(_,"top","0"),p(_,"left","0"),p(_,"display","flex"),p(_,"justify-content","center"),p(_,"align-items","center"),d(_,"class","svelte-rlzfdb"),d(w,"rel","preconnect"),d(w,"href","https://fonts.googleapis.com"),d($,"rel","preconnect"),d($,"href","https://fonts.gstatic.com"),d($,"crossorigin",""),d(k,"href","https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"),d(k,"rel","stylesheet")},m(n,r){q[t].m(n,r),i(n,o,r),i(n,a,r),i(n,s,r),i(n,f,r),i(n,m,r),i(n,v,r),i(n,h,r),i(n,b,r),e[14](b),i(n,g,r),i(n,_,r),i(n,y,r),i(n,w,r),i(n,x,r),i(n,$,r),i(n,z,r),i(n,k,r),P=!0},p(e,[a]){let s=t;t=A(e),t===s?q[t].p(e,a):(j={r:0,c:[],p:j},L(q[s],1,1,(()=>{q[s]=null})),j.r||r(j.c),j=j.p,n=q[t],n?n.p(e,a):(n=q[t]=E[t](e),n.c()),M(n,1),n.m(o.parentNode,o))},i(e){P||(M(n),P=!0)},o(e){L(n),P=!1},d(n){q[t].d(n),n&&c(o),n&&c(a),n&&c(s),n&&c(f),n&&c(m),n&&c(v),n&&c(h),n&&c(b),e[14](null),n&&c(g),n&&c(_),n&&c(y),n&&c(w),n&&c(x),n&&c($),n&&c(z),n&&c(k)}}}function J(e){var t=new Float32Array(16);let n=Math.tan(e.fieldOfView*Math.PI/360),r=e.aspectRatio*n;return t[0]=1/r,t[5]=1/n,t[10]=e.far/(e.far-e.near),t[14]=-e.far*e.near/(e.far-e.near),t[11]=1,t}function Q(e,t,n){class r{}function o(){return e=Math.random(),t=Math.random(),n=Math.random(),r=1,(o=new F(4))[0]=e,o[1]=t,o[2]=n,o[3]=r,o;var e,t,n,r,o}function a(){return[o(),o(),o()]}class s{constructor(){this.x=0,this.y=0,this.z=2,this.color=0,this.noise=.15,this.chromaticAberration=.25,this.normals=0,this.iterations=10,this.power=8,this.randomness=0,this.wobble=0,this.seed=100*Math.random(),this.colors=a();const e=new r;e.aspectRatio=c.clientWidth/c.clientHeight,e.fieldOfView=45,e.near=.1,e.far=100,this.mouse=G(),this.projection=J(e)}}let i,c,l=!1;async function u(){function e(){console.error('No GPU adapter found! Try enabling the experimental flag "#enable-unsafe-webgpu" under "chrome://flags"')}if(null==navigator.gpu)return void e();const t=await navigator.gpu.requestAdapter();t||e(),n(2,l=!0),document.getElementById("about-text").style.color="white",document.querySelectorAll("h6").forEach((e=>e.classList.remove("black")));const o=await t.requestDevice(),a=c.getContext("webgpu"),s=window.devicePixelRatio||1,u=[c.clientWidth*s,c.clientHeight*s],f=a.getPreferredFormat(t);a.configure({device:o,format:f,size:u});const d=o.createShaderModule({code:"// Vertex shader\r\n\r\nstruct VertexOutput {\r\n    @builtin(position) clip_position: vec4<f32>,\r\n    @location(0) position: vec3<f32>,\r\n    @location(1) ray: vec3<f32>,\r\n    @location(2) screen_coordinates: vec2<f32>\r\n};\r\n\r\nstruct InputData {\r\n    projection: mat4x4<f32>,\r\n    inverse_projection: mat4x4<f32>,\r\n    inverse_view: mat4x4<f32>,\r\n    camera_position: vec3<f32>,\r\n    time: f32,\r\n    color: f32,\r\n    noise: f32,\r\n    chromatic_aberration: f32,\r\n    iterations: f32,\r\n    power: f32,\r\n    normals: f32,\r\n    randomness: f32,\r\n    wobble_speed: f32,\r\n    seed: f32,\r\n    color1: vec4<f32>,\r\n    color2: vec4<f32>,\r\n    color3: vec4<f32>,\r\n};\r\n\r\n@group(0) @binding(0)\r\nvar<uniform> input_data: InputData;\r\n\r\n\r\nfn signed_distance_to_sphere(pos: vec3<f32>, radius: f32) -> f32 {\r\n    return length(pos) - radius;\r\n}\r\n\r\nfn signed_distance_to_cube(pos: vec3<f32>, size: f32) -> f32 {\r\n    let q = abs(pos) - size;\r\n    return length(max(q, vec3<f32>(0.0))) + min(max(q.x ,max(q.y, q.z)), 0.0);\r\n}\r\n\r\nstruct PolarSphere {\r\n    q: f32,\r\n    f: f32,\r\n    t: f32,\r\n}\r\n\r\nfn to_polar_sphere(pos: vec3<f32>) -> PolarSphere {\r\n    var sphere = PolarSphere();\r\n    sphere.q = length(pos);\r\n    sphere.f = atan2(pos.y, pos.x);\r\n    sphere.t = acos(pos.z / sphere.q);\r\n    return sphere;\r\n}\r\n\r\nfn pow_polar_sphere(sphere: PolarSphere, p: f32) -> PolarSphere {\r\n    var new_sphere = PolarSphere();\r\n    new_sphere.q = pow(sphere.q, p);\r\n    new_sphere.f = p * sphere.f;\r\n    new_sphere.t = p * sphere.t;\r\n    return new_sphere;\r\n}\r\n\r\nfn from_polar_sphere(sphere: PolarSphere) -> vec3<f32> {\r\n    return vec3(\r\n        sphere.q * sin(sphere.t) * cos(sphere.f),\r\n        sphere.q * sin(sphere.t) * sin(sphere.f),\r\n        sphere.q * cos(sphere.t)\r\n    );\r\n}\r\n\r\nfn signed_distance_to_sierpinsky(pos: vec3<f32>, iterations: u32, scale: f32) -> f32\r\n{\r\n    var z = pos;\r\n    \r\n\tlet a1 = vec3<f32>(1.0,1.0,1.0);\r\n\tlet a2 = vec3<f32>(-1.0,-1.0,1.0);\r\n\tlet a3 = vec3<f32>(1.0,-1.0,-1.0);\r\n\tlet a4 = vec3<f32>(-1.0,1.0,-1.0);\r\n\tvar c = vec3<f32>(0.0,0.0,0.0);\r\n\tlet n = 0;\r\n\tvar dist = 0.0;\r\n    var d = 0.0;\r\n    for (var i = 0u; i < iterations; i = i + 1u) {\r\n        c = a1;\r\n        dist = length(z-a1);\r\n        d = length(z-a2); if (d < dist) { c = a2; dist=d; }\r\n        d = length(z-a3); if (d < dist) { c = a3; dist=d; }\r\n        d = length(z-a4); if (d < dist) { c = a4; dist=d; }\r\n\t\tz = scale*z-c*(scale - 1.0);\r\n    }\r\n\r\n\treturn length(z) * pow(scale, f32(-n));\r\n}\r\n\r\nfn signed_distance_to_ocahedron(pos: vec3<f32>, size: f32) -> f32\r\n{\r\n    let p = abs(pos);\r\n    return (p.x+p.y+p.z-size)*0.57735027;\r\n}\r\n\r\nfn signed_distance_to_mandelbulb(pos: vec3<f32>, iterations: u32, power: f32) -> f32 {\r\n\tvar z = pos;\r\n\tvar q = 0.0;\r\n\tvar dr = 1.0;\r\n\r\n    for (var i = 0u; i < iterations; i = i + 1u) {\r\n        let polar = to_polar_sphere(z);\r\n        q = polar.q;\r\n\r\n\t\tif (q > 2.0) {\r\n            break;\r\n        }\r\n        \r\n\t\tdr =  pow(q, power - 1.0)*power*dr + 1.0;\r\n\t\t\r\n        let polar_pow = pow_polar_sphere(polar, power);\r\n\r\n        let pow_cartesian = from_polar_sphere(polar_pow);\r\n\r\n        z = pow_cartesian + pos;\r\n\t}\r\n\treturn 0.5*log(q)*q/dr;\r\n}\r\n\r\nfn rand(co: vec2<f32>) -> f32{\r\n  return fract(sin(dot(co.xy ,vec2<f32>(12.9898,78.233))) * 43758.5453);\r\n}\r\n\r\nfn rand_3d(coord: vec3<f32>) -> f32{\r\n    var c = abs(coord);\r\n    c = c % (10000.0 * vec3<f32>(1.0));\r\n\treturn fract(sin(dot(coord, vec3<f32>(12.9898, 78.233, 71.325))) * 43758.5453);\r\n}\r\n\r\nfn perlin_noise(coord: vec3<f32>) -> f32{\r\n    var c = coord;\r\n\tc = c * 20.0;\r\n\tc = c % (10000.0 * vec3<f32>(1.0));\r\n\t\r\n\tvar i: vec3<f32> = floor(c);\r\n\tvar f: vec3<f32> = fract(c);\r\n\r\n    var cube = array<array<array<f32, 2>, 2>, 2>();\r\n\tcube[0][0][0] = rand_3d(i) * 6.28318;\r\n\tcube[1][0][0] = rand_3d(i + vec3<f32>(1.0, 0.0, 0.0)) * 6.28318;\r\n\tcube[0][1][0] = rand_3d(i + vec3<f32>(0.0, 1.0, 0.0)) * 6.28318;\r\n\tcube[0][0][1] = rand_3d(i + vec3<f32>(0.0, 0.0, 1.0)) * 6.28318;\r\n\tcube[1][1][0] = rand_3d(i + vec3<f32>(1.0, 1.0, 0.0)) * 6.28318;\r\n\tcube[0][1][1] = rand_3d(i + vec3<f32>(0.0, 1.0, 1.0)) * 6.28318;\r\n\tcube[1][0][1] = rand_3d(i + vec3<f32>(1.0, 0.0, 1.0)) * 6.28318;\r\n\tcube[1][1][1] = rand_3d(i + vec3<f32>(1.0, 1.0, 1.0)) * 6.28318;\r\n\r\n    var vectors = array<array<array<vec3<f32>, 2>, 2>, 2>();\r\n\tvectors[0][0][0] = vec3(-sin(cube[0][0][0]), cos(cube[0][0][0]), -cos(cube[0][0][0]));\r\n\tvectors[1][0][0] = vec3(-sin(cube[1][0][0]), cos(cube[1][0][0]), -cos(cube[1][0][0]));\r\n\tvectors[0][1][0] = vec3(-sin(cube[0][1][0]), cos(cube[0][1][0]), -cos(cube[0][1][0]));\r\n\tvectors[0][0][1] = vec3(-sin(cube[0][0][1]), cos(cube[0][0][1]), -cos(cube[0][0][1]));\r\n\tvectors[1][1][0] = vec3(-sin(cube[1][1][0]), cos(cube[1][1][0]), -cos(cube[1][1][0]));\r\n\tvectors[0][1][1] = vec3(-sin(cube[0][1][1]), cos(cube[0][1][1]), -cos(cube[0][1][1]));\r\n\tvectors[1][0][1] = vec3(-sin(cube[1][0][1]), cos(cube[1][0][1]), -cos(cube[1][0][1]));\r\n\tvectors[1][1][1] = vec3(-sin(cube[1][1][1]), cos(cube[1][1][1]), -cos(cube[1][1][1]));\r\n\t\r\n    var dots = array<array<array<f32, 2>, 2>, 2>();\r\n\tdots[0][0][0] = dot(vectors[0][0][0], f);\r\n\tdots[1][0][0] = dot(vectors[1][0][0], f - vec3<f32>(1.0, 0.0, 0.0));\r\n\tdots[0][1][0] = dot(vectors[0][1][0], f - vec3<f32>(0.0, 1.0, 0.0));\r\n\tdots[0][0][1] = dot(vectors[0][0][1], f - vec3<f32>(0.0, 0.0, 1.0));\r\n\tdots[1][1][0] = dot(vectors[1][1][0], f - vec3<f32>(1.0, 1.0, 0.0));\r\n\tdots[0][1][1] = dot(vectors[0][1][1], f - vec3<f32>(0.0, 1.0, 1.0));\r\n\tdots[1][0][1] = dot(vectors[1][0][1], f - vec3<f32>(1.0, 0.0, 1.0));\r\n\tdots[1][1][1] = dot(vectors[1][1][1], f - vec3<f32>(1.0, 1.0, 1.0));\r\n\r\n\tvar cubic: vec3<f32> = f * f * (3.0 - 2.0 * f);\r\n\r\n\treturn mix(\r\n\t\tmix(\r\n\t\t\tmix(dots[0][0][0], dots[1][0][0], cubic.x),\r\n\t\t\tmix(dots[0][1][0], dots[1][1][0], cubic.x),\r\n\t\t\tcubic.y\r\n\t\t),\r\n\t\tmix(\r\n\t\t\tmix(dots[0][0][1], dots[1][0][1], cubic.x),\r\n\t\t\tmix(dots[0][1][1], dots[1][1][1], cubic.x),\r\n\t\t\tcubic.y\r\n\t\t),\r\n\t\tcubic.z\r\n\t) + 0.5;\r\n}\r\n\r\n// fn noise\r\n\r\nfn map(pos: vec3<f32>) -> f32 {\r\n    var repeat = cos(pos);\r\n    if(input_data.randomness != 0.0){\r\n        let r = perlin_noise(pos * input_data.randomness + input_data.seed + input_data.time * input_data.wobble_speed) * 2.0 - 1.0;\r\n        repeat = repeat + r;\r\n    }\r\n    let d3 = signed_distance_to_mandelbulb(repeat, u32(input_data.iterations), input_data.power);\r\n\r\n    return d3;\r\n\r\n    // return smooth_min(\r\n    //     d1,\r\n    //     d2,\r\n    //     .2\r\n    // );\r\n}\r\n\r\nfn colored_map(pos: vec3<f32>) -> vec2<f32> {\r\n    let otherpos = pos + vec3<f32>(.5 * sin(input_data.time), 0.0, 0.0);\r\n    let d1 = signed_distance_to_sphere(pos, 0.2);\r\n    let d2 = signed_distance_to_cube(otherpos, 0.1);\r\n\r\n    let m = smooth_min(\r\n        d1,\r\n        d2,\r\n        .2\r\n    );\r\n    \r\n    return vec2<f32>(m, clamp((d1 - d2) / .2, 0.0, 1.0));\r\n}\r\n\r\nfn smooth_min(a: f32, b: f32, smoothing: f32) -> f32 {\r\n    let h = max(smoothing - abs(a - b), 0.0) / smoothing;\r\n    return min(a, b) - h * h * h * smoothing / 6.0;\r\n}\r\n\r\nfn normal(pos: vec3<f32>) -> vec3<f32> {\r\n    let eps = 0.001;\r\n    \r\n    let normal = vec3<f32>(\r\n        map(pos + vec3<f32>(eps, 0.0, 0.0)) - map(pos + vec3<f32>(-eps, 0.0, 0.0)),\r\n        map(pos + vec3<f32>(0.0, eps, 0.0)) - map(pos + vec3<f32>(0.0, -eps, 0.0)),\r\n        map(pos + vec3<f32>(0.0, 0.0, eps)) - map(pos + vec3<f32>(0.0, 0.0, -eps))\r\n    );\r\n    return normalize(normal);\r\n}\r\n\r\nfn raymarch(position: vec3<f32>, ray: vec3<f32>) -> vec4<f32> {\r\n    var ret = vec4<f32>(1.0, 1.0, 1.0, 1.0);\r\n\r\n    let max_steps: u32 = 1024u;\r\n    let threshold: f32 = 0.001;\r\n\r\n    var t = 0.0;\r\n\r\n    var traveled = 0.0;\r\n\r\n    var glow_color = vec4<f32>(0.0, 0.0, 1.0, 1.0);\r\n    \r\n    for (var i = 0u; i < max_steps; i = i + 1u) {\r\n        let p = position + ray * t;\r\n\r\n        let d = map(p);\r\n        traveled = traveled + d;\r\n\r\n        if (d > 1000.0) {\r\n            break;\r\n        }\r\n\r\n        // ret.z = ret.z - .003;\r\n\r\n        if(d < threshold) {\r\n            let lightDir = normalize(vec3<f32>(0.0, 1.0, -1.0));\r\n\r\n            let color1 = vec3<f32>(217.0, 3.0, 104.0) / 255.0;\r\n            let color2 = vec3<f32>(241.0, 196.0, 15.0) / 255.0;\r\n            let color3 = vec3<f32>(34.0, 116.0, 165.0) / 255.0;\r\n\r\n            let color_difference = 10.0;\r\n\r\n            var steps = f32(i) / f32(max_steps);\r\n            steps = steps * 5.0 - 0.8;\r\n\r\n            let mix1 = mix(\r\n                input_data.color1.rgb, input_data.color2.rgb, \r\n                sin(steps * color_difference)\r\n            );\r\n\r\n            let mix2 = mix(\r\n                mix1, input_data.color3.rgb, \r\n                sin(steps * color_difference + color_difference / 2.0)\r\n            );\r\n\r\n            let color = mix(\r\n                vec3<f32>(1.0) * f32(i) / f32(max_steps) + .2, mix2 + abs(steps),\r\n                input_data.color\r\n            );\r\n            \r\n            \r\n            var l = 0.0;\r\n            if(input_data.normals != 0.0) {\r\n                l = dot(normal(p), lightDir);\r\n            }\r\n            ret = vec4<f32>(vec3<f32>(1.0) * color * mix(1.0, l, input_data.normals), 1.0);\r\n            break;\r\n        }\r\n\r\n        t = t + d;\r\n    }\r\n\r\n    return ret;\r\n}\r\n\r\n@stage(vertex)\r\nfn vs_main(\r\n    @builtin(vertex_index) in_vertex_index: u32,\r\n) -> VertexOutput {\r\n    var positions = array<vec2<f32>, 4>(\r\n        vec2<f32>(-1.0, -1.0),\r\n        vec2<f32>(1.0, -1.0),\r\n        vec2<f32>(-1.0, 1.0),\r\n        vec2<f32>(1.0, 1.0),\r\n    );\r\n\r\n    \r\n    var out: VertexOutput;\r\n    var pos = vec3<f32>(positions[in_vertex_index].xy, 0.0);\r\n    \r\n    out.clip_position = vec4<f32>(pos, 1.0);\r\n\r\n    out.position = pos;\r\n\r\n    out.screen_coordinates = pos.xy;\r\n\r\n    pos.z = 1.0;\r\n    out.ray = (input_data.projection * input_data.inverse_projection * vec4<f32>(pos, 1.0)).xyz;\r\n    \r\n    return out;\r\n}\r\n\r\n// Fragment shader\r\n    \r\n@stage(fragment)\r\nfn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {\r\n    let sphere_pos = vec3<f32>(0.0, 0.0, 2.0);\r\n\r\n    var color = raymarch(-input_data.camera_position + vec3<f32>(0.0, 0.0, -1.0), normalize(in.ray));\r\n    \r\n    let v = length(in.screen_coordinates / 5.0) / 1.0;\r\n\r\n    color.x = color.x - v;\r\n    color.y = color.y - v;\r\n    color.z = color.z - v;\r\n    return vec4<f32>(color);\r\n}\r\n "}),p=o.createShaderModule({code:"// Vertex shader\r\n\r\nstruct VertexOutput {\r\n    @builtin(position) clip_position: vec4<f32>,\r\n    @location(0) position: vec2<f32>,\r\n};\r\n\r\n\r\nstruct InputData {\r\n    projection: mat4x4<f32>,\r\n    inverse_projection: mat4x4<f32>,\r\n    inverse_view: mat4x4<f32>,\r\n    camera_position: vec3<f32>,\r\n    time: f32,\r\n    color: f32,\r\n    noise: f32,\r\n    chromatic_aberration: f32,\r\n    iterations: f32,\r\n    power: f32,\r\n    normals: f32,\r\n};\r\n\r\n@binding(0) @group(0) var postSampler: sampler;\r\n@binding(1) @group(0) var postTexture: texture_2d<f32>;\r\n@binding(2) @group(0) var<uniform> input_data: InputData;\r\n\r\n@stage(vertex)\r\nfn vs_main(\r\n    @builtin(vertex_index) in_vertex_index: u32,\r\n) -> VertexOutput {\r\n    var out: VertexOutput;\r\n\r\n    var positions = array<vec2<f32>, 4>(\r\n        vec2<f32>(-1.0, -1.0),\r\n        vec2<f32>(1.0, -1.0),\r\n        vec2<f32>(-1.0, 1.0),\r\n        vec2<f32>(1.0, 1.0),\r\n    );\r\n\r\n    out.clip_position = vec4<f32>(positions[in_vertex_index], 0.0, 1.0);\r\n\r\n    out.position = positions[in_vertex_index];\r\n    out.position.y = -out.position.y;\r\n\r\n    return out;\r\n}\r\n\r\nfn to_uv_coords(pos: vec2<f32>) -> vec2<f32> {\r\n    return vec2<f32>(\r\n        (pos.x + 1.0) * 0.5,\r\n        (pos.y + 1.0) * 0.5,\r\n    );\r\n}\r\n\r\nfn distort(pos: vec2<f32>, amount: f32) -> vec2<f32> {\r\n    return pos * (1.0 - length(pos) * amount);\r\n}\r\n\r\nfn sample(pos: vec2<f32>) -> vec4<f32> {\r\n    let uv = to_uv_coords(pos);\r\n    let image = textureSample(postTexture, postSampler, uv);\r\n    return image;\r\n}\r\n\r\nfn chromatic_aberration(pos: vec2<f32>, amount: f32, over_distort: f32) -> vec4<f32> {\r\n    let r = distort(pos, (amount - over_distort) * 1.50917);\r\n    let g = distort(pos, (amount) * 1.51124);\r\n    let b = distort(pos, (amount + over_distort) * 1.51690);\r\n\r\n    return vec4<f32>(\r\n        sample(r).r,\r\n        sample(g).g,\r\n        sample(b).b,\r\n        1.0\r\n    );\r\n}\r\n\r\nfn rand(co: vec2<f32>) -> f32{\r\n  return fract(sin(dot(co.xy ,vec2<f32>(12.9898,78.233))) * 43758.5453);\r\n}\r\n\r\nfn noise(pos: vec2<f32>, amount: f32) -> f32 {\r\n    let r = (rand(pos + input_data.time / 10.0) * 2.0 - 1.0);\r\n    return amount * r;\r\n}\r\n\r\n// Fragment shader\r\n@stage(fragment)\r\nfn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {\r\n    var image = chromatic_aberration(in.position,  input_data.chromatic_aberration * 0.1, input_data.chromatic_aberration * .03);\r\n    image = image + noise(in.position, input_data.noise);\r\n    return image;\r\n}"}),m=o.createTexture({size:u,format:f,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),v=o.createSampler({magFilter:"linear",minFilter:"linear"}),h=o.createRenderPipeline({vertex:{module:p,entryPoint:"vs_main"},fragment:{module:p,entryPoint:"fs_main",targets:[{format:f}]},primitive:{topology:"triangle-strip"}}),b=o.createRenderPipeline({vertex:{module:d,entryPoint:"vs_main"},fragment:{module:d,entryPoint:"fs_main",targets:[{format:f}]},primitive:{topology:"triangle-strip"}}),g=o.createBuffer({size:304,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),_=o.createBindGroup({layout:b.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:g}}]}),y=o.createBindGroup({layout:h.getBindGroupLayout(0),entries:[{binding:0,resource:v},{binding:1,resource:m.createView()},{binding:2,resource:{buffer:g}}]});var w={},x=performance.now();c.addEventListener("click",(e=>{n(1,c.requestPointerLock=c.requestPointerLock||c.webkitRequestPointerLock||c.mozRequestPointerLock,c),c.requestPointerLock()})),document.addEventListener("mousemove",(function(e){if(document.pointerLockElement===c||document.mozPointerLockElement===c||document.webkitPointerLockElement===c){var t=e.movementX||e.mozMovementX||e.webkitMovementX||0,r=e.movementY||e.mozMovementY||e.webkitMovementY||0;n(0,i.mouse[0]+=t,i),n(0,i.mouse[1]+=r,i)}}),!1),document.addEventListener("keydown",(e=>{w[e.key]=!0})),document.addEventListener("keyup",(e=>{w[e.key]=!1})),window.addEventListener("resize",(()=>{const e=new r;e.aspectRatio=c.clientWidth/c.clientHeight,e.fieldOfView=45,e.near=.1,e.far=100,n(0,i.projection=J(e),i)})),requestAnimationFrame((function e(){if(!a)return;const t=.01;let r=D();w.w&&(r[2]-=t),w.s&&(r[2]+=t),w.d&&(r[0]-=t),w.a&&(r[0]+=t),w.e&&(r[1]-=t),w.q&&(r[1]+=t),w.r;const s=o.createCommandEncoder();var c,l,u,f,d,p,v,$,z,k,P,E,q,A,j,M,L,T=(c=i.projection[0],l=i.projection[1],u=i.projection[2],f=i.projection[3],d=i.projection[4],p=i.projection[5],v=i.projection[6],$=i.projection[7],z=i.projection[8],k=i.projection[9],P=i.projection[10],E=i.projection[11],q=i.projection[12],A=i.projection[13],j=i.projection[14],M=i.projection[15],(L=new F(16))[0]=c,L[1]=l,L[2]=u,L[3]=f,L[4]=d,L[5]=p,L[6]=v,L[7]=$,L[8]=z,L[9]=k,L[10]=P,L[11]=E,L[12]=q,L[13]=A,L[14]=j,L[15]=M,L),C=O();U(C,C,i.mouse[0]/1e3,[0,1,0]),U(C,C,i.mouse[1]/300,[1,0,0]);let V=O();R(V,C);let S=r[1];r[1]=0,function(e,t,n){var r=t[0],o=t[1],a=t[2],s=n[3]*r+n[7]*o+n[11]*a+n[15];s=s||1,e[0]=(n[0]*r+n[4]*o+n[8]*a+n[12])/s,e[1]=(n[1]*r+n[5]*o+n[9]*a+n[13])/s,e[2]=(n[2]*r+n[6]*o+n[10]*a+n[14])/s}(r,r,C),n(0,i.x+=r[0],i),n(0,i.y+=S,i),n(0,i.z+=r[2],i);let I=O();R(I,T),function(e,t,n){var r=t[0],o=t[1],a=t[2],s=t[3],i=t[4],c=t[5],l=t[6],u=t[7],f=t[8],d=t[9],p=t[10],m=t[11],v=t[12],h=t[13],b=t[14],g=t[15],_=n[0],y=n[1],w=n[2],x=n[3];e[0]=_*r+y*i+w*f+x*v,e[1]=_*o+y*c+w*d+x*h,e[2]=_*a+y*l+w*p+x*b,e[3]=_*s+y*u+w*m+x*g,_=n[4],y=n[5],w=n[6],x=n[7],e[4]=_*r+y*i+w*f+x*v,e[5]=_*o+y*c+w*d+x*h,e[6]=_*a+y*l+w*p+x*b,e[7]=_*s+y*u+w*m+x*g,_=n[8],y=n[9],w=n[10],x=n[11],e[8]=_*r+y*i+w*f+x*v,e[9]=_*o+y*c+w*d+x*h,e[10]=_*a+y*l+w*p+x*b,e[11]=_*s+y*u+w*m+x*g,_=n[12],y=n[13],w=n[14],x=n[15],e[12]=_*r+y*i+w*f+x*v,e[13]=_*o+y*c+w*d+x*h,e[14]=_*a+y*l+w*p+x*b,e[15]=_*s+y*u+w*m+x*g}(T,T,C),o.queue.writeBuffer(g,0,new Float32Array(C));var B=performance.now();B=(B-x)/1e3,o.queue.writeBuffer(g,64,new Float32Array(I)),o.queue.writeBuffer(g,128,new Float32Array(V)),o.queue.writeBuffer(g,192,new Float32Array([i.x,i.y,i.z])),o.queue.writeBuffer(g,204,new Float32Array([B,i.color,i.noise,i.chromaticAberration,i.iterations,i.power,i.normals,i.randomness,i.wobble,i.seed])),o.queue.writeBuffer(g,244,new Float32Array(i.colors[0])),o.queue.writeBuffer(g,260,new Float32Array(i.colors[1])),o.queue.writeBuffer(g,276,new Float32Array(i.colors[2]));const G=a.getCurrentTexture().createView(),H={colorAttachments:[{view:m.createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},N={colorAttachments:[{view:G,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},Y=s.beginRenderPass(H);Y.setPipeline(b),Y.setBindGroup(0,_),Y.draw(4),Y.end();const W=s.beginRenderPass(N);W.setPipeline(h),W.setBindGroup(0,y),W.draw(4),W.end(),o.queue.submit([s.finish()]),requestAnimationFrame(e)}))}var f,d,p,m,v;f=0,d=0,p=-1,(m=new F(3))[0]=f,m[1]=d,m[2]=p,v=()=>{u(),n(0,i=new s);let e=document.getElementById("about-text"),t=`\n\t\t> New session started at ${(new Date).toLocaleString()}\n\t\t> Press enter or click to continue#\n\t\t>#\n\t\tlet me = new Konrad();#\n\t\techo me.name;\n\t\t> Konrad Hapke#\n\t\tclear# %\n\t\techo me.age;\n\t\t> 19\n\t\techo me.location;\n\t\t> Vienna, Austria\n\t\tclear# %\n\t\techo me.ask("What's up with the mandelbulb?");#\n\t\t> I'm glad you asked!\n\t\t> It's here, because it is just as intricate as I am.#\n\t\t> #\n\t\t> #\n\t\t> Sorry :/#\n\t\tclear# %\n\t\techo me.hobbies;\n\t\t> Bouldering#\n\t\t> Music#\n\t\t> 3D-Art#\n\t\t> Programming, hehe#\n\t\tclear# %\n\t\techo me.things_i_love;\n\t\t> The Programming Language Rust#\n\t\t> Everything Open Source#\n\t\t> Nature#\n\t\t> My family#\n\t\t> Everyone Codes#\n\t\tclear# %\n\t\techo me.things_i_hate;\n\t\t> People who don't use Linux (kidding)\n\t\t> People who don't use Rust (also kidding)\n\t\t> Closed Source Software\n\t\t> Graphical User Interfaces (not kidding)\n\t\tclear# %\n\t\techo me.ask("Why do you love Everything Codes?");\n\t\t> They offer the best zivi job, objectively.#\n\t\t> It's about programming.#\n\t\t> You offered a CS50 course, and that's how I got into coding.#\n\t\t> My friend Sami will also work there this summer.#\n\t\tclear# %\n\t\techo me.ask("How would you be helpful to Everything Codes?");\n\t\t> I love explaining code, so maybe I could help in the programs.#\n\t\t> I could create some 3D-Art... if that would be helpful :)#\n\t\t> I could help with the website.#\n\t\t> And pretty much anything else you need.#\n\t\tclear# %\n\t\techo me.ask("What did you do before Everything Codes?");\n\t\t> I was a student at the HTL Spengergasse.#\n\t\t> There I made about 5 feature-complete games in Unity.#\n\t\t> Made a daily Blender-Render for 168 days.#\n\t\t> I had an internship at Loytec, where I learned connecting Unix machines via TCP to automate buildings.#\n\t\t> SEO for some sites.#\n\t\t> An online Game for the Museum of Applied Arts.#\n\t\tclear# %\n\t\t> echo me.skills;\n\t\t> Unity and CSharp#\n\t\t> Rust#\n\t\t> Everything web#\n\t\t> Blender#\n\t\t> Collaborating, since a lot of my projects were group projects#\n\t\t> clear# %\n\t\techo "Alight, enough about Konrad."#\n\t\tps -e | grep konrad#\n\t\t> PID  TTY      TIME     CMD\n\t\t> 3213 ttys031  00:02:03 konrad.rs\n\t\tkill 3213#\n\t\t> Konrad has been terminated.#\n\t\tclear# %\n\t\t$\n\t\t`,r=5,o=0,a=!0;const c=new Audio("typing.mp3");c.loop=!0;let l=!1;function f(){c.play();let n=t[o];return"#"===n?(a=!1,c.pause(),o++,void(e.innerHTML+="<br>")):("%"===n&&(e.innerHTML="",o++,n=""),">"===n&&(r=5),"\n"===n&&(r=50,n="<br>")," "===n&&" "===t[o-1]&&(n="&nbsp;"),"$"===n?(a=!1,c.pause(),void(l=!0)):(e.innerHTML+=n,void setTimeout((()=>{o<t.length&&(f(),o++)}),r)))}function d(){l||(a?r=0:(r=50,a=!0,f()))}setTimeout((()=>{f()}),1e3),document.addEventListener("click",(()=>{d()})),document.addEventListener("keydown",(e=>{"Enter"===e.key&&d()})),document.getElementById("me-wrapper").addEventListener("click",(()=>{d()}));const p=new Audio("music.mp3");p.volume=.25,p.loop=!0,document.addEventListener("click",(()=>{p.play(),document.removeEventListener("click",(()=>{}))}))},h().$$.on_mount.push(v);return[i,c,l,a,e=>n(0,i.iterations=20*e.detail.value,i),e=>n(0,i.power=50*e.detail.value,i),e=>n(0,i.color=e.detail.value,i),()=>n(0,i.colors=a(),i),e=>n(0,i.noise=e.detail.value,i),e=>n(0,i.chromaticAberration=e.detail.value,i),e=>n(0,i.normals=e.detail.value,i),e=>n(0,i.randomness=e.detail.value/10,i),()=>n(0,i.seed=100*Math.random(),i),e=>n(0,i.wobble=e.detail.value/20,i),function(e){_[e?"unshift":"push"]((()=>{c=e,n(1,c)}))}]}return new class extends B{constructor(e){super(),I(this,e,Q,X,a,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
