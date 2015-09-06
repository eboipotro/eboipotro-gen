// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('eboipotro_gen.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__19662__delegate = function (x){
if(cljs.core.truth_(eboipotro_gen.core.on_js_reload)){
return cljs.core.apply.call(null,eboipotro_gen.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'eboipotro-gen.core/on-js-reload' is missing");
}
};
var G__19662 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__19663__i = 0, G__19663__a = new Array(arguments.length -  0);
while (G__19663__i < G__19663__a.length) {G__19663__a[G__19663__i] = arguments[G__19663__i + 0]; ++G__19663__i;}
  x = new cljs.core.IndexedSeq(G__19663__a,0);
} 
return G__19662__delegate.call(this,x);};
G__19662.cljs$lang$maxFixedArity = 0;
G__19662.cljs$lang$applyTo = (function (arglist__19664){
var x = cljs.core.seq(arglist__19664);
return G__19662__delegate(x);
});
G__19662.cljs$core$IFn$_invoke$arity$variadic = G__19662__delegate;
return G__19662;
})()
,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1441511234158