// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24104__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24104 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24105__i = 0, G__24105__a = new Array(arguments.length -  0);
while (G__24105__i < G__24105__a.length) {G__24105__a[G__24105__i] = arguments[G__24105__i + 0]; ++G__24105__i;}
  args = new cljs.core.IndexedSeq(G__24105__a,0);
} 
return G__24104__delegate.call(this,args);};
G__24104.cljs$lang$maxFixedArity = 0;
G__24104.cljs$lang$applyTo = (function (arglist__24106){
var args = cljs.core.seq(arglist__24106);
return G__24104__delegate(args);
});
G__24104.cljs$core$IFn$_invoke$arity$variadic = G__24104__delegate;
return G__24104;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24107){
var map__24110 = p__24107;
var map__24110__$1 = ((((!((map__24110 == null)))?((((map__24110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24110):map__24110);
var message = cljs.core.get.call(null,map__24110__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24110__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16490__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16478__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16478__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16478__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19791__auto___24240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19791__auto___24240,ch){
return (function (){
var f__19792__auto__ = (function (){var switch__19726__auto__ = ((function (c__19791__auto___24240,ch){
return (function (state_24214){
var state_val_24215 = (state_24214[(1)]);
if((state_val_24215 === (7))){
var inst_24210 = (state_24214[(2)]);
var state_24214__$1 = state_24214;
var statearr_24216_24241 = state_24214__$1;
(statearr_24216_24241[(2)] = inst_24210);

(statearr_24216_24241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24215 === (1))){
var state_24214__$1 = state_24214;
var statearr_24217_24242 = state_24214__$1;
(statearr_24217_24242[(2)] = null);

(statearr_24217_24242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24215 === (4))){
var inst_24178 = (state_24214[(7)]);
var inst_24178__$1 = (state_24214[(2)]);
var state_24214__$1 = (function (){var statearr_24218 = state_24214;
(statearr_24218[(7)] = inst_24178__$1);

return statearr_24218;
})();
if(cljs.core.truth_(inst_24178__$1)){
var statearr_24219_24243 = state_24214__$1;
(statearr_24219_24243[(1)] = (5));

} else {
var statearr_24220_24244 = state_24214__$1;
(statearr_24220_24244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24215 === (13))){
var state_24214__$1 = state_24214;
var statearr_24221_24245 = state_24214__$1;
(statearr_24221_24245[(2)] = null);

(statearr_24221_24245[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24215 === (6))){
var state_24214__$1 = state_24214;
var statearr_24222_24246 = state_24214__$1;
(statearr_24222_24246[(2)] = null);

(statearr_24222_24246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24215 === (3))){
var inst_24212 = (state_24214[(2)]);
var state_24214__$1 = state_24214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24214__$1,inst_24212);
} else {
if((state_val_24215 === (12))){
var inst_24185 = (state_24214[(8)]);
var inst_24198 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24185);
var inst_24199 = cljs.core.first.call(null,inst_24198);
var inst_24200 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24199);
var inst_24201 = console.warn("Figwheel: Not loading code with warnings - ",inst_24200);
var state_24214__$1 = state_24214;
var statearr_24223_24247 = state_24214__$1;
(statearr_24223_24247[(2)] = inst_24201);

(statearr_24223_24247[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24215 === (2))){
var state_24214__$1 = state_24214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24214__$1,(4),ch);
} else {
if((state_val_24215 === (11))){
var inst_24194 = (state_24214[(2)]);
var state_24214__$1 = state_24214;
var statearr_24224_24248 = state_24214__$1;
(statearr_24224_24248[(2)] = inst_24194);

(statearr_24224_24248[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24215 === (9))){
var inst_24184 = (state_24214[(9)]);
var inst_24196 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24184,opts);
var state_24214__$1 = state_24214;
if(cljs.core.truth_(inst_24196)){
var statearr_24225_24249 = state_24214__$1;
(statearr_24225_24249[(1)] = (12));

} else {
var statearr_24226_24250 = state_24214__$1;
(statearr_24226_24250[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24215 === (5))){
var inst_24184 = (state_24214[(9)]);
var inst_24178 = (state_24214[(7)]);
var inst_24180 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24181 = (new cljs.core.PersistentArrayMap(null,2,inst_24180,null));
var inst_24182 = (new cljs.core.PersistentHashSet(null,inst_24181,null));
var inst_24183 = figwheel.client.focus_msgs.call(null,inst_24182,inst_24178);
var inst_24184__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24183);
var inst_24185 = cljs.core.first.call(null,inst_24183);
var inst_24186 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24184__$1,opts);
var state_24214__$1 = (function (){var statearr_24227 = state_24214;
(statearr_24227[(8)] = inst_24185);

(statearr_24227[(9)] = inst_24184__$1);

return statearr_24227;
})();
if(cljs.core.truth_(inst_24186)){
var statearr_24228_24251 = state_24214__$1;
(statearr_24228_24251[(1)] = (8));

} else {
var statearr_24229_24252 = state_24214__$1;
(statearr_24229_24252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24215 === (14))){
var inst_24204 = (state_24214[(2)]);
var state_24214__$1 = state_24214;
var statearr_24230_24253 = state_24214__$1;
(statearr_24230_24253[(2)] = inst_24204);

(statearr_24230_24253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24215 === (10))){
var inst_24206 = (state_24214[(2)]);
var state_24214__$1 = (function (){var statearr_24231 = state_24214;
(statearr_24231[(10)] = inst_24206);

return statearr_24231;
})();
var statearr_24232_24254 = state_24214__$1;
(statearr_24232_24254[(2)] = null);

(statearr_24232_24254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24215 === (8))){
var inst_24185 = (state_24214[(8)]);
var inst_24188 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24189 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24185);
var inst_24190 = cljs.core.async.timeout.call(null,(1000));
var inst_24191 = [inst_24189,inst_24190];
var inst_24192 = (new cljs.core.PersistentVector(null,2,(5),inst_24188,inst_24191,null));
var state_24214__$1 = state_24214;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24214__$1,(11),inst_24192);
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
});})(c__19791__auto___24240,ch))
;
return ((function (switch__19726__auto__,c__19791__auto___24240,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19727__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19727__auto____0 = (function (){
var statearr_24236 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24236[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19727__auto__);

(statearr_24236[(1)] = (1));

return statearr_24236;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19727__auto____1 = (function (state_24214){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_24214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e24237){if((e24237 instanceof Object)){
var ex__19730__auto__ = e24237;
var statearr_24238_24255 = state_24214;
(statearr_24238_24255[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24256 = state_24214;
state_24214 = G__24256;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19727__auto__ = function(state_24214){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19727__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19727__auto____1.call(this,state_24214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19727__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19727__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19791__auto___24240,ch))
})();
var state__19793__auto__ = (function (){var statearr_24239 = f__19792__auto__.call(null);
(statearr_24239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19791__auto___24240);

return statearr_24239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19793__auto__);
});})(c__19791__auto___24240,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24257_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24257_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_24264 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24264){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_24262 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24263 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_24262,_STAR_print_newline_STAR_24263,base_path_24264){
return (function() { 
var G__24265__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24265 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24266__i = 0, G__24266__a = new Array(arguments.length -  0);
while (G__24266__i < G__24266__a.length) {G__24266__a[G__24266__i] = arguments[G__24266__i + 0]; ++G__24266__i;}
  args = new cljs.core.IndexedSeq(G__24266__a,0);
} 
return G__24265__delegate.call(this,args);};
G__24265.cljs$lang$maxFixedArity = 0;
G__24265.cljs$lang$applyTo = (function (arglist__24267){
var args = cljs.core.seq(arglist__24267);
return G__24265__delegate(args);
});
G__24265.cljs$core$IFn$_invoke$arity$variadic = G__24265__delegate;
return G__24265;
})()
;})(_STAR_print_fn_STAR_24262,_STAR_print_newline_STAR_24263,base_path_24264))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24263;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24262;
}}catch (e24261){if((e24261 instanceof Error)){
var e = e24261;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24264], null));
} else {
var e = e24261;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24264))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24268){
var map__24275 = p__24268;
var map__24275__$1 = ((((!((map__24275 == null)))?((((map__24275.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24275.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24275):map__24275);
var opts = map__24275__$1;
var build_id = cljs.core.get.call(null,map__24275__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24275,map__24275__$1,opts,build_id){
return (function (p__24277){
var vec__24278 = p__24277;
var map__24279 = cljs.core.nth.call(null,vec__24278,(0),null);
var map__24279__$1 = ((((!((map__24279 == null)))?((((map__24279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24279):map__24279);
var msg = map__24279__$1;
var msg_name = cljs.core.get.call(null,map__24279__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24278,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24278,map__24279,map__24279__$1,msg,msg_name,_,map__24275,map__24275__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24278,map__24279,map__24279__$1,msg,msg_name,_,map__24275,map__24275__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24275,map__24275__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24285){
var vec__24286 = p__24285;
var map__24287 = cljs.core.nth.call(null,vec__24286,(0),null);
var map__24287__$1 = ((((!((map__24287 == null)))?((((map__24287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24287):map__24287);
var msg = map__24287__$1;
var msg_name = cljs.core.get.call(null,map__24287__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24286,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24289){
var map__24299 = p__24289;
var map__24299__$1 = ((((!((map__24299 == null)))?((((map__24299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24299):map__24299);
var on_compile_warning = cljs.core.get.call(null,map__24299__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24299__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24299,map__24299__$1,on_compile_warning,on_compile_fail){
return (function (p__24301){
var vec__24302 = p__24301;
var map__24303 = cljs.core.nth.call(null,vec__24302,(0),null);
var map__24303__$1 = ((((!((map__24303 == null)))?((((map__24303.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24303.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24303):map__24303);
var msg = map__24303__$1;
var msg_name = cljs.core.get.call(null,map__24303__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24302,(1));
var pred__24305 = cljs.core._EQ_;
var expr__24306 = msg_name;
if(cljs.core.truth_(pred__24305.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24306))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24305.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24306))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24299,map__24299__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19791__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19791__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19792__auto__ = (function (){var switch__19726__auto__ = ((function (c__19791__auto__,msg_hist,msg_names,msg){
return (function (state_24507){
var state_val_24508 = (state_24507[(1)]);
if((state_val_24508 === (7))){
var inst_24441 = (state_24507[(2)]);
var state_24507__$1 = state_24507;
var statearr_24509_24550 = state_24507__$1;
(statearr_24509_24550[(2)] = inst_24441);

(statearr_24509_24550[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24508 === (20))){
var inst_24469 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24507__$1 = state_24507;
if(cljs.core.truth_(inst_24469)){
var statearr_24510_24551 = state_24507__$1;
(statearr_24510_24551[(1)] = (22));

} else {
var statearr_24511_24552 = state_24507__$1;
(statearr_24511_24552[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24508 === (27))){
var inst_24481 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24482 = figwheel.client.heads_up.display_warning.call(null,inst_24481);
var state_24507__$1 = state_24507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24507__$1,(30),inst_24482);
} else {
if((state_val_24508 === (1))){
var inst_24429 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24507__$1 = state_24507;
if(cljs.core.truth_(inst_24429)){
var statearr_24512_24553 = state_24507__$1;
(statearr_24512_24553[(1)] = (2));

} else {
var statearr_24513_24554 = state_24507__$1;
(statearr_24513_24554[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24508 === (24))){
var inst_24497 = (state_24507[(2)]);
var state_24507__$1 = state_24507;
var statearr_24514_24555 = state_24507__$1;
(statearr_24514_24555[(2)] = inst_24497);

(statearr_24514_24555[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24508 === (4))){
var inst_24505 = (state_24507[(2)]);
var state_24507__$1 = state_24507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24507__$1,inst_24505);
} else {
if((state_val_24508 === (15))){
var inst_24457 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24458 = figwheel.client.format_messages.call(null,inst_24457);
var inst_24459 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24460 = figwheel.client.heads_up.display_error.call(null,inst_24458,inst_24459);
var state_24507__$1 = state_24507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24507__$1,(18),inst_24460);
} else {
if((state_val_24508 === (21))){
var inst_24499 = (state_24507[(2)]);
var state_24507__$1 = state_24507;
var statearr_24515_24556 = state_24507__$1;
(statearr_24515_24556[(2)] = inst_24499);

(statearr_24515_24556[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24508 === (31))){
var inst_24488 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24507__$1 = state_24507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24507__$1,(34),inst_24488);
} else {
if((state_val_24508 === (32))){
var state_24507__$1 = state_24507;
var statearr_24516_24557 = state_24507__$1;
(statearr_24516_24557[(2)] = null);

(statearr_24516_24557[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24508 === (33))){
var inst_24493 = (state_24507[(2)]);
var state_24507__$1 = state_24507;
var statearr_24517_24558 = state_24507__$1;
(statearr_24517_24558[(2)] = inst_24493);

(statearr_24517_24558[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24508 === (13))){
var inst_24447 = (state_24507[(2)]);
var inst_24448 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24449 = figwheel.client.format_messages.call(null,inst_24448);
var inst_24450 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24451 = figwheel.client.heads_up.display_error.call(null,inst_24449,inst_24450);
var state_24507__$1 = (function (){var statearr_24518 = state_24507;
(statearr_24518[(7)] = inst_24447);

return statearr_24518;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24507__$1,(14),inst_24451);
} else {
if((state_val_24508 === (22))){
var inst_24471 = figwheel.client.heads_up.clear.call(null);
var state_24507__$1 = state_24507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24507__$1,(25),inst_24471);
} else {
if((state_val_24508 === (29))){
var inst_24495 = (state_24507[(2)]);
var state_24507__$1 = state_24507;
var statearr_24519_24559 = state_24507__$1;
(statearr_24519_24559[(2)] = inst_24495);

(statearr_24519_24559[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24508 === (6))){
var inst_24437 = figwheel.client.heads_up.clear.call(null);
var state_24507__$1 = state_24507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24507__$1,(9),inst_24437);
} else {
if((state_val_24508 === (28))){
var inst_24486 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24507__$1 = state_24507;
if(cljs.core.truth_(inst_24486)){
var statearr_24520_24560 = state_24507__$1;
(statearr_24520_24560[(1)] = (31));

} else {
var statearr_24521_24561 = state_24507__$1;
(statearr_24521_24561[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24508 === (25))){
var inst_24473 = (state_24507[(2)]);
var inst_24474 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24475 = figwheel.client.heads_up.display_warning.call(null,inst_24474);
var state_24507__$1 = (function (){var statearr_24522 = state_24507;
(statearr_24522[(8)] = inst_24473);

return statearr_24522;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24507__$1,(26),inst_24475);
} else {
if((state_val_24508 === (34))){
var inst_24490 = (state_24507[(2)]);
var state_24507__$1 = state_24507;
var statearr_24523_24562 = state_24507__$1;
(statearr_24523_24562[(2)] = inst_24490);

(statearr_24523_24562[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24508 === (17))){
var inst_24501 = (state_24507[(2)]);
var state_24507__$1 = state_24507;
var statearr_24524_24563 = state_24507__$1;
(statearr_24524_24563[(2)] = inst_24501);

(statearr_24524_24563[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24508 === (3))){
var inst_24443 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24507__$1 = state_24507;
if(cljs.core.truth_(inst_24443)){
var statearr_24525_24564 = state_24507__$1;
(statearr_24525_24564[(1)] = (10));

} else {
var statearr_24526_24565 = state_24507__$1;
(statearr_24526_24565[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24508 === (12))){
var inst_24503 = (state_24507[(2)]);
var state_24507__$1 = state_24507;
var statearr_24527_24566 = state_24507__$1;
(statearr_24527_24566[(2)] = inst_24503);

(statearr_24527_24566[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24508 === (2))){
var inst_24431 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24507__$1 = state_24507;
if(cljs.core.truth_(inst_24431)){
var statearr_24528_24567 = state_24507__$1;
(statearr_24528_24567[(1)] = (5));

} else {
var statearr_24529_24568 = state_24507__$1;
(statearr_24529_24568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24508 === (23))){
var inst_24479 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24507__$1 = state_24507;
if(cljs.core.truth_(inst_24479)){
var statearr_24530_24569 = state_24507__$1;
(statearr_24530_24569[(1)] = (27));

} else {
var statearr_24531_24570 = state_24507__$1;
(statearr_24531_24570[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24508 === (19))){
var inst_24466 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24467 = figwheel.client.heads_up.append_message.call(null,inst_24466);
var state_24507__$1 = state_24507;
var statearr_24532_24571 = state_24507__$1;
(statearr_24532_24571[(2)] = inst_24467);

(statearr_24532_24571[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24508 === (11))){
var inst_24455 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24507__$1 = state_24507;
if(cljs.core.truth_(inst_24455)){
var statearr_24533_24572 = state_24507__$1;
(statearr_24533_24572[(1)] = (15));

} else {
var statearr_24534_24573 = state_24507__$1;
(statearr_24534_24573[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24508 === (9))){
var inst_24439 = (state_24507[(2)]);
var state_24507__$1 = state_24507;
var statearr_24535_24574 = state_24507__$1;
(statearr_24535_24574[(2)] = inst_24439);

(statearr_24535_24574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24508 === (5))){
var inst_24433 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24507__$1 = state_24507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24507__$1,(8),inst_24433);
} else {
if((state_val_24508 === (14))){
var inst_24453 = (state_24507[(2)]);
var state_24507__$1 = state_24507;
var statearr_24536_24575 = state_24507__$1;
(statearr_24536_24575[(2)] = inst_24453);

(statearr_24536_24575[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24508 === (26))){
var inst_24477 = (state_24507[(2)]);
var state_24507__$1 = state_24507;
var statearr_24537_24576 = state_24507__$1;
(statearr_24537_24576[(2)] = inst_24477);

(statearr_24537_24576[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24508 === (16))){
var inst_24464 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24507__$1 = state_24507;
if(cljs.core.truth_(inst_24464)){
var statearr_24538_24577 = state_24507__$1;
(statearr_24538_24577[(1)] = (19));

} else {
var statearr_24539_24578 = state_24507__$1;
(statearr_24539_24578[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24508 === (30))){
var inst_24484 = (state_24507[(2)]);
var state_24507__$1 = state_24507;
var statearr_24540_24579 = state_24507__$1;
(statearr_24540_24579[(2)] = inst_24484);

(statearr_24540_24579[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24508 === (10))){
var inst_24445 = figwheel.client.heads_up.clear.call(null);
var state_24507__$1 = state_24507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24507__$1,(13),inst_24445);
} else {
if((state_val_24508 === (18))){
var inst_24462 = (state_24507[(2)]);
var state_24507__$1 = state_24507;
var statearr_24541_24580 = state_24507__$1;
(statearr_24541_24580[(2)] = inst_24462);

(statearr_24541_24580[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24508 === (8))){
var inst_24435 = (state_24507[(2)]);
var state_24507__$1 = state_24507;
var statearr_24542_24581 = state_24507__$1;
(statearr_24542_24581[(2)] = inst_24435);

(statearr_24542_24581[(1)] = (7));


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
});})(c__19791__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19726__auto__,c__19791__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19727__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19727__auto____0 = (function (){
var statearr_24546 = [null,null,null,null,null,null,null,null,null];
(statearr_24546[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19727__auto__);

(statearr_24546[(1)] = (1));

return statearr_24546;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19727__auto____1 = (function (state_24507){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_24507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e24547){if((e24547 instanceof Object)){
var ex__19730__auto__ = e24547;
var statearr_24548_24582 = state_24507;
(statearr_24548_24582[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24583 = state_24507;
state_24507 = G__24583;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19727__auto__ = function(state_24507){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19727__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19727__auto____1.call(this,state_24507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19727__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19727__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19791__auto__,msg_hist,msg_names,msg))
})();
var state__19793__auto__ = (function (){var statearr_24549 = f__19792__auto__.call(null);
(statearr_24549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19791__auto__);

return statearr_24549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19793__auto__);
});})(c__19791__auto__,msg_hist,msg_names,msg))
);

return c__19791__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19791__auto___24646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19791__auto___24646,ch){
return (function (){
var f__19792__auto__ = (function (){var switch__19726__auto__ = ((function (c__19791__auto___24646,ch){
return (function (state_24629){
var state_val_24630 = (state_24629[(1)]);
if((state_val_24630 === (1))){
var state_24629__$1 = state_24629;
var statearr_24631_24647 = state_24629__$1;
(statearr_24631_24647[(2)] = null);

(statearr_24631_24647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24630 === (2))){
var state_24629__$1 = state_24629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24629__$1,(4),ch);
} else {
if((state_val_24630 === (3))){
var inst_24627 = (state_24629[(2)]);
var state_24629__$1 = state_24629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24629__$1,inst_24627);
} else {
if((state_val_24630 === (4))){
var inst_24617 = (state_24629[(7)]);
var inst_24617__$1 = (state_24629[(2)]);
var state_24629__$1 = (function (){var statearr_24632 = state_24629;
(statearr_24632[(7)] = inst_24617__$1);

return statearr_24632;
})();
if(cljs.core.truth_(inst_24617__$1)){
var statearr_24633_24648 = state_24629__$1;
(statearr_24633_24648[(1)] = (5));

} else {
var statearr_24634_24649 = state_24629__$1;
(statearr_24634_24649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24630 === (5))){
var inst_24617 = (state_24629[(7)]);
var inst_24619 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24617);
var state_24629__$1 = state_24629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24629__$1,(8),inst_24619);
} else {
if((state_val_24630 === (6))){
var state_24629__$1 = state_24629;
var statearr_24635_24650 = state_24629__$1;
(statearr_24635_24650[(2)] = null);

(statearr_24635_24650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24630 === (7))){
var inst_24625 = (state_24629[(2)]);
var state_24629__$1 = state_24629;
var statearr_24636_24651 = state_24629__$1;
(statearr_24636_24651[(2)] = inst_24625);

(statearr_24636_24651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24630 === (8))){
var inst_24621 = (state_24629[(2)]);
var state_24629__$1 = (function (){var statearr_24637 = state_24629;
(statearr_24637[(8)] = inst_24621);

return statearr_24637;
})();
var statearr_24638_24652 = state_24629__$1;
(statearr_24638_24652[(2)] = null);

(statearr_24638_24652[(1)] = (2));


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
});})(c__19791__auto___24646,ch))
;
return ((function (switch__19726__auto__,c__19791__auto___24646,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19727__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19727__auto____0 = (function (){
var statearr_24642 = [null,null,null,null,null,null,null,null,null];
(statearr_24642[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19727__auto__);

(statearr_24642[(1)] = (1));

return statearr_24642;
});
var figwheel$client$heads_up_plugin_$_state_machine__19727__auto____1 = (function (state_24629){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_24629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e24643){if((e24643 instanceof Object)){
var ex__19730__auto__ = e24643;
var statearr_24644_24653 = state_24629;
(statearr_24644_24653[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24654 = state_24629;
state_24629 = G__24654;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19727__auto__ = function(state_24629){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19727__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19727__auto____1.call(this,state_24629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19727__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19727__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19791__auto___24646,ch))
})();
var state__19793__auto__ = (function (){var statearr_24645 = f__19792__auto__.call(null);
(statearr_24645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19791__auto___24646);

return statearr_24645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19793__auto__);
});})(c__19791__auto___24646,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19791__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19791__auto__){
return (function (){
var f__19792__auto__ = (function (){var switch__19726__auto__ = ((function (c__19791__auto__){
return (function (state_24675){
var state_val_24676 = (state_24675[(1)]);
if((state_val_24676 === (1))){
var inst_24670 = cljs.core.async.timeout.call(null,(3000));
var state_24675__$1 = state_24675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24675__$1,(2),inst_24670);
} else {
if((state_val_24676 === (2))){
var inst_24672 = (state_24675[(2)]);
var inst_24673 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24675__$1 = (function (){var statearr_24677 = state_24675;
(statearr_24677[(7)] = inst_24672);

return statearr_24677;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24675__$1,inst_24673);
} else {
return null;
}
}
});})(c__19791__auto__))
;
return ((function (switch__19726__auto__,c__19791__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19727__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19727__auto____0 = (function (){
var statearr_24681 = [null,null,null,null,null,null,null,null];
(statearr_24681[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19727__auto__);

(statearr_24681[(1)] = (1));

return statearr_24681;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19727__auto____1 = (function (state_24675){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_24675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e24682){if((e24682 instanceof Object)){
var ex__19730__auto__ = e24682;
var statearr_24683_24685 = state_24675;
(statearr_24683_24685[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24686 = state_24675;
state_24675 = G__24686;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19727__auto__ = function(state_24675){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19727__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19727__auto____1.call(this,state_24675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19727__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19727__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19791__auto__))
})();
var state__19793__auto__ = (function (){var statearr_24684 = f__19792__auto__.call(null);
(statearr_24684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19791__auto__);

return statearr_24684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19793__auto__);
});})(c__19791__auto__))
);

return c__19791__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24687){
var map__24694 = p__24687;
var map__24694__$1 = ((((!((map__24694 == null)))?((((map__24694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24694):map__24694);
var ed = map__24694__$1;
var formatted_exception = cljs.core.get.call(null,map__24694__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24694__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24694__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24696_24700 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24697_24701 = null;
var count__24698_24702 = (0);
var i__24699_24703 = (0);
while(true){
if((i__24699_24703 < count__24698_24702)){
var msg_24704 = cljs.core._nth.call(null,chunk__24697_24701,i__24699_24703);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24704);

var G__24705 = seq__24696_24700;
var G__24706 = chunk__24697_24701;
var G__24707 = count__24698_24702;
var G__24708 = (i__24699_24703 + (1));
seq__24696_24700 = G__24705;
chunk__24697_24701 = G__24706;
count__24698_24702 = G__24707;
i__24699_24703 = G__24708;
continue;
} else {
var temp__4425__auto___24709 = cljs.core.seq.call(null,seq__24696_24700);
if(temp__4425__auto___24709){
var seq__24696_24710__$1 = temp__4425__auto___24709;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24696_24710__$1)){
var c__17293__auto___24711 = cljs.core.chunk_first.call(null,seq__24696_24710__$1);
var G__24712 = cljs.core.chunk_rest.call(null,seq__24696_24710__$1);
var G__24713 = c__17293__auto___24711;
var G__24714 = cljs.core.count.call(null,c__17293__auto___24711);
var G__24715 = (0);
seq__24696_24700 = G__24712;
chunk__24697_24701 = G__24713;
count__24698_24702 = G__24714;
i__24699_24703 = G__24715;
continue;
} else {
var msg_24716 = cljs.core.first.call(null,seq__24696_24710__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24716);

var G__24717 = cljs.core.next.call(null,seq__24696_24710__$1);
var G__24718 = null;
var G__24719 = (0);
var G__24720 = (0);
seq__24696_24700 = G__24717;
chunk__24697_24701 = G__24718;
count__24698_24702 = G__24719;
i__24699_24703 = G__24720;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24721){
var map__24724 = p__24721;
var map__24724__$1 = ((((!((map__24724 == null)))?((((map__24724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24724):map__24724);
var w = map__24724__$1;
var message = cljs.core.get.call(null,map__24724__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16478__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16478__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16478__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24732 = cljs.core.seq.call(null,plugins);
var chunk__24733 = null;
var count__24734 = (0);
var i__24735 = (0);
while(true){
if((i__24735 < count__24734)){
var vec__24736 = cljs.core._nth.call(null,chunk__24733,i__24735);
var k = cljs.core.nth.call(null,vec__24736,(0),null);
var plugin = cljs.core.nth.call(null,vec__24736,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24738 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24732,chunk__24733,count__24734,i__24735,pl_24738,vec__24736,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24738.call(null,msg_hist);
});})(seq__24732,chunk__24733,count__24734,i__24735,pl_24738,vec__24736,k,plugin))
);
} else {
}

var G__24739 = seq__24732;
var G__24740 = chunk__24733;
var G__24741 = count__24734;
var G__24742 = (i__24735 + (1));
seq__24732 = G__24739;
chunk__24733 = G__24740;
count__24734 = G__24741;
i__24735 = G__24742;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24732);
if(temp__4425__auto__){
var seq__24732__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24732__$1)){
var c__17293__auto__ = cljs.core.chunk_first.call(null,seq__24732__$1);
var G__24743 = cljs.core.chunk_rest.call(null,seq__24732__$1);
var G__24744 = c__17293__auto__;
var G__24745 = cljs.core.count.call(null,c__17293__auto__);
var G__24746 = (0);
seq__24732 = G__24743;
chunk__24733 = G__24744;
count__24734 = G__24745;
i__24735 = G__24746;
continue;
} else {
var vec__24737 = cljs.core.first.call(null,seq__24732__$1);
var k = cljs.core.nth.call(null,vec__24737,(0),null);
var plugin = cljs.core.nth.call(null,vec__24737,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24747 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24732,chunk__24733,count__24734,i__24735,pl_24747,vec__24737,k,plugin,seq__24732__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24747.call(null,msg_hist);
});})(seq__24732,chunk__24733,count__24734,i__24735,pl_24747,vec__24737,k,plugin,seq__24732__$1,temp__4425__auto__))
);
} else {
}

var G__24748 = cljs.core.next.call(null,seq__24732__$1);
var G__24749 = null;
var G__24750 = (0);
var G__24751 = (0);
seq__24732 = G__24748;
chunk__24733 = G__24749;
count__24734 = G__24750;
i__24735 = G__24751;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args24752 = [];
var len__17548__auto___24755 = arguments.length;
var i__17549__auto___24756 = (0);
while(true){
if((i__17549__auto___24756 < len__17548__auto___24755)){
args24752.push((arguments[i__17549__auto___24756]));

var G__24757 = (i__17549__auto___24756 + (1));
i__17549__auto___24756 = G__24757;
continue;
} else {
}
break;
}

var G__24754 = args24752.length;
switch (G__24754) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24752.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17555__auto__ = [];
var len__17548__auto___24763 = arguments.length;
var i__17549__auto___24764 = (0);
while(true){
if((i__17549__auto___24764 < len__17548__auto___24763)){
args__17555__auto__.push((arguments[i__17549__auto___24764]));

var G__24765 = (i__17549__auto___24764 + (1));
i__17549__auto___24764 = G__24765;
continue;
} else {
}
break;
}

var argseq__17556__auto__ = ((((0) < args__17555__auto__.length))?(new cljs.core.IndexedSeq(args__17555__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17556__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24760){
var map__24761 = p__24760;
var map__24761__$1 = ((((!((map__24761 == null)))?((((map__24761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24761):map__24761);
var opts = map__24761__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24759){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24759));
});

//# sourceMappingURL=client.js.map?rel=1441510898867