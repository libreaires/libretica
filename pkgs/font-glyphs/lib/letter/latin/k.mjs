"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
import * as _s0_t2 from "@iosevka/util/mask-bit";
var _s0_t3;
export {_s0_t3 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t11;
var _r1_t2 = function _r1_t11(r490_t) {
    var r490_n, r490_i, r490_a, _r490_t3, _r490_t4, _r490_t5, _r490_t6, _r490_t7, _r490_t8, _r490_t9, _r490_t10, _r490_t11, _r490_t12, _r490_t13, _r490_t14, _r490_t15, _r490_t16, _r490_t17, _r490_t18, _r490_t19, _r490_t20, _r490_t21, _r490_t22, _r490_t23, _r490_t24, _r490_t25, _r490_t26;
    var _r490_t0 = function () {
        _r490_t7 = function (_r490_t8) {
            _r490_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r490_t8
            };
        };
        _r490_t9 = r490_t instanceof Array;
        if (_r490_t9) {
            _r490_t10 = r490_n = r490_t.length;
            _r490_t11 = r490_i = 0;
            _r490_t12 = function (_r490_t14) {
                return _r490_t7(_r490_t14);
            };
            _r490_t13 = function (_r490_t15) {
                _r490_t16 = r490_i < r490_n;
                if (_r490_t16) {
                    _r490_t0 = function (_r490_t17) {
                        return _r490_t13(r490_i = r490_i + 1);
                    };
                    return {
                        "value": [r490_i, r490_t[r490_i]],
                        "done": false
                    };
                } else return _r490_t12(_r490_t15);
            };
            return _r490_t13();
        } else {
            _r490_t18 = r490_a = Object.keys(r490_t);
            _r490_t19 = r490_n = r490_a.length;
            _r490_t20 = r490_i = 0;
            _r490_t21 = function (_r490_t23) {
                return _r490_t7(_r490_t23);
            };
            _r490_t22 = function (_r490_t24) {
                _r490_t25 = r490_i < r490_n;
                if (_r490_t25) {
                    _r490_t0 = function (_r490_t26) {
                        return _r490_t22(r490_i = r490_i + 1);
                    };
                    return {
                        "value": [r490_a[r490_i], r490_t[r490_a[r490_i]]],
                        "done": false
                    };
                } else return _r490_t21(_r490_t24);
            };
            return _r490_t22();
        }
    };
    var _r490_t1 = function (x) {
        try {
            return _r490_t0(x);
        } catch (ex) {
            return _r490_t2(ex);
        }
    };
    var _r490_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t11) _r490_t3 = this; else {
        _r490_t4 = function () {
            void 0;
        };
        _r490_t4.prototype = _r1_t11.prototype;
        _r490_t3 = new _r490_t4();
    }
    _r490_t3[Symbol.iterator] = function () {
        return _r490_t3;
    };
    _r490_t3.next = _r490_t1;
    _r490_t3.throw = function (x) {
        return _r490_t2(x);
    };
    return _r490_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
var r1_HintClass = _r1_t9.HintClass;
var _r1_t10 = _s0_t2;
var r1_maskBit = _r1_t10.maskBit;
var r1_maskOffBit = _r1_t10.maskOffBit;
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
    r313_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r313_xn$Capture_Ext$2Lrc2b, "Letter-Latin-K", function (r314_xn$Capture$2Lrc8, r314_xn$ExportCapture$2Lrc4b) {
        var r314_suffix, r314_LegsImpl, r314_slabLT, r314_slabLB, r314_slabLegs, _r314_t15, _r314_t18, _r314_t20, _r314_t21, _r314_t22, _r314_tag23, _r314_t24, _r314_tag25, _r314_t26, _r314_tag27;
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
        var r314_HalfUPM = _r314_t1.HalfUPM;
        var r314_Width = _r314_t1.Width;
        var r314_SB = _r314_t1.SB;
        var r314_CAP = _r314_t1.CAP;
        var r314_XH = _r314_t1.XH;
        var r314_Ascender = _r314_t1.Ascender;
        var r314_Descender = _r314_t1.Descender;
        var r314_Translate = _r314_t1.Translate;
        var r314_TanSlope = _r314_t1.TanSlope;
        var r314_HVContrast = _r314_t1.HVContrast;
        var r314_HSwToV = _r314_t1.HSwToV;
        var r314_VSwToH = _r314_t1.VSwToH;
        var r314_Upward = _r314_t1.Upward;
        var r314_Downward = _r314_t1.Downward;
        var r314_Rightward = _r314_t1.Rightward;
        var r314_Leftward = _r314_t1.Leftward;
        var r314_O = _r314_t1.O;
        var r314_OX = _r314_t1.OX;
        var r314_Hook = _r314_t1.Hook;
        var r314_HookX = _r314_t1.HookX;
        var r314_DiagTailAngle = _r314_t1.DiagTailAngle;
        var r314_AdviceStroke = _r314_t1.AdviceStroke;
        var r314_AdviceStroke2 = _r314_t1.AdviceStroke2;
        var r314_Stroke = _r314_t1.Stroke;
        var r314_HalfStroke = _r314_t1.HalfStroke;
        var r314_QuarterStroke = _r314_t1.QuarterStroke;
        var r314_Jut = _r314_t1.Jut;
        var r314_MidJutSide = _r314_t1.MidJutSide;
        var r314_VJut = _r314_t1.VJut;
        var r314_LongVJut = _r314_t1.LongVJut;
        var r314_VJutStroke = _r314_t1.VJutStroke;
        var r314_SLAB = _r314_t1.SLAB;
        var r314_RightSB = _r314_t1.RightSB;
        var r314_Middle = _r314_t1.Middle;
        var r314_SideJut = _r314_t1.SideJut;
        var r314_ShoulderFine = _r314_t1.ShoulderFine;
        var r314_TightBendInnerRadius = _r314_t1.TightBendInnerRadius;
        var r314_StrokeWidthBlend = _r314_t1.StrokeWidthBlend;
        var r314_ArchDepthB = _r314_t1.ArchDepthB;
        var r314_xn$VERYFAR$5sIl = _r314_t1["VERY-FAR"];
        var r314_TINY = _r314_t1.TINY;
        var _r314_t2 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_g4 = _r314_t2.g4;
        var r314_corner = _r314_t2.corner;
        var r314_flat = _r314_t2.flat;
        var r314_curl = _r314_t2.curl;
        var r314_end = _r314_t2.end;
        var r314_straight = _r314_t2.straight;
        var r314_widths = _r314_t2.widths;
        var r314_heading = _r314_t2.heading;
        var r314_bezControls = _r314_t2.bezControls;
        var r314_quadControls = _r314_t2.quadControls;
        var r314_archv = _r314_t2.archv;
        var r314_arcvh = _r314_t2.arcvh;
        var r314_dispiro = _r314_t2.dispiro;
        var r314_xn$spirooutline$1aao = _r314_t2["spiro-outline"];
        var _r314_t3 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_xn$decor$0cao = _r314_t3["decor@"];
        var r314_xn$decor$0cao1 = _r314_t3["decor@@"];
        var r314_xn$decor$0cao11 = _r314_t3["decor@@@"];
        var _r314_t4 = r314_xn$Capture$2Lrc8.BooleFns;
        var r314_union = _r314_t4.union;
        var r314_intersection = _r314_t4.intersection;
        var r314_difference = _r314_t4.difference;
        var _r314_t5 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r314_xn$noshape$3cah = _r314_t5["no-shape"];
        var r314_tagged = _r314_t5.tagged;
        var r314_Rect = _r314_t5.Rect;
        var r314_HalfRectTriangle = _r314_t5.HalfRectTriangle;
        var r314_HSerif = _r314_t5.HSerif;
        var r314_VSerif = _r314_t5.VSerif;
        var r314_DiagCorDs = _r314_t5.DiagCorDs;
        var r314_HBar = _r314_t5.HBar;
        var r314_HOverlayBar = _r314_t5.HOverlayBar;
        var r314_VBar = _r314_t5.VBar;
        var r314_Arch = _r314_t5.Arch;
        var r314_FlipAround = _r314_t5.FlipAround;
        var r314_PointingTo = _r314_t5.PointingTo;
        var r314_ExtLineCenter = _r314_t5.ExtLineCenter;
        var _r314_t6 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r314_xn$referglyph$1aao = _r314_t6["refer-glyph"];
        var r314_xn$selectvariant$7Hrq = _r314_t6["select-variant"];
        var r314_xn$linkreducedvariant$5sIl8 = _r314_t6["link-reduced-variant"];
        var r314_xn$aliasreducedvariant$1aao8 = _r314_t6["alias-reduced-variant"];
        var r314_xn$derivemultipartglyphs$7Hrq65 = _r314_t6["derive-multi-part-glyphs"];
        var r314_xn$derivecomposites$7Hrq = _r314_t6["derive-composites"];
        var r314_alias = _r314_t6.alias;
        var r314_HalfAdvance = _r314_t6.HalfAdvance;
        var _r314_t7 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r314_markExtend = _r314_t7.markExtend;
        var _r314_t8 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Above"].resolve();
        var r314_aboveMarkMid = _r314_t8.aboveMarkMid;
        var _r314_t9 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r314_ExtendBelowBaseAnchors = _r314_t9.ExtendBelowBaseAnchors;
        var r314_LeaningAnchor = _r314_t9.LeaningAnchor;
        var _r314_t10 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r314_CreateTurnedLetter = _r314_t10.CreateTurnedLetter;
        var _r314_t11 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r314_DiagTail = _r314_t11.DiagTail;
        var r314_CyrDescender = _r314_t11.CyrDescender;
        var _r314_t12 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r314_LetterBarOverlay = _r314_t12.LetterBarOverlay;
        var r314_PalatalHook = _r314_t12.PalatalHook;
        var r314_TopHook = _r314_t12.TopHook;
        var r314_KBalance = function (r323_slabLT, r323_fStraightBar) {
            var _r323_t0, _r323_t1;
            return r323_fStraightBar ? r314_Width / 32 : 0;
        };
        var r314_KBalanceRight = function (r324_slabLegs, r324_fStraightBar) {
            var _r324_t0, _r324_t1;
            return r324_slabLegs ? 0 : r324_fStraightBar ? r314_Width / 32 : 0;
        };
        var r314_KOvershootX = function (r325_slabLegs, r325_fStraightBar, r325_top, r325_swRef) {
            var _r325_t0, _r325_t1;
            return r325_fStraightBar ? ((r325_slabLegs ? 0 : -4) * r314_OX - r325_swRef / 3) * (r314_XH / r325_top) : 0;
        };
        var r314_HasRtSerif = function (r326_mode) {
            var _r326_t0, _r326_t1;
            return r1_maskBit(r326_mode, 1);
        };
        var r314_HasRbSerif = function (r327_mode) {
            var _r327_t0, _r327_t1;
            return r1_maskBit(r327_mode, 0);
        };
        var r314_HasFullSerif = function (r328_mode) {
            var _r328_t0, _r328_t1;
            return r1_maskBit(r328_mode, 2);
        };
        var r314_KLegSlabs = function () {
            var _r330_t5;
            var _r330_t6 = arguments;
            var r330_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r330_t6, 0);
            var _r330_t0 = [];
            var _r330_t1 = 0;
            while (_r330_t1 < r330_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r330_xn$flexarguments$2Lrc7uIe5[_r330_t1] instanceof r314_xn$NamedParameterPair$2Lrc9b)) _r330_t0.push(r330_xn$flexarguments$2Lrc7uIe5[_r330_t1]);
                _r330_t1 = _r330_t1 + 1;
            }
            var _r330_t2 = r330_xn$flexarguments$2Lrc7uIe5;
            var _r330_t3 = _r330_t2.length;
            var _r330_t4 = 0;
            while (_r330_t4 < _r330_t3) {
                _r330_t1 = _r330_t2[_r330_t4];
                if (_r330_t1 && _r330_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r330_t1.left === "mode") r330_mode = _r330_t1.right;
                if (_r330_t1 && _r330_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r330_t1.left === "fStraightBar") r330_fStraightBar = _r330_t1.right;
                if (_r330_t1 && _r330_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r330_t1.left === "top") r330_top = _r330_t1.right;
                if (_r330_t1 && _r330_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r330_t1.left === "left") r330_left = _r330_t1.right;
                if (_r330_t1 && _r330_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r330_t1.left === "right") r330_right = _r330_t1.right;
                if (_r330_t1 && _r330_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r330_t1.left === "swRef") r330_swRef = _r330_t1.right;
                if (_r330_t1 && _r330_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r330_t1.left === "swSerif") r330_swSerif = _r330_t1.right;
                if (_r330_t1 && _r330_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r330_t1.left === "attachment") r330_attachment = _r330_t1.right;
                if (_r330_t1 && _r330_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r330_t1.left === "maskRT") r330_maskRT = _r330_t1.right;
                if (_r330_t1 && _r330_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r330_t1.left === "maskRB") r330_maskRB = _r330_t1.right;
                _r330_t4 = _r330_t4 + 1;
            }
            var r330_mode = r1_fallback(r330_mode, _r330_t0[0], 0);
            var r330_fStraightBar = r1_fallback(r330_fStraightBar, _r330_t0[1], false);
            var r330_top = r1_fallback(r330_top, _r330_t0[2], r314_XH);
            var r330_left = r1_fallback(r330_left, _r330_t0[3], r314_SB);
            var r330_right = r1_fallback(r330_right, _r330_t0[4], r314_RightSB);
            var r330_swRef = r1_fallback(r330_swRef, _r330_t0[5], r314_Stroke);
            var r330_swSerif = r1_fallback(r330_swSerif, _r330_t0[6], r330_swRef);
            var r330_attachment = r1_fallback(r330_attachment, _r330_t0[7], null);
            var r330_maskRT = r1_fallback(r330_maskRT, _r330_t0[8], r314_xn$noshape$3cah);
            var r330_maskRB = r1_fallback(r330_maskRB, _r330_t0[9], r314_xn$noshape$3cah);
            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r335_currentGlyph) {
                var _r335_t0, _r335_t1;
                var r335_ox = r314_KOvershootX(r330_mode, true, r330_top, r330_swRef);
                var r335_kshRight = r330_right + r314_KBalanceRight(true, r330_fStraightBar);
                var r335_sideJutAdj = r335_ox + r314_HSwToV(r330_swRef);
                var r335_slabIsFull = r314_HasFullSerif(r330_mode);
                if (r314_HasRtSerif(r330_mode)) r335_currentGlyph.include(r314_tagged("serifRT", r335_slabIsFull ? r314_union(r314_HSerif.rt(r335_kshRight - r335_sideJutAdj, r330_top, r314_SideJut + r335_sideJutAdj, r330_swSerif), r314_HSerif.lt(r335_kshRight - r335_sideJutAdj, r330_top, r314_SideJut, r330_swSerif)) : r314_difference(r314_HSerif.rt(r335_kshRight - r335_sideJutAdj, r330_top, r314_SideJut + r335_sideJutAdj, r330_swSerif), r330_maskRT())));
                if (r314_HasRbSerif(r330_mode)) r335_currentGlyph.include(r314_tagged("serifRB", r335_slabIsFull ? r314_union(r314_HSerif.rb(r335_kshRight - r335_sideJutAdj, 0, r314_SideJut + r335_sideJutAdj, r330_swSerif), r314_HSerif.lb(r335_kshRight - r335_sideJutAdj, 0, r314_SideJut, r330_swSerif)) : r314_difference(r314_HSerif.rb(r335_kshRight - r335_sideJutAdj, 0, r314_SideJut + r335_sideJutAdj, r330_swSerif), r330_maskRB())));
                if (r330_attachment) r335_currentGlyph.include(r314_difference(r330_attachment.rSideJut(new r314_xn$NamedParameterPair$2Lrc9b("x", r335_kshRight - r335_sideJutAdj), new r314_xn$NamedParameterPair$2Lrc9b("y", 0), new r314_xn$NamedParameterPair$2Lrc9b("jut", r314_Jut + r335_sideJutAdj)), r330_maskRB()));
                return void 0;
            });
        };
        var r314_KLegs = (function () {
            var r344_Straight, r344_Symmetric, r344_Curly, r344_Cursive, r344_CursiveTailed;
            var r344_exports = {};
            r344_exports.Straight = r344_Straight = function (r352_fHookRight, r352_left, r352_right, r352_stroke, r352_top, r352_slabLT, r352_slabLegs, r352_attachment) {
                var _r352_t0, _r352_t1;
                return new r314_xn$Capture$2Lrc8.GlyphProc(function (r354_currentGlyph) {
                    var r354_kHookRightMix, _r354_t0, _r354_t1;
                    var r354_fine = r314_AdviceStroke(3.5) * (r352_stroke / r314_Stroke);
                    var r354_ox = r314_KOvershootX(r352_slabLegs, true, r352_top, r352_stroke);
                    var r354_kshLeft = r352_left + r314_KBalance(r352_slabLT, true);
                    var r354_kshRightBot = r352_right + r314_KBalanceRight(r352_slabLegs, true);
                    var r354_kshRightTop = r352_fHookRight ? r354_kshRightBot - r314_HookX * 0.5 + r314_HSwToV(0.5 * r352_stroke) : r354_kshRightBot;
                    var r354_yAttach1 = r1_mix(0, r352_top, 0.42) - r352_stroke;
                    var r354_yAttach2 = r1_mix(0, r352_top, 0.72) + r352_stroke;
                    r354_currentGlyph.setBaseAnchor("overlay", r1_mix(r352_left, r352_right, 0.5), r352_top / 2);
                    r354_currentGlyph.setBaseAnchor("strike", r1_mix(r352_left, r352_right, 0.5), r352_top / 2);
                    r354_currentGlyph.setBaseAnchor("trailing", r354_kshRightBot - r354_ox, 0);
                    var r354_kshRightSerifs = r352_right + r314_KBalanceRight(true, true);
                    var r354_TopMask = {
                        "forStroke": function (r358_offset) {
                            var _r358_t0, _r358_t1;
                            return r314_Rect(r352_top, 0, r354_kshLeft, r314_HasRtSerif(r352_slabLegs) ? r354_kshRightSerifs + r358_offset + r314_SideJut - r314_TanSlope * r314_Stroke : r314_xn$VERYFAR$5sIl);
                        },
                        "forSerifs": function () {
                            var _r359_t0, _r359_t1;
                            return r314_intersection(r354_TopMask.forStroke(-0.1), r314_HalfRectTriangle(r354_kshRightTop - r354_ox - r314_TINY, r352_top, r354_kshLeft + r352_stroke - r314_TINY, r354_yAttach1));
                        }
                    };
                    var r354_BottomMask = {
                        "forStroke": function (r360_offset) {
                            var _r360_t0, _r360_t1;
                            return r314_Rect(r352_top, 0, r354_kshLeft, r314_HasRbSerif(r352_slabLegs) ? r354_kshRightSerifs + r360_offset + r314_SideJut + r314_TanSlope * r314_Stroke : r314_xn$VERYFAR$5sIl);
                        },
                        "forSerifs": function () {
                            var _r361_t0, _r361_t1;
                            return r314_HalfRectTriangle(r354_kshRightBot - r354_ox - r314_TINY, 0, r354_kshLeft + r352_stroke - r314_TINY, r354_yAttach2);
                        }
                    };
                    if (r352_fHookRight) {
                        r354_kHookRightMix = 0.5;
                        if (r352_fHookRight) r354_currentGlyph.include(r314_dispiro(r314_widths.rhs(r352_stroke), r314_straight.left.start(r354_kshRightBot + (r314_HasRtSerif(r352_slabLegs) ? r314_SideJut : 0) - r314_TanSlope * r352_stroke, r352_top - r352_stroke), r314_flat(r1_mix(r354_kshRightTop - r354_ox, r354_kshLeft + r352_stroke, r354_kHookRightMix), r1_mix(r352_top, r354_yAttach1, r354_kHookRightMix), r314_widths.rhs(r1_mix(r352_stroke, r354_fine, r354_kHookRightMix))), r314_curl(r354_kshLeft + r352_stroke, r354_yAttach1, r314_widths.rhs(r354_fine))));
                    } else {
                        r354_currentGlyph.setBaseAnchor("armOverlay", r1_mix(r354_kshLeft, r354_kshRightTop, r314_StrokeWidthBlend(0.5, 0.65)), r1_mix(r354_yAttach1, r352_top, r314_StrokeWidthBlend(0.5, 0.7)));
                        r354_currentGlyph.include(r314_intersection(r354_TopMask.forStroke(0), r314_dispiro(r314_widths.rhs(r352_stroke), r314_flat(r354_kshRightTop - r354_ox, r352_top), r314_curl(r354_kshLeft + r352_stroke, r354_yAttach1, r314_widths.rhs(r354_fine)))));
                    }
                    r354_currentGlyph.setBaseAnchor("legOverlay", r1_mix(r354_kshLeft, r354_kshRightBot, r314_StrokeWidthBlend(0.5, 0.65)), r1_mix(r354_yAttach2, 0, r314_StrokeWidthBlend(0.5, 0.7)));
                    r354_currentGlyph.include(r314_intersection(r354_BottomMask.forStroke(-0.1), r314_xn$spirooutline$1aao(r314_corner(r354_kshLeft + r352_stroke, 0), r314_corner(r354_kshLeft + r352_stroke, r354_yAttach1 + 1), r314_corner(r354_kshRightTop - r354_ox - r314_TINY, r352_top), r314_corner(r354_kshRightBot - r354_ox, r352_top), r314_corner(r354_kshRightBot - r354_ox, 0)), r314_dispiro(r314_flat(r354_kshRightBot - r354_ox, 0, r314_widths.lhs(r352_stroke)), r314_curl(r354_kshLeft + r352_stroke, r354_yAttach2, r314_widths.lhs(r354_fine)))));
                    r354_currentGlyph.include(r314_KLegSlabs(new r314_xn$NamedParameterPair$2Lrc9b("mode", r352_slabLegs), new r314_xn$NamedParameterPair$2Lrc9b("top", r352_top), new r314_xn$NamedParameterPair$2Lrc9b("left", r352_left), new r314_xn$NamedParameterPair$2Lrc9b("right", r352_right), new r314_xn$NamedParameterPair$2Lrc9b("swRef", r352_stroke), new r314_xn$NamedParameterPair$2Lrc9b("fStraightBar", true), new r314_xn$NamedParameterPair$2Lrc9b("attachment", r352_attachment), new r314_xn$NamedParameterPair$2Lrc9b("maskRT", r354_TopMask.forSerifs), new r314_xn$NamedParameterPair$2Lrc9b("maskRB", r354_BottomMask.forSerifs)));
                    return void 0;
                });
            };
            r344_exports.Symmetric = r344_Symmetric = function (r378_leadGap, r378_hookDepth) {
                var _r378_t0, _r378_t1;
                return function (r379_fHookRight, r379_left, r379_right, r379_stroke, r379_top, r379_slabLT, r379_slabLegs, r379_attachment) {
                    var _r379_t0, _r379_t1;
                    return new r314_xn$Capture$2Lrc8.GlyphProc(function (r381_currentGlyph) {
                        var r381_kHookRightMix, r381_xRef, _r381_t0, _r381_t1;
                        var r381_fine = r314_AdviceStroke(r378_leadGap ? 3.5 : 3) * (r379_stroke / r314_Stroke);
                        var r381_ox = r314_KOvershootX(r379_slabLegs, true, r379_top, r379_stroke);
                        var r381_kshLeft = r379_left + r314_KBalance(r379_slabLT, true);
                        var r381_kshRight = r379_right + r314_KBalanceRight(r379_slabLegs, true);
                        var r381_kshRightHookRight = r381_kshRight - r314_HookX * 0.5 + r314_HSwToV(0.5 * r379_stroke);
                        var r381_xAttach = r381_kshLeft + r314_HSwToV(r379_stroke) + (r378_leadGap || r381_fine);
                        var r381_yAttach = r1_mix(0, r379_top, r378_leadGap ? 0.42 : 0.49) - r379_stroke * (r378_leadGap ? +1 : -0.1);
                        var r381_coYAttach = r379_top - r381_yAttach;
                        r381_currentGlyph.setBaseAnchor("overlay", r1_mix(r379_left, r379_right, 0.5), r379_top / 2);
                        r381_currentGlyph.setBaseAnchor("strike", r1_mix(r379_left, r379_right, 0.5), r379_top / 2);
                        if (!r378_hookDepth) r381_currentGlyph.setBaseAnchor("trailing", r381_kshRight - r381_ox, 0);
                        var r381_StrokeMask = function (r385_fTop, r385_t, r385_b, r385_offset) {
                            var _r385_t0, _r385_t1;
                            return r314_Rect(r385_t, r385_b, r381_kshLeft, (r385_fTop ? r314_HasRtSerif(r379_slabLegs) : r314_HasRbSerif(r379_slabLegs)) ? r381_kshRight + r385_offset : r314_xn$VERYFAR$5sIl);
                        };
                        if (r379_fHookRight) {
                            r381_kHookRightMix = 0.5;
                            r381_currentGlyph.include(r314_tagged("strokeRT", r314_intersection(r314_Rect(r379_top, 0.5 * r379_top, r381_kshLeft, r314_xn$VERYFAR$5sIl), r314_dispiro(r314_widths.rhs(r379_stroke), r314_straight.left.start(r381_kshRight + (r314_HasRtSerif(r379_slabLegs) ? r314_SideJut : 0) - r314_TanSlope * r379_stroke, r379_top - r379_stroke), r314_flat(r1_mix(r381_kshRightHookRight - r381_ox, r381_xAttach, r381_kHookRightMix), r1_mix(r379_top, r381_yAttach, r381_kHookRightMix), r314_widths.rhs(r1_mix(r379_stroke, r381_fine, r381_kHookRightMix))), r314_curl(r1_mix(r381_kshRightHookRight - r381_ox, r381_xAttach, 2), r1_mix(r379_top, r381_yAttach, 2), r314_widths.rhs(r381_fine))))));
                        } else {
                            r381_xRef = r1_linreg(r381_yAttach, r381_xAttach, r379_top, r381_kshRight, r1_mix(0, r379_top, 0.75));
                            r381_currentGlyph.setBaseAnchor("armOverlay", r381_xRef - r314_HSwToV(r314_HalfStroke), r1_mix(0, r379_top, 0.75));
                            r381_currentGlyph.include(r314_tagged("strokeRT", r314_intersection(r381_StrokeMask(true, r379_top, 0.5 * r379_top, 0), r314_dispiro(r314_widths.rhs(r379_stroke), r314_flat(r381_kshRight - r381_ox, r379_top), r314_curl(r1_mix(r381_kshRight - r381_ox, r381_xAttach, 2), r1_mix(r379_top, r381_yAttach, 2), r314_widths.rhs(r381_fine))))));
                        }
                        if (r378_hookDepth) {
                            r381_currentGlyph.include(r314_ExtendBelowBaseAnchors(r378_hookDepth));
                            r381_currentGlyph.include(r314_tagged("strokeRB", r314_dispiro(r314_flat(r381_kshLeft, 0.5 * r379_top + r379_stroke / 2, r314_widths.rhs.heading(r379_stroke, r314_Rightward)), r314_curl(r1_mix(r381_kshLeft, r379_right, 0.5), 0.5 * r379_top + r379_stroke / 2), r314_archv(), r314_flat(r379_right, Math.max(0.5 * r379_top - r314_ArchDepthB, r378_hookDepth + r314_Hook + r314_TINY) + r379_stroke / 2), r314_curl(r379_right, r378_hookDepth + r314_Hook + r379_stroke / 2), r314_arcvh(), r314_straight.left.end(r379_right - r314_HookX - r314_HSwToV(0.5 * r379_stroke), r378_hookDepth))));
                        } else {
                            r381_xRef = r1_linreg(r381_coYAttach, r381_xAttach, 0, r381_kshRight, r1_mix(0, r379_top, 0.25));
                            r381_currentGlyph.setBaseAnchor("legOverlay", r381_xRef - r314_HSwToV(r314_HalfStroke), r1_mix(0, r379_top, 0.25));
                            r381_currentGlyph.include(r314_tagged("strokeRB", r314_intersection(r381_StrokeMask(false, 0.5 * r379_top, 0, 0), r314_dispiro(r314_flat(r381_kshRight - r381_ox, 0, r314_widths.lhs(r379_stroke)), r314_curl(r1_mix(r381_kshRight - r381_ox, r381_xAttach, 2), r1_mix(0, r381_coYAttach, 2), r314_widths.lhs(r381_fine))))));
                            if (r378_leadGap) r381_currentGlyph.include(r314_intersection(r314_HBar.m(r381_kshLeft, 2 * r314_Width, 0.5 * r379_top, r379_stroke), r314_union(r314_Rect(r379_top, 0, r381_kshLeft, r381_xAttach), r314_xn$spirooutline$1aao(r314_corner((r379_fHookRight ? r381_kshRightHookRight : r381_kshRight) - r381_ox - 1, r379_top), r314_corner(r381_xAttach - 1, r381_yAttach), r314_corner(r381_xAttach - 1, r379_top)), r314_xn$spirooutline$1aao(r314_corner(r381_kshRight - r381_ox - 1, 0), r314_corner(r381_xAttach - 1, r381_coYAttach), r314_corner(r381_xAttach - 1, 0)))));
                        }
                        var r381_TopSerifMask = function () {
                            var _r394_t0, _r394_t1;
                            return r314_intersection(r381_StrokeMask(true, r379_top, 0.5 * r379_top, -0.1), r314_HalfRectTriangle(r381_kshRight - r381_ox - r314_TINY, r379_top, r1_mix(r381_kshRight - r381_ox, r381_xAttach, 2) - r314_TINY, r1_mix(r379_top, r381_yAttach, 2)));
                        };
                        var r381_BotSerifMask = function () {
                            var _r395_t0, _r395_t1;
                            return r314_intersection(r381_StrokeMask(false, 0.5 * r379_top, 0, -0.1), r314_HalfRectTriangle(r381_kshRight - r381_ox - r314_TINY, 0, r1_mix(r381_kshRight - r381_ox, r381_xAttach, 2) - r314_TINY, r1_mix(0, r381_coYAttach, 2)));
                        };
                        r381_currentGlyph.include(r314_KLegSlabs(new r314_xn$NamedParameterPair$2Lrc9b("mode", r379_slabLegs), new r314_xn$NamedParameterPair$2Lrc9b("top", r379_top), new r314_xn$NamedParameterPair$2Lrc9b("left", r379_left), new r314_xn$NamedParameterPair$2Lrc9b("right", r379_right), new r314_xn$NamedParameterPair$2Lrc9b("swRef", r379_stroke), new r314_xn$NamedParameterPair$2Lrc9b("fStraightBar", true), new r314_xn$NamedParameterPair$2Lrc9b("attachment", r379_attachment), new r314_xn$NamedParameterPair$2Lrc9b("maskRT", r381_TopSerifMask), new r314_xn$NamedParameterPair$2Lrc9b("maskRB", r381_BotSerifMask)));
                        return void 0;
                    });
                };
            };
            r344_exports.Curly = r344_Curly = function (r407_fHookRight, r407_left, r407_right, r407_stroke, r407_top, r407_slabLT, r407_slabLegs, r407_attachment) {
                var _r407_t0, _r407_t1;
                return new r314_xn$Capture$2Lrc8.GlyphProc(function (r409_currentGlyph) {
                    var _r409_t0, _r409_t1;
                    var r409_fine = r314_AdviceStroke(3.5) * (r407_stroke / r314_Stroke);
                    var r409_kshLeft = r407_left + r314_KBalance(r407_slabLT, false);
                    var r409_kshRight = r407_right + r314_KBalanceRight(r407_slabLegs, false);
                    r409_currentGlyph.setBaseAnchor("overlay", r1_mix(r407_left, r407_right, 0.5), r407_top / 2);
                    r409_currentGlyph.setBaseAnchor("strike", r1_mix(r407_left, r407_right, 0.5), r407_top / 2);
                    r409_currentGlyph.setBaseAnchor("trailing", r409_kshRight - r314_O, 0);
                    var r409_upperCurvature = function () {
                        var _r413_t0, _r413_t1;
                        return r314_bezControls(0, 0.3, 0.5, 0.65, 8);
                    };
                    var r409_upperCurvatureHT = function () {
                        var _r414_t0, _r414_t1;
                        return r314_bezControls(0.5, 0, 0.5, 0.65, 8, {
                            "blend": function (r415_t) {
                                var _r415_t0, _r415_t1;
                                return r314_widths.rhs(r1_mix(r407_stroke, r409_fine, r415_t));
                            }
                        });
                    };
                    var r409_lowerCurvature = function () {
                        var _r416_t0, _r416_t1;
                        return r314_quadControls(0, 0.3, 8);
                    };
                    var r409_xAttach1 = r409_kshLeft + r314_HSwToV(r407_stroke);
                    var r409_yAttach1 = r1_mix(0, r407_top, r407_slabLegs ? 0.325 : 0.375);
                    var r409_xAttach2 = r409_kshLeft + r314_HSwToV(r407_stroke);
                    var r409_yAttach2 = r1_mix(0, r407_top, 0.75);
                    r409_currentGlyph.setBaseAnchor("armOverlay", r1_mix(r409_xAttach1, r409_kshRight, r314_StrokeWidthBlend(0.7, 0.6)), r1_mix(r409_yAttach1, r407_top, r314_StrokeWidthBlend(0.6, 0.65)));
                    r409_currentGlyph.include(r314_intersection(r314_Rect(r407_top, 0, r409_kshLeft, r314_xn$VERYFAR$5sIl), r407_fHookRight ? r314_dispiro(r314_straight.left.start(r409_kshRight + (r314_HasRtSerif(r407_slabLegs) ? r314_SideJut : 0) - r314_TanSlope * r407_stroke, r407_top - r407_stroke, r314_widths.rhs(r407_stroke)), r409_upperCurvatureHT(), r314_g4(r409_xAttach1, r409_yAttach1, r314_widths.rhs(r409_fine))) : r314_dispiro(r314_g4.down.start(r409_kshRight, r407_top, r314_widths.rhs.heading(r407_stroke, r314_Downward)), r409_upperCurvature(), r314_g4(r409_xAttach1, r409_yAttach1, r314_widths.rhs(r409_fine)))));
                    r409_currentGlyph.setBaseAnchor("legOverlay", r1_mix(r409_xAttach2, r409_kshRight, r314_StrokeWidthBlend(0.7, 0.6)), r1_mix(r409_yAttach2, 0, r314_StrokeWidthBlend(0.6, 0.65)));
                    r409_currentGlyph.include(r314_difference(r314_dispiro(r314_g4.up.start(r409_kshRight - r314_O, 0, r314_widths.lhs.heading(r407_stroke, r314_Upward)), r409_lowerCurvature(), r314_g4(r409_xAttach2, r409_yAttach2, r314_widths.center(r409_fine))), r407_fHookRight ? r314_xn$spirooutline$1aao(r314_straight.left.start(r409_kshRight + (r314_HasRtSerif(r407_slabLegs) ? r314_SideJut : 0) - r314_TanSlope * r407_stroke, r407_top - r407_stroke + r314_TINY), r409_upperCurvatureHT(), r314_corner(r409_xAttach1 - r314_TINY, r409_yAttach1), r314_corner(-r314_xn$VERYFAR$5sIl, r409_yAttach1), r314_corner(-r314_xn$VERYFAR$5sIl, +r314_xn$VERYFAR$5sIl), r314_corner(+r314_xn$VERYFAR$5sIl, +r314_xn$VERYFAR$5sIl), r314_corner(+r314_xn$VERYFAR$5sIl, r407_top - r407_stroke + r314_TINY)) : r314_xn$spirooutline$1aao(r314_corner.down.start(r409_kshRight - r314_TINY, r407_top), r409_upperCurvature(), r314_corner(r409_kshLeft + r407_stroke, r409_yAttach1 + r314_TINY), r314_corner(r409_kshLeft, 0), r314_corner(r409_kshLeft, r407_top))));
                    var r409_TopSerifMask = function () {
                        var _r421_t0, _r421_t1;
                        return r314_HalfRectTriangle(r409_kshRight, r407_top, r409_xAttach1, r409_yAttach1);
                    };
                    var r409_BotSerifMask = function () {
                        var _r422_t0, _r422_t1;
                        return r314_HalfRectTriangle(r409_kshRight - r314_O - r314_HSwToV(0.5 * r407_stroke), 0, r409_xAttach2, r409_yAttach2);
                    };
                    r409_currentGlyph.include(r314_KLegSlabs(new r314_xn$NamedParameterPair$2Lrc9b("mode", r407_slabLegs), new r314_xn$NamedParameterPair$2Lrc9b("top", r407_top), new r314_xn$NamedParameterPair$2Lrc9b("left", r407_left), new r314_xn$NamedParameterPair$2Lrc9b("right", r407_right), new r314_xn$NamedParameterPair$2Lrc9b("swRef", r407_stroke), new r314_xn$NamedParameterPair$2Lrc9b("fStraightBar", false), new r314_xn$NamedParameterPair$2Lrc9b("attachment", r407_attachment), new r314_xn$NamedParameterPair$2Lrc9b("maskRT", r409_TopSerifMask), new r314_xn$NamedParameterPair$2Lrc9b("maskRB", r409_BotSerifMask)));
                    return void 0;
                });
            };
            var r344_CursiveDimen = function (r433_left, r433_right, r433_top, r433_stroke, r433_slabLT, r433_slabLegs) {
                var _r433_t0, _r433_t1;
                var r433_kshLeft = r433_left + r314_KBalance(r433_slabLegs, true);
                var r433_kshRight = r433_right + r314_KBalanceRight(r433_slabLegs, true);
                var r433_ox = r314_KOvershootX(r433_slabLegs, true, r433_top, r433_stroke);
                var r433_arcFine = r314_ShoulderFine * (r433_stroke / r314_Stroke);
                var r433_arcStroke = r314_AdviceStroke2(2, 3, r433_top) * (r433_stroke / r314_Stroke);
                var r433_arcTerminalFine = r314_AdviceStroke2(3, 4, r433_top) * (r433_stroke / r314_Stroke);
                var r433_expansion = r314_Width / r314_HalfUPM - 1;
                var r433_pArcStartY = 0.46 + 0.1 * (r433_arcStroke / r314_Width);
                var r433_pArcTopX = 0.625 - 0.05 * (r433_arcStroke / r314_Width);
                var r433_pArcRightX = 0.91 - r314_TanSlope * 0.25 + ((r314_SLAB ? 0 : 0.05) + 0.75 * r314_TanSlope) * (r433_arcStroke / r314_Width);
                var r433_pArcRightY = 0.575 - 0.625 * (r433_arcStroke / r314_Width) - 0.25 * r433_expansion * (r433_arcStroke / r314_HalfUPM);
                var r433_pArcTerminalX = 0.2 - 2.25 * (r433_arcStroke / r314_Width);
                var r433_pArcBottomX = 0.15 + 0 * (r433_arcStroke / r314_Width);
                var r433_pArcBottomY = 0.45 + 0.5 * (r433_arcStroke / r314_Width);
                var r433_arcRightSlope = 0.05 + 0.2 * (r433_arcStroke / r314_Width) + 0.5 * r433_expansion * (r433_arcStroke / r314_HalfUPM);
                var r433_arcStartX = r433_kshLeft + r314_HSwToV(r433_stroke - r433_arcFine);
                var r433_arcStartY = r1_mix(0, r433_top, r433_pArcStartY);
                var r433_arcTerminalX = r1_mix(r433_arcStartX, r433_kshRight, r433_pArcTerminalX);
                var r433_arcBottomX = r1_mix(r433_arcStartX, r433_kshRight, r433_pArcBottomX);
                var r433_arcBottomY = r1_mix(0, r433_top, r433_pArcBottomY);
                var r433_arcTerminalY = r433_arcBottomY - r314_O + r433_arcStroke * 0.125;
                var r433_arcRightX = r433_kshRight * r433_pArcRightX + r314_HSwToV(0.2 * r433_stroke);
                var r433_arcRightY = r1_mix(r433_arcBottomY, r433_top, r433_pArcRightY);
                return {
                    "ox": r433_ox,
                    "arcStartX": r433_arcStartX,
                    "arcStartY": r433_arcStartY,
                    "arcFine": r433_arcFine,
                    "arcRightX": r433_arcRightX,
                    "arcRightY": r433_arcRightY,
                    "arcRightSlope": r433_arcRightSlope,
                    "arcStroke": r433_arcStroke,
                    "arcBottomX": r433_arcBottomX,
                    "arcBottomY": r433_arcBottomY,
                    "arcTerminalX": r433_arcTerminalX,
                    "arcTerminalY": r433_arcTerminalY,
                    "arcTerminalFine": r433_arcTerminalFine,
                    "kshLeft": r433_kshLeft,
                    "kshRight": r433_kshRight,
                    "pArcTopX": r433_pArcTopX
                };
            };
            var r344_CursiveLoopT = function (r434_sink, r434_offset, r434_left, r434_right, r434_stroke, r434_top, r434_slabLT, r434_slabLegs) {
                var _r434_t0, _r434_t1;
                var r434_dim = r344_CursiveDimen(r434_left, r434_right, r434_top, r434_stroke, r434_slabLT, r434_slabLegs);
                return r434_sink(r314_g4.up.start(r434_dim.arcStartX + r434_offset, r434_dim.arcStartY, r314_widths.rhs.heading(r434_dim.arcFine, r314_Upward)), r314_Arch.rhs(r434_top - r434_offset, new r314_xn$NamedParameterPair$2Lrc9b("sw", r434_dim.arcStroke), new r314_xn$NamedParameterPair$2Lrc9b("swBefore", r434_dim.arcFine), new r314_xn$NamedParameterPair$2Lrc9b("swAfter", r434_dim.arcStroke), new r314_xn$NamedParameterPair$2Lrc9b("p", r434_dim.pArcTopX)), r314_g4.down.mid(r434_dim.arcRightX - r434_offset, r434_dim.arcRightY - r314_HSwToV(r434_dim.arcRightSlope * 0.5 * r434_dim.arcStroke), r314_heading({
                    "y": r434_dim.arcRightSlope,
                    "x": r314_HVContrast
                })), r314_arcvh(), r314_g4(r434_dim.arcBottomX, r434_dim.arcBottomY - r434_dim.arcStroke + r434_offset, r314_widths.rhs.heading(r434_dim.arcTerminalFine, r314_Leftward)), r314_g4(r434_dim.arcStartX, r434_dim.arcTerminalY - r434_dim.arcStroke + r434_offset, r314_widths.rhs.heading(r434_dim.arcStroke, r314_Leftward)));
            };
            r344_exports.Cursive = r344_Cursive = function (r440_fHookRight, r440_left, r440_right, r440_stroke, r440_top, r440_slabLT, r440_slabLegs, r440_attachment) {
                var _r440_t0, _r440_t1;
                return new r314_xn$Capture$2Lrc8.GlyphProc(function (r442_currentGlyph) {
                    var _r442_t0, _r442_t1;
                    var r442_dim = r344_CursiveDimen(r440_left, r440_right, r440_top, r440_stroke, r440_slabLT, r440_slabLegs);
                    var r442_BottomStrokeMask = function () {
                        var _r443_t0, _r443_t1;
                        return r314_Rect(r314_XH, 0, 0, r440_slabLegs ? r442_dim.kshRight + r314_SideJut + r314_TanSlope * r314_Stroke : r314_xn$VERYFAR$5sIl);
                    };
                    r442_currentGlyph.include(r344_CursiveLoopT(r314_dispiro, 0, r440_left, r440_right, r440_stroke, r440_top, r440_slabLT, r440_slabLegs));
                    r442_currentGlyph.setBaseAnchor("overlay", r1_mix(r440_left, r440_right, 0.5), r442_dim.arcBottomY - r442_dim.arcStroke + r442_dim.arcTerminalFine / 2);
                    r442_currentGlyph.setBaseAnchor("strike", r1_mix(r440_left, r440_right, 0.5), r442_dim.arcBottomY - r442_dim.arcStroke + r442_dim.arcTerminalFine / 2);
                    r442_currentGlyph.setBaseAnchor("legOverlay", r1_mix(r442_dim.arcTerminalX, r442_dim.kshRight, r314_StrokeWidthBlend(0.5, 0.6)), r1_mix(r442_dim.arcTerminalY, 0, r314_StrokeWidthBlend(0.6, 0.65)));
                    r442_currentGlyph.include(r314_difference(r314_intersection(r442_BottomStrokeMask(), r314_dispiro(r314_flat(r442_dim.arcTerminalX, r442_dim.arcTerminalY, r314_widths.lhs()), r314_curl(r442_dim.kshRight - r442_dim.ox, 0, r314_widths.rhs()))), r344_CursiveLoopT(r314_xn$spirooutline$1aao, -r314_O, r440_left, r440_right, r440_stroke, r440_top, r440_slabLT, r440_slabLegs)));
                    var r442_BotSerifMask = function () {
                        var _r449_t0, _r449_t1;
                        return r314_HalfRectTriangle(r442_dim.kshRight - r442_dim.ox - r314_TINY, 0, r442_dim.arcTerminalX - r314_TINY, r442_dim.arcTerminalY);
                    };
                    r442_currentGlyph.include(r314_KLegSlabs(new r314_xn$NamedParameterPair$2Lrc9b("mode", r1_maskOffBit(r440_slabLegs, 1)), new r314_xn$NamedParameterPair$2Lrc9b("top", r440_top), new r314_xn$NamedParameterPair$2Lrc9b("left", r440_left), new r314_xn$NamedParameterPair$2Lrc9b("right", r440_right), new r314_xn$NamedParameterPair$2Lrc9b("swRef", r440_stroke), new r314_xn$NamedParameterPair$2Lrc9b("fStraightBar", true), new r314_xn$NamedParameterPair$2Lrc9b("attachment", r440_attachment), new r314_xn$NamedParameterPair$2Lrc9b("maskRT", r314_xn$noshape$3cah), new r314_xn$NamedParameterPair$2Lrc9b("maskRB", r442_BotSerifMask)));
                    return void 0;
                });
            };
            r344_exports.CursiveTailed = r344_CursiveTailed = function (r461_fHookRight, r461_left, r461_right, r461_stroke, r461_top, r461_slabLT, r461_slabLegs, r461_attachment) {
                var _r461_t0, _r461_t1;
                return new r314_xn$Capture$2Lrc8.GlyphProc(function (r463_currentGlyph) {
                    var _r463_t0, _r463_t1;
                    var r463_dim = r344_CursiveDimen(r461_left, r461_right, r461_top, r461_stroke, r461_slabLT, r461_slabLegs);
                    r463_currentGlyph.include(r344_CursiveLoopT(r314_dispiro, 0, r461_left, r461_right, r461_stroke, r461_top, r461_slabLT, r461_slabLegs));
                    var r463_swDiagTail = r314_AdviceStroke(2, 1 - (r463_dim.kshLeft - r314_SB) / r314_Width);
                    var r463_swDiagTailAdj = r463_swDiagTail / r1_mix(1, r314_HVContrast, 0.375);
                    var r463_xDTGap = 0.1 * (r314_RightSB - r314_SB) - (0.125 + r1_clamp(0, 0.375, 0.5 * (r314_Width / r314_HalfUPM - 1))) * r463_swDiagTail;
                    var r463_xDTStart = r463_dim.arcTerminalX + r314_HSwToV(r463_swDiagTail) + r463_xDTGap;
                    var r463_xDTEnd = r463_dim.kshRight - 0.8 * r314_Hook + r463_xDTGap * 0.625;
                    var r463_tailAngle = Math.min(85, r314_DiagTailAngle + 3);
                    var r463_dtInnerRadius = r1_clamp(0.125, 1, r1_mix(1, r314_Width / r314_HalfUPM, 3)) * r314_TightBendInnerRadius;
                    r463_currentGlyph.setBaseAnchor("overlay", r1_mix(r461_left, r461_right, 0.5), r463_dim.arcBottomY - r463_dim.arcStroke + r463_dim.arcTerminalFine / 2);
                    r463_currentGlyph.setBaseAnchor("strike", r1_mix(r461_left, r461_right, 0.5), r463_dim.arcBottomY - r463_dim.arcStroke + r463_dim.arcTerminalFine / 2);
                    r463_currentGlyph.setBaseAnchor("legOverlay", r1_mix(r463_xDTStart, r463_xDTEnd, r314_StrokeWidthBlend(0.65, 0.75)), r1_mix(r463_dim.arcTerminalY, 0, r314_StrokeWidthBlend(0.6, 0.65)));
                    var r463_innerX = r463_xDTEnd + 0.5 * r463_swDiagTailAdj;
                    r463_currentGlyph.include(r314_difference(r314_dispiro(r314_flat(r463_xDTStart, r463_dim.arcTerminalY, r314_widths.center(r463_swDiagTailAdj)), r314_curl(r463_innerX, 0.9 * r463_swDiagTail + 0.5 * r463_dtInnerRadius, r314_widths.rhs(r463_swDiagTailAdj)), r314_DiagTail.F(1, r463_innerX, 0, r463_dtInnerRadius, r463_tailAngle, r314_Hook - 0.6 * r463_swDiagTail, r463_swDiagTail)), r344_CursiveLoopT(r314_xn$spirooutline$1aao, -r314_O, r461_left, r461_right, r461_stroke, r461_top, r461_slabLT, r461_slabLegs)));
                    return void 0;
                });
            };
            return r344_exports;
        })();
        var r314_CyrlVbGap = (r314_RightSB - r314_SB) * 0.375;
        var r314_CyrlVbLength = function (r469_top) {
            var _r469_t0, _r469_t1;
            return (r469_top - 0) * 0.375 + r314_Stroke;
        };
        var r314_CyrlVbSw = r314_AdviceStroke(3);
        var r314_UpperKConfig = r1_SuffixCfg.weave({
            "straight": r314_KLegs.Straight,
            "curly": r314_KLegs.Curly,
            "symmetricTouching": r314_KLegs.Symmetric(0),
            "symmetricConnected": r314_KLegs.Symmetric(r314_AdviceStroke(6)),
            "symmetricConnectedKH": r314_KLegs.Symmetric(r314_AdviceStroke(6), r314_Descender),
            "symmetricConnectedVB": r314_KLegs.Symmetric(r314_CyrlVbGap)
        }, function (r470_body) {
            var r470___, _r470_t0, _r470_t1, _r470_t2, _r470_t3;
            return {
                "serifless": [0, 0, 0],
                "topLeftSerifed": [2, 0, 0],
                "bottomRightSerifed": [0, 0, 1],
                "topLeftAndBottomRightSerifed": [2, 0, 1],
                "topRightSerifed": [0, 0, 2],
                "topLeftAndTopRightSerifed": [2, 0, 2],
                "topRightAndBottomRightSerifed": [0, 0, 3],
                "triSerifed": [2, 0, 3],
                "serifedKappa": [2, 1, 3],
                "serifed": (_r470_t0 = r470_body, _r470_t0 === "symmetricConnectedKH" ? [1, 1, 2] : (r470___ = _r470_t0, [1, 1, 3])),
                "fullSerifed": (_r470_t1 = r470_body, _r470_t1 === "symmetricConnectedKH" ? [1, 1, 6] : (r470___ = _r470_t1, [1, 1, 7]))
            };
        });
        var r314_UpperKLTSerif = function (r471_top, r471_swRef, r471_xBarLeft, r471_slabType, r471__swSerif) {
            var r471__, _r471_t0, _r471_t1, _r471_t2;
            var r471_swSerif = r1_fallback(r471__swSerif, r471_swRef);
            return (_r471_t0 = r471_slabType, 2 === _r471_t0 ? r314_HSerif.lt(r471_xBarLeft, r471_top, r314_SideJut, r471_swSerif) : 1 === _r471_t0 ? r314_HSerif.mt(r471_xBarLeft + r314_HSwToV(0.5 * r471_swRef), r471_top, r314_Jut - r314_HSwToV(0.5 * (r314_Stroke - r471_swRef)), r471_swSerif) : (r471__ = _r471_t0, new r314_xn$Capture$2Lrc8.GlyphProc(function (r473_currentGlyph) {
                var _r473_t0, _r473_t1;
                return void 0;
            })));
        };
        var r314_UpperKLBSerif = function (r474_top, r474_swRef, r474_xBarLeft, r474_slabType, r474__swSerif) {
            var r474__, _r474_t0, _r474_t1, _r474_t2;
            var r474_swSerif = r1_fallback(r474__swSerif, r474_swRef);
            return (_r474_t0 = r474_slabType, 2 === _r474_t0 ? r314_HSerif.lb(r474_xBarLeft, 0, r314_SideJut, r474_swSerif) : 1 === _r474_t0 ? r314_HSerif.mb(r474_xBarLeft + r314_HSwToV(0.5 * r474_swRef), 0, r314_Jut - r314_HSwToV(0.5 * (r314_Stroke - r474_swRef)), r474_swSerif) : (r474__ = _r474_t0, new r314_xn$Capture$2Lrc8.GlyphProc(function (r476_currentGlyph) {
                var _r476_t0, _r476_t1;
                return void 0;
            })));
        };
        var r314_KBarShape = function (r477_top, r477_xBarLeft) {
            var _r477_t0, _r477_t1;
            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r479_currentGlyph) {
                var _r479_t0, _r479_t1;
                var r479_l = r477_xBarLeft - 0.7 * (r314_SB - 0);
                var r479_r = r1_mix(r314_SB, r314_RightSB, 0.92);
                r479_currentGlyph.include(r314_HOverlayBar(r479_l, r479_r, r479_currentGlyph.baseAnchors.overlay.y));
                return void 0;
            });
        };
        var r314_CyrlKaVBarShape = function (r481_top, r481_xBarLeft) {
            var _r481_t0, _r481_t1;
            return r314_VBar.m(r481_xBarLeft + r314_HSwToV(0.5 * r314_CyrlVbSw) + 0.7 * r314_CyrlVbGap, r481_top / 2 - r314_CyrlVbLength(r481_top) / 2, r481_top / 2 + r314_CyrlVbLength(r481_top) / 2, Math.min(r314_AdviceStroke(5), r314_CyrlVbGap * 0.5));
        };
        r314_xn$GlyphSaveSink$2Lrc4b.save("UpperKaiSymbolAttachment", null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r484_currentGlyph) {
            var _r484_t0, _r484_t1;
            r484_currentGlyph.setWidth(0);
            r484_currentGlyph.setMarkAnchor("trailing", 0, 0);
            var r484_shapeDepth = r1_mix(0, r314_Descender, 0.8) - r314_QuarterStroke;
            var r484_kSw = r1_mix(1, r314_HVContrast, Math.SQRT1_2);
            r484_currentGlyph.include(r314_PointingTo(0, 0, r484_shapeDepth, r484_shapeDepth, function (r488_mag) {
                var _r488_t0, _r488_t1;
                return r314_union(r314_dispiro(r314_widths.lhs(r314_Stroke * r484_kSw), r314_flat(0, 0), r314_curl(r488_mag, 0)), r314_SLAB ? r314_dispiro(r314_widths.center(r314_Stroke / r484_kSw), r314_flat(0, r314_Stroke * r484_kSw + r314_SideJut), r314_curl(0, 0 - r314_SideJut)) : r314_xn$noshape$3cah());
            }));
            return void 0;
        }));
        var _r314_t13 = _r1_t2(r314_UpperKConfig)[Symbol.iterator]();
        var _r314_t14 = void 0;
        while (!(_r314_t14 = _r314_t13.next()).done) {
            _r314_t15 = _r314_t14.value;
            r314_suffix = _r314_t15[0];
            r314_LegsImpl = _r314_t15[1][0];
            r314_slabLT = _r314_t15[1][1][0];
            r314_slabLB = _r314_t15[1][1][1];
            r314_slabLegs = _r314_t15[1][1][2];
            _r314_t15[1][1];
            _r314_t15[1];
            (function () {
                var r493_fStraightBar = r314_LegsImpl !== r314_KLegs.Curly;
                var r493_KBaseShape = function (r494_sw, r494_top, r494_attachment) {
                    var _r494_t0, _r494_t1;
                    return new r314_xn$Capture$2Lrc8.GlyphProc(function (r496_currentGlyph) {
                        var _r496_t0, _r496_t1;
                        var r496_xBarLeft = r314_SB + r314_KBalance(r314_slabLT, r493_fStraightBar);
                        r496_currentGlyph.include(r314_VBar.l(r496_xBarLeft, 0, r494_top, r494_sw));
                        r496_currentGlyph.include(r314_LegsImpl(false, r314_SB, r314_RightSB, r494_sw, r494_top, r314_slabLT, r314_slabLegs, r494_attachment));
                        if (r314_slabLT) r496_currentGlyph.include(r314_UpperKLTSerif(r494_top, r494_sw, r496_xBarLeft, r314_slabLT));
                        if (r314_slabLB) r496_currentGlyph.include(r314_UpperKLBSerif(r494_top, r494_sw, r496_xBarLeft, r314_slabLB));
                        return void 0;
                    });
                };
                r314_xn$GlyphSaveSink$2Lrc4b.save("K." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r503_currentGlyph) {
                    var _r503_t0, _r503_t1;
                    r503_currentGlyph.include(r314_MarkSet.capital());
                    r503_currentGlyph.include(r493_KBaseShape(r314_Stroke, r314_CAP));
                    return void 0;
                }));
                r314_xn$GlyphSaveSink$2Lrc4b.save("KDescender." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r508_currentGlyph) {
                    var _r508_t0, _r508_t1;
                    r508_currentGlyph.include(r314_MarkSet.capital());
                    r508_currentGlyph.include(r493_KBaseShape(r314_Stroke, r314_CAP, r314_CyrDescender));
                    r508_currentGlyph.include(r314_ExtendBelowBaseAnchors(-r314_LongVJut + r314_QuarterStroke));
                    return void 0;
                }));
                r314_xn$GlyphSaveSink$2Lrc4b.save("KStroke." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r514_currentGlyph) {
                    var _r514_t0, _r514_t1;
                    r514_currentGlyph.include(r314_xn$referglyph$1aao("K." + r314_suffix), r314_AS_BASE, r314_ALSO_METRICS);
                    r514_currentGlyph.include(r314_LetterBarOverlay.l.in(new r314_xn$NamedParameterPair$2Lrc9b("x", r314_SB + r314_KBalance(r314_slabLT, r493_fStraightBar)), new r314_xn$NamedParameterPair$2Lrc9b("bot", r314_XH), new r314_xn$NamedParameterPair$2Lrc9b("top", r314_CAP - (r314_slabLT ? r314_Stroke : 0)), new r314_xn$NamedParameterPair$2Lrc9b("space", [0, r1_mix(r314_SB, r314_RightSB, 0.75)])));
                    return void 0;
                }));
                r314_xn$GlyphSaveSink$2Lrc4b.save("KBar." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r523_currentGlyph) {
                    var _r523_t0, _r523_t1;
                    r523_currentGlyph.include(r314_xn$referglyph$1aao("K." + r314_suffix), r314_AS_BASE, r314_ALSO_METRICS);
                    r523_currentGlyph.include(r314_KBarShape(r314_CAP, r314_SB + r314_KBalance(r314_slabLT, r493_fStraightBar)));
                    return void 0;
                }));
                r314_xn$GlyphSaveSink$2Lrc4b.save("KVBar." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r528_currentGlyph) {
                    var _r528_t0, _r528_t1;
                    r528_currentGlyph.include(r314_MarkSet.capital());
                    r528_currentGlyph.include(r493_KBaseShape(r314_CyrlVbSw, r314_CAP));
                    r528_currentGlyph.include(r314_CyrlKaVBarShape(r314_CAP, r314_SB + r314_KBalance(r314_slabLT, r493_fStraightBar)));
                    return void 0;
                }));
                r314_xn$GlyphSaveSink$2Lrc4b.save("grek/KaiSymbol." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r534_currentGlyph) {
                    var _r534_t0, _r534_t1;
                    r534_currentGlyph.include(r314_xn$referglyph$1aao("K." + r314_suffix), r314_AS_BASE, r314_ALSO_METRICS);
                    r534_currentGlyph.ejectTagged("serifRB");
                    r534_currentGlyph.include(r314_ExtendBelowBaseAnchors(r314_Descender));
                    r534_currentGlyph.include(r314_xn$referglyph$1aao("UpperKaiSymbolAttachment"));
                    return void 0;
                }));
                r314_xn$GlyphSaveSink$2Lrc4b.save("smcpK." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r541_currentGlyph) {
                    var _r541_t0, _r541_t1;
                    r541_currentGlyph.include(r314_MarkSet.e());
                    r541_currentGlyph.include(r493_KBaseShape(r314_Stroke, r314_XH));
                    return void 0;
                }));
                r314_xn$GlyphSaveSink$2Lrc4b.save("smcpKDescender." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r546_currentGlyph) {
                    var _r546_t0, _r546_t1;
                    r546_currentGlyph.include(r314_MarkSet.e());
                    r546_currentGlyph.include(r493_KBaseShape(r314_Stroke, r314_XH, r314_CyrDescender));
                    r546_currentGlyph.include(r314_ExtendBelowBaseAnchors(-r314_LongVJut + r314_QuarterStroke));
                    return void 0;
                }));
                r314_xn$GlyphSaveSink$2Lrc4b.save("smcpKVBar." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r552_currentGlyph) {
                    var _r552_t0, _r552_t1;
                    r552_currentGlyph.include(r314_MarkSet.e());
                    r552_currentGlyph.include(r493_KBaseShape(r314_CyrlVbSw, r314_XH));
                    r552_currentGlyph.include(r314_CyrlKaVBarShape(r314_XH, r314_SB + r314_KBalance(r314_slabLT, r493_fStraightBar)));
                    return void 0;
                }));
                r314_xn$GlyphSaveSink$2Lrc4b.save("KHookRight." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r558_currentGlyph) {
                    var _r558_t0, _r558_t1;
                    r558_currentGlyph.include(r314_MarkSet.capital());
                    var r558_xBarLeft = r314_SB + r314_KBalance(r314_slabLT, r493_fStraightBar);
                    r558_currentGlyph.include(r314_VBar.l(r558_xBarLeft, 0, r314_CAP, r314_Stroke));
                    r558_currentGlyph.include(r314_LegsImpl(true, r314_SB, r314_RightSB, r314_Stroke, r314_CAP, r314_slabLT, r314_slabLegs));
                    r558_currentGlyph.ejectTagged("serifRT");
                    if (r314_slabLT) r558_currentGlyph.include(r314_UpperKLTSerif(r314_CAP, r314_Stroke, r558_xBarLeft, r314_slabLT));
                    if (r314_slabLB) r558_currentGlyph.include(r314_UpperKLBSerif(r314_CAP, r314_Stroke, r558_xBarLeft, r314_slabLB));
                    return void 0;
                }));
                var r493_BashkirKaShape = function (r565_df, r565_top) {
                    var _r565_t0, _r565_t1;
                    return new r314_xn$Capture$2Lrc8.GlyphProc(function (r567_currentGlyph) {
                        var r567_swVJut, _r567_t0, _r567_t1;
                        var r567_sw = r565_df.adviceThinnerStroke(2.75);
                        var r567_xBarLeft = Math.max(r565_df.rightSB - (r314_RightSB - r314_SB), r314_SLAB ? r1_mix(r565_df.leftSB, r565_df.rightSB, 0.35) - r314_HSwToV(0.5 * r567_sw) : r1_mix(r565_df.leftSB, r565_df.rightSB, 0.2) - r314_HSwToV(0.25 * r567_sw));
                        r567_currentGlyph.include(r314_VBar.l(r567_xBarLeft, 0, r565_top, r567_sw));
                        r567_currentGlyph.include(r314_LegsImpl(false, r567_xBarLeft - r314_KBalance(r314_slabLT, r493_fStraightBar), r565_df.rightSB, r567_sw, r565_top, r314_slabLT, r314_slabLegs));
                        if (r314_slabLT) r567_currentGlyph.include(r314_UpperKLTSerif(r565_top, r567_sw, r567_xBarLeft, r314_slabLT));
                        if (r314_slabLB) r567_currentGlyph.include(r314_UpperKLBSerif(r565_top, r567_sw, r567_xBarLeft, r314_slabLB));
                        var r567_xTopBarLeftEnd = r1_mix(0, r565_df.leftSB, r314_SLAB ? 0.25 : 0.375);
                        r567_currentGlyph.include(r314_HBar.t(r567_xTopBarLeftEnd, r567_xBarLeft + r314_HSwToV(r567_sw) + r314_O, r565_top, r567_sw));
                        if (r314_SLAB) {
                            r567_swVJut = Math.min(r314_VJutStroke * (r567_sw / r314_Stroke), r314_VSwToH(0.625 * (r567_xBarLeft - r567_xTopBarLeftEnd)));
                            r567_currentGlyph.include(r314_VSerif.dl(r567_xTopBarLeftEnd, r565_top, r314_VJut, r567_swVJut));
                        }
                        return void 0;
                    });
                };
                r314_xn$GlyphSaveSink$2Lrc4b.save("cyrl/KaBashkir." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r576_currentGlyph) {
                    var _r576_t0, _r576_t1;
                    var r576_df = r576_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleT, 2));
                    r576_currentGlyph.include(r576_df.markSet.capital());
                    r576_currentGlyph.include(r493_BashkirKaShape(r576_df, r314_CAP));
                    return void 0;
                }));
                return r314_xn$GlyphSaveSink$2Lrc4b.save("cyrl/kaBashkir." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r582_currentGlyph) {
                    var _r582_t0, _r582_t1;
                    var r582_df = r582_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleT, 2));
                    r582_currentGlyph.include(r582_df.markSet.e());
                    r582_currentGlyph.include(r493_BashkirKaShape(r582_df, r314_XH));
                    return void 0;
                }));
            })();
        }
        var r314_LowerKConfig = r1_SuffixCfg.weave({
            "straight": r314_KLegs.Straight,
            "curly": r314_KLegs.Curly,
            "cursive": r314_KLegs.Cursive,
            "cursiveTailed": r314_KLegs.CursiveTailed,
            "symmetricTouching": r314_KLegs.Symmetric(0),
            "symmetricConnected": r314_KLegs.Symmetric(r314_AdviceStroke(6))
        }, {
            "serifless": [0, 0, 0],
            "topLeftSerifed": [1, 0, 0],
            "bottomRightSerifed": [0, 0, 1],
            "topLeftAndBottomRightSerifed": [1, 0, 1],
            "topRightSerifed": [0, 0, 2],
            "topLeftAndTopRightSerifed": [1, 0, 2],
            "topRightAndBottomRightSerifed": [0, 0, 3],
            "triSerifed": [1, 0, 3],
            "serifed": [1, 1, 3],
            "fullSerifed": [1, 1, 7]
        });
        var _r314_t16 = _r1_t2(r314_LowerKConfig)[Symbol.iterator]();
        var _r314_t17 = void 0;
        while (!(_r314_t17 = _r314_t16.next()).done) {
            _r314_t18 = _r314_t17.value;
            r314_suffix = _r314_t18[0];
            r314_LegsImpl = _r314_t18[1][0];
            r314_slabLT = _r314_t18[1][1][0];
            r314_slabLB = _r314_t18[1][1][1];
            r314_slabLegs = _r314_t18[1][1][2];
            _r314_t18[1][1];
            _r314_t18[1];
            (function () {
                var r589_fStraightBar = r314_LegsImpl !== r314_KLegs.Curly;
                var r589_kBaseShape = function (r590_attachment) {
                    var _r590_t0, _r590_t1;
                    return new r314_xn$Capture$2Lrc8.GlyphProc(function (r592_currentGlyph) {
                        var _r592_t0, _r592_t1;
                        var r592_xBarLeft = r314_SB + r314_KBalance(r314_slabLT, r589_fStraightBar);
                        r592_currentGlyph.include(r314_LeaningAnchor.Above.VBar.l(r592_xBarLeft));
                        r592_currentGlyph.include(r314_VBar.l(r592_xBarLeft, 0, r314_Ascender));
                        r592_currentGlyph.include(r314_LegsImpl(false, r314_SB, r314_RightSB, r314_Stroke, r314_XH, r314_slabLT, r314_slabLegs, r590_attachment));
                        if (r314_slabLT) r592_currentGlyph.include(r314_HSerif.lt(r592_xBarLeft, r314_Ascender, r314_SideJut));
                        if (r314_slabLB) r592_currentGlyph.include(r314_tagged("serifLB", r314_HSerif.mb(r592_xBarLeft + r314_HSwToV(r314_HalfStroke), 0, r314_Jut)));
                        return void 0;
                    });
                };
                r314_xn$GlyphSaveSink$2Lrc4b.save("k." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r600_currentGlyph) {
                    var _r600_t0, _r600_t1;
                    r600_currentGlyph.include(r314_MarkSet.b());
                    r600_currentGlyph.include(r589_kBaseShape());
                    return void 0;
                }));
                r314_xn$GlyphSaveSink$2Lrc4b.save("kDescender." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r605_currentGlyph) {
                    var _r605_t0, _r605_t1;
                    r605_currentGlyph.include(r314_MarkSet.b());
                    r605_currentGlyph.include(r589_kBaseShape(r314_CyrDescender));
                    r605_currentGlyph.include(r314_ExtendBelowBaseAnchors(-r314_LongVJut + r314_QuarterStroke));
                    return void 0;
                }));
                r314_xn$GlyphSaveSink$2Lrc4b.save("kPalatalHook." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r611_currentGlyph) {
                    var _r611_t0, _r611_t1;
                    r611_currentGlyph.include(r314_MarkSet.b());
                    r611_currentGlyph.include(r589_kBaseShape(r314_PalatalHook));
                    r611_currentGlyph.include(r314_ExtendBelowBaseAnchors(r314_Descender));
                    return void 0;
                }));
                r314_xn$GlyphSaveSink$2Lrc4b.save("kStroke." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r617_currentGlyph) {
                    var _r617_t0, _r617_t1;
                    r617_currentGlyph.include(r314_xn$referglyph$1aao("k." + r314_suffix), r314_AS_BASE, r314_ALSO_METRICS);
                    r617_currentGlyph.include(r314_LetterBarOverlay.l.in(new r314_xn$NamedParameterPair$2Lrc9b("x", r314_SB + r314_KBalance(r314_slabLT, r589_fStraightBar)), new r314_xn$NamedParameterPair$2Lrc9b("bot", r314_XH), new r314_xn$NamedParameterPair$2Lrc9b("top", r314_Ascender - (r314_slabLT ? r314_Stroke : 0))));
                    return void 0;
                }));
                r314_xn$GlyphSaveSink$2Lrc4b.save("kBar." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r625_currentGlyph) {
                    var _r625_t0, _r625_t1;
                    r625_currentGlyph.include(r314_xn$referglyph$1aao("k." + r314_suffix), r314_AS_BASE, r314_ALSO_METRICS);
                    r625_currentGlyph.include(r314_KBarShape(r314_XH, r314_SB + r314_KBalance(r314_slabLT, r589_fStraightBar)));
                    return void 0;
                }));
                r314_xn$GlyphSaveSink$2Lrc4b.save("kHookTop." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r630_currentGlyph) {
                    var _r630_t0, _r630_t1;
                    r630_currentGlyph.include(r314_MarkSet.b());
                    var r630_xBarLeft = r314_SB + r314_KBalance(r314_slabLT, r589_fStraightBar);
                    r630_currentGlyph.include(r314_TopHook.toRight.lBarInner(new r314_xn$NamedParameterPair$2Lrc9b("x", r630_xBarLeft), new r314_xn$NamedParameterPair$2Lrc9b("yBot", 0), new r314_xn$NamedParameterPair$2Lrc9b("yTop", r314_Ascender)));
                    r630_currentGlyph.include(r314_LegsImpl(false, r314_SB, r314_RightSB, r314_Stroke, r314_XH, r314_slabLT, r314_slabLegs));
                    if (r314_slabLB) r630_currentGlyph.include(r314_tagged("serifLB", r314_HSerif.mb(r630_xBarLeft + r314_HSwToV(r314_HalfStroke), 0, r314_Jut)));
                    r630_currentGlyph.include(r314_LeaningAnchor.Above.VBar.l(r630_xBarLeft));
                    return void 0;
                }));
                return r314_xn$GlyphSaveSink$2Lrc4b.save("turnk." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r641_currentGlyph) {
                    var _r641_t0, _r641_t1;
                    r641_currentGlyph.include(r314_MarkSet.p());
                    var r641_xBarRight = r314_RightSB - r314_KBalance(r314_slabLT, r589_fStraightBar);
                    r641_currentGlyph.include(r314_LeaningAnchor.Below.VBar.r(r641_xBarRight));
                    r641_currentGlyph.include(r314_VBar.r(r641_xBarRight, r314_Descender, r314_XH));
                    r641_currentGlyph.include(r314_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r648_currentGlyph) {
                        var _r648_t0, _r648_t1;
                        r648_currentGlyph.include(r314_LegsImpl(false, r314_SB, r314_RightSB, r314_Stroke, r314_XH, r314_slabLT, r314_slabLegs), true, true);
                        r648_currentGlyph.include(r314_FlipAround(r314_Middle, r314_XH / 2));
                        return void 0;
                    })));
                    if (r314_slabLT) r641_currentGlyph.include(r314_tagged("serifLT", r314_para.isItalic ? r314_HSerif.rb(r641_xBarRight, r314_Descender, r314_SideJut) : r314_union(r314_HSerif.rb(r641_xBarRight - r314_HSwToV(r314_HalfStroke), r314_Descender, r314_Jut), r314_HSerif.lb(r641_xBarRight - r314_HSwToV(r314_HalfStroke), r314_Descender, r314_MidJutSide))));
                    if (r314_slabLB) r641_currentGlyph.include(r314_tagged("serifLB", r314_HasFullSerif(r314_slabLegs) ? r314_HSerif.mt(r641_xBarRight - r314_HSwToV(r314_HalfStroke), r314_XH, r314_Jut) : r314_HSerif.rt(r641_xBarRight, r314_XH, r314_SideJut)));
                    return void 0;
                }));
            })();
        }
        r314_xn$selectvariant$7Hrq("K", "K");
        r314_xn$linkreducedvariant$5sIl8("K/sansSerif", "K", r1_MathSansSerif);
        r314_xn$selectvariant$7Hrq("smcpK", 7435, new r314_xn$NamedParameterPair$2Lrc9b("follow", "K"));
        r314_xn$selectvariant$7Hrq("KHookRight", 408);
        r314_xn$selectvariant$7Hrq("KDescender", 11369);
        r314_xn$selectvariant$7Hrq("KStroke", 42816, new r314_xn$NamedParameterPair$2Lrc9b("follow", "K"));
        r314_xn$selectvariant$7Hrq("KBar", 122696, new r314_xn$NamedParameterPair$2Lrc9b("follow", "K"));
        r314_alias("grek/Kappa", 922, "K");
        r314_xn$aliasreducedvariant$1aao8("grek/Kappa/sansSerif", "grek/Kappa", "K/sansSerif", r1_MathSansSerif);
        r314_xn$selectvariant$7Hrq("grek/KaiSymbol", 975, new r314_xn$NamedParameterPair$2Lrc9b("follow", "KDescender"));
        r314_xn$selectvariant$7Hrq("cyrl/Ka", 1050, new r314_xn$NamedParameterPair$2Lrc9b("shapeFrom", "K"));
        r314_xn$selectvariant$7Hrq("cyrl/KaDescender", 1178, new r314_xn$NamedParameterPair$2Lrc9b("shapeFrom", "KDescender"));
        r314_xn$selectvariant$7Hrq("cyrl/KaVBar", 1180, new r314_xn$NamedParameterPair$2Lrc9b("shapeFrom", "KVBar"), new r314_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/KaVBar"));
        r314_xn$selectvariant$7Hrq("cyrl/KaStroke", 1182, new r314_xn$NamedParameterPair$2Lrc9b("shapeFrom", "KStroke"), new r314_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Ka"));
        r314_xn$selectvariant$7Hrq("cyrl/KaBashkir", 1184);
        r314_xn$selectvariant$7Hrq("cyrl/KaHook", 1219, new r314_xn$NamedParameterPair$2Lrc9b("shapeFrom", "K"), new r314_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/KaHook"));
        r314_xn$selectvariant$7Hrq("k", "k");
        r314_xn$linkreducedvariant$5sIl8("k/sansSerif", "k", r1_MathSansSerif);
        r314_xn$selectvariant$7Hrq("kHookTop", 409);
        r314_xn$selectvariant$7Hrq("kDescender", 11370);
        r314_xn$selectvariant$7Hrq("kPalatalHook", 7556, new r314_xn$NamedParameterPair$2Lrc9b("follow", "kDescender"));
        r314_xn$selectvariant$7Hrq("kStroke", 42817, new r314_xn$NamedParameterPair$2Lrc9b("follow", "k"));
        r314_xn$selectvariant$7Hrq("kBar", 122697, new r314_xn$NamedParameterPair$2Lrc9b("follow", "k"));
        r314_xn$selectvariant$7Hrq("latn/kappa", 312, new r314_xn$NamedParameterPair$2Lrc9b("shapeFrom", "smcpK"));
        r314_xn$selectvariant$7Hrq("grek/kappa", 954, new r314_xn$NamedParameterPair$2Lrc9b("shapeFrom", "smcpK"));
        r314_xn$linkreducedvariant$5sIl8("grek/kappa/sansSerif", "grek/kappa", r1_MathSansSerif, new r314_xn$NamedParameterPair$2Lrc9b("shapeFrom", "smcpK"));
        r314_xn$selectvariant$7Hrq("cyrl/ka", 1082, new r314_xn$NamedParameterPair$2Lrc9b("shapeFrom", "smcpK"));
        r314_xn$selectvariant$7Hrq("cyrl/ka.BGR", new r314_xn$NamedParameterPair$2Lrc9b("shapeFrom", "k"), new r314_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/ka"));
        r314_xn$selectvariant$7Hrq("cyrl/kaDescender", 1179, new r314_xn$NamedParameterPair$2Lrc9b("shapeFrom", "smcpKDescender"));
        r314_xn$selectvariant$7Hrq("cyrl/kaVBar", 1181, new r314_xn$NamedParameterPair$2Lrc9b("shapeFrom", "smcpKVBar"), new r314_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/kaVBar"));
        r314_xn$selectvariant$7Hrq("cyrl/kaStroke", 1183, new r314_xn$NamedParameterPair$2Lrc9b("shapeFrom", "kStroke"), new r314_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/ka"));
        r314_xn$selectvariant$7Hrq("cyrl/kaBashkir", 1185);
        r314_xn$selectvariant$7Hrq("cyrl/kaHook", 1220, new r314_xn$NamedParameterPair$2Lrc9b("shapeFrom", "smcpK"), new r314_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/kaHook"));
        r314_xn$derivecomposites$7Hrq("KSlash", 42818, "K", "legSlashOver");
        r314_xn$derivecomposites$7Hrq("kSlash", 42819, "k", "legSlashOver");
        r314_xn$derivecomposites$7Hrq("KStrokeSlash", 42820, "KStroke", "legSlashOver");
        r314_xn$derivecomposites$7Hrq("kStrokeSlash", 42821, "kStroke", "legSlashOver");
        r314_xn$derivecomposites$7Hrq("cyrl/KaAleut", 1310, "cyrl/Ka", "aleutSlashOver");
        r314_xn$derivecomposites$7Hrq("cyrl/kaAleut", 1311, "cyrl/ka", "aleutSlashOver");
        r314_CreateTurnedLetter("turnK", 42928, "K", r314_HalfAdvance, r314_CAP / 2);
        r314_CreateTurnedLetter("smcpTurnK", 122640, "smcpK", r314_HalfAdvance, r314_XH / 2);
        r314_xn$selectvariant$7Hrq("turnk", 670, new r314_xn$NamedParameterPair$2Lrc9b("follow", "k"));
        r314_xn$derivemultipartglyphs$7Hrq65("kDot", null, ["k", "dotAbove"], function (r682_srcs, r682_gr) {
            var _r682_t0, _r682_t1;
            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r684_currentGlyph) {
                var _r684_t1, _r684_t2;
                var _r684_t0 = r682_srcs;
                var r684_base = _r684_t0[0];
                var r684_mark = _r684_t0[1];
                r684_currentGlyph.include(r314_xn$referglyph$1aao(r684_mark));
                r684_currentGlyph.include(r314_Translate(r314_Width + r314_HSwToV(r314_HalfStroke), 0));
                r684_currentGlyph.include(r314_xn$referglyph$1aao(r684_base), r314_AS_BASE);
                r684_currentGlyph.include(r314_LeaningAnchor.Above.VBar.l(r314_Middle));
                r1_HintClass.set(r684_currentGlyph, "latn", "dflt");
                return void 0;
            });
        });
        var _r314_t19 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r314_BBS = _r314_t19.BBS;
        var r314_BBD = _r314_t19.BBD;
        var r314_BBBarLeft = _r314_t19.BBBarLeft;
        var r314_BBKLegShape = function (r690_top, r690_left, r690_right) {
            var _r690_t0, _r690_t1;
            var r690_kDiag = r314_DiagCorDs(r690_top / 2, r690_right - r690_left, r314_BBD);
            return r314_union(r314_HBar.b(r690_right - r690_kDiag * r314_BBD, r690_right, 0, r314_BBS), r314_intersection(r314_Rect(r690_top, 0, r690_left, 2 * r314_Width), r314_ExtLineCenter(r690_right, r690_top, r690_left, r690_top / 2, r314_BBS, 2)), r314_intersection(r314_xn$spirooutline$1aao(r314_corner(r690_right, r690_top), r314_corner(r690_left, r690_top / 2), r314_corner(r690_left, 0), r314_corner(r314_Width * 2, 0), r314_corner(r314_Width * 2, r690_top)), r314_union(r314_ExtLineCenter(r690_right, 0, r690_left + r690_kDiag * r314_BBD, r690_top / 2, r314_BBS, 2), r314_ExtLineCenter(r690_right - r690_kDiag * r314_BBD, 0, r690_left, r690_top / 2, r314_BBS, 2))));
        };
        r314_xn$GlyphSaveSink$2Lrc4b.save("mathbb/K", 120130, new r314_xn$Capture$2Lrc8.GlyphProc(function (r693_currentGlyph) {
            var _r693_t0, _r693_t1;
            r693_currentGlyph.include(r314_MarkSet.capital());
            r693_currentGlyph.include(r314_BBBarLeft(r314_SB, 0, r314_CAP));
            r693_currentGlyph.include(r314_BBKLegShape(r314_CAP, r314_SB + r314_BBD + r314_HSwToV(r314_BBS), r314_RightSB));
            return void 0;
        }));
        return r314_xn$GlyphSaveSink$2Lrc4b.save("mathbb/k", 120156, new r314_xn$Capture$2Lrc8.GlyphProc(function (r699_currentGlyph) {
            var _r699_t0, _r699_t1;
            r699_currentGlyph.include(r314_MarkSet.b());
            r699_currentGlyph.include(r314_BBBarLeft(r314_SB, 0, r314_Ascender));
            r699_currentGlyph.include(r314_BBKLegShape(r314_XH, r314_SB + r314_BBD + r314_HSwToV(r314_BBS), r314_RightSB));
            return void 0;
        }));
    });
    return void 0;
});


