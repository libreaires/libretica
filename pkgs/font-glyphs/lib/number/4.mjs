"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t2 = function _r1_t10(r347_t) {
    var r347_n, r347_i, r347_a, _r347_t3, _r347_t4, _r347_t5, _r347_t6, _r347_t7, _r347_t8, _r347_t9, _r347_t10, _r347_t11, _r347_t12, _r347_t13, _r347_t14, _r347_t15, _r347_t16, _r347_t17, _r347_t18, _r347_t19, _r347_t20, _r347_t21, _r347_t22, _r347_t23, _r347_t24, _r347_t25, _r347_t26;
    var _r347_t0 = function () {
        _r347_t7 = function (_r347_t8) {
            _r347_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r347_t8
            };
        };
        _r347_t9 = r347_t instanceof Array;
        if (_r347_t9) {
            _r347_t10 = r347_n = r347_t.length;
            _r347_t11 = r347_i = 0;
            _r347_t12 = function (_r347_t14) {
                return _r347_t7(_r347_t14);
            };
            _r347_t13 = function (_r347_t15) {
                _r347_t16 = r347_i < r347_n;
                if (_r347_t16) {
                    _r347_t0 = function (_r347_t17) {
                        return _r347_t13(r347_i = r347_i + 1);
                    };
                    return {
                        "value": [r347_i, r347_t[r347_i]],
                        "done": false
                    };
                } else return _r347_t12(_r347_t15);
            };
            return _r347_t13();
        } else {
            _r347_t18 = r347_a = Object.keys(r347_t);
            _r347_t19 = r347_n = r347_a.length;
            _r347_t20 = r347_i = 0;
            _r347_t21 = function (_r347_t23) {
                return _r347_t7(_r347_t23);
            };
            _r347_t22 = function (_r347_t24) {
                _r347_t25 = r347_i < r347_n;
                if (_r347_t25) {
                    _r347_t0 = function (_r347_t26) {
                        return _r347_t22(r347_i = r347_i + 1);
                    };
                    return {
                        "value": [r347_a[r347_i], r347_t[r347_a[r347_i]]],
                        "done": false
                    };
                } else return _r347_t21(_r347_t24);
            };
            return _r347_t22();
        }
    };
    var _r347_t1 = function (x) {
        try {
            return _r347_t0(x);
        } catch (ex) {
            return _r347_t2(ex);
        }
    };
    var _r347_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10) _r347_t3 = this; else {
        _r347_t4 = function () {
            void 0;
        };
        _r347_t4.prototype = _r1_t10.prototype;
        _r347_t3 = new _r347_t4();
    }
    _r347_t3[Symbol.iterator] = function () {
        return _r347_t3;
    };
    _r347_t3.next = _r347_t1;
    _r347_t3.throw = function (x) {
        return _r347_t2(x);
    };
    return _r347_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t2 = r1_apply = function () {
    var r308_block, _r308_t4, _r308_t6;
    var _r308_t3 = this;
    var _r308_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r308_t1 = _r308_t0.length;
    var _r308_t2 = 0;
    var _r308_t5 = _r308_t2 < _r308_t1;
    while (_r308_t5) {
        _r308_t6 = (r308_block = _r308_t0[_r308_t2], r308_block(_r308_t3), _r308_t2 = _r308_t2 + 1);
        _r308_t5 = _r308_t2 < _r308_t1;
    }
    return _r308_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r312_xn$Capture_Ext$2Lrc2b) {
    var _r312_t0, _r312_t1;
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Digits-Four", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_body, r313_crossing, r313_slab, _r313_t12, _r313_t14, _r313_t15, _r313_t16, _r313_tag17;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_MarkSet = _r313_t0.MarkSet;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Descender = _r313_t1.Descender;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Upward = _r313_t1.Upward;
        var r313_OX = _r313_t1.OX;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_Jut = _r313_t1.Jut;
        var r313_MidJutSide = _r313_t1.MidJutSide;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_RightSB = _r313_t1.RightSB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g2 = _r313_t2.g2;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_union = _r313_t4.union;
        var r313_intersection = _r313_t4.intersection;
        var r313_difference = _r313_t4.difference;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_Rect = _r313_t5.Rect;
        var r313_HSerif = _r313_t5.HSerif;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateAccentedComposition = _r313_t7.CreateAccentedComposition;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_EngHook = _r313_t8.EngHook;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Digits-Shared"].resolve();
        var r313_OnumMarks = _r313_t9.OnumMarks;
        var r313_ShiftDown = _r313_t9.ShiftDown;
        var r313_CodeLnum = _r313_t9.CodeLnum;
        var r313_CodeOnum = _r313_t9.CodeOnum;
        var r313_FourStdShape = function () {
            var _r319_t5;
            var _r319_t6 = arguments;
            var r319_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r319_t6, 0);
            var _r319_t0 = [];
            var _r319_t1 = 0;
            while (_r319_t1 < r319_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r319_xn$flexarguments$2Lrc7uIe5[_r319_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r319_t0.push(r319_xn$flexarguments$2Lrc7uIe5[_r319_t1]);
                _r319_t1 = _r319_t1 + 1;
            }
            var _r319_t2 = r319_xn$flexarguments$2Lrc7uIe5;
            var _r319_t3 = _r319_t2.length;
            var _r319_t4 = 0;
            while (_r319_t4 < _r319_t3) {
                _r319_t1 = _r319_t2[_r319_t4];
                if (_r319_t1 && _r319_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r319_t1.left === "top") r319_top = _r319_t1.right;
                if (_r319_t1 && _r319_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r319_t1.left === "open") r319_open = _r319_t1.right;
                if (_r319_t1 && _r319_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r319_t1.left === "crossing") r319_crossing = _r319_t1.right;
                if (_r319_t1 && _r319_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r319_t1.left === "fine") r319_fine = _r319_t1.right;
                if (_r319_t1 && _r319_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r319_t1.left === "sw") r319_sw = _r319_t1.right;
                if (_r319_t1 && _r319_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r319_t1.left === "bbd") r319_bbd = _r319_t1.right;
                if (_r319_t1 && _r319_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r319_t1.left === "slab") r319_slab = _r319_t1.right;
                _r319_t4 = _r319_t4 + 1;
            }
            var r319_top = r1_fallback(r319_top, _r319_t0[0]);
            var r319_open = r1_fallback(r319_open, _r319_t0[1]);
            var r319_crossing = r1_fallback(r319_crossing, _r319_t0[2]);
            var r319_fine = r1_fallback(r319_fine, _r319_t0[3], r313_AdviceStroke(3));
            var r319_sw = r1_fallback(r319_sw, _r319_t0[4], r313_Stroke);
            var r319_bbd = r1_fallback(r319_bbd, _r319_t0[5], 0);
            var r319_slab = r1_fallback(r319_slab, _r319_t0[6], r313_SLAB);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r325_currentGlyph) {
                var _r325_t0, _r325_t1, _r325_t2, _r325_t3;
                var r325_yBarBot = Math.max(r1_mix(0, r319_top - r319_sw, 0.25) - 0.125 * r319_sw, r1_mix(!r319_bbd && r319_slab ? r313_Stroke : 0, r319_top - r319_sw, 0.1));
                var r325_yBarTop = r325_yBarBot + r319_sw;
                var r325_swVBar = r313_AdviceStroke(r319_open ? 2.5 : 2) * (r319_sw / r313_Stroke);
                var r325_xVertBar = r1_mix(r313_SB, r313_RightSB, r319_crossing ? 0.78 : 0.9125) - r319_bbd * 0.75 + (r319_crossing ? r313_HSwToV(0.375 * r319_sw) : 0);
                var r325_yVertBarTop = r1_mix(r325_yBarBot, r319_top, r319_open ? 0.5 : 1) - (r319_open ? 0.3 * r319_sw : 0);
                var r325_xHBarTerminal = r319_crossing ? r313_RightSB : r325_xVertBar;
                var r325_xSlopeTop = r325_xVertBar - r313_HSwToV(r319_sw + (r319_open ? 0.06 : 0.25) * r319_fine);
                r325_currentGlyph.include(r313_union(r319_open ? r313_VBar.r(r325_xVertBar, 0, r325_yVertBarTop, r325_swVBar) : (_r325_t0 = 0, _r325_t1 = r325_yVertBarTop, r313_dispiro(r313_widths.lhs(r325_swVBar), r313_flat(r325_xVertBar, _r325_t0, r313_heading(r313_Upward)), r313_curl(r325_xVertBar, r1_mix(_r325_t0, _r325_t1, 0.8), r313_heading(r313_Upward)), r313_g2(r325_xVertBar, _r325_t1, r313_widths.lhs.heading(r319_fine, r313_Upward)))), r313_difference(r313_HBar.t(r313_SB + r313_OX, r325_xHBarTerminal, r325_yBarTop, r319_sw), r313_Rect(r313_CAP, 0, r325_xVertBar, r325_xVertBar + r319_bbd)), r313_intersection(r313_Rect(r319_top, r325_yBarTop, 0, r319_open ? r313_Width : r325_xVertBar), r313_dispiro(r313_widths.rhs(r319_fine), r313_flat(r313_SB + r313_OX, r325_yBarTop), r313_curl(r1_mix(r313_SB + r313_OX, r325_xSlopeTop, 2), r1_mix(r325_yBarTop, r319_top, 2))))));
                if (r319_bbd) {
                    r325_currentGlyph.include(r313_VBar.r(r325_xVertBar + r319_bbd, 0, r325_yVertBarTop, r325_swVBar));
                    r325_currentGlyph.include(r313_HBar.t(r325_xVertBar, r325_xVertBar + r319_bbd, r313_CAP, r319_sw));
                    r325_currentGlyph.include(r313_HBar.b(r325_xVertBar, r325_xVertBar + r319_bbd, 0, r319_sw));
                }
                if (!r319_bbd && r319_slab) {
                    r325_currentGlyph.include(r313_HSerif.rb(r325_xVertBar - r313_HSwToV(0.5 * r325_swVBar), 0, r313_Jut));
                    r325_currentGlyph.include(r313_HSerif.lb(r325_xVertBar - r313_HSwToV(0.5 * r325_swVBar), 0, r313_MidJutSide));
                }
                return {
                    "yBarBot": r325_yBarBot,
                    "yBarTop": r325_yBarTop,
                    "swVBar": r325_swVBar,
                    "xVertBar": r325_xVertBar
                };
            });
        };
        var r313_FourClosedShape = function (r333_top, r333_crossing, r333_slab) {
            var _r333_t0, _r333_t1;
            return r313_FourStdShape(r333_top, false, r333_crossing, new r313_xn$NamedParameterPair$2Lrc9b("slab", r333_slab));
        };
        var r313_FourSemiOpenShape = function (r335_top, r335_crossing, r335_slab) {
            var _r335_t0, _r335_t1;
            return r313_FourStdShape(r335_top, true, r335_crossing, new r313_xn$NamedParameterPair$2Lrc9b("slab", r335_slab), new r313_xn$NamedParameterPair$2Lrc9b("fine", r313_AdviceStroke(2.75)));
        };
        var r313_FourOpenShape = function (r338_top, r338_crossing, r338_slab) {
            var _r338_t0, _r338_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
                var _r340_t0, _r340_t1;
                var r340_yBarBot = Math.max(r1_mix(0, r338_top - r313_Stroke, 0.4) - 0.2 * r313_Stroke, r1_mix(r338_slab ? r313_Stroke : 0, r338_top - r313_Stroke, 0.1));
                var r340_yBarTop = r340_yBarBot + r313_Stroke;
                var r340_swVBar = r313_AdviceStroke(2);
                var r340_xVertBar = r1_mix(r313_SB, r313_RightSB, r338_crossing ? 0.825 : 0.9125);
                var r340_yVertBarTop = r1_mix(r340_yBarBot, r338_top, 0.75);
                var r340_xHBarTerminal = r338_crossing ? r313_RightSB : r340_xVertBar;
                r340_currentGlyph.include(r313_HBar.t(r313_SB, r340_xHBarTerminal, r340_yBarTop));
                r340_currentGlyph.include(r313_VBar.r(r340_xVertBar, 0, r340_yVertBarTop, r340_swVBar));
                r340_currentGlyph.include(r313_VBar.l(r313_SB, r340_yBarTop, r338_top));
                if (r338_slab) {
                    r340_currentGlyph.include(r313_HSerif.rb(r340_xVertBar - r313_HSwToV(0.5 * r340_swVBar), 0, r313_Jut));
                    r340_currentGlyph.include(r313_HSerif.lb(r340_xVertBar - r313_HSwToV(0.5 * r340_swVBar), 0, r313_MidJutSide));
                }
                return {
                    "yBarBot": r340_yBarBot,
                    "yBarTop": r340_yBarTop,
                    "swVBar": r340_swVBar,
                    "xVertBar": r340_xVertBar
                };
            });
        };
        var r313_FourConfig = r1_SuffixCfg.weave({
            "closed": r313_FourClosedShape,
            "semiOpen": r313_FourSemiOpenShape,
            "open": r313_FourOpenShape
        }, {
            "nonCrossing": false,
            "crossing": true
        }, {
            "serifless": false,
            "serifed": true
        });
        var _r313_t10 = _r1_t2(r313_FourConfig)[Symbol.iterator]();
        var _r313_t11 = void 0;
        while (!(_r313_t11 = _r313_t10.next()).done) {
            _r313_t12 = _r313_t11.value;
            r313_suffix = _r313_t12[0];
            r313_body = _r313_t12[1][0];
            r313_crossing = _r313_t12[1][1];
            r313_slab = _r313_t12[1][2];
            _r313_t12[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("four.lnum." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r353_currentGlyph) {
                    var _r353_t0, _r353_t1;
                    r353_currentGlyph.include(r313_MarkSet.capital());
                    r353_currentGlyph.include(r313_body(r313_CAP, r313_crossing, r313_slab));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("four.onum." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r358_currentGlyph) {
                    var _r358_t0, _r358_t1;
                    r358_currentGlyph.include(r313_OnumMarks.p());
                    r358_currentGlyph.include(r313_body(r313_CAP, r313_crossing, r313_slab));
                    r358_currentGlyph.include(r313_ShiftDown());
                    return void 0;
                }));
                return !r313_slab ? (r313_xn$GlyphSaveSink$2Lrc4b.save("Cuatrillo." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r364_currentGlyph) {
                    var _r364_t1, _r364_t2;
                    r364_currentGlyph.include(r313_MarkSet.capDesc());
                    var _r364_t0 = r364_currentGlyph.include(r313_body(r313_CAP, r313_crossing, r313_slab));
                    var r364_swVBar = _r364_t0.swVBar;
                    var r364_xVertBar = _r364_t0.xVertBar;
                    var r364_yBarBot = _r364_t0.yBarBot;
                    r364_currentGlyph.include(r313_EngHook(r364_xVertBar, 0, r313_Descender, new r313_xn$NamedParameterPair$2Lrc9b("sw", r364_swVBar)));
                    r364_currentGlyph.setBaseAnchor("bottomRight", r364_xVertBar, r364_yBarBot);
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("cuatrillo." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r372_currentGlyph) {
                    var _r372_t1, _r372_t2;
                    r372_currentGlyph.include(r313_MarkSet.p());
                    var _r372_t0 = r372_currentGlyph.include(r313_body(r313_XH, r313_crossing, r313_slab));
                    var r372_swVBar = _r372_t0.swVBar;
                    var r372_xVertBar = _r372_t0.xVertBar;
                    var r372_yBarBot = _r372_t0.yBarBot;
                    r372_currentGlyph.include(r313_EngHook(r372_xVertBar, 0, r313_Descender, new r313_xn$NamedParameterPair$2Lrc9b("sw", r372_swVBar)));
                    r372_currentGlyph.setBaseAnchor("bottomRight", r372_xVertBar, r372_yBarBot);
                    return void 0;
                }))) : void 0;
            })();
        }
        r313_xn$selectvariant$7Hrq("four.lnum", r313_CodeLnum("4"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "four"));
        r313_xn$selectvariant$7Hrq("four.onum", r313_CodeOnum("4"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "four"));
        r313_xn$linkreducedvariant$5sIl8("four/sansSerif.lnum", "four.lnum", r1_MathSansSerif, new r313_xn$NamedParameterPair$2Lrc9b("follow", "four/sansSerif"));
        r313_xn$linkreducedvariant$5sIl8("four/sansSerif.onum", "four.onum", r1_MathSansSerif, new r313_xn$NamedParameterPair$2Lrc9b("follow", "four/sansSerif"));
        r313_xn$selectvariant$7Hrq("Cuatrillo", 42796, new r313_xn$NamedParameterPair$2Lrc9b("follow", "four/sansSerif"));
        r313_xn$selectvariant$7Hrq("cuatrillo", 42797, new r313_xn$NamedParameterPair$2Lrc9b("follow", "four/sansSerif"));
        r313_CreateAccentedComposition("CuatrilloComma", 42798, "Cuatrillo", "commaBR");
        r313_CreateAccentedComposition("cuatrilloComma", 42799, "cuatrillo", "commaBR");
        var _r313_t13 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t13.BBS;
        var r313_BBD = _r313_t13.BBD;
        var r313_BBBarCenter = _r313_t13.BBBarCenter;
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/four", 120796, new r313_xn$Capture$2Lrc8.GlyphProc(function (r387_currentGlyph) {
            var _r387_t0, _r387_t1;
            r387_currentGlyph.include(r313_MarkSet.capital());
            r387_currentGlyph.include(r313_FourStdShape(r313_CAP, false, true, new r313_xn$NamedParameterPair$2Lrc9b("sw", r313_BBS), new r313_xn$NamedParameterPair$2Lrc9b("bbd", r313_BBD), new r313_xn$NamedParameterPair$2Lrc9b("fine", r313_BBS)));
            return void 0;
        }));
    });
    return void 0;
});


