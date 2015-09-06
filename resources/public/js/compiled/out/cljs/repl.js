// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25151_25165 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25152_25166 = null;
var count__25153_25167 = (0);
var i__25154_25168 = (0);
while(true){
if((i__25154_25168 < count__25153_25167)){
var f_25169 = cljs.core._nth.call(null,chunk__25152_25166,i__25154_25168);
cljs.core.println.call(null,"  ",f_25169);

var G__25170 = seq__25151_25165;
var G__25171 = chunk__25152_25166;
var G__25172 = count__25153_25167;
var G__25173 = (i__25154_25168 + (1));
seq__25151_25165 = G__25170;
chunk__25152_25166 = G__25171;
count__25153_25167 = G__25172;
i__25154_25168 = G__25173;
continue;
} else {
var temp__4425__auto___25174 = cljs.core.seq.call(null,seq__25151_25165);
if(temp__4425__auto___25174){
var seq__25151_25175__$1 = temp__4425__auto___25174;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25151_25175__$1)){
var c__17293__auto___25176 = cljs.core.chunk_first.call(null,seq__25151_25175__$1);
var G__25177 = cljs.core.chunk_rest.call(null,seq__25151_25175__$1);
var G__25178 = c__17293__auto___25176;
var G__25179 = cljs.core.count.call(null,c__17293__auto___25176);
var G__25180 = (0);
seq__25151_25165 = G__25177;
chunk__25152_25166 = G__25178;
count__25153_25167 = G__25179;
i__25154_25168 = G__25180;
continue;
} else {
var f_25181 = cljs.core.first.call(null,seq__25151_25175__$1);
cljs.core.println.call(null,"  ",f_25181);

var G__25182 = cljs.core.next.call(null,seq__25151_25175__$1);
var G__25183 = null;
var G__25184 = (0);
var G__25185 = (0);
seq__25151_25165 = G__25182;
chunk__25152_25166 = G__25183;
count__25153_25167 = G__25184;
i__25154_25168 = G__25185;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25186 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16490__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25186);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25186)))?cljs.core.second.call(null,arglists_25186):arglists_25186));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25155 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25156 = null;
var count__25157 = (0);
var i__25158 = (0);
while(true){
if((i__25158 < count__25157)){
var vec__25159 = cljs.core._nth.call(null,chunk__25156,i__25158);
var name = cljs.core.nth.call(null,vec__25159,(0),null);
var map__25160 = cljs.core.nth.call(null,vec__25159,(1),null);
var map__25160__$1 = ((((!((map__25160 == null)))?((((map__25160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25160):map__25160);
var doc = cljs.core.get.call(null,map__25160__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25160__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25187 = seq__25155;
var G__25188 = chunk__25156;
var G__25189 = count__25157;
var G__25190 = (i__25158 + (1));
seq__25155 = G__25187;
chunk__25156 = G__25188;
count__25157 = G__25189;
i__25158 = G__25190;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25155);
if(temp__4425__auto__){
var seq__25155__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25155__$1)){
var c__17293__auto__ = cljs.core.chunk_first.call(null,seq__25155__$1);
var G__25191 = cljs.core.chunk_rest.call(null,seq__25155__$1);
var G__25192 = c__17293__auto__;
var G__25193 = cljs.core.count.call(null,c__17293__auto__);
var G__25194 = (0);
seq__25155 = G__25191;
chunk__25156 = G__25192;
count__25157 = G__25193;
i__25158 = G__25194;
continue;
} else {
var vec__25162 = cljs.core.first.call(null,seq__25155__$1);
var name = cljs.core.nth.call(null,vec__25162,(0),null);
var map__25163 = cljs.core.nth.call(null,vec__25162,(1),null);
var map__25163__$1 = ((((!((map__25163 == null)))?((((map__25163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25163):map__25163);
var doc = cljs.core.get.call(null,map__25163__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25163__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25195 = cljs.core.next.call(null,seq__25155__$1);
var G__25196 = null;
var G__25197 = (0);
var G__25198 = (0);
seq__25155 = G__25195;
chunk__25156 = G__25196;
count__25157 = G__25197;
i__25158 = G__25198;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1441510899831