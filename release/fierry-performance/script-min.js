var h=null;function k(){return function(){}}function l(a){return function(){return a}}
var r={"source/async/emitter":function(a){var b;a("../core/array");b=a("global_emitter");return function(){function a(){}a.prototype.T=function(b){return this.C().push(b)};a.prototype.Q=function(){var a,c,f,g;if(!this.Na){g=this.C();for(c=0,f=g.length;c<f;c++)a=g[c],b.L(a)}};a.prototype.C=function(){var b;return(b=this.U)!=h?b:this.U=[]};return a}()},"performance/create":function(a){group("/create");a("create/array");a("create/function");a("create/instanceof");a("create/object");a("create/primitives")},
"performance/create/primitives":function(){group("/create.primitives");test("boolean",{a:l(!0)});test("integer",{a:l(101)});test("float",{a:l(1.01)});test("string",{a:l("string")});test("regexp",{a:function(){return/regexp/}});group("/create.wrappers");test("boolean",{a:function(){return new Boolean(!0)}});test("integer",{a:function(){return new Number(101)}});test("float",{a:function(){return new Number(1.01)}});test("string",{a:function(){return new String("string")}});test("regexp",{a:function(){return/regexp/}});
group("/create.others");test("Date",{a:function(){return new Date}});test("Date.now",{a:function(){return Date.now()}})},"source/core/set":function(){var a=Array.prototype.slice;return{Ha:function(){var b,c,d,e,f,g,i,j;c=arguments[0];b=2<=arguments.length?a.call(arguments,1):[];e=c.slice();for(f=0,i=b.length;f<i;f++){c=b[f];for(g=0,j=c.length;g<j;g++)d=c[g],e.indexOf(d)===-1&&e.push(d)}return e},yb:function(){var b,c,d,e,f,g,i,j;c=arguments[0];b=2<=arguments.length?a.call(arguments,1):[];e=c.slice();
for(f=0,i=b.length;f<i;f++){c=b[f];for(g=0,j=c.length;g<j;g++)d=c[g],Env.hb.w(e,d)}return e}}},"source/async/scheduler":function(a){function b(b,a){return function(){return b.apply(a,arguments)}}var c,d,e,f,g,i;g=a("../core/app");i=a("../core/uid");c=a("array");d=a("function");f=function(){function a(){this.ba=b(this.ba,this);this.W={};this.u=[];this.G=10}a.prototype.ib=function(b,a,c){return(new d(b,c,this,a)).J()};a.prototype.wa=function(b,a){return(new c(a,b.slice(),this,this.G)).J()};a.prototype.ba=
function(){var b,a,c,d,f;d=this.u.shift()||[];f=[];for(a=0,c=d.length;a<c;a++)b=d[a],this.W[i(b)]=!1,f.push(b.execute());return f};a.prototype.cb=function(b,a){var c,d;if(this.W[i(b)])return!1;c=Math.max(0,(a/this.G<<0)-1);(d=this.u)[c]!=h||(d[c]=[]);this.u[c].push(b);return this.W[i(b)]=!0};a.prototype.start=function(){return this.gb=setInterval(this.ba,this.G)};a.prototype.stop=function(){return clearInterval(this.gb)};return a}();a=new f;a.start();e=new f;g.A("resume",function(){return e.start()});
g.A("pause",function(){return e.stop()});return{La:a,exec:function(b,a,c){return e.ib(b,a,c)},hb:function(b,a){return e.wa(b,a)}}},"performance/app":function(a){var b,c,d,e;e=a("/source/performance/registry");b=e.group;d=e.test;c=e.repeat;window.test=d;window.group=b;window.repeat=c;window.run=a("/source/performance/runner");a("array");a("create");a("function");a("object")},"source/performance/registry":function(a){function b(b,a){return function(){return b.apply(a,arguments)}}var c,d,e;e=a("test");
c=a("group");d=new (function(){function a(){this.ha=b(this.ha,this);this.ga=b(this.ga,this);this.sa=this.Y=this.aa=new c({name:""})}a.prototype.ga=function(b,a){var d,e;a==h&&(a={});d=this.ta(b);a.name=d[0];a.rb=d[1];e=this.get(this.Ya(a.name));d=new c(a,e);e.add(d);this.Y=d;if(a.rb)return this.sa=d};a.prototype.ta=function(b){var a;a=this.sa.name+".";return/^\//.test(b)?[b.substr(1),!0]:/^\+\//.test(b)?[a+b.substr(2),!0]:[a+b,!1]};a.prototype.Ya=function(b){var a;a=b.lastIndexOf(".");return a>-1?
b.substr(0,a):""};a.prototype.ha=function(b,a){var c,d;a==h&&(a={});a.name=b;c=a.group?this.get(a.group):this.Y;d=new e(a,c);return c.add(d,!1)};a.prototype.wb=function(b){b=this.ta(b)[0];return this.get(b).ob(this.Y)};a.prototype.get=function(b){var a,c,d;for(c=this.aa;b.length>0;)d=this.Ua(b),a=d[0],b=d[1],c=c.get(a);return c};a.prototype.Ua=function(b){var a;a=b.indexOf(".");if(a===-1)a=b.length;return[b.substr(0,a),b.substr(a+1)]};return a}());return{get:function(b){return d.get(b)},group:function(b,
a){return d.ga(b,a)},test:function(b,a){return d.ha(b,a)},repeat:function(b){return d.wb(b)}}},"performance/array/join":function(){group("/array.join");group("str");test(" 5 length -primitive",{b:function(){return this.c=["a","b","c","d","e"]},a:function(){var a,b,c,d,e,f;b="";e=this.c;f=[];for(c=0,d=e.length;c<d;c++)a=e[c],f.push(b+=b?"."+a:a);return f}});test(" 5 length -default-token",{b:function(){return this.c=["a","b","c","d","e"]},a:function(){return this.c.join()}});test(" 5 length -custom-token",
{b:function(){return this.c=["a","b","c","d","e"]},a:function(){return this.c.join(".-.")}});test(" 5 length -no-token",{b:function(){return this.c=["a","b","c","d","e"]},a:function(){return this.c.join("")}});test("10 length",{b:function(){return this.c="a,b,c,d,e,f,g,h,i,j".split(",")},a:function(){return this.c.join()}});test("40 length",{b:function(){return this.c="a,b,c,d,e,f,g,h,i,j,a,b,c,d,e,f,g,h,i,j,a,b,c,d,e,f,g,h,i,j,a,b,c,d,e,f,g,h,i,j".split(",")},a:function(){return this.c.join()}});
test("40 length -no-token",{b:function(){return this.c="a,b,c,d,e,f,g,h,i,j,a,b,c,d,e,f,g,h,i,j,a,b,c,d,e,f,g,h,i,j,a,b,c,d,e,f,g,h,i,j".split(",")},a:function(){return this.c.join("")}});group("recursive");test("small",{b:function(){return this.c=[["a","b","c","d"]]},a:function(){return this.c.join()}});test("standard",{b:function(){return this.c=["a",["b","c","d"],"e"]},a:function(){return this.c.join()}});test("recursive -big",{b:function(){return this.c=["a",["b","c","d","e"],"f","g",["h","i",
"j","k","l"]]},a:function(){return this.c.join()}});group("int");test("10 length -one-int",{b:function(){return this.c=["a","b","c","d","e","f","g","h","i",10]},a:function(){return this.c.join()}});test("10 length -all-ints",{b:function(){return this.c=[1,2,3,4,5,6,7,8,9,10]},a:function(){return this.c.join()}})},"source/performance/group":function(a){var b,c;c=a("../core/set");b=a("test");return function(){function a(b,c){this.n=b;this.parent=c;this.name=this.n.name;this.I=[];this.t=this.n.nb||[];
this.ma=this.n.ea||k();this.V=this.n.b||k();this.H=this.n.ub||0}a.prototype.add=function(b,a){var c,d,j,m;m=this.I;for(d=0,j=m.length;d<j;d++)if(c=m[d],c.name===b.name){if(a)return;throw Error("Node "+b.name+" already exists");}return this.I.push(b)};a.prototype.get=function(b){var a,c,d,j;this.name!==""&&(b=this.name+"."+b);j=this.I;for(c=0,d=j.length;c<d;c++)if(a=j[c],a.name===b)return a;throw Error("Node not found "+this.name+"."+b);};a.prototype.Ba=function(){var c,f,g,i,j;c=[];j=this.I;for(g=
0,i=j.length;g<i;g++)f=j[g],f instanceof b&&c.push(f),f instanceof a&&(c=c.concat(f.Ba()));return c};a.prototype.ob=function(a){var c,d,i,j,m;j=this.I;m=[];for(d=0,i=j.length;d<i;d++)c=j[d],c instanceof b&&m.push(a.add(c.lb(a),!0));return m};a.prototype.Ea=function(b){this.parent&&this.parent.Ea(b);this.V.call(b)};a.prototype.Da=function(b){this.ma.call(b);if(this.parent)return this.parent.Da(b)};a.prototype.za=function(){return this.parent?this.H||this.parent.za():this.H};a.prototype.ya=function(){return this.parent?
c.Ha(this.t,this.parent.ya()):this.t};return a}()},"performance/array/splice":function(a){var b;b=a("/source/core/math");group("/array.splice");test("     3",{a:function(){return["a","b","c"].splice(1,0,"f")}});test("    10",{a:function(){return"a,b,c,d,e,f,g,h,i,j".split(",").splice(5,0,"k")}});test("   100 -2x",{b:function(){var b;return this.c=function(){var a;a=[];for(b=0;b<=100;b++)a.push(b);return a}()},a:function(){this.c.splice(b.l(100),0,"a");return this.c.splice(b.l(100),1)}});test("   200 -2x",
{b:function(){var b;return this.c=function(){var a;a=[];for(b=0;b<=200;b++)a.push(b);return a}()},a:function(){this.c.splice(b.l(200),0,"a");return this.c.splice(b.l(200),1)}});test("   500 -2x",{b:function(){var b;return this.c=function(){var a;a=[];for(b=0;b<=500;b++)a.push(b);return a}()},a:function(){this.c.splice(b.l(500),0,"a");return this.c.splice(b.l(500),1)}});test(" 1 000 -2x",{b:function(){var b;return this.c=function(){var a;a=[];for(b=0;b<=1E3;b++)a.push(b);return a}()},a:function(){this.c.splice(b.l(1E3),
0,"a");return this.c.splice(b.l(1E3),1)}});test("10 000 -500-last -2x",{b:function(){var b;return this.c=function(){var a;a=[];for(b=0;b<=1E4;b++)a.push(b);return a}()},a:function(){this.c.splice(1E4-b.l(500),0,"a");return this.c.splice(1E4-b.l(500),1)}});test("10 000 -all-rand -2x",{b:function(){var b;return this.c=function(){var a;a=[];for(b=0;b<=1E4;b++)a.push(b);return a}()},a:function(){this.c.splice(b.l(1E4),0,"a");return this.c.splice(b.l(1E4),1)}})},"source/performance/environments":function(a){var b;
b=a("../core/assert");return new (function(){function a(){this.t={}}a.prototype.A=function(b,a){a.ea!=h||(a.ea=k());a.b!=h||(a.b=k());return this.t[b]=a};a.prototype.get=function(a){b(this.t[a],"Environment '"+a+"' not found");return this.t[a]};return a}())},"source/core/emitter":function(){var a=Array.prototype.slice;return function(){function b(){}b.prototype.T=function(b,a){return this.C(b).push(a)};b.prototype.Q=function(){var b,d,e,f,g;d=arguments[0];b=2<=arguments.length?a.call(arguments,1):
[];if(!this.Na){g=this.C(d);for(e=0,f=g.length;e<f;e++)d=g[e],d.apply(h,b)}};b.prototype.C=function(b){var a,e,f;a=(e=this.U)!=h?e:this.U={};return(f=a[b])!=h?f:a[b]=[]};return b}()},"source/core/array":function(){var a;return a={fa:function(b,a){var d,e,f,g;e=0;for(d=b.length-1;e<=d;)f=e+d>>1,g=b[f],g<a?e=f+1:d=f-1;return g===a?f:-(e+1)},kb:function(b,a,d){var e,f,g,i;f=0;for(e=b.length-1;f<=e;)g=f+e>>1,i=b[g],d(i,a)<0?f=g+1:e=g-1;return i===a?g:-(f+1)},w:function(b,a){var d;for(d=b.length;d--;)b[d]===
a&&b.splice(d,1)},R:function(b,a,d){var e;for(e=b.length;e--;)d(b[e],a)&&b.splice(e,1)},s:function(b,c){var d;d=a.fa(b,c);d<0&&(d=-1*(d+1));return b.splice(~~d,0,c)},S:function(b,c,d){d=a.kb(b,c,d);d<0&&(d=-1*(d+1));return b.splice(~~d,0,c)},Mb:function(b){var a,d,e;for(a=b.length;a--;)e=b[a],d=~~(Math.random()*a),b[a]=b[d],b[d]=e;return b},Ob:function(b){return Array.prototype.slice.call(b)},unique:function(b){var a,d,e,f,g;a={};for(f=0,g=b.length;f<g;f++)d=b[f],a[d]=!0;b=[];for(e in a)b.push(e);
return b}}},"performance/array/erase":function(a){var b;b=a("/source/core/array");group("/array.erase");group("existing");test(" 3 length",{a:function(){return b.w(["a","b","c"],"b")}});test("10 length",{a:function(){return b.w("a,b,c,d,e,f,g,h,i,j".split(","),"b")}});test("50 length",{a:function(){return b.w("a,b,c,d,e,f,g,h,i,j,a,-,c,d,e,f,g,h,i,j,a,-,c,d,e,f,g,h,i,j,a,-,c,d,e,f,g,h,i,j,a,-,c,d,e,f,g,h,i,j".split(","),"b")}});group("unexisting");test(" 3 length -unexisting",{a:function(){return b.w(["a",
"b","c"],"d")}});test("10 length -unexisting",{a:function(){return b.w("a,b,c,d,e,f,g,h,i,j".split(","),"k")}});test("50 length",{a:function(){return b.w("a,b,c,d,e,f,g,h,i,j,a,-,c,d,e,f,g,h,i,j,a,-,c,d,e,f,g,h,i,j,a,-,c,d,e,f,g,h,i,j,a,-,c,d,e,f,g,h,i,j".split(","),"z")}});group("custom",{b:function(){return this.e=function(b,a){return b===a}}});test(" 3 length",{a:function(){return b.R(["a","b","c"],"b",this.e)}});test("10 length",{a:function(){return b.R("a,b,c,d,e,f,g,h,i,j".split(","),"b",this.e)}});
test("50 length",{a:function(){return b.R("a,b,c,d,e,f,g,h,i,j,a,-,c,d,e,f,g,h,i,j,a,-,c,d,e,f,g,h,i,j,a,-,c,d,e,f,g,h,i,j,a,-,c,d,e,f,g,h,i,j".split(","),"b",this.e)}})},"source/core/assert":function(){return function(a,b){if(!a)throw Error(b);}},"source/async/async":function(){return function(){function a(b,a){this.G=b;this.eb=a;this.qa=0;this.m=!0}a.prototype.execute=k();a.prototype.start=function(){this.m=!0;return this.J()};a.prototype.stop=function(){return this.m=!1};a.prototype.J=function(){var b;
if(this.m&&(b=this.qa||this.G,b=this.eb.cb(this,b)))this.qa=0;return this};return a}()},"performance/object/foreach":function(){group("/object.foreach",{b:function(){this.o=0;return this.g={f:"a",d:"b",h:"c",j:"d",i:"e",p:"f",q:"g",k:"h",o:"i",z:"j"}}});test("for-in",{a:function(){var a,b,c;c=this.g;for(a in c)(b=c[a])&&this.o++}});test("keys",{a:function(){var a,b,c,d;b=Object.keys(this.g);for(c=0,d=b.length;c<d;c++)a=b[c],this.g[a]&&this.o++}})},"source/performance/console_visitor":k(),"performance/object":function(a){group("/object");
a("object/clone");a("object/foreach");a("object/get")},"performance/create/instanceof":function(a){var b;b=a("/source/core/emitter");group("/create.instanceof");test("class -true",{b:function(){return this.g=new b},a:function(){return this.g instanceof b}});test("class -false",{b:function(){return this.g=new b},a:function(){return this.g instanceof String}});test("string",{a:l(!1)})},"performance/create/object":function(a){var b;b=a("/source/core/emitter");group("/create.object");group("hash");test(" 0 length",
{a:function(){return{}}});test(" 5 length",{a:function(){return{f:1,d:2,h:3,j:4,i:5}}});test("10 length",{a:function(){return{f:1,d:2,h:3,j:4,i:5,p:6,q:7,k:8,o:9,z:10}}});group("nested");test(" 5 length",{a:function(){return{f:1,d:2,h:{h:3},j:4,i:{i:5}}}});test("10 length",{a:function(){return{f:1,d:2,h:{h:3},j:4,i:{i:5},p:6,q:7,k:{k:8},o:9,z:10}}});group("standard");test(" 0 length",{b:function(){return this.k={}},a:function(){return Object.create(this.k)}});test(" 5 length",{b:function(){return this.k=
{f:1,d:2,h:3,j:4,i:5}},a:function(){return Object.create(this.k)}});test("10 length",{b:function(){return this.k={f:1,d:2,h:3,j:4,i:5,p:6,q:7,k:8,o:9,z:10}},a:function(){return Object.create(this.k)}});group("class");test("core.App",{a:function(){return new b}});test("core.App -indirect",{b:function(){return this.types={app:b}},a:function(){return new this.types.app}});test("0 length -prototype",{b:function(){this.v=k();return this.v.prototype={}},a:function(){return new this.v}});test("5 length -prototype",
{b:function(){this.v=k();return this.v.prototype={f:l("a"),d:l("b"),h:l("c"),j:l("d"),i:l("e")}},a:function(){return new this.v}});test("2 length -prototype -nested",{b:function(){this.va=k();this.va.prototype={f:l("a"),d:l("b")};this.v=k();return this.v.prototype=new this.va},a:function(){return new this.v}})},"performance/object/get":function(a){var b;b=a("/source/core/object");group("/object.get");group("standard");test("depth-1",{b:function(){return this.g={f:"a",d:"b",h:"c"}},a:function(){return b.get(this.g,
["b"])}});test("depth-2",{b:function(){return this.g={f:"a",d:{j:"d",i:"e"},h:"c"}},a:function(){return b.get(this.g,["b","d"])}});test("depth-3",{b:function(){return this.g={f:"a",d:{j:{p:"f",q:"g"},i:"e"},h:"c"}},a:function(){return b.get(this.g,["b","d","g"])}});test("depth-4",{b:function(){return this.g={f:"a",d:{j:{p:{k:"h",o:"i"},q:"g"},i:"e"},h:"c"}},a:function(){return b.get(this.g,["b","d","f","i"])}});group("not-exist");test("depth-1",{b:function(){return this.g={f:"a",d:{j:{p:"f",q:"g"},
i:"e"},h:"c"}},a:function(){return b.get(this.g,["h","i","j"])}});test("depth-2",{b:function(){return this.g={f:"a",d:{j:{p:"f",q:"g"},i:"e"},h:"c"}},a:function(){return b.get(this.g,["b","h","i"])}});group("array");test("depth-2",{b:function(){return this.g={f:"a,b,c,d,e,f".split(",")}},a:function(){return b.get(this.g,["a","0"])}});test("depth-2 -array^2",{b:function(){return this.g=[0,1,[0,1,2],2]},a:function(){return b.get(this.g,["2","2"])}});test("depth-2 -int-path",{b:function(){return this.g=
{f:"a,b,c,d,e,f".split(",")}},a:function(){return b.get(this.g,["a",0])}});test("depth-3",{b:function(){return this.g={f:{d:"a,b,c,d,e,f".split(",")}}},a:function(){return b.get(this.g,["a","b","0"])}});test("depth-3 -array^2",{b:function(){return this.g={f:["a",["b","c","d"],"e","f"]}},a:function(){return b.get(this.g,["a","1","1"])}});test("depth-4",{b:function(){return this.g={f:["a",{d:[0,1,2,3,4]},"b","c"]}},a:function(){return b.get(this.g,["a","1","b","2"])}})},"source/core/lang":function(){return{Cb:function(a){return Array.isArray(a)},
Jb:function(a){return typeof a==="string"||a.toString()==="[object String]"},Gb:function(a){return typeof a==="number"||a.toString()==="[object Number]"},Db:function(a){return typeof a==="boolean"||a.toString()==="[object Boolean]"},Fb:function(a){return typeof a==="function"||a.toString()==="[object Function]"},Hb:function(a){return typeof a==="object"&&a.toString()==="[object Object]"},Eb:function(a){return a instanceof Date},Ib:function(a){return a instanceof RegExp}}},"source/performance/events":function(a){function b(b,
a){return function(){return b.apply(a,arguments)}}var c,d;d=a("../core/string");c=a("settings");return function(){function a(){this.ja=b(this.ja,this);this.ia=b(this.ia,this);this.ka=b(this.ka,this);this.Qa=0;this.O=""}a.prototype.ka=function(b){return console.log("Found",b.length,"test cases.")};a.prototype.ia=function(b){var a;a=b.group.name;a!==this.O&&this.fb(a);if(this.Za())return console.log(this.Va(b),this.Wa(b),"  ops/ms")};a.prototype.ja=function(){var b,a,d;d=[];for(b=0,a=this.ra();0<=a?
b<=a:b>=a;0<=a?b+=1:b-=1)d.push(console.groupEnd());return d};a.prototype.fb=function(b){var a,d,c,e;a=b.split(".");e=this.O.split(".");for(d=0;a[d]===e[d];)d++;for(c=d,e=e.length-1;d<=e?c<=e:c>=e;d<=e?c+=1:c-=1)console.groupEnd();for(c=d,e=a.length-1;d<=e?c<=e:c>=e;d<=e?c+=1:c-=1)console.group(a[c]);this.O=b};a.prototype.ra=function(){return this.O.split(".").length-1};a.prototype.Va=function(b){return d.xb(b.name,this.Xa())};a.prototype.Wa=function(b){b=b.Aa().pb().toFixed(2);b=b.replace(/(\d+)(\d{3})(\.\d{2})/,
"$1 $2$3");return d.sb(b,10)};a.prototype.Za=function(){return++this.Qa%c.la===0};a.prototype.Xa=function(){return 50-this.ra()*2};return a}()},"performance/function/view_representation":function(){var a;a=function(){return k()}();group("/function.view",{b:function(){this.Pb=k();this.Qb=k();this.Rb=k();return this.Kb=function(){return[]}}});test("inside -arr",{b:function(){return this.r=function(){var b,c;c=k();b=[];b[0]=new a("type",c,function(){var b;c=k();b=[];b[0]=new a("type",c,function(){return[]});
return b});b[1]=new a("type",c,function(){var b;c=k();b=[];b[0]=new a("type",c,k());return b});return b}},a:function(){return this.r()}});test("inside -arr-push",{b:function(){return this.r=function(){var b,c;c=k();b=[];b.push(new a("type",c,function(){var b;c=k();b=[];b.push(new a("type",c,function(){return[]}));return b}));b.push(new a("type",c,function(){var b;c=k();b=[];b.push(new a("type",c,k()));return b}));return b}},a:function(){return this.r()}});test("inside -1",{b:function(){return this.r=
function(){var b;b=[];b.push(new a("type",k(),function(){b=[];b.push(new a("type",k(),function(){return[]}));return b}));b.push(new a("type",k(),function(){b=[];b.push(new a("type",k(),function(){return[]}));return b}));return b}},a:function(){return this.r()}});test("inside -1 -for",{b:function(){return this.r=function(){var b,c;b=[];b.push(new a("type",k(),function(){b=[];b.push(new a("type",k(),function(){return[]}));return b}));for(c=1;c<=1;c++)b.push(new a("type",k(),function(){b=[];b.push(new a("type",
k(),function(){return[]}));return b}));return b}},a:function(){return this.r()}});test("inside -1 -if",{b:function(){return this.r=function(){var b;b=[];b.push(new a("type",k(),function(){b=[];b.push(new a("type",k(),function(){return[]}));return b}));b.push(new a("type",k(),function(){b=[];b.push(new a("type",k(),function(){return[]}));return b}));return b}},a:function(){return this.r()}});test("inside -arr-literal",{b:function(){return this.r=function(){var b;b=k();return[new a("type",b,function(){b=
k();return[new a("type",b,function(){return[]})]}),new a("type",b,function(){b=k();return[new a("type",b,k())]})]}},a:function(){return this.r()}})},"source/core/uid":function(a){var b,c,d;c=a("oop");b=a("array");d={B:function(b){var a;return(a=b.Oa)!=h?a:b.Oa=++d.Ma},Ma:1,xa:function(b,a){return d.B(b)===d.B(a)},Fa:function(b,a){return d.B(b)-d.B(a)},Nb:function(b,a){return d.B(a)-d.B(b)},fa:function(a,c){return b.fa(c,a,d.Fa)},indexOf:function(b,a,c){var i;c==h&&(c=0);for(i=b.length;c++<i;)if(d.xa(b[c-
1],a))return c-1;return-1},w:function(a,c){return b.R(a,c,d.xa)},s:function(a,c){return b.S(a,c,d.Fa)}};return c.qb(d,d.B)},"performance/primitives":k(),"performance/array/foreach":function(){group("/array.foreach",{b:function(){this.o=0;return this.c="a,b,c,d,e,f,g,h,i,j".split(",")}});test("for-in",{a:function(){var a,b,c,d;d=this.c;for(b=0,c=d.length;b<c;b++)(a=d[b])&&this.o++}})},"source/performance/settings":function(){return{la:5,Ia:50,Ja:5,Ka:3}},"performance/array/index_of":function(a){var b,
c;c=a("/source/performance/registry");a=c.group;b=c.test;a("/array.indexOf");b("     0 length",{b:function(){return this.c=[]},a:function(){return this.c.indexOf("path")}});b("    10 length -first-found",{b:function(){return this.c="a,b,c,d,e,f,g,h,i,j".split(",")},a:function(){return this.c.indexOf("a")}});b("    10 length -middle-found",{b:function(){return this.c="a,b,c,d,e,f,g,h,i,j".split(",")},a:function(){return this.c.indexOf("d")}});b("    10 length -last-found",{b:function(){return this.c=
"a,b,c,d,e,f,g,h,i,j".split(",")},a:function(){return this.c.indexOf("j")}});b("    10 length -not-found",{b:function(){return this.c="a,b,c,d,e,f,g,h,i,j".split(",")},a:function(){return this.c.indexOf("z")}});b("    40 length -found",{b:function(){return this.c="a,b,c,d,e,f,g,h,i,j,a,b,c,d,e,f,g,h,i,j,a,b,c,d,e,f,g,h,i,j,a,b,c,d,e,f,g,h,i,j".split(",")},a:function(){return this.c.indexOf("j")}});b("    40 length -not-found",{b:function(){return this.c="a,b,c,d,e,f,g,h,i,j,a,b,c,d,e,f,g,h,i,j,a,b,c,d,e,f,g,h,i,j,a,b,c,d,e,f,g,h,i,j".split(",")},
a:function(){return this.c.indexOf("z")}});b("   500 length",{b:function(){this.c=gen.Ga(500,5);return this.K=this.c[math.l(500)]},a:function(){return this.c.indexOf(this.K)}});b(" 5 000 length",{b:function(){this.c=gen.Ga(5E3,5);return this.K=this.c[math.l(5E3)]},a:function(){return this.c.indexOf(this.K)}});b("50 000 length",{b:function(){this.c=gen.Ga(5E4,5);return this.K=this.c[math.l(5E4)]},a:function(){return this.c.indexOf(this.K)}})},"source/core/app":function(){function a(b,a){return function(){return b.apply(a,
arguments)}}return new (function(){function b(){this.A=a(this.A,this);this.oa={stop:[],start:[],pause:[],resume:[]};this.m=this.Z=!1}b.prototype.start=function(){if(this.pa("start"))return this.P("start"),this.P("resume"),this.m=!0};b.prototype.stop=function(){if(this.pa("stop"))return this.m=!1,this.Z||this.P("pause"),this.P("stop")};b.prototype.pa=function(b){switch(b){case "stop":return this.m;case "start":return!this.m;case "pause":return this.m&&!this.Z;case "resume":return this.m&&this.Z}};
b.prototype.P=function(b){var a,e,f;f=this.oa[b];for(a=0,e=f.length;a<e;a++)b=f[a],b()};b.prototype.A=function(b,a){return this.oa[b].push(a)};return b}())},"performance/array":function(a){group("/array");a("array/concat");a("array/erase");a("array/foreach");a("array/insert");a("array/join");a("array/slice");a("array/splice")},"performance/array/concat":function(){group("/array.concat");test(" 5 length",{b:function(){this.f=["a","b","c"];return this.d=["d","e"]},a:function(){return this.f.concat(this.d)}});
test("10 length",{b:function(){this.f="a,b,c,d,e,f,g,h,i".split(",");return this.d=["k"]},a:function(){return this.f.concat(this.d)}});test("15 length",{b:function(){this.f="a,b,c,d,e,f,g,h,i,j".split(",");return this.d=["k","i","j","l","m"]},a:function(){return this.f.concat(this.d)}});test("40 length",{b:function(){this.f="a,b,c,d,e,f,g,h,i,j,a,b,c,d,e,f,g,h,i,j".split(",");return this.d="a,b,c,d,e,f,g,h,i,j,a,b,c,d,e,f,g,h,i,j".split(",")},a:function(){return this.f.concat(this.d)}})},"performance/create/array":function(){group("/create.array");
group("normal");test(" 0 length",{a:function(){return[]}});test(" 5 length",{a:function(){return[0,1,2,3,4]}});test("10 length",{a:function(){return[0,1,2,3,4,5,6,7,8,9]}});test("10 length -string",{a:function(){return"a,b,c,d,e,f,g,h,i,j".split(",")}});group("nested");test(" 5 length -nested -pre-created",{a:function(){return[0,1,[],2,[]]}});test("10 length -nested -pre-created",{a:function(){return[0,1,[],2,3,4,5,[],6,[]]}});test(" 5 length -nested",{a:function(){return[0,1,[],2,[]]}});test("10 length -nested",
{a:function(){return[0,1,[],2,3,4,5,[],6,[]]}})},"source/performance/test_result":function(){return function(){function a(){this.u=[]}a.prototype.A=function(b,a){if(a!==0)return this.u.push(b/a)};a.prototype.pb=function(){var b,a,d,e,f;a=0;f=this.u;for(d=0,e=f.length;d<e;d++)b=f[d],a+=b;return a/this.u.length};return a}()},"performance/function":function(a){group("/function");a("function/execute");a("function/view_representation")},"source/core/math":function(){var a=Array.prototype.slice;return{jb:function(b){var a,
d,e,f;d=0;for(e=0,f=b.length;e<f;e++)a=b[e],d+=a;return d/b.length},l:function(b){return b?Math.random()*b<<0:Math.random()},Lb:function(){var b,c,d,e,f;c=1<=arguments.length?a.call(arguments,0):[];d=0;for(e=0,f=c.length;e<f;e++)b=c[e],d+=1/(b*1E3);return 1/d/1E3}}},"performance/array/insert":function(a){var b;b=a("/source/core/array");group("/array.insert");group("start");test(" 3 length",{a:function(){return b.s(["b","c","e"],"a")}});test("10 length",{a:function(){return b.s("b,c,d,e,f,g,i,j,k,l".split(","),
"a")}});test("50 length",{a:function(){return b.s("b,b,b,b,b,b,b,b,b,b,c,c,c,c,c,c,c,c,c,c,d,d,d,d,d,d,d,d,d,d,f,f,f,f,f,f,f,f,f,f,g,g,g,g,g,g,g,g,g,g".split(","),"a")}});group("middle");test(" 3 length",{a:function(){return b.s(["b","c","e"],"d")}});test("10 length",{a:function(){return b.s("b,c,d,e,f,g,i,j,k,l".split(","),"h")}});test("50 length",{a:function(){return b.s("b,b,b,b,b,b,b,b,b,b,c,c,c,c,c,c,c,c,c,c,d,d,d,d,d,d,d,d,d,d,f,f,f,f,f,f,f,f,f,f,g,g,g,g,g,g,g,g,g,g".split(","),"e")}});group("end");
test(" 3 length",{a:function(){return b.s(["b","c","e"],"f")}});test("10 length",{a:function(){return b.s("b,c,d,e,f,g,i,j,k,l".split(","),"m")}});test("50 length",{a:function(){return b.s("b,b,b,b,b,b,b,b,b,b,c,c,c,c,c,c,c,c,c,c,d,d,d,d,d,d,d,d,d,d,f,f,f,f,f,f,f,f,f,f,g,g,g,g,g,g,g,g,g,g".split(","),"h")}});group("custom",{b:function(){return this.e=function(b,a){return b<a?-1:1}}});test(" 3 length",{a:function(){return b.S(["b","c","e"],"d",this.e)}});test("10 length",{a:function(){return b.S("b,c,d,e,f,g,i,j,k,l".split(","),
"h",this.e)}});test("50 length",{a:function(){return b.S("b,b,b,b,b,b,b,b,b,b,c,c,c,c,c,c,c,c,c,c,d,d,d,d,d,d,d,d,d,d,f,f,f,f,f,f,f,f,f,f,g,g,g,g,g,g,g,g,g,g".split(","),"e",this.e)}})},"source/performance/test":function(a){var b,c,d,e,f,g;c=a("../core/app");e=a("../core/math");f=a("../core/set");d=a("environments");g=a("settings");b=a("test_result");return function(){function a(b,c){this.n=b;this.group=c;this.$=[];this.name=this.n.name;this.bb=this.n.a;this.ma=this.n.ea||k();this.V=this.n.b||k();
this.H=this.n.ub||c.za();this.t=this.Ta(this.n.nb||[],this.group.ya())}a.prototype.lb=function(b){return new a(this.n,b)};a.prototype.Ta=function(b,a){var c,e,g,i,n;i=f.Ha(b,a);n=[];for(e=0,g=i.length;e<g;e++)c=i[e],n.push(d.get(c));return n};a.prototype.tb=function(){var b,a,c;if(this.D)return this.D;b=1;for(a=0;a===0;)a=this.a(b),b*=10;for(;a<g.Ja;)b*=2,a=this.a(b);a=function(){var a,d;d=[];for(c=1,a=g.Ka;1<=a?c<=a:c>=a;1<=a?c+=1:c-=1)d.push(this.a(b));return d}.call(this);this.D=g.Ia/e.jb(a)*b;
if(this.D<this.H)this.D=this.H;return this.D};a.prototype.a=function(b){var a,d,e,f;f=this.t;for(d=0,e=f.length;d<e;d++)a=f[d],a.b.call(this);this.group.Ea(this);this.V();c.start();a=new Date;for(d=0;0<=b?d<=b:d>=b;0<=b?d+=1:d-=1)this.bb();b=new Date;c.stop();this.group.Da(this);e=this.t;for(d=0,e=e.length;d<e;d++);return b-a};a.prototype.mb=function(){this.$.push(new b)};a.prototype.Aa=function(){return this.$[this.$.length-1]};return a}()},"source/performance/runner":function(a){function b(b,a){function c(){this.constructor=
b}for(var d in a)s.call(a,d)&&(b[d]=a[d]);c.prototype=a.prototype;b.prototype=new c;b.N=a.prototype}function c(b,a){return function(){return b.apply(a,arguments)}}var d,e,f,g,i,j,m,o,p,q,s=Object.prototype.hasOwnProperty;j=a("../core/app");m=a("../core/assert");o=a("../async/scheduler");p=a("registry");q=a("settings");i=a("test");f=a("group");e=a("events");d=a("../core/emitter");g=function(){function a(b,d){this.ca=c(this.ca,this);this.u=b;this.ua=this.ab(d)}b(a,d);a.prototype.ab=function(a){var b,
c,a=Array.prototype.slice.call(a).sort();for(c=1;c<a.length;)(b=a[c].indexOf(a[c-1]+".")===0)?a.splice(c,1):c++;return a};a.prototype.a=function(){var a,b;b=this.Sa(this.ua);a=this.Pa(b);this.Q("tests.found",b);m(a.length>0,"No test cases found for suites: "+this.ua);o.La.wa(a,this.ca)};a.prototype.ca=function(a,b){var c,d;j.stop();c=a.tb();d=a.a(c);a.Aa().A(c,d);this.Q("test.finished",a);if(b)return this.Q("tests.finished")};a.prototype.Sa=function(a){var b,c,d,e;c=[];for(d=0,e=a.length;d<e;d++)b=
a[d],b=this.u.get(b),b instanceof i&&c.push(b),b instanceof f&&(c=c.concat(b.Ba()));return c};a.prototype.Pa=function(a){var b,c,d,e,f,g;c=[];for(e=0,f=a.length;e<f;e++){d=a[e];d.mb();for(b=1,g=q.la;1<=g?b<=g:b>=g;1<=g?b+=1:b-=1)c.push(d)}return c};return a}();return function(){var a,b;b=new g(p,arguments);a=new e;b.T("tests.found",a.ka);b.T("test.finished",a.ia);b.T("tests.finished",a.ja);return b.a()}},"source/core/oop":function(){return{qb:function(a,b){var c,d;for(c in a)d=a[c],b[c]=d;return b}}},
"source/async/global_emitter":function(a){function b(a,b){return function(){return a.apply(b,arguments)}}var c,d;d=a("../core/uid");a=a("scheduler");c=new (function(){function a(){this.L=b(this.L,this);this.F=[];this.da=[]}a.prototype.vb=function(a){if(!this.da[d(a)])return this.da[d(a)]=!0,this.F.push(a)};a.prototype.L=function(){var a,b;a=0;for(b=this.F.length;a<b;)if(this.Ra(a++),a===b)b=this.F.length;return this.F=[]};a.prototype.Ra=function(a){a=this.F[a];a();this.da[d(a)]=!1};return a}());a.exec(c.L,
10,!0);return{L:function(a){return c.vb(a)}}},"source/async/array":function(a){function b(a,b){function c(){this.constructor=a}for(var i in b)d.call(b,i)&&(a[i]=b[i]);c.prototype=b.prototype;a.prototype=new c;a.N=b.prototype}var c,d=Object.prototype.hasOwnProperty;c=a("async");return function(){function a(b,c,d,j){this.X=b;this.na=c;a.N.constructor.call(this,j,d)}b(a,c);a.prototype.execute=function(){var a,b;if(this.m&&(a=this.na.shift(),b=this.na.length===0,this.X(a,b),this.J(),b))return this.m=
!1};return a}()},"source/core/object":function(){return{get:function(a,b){var c,d,e;for(d=0,e=b.length;d<e;d++){c=b[d];if(a===void 0)return;a=a[c]}return a},set:function(a,b,c){var i;var d,e,f,g;e=0;for(f=b.length-1;f--;)d=b[e++],i=(g=a[d])!=h?g:a[d]={},a=i;return a[b[e]]=c}}},"source/core/string":function(){return{sb:function(a,b){for(;a.length<b;)a=" "+a;return a},xb:function(a,b){for(;a.length<b;)a+=" ";return a}}},"performance/array/slice":function(){group("/array.slice");test("small -clone",
{b:function(){return this.c=["a","b","c","d","e"]},a:function(){return this.c.slice()}});test("standard -clone",{b:function(){return this.c="a,b,c,d,e,f,g,h,i,j".split(",")},a:function(){return this.c.slice()}});test("inx-1",{b:function(){return this.c="a,b,c,d,e,f,g,h,i,j".split(",")},a:function(){return this.c.slice(1)}});test("inx-5",{b:function(){return this.c="a,b,c,d,e,f,g,h,i,j".split(",")},a:function(){return this.c.slice(5)}});test("inx-9",{b:function(){return this.c="a,b,c,d,e,f,g,h,i,j".split(",")},
a:function(){return this.c.slice(9)}});test("big",{b:function(){return this.c="a,b,c,d,e,f,g,h,i,j,a,b,c,d,e,f,g,h,i,j,a,b,c,d,e,f,g,h,i,j,a,b,c,d,e,f,g,h,i,j".split(",")},a:function(){return this.c.slice(15)}})},"performance/create/function":function(){group("/create.function");test("1 line -empty",{a:function(){return k()}});test("1 line -simple",{a:function(){return function(a,b,c){return a+b+c}}});test("1 line -compex",{a:function(){return function(){return["a",["a","b","c"],"b",["a","b","c"],
"c"]}}});test("3 lines -simple",{a:function(){return function(a,b){var c;for(c=[];a!==b;)a++,c.push(b--);return c}}});test("3 lines -complex",{a:function(){return function(){return{x:["a",["a","b","c"],"b",["a","b","c"],"c"],y:[0,1,2,3,4,5,6,7,8,9,10]}}}})},"performance/object/clone":function(){group("/object.clone");test("for-in",{b:function(){return this.f={f:"a",d:"b",h:"c",j:"d",i:"e",p:"f",q:"g",k:"h",o:"i",z:"j"}},a:function(){var a,b,c;this.d={};c=this.f;for(a in c)b=c[a],this.d[a]=b}});test("keys",
{b:function(){this.keys="a,b,c,d,e,f,g,h,i,j".split(",");return this.f={f:"a",d:"b",h:"c",j:"d",i:"e",p:"f",q:"g",k:"h",o:"i",z:"j"}},a:function(){var a,b,c,d,e;this.d={};d=this.keys;e=[];for(b=0,c=d.length;b<c;b++)a=d[b],e.push(this.d[a]=this.f[a]);return e}});test("explicit",{b:function(){return this.f={f:"a",d:"b",h:"c",j:"d",i:"e",p:"f",q:"g",k:"h",o:"i",z:"j"}},a:function(){this.d={};this.d.f="a";this.d.d="b";this.d.h="c";this.d.j="d";this.d.i="e";this.d.p="f";this.d.q="g";this.d.k="h";this.d.o=
"i";return this.d.z="j"}})},"performance/function/execute":function(){group("/function.execute");test("empty",{b:function(){return this.e=k()},a:function(){return this.e()}});test("number",{b:function(){return this.e=l(0)},a:function(){return this.e()}});test("string",{b:function(){return this.e=l("string")},a:function(){return this.e()}});test("function",{b:function(){return this.e=function(){return l(0)}},a:function(){return this.e()}});test("array",{b:function(){return this.e=function(){return[]}},
a:function(){return this.e()}});test("array > hash -1",{b:function(){return this.e=function(){return[{M:1,type:"dummy"}]}},a:function(){return this.e()}});test("array > hash -1 -alternative",{b:function(){return this.e=function(){return[{M:1,type:"dummy"}]}},a:function(){return this.e()}});test("array > hash -2",{b:function(){return this.e=function(){return[{M:1,type:"dummy"},{M:2,type:"dummy"}]}},a:function(){return this.e()}});test("array > hash -2 -alternative",{b:function(){return this.e=function(){return[{M:1,
type:"dummy"},{M:2,type:"dummy"}]}},a:function(){return this.e()}});test("object",{b:function(){return this.e=function(){return{}}},a:function(){return this.e()}});test("hash",{b:function(){return this.e=function(){return{type:"value"}}},a:function(){return this.e()}});test("hash > function -1",{b:function(){return this.e=function(){return{type:"value",zb:l(0)}}},a:function(){return this.e()}});test("hash > function -2",{b:function(){return this.e=function(){return{type:"value",Ab:l(0),Bb:l(1)}}},
a:function(){return this.e()}});test("hash > function -3",{b:function(){return this.e=function(){return{type:"dummy",value:l(1),Ca:function(){return[]}}}},a:function(){return this.e()}});test("hash > function -workaround",{b:function(){var a,b;a={type:"dummy",value:l(1),Ca:function(){return[]}};b={type:"dummy",value:l(2),Ca:function(){return[]}};return this.e=function(){return[a,b]}},a:function(){return this.e()}})},"source/async/function":function(a){function b(a,b){function c(){this.constructor=
a}for(var i in b)d.call(b,i)&&(a[i]=b[i]);c.prototype=b.prototype;a.prototype=new c;a.N=b.prototype}var c,d=Object.prototype.hasOwnProperty;c=a("async");return function(){function a(b,c,d,j){this.X=b;this.$a=c;a.N.constructor.call(this,j,d)}b(a,c);a.prototype.execute=function(){if(this.m&&(this.X(),this.J(),!this.$a))return this.m=!1};return a}()}};
(function(){function a(d,e){var f=b(d,e);if(c.hasOwnProperty(f)){if(c[f]===-1)throw Error("Cyclic dependency found when requiring: "+f);return c[f]}if(r[f]==h)throw Error("Module not found: "+f);var g=f.substr(0,f.lastIndexOf("/"));return c[f]=r[f](function(b){return a(g,b)})}function b(a,b){if(b[0]==="/")return b.substr(1);for(var c=/[0-9a-zA-Z_]+\/\.\.\//,g=a+"/"+b;g.indexOf("../")>-1;)g=g.replace(c,"");return g}var c={};return function(b){return a("",b)}})()("/performance/app");