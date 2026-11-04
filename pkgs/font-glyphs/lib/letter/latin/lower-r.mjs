"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t2 = function _r1_t10(r528_t) {
    var r528_n, r528_i, r528_a, _r528_t3, _r528_t4, _r528_t5, _r528_t6, _r528_t7, _r528_t8, _r528_t9, _r528_t10, _r528_t11, _r528_t12, _r528_t13, _r528_t14, _r528_t15, _r528_t16, _r528_t17, _r528_t18, _r528_t19, _r528_t20, _r528_t21, _r528_t22, _r528_t23, _r528_t24, _r528_t25, _r528_t26;
    var _r528_t0 = function () {
        _r528_t7 = function (_r528_t8) {
            _r528_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r528_t8
            };
        };
        _r528_t9 = r528_t instanceof Array;
        if (_r528_t9) {
            _r528_t10 = r528_n = r528_t.length;
            _r528_t11 = r528_i = 0;
            _r528_t12 = function (_r528_t14) {
                return _r528_t7(_r528_t14);
            };
            _r528_t13 = function (_r528_t15) {
                _r528_t16 = r528_i < r528_n;
                if (_r528_t16) {
                    _r528_t0 = function (_r528_t17) {
                        return _r528_t13(r528_i = r528_i + 1);
                    };
                    return {
                        "value": [r528_i, r528_t[r528_i]],
                        "done": false
                    };
                } else return _r528_t12(_r528_t15);
            };
            return _r528_t13();
        } else {
            _r528_t18 = r528_a = Object.keys(r528_t);
            _r528_t19 = r528_n = r528_a.length;
            _r528_t20 = r528_i = 0;
            _r528_t21 = function (_r528_t23) {
                return _r528_t7(_r528_t23);
            };
            _r528_t22 = function (_r528_t24) {
                _r528_t25 = r528_i < r528_n;
                if (_r528_t25) {
                    _r528_t0 = function (_r528_t26) {
                        return _r528_t22(r528_i = r528_i + 1);
                    };
                    return {
                        "value": [r528_a[r528_i], r528_t[r528_a[r528_i]]],
                        "done": false
                    };
                } else return _r528_t21(_r528_t24);
            };
            return _r528_t22();
        }
    };
    var _r528_t1 = function (x) {
        try {
            return _r528_t0(x);
        } catch (ex) {
            return _r528_t2(ex);
        }
    };
    var _r528_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10) _r528_t3 = this; else {
        _r528_t4 = function () {
            void 0;
        };
        _r528_t4.prototype = _r1_t10.prototype;
        _r528_t3 = new _r528_t4();
    }
    _r528_t3[Symbol.iterator] = function () {
        return _r528_t3;
    };
    _r528_t3.next = _r528_t1;
    _r528_t3.throw = function (x) {
        return _r528_t2(x);
    };
    return _r528_t3;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Lower-R", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_Body, r313_df, r313_modeSans, r313_modeSerifed, r313_doTS, r313_doBS, r313_kJut, _r313_t12, _r313_t15, _r313_t18, _r313_t21, _r313_t23, _r313_t24, _r313_t25, _r313_tag26, _r313_t27, _r313_tag28, _r313_t29, _r313_tag30, _r313_t31, _r313_tag32, _r313_t33, _r313_tag34, _r313_t35, _r313_tag36, _r313_t37, _r313_tag38;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_MarkSet = _r313_t0.MarkSet;
        var r313_AS_BASE = _r313_t0.AS_BASE;
        var r313_ALSO_METRICS = _r313_t0.ALSO_METRICS;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_DesignParameters = _r313_t1.DesignParameters;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Ascender = _r313_t1.Ascender;
        var r313_Descender = _r313_t1.Descender;
        var r313_Translate = _r313_t1.Translate;
        var r313_TanSlope = _r313_t1.TanSlope;
        var r313_HVContrast = _r313_t1.HVContrast;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_VSwToH = _r313_t1.VSwToH;
        var r313_Upward = _r313_t1.Upward;
        var r313_Downward = _r313_t1.Downward;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_Leftward = _r313_t1.Leftward;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_OXHook = _r313_t1.OXHook;
        var r313_Hook = _r313_t1.Hook;
        var r313_RHook = _r313_t1.RHook;
        var r313_HookX = _r313_t1.HookX;
        var r313_SmallArchDepth = _r313_t1.SmallArchDepth;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_QuarterStroke = _r313_t1.QuarterStroke;
        var r313_Jut = _r313_t1.Jut;
        var r313_LongJut = _r313_t1.LongJut;
        var r313_MidJutCenter = _r313_t1.MidJutCenter;
        var r313_VJut = _r313_t1.VJut;
        var r313_IBalance = _r313_t1.IBalance;
        var r313_IBalance2 = _r313_t1.IBalance2;
        var r313_RBalance = _r313_t1.RBalance;
        var r313_RBalance2 = _r313_t1.RBalance2;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_SideJut = _r313_t1.SideJut;
        var r313_DToothlessRise = _r313_t1.DToothlessRise;
        var r313_ShoulderFine = _r313_t1.ShoulderFine;
        var r313_StrokeWidthBlend = _r313_t1.StrokeWidthBlend;
        var r313_ArchDepthAOf = _r313_t1.ArchDepthAOf;
        var r313_ArchDepthBOf = _r313_t1.ArchDepthBOf;
        var r313_ArchDepthAClamped = _r313_t1.ArchDepthAClamped;
        var r313_ArchDepthBClamped = _r313_t1.ArchDepthBClamped;
        var r313_CorrectionOMidS = _r313_t1.CorrectionOMidS;
        var r313_xn$VERYFAR$5sIl = _r313_t1["VERY-FAR"];
        var r313_TINY = _r313_t1.TINY;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_end = _r313_t2.end;
        var r313_straight = _r313_t2.straight;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_archv = _r313_t2.archv;
        var r313_arcvh = _r313_t2.arcvh;
        var r313_dispiro = _r313_t2.dispiro;
        var r313_xn$spirooutline$1aao = _r313_t2["spiro-outline"];
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_union = _r313_t4.union;
        var r313_intersection = _r313_t4.intersection;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_tagged = _r313_t5.tagged;
        var r313_MaskAbove = _r313_t5.MaskAbove;
        var r313_MaskBelow = _r313_t5.MaskBelow;
        var r313_MaskLeft = _r313_t5.MaskLeft;
        var r313_HSerif = _r313_t5.HSerif;
        var r313_VSerif = _r313_t5.VSerif;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_HookStart = _r313_t5.HookStart;
        var r313_Arch = _r313_t5.Arch;
        var r313_FlipAround = _r313_t5.FlipAround;
        var r313_xn$withtransform$5sIl = _r313_t5["with-transform"];
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$queryglyph$1aao = _r313_t6["query-glyph"];
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_xn$derivemultipartglyphs$7Hrq65 = _r313_t6["derive-multi-part-glyphs"];
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_LeaningAnchor = _r313_t7.LeaningAnchor;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateAccentedComposition = _r313_t8.CreateAccentedComposition;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_CurlyTail = _r313_t9.CurlyTail;
        var r313_FlatHookDepth = _r313_t9.FlatHookDepth;
        var r313_PalatalHook = _r313_t9.PalatalHook;
        var r313_RetroflexHook = _r313_t9.RetroflexHook;
        var r313_dfN = r313_DivFrame(1);
        var r313_dfF = r313_DivFrame(r313_para.advanceScaleF, 1, 0.75);
        var r313_RMode = {
            "Standard": 0,
            "StandardSerifed": 1,
            "NarrowHook": 2,
            "NarrowHookSerifed": 3,
            "Hookless": 4,
            "HooklessSerifed": 5,
            "CornerHook": 6,
            "CornerHookSerifed": 7,
            "Earless": 8,
            "EarlessSerifed": 9,
            "Half": 10
        };
        var r313_RDim = function (r319_sign, r319_df, r319_mode, r319__stroke, r319__strokeBar, r319__fine) {
            var _r319_t0, _r319_t1, _r319_t2, _r319_tag3;
            return (function () {
                var r322_rBarLeftX, r322___, r322_rBarRightX, r322_rTopSerifJut, r322_rTopLeftSerif, r322_rTopRightSerif, r322_rBottomSerifJutOut, r322_rBottomSerifJutIn, r322_rBottomLeftSerif, r322_rBottomRightSerif, r322_rArchMiddleX, r322_rArchCoMiddleX, r322_rSkew, r322_rHookRightX, r322_rHookLeftX, r322_rHookDepthY, r322_rCorX, r322_rArchTopShiftY, r322_rArchDepthA, r322_rArchDepthB, r322_setMarks, r322_setTurnedMarks, r322_setReversedMarks, r322_setInvertedMarks, _r322_t1, _r322_t2, _r322_t3, _r322_t4, _r322_t5, _r322_t6, _r322_t7, _r322_t8, _r322_t9, _r322_t10, _r322_t11, _r322_t12, _r322_t13;
                var r322_exports = {};
                var r322_stroke = r1_fallback(r319__stroke, r313_Stroke);
                var r322_strokeBar = r1_fallback(r319__strokeBar, r322_stroke);
                var r322_strokeA = r1_mix(r322_strokeBar, r322_stroke, 0.5);
                var r322_fine = r1_fallback(r319__fine, r313_ShoulderFine * (r322_strokeA / r313_Stroke));
                var _r322_t0 = (_r322_t1 = r319_mode, _r322_t1 === r313_RMode.Standard ? [1, 1, 1 / 2, 1 / 3] : _r322_t1 === r313_RMode.StandardSerifed ? [4 / 3, 2 / 3, 3 / 4, 2 / 3] : _r322_t1 === r313_RMode.NarrowHook ? [1, 1, 1 / 2, 1 / 3] : _r322_t1 === r313_RMode.NarrowHookSerifed ? [4 / 3, 2 / 3, 3 / 4, 2 / 3] : _r322_t1 === r313_RMode.Hookless ? [2 * r319_df.adws - 1, 0, 0, 1 / 3] : _r322_t1 === r313_RMode.HooklessSerifed ? [2 * r319_df.adws - 1, 0, 0, 1 / 3] : _r322_t1 === r313_RMode.CornerHook ? [5 / 8, 0, 0, 1 / 3] : _r322_t1 === r313_RMode.CornerHookSerifed ? [4 / 3, 0, 0, 2 / 3] : _r322_t1 === r313_RMode.Earless ? [1, 1, 1 / 2, 1 / 3] : _r322_t1 === r313_RMode.EarlessSerifed ? [4 / 3, 1, 1 / 2, 2 / 3] : _r322_t1 === r313_RMode.Half ? [1, 0, 0, 0] : void 0);
                var r322_rBalanceMultiplier = _r322_t0[0];
                var r322_rHookMultiplier = _r322_t0[1];
                var r322_rHookSwMultiplier = _r322_t0[2];
                var r322_rSerifLeftExtender = _r322_t0[3];
                r322_exports.rBarLeftX = r322_rBarLeftX = (_r322_t2 = r319_mode, _r322_t2 === r313_RMode.Half ? r1_mix(r319_df.leftSB, r319_df.middle - r313_HSwToV(0.5 * r322_strokeBar) - r313_IBalance2(r319_df), r322_rBalanceMultiplier) : (r322___ = _r322_t2, r319_df.leftSB + r313_RBalance * r322_rBalanceMultiplier));
                r322_exports.rBarRightX = r322_rBarRightX = r319_df.width - r322_rBarLeftX;
                var r322_rTopLeftSerifX = r322_rBarLeftX + r313_HSwToV(0.5 * r322_strokeBar);
                var r322_rTopRightSerifX = r319_df.width - r322_rTopLeftSerifX;
                r322_exports.rTopSerifJut = r322_rTopSerifJut = (_r322_t3 = r319_mode, _r322_t3 === r313_RMode.Half ? Math.max(r313_HSwToV(0.5 * r322_strokeBar) + r313_SideJut, r1_mix(r313_MidJutCenter - r313_IBalance(r319_df), r322_rTopLeftSerifX - r319_df.leftSB, r322_rSerifLeftExtender)) : (r322___ = _r322_t3, r313_HSwToV(0.5 * r322_strokeBar) + r313_SideJut + r313_RBalance * r322_rSerifLeftExtender));
                r322_exports.rTopLeftSerif = r322_rTopLeftSerif = function (r333_y) {
                    var _r333_t0, _r333_t1;
                    return r313_tagged("serifLT", r313_HSerif.lt(r322_rTopLeftSerifX, r333_y, r322_rTopSerifJut, r322_strokeA));
                };
                r322_exports.rTopRightSerif = r322_rTopRightSerif = function (r335_y) {
                    var _r335_t0, _r335_t1;
                    return r313_tagged("serifRT", r313_HSerif.rt(r322_rTopRightSerifX, r335_y, r322_rTopSerifJut, r322_strokeA));
                };
                var r322_rBottomLeftSerifX = (_r322_t4 = r319_mode, _r322_t4 === r313_RMode.Half ? r322_rTopLeftSerifX + r313_IBalance(r319_df) : (r322___ = _r322_t4, r322_rTopLeftSerifX));
                var r322_rBottomRightSerifX = r319_df.width - r322_rBottomLeftSerifX;
                r322_exports.rBottomSerifJutOut = r322_rBottomSerifJutOut = (_r322_t5 = r319_mode, _r322_t5 === r313_RMode.Half ? r322_rTopSerifJut + r313_IBalance(r319_df) : (r322___ = _r322_t5, r322_rTopSerifJut));
                r322_exports.rBottomSerifJutIn = r322_rBottomSerifJutIn = r1_mix(r313_HSwToV(0.5 * r322_strokeBar), r322_rBottomSerifJutOut, (_r322_t6 = r319_mode, _r322_t6 === r313_RMode.Half ? 1 : (r322___ = _r322_t6, 1.2)));
                r322_exports.rBottomLeftSerif = r322_rBottomLeftSerif = function (r339_y) {
                    var _r339_t0, _r339_t1;
                    return r313_tagged("serifLB", r313_union(r313_HSerif.lb(r322_rBottomLeftSerifX, r339_y, r322_rBottomSerifJutOut, r322_strokeA), r313_HSerif.rb(r322_rBottomLeftSerifX, r339_y, r322_rBottomSerifJutIn, r322_strokeA)));
                };
                r322_exports.rBottomRightSerif = r322_rBottomRightSerif = function (r341_y) {
                    var _r341_t0, _r341_t1;
                    return r313_tagged("serifRB", r313_union(r313_HSerif.lb(r322_rBottomRightSerifX, r341_y, r322_rBottomSerifJutIn, r322_strokeA), r313_HSerif.rb(r322_rBottomRightSerifX, r341_y, r322_rBottomSerifJutOut, r322_strokeA)));
                };
                var r322_rHookRightXFull = (_r322_t7 = r319_mode, _r322_t7 === r313_RMode.NarrowHook || _r322_t7 === r313_RMode.NarrowHookSerifed ? r1_mix(r322_rBarLeftX + r313_HSwToV(r322_strokeBar), r319_df.rightSB + r313_RBalance2 * r322_rBalanceMultiplier - (r313_OX - r313_O), r1_mix(0.85, 1.15, r313_para.advanceScaleF < 1 ? (1 - r319_df.adws) / (1 - r313_para.advanceScaleF) : 0)) : _r322_t7 === r313_RMode.Half ? Math.max(r322_rBarLeftX + r313_HSwToV(r322_strokeBar + 0.125 * r322_stroke) + r313_TINY + Math.abs(r313_TanSlope * r322_stroke), r313_Arch["adjust-x"].top(r322_rBarLeftX + r313_HSwToV(0.5 * r322_strokeBar) + r313_HookX, new r313_xn$NamedParameterPair$2Lrc9b("sw", r322_strokeA)) - r313_OXHook) : (r322___ = _r322_t7, r319_df.rightSB + r313_RBalance2 * r322_rBalanceMultiplier - (r313_OX - r313_O)));
                r322_exports.rArchMiddleX = r322_rArchMiddleX = (_r322_t8 = r319_mode, _r322_t8 === r313_RMode.Standard || _r322_t8 === r313_RMode.NarrowHook ? r1_mix(r322_rBarLeftX + r313_HSwToV(r322_strokeBar - r322_fine), r322_rHookRightXFull, 0.54 + r319_sign * 2 * r313_TanSlope * r322_strokeBar / r313_Width) : _r322_t8 === r313_RMode.StandardSerifed || _r322_t8 === r313_RMode.NarrowHookSerifed ? r1_mix(r322_rBarLeftX + r313_HSwToV(r322_strokeBar - r322_fine), r322_rHookRightXFull, 0.59 + r319_sign * 2 * r313_TanSlope * r322_strokeBar / r313_Width) : _r322_t8 === r313_RMode.Hookless || _r322_t8 === r313_RMode.HooklessSerifed ? r1_mix(r319_df.width, r322_rHookRightXFull, Math.max(1.01, 1.25 * r1_mix(1, r313_para.advanceScaleF, 2))) : _r322_t8 === r313_RMode.CornerHook || _r322_t8 === r313_RMode.CornerHookSerifed ? r322_rHookRightXFull - r313_HSwToV(0.5 * r322_strokeBar) : (r322___ = _r322_t8, r1_mix(r322_rBarLeftX, r322_rHookRightXFull, 0.5)));
                r322_exports.rArchCoMiddleX = r322_rArchCoMiddleX = r319_df.width - r322_rArchMiddleX;
                var r322_pMixIn = (_r322_t9 = r319_mode, _r322_t9 === r313_RMode.StandardSerifed || _r322_t9 === r313_RMode.NarrowHookSerifed || _r322_t9 === r313_RMode.CornerHook || _r322_t9 === r313_RMode.CornerHookSerifed ? 0.65 + r319_sign * 4 * r313_TanSlope * r322_strokeA / r313_Width + 0.25 * r322_strokeA / r313_Width : (r322___ = _r322_t9, 0.65 + r319_sign * 4 * r313_TanSlope * r322_strokeA / r313_Width));
                var r322_rMiddleIn = r1_mix(r322_rBarLeftX + r313_HSwToV(r322_strokeBar), r322_rHookRightXFull - r313_HSwToV(1.05 * r322_strokeA), r322_pMixIn) - r319_sign * r313_CorrectionOMidS;
                r322_exports.rSkew = r322_rSkew = r1_clamp(0, r313_HVContrast, (r322_rArchMiddleX - r322_rMiddleIn) / r322_stroke - r319_sign * r313_TanSlope);
                r322_exports.rHookRightX = r322_rHookRightX = (_r322_t10 = r319_mode, _r322_t10 === r313_RMode.Hookless ? r322_rArchMiddleX + r313_TINY : _r322_t10 === r313_RMode.HooklessSerifed ? r1_mix(r319_df.width, r322_rHookRightXFull, r319_df.adws) : (r322___ = _r322_t10, r322_rHookRightXFull));
                r322_exports.rHookLeftX = r322_rHookLeftX = r319_df.width - r322_rHookRightX;
                r322_exports.rHookDepthY = r322_rHookDepthY = r313_RHook * r322_rHookMultiplier + r322_stroke * r322_rHookSwMultiplier;
                r322_exports.rCorX = r322_rCorX = (_r322_t11 = r319_mode, _r322_t11 === r313_RMode.CornerHook || _r322_t11 === r313_RMode.CornerHookSerifed ? 0 : (r322___ = _r322_t11, r313_CorrectionOMidS * r1_linreg(72, 0.75, 108, 1, r322_stroke)));
                r322_exports.rArchTopShiftY = r322_rArchTopShiftY = (_r322_t12 = r319_mode, _r322_t12 === r313_RMode.Hookless || _r322_t12 === r313_RMode.HooklessSerifed ? r313_O * r1_clamp(0, 1, r313_StrokeWidthBlend(0, 16)) : (r322___ = _r322_t12, 0));
                var r322_rArchDepth = (_r322_t13 = r319_mode, _r322_t13 === r313_RMode.Earless || _r322_t13 === r313_RMode.EarlessSerifed ? r313_SmallArchDepth : _r322_t13 === r313_RMode.Half ? r313_Hook : (r322___ = _r322_t13, 0.47 * (r313_XH - 0)));
                r322_exports.rArchDepthA = r322_rArchDepthA = r313_ArchDepthAClamped(r313_XH, 0, r313_ArchDepthAOf(r322_rArchDepth), r313_ArchDepthBOf(r322_rArchDepth));
                r322_exports.rArchDepthB = r322_rArchDepthB = r313_ArchDepthBClamped(r313_XH, 0, r313_ArchDepthAOf(r322_rArchDepth), r313_ArchDepthBOf(r322_rArchDepth));
                r322_exports.setMarks = r322_setMarks = function (r354_top, r354_bottom, r354_doTopSerif, r354_doBottomSerif) {
                    var _r354_t0, _r354_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r356_currentGlyph) {
                        var _r356_t0, _r356_t1;
                        r356_currentGlyph.include(r313_LeaningAnchor.Below.VBar.l(r322_rBarLeftX, r322_strokeBar));
                        r356_currentGlyph.include(r313_LeaningAnchor.Above.Hook(r354_doTopSerif ? r322_rTopLeftSerifX - r322_rTopSerifJut : r322_rBarLeftX, r322_rHookRightX));
                        r356_currentGlyph.setBaseAnchor("overlay", r322_rBarLeftX + r313_HSwToV(0.5 * r322_strokeBar), r1_mix(r354_bottom, r354_top, 0.5));
                        r356_currentGlyph.setBaseAnchor("hooktopAttach", r322_rBarLeftX + r313_HSwToV(0.5 * r322_strokeBar), r354_top);
                        var r356_xAtt = r354_doBottomSerif ? r322_rBottomLeftSerifX + r322_rBottomSerifJutIn : r322_rBarLeftX + r313_HSwToV(r322_strokeBar);
                        var r356_xPos = r356_xAtt + (r354_doBottomSerif ? 0 : r313_PalatalHook.adviceGap(r313_Stroke));
                        r356_currentGlyph.setBaseAnchor("palatalHookAttach", r356_xAtt, r354_bottom);
                        r356_currentGlyph.setBaseAnchor("palatalHookPos", r356_xPos, r354_bottom);
                        r356_currentGlyph.copyBaseAnchorIfAbsent("leaningAbove", "above");
                        r356_currentGlyph.copyBaseAnchorIfAbsent("leaningBelow", "below");
                        return void 0;
                    });
                };
                r322_exports.setTurnedMarks = r322_setTurnedMarks = function (r364_top, r364_bottom, r364_doTopSerif, r364_doBottomSerif) {
                    var _r364_t0, _r364_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r366_currentGlyph) {
                        var _r366_t0, _r366_t1;
                        r366_currentGlyph.include(r313_LeaningAnchor.Above.VBar.r(r322_rBarRightX, r322_strokeBar));
                        r366_currentGlyph.include(r313_LeaningAnchor.Below.Hook(r364_doTopSerif ? r322_rTopRightSerifX + r322_rTopSerifJut : r322_rBarRightX, r322_rHookLeftX));
                        r366_currentGlyph.setBaseAnchor("overlay", r322_rBarRightX - r313_HSwToV(0.5 * r322_strokeBar), r1_mix(r364_bottom, r364_top, 0.5));
                        var r366_xAtt = r364_doTopSerif ? r322_rTopRightSerifX + r322_rTopSerifJut : r322_rBarRightX;
                        var r366_xPos = r366_xAtt + (r364_doTopSerif ? 0 : r364_doBottomSerif ? r322_rTopSerifJut - r313_HSwToV(0.5 * r322_strokeBar) : r313_SideJut);
                        r366_currentGlyph.setBaseAnchor("palatalHookAttach", r366_xAtt, r364_bottom);
                        r366_currentGlyph.setBaseAnchor("palatalHookPos", r366_xPos, r364_bottom);
                        r366_currentGlyph.copyBaseAnchorIfAbsent("leaningAbove", "above");
                        r366_currentGlyph.copyBaseAnchorIfAbsent("leaningBelow", "below");
                        return void 0;
                    });
                };
                r322_exports.setReversedMarks = r322_setReversedMarks = function (r373_top, r373_bottom, r373_doTopSerif, r373_doBottomSerif) {
                    var _r373_t0, _r373_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r375_currentGlyph) {
                        var _r375_t0, _r375_t1;
                        r375_currentGlyph.include(r313_LeaningAnchor.Below.VBar.r(r322_rBarRightX, r322_strokeBar));
                        r375_currentGlyph.include(r313_LeaningAnchor.Above.Hook(r373_doTopSerif ? r322_rTopRightSerifX + r322_rTopSerifJut : r322_rBarRightX, r322_rHookLeftX));
                        r375_currentGlyph.setBaseAnchor("overlay", r322_rBarRightX - r313_HSwToV(0.5 * r322_strokeBar), r1_mix(r373_bottom, r373_top, 0.5));
                        r375_currentGlyph.setBaseAnchor("hooktopAttach", r322_rBarRightX - r313_HSwToV(0.5 * r322_strokeBar), r373_top);
                        var r375_xAtt = r373_doBottomSerif ? r322_rBottomRightSerifX + r322_rBottomSerifJutOut : r322_rBarRightX;
                        var r375_xPos = r375_xAtt + (r373_doBottomSerif ? 0 : r313_PalatalHook.adviceGap(r313_Stroke));
                        r375_currentGlyph.setBaseAnchor("palatalHookAttach", r375_xAtt, r373_bottom);
                        r375_currentGlyph.setBaseAnchor("palatalHookPos", r375_xPos, r373_bottom);
                        r375_currentGlyph.copyBaseAnchorIfAbsent("leaningAbove", "above");
                        r375_currentGlyph.copyBaseAnchorIfAbsent("leaningBelow", "below");
                        return void 0;
                    });
                };
                r322_exports.setInvertedMarks = r322_setInvertedMarks = function (r383_top, r383_bottom, r383_doTopSerif, r383_doBottomSerif) {
                    var _r383_t0, _r383_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r385_currentGlyph) {
                        var _r385_t0, _r385_t1;
                        r385_currentGlyph.include(r313_LeaningAnchor.Above.VBar.l(r322_rBarLeftX, r322_strokeBar));
                        r385_currentGlyph.include(r313_LeaningAnchor.Below.Hook(r383_doTopSerif ? r322_rTopLeftSerifX - r322_rTopSerifJut : r322_rBarLeftX, r322_rHookRightX));
                        r385_currentGlyph.setBaseAnchor("overlay", r322_rBarLeftX + r313_HSwToV(0.5 * r322_strokeBar), r1_mix(r383_bottom, r383_top, 0.5));
                        r385_currentGlyph.setBaseAnchor("palatalHookAttach", r322_rHookRightX, r383_bottom + r322_rHookDepthY);
                        r385_currentGlyph.setBaseAnchor("palatalHookPos", r322_rHookRightX, r383_bottom);
                        r385_currentGlyph.copyBaseAnchorIfAbsent("leaningAbove", "above");
                        r385_currentGlyph.copyBaseAnchorIfAbsent("leaningBelow", "below");
                        return void 0;
                    });
                };
                return r322_exports;
            })();
        };
        var r313_SmallRShape = (function () {
            var r393_Standard, r393_Hookless, r393_CornerHook, r393_FlatTop, r393_EarlessCorner, r393_EarlessCornerHTB, r393_EarlessRounded, r393_HooklessFlap, r393_CornerHookFlap;
            var r393_exports = {};
            r393_exports.Standard = r393_Standard = function (r401_df, r401_md, r401_top, r401_bottom, r401_doTopSerif, r401_doBottomSerif) {
                var _r401_t0, _r401_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r403_currentGlyph) {
                    var _r403_t1, _r403_t2;
                    var _r403_t0 = r313_RDim(+1, r401_df, r401_md);
                    var r403_rBarLeftX = _r403_t0.rBarLeftX;
                    var r403_rBottomLeftSerif = _r403_t0.rBottomLeftSerif;
                    var r403_rTopLeftSerif = _r403_t0.rTopLeftSerif;
                    var r403_rArchMiddleX = _r403_t0.rArchMiddleX;
                    var r403_rSkew = _r403_t0.rSkew;
                    var r403_rHookRightX = _r403_t0.rHookRightX;
                    var r403_rHookDepthY = _r403_t0.rHookDepthY;
                    var r403_rCorX = _r403_t0.rCorX;
                    var r403_rArchDepthA = _r403_t0.rArchDepthA;
                    r403_currentGlyph.include(r313_dispiro(r313_widths.lhs(), r313_g4.up.start(r403_rHookRightX, r401_top - r403_rHookDepthY, r313_heading(r313_Upward)), r313_arcvh(32, r313_DesignParameters.rHookSuperness), r313_g4.left.mid(r403_rArchMiddleX - r403_rCorX, r401_top - r313_O, r313_widths.lhs.heading(r313_Stroke, {
                        "x": -r403_rSkew,
                        "y": -1
                    })), r313_archv(32), r313_straight.down.end(r403_rBarLeftX + r313_HSwToV(r313_Stroke - r313_ShoulderFine), Math.max(r401_bottom + r313_TINY, r401_top - r403_rArchDepthA), r313_widths.lhs.heading(r313_ShoulderFine, r313_Downward))));
                    r403_currentGlyph.include(r313_tagged("strokeL", r313_VBar.l(r403_rBarLeftX, r401_bottom, r401_top)));
                    if (r401_doBottomSerif) r403_currentGlyph.include(r403_rBottomLeftSerif(r401_bottom));
                    if (r401_doTopSerif) r403_currentGlyph.include(r403_rTopLeftSerif(r401_top));
                    return void 0;
                });
            };
            var r393_HooklessShapeImpl = function (r408_doHookSerif) {
                var _r408_t0, _r408_t1;
                return function (r409_df, r409_md, r409_top, r409_bottom, r409_doTopSerif, r409_doBottomSerif) {
                    var _r409_t0, _r409_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r411_currentGlyph) {
                        var _r411_t1, _r411_t2;
                        var _r411_t0 = r313_RDim(+1, r409_df, r409_md);
                        var r411_rBarLeftX = _r411_t0.rBarLeftX;
                        var r411_rBottomLeftSerif = _r411_t0.rBottomLeftSerif;
                        var r411_rTopLeftSerif = _r411_t0.rTopLeftSerif;
                        var r411_rArchMiddleX = _r411_t0.rArchMiddleX;
                        var r411_rHookRightX = _r411_t0.rHookRightX;
                        var r411_rCorX = _r411_t0.rCorX;
                        var r411_rArchTopShiftY = _r411_t0.rArchTopShiftY;
                        var r411_rArchDepthA = _r411_t0.rArchDepthA;
                        var r411_ArcKnots = function () {
                            var _r412_t0, _r412_t1;
                            return [r313_flat(r411_rHookRightX - r411_rCorX, r409_top - r411_rArchTopShiftY, r408_doHookSerif ? r313_heading(r313_Leftward) : null), r313_curl(r411_rArchMiddleX - r411_rCorX, r409_top - r411_rArchTopShiftY, r408_doHookSerif ? r313_heading(r313_Leftward) : null), r313_archv(), r313_straight.down.end(r411_rBarLeftX + r313_HSwToV(r313_Stroke - r313_ShoulderFine), Math.max(r409_bottom + r313_TINY, r409_top - r411_rArchDepthA), r313_widths.lhs.heading(r313_ShoulderFine, r313_Downward))];
                        };
                        r411_currentGlyph.include(r313_dispiro(r313_widths.lhs(r313_Stroke - r411_rArchTopShiftY), r411_ArcKnots()));
                        r411_currentGlyph.include(r313_tagged("strokeL", r313_VBar.l(r411_rBarLeftX, r409_bottom, r409_top)));
                        if (r408_doHookSerif) r411_currentGlyph.include(r313_intersection(r313_VSerif.dr(r411_rHookRightX - r411_rCorX, r409_top, r313_VJut), r313_xn$spirooutline$1aao(r411_ArcKnots(), r313_corner(r411_rBarLeftX + r313_HSwToV(r313_Stroke - r313_ShoulderFine), r409_bottom), r313_corner(r313_xn$VERYFAR$5sIl, r409_bottom), r313_corner(r313_xn$VERYFAR$5sIl, r409_top))));
                        if (r409_doBottomSerif) r411_currentGlyph.include(r411_rBottomLeftSerif(r409_bottom));
                        if (r409_doTopSerif) r411_currentGlyph.include(r411_rTopLeftSerif(r409_top));
                        return void 0;
                    });
                };
            };
            r393_exports.Hookless = r393_Hookless = function (r419_df, r419_md, r419_top, r419_bottom, r419_ts, r419_bs) {
                var _r419_t0, _r419_t1;
                return r393_HooklessShapeImpl(false)(r419_df, r419_md, r419_top, r419_bottom, r419_ts, r419_bs);
            };
            r393_exports.CornerHook = r393_CornerHook = function (r421_df, r421_md, r421_top, r421_bottom, r421_ts, r421_bs) {
                var _r421_t0, _r421_t1;
                return r393_HooklessShapeImpl(true)(r421_df, r421_md, r421_top, r421_bottom, r421_ts, r421_bs);
            };
            r393_exports.FlatTop = r393_FlatTop = function (r423_df, r423_md, r423_top, r423_bottom, r423_doTopSerif, r423_doBottomSerif) {
                var _r423_t0, _r423_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r425_currentGlyph) {
                    var _r425_t1, _r425_t2;
                    var _r425_t0 = r313_RDim(+1, r423_df, r423_md);
                    var r425_rBarLeftX = _r425_t0.rBarLeftX;
                    var r425_rArchMiddleX = _r425_t0.rArchMiddleX;
                    var r425_rHookRightX = _r425_t0.rHookRightX;
                    var r425_rHookDepthY = _r425_t0.rHookDepthY;
                    var r425_rBottomLeftSerif = _r425_t0.rBottomLeftSerif;
                    var r425_rTopLeftSerif = _r425_t0.rTopLeftSerif;
                    r425_currentGlyph.include(r313_dispiro(r313_widths.lhs(), r313_g4.up.start(r425_rHookRightX, r423_top - r425_rHookDepthY, r313_heading(r313_Upward)), r313_arcvh(void 0, r313_DesignParameters.rHookSuperness), r313_flat(r313_Arch["adjust-x"].top(r425_rArchMiddleX), r423_top), r313_curl(r425_rBarLeftX - r313_O, r423_top, r313_heading(r313_Leftward))));
                    r425_currentGlyph.include(r313_tagged("strokeL", r313_VBar.l(r425_rBarLeftX, r423_bottom, r423_top)));
                    if (r423_doBottomSerif) r425_currentGlyph.include(r425_rBottomLeftSerif(r423_bottom));
                    if (r423_doTopSerif) r425_currentGlyph.include(r425_rTopLeftSerif(r423_top));
                    return void 0;
                });
            };
            var r393_EarlessCornerShapeImpl = function (r430_offsetY0) {
                var _r430_t0, _r430_t1;
                return function (r431_df, r431_md, r431_top, r431_bottom, r431_doTopSerif, r431_doBottomSerif) {
                    var _r431_t0, _r431_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r433_currentGlyph) {
                        var _r433_t1, _r433_t2;
                        var _r433_t0 = r313_RDim(+1, r431_df, r431_md);
                        var r433_rBarLeftX = _r433_t0.rBarLeftX;
                        var r433_rArchMiddleX = _r433_t0.rArchMiddleX;
                        var r433_rHookRightX = _r433_t0.rHookRightX;
                        var r433_rHookDepthY = _r433_t0.rHookDepthY;
                        var r433_rBottomLeftSerif = _r433_t0.rBottomLeftSerif;
                        r433_currentGlyph.include(r313_dispiro(r313_widths.lhs(), r313_g4.up.start(r433_rHookRightX, r431_top - r433_rHookDepthY, r313_heading(r313_Upward)), r313_arcvh(void 0, r313_DesignParameters.rHookSuperness), r313_g4.left.mid(r433_rArchMiddleX - r313_CorrectionOMidS, r431_top - r313_O, r313_heading(r313_Leftward)), r313_g4(r433_rBarLeftX, r431_top - r313_DToothlessRise)));
                        r433_currentGlyph.include(r313_tagged("strokeL", r313_VBar.l(r433_rBarLeftX, r431_bottom, r431_top - r430_offsetY0)));
                        if (r431_doBottomSerif) r433_currentGlyph.include(r433_rBottomLeftSerif(r431_bottom));
                        return void 0;
                    });
                };
            };
            r393_exports.EarlessCorner = r393_EarlessCorner = function (r438_df, r438_md, r438_top, r438_bottom, r438_ts, r438_bs) {
                var _r438_t0, _r438_t1;
                return r393_EarlessCornerShapeImpl(r313_DToothlessRise)(r438_df, r438_md, r438_top, r438_bottom, r438_ts, r438_bs);
            };
            r393_exports.EarlessCornerHTB = r393_EarlessCornerHTB = function (r440_df, r440_md, r440_top, r440_bottom, r440_ts, r440_bs) {
                var _r440_t0, _r440_t1;
                return r393_EarlessCornerShapeImpl(0)(r440_df, r440_md, r440_top, r440_bottom, r440_ts, r440_bs);
            };
            r393_exports.EarlessRounded = r393_EarlessRounded = function (r442_df, r442_md, r442_top, r442_bottom, r442_doTopSerif, r442_doBottomSerif) {
                var _r442_t0, _r442_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r444_currentGlyph) {
                    var _r444_t1, _r444_t2;
                    var _r444_t0 = r313_RDim(+1, r442_df, r442_md);
                    var r444_rBarLeftX = _r444_t0.rBarLeftX;
                    var r444_rHookRightX = _r444_t0.rHookRightX;
                    var r444_rHookDepthY = _r444_t0.rHookDepthY;
                    var r444_rBottomLeftSerif = _r444_t0.rBottomLeftSerif;
                    var r444_rArchDepthA = _r444_t0.rArchDepthA;
                    r444_currentGlyph.include(r313_dispiro(r313_widths.lhs(), r313_g4(Math.max(r444_rHookRightX, r444_rBarLeftX + r313_HSwToV(2.25 * r313_Stroke)), r442_top - r444_rHookDepthY), r313_HookStart(r442_top), r313_flat(r444_rBarLeftX, Math.max(r442_bottom + r313_TINY + r313_HSwToV(Math.abs(r313_TanSlope * r313_Stroke)), r442_top - r444_rArchDepthA)), r313_curl(r444_rBarLeftX, r442_bottom, r313_heading(r313_Downward))));
                    if (r442_doBottomSerif) r444_currentGlyph.include(r444_rBottomLeftSerif(r442_bottom));
                    return void 0;
                });
            };
            var r393_HooklessFlapImpl = function (r447_doHookSerif) {
                var _r447_t0, _r447_t1;
                return function (r448_df, r448_md, r448_top, r448_bottom, r448_doTopSerif, r448_doBottomSerif) {
                    var _r448_t0, _r448_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r450_currentGlyph) {
                        var _r450_t1, _r450_t2;
                        var _r450_t0 = r313_RDim(+1, r448_df, r448_md);
                        var r450_rBarLeftX = _r450_t0.rBarLeftX;
                        var r450_rBottomLeftSerif = _r450_t0.rBottomLeftSerif;
                        var r450_rArchMiddleX = _r450_t0.rArchMiddleX;
                        var r450_rHookRightX = _r450_t0.rHookRightX;
                        var r450_rCorX = _r450_t0.rCorX;
                        var r450_rArchTopShiftY = _r450_t0.rArchTopShiftY;
                        var r450_rArchDepthA = _r450_t0.rArchDepthA;
                        var r450_ArcKnots = function () {
                            var _r451_t0, _r451_t1;
                            return [r313_flat(r450_rHookRightX - r450_rCorX, r448_top - r450_rArchTopShiftY, r447_doHookSerif ? r313_heading(r313_Leftward) : null), r313_curl(r450_rArchMiddleX - r450_rCorX, r448_top - r450_rArchTopShiftY, r447_doHookSerif ? r313_heading(r313_Leftward) : null), r313_archv(), r313_flat(r450_rBarLeftX, Math.max(r448_bottom + r313_TINY + r313_HSwToV(Math.abs(r313_TanSlope * r313_Stroke)), r448_top - r450_rArchDepthA), r313_widths.lhs()), r313_curl(r450_rBarLeftX, r448_bottom, r313_heading(r313_Downward))];
                        };
                        r450_currentGlyph.include(r313_dispiro(r313_widths.lhs(r313_Stroke - r450_rArchTopShiftY), r450_ArcKnots()));
                        if (r447_doHookSerif) r450_currentGlyph.include(r313_intersection(r313_VSerif.dr(r450_rHookRightX - r450_rCorX, r448_top, r313_VJut), r313_xn$spirooutline$1aao(r450_ArcKnots(), r313_corner(r450_rBarLeftX + r313_TINY, r448_bottom), r313_corner(r313_xn$VERYFAR$5sIl, r448_bottom), r313_corner(r313_xn$VERYFAR$5sIl, r448_top))));
                        if (r448_doBottomSerif) r450_currentGlyph.include(r450_rBottomLeftSerif(r448_bottom));
                        return void 0;
                    });
                };
            };
            r393_exports.HooklessFlap = r393_HooklessFlap = function (r456_df, r456_md, r456_top, r456_bottom, r456_ts, r456_bs) {
                var _r456_t0, _r456_t1;
                return r393_HooklessFlapImpl(false)(r456_df, r456_md, r456_top, r456_bottom, r456_ts, r456_bs);
            };
            r393_exports.CornerHookFlap = r393_CornerHookFlap = function (r458_df, r458_md, r458_top, r458_bottom, r458_ts, r458_bs) {
                var _r458_t0, _r458_t1;
                return r393_HooklessFlapImpl(true)(r458_df, r458_md, r458_top, r458_bottom, r458_ts, r458_bs);
            };
            return r393_exports;
        })();
        var r313_SmallRevRShape = (function () {
            var r461_Standard, r461_Hookless, r461_CornerHook, r461_FlatTop, r461_EarlessCorner, r461_EarlessCornerHTB, r461_EarlessRounded, r461_HooklessFlap, r461_CornerHookFlap;
            var r461_exports = {};
            r461_exports.Standard = r461_Standard = function (r469_df, r469_md, r469_top, r469_bottom, r469_doTopSerif, r469_doBottomSerif) {
                var _r469_t0, _r469_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r471_currentGlyph) {
                    var _r471_t1, _r471_t2;
                    var _r471_t0 = r313_RDim(-1, r469_df, r469_md);
                    var r471_rBarRightX = _r471_t0.rBarRightX;
                    var r471_rBottomRightSerif = _r471_t0.rBottomRightSerif;
                    var r471_rTopRightSerif = _r471_t0.rTopRightSerif;
                    var r471_rArchCoMiddleX = _r471_t0.rArchCoMiddleX;
                    var r471_rSkew = _r471_t0.rSkew;
                    var r471_rHookLeftX = _r471_t0.rHookLeftX;
                    var r471_rHookDepthY = _r471_t0.rHookDepthY;
                    var r471_rCorX = _r471_t0.rCorX;
                    var r471_rArchDepthB = _r471_t0.rArchDepthB;
                    r471_currentGlyph.include(r313_dispiro(r313_widths.rhs(), r313_g4.up.start(r471_rHookLeftX, r469_top - r471_rHookDepthY, r313_heading(r313_Upward)), r313_arcvh(32, r313_DesignParameters.rHookSuperness), r313_g4.right.mid(r471_rArchCoMiddleX - r471_rCorX, r469_top - r313_O, r313_widths.rhs.heading(r313_Stroke, {
                        "x": -r471_rSkew,
                        "y": +1
                    })), r313_archv(32), r313_straight.down.end(r471_rBarRightX - r313_HSwToV(r313_Stroke - r313_ShoulderFine), Math.max(r469_bottom + r313_TINY, r469_top - r471_rArchDepthB), r313_widths.rhs.heading(r313_ShoulderFine, r313_Downward))));
                    r471_currentGlyph.include(r313_tagged("strokeR", r313_VBar.r(r471_rBarRightX, r469_bottom, r469_top)));
                    if (r469_doBottomSerif) r471_currentGlyph.include(r471_rBottomRightSerif(r469_bottom));
                    if (r469_doTopSerif) r471_currentGlyph.include(r471_rTopRightSerif(r469_top));
                    return void 0;
                });
            };
            var r461_HooklessShapeImpl = function (r476_doHookSerif) {
                var _r476_t0, _r476_t1;
                return function (r477_df, r477_md, r477_top, r477_bottom, r477_doTopSerif, r477_doBottomSerif) {
                    var _r477_t0, _r477_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r479_currentGlyph) {
                        var _r479_t1, _r479_t2;
                        var _r479_t0 = r313_RDim(-1, r477_df, r477_md);
                        var r479_rBarRightX = _r479_t0.rBarRightX;
                        var r479_rBottomRightSerif = _r479_t0.rBottomRightSerif;
                        var r479_rTopRightSerif = _r479_t0.rTopRightSerif;
                        var r479_rArchCoMiddleX = _r479_t0.rArchCoMiddleX;
                        var r479_rHookLeftX = _r479_t0.rHookLeftX;
                        var r479_rCorX = _r479_t0.rCorX;
                        var r479_rArchTopShiftY = _r479_t0.rArchTopShiftY;
                        var r479_rArchDepthB = _r479_t0.rArchDepthB;
                        var r479_ArcKnots = function () {
                            var _r480_t0, _r480_t1;
                            return [r313_flat(r479_rHookLeftX - r479_rCorX, r477_top - r479_rArchTopShiftY, r476_doHookSerif ? r313_heading(r313_Rightward) : null), r313_curl(r479_rArchCoMiddleX - r479_rCorX, r477_top - r479_rArchTopShiftY, r476_doHookSerif ? r313_heading(r313_Rightward) : null), r313_archv(), r313_straight.down.end(r479_rBarRightX - r313_HSwToV(r313_Stroke - r313_ShoulderFine), Math.max(r477_bottom + r313_TINY, r477_top - r479_rArchDepthB), r313_widths.rhs.heading(r313_ShoulderFine, r313_Downward))];
                        };
                        r479_currentGlyph.include(r313_dispiro(r313_widths.rhs(r313_Stroke - r479_rArchTopShiftY), r479_ArcKnots()));
                        r479_currentGlyph.include(r313_tagged("strokeR", r313_VBar.r(r479_rBarRightX, r477_bottom, r477_top)));
                        if (r476_doHookSerif) r479_currentGlyph.include(r313_intersection(r313_VSerif.dl(r479_rHookLeftX - r479_rCorX, r477_top, r313_VJut), r313_xn$spirooutline$1aao(r479_ArcKnots(), r313_corner(r479_rBarRightX - r313_HSwToV(r313_Stroke - r313_ShoulderFine), r477_bottom), r313_corner(-r313_xn$VERYFAR$5sIl, r477_bottom), r313_corner(-r313_xn$VERYFAR$5sIl, r477_top))));
                        if (r477_doBottomSerif) r479_currentGlyph.include(r479_rBottomRightSerif(r477_bottom));
                        if (r477_doTopSerif) r479_currentGlyph.include(r479_rTopRightSerif(r477_top));
                        return void 0;
                    });
                };
            };
            r461_exports.Hookless = r461_Hookless = function (r487_df, r487_md, r487_top, r487_bottom, r487_ts, r487_bs) {
                var _r487_t0, _r487_t1;
                return r461_HooklessShapeImpl(false)(r487_df, r487_md, r487_top, r487_bottom, r487_ts, r487_bs);
            };
            r461_exports.CornerHook = r461_CornerHook = function (r489_df, r489_md, r489_top, r489_bottom, r489_ts, r489_bs) {
                var _r489_t0, _r489_t1;
                return r461_HooklessShapeImpl(true)(r489_df, r489_md, r489_top, r489_bottom, r489_ts, r489_bs);
            };
            r461_exports.FlatTop = r461_FlatTop = function (r491_df, r491_md, r491_top, r491_bottom, r491_doTopSerif, r491_doBottomSerif) {
                var _r491_t0, _r491_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r493_currentGlyph) {
                    var _r493_t1, _r493_t2;
                    var _r493_t0 = r313_RDim(-1, r491_df, r491_md);
                    var r493_rBarRightX = _r493_t0.rBarRightX;
                    var r493_rArchCoMiddleX = _r493_t0.rArchCoMiddleX;
                    var r493_rHookLeftX = _r493_t0.rHookLeftX;
                    var r493_rHookDepthY = _r493_t0.rHookDepthY;
                    var r493_rBottomRightSerif = _r493_t0.rBottomRightSerif;
                    var r493_rTopRightSerif = _r493_t0.rTopRightSerif;
                    r493_currentGlyph.include(r313_dispiro(r313_widths.rhs(), r313_g4.up.start(r493_rHookLeftX, r491_top - r493_rHookDepthY, r313_heading(r313_Upward)), r313_arcvh(void 0, r313_DesignParameters.rHookSuperness), r313_flat(r313_Arch["adjust-x"].top(r493_rArchCoMiddleX), r491_top), r313_curl(r493_rBarRightX + r313_O, r491_top, r313_heading(r313_Rightward))));
                    r493_currentGlyph.include(r313_tagged("strokeR", r313_VBar.r(r493_rBarRightX, r491_bottom, r491_top)));
                    if (r491_doBottomSerif) r493_currentGlyph.include(r493_rBottomRightSerif(r491_bottom));
                    if (r491_doTopSerif) r493_currentGlyph.include(r493_rTopRightSerif(r491_top));
                    return void 0;
                });
            };
            var r461_EarlessCornerShapeImpl = function (r498_offsetY0) {
                var _r498_t0, _r498_t1;
                return function (r499_df, r499_md, r499_top, r499_bottom, r499_doTopSerif, r499_doBottomSerif) {
                    var _r499_t0, _r499_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r501_currentGlyph) {
                        var _r501_t1, _r501_t2;
                        var _r501_t0 = r313_RDim(-1, r499_df, r499_md);
                        var r501_rBarRightX = _r501_t0.rBarRightX;
                        var r501_rArchCoMiddleX = _r501_t0.rArchCoMiddleX;
                        var r501_rHookLeftX = _r501_t0.rHookLeftX;
                        var r501_rHookDepthY = _r501_t0.rHookDepthY;
                        var r501_rBottomRightSerif = _r501_t0.rBottomRightSerif;
                        r501_currentGlyph.include(r313_dispiro(r313_widths.rhs(), r313_g4.up.start(r501_rHookLeftX, r499_top - r501_rHookDepthY, r313_heading(r313_Upward)), r313_arcvh(void 0, r313_DesignParameters.rHookSuperness), r313_g4.right.mid(r501_rArchCoMiddleX - r313_CorrectionOMidS, r499_top - r313_O, r313_heading(r313_Rightward)), r313_g4(r501_rBarRightX, r499_top - r313_DToothlessRise)));
                        r501_currentGlyph.include(r313_tagged("strokeR", r313_VBar.r(r501_rBarRightX, r499_bottom, r499_top - r498_offsetY0)));
                        if (r499_doBottomSerif) r501_currentGlyph.include(r501_rBottomRightSerif(r499_bottom));
                        return void 0;
                    });
                };
            };
            r461_exports.EarlessCorner = r461_EarlessCorner = function (r506_df, r506_md, r506_top, r506_bottom, r506_ts, r506_bs) {
                var _r506_t0, _r506_t1;
                return r461_EarlessCornerShapeImpl(r313_DToothlessRise)(r506_df, r506_md, r506_top, r506_bottom, r506_ts, r506_bs);
            };
            r461_exports.EarlessCornerHTB = r461_EarlessCornerHTB = function (r508_df, r508_md, r508_top, r508_bottom, r508_ts, r508_bs) {
                var _r508_t0, _r508_t1;
                return r461_EarlessCornerShapeImpl(0)(r508_df, r508_md, r508_top, r508_bottom, r508_ts, r508_bs);
            };
            r461_exports.EarlessRounded = r461_EarlessRounded = function (r510_df, r510_md, r510_top, r510_bottom, r510_doTopSerif, r510_doBottomSerif) {
                var _r510_t0, _r510_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r512_currentGlyph) {
                    var _r512_t1, _r512_t2;
                    var _r512_t0 = r313_RDim(-1, r510_df, r510_md);
                    var r512_rBarRightX = _r512_t0.rBarRightX;
                    var r512_rHookLeftX = _r512_t0.rHookLeftX;
                    var r512_rHookDepthY = _r512_t0.rHookDepthY;
                    var r512_rBottomRightSerif = _r512_t0.rBottomRightSerif;
                    var r512_rArchDepthB = _r512_t0.rArchDepthB;
                    r512_currentGlyph.include(r313_dispiro(r313_widths.rhs(), r313_g4(Math.min(r512_rHookLeftX, r512_rBarRightX - r313_HSwToV(2.25 * r313_Stroke)), r510_top - r512_rHookDepthY), r313_HookStart(r510_top), r313_flat(r512_rBarRightX, Math.max(r510_bottom + r313_TINY + r313_HSwToV(Math.abs(r313_TanSlope * r313_Stroke)), r510_top - r512_rArchDepthB)), r313_curl(r512_rBarRightX, r510_bottom, r313_heading(r313_Downward))));
                    if (r510_doBottomSerif) r512_currentGlyph.include(r512_rBottomRightSerif(r510_bottom));
                    return void 0;
                });
            };
            var r461_HooklessFlapImpl = function (r515_doHookSerif) {
                var _r515_t0, _r515_t1;
                return function (r516_df, r516_md, r516_top, r516_bottom, r516_doTopSerif, r516_doBottomSerif) {
                    var _r516_t0, _r516_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r518_currentGlyph) {
                        var _r518_t1, _r518_t2;
                        var _r518_t0 = r313_RDim(-1, r516_df, r516_md);
                        var r518_rBarRightX = _r518_t0.rBarRightX;
                        var r518_rBottomRightSerif = _r518_t0.rBottomRightSerif;
                        var r518_rArchCoMiddleX = _r518_t0.rArchCoMiddleX;
                        var r518_rHookLeftX = _r518_t0.rHookLeftX;
                        var r518_rCorX = _r518_t0.rCorX;
                        var r518_rArchTopShiftY = _r518_t0.rArchTopShiftY;
                        var r518_rArchDepthB = _r518_t0.rArchDepthB;
                        var r518_ArcKnots = function () {
                            var _r519_t0, _r519_t1;
                            return [r313_flat(r518_rHookLeftX - r518_rCorX, r516_top - r518_rArchTopShiftY, r515_doHookSerif ? r313_heading(r313_Rightward) : null), r313_curl(r518_rArchCoMiddleX - r518_rCorX, r516_top - r518_rArchTopShiftY, r515_doHookSerif ? r313_heading(r313_Rightward) : null), r313_archv(), r313_flat(r518_rBarRightX, Math.max(r516_bottom + r313_TINY + r313_HSwToV(Math.abs(r313_TanSlope * r313_Stroke)), r516_top - r518_rArchDepthB), r313_widths.rhs()), r313_curl(r518_rBarRightX, r516_bottom, r313_heading(r313_Downward))];
                        };
                        r518_currentGlyph.include(r313_dispiro(r313_widths.rhs(r313_Stroke - r518_rArchTopShiftY), r518_ArcKnots()));
                        if (r515_doHookSerif) r518_currentGlyph.include(r313_intersection(r313_VSerif.dl(r518_rHookLeftX - r518_rCorX, r516_top, r313_VJut), r313_xn$spirooutline$1aao(r518_ArcKnots(), r313_corner(r518_rBarRightX - r313_TINY, r516_bottom), r313_corner(-r313_xn$VERYFAR$5sIl, r516_bottom), r313_corner(-r313_xn$VERYFAR$5sIl, r516_top))));
                        if (r516_doBottomSerif) r518_currentGlyph.include(r518_rBottomRightSerif(r516_bottom));
                        return void 0;
                    });
                };
            };
            r461_exports.HooklessFlap = r461_HooklessFlap = function (r524_df, r524_md, r524_top, r524_bottom, r524_ts, r524_bs) {
                var _r524_t0, _r524_t1;
                return r461_HooklessFlapImpl(false)(r524_df, r524_md, r524_top, r524_bottom, r524_ts, r524_bs);
            };
            r461_exports.CornerHookFlap = r461_CornerHookFlap = function (r526_df, r526_md, r526_top, r526_bottom, r526_ts, r526_bs) {
                var _r526_t0, _r526_t1;
                return r461_HooklessFlapImpl(true)(r526_df, r526_md, r526_top, r526_bottom, r526_ts, r526_bs);
            };
            return r461_exports;
        })();
        var r313_SmallRConfig = r1_SuffixCfg.weave({
            "": [r313_SmallRShape.Standard, r313_dfN, r313_RMode.Standard, r313_RMode.StandardSerifed],
            "flatTop": [r313_SmallRShape.FlatTop, r313_dfN, r313_RMode.Earless, r313_RMode.EarlessSerifed],
            "earlessCorner": [r313_SmallRShape.EarlessCorner, r313_dfN, r313_RMode.Earless, r313_RMode.EarlessSerifed],
            "earlessCornerHTB": [r313_SmallRShape.EarlessCornerHTB, r313_dfN, r313_RMode.Earless, r313_RMode.EarlessSerifed],
            "earlessRounded": [r313_SmallRShape.EarlessRounded, r313_dfN, r313_RMode.Earless, r313_RMode.EarlessSerifed],
            "hookless": [r313_SmallRShape.Hookless, r313_dfN, r313_RMode.Hookless, r313_RMode.HooklessSerifed],
            "cornerHooked": [r313_SmallRShape.CornerHook, r313_dfN, r313_RMode.CornerHook, r313_RMode.CornerHookSerifed],
            "compact": [r313_SmallRShape.Hookless, r313_dfF, r313_RMode.Hookless, r313_RMode.HooklessSerifed],
            "narrowHook": [r313_SmallRShape.Standard, r313_dfF, r313_RMode.NarrowHook, r313_RMode.NarrowHookSerifed],
            "earlessRoundedHookless": [r313_SmallRShape.HooklessFlap, r313_dfN, r313_RMode.Hookless, r313_RMode.HooklessSerifed],
            "earlessRoundedCornerHooked": [r313_SmallRShape.CornerHookFlap, r313_dfN, r313_RMode.CornerHook, r313_RMode.CornerHookSerifed],
            "earlessRoundedCompact": [r313_SmallRShape.HooklessFlap, r313_dfF, r313_RMode.Hookless, r313_RMode.HooklessSerifed],
            "earlessRoundedNarrowHook": [r313_SmallRShape.EarlessRounded, r313_dfF, r313_RMode.NarrowHook, r313_RMode.NarrowHookSerifed]
        }, {
            "serifless": [false, false],
            "topSerifed": [true, false],
            "baseSerifed": [false, true],
            "serifed": [true, true]
        });
        var _r313_t10 = _r1_t2(r313_SmallRConfig)[Symbol.iterator]();
        var _r313_t11 = void 0;
        while (!(_r313_t11 = _r313_t10.next()).done) {
            _r313_t12 = _r313_t11.value;
            r313_suffix = _r313_t12[0];
            r313_Body = _r313_t12[1][0][0];
            r313_df = _r313_t12[1][0][1];
            r313_modeSans = _r313_t12[1][0][2];
            r313_modeSerifed = _r313_t12[1][0][3];
            _r313_t12[1][0];
            r313_doTS = _r313_t12[1][1][0];
            r313_doBS = _r313_t12[1][1][1];
            _r313_t12[1][1];
            _r313_t12[1];
            (function () {
                var r531_mode = r313_doTS || r313_doBS ? r313_modeSerifed : r313_modeSans;
                r313_xn$GlyphSaveSink$2Lrc4b.save("r." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r534_currentGlyph) {
                    var _r534_t1, _r534_t2;
                    r534_currentGlyph.setWidth(r313_df.width);
                    r534_currentGlyph.include(r313_df.markSet.e());
                    var _r534_t0 = r313_RDim(+1, r313_df, r531_mode);
                    var r534_setMarks = _r534_t0.setMarks;
                    r534_currentGlyph.include(r534_setMarks(r313_XH, 0, r313_doTS, r313_doBS));
                    r534_currentGlyph.include(r313_Body(r313_df, r531_mode, r313_XH, 0, r313_doTS, r313_doBS));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("rLongLeg." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r541_currentGlyph) {
                    var _r541_t1, _r541_t2;
                    r541_currentGlyph.setWidth(r313_df.width);
                    r541_currentGlyph.include(r313_df.markSet.p());
                    var _r541_t0 = r313_RDim(+1, r313_df, r531_mode);
                    var r541_setMarks = _r541_t0.setMarks;
                    r541_currentGlyph.include(r541_setMarks(r313_XH, r313_Descender, r313_doTS, r313_doBS));
                    r541_currentGlyph.include(r313_Body(r313_df, r531_mode, r313_XH, r313_Descender, r313_doTS, r313_doBS));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("rCapLongLeg." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r548_currentGlyph) {
                    var _r548_t1, _r548_t2;
                    r548_currentGlyph.setWidth(r313_df.width);
                    r548_currentGlyph.include(r313_df.markSet.capDesc());
                    var _r548_t0 = r313_RDim(+1, r313_df, r531_mode);
                    var r548_setMarks = _r548_t0.setMarks;
                    r548_currentGlyph.include(r548_setMarks(r313_CAP, r313_Descender, r313_doTS, r313_doBS));
                    r548_currentGlyph.include(r313_Body(r313_df, r531_mode, r313_CAP, r313_Descender, r313_doTS, r313_doBS));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("fInsular." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r555_currentGlyph) {
                    var _r555_t1, _r555_t2;
                    r555_currentGlyph.include(r313_xn$referglyph$1aao("rLongLeg." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    var _r555_t0 = r313_RDim(+1, r313_df, r531_mode);
                    var r555_rBarLeftX = _r555_t0.rBarLeftX;
                    var r555_rHookRightX = _r555_t0.rHookRightX;
                    r555_currentGlyph.include(r313_HBar.b(r555_rBarLeftX - r313_O, r555_rHookRightX - Math.max(0.15 * (r313_df.rightSB - r313_df.leftSB), r313_HSwToV(r313_QuarterStroke)), 0));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("FInsular." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r560_currentGlyph) {
                    var _r560_t1, _r560_t2;
                    r560_currentGlyph.include(r313_xn$referglyph$1aao("rCapLongLeg." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    var _r560_t0 = r313_RDim(+1, r313_df, r531_mode);
                    var r560_rBarLeftX = _r560_t0.rBarLeftX;
                    var r560_rHookRightX = _r560_t0.rHookRightX;
                    r560_currentGlyph.include(r313_HBar.b(r560_rBarLeftX - r313_O, r560_rHookRightX - Math.max(0.15 * (r313_df.rightSB - r313_df.leftSB), r313_HSwToV(r313_QuarterStroke)), 0));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("rPalatalHook." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r565_currentGlyph) {
                    var _r565_t0, _r565_t1;
                    r565_currentGlyph.include(r313_xn$referglyph$1aao("r." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    var r565_attach = r565_currentGlyph.gizmo.unapply(r565_currentGlyph.baseAnchors.palatalHookAttach);
                    var r565_pos = r565_currentGlyph.gizmo.unapply(r565_currentGlyph.baseAnchors.palatalHookPos);
                    r565_currentGlyph.include(r313_PalatalHook.r(new r313_xn$NamedParameterPair$2Lrc9b("x", r565_pos.x), new r313_xn$NamedParameterPair$2Lrc9b("y", r565_pos.y), new r313_xn$NamedParameterPair$2Lrc9b("xLink", r565_attach.x)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("turnr." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r573_currentGlyph) {
                    var _r573_t1, _r573_t2;
                    r573_currentGlyph.setWidth(r313_df.width);
                    r573_currentGlyph.include(r313_df.markSet.e());
                    var _r573_t0 = r313_RDim(+1, r313_df, r531_mode);
                    var r573_setTurnedMarks = _r573_t0.setTurnedMarks;
                    r573_currentGlyph.include(r573_setTurnedMarks(r313_XH, 0, r313_doTS, r313_doBS));
                    r573_currentGlyph.include(r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r580_currentGlyph) {
                        var _r580_t0, _r580_t1;
                        r580_currentGlyph.include(r313_xn$referglyph$1aao("r." + r313_suffix), true, true);
                        r580_currentGlyph.include(r313_FlipAround(r313_df.middle, r313_XH / 2));
                        return void 0;
                    })));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("turnrLongLeg." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r585_currentGlyph) {
                    var _r585_t1, _r585_t2;
                    r585_currentGlyph.setWidth(r313_df.width);
                    r585_currentGlyph.include(r313_df.markSet.b());
                    var _r585_t0 = r313_RDim(+1, r313_df, r531_mode);
                    var r585_setTurnedMarks = _r585_t0.setTurnedMarks;
                    r585_currentGlyph.include(r585_setTurnedMarks(r313_Ascender, 0, r313_doTS, r313_doBS));
                    r585_currentGlyph.include(r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r592_currentGlyph) {
                        var _r592_t0, _r592_t1;
                        r592_currentGlyph.include(r313_xn$referglyph$1aao("rLongLeg." + r313_suffix), true, true);
                        r592_currentGlyph.include(r313_FlipAround(r313_df.middle, r313_XH / 2));
                        return void 0;
                    })));
                    return void 0;
                }));
                if (!r313_doTS) {
                    r313_xn$GlyphSaveSink$2Lrc4b.save("turnrPalatalHook." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r597_currentGlyph) {
                        var _r597_t0, _r597_t1;
                        r597_currentGlyph.include(r313_xn$referglyph$1aao("turnr." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                        var r597_attach = r597_currentGlyph.gizmo.unapply(r597_currentGlyph.baseAnchors.palatalHookAttach);
                        var r597_pos = r597_currentGlyph.gizmo.unapply(r597_currentGlyph.baseAnchors.palatalHookPos);
                        r597_currentGlyph.include(r313_PalatalHook.r(new r313_xn$NamedParameterPair$2Lrc9b("x", r597_pos.x), new r313_xn$NamedParameterPair$2Lrc9b("y", r597_pos.y), new r313_xn$NamedParameterPair$2Lrc9b("xLink", r597_attach.x)));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save("turnrRTail." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r605_currentGlyph) {
                        var _r605_t1, _r605_t2;
                        r605_currentGlyph.include(r313_xn$referglyph$1aao("turnr." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                        r605_currentGlyph.ejectTagged("serifLT");
                        var _r605_t0 = r313_RDim(+1, r313_df, r531_mode);
                        var r605_rBarRightX = _r605_t0.rBarRightX;
                        r605_currentGlyph.include(r313_RetroflexHook.rExt(r605_rBarRightX, 0));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save("turnrLongLegRTail." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r611_currentGlyph) {
                        var _r611_t1, _r611_t2;
                        r611_currentGlyph.include(r313_xn$referglyph$1aao("turnrLongLeg." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                        r611_currentGlyph.ejectTagged("serifLT");
                        var _r611_t0 = r313_RDim(+1, r313_df, r531_mode);
                        var r611_rBarRightX = _r611_t0.rBarRightX;
                        r611_currentGlyph.include(r313_RetroflexHook.rExt(r611_rBarRightX, 0));
                        return void 0;
                    }));
                }
                return !r313_doBS ? (r313_xn$GlyphSaveSink$2Lrc4b.save("rRTail." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r617_currentGlyph) {
                    var _r617_t1, _r617_t2;
                    r617_currentGlyph.include(r313_xn$referglyph$1aao("r." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r617_currentGlyph.ejectTagged("serifLB");
                    var _r617_t0 = r313_RDim(+1, r313_df, r531_mode);
                    var r617_rBarLeftX = _r617_t0.rBarLeftX;
                    r617_currentGlyph.include(r313_RetroflexHook.lExt(r617_rBarLeftX, 0));
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("rRTailPalatalHook." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r623_currentGlyph) {
                    var _r623_t1, _r623_t2;
                    r623_currentGlyph.setWidth(r313_df.width);
                    r623_currentGlyph.include(r313_df.markSet.e());
                    var _r623_t0 = r313_RDim(+1, r313_df, r531_mode);
                    var r623_rBarLeftX = _r623_t0.rBarLeftX;
                    var r623_setMarks = _r623_t0.setMarks;
                    r623_currentGlyph.include(r623_setMarks(r313_XH, 0, r313_doTS, r313_doBS));
                    var r623_hd = r313_FlatHookDepth(r313_df);
                    var r623_tailLength = r313_LongJut * 1.05 * r1_mix(1, r313_df.adws, 0.75);
                    var r623_xFinal = r623_rBarLeftX + Math.max(r623_tailLength + r313_HSwToV(r313_HalfStroke), r623_hd.x + 1) + r313_HalfStroke * r313_TanSlope;
                    r623_currentGlyph.include(r313_Body(r313_df, r531_mode, r313_XH, 0 + r623_hd.y, r313_doTS, r313_doBS));
                    r623_currentGlyph.include(r313_dispiro(r313_widths.center(), r313_flat(r623_rBarLeftX + r313_HSwToV(r313_HalfStroke), 0 + r623_hd.y + r313_TINY + r313_HSwToV(Math.abs(r313_TanSlope * r313_HalfStroke)), r313_heading(r313_Downward)), r313_curl(r623_rBarLeftX + r313_HSwToV(r313_HalfStroke), 0 + r623_hd.y), r313_arcvh.superness(r313_DesignParameters.tightHookSuperness), r313_flat(r623_rBarLeftX + r623_hd.x, 0 + r313_HalfStroke), r313_curl(r623_xFinal, 0 + r313_HalfStroke, r313_heading(r313_Rightward))));
                    r623_currentGlyph.include(r313_PalatalHook.r(r623_xFinal, 0, new r313_xn$NamedParameterPair$2Lrc9b("yOverflow", r313_Stroke)));
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("rCrossedTail." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r633_currentGlyph) {
                    var _r633_t1, _r633_t2;
                    r633_currentGlyph.setWidth(r313_df.width);
                    r633_currentGlyph.include(r313_df.markSet.e());
                    var _r633_t0 = r313_RDim(+1, r313_df, r531_mode);
                    var r633_rBarLeftX = _r633_t0.rBarLeftX;
                    var r633_setMarks = _r633_t0.setMarks;
                    r633_currentGlyph.include(r633_setMarks(r313_XH, 0, r313_doTS, r313_doBS));
                    var r633_fine = r313_AdviceStroke(4);
                    var r633_rinner = r313_XH * 0.15 - r633_fine * 0.75;
                    var r633_m2 = r633_rBarLeftX + r313_HSwToV(r313_AdviceStroke(3)) - (r313_RightSB - r313_SB) / 2 - r313_HSwToV(0.5 * r633_fine);
                    var r633_x2 = r633_rBarLeftX + r313_HSwToV(r313_AdviceStroke(2)) + r313_SideJut;
                    var r633_y2 = r633_rinner * 2 + r633_fine - r313_O;
                    r633_currentGlyph.include(r313_Body(r313_df, r531_mode, r313_XH, r633_y2 + r313_O, r313_doTS, r313_doBS));
                    r633_currentGlyph.include(r313_dispiro(r313_widths.rhs(), r313_straight.down.start(r633_rBarLeftX + r313_HSwToV(r313_Stroke), r633_y2, r313_heading(r313_Downward)), r313_CurlyTail.f(r633_fine, 0, r633_m2, r633_x2)));
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("turnrHookTop." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r641_currentGlyph) {
                    var _r641_t1, _r641_t2;
                    r641_currentGlyph.setWidth(r313_df.width);
                    r641_currentGlyph.include(r313_df.markSet.b());
                    var _r641_t0 = r313_RDim(+1, r313_df, r531_mode);
                    var r641_setTurnedMarks = _r641_t0.setTurnedMarks;
                    r641_currentGlyph.include(r641_setTurnedMarks(r313_Ascender, 0, r313_doTS, r313_doBS));
                    r641_currentGlyph.include(r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r648_currentGlyph) {
                        var _r648_t0, _r648_t1;
                        r648_currentGlyph.include(r313_xn$referglyph$1aao("rRTail." + r313_suffix), true, true);
                        r648_currentGlyph.include(r313_FlipAround(r313_df.middle, r313_XH / 2));
                        return void 0;
                    })));
                    return void 0;
                }))) : void 0;
            })();
        }
        r313_xn$selectvariant$7Hrq("r", "r");
        r313_xn$linkreducedvariant$5sIl8("r/sansSerif", "r", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("turnr", 633, new r313_xn$NamedParameterPair$2Lrc9b("follow", "r"));
        r313_xn$selectvariant$7Hrq("turnrLongLeg", 634, new r313_xn$NamedParameterPair$2Lrc9b("follow", "r"));
        r313_xn$selectvariant$7Hrq("turnrRTail", 635, new r313_xn$NamedParameterPair$2Lrc9b("follow", "r/hookTopBase"));
        r313_xn$selectvariant$7Hrq("rLongLeg", 636, new r313_xn$NamedParameterPair$2Lrc9b("follow", "r"));
        r313_xn$selectvariant$7Hrq("rRTail", 637, new r313_xn$NamedParameterPair$2Lrc9b("follow", "r/rTailBase"));
        r313_xn$selectvariant$7Hrq("rFlap", 638, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "r"));
        r313_xn$selectvariant$7Hrq("rPalatalHook", 7561, new r313_xn$NamedParameterPair$2Lrc9b("follow", "r"));
        r313_xn$selectvariant$7Hrq("turnrHookTop", 11385, new r313_xn$NamedParameterPair$2Lrc9b("follow", "r/rTailBase"));
        r313_xn$selectvariant$7Hrq("rCrossedTail", 43849, new r313_xn$NamedParameterPair$2Lrc9b("follow", "r/rTailBase"));
        r313_xn$selectvariant$7Hrq("turnrLongLegRTail", 122632, new r313_xn$NamedParameterPair$2Lrc9b("follow", "r/hookTopBase"));
        r313_xn$selectvariant$7Hrq("turnrPalatalHook", 122645, new r313_xn$NamedParameterPair$2Lrc9b("follow", "r/ascBase"));
        r313_xn$selectvariant$7Hrq("rFlapPalatalHook", 122646, new r313_xn$NamedParameterPair$2Lrc9b("follow", "rFlap"), new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "rPalatalHook"));
        r313_xn$selectvariant$7Hrq("rRTailPalatalHook", 122679, new r313_xn$NamedParameterPair$2Lrc9b("follow", "r/rTailBase"));
        r313_xn$selectvariant$7Hrq("SInsular", 42884, new r313_xn$NamedParameterPair$2Lrc9b("follow", "r/rTailBase"), new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "rCapLongLeg"));
        r313_xn$selectvariant$7Hrq("sInsular", 42885, new r313_xn$NamedParameterPair$2Lrc9b("follow", "r/rTailBase"), new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "rLongLeg"));
        r313_xn$selectvariant$7Hrq("FInsular", 42875, new r313_xn$NamedParameterPair$2Lrc9b("follow", "r/rTailBase"));
        r313_xn$selectvariant$7Hrq("fInsular", 42876, new r313_xn$NamedParameterPair$2Lrc9b("follow", "r/rTailBase"));
        r313_CreateAccentedComposition("turnrBar", 122704, "turnr", "barOver");
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r672_t0, _r672_t1;
            return {
                "MidHeightRightHookXFromStem": r313_MidHeightRightHookXFromStem
            };
        });
        var r313_MidHeightRightHookXFromStem = function (r673_g) {
            var _r673_t0, _r673_t1;
            return r673_g.gizmo.unapply(r673_g.baseAnchors.hooktopAttach || r673_g.baseAnchors.overlay).x;
        };
        var r313_LFlapStemX = function (r674_xOrig, r674_rGn, r674_dfOuter) {
            var _r674_t0, _r674_t1;
            var r674_rRef = r313_xn$queryglyph$1aao(r674_rGn);
            var r674_xRStem = r674_rRef.gizmo.unapply(r674_rRef.baseAnchors.hooktopAttach || r674_rRef.baseAnchors.overlay).x;
            var r674_xRHook = r674_rRef.gizmo.unapply(r674_rRef.baseAnchors.leaningAbove || r674_rRef.baseAnchors.above).x;
            var r674_spread = Math.max(r313_TINY, r674_xRHook - r674_xRStem + r313_HSwToV(r313_HalfStroke));
            var r674_k = Math.min(1, (r674_dfOuter.rightSB - r674_xOrig - r313_HSwToV(r313_HalfStroke) - r313_O) / r674_spread);
            return r674_xOrig - r674_k * r674_spread;
        };
        var r313_LFlapStemXForGlyph = function (r675_xOrig, r675_rGn, r675_dfOuter, r675_xRStem) {
            var _r675_t0, _r675_t1;
            return r313_para.isQuasiProportional ? r675_xRStem : r313_LFlapStemX(r675_xOrig, r675_rGn, r675_dfOuter);
        };
        var r313_LFlapLOverlay = function (r676_lGn, r676_xShift) {
            var _r676_t0, _r676_t1;
            return r313_xn$withtransform$5sIl(r313_Translate(r676_xShift, 0), r313_xn$referglyph$1aao(r676_lGn));
        };
        var r313_LFlapBody = function (r677_lGn, r677_xShift, r677_xStem) {
            var _r677_t0, _r677_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r679_currentGlyph) {
                var _r679_t0, _r679_t1;
                var r679_rLeanAbove = r679_currentGlyph.gizmo.unapply(r679_currentGlyph.baseAnchors.leaningAbove);
                var r679_yHookTop = r313_XH + r313_O;
                var r679_yHookBot = r679_rLeanAbove.y - r313_O;
                var r679_xStemRight = r677_xStem + r313_HSwToV(r313_HalfStroke) + r313_O;
                r679_currentGlyph.include(r313_union(r313_intersection(r313_MaskAbove(r679_yHookTop), r313_LFlapLOverlay(r677_lGn, r677_xShift)), r313_intersection(r313_MaskBelow(r679_yHookBot), r313_LFlapLOverlay(r677_lGn, r677_xShift)), r313_intersection(r313_MaskAbove(r679_yHookBot), r313_MaskBelow(r679_yHookTop), r313_MaskLeft(r679_xStemRight), r313_LFlapLOverlay(r677_lGn, r677_xShift))));
                return void 0;
            });
        };
        r313_xn$linkreducedvariant$5sIl8("lFlap/r", "r");
        r313_xn$derivemultipartglyphs$7Hrq65("lFlap", 122641, ["l", "lFlap/r"], function (r681_srcs, r681_gr) {
            var _r681_t0, _r681_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r683_currentGlyph) {
                var _r683_t1, _r683_t2;
                var _r683_t0 = r681_srcs;
                var r683_l = _r683_t0[0];
                var r683_r = _r683_t0[1];
                var r683_df = r313_DivFrame(1);
                r683_currentGlyph.include(r683_df.markSet.b());
                var r683_lRef = r313_xn$queryglyph$1aao(r683_l);
                var r683_xOrig = r683_lRef.gizmo.unapply(r683_lRef.baseAnchors.hooktopAttach || r683_lRef.baseAnchors.overlay).x;
                var r683_lOverlay = r683_lRef.gizmo.unapply(r683_lRef.baseAnchors.overlay);
                r683_currentGlyph.include(r313_xn$referglyph$1aao(r683_r), r313_AS_BASE, r313_ALSO_METRICS);
                var r683_xRStem = r313_MidHeightRightHookXFromStem(r683_currentGlyph);
                var r683_xStem = r313_LFlapStemXForGlyph(r683_xOrig, r683_r, r683_df, r683_xRStem);
                var r683_xShift = r683_xStem - r683_xOrig;
                r683_currentGlyph.include(r313_Translate(r683_xStem - r683_xRStem, 0));
                r683_currentGlyph.ejectTagged("strokeL");
                r683_currentGlyph.ejectTagged("serifLT");
                r683_currentGlyph.ejectTagged("serifLB");
                r683_currentGlyph.include(r313_LFlapBody(r683_l, r683_xShift, r683_xStem));
                r683_currentGlyph.include(r313_LeaningAnchor.Above.At(r683_xStem));
                r683_currentGlyph.include(r313_LeaningAnchor.Below.At(r683_xStem));
                r683_currentGlyph.setBaseAnchor("overlay", r683_lOverlay.x + r683_xShift, r683_lOverlay.y);
                r683_currentGlyph.setBaseAnchor("hooktopAttach", r683_xStem, r313_XH);
                return void 0;
            });
        });
        var r313_HalfRShape = (function () {
            var r697_Standard, r697_FlatTop, r697_EarlessCorner, r697_EarlessRounded;
            var r697_exports = {};
            r697_exports.Standard = r697_Standard = function (r705_df, r705_md, r705_top, r705_bottom, r705_doTopSerif, r705_doBottomSerif) {
                var _r705_t0, _r705_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r707_currentGlyph) {
                    var _r707_t1, _r707_t2;
                    var _r707_t0 = r313_RDim(+1, r705_df, r705_md);
                    var r707_rBarLeftX = _r707_t0.rBarLeftX;
                    var r707_rBottomLeftSerif = _r707_t0.rBottomLeftSerif;
                    var r707_rTopLeftSerif = _r707_t0.rTopLeftSerif;
                    var r707_rHookRightX = _r707_t0.rHookRightX;
                    var r707_rArchDepthA = _r707_t0.rArchDepthA;
                    r707_currentGlyph.include(r313_dispiro(r313_widths.lhs(), r313_g4.left.start(r707_rHookRightX, r705_top - r313_O), r313_archv(), r313_straight.down.end(r707_rBarLeftX + r313_HSwToV(r313_Stroke - r313_ShoulderFine), Math.max(r705_bottom + r313_TINY, r705_top - r707_rArchDepthA), r313_widths.lhs.heading(r313_ShoulderFine, r313_Downward))));
                    r707_currentGlyph.include(r313_tagged("strokeL", r313_VBar.l(r707_rBarLeftX, r705_bottom, r705_top)));
                    if (r705_doBottomSerif) r707_currentGlyph.include(r707_rBottomLeftSerif(r705_bottom));
                    if (r705_doTopSerif) r707_currentGlyph.include(r707_rTopLeftSerif(r705_top));
                    return void 0;
                });
            };
            r697_exports.FlatTop = r697_FlatTop = function (r713_df, r713_md, r713_top, r713_bottom, r713_doTopSerif, r713_doBottomSerif) {
                var _r713_t0, _r713_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r715_currentGlyph) {
                    var _r715_t1, _r715_t2;
                    var _r715_t0 = r313_RDim(+1, r713_df, r713_md);
                    var r715_rBarLeftX = _r715_t0.rBarLeftX;
                    var r715_rBottomLeftSerif = _r715_t0.rBottomLeftSerif;
                    var r715_rTopLeftSerif = _r715_t0.rTopLeftSerif;
                    var r715_rHookRightX = _r715_t0.rHookRightX;
                    r715_currentGlyph.include(r313_dispiro(r313_widths.lhs(), r313_flat(r715_rHookRightX, r713_top), r313_curl(r715_rBarLeftX - r313_O, r713_top, r313_heading(r313_Leftward))));
                    r715_currentGlyph.include(r313_tagged("strokeL", r313_VBar.l(r715_rBarLeftX, r713_bottom, r713_top)));
                    if (r713_doBottomSerif) r715_currentGlyph.include(r715_rBottomLeftSerif(r713_bottom));
                    if (r713_doTopSerif) r715_currentGlyph.include(r715_rTopLeftSerif(r713_top));
                    return void 0;
                });
            };
            r697_exports.EarlessCorner = r697_EarlessCorner = function (r721_df, r721_md, r721_top, r721_bottom, r721_doTopSerif, r721_doBottomSerif) {
                var _r721_t0, _r721_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r723_currentGlyph) {
                    var _r723_t1, _r723_t2;
                    var _r723_t0 = r313_RDim(+1, r721_df, r721_md);
                    var r723_rBarLeftX = _r723_t0.rBarLeftX;
                    var r723_rBottomLeftSerif = _r723_t0.rBottomLeftSerif;
                    var r723_rHookRightX = _r723_t0.rHookRightX;
                    r723_currentGlyph.include(r313_dispiro(r313_widths.lhs(), r313_g4.left.start(r723_rHookRightX, r721_top - r313_O), r313_g4(r723_rBarLeftX, r721_top - r313_DToothlessRise)));
                    r723_currentGlyph.include(r313_tagged("strokeL", r313_VBar.l(r723_rBarLeftX, r721_bottom, r721_top - r313_DToothlessRise)));
                    if (r721_doBottomSerif) r723_currentGlyph.include(r723_rBottomLeftSerif(r721_bottom));
                    return void 0;
                });
            };
            r697_exports.EarlessRounded = r697_EarlessRounded = function (r728_df, r728_md, r728_top, r728_bottom, r728_doTopSerif, r728_doBottomSerif) {
                var _r728_t0, _r728_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r730_currentGlyph) {
                    var _r730_t1, _r730_t2;
                    var _r730_t0 = r313_RDim(+1, r728_df, r728_md);
                    var r730_rBarLeftX = _r730_t0.rBarLeftX;
                    var r730_rBottomLeftSerif = _r730_t0.rBottomLeftSerif;
                    var r730_rHookRightX = _r730_t0.rHookRightX;
                    var r730_rArchDepthA = _r730_t0.rArchDepthA;
                    r730_currentGlyph.include(r313_dispiro(r313_widths.lhs(), r313_g4.left.start(r730_rHookRightX, r728_top - r313_O), r313_archv(), r313_flat(r730_rBarLeftX, Math.max(r728_bottom + r313_TINY + r313_HSwToV(Math.abs(r313_TanSlope * r313_Stroke)), r728_top - r730_rArchDepthA)), r313_curl(r730_rBarLeftX, r728_bottom, r313_heading(r313_Downward))));
                    if (r728_doBottomSerif) r730_currentGlyph.include(r730_rBottomLeftSerif(r728_bottom));
                    return void 0;
                });
            };
            return r697_exports;
        })();
        var r313_HalfRConfig = r1_SuffixCfg.weave({
            "": r313_HalfRShape.Standard,
            "flatTop": r313_HalfRShape.FlatTop,
            "earlessCorner": r313_HalfRShape.EarlessCorner,
            "earlessRounded": r313_HalfRShape.EarlessRounded
        }, {
            "serifless": [false, false],
            "topSerifed": [true, false],
            "baseSerifed": [false, true],
            "serifed": [true, true]
        });
        var _r313_t13 = _r1_t2(r313_HalfRConfig)[Symbol.iterator]();
        var _r313_t14 = void 0;
        while (!(_r313_t14 = _r313_t13.next()).done) {
            _r313_t15 = _r313_t14.value;
            r313_suffix = _r313_t15[0];
            r313_Body = _r313_t15[1][0];
            r313_doTS = _r313_t15[1][1][0];
            r313_doBS = _r313_t15[1][1][1];
            _r313_t15[1][1];
            _r313_t15[1];
            (function () {
                return r313_xn$GlyphSaveSink$2Lrc4b.save("rHalf." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r739_currentGlyph) {
                    var _r739_t1, _r739_t2;
                    var r739_df = r739_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleI));
                    r739_currentGlyph.include(r739_df.markSet.e());
                    var _r739_t0 = r313_RDim(+1, r739_df, r313_RMode.Half);
                    var r739_setMarks = _r739_t0.setMarks;
                    r739_currentGlyph.include(r739_setMarks(r313_XH, 0, r313_doTS, r313_doBS));
                    r739_currentGlyph.include(r313_Body(r739_df, r313_RMode.Half, r313_XH, 0, r313_doTS, r313_doBS));
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("rHalf", 43847);
        var r313_DotlessIPigtailUprightConfig = {
            "serifless": [false, false, 0],
            "hooky": [false, true, 1],
            "hookyBottom": [true, false, 0],
            "zshaped": [true, true, 1],
            "zshapedAsymmetric": [true, true, 0.5]
        };
        var _r313_t16 = _r1_t2(r313_DotlessIPigtailUprightConfig)[Symbol.iterator]();
        var _r313_t17 = void 0;
        while (!(_r313_t17 = _r313_t16.next()).done) {
            _r313_t18 = _r313_t17.value;
            r313_suffix = _r313_t18[0];
            r313_doTS = _r313_t18[1][0];
            r313_doBS = _r313_t18[1][1];
            r313_kJut = _r313_t18[1][2];
            _r313_t18[1];
            (function () {
                var r747_mode = r313_doTS ? r313_RMode.NarrowHookSerifed : r313_RMode.NarrowHook;
                return r313_xn$GlyphSaveSink$2Lrc4b.save("dotlessiPigtail.upright." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r750_currentGlyph) {
                    var r750_jut, _r750_t1, _r750_t2;
                    var r750_df = r750_currentGlyph.include(r313_dfF);
                    r750_currentGlyph.include(r750_df.markSet.e());
                    var _r750_t0 = r313_RDim(+1, r750_df, r747_mode);
                    var r750_setTurnedMarks = _r750_t0.setTurnedMarks;
                    var r750_rBarRightX = _r750_t0.rBarRightX;
                    var r750_rTopSerifJut = _r750_t0.rTopSerifJut;
                    r750_currentGlyph.include(r750_setTurnedMarks(r313_XH, 0, r313_doTS, false));
                    r750_currentGlyph.include(r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r757_currentGlyph) {
                        var _r757_t0, _r757_t1;
                        r757_currentGlyph.include(r313_SmallRShape.Standard(r750_df, r747_mode, r313_XH, 0, r313_doTS, false), true, true);
                        r757_currentGlyph.include(r313_FlipAround(r750_df.middle, r313_XH / 2));
                        return void 0;
                    })));
                    if (r313_doBS) {
                        r750_jut = Math.max(r313_Jut, r1_mix(r313_HSwToV(r313_HalfStroke), r750_rTopSerifJut, r313_kJut));
                        r750_currentGlyph.include(r313_tagged("serifLB", r313_HSerif.lt(r750_rBarRightX - r313_HSwToV(r313_HalfStroke), r313_XH, r750_jut)));
                    }
                    return void 0;
                }));
            })();
        }
        var r313_DotlessIPigtailItalicConfig = {
            "serifless": [false, false, 0],
            "hooky": [false, true, 1],
            "serifed": [true, true, 1],
            "serifedAsymmetric": [true, true, 0.5]
        };
        var _r313_t19 = _r1_t2(r313_DotlessIPigtailItalicConfig)[Symbol.iterator]();
        var _r313_t20 = void 0;
        while (!(_r313_t20 = _r313_t19.next()).done) {
            _r313_t21 = _r313_t20.value;
            r313_suffix = _r313_t21[0];
            r313_doTS = _r313_t21[1][0];
            r313_doBS = _r313_t21[1][1];
            r313_kJut = _r313_t21[1][2];
            _r313_t21[1];
            (function () {
                var r764_mode = r313_doTS || r313_doBS ? r313_RMode.NarrowHookSerifed : r313_RMode.NarrowHook;
                return r313_xn$GlyphSaveSink$2Lrc4b.save("dotlessiPigtail.italic." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r767_currentGlyph) {
                    var r767_jut, _r767_t1, _r767_t2;
                    var r767_df = r767_currentGlyph.include(r313_dfF);
                    r767_currentGlyph.include(r767_df.markSet.e());
                    var _r767_t0 = r313_RDim(-1, r767_df, r764_mode);
                    var r767_setInvertedMarks = _r767_t0.setInvertedMarks;
                    var r767_rBarLeftX = _r767_t0.rBarLeftX;
                    var r767_rTopSerifJut = _r767_t0.rTopSerifJut;
                    r767_currentGlyph.include(r767_setInvertedMarks(r313_XH, 0, r313_doTS, r313_doBS));
                    r767_currentGlyph.include(r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r774_currentGlyph) {
                        var _r774_t0, _r774_t1;
                        r774_currentGlyph.include(r313_SmallRevRShape.Standard(r767_df, r764_mode, r313_XH, 0, r313_doTS, false), true, true);
                        r774_currentGlyph.include(r313_FlipAround(r767_df.middle, r313_XH / 2));
                        return void 0;
                    })));
                    if (r313_doBS) {
                        r767_jut = Math.max(r313_Jut, r1_mix(r313_HSwToV(r313_HalfStroke), r767_rTopSerifJut, r313_kJut) - (r313_doTS ? r313_IBalance(r767_df) : 0));
                        r767_currentGlyph.include(r313_tagged("serifRB", r313_HSerif.lt(r767_rBarLeftX + r313_HSwToV(r313_HalfStroke), r313_XH, r767_jut)));
                    }
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("dotlessiPigtail.upright");
        r313_xn$selectvariant$7Hrq("dotlessiPigtail.italic");
        var _r313_t22 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t22.BBS;
        var r313_BBD = _r313_t22.BBD;
        var r313_BBBarRight = _r313_t22.BBBarRight;
        var r313_BBRShape = function (r779_df, r779_md) {
            var _r779_t0, _r779_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r781_currentGlyph) {
                var _r781_t1, _r781_t2;
                var _r781_t0 = r313_RDim(+1, r779_df, r779_md, r313_BBS, r313_VSwToH(r313_BBD), r313_ShoulderFine);
                var r781_rBarLeftX = _r781_t0.rBarLeftX;
                var r781_rArchMiddleX = _r781_t0.rArchMiddleX;
                var r781_rSkew = _r781_t0.rSkew;
                var r781_rHookRightX = _r781_t0.rHookRightX;
                var r781_rHookDepthY = _r781_t0.rHookDepthY;
                var r781_rCorX = _r781_t0.rCorX;
                var r781_rArchDepthA = _r781_t0.rArchDepthA;
                r781_currentGlyph.include(r313_dispiro(r313_widths.lhs(r313_BBS), r313_g4.up.start(r781_rHookRightX, r313_XH - r781_rHookDepthY, r313_heading(r313_Upward)), r313_arcvh(void 0, r313_DesignParameters.rHookSuperness), r313_g4.left.mid(r781_rArchMiddleX - r781_rCorX, r313_XH - r313_O, r313_widths.lhs.heading(r313_BBS, {
                    "x": -r781_rSkew,
                    "y": -1
                })), r313_archv(), r313_straight.down.end(r781_rBarLeftX + r313_BBD - r313_HSwToV(r313_ShoulderFine), Math.max(0 + r313_TINY, r313_XH - r781_rArchDepthA), r313_widths.lhs.heading(r313_ShoulderFine, r313_Downward))));
                r781_currentGlyph.include(r313_BBBarRight(r781_rBarLeftX + r313_BBD, 0, r313_XH));
                r781_currentGlyph.setBaseAnchor("overlay", r1_mix(r781_rBarLeftX - r313_HSwToV(r313_BBS), r781_rBarLeftX + r313_BBD, 0.5), r1_mix(0, r313_XH, 0.5));
                return void 0;
            });
        };
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/r", 120163, new r313_xn$Capture$2Lrc8.GlyphProc(function (r787_currentGlyph) {
            var _r787_t0, _r787_t1;
            r787_currentGlyph.include(r313_MarkSet.e());
            r787_currentGlyph.include(r313_BBRShape(r313_DivFrame(1), r313_RMode.Standard));
            return void 0;
        }));
    });
    return void 0;
});


