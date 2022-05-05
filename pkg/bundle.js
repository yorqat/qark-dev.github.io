(function () {
    'use strict';

    function wasm_bindgen_initialize( memory, table, alloc, free ) {
            var Module = {};
            Module.web_malloc = alloc;
            Module.web_free = free;
            Module.web_table = table;
            Object.defineProperty( Module, "HEAP8", {
                get: function() { return new Int8Array( memory.buffer ); }
            });
            Object.defineProperty( Module, "HEAP16", {
                get: function() { return new Int16Array( memory.buffer ); }
            });
            Object.defineProperty( Module, "HEAP32", {
                get: function() { return new Int32Array( memory.buffer ); }
            });
            Object.defineProperty( Module, "HEAPU8", {
                get: function() { return new Uint8Array( memory.buffer ); }
            });
            Object.defineProperty( Module, "HEAPU16", {
                get: function() { return new Uint16Array( memory.buffer ); }
            });
            Object.defineProperty( Module, "HEAPU32", {
                get: function() { return new Uint32Array( memory.buffer ); }
            });
            Object.defineProperty( Module, "HEAPF32", {
                get: function() { return new Float32Array( memory.buffer ); }
            });
            Object.defineProperty( Module, "HEAPF64", {
                get: function() { return new Float64Array( memory.buffer ); }
            });
            return Module;
        }

    function __cargo_web_snippet_db12d53e9596e9bc7860a8231ec85044629926e7(Module, $0) { var o = Module.STDWEB_PRIVATE.acquire_js_reference( $0 );return (o instanceof HTMLTextAreaElement); }

    function __cargo_web_snippet_2908dbb08792df5e699e324eec3e29fd6a57c2c9(Module, $0) { var o = Module.STDWEB_PRIVATE.acquire_js_reference( $0 );return (o instanceof HTMLInputElement); }

    function __cargo_web_snippet_80d6d56760c65e49b7be8b6b01c1ea861b046bf0(Module, $0) { Module.STDWEB_PRIVATE.decrement_refcount( $0 ); }

    function __cargo_web_snippet_9f22d4ca7bc938409787341b7db181f8dd41e6df(Module, $0) { Module.STDWEB_PRIVATE.increment_refcount( $0 ); }

    function __cargo_web_snippet_72fc447820458c720c68d0d8e078ede631edd723(Module, $0, $1, $2) { console.error( 'Panic location:', Module.STDWEB_PRIVATE.to_js_string( $0, $1 ) + ':' + $2 ); }

    function __cargo_web_snippet_97495987af1720d8a9a923fa4683a7b683e3acd6(Module, $0, $1) { console.error( 'Panic error message:', Module.STDWEB_PRIVATE.to_js_string( $0, $1 ) ); }

    function __cargo_web_snippet_dc2fd915bd92f9e9c6a3bd15174f1414eee3dbaf(Module) { console.error( 'Encountered a panic!' ); }

    function __cargo_web_snippet_1c30acb32a1994a07c75e804ae9855b43f191d63(Module) { Module.STDWEB_PRIVATE = {};   Module.STDWEB_PRIVATE.to_utf8 = function to_utf8( str, addr ) {     var HEAPU8 = Module.HEAPU8;     for( var i = 0; i < str.length; ++i ) {                                    var u = str.charCodeAt( i );          if( u >= 0xD800 && u <= 0xDFFF ) {             u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt( ++i ) & 0x3FF);         }          if( u <= 0x7F ) {             HEAPU8[ addr++ ] = u;         } else if( u <= 0x7FF ) {             HEAPU8[ addr++ ] = 0xC0 | (u >> 6);             HEAPU8[ addr++ ] = 0x80 | (u & 63);         } else if( u <= 0xFFFF ) {             HEAPU8[ addr++ ] = 0xE0 | (u >> 12);             HEAPU8[ addr++ ] = 0x80 | ((u >> 6) & 63);             HEAPU8[ addr++ ] = 0x80 | (u & 63);         } else if( u <= 0x1FFFFF ) {             HEAPU8[ addr++ ] = 0xF0 | (u >> 18);             HEAPU8[ addr++ ] = 0x80 | ((u >> 12) & 63);             HEAPU8[ addr++ ] = 0x80 | ((u >> 6) & 63);             HEAPU8[ addr++ ] = 0x80 | (u & 63);         } else if( u <= 0x3FFFFFF ) {             HEAPU8[ addr++ ] = 0xF8 | (u >> 24);             HEAPU8[ addr++ ] = 0x80 | ((u >> 18) & 63);             HEAPU8[ addr++ ] = 0x80 | ((u >> 12) & 63);             HEAPU8[ addr++ ] = 0x80 | ((u >> 6) & 63);             HEAPU8[ addr++ ] = 0x80 | (u & 63);         } else {             HEAPU8[ addr++ ] = 0xFC | (u >> 30);             HEAPU8[ addr++ ] = 0x80 | ((u >> 24) & 63);             HEAPU8[ addr++ ] = 0x80 | ((u >> 18) & 63);             HEAPU8[ addr++ ] = 0x80 | ((u >> 12) & 63);             HEAPU8[ addr++ ] = 0x80 | ((u >> 6) & 63);             HEAPU8[ addr++ ] = 0x80 | (u & 63);         }     } };  Module.STDWEB_PRIVATE.noop = function() {}; Module.STDWEB_PRIVATE.to_js = function to_js( address ) {     var kind = Module.HEAPU8[ address + 12 ];     if( kind === 0 ) {         return undefined;     } else if( kind === 1 ) {         return null;     } else if( kind === 2 ) {         return Module.HEAP32[ address / 4 ];     } else if( kind === 3 ) {         return Module.HEAPF64[ address / 8 ];     } else if( kind === 4 ) {         var pointer = Module.HEAPU32[ address / 4 ];         var length = Module.HEAPU32[ (address + 4) / 4 ];         return Module.STDWEB_PRIVATE.to_js_string( pointer, length );     } else if( kind === 5 ) {         return false;     } else if( kind === 6 ) {         return true;     } else if( kind === 7 ) {         var pointer = Module.STDWEB_PRIVATE.arena + Module.HEAPU32[ address / 4 ];         var length = Module.HEAPU32[ (address + 4) / 4 ];         var output = [];         for( var i = 0; i < length; ++i ) {             output.push( Module.STDWEB_PRIVATE.to_js( pointer + i * 16 ) );         }         return output;     } else if( kind === 8 ) {         var arena = Module.STDWEB_PRIVATE.arena;         var value_array_pointer = arena + Module.HEAPU32[ address / 4 ];         var length = Module.HEAPU32[ (address + 4) / 4 ];         var key_array_pointer = arena + Module.HEAPU32[ (address + 8) / 4 ];         var output = {};         for( var i = 0; i < length; ++i ) {             var key_pointer = Module.HEAPU32[ (key_array_pointer + i * 8) / 4 ];             var key_length = Module.HEAPU32[ (key_array_pointer + 4 + i * 8) / 4 ];             var key = Module.STDWEB_PRIVATE.to_js_string( key_pointer, key_length );             var value = Module.STDWEB_PRIVATE.to_js( value_array_pointer + i * 16 );             output[ key ] = value;         }         return output;     } else if( kind === 9 ) {         return Module.STDWEB_PRIVATE.acquire_js_reference( Module.HEAP32[ address / 4 ] );     } else if( kind === 10 || kind === 12 || kind === 13 ) {         var adapter_pointer = Module.HEAPU32[ address / 4 ];         var pointer = Module.HEAPU32[ (address + 4) / 4 ];         var deallocator_pointer = Module.HEAPU32[ (address + 8) / 4 ];         var num_ongoing_calls = 0;         var drop_queued = false;         var output = function() {             if( pointer === 0 || drop_queued === true ) {                 if (kind === 10) {                     throw new ReferenceError( "Already dropped Rust function called!" );                 } else if (kind === 12) {                     throw new ReferenceError( "Already dropped FnMut function called!" );                 } else {                     throw new ReferenceError( "Already called or dropped FnOnce function called!" );                 }             }              var function_pointer = pointer;             if (kind === 13) {                 output.drop = Module.STDWEB_PRIVATE.noop;                 pointer = 0;             }              if (num_ongoing_calls !== 0) {                 if (kind === 12 || kind === 13) {                     throw new ReferenceError( "FnMut function called multiple times concurrently!" );                 }             }              var args = Module.STDWEB_PRIVATE.alloc( 16 );             Module.STDWEB_PRIVATE.serialize_array( args, arguments );              try {                 num_ongoing_calls += 1;                 Module.STDWEB_PRIVATE.dyncall( "vii", adapter_pointer, [function_pointer, args] );                 var result = Module.STDWEB_PRIVATE.tmp;                 Module.STDWEB_PRIVATE.tmp = null;             } finally {                 num_ongoing_calls -= 1;             }              if( drop_queued === true && num_ongoing_calls === 0 ) {                 output.drop();             }              return result;         };          output.drop = function() {             if (num_ongoing_calls !== 0) {                 drop_queued = true;                 return;             }              output.drop = Module.STDWEB_PRIVATE.noop;             var function_pointer = pointer;             pointer = 0;              if (function_pointer != 0) {                 Module.STDWEB_PRIVATE.dyncall( "vi", deallocator_pointer, [function_pointer] );             }         };          return output;     } else if( kind === 14 ) {         var pointer = Module.HEAPU32[ address / 4 ];         var length = Module.HEAPU32[ (address + 4) / 4 ];         var array_kind = Module.HEAPU32[ (address + 8) / 4 ];         var pointer_end = pointer + length;          switch( array_kind ) {             case 0:                 return Module.HEAPU8.subarray( pointer, pointer_end );             case 1:                 return Module.HEAP8.subarray( pointer, pointer_end );             case 2:                 return Module.HEAPU16.subarray( pointer, pointer_end );             case 3:                 return Module.HEAP16.subarray( pointer, pointer_end );             case 4:                 return Module.HEAPU32.subarray( pointer, pointer_end );             case 5:                 return Module.HEAP32.subarray( pointer, pointer_end );             case 6:                 return Module.HEAPF32.subarray( pointer, pointer_end );             case 7:                 return Module.HEAPF64.subarray( pointer, pointer_end );         }     } else if( kind === 15 ) {         return Module.STDWEB_PRIVATE.get_raw_value( Module.HEAPU32[ address / 4 ] );     } };  Module.STDWEB_PRIVATE.serialize_object = function serialize_object( address, value ) {     var keys = Object.keys( value );     var length = keys.length;     var key_array_pointer = Module.STDWEB_PRIVATE.alloc( length * 8 );     var value_array_pointer = Module.STDWEB_PRIVATE.alloc( length * 16 );     Module.HEAPU8[ address + 12 ] = 8;     Module.HEAPU32[ address / 4 ] = value_array_pointer;     Module.HEAPU32[ (address + 4) / 4 ] = length;     Module.HEAPU32[ (address + 8) / 4 ] = key_array_pointer;     for( var i = 0; i < length; ++i ) {         var key = keys[ i ];         var key_address = key_array_pointer + i * 8;         Module.STDWEB_PRIVATE.to_utf8_string( key_address, key );          Module.STDWEB_PRIVATE.from_js( value_array_pointer + i * 16, value[ key ] );     } };  Module.STDWEB_PRIVATE.serialize_array = function serialize_array( address, value ) {     var length = value.length;     var pointer = Module.STDWEB_PRIVATE.alloc( length * 16 );     Module.HEAPU8[ address + 12 ] = 7;     Module.HEAPU32[ address / 4 ] = pointer;     Module.HEAPU32[ (address + 4) / 4 ] = length;     for( var i = 0; i < length; ++i ) {         Module.STDWEB_PRIVATE.from_js( pointer + i * 16, value[ i ] );     } };   var cachedEncoder = ( typeof TextEncoder === "function"     ? new TextEncoder( "utf-8" )          : ( typeof util === "object" && util && typeof util.TextEncoder === "function"         ? new util.TextEncoder( "utf-8" )                  : null ) );  if ( cachedEncoder != null ) {     Module.STDWEB_PRIVATE.to_utf8_string = function to_utf8_string( address, value ) {         var buffer = cachedEncoder.encode( value );         var length = buffer.length;         var pointer = 0;          if ( length > 0 ) {             pointer = Module.STDWEB_PRIVATE.alloc( length );             Module.HEAPU8.set( buffer, pointer );         }          Module.HEAPU32[ address / 4 ] = pointer;         Module.HEAPU32[ (address + 4) / 4 ] = length;     };  } else {     Module.STDWEB_PRIVATE.to_utf8_string = function to_utf8_string( address, value ) {         var length = Module.STDWEB_PRIVATE.utf8_len( value );         var pointer = 0;          if ( length > 0 ) {             pointer = Module.STDWEB_PRIVATE.alloc( length );             Module.STDWEB_PRIVATE.to_utf8( value, pointer );         }          Module.HEAPU32[ address / 4 ] = pointer;         Module.HEAPU32[ (address + 4) / 4 ] = length;     }; }  Module.STDWEB_PRIVATE.from_js = function from_js( address, value ) {     var kind = Object.prototype.toString.call( value );     if( kind === "[object String]" ) {         Module.HEAPU8[ address + 12 ] = 4;         Module.STDWEB_PRIVATE.to_utf8_string( address, value );     } else if( kind === "[object Number]" ) {         if( value === (value|0) ) {             Module.HEAPU8[ address + 12 ] = 2;             Module.HEAP32[ address / 4 ] = value;         } else {             Module.HEAPU8[ address + 12 ] = 3;             Module.HEAPF64[ address / 8 ] = value;         }     } else if( value === null ) {         Module.HEAPU8[ address + 12 ] = 1;     } else if( value === undefined ) {         Module.HEAPU8[ address + 12 ] = 0;     } else if( value === false ) {         Module.HEAPU8[ address + 12 ] = 5;     } else if( value === true ) {         Module.HEAPU8[ address + 12 ] = 6;     } else if( kind === "[object Symbol]" ) {         var id = Module.STDWEB_PRIVATE.register_raw_value( value );         Module.HEAPU8[ address + 12 ] = 15;         Module.HEAP32[ address / 4 ] = id;     } else {         var refid = Module.STDWEB_PRIVATE.acquire_rust_reference( value );         Module.HEAPU8[ address + 12 ] = 9;         Module.HEAP32[ address / 4 ] = refid;     } };   var cachedDecoder = ( typeof TextDecoder === "function"     ? new TextDecoder( "utf-8" )          : ( typeof util === "object" && util && typeof util.TextDecoder === "function"         ? new util.TextDecoder( "utf-8" )                  : null ) );  if ( cachedDecoder != null ) {     Module.STDWEB_PRIVATE.to_js_string = function to_js_string( index, length ) {         return cachedDecoder.decode( Module.HEAPU8.subarray( index, index + length ) );     };  } else {               Module.STDWEB_PRIVATE.to_js_string = function to_js_string( index, length ) {         var HEAPU8 = Module.HEAPU8;         index = index|0;         length = length|0;         var end = (index|0) + (length|0);         var output = "";         while( index < end ) {             var x = HEAPU8[ index++ ];             if( x < 128 ) {                 output += String.fromCharCode( x );                 continue;             }             var init = (x & (0x7F >> 2));             var y = 0;             if( index < end ) {                 y = HEAPU8[ index++ ];             }             var ch = (init << 6) | (y & 63);             if( x >= 0xE0 ) {                 var z = 0;                 if( index < end ) {                     z = HEAPU8[ index++ ];                 }                 var y_z = ((y & 63) << 6) | (z & 63);                 ch = init << 12 | y_z;                 if( x >= 0xF0 ) {                     var w = 0;                     if( index < end ) {                         w = HEAPU8[ index++ ];                     }                     ch = (init & 7) << 18 | ((y_z << 6) | (w & 63));                      output += String.fromCharCode( 0xD7C0 + (ch >> 10) );                     ch = 0xDC00 + (ch & 0x3FF);                 }             }             output += String.fromCharCode( ch );             continue;         }         return output;     }; }  Module.STDWEB_PRIVATE.id_to_ref_map = {}; Module.STDWEB_PRIVATE.id_to_refcount_map = {}; Module.STDWEB_PRIVATE.ref_to_id_map = new WeakMap();  Module.STDWEB_PRIVATE.ref_to_id_map_fallback = new Map(); Module.STDWEB_PRIVATE.last_refid = 1;  Module.STDWEB_PRIVATE.id_to_raw_value_map = {}; Module.STDWEB_PRIVATE.last_raw_value_id = 1;  Module.STDWEB_PRIVATE.acquire_rust_reference = function( reference ) {     if( reference === undefined || reference === null ) {         return 0;     }      var id_to_refcount_map = Module.STDWEB_PRIVATE.id_to_refcount_map;     var id_to_ref_map = Module.STDWEB_PRIVATE.id_to_ref_map;     var ref_to_id_map = Module.STDWEB_PRIVATE.ref_to_id_map;     var ref_to_id_map_fallback = Module.STDWEB_PRIVATE.ref_to_id_map_fallback;      var refid = ref_to_id_map.get( reference );     if( refid === undefined ) {         refid = ref_to_id_map_fallback.get( reference );     }     if( refid === undefined ) {         refid = Module.STDWEB_PRIVATE.last_refid++;         try {             ref_to_id_map.set( reference, refid );         } catch (e) {             ref_to_id_map_fallback.set( reference, refid );         }     }      if( refid in id_to_ref_map ) {         id_to_refcount_map[ refid ]++;     } else {         id_to_ref_map[ refid ] = reference;         id_to_refcount_map[ refid ] = 1;     }      return refid; };  Module.STDWEB_PRIVATE.acquire_js_reference = function( refid ) {     return Module.STDWEB_PRIVATE.id_to_ref_map[ refid ]; };  Module.STDWEB_PRIVATE.increment_refcount = function( refid ) {     Module.STDWEB_PRIVATE.id_to_refcount_map[ refid ]++; };  Module.STDWEB_PRIVATE.decrement_refcount = function( refid ) {     var id_to_refcount_map = Module.STDWEB_PRIVATE.id_to_refcount_map;     if( 0 == --id_to_refcount_map[ refid ] ) {         var id_to_ref_map = Module.STDWEB_PRIVATE.id_to_ref_map;         var ref_to_id_map_fallback = Module.STDWEB_PRIVATE.ref_to_id_map_fallback;         var reference = id_to_ref_map[ refid ];         delete id_to_ref_map[ refid ];         delete id_to_refcount_map[ refid ];         ref_to_id_map_fallback.delete(reference);     } };  Module.STDWEB_PRIVATE.register_raw_value = function( value ) {     var id = Module.STDWEB_PRIVATE.last_raw_value_id++;     Module.STDWEB_PRIVATE.id_to_raw_value_map[ id ] = value;     return id; };  Module.STDWEB_PRIVATE.unregister_raw_value = function( id ) {     delete Module.STDWEB_PRIVATE.id_to_raw_value_map[ id ]; };  Module.STDWEB_PRIVATE.get_raw_value = function( id ) {     return Module.STDWEB_PRIVATE.id_to_raw_value_map[ id ]; }; Module.STDWEB_PRIVATE.alloc = function alloc( size ) {     return Module.web_malloc( size ); };  Module.STDWEB_PRIVATE.dyncall = function( signature, ptr, args ) {     return Module.web_table.get( ptr ).apply( null, args ); };   Module.STDWEB_PRIVATE.utf8_len = function utf8_len( str ) {     var len = 0;     for( var i = 0; i < str.length; ++i ) {                           var u = str.charCodeAt( i );          if( u >= 0xD800 && u <= 0xDFFF ) {             u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt( ++i ) & 0x3FF);         }          if( u <= 0x7F ) {             ++len;         } else if( u <= 0x7FF ) {             len += 2;         } else if( u <= 0xFFFF ) {             len += 3;         } else if( u <= 0x1FFFFF ) {             len += 4;         } else if( u <= 0x3FFFFFF ) {             len += 5;         } else {             len += 6;         }     }     return len; };  Module.STDWEB_PRIVATE.prepare_any_arg = function( value ) {     var arg = Module.STDWEB_PRIVATE.alloc( 16 );     Module.STDWEB_PRIVATE.from_js( arg, value );     return arg; };  Module.STDWEB_PRIVATE.acquire_tmp = function( dummy ) {     var value = Module.STDWEB_PRIVATE.tmp;     Module.STDWEB_PRIVATE.tmp = null;     return value; };  }

    function __cargo_web_snippet_6fcce0aae651e2d748e085ff1f800f87625ff8c8(Module, $0) { Module.STDWEB_PRIVATE.from_js($0, (function(){return document;})()); }

    let wasm;

    const heap = new Array(32).fill(undefined);

    heap.push(undefined, null, true, false);

    function getObject(idx) { return heap[idx]; }

    let heap_next = heap.length;

    function addHeapObject(obj) {
        if (heap_next === heap.length) heap.push(heap.length + 1);
        const idx = heap_next;
        heap_next = heap[idx];

        heap[idx] = obj;
        return idx;
    }

    function dropObject(idx) {
        if (idx < 36) return;
        heap[idx] = heap_next;
        heap_next = idx;
    }

    function takeObject(idx) {
        const ret = getObject(idx);
        dropObject(idx);
        return ret;
    }

    const cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

    cachedTextDecoder.decode();

    let cachegetUint8Memory0 = null;
    function getUint8Memory0() {
        if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
            cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
        }
        return cachegetUint8Memory0;
    }

    function getStringFromWasm0(ptr, len) {
        return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
    }

    function makeClosure(arg0, arg1, dtor, f) {
        const state = { a: arg0, b: arg1, cnt: 1, dtor };
        const real = (...args) => {
            // First up with a closure we increment the internal reference
            // count. This ensures that the Rust closure environment won't
            // be deallocated while we're invoking it.
            state.cnt++;
            try {
                return f(state.a, state.b, ...args);
            } finally {
                if (--state.cnt === 0) {
                    wasm.__wbindgen_export_0.get(state.dtor)(state.a, state.b);
                    state.a = 0;

                }
            }
        };
        real.original = state;

        return real;
    }
    function __wbg_adapter_12(arg0, arg1, arg2, arg3) {
        wasm._dyn_core__ops__function__Fn__A_B___Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hb3ae29a801276a1a(arg0, arg1, arg2, arg3);
    }

    function __wbg_adapter_15(arg0, arg1, arg2) {
        const ret = wasm._dyn_core__ops__function__Fn__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hbeb7438c8c56f5c9(arg0, arg1, arg2);
        return ret;
    }

    let cachegetInt32Memory0 = null;
    function getInt32Memory0() {
        if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
            cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
        }
        return cachegetInt32Memory0;
    }
    /**
    */
    function run_app() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.run_app(retptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }

    async function load(module, imports) {
        if (typeof Response === 'function' && module instanceof Response) {
            if (typeof WebAssembly.instantiateStreaming === 'function') {
                try {
                    return await WebAssembly.instantiateStreaming(module, imports);

                } catch (e) {
                    if (module.headers.get('Content-Type') != 'application/wasm') {
                        console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                    } else {
                        throw e;
                    }
                }
            }

            const bytes = await module.arrayBuffer();
            return await WebAssembly.instantiate(bytes, imports);

        } else {
            const instance = await WebAssembly.instantiate(module, imports);

            if (instance instanceof WebAssembly.Instance) {
                return { instance, module };

            } else {
                return instance;
            }
        }
    }

    async function init(input) {
        if (typeof input === 'undefined') {
            input = new URL('yew_wasm_pack_minimal_bg.wasm', (document.currentScript && document.currentScript.src || new URL('bundle.js', document.baseURI).href));
        }
        const imports = {};
        imports.wbg = {};
        imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
            const ret = getObject(arg0);
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_cargowebsnippet80d6d56760c65e49b7be8b6b01c1ea861b046bf0_5a8953894b8affd6 = function(arg0, arg1) {
            __cargo_web_snippet_80d6d56760c65e49b7be8b6b01c1ea861b046bf0(takeObject(arg0), arg1);
        };
        imports.wbg.__wbg_cargowebsnippet9f22d4ca7bc938409787341b7db181f8dd41e6df_f184afed978d4a95 = function(arg0, arg1) {
            __cargo_web_snippet_9f22d4ca7bc938409787341b7db181f8dd41e6df(takeObject(arg0), arg1);
        };
        imports.wbg.__wbg_wasmbindgeninitialize_c1c4df6b494511ad = function(arg0, arg1, arg2, arg3) {
            const ret = wasm_bindgen_initialize(takeObject(arg0), takeObject(arg1), getObject(arg2), getObject(arg3));
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
            takeObject(arg0);
        };
        imports.wbg.__wbg_cargowebsnippetdb12d53e9596e9bc7860a8231ec85044629926e7_78e4e5f2c2ce9f1f = function(arg0, arg1) {
            const ret = __cargo_web_snippet_db12d53e9596e9bc7860a8231ec85044629926e7(takeObject(arg0), arg1);
            return ret;
        };
        imports.wbg.__wbg_cargowebsnippet2908dbb08792df5e699e324eec3e29fd6a57c2c9_1aba12964286db2a = function(arg0, arg1) {
            const ret = __cargo_web_snippet_2908dbb08792df5e699e324eec3e29fd6a57c2c9(takeObject(arg0), arg1);
            return ret;
        };
        imports.wbg.__wbg_cargowebsnippet1c30acb32a1994a07c75e804ae9855b43f191d63_6d353463ef525961 = function(arg0) {
            __cargo_web_snippet_1c30acb32a1994a07c75e804ae9855b43f191d63(takeObject(arg0));
        };
        imports.wbg.__wbg_cargowebsnippetdc2fd915bd92f9e9c6a3bd15174f1414eee3dbaf_ce5c721cab10d020 = function(arg0) {
            __cargo_web_snippet_dc2fd915bd92f9e9c6a3bd15174f1414eee3dbaf(takeObject(arg0));
        };
        imports.wbg.__wbg_cargowebsnippet97495987af1720d8a9a923fa4683a7b683e3acd6_a438202dc16f44c0 = function(arg0, arg1, arg2) {
            __cargo_web_snippet_97495987af1720d8a9a923fa4683a7b683e3acd6(takeObject(arg0), arg1, arg2);
        };
        imports.wbg.__wbg_cargowebsnippet72fc447820458c720c68d0d8e078ede631edd723_ece3da0a4474dbeb = function(arg0, arg1, arg2, arg3) {
            __cargo_web_snippet_72fc447820458c720c68d0d8e078ede631edd723(takeObject(arg0), arg1, arg2, arg3);
        };
        imports.wbg.__wbg_cargowebsnippet6fcce0aae651e2d748e085ff1f800f87625ff8c8_21ca3c3552146790 = function(arg0, arg1) {
            __cargo_web_snippet_6fcce0aae651e2d748e085ff1f800f87625ff8c8(takeObject(arg0), arg1);
        };
        imports.wbg.__wbindgen_throw = function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        };
        imports.wbg.__wbindgen_memory = function() {
            const ret = wasm.memory;
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_function_table = function() {
            const ret = wasm.__wbindgen_export_0;
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_closure_wrapper255 = function(arg0, arg1, arg2) {
            const ret = makeClosure(arg0, arg1, 61, __wbg_adapter_12);
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_closure_wrapper256 = function(arg0, arg1, arg2) {
            const ret = makeClosure(arg0, arg1, 61, __wbg_adapter_15);
            return addHeapObject(ret);
        };

        if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
            input = fetch(input);
        }



        const { instance, module } = await load(await input, imports);

        wasm = instance.exports;
        init.__wbindgen_wasm_module = module;

        return wasm;
    }

    async function main() {
       await init('./pkg/yew_wasm_pack_minimal_bg.wasm');
       run_app();
    }
    main();

})();
