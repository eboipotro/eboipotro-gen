// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16490__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16490__auto__){
return or__16490__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16490__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25203_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25203_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__25208 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25209 = null;
var count__25210 = (0);
var i__25211 = (0);
while(true){
if((i__25211 < count__25210)){
var n = cljs.core._nth.call(null,chunk__25209,i__25211);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25212 = seq__25208;
var G__25213 = chunk__25209;
var G__25214 = count__25210;
var G__25215 = (i__25211 + (1));
seq__25208 = G__25212;
chunk__25209 = G__25213;
count__25210 = G__25214;
i__25211 = G__25215;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25208);
if(temp__4425__auto__){
var seq__25208__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25208__$1)){
var c__17293__auto__ = cljs.core.chunk_first.call(null,seq__25208__$1);
var G__25216 = cljs.core.chunk_rest.call(null,seq__25208__$1);
var G__25217 = c__17293__auto__;
var G__25218 = cljs.core.count.call(null,c__17293__auto__);
var G__25219 = (0);
seq__25208 = G__25216;
chunk__25209 = G__25217;
count__25210 = G__25218;
i__25211 = G__25219;
continue;
} else {
var n = cljs.core.first.call(null,seq__25208__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25220 = cljs.core.next.call(null,seq__25208__$1);
var G__25221 = null;
var G__25222 = (0);
var G__25223 = (0);
seq__25208 = G__25220;
chunk__25209 = G__25221;
count__25210 = G__25222;
i__25211 = G__25223;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__25262_25269 = cljs.core.seq.call(null,deps);
var chunk__25263_25270 = null;
var count__25264_25271 = (0);
var i__25265_25272 = (0);
while(true){
if((i__25265_25272 < count__25264_25271)){
var dep_25273 = cljs.core._nth.call(null,chunk__25263_25270,i__25265_25272);
topo_sort_helper_STAR_.call(null,dep_25273,(depth + (1)),state);

var G__25274 = seq__25262_25269;
var G__25275 = chunk__25263_25270;
var G__25276 = count__25264_25271;
var G__25277 = (i__25265_25272 + (1));
seq__25262_25269 = G__25274;
chunk__25263_25270 = G__25275;
count__25264_25271 = G__25276;
i__25265_25272 = G__25277;
continue;
} else {
var temp__4425__auto___25278 = cljs.core.seq.call(null,seq__25262_25269);
if(temp__4425__auto___25278){
var seq__25262_25279__$1 = temp__4425__auto___25278;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25262_25279__$1)){
var c__17293__auto___25280 = cljs.core.chunk_first.call(null,seq__25262_25279__$1);
var G__25281 = cljs.core.chunk_rest.call(null,seq__25262_25279__$1);
var G__25282 = c__17293__auto___25280;
var G__25283 = cljs.core.count.call(null,c__17293__auto___25280);
var G__25284 = (0);
seq__25262_25269 = G__25281;
chunk__25263_25270 = G__25282;
count__25264_25271 = G__25283;
i__25265_25272 = G__25284;
continue;
} else {
var dep_25285 = cljs.core.first.call(null,seq__25262_25279__$1);
topo_sort_helper_STAR_.call(null,dep_25285,(depth + (1)),state);

var G__25286 = cljs.core.next.call(null,seq__25262_25279__$1);
var G__25287 = null;
var G__25288 = (0);
var G__25289 = (0);
seq__25262_25269 = G__25286;
chunk__25263_25270 = G__25287;
count__25264_25271 = G__25288;
i__25265_25272 = G__25289;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25266){
var vec__25268 = p__25266;
var x = cljs.core.nth.call(null,vec__25268,(0),null);
var xs = cljs.core.nthnext.call(null,vec__25268,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25268,x,xs,get_deps__$1){
return (function (p1__25224_SHARP_){
return clojure.set.difference.call(null,p1__25224_SHARP_,x);
});})(vec__25268,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__25302 = cljs.core.seq.call(null,provides);
var chunk__25303 = null;
var count__25304 = (0);
var i__25305 = (0);
while(true){
if((i__25305 < count__25304)){
var prov = cljs.core._nth.call(null,chunk__25303,i__25305);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25306_25314 = cljs.core.seq.call(null,requires);
var chunk__25307_25315 = null;
var count__25308_25316 = (0);
var i__25309_25317 = (0);
while(true){
if((i__25309_25317 < count__25308_25316)){
var req_25318 = cljs.core._nth.call(null,chunk__25307_25315,i__25309_25317);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25318,prov);

var G__25319 = seq__25306_25314;
var G__25320 = chunk__25307_25315;
var G__25321 = count__25308_25316;
var G__25322 = (i__25309_25317 + (1));
seq__25306_25314 = G__25319;
chunk__25307_25315 = G__25320;
count__25308_25316 = G__25321;
i__25309_25317 = G__25322;
continue;
} else {
var temp__4425__auto___25323 = cljs.core.seq.call(null,seq__25306_25314);
if(temp__4425__auto___25323){
var seq__25306_25324__$1 = temp__4425__auto___25323;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25306_25324__$1)){
var c__17293__auto___25325 = cljs.core.chunk_first.call(null,seq__25306_25324__$1);
var G__25326 = cljs.core.chunk_rest.call(null,seq__25306_25324__$1);
var G__25327 = c__17293__auto___25325;
var G__25328 = cljs.core.count.call(null,c__17293__auto___25325);
var G__25329 = (0);
seq__25306_25314 = G__25326;
chunk__25307_25315 = G__25327;
count__25308_25316 = G__25328;
i__25309_25317 = G__25329;
continue;
} else {
var req_25330 = cljs.core.first.call(null,seq__25306_25324__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25330,prov);

var G__25331 = cljs.core.next.call(null,seq__25306_25324__$1);
var G__25332 = null;
var G__25333 = (0);
var G__25334 = (0);
seq__25306_25314 = G__25331;
chunk__25307_25315 = G__25332;
count__25308_25316 = G__25333;
i__25309_25317 = G__25334;
continue;
}
} else {
}
}
break;
}

var G__25335 = seq__25302;
var G__25336 = chunk__25303;
var G__25337 = count__25304;
var G__25338 = (i__25305 + (1));
seq__25302 = G__25335;
chunk__25303 = G__25336;
count__25304 = G__25337;
i__25305 = G__25338;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25302);
if(temp__4425__auto__){
var seq__25302__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25302__$1)){
var c__17293__auto__ = cljs.core.chunk_first.call(null,seq__25302__$1);
var G__25339 = cljs.core.chunk_rest.call(null,seq__25302__$1);
var G__25340 = c__17293__auto__;
var G__25341 = cljs.core.count.call(null,c__17293__auto__);
var G__25342 = (0);
seq__25302 = G__25339;
chunk__25303 = G__25340;
count__25304 = G__25341;
i__25305 = G__25342;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25302__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25310_25343 = cljs.core.seq.call(null,requires);
var chunk__25311_25344 = null;
var count__25312_25345 = (0);
var i__25313_25346 = (0);
while(true){
if((i__25313_25346 < count__25312_25345)){
var req_25347 = cljs.core._nth.call(null,chunk__25311_25344,i__25313_25346);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25347,prov);

var G__25348 = seq__25310_25343;
var G__25349 = chunk__25311_25344;
var G__25350 = count__25312_25345;
var G__25351 = (i__25313_25346 + (1));
seq__25310_25343 = G__25348;
chunk__25311_25344 = G__25349;
count__25312_25345 = G__25350;
i__25313_25346 = G__25351;
continue;
} else {
var temp__4425__auto___25352__$1 = cljs.core.seq.call(null,seq__25310_25343);
if(temp__4425__auto___25352__$1){
var seq__25310_25353__$1 = temp__4425__auto___25352__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25310_25353__$1)){
var c__17293__auto___25354 = cljs.core.chunk_first.call(null,seq__25310_25353__$1);
var G__25355 = cljs.core.chunk_rest.call(null,seq__25310_25353__$1);
var G__25356 = c__17293__auto___25354;
var G__25357 = cljs.core.count.call(null,c__17293__auto___25354);
var G__25358 = (0);
seq__25310_25343 = G__25355;
chunk__25311_25344 = G__25356;
count__25312_25345 = G__25357;
i__25313_25346 = G__25358;
continue;
} else {
var req_25359 = cljs.core.first.call(null,seq__25310_25353__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25359,prov);

var G__25360 = cljs.core.next.call(null,seq__25310_25353__$1);
var G__25361 = null;
var G__25362 = (0);
var G__25363 = (0);
seq__25310_25343 = G__25360;
chunk__25311_25344 = G__25361;
count__25312_25345 = G__25362;
i__25313_25346 = G__25363;
continue;
}
} else {
}
}
break;
}

var G__25364 = cljs.core.next.call(null,seq__25302__$1);
var G__25365 = null;
var G__25366 = (0);
var G__25367 = (0);
seq__25302 = G__25364;
chunk__25303 = G__25365;
count__25304 = G__25366;
i__25305 = G__25367;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25372_25376 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25373_25377 = null;
var count__25374_25378 = (0);
var i__25375_25379 = (0);
while(true){
if((i__25375_25379 < count__25374_25378)){
var ns_25380 = cljs.core._nth.call(null,chunk__25373_25377,i__25375_25379);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25380);

var G__25381 = seq__25372_25376;
var G__25382 = chunk__25373_25377;
var G__25383 = count__25374_25378;
var G__25384 = (i__25375_25379 + (1));
seq__25372_25376 = G__25381;
chunk__25373_25377 = G__25382;
count__25374_25378 = G__25383;
i__25375_25379 = G__25384;
continue;
} else {
var temp__4425__auto___25385 = cljs.core.seq.call(null,seq__25372_25376);
if(temp__4425__auto___25385){
var seq__25372_25386__$1 = temp__4425__auto___25385;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25372_25386__$1)){
var c__17293__auto___25387 = cljs.core.chunk_first.call(null,seq__25372_25386__$1);
var G__25388 = cljs.core.chunk_rest.call(null,seq__25372_25386__$1);
var G__25389 = c__17293__auto___25387;
var G__25390 = cljs.core.count.call(null,c__17293__auto___25387);
var G__25391 = (0);
seq__25372_25376 = G__25388;
chunk__25373_25377 = G__25389;
count__25374_25378 = G__25390;
i__25375_25379 = G__25391;
continue;
} else {
var ns_25392 = cljs.core.first.call(null,seq__25372_25386__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25392);

var G__25393 = cljs.core.next.call(null,seq__25372_25386__$1);
var G__25394 = null;
var G__25395 = (0);
var G__25396 = (0);
seq__25372_25376 = G__25393;
chunk__25373_25377 = G__25394;
count__25374_25378 = G__25395;
i__25375_25379 = G__25396;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16490__auto__ = goog.require__;
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__25397__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25397 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25398__i = 0, G__25398__a = new Array(arguments.length -  0);
while (G__25398__i < G__25398__a.length) {G__25398__a[G__25398__i] = arguments[G__25398__i + 0]; ++G__25398__i;}
  args = new cljs.core.IndexedSeq(G__25398__a,0);
} 
return G__25397__delegate.call(this,args);};
G__25397.cljs$lang$maxFixedArity = 0;
G__25397.cljs$lang$applyTo = (function (arglist__25399){
var args = cljs.core.seq(arglist__25399);
return G__25397__delegate(args);
});
G__25397.cljs$core$IFn$_invoke$arity$variadic = G__25397__delegate;
return G__25397;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25400 = cljs.core._EQ_;
var expr__25401 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25400.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25401))){
return ((function (pred__25400,expr__25401){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e25403){if((e25403 instanceof Error)){
var e = e25403;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25403;

}
}})());
});
;})(pred__25400,expr__25401))
} else {
if(cljs.core.truth_(pred__25400.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25401))){
return ((function (pred__25400,expr__25401){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25400,expr__25401){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25400,expr__25401))
);

return deferred.addErrback(((function (deferred,pred__25400,expr__25401){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25400,expr__25401))
);
});
;})(pred__25400,expr__25401))
} else {
return ((function (pred__25400,expr__25401){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25400,expr__25401))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25404,callback){
var map__25407 = p__25404;
var map__25407__$1 = ((((!((map__25407 == null)))?((((map__25407.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25407.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25407):map__25407);
var file_msg = map__25407__$1;
var request_url = cljs.core.get.call(null,map__25407__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25407,map__25407__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25407,map__25407__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19791__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19791__auto__){
return (function (){
var f__19792__auto__ = (function (){var switch__19726__auto__ = ((function (c__19791__auto__){
return (function (state_25431){
var state_val_25432 = (state_25431[(1)]);
if((state_val_25432 === (7))){
var inst_25427 = (state_25431[(2)]);
var state_25431__$1 = state_25431;
var statearr_25433_25453 = state_25431__$1;
(statearr_25433_25453[(2)] = inst_25427);

(statearr_25433_25453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (1))){
var state_25431__$1 = state_25431;
var statearr_25434_25454 = state_25431__$1;
(statearr_25434_25454[(2)] = null);

(statearr_25434_25454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (4))){
var inst_25411 = (state_25431[(7)]);
var inst_25411__$1 = (state_25431[(2)]);
var state_25431__$1 = (function (){var statearr_25435 = state_25431;
(statearr_25435[(7)] = inst_25411__$1);

return statearr_25435;
})();
if(cljs.core.truth_(inst_25411__$1)){
var statearr_25436_25455 = state_25431__$1;
(statearr_25436_25455[(1)] = (5));

} else {
var statearr_25437_25456 = state_25431__$1;
(statearr_25437_25456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (6))){
var state_25431__$1 = state_25431;
var statearr_25438_25457 = state_25431__$1;
(statearr_25438_25457[(2)] = null);

(statearr_25438_25457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (3))){
var inst_25429 = (state_25431[(2)]);
var state_25431__$1 = state_25431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25431__$1,inst_25429);
} else {
if((state_val_25432 === (2))){
var state_25431__$1 = state_25431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25431__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25432 === (11))){
var inst_25423 = (state_25431[(2)]);
var state_25431__$1 = (function (){var statearr_25439 = state_25431;
(statearr_25439[(8)] = inst_25423);

return statearr_25439;
})();
var statearr_25440_25458 = state_25431__$1;
(statearr_25440_25458[(2)] = null);

(statearr_25440_25458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (9))){
var inst_25417 = (state_25431[(9)]);
var inst_25415 = (state_25431[(10)]);
var inst_25419 = inst_25417.call(null,inst_25415);
var state_25431__$1 = state_25431;
var statearr_25441_25459 = state_25431__$1;
(statearr_25441_25459[(2)] = inst_25419);

(statearr_25441_25459[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (5))){
var inst_25411 = (state_25431[(7)]);
var inst_25413 = figwheel.client.file_reloading.blocking_load.call(null,inst_25411);
var state_25431__$1 = state_25431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25431__$1,(8),inst_25413);
} else {
if((state_val_25432 === (10))){
var inst_25415 = (state_25431[(10)]);
var inst_25421 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25415);
var state_25431__$1 = state_25431;
var statearr_25442_25460 = state_25431__$1;
(statearr_25442_25460[(2)] = inst_25421);

(statearr_25442_25460[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (8))){
var inst_25411 = (state_25431[(7)]);
var inst_25417 = (state_25431[(9)]);
var inst_25415 = (state_25431[(2)]);
var inst_25416 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25417__$1 = cljs.core.get.call(null,inst_25416,inst_25411);
var state_25431__$1 = (function (){var statearr_25443 = state_25431;
(statearr_25443[(9)] = inst_25417__$1);

(statearr_25443[(10)] = inst_25415);

return statearr_25443;
})();
if(cljs.core.truth_(inst_25417__$1)){
var statearr_25444_25461 = state_25431__$1;
(statearr_25444_25461[(1)] = (9));

} else {
var statearr_25445_25462 = state_25431__$1;
(statearr_25445_25462[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19791__auto__))
;
return ((function (switch__19726__auto__,c__19791__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19727__auto__ = null;
var figwheel$client$file_reloading$state_machine__19727__auto____0 = (function (){
var statearr_25449 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25449[(0)] = figwheel$client$file_reloading$state_machine__19727__auto__);

(statearr_25449[(1)] = (1));

return statearr_25449;
});
var figwheel$client$file_reloading$state_machine__19727__auto____1 = (function (state_25431){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_25431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e25450){if((e25450 instanceof Object)){
var ex__19730__auto__ = e25450;
var statearr_25451_25463 = state_25431;
(statearr_25451_25463[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25464 = state_25431;
state_25431 = G__25464;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19727__auto__ = function(state_25431){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19727__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19727__auto____1.call(this,state_25431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19727__auto____0;
figwheel$client$file_reloading$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19727__auto____1;
return figwheel$client$file_reloading$state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19791__auto__))
})();
var state__19793__auto__ = (function (){var statearr_25452 = f__19792__auto__.call(null);
(statearr_25452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19791__auto__);

return statearr_25452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19793__auto__);
});})(c__19791__auto__))
);

return c__19791__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25465,callback){
var map__25468 = p__25465;
var map__25468__$1 = ((((!((map__25468 == null)))?((((map__25468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25468):map__25468);
var file_msg = map__25468__$1;
var namespace = cljs.core.get.call(null,map__25468__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25468,map__25468__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25468,map__25468__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25470){
var map__25473 = p__25470;
var map__25473__$1 = ((((!((map__25473 == null)))?((((map__25473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25473):map__25473);
var file_msg = map__25473__$1;
var namespace = cljs.core.get.call(null,map__25473__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16478__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16478__auto__){
var or__16490__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
} else {
var or__16490__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16490__auto____$1)){
return or__16490__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16478__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25475,callback){
var map__25478 = p__25475;
var map__25478__$1 = ((((!((map__25478 == null)))?((((map__25478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25478):map__25478);
var file_msg = map__25478__$1;
var request_url = cljs.core.get.call(null,map__25478__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25478__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19791__auto___25566 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19791__auto___25566,out){
return (function (){
var f__19792__auto__ = (function (){var switch__19726__auto__ = ((function (c__19791__auto___25566,out){
return (function (state_25548){
var state_val_25549 = (state_25548[(1)]);
if((state_val_25549 === (1))){
var inst_25526 = cljs.core.nth.call(null,files,(0),null);
var inst_25527 = cljs.core.nthnext.call(null,files,(1));
var inst_25528 = files;
var state_25548__$1 = (function (){var statearr_25550 = state_25548;
(statearr_25550[(7)] = inst_25526);

(statearr_25550[(8)] = inst_25528);

(statearr_25550[(9)] = inst_25527);

return statearr_25550;
})();
var statearr_25551_25567 = state_25548__$1;
(statearr_25551_25567[(2)] = null);

(statearr_25551_25567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (2))){
var inst_25531 = (state_25548[(10)]);
var inst_25528 = (state_25548[(8)]);
var inst_25531__$1 = cljs.core.nth.call(null,inst_25528,(0),null);
var inst_25532 = cljs.core.nthnext.call(null,inst_25528,(1));
var inst_25533 = (inst_25531__$1 == null);
var inst_25534 = cljs.core.not.call(null,inst_25533);
var state_25548__$1 = (function (){var statearr_25552 = state_25548;
(statearr_25552[(11)] = inst_25532);

(statearr_25552[(10)] = inst_25531__$1);

return statearr_25552;
})();
if(inst_25534){
var statearr_25553_25568 = state_25548__$1;
(statearr_25553_25568[(1)] = (4));

} else {
var statearr_25554_25569 = state_25548__$1;
(statearr_25554_25569[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (3))){
var inst_25546 = (state_25548[(2)]);
var state_25548__$1 = state_25548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25548__$1,inst_25546);
} else {
if((state_val_25549 === (4))){
var inst_25531 = (state_25548[(10)]);
var inst_25536 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25531);
var state_25548__$1 = state_25548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25548__$1,(7),inst_25536);
} else {
if((state_val_25549 === (5))){
var inst_25542 = cljs.core.async.close_BANG_.call(null,out);
var state_25548__$1 = state_25548;
var statearr_25555_25570 = state_25548__$1;
(statearr_25555_25570[(2)] = inst_25542);

(statearr_25555_25570[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (6))){
var inst_25544 = (state_25548[(2)]);
var state_25548__$1 = state_25548;
var statearr_25556_25571 = state_25548__$1;
(statearr_25556_25571[(2)] = inst_25544);

(statearr_25556_25571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (7))){
var inst_25532 = (state_25548[(11)]);
var inst_25538 = (state_25548[(2)]);
var inst_25539 = cljs.core.async.put_BANG_.call(null,out,inst_25538);
var inst_25528 = inst_25532;
var state_25548__$1 = (function (){var statearr_25557 = state_25548;
(statearr_25557[(12)] = inst_25539);

(statearr_25557[(8)] = inst_25528);

return statearr_25557;
})();
var statearr_25558_25572 = state_25548__$1;
(statearr_25558_25572[(2)] = null);

(statearr_25558_25572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__19791__auto___25566,out))
;
return ((function (switch__19726__auto__,c__19791__auto___25566,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19727__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19727__auto____0 = (function (){
var statearr_25562 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25562[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19727__auto__);

(statearr_25562[(1)] = (1));

return statearr_25562;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19727__auto____1 = (function (state_25548){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_25548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e25563){if((e25563 instanceof Object)){
var ex__19730__auto__ = e25563;
var statearr_25564_25573 = state_25548;
(statearr_25564_25573[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25574 = state_25548;
state_25548 = G__25574;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19727__auto__ = function(state_25548){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19727__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19727__auto____1.call(this,state_25548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19727__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19727__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19791__auto___25566,out))
})();
var state__19793__auto__ = (function (){var statearr_25565 = f__19792__auto__.call(null);
(statearr_25565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19791__auto___25566);

return statearr_25565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19793__auto__);
});})(c__19791__auto___25566,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25575,opts){
var map__25579 = p__25575;
var map__25579__$1 = ((((!((map__25579 == null)))?((((map__25579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25579):map__25579);
var eval_body__$1 = cljs.core.get.call(null,map__25579__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25579__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16478__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16478__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16478__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25581){var e = e25581;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25582_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25582_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__25587){
var vec__25588 = p__25587;
var k = cljs.core.nth.call(null,vec__25588,(0),null);
var v = cljs.core.nth.call(null,vec__25588,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25589){
var vec__25590 = p__25589;
var k = cljs.core.nth.call(null,vec__25590,(0),null);
var v = cljs.core.nth.call(null,vec__25590,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25594,p__25595){
var map__25842 = p__25594;
var map__25842__$1 = ((((!((map__25842 == null)))?((((map__25842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25842):map__25842);
var opts = map__25842__$1;
var before_jsload = cljs.core.get.call(null,map__25842__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25842__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25842__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25843 = p__25595;
var map__25843__$1 = ((((!((map__25843 == null)))?((((map__25843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25843):map__25843);
var msg = map__25843__$1;
var files = cljs.core.get.call(null,map__25843__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25843__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25843__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19791__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19791__auto__,map__25842,map__25842__$1,opts,before_jsload,on_jsload,reload_dependents,map__25843,map__25843__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19792__auto__ = (function (){var switch__19726__auto__ = ((function (c__19791__auto__,map__25842,map__25842__$1,opts,before_jsload,on_jsload,reload_dependents,map__25843,map__25843__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25996){
var state_val_25997 = (state_25996[(1)]);
if((state_val_25997 === (7))){
var inst_25859 = (state_25996[(7)]);
var inst_25858 = (state_25996[(8)]);
var inst_25857 = (state_25996[(9)]);
var inst_25860 = (state_25996[(10)]);
var inst_25865 = cljs.core._nth.call(null,inst_25858,inst_25860);
var inst_25866 = figwheel.client.file_reloading.eval_body.call(null,inst_25865,opts);
var inst_25867 = (inst_25860 + (1));
var tmp25998 = inst_25859;
var tmp25999 = inst_25858;
var tmp26000 = inst_25857;
var inst_25857__$1 = tmp26000;
var inst_25858__$1 = tmp25999;
var inst_25859__$1 = tmp25998;
var inst_25860__$1 = inst_25867;
var state_25996__$1 = (function (){var statearr_26001 = state_25996;
(statearr_26001[(7)] = inst_25859__$1);

(statearr_26001[(11)] = inst_25866);

(statearr_26001[(8)] = inst_25858__$1);

(statearr_26001[(9)] = inst_25857__$1);

(statearr_26001[(10)] = inst_25860__$1);

return statearr_26001;
})();
var statearr_26002_26088 = state_25996__$1;
(statearr_26002_26088[(2)] = null);

(statearr_26002_26088[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (20))){
var inst_25900 = (state_25996[(12)]);
var inst_25908 = figwheel.client.file_reloading.sort_files.call(null,inst_25900);
var state_25996__$1 = state_25996;
var statearr_26003_26089 = state_25996__$1;
(statearr_26003_26089[(2)] = inst_25908);

(statearr_26003_26089[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (27))){
var state_25996__$1 = state_25996;
var statearr_26004_26090 = state_25996__$1;
(statearr_26004_26090[(2)] = null);

(statearr_26004_26090[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (1))){
var inst_25849 = (state_25996[(13)]);
var inst_25846 = before_jsload.call(null,files);
var inst_25847 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25848 = (function (){return ((function (inst_25849,inst_25846,inst_25847,state_val_25997,c__19791__auto__,map__25842,map__25842__$1,opts,before_jsload,on_jsload,reload_dependents,map__25843,map__25843__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25591_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25591_SHARP_);
});
;})(inst_25849,inst_25846,inst_25847,state_val_25997,c__19791__auto__,map__25842,map__25842__$1,opts,before_jsload,on_jsload,reload_dependents,map__25843,map__25843__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25849__$1 = cljs.core.filter.call(null,inst_25848,files);
var inst_25850 = cljs.core.not_empty.call(null,inst_25849__$1);
var state_25996__$1 = (function (){var statearr_26005 = state_25996;
(statearr_26005[(14)] = inst_25847);

(statearr_26005[(13)] = inst_25849__$1);

(statearr_26005[(15)] = inst_25846);

return statearr_26005;
})();
if(cljs.core.truth_(inst_25850)){
var statearr_26006_26091 = state_25996__$1;
(statearr_26006_26091[(1)] = (2));

} else {
var statearr_26007_26092 = state_25996__$1;
(statearr_26007_26092[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (24))){
var state_25996__$1 = state_25996;
var statearr_26008_26093 = state_25996__$1;
(statearr_26008_26093[(2)] = null);

(statearr_26008_26093[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (39))){
var inst_25950 = (state_25996[(16)]);
var state_25996__$1 = state_25996;
var statearr_26009_26094 = state_25996__$1;
(statearr_26009_26094[(2)] = inst_25950);

(statearr_26009_26094[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (46))){
var inst_25991 = (state_25996[(2)]);
var state_25996__$1 = state_25996;
var statearr_26010_26095 = state_25996__$1;
(statearr_26010_26095[(2)] = inst_25991);

(statearr_26010_26095[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (4))){
var inst_25894 = (state_25996[(2)]);
var inst_25895 = cljs.core.List.EMPTY;
var inst_25896 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25895);
var inst_25897 = (function (){return ((function (inst_25894,inst_25895,inst_25896,state_val_25997,c__19791__auto__,map__25842,map__25842__$1,opts,before_jsload,on_jsload,reload_dependents,map__25843,map__25843__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25592_SHARP_){
var and__16478__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25592_SHARP_);
if(cljs.core.truth_(and__16478__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25592_SHARP_));
} else {
return and__16478__auto__;
}
});
;})(inst_25894,inst_25895,inst_25896,state_val_25997,c__19791__auto__,map__25842,map__25842__$1,opts,before_jsload,on_jsload,reload_dependents,map__25843,map__25843__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25898 = cljs.core.filter.call(null,inst_25897,files);
var inst_25899 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25900 = cljs.core.concat.call(null,inst_25898,inst_25899);
var state_25996__$1 = (function (){var statearr_26011 = state_25996;
(statearr_26011[(17)] = inst_25894);

(statearr_26011[(18)] = inst_25896);

(statearr_26011[(12)] = inst_25900);

return statearr_26011;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26012_26096 = state_25996__$1;
(statearr_26012_26096[(1)] = (16));

} else {
var statearr_26013_26097 = state_25996__$1;
(statearr_26013_26097[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (15))){
var inst_25884 = (state_25996[(2)]);
var state_25996__$1 = state_25996;
var statearr_26014_26098 = state_25996__$1;
(statearr_26014_26098[(2)] = inst_25884);

(statearr_26014_26098[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (21))){
var inst_25910 = (state_25996[(19)]);
var inst_25910__$1 = (state_25996[(2)]);
var inst_25911 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25910__$1);
var state_25996__$1 = (function (){var statearr_26015 = state_25996;
(statearr_26015[(19)] = inst_25910__$1);

return statearr_26015;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25996__$1,(22),inst_25911);
} else {
if((state_val_25997 === (31))){
var inst_25994 = (state_25996[(2)]);
var state_25996__$1 = state_25996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25996__$1,inst_25994);
} else {
if((state_val_25997 === (32))){
var inst_25950 = (state_25996[(16)]);
var inst_25955 = inst_25950.cljs$lang$protocol_mask$partition0$;
var inst_25956 = (inst_25955 & (64));
var inst_25957 = inst_25950.cljs$core$ISeq$;
var inst_25958 = (inst_25956) || (inst_25957);
var state_25996__$1 = state_25996;
if(cljs.core.truth_(inst_25958)){
var statearr_26016_26099 = state_25996__$1;
(statearr_26016_26099[(1)] = (35));

} else {
var statearr_26017_26100 = state_25996__$1;
(statearr_26017_26100[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (40))){
var inst_25971 = (state_25996[(20)]);
var inst_25970 = (state_25996[(2)]);
var inst_25971__$1 = cljs.core.get.call(null,inst_25970,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25972 = cljs.core.get.call(null,inst_25970,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25973 = cljs.core.not_empty.call(null,inst_25971__$1);
var state_25996__$1 = (function (){var statearr_26018 = state_25996;
(statearr_26018[(21)] = inst_25972);

(statearr_26018[(20)] = inst_25971__$1);

return statearr_26018;
})();
if(cljs.core.truth_(inst_25973)){
var statearr_26019_26101 = state_25996__$1;
(statearr_26019_26101[(1)] = (41));

} else {
var statearr_26020_26102 = state_25996__$1;
(statearr_26020_26102[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (33))){
var state_25996__$1 = state_25996;
var statearr_26021_26103 = state_25996__$1;
(statearr_26021_26103[(2)] = false);

(statearr_26021_26103[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (13))){
var inst_25870 = (state_25996[(22)]);
var inst_25874 = cljs.core.chunk_first.call(null,inst_25870);
var inst_25875 = cljs.core.chunk_rest.call(null,inst_25870);
var inst_25876 = cljs.core.count.call(null,inst_25874);
var inst_25857 = inst_25875;
var inst_25858 = inst_25874;
var inst_25859 = inst_25876;
var inst_25860 = (0);
var state_25996__$1 = (function (){var statearr_26022 = state_25996;
(statearr_26022[(7)] = inst_25859);

(statearr_26022[(8)] = inst_25858);

(statearr_26022[(9)] = inst_25857);

(statearr_26022[(10)] = inst_25860);

return statearr_26022;
})();
var statearr_26023_26104 = state_25996__$1;
(statearr_26023_26104[(2)] = null);

(statearr_26023_26104[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (22))){
var inst_25913 = (state_25996[(23)]);
var inst_25910 = (state_25996[(19)]);
var inst_25918 = (state_25996[(24)]);
var inst_25914 = (state_25996[(25)]);
var inst_25913__$1 = (state_25996[(2)]);
var inst_25914__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25913__$1);
var inst_25915 = (function (){var all_files = inst_25910;
var res_SINGLEQUOTE_ = inst_25913__$1;
var res = inst_25914__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25913,inst_25910,inst_25918,inst_25914,inst_25913__$1,inst_25914__$1,state_val_25997,c__19791__auto__,map__25842,map__25842__$1,opts,before_jsload,on_jsload,reload_dependents,map__25843,map__25843__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25593_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25593_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25913,inst_25910,inst_25918,inst_25914,inst_25913__$1,inst_25914__$1,state_val_25997,c__19791__auto__,map__25842,map__25842__$1,opts,before_jsload,on_jsload,reload_dependents,map__25843,map__25843__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25916 = cljs.core.filter.call(null,inst_25915,inst_25913__$1);
var inst_25917 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25918__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25917);
var inst_25919 = cljs.core.not_empty.call(null,inst_25918__$1);
var state_25996__$1 = (function (){var statearr_26024 = state_25996;
(statearr_26024[(23)] = inst_25913__$1);

(statearr_26024[(24)] = inst_25918__$1);

(statearr_26024[(25)] = inst_25914__$1);

(statearr_26024[(26)] = inst_25916);

return statearr_26024;
})();
if(cljs.core.truth_(inst_25919)){
var statearr_26025_26105 = state_25996__$1;
(statearr_26025_26105[(1)] = (23));

} else {
var statearr_26026_26106 = state_25996__$1;
(statearr_26026_26106[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (36))){
var state_25996__$1 = state_25996;
var statearr_26027_26107 = state_25996__$1;
(statearr_26027_26107[(2)] = false);

(statearr_26027_26107[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (41))){
var inst_25971 = (state_25996[(20)]);
var inst_25975 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25976 = cljs.core.map.call(null,inst_25975,inst_25971);
var inst_25977 = cljs.core.pr_str.call(null,inst_25976);
var inst_25978 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25977)].join('');
var inst_25979 = figwheel.client.utils.log.call(null,inst_25978);
var state_25996__$1 = state_25996;
var statearr_26028_26108 = state_25996__$1;
(statearr_26028_26108[(2)] = inst_25979);

(statearr_26028_26108[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (43))){
var inst_25972 = (state_25996[(21)]);
var inst_25982 = (state_25996[(2)]);
var inst_25983 = cljs.core.not_empty.call(null,inst_25972);
var state_25996__$1 = (function (){var statearr_26029 = state_25996;
(statearr_26029[(27)] = inst_25982);

return statearr_26029;
})();
if(cljs.core.truth_(inst_25983)){
var statearr_26030_26109 = state_25996__$1;
(statearr_26030_26109[(1)] = (44));

} else {
var statearr_26031_26110 = state_25996__$1;
(statearr_26031_26110[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (29))){
var inst_25913 = (state_25996[(23)]);
var inst_25910 = (state_25996[(19)]);
var inst_25918 = (state_25996[(24)]);
var inst_25914 = (state_25996[(25)]);
var inst_25916 = (state_25996[(26)]);
var inst_25950 = (state_25996[(16)]);
var inst_25946 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25949 = (function (){var all_files = inst_25910;
var res_SINGLEQUOTE_ = inst_25913;
var res = inst_25914;
var files_not_loaded = inst_25916;
var dependencies_that_loaded = inst_25918;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25913,inst_25910,inst_25918,inst_25914,inst_25916,inst_25950,inst_25946,state_val_25997,c__19791__auto__,map__25842,map__25842__$1,opts,before_jsload,on_jsload,reload_dependents,map__25843,map__25843__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25948){
var map__26032 = p__25948;
var map__26032__$1 = ((((!((map__26032 == null)))?((((map__26032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26032):map__26032);
var namespace = cljs.core.get.call(null,map__26032__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25913,inst_25910,inst_25918,inst_25914,inst_25916,inst_25950,inst_25946,state_val_25997,c__19791__auto__,map__25842,map__25842__$1,opts,before_jsload,on_jsload,reload_dependents,map__25843,map__25843__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25950__$1 = cljs.core.group_by.call(null,inst_25949,inst_25916);
var inst_25952 = (inst_25950__$1 == null);
var inst_25953 = cljs.core.not.call(null,inst_25952);
var state_25996__$1 = (function (){var statearr_26034 = state_25996;
(statearr_26034[(28)] = inst_25946);

(statearr_26034[(16)] = inst_25950__$1);

return statearr_26034;
})();
if(inst_25953){
var statearr_26035_26111 = state_25996__$1;
(statearr_26035_26111[(1)] = (32));

} else {
var statearr_26036_26112 = state_25996__$1;
(statearr_26036_26112[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (44))){
var inst_25972 = (state_25996[(21)]);
var inst_25985 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25972);
var inst_25986 = cljs.core.pr_str.call(null,inst_25985);
var inst_25987 = [cljs.core.str("not required: "),cljs.core.str(inst_25986)].join('');
var inst_25988 = figwheel.client.utils.log.call(null,inst_25987);
var state_25996__$1 = state_25996;
var statearr_26037_26113 = state_25996__$1;
(statearr_26037_26113[(2)] = inst_25988);

(statearr_26037_26113[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (6))){
var inst_25891 = (state_25996[(2)]);
var state_25996__$1 = state_25996;
var statearr_26038_26114 = state_25996__$1;
(statearr_26038_26114[(2)] = inst_25891);

(statearr_26038_26114[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (28))){
var inst_25916 = (state_25996[(26)]);
var inst_25943 = (state_25996[(2)]);
var inst_25944 = cljs.core.not_empty.call(null,inst_25916);
var state_25996__$1 = (function (){var statearr_26039 = state_25996;
(statearr_26039[(29)] = inst_25943);

return statearr_26039;
})();
if(cljs.core.truth_(inst_25944)){
var statearr_26040_26115 = state_25996__$1;
(statearr_26040_26115[(1)] = (29));

} else {
var statearr_26041_26116 = state_25996__$1;
(statearr_26041_26116[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (25))){
var inst_25914 = (state_25996[(25)]);
var inst_25930 = (state_25996[(2)]);
var inst_25931 = cljs.core.not_empty.call(null,inst_25914);
var state_25996__$1 = (function (){var statearr_26042 = state_25996;
(statearr_26042[(30)] = inst_25930);

return statearr_26042;
})();
if(cljs.core.truth_(inst_25931)){
var statearr_26043_26117 = state_25996__$1;
(statearr_26043_26117[(1)] = (26));

} else {
var statearr_26044_26118 = state_25996__$1;
(statearr_26044_26118[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (34))){
var inst_25965 = (state_25996[(2)]);
var state_25996__$1 = state_25996;
if(cljs.core.truth_(inst_25965)){
var statearr_26045_26119 = state_25996__$1;
(statearr_26045_26119[(1)] = (38));

} else {
var statearr_26046_26120 = state_25996__$1;
(statearr_26046_26120[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (17))){
var state_25996__$1 = state_25996;
var statearr_26047_26121 = state_25996__$1;
(statearr_26047_26121[(2)] = recompile_dependents);

(statearr_26047_26121[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (3))){
var state_25996__$1 = state_25996;
var statearr_26048_26122 = state_25996__$1;
(statearr_26048_26122[(2)] = null);

(statearr_26048_26122[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (12))){
var inst_25887 = (state_25996[(2)]);
var state_25996__$1 = state_25996;
var statearr_26049_26123 = state_25996__$1;
(statearr_26049_26123[(2)] = inst_25887);

(statearr_26049_26123[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (2))){
var inst_25849 = (state_25996[(13)]);
var inst_25856 = cljs.core.seq.call(null,inst_25849);
var inst_25857 = inst_25856;
var inst_25858 = null;
var inst_25859 = (0);
var inst_25860 = (0);
var state_25996__$1 = (function (){var statearr_26050 = state_25996;
(statearr_26050[(7)] = inst_25859);

(statearr_26050[(8)] = inst_25858);

(statearr_26050[(9)] = inst_25857);

(statearr_26050[(10)] = inst_25860);

return statearr_26050;
})();
var statearr_26051_26124 = state_25996__$1;
(statearr_26051_26124[(2)] = null);

(statearr_26051_26124[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (23))){
var inst_25913 = (state_25996[(23)]);
var inst_25910 = (state_25996[(19)]);
var inst_25918 = (state_25996[(24)]);
var inst_25914 = (state_25996[(25)]);
var inst_25916 = (state_25996[(26)]);
var inst_25921 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25923 = (function (){var all_files = inst_25910;
var res_SINGLEQUOTE_ = inst_25913;
var res = inst_25914;
var files_not_loaded = inst_25916;
var dependencies_that_loaded = inst_25918;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25913,inst_25910,inst_25918,inst_25914,inst_25916,inst_25921,state_val_25997,c__19791__auto__,map__25842,map__25842__$1,opts,before_jsload,on_jsload,reload_dependents,map__25843,map__25843__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25922){
var map__26052 = p__25922;
var map__26052__$1 = ((((!((map__26052 == null)))?((((map__26052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26052):map__26052);
var request_url = cljs.core.get.call(null,map__26052__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25913,inst_25910,inst_25918,inst_25914,inst_25916,inst_25921,state_val_25997,c__19791__auto__,map__25842,map__25842__$1,opts,before_jsload,on_jsload,reload_dependents,map__25843,map__25843__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25924 = cljs.core.reverse.call(null,inst_25918);
var inst_25925 = cljs.core.map.call(null,inst_25923,inst_25924);
var inst_25926 = cljs.core.pr_str.call(null,inst_25925);
var inst_25927 = figwheel.client.utils.log.call(null,inst_25926);
var state_25996__$1 = (function (){var statearr_26054 = state_25996;
(statearr_26054[(31)] = inst_25921);

return statearr_26054;
})();
var statearr_26055_26125 = state_25996__$1;
(statearr_26055_26125[(2)] = inst_25927);

(statearr_26055_26125[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (35))){
var state_25996__$1 = state_25996;
var statearr_26056_26126 = state_25996__$1;
(statearr_26056_26126[(2)] = true);

(statearr_26056_26126[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (19))){
var inst_25900 = (state_25996[(12)]);
var inst_25906 = figwheel.client.file_reloading.expand_files.call(null,inst_25900);
var state_25996__$1 = state_25996;
var statearr_26057_26127 = state_25996__$1;
(statearr_26057_26127[(2)] = inst_25906);

(statearr_26057_26127[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (11))){
var state_25996__$1 = state_25996;
var statearr_26058_26128 = state_25996__$1;
(statearr_26058_26128[(2)] = null);

(statearr_26058_26128[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (9))){
var inst_25889 = (state_25996[(2)]);
var state_25996__$1 = state_25996;
var statearr_26059_26129 = state_25996__$1;
(statearr_26059_26129[(2)] = inst_25889);

(statearr_26059_26129[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (5))){
var inst_25859 = (state_25996[(7)]);
var inst_25860 = (state_25996[(10)]);
var inst_25862 = (inst_25860 < inst_25859);
var inst_25863 = inst_25862;
var state_25996__$1 = state_25996;
if(cljs.core.truth_(inst_25863)){
var statearr_26060_26130 = state_25996__$1;
(statearr_26060_26130[(1)] = (7));

} else {
var statearr_26061_26131 = state_25996__$1;
(statearr_26061_26131[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (14))){
var inst_25870 = (state_25996[(22)]);
var inst_25879 = cljs.core.first.call(null,inst_25870);
var inst_25880 = figwheel.client.file_reloading.eval_body.call(null,inst_25879,opts);
var inst_25881 = cljs.core.next.call(null,inst_25870);
var inst_25857 = inst_25881;
var inst_25858 = null;
var inst_25859 = (0);
var inst_25860 = (0);
var state_25996__$1 = (function (){var statearr_26062 = state_25996;
(statearr_26062[(7)] = inst_25859);

(statearr_26062[(32)] = inst_25880);

(statearr_26062[(8)] = inst_25858);

(statearr_26062[(9)] = inst_25857);

(statearr_26062[(10)] = inst_25860);

return statearr_26062;
})();
var statearr_26063_26132 = state_25996__$1;
(statearr_26063_26132[(2)] = null);

(statearr_26063_26132[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (45))){
var state_25996__$1 = state_25996;
var statearr_26064_26133 = state_25996__$1;
(statearr_26064_26133[(2)] = null);

(statearr_26064_26133[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (26))){
var inst_25913 = (state_25996[(23)]);
var inst_25910 = (state_25996[(19)]);
var inst_25918 = (state_25996[(24)]);
var inst_25914 = (state_25996[(25)]);
var inst_25916 = (state_25996[(26)]);
var inst_25933 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25935 = (function (){var all_files = inst_25910;
var res_SINGLEQUOTE_ = inst_25913;
var res = inst_25914;
var files_not_loaded = inst_25916;
var dependencies_that_loaded = inst_25918;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25913,inst_25910,inst_25918,inst_25914,inst_25916,inst_25933,state_val_25997,c__19791__auto__,map__25842,map__25842__$1,opts,before_jsload,on_jsload,reload_dependents,map__25843,map__25843__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25934){
var map__26065 = p__25934;
var map__26065__$1 = ((((!((map__26065 == null)))?((((map__26065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26065):map__26065);
var namespace = cljs.core.get.call(null,map__26065__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26065__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25913,inst_25910,inst_25918,inst_25914,inst_25916,inst_25933,state_val_25997,c__19791__auto__,map__25842,map__25842__$1,opts,before_jsload,on_jsload,reload_dependents,map__25843,map__25843__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25936 = cljs.core.map.call(null,inst_25935,inst_25914);
var inst_25937 = cljs.core.pr_str.call(null,inst_25936);
var inst_25938 = figwheel.client.utils.log.call(null,inst_25937);
var inst_25939 = (function (){var all_files = inst_25910;
var res_SINGLEQUOTE_ = inst_25913;
var res = inst_25914;
var files_not_loaded = inst_25916;
var dependencies_that_loaded = inst_25918;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25913,inst_25910,inst_25918,inst_25914,inst_25916,inst_25933,inst_25935,inst_25936,inst_25937,inst_25938,state_val_25997,c__19791__auto__,map__25842,map__25842__$1,opts,before_jsload,on_jsload,reload_dependents,map__25843,map__25843__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25913,inst_25910,inst_25918,inst_25914,inst_25916,inst_25933,inst_25935,inst_25936,inst_25937,inst_25938,state_val_25997,c__19791__auto__,map__25842,map__25842__$1,opts,before_jsload,on_jsload,reload_dependents,map__25843,map__25843__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25940 = setTimeout(inst_25939,(10));
var state_25996__$1 = (function (){var statearr_26067 = state_25996;
(statearr_26067[(33)] = inst_25938);

(statearr_26067[(34)] = inst_25933);

return statearr_26067;
})();
var statearr_26068_26134 = state_25996__$1;
(statearr_26068_26134[(2)] = inst_25940);

(statearr_26068_26134[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (16))){
var state_25996__$1 = state_25996;
var statearr_26069_26135 = state_25996__$1;
(statearr_26069_26135[(2)] = reload_dependents);

(statearr_26069_26135[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (38))){
var inst_25950 = (state_25996[(16)]);
var inst_25967 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25950);
var state_25996__$1 = state_25996;
var statearr_26070_26136 = state_25996__$1;
(statearr_26070_26136[(2)] = inst_25967);

(statearr_26070_26136[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (30))){
var state_25996__$1 = state_25996;
var statearr_26071_26137 = state_25996__$1;
(statearr_26071_26137[(2)] = null);

(statearr_26071_26137[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (10))){
var inst_25870 = (state_25996[(22)]);
var inst_25872 = cljs.core.chunked_seq_QMARK_.call(null,inst_25870);
var state_25996__$1 = state_25996;
if(inst_25872){
var statearr_26072_26138 = state_25996__$1;
(statearr_26072_26138[(1)] = (13));

} else {
var statearr_26073_26139 = state_25996__$1;
(statearr_26073_26139[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (18))){
var inst_25904 = (state_25996[(2)]);
var state_25996__$1 = state_25996;
if(cljs.core.truth_(inst_25904)){
var statearr_26074_26140 = state_25996__$1;
(statearr_26074_26140[(1)] = (19));

} else {
var statearr_26075_26141 = state_25996__$1;
(statearr_26075_26141[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (42))){
var state_25996__$1 = state_25996;
var statearr_26076_26142 = state_25996__$1;
(statearr_26076_26142[(2)] = null);

(statearr_26076_26142[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (37))){
var inst_25962 = (state_25996[(2)]);
var state_25996__$1 = state_25996;
var statearr_26077_26143 = state_25996__$1;
(statearr_26077_26143[(2)] = inst_25962);

(statearr_26077_26143[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (8))){
var inst_25857 = (state_25996[(9)]);
var inst_25870 = (state_25996[(22)]);
var inst_25870__$1 = cljs.core.seq.call(null,inst_25857);
var state_25996__$1 = (function (){var statearr_26078 = state_25996;
(statearr_26078[(22)] = inst_25870__$1);

return statearr_26078;
})();
if(inst_25870__$1){
var statearr_26079_26144 = state_25996__$1;
(statearr_26079_26144[(1)] = (10));

} else {
var statearr_26080_26145 = state_25996__$1;
(statearr_26080_26145[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19791__auto__,map__25842,map__25842__$1,opts,before_jsload,on_jsload,reload_dependents,map__25843,map__25843__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19726__auto__,c__19791__auto__,map__25842,map__25842__$1,opts,before_jsload,on_jsload,reload_dependents,map__25843,map__25843__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19727__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19727__auto____0 = (function (){
var statearr_26084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26084[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19727__auto__);

(statearr_26084[(1)] = (1));

return statearr_26084;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19727__auto____1 = (function (state_25996){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_25996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e26085){if((e26085 instanceof Object)){
var ex__19730__auto__ = e26085;
var statearr_26086_26146 = state_25996;
(statearr_26086_26146[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26147 = state_25996;
state_25996 = G__26147;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19727__auto__ = function(state_25996){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19727__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19727__auto____1.call(this,state_25996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19727__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19727__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19791__auto__,map__25842,map__25842__$1,opts,before_jsload,on_jsload,reload_dependents,map__25843,map__25843__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19793__auto__ = (function (){var statearr_26087 = f__19792__auto__.call(null);
(statearr_26087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19791__auto__);

return statearr_26087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19793__auto__);
});})(c__19791__auto__,map__25842,map__25842__$1,opts,before_jsload,on_jsload,reload_dependents,map__25843,map__25843__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19791__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26150,link){
var map__26153 = p__26150;
var map__26153__$1 = ((((!((map__26153 == null)))?((((map__26153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26153):map__26153);
var file = cljs.core.get.call(null,map__26153__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__26153,map__26153__$1,file){
return (function (p1__26148_SHARP_,p2__26149_SHARP_){
if(cljs.core._EQ_.call(null,p1__26148_SHARP_,p2__26149_SHARP_)){
return p1__26148_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__26153,map__26153__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26159){
var map__26160 = p__26159;
var map__26160__$1 = ((((!((map__26160 == null)))?((((map__26160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26160):map__26160);
var match_length = cljs.core.get.call(null,map__26160__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26160__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26155_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26155_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args26162 = [];
var len__17548__auto___26165 = arguments.length;
var i__17549__auto___26166 = (0);
while(true){
if((i__17549__auto___26166 < len__17548__auto___26165)){
args26162.push((arguments[i__17549__auto___26166]));

var G__26167 = (i__17549__auto___26166 + (1));
i__17549__auto___26166 = G__26167;
continue;
} else {
}
break;
}

var G__26164 = args26162.length;
switch (G__26164) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26162.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26169_SHARP_,p2__26170_SHARP_){
return cljs.core.assoc.call(null,p1__26169_SHARP_,cljs.core.get.call(null,p2__26170_SHARP_,key),p2__26170_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26171){
var map__26174 = p__26171;
var map__26174__$1 = ((((!((map__26174 == null)))?((((map__26174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26174):map__26174);
var f_data = map__26174__$1;
var file = cljs.core.get.call(null,map__26174__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26176,files_msg){
var map__26183 = p__26176;
var map__26183__$1 = ((((!((map__26183 == null)))?((((map__26183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26183):map__26183);
var opts = map__26183__$1;
var on_cssload = cljs.core.get.call(null,map__26183__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26185_26189 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26186_26190 = null;
var count__26187_26191 = (0);
var i__26188_26192 = (0);
while(true){
if((i__26188_26192 < count__26187_26191)){
var f_26193 = cljs.core._nth.call(null,chunk__26186_26190,i__26188_26192);
figwheel.client.file_reloading.reload_css_file.call(null,f_26193);

var G__26194 = seq__26185_26189;
var G__26195 = chunk__26186_26190;
var G__26196 = count__26187_26191;
var G__26197 = (i__26188_26192 + (1));
seq__26185_26189 = G__26194;
chunk__26186_26190 = G__26195;
count__26187_26191 = G__26196;
i__26188_26192 = G__26197;
continue;
} else {
var temp__4425__auto___26198 = cljs.core.seq.call(null,seq__26185_26189);
if(temp__4425__auto___26198){
var seq__26185_26199__$1 = temp__4425__auto___26198;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26185_26199__$1)){
var c__17293__auto___26200 = cljs.core.chunk_first.call(null,seq__26185_26199__$1);
var G__26201 = cljs.core.chunk_rest.call(null,seq__26185_26199__$1);
var G__26202 = c__17293__auto___26200;
var G__26203 = cljs.core.count.call(null,c__17293__auto___26200);
var G__26204 = (0);
seq__26185_26189 = G__26201;
chunk__26186_26190 = G__26202;
count__26187_26191 = G__26203;
i__26188_26192 = G__26204;
continue;
} else {
var f_26205 = cljs.core.first.call(null,seq__26185_26199__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26205);

var G__26206 = cljs.core.next.call(null,seq__26185_26199__$1);
var G__26207 = null;
var G__26208 = (0);
var G__26209 = (0);
seq__26185_26189 = G__26206;
chunk__26186_26190 = G__26207;
count__26187_26191 = G__26208;
i__26188_26192 = G__26209;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__26183,map__26183__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__26183,map__26183__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1441510900727