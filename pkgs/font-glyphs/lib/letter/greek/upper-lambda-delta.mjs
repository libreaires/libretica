"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
import * as _s0_t2 from "@iosevka/util/mask-bit";
var _s0_t3;
export {_s0_t3 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t11;
var _r1_t2 = function _r1_t11(r461_t) {
    var r461_n, r461_i, r461_a, _r461_t3, _r461_t4, _r461_t5, _r461_t6, _r461_t7, _r461_t8, _r461_t9, _r461_t10, _r461_t11, _r461_t12, _r461_t13, _r461_t14, _r461_t15, _r461_t16, _r461_t17, _r461_t18, _r461_t19, _r461_t20, _r461_t21, _r461_t22, _r461_t23, _r461_t24, _r461_t25, _r461_t26;
    var _r461_t0 = function () {
        _r461_t7 = function (_r461_t8) {
            _r461_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r461_t8
            };
        };
        _r461_t9 = r461_t instanceof Array;
        if (_r461_t9) {
            _r461_t10 = r461_n = r461_t.length;
            _r461_t11 = r461_i = 0;
            _r461_t12 = function (_r461_t14) {
                return _r461_t7(_r461_t14);
            };
            _r461_t13 = function (_r461_t15) {
                _r461_t16 = r461_i < r461_n;
                if (_r461_t16) {
                    _r461_t0 = function (_r461_t17) {
                        return _r461_t13(r461_i = r461_i + 1);
                    };
                    return {
                        "value": [r461_i, r461_t[r461_i]],
                        "done": false
                    };
                } else return _r461_t12(_r461_t15);
            };
            return _r461_t13();
        } else {
            _r461_t18 = r461_a = Object.keys(r461_t);
            _r461_t19 = r461_n = r461_a.length;
            _r461_t20 = r461_i = 0;
            _r461_t21 = function (_r461_t23) {
                return _r461_t7(_r461_t23);
            };
            _r461_t22 = function (_r461_t24) {
                _r461_t25 = r461_i < r461_n;
                if (_r461_t25) {
                    _r461_t0 = function (_r461_t26) {
                        return _r461_t22(r461_i = r461_i + 1);
                    };
                    return {
                        "value": [r461_a[r461_i], r461_t[r461_a[r461_i]]],
                        "done": false
                    };
                } else return _r461_t21(_r461_t24);
            };
            return _r461_t22();
        }
    };
    var _r461_t1 = function (x) {
        try {
            return _r461_t0(x);
        } catch (ex) {
            return _r461_t2(ex);
        }
    };
    var _r461_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t11) _r461_t3 = this; else {
        _r461_t4 = function () {
            void 0;
        };
        _r461_t4.prototype = _r1_t11.prototype;
        _r461_t3 = new _r461_t4();
    }
    _r461_t3[Symbol.iterator] = function () {
        return _r461_t3;
    };
    _r461_t3.next = _r461_t1;
    _r461_t3.throw = function (x) {
        return _r461_t2(x);
    };
    return _r461_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
var r1_DependentSelector = _r1_t9.DependentSelector;
var _r1_t10 = _s0_t2;
var r1_bitOr = _r1_t10.bitOr;
var r1_maskBits = _r1_t10.maskBits;
var r1_maskOffBits = _r1_t10.maskOffBits;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t3 = r1_apply = function () {
    var r309_block, _r309_t4, _r309_t6;
    var _r309_t3 = this;
    var _r309_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r309_t1 = _r309_t0.length;
    var _r309_t2 = 0;
    var _r309_t5 = _r309_t2 < _r309_t1;
    while (_r309_t5) {
        _r309_t6 = (r309_block = _r309_t0[_r309_t2], r309_block(_r309_t3), _r309_t2 = _r309_t2 + 1);
        _r309_t5 = _r309_t2 < _r309_t1;
    }
    return _r309_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r313_xn$Capture_Ext$2Lrc2b) {
    var _r313_t0, _r313_t1;
    r313_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r313_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Upper-Lambda-Delta", function (r314_xn$Capture$2Lrc8, r314_xn$ExportCapture$2Lrc4b) {
        var r314_suffix, r314_fStraightBar, r314_slabKind, r314_fBarStraight, _r314_t13, _r314_t16, _r314_t17, _r314_t18, _r314_t19, _r314_tag20, _r314_t21, _r314_tag22;
        var _r314_t0 = r314_xn$Capture$2Lrc8;
        var r314_xn$GlyphSaveSink$2Lrc4b = _r314_t0["$GlyphSaveSink$"];
        var r314_xn$NamedParameterPair$2Lrc9b = _r314_t0["$NamedParameterPair$"];
        var r314_xn$Exec$2Lrc5 = _r314_t0["$Exec$"];
        var r314_para = _r314_t0.para;
        var r314_MarkSet = _r314_t0.MarkSet;
        var r314_AS_BASE = _r314_t0.AS_BASE;
        var r314_ALSO_METRICS = _r314_t0.ALSO_METRICS;
        var r314_DivFrame = _r314_t0.DivFrame;
        var _r314_t1 = r314_xn$Capture$2Lrc8.Metrics;
        var r314_SB = _r314_t1.SB;
        var r314_CAP = _r314_t1.CAP;
        var r314_XH = _r314_t1.XH;
        var r314_Descender = _r314_t1.Descender;
        var r314_SymbolMid = _r314_t1.SymbolMid;
        var r314_OperTop = _r314_t1.OperTop;
        var r314_OperBot = _r314_t1.OperBot;
        var r314_ApparentTranslate = _r314_t1.ApparentTranslate;
        var r314_HSwToV = _r314_t1.HSwToV;
        var r314_Downward = _r314_t1.Downward;
        var r314_TailX = _r314_t1.TailX;
        var r314_AdviceStroke = _r314_t1.AdviceStroke;
        var r314_Stroke = _r314_t1.Stroke;
        var r314_QuarterStroke = _r314_t1.QuarterStroke;
        var r314_MidJutCenter = _r314_t1.MidJutCenter;
        var r314_LongVJut = _r314_t1.LongVJut;
        var r314_VJutStroke = _r314_t1.VJutStroke;
        var r314_SLAB = _r314_t1.SLAB;
        var r314_RightSB = _r314_t1.RightSB;
        var r314_SideJut = _r314_t1.SideJut;
        var r314_OperatorStroke = _r314_t1.OperatorStroke;
        var r314_TINY = _r314_t1.TINY;
        var _r314_t2 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_g4 = _r314_t2.g4;
        var r314_flat = _r314_t2.flat;
        var r314_curl = _r314_t2.curl;
        var r314_straight = _r314_t2.straight;
        var r314_widths = _r314_t2.widths;
        var r314_heading = _r314_t2.heading;
        var r314_dispiro = _r314_t2.dispiro;
        var _r314_t3 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_xn$decor$0cao = _r314_t3["decor@"];
        var r314_xn$decor$0cao1 = _r314_t3["decor@@"];
        var r314_xn$decor$0cao11 = _r314_t3["decor@@@"];
        var _r314_t4 = r314_xn$Capture$2Lrc8.BooleFns;
        var r314_union = _r314_t4.union;
        var r314_intersection = _r314_t4.intersection;
        var _r314_t5 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r314_HSerif = _r314_t5.HSerif;
        var r314_HBar = _r314_t5.HBar;
        var r314_VBar = _r314_t5.VBar;
        var r314_FlipAround = _r314_t5.FlipAround;
        var r314_xn$withtransform$5sIl = _r314_t5["with-transform"];
        var _r314_t6 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r314_xn$referglyph$1aao = _r314_t6["refer-glyph"];
        var r314_xn$selectvariant$7Hrq = _r314_t6["select-variant"];
        var r314_xn$linkreducedvariant$5sIl8 = _r314_t6["link-reduced-variant"];
        var r314_xn$deriveglyphs$7Hrq = _r314_t6["derive-glyphs"];
        var r314_alias = _r314_t6.alias;
        var r314_HalfAdvance = _r314_t6.HalfAdvance;
        var _r314_t7 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r314_ExtendBelowBaseAnchors = _r314_t7.ExtendBelowBaseAnchors;
        var _r314_t8 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r314_CreateSelectorVariants = _r314_t8.CreateSelectorVariants;
        var r314_DefineSelectorGlyph = _r314_t8.DefineSelectorGlyph;
        var r314_CreateTurnedLetter = _r314_t8.CreateTurnedLetter;
        var _r314_t9 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Upper-A"].resolve();
        var r314_AShape = _r314_t9.AShape;
        var r314_ASerifs = _r314_t9.ASerifs;
        var _r314_t10 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-V"].resolve();
        var r314_VShapeOutline = _r314_t10.VShapeOutline;
        var r314_VShape = _r314_t10.VShape;
        var r314_VHookRightShape = _r314_t10.VHookRightShape;
        var r314_VHookLeftShape = _r314_t10.VHookLeftShape;
        var r314_xn$SLABNONE$5sIl = 0;
        var r314_xn$SLABTOP$5sIl = 1;
        var r314_xn$SLABLEFT$5sIl = 2;
        var r314_xn$SLABRIGHT$5sIl = 4;
        var r314_xn$SLABSMALLCYRL$5sIl6 = 8;
        var r314_LambdaMask = function () {
            var _r321_t5;
            var _r321_t6 = arguments;
            var r321_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r321_t6, 0);
            var _r321_t0 = [];
            var _r321_t1 = 0;
            while (_r321_t1 < r321_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r321_xn$flexarguments$2Lrc7uIe5[_r321_t1] instanceof r314_xn$NamedParameterPair$2Lrc9b)) _r321_t0.push(r321_xn$flexarguments$2Lrc7uIe5[_r321_t1]);
                _r321_t1 = _r321_t1 + 1;
            }
            var _r321_t2 = r321_xn$flexarguments$2Lrc7uIe5;
            var _r321_t3 = _r321_t2.length;
            var _r321_t4 = 0;
            while (_r321_t4 < _r321_t3) {
                _r321_t1 = _r321_t2[_r321_t4];
                if (_r321_t1 && _r321_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r321_t1.left === "df") r321_df = _r321_t1.right;
                if (_r321_t1 && _r321_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r321_t1.left === "fBarStraight") r321_fBarStraight = _r321_t1.right;
                if (_r321_t1 && _r321_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r321_t1.left === "top") r321_top = _r321_t1.right;
                if (_r321_t1 && _r321_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r321_t1.left === "sw") r321_sw = _r321_t1.right;
                _r321_t4 = _r321_t4 + 1;
            }
            var r321_df = r1_fallback(r321_df, _r321_t0[0]);
            var r321_fBarStraight = r1_fallback(r321_fBarStraight, _r321_t0[1]);
            var r321_top = r1_fallback(r321_top, _r321_t0[2]);
            var r321_sw = r1_fallback(r321_sw, _r321_t0[3]);
            return r314_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
                var _r328_t0, _r328_t1;
                r328_currentGlyph.include(r314_VShapeOutline(r321_df, r321_fBarStraight, r321_top, r321_sw), true, true);
                r328_currentGlyph.include(r314_FlipAround(r321_df.middle, r321_top / 2));
                return void 0;
            }));
        };
        r314_xn$ExportCapture$2Lrc4b(function () {
            var _r332_t0, _r332_t1;
            return {
                "LambdaShape": r314_LambdaShape
            };
        });
        var r314_LambdaShape = function () {
            var _r333_t5;
            var _r333_t6 = arguments;
            var r333_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r333_t6, 0);
            var _r333_t0 = [];
            var _r333_t1 = 0;
            while (_r333_t1 < r333_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r333_xn$flexarguments$2Lrc7uIe5[_r333_t1] instanceof r314_xn$NamedParameterPair$2Lrc9b)) _r333_t0.push(r333_xn$flexarguments$2Lrc7uIe5[_r333_t1]);
                _r333_t1 = _r333_t1 + 1;
            }
            var _r333_t2 = r333_xn$flexarguments$2Lrc7uIe5;
            var _r333_t3 = _r333_t2.length;
            var _r333_t4 = 0;
            while (_r333_t4 < _r333_t3) {
                _r333_t1 = _r333_t2[_r333_t4];
                if (_r333_t1 && _r333_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r333_t1.left === "df") r333_df = _r333_t1.right;
                if (_r333_t1 && _r333_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r333_t1.left === "fBarStraight") r333_fBarStraight = _r333_t1.right;
                if (_r333_t1 && _r333_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r333_t1.left === "slabKind") r333_slabKind = _r333_t1.right;
                if (_r333_t1 && _r333_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r333_t1.left === "top") r333_top = _r333_t1.right;
                if (_r333_t1 && _r333_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r333_t1.left === "sw") r333_sw = _r333_t1.right;
                _r333_t4 = _r333_t4 + 1;
            }
            var r333_df = r1_fallback(r333_df, _r333_t0[0]);
            var r333_fBarStraight = r1_fallback(r333_fBarStraight, _r333_t0[1]);
            var r333_slabKind = r1_fallback(r333_slabKind, _r333_t0[2]);
            var r333_top = r1_fallback(r333_top, _r333_t0[3]);
            var r333_sw = r1_fallback(r333_sw, _r333_t0[4]);
            return r314_union(r314_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
                var _r340_t0, _r340_t1;
                r340_currentGlyph.include(r314_VShape(r333_df, r333_fBarStraight, r333_top, r333_sw), true, true);
                r340_currentGlyph.include(r314_FlipAround(r333_df.middle, r333_top / 2));
                return void 0;
            })), r314_ASerifs(r333_df, r333_top, r333_sw, r333_slabKind));
        };
        var r314_LambdaHookLeftShape = function () {
            var _r344_t5;
            var _r344_t6 = arguments;
            var r344_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r344_t6, 0);
            var _r344_t0 = [];
            var _r344_t1 = 0;
            while (_r344_t1 < r344_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r344_xn$flexarguments$2Lrc7uIe5[_r344_t1] instanceof r314_xn$NamedParameterPair$2Lrc9b)) _r344_t0.push(r344_xn$flexarguments$2Lrc7uIe5[_r344_t1]);
                _r344_t1 = _r344_t1 + 1;
            }
            var _r344_t2 = r344_xn$flexarguments$2Lrc7uIe5;
            var _r344_t3 = _r344_t2.length;
            var _r344_t4 = 0;
            while (_r344_t4 < _r344_t3) {
                _r344_t1 = _r344_t2[_r344_t4];
                if (_r344_t1 && _r344_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r344_t1.left === "df") r344_df = _r344_t1.right;
                if (_r344_t1 && _r344_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r344_t1.left === "fBarStraight") r344_fBarStraight = _r344_t1.right;
                if (_r344_t1 && _r344_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r344_t1.left === "slabKind") r344_slabKind = _r344_t1.right;
                if (_r344_t1 && _r344_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r344_t1.left === "top") r344_top = _r344_t1.right;
                if (_r344_t1 && _r344_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r344_t1.left === "sw") r344_sw = _r344_t1.right;
                if (_r344_t1 && _r344_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r344_t1.left === "hookWidthOuter") r344_hookWidthOuter = _r344_t1.right;
                if (_r344_t1 && _r344_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r344_t1.left === "hookWidthInner") r344_hookWidthInner = _r344_t1.right;
                _r344_t4 = _r344_t4 + 1;
            }
            var r344_df = r1_fallback(r344_df, _r344_t0[0]);
            var r344_fBarStraight = r1_fallback(r344_fBarStraight, _r344_t0[1]);
            var r344_slabKind = r1_fallback(r344_slabKind, _r344_t0[2]);
            var r344_top = r1_fallback(r344_top, _r344_t0[3]);
            var r344_sw = r1_fallback(r344_sw, _r344_t0[4]);
            var r344_hookWidthOuter = r1_fallback(r344_hookWidthOuter, _r344_t0[5], r314_TailX / 3);
            var r344_hookWidthInner = r1_fallback(r344_hookWidthInner, _r344_t0[6], r314_TailX / 3 - r314_HSwToV(0.25 * r344_sw));
            return r314_union(r314_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r350_currentGlyph) {
                var _r350_t0, _r350_t1;
                r350_currentGlyph.include(r314_VHookRightShape(new r314_xn$NamedParameterPair$2Lrc9b("df", r344_df), new r314_xn$NamedParameterPair$2Lrc9b("fBarStraight", r344_fBarStraight), new r314_xn$NamedParameterPair$2Lrc9b("top", r344_top), new r314_xn$NamedParameterPair$2Lrc9b("sw", r344_sw), new r314_xn$NamedParameterPair$2Lrc9b("hookWidthOuter", r344_hookWidthOuter), new r314_xn$NamedParameterPair$2Lrc9b("hookWidthInner", r344_hookWidthInner)), true, true);
                r350_currentGlyph.include(r314_FlipAround(r344_df.middle, r344_top / 2));
                return void 0;
            })), r314_ASerifs(r344_df, r344_top, r344_sw, r1_maskOffBits(r344_slabKind, r314_xn$SLABLEFT$5sIl)));
        };
        var r314_LambdaHookRightShape = function () {
            var _r360_t5;
            var _r360_t6 = arguments;
            var r360_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r360_t6, 0);
            var _r360_t0 = [];
            var _r360_t1 = 0;
            while (_r360_t1 < r360_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r360_xn$flexarguments$2Lrc7uIe5[_r360_t1] instanceof r314_xn$NamedParameterPair$2Lrc9b)) _r360_t0.push(r360_xn$flexarguments$2Lrc7uIe5[_r360_t1]);
                _r360_t1 = _r360_t1 + 1;
            }
            var _r360_t2 = r360_xn$flexarguments$2Lrc7uIe5;
            var _r360_t3 = _r360_t2.length;
            var _r360_t4 = 0;
            while (_r360_t4 < _r360_t3) {
                _r360_t1 = _r360_t2[_r360_t4];
                if (_r360_t1 && _r360_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r360_t1.left === "df") r360_df = _r360_t1.right;
                if (_r360_t1 && _r360_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r360_t1.left === "fBarStraight") r360_fBarStraight = _r360_t1.right;
                if (_r360_t1 && _r360_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r360_t1.left === "slabKind") r360_slabKind = _r360_t1.right;
                if (_r360_t1 && _r360_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r360_t1.left === "top") r360_top = _r360_t1.right;
                if (_r360_t1 && _r360_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r360_t1.left === "sw") r360_sw = _r360_t1.right;
                if (_r360_t1 && _r360_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r360_t1.left === "hookWidthOuter") r360_hookWidthOuter = _r360_t1.right;
                if (_r360_t1 && _r360_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r360_t1.left === "hookWidthInner") r360_hookWidthInner = _r360_t1.right;
                _r360_t4 = _r360_t4 + 1;
            }
            var r360_df = r1_fallback(r360_df, _r360_t0[0]);
            var r360_fBarStraight = r1_fallback(r360_fBarStraight, _r360_t0[1]);
            var r360_slabKind = r1_fallback(r360_slabKind, _r360_t0[2]);
            var r360_top = r1_fallback(r360_top, _r360_t0[3]);
            var r360_sw = r1_fallback(r360_sw, _r360_t0[4]);
            var r360_hookWidthOuter = r1_fallback(r360_hookWidthOuter, _r360_t0[5], r314_TailX / 3);
            var r360_hookWidthInner = r1_fallback(r360_hookWidthInner, _r360_t0[6], r314_TailX / 3 - r314_HSwToV(0.25 * r360_sw));
            return r314_union(r314_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r366_currentGlyph) {
                var _r366_t0, _r366_t1;
                r366_currentGlyph.include(r314_VHookLeftShape(new r314_xn$NamedParameterPair$2Lrc9b("df", r360_df), new r314_xn$NamedParameterPair$2Lrc9b("fBarStraight", r360_fBarStraight), new r314_xn$NamedParameterPair$2Lrc9b("top", r360_top), new r314_xn$NamedParameterPair$2Lrc9b("sw", r360_sw), new r314_xn$NamedParameterPair$2Lrc9b("hookWidthOuter", r360_hookWidthOuter), new r314_xn$NamedParameterPair$2Lrc9b("hookWidthInner", r360_hookWidthInner)), true, true);
                r366_currentGlyph.include(r314_FlipAround(r360_df.middle, r360_top / 2));
                return void 0;
            })), r314_ASerifs(r360_df, r360_top, r360_sw, r1_maskOffBits(r360_slabKind, r314_xn$SLABRIGHT$5sIl)));
        };
        var r314_LambdaConfig = r1_SuffixCfg.weave({
            "straight": true,
            "curly": false
        }, {
            "serifless": r314_xn$SLABNONE$5sIl,
            "topSerifed": r314_xn$SLABTOP$5sIl,
            "baseSerifed": r1_bitOr(r314_xn$SLABLEFT$5sIl, r314_xn$SLABRIGHT$5sIl),
            "triSerifed": r1_bitOr(r314_xn$SLABTOP$5sIl, r314_xn$SLABLEFT$5sIl, r314_xn$SLABRIGHT$5sIl)
        });
        var _r314_t11 = Object.entries(r314_LambdaConfig)[Symbol.iterator]();
        var _r314_t12 = void 0;
        while (!(_r314_t12 = _r314_t11.next()).done) {
            _r314_t13 = _r314_t12.value;
            r314_suffix = _r314_t13[0];
            r314_fStraightBar = _r314_t13[1][0];
            r314_slabKind = _r314_t13[1][1];
            _r314_t13[1];
            (function () {
                r314_xn$GlyphSaveSink$2Lrc4b.save("grek/Lambda." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r380_currentGlyph) {
                    var _r380_t0, _r380_t1;
                    r380_currentGlyph.include(r314_MarkSet.capital());
                    r380_currentGlyph.include(r314_LambdaShape(new r314_xn$NamedParameterPair$2Lrc9b("df", r314_DivFrame(1)), new r314_xn$NamedParameterPair$2Lrc9b("fBarStraight", r314_fStraightBar), new r314_xn$NamedParameterPair$2Lrc9b("slabKind", r314_slabKind), new r314_xn$NamedParameterPair$2Lrc9b("top", r314_CAP), new r314_xn$NamedParameterPair$2Lrc9b("sw", r314_Stroke)));
                    return void 0;
                }));
                r314_xn$GlyphSaveSink$2Lrc4b.save("grek/smcpLambda." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r390_currentGlyph) {
                    var _r390_t0, _r390_t1;
                    r390_currentGlyph.include(r314_MarkSet.e());
                    r390_currentGlyph.include(r314_LambdaShape(new r314_xn$NamedParameterPair$2Lrc9b("df", r314_DivFrame(1)), new r314_xn$NamedParameterPair$2Lrc9b("fBarStraight", r314_fStraightBar), new r314_xn$NamedParameterPair$2Lrc9b("slabKind", r314_slabKind), new r314_xn$NamedParameterPair$2Lrc9b("top", r314_XH), new r314_xn$NamedParameterPair$2Lrc9b("sw", r314_Stroke)));
                    return void 0;
                }));
                r314_DefineSelectorGlyph("cyrl/el.BGR", r314_suffix, r314_DivFrame(1), "e");
                r314_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r400_currentGlyph) {
                    var _r400_t0, _r400_t1;
                    r400_currentGlyph.setWidth(0);
                    r400_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                    r314_xn$GlyphSaveSink$2Lrc4b.save("cyrl/el.BGR." + r314_suffix + ".straight", null, new r314_xn$Capture$2Lrc8.ForkGlyphProc(r400_currentGlyph, r314_LambdaShape(new r314_xn$NamedParameterPair$2Lrc9b("df", r314_DivFrame(1)), new r314_xn$NamedParameterPair$2Lrc9b("fBarStraight", r314_fStraightBar), new r314_xn$NamedParameterPair$2Lrc9b("slabKind", r1_bitOr(r314_slabKind, r314_xn$SLABSMALLCYRL$5sIl6)), new r314_xn$NamedParameterPair$2Lrc9b("top", r314_XH), new r314_xn$NamedParameterPair$2Lrc9b("sw", r314_Stroke))));
                    r314_xn$GlyphSaveSink$2Lrc4b.save("cyrl/el.BGR." + r314_suffix + ".tailed", null, new r314_xn$Capture$2Lrc8.ForkGlyphProc(r400_currentGlyph, r314_LambdaHookRightShape(new r314_xn$NamedParameterPair$2Lrc9b("df", r314_DivFrame(1)), new r314_xn$NamedParameterPair$2Lrc9b("fBarStraight", r314_fStraightBar), new r314_xn$NamedParameterPair$2Lrc9b("slabKind", r1_bitOr(r314_slabKind, r314_xn$SLABSMALLCYRL$5sIl6)), new r314_xn$NamedParameterPair$2Lrc9b("top", r314_XH), new r314_xn$NamedParameterPair$2Lrc9b("sw", r314_Stroke))));
                    return void 0;
                }));
                r314_xn$selectvariant$7Hrq("cyrl/el.BGR." + r314_suffix, new r314_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/el"));
                r314_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Yn." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r420_currentGlyph) {
                    var _r420_t0, _r420_t1;
                    r420_currentGlyph.include(r314_MarkSet.capDesc());
                    var r420_df = r420_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleM, 3));
                    var r420_vHeight = (r314_CAP - 0) * 0.875;
                    r420_currentGlyph.include(r314_xn$withtransform$5sIl(r314_ApparentTranslate(0, r314_CAP - r420_vHeight), r314_LambdaHookLeftShape(new r314_xn$NamedParameterPair$2Lrc9b("df", r420_df), new r314_xn$NamedParameterPair$2Lrc9b("fBarStraight", r314_fStraightBar), new r314_xn$NamedParameterPair$2Lrc9b("slabKind", r314_slabKind), new r314_xn$NamedParameterPair$2Lrc9b("top", r420_vHeight), new r314_xn$NamedParameterPair$2Lrc9b("sw", r420_df.mvs))));
                    r420_currentGlyph.include(r314_dispiro(r314_g4.down.start(r420_df.middle, r314_CAP, r314_widths.center.heading(r420_df.adviceThinnerStroke(6), r314_Downward)), r314_flat(r420_df.middle, 0, r314_widths.center.heading(r420_df.mvs, r314_Downward)), r314_curl(r420_df.middle, r314_Descender, r314_widths.center.heading(r420_df.mvs, r314_Downward))));
                    if (r1_maskBits(r314_slabKind, r314_xn$SLABRIGHT$5sIl)) r420_currentGlyph.include(r314_HSerif.mb(r420_df.middle, r314_Descender, r314_MidJutCenter - r314_HSwToV(0.5 * (r314_Stroke - r420_df.mvs)), r420_df.mvs));
                    return void 0;
                }));
                return r314_xn$GlyphSaveSink$2Lrc4b.save("cyrl/yn." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r433_currentGlyph) {
                    var _r433_t0, _r433_t1;
                    r433_currentGlyph.include(r314_MarkSet.p());
                    var r433_df = r433_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleT, 3));
                    r433_currentGlyph.include(r314_LambdaHookLeftShape(new r314_xn$NamedParameterPair$2Lrc9b("df", r433_df), new r314_xn$NamedParameterPair$2Lrc9b("fBarStraight", r314_fStraightBar), new r314_xn$NamedParameterPair$2Lrc9b("slabKind", r1_bitOr(r314_slabKind, r314_xn$SLABSMALLCYRL$5sIl6)), new r314_xn$NamedParameterPair$2Lrc9b("top", r314_XH), new r314_xn$NamedParameterPair$2Lrc9b("sw", r433_df.mvs)));
                    r433_currentGlyph.include(r314_dispiro(r314_g4.down.start(r433_df.middle, r314_XH, r314_widths.center.heading(r433_df.adviceThinnerStroke(6), r314_Downward)), r314_flat(r433_df.middle, 0, r314_widths.center.heading(r433_df.mvs, r314_Downward)), r314_curl(r433_df.middle, r314_Descender, r314_widths.center.heading(r433_df.mvs, r314_Downward))));
                    if (r1_maskBits(r314_slabKind, r314_xn$SLABRIGHT$5sIl) && !r314_para.isItalic) r433_currentGlyph.include(r314_HSerif.mb(r433_df.middle, r314_Descender, r314_MidJutCenter - r314_HSwToV(0.5 * (r314_Stroke - r433_df.mvs)), r433_df.mvs));
                    return void 0;
                }));
            })();
        }
        r314_xn$selectvariant$7Hrq("grek/Lambda", 923);
        r314_xn$linkreducedvariant$5sIl8("grek/Lambda/sansSerif", "grek/Lambda", r1_MathSansSerif);
        r314_xn$selectvariant$7Hrq("grek/smcpLambda", 7463, new r314_xn$NamedParameterPair$2Lrc9b("follow", "grek/Lambda"));
        r314_alias("cyrl/El.BGR", null, "grek/Lambda");
        r314_CreateSelectorVariants("cyrl/el.BGR", null, Object.keys(r314_LambdaConfig), new r314_xn$NamedParameterPair$2Lrc9b("follow", "grek/Lambda"));
        r314_xn$selectvariant$7Hrq("cyrl/yn", 42591, new r314_xn$NamedParameterPair$2Lrc9b("follow", "grek/Lambda"));
        r314_xn$selectvariant$7Hrq("cyrl/Yn", 42590, new r314_xn$NamedParameterPair$2Lrc9b("follow", "grek/Lambda"));
        r314_xn$ExportCapture$2Lrc4b(function () {
            var _r449_t0, _r449_t1;
            return {
                "DeltaShape": r314_DeltaShape
            };
        });
        var r314_DeltaShape = function () {
            var _r450_t5;
            var _r450_t6 = arguments;
            var r450_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r450_t6, 0);
            var _r450_t0 = [];
            var _r450_t1 = 0;
            while (_r450_t1 < r450_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r450_xn$flexarguments$2Lrc7uIe5[_r450_t1] instanceof r314_xn$NamedParameterPair$2Lrc9b)) _r450_t0.push(r450_xn$flexarguments$2Lrc7uIe5[_r450_t1]);
                _r450_t1 = _r450_t1 + 1;
            }
            var _r450_t2 = r450_xn$flexarguments$2Lrc7uIe5;
            var _r450_t3 = _r450_t2.length;
            var _r450_t4 = 0;
            while (_r450_t4 < _r450_t3) {
                _r450_t1 = _r450_t2[_r450_t4];
                if (_r450_t1 && _r450_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r450_t1.left === "df") r450_df = _r450_t1.right;
                if (_r450_t1 && _r450_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r450_t1.left === "top") r450_top = _r450_t1.right;
                if (_r450_t1 && _r450_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r450_t1.left === "bottom") r450_bottom = _r450_t1.right;
                if (_r450_t1 && _r450_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r450_t1.left === "sw") r450_sw = _r450_t1.right;
                if (_r450_t1 && _r450_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r450_t1.left === "fBarStraight") r450_fBarStraight = _r450_t1.right;
                _r450_t4 = _r450_t4 + 1;
            }
            var r450_df = r1_fallback(r450_df, _r450_t0[0]);
            var r450_top = r1_fallback(r450_top, _r450_t0[1]);
            var r450_bottom = r1_fallback(r450_bottom, _r450_t0[2]);
            var r450_sw = r1_fallback(r450_sw, _r450_t0[3]);
            var r450_fBarStraight = r1_fallback(r450_fBarStraight, _r450_t0[4]);
            var r450_shapeHeight = Math.abs(r450_top - r450_bottom);
            var r450_shift = Math.min(r450_top, r450_bottom);
            return r314_xn$withtransform$5sIl(r314_ApparentTranslate(0, r450_shift), r314_union(r314_LambdaShape(new r314_xn$NamedParameterPair$2Lrc9b("df", r450_df), new r314_xn$NamedParameterPair$2Lrc9b("fBarStraight", r450_fBarStraight), new r314_xn$NamedParameterPair$2Lrc9b("slabKind", 0), new r314_xn$NamedParameterPair$2Lrc9b("top", r450_shapeHeight), new r314_xn$NamedParameterPair$2Lrc9b("sw", r450_sw)), r314_intersection(r314_HBar.b(0, r450_df.width, 0, r450_sw), r314_LambdaMask(r450_df, r450_fBarStraight, r450_shapeHeight, r450_sw))));
        };
        var r314_DeltaConfig = {
            "straight": true,
            "curly": false
        };
        var _r314_t14 = _r1_t2(r314_DeltaConfig)[Symbol.iterator]();
        var _r314_t15 = void 0;
        while (!(_r314_t15 = _r314_t14.next()).done) {
            _r314_t16 = _r314_t15.value;
            r314_suffix = _r314_t16[0];
            r314_fBarStraight = _r314_t16[1];
            (function () {
                r314_xn$GlyphSaveSink$2Lrc4b.save("grek/Delta." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r467_currentGlyph) {
                    var _r467_t0, _r467_t1;
                    r467_currentGlyph.include(r314_MarkSet.capital());
                    r467_currentGlyph.include(r314_DeltaShape(new r314_xn$NamedParameterPair$2Lrc9b("df", r314_DivFrame(1)), new r314_xn$NamedParameterPair$2Lrc9b("fBarStraight", r314_fBarStraight), new r314_xn$NamedParameterPair$2Lrc9b("top", r314_CAP), new r314_xn$NamedParameterPair$2Lrc9b("bottom", 0), new r314_xn$NamedParameterPair$2Lrc9b("sw", r314_Stroke)));
                    return void 0;
                }));
                r314_xn$GlyphSaveSink$2Lrc4b.save("increment." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r477_currentGlyph) {
                    var _r477_t0, _r477_t1;
                    r477_currentGlyph.include(r314_MarkSet.capital());
                    r477_currentGlyph.include(r314_DeltaShape(new r314_xn$NamedParameterPair$2Lrc9b("df", r314_DivFrame(1)), new r314_xn$NamedParameterPair$2Lrc9b("fBarStraight", r314_fBarStraight), new r314_xn$NamedParameterPair$2Lrc9b("top", r314_CAP), new r314_xn$NamedParameterPair$2Lrc9b("bottom", 0), new r314_xn$NamedParameterPair$2Lrc9b("sw", r314_OperatorStroke)));
                    return void 0;
                }));
                r314_xn$GlyphSaveSink$2Lrc4b.save("increment.aplForm." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r487_currentGlyph) {
                    var _r487_t0, _r487_t1;
                    r487_currentGlyph.include(r314_MarkSet.oper());
                    r487_currentGlyph.include(r314_DeltaShape(new r314_xn$NamedParameterPair$2Lrc9b("df", r314_DivFrame(1)), new r314_xn$NamedParameterPair$2Lrc9b("fBarStraight", r314_fBarStraight), new r314_xn$NamedParameterPair$2Lrc9b("top", r314_OperTop), new r314_xn$NamedParameterPair$2Lrc9b("bottom", r314_OperBot), new r314_xn$NamedParameterPair$2Lrc9b("sw", r314_OperatorStroke)));
                    return void 0;
                }));
                return r314_xn$GlyphSaveSink$2Lrc4b.save("increment.aplThin." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r497_currentGlyph) {
                    var _r497_t0, _r497_t1;
                    r497_currentGlyph.include(r314_MarkSet.oper());
                    r497_currentGlyph.include(r314_DeltaShape(new r314_xn$NamedParameterPair$2Lrc9b("df", r314_DivFrame(1)), new r314_xn$NamedParameterPair$2Lrc9b("fBarStraight", r314_fBarStraight), new r314_xn$NamedParameterPair$2Lrc9b("top", r314_OperTop), new r314_xn$NamedParameterPair$2Lrc9b("bottom", r314_OperBot), new r314_xn$NamedParameterPair$2Lrc9b("sw", r314_AdviceStroke(3.75))));
                    return void 0;
                }));
            })();
        }
        var r314_CodeNonApl = function (r505_u) {
            var _r505_t0, _r505_t1;
            return r314_para.variantSelector["__enableAplForm"] === "enable" ? null : r505_u;
        };
        var r314_CodeApl = function (r506_u) {
            var _r506_t0, _r506_t1;
            return r314_para.variantSelector["__enableAplForm"] === "enable" ? r506_u : null;
        };
        r314_xn$selectvariant$7Hrq("grek/Delta", 916);
        r314_xn$selectvariant$7Hrq("increment", r314_CodeNonApl(8710), new r314_xn$NamedParameterPair$2Lrc9b("follow", "grek/Delta"));
        r314_xn$selectvariant$7Hrq("increment.aplForm", r314_CodeApl(8710), new r314_xn$NamedParameterPair$2Lrc9b("follow", "grek/Delta"));
        r314_xn$selectvariant$7Hrq("increment.aplThin", new r314_xn$NamedParameterPair$2Lrc9b("follow", "grek/Delta"));
        r314_CreateTurnedLetter("nabla", r314_CodeNonApl(8711), "increment", r314_HalfAdvance, r314_CAP / 2);
        r314_CreateTurnedLetter("nabla.aplForm", r314_CodeApl(8711), "increment.aplForm", r314_HalfAdvance, r314_SymbolMid);
        r314_CreateTurnedLetter("nabla.aplThin", null, "increment.aplThin", r314_HalfAdvance, r314_SymbolMid);
        return r314_xn$deriveglyphs$7Hrq("cyrl/De.BGR", null, "grek/Delta", function (r510_src, r510_gr) {
            var _r510_t0, _r510_t1;
            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r512_currentGlyph) {
                var _r512_t0, _r512_t1;
                r512_currentGlyph.include(r314_xn$referglyph$1aao(r510_src), r314_AS_BASE, r314_ALSO_METRICS);
                var r512_descenderOverflow = r314_SLAB ? r314_SideJut : (r314_RightSB - r314_SB) * 0.075;
                var r512_bottomExtension = -r314_LongVJut + r314_QuarterStroke;
                r512_currentGlyph.include(r314_ExtendBelowBaseAnchors(r512_bottomExtension));
                r512_currentGlyph.include(r314_HBar.b(r314_SB - r512_descenderOverflow, r314_RightSB + r512_descenderOverflow, 0));
                r512_currentGlyph.include(r314_VBar.l(r314_SB - r512_descenderOverflow, r512_bottomExtension, r314_TINY, r314_VJutStroke));
                r512_currentGlyph.include(r314_VBar.r(r314_RightSB + r512_descenderOverflow, r512_bottomExtension, r314_TINY, r314_VJutStroke));
                return void 0;
            });
        });
    });
    return void 0;
});


