// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async26276 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26276 = (function (fn_handler,f,meta26277){
this.fn_handler = fn_handler;
this.f = f;
this.meta26277 = meta26277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26278,meta26277__$1){
var self__ = this;
var _26278__$1 = this;
return (new cljs.core.async.t_cljs$core$async26276(self__.fn_handler,self__.f,meta26277__$1));
});

cljs.core.async.t_cljs$core$async26276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26278){
var self__ = this;
var _26278__$1 = this;
return self__.meta26277;
});

cljs.core.async.t_cljs$core$async26276.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26276.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26276.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26276.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta26277","meta26277",1135938011,null)], null);
});

cljs.core.async.t_cljs$core$async26276.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26276.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26276";

cljs.core.async.t_cljs$core$async26276.cljs$lang$ctorPrWriter = (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"cljs.core.async/t_cljs$core$async26276");
});

cljs.core.async.__GT_t_cljs$core$async26276 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async26276(fn_handler__$1,f__$1,meta26277){
return (new cljs.core.async.t_cljs$core$async26276(fn_handler__$1,f__$1,meta26277));
});

}

return (new cljs.core.async.t_cljs$core$async26276(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args26281 = [];
var len__17548__auto___26284 = arguments.length;
var i__17549__auto___26285 = (0);
while(true){
if((i__17549__auto___26285 < len__17548__auto___26284)){
args26281.push((arguments[i__17549__auto___26285]));

var G__26286 = (i__17549__auto___26285 + (1));
i__17549__auto___26285 = G__26286;
continue;
} else {
}
break;
}

var G__26283 = args26281.length;
switch (G__26283) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26281.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args26288 = [];
var len__17548__auto___26291 = arguments.length;
var i__17549__auto___26292 = (0);
while(true){
if((i__17549__auto___26292 < len__17548__auto___26291)){
args26288.push((arguments[i__17549__auto___26292]));

var G__26293 = (i__17549__auto___26292 + (1));
i__17549__auto___26292 = G__26293;
continue;
} else {
}
break;
}

var G__26290 = args26288.length;
switch (G__26290) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26288.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26295 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26295);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26295,ret){
return (function (){
return fn1.call(null,val_26295);
});})(val_26295,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args26296 = [];
var len__17548__auto___26299 = arguments.length;
var i__17549__auto___26300 = (0);
while(true){
if((i__17549__auto___26300 < len__17548__auto___26299)){
args26296.push((arguments[i__17549__auto___26300]));

var G__26301 = (i__17549__auto___26300 + (1));
i__17549__auto___26300 = G__26301;
continue;
} else {
}
break;
}

var G__26298 = args26296.length;
switch (G__26298) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26296.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17393__auto___26303 = n;
var x_26304 = (0);
while(true){
if((x_26304 < n__17393__auto___26303)){
(a[x_26304] = (0));

var G__26305 = (x_26304 + (1));
x_26304 = G__26305;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26306 = (i + (1));
i = G__26306;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26310 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26310 = (function (alt_flag,flag,meta26311){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26311 = meta26311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26312,meta26311__$1){
var self__ = this;
var _26312__$1 = this;
return (new cljs.core.async.t_cljs$core$async26310(self__.alt_flag,self__.flag,meta26311__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26310.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26312){
var self__ = this;
var _26312__$1 = this;
return self__.meta26311;
});})(flag))
;

cljs.core.async.t_cljs$core$async26310.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26310.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26310.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26310.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26311","meta26311",1900041957,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26310.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26310.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26310";

cljs.core.async.t_cljs$core$async26310.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"cljs.core.async/t_cljs$core$async26310");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async26310 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26310(alt_flag__$1,flag__$1,meta26311){
return (new cljs.core.async.t_cljs$core$async26310(alt_flag__$1,flag__$1,meta26311));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26310(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26316 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26316 = (function (alt_handler,flag,cb,meta26317){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26317 = meta26317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26318,meta26317__$1){
var self__ = this;
var _26318__$1 = this;
return (new cljs.core.async.t_cljs$core$async26316(self__.alt_handler,self__.flag,self__.cb,meta26317__$1));
});

cljs.core.async.t_cljs$core$async26316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26318){
var self__ = this;
var _26318__$1 = this;
return self__.meta26317;
});

cljs.core.async.t_cljs$core$async26316.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26316.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26316.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26316.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26317","meta26317",-2019281054,null)], null);
});

cljs.core.async.t_cljs$core$async26316.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26316";

cljs.core.async.t_cljs$core$async26316.cljs$lang$ctorPrWriter = (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"cljs.core.async/t_cljs$core$async26316");
});

cljs.core.async.__GT_t_cljs$core$async26316 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26316(alt_handler__$1,flag__$1,cb__$1,meta26317){
return (new cljs.core.async.t_cljs$core$async26316(alt_handler__$1,flag__$1,cb__$1,meta26317));
});

}

return (new cljs.core.async.t_cljs$core$async26316(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26319_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26319_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26320_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26320_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16490__auto__ = wport;
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26321 = (i + (1));
i = G__26321;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16490__auto__ = ret;
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16478__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16478__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16478__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17555__auto__ = [];
var len__17548__auto___26327 = arguments.length;
var i__17549__auto___26328 = (0);
while(true){
if((i__17549__auto___26328 < len__17548__auto___26327)){
args__17555__auto__.push((arguments[i__17549__auto___26328]));

var G__26329 = (i__17549__auto___26328 + (1));
i__17549__auto___26328 = G__26329;
continue;
} else {
}
break;
}

var argseq__17556__auto__ = ((((1) < args__17555__auto__.length))?(new cljs.core.IndexedSeq(args__17555__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17556__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26324){
var map__26325 = p__26324;
var map__26325__$1 = ((((!((map__26325 == null)))?((((map__26325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26325):map__26325);
var opts = map__26325__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26322){
var G__26323 = cljs.core.first.call(null,seq26322);
var seq26322__$1 = cljs.core.next.call(null,seq26322);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26323,seq26322__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args26330 = [];
var len__17548__auto___26380 = arguments.length;
var i__17549__auto___26381 = (0);
while(true){
if((i__17549__auto___26381 < len__17548__auto___26380)){
args26330.push((arguments[i__17549__auto___26381]));

var G__26382 = (i__17549__auto___26381 + (1));
i__17549__auto___26381 = G__26382;
continue;
} else {
}
break;
}

var G__26332 = args26330.length;
switch (G__26332) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26330.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19791__auto___26384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19791__auto___26384){
return (function (){
var f__19792__auto__ = (function (){var switch__19726__auto__ = ((function (c__19791__auto___26384){
return (function (state_26356){
var state_val_26357 = (state_26356[(1)]);
if((state_val_26357 === (7))){
var inst_26352 = (state_26356[(2)]);
var state_26356__$1 = state_26356;
var statearr_26358_26385 = state_26356__$1;
(statearr_26358_26385[(2)] = inst_26352);

(statearr_26358_26385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (1))){
var state_26356__$1 = state_26356;
var statearr_26359_26386 = state_26356__$1;
(statearr_26359_26386[(2)] = null);

(statearr_26359_26386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (4))){
var inst_26335 = (state_26356[(7)]);
var inst_26335__$1 = (state_26356[(2)]);
var inst_26336 = (inst_26335__$1 == null);
var state_26356__$1 = (function (){var statearr_26360 = state_26356;
(statearr_26360[(7)] = inst_26335__$1);

return statearr_26360;
})();
if(cljs.core.truth_(inst_26336)){
var statearr_26361_26387 = state_26356__$1;
(statearr_26361_26387[(1)] = (5));

} else {
var statearr_26362_26388 = state_26356__$1;
(statearr_26362_26388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (13))){
var state_26356__$1 = state_26356;
var statearr_26363_26389 = state_26356__$1;
(statearr_26363_26389[(2)] = null);

(statearr_26363_26389[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (6))){
var inst_26335 = (state_26356[(7)]);
var state_26356__$1 = state_26356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26356__$1,(11),to,inst_26335);
} else {
if((state_val_26357 === (3))){
var inst_26354 = (state_26356[(2)]);
var state_26356__$1 = state_26356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26356__$1,inst_26354);
} else {
if((state_val_26357 === (12))){
var state_26356__$1 = state_26356;
var statearr_26364_26390 = state_26356__$1;
(statearr_26364_26390[(2)] = null);

(statearr_26364_26390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (2))){
var state_26356__$1 = state_26356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26356__$1,(4),from);
} else {
if((state_val_26357 === (11))){
var inst_26345 = (state_26356[(2)]);
var state_26356__$1 = state_26356;
if(cljs.core.truth_(inst_26345)){
var statearr_26365_26391 = state_26356__$1;
(statearr_26365_26391[(1)] = (12));

} else {
var statearr_26366_26392 = state_26356__$1;
(statearr_26366_26392[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (9))){
var state_26356__$1 = state_26356;
var statearr_26367_26393 = state_26356__$1;
(statearr_26367_26393[(2)] = null);

(statearr_26367_26393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (5))){
var state_26356__$1 = state_26356;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26368_26394 = state_26356__$1;
(statearr_26368_26394[(1)] = (8));

} else {
var statearr_26369_26395 = state_26356__$1;
(statearr_26369_26395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (14))){
var inst_26350 = (state_26356[(2)]);
var state_26356__$1 = state_26356;
var statearr_26370_26396 = state_26356__$1;
(statearr_26370_26396[(2)] = inst_26350);

(statearr_26370_26396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (10))){
var inst_26342 = (state_26356[(2)]);
var state_26356__$1 = state_26356;
var statearr_26371_26397 = state_26356__$1;
(statearr_26371_26397[(2)] = inst_26342);

(statearr_26371_26397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (8))){
var inst_26339 = cljs.core.async.close_BANG_.call(null,to);
var state_26356__$1 = state_26356;
var statearr_26372_26398 = state_26356__$1;
(statearr_26372_26398[(2)] = inst_26339);

(statearr_26372_26398[(1)] = (10));


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
});})(c__19791__auto___26384))
;
return ((function (switch__19726__auto__,c__19791__auto___26384){
return (function() {
var cljs$core$async$state_machine__19727__auto__ = null;
var cljs$core$async$state_machine__19727__auto____0 = (function (){
var statearr_26376 = [null,null,null,null,null,null,null,null];
(statearr_26376[(0)] = cljs$core$async$state_machine__19727__auto__);

(statearr_26376[(1)] = (1));

return statearr_26376;
});
var cljs$core$async$state_machine__19727__auto____1 = (function (state_26356){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_26356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e26377){if((e26377 instanceof Object)){
var ex__19730__auto__ = e26377;
var statearr_26378_26399 = state_26356;
(statearr_26378_26399[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26400 = state_26356;
state_26356 = G__26400;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$state_machine__19727__auto__ = function(state_26356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19727__auto____1.call(this,state_26356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19727__auto____0;
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19727__auto____1;
return cljs$core$async$state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19791__auto___26384))
})();
var state__19793__auto__ = (function (){var statearr_26379 = f__19792__auto__.call(null);
(statearr_26379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19791__auto___26384);

return statearr_26379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19793__auto__);
});})(c__19791__auto___26384))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26584){
var vec__26585 = p__26584;
var v = cljs.core.nth.call(null,vec__26585,(0),null);
var p = cljs.core.nth.call(null,vec__26585,(1),null);
var job = vec__26585;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19791__auto___26767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19791__auto___26767,res,vec__26585,v,p,job,jobs,results){
return (function (){
var f__19792__auto__ = (function (){var switch__19726__auto__ = ((function (c__19791__auto___26767,res,vec__26585,v,p,job,jobs,results){
return (function (state_26590){
var state_val_26591 = (state_26590[(1)]);
if((state_val_26591 === (1))){
var state_26590__$1 = state_26590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26590__$1,(2),res,v);
} else {
if((state_val_26591 === (2))){
var inst_26587 = (state_26590[(2)]);
var inst_26588 = cljs.core.async.close_BANG_.call(null,res);
var state_26590__$1 = (function (){var statearr_26592 = state_26590;
(statearr_26592[(7)] = inst_26587);

return statearr_26592;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26590__$1,inst_26588);
} else {
return null;
}
}
});})(c__19791__auto___26767,res,vec__26585,v,p,job,jobs,results))
;
return ((function (switch__19726__auto__,c__19791__auto___26767,res,vec__26585,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____0 = (function (){
var statearr_26596 = [null,null,null,null,null,null,null,null];
(statearr_26596[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__);

(statearr_26596[(1)] = (1));

return statearr_26596;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____1 = (function (state_26590){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_26590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e26597){if((e26597 instanceof Object)){
var ex__19730__auto__ = e26597;
var statearr_26598_26768 = state_26590;
(statearr_26598_26768[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26769 = state_26590;
state_26590 = G__26769;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__ = function(state_26590){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____1.call(this,state_26590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19791__auto___26767,res,vec__26585,v,p,job,jobs,results))
})();
var state__19793__auto__ = (function (){var statearr_26599 = f__19792__auto__.call(null);
(statearr_26599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19791__auto___26767);

return statearr_26599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19793__auto__);
});})(c__19791__auto___26767,res,vec__26585,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26600){
var vec__26601 = p__26600;
var v = cljs.core.nth.call(null,vec__26601,(0),null);
var p = cljs.core.nth.call(null,vec__26601,(1),null);
var job = vec__26601;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17393__auto___26770 = n;
var __26771 = (0);
while(true){
if((__26771 < n__17393__auto___26770)){
var G__26602_26772 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26602_26772) {
case "compute":
var c__19791__auto___26774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26771,c__19791__auto___26774,G__26602_26772,n__17393__auto___26770,jobs,results,process,async){
return (function (){
var f__19792__auto__ = (function (){var switch__19726__auto__ = ((function (__26771,c__19791__auto___26774,G__26602_26772,n__17393__auto___26770,jobs,results,process,async){
return (function (state_26615){
var state_val_26616 = (state_26615[(1)]);
if((state_val_26616 === (1))){
var state_26615__$1 = state_26615;
var statearr_26617_26775 = state_26615__$1;
(statearr_26617_26775[(2)] = null);

(statearr_26617_26775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26616 === (2))){
var state_26615__$1 = state_26615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26615__$1,(4),jobs);
} else {
if((state_val_26616 === (3))){
var inst_26613 = (state_26615[(2)]);
var state_26615__$1 = state_26615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26615__$1,inst_26613);
} else {
if((state_val_26616 === (4))){
var inst_26605 = (state_26615[(2)]);
var inst_26606 = process.call(null,inst_26605);
var state_26615__$1 = state_26615;
if(cljs.core.truth_(inst_26606)){
var statearr_26618_26776 = state_26615__$1;
(statearr_26618_26776[(1)] = (5));

} else {
var statearr_26619_26777 = state_26615__$1;
(statearr_26619_26777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26616 === (5))){
var state_26615__$1 = state_26615;
var statearr_26620_26778 = state_26615__$1;
(statearr_26620_26778[(2)] = null);

(statearr_26620_26778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26616 === (6))){
var state_26615__$1 = state_26615;
var statearr_26621_26779 = state_26615__$1;
(statearr_26621_26779[(2)] = null);

(statearr_26621_26779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26616 === (7))){
var inst_26611 = (state_26615[(2)]);
var state_26615__$1 = state_26615;
var statearr_26622_26780 = state_26615__$1;
(statearr_26622_26780[(2)] = inst_26611);

(statearr_26622_26780[(1)] = (3));


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
});})(__26771,c__19791__auto___26774,G__26602_26772,n__17393__auto___26770,jobs,results,process,async))
;
return ((function (__26771,switch__19726__auto__,c__19791__auto___26774,G__26602_26772,n__17393__auto___26770,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____0 = (function (){
var statearr_26626 = [null,null,null,null,null,null,null];
(statearr_26626[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__);

(statearr_26626[(1)] = (1));

return statearr_26626;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____1 = (function (state_26615){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_26615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e26627){if((e26627 instanceof Object)){
var ex__19730__auto__ = e26627;
var statearr_26628_26781 = state_26615;
(statearr_26628_26781[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26782 = state_26615;
state_26615 = G__26782;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__ = function(state_26615){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____1.call(this,state_26615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__;
})()
;})(__26771,switch__19726__auto__,c__19791__auto___26774,G__26602_26772,n__17393__auto___26770,jobs,results,process,async))
})();
var state__19793__auto__ = (function (){var statearr_26629 = f__19792__auto__.call(null);
(statearr_26629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19791__auto___26774);

return statearr_26629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19793__auto__);
});})(__26771,c__19791__auto___26774,G__26602_26772,n__17393__auto___26770,jobs,results,process,async))
);


break;
case "async":
var c__19791__auto___26783 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26771,c__19791__auto___26783,G__26602_26772,n__17393__auto___26770,jobs,results,process,async){
return (function (){
var f__19792__auto__ = (function (){var switch__19726__auto__ = ((function (__26771,c__19791__auto___26783,G__26602_26772,n__17393__auto___26770,jobs,results,process,async){
return (function (state_26642){
var state_val_26643 = (state_26642[(1)]);
if((state_val_26643 === (1))){
var state_26642__$1 = state_26642;
var statearr_26644_26784 = state_26642__$1;
(statearr_26644_26784[(2)] = null);

(statearr_26644_26784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (2))){
var state_26642__$1 = state_26642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26642__$1,(4),jobs);
} else {
if((state_val_26643 === (3))){
var inst_26640 = (state_26642[(2)]);
var state_26642__$1 = state_26642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26642__$1,inst_26640);
} else {
if((state_val_26643 === (4))){
var inst_26632 = (state_26642[(2)]);
var inst_26633 = async.call(null,inst_26632);
var state_26642__$1 = state_26642;
if(cljs.core.truth_(inst_26633)){
var statearr_26645_26785 = state_26642__$1;
(statearr_26645_26785[(1)] = (5));

} else {
var statearr_26646_26786 = state_26642__$1;
(statearr_26646_26786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (5))){
var state_26642__$1 = state_26642;
var statearr_26647_26787 = state_26642__$1;
(statearr_26647_26787[(2)] = null);

(statearr_26647_26787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (6))){
var state_26642__$1 = state_26642;
var statearr_26648_26788 = state_26642__$1;
(statearr_26648_26788[(2)] = null);

(statearr_26648_26788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (7))){
var inst_26638 = (state_26642[(2)]);
var state_26642__$1 = state_26642;
var statearr_26649_26789 = state_26642__$1;
(statearr_26649_26789[(2)] = inst_26638);

(statearr_26649_26789[(1)] = (3));


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
});})(__26771,c__19791__auto___26783,G__26602_26772,n__17393__auto___26770,jobs,results,process,async))
;
return ((function (__26771,switch__19726__auto__,c__19791__auto___26783,G__26602_26772,n__17393__auto___26770,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____0 = (function (){
var statearr_26653 = [null,null,null,null,null,null,null];
(statearr_26653[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__);

(statearr_26653[(1)] = (1));

return statearr_26653;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____1 = (function (state_26642){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_26642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e26654){if((e26654 instanceof Object)){
var ex__19730__auto__ = e26654;
var statearr_26655_26790 = state_26642;
(statearr_26655_26790[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26791 = state_26642;
state_26642 = G__26791;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__ = function(state_26642){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____1.call(this,state_26642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__;
})()
;})(__26771,switch__19726__auto__,c__19791__auto___26783,G__26602_26772,n__17393__auto___26770,jobs,results,process,async))
})();
var state__19793__auto__ = (function (){var statearr_26656 = f__19792__auto__.call(null);
(statearr_26656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19791__auto___26783);

return statearr_26656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19793__auto__);
});})(__26771,c__19791__auto___26783,G__26602_26772,n__17393__auto___26770,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26792 = (__26771 + (1));
__26771 = G__26792;
continue;
} else {
}
break;
}

var c__19791__auto___26793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19791__auto___26793,jobs,results,process,async){
return (function (){
var f__19792__auto__ = (function (){var switch__19726__auto__ = ((function (c__19791__auto___26793,jobs,results,process,async){
return (function (state_26678){
var state_val_26679 = (state_26678[(1)]);
if((state_val_26679 === (1))){
var state_26678__$1 = state_26678;
var statearr_26680_26794 = state_26678__$1;
(statearr_26680_26794[(2)] = null);

(statearr_26680_26794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26679 === (2))){
var state_26678__$1 = state_26678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26678__$1,(4),from);
} else {
if((state_val_26679 === (3))){
var inst_26676 = (state_26678[(2)]);
var state_26678__$1 = state_26678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26678__$1,inst_26676);
} else {
if((state_val_26679 === (4))){
var inst_26659 = (state_26678[(7)]);
var inst_26659__$1 = (state_26678[(2)]);
var inst_26660 = (inst_26659__$1 == null);
var state_26678__$1 = (function (){var statearr_26681 = state_26678;
(statearr_26681[(7)] = inst_26659__$1);

return statearr_26681;
})();
if(cljs.core.truth_(inst_26660)){
var statearr_26682_26795 = state_26678__$1;
(statearr_26682_26795[(1)] = (5));

} else {
var statearr_26683_26796 = state_26678__$1;
(statearr_26683_26796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26679 === (5))){
var inst_26662 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26678__$1 = state_26678;
var statearr_26684_26797 = state_26678__$1;
(statearr_26684_26797[(2)] = inst_26662);

(statearr_26684_26797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26679 === (6))){
var inst_26664 = (state_26678[(8)]);
var inst_26659 = (state_26678[(7)]);
var inst_26664__$1 = cljs.core.async.chan.call(null,(1));
var inst_26665 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26666 = [inst_26659,inst_26664__$1];
var inst_26667 = (new cljs.core.PersistentVector(null,2,(5),inst_26665,inst_26666,null));
var state_26678__$1 = (function (){var statearr_26685 = state_26678;
(statearr_26685[(8)] = inst_26664__$1);

return statearr_26685;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26678__$1,(8),jobs,inst_26667);
} else {
if((state_val_26679 === (7))){
var inst_26674 = (state_26678[(2)]);
var state_26678__$1 = state_26678;
var statearr_26686_26798 = state_26678__$1;
(statearr_26686_26798[(2)] = inst_26674);

(statearr_26686_26798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26679 === (8))){
var inst_26664 = (state_26678[(8)]);
var inst_26669 = (state_26678[(2)]);
var state_26678__$1 = (function (){var statearr_26687 = state_26678;
(statearr_26687[(9)] = inst_26669);

return statearr_26687;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26678__$1,(9),results,inst_26664);
} else {
if((state_val_26679 === (9))){
var inst_26671 = (state_26678[(2)]);
var state_26678__$1 = (function (){var statearr_26688 = state_26678;
(statearr_26688[(10)] = inst_26671);

return statearr_26688;
})();
var statearr_26689_26799 = state_26678__$1;
(statearr_26689_26799[(2)] = null);

(statearr_26689_26799[(1)] = (2));


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
});})(c__19791__auto___26793,jobs,results,process,async))
;
return ((function (switch__19726__auto__,c__19791__auto___26793,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____0 = (function (){
var statearr_26693 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26693[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__);

(statearr_26693[(1)] = (1));

return statearr_26693;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____1 = (function (state_26678){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_26678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e26694){if((e26694 instanceof Object)){
var ex__19730__auto__ = e26694;
var statearr_26695_26800 = state_26678;
(statearr_26695_26800[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26801 = state_26678;
state_26678 = G__26801;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__ = function(state_26678){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____1.call(this,state_26678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19791__auto___26793,jobs,results,process,async))
})();
var state__19793__auto__ = (function (){var statearr_26696 = f__19792__auto__.call(null);
(statearr_26696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19791__auto___26793);

return statearr_26696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19793__auto__);
});})(c__19791__auto___26793,jobs,results,process,async))
);


var c__19791__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19791__auto__,jobs,results,process,async){
return (function (){
var f__19792__auto__ = (function (){var switch__19726__auto__ = ((function (c__19791__auto__,jobs,results,process,async){
return (function (state_26734){
var state_val_26735 = (state_26734[(1)]);
if((state_val_26735 === (7))){
var inst_26730 = (state_26734[(2)]);
var state_26734__$1 = state_26734;
var statearr_26736_26802 = state_26734__$1;
(statearr_26736_26802[(2)] = inst_26730);

(statearr_26736_26802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (20))){
var state_26734__$1 = state_26734;
var statearr_26737_26803 = state_26734__$1;
(statearr_26737_26803[(2)] = null);

(statearr_26737_26803[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (1))){
var state_26734__$1 = state_26734;
var statearr_26738_26804 = state_26734__$1;
(statearr_26738_26804[(2)] = null);

(statearr_26738_26804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (4))){
var inst_26699 = (state_26734[(7)]);
var inst_26699__$1 = (state_26734[(2)]);
var inst_26700 = (inst_26699__$1 == null);
var state_26734__$1 = (function (){var statearr_26739 = state_26734;
(statearr_26739[(7)] = inst_26699__$1);

return statearr_26739;
})();
if(cljs.core.truth_(inst_26700)){
var statearr_26740_26805 = state_26734__$1;
(statearr_26740_26805[(1)] = (5));

} else {
var statearr_26741_26806 = state_26734__$1;
(statearr_26741_26806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (15))){
var inst_26712 = (state_26734[(8)]);
var state_26734__$1 = state_26734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26734__$1,(18),to,inst_26712);
} else {
if((state_val_26735 === (21))){
var inst_26725 = (state_26734[(2)]);
var state_26734__$1 = state_26734;
var statearr_26742_26807 = state_26734__$1;
(statearr_26742_26807[(2)] = inst_26725);

(statearr_26742_26807[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (13))){
var inst_26727 = (state_26734[(2)]);
var state_26734__$1 = (function (){var statearr_26743 = state_26734;
(statearr_26743[(9)] = inst_26727);

return statearr_26743;
})();
var statearr_26744_26808 = state_26734__$1;
(statearr_26744_26808[(2)] = null);

(statearr_26744_26808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (6))){
var inst_26699 = (state_26734[(7)]);
var state_26734__$1 = state_26734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26734__$1,(11),inst_26699);
} else {
if((state_val_26735 === (17))){
var inst_26720 = (state_26734[(2)]);
var state_26734__$1 = state_26734;
if(cljs.core.truth_(inst_26720)){
var statearr_26745_26809 = state_26734__$1;
(statearr_26745_26809[(1)] = (19));

} else {
var statearr_26746_26810 = state_26734__$1;
(statearr_26746_26810[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (3))){
var inst_26732 = (state_26734[(2)]);
var state_26734__$1 = state_26734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26734__$1,inst_26732);
} else {
if((state_val_26735 === (12))){
var inst_26709 = (state_26734[(10)]);
var state_26734__$1 = state_26734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26734__$1,(14),inst_26709);
} else {
if((state_val_26735 === (2))){
var state_26734__$1 = state_26734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26734__$1,(4),results);
} else {
if((state_val_26735 === (19))){
var state_26734__$1 = state_26734;
var statearr_26747_26811 = state_26734__$1;
(statearr_26747_26811[(2)] = null);

(statearr_26747_26811[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (11))){
var inst_26709 = (state_26734[(2)]);
var state_26734__$1 = (function (){var statearr_26748 = state_26734;
(statearr_26748[(10)] = inst_26709);

return statearr_26748;
})();
var statearr_26749_26812 = state_26734__$1;
(statearr_26749_26812[(2)] = null);

(statearr_26749_26812[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (9))){
var state_26734__$1 = state_26734;
var statearr_26750_26813 = state_26734__$1;
(statearr_26750_26813[(2)] = null);

(statearr_26750_26813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (5))){
var state_26734__$1 = state_26734;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26751_26814 = state_26734__$1;
(statearr_26751_26814[(1)] = (8));

} else {
var statearr_26752_26815 = state_26734__$1;
(statearr_26752_26815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (14))){
var inst_26712 = (state_26734[(8)]);
var inst_26714 = (state_26734[(11)]);
var inst_26712__$1 = (state_26734[(2)]);
var inst_26713 = (inst_26712__$1 == null);
var inst_26714__$1 = cljs.core.not.call(null,inst_26713);
var state_26734__$1 = (function (){var statearr_26753 = state_26734;
(statearr_26753[(8)] = inst_26712__$1);

(statearr_26753[(11)] = inst_26714__$1);

return statearr_26753;
})();
if(inst_26714__$1){
var statearr_26754_26816 = state_26734__$1;
(statearr_26754_26816[(1)] = (15));

} else {
var statearr_26755_26817 = state_26734__$1;
(statearr_26755_26817[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (16))){
var inst_26714 = (state_26734[(11)]);
var state_26734__$1 = state_26734;
var statearr_26756_26818 = state_26734__$1;
(statearr_26756_26818[(2)] = inst_26714);

(statearr_26756_26818[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (10))){
var inst_26706 = (state_26734[(2)]);
var state_26734__$1 = state_26734;
var statearr_26757_26819 = state_26734__$1;
(statearr_26757_26819[(2)] = inst_26706);

(statearr_26757_26819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (18))){
var inst_26717 = (state_26734[(2)]);
var state_26734__$1 = state_26734;
var statearr_26758_26820 = state_26734__$1;
(statearr_26758_26820[(2)] = inst_26717);

(statearr_26758_26820[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (8))){
var inst_26703 = cljs.core.async.close_BANG_.call(null,to);
var state_26734__$1 = state_26734;
var statearr_26759_26821 = state_26734__$1;
(statearr_26759_26821[(2)] = inst_26703);

(statearr_26759_26821[(1)] = (10));


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
});})(c__19791__auto__,jobs,results,process,async))
;
return ((function (switch__19726__auto__,c__19791__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____0 = (function (){
var statearr_26763 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26763[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__);

(statearr_26763[(1)] = (1));

return statearr_26763;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____1 = (function (state_26734){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_26734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e26764){if((e26764 instanceof Object)){
var ex__19730__auto__ = e26764;
var statearr_26765_26822 = state_26734;
(statearr_26765_26822[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26823 = state_26734;
state_26734 = G__26823;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__ = function(state_26734){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____1.call(this,state_26734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19791__auto__,jobs,results,process,async))
})();
var state__19793__auto__ = (function (){var statearr_26766 = f__19792__auto__.call(null);
(statearr_26766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19791__auto__);

return statearr_26766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19793__auto__);
});})(c__19791__auto__,jobs,results,process,async))
);

return c__19791__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args26824 = [];
var len__17548__auto___26827 = arguments.length;
var i__17549__auto___26828 = (0);
while(true){
if((i__17549__auto___26828 < len__17548__auto___26827)){
args26824.push((arguments[i__17549__auto___26828]));

var G__26829 = (i__17549__auto___26828 + (1));
i__17549__auto___26828 = G__26829;
continue;
} else {
}
break;
}

var G__26826 = args26824.length;
switch (G__26826) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26824.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args26831 = [];
var len__17548__auto___26834 = arguments.length;
var i__17549__auto___26835 = (0);
while(true){
if((i__17549__auto___26835 < len__17548__auto___26834)){
args26831.push((arguments[i__17549__auto___26835]));

var G__26836 = (i__17549__auto___26835 + (1));
i__17549__auto___26835 = G__26836;
continue;
} else {
}
break;
}

var G__26833 = args26831.length;
switch (G__26833) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26831.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args26838 = [];
var len__17548__auto___26891 = arguments.length;
var i__17549__auto___26892 = (0);
while(true){
if((i__17549__auto___26892 < len__17548__auto___26891)){
args26838.push((arguments[i__17549__auto___26892]));

var G__26893 = (i__17549__auto___26892 + (1));
i__17549__auto___26892 = G__26893;
continue;
} else {
}
break;
}

var G__26840 = args26838.length;
switch (G__26840) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26838.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19791__auto___26895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19791__auto___26895,tc,fc){
return (function (){
var f__19792__auto__ = (function (){var switch__19726__auto__ = ((function (c__19791__auto___26895,tc,fc){
return (function (state_26866){
var state_val_26867 = (state_26866[(1)]);
if((state_val_26867 === (7))){
var inst_26862 = (state_26866[(2)]);
var state_26866__$1 = state_26866;
var statearr_26868_26896 = state_26866__$1;
(statearr_26868_26896[(2)] = inst_26862);

(statearr_26868_26896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26867 === (1))){
var state_26866__$1 = state_26866;
var statearr_26869_26897 = state_26866__$1;
(statearr_26869_26897[(2)] = null);

(statearr_26869_26897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26867 === (4))){
var inst_26843 = (state_26866[(7)]);
var inst_26843__$1 = (state_26866[(2)]);
var inst_26844 = (inst_26843__$1 == null);
var state_26866__$1 = (function (){var statearr_26870 = state_26866;
(statearr_26870[(7)] = inst_26843__$1);

return statearr_26870;
})();
if(cljs.core.truth_(inst_26844)){
var statearr_26871_26898 = state_26866__$1;
(statearr_26871_26898[(1)] = (5));

} else {
var statearr_26872_26899 = state_26866__$1;
(statearr_26872_26899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26867 === (13))){
var state_26866__$1 = state_26866;
var statearr_26873_26900 = state_26866__$1;
(statearr_26873_26900[(2)] = null);

(statearr_26873_26900[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26867 === (6))){
var inst_26843 = (state_26866[(7)]);
var inst_26849 = p.call(null,inst_26843);
var state_26866__$1 = state_26866;
if(cljs.core.truth_(inst_26849)){
var statearr_26874_26901 = state_26866__$1;
(statearr_26874_26901[(1)] = (9));

} else {
var statearr_26875_26902 = state_26866__$1;
(statearr_26875_26902[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26867 === (3))){
var inst_26864 = (state_26866[(2)]);
var state_26866__$1 = state_26866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26866__$1,inst_26864);
} else {
if((state_val_26867 === (12))){
var state_26866__$1 = state_26866;
var statearr_26876_26903 = state_26866__$1;
(statearr_26876_26903[(2)] = null);

(statearr_26876_26903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26867 === (2))){
var state_26866__$1 = state_26866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26866__$1,(4),ch);
} else {
if((state_val_26867 === (11))){
var inst_26843 = (state_26866[(7)]);
var inst_26853 = (state_26866[(2)]);
var state_26866__$1 = state_26866;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26866__$1,(8),inst_26853,inst_26843);
} else {
if((state_val_26867 === (9))){
var state_26866__$1 = state_26866;
var statearr_26877_26904 = state_26866__$1;
(statearr_26877_26904[(2)] = tc);

(statearr_26877_26904[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26867 === (5))){
var inst_26846 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26847 = cljs.core.async.close_BANG_.call(null,fc);
var state_26866__$1 = (function (){var statearr_26878 = state_26866;
(statearr_26878[(8)] = inst_26846);

return statearr_26878;
})();
var statearr_26879_26905 = state_26866__$1;
(statearr_26879_26905[(2)] = inst_26847);

(statearr_26879_26905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26867 === (14))){
var inst_26860 = (state_26866[(2)]);
var state_26866__$1 = state_26866;
var statearr_26880_26906 = state_26866__$1;
(statearr_26880_26906[(2)] = inst_26860);

(statearr_26880_26906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26867 === (10))){
var state_26866__$1 = state_26866;
var statearr_26881_26907 = state_26866__$1;
(statearr_26881_26907[(2)] = fc);

(statearr_26881_26907[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26867 === (8))){
var inst_26855 = (state_26866[(2)]);
var state_26866__$1 = state_26866;
if(cljs.core.truth_(inst_26855)){
var statearr_26882_26908 = state_26866__$1;
(statearr_26882_26908[(1)] = (12));

} else {
var statearr_26883_26909 = state_26866__$1;
(statearr_26883_26909[(1)] = (13));

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
});})(c__19791__auto___26895,tc,fc))
;
return ((function (switch__19726__auto__,c__19791__auto___26895,tc,fc){
return (function() {
var cljs$core$async$state_machine__19727__auto__ = null;
var cljs$core$async$state_machine__19727__auto____0 = (function (){
var statearr_26887 = [null,null,null,null,null,null,null,null,null];
(statearr_26887[(0)] = cljs$core$async$state_machine__19727__auto__);

(statearr_26887[(1)] = (1));

return statearr_26887;
});
var cljs$core$async$state_machine__19727__auto____1 = (function (state_26866){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_26866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e26888){if((e26888 instanceof Object)){
var ex__19730__auto__ = e26888;
var statearr_26889_26910 = state_26866;
(statearr_26889_26910[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26911 = state_26866;
state_26866 = G__26911;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$state_machine__19727__auto__ = function(state_26866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19727__auto____1.call(this,state_26866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19727__auto____0;
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19727__auto____1;
return cljs$core$async$state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19791__auto___26895,tc,fc))
})();
var state__19793__auto__ = (function (){var statearr_26890 = f__19792__auto__.call(null);
(statearr_26890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19791__auto___26895);

return statearr_26890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19793__auto__);
});})(c__19791__auto___26895,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19791__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19791__auto__){
return (function (){
var f__19792__auto__ = (function (){var switch__19726__auto__ = ((function (c__19791__auto__){
return (function (state_26958){
var state_val_26959 = (state_26958[(1)]);
if((state_val_26959 === (1))){
var inst_26944 = init;
var state_26958__$1 = (function (){var statearr_26960 = state_26958;
(statearr_26960[(7)] = inst_26944);

return statearr_26960;
})();
var statearr_26961_26976 = state_26958__$1;
(statearr_26961_26976[(2)] = null);

(statearr_26961_26976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26959 === (2))){
var state_26958__$1 = state_26958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26958__$1,(4),ch);
} else {
if((state_val_26959 === (3))){
var inst_26956 = (state_26958[(2)]);
var state_26958__$1 = state_26958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26958__$1,inst_26956);
} else {
if((state_val_26959 === (4))){
var inst_26947 = (state_26958[(8)]);
var inst_26947__$1 = (state_26958[(2)]);
var inst_26948 = (inst_26947__$1 == null);
var state_26958__$1 = (function (){var statearr_26962 = state_26958;
(statearr_26962[(8)] = inst_26947__$1);

return statearr_26962;
})();
if(cljs.core.truth_(inst_26948)){
var statearr_26963_26977 = state_26958__$1;
(statearr_26963_26977[(1)] = (5));

} else {
var statearr_26964_26978 = state_26958__$1;
(statearr_26964_26978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26959 === (5))){
var inst_26944 = (state_26958[(7)]);
var state_26958__$1 = state_26958;
var statearr_26965_26979 = state_26958__$1;
(statearr_26965_26979[(2)] = inst_26944);

(statearr_26965_26979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26959 === (6))){
var inst_26947 = (state_26958[(8)]);
var inst_26944 = (state_26958[(7)]);
var inst_26951 = f.call(null,inst_26944,inst_26947);
var inst_26944__$1 = inst_26951;
var state_26958__$1 = (function (){var statearr_26966 = state_26958;
(statearr_26966[(7)] = inst_26944__$1);

return statearr_26966;
})();
var statearr_26967_26980 = state_26958__$1;
(statearr_26967_26980[(2)] = null);

(statearr_26967_26980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26959 === (7))){
var inst_26954 = (state_26958[(2)]);
var state_26958__$1 = state_26958;
var statearr_26968_26981 = state_26958__$1;
(statearr_26968_26981[(2)] = inst_26954);

(statearr_26968_26981[(1)] = (3));


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
});})(c__19791__auto__))
;
return ((function (switch__19726__auto__,c__19791__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19727__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19727__auto____0 = (function (){
var statearr_26972 = [null,null,null,null,null,null,null,null,null];
(statearr_26972[(0)] = cljs$core$async$reduce_$_state_machine__19727__auto__);

(statearr_26972[(1)] = (1));

return statearr_26972;
});
var cljs$core$async$reduce_$_state_machine__19727__auto____1 = (function (state_26958){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_26958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e26973){if((e26973 instanceof Object)){
var ex__19730__auto__ = e26973;
var statearr_26974_26982 = state_26958;
(statearr_26974_26982[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26983 = state_26958;
state_26958 = G__26983;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19727__auto__ = function(state_26958){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19727__auto____1.call(this,state_26958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19727__auto____0;
cljs$core$async$reduce_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19727__auto____1;
return cljs$core$async$reduce_$_state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19791__auto__))
})();
var state__19793__auto__ = (function (){var statearr_26975 = f__19792__auto__.call(null);
(statearr_26975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19791__auto__);

return statearr_26975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19793__auto__);
});})(c__19791__auto__))
);

return c__19791__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args26984 = [];
var len__17548__auto___27036 = arguments.length;
var i__17549__auto___27037 = (0);
while(true){
if((i__17549__auto___27037 < len__17548__auto___27036)){
args26984.push((arguments[i__17549__auto___27037]));

var G__27038 = (i__17549__auto___27037 + (1));
i__17549__auto___27037 = G__27038;
continue;
} else {
}
break;
}

var G__26986 = args26984.length;
switch (G__26986) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26984.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19791__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19791__auto__){
return (function (){
var f__19792__auto__ = (function (){var switch__19726__auto__ = ((function (c__19791__auto__){
return (function (state_27011){
var state_val_27012 = (state_27011[(1)]);
if((state_val_27012 === (7))){
var inst_26993 = (state_27011[(2)]);
var state_27011__$1 = state_27011;
var statearr_27013_27040 = state_27011__$1;
(statearr_27013_27040[(2)] = inst_26993);

(statearr_27013_27040[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (1))){
var inst_26987 = cljs.core.seq.call(null,coll);
var inst_26988 = inst_26987;
var state_27011__$1 = (function (){var statearr_27014 = state_27011;
(statearr_27014[(7)] = inst_26988);

return statearr_27014;
})();
var statearr_27015_27041 = state_27011__$1;
(statearr_27015_27041[(2)] = null);

(statearr_27015_27041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (4))){
var inst_26988 = (state_27011[(7)]);
var inst_26991 = cljs.core.first.call(null,inst_26988);
var state_27011__$1 = state_27011;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27011__$1,(7),ch,inst_26991);
} else {
if((state_val_27012 === (13))){
var inst_27005 = (state_27011[(2)]);
var state_27011__$1 = state_27011;
var statearr_27016_27042 = state_27011__$1;
(statearr_27016_27042[(2)] = inst_27005);

(statearr_27016_27042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (6))){
var inst_26996 = (state_27011[(2)]);
var state_27011__$1 = state_27011;
if(cljs.core.truth_(inst_26996)){
var statearr_27017_27043 = state_27011__$1;
(statearr_27017_27043[(1)] = (8));

} else {
var statearr_27018_27044 = state_27011__$1;
(statearr_27018_27044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (3))){
var inst_27009 = (state_27011[(2)]);
var state_27011__$1 = state_27011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27011__$1,inst_27009);
} else {
if((state_val_27012 === (12))){
var state_27011__$1 = state_27011;
var statearr_27019_27045 = state_27011__$1;
(statearr_27019_27045[(2)] = null);

(statearr_27019_27045[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (2))){
var inst_26988 = (state_27011[(7)]);
var state_27011__$1 = state_27011;
if(cljs.core.truth_(inst_26988)){
var statearr_27020_27046 = state_27011__$1;
(statearr_27020_27046[(1)] = (4));

} else {
var statearr_27021_27047 = state_27011__$1;
(statearr_27021_27047[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (11))){
var inst_27002 = cljs.core.async.close_BANG_.call(null,ch);
var state_27011__$1 = state_27011;
var statearr_27022_27048 = state_27011__$1;
(statearr_27022_27048[(2)] = inst_27002);

(statearr_27022_27048[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (9))){
var state_27011__$1 = state_27011;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27023_27049 = state_27011__$1;
(statearr_27023_27049[(1)] = (11));

} else {
var statearr_27024_27050 = state_27011__$1;
(statearr_27024_27050[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (5))){
var inst_26988 = (state_27011[(7)]);
var state_27011__$1 = state_27011;
var statearr_27025_27051 = state_27011__$1;
(statearr_27025_27051[(2)] = inst_26988);

(statearr_27025_27051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (10))){
var inst_27007 = (state_27011[(2)]);
var state_27011__$1 = state_27011;
var statearr_27026_27052 = state_27011__$1;
(statearr_27026_27052[(2)] = inst_27007);

(statearr_27026_27052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (8))){
var inst_26988 = (state_27011[(7)]);
var inst_26998 = cljs.core.next.call(null,inst_26988);
var inst_26988__$1 = inst_26998;
var state_27011__$1 = (function (){var statearr_27027 = state_27011;
(statearr_27027[(7)] = inst_26988__$1);

return statearr_27027;
})();
var statearr_27028_27053 = state_27011__$1;
(statearr_27028_27053[(2)] = null);

(statearr_27028_27053[(1)] = (2));


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
});})(c__19791__auto__))
;
return ((function (switch__19726__auto__,c__19791__auto__){
return (function() {
var cljs$core$async$state_machine__19727__auto__ = null;
var cljs$core$async$state_machine__19727__auto____0 = (function (){
var statearr_27032 = [null,null,null,null,null,null,null,null];
(statearr_27032[(0)] = cljs$core$async$state_machine__19727__auto__);

(statearr_27032[(1)] = (1));

return statearr_27032;
});
var cljs$core$async$state_machine__19727__auto____1 = (function (state_27011){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_27011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e27033){if((e27033 instanceof Object)){
var ex__19730__auto__ = e27033;
var statearr_27034_27054 = state_27011;
(statearr_27034_27054[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27055 = state_27011;
state_27011 = G__27055;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$state_machine__19727__auto__ = function(state_27011){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19727__auto____1.call(this,state_27011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19727__auto____0;
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19727__auto____1;
return cljs$core$async$state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19791__auto__))
})();
var state__19793__auto__ = (function (){var statearr_27035 = f__19792__auto__.call(null);
(statearr_27035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19791__auto__);

return statearr_27035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19793__auto__);
});})(c__19791__auto__))
);

return c__19791__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17145__auto__ = (((_ == null))?null:_);
var m__17146__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,_);
} else {
var m__17146__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17145__auto__ = (((m == null))?null:m);
var m__17146__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17146__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17145__auto__ = (((m == null))?null:m);
var m__17146__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,m,ch);
} else {
var m__17146__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17145__auto__ = (((m == null))?null:m);
var m__17146__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,m);
} else {
var m__17146__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27277 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27277 = (function (mult,ch,cs,meta27278){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta27278 = meta27278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27279,meta27278__$1){
var self__ = this;
var _27279__$1 = this;
return (new cljs.core.async.t_cljs$core$async27277(self__.mult,self__.ch,self__.cs,meta27278__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27277.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27279){
var self__ = this;
var _27279__$1 = this;
return self__.meta27278;
});})(cs))
;

cljs.core.async.t_cljs$core$async27277.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27277.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27277.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async27277.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27277.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27277.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27277.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27278","meta27278",-382885868,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27277.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27277.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27277";

cljs.core.async.t_cljs$core$async27277.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"cljs.core.async/t_cljs$core$async27277");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async27277 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27277(mult__$1,ch__$1,cs__$1,meta27278){
return (new cljs.core.async.t_cljs$core$async27277(mult__$1,ch__$1,cs__$1,meta27278));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27277(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19791__auto___27498 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19791__auto___27498,cs,m,dchan,dctr,done){
return (function (){
var f__19792__auto__ = (function (){var switch__19726__auto__ = ((function (c__19791__auto___27498,cs,m,dchan,dctr,done){
return (function (state_27410){
var state_val_27411 = (state_27410[(1)]);
if((state_val_27411 === (7))){
var inst_27406 = (state_27410[(2)]);
var state_27410__$1 = state_27410;
var statearr_27412_27499 = state_27410__$1;
(statearr_27412_27499[(2)] = inst_27406);

(statearr_27412_27499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (20))){
var inst_27311 = (state_27410[(7)]);
var inst_27321 = cljs.core.first.call(null,inst_27311);
var inst_27322 = cljs.core.nth.call(null,inst_27321,(0),null);
var inst_27323 = cljs.core.nth.call(null,inst_27321,(1),null);
var state_27410__$1 = (function (){var statearr_27413 = state_27410;
(statearr_27413[(8)] = inst_27322);

return statearr_27413;
})();
if(cljs.core.truth_(inst_27323)){
var statearr_27414_27500 = state_27410__$1;
(statearr_27414_27500[(1)] = (22));

} else {
var statearr_27415_27501 = state_27410__$1;
(statearr_27415_27501[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (27))){
var inst_27358 = (state_27410[(9)]);
var inst_27351 = (state_27410[(10)]);
var inst_27282 = (state_27410[(11)]);
var inst_27353 = (state_27410[(12)]);
var inst_27358__$1 = cljs.core._nth.call(null,inst_27351,inst_27353);
var inst_27359 = cljs.core.async.put_BANG_.call(null,inst_27358__$1,inst_27282,done);
var state_27410__$1 = (function (){var statearr_27416 = state_27410;
(statearr_27416[(9)] = inst_27358__$1);

return statearr_27416;
})();
if(cljs.core.truth_(inst_27359)){
var statearr_27417_27502 = state_27410__$1;
(statearr_27417_27502[(1)] = (30));

} else {
var statearr_27418_27503 = state_27410__$1;
(statearr_27418_27503[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (1))){
var state_27410__$1 = state_27410;
var statearr_27419_27504 = state_27410__$1;
(statearr_27419_27504[(2)] = null);

(statearr_27419_27504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (24))){
var inst_27311 = (state_27410[(7)]);
var inst_27328 = (state_27410[(2)]);
var inst_27329 = cljs.core.next.call(null,inst_27311);
var inst_27291 = inst_27329;
var inst_27292 = null;
var inst_27293 = (0);
var inst_27294 = (0);
var state_27410__$1 = (function (){var statearr_27420 = state_27410;
(statearr_27420[(13)] = inst_27291);

(statearr_27420[(14)] = inst_27292);

(statearr_27420[(15)] = inst_27328);

(statearr_27420[(16)] = inst_27293);

(statearr_27420[(17)] = inst_27294);

return statearr_27420;
})();
var statearr_27421_27505 = state_27410__$1;
(statearr_27421_27505[(2)] = null);

(statearr_27421_27505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (39))){
var state_27410__$1 = state_27410;
var statearr_27425_27506 = state_27410__$1;
(statearr_27425_27506[(2)] = null);

(statearr_27425_27506[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (4))){
var inst_27282 = (state_27410[(11)]);
var inst_27282__$1 = (state_27410[(2)]);
var inst_27283 = (inst_27282__$1 == null);
var state_27410__$1 = (function (){var statearr_27426 = state_27410;
(statearr_27426[(11)] = inst_27282__$1);

return statearr_27426;
})();
if(cljs.core.truth_(inst_27283)){
var statearr_27427_27507 = state_27410__$1;
(statearr_27427_27507[(1)] = (5));

} else {
var statearr_27428_27508 = state_27410__$1;
(statearr_27428_27508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (15))){
var inst_27291 = (state_27410[(13)]);
var inst_27292 = (state_27410[(14)]);
var inst_27293 = (state_27410[(16)]);
var inst_27294 = (state_27410[(17)]);
var inst_27307 = (state_27410[(2)]);
var inst_27308 = (inst_27294 + (1));
var tmp27422 = inst_27291;
var tmp27423 = inst_27292;
var tmp27424 = inst_27293;
var inst_27291__$1 = tmp27422;
var inst_27292__$1 = tmp27423;
var inst_27293__$1 = tmp27424;
var inst_27294__$1 = inst_27308;
var state_27410__$1 = (function (){var statearr_27429 = state_27410;
(statearr_27429[(18)] = inst_27307);

(statearr_27429[(13)] = inst_27291__$1);

(statearr_27429[(14)] = inst_27292__$1);

(statearr_27429[(16)] = inst_27293__$1);

(statearr_27429[(17)] = inst_27294__$1);

return statearr_27429;
})();
var statearr_27430_27509 = state_27410__$1;
(statearr_27430_27509[(2)] = null);

(statearr_27430_27509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (21))){
var inst_27332 = (state_27410[(2)]);
var state_27410__$1 = state_27410;
var statearr_27434_27510 = state_27410__$1;
(statearr_27434_27510[(2)] = inst_27332);

(statearr_27434_27510[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (31))){
var inst_27358 = (state_27410[(9)]);
var inst_27362 = done.call(null,null);
var inst_27363 = cljs.core.async.untap_STAR_.call(null,m,inst_27358);
var state_27410__$1 = (function (){var statearr_27435 = state_27410;
(statearr_27435[(19)] = inst_27362);

return statearr_27435;
})();
var statearr_27436_27511 = state_27410__$1;
(statearr_27436_27511[(2)] = inst_27363);

(statearr_27436_27511[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (32))){
var inst_27352 = (state_27410[(20)]);
var inst_27351 = (state_27410[(10)]);
var inst_27350 = (state_27410[(21)]);
var inst_27353 = (state_27410[(12)]);
var inst_27365 = (state_27410[(2)]);
var inst_27366 = (inst_27353 + (1));
var tmp27431 = inst_27352;
var tmp27432 = inst_27351;
var tmp27433 = inst_27350;
var inst_27350__$1 = tmp27433;
var inst_27351__$1 = tmp27432;
var inst_27352__$1 = tmp27431;
var inst_27353__$1 = inst_27366;
var state_27410__$1 = (function (){var statearr_27437 = state_27410;
(statearr_27437[(20)] = inst_27352__$1);

(statearr_27437[(22)] = inst_27365);

(statearr_27437[(10)] = inst_27351__$1);

(statearr_27437[(21)] = inst_27350__$1);

(statearr_27437[(12)] = inst_27353__$1);

return statearr_27437;
})();
var statearr_27438_27512 = state_27410__$1;
(statearr_27438_27512[(2)] = null);

(statearr_27438_27512[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (40))){
var inst_27378 = (state_27410[(23)]);
var inst_27382 = done.call(null,null);
var inst_27383 = cljs.core.async.untap_STAR_.call(null,m,inst_27378);
var state_27410__$1 = (function (){var statearr_27439 = state_27410;
(statearr_27439[(24)] = inst_27382);

return statearr_27439;
})();
var statearr_27440_27513 = state_27410__$1;
(statearr_27440_27513[(2)] = inst_27383);

(statearr_27440_27513[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (33))){
var inst_27369 = (state_27410[(25)]);
var inst_27371 = cljs.core.chunked_seq_QMARK_.call(null,inst_27369);
var state_27410__$1 = state_27410;
if(inst_27371){
var statearr_27441_27514 = state_27410__$1;
(statearr_27441_27514[(1)] = (36));

} else {
var statearr_27442_27515 = state_27410__$1;
(statearr_27442_27515[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (13))){
var inst_27301 = (state_27410[(26)]);
var inst_27304 = cljs.core.async.close_BANG_.call(null,inst_27301);
var state_27410__$1 = state_27410;
var statearr_27443_27516 = state_27410__$1;
(statearr_27443_27516[(2)] = inst_27304);

(statearr_27443_27516[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (22))){
var inst_27322 = (state_27410[(8)]);
var inst_27325 = cljs.core.async.close_BANG_.call(null,inst_27322);
var state_27410__$1 = state_27410;
var statearr_27444_27517 = state_27410__$1;
(statearr_27444_27517[(2)] = inst_27325);

(statearr_27444_27517[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (36))){
var inst_27369 = (state_27410[(25)]);
var inst_27373 = cljs.core.chunk_first.call(null,inst_27369);
var inst_27374 = cljs.core.chunk_rest.call(null,inst_27369);
var inst_27375 = cljs.core.count.call(null,inst_27373);
var inst_27350 = inst_27374;
var inst_27351 = inst_27373;
var inst_27352 = inst_27375;
var inst_27353 = (0);
var state_27410__$1 = (function (){var statearr_27445 = state_27410;
(statearr_27445[(20)] = inst_27352);

(statearr_27445[(10)] = inst_27351);

(statearr_27445[(21)] = inst_27350);

(statearr_27445[(12)] = inst_27353);

return statearr_27445;
})();
var statearr_27446_27518 = state_27410__$1;
(statearr_27446_27518[(2)] = null);

(statearr_27446_27518[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (41))){
var inst_27369 = (state_27410[(25)]);
var inst_27385 = (state_27410[(2)]);
var inst_27386 = cljs.core.next.call(null,inst_27369);
var inst_27350 = inst_27386;
var inst_27351 = null;
var inst_27352 = (0);
var inst_27353 = (0);
var state_27410__$1 = (function (){var statearr_27447 = state_27410;
(statearr_27447[(20)] = inst_27352);

(statearr_27447[(10)] = inst_27351);

(statearr_27447[(21)] = inst_27350);

(statearr_27447[(12)] = inst_27353);

(statearr_27447[(27)] = inst_27385);

return statearr_27447;
})();
var statearr_27448_27519 = state_27410__$1;
(statearr_27448_27519[(2)] = null);

(statearr_27448_27519[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (43))){
var state_27410__$1 = state_27410;
var statearr_27449_27520 = state_27410__$1;
(statearr_27449_27520[(2)] = null);

(statearr_27449_27520[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (29))){
var inst_27394 = (state_27410[(2)]);
var state_27410__$1 = state_27410;
var statearr_27450_27521 = state_27410__$1;
(statearr_27450_27521[(2)] = inst_27394);

(statearr_27450_27521[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (44))){
var inst_27403 = (state_27410[(2)]);
var state_27410__$1 = (function (){var statearr_27451 = state_27410;
(statearr_27451[(28)] = inst_27403);

return statearr_27451;
})();
var statearr_27452_27522 = state_27410__$1;
(statearr_27452_27522[(2)] = null);

(statearr_27452_27522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (6))){
var inst_27342 = (state_27410[(29)]);
var inst_27341 = cljs.core.deref.call(null,cs);
var inst_27342__$1 = cljs.core.keys.call(null,inst_27341);
var inst_27343 = cljs.core.count.call(null,inst_27342__$1);
var inst_27344 = cljs.core.reset_BANG_.call(null,dctr,inst_27343);
var inst_27349 = cljs.core.seq.call(null,inst_27342__$1);
var inst_27350 = inst_27349;
var inst_27351 = null;
var inst_27352 = (0);
var inst_27353 = (0);
var state_27410__$1 = (function (){var statearr_27453 = state_27410;
(statearr_27453[(20)] = inst_27352);

(statearr_27453[(30)] = inst_27344);

(statearr_27453[(10)] = inst_27351);

(statearr_27453[(21)] = inst_27350);

(statearr_27453[(12)] = inst_27353);

(statearr_27453[(29)] = inst_27342__$1);

return statearr_27453;
})();
var statearr_27454_27523 = state_27410__$1;
(statearr_27454_27523[(2)] = null);

(statearr_27454_27523[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (28))){
var inst_27350 = (state_27410[(21)]);
var inst_27369 = (state_27410[(25)]);
var inst_27369__$1 = cljs.core.seq.call(null,inst_27350);
var state_27410__$1 = (function (){var statearr_27455 = state_27410;
(statearr_27455[(25)] = inst_27369__$1);

return statearr_27455;
})();
if(inst_27369__$1){
var statearr_27456_27524 = state_27410__$1;
(statearr_27456_27524[(1)] = (33));

} else {
var statearr_27457_27525 = state_27410__$1;
(statearr_27457_27525[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (25))){
var inst_27352 = (state_27410[(20)]);
var inst_27353 = (state_27410[(12)]);
var inst_27355 = (inst_27353 < inst_27352);
var inst_27356 = inst_27355;
var state_27410__$1 = state_27410;
if(cljs.core.truth_(inst_27356)){
var statearr_27458_27526 = state_27410__$1;
(statearr_27458_27526[(1)] = (27));

} else {
var statearr_27459_27527 = state_27410__$1;
(statearr_27459_27527[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (34))){
var state_27410__$1 = state_27410;
var statearr_27460_27528 = state_27410__$1;
(statearr_27460_27528[(2)] = null);

(statearr_27460_27528[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (17))){
var state_27410__$1 = state_27410;
var statearr_27461_27529 = state_27410__$1;
(statearr_27461_27529[(2)] = null);

(statearr_27461_27529[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (3))){
var inst_27408 = (state_27410[(2)]);
var state_27410__$1 = state_27410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27410__$1,inst_27408);
} else {
if((state_val_27411 === (12))){
var inst_27337 = (state_27410[(2)]);
var state_27410__$1 = state_27410;
var statearr_27462_27530 = state_27410__$1;
(statearr_27462_27530[(2)] = inst_27337);

(statearr_27462_27530[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (2))){
var state_27410__$1 = state_27410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27410__$1,(4),ch);
} else {
if((state_val_27411 === (23))){
var state_27410__$1 = state_27410;
var statearr_27463_27531 = state_27410__$1;
(statearr_27463_27531[(2)] = null);

(statearr_27463_27531[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (35))){
var inst_27392 = (state_27410[(2)]);
var state_27410__$1 = state_27410;
var statearr_27464_27532 = state_27410__$1;
(statearr_27464_27532[(2)] = inst_27392);

(statearr_27464_27532[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (19))){
var inst_27311 = (state_27410[(7)]);
var inst_27315 = cljs.core.chunk_first.call(null,inst_27311);
var inst_27316 = cljs.core.chunk_rest.call(null,inst_27311);
var inst_27317 = cljs.core.count.call(null,inst_27315);
var inst_27291 = inst_27316;
var inst_27292 = inst_27315;
var inst_27293 = inst_27317;
var inst_27294 = (0);
var state_27410__$1 = (function (){var statearr_27465 = state_27410;
(statearr_27465[(13)] = inst_27291);

(statearr_27465[(14)] = inst_27292);

(statearr_27465[(16)] = inst_27293);

(statearr_27465[(17)] = inst_27294);

return statearr_27465;
})();
var statearr_27466_27533 = state_27410__$1;
(statearr_27466_27533[(2)] = null);

(statearr_27466_27533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (11))){
var inst_27311 = (state_27410[(7)]);
var inst_27291 = (state_27410[(13)]);
var inst_27311__$1 = cljs.core.seq.call(null,inst_27291);
var state_27410__$1 = (function (){var statearr_27467 = state_27410;
(statearr_27467[(7)] = inst_27311__$1);

return statearr_27467;
})();
if(inst_27311__$1){
var statearr_27468_27534 = state_27410__$1;
(statearr_27468_27534[(1)] = (16));

} else {
var statearr_27469_27535 = state_27410__$1;
(statearr_27469_27535[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (9))){
var inst_27339 = (state_27410[(2)]);
var state_27410__$1 = state_27410;
var statearr_27470_27536 = state_27410__$1;
(statearr_27470_27536[(2)] = inst_27339);

(statearr_27470_27536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (5))){
var inst_27289 = cljs.core.deref.call(null,cs);
var inst_27290 = cljs.core.seq.call(null,inst_27289);
var inst_27291 = inst_27290;
var inst_27292 = null;
var inst_27293 = (0);
var inst_27294 = (0);
var state_27410__$1 = (function (){var statearr_27471 = state_27410;
(statearr_27471[(13)] = inst_27291);

(statearr_27471[(14)] = inst_27292);

(statearr_27471[(16)] = inst_27293);

(statearr_27471[(17)] = inst_27294);

return statearr_27471;
})();
var statearr_27472_27537 = state_27410__$1;
(statearr_27472_27537[(2)] = null);

(statearr_27472_27537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (14))){
var state_27410__$1 = state_27410;
var statearr_27473_27538 = state_27410__$1;
(statearr_27473_27538[(2)] = null);

(statearr_27473_27538[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (45))){
var inst_27400 = (state_27410[(2)]);
var state_27410__$1 = state_27410;
var statearr_27474_27539 = state_27410__$1;
(statearr_27474_27539[(2)] = inst_27400);

(statearr_27474_27539[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (26))){
var inst_27342 = (state_27410[(29)]);
var inst_27396 = (state_27410[(2)]);
var inst_27397 = cljs.core.seq.call(null,inst_27342);
var state_27410__$1 = (function (){var statearr_27475 = state_27410;
(statearr_27475[(31)] = inst_27396);

return statearr_27475;
})();
if(inst_27397){
var statearr_27476_27540 = state_27410__$1;
(statearr_27476_27540[(1)] = (42));

} else {
var statearr_27477_27541 = state_27410__$1;
(statearr_27477_27541[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (16))){
var inst_27311 = (state_27410[(7)]);
var inst_27313 = cljs.core.chunked_seq_QMARK_.call(null,inst_27311);
var state_27410__$1 = state_27410;
if(inst_27313){
var statearr_27478_27542 = state_27410__$1;
(statearr_27478_27542[(1)] = (19));

} else {
var statearr_27479_27543 = state_27410__$1;
(statearr_27479_27543[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (38))){
var inst_27389 = (state_27410[(2)]);
var state_27410__$1 = state_27410;
var statearr_27480_27544 = state_27410__$1;
(statearr_27480_27544[(2)] = inst_27389);

(statearr_27480_27544[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (30))){
var state_27410__$1 = state_27410;
var statearr_27481_27545 = state_27410__$1;
(statearr_27481_27545[(2)] = null);

(statearr_27481_27545[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (10))){
var inst_27292 = (state_27410[(14)]);
var inst_27294 = (state_27410[(17)]);
var inst_27300 = cljs.core._nth.call(null,inst_27292,inst_27294);
var inst_27301 = cljs.core.nth.call(null,inst_27300,(0),null);
var inst_27302 = cljs.core.nth.call(null,inst_27300,(1),null);
var state_27410__$1 = (function (){var statearr_27482 = state_27410;
(statearr_27482[(26)] = inst_27301);

return statearr_27482;
})();
if(cljs.core.truth_(inst_27302)){
var statearr_27483_27546 = state_27410__$1;
(statearr_27483_27546[(1)] = (13));

} else {
var statearr_27484_27547 = state_27410__$1;
(statearr_27484_27547[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (18))){
var inst_27335 = (state_27410[(2)]);
var state_27410__$1 = state_27410;
var statearr_27485_27548 = state_27410__$1;
(statearr_27485_27548[(2)] = inst_27335);

(statearr_27485_27548[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (42))){
var state_27410__$1 = state_27410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27410__$1,(45),dchan);
} else {
if((state_val_27411 === (37))){
var inst_27282 = (state_27410[(11)]);
var inst_27378 = (state_27410[(23)]);
var inst_27369 = (state_27410[(25)]);
var inst_27378__$1 = cljs.core.first.call(null,inst_27369);
var inst_27379 = cljs.core.async.put_BANG_.call(null,inst_27378__$1,inst_27282,done);
var state_27410__$1 = (function (){var statearr_27486 = state_27410;
(statearr_27486[(23)] = inst_27378__$1);

return statearr_27486;
})();
if(cljs.core.truth_(inst_27379)){
var statearr_27487_27549 = state_27410__$1;
(statearr_27487_27549[(1)] = (39));

} else {
var statearr_27488_27550 = state_27410__$1;
(statearr_27488_27550[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (8))){
var inst_27293 = (state_27410[(16)]);
var inst_27294 = (state_27410[(17)]);
var inst_27296 = (inst_27294 < inst_27293);
var inst_27297 = inst_27296;
var state_27410__$1 = state_27410;
if(cljs.core.truth_(inst_27297)){
var statearr_27489_27551 = state_27410__$1;
(statearr_27489_27551[(1)] = (10));

} else {
var statearr_27490_27552 = state_27410__$1;
(statearr_27490_27552[(1)] = (11));

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
});})(c__19791__auto___27498,cs,m,dchan,dctr,done))
;
return ((function (switch__19726__auto__,c__19791__auto___27498,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19727__auto__ = null;
var cljs$core$async$mult_$_state_machine__19727__auto____0 = (function (){
var statearr_27494 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27494[(0)] = cljs$core$async$mult_$_state_machine__19727__auto__);

(statearr_27494[(1)] = (1));

return statearr_27494;
});
var cljs$core$async$mult_$_state_machine__19727__auto____1 = (function (state_27410){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_27410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e27495){if((e27495 instanceof Object)){
var ex__19730__auto__ = e27495;
var statearr_27496_27553 = state_27410;
(statearr_27496_27553[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27554 = state_27410;
state_27410 = G__27554;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19727__auto__ = function(state_27410){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19727__auto____1.call(this,state_27410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19727__auto____0;
cljs$core$async$mult_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19727__auto____1;
return cljs$core$async$mult_$_state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19791__auto___27498,cs,m,dchan,dctr,done))
})();
var state__19793__auto__ = (function (){var statearr_27497 = f__19792__auto__.call(null);
(statearr_27497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19791__auto___27498);

return statearr_27497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19793__auto__);
});})(c__19791__auto___27498,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args27555 = [];
var len__17548__auto___27558 = arguments.length;
var i__17549__auto___27559 = (0);
while(true){
if((i__17549__auto___27559 < len__17548__auto___27558)){
args27555.push((arguments[i__17549__auto___27559]));

var G__27560 = (i__17549__auto___27559 + (1));
i__17549__auto___27559 = G__27560;
continue;
} else {
}
break;
}

var G__27557 = args27555.length;
switch (G__27557) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27555.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17145__auto__ = (((m == null))?null:m);
var m__17146__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,m,ch);
} else {
var m__17146__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17145__auto__ = (((m == null))?null:m);
var m__17146__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,m,ch);
} else {
var m__17146__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17145__auto__ = (((m == null))?null:m);
var m__17146__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,m);
} else {
var m__17146__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17145__auto__ = (((m == null))?null:m);
var m__17146__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,m,state_map);
} else {
var m__17146__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17145__auto__ = (((m == null))?null:m);
var m__17146__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,m,mode);
} else {
var m__17146__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17555__auto__ = [];
var len__17548__auto___27572 = arguments.length;
var i__17549__auto___27573 = (0);
while(true){
if((i__17549__auto___27573 < len__17548__auto___27572)){
args__17555__auto__.push((arguments[i__17549__auto___27573]));

var G__27574 = (i__17549__auto___27573 + (1));
i__17549__auto___27573 = G__27574;
continue;
} else {
}
break;
}

var argseq__17556__auto__ = ((((3) < args__17555__auto__.length))?(new cljs.core.IndexedSeq(args__17555__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17556__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27566){
var map__27567 = p__27566;
var map__27567__$1 = ((((!((map__27567 == null)))?((((map__27567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27567):map__27567);
var opts = map__27567__$1;
var statearr_27569_27575 = state;
(statearr_27569_27575[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__27567,map__27567__$1,opts){
return (function (val){
var statearr_27570_27576 = state;
(statearr_27570_27576[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27567,map__27567__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_27571_27577 = state;
(statearr_27571_27577[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27562){
var G__27563 = cljs.core.first.call(null,seq27562);
var seq27562__$1 = cljs.core.next.call(null,seq27562);
var G__27564 = cljs.core.first.call(null,seq27562__$1);
var seq27562__$2 = cljs.core.next.call(null,seq27562__$1);
var G__27565 = cljs.core.first.call(null,seq27562__$2);
var seq27562__$3 = cljs.core.next.call(null,seq27562__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27563,G__27564,G__27565,seq27562__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27741 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27741 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27742){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27742 = meta27742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27743,meta27742__$1){
var self__ = this;
var _27743__$1 = this;
return (new cljs.core.async.t_cljs$core$async27741(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27742__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27741.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27743){
var self__ = this;
var _27743__$1 = this;
return self__.meta27742;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27741.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27741.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27741.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async27741.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27741.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27741.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27741.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27741.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27741.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27742","meta27742",590932431,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27741.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27741.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27741";

cljs.core.async.t_cljs$core$async27741.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"cljs.core.async/t_cljs$core$async27741");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async27741 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27741(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27742){
return (new cljs.core.async.t_cljs$core$async27741(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27742));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27741(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19791__auto___27904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19791__auto___27904,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19792__auto__ = (function (){var switch__19726__auto__ = ((function (c__19791__auto___27904,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27841){
var state_val_27842 = (state_27841[(1)]);
if((state_val_27842 === (7))){
var inst_27759 = (state_27841[(2)]);
var state_27841__$1 = state_27841;
var statearr_27843_27905 = state_27841__$1;
(statearr_27843_27905[(2)] = inst_27759);

(statearr_27843_27905[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (20))){
var inst_27771 = (state_27841[(7)]);
var state_27841__$1 = state_27841;
var statearr_27844_27906 = state_27841__$1;
(statearr_27844_27906[(2)] = inst_27771);

(statearr_27844_27906[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (27))){
var state_27841__$1 = state_27841;
var statearr_27845_27907 = state_27841__$1;
(statearr_27845_27907[(2)] = null);

(statearr_27845_27907[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (1))){
var inst_27747 = (state_27841[(8)]);
var inst_27747__$1 = calc_state.call(null);
var inst_27749 = (inst_27747__$1 == null);
var inst_27750 = cljs.core.not.call(null,inst_27749);
var state_27841__$1 = (function (){var statearr_27846 = state_27841;
(statearr_27846[(8)] = inst_27747__$1);

return statearr_27846;
})();
if(inst_27750){
var statearr_27847_27908 = state_27841__$1;
(statearr_27847_27908[(1)] = (2));

} else {
var statearr_27848_27909 = state_27841__$1;
(statearr_27848_27909[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (24))){
var inst_27794 = (state_27841[(9)]);
var inst_27815 = (state_27841[(10)]);
var inst_27801 = (state_27841[(11)]);
var inst_27815__$1 = inst_27794.call(null,inst_27801);
var state_27841__$1 = (function (){var statearr_27849 = state_27841;
(statearr_27849[(10)] = inst_27815__$1);

return statearr_27849;
})();
if(cljs.core.truth_(inst_27815__$1)){
var statearr_27850_27910 = state_27841__$1;
(statearr_27850_27910[(1)] = (29));

} else {
var statearr_27851_27911 = state_27841__$1;
(statearr_27851_27911[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (4))){
var inst_27762 = (state_27841[(2)]);
var state_27841__$1 = state_27841;
if(cljs.core.truth_(inst_27762)){
var statearr_27852_27912 = state_27841__$1;
(statearr_27852_27912[(1)] = (8));

} else {
var statearr_27853_27913 = state_27841__$1;
(statearr_27853_27913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (15))){
var inst_27788 = (state_27841[(2)]);
var state_27841__$1 = state_27841;
if(cljs.core.truth_(inst_27788)){
var statearr_27854_27914 = state_27841__$1;
(statearr_27854_27914[(1)] = (19));

} else {
var statearr_27855_27915 = state_27841__$1;
(statearr_27855_27915[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (21))){
var inst_27793 = (state_27841[(12)]);
var inst_27793__$1 = (state_27841[(2)]);
var inst_27794 = cljs.core.get.call(null,inst_27793__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27795 = cljs.core.get.call(null,inst_27793__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27796 = cljs.core.get.call(null,inst_27793__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27841__$1 = (function (){var statearr_27856 = state_27841;
(statearr_27856[(12)] = inst_27793__$1);

(statearr_27856[(9)] = inst_27794);

(statearr_27856[(13)] = inst_27795);

return statearr_27856;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27841__$1,(22),inst_27796);
} else {
if((state_val_27842 === (31))){
var inst_27823 = (state_27841[(2)]);
var state_27841__$1 = state_27841;
if(cljs.core.truth_(inst_27823)){
var statearr_27857_27916 = state_27841__$1;
(statearr_27857_27916[(1)] = (32));

} else {
var statearr_27858_27917 = state_27841__$1;
(statearr_27858_27917[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (32))){
var inst_27800 = (state_27841[(14)]);
var state_27841__$1 = state_27841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27841__$1,(35),out,inst_27800);
} else {
if((state_val_27842 === (33))){
var inst_27793 = (state_27841[(12)]);
var inst_27771 = inst_27793;
var state_27841__$1 = (function (){var statearr_27859 = state_27841;
(statearr_27859[(7)] = inst_27771);

return statearr_27859;
})();
var statearr_27860_27918 = state_27841__$1;
(statearr_27860_27918[(2)] = null);

(statearr_27860_27918[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (13))){
var inst_27771 = (state_27841[(7)]);
var inst_27778 = inst_27771.cljs$lang$protocol_mask$partition0$;
var inst_27779 = (inst_27778 & (64));
var inst_27780 = inst_27771.cljs$core$ISeq$;
var inst_27781 = (inst_27779) || (inst_27780);
var state_27841__$1 = state_27841;
if(cljs.core.truth_(inst_27781)){
var statearr_27861_27919 = state_27841__$1;
(statearr_27861_27919[(1)] = (16));

} else {
var statearr_27862_27920 = state_27841__$1;
(statearr_27862_27920[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (22))){
var inst_27800 = (state_27841[(14)]);
var inst_27801 = (state_27841[(11)]);
var inst_27799 = (state_27841[(2)]);
var inst_27800__$1 = cljs.core.nth.call(null,inst_27799,(0),null);
var inst_27801__$1 = cljs.core.nth.call(null,inst_27799,(1),null);
var inst_27802 = (inst_27800__$1 == null);
var inst_27803 = cljs.core._EQ_.call(null,inst_27801__$1,change);
var inst_27804 = (inst_27802) || (inst_27803);
var state_27841__$1 = (function (){var statearr_27863 = state_27841;
(statearr_27863[(14)] = inst_27800__$1);

(statearr_27863[(11)] = inst_27801__$1);

return statearr_27863;
})();
if(cljs.core.truth_(inst_27804)){
var statearr_27864_27921 = state_27841__$1;
(statearr_27864_27921[(1)] = (23));

} else {
var statearr_27865_27922 = state_27841__$1;
(statearr_27865_27922[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (36))){
var inst_27793 = (state_27841[(12)]);
var inst_27771 = inst_27793;
var state_27841__$1 = (function (){var statearr_27866 = state_27841;
(statearr_27866[(7)] = inst_27771);

return statearr_27866;
})();
var statearr_27867_27923 = state_27841__$1;
(statearr_27867_27923[(2)] = null);

(statearr_27867_27923[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (29))){
var inst_27815 = (state_27841[(10)]);
var state_27841__$1 = state_27841;
var statearr_27868_27924 = state_27841__$1;
(statearr_27868_27924[(2)] = inst_27815);

(statearr_27868_27924[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (6))){
var state_27841__$1 = state_27841;
var statearr_27869_27925 = state_27841__$1;
(statearr_27869_27925[(2)] = false);

(statearr_27869_27925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (28))){
var inst_27811 = (state_27841[(2)]);
var inst_27812 = calc_state.call(null);
var inst_27771 = inst_27812;
var state_27841__$1 = (function (){var statearr_27870 = state_27841;
(statearr_27870[(15)] = inst_27811);

(statearr_27870[(7)] = inst_27771);

return statearr_27870;
})();
var statearr_27871_27926 = state_27841__$1;
(statearr_27871_27926[(2)] = null);

(statearr_27871_27926[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (25))){
var inst_27837 = (state_27841[(2)]);
var state_27841__$1 = state_27841;
var statearr_27872_27927 = state_27841__$1;
(statearr_27872_27927[(2)] = inst_27837);

(statearr_27872_27927[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (34))){
var inst_27835 = (state_27841[(2)]);
var state_27841__$1 = state_27841;
var statearr_27873_27928 = state_27841__$1;
(statearr_27873_27928[(2)] = inst_27835);

(statearr_27873_27928[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (17))){
var state_27841__$1 = state_27841;
var statearr_27874_27929 = state_27841__$1;
(statearr_27874_27929[(2)] = false);

(statearr_27874_27929[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (3))){
var state_27841__$1 = state_27841;
var statearr_27875_27930 = state_27841__$1;
(statearr_27875_27930[(2)] = false);

(statearr_27875_27930[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (12))){
var inst_27839 = (state_27841[(2)]);
var state_27841__$1 = state_27841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27841__$1,inst_27839);
} else {
if((state_val_27842 === (2))){
var inst_27747 = (state_27841[(8)]);
var inst_27752 = inst_27747.cljs$lang$protocol_mask$partition0$;
var inst_27753 = (inst_27752 & (64));
var inst_27754 = inst_27747.cljs$core$ISeq$;
var inst_27755 = (inst_27753) || (inst_27754);
var state_27841__$1 = state_27841;
if(cljs.core.truth_(inst_27755)){
var statearr_27876_27931 = state_27841__$1;
(statearr_27876_27931[(1)] = (5));

} else {
var statearr_27877_27932 = state_27841__$1;
(statearr_27877_27932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (23))){
var inst_27800 = (state_27841[(14)]);
var inst_27806 = (inst_27800 == null);
var state_27841__$1 = state_27841;
if(cljs.core.truth_(inst_27806)){
var statearr_27878_27933 = state_27841__$1;
(statearr_27878_27933[(1)] = (26));

} else {
var statearr_27879_27934 = state_27841__$1;
(statearr_27879_27934[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (35))){
var inst_27826 = (state_27841[(2)]);
var state_27841__$1 = state_27841;
if(cljs.core.truth_(inst_27826)){
var statearr_27880_27935 = state_27841__$1;
(statearr_27880_27935[(1)] = (36));

} else {
var statearr_27881_27936 = state_27841__$1;
(statearr_27881_27936[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (19))){
var inst_27771 = (state_27841[(7)]);
var inst_27790 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27771);
var state_27841__$1 = state_27841;
var statearr_27882_27937 = state_27841__$1;
(statearr_27882_27937[(2)] = inst_27790);

(statearr_27882_27937[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (11))){
var inst_27771 = (state_27841[(7)]);
var inst_27775 = (inst_27771 == null);
var inst_27776 = cljs.core.not.call(null,inst_27775);
var state_27841__$1 = state_27841;
if(inst_27776){
var statearr_27883_27938 = state_27841__$1;
(statearr_27883_27938[(1)] = (13));

} else {
var statearr_27884_27939 = state_27841__$1;
(statearr_27884_27939[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (9))){
var inst_27747 = (state_27841[(8)]);
var state_27841__$1 = state_27841;
var statearr_27885_27940 = state_27841__$1;
(statearr_27885_27940[(2)] = inst_27747);

(statearr_27885_27940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (5))){
var state_27841__$1 = state_27841;
var statearr_27886_27941 = state_27841__$1;
(statearr_27886_27941[(2)] = true);

(statearr_27886_27941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (14))){
var state_27841__$1 = state_27841;
var statearr_27887_27942 = state_27841__$1;
(statearr_27887_27942[(2)] = false);

(statearr_27887_27942[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (26))){
var inst_27801 = (state_27841[(11)]);
var inst_27808 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27801);
var state_27841__$1 = state_27841;
var statearr_27888_27943 = state_27841__$1;
(statearr_27888_27943[(2)] = inst_27808);

(statearr_27888_27943[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (16))){
var state_27841__$1 = state_27841;
var statearr_27889_27944 = state_27841__$1;
(statearr_27889_27944[(2)] = true);

(statearr_27889_27944[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (38))){
var inst_27831 = (state_27841[(2)]);
var state_27841__$1 = state_27841;
var statearr_27890_27945 = state_27841__$1;
(statearr_27890_27945[(2)] = inst_27831);

(statearr_27890_27945[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (30))){
var inst_27794 = (state_27841[(9)]);
var inst_27795 = (state_27841[(13)]);
var inst_27801 = (state_27841[(11)]);
var inst_27818 = cljs.core.empty_QMARK_.call(null,inst_27794);
var inst_27819 = inst_27795.call(null,inst_27801);
var inst_27820 = cljs.core.not.call(null,inst_27819);
var inst_27821 = (inst_27818) && (inst_27820);
var state_27841__$1 = state_27841;
var statearr_27891_27946 = state_27841__$1;
(statearr_27891_27946[(2)] = inst_27821);

(statearr_27891_27946[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (10))){
var inst_27747 = (state_27841[(8)]);
var inst_27767 = (state_27841[(2)]);
var inst_27768 = cljs.core.get.call(null,inst_27767,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27769 = cljs.core.get.call(null,inst_27767,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27770 = cljs.core.get.call(null,inst_27767,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27771 = inst_27747;
var state_27841__$1 = (function (){var statearr_27892 = state_27841;
(statearr_27892[(16)] = inst_27770);

(statearr_27892[(7)] = inst_27771);

(statearr_27892[(17)] = inst_27769);

(statearr_27892[(18)] = inst_27768);

return statearr_27892;
})();
var statearr_27893_27947 = state_27841__$1;
(statearr_27893_27947[(2)] = null);

(statearr_27893_27947[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (18))){
var inst_27785 = (state_27841[(2)]);
var state_27841__$1 = state_27841;
var statearr_27894_27948 = state_27841__$1;
(statearr_27894_27948[(2)] = inst_27785);

(statearr_27894_27948[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (37))){
var state_27841__$1 = state_27841;
var statearr_27895_27949 = state_27841__$1;
(statearr_27895_27949[(2)] = null);

(statearr_27895_27949[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (8))){
var inst_27747 = (state_27841[(8)]);
var inst_27764 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27747);
var state_27841__$1 = state_27841;
var statearr_27896_27950 = state_27841__$1;
(statearr_27896_27950[(2)] = inst_27764);

(statearr_27896_27950[(1)] = (10));


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
});})(c__19791__auto___27904,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19726__auto__,c__19791__auto___27904,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19727__auto__ = null;
var cljs$core$async$mix_$_state_machine__19727__auto____0 = (function (){
var statearr_27900 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27900[(0)] = cljs$core$async$mix_$_state_machine__19727__auto__);

(statearr_27900[(1)] = (1));

return statearr_27900;
});
var cljs$core$async$mix_$_state_machine__19727__auto____1 = (function (state_27841){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_27841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e27901){if((e27901 instanceof Object)){
var ex__19730__auto__ = e27901;
var statearr_27902_27951 = state_27841;
(statearr_27902_27951[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27952 = state_27841;
state_27841 = G__27952;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19727__auto__ = function(state_27841){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19727__auto____1.call(this,state_27841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19727__auto____0;
cljs$core$async$mix_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19727__auto____1;
return cljs$core$async$mix_$_state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19791__auto___27904,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19793__auto__ = (function (){var statearr_27903 = f__19792__auto__.call(null);
(statearr_27903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19791__auto___27904);

return statearr_27903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19793__auto__);
});})(c__19791__auto___27904,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17145__auto__ = (((p == null))?null:p);
var m__17146__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17146__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17145__auto__ = (((p == null))?null:p);
var m__17146__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,p,v,ch);
} else {
var m__17146__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args27953 = [];
var len__17548__auto___27956 = arguments.length;
var i__17549__auto___27957 = (0);
while(true){
if((i__17549__auto___27957 < len__17548__auto___27956)){
args27953.push((arguments[i__17549__auto___27957]));

var G__27958 = (i__17549__auto___27957 + (1));
i__17549__auto___27957 = G__27958;
continue;
} else {
}
break;
}

var G__27955 = args27953.length;
switch (G__27955) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27953.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17145__auto__ = (((p == null))?null:p);
var m__17146__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,p);
} else {
var m__17146__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17145__auto__ = (((p == null))?null:p);
var m__17146__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,p,v);
} else {
var m__17146__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args27961 = [];
var len__17548__auto___28086 = arguments.length;
var i__17549__auto___28087 = (0);
while(true){
if((i__17549__auto___28087 < len__17548__auto___28086)){
args27961.push((arguments[i__17549__auto___28087]));

var G__28088 = (i__17549__auto___28087 + (1));
i__17549__auto___28087 = G__28088;
continue;
} else {
}
break;
}

var G__27963 = args27961.length;
switch (G__27963) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27961.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16490__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16490__auto__,mults){
return (function (p1__27960_SHARP_){
if(cljs.core.truth_(p1__27960_SHARP_.call(null,topic))){
return p1__27960_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27960_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16490__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async27964 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27964 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27965){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27965 = meta27965;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27966,meta27965__$1){
var self__ = this;
var _27966__$1 = this;
return (new cljs.core.async.t_cljs$core$async27964(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27965__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27964.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27966){
var self__ = this;
var _27966__$1 = this;
return self__.meta27965;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27964.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27964.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27964.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async27964.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27964.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27964.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27964.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27964.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27965","meta27965",256327472,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27964.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27964.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27964";

cljs.core.async.t_cljs$core$async27964.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"cljs.core.async/t_cljs$core$async27964");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async27964 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27964(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27965){
return (new cljs.core.async.t_cljs$core$async27964(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27965));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27964(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19791__auto___28090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19791__auto___28090,mults,ensure_mult,p){
return (function (){
var f__19792__auto__ = (function (){var switch__19726__auto__ = ((function (c__19791__auto___28090,mults,ensure_mult,p){
return (function (state_28038){
var state_val_28039 = (state_28038[(1)]);
if((state_val_28039 === (7))){
var inst_28034 = (state_28038[(2)]);
var state_28038__$1 = state_28038;
var statearr_28040_28091 = state_28038__$1;
(statearr_28040_28091[(2)] = inst_28034);

(statearr_28040_28091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28039 === (20))){
var state_28038__$1 = state_28038;
var statearr_28041_28092 = state_28038__$1;
(statearr_28041_28092[(2)] = null);

(statearr_28041_28092[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28039 === (1))){
var state_28038__$1 = state_28038;
var statearr_28042_28093 = state_28038__$1;
(statearr_28042_28093[(2)] = null);

(statearr_28042_28093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28039 === (24))){
var inst_28017 = (state_28038[(7)]);
var inst_28026 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28017);
var state_28038__$1 = state_28038;
var statearr_28043_28094 = state_28038__$1;
(statearr_28043_28094[(2)] = inst_28026);

(statearr_28043_28094[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28039 === (4))){
var inst_27969 = (state_28038[(8)]);
var inst_27969__$1 = (state_28038[(2)]);
var inst_27970 = (inst_27969__$1 == null);
var state_28038__$1 = (function (){var statearr_28044 = state_28038;
(statearr_28044[(8)] = inst_27969__$1);

return statearr_28044;
})();
if(cljs.core.truth_(inst_27970)){
var statearr_28045_28095 = state_28038__$1;
(statearr_28045_28095[(1)] = (5));

} else {
var statearr_28046_28096 = state_28038__$1;
(statearr_28046_28096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28039 === (15))){
var inst_28011 = (state_28038[(2)]);
var state_28038__$1 = state_28038;
var statearr_28047_28097 = state_28038__$1;
(statearr_28047_28097[(2)] = inst_28011);

(statearr_28047_28097[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28039 === (21))){
var inst_28031 = (state_28038[(2)]);
var state_28038__$1 = (function (){var statearr_28048 = state_28038;
(statearr_28048[(9)] = inst_28031);

return statearr_28048;
})();
var statearr_28049_28098 = state_28038__$1;
(statearr_28049_28098[(2)] = null);

(statearr_28049_28098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28039 === (13))){
var inst_27993 = (state_28038[(10)]);
var inst_27995 = cljs.core.chunked_seq_QMARK_.call(null,inst_27993);
var state_28038__$1 = state_28038;
if(inst_27995){
var statearr_28050_28099 = state_28038__$1;
(statearr_28050_28099[(1)] = (16));

} else {
var statearr_28051_28100 = state_28038__$1;
(statearr_28051_28100[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28039 === (22))){
var inst_28023 = (state_28038[(2)]);
var state_28038__$1 = state_28038;
if(cljs.core.truth_(inst_28023)){
var statearr_28052_28101 = state_28038__$1;
(statearr_28052_28101[(1)] = (23));

} else {
var statearr_28053_28102 = state_28038__$1;
(statearr_28053_28102[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28039 === (6))){
var inst_28019 = (state_28038[(11)]);
var inst_27969 = (state_28038[(8)]);
var inst_28017 = (state_28038[(7)]);
var inst_28017__$1 = topic_fn.call(null,inst_27969);
var inst_28018 = cljs.core.deref.call(null,mults);
var inst_28019__$1 = cljs.core.get.call(null,inst_28018,inst_28017__$1);
var state_28038__$1 = (function (){var statearr_28054 = state_28038;
(statearr_28054[(11)] = inst_28019__$1);

(statearr_28054[(7)] = inst_28017__$1);

return statearr_28054;
})();
if(cljs.core.truth_(inst_28019__$1)){
var statearr_28055_28103 = state_28038__$1;
(statearr_28055_28103[(1)] = (19));

} else {
var statearr_28056_28104 = state_28038__$1;
(statearr_28056_28104[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28039 === (25))){
var inst_28028 = (state_28038[(2)]);
var state_28038__$1 = state_28038;
var statearr_28057_28105 = state_28038__$1;
(statearr_28057_28105[(2)] = inst_28028);

(statearr_28057_28105[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28039 === (17))){
var inst_27993 = (state_28038[(10)]);
var inst_28002 = cljs.core.first.call(null,inst_27993);
var inst_28003 = cljs.core.async.muxch_STAR_.call(null,inst_28002);
var inst_28004 = cljs.core.async.close_BANG_.call(null,inst_28003);
var inst_28005 = cljs.core.next.call(null,inst_27993);
var inst_27979 = inst_28005;
var inst_27980 = null;
var inst_27981 = (0);
var inst_27982 = (0);
var state_28038__$1 = (function (){var statearr_28058 = state_28038;
(statearr_28058[(12)] = inst_27982);

(statearr_28058[(13)] = inst_28004);

(statearr_28058[(14)] = inst_27979);

(statearr_28058[(15)] = inst_27980);

(statearr_28058[(16)] = inst_27981);

return statearr_28058;
})();
var statearr_28059_28106 = state_28038__$1;
(statearr_28059_28106[(2)] = null);

(statearr_28059_28106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28039 === (3))){
var inst_28036 = (state_28038[(2)]);
var state_28038__$1 = state_28038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28038__$1,inst_28036);
} else {
if((state_val_28039 === (12))){
var inst_28013 = (state_28038[(2)]);
var state_28038__$1 = state_28038;
var statearr_28060_28107 = state_28038__$1;
(statearr_28060_28107[(2)] = inst_28013);

(statearr_28060_28107[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28039 === (2))){
var state_28038__$1 = state_28038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28038__$1,(4),ch);
} else {
if((state_val_28039 === (23))){
var state_28038__$1 = state_28038;
var statearr_28061_28108 = state_28038__$1;
(statearr_28061_28108[(2)] = null);

(statearr_28061_28108[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28039 === (19))){
var inst_28019 = (state_28038[(11)]);
var inst_27969 = (state_28038[(8)]);
var inst_28021 = cljs.core.async.muxch_STAR_.call(null,inst_28019);
var state_28038__$1 = state_28038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28038__$1,(22),inst_28021,inst_27969);
} else {
if((state_val_28039 === (11))){
var inst_27993 = (state_28038[(10)]);
var inst_27979 = (state_28038[(14)]);
var inst_27993__$1 = cljs.core.seq.call(null,inst_27979);
var state_28038__$1 = (function (){var statearr_28062 = state_28038;
(statearr_28062[(10)] = inst_27993__$1);

return statearr_28062;
})();
if(inst_27993__$1){
var statearr_28063_28109 = state_28038__$1;
(statearr_28063_28109[(1)] = (13));

} else {
var statearr_28064_28110 = state_28038__$1;
(statearr_28064_28110[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28039 === (9))){
var inst_28015 = (state_28038[(2)]);
var state_28038__$1 = state_28038;
var statearr_28065_28111 = state_28038__$1;
(statearr_28065_28111[(2)] = inst_28015);

(statearr_28065_28111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28039 === (5))){
var inst_27976 = cljs.core.deref.call(null,mults);
var inst_27977 = cljs.core.vals.call(null,inst_27976);
var inst_27978 = cljs.core.seq.call(null,inst_27977);
var inst_27979 = inst_27978;
var inst_27980 = null;
var inst_27981 = (0);
var inst_27982 = (0);
var state_28038__$1 = (function (){var statearr_28066 = state_28038;
(statearr_28066[(12)] = inst_27982);

(statearr_28066[(14)] = inst_27979);

(statearr_28066[(15)] = inst_27980);

(statearr_28066[(16)] = inst_27981);

return statearr_28066;
})();
var statearr_28067_28112 = state_28038__$1;
(statearr_28067_28112[(2)] = null);

(statearr_28067_28112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28039 === (14))){
var state_28038__$1 = state_28038;
var statearr_28071_28113 = state_28038__$1;
(statearr_28071_28113[(2)] = null);

(statearr_28071_28113[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28039 === (16))){
var inst_27993 = (state_28038[(10)]);
var inst_27997 = cljs.core.chunk_first.call(null,inst_27993);
var inst_27998 = cljs.core.chunk_rest.call(null,inst_27993);
var inst_27999 = cljs.core.count.call(null,inst_27997);
var inst_27979 = inst_27998;
var inst_27980 = inst_27997;
var inst_27981 = inst_27999;
var inst_27982 = (0);
var state_28038__$1 = (function (){var statearr_28072 = state_28038;
(statearr_28072[(12)] = inst_27982);

(statearr_28072[(14)] = inst_27979);

(statearr_28072[(15)] = inst_27980);

(statearr_28072[(16)] = inst_27981);

return statearr_28072;
})();
var statearr_28073_28114 = state_28038__$1;
(statearr_28073_28114[(2)] = null);

(statearr_28073_28114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28039 === (10))){
var inst_27982 = (state_28038[(12)]);
var inst_27979 = (state_28038[(14)]);
var inst_27980 = (state_28038[(15)]);
var inst_27981 = (state_28038[(16)]);
var inst_27987 = cljs.core._nth.call(null,inst_27980,inst_27982);
var inst_27988 = cljs.core.async.muxch_STAR_.call(null,inst_27987);
var inst_27989 = cljs.core.async.close_BANG_.call(null,inst_27988);
var inst_27990 = (inst_27982 + (1));
var tmp28068 = inst_27979;
var tmp28069 = inst_27980;
var tmp28070 = inst_27981;
var inst_27979__$1 = tmp28068;
var inst_27980__$1 = tmp28069;
var inst_27981__$1 = tmp28070;
var inst_27982__$1 = inst_27990;
var state_28038__$1 = (function (){var statearr_28074 = state_28038;
(statearr_28074[(17)] = inst_27989);

(statearr_28074[(12)] = inst_27982__$1);

(statearr_28074[(14)] = inst_27979__$1);

(statearr_28074[(15)] = inst_27980__$1);

(statearr_28074[(16)] = inst_27981__$1);

return statearr_28074;
})();
var statearr_28075_28115 = state_28038__$1;
(statearr_28075_28115[(2)] = null);

(statearr_28075_28115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28039 === (18))){
var inst_28008 = (state_28038[(2)]);
var state_28038__$1 = state_28038;
var statearr_28076_28116 = state_28038__$1;
(statearr_28076_28116[(2)] = inst_28008);

(statearr_28076_28116[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28039 === (8))){
var inst_27982 = (state_28038[(12)]);
var inst_27981 = (state_28038[(16)]);
var inst_27984 = (inst_27982 < inst_27981);
var inst_27985 = inst_27984;
var state_28038__$1 = state_28038;
if(cljs.core.truth_(inst_27985)){
var statearr_28077_28117 = state_28038__$1;
(statearr_28077_28117[(1)] = (10));

} else {
var statearr_28078_28118 = state_28038__$1;
(statearr_28078_28118[(1)] = (11));

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
});})(c__19791__auto___28090,mults,ensure_mult,p))
;
return ((function (switch__19726__auto__,c__19791__auto___28090,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19727__auto__ = null;
var cljs$core$async$state_machine__19727__auto____0 = (function (){
var statearr_28082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28082[(0)] = cljs$core$async$state_machine__19727__auto__);

(statearr_28082[(1)] = (1));

return statearr_28082;
});
var cljs$core$async$state_machine__19727__auto____1 = (function (state_28038){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_28038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e28083){if((e28083 instanceof Object)){
var ex__19730__auto__ = e28083;
var statearr_28084_28119 = state_28038;
(statearr_28084_28119[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28120 = state_28038;
state_28038 = G__28120;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$state_machine__19727__auto__ = function(state_28038){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19727__auto____1.call(this,state_28038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19727__auto____0;
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19727__auto____1;
return cljs$core$async$state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19791__auto___28090,mults,ensure_mult,p))
})();
var state__19793__auto__ = (function (){var statearr_28085 = f__19792__auto__.call(null);
(statearr_28085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19791__auto___28090);

return statearr_28085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19793__auto__);
});})(c__19791__auto___28090,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args28121 = [];
var len__17548__auto___28124 = arguments.length;
var i__17549__auto___28125 = (0);
while(true){
if((i__17549__auto___28125 < len__17548__auto___28124)){
args28121.push((arguments[i__17549__auto___28125]));

var G__28126 = (i__17549__auto___28125 + (1));
i__17549__auto___28125 = G__28126;
continue;
} else {
}
break;
}

var G__28123 = args28121.length;
switch (G__28123) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28121.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args28128 = [];
var len__17548__auto___28131 = arguments.length;
var i__17549__auto___28132 = (0);
while(true){
if((i__17549__auto___28132 < len__17548__auto___28131)){
args28128.push((arguments[i__17549__auto___28132]));

var G__28133 = (i__17549__auto___28132 + (1));
i__17549__auto___28132 = G__28133;
continue;
} else {
}
break;
}

var G__28130 = args28128.length;
switch (G__28130) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28128.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args28135 = [];
var len__17548__auto___28206 = arguments.length;
var i__17549__auto___28207 = (0);
while(true){
if((i__17549__auto___28207 < len__17548__auto___28206)){
args28135.push((arguments[i__17549__auto___28207]));

var G__28208 = (i__17549__auto___28207 + (1));
i__17549__auto___28207 = G__28208;
continue;
} else {
}
break;
}

var G__28137 = args28135.length;
switch (G__28137) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28135.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19791__auto___28210 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19791__auto___28210,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19792__auto__ = (function (){var switch__19726__auto__ = ((function (c__19791__auto___28210,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28176){
var state_val_28177 = (state_28176[(1)]);
if((state_val_28177 === (7))){
var state_28176__$1 = state_28176;
var statearr_28178_28211 = state_28176__$1;
(statearr_28178_28211[(2)] = null);

(statearr_28178_28211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (1))){
var state_28176__$1 = state_28176;
var statearr_28179_28212 = state_28176__$1;
(statearr_28179_28212[(2)] = null);

(statearr_28179_28212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (4))){
var inst_28140 = (state_28176[(7)]);
var inst_28142 = (inst_28140 < cnt);
var state_28176__$1 = state_28176;
if(cljs.core.truth_(inst_28142)){
var statearr_28180_28213 = state_28176__$1;
(statearr_28180_28213[(1)] = (6));

} else {
var statearr_28181_28214 = state_28176__$1;
(statearr_28181_28214[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (15))){
var inst_28172 = (state_28176[(2)]);
var state_28176__$1 = state_28176;
var statearr_28182_28215 = state_28176__$1;
(statearr_28182_28215[(2)] = inst_28172);

(statearr_28182_28215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (13))){
var inst_28165 = cljs.core.async.close_BANG_.call(null,out);
var state_28176__$1 = state_28176;
var statearr_28183_28216 = state_28176__$1;
(statearr_28183_28216[(2)] = inst_28165);

(statearr_28183_28216[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (6))){
var state_28176__$1 = state_28176;
var statearr_28184_28217 = state_28176__$1;
(statearr_28184_28217[(2)] = null);

(statearr_28184_28217[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (3))){
var inst_28174 = (state_28176[(2)]);
var state_28176__$1 = state_28176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28176__$1,inst_28174);
} else {
if((state_val_28177 === (12))){
var inst_28162 = (state_28176[(8)]);
var inst_28162__$1 = (state_28176[(2)]);
var inst_28163 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28162__$1);
var state_28176__$1 = (function (){var statearr_28185 = state_28176;
(statearr_28185[(8)] = inst_28162__$1);

return statearr_28185;
})();
if(cljs.core.truth_(inst_28163)){
var statearr_28186_28218 = state_28176__$1;
(statearr_28186_28218[(1)] = (13));

} else {
var statearr_28187_28219 = state_28176__$1;
(statearr_28187_28219[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (2))){
var inst_28139 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28140 = (0);
var state_28176__$1 = (function (){var statearr_28188 = state_28176;
(statearr_28188[(9)] = inst_28139);

(statearr_28188[(7)] = inst_28140);

return statearr_28188;
})();
var statearr_28189_28220 = state_28176__$1;
(statearr_28189_28220[(2)] = null);

(statearr_28189_28220[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (11))){
var inst_28140 = (state_28176[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28176,(10),Object,null,(9));
var inst_28149 = chs__$1.call(null,inst_28140);
var inst_28150 = done.call(null,inst_28140);
var inst_28151 = cljs.core.async.take_BANG_.call(null,inst_28149,inst_28150);
var state_28176__$1 = state_28176;
var statearr_28190_28221 = state_28176__$1;
(statearr_28190_28221[(2)] = inst_28151);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28176__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (9))){
var inst_28140 = (state_28176[(7)]);
var inst_28153 = (state_28176[(2)]);
var inst_28154 = (inst_28140 + (1));
var inst_28140__$1 = inst_28154;
var state_28176__$1 = (function (){var statearr_28191 = state_28176;
(statearr_28191[(7)] = inst_28140__$1);

(statearr_28191[(10)] = inst_28153);

return statearr_28191;
})();
var statearr_28192_28222 = state_28176__$1;
(statearr_28192_28222[(2)] = null);

(statearr_28192_28222[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (5))){
var inst_28160 = (state_28176[(2)]);
var state_28176__$1 = (function (){var statearr_28193 = state_28176;
(statearr_28193[(11)] = inst_28160);

return statearr_28193;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28176__$1,(12),dchan);
} else {
if((state_val_28177 === (14))){
var inst_28162 = (state_28176[(8)]);
var inst_28167 = cljs.core.apply.call(null,f,inst_28162);
var state_28176__$1 = state_28176;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28176__$1,(16),out,inst_28167);
} else {
if((state_val_28177 === (16))){
var inst_28169 = (state_28176[(2)]);
var state_28176__$1 = (function (){var statearr_28194 = state_28176;
(statearr_28194[(12)] = inst_28169);

return statearr_28194;
})();
var statearr_28195_28223 = state_28176__$1;
(statearr_28195_28223[(2)] = null);

(statearr_28195_28223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (10))){
var inst_28144 = (state_28176[(2)]);
var inst_28145 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28176__$1 = (function (){var statearr_28196 = state_28176;
(statearr_28196[(13)] = inst_28144);

return statearr_28196;
})();
var statearr_28197_28224 = state_28176__$1;
(statearr_28197_28224[(2)] = inst_28145);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28176__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (8))){
var inst_28158 = (state_28176[(2)]);
var state_28176__$1 = state_28176;
var statearr_28198_28225 = state_28176__$1;
(statearr_28198_28225[(2)] = inst_28158);

(statearr_28198_28225[(1)] = (5));


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
});})(c__19791__auto___28210,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19726__auto__,c__19791__auto___28210,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19727__auto__ = null;
var cljs$core$async$state_machine__19727__auto____0 = (function (){
var statearr_28202 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28202[(0)] = cljs$core$async$state_machine__19727__auto__);

(statearr_28202[(1)] = (1));

return statearr_28202;
});
var cljs$core$async$state_machine__19727__auto____1 = (function (state_28176){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_28176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e28203){if((e28203 instanceof Object)){
var ex__19730__auto__ = e28203;
var statearr_28204_28226 = state_28176;
(statearr_28204_28226[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28227 = state_28176;
state_28176 = G__28227;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$state_machine__19727__auto__ = function(state_28176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19727__auto____1.call(this,state_28176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19727__auto____0;
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19727__auto____1;
return cljs$core$async$state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19791__auto___28210,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19793__auto__ = (function (){var statearr_28205 = f__19792__auto__.call(null);
(statearr_28205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19791__auto___28210);

return statearr_28205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19793__auto__);
});})(c__19791__auto___28210,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args28229 = [];
var len__17548__auto___28285 = arguments.length;
var i__17549__auto___28286 = (0);
while(true){
if((i__17549__auto___28286 < len__17548__auto___28285)){
args28229.push((arguments[i__17549__auto___28286]));

var G__28287 = (i__17549__auto___28286 + (1));
i__17549__auto___28286 = G__28287;
continue;
} else {
}
break;
}

var G__28231 = args28229.length;
switch (G__28231) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28229.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19791__auto___28289 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19791__auto___28289,out){
return (function (){
var f__19792__auto__ = (function (){var switch__19726__auto__ = ((function (c__19791__auto___28289,out){
return (function (state_28261){
var state_val_28262 = (state_28261[(1)]);
if((state_val_28262 === (7))){
var inst_28241 = (state_28261[(7)]);
var inst_28240 = (state_28261[(8)]);
var inst_28240__$1 = (state_28261[(2)]);
var inst_28241__$1 = cljs.core.nth.call(null,inst_28240__$1,(0),null);
var inst_28242 = cljs.core.nth.call(null,inst_28240__$1,(1),null);
var inst_28243 = (inst_28241__$1 == null);
var state_28261__$1 = (function (){var statearr_28263 = state_28261;
(statearr_28263[(7)] = inst_28241__$1);

(statearr_28263[(8)] = inst_28240__$1);

(statearr_28263[(9)] = inst_28242);

return statearr_28263;
})();
if(cljs.core.truth_(inst_28243)){
var statearr_28264_28290 = state_28261__$1;
(statearr_28264_28290[(1)] = (8));

} else {
var statearr_28265_28291 = state_28261__$1;
(statearr_28265_28291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (1))){
var inst_28232 = cljs.core.vec.call(null,chs);
var inst_28233 = inst_28232;
var state_28261__$1 = (function (){var statearr_28266 = state_28261;
(statearr_28266[(10)] = inst_28233);

return statearr_28266;
})();
var statearr_28267_28292 = state_28261__$1;
(statearr_28267_28292[(2)] = null);

(statearr_28267_28292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (4))){
var inst_28233 = (state_28261[(10)]);
var state_28261__$1 = state_28261;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28261__$1,(7),inst_28233);
} else {
if((state_val_28262 === (6))){
var inst_28257 = (state_28261[(2)]);
var state_28261__$1 = state_28261;
var statearr_28268_28293 = state_28261__$1;
(statearr_28268_28293[(2)] = inst_28257);

(statearr_28268_28293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (3))){
var inst_28259 = (state_28261[(2)]);
var state_28261__$1 = state_28261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28261__$1,inst_28259);
} else {
if((state_val_28262 === (2))){
var inst_28233 = (state_28261[(10)]);
var inst_28235 = cljs.core.count.call(null,inst_28233);
var inst_28236 = (inst_28235 > (0));
var state_28261__$1 = state_28261;
if(cljs.core.truth_(inst_28236)){
var statearr_28270_28294 = state_28261__$1;
(statearr_28270_28294[(1)] = (4));

} else {
var statearr_28271_28295 = state_28261__$1;
(statearr_28271_28295[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (11))){
var inst_28233 = (state_28261[(10)]);
var inst_28250 = (state_28261[(2)]);
var tmp28269 = inst_28233;
var inst_28233__$1 = tmp28269;
var state_28261__$1 = (function (){var statearr_28272 = state_28261;
(statearr_28272[(11)] = inst_28250);

(statearr_28272[(10)] = inst_28233__$1);

return statearr_28272;
})();
var statearr_28273_28296 = state_28261__$1;
(statearr_28273_28296[(2)] = null);

(statearr_28273_28296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (9))){
var inst_28241 = (state_28261[(7)]);
var state_28261__$1 = state_28261;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28261__$1,(11),out,inst_28241);
} else {
if((state_val_28262 === (5))){
var inst_28255 = cljs.core.async.close_BANG_.call(null,out);
var state_28261__$1 = state_28261;
var statearr_28274_28297 = state_28261__$1;
(statearr_28274_28297[(2)] = inst_28255);

(statearr_28274_28297[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (10))){
var inst_28253 = (state_28261[(2)]);
var state_28261__$1 = state_28261;
var statearr_28275_28298 = state_28261__$1;
(statearr_28275_28298[(2)] = inst_28253);

(statearr_28275_28298[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (8))){
var inst_28241 = (state_28261[(7)]);
var inst_28240 = (state_28261[(8)]);
var inst_28242 = (state_28261[(9)]);
var inst_28233 = (state_28261[(10)]);
var inst_28245 = (function (){var cs = inst_28233;
var vec__28238 = inst_28240;
var v = inst_28241;
var c = inst_28242;
return ((function (cs,vec__28238,v,c,inst_28241,inst_28240,inst_28242,inst_28233,state_val_28262,c__19791__auto___28289,out){
return (function (p1__28228_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28228_SHARP_);
});
;})(cs,vec__28238,v,c,inst_28241,inst_28240,inst_28242,inst_28233,state_val_28262,c__19791__auto___28289,out))
})();
var inst_28246 = cljs.core.filterv.call(null,inst_28245,inst_28233);
var inst_28233__$1 = inst_28246;
var state_28261__$1 = (function (){var statearr_28276 = state_28261;
(statearr_28276[(10)] = inst_28233__$1);

return statearr_28276;
})();
var statearr_28277_28299 = state_28261__$1;
(statearr_28277_28299[(2)] = null);

(statearr_28277_28299[(1)] = (2));


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
});})(c__19791__auto___28289,out))
;
return ((function (switch__19726__auto__,c__19791__auto___28289,out){
return (function() {
var cljs$core$async$state_machine__19727__auto__ = null;
var cljs$core$async$state_machine__19727__auto____0 = (function (){
var statearr_28281 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28281[(0)] = cljs$core$async$state_machine__19727__auto__);

(statearr_28281[(1)] = (1));

return statearr_28281;
});
var cljs$core$async$state_machine__19727__auto____1 = (function (state_28261){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_28261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e28282){if((e28282 instanceof Object)){
var ex__19730__auto__ = e28282;
var statearr_28283_28300 = state_28261;
(statearr_28283_28300[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28301 = state_28261;
state_28261 = G__28301;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$state_machine__19727__auto__ = function(state_28261){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19727__auto____1.call(this,state_28261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19727__auto____0;
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19727__auto____1;
return cljs$core$async$state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19791__auto___28289,out))
})();
var state__19793__auto__ = (function (){var statearr_28284 = f__19792__auto__.call(null);
(statearr_28284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19791__auto___28289);

return statearr_28284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19793__auto__);
});})(c__19791__auto___28289,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args28302 = [];
var len__17548__auto___28351 = arguments.length;
var i__17549__auto___28352 = (0);
while(true){
if((i__17549__auto___28352 < len__17548__auto___28351)){
args28302.push((arguments[i__17549__auto___28352]));

var G__28353 = (i__17549__auto___28352 + (1));
i__17549__auto___28352 = G__28353;
continue;
} else {
}
break;
}

var G__28304 = args28302.length;
switch (G__28304) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28302.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19791__auto___28355 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19791__auto___28355,out){
return (function (){
var f__19792__auto__ = (function (){var switch__19726__auto__ = ((function (c__19791__auto___28355,out){
return (function (state_28328){
var state_val_28329 = (state_28328[(1)]);
if((state_val_28329 === (7))){
var inst_28310 = (state_28328[(7)]);
var inst_28310__$1 = (state_28328[(2)]);
var inst_28311 = (inst_28310__$1 == null);
var inst_28312 = cljs.core.not.call(null,inst_28311);
var state_28328__$1 = (function (){var statearr_28330 = state_28328;
(statearr_28330[(7)] = inst_28310__$1);

return statearr_28330;
})();
if(inst_28312){
var statearr_28331_28356 = state_28328__$1;
(statearr_28331_28356[(1)] = (8));

} else {
var statearr_28332_28357 = state_28328__$1;
(statearr_28332_28357[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (1))){
var inst_28305 = (0);
var state_28328__$1 = (function (){var statearr_28333 = state_28328;
(statearr_28333[(8)] = inst_28305);

return statearr_28333;
})();
var statearr_28334_28358 = state_28328__$1;
(statearr_28334_28358[(2)] = null);

(statearr_28334_28358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (4))){
var state_28328__$1 = state_28328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28328__$1,(7),ch);
} else {
if((state_val_28329 === (6))){
var inst_28323 = (state_28328[(2)]);
var state_28328__$1 = state_28328;
var statearr_28335_28359 = state_28328__$1;
(statearr_28335_28359[(2)] = inst_28323);

(statearr_28335_28359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (3))){
var inst_28325 = (state_28328[(2)]);
var inst_28326 = cljs.core.async.close_BANG_.call(null,out);
var state_28328__$1 = (function (){var statearr_28336 = state_28328;
(statearr_28336[(9)] = inst_28325);

return statearr_28336;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28328__$1,inst_28326);
} else {
if((state_val_28329 === (2))){
var inst_28305 = (state_28328[(8)]);
var inst_28307 = (inst_28305 < n);
var state_28328__$1 = state_28328;
if(cljs.core.truth_(inst_28307)){
var statearr_28337_28360 = state_28328__$1;
(statearr_28337_28360[(1)] = (4));

} else {
var statearr_28338_28361 = state_28328__$1;
(statearr_28338_28361[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (11))){
var inst_28305 = (state_28328[(8)]);
var inst_28315 = (state_28328[(2)]);
var inst_28316 = (inst_28305 + (1));
var inst_28305__$1 = inst_28316;
var state_28328__$1 = (function (){var statearr_28339 = state_28328;
(statearr_28339[(10)] = inst_28315);

(statearr_28339[(8)] = inst_28305__$1);

return statearr_28339;
})();
var statearr_28340_28362 = state_28328__$1;
(statearr_28340_28362[(2)] = null);

(statearr_28340_28362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (9))){
var state_28328__$1 = state_28328;
var statearr_28341_28363 = state_28328__$1;
(statearr_28341_28363[(2)] = null);

(statearr_28341_28363[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (5))){
var state_28328__$1 = state_28328;
var statearr_28342_28364 = state_28328__$1;
(statearr_28342_28364[(2)] = null);

(statearr_28342_28364[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (10))){
var inst_28320 = (state_28328[(2)]);
var state_28328__$1 = state_28328;
var statearr_28343_28365 = state_28328__$1;
(statearr_28343_28365[(2)] = inst_28320);

(statearr_28343_28365[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (8))){
var inst_28310 = (state_28328[(7)]);
var state_28328__$1 = state_28328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28328__$1,(11),out,inst_28310);
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
});})(c__19791__auto___28355,out))
;
return ((function (switch__19726__auto__,c__19791__auto___28355,out){
return (function() {
var cljs$core$async$state_machine__19727__auto__ = null;
var cljs$core$async$state_machine__19727__auto____0 = (function (){
var statearr_28347 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28347[(0)] = cljs$core$async$state_machine__19727__auto__);

(statearr_28347[(1)] = (1));

return statearr_28347;
});
var cljs$core$async$state_machine__19727__auto____1 = (function (state_28328){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_28328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e28348){if((e28348 instanceof Object)){
var ex__19730__auto__ = e28348;
var statearr_28349_28366 = state_28328;
(statearr_28349_28366[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28367 = state_28328;
state_28328 = G__28367;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$state_machine__19727__auto__ = function(state_28328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19727__auto____1.call(this,state_28328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19727__auto____0;
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19727__auto____1;
return cljs$core$async$state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19791__auto___28355,out))
})();
var state__19793__auto__ = (function (){var statearr_28350 = f__19792__auto__.call(null);
(statearr_28350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19791__auto___28355);

return statearr_28350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19793__auto__);
});})(c__19791__auto___28355,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28375 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28375 = (function (map_LT_,f,ch,meta28376){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28376 = meta28376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28377,meta28376__$1){
var self__ = this;
var _28377__$1 = this;
return (new cljs.core.async.t_cljs$core$async28375(self__.map_LT_,self__.f,self__.ch,meta28376__$1));
});

cljs.core.async.t_cljs$core$async28375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28377){
var self__ = this;
var _28377__$1 = this;
return self__.meta28376;
});

cljs.core.async.t_cljs$core$async28375.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28375.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28375.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28375.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28375.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28378 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28378 = (function (map_LT_,f,ch,meta28376,_,fn1,meta28379){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28376 = meta28376;
this._ = _;
this.fn1 = fn1;
this.meta28379 = meta28379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28380,meta28379__$1){
var self__ = this;
var _28380__$1 = this;
return (new cljs.core.async.t_cljs$core$async28378(self__.map_LT_,self__.f,self__.ch,self__.meta28376,self__._,self__.fn1,meta28379__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28378.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28380){
var self__ = this;
var _28380__$1 = this;
return self__.meta28379;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28378.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28378.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28378.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28368_SHARP_){
return f1.call(null,(((p1__28368_SHARP_ == null))?null:self__.f.call(null,p1__28368_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28378.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28376","meta28376",-1670558404,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28375","cljs.core.async/t_cljs$core$async28375",-1121172820,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28379","meta28379",1212382581,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28378.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28378";

cljs.core.async.t_cljs$core$async28378.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"cljs.core.async/t_cljs$core$async28378");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async28378 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28378(map_LT___$1,f__$1,ch__$1,meta28376__$1,___$2,fn1__$1,meta28379){
return (new cljs.core.async.t_cljs$core$async28378(map_LT___$1,f__$1,ch__$1,meta28376__$1,___$2,fn1__$1,meta28379));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28378(self__.map_LT_,self__.f,self__.ch,self__.meta28376,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16478__auto__ = ret;
if(cljs.core.truth_(and__16478__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16478__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28375.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28375.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28375.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28376","meta28376",-1670558404,null)], null);
});

cljs.core.async.t_cljs$core$async28375.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28375.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28375";

cljs.core.async.t_cljs$core$async28375.cljs$lang$ctorPrWriter = (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"cljs.core.async/t_cljs$core$async28375");
});

cljs.core.async.__GT_t_cljs$core$async28375 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28375(map_LT___$1,f__$1,ch__$1,meta28376){
return (new cljs.core.async.t_cljs$core$async28375(map_LT___$1,f__$1,ch__$1,meta28376));
});

}

return (new cljs.core.async.t_cljs$core$async28375(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28384 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28384 = (function (map_GT_,f,ch,meta28385){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta28385 = meta28385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28386,meta28385__$1){
var self__ = this;
var _28386__$1 = this;
return (new cljs.core.async.t_cljs$core$async28384(self__.map_GT_,self__.f,self__.ch,meta28385__$1));
});

cljs.core.async.t_cljs$core$async28384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28386){
var self__ = this;
var _28386__$1 = this;
return self__.meta28385;
});

cljs.core.async.t_cljs$core$async28384.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28384.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28384.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28384.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28384.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28384.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28384.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28385","meta28385",-67056209,null)], null);
});

cljs.core.async.t_cljs$core$async28384.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28384";

cljs.core.async.t_cljs$core$async28384.cljs$lang$ctorPrWriter = (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"cljs.core.async/t_cljs$core$async28384");
});

cljs.core.async.__GT_t_cljs$core$async28384 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28384(map_GT___$1,f__$1,ch__$1,meta28385){
return (new cljs.core.async.t_cljs$core$async28384(map_GT___$1,f__$1,ch__$1,meta28385));
});

}

return (new cljs.core.async.t_cljs$core$async28384(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28390 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28390 = (function (filter_GT_,p,ch,meta28391){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta28391 = meta28391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28392,meta28391__$1){
var self__ = this;
var _28392__$1 = this;
return (new cljs.core.async.t_cljs$core$async28390(self__.filter_GT_,self__.p,self__.ch,meta28391__$1));
});

cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28392){
var self__ = this;
var _28392__$1 = this;
return self__.meta28391;
});

cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28391","meta28391",-1266027561,null)], null);
});

cljs.core.async.t_cljs$core$async28390.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28390";

cljs.core.async.t_cljs$core$async28390.cljs$lang$ctorPrWriter = (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"cljs.core.async/t_cljs$core$async28390");
});

cljs.core.async.__GT_t_cljs$core$async28390 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28390(filter_GT___$1,p__$1,ch__$1,meta28391){
return (new cljs.core.async.t_cljs$core$async28390(filter_GT___$1,p__$1,ch__$1,meta28391));
});

}

return (new cljs.core.async.t_cljs$core$async28390(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args28393 = [];
var len__17548__auto___28437 = arguments.length;
var i__17549__auto___28438 = (0);
while(true){
if((i__17549__auto___28438 < len__17548__auto___28437)){
args28393.push((arguments[i__17549__auto___28438]));

var G__28439 = (i__17549__auto___28438 + (1));
i__17549__auto___28438 = G__28439;
continue;
} else {
}
break;
}

var G__28395 = args28393.length;
switch (G__28395) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28393.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19791__auto___28441 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19791__auto___28441,out){
return (function (){
var f__19792__auto__ = (function (){var switch__19726__auto__ = ((function (c__19791__auto___28441,out){
return (function (state_28416){
var state_val_28417 = (state_28416[(1)]);
if((state_val_28417 === (7))){
var inst_28412 = (state_28416[(2)]);
var state_28416__$1 = state_28416;
var statearr_28418_28442 = state_28416__$1;
(statearr_28418_28442[(2)] = inst_28412);

(statearr_28418_28442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28417 === (1))){
var state_28416__$1 = state_28416;
var statearr_28419_28443 = state_28416__$1;
(statearr_28419_28443[(2)] = null);

(statearr_28419_28443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28417 === (4))){
var inst_28398 = (state_28416[(7)]);
var inst_28398__$1 = (state_28416[(2)]);
var inst_28399 = (inst_28398__$1 == null);
var state_28416__$1 = (function (){var statearr_28420 = state_28416;
(statearr_28420[(7)] = inst_28398__$1);

return statearr_28420;
})();
if(cljs.core.truth_(inst_28399)){
var statearr_28421_28444 = state_28416__$1;
(statearr_28421_28444[(1)] = (5));

} else {
var statearr_28422_28445 = state_28416__$1;
(statearr_28422_28445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28417 === (6))){
var inst_28398 = (state_28416[(7)]);
var inst_28403 = p.call(null,inst_28398);
var state_28416__$1 = state_28416;
if(cljs.core.truth_(inst_28403)){
var statearr_28423_28446 = state_28416__$1;
(statearr_28423_28446[(1)] = (8));

} else {
var statearr_28424_28447 = state_28416__$1;
(statearr_28424_28447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28417 === (3))){
var inst_28414 = (state_28416[(2)]);
var state_28416__$1 = state_28416;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28416__$1,inst_28414);
} else {
if((state_val_28417 === (2))){
var state_28416__$1 = state_28416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28416__$1,(4),ch);
} else {
if((state_val_28417 === (11))){
var inst_28406 = (state_28416[(2)]);
var state_28416__$1 = state_28416;
var statearr_28425_28448 = state_28416__$1;
(statearr_28425_28448[(2)] = inst_28406);

(statearr_28425_28448[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28417 === (9))){
var state_28416__$1 = state_28416;
var statearr_28426_28449 = state_28416__$1;
(statearr_28426_28449[(2)] = null);

(statearr_28426_28449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28417 === (5))){
var inst_28401 = cljs.core.async.close_BANG_.call(null,out);
var state_28416__$1 = state_28416;
var statearr_28427_28450 = state_28416__$1;
(statearr_28427_28450[(2)] = inst_28401);

(statearr_28427_28450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28417 === (10))){
var inst_28409 = (state_28416[(2)]);
var state_28416__$1 = (function (){var statearr_28428 = state_28416;
(statearr_28428[(8)] = inst_28409);

return statearr_28428;
})();
var statearr_28429_28451 = state_28416__$1;
(statearr_28429_28451[(2)] = null);

(statearr_28429_28451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28417 === (8))){
var inst_28398 = (state_28416[(7)]);
var state_28416__$1 = state_28416;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28416__$1,(11),out,inst_28398);
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
});})(c__19791__auto___28441,out))
;
return ((function (switch__19726__auto__,c__19791__auto___28441,out){
return (function() {
var cljs$core$async$state_machine__19727__auto__ = null;
var cljs$core$async$state_machine__19727__auto____0 = (function (){
var statearr_28433 = [null,null,null,null,null,null,null,null,null];
(statearr_28433[(0)] = cljs$core$async$state_machine__19727__auto__);

(statearr_28433[(1)] = (1));

return statearr_28433;
});
var cljs$core$async$state_machine__19727__auto____1 = (function (state_28416){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_28416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e28434){if((e28434 instanceof Object)){
var ex__19730__auto__ = e28434;
var statearr_28435_28452 = state_28416;
(statearr_28435_28452[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28453 = state_28416;
state_28416 = G__28453;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$state_machine__19727__auto__ = function(state_28416){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19727__auto____1.call(this,state_28416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19727__auto____0;
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19727__auto____1;
return cljs$core$async$state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19791__auto___28441,out))
})();
var state__19793__auto__ = (function (){var statearr_28436 = f__19792__auto__.call(null);
(statearr_28436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19791__auto___28441);

return statearr_28436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19793__auto__);
});})(c__19791__auto___28441,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args28454 = [];
var len__17548__auto___28457 = arguments.length;
var i__17549__auto___28458 = (0);
while(true){
if((i__17549__auto___28458 < len__17548__auto___28457)){
args28454.push((arguments[i__17549__auto___28458]));

var G__28459 = (i__17549__auto___28458 + (1));
i__17549__auto___28458 = G__28459;
continue;
} else {
}
break;
}

var G__28456 = args28454.length;
switch (G__28456) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28454.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19791__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19791__auto__){
return (function (){
var f__19792__auto__ = (function (){var switch__19726__auto__ = ((function (c__19791__auto__){
return (function (state_28626){
var state_val_28627 = (state_28626[(1)]);
if((state_val_28627 === (7))){
var inst_28622 = (state_28626[(2)]);
var state_28626__$1 = state_28626;
var statearr_28628_28669 = state_28626__$1;
(statearr_28628_28669[(2)] = inst_28622);

(statearr_28628_28669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (20))){
var inst_28592 = (state_28626[(7)]);
var inst_28603 = (state_28626[(2)]);
var inst_28604 = cljs.core.next.call(null,inst_28592);
var inst_28578 = inst_28604;
var inst_28579 = null;
var inst_28580 = (0);
var inst_28581 = (0);
var state_28626__$1 = (function (){var statearr_28629 = state_28626;
(statearr_28629[(8)] = inst_28603);

(statearr_28629[(9)] = inst_28578);

(statearr_28629[(10)] = inst_28579);

(statearr_28629[(11)] = inst_28580);

(statearr_28629[(12)] = inst_28581);

return statearr_28629;
})();
var statearr_28630_28670 = state_28626__$1;
(statearr_28630_28670[(2)] = null);

(statearr_28630_28670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (1))){
var state_28626__$1 = state_28626;
var statearr_28631_28671 = state_28626__$1;
(statearr_28631_28671[(2)] = null);

(statearr_28631_28671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (4))){
var inst_28567 = (state_28626[(13)]);
var inst_28567__$1 = (state_28626[(2)]);
var inst_28568 = (inst_28567__$1 == null);
var state_28626__$1 = (function (){var statearr_28632 = state_28626;
(statearr_28632[(13)] = inst_28567__$1);

return statearr_28632;
})();
if(cljs.core.truth_(inst_28568)){
var statearr_28633_28672 = state_28626__$1;
(statearr_28633_28672[(1)] = (5));

} else {
var statearr_28634_28673 = state_28626__$1;
(statearr_28634_28673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (15))){
var state_28626__$1 = state_28626;
var statearr_28638_28674 = state_28626__$1;
(statearr_28638_28674[(2)] = null);

(statearr_28638_28674[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (21))){
var state_28626__$1 = state_28626;
var statearr_28639_28675 = state_28626__$1;
(statearr_28639_28675[(2)] = null);

(statearr_28639_28675[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (13))){
var inst_28578 = (state_28626[(9)]);
var inst_28579 = (state_28626[(10)]);
var inst_28580 = (state_28626[(11)]);
var inst_28581 = (state_28626[(12)]);
var inst_28588 = (state_28626[(2)]);
var inst_28589 = (inst_28581 + (1));
var tmp28635 = inst_28578;
var tmp28636 = inst_28579;
var tmp28637 = inst_28580;
var inst_28578__$1 = tmp28635;
var inst_28579__$1 = tmp28636;
var inst_28580__$1 = tmp28637;
var inst_28581__$1 = inst_28589;
var state_28626__$1 = (function (){var statearr_28640 = state_28626;
(statearr_28640[(14)] = inst_28588);

(statearr_28640[(9)] = inst_28578__$1);

(statearr_28640[(10)] = inst_28579__$1);

(statearr_28640[(11)] = inst_28580__$1);

(statearr_28640[(12)] = inst_28581__$1);

return statearr_28640;
})();
var statearr_28641_28676 = state_28626__$1;
(statearr_28641_28676[(2)] = null);

(statearr_28641_28676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (22))){
var state_28626__$1 = state_28626;
var statearr_28642_28677 = state_28626__$1;
(statearr_28642_28677[(2)] = null);

(statearr_28642_28677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (6))){
var inst_28567 = (state_28626[(13)]);
var inst_28576 = f.call(null,inst_28567);
var inst_28577 = cljs.core.seq.call(null,inst_28576);
var inst_28578 = inst_28577;
var inst_28579 = null;
var inst_28580 = (0);
var inst_28581 = (0);
var state_28626__$1 = (function (){var statearr_28643 = state_28626;
(statearr_28643[(9)] = inst_28578);

(statearr_28643[(10)] = inst_28579);

(statearr_28643[(11)] = inst_28580);

(statearr_28643[(12)] = inst_28581);

return statearr_28643;
})();
var statearr_28644_28678 = state_28626__$1;
(statearr_28644_28678[(2)] = null);

(statearr_28644_28678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (17))){
var inst_28592 = (state_28626[(7)]);
var inst_28596 = cljs.core.chunk_first.call(null,inst_28592);
var inst_28597 = cljs.core.chunk_rest.call(null,inst_28592);
var inst_28598 = cljs.core.count.call(null,inst_28596);
var inst_28578 = inst_28597;
var inst_28579 = inst_28596;
var inst_28580 = inst_28598;
var inst_28581 = (0);
var state_28626__$1 = (function (){var statearr_28645 = state_28626;
(statearr_28645[(9)] = inst_28578);

(statearr_28645[(10)] = inst_28579);

(statearr_28645[(11)] = inst_28580);

(statearr_28645[(12)] = inst_28581);

return statearr_28645;
})();
var statearr_28646_28679 = state_28626__$1;
(statearr_28646_28679[(2)] = null);

(statearr_28646_28679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (3))){
var inst_28624 = (state_28626[(2)]);
var state_28626__$1 = state_28626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28626__$1,inst_28624);
} else {
if((state_val_28627 === (12))){
var inst_28612 = (state_28626[(2)]);
var state_28626__$1 = state_28626;
var statearr_28647_28680 = state_28626__$1;
(statearr_28647_28680[(2)] = inst_28612);

(statearr_28647_28680[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (2))){
var state_28626__$1 = state_28626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28626__$1,(4),in$);
} else {
if((state_val_28627 === (23))){
var inst_28620 = (state_28626[(2)]);
var state_28626__$1 = state_28626;
var statearr_28648_28681 = state_28626__$1;
(statearr_28648_28681[(2)] = inst_28620);

(statearr_28648_28681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (19))){
var inst_28607 = (state_28626[(2)]);
var state_28626__$1 = state_28626;
var statearr_28649_28682 = state_28626__$1;
(statearr_28649_28682[(2)] = inst_28607);

(statearr_28649_28682[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (11))){
var inst_28592 = (state_28626[(7)]);
var inst_28578 = (state_28626[(9)]);
var inst_28592__$1 = cljs.core.seq.call(null,inst_28578);
var state_28626__$1 = (function (){var statearr_28650 = state_28626;
(statearr_28650[(7)] = inst_28592__$1);

return statearr_28650;
})();
if(inst_28592__$1){
var statearr_28651_28683 = state_28626__$1;
(statearr_28651_28683[(1)] = (14));

} else {
var statearr_28652_28684 = state_28626__$1;
(statearr_28652_28684[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (9))){
var inst_28614 = (state_28626[(2)]);
var inst_28615 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28626__$1 = (function (){var statearr_28653 = state_28626;
(statearr_28653[(15)] = inst_28614);

return statearr_28653;
})();
if(cljs.core.truth_(inst_28615)){
var statearr_28654_28685 = state_28626__$1;
(statearr_28654_28685[(1)] = (21));

} else {
var statearr_28655_28686 = state_28626__$1;
(statearr_28655_28686[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (5))){
var inst_28570 = cljs.core.async.close_BANG_.call(null,out);
var state_28626__$1 = state_28626;
var statearr_28656_28687 = state_28626__$1;
(statearr_28656_28687[(2)] = inst_28570);

(statearr_28656_28687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (14))){
var inst_28592 = (state_28626[(7)]);
var inst_28594 = cljs.core.chunked_seq_QMARK_.call(null,inst_28592);
var state_28626__$1 = state_28626;
if(inst_28594){
var statearr_28657_28688 = state_28626__$1;
(statearr_28657_28688[(1)] = (17));

} else {
var statearr_28658_28689 = state_28626__$1;
(statearr_28658_28689[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (16))){
var inst_28610 = (state_28626[(2)]);
var state_28626__$1 = state_28626;
var statearr_28659_28690 = state_28626__$1;
(statearr_28659_28690[(2)] = inst_28610);

(statearr_28659_28690[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (10))){
var inst_28579 = (state_28626[(10)]);
var inst_28581 = (state_28626[(12)]);
var inst_28586 = cljs.core._nth.call(null,inst_28579,inst_28581);
var state_28626__$1 = state_28626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28626__$1,(13),out,inst_28586);
} else {
if((state_val_28627 === (18))){
var inst_28592 = (state_28626[(7)]);
var inst_28601 = cljs.core.first.call(null,inst_28592);
var state_28626__$1 = state_28626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28626__$1,(20),out,inst_28601);
} else {
if((state_val_28627 === (8))){
var inst_28580 = (state_28626[(11)]);
var inst_28581 = (state_28626[(12)]);
var inst_28583 = (inst_28581 < inst_28580);
var inst_28584 = inst_28583;
var state_28626__$1 = state_28626;
if(cljs.core.truth_(inst_28584)){
var statearr_28660_28691 = state_28626__$1;
(statearr_28660_28691[(1)] = (10));

} else {
var statearr_28661_28692 = state_28626__$1;
(statearr_28661_28692[(1)] = (11));

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
});})(c__19791__auto__))
;
return ((function (switch__19726__auto__,c__19791__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19727__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19727__auto____0 = (function (){
var statearr_28665 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28665[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19727__auto__);

(statearr_28665[(1)] = (1));

return statearr_28665;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19727__auto____1 = (function (state_28626){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_28626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e28666){if((e28666 instanceof Object)){
var ex__19730__auto__ = e28666;
var statearr_28667_28693 = state_28626;
(statearr_28667_28693[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28694 = state_28626;
state_28626 = G__28694;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19727__auto__ = function(state_28626){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19727__auto____1.call(this,state_28626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19727__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19727__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19791__auto__))
})();
var state__19793__auto__ = (function (){var statearr_28668 = f__19792__auto__.call(null);
(statearr_28668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19791__auto__);

return statearr_28668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19793__auto__);
});})(c__19791__auto__))
);

return c__19791__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args28695 = [];
var len__17548__auto___28698 = arguments.length;
var i__17549__auto___28699 = (0);
while(true){
if((i__17549__auto___28699 < len__17548__auto___28698)){
args28695.push((arguments[i__17549__auto___28699]));

var G__28700 = (i__17549__auto___28699 + (1));
i__17549__auto___28699 = G__28700;
continue;
} else {
}
break;
}

var G__28697 = args28695.length;
switch (G__28697) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28695.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args28702 = [];
var len__17548__auto___28705 = arguments.length;
var i__17549__auto___28706 = (0);
while(true){
if((i__17549__auto___28706 < len__17548__auto___28705)){
args28702.push((arguments[i__17549__auto___28706]));

var G__28707 = (i__17549__auto___28706 + (1));
i__17549__auto___28706 = G__28707;
continue;
} else {
}
break;
}

var G__28704 = args28702.length;
switch (G__28704) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28702.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args28709 = [];
var len__17548__auto___28760 = arguments.length;
var i__17549__auto___28761 = (0);
while(true){
if((i__17549__auto___28761 < len__17548__auto___28760)){
args28709.push((arguments[i__17549__auto___28761]));

var G__28762 = (i__17549__auto___28761 + (1));
i__17549__auto___28761 = G__28762;
continue;
} else {
}
break;
}

var G__28711 = args28709.length;
switch (G__28711) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28709.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19791__auto___28764 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19791__auto___28764,out){
return (function (){
var f__19792__auto__ = (function (){var switch__19726__auto__ = ((function (c__19791__auto___28764,out){
return (function (state_28735){
var state_val_28736 = (state_28735[(1)]);
if((state_val_28736 === (7))){
var inst_28730 = (state_28735[(2)]);
var state_28735__$1 = state_28735;
var statearr_28737_28765 = state_28735__$1;
(statearr_28737_28765[(2)] = inst_28730);

(statearr_28737_28765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28736 === (1))){
var inst_28712 = null;
var state_28735__$1 = (function (){var statearr_28738 = state_28735;
(statearr_28738[(7)] = inst_28712);

return statearr_28738;
})();
var statearr_28739_28766 = state_28735__$1;
(statearr_28739_28766[(2)] = null);

(statearr_28739_28766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28736 === (4))){
var inst_28715 = (state_28735[(8)]);
var inst_28715__$1 = (state_28735[(2)]);
var inst_28716 = (inst_28715__$1 == null);
var inst_28717 = cljs.core.not.call(null,inst_28716);
var state_28735__$1 = (function (){var statearr_28740 = state_28735;
(statearr_28740[(8)] = inst_28715__$1);

return statearr_28740;
})();
if(inst_28717){
var statearr_28741_28767 = state_28735__$1;
(statearr_28741_28767[(1)] = (5));

} else {
var statearr_28742_28768 = state_28735__$1;
(statearr_28742_28768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28736 === (6))){
var state_28735__$1 = state_28735;
var statearr_28743_28769 = state_28735__$1;
(statearr_28743_28769[(2)] = null);

(statearr_28743_28769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28736 === (3))){
var inst_28732 = (state_28735[(2)]);
var inst_28733 = cljs.core.async.close_BANG_.call(null,out);
var state_28735__$1 = (function (){var statearr_28744 = state_28735;
(statearr_28744[(9)] = inst_28732);

return statearr_28744;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28735__$1,inst_28733);
} else {
if((state_val_28736 === (2))){
var state_28735__$1 = state_28735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28735__$1,(4),ch);
} else {
if((state_val_28736 === (11))){
var inst_28715 = (state_28735[(8)]);
var inst_28724 = (state_28735[(2)]);
var inst_28712 = inst_28715;
var state_28735__$1 = (function (){var statearr_28745 = state_28735;
(statearr_28745[(10)] = inst_28724);

(statearr_28745[(7)] = inst_28712);

return statearr_28745;
})();
var statearr_28746_28770 = state_28735__$1;
(statearr_28746_28770[(2)] = null);

(statearr_28746_28770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28736 === (9))){
var inst_28715 = (state_28735[(8)]);
var state_28735__$1 = state_28735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28735__$1,(11),out,inst_28715);
} else {
if((state_val_28736 === (5))){
var inst_28715 = (state_28735[(8)]);
var inst_28712 = (state_28735[(7)]);
var inst_28719 = cljs.core._EQ_.call(null,inst_28715,inst_28712);
var state_28735__$1 = state_28735;
if(inst_28719){
var statearr_28748_28771 = state_28735__$1;
(statearr_28748_28771[(1)] = (8));

} else {
var statearr_28749_28772 = state_28735__$1;
(statearr_28749_28772[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28736 === (10))){
var inst_28727 = (state_28735[(2)]);
var state_28735__$1 = state_28735;
var statearr_28750_28773 = state_28735__$1;
(statearr_28750_28773[(2)] = inst_28727);

(statearr_28750_28773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28736 === (8))){
var inst_28712 = (state_28735[(7)]);
var tmp28747 = inst_28712;
var inst_28712__$1 = tmp28747;
var state_28735__$1 = (function (){var statearr_28751 = state_28735;
(statearr_28751[(7)] = inst_28712__$1);

return statearr_28751;
})();
var statearr_28752_28774 = state_28735__$1;
(statearr_28752_28774[(2)] = null);

(statearr_28752_28774[(1)] = (2));


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
});})(c__19791__auto___28764,out))
;
return ((function (switch__19726__auto__,c__19791__auto___28764,out){
return (function() {
var cljs$core$async$state_machine__19727__auto__ = null;
var cljs$core$async$state_machine__19727__auto____0 = (function (){
var statearr_28756 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28756[(0)] = cljs$core$async$state_machine__19727__auto__);

(statearr_28756[(1)] = (1));

return statearr_28756;
});
var cljs$core$async$state_machine__19727__auto____1 = (function (state_28735){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_28735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e28757){if((e28757 instanceof Object)){
var ex__19730__auto__ = e28757;
var statearr_28758_28775 = state_28735;
(statearr_28758_28775[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28776 = state_28735;
state_28735 = G__28776;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$state_machine__19727__auto__ = function(state_28735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19727__auto____1.call(this,state_28735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19727__auto____0;
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19727__auto____1;
return cljs$core$async$state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19791__auto___28764,out))
})();
var state__19793__auto__ = (function (){var statearr_28759 = f__19792__auto__.call(null);
(statearr_28759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19791__auto___28764);

return statearr_28759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19793__auto__);
});})(c__19791__auto___28764,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args28777 = [];
var len__17548__auto___28847 = arguments.length;
var i__17549__auto___28848 = (0);
while(true){
if((i__17549__auto___28848 < len__17548__auto___28847)){
args28777.push((arguments[i__17549__auto___28848]));

var G__28849 = (i__17549__auto___28848 + (1));
i__17549__auto___28848 = G__28849;
continue;
} else {
}
break;
}

var G__28779 = args28777.length;
switch (G__28779) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28777.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19791__auto___28851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19791__auto___28851,out){
return (function (){
var f__19792__auto__ = (function (){var switch__19726__auto__ = ((function (c__19791__auto___28851,out){
return (function (state_28817){
var state_val_28818 = (state_28817[(1)]);
if((state_val_28818 === (7))){
var inst_28813 = (state_28817[(2)]);
var state_28817__$1 = state_28817;
var statearr_28819_28852 = state_28817__$1;
(statearr_28819_28852[(2)] = inst_28813);

(statearr_28819_28852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (1))){
var inst_28780 = (new Array(n));
var inst_28781 = inst_28780;
var inst_28782 = (0);
var state_28817__$1 = (function (){var statearr_28820 = state_28817;
(statearr_28820[(7)] = inst_28782);

(statearr_28820[(8)] = inst_28781);

return statearr_28820;
})();
var statearr_28821_28853 = state_28817__$1;
(statearr_28821_28853[(2)] = null);

(statearr_28821_28853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (4))){
var inst_28785 = (state_28817[(9)]);
var inst_28785__$1 = (state_28817[(2)]);
var inst_28786 = (inst_28785__$1 == null);
var inst_28787 = cljs.core.not.call(null,inst_28786);
var state_28817__$1 = (function (){var statearr_28822 = state_28817;
(statearr_28822[(9)] = inst_28785__$1);

return statearr_28822;
})();
if(inst_28787){
var statearr_28823_28854 = state_28817__$1;
(statearr_28823_28854[(1)] = (5));

} else {
var statearr_28824_28855 = state_28817__$1;
(statearr_28824_28855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (15))){
var inst_28807 = (state_28817[(2)]);
var state_28817__$1 = state_28817;
var statearr_28825_28856 = state_28817__$1;
(statearr_28825_28856[(2)] = inst_28807);

(statearr_28825_28856[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (13))){
var state_28817__$1 = state_28817;
var statearr_28826_28857 = state_28817__$1;
(statearr_28826_28857[(2)] = null);

(statearr_28826_28857[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (6))){
var inst_28782 = (state_28817[(7)]);
var inst_28803 = (inst_28782 > (0));
var state_28817__$1 = state_28817;
if(cljs.core.truth_(inst_28803)){
var statearr_28827_28858 = state_28817__$1;
(statearr_28827_28858[(1)] = (12));

} else {
var statearr_28828_28859 = state_28817__$1;
(statearr_28828_28859[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (3))){
var inst_28815 = (state_28817[(2)]);
var state_28817__$1 = state_28817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28817__$1,inst_28815);
} else {
if((state_val_28818 === (12))){
var inst_28781 = (state_28817[(8)]);
var inst_28805 = cljs.core.vec.call(null,inst_28781);
var state_28817__$1 = state_28817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28817__$1,(15),out,inst_28805);
} else {
if((state_val_28818 === (2))){
var state_28817__$1 = state_28817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28817__$1,(4),ch);
} else {
if((state_val_28818 === (11))){
var inst_28797 = (state_28817[(2)]);
var inst_28798 = (new Array(n));
var inst_28781 = inst_28798;
var inst_28782 = (0);
var state_28817__$1 = (function (){var statearr_28829 = state_28817;
(statearr_28829[(7)] = inst_28782);

(statearr_28829[(10)] = inst_28797);

(statearr_28829[(8)] = inst_28781);

return statearr_28829;
})();
var statearr_28830_28860 = state_28817__$1;
(statearr_28830_28860[(2)] = null);

(statearr_28830_28860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (9))){
var inst_28781 = (state_28817[(8)]);
var inst_28795 = cljs.core.vec.call(null,inst_28781);
var state_28817__$1 = state_28817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28817__$1,(11),out,inst_28795);
} else {
if((state_val_28818 === (5))){
var inst_28790 = (state_28817[(11)]);
var inst_28782 = (state_28817[(7)]);
var inst_28785 = (state_28817[(9)]);
var inst_28781 = (state_28817[(8)]);
var inst_28789 = (inst_28781[inst_28782] = inst_28785);
var inst_28790__$1 = (inst_28782 + (1));
var inst_28791 = (inst_28790__$1 < n);
var state_28817__$1 = (function (){var statearr_28831 = state_28817;
(statearr_28831[(11)] = inst_28790__$1);

(statearr_28831[(12)] = inst_28789);

return statearr_28831;
})();
if(cljs.core.truth_(inst_28791)){
var statearr_28832_28861 = state_28817__$1;
(statearr_28832_28861[(1)] = (8));

} else {
var statearr_28833_28862 = state_28817__$1;
(statearr_28833_28862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (14))){
var inst_28810 = (state_28817[(2)]);
var inst_28811 = cljs.core.async.close_BANG_.call(null,out);
var state_28817__$1 = (function (){var statearr_28835 = state_28817;
(statearr_28835[(13)] = inst_28810);

return statearr_28835;
})();
var statearr_28836_28863 = state_28817__$1;
(statearr_28836_28863[(2)] = inst_28811);

(statearr_28836_28863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (10))){
var inst_28801 = (state_28817[(2)]);
var state_28817__$1 = state_28817;
var statearr_28837_28864 = state_28817__$1;
(statearr_28837_28864[(2)] = inst_28801);

(statearr_28837_28864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (8))){
var inst_28790 = (state_28817[(11)]);
var inst_28781 = (state_28817[(8)]);
var tmp28834 = inst_28781;
var inst_28781__$1 = tmp28834;
var inst_28782 = inst_28790;
var state_28817__$1 = (function (){var statearr_28838 = state_28817;
(statearr_28838[(7)] = inst_28782);

(statearr_28838[(8)] = inst_28781__$1);

return statearr_28838;
})();
var statearr_28839_28865 = state_28817__$1;
(statearr_28839_28865[(2)] = null);

(statearr_28839_28865[(1)] = (2));


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
});})(c__19791__auto___28851,out))
;
return ((function (switch__19726__auto__,c__19791__auto___28851,out){
return (function() {
var cljs$core$async$state_machine__19727__auto__ = null;
var cljs$core$async$state_machine__19727__auto____0 = (function (){
var statearr_28843 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28843[(0)] = cljs$core$async$state_machine__19727__auto__);

(statearr_28843[(1)] = (1));

return statearr_28843;
});
var cljs$core$async$state_machine__19727__auto____1 = (function (state_28817){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_28817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e28844){if((e28844 instanceof Object)){
var ex__19730__auto__ = e28844;
var statearr_28845_28866 = state_28817;
(statearr_28845_28866[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28867 = state_28817;
state_28817 = G__28867;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$state_machine__19727__auto__ = function(state_28817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19727__auto____1.call(this,state_28817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19727__auto____0;
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19727__auto____1;
return cljs$core$async$state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19791__auto___28851,out))
})();
var state__19793__auto__ = (function (){var statearr_28846 = f__19792__auto__.call(null);
(statearr_28846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19791__auto___28851);

return statearr_28846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19793__auto__);
});})(c__19791__auto___28851,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args28868 = [];
var len__17548__auto___28942 = arguments.length;
var i__17549__auto___28943 = (0);
while(true){
if((i__17549__auto___28943 < len__17548__auto___28942)){
args28868.push((arguments[i__17549__auto___28943]));

var G__28944 = (i__17549__auto___28943 + (1));
i__17549__auto___28943 = G__28944;
continue;
} else {
}
break;
}

var G__28870 = args28868.length;
switch (G__28870) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28868.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19791__auto___28946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19791__auto___28946,out){
return (function (){
var f__19792__auto__ = (function (){var switch__19726__auto__ = ((function (c__19791__auto___28946,out){
return (function (state_28912){
var state_val_28913 = (state_28912[(1)]);
if((state_val_28913 === (7))){
var inst_28908 = (state_28912[(2)]);
var state_28912__$1 = state_28912;
var statearr_28914_28947 = state_28912__$1;
(statearr_28914_28947[(2)] = inst_28908);

(statearr_28914_28947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (1))){
var inst_28871 = [];
var inst_28872 = inst_28871;
var inst_28873 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28912__$1 = (function (){var statearr_28915 = state_28912;
(statearr_28915[(7)] = inst_28872);

(statearr_28915[(8)] = inst_28873);

return statearr_28915;
})();
var statearr_28916_28948 = state_28912__$1;
(statearr_28916_28948[(2)] = null);

(statearr_28916_28948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (4))){
var inst_28876 = (state_28912[(9)]);
var inst_28876__$1 = (state_28912[(2)]);
var inst_28877 = (inst_28876__$1 == null);
var inst_28878 = cljs.core.not.call(null,inst_28877);
var state_28912__$1 = (function (){var statearr_28917 = state_28912;
(statearr_28917[(9)] = inst_28876__$1);

return statearr_28917;
})();
if(inst_28878){
var statearr_28918_28949 = state_28912__$1;
(statearr_28918_28949[(1)] = (5));

} else {
var statearr_28919_28950 = state_28912__$1;
(statearr_28919_28950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (15))){
var inst_28902 = (state_28912[(2)]);
var state_28912__$1 = state_28912;
var statearr_28920_28951 = state_28912__$1;
(statearr_28920_28951[(2)] = inst_28902);

(statearr_28920_28951[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (13))){
var state_28912__$1 = state_28912;
var statearr_28921_28952 = state_28912__$1;
(statearr_28921_28952[(2)] = null);

(statearr_28921_28952[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (6))){
var inst_28872 = (state_28912[(7)]);
var inst_28897 = inst_28872.length;
var inst_28898 = (inst_28897 > (0));
var state_28912__$1 = state_28912;
if(cljs.core.truth_(inst_28898)){
var statearr_28922_28953 = state_28912__$1;
(statearr_28922_28953[(1)] = (12));

} else {
var statearr_28923_28954 = state_28912__$1;
(statearr_28923_28954[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (3))){
var inst_28910 = (state_28912[(2)]);
var state_28912__$1 = state_28912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28912__$1,inst_28910);
} else {
if((state_val_28913 === (12))){
var inst_28872 = (state_28912[(7)]);
var inst_28900 = cljs.core.vec.call(null,inst_28872);
var state_28912__$1 = state_28912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28912__$1,(15),out,inst_28900);
} else {
if((state_val_28913 === (2))){
var state_28912__$1 = state_28912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28912__$1,(4),ch);
} else {
if((state_val_28913 === (11))){
var inst_28876 = (state_28912[(9)]);
var inst_28880 = (state_28912[(10)]);
var inst_28890 = (state_28912[(2)]);
var inst_28891 = [];
var inst_28892 = inst_28891.push(inst_28876);
var inst_28872 = inst_28891;
var inst_28873 = inst_28880;
var state_28912__$1 = (function (){var statearr_28924 = state_28912;
(statearr_28924[(11)] = inst_28890);

(statearr_28924[(7)] = inst_28872);

(statearr_28924[(8)] = inst_28873);

(statearr_28924[(12)] = inst_28892);

return statearr_28924;
})();
var statearr_28925_28955 = state_28912__$1;
(statearr_28925_28955[(2)] = null);

(statearr_28925_28955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (9))){
var inst_28872 = (state_28912[(7)]);
var inst_28888 = cljs.core.vec.call(null,inst_28872);
var state_28912__$1 = state_28912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28912__$1,(11),out,inst_28888);
} else {
if((state_val_28913 === (5))){
var inst_28873 = (state_28912[(8)]);
var inst_28876 = (state_28912[(9)]);
var inst_28880 = (state_28912[(10)]);
var inst_28880__$1 = f.call(null,inst_28876);
var inst_28881 = cljs.core._EQ_.call(null,inst_28880__$1,inst_28873);
var inst_28882 = cljs.core.keyword_identical_QMARK_.call(null,inst_28873,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28883 = (inst_28881) || (inst_28882);
var state_28912__$1 = (function (){var statearr_28926 = state_28912;
(statearr_28926[(10)] = inst_28880__$1);

return statearr_28926;
})();
if(cljs.core.truth_(inst_28883)){
var statearr_28927_28956 = state_28912__$1;
(statearr_28927_28956[(1)] = (8));

} else {
var statearr_28928_28957 = state_28912__$1;
(statearr_28928_28957[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (14))){
var inst_28905 = (state_28912[(2)]);
var inst_28906 = cljs.core.async.close_BANG_.call(null,out);
var state_28912__$1 = (function (){var statearr_28930 = state_28912;
(statearr_28930[(13)] = inst_28905);

return statearr_28930;
})();
var statearr_28931_28958 = state_28912__$1;
(statearr_28931_28958[(2)] = inst_28906);

(statearr_28931_28958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (10))){
var inst_28895 = (state_28912[(2)]);
var state_28912__$1 = state_28912;
var statearr_28932_28959 = state_28912__$1;
(statearr_28932_28959[(2)] = inst_28895);

(statearr_28932_28959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (8))){
var inst_28872 = (state_28912[(7)]);
var inst_28876 = (state_28912[(9)]);
var inst_28880 = (state_28912[(10)]);
var inst_28885 = inst_28872.push(inst_28876);
var tmp28929 = inst_28872;
var inst_28872__$1 = tmp28929;
var inst_28873 = inst_28880;
var state_28912__$1 = (function (){var statearr_28933 = state_28912;
(statearr_28933[(14)] = inst_28885);

(statearr_28933[(7)] = inst_28872__$1);

(statearr_28933[(8)] = inst_28873);

return statearr_28933;
})();
var statearr_28934_28960 = state_28912__$1;
(statearr_28934_28960[(2)] = null);

(statearr_28934_28960[(1)] = (2));


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
});})(c__19791__auto___28946,out))
;
return ((function (switch__19726__auto__,c__19791__auto___28946,out){
return (function() {
var cljs$core$async$state_machine__19727__auto__ = null;
var cljs$core$async$state_machine__19727__auto____0 = (function (){
var statearr_28938 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28938[(0)] = cljs$core$async$state_machine__19727__auto__);

(statearr_28938[(1)] = (1));

return statearr_28938;
});
var cljs$core$async$state_machine__19727__auto____1 = (function (state_28912){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_28912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e28939){if((e28939 instanceof Object)){
var ex__19730__auto__ = e28939;
var statearr_28940_28961 = state_28912;
(statearr_28940_28961[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28962 = state_28912;
state_28912 = G__28962;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$state_machine__19727__auto__ = function(state_28912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19727__auto____1.call(this,state_28912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19727__auto____0;
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19727__auto____1;
return cljs$core$async$state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19791__auto___28946,out))
})();
var state__19793__auto__ = (function (){var statearr_28941 = f__19792__auto__.call(null);
(statearr_28941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19791__auto___28946);

return statearr_28941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19793__auto__);
});})(c__19791__auto___28946,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1441510903492