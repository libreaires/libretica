"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t2 = function _r1_t10(r564_t) {
    var r564_n, r564_i, r564_a, _r564_t3, _r564_t4, _r564_t5, _r564_t6, _r564_t7, _r564_t8, _r564_t9, _r564_t10, _r564_t11, _r564_t12, _r564_t13, _r564_t14, _r564_t15, _r564_t16, _r564_t17, _r564_t18, _r564_t19, _r564_t20, _r564_t21, _r564_t22, _r564_t23, _r564_t24, _r564_t25, _r564_t26;
    var _r564_t0 = function () {
        _r564_t7 = function (_r564_t8) {
            _r564_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r564_t8
            };
        };
        _r564_t9 = r564_t instanceof Array;
        if (_r564_t9) {
            _r564_t10 = r564_n = r564_t.length;
            _r564_t11 = r564_i = 0;
            _r564_t12 = function (_r564_t14) {
                return _r564_t7(_r564_t14);
            };
            _r564_t13 = function (_r564_t15) {
                _r564_t16 = r564_i < r564_n;
                if (_r564_t16) {
                    _r564_t0 = function (_r564_t17) {
                        return _r564_t13(r564_i = r564_i + 1);
                    };
                    return {
                        "value": [r564_i, r564_t[r564_i]],
                        "done": false
                    };
                } else return _r564_t12(_r564_t15);
            };
            return _r564_t13();
        } else {
            _r564_t18 = r564_a = Object.keys(r564_t);
            _r564_t19 = r564_n = r564_a.length;
            _r564_t20 = r564_i = 0;
            _r564_t21 = function (_r564_t23) {
                return _r564_t7(_r564_t23);
            };
            _r564_t22 = function (_r564_t24) {
                _r564_t25 = r564_i < r564_n;
                if (_r564_t25) {
                    _r564_t0 = function (_r564_t26) {
                        return _r564_t22(r564_i = r564_i + 1);
                    };
                    return {
                        "value": [r564_a[r564_i], r564_t[r564_a[r564_i]]],
                        "done": false
                    };
                } else return _r564_t21(_r564_t24);
            };
            return _r564_t22();
        }
    };
    var _r564_t1 = function (x) {
        try {
            return _r564_t0(x);
        } catch (ex) {
            return _r564_t2(ex);
        }
    };
    var _r564_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10) _r564_t3 = this; else {
        _r564_t4 = function () {
            void 0;
        };
        _r564_t4.prototype = _r1_t10.prototype;
        _r564_t3 = new _r564_t4();
    }
    _r564_t3[Symbol.iterator] = function () {
        return _r564_t3;
    };
    _r564_t3.next = _r564_t1;
    _r564_t3.throw = function (x) {
        return _r564_t2(x);
    };
    return _r564_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_DependentSelector = _r1_t9.DependentSelector;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-S", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_doTS, r313_doBS, r313_sl, r313_fillType, r313_kBot, r313_kTop, r313_overflow, r313_selector, _r313_t17, _r313_t20, _r313_t21, _r313_t22, _r313_t23, _r313_tag24, _r313_t25, _r313_tag26;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_HalfUPM = _r313_t1.HalfUPM;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Ascender = _r313_t1.Ascender;
        var r313_Descender = _r313_t1.Descender;
        var r313_TanSlope = _r313_t1.TanSlope;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Upward = _r313_t1.Upward;
        var r313_Downward = _r313_t1.Downward;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_Hook = _r313_t1.Hook;
        var r313_SHook = _r313_t1.SHook;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_AdviceStroke2 = _r313_t1.AdviceStroke2;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_OverlayStroke = _r313_t1.OverlayStroke;
        var r313_CThin = _r313_t1.CThin;
        var r313_CThinB = _r313_t1.CThinB;
        var r313_EssRatioUpper = _r313_t1.EssRatioUpper;
        var r313_EssUpper = _r313_t1.EssUpper;
        var r313_EssLower = _r313_t1.EssLower;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_DToothlessRise = _r313_t1.DToothlessRise;
        var r313_StrokeWidthBlend = _r313_t1.StrokeWidthBlend;
        var r313_SmoothAdjust = _r313_t1.SmoothAdjust;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_g2 = _r313_t2.g2;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_virt = _r313_t2.virt;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_important = _r313_t2.important;
        var r313_alsoThru = _r313_t2.alsoThru;
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
        var r313_difference = _r313_t4.difference;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_xn$noshape$3cah = _r313_t5["no-shape"];
        var r313_FlatSlashShape = _r313_t5.FlatSlashShape;
        var r313_HookStart = _r313_t5.HookStart;
        var r313_HookEnd = _r313_t5.HookEnd;
        var r313_Arch = _r313_t5.Arch;
        var r313_ExtLineCenter = _r313_t5.ExtLineCenter;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_xn$derivecomposites$7Hrq = _r313_t6["derive-composites"];
        var r313_alias = _r313_t6.alias;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateAccentedComposition = _r313_t7.CreateAccentedComposition;
        var r313_CreateDependentComposite = _r313_t7.CreateDependentComposite;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t8.BBS;
        var r313_BBD = _r313_t8.BBD;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_FlatHookDepth = _r313_t9.FlatHookDepth;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_ArcStartSerifWidth = _r313_t10.ArcStartSerifWidth;
        var r313_ArcStartSerifDepth = _r313_t10.ArcStartSerifDepth;
        var _r313_t11 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_SerifedArcStart = _r313_t11.SerifedArcStart;
        var r313_SerifedArcEnd = _r313_t11.SerifedArcEnd;
        var _r313_t12 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_InwardSlabArcStart = _r313_t12.InwardSlabArcStart;
        var r313_InwardSlabArcEnd = _r313_t12.InwardSlabArcEnd;
        var _r313_t13 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_ArcStartSerif = _r313_t13.ArcStartSerif;
        var r313_ArcEndSerif = _r313_t13.ArcEndSerif;
        var _r313_t14 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_PalatalHook = _r313_t14.PalatalHook;
        var r313_RetroflexHook = _r313_t14.RetroflexHook;
        var r313_CyrDescender = _r313_t14.CyrDescender;
        var r313_CurlyTail = _r313_t14.CurlyTail;
        var r313_xn$SLABNONE$5sIl = 0;
        var r313_xn$SLABCLASSICAL$5sIl = 1;
        var r313_xn$SLABINWARD$5sIl = 2;
        var r313_xn$CURLYTAIL$1aao = 10;
        var r313_xn$PHONETICRIGHT$9XZu = 11;
        var r313_SOTop = 0;
        var r313_SOBot = r313_OX;
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r325_t0, _r325_t1;
            return {
                "AdviceSArchDepth": r313_AdviceSArchDepth
            };
        });
        var r313_AdviceSArchDepth = function (r326_y, r326_sign, r326__stroke) {
            var _r326_t0, _r326_t1;
            var r326_stroke = r1_fallback(r326__stroke, r313_Stroke);
            var r326_strokeFactor = r326_stroke * r1_clamp(1, 2, r1_linreg(126, 1, 137, 1.025, r326_stroke)) * r1_clamp(0, 1, Math.sqrt(r313_Width / r313_HalfUPM));
            var r326_widthFactor = r313_RightSB - r313_SB;
            var r326_ss = r326_y * 0.22 + 0.12 * r326_strokeFactor + 0.05 * r326_widthFactor;
            return r326_ss + r326_sign * r313_TanSlope * r313_SmoothAdjust;
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r328_t0, _r328_t1;
            return {
                "SNeck": r313_SNeck
            };
        });
        var r313_SNeck = function (r329_df, r329_height, r329_stroke, r329_ess) {
            var _r329_t0, _r329_t1;
            var r329_adjustFactor = 0.1 * (r329_df.rightSB - r329_df.leftSB) / r329_height;
            return [r313_xn$decor$0cao(r313_alsoThru(0.5, 0.7 + r329_adjustFactor)), r313_alsoThru.g4(0.5, 0.5, r313_widths.center(r329_ess)), r313_xn$decor$0cao(r313_alsoThru(0.5, 0.3 - r329_adjustFactor))];
        };
        var r313_SStrokeImpl = function (r332_df, r332_top, r332_bot, r332_st, r332_sb, r332_stroke, r332_refSwEss) {
            var r332___, _r332_t0, _r332_t1, _r332_t2, _r332_t3;
            var r332_ess = r332_refSwEss * (r332_stroke / r313_Stroke);
            var r332_archDepth = r313_AdviceSArchDepth(r332_top - r332_bot, -1, r332_stroke);
            return r313_dispiro((_r332_t0 = r332_st, _r332_t0 === r313_xn$SLABCLASSICAL$5sIl ? r313_SerifedArcStart.RtlLhs(r332_df.rightSB, r332_top, r332_stroke, r313_Hook) : _r332_t0 === r313_xn$SLABINWARD$5sIl ? r313_InwardSlabArcStart.RtlLhs(r332_df.rightSB, r332_top, r332_stroke, r313_Hook) : (r332___ = _r332_t0, [r313_g4(r332_df.rightSB + 0 - r313_SOTop, r332_top - r313_Hook, r313_widths.lhs(r332_stroke)), r313_HookStart(r332_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r332_stroke))])), r313_g4(r332_df.leftSB - 0 + r313_SOTop, r332_top - r332_archDepth), r313_xn$decor$0cao(r313_SNeck(r332_df, r332_top - r332_bot, r332_stroke, r332_ess)), r313_g4(r332_df.rightSB + 0 - r313_SOBot, r332_bot + r332_archDepth, r313_widths.rhs(r332_stroke)), (_r332_t1 = r332_sb, _r332_t1 === r313_xn$SLABCLASSICAL$5sIl ? r313_SerifedArcEnd.RtlRhs(r332_df.leftSB, r332_bot, r332_stroke, r313_Hook) : _r332_t1 === r313_xn$SLABINWARD$5sIl ? r313_InwardSlabArcEnd.RtlRhs(r332_df.leftSB, r332_bot, r332_stroke, r313_Hook) : (r332___ = _r332_t1, [r313_HookEnd(r332_bot, new r313_xn$NamedParameterPair$2Lrc9b("sw", r332_stroke)), r313_g4(r332_df.leftSB - 0 + r313_SOBot, r332_bot + r313_Hook)])));
        };
        var r313_RevSStrokeImpl = function (r336_df, r336_top, r336_bot, r336_st, r336_sb, r336_stroke, r336_refSwEss) {
            var r336___, _r336_t0, _r336_t1, _r336_t2, _r336_t3;
            var r336_ess = r336_refSwEss * (r336_stroke / r313_Stroke);
            var r336_archDepth = r313_AdviceSArchDepth(r336_top - r336_bot, +1, r336_stroke);
            return r313_dispiro((_r336_t0 = r336_st, _r336_t0 === r313_xn$SLABCLASSICAL$5sIl ? r313_SerifedArcStart.LtrRhs(r336_df.leftSB, r336_top, r336_stroke, r313_Hook) : _r336_t0 === r313_xn$SLABINWARD$5sIl ? r313_InwardSlabArcStart.LtrRhs(r336_df.leftSB, r336_top, r336_stroke, r313_Hook) : (r336___ = _r336_t0, [r313_g4(r336_df.leftSB - 0 + r313_SOTop, r336_top - r313_Hook, r313_widths.rhs(r336_stroke)), r313_HookStart(r336_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r336_stroke))])), r313_g4(r336_df.rightSB + 0 - r313_SOTop, r336_top - r336_archDepth), r313_xn$decor$0cao(r313_SNeck(r336_df, r336_top - r336_bot, r336_stroke, r336_ess)), r313_g4(r336_df.leftSB - 0 + r313_SOBot, r336_bot + r336_archDepth, r313_widths.lhs(r336_stroke)), (_r336_t1 = r336_sb, _r336_t1 === r313_xn$SLABCLASSICAL$5sIl ? r313_SerifedArcEnd.LtrLhs(r336_df.rightSB, r336_bot, r336_stroke, r313_Hook) : _r336_t1 === r313_xn$SLABINWARD$5sIl ? r313_InwardSlabArcEnd.LtrLhs(r336_df.rightSB, r336_bot, r336_stroke, r313_Hook) : (r336___ = _r336_t1, [r313_HookEnd(0, new r313_xn$NamedParameterPair$2Lrc9b("sw", r336_stroke)), r313_g4(r336_df.rightSB + 0 - r313_SOBot, r336_bot + r313_Hook)])));
        };
        var r313_SmallSStrokeImpl = function (r340_df, r340_top, r340_bot, r340_st, r340_sb, r340_stroke, r340_refSwEss) {
            var r340___, _r340_t0, _r340_leti2, _r340_t3, _r340_t4, _r340_t10, _r340_t11, _r340_t12, _r340_tag13;
            var r340_ess = r340_refSwEss * (r340_stroke / r313_Stroke);
            var r340_archDepth = r313_AdviceSArchDepth(r340_top - r340_bot, -1, r340_stroke);
            var _r340_t5 = r313_dispiro;
            var _r340_t6 = (_r340_t0 = r340_st, _r340_t0 === r313_xn$SLABCLASSICAL$5sIl ? r313_SerifedArcStart.RtlLhs(r340_df.rightSB, r340_top, r340_stroke, r313_SHook) : _r340_t0 === r313_xn$SLABINWARD$5sIl ? r313_InwardSlabArcStart.RtlLhs(r340_df.rightSB, r340_top, r340_stroke, r313_SHook) : (r340___ = _r340_t0, [r313_g4(r340_df.rightSB + r313_OX - r313_SOTop, r340_top - r313_SHook, r313_widths.lhs(r340_stroke)), r313_HookStart(r340_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r340_stroke))]));
            var _r340_t7 = r313_g4(r340_df.leftSB - r313_OX + r313_SOTop, r340_top - r340_archDepth);
            var _r340_t8 = r313_xn$decor$0cao(r313_SNeck(r340_df, r340_top - r340_bot, r340_stroke, r340_ess));
            var _r340_t9 = r313_g4(r340_df.rightSB + r313_OX - r313_SOBot, r340_bot + r340_archDepth, r313_widths.rhs(r340_stroke));
            var _r340_t1 = r340_sb;
            if (_r340_t1 === r313_xn$CURLYTAIL$1aao) {
                _r340_t11 = r313_AdviceStroke2(3, 4, r313_XH, r340_df.adws);
                _r340_t10 = (function (_r340_leti2) {
                    var r344_fine = _r340_leti2;
                    return r313_CurlyTail.n(new r313_xn$NamedParameterPair$2Lrc9b("fine", r344_fine), new r313_xn$NamedParameterPair$2Lrc9b("bottom", r340_bot), new r313_xn$NamedParameterPair$2Lrc9b("xOuter", r340_df.leftSB + r313_SOBot), new r313_xn$NamedParameterPair$2Lrc9b("x2", r340_df.width), new r313_xn$NamedParameterPair$2Lrc9b("y2", r340_bot + 0.5 * r344_fine), new r313_xn$NamedParameterPair$2Lrc9b("yLoopTop", r340_bot + 0.333 * r313_XH + 0.125 * r344_fine), new r313_xn$NamedParameterPair$2Lrc9b("swBefore", r340_stroke));
                })(_r340_t11);
            } else _r340_t10 = _r340_t1 === r313_xn$PHONETICRIGHT$9XZu ? [r313_arcvh(), r313_flat(r313_Arch["adjust-x"].bot(r340_df.middle), r340_bot, r313_widths.rhs()), r313_curl(r340_df.leftSB, r340_bot)] : _r340_t1 === r313_xn$SLABCLASSICAL$5sIl ? r313_SerifedArcEnd.RtlRhs(r340_df.leftSB, r340_bot, r340_stroke, r313_SHook) : _r340_t1 === r313_xn$SLABINWARD$5sIl ? r313_InwardSlabArcEnd.RtlRhs(r340_df.leftSB, r340_bot, r340_stroke, r313_SHook) : (r340___ = _r340_t1, [r313_HookEnd(r340_bot, new r313_xn$NamedParameterPair$2Lrc9b("sw", r340_stroke)), r313_g4(r340_df.leftSB - r313_OX + r313_SOBot, r340_bot + r313_SHook)]);
            return _r340_t5(_r340_t6, _r340_t7, _r340_t8, _r340_t9, _r340_t10);
        };
        var r313_RevSmallSStrokeImpl = function (r352_df, r352_top, r352_bot, r352_st, r352_sb, r352_stroke, r352_refSwEss) {
            var r352___, _r352_t0, _r352_t1, _r352_t2, _r352_t3;
            var r352_ess = r352_refSwEss * (r352_stroke / r313_Stroke);
            var r352_archDepth = r313_AdviceSArchDepth(r352_top - r352_bot, +1, r352_stroke);
            return r313_dispiro((_r352_t0 = r352_st, _r352_t0 === r313_xn$SLABCLASSICAL$5sIl ? r313_SerifedArcStart.LtrRhs(r352_df.leftSB, r352_top, r352_stroke, r313_SHook) : _r352_t0 === r313_xn$SLABINWARD$5sIl ? r313_InwardSlabArcStart.LtrRhs(r352_df.leftSB, r352_top, r352_stroke, r313_SHook) : (r352___ = _r352_t0, [r313_g4(r352_df.leftSB - r313_OX + r313_SOTop, r352_top - r313_SHook, r313_widths.rhs(r352_stroke)), r313_HookStart(r352_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r352_stroke))])), r313_g4(r352_df.rightSB + r313_OX - r313_SOTop, r352_top - r352_archDepth), r313_xn$decor$0cao(r313_SNeck(r352_df, r352_top - r352_bot, r352_stroke, r352_ess)), r313_g4(r352_df.leftSB - r313_OX + r313_SOBot, r352_bot + r352_archDepth, r313_widths.lhs(r352_stroke)), (_r352_t1 = r352_sb, _r352_t1 === r313_xn$SLABCLASSICAL$5sIl ? r313_SerifedArcEnd.LtrLhs(r352_df.rightSB, r352_bot, r352_stroke, r313_SHook) : _r352_t1 === r313_xn$SLABINWARD$5sIl ? r313_InwardSlabArcEnd.LtrLhs(r352_df.rightSB, r352_bot, r352_stroke, r313_SHook) : (r352___ = _r352_t1, [r313_HookEnd(r352_bot, new r313_xn$NamedParameterPair$2Lrc9b("sw", r352_stroke)), r313_g4(r352_df.rightSB + r313_OX - r313_SOBot, r352_bot + r313_SHook)])));
        };
        var r313_SStrokeAlt = function () {
            var _r356_t5, _r356_t6, _r356_t7, _r356_t8, _r356_t9;
            var _r356_t10 = arguments;
            var r356_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r356_t10, 0);
            var _r356_t0 = [];
            var _r356_t1 = 0;
            while (_r356_t1 < r356_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r356_xn$flexarguments$2Lrc7uIe5[_r356_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r356_t0.push(r356_xn$flexarguments$2Lrc7uIe5[_r356_t1]);
                _r356_t1 = _r356_t1 + 1;
            }
            var _r356_t2 = r356_xn$flexarguments$2Lrc7uIe5;
            var _r356_t3 = _r356_t2.length;
            var _r356_t4 = 0;
            while (_r356_t4 < _r356_t3) {
                _r356_t1 = _r356_t2[_r356_t4];
                if (_r356_t1 && _r356_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r356_t1.left === "df") r356_df = _r356_t1.right;
                if (_r356_t1 && _r356_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r356_t1.left === "top") r356_top = _r356_t1.right;
                if (_r356_t1 && _r356_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r356_t1.left === "hook") r356_hook = _r356_t1.right;
                if (_r356_t1 && _r356_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r356_t1.left === "swStart") r356_swStart = _r356_t1.right;
                if (_r356_t1 && _r356_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r356_t1.left === "swEnd") r356_swEnd = _r356_t1.right;
                if (_r356_t1 && _r356_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r356_t1.left === "oXLeftTop") r356_oXLeftTop = _r356_t1.right;
                if (_r356_t1 && _r356_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r356_t1.left === "offsetLT") r356_offsetLT = _r356_t1.right;
                if (_r356_t1 && _r356_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r356_t1.left === "offsetRB") r356_offsetRB = _r356_t1.right;
                if (_r356_t1 && _r356_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r356_t1.left === "offsetC") r356_offsetC = _r356_t1.right;
                _r356_t4 = _r356_t4 + 1;
            }
            var r356_df = r1_fallback(r356_df, _r356_t0[0]);
            var r356_top = r1_fallback(r356_top, _r356_t0[1]);
            var r356_hook = r1_fallback(r356_hook, _r356_t0[2]);
            var r356_swStart = r1_fallback(r356_swStart, _r356_t0[3]);
            var r356_swEnd = r1_fallback(r356_swEnd, _r356_t0[4]);
            var r356_oXLeftTop = r1_fallback(r356_oXLeftTop, _r356_t0[5]);
            var r356_offsetLT = r1_fallback(r356_offsetLT, _r356_t0[6]);
            var r356_offsetRB = r1_fallback(r356_offsetRB, _r356_t0[7]);
            var r356_offsetC = r1_fallback(r356_offsetC, _r356_t0[8]);
            var r356_stroke = Math.max(r356_swStart, r356_swEnd);
            var r356_fine = Math.min(r356_swStart, r356_swEnd);
            var r356_soStart = r356_stroke - r356_swStart;
            var r356_soEnd = r356_stroke - r356_swEnd;
            var r356_archDepth = r313_AdviceSArchDepth(r356_top, -1, r356_stroke);
            return (_r356_t5 = r356_df.leftSB + r356_oXLeftTop + r356_offsetLT.x, _r356_t6 = r356_top - r356_archDepth, _r356_t7 = r356_df.rightSB - r313_SOBot - r356_offsetRB.x, _r356_t8 = r356_archDepth, r313_dispiro(r313_widths.lhs(r356_fine), r313_g4(r356_df.rightSB + r313_OX / 4 - r313_HSwToV(r356_soStart), r356_top - r356_hook), r313_HookStart(r356_top - r356_soStart, new r313_xn$NamedParameterPair$2Lrc9b("sw", r356_fine)), r313_g4(_r356_t5, _r356_t6 + r356_offsetLT.y), r313_virt(_r356_t5, _r356_t6), r313_xn$decor$0cao(r313_g4(r1_mix(_r356_t5, _r356_t7, 0.5) + r356_offsetC.x, r1_mix(_r356_t6, _r356_t8, 0.5) + r356_offsetC.y, r313_widths.center(r356_stroke))), r313_virt(_r356_t7, _r356_t8), r313_g4(_r356_t7, _r356_t8 + r356_offsetRB.y, r313_widths.rhs(r356_fine)), r313_HookEnd(r356_soEnd, new r313_xn$NamedParameterPair$2Lrc9b("sw", r356_fine)), r313_g4(r356_df.leftSB + r313_SOBot + r313_HSwToV(r356_soEnd), r356_hook, r313_widths.rhs(r356_fine))));
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r366_t0, _r366_t1;
            return {
                "SAutoSlabStart": r313_SAutoSlabStart
            };
        });
        var r313_SAutoSlabStart = function (r367_df, r367_st, r367_top, r367_sw, r367_hook) {
            var r367___, _r367_t1, _r367_t2;
            var _r367_t0 = r367_st;
            return _r367_t0 === r313_xn$SLABCLASSICAL$5sIl ? r313_ArcStartSerif.R(r367_df.rightSB, r367_top, r367_sw, r367_hook) : _r367_t0 === r313_xn$SLABINWARD$5sIl ? r313_ArcStartSerif.InwardR(r367_df.rightSB, r367_top, r367_sw, r367_hook) : (r367___ = _r367_t0, new r313_xn$Capture$2Lrc8.GlyphProc(function (r369_currentGlyph) {
                var _r369_t0, _r369_t1;
                return void 0;
            }));
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r371_t0, _r371_t1;
            return {
                "SAutoSlabEnd": r313_SAutoSlabEnd
            };
        });
        var r313_SAutoSlabEnd = function (r372_df, r372_st, r372_bot, r372_sw, r372_hook) {
            var r372___, _r372_t1, _r372_t2;
            var _r372_t0 = r372_st;
            return _r372_t0 === r313_xn$SLABCLASSICAL$5sIl ? r313_ArcEndSerif.L(r372_df.leftSB, r372_bot, r372_sw, r372_hook) : _r372_t0 === r313_xn$SLABINWARD$5sIl ? r313_ArcEndSerif.InwardL(r372_df.leftSB, r372_bot, r372_sw, r372_hook) : (r372___ = _r372_t0, new r313_xn$Capture$2Lrc8.GlyphProc(function (r374_currentGlyph) {
                var _r374_t0, _r374_t1;
                return void 0;
            }));
        };
        var r313_RevSAutoSlabStart = function (r375_df, r375_st, r375_top, r375_sw, r375_hook) {
            var r375___, _r375_t1, _r375_t2;
            var _r375_t0 = r375_st;
            return _r375_t0 === r313_xn$SLABCLASSICAL$5sIl ? r313_ArcStartSerif.L(r375_df.leftSB, r375_top, r375_sw, r375_hook) : _r375_t0 === r313_xn$SLABINWARD$5sIl ? r313_ArcStartSerif.InwardL(r375_df.leftSB, r375_top, r375_sw, r375_hook) : (r375___ = _r375_t0, new r313_xn$Capture$2Lrc8.GlyphProc(function (r377_currentGlyph) {
                var _r377_t0, _r377_t1;
                return void 0;
            }));
        };
        var r313_RevSAutoSlabEnd = function (r378_df, r378_st, r378_bot, r378_sw, r378_hook) {
            var r378___, _r378_t1, _r378_t2;
            var _r378_t0 = r378_st;
            return _r378_t0 === r313_xn$SLABCLASSICAL$5sIl ? r313_ArcEndSerif.R(r378_df.rightSB, r378_bot, r378_sw, r378_hook) : _r378_t0 === r313_xn$SLABINWARD$5sIl ? r313_ArcEndSerif.InwardR(r378_df.rightSB, r378_bot, r378_sw, r378_hook) : (r378___ = _r378_t0, new r313_xn$Capture$2Lrc8.GlyphProc(function (r380_currentGlyph) {
                var _r380_t0, _r380_t1;
                return void 0;
            }));
        };
        var r313_SConfig = {
            "serifless": [r313_xn$SLABNONE$5sIl, r313_xn$SLABNONE$5sIl],
            "unilateralSerifed": [r313_xn$SLABCLASSICAL$5sIl, r313_xn$SLABNONE$5sIl],
            "bilateralSerifed": [r313_xn$SLABCLASSICAL$5sIl, r313_xn$SLABCLASSICAL$5sIl],
            "unilateralInwardSerifed": [r313_xn$SLABINWARD$5sIl, r313_xn$SLABNONE$5sIl],
            "bilateralInwardSerifed": [r313_xn$SLABINWARD$5sIl, r313_xn$SLABINWARD$5sIl],
            "bottomSerifed": [r313_xn$SLABNONE$5sIl, r313_xn$SLABCLASSICAL$5sIl],
            "hybridSerifed1": [r313_xn$SLABINWARD$5sIl, r313_xn$SLABCLASSICAL$5sIl]
        };
        var r313_DfUpper = r313_DivFrame(1);
        var r313_DfLower = r313_DivFrame(1);
        var _r313_t15 = Object.entries(r313_SConfig)[Symbol.iterator]();
        var _r313_t16 = void 0;
        while (!(_r313_t16 = _r313_t15.next()).done) {
            _r313_t17 = _r313_t16.value;
            r313_suffix = _r313_t17[0];
            r313_doTS = _r313_t17[1][0];
            r313_doBS = _r313_t17[1][1];
            _r313_t17[1];
            (function () {
                var r383_fDesc = r313_doTS !== r313_doBS;
                r313_xn$GlyphSaveSink$2Lrc4b.save("S." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r386_currentGlyph) {
                    var _r386_t0, _r386_t1;
                    var r386_df = r386_currentGlyph.include(r313_DfUpper);
                    r386_currentGlyph.include(r386_df.markSet.capital());
                    var r386_sw = r386_df.adviceStroke2(2, 3, r313_CAP - 0);
                    r386_currentGlyph.include(r313_SStrokeImpl(r386_df, r313_CAP, 0, r313_doTS, r313_doBS, r386_sw, r313_EssUpper));
                    r386_currentGlyph.include(r313_SAutoSlabStart(r386_df, r313_doTS, r313_CAP, r386_sw, r313_Hook));
                    r386_currentGlyph.include(r313_SAutoSlabEnd(r386_df, r313_doBS, 0, r386_sw, r313_Hook));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("smcpS." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r394_currentGlyph) {
                    var _r394_t0, _r394_t1;
                    var r394_df = r394_currentGlyph.include(r313_DfUpper);
                    r394_currentGlyph.include(r394_df.markSet.e());
                    var r394_sw = r394_df.adviceStroke2(2, 3, r313_CAP - 0);
                    r394_currentGlyph.include(r313_SStrokeImpl(r394_df, r313_XH, 0, r313_doTS, r313_doBS, r394_sw, r313_EssUpper));
                    r394_currentGlyph.include(r313_SAutoSlabStart(r394_df, r313_doTS, r313_XH, r394_sw, r313_Hook));
                    r394_currentGlyph.include(r313_SAutoSlabEnd(r394_df, r313_doBS, 0, r394_sw, r313_Hook));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("S/dollarKernelStd." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r402_currentGlyph) {
                    var _r402_t0, _r402_t1;
                    var r402_df = r313_DfUpper;
                    r402_currentGlyph.setWidth(0);
                    r402_currentGlyph.setMarkAnchor("cvDecompose", r402_df.middle, r313_CAP / 2);
                    var r402_top = r1_mix(0, r313_CAP, 0.95);
                    var r402_bot = r1_mix(0, r313_CAP, 0.05);
                    var r402_sw = r402_df.adviceStroke2(2, 3, r402_top - r402_bot);
                    r402_currentGlyph.include(r313_SStrokeImpl(r402_df, r402_top, r402_bot, r313_doTS, r313_doBS, r402_sw, r313_EssUpper));
                    r402_currentGlyph.include(r313_SAutoSlabStart(r402_df, r313_doTS, r402_top, r402_sw, r313_Hook));
                    r402_currentGlyph.include(r313_SAutoSlabEnd(r402_df, r313_doBS, r402_bot, r402_sw, r313_Hook));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("S/dollarKernelCap." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r410_currentGlyph) {
                    var _r410_t0, _r410_t1;
                    var r410_df = r313_DfUpper;
                    r410_currentGlyph.setWidth(0);
                    r410_currentGlyph.setMarkAnchor("cvDecompose", r410_df.middle, r313_CAP / 2);
                    var r410_top = r1_mix(0, r313_CAP, 0.88);
                    var r410_bot = r1_mix(0, r313_CAP, 0.12);
                    var r410_sw = r410_df.adviceStroke2(2, 3, r410_top - r410_bot);
                    r410_currentGlyph.include(r313_SStrokeImpl(r410_df, r410_top, r410_bot, r313_doTS, r313_doBS, r410_sw, r313_EssUpper));
                    r410_currentGlyph.include(r313_SAutoSlabStart(r410_df, r313_doTS, r410_top, r410_sw, r313_Hook));
                    r410_currentGlyph.include(r313_SAutoSlabEnd(r410_df, r313_doBS, r410_bot, r410_sw, r313_Hook));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("s." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r418_currentGlyph) {
                    var _r418_t0, _r418_t1;
                    var r418_df = r418_currentGlyph.include(r313_DfLower);
                    r418_currentGlyph.include(r418_df.markSet.e());
                    var r418_sw = r418_df.adviceStroke2(2, 3, r313_XH - 0);
                    r418_currentGlyph.include(r313_SmallSStrokeImpl(r418_df, r313_XH, 0, r313_doTS, r313_doBS, r418_sw, r313_EssLower));
                    r418_currentGlyph.include(r313_SAutoSlabStart(r418_df, r313_doTS, r313_XH, r418_sw, r313_Hook));
                    r418_currentGlyph.include(r313_SAutoSlabEnd(r418_df, r313_doBS, 0, r418_sw, r383_fDesc ? r313_SHook : r313_Hook));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("s/phoneticRight." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r426_currentGlyph) {
                    var _r426_t0, _r426_t1;
                    var r426_df = r426_currentGlyph.include(r313_DfLower);
                    r426_currentGlyph.include(r426_df.markSet.e());
                    var r426_sw = r426_df.adviceStroke2(2, 3, r313_XH - 0);
                    r426_currentGlyph.include(r313_SmallSStrokeImpl(r426_df, r313_XH, 0, r313_doTS, r313_xn$PHONETICRIGHT$9XZu, r426_sw, r313_EssLower));
                    r426_currentGlyph.include(r313_SAutoSlabStart(r426_df, r313_doTS, r313_XH, r426_sw, r313_Hook));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("revS." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r433_currentGlyph) {
                    var _r433_t0, _r433_t1;
                    var r433_df = r433_currentGlyph.include(r313_DfUpper);
                    r433_currentGlyph.include(r433_df.markSet.capital());
                    var r433_sw = r433_df.adviceStroke2(2, 3, r313_CAP - 0);
                    r433_currentGlyph.include(r313_RevSStrokeImpl(r433_df, r313_CAP, 0, r313_doTS, r313_doBS, r433_sw, r313_EssUpper));
                    r433_currentGlyph.include(r313_RevSAutoSlabStart(r433_df, r313_doTS, r313_CAP, r433_sw, r313_Hook));
                    r433_currentGlyph.include(r313_RevSAutoSlabEnd(r433_df, r313_doBS, 0, r433_sw, r313_Hook));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("revs." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r441_currentGlyph) {
                    var _r441_t0, _r441_t1;
                    var r441_df = r441_currentGlyph.include(r313_DfLower);
                    r441_currentGlyph.include(r441_df.markSet.e());
                    var r441_sw = r441_df.adviceStroke2(2, 3, r313_XH - 0);
                    r441_currentGlyph.include(r313_RevSmallSStrokeImpl(r441_df, r313_XH, 0, r313_doTS, r313_doBS, r441_sw, r313_EssLower));
                    r441_currentGlyph.include(r313_RevSAutoSlabStart(r441_df, r313_doTS, r313_XH, r441_sw, r313_Hook));
                    r441_currentGlyph.include(r313_RevSAutoSlabEnd(r441_df, r313_doBS, 0, r441_sw, r383_fDesc ? r313_SHook : r313_Hook));
                    return void 0;
                }));
                var r383_UpperSBaseWithAttach = function (r447_df, r447_sw) {
                    var _r447_t0, _r447_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r449_currentGlyph) {
                        var _r449_t0, _r449_t1;
                        r449_currentGlyph.include(r313_SAutoSlabStart(r447_df, r313_doTS, r313_CAP, r447_sw, r313_Hook));
                        var r449_stroke = r449_currentGlyph.include(r313_SStrokeImpl(r447_df, r313_CAP, 0, r313_doTS, r313_doBS, r447_sw, r313_EssUpper));
                        return r449_stroke.lhsKnots[r449_stroke.lhsKnots.length - 1];
                    });
                };
                var r383_LowerSBaseWithAttach = function (r452_df, r452_sw) {
                    var _r452_t0, _r452_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r454_currentGlyph) {
                        var _r454_t0, _r454_t1;
                        r454_currentGlyph.include(r313_SAutoSlabStart(r452_df, r313_doTS, r313_XH, r452_sw, r313_Hook));
                        var r454_stroke = r454_currentGlyph.include(r313_SmallSStrokeImpl(r452_df, r313_XH, 0, r313_doTS, r313_doBS, r452_sw, r313_EssLower));
                        return r454_stroke.lhsKnots[r454_stroke.lhsKnots.length - 1];
                    });
                };
                if (!r313_doBS) r313_xn$GlyphSaveSink$2Lrc4b.save("SSwash." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r459_currentGlyph) {
                    var _r459_t0, _r459_t1;
                    var r459_df = r459_currentGlyph.include(r313_DfUpper);
                    r459_currentGlyph.include(r459_df.markSet.capDesc());
                    var r459_sw = r459_df.adviceStroke2(2, 3, r313_CAP - 0);
                    var r459_start = r459_currentGlyph.include(r383_UpperSBaseWithAttach(r459_df, r459_sw));
                    r459_currentGlyph.include(r313_dispiro(r313_widths.lhs(r313_AdviceStroke(4.5)), r313_g4(r459_start.x, r459_start.y), r313_alsoThru(0.15, 0.6, r313_important), r313_flat(r459_df.rightSB - 1, r313_Descender, r313_widths.lhs(r459_sw)), r313_curl(r459_df.rightSB, r313_Descender)));
                    return void 0;
                }));
                if (!r313_doBS) r313_xn$GlyphSaveSink$2Lrc4b.save("sSwash." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r466_currentGlyph) {
                    var _r466_t0, _r466_t1;
                    var r466_df = r466_currentGlyph.include(r313_DfLower);
                    r466_currentGlyph.include(r466_df.markSet.p());
                    var r466_sw = r466_df.adviceStroke2(2, 3, r313_XH - 0);
                    var r466_start = r466_currentGlyph.include(r383_LowerSBaseWithAttach(r466_df, r466_sw));
                    r466_currentGlyph.include(r313_dispiro(r313_widths.lhs(r313_AdviceStroke(4.5)), r313_g4(r466_start.x, r466_start.y), r313_alsoThru(0.15, 0.6, r313_important), r313_flat(r466_df.rightSB - 1, r313_Descender, r313_widths.lhs(r466_sw)), r313_curl(r466_df.rightSB, r313_Descender)));
                    return void 0;
                }));
                if (!r313_doBS) r313_xn$GlyphSaveSink$2Lrc4b.save("sCurlyTail." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r473_currentGlyph) {
                    var _r473_t0, _r473_t1;
                    var r473_df = r473_currentGlyph.include(r313_DfLower);
                    r473_currentGlyph.include(r473_df.markSet.e());
                    var r473_sw = r473_df.adviceStroke2(2, 3, r313_XH - 0);
                    r473_currentGlyph.include(r313_SmallSStrokeImpl(r473_df, r313_XH, 0, r313_doTS, r313_xn$CURLYTAIL$1aao, r473_sw, r313_EssLower));
                    r473_currentGlyph.include(r313_SAutoSlabStart(r473_df, r313_doTS, r313_XH, r473_sw, r313_Hook));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Dzwe." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r480_currentGlyph) {
                    var _r480_t0, _r480_t1;
                    var r480_df = r480_currentGlyph.include(r313_DfUpper);
                    r480_currentGlyph.include(r480_df.markSet.capDesc());
                    var r480_sw = r480_df.adviceStroke2(2, 3, r313_CAP - r313_Descender);
                    r480_currentGlyph.include(r313_SStrokeImpl(r480_df, r313_CAP, r313_Descender, r313_doTS, r313_doBS, r480_sw, r313_EssUpper));
                    r480_currentGlyph.include(r313_SAutoSlabStart(r480_df, r313_doTS, r313_CAP, r480_sw, r313_Hook));
                    r480_currentGlyph.include(r313_SAutoSlabEnd(r480_df, r313_doBS, r313_Descender, r480_sw, r313_Hook));
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/dzwe." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r488_currentGlyph) {
                    var _r488_t0, _r488_t1;
                    var r488_df = r488_currentGlyph.include(r313_DfLower);
                    r488_currentGlyph.include(r488_df.markSet.bp());
                    var r488_sw = r488_df.adviceStroke2(2, 3, r313_Ascender - r313_Descender);
                    r488_currentGlyph.include(r313_SmallSStrokeImpl(r488_df, r313_Ascender, r313_Descender, r313_doTS, r313_doBS, r488_sw, r313_EssLower));
                    r488_currentGlyph.include(r313_SAutoSlabStart(r488_df, r313_doTS, r313_Ascender, r488_sw, r313_Hook));
                    r488_currentGlyph.include(r313_SAutoSlabEnd(r488_df, r313_doBS, r313_Descender, r488_sw, r383_fDesc ? r313_SHook : r313_Hook));
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("S", "S");
        r313_xn$linkreducedvariant$5sIl8("S/sansSerif", "S", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("smcpS", 42801, new r313_xn$NamedParameterPair$2Lrc9b("follow", "S"));
        r313_xn$selectvariant$7Hrq("s", "s");
        r313_xn$linkreducedvariant$5sIl8("s/sansSerif", "s", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("s/phoneticRight");
        r313_xn$selectvariant$7Hrq("revS", 423, new r313_xn$NamedParameterPair$2Lrc9b("follow", "S"));
        r313_xn$selectvariant$7Hrq("revs", 424, new r313_xn$NamedParameterPair$2Lrc9b("follow", "s"));
        r313_alias("cyrl/Dze", 1029, "S");
        r313_alias("cyrl/dze", 1109, "s");
        r313_xn$selectvariant$7Hrq("cyrl/ghe.italic", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "revs"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "s"));
        r313_alias("cyrl/ghe.BGR", null, "cyrl/ghe.italic");
        r313_alias("cyrl/revDze", 42564, "revS");
        r313_alias("cyrl/revdze", 42565, "revs");
        r313_xn$selectvariant$7Hrq("cyrl/Dzwe", 42626, new r313_xn$NamedParameterPair$2Lrc9b("follow", "S"));
        r313_xn$selectvariant$7Hrq("cyrl/dzwe", 42627, new r313_xn$NamedParameterPair$2Lrc9b("follow", "s"));
        r313_xn$selectvariant$7Hrq("S/dollarKernelStd", new r313_xn$NamedParameterPair$2Lrc9b("follow", "S"));
        r313_xn$selectvariant$7Hrq("S/dollarKernelCap", new r313_xn$NamedParameterPair$2Lrc9b("follow", "S"));
        r313_xn$selectvariant$7Hrq("SSwash", 11390);
        r313_xn$selectvariant$7Hrq("sSwash", 575);
        r313_xn$selectvariant$7Hrq("sCurlyTail", 122654, new r313_xn$NamedParameterPair$2Lrc9b("follow", "sSwash"));
        r313_xn$selectvariant$7Hrq("S/descBase", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "S"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "SRTail"));
        r313_xn$selectvariant$7Hrq("s/descBase", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "s"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "sRTail"));
        r313_xn$derivecomposites$7Hrq("SRTail", 42949, "S/descBase", r313_RetroflexHook.l(r313_DfUpper.leftSB, 0, new r313_xn$NamedParameterPair$2Lrc9b("yAttach", r313_DToothlessRise), new r313_xn$NamedParameterPair$2Lrc9b("refSw", r313_AdviceStroke2(2, 3, r313_CAP))));
        r313_xn$derivecomposites$7Hrq("sRTail", 642, "s/descBase", r313_RetroflexHook.l(r313_DfLower.leftSB, 0, new r313_xn$NamedParameterPair$2Lrc9b("yAttach", r313_DToothlessRise), new r313_xn$NamedParameterPair$2Lrc9b("refSw", r313_AdviceStroke2(2, 3, r313_XH))));
        r313_xn$selectvariant$7Hrq("cyrl/ghe.italic/descBase", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "revs"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "sRTail"));
        r313_xn$derivecomposites$7Hrq("cyrl/gheDescender.italic", null, "cyrl/ghe.italic/descBase", r313_CyrDescender.r(r313_DfLower.rightSB, 0, new r313_xn$NamedParameterPair$2Lrc9b("yAttach", r313_DToothlessRise), new r313_xn$NamedParameterPair$2Lrc9b("refSw", r313_AdviceStroke2(2, 3, r313_XH))));
        r313_xn$derivecomposites$7Hrq("cyrl/gheHook.italic", null, "cyrl/ghe.italic/descBase", r313_PalatalHook.r(r313_DfLower.rightSB, 0, new r313_xn$NamedParameterPair$2Lrc9b("yAttach", r313_DToothlessRise), new r313_xn$NamedParameterPair$2Lrc9b("refSw", r313_AdviceStroke2(2, 3, r313_XH))));
        r313_xn$derivecomposites$7Hrq("cyrl/ghayn.italic", null, "cyrl/ghe.italic", r313_FlatSlashShape(r313_Middle, r313_XH / 2, r313_OverlayStroke / 2, -0.2, +0.75));
        r313_xn$derivecomposites$7Hrq("cyrl/gheStrokeHook.italic", null, "cyrl/gheHook.italic", r313_FlatSlashShape(r313_Middle, r313_XH / 2, r313_OverlayStroke / 2, -0.2, +0.75));
        r313_xn$derivecomposites$7Hrq("sPalatalHook", 7562, "s", r313_PalatalHook.r(new r313_xn$NamedParameterPair$2Lrc9b("x", r1_mix(r313_Arch["adjust-x"].bot(r313_Middle), r313_DfLower.rightSB, 0.75)), new r313_xn$NamedParameterPair$2Lrc9b("y", 0), new r313_xn$NamedParameterPair$2Lrc9b("yAttach", r1_mix(r313_O, r313_AdviceSArchDepth(r313_XH, -1, r313_AdviceStroke2(2, 3, r313_XH)), r313_archv.yFromX(0.75)))));
        r313_xn$derivecomposites$7Hrq("sPalatalHook/phoneticRight", null, "s/phoneticRight", r313_PalatalHook.r(new r313_xn$NamedParameterPair$2Lrc9b("x", r1_mix(r313_Arch["adjust-x"].bot(r313_Middle), r313_DfLower.rightSB, 0.75)), new r313_xn$NamedParameterPair$2Lrc9b("y", 0), new r313_xn$NamedParameterPair$2Lrc9b("yAttach", r1_mix(0, r313_AdviceSArchDepth(r313_XH, -1, r313_AdviceStroke2(2, 3, r313_XH)), r313_archv.yFromX(0.75)))));
        r313_xn$selectvariant$7Hrq("s/ascBase", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "s"));
        r313_xn$derivecomposites$7Hrq("s/compLigLeft", null, "s/ascBase", new r313_xn$Capture$2Lrc8.GlyphProc(function (r526_currentGlyph) {
            var _r526_t0, _r526_t1;
            r526_currentGlyph.ejectTagged("arcStartSerifR");
            var r526_sw = r313_ArcStartSerifWidth(r313_AdviceStroke2(2, 3, r313_XH));
            var r526_fine = r526_sw * r1_mix(r313_CThinB, 1, 0.6);
            var r526_hd = r313_FlatHookDepth(r313_DfLower);
            var r526_yStart = r313_XH - r313_ArcStartSerifDepth(r313_SHook);
            var r526_leftExt = 0.3 * (r313_RightSB - r313_SB) - r313_HSwToV(0.25 * r526_sw);
            r526_currentGlyph.include(r313_dispiro(r313_widths.rhs(r526_fine), r313_flat(r313_RightSB - r313_HSwToV(r526_fine), r526_yStart, r313_heading(r313_Upward)), r313_curl(r313_RightSB - r313_HSwToV(r526_fine), r526_yStart + r313_HalfStroke, r313_heading(r313_Upward)), r313_alsoThru.g2(0.5, 0.5, r313_widths.center(r1_mix(r526_fine, r526_sw, 0.35))), r313_g4(r313_RightSB - r526_leftExt, Math.min(r313_Ascender - 1.375 * r526_sw, r1_mix(r313_XH, r313_Ascender, 0.5)), r313_widths.lhs(r1_mix(r526_fine, r526_sw, 0.7))), r313_arcvh(), r313_flat(r313_RightSB, r313_Ascender, r313_widths.rhs.heading(r526_sw, r313_Rightward)), r313_curl(4 * r313_Width, r313_Ascender, r313_widths.rhs.heading(r526_sw, r313_Rightward))));
            return void 0;
        }));
        r313_CreateAccentedComposition("SAcute", 346, "S", "acuteAbove");
        r313_CreateAccentedComposition("sAcute", 347, "s", "acuteAbove");
        r313_CreateAccentedComposition("SAcute.PLK", null, "S", "kreskaAbove");
        r313_CreateAccentedComposition("sAcute.PLK", null, "s", "kreskaAbove");
        r313_xn$derivecomposites$7Hrq("SCedilla", 350, "S", "cedillaExtShapeBelowOArc");
        r313_xn$derivecomposites$7Hrq("sCedilla", 351, "s", "cedillaExtShapeBelowSOArc");
        r313_CreateAccentedComposition("SComma", 536, "S", "commaBelow");
        r313_CreateAccentedComposition("sComma", 537, "s", "commaBelow");
        r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/S", 120138, new r313_xn$Capture$2Lrc8.GlyphProc(function (r531_currentGlyph) {
            var r531_sign, _r531_t3, _r531_t4;
            var r531_df = r531_currentGlyph.include(r313_DfUpper);
            r531_currentGlyph.include(r531_df.markSet.capital());
            var r531_theta = Math.PI / 4;
            var _r531_t0 = [+1, -1];
            var _r531_t1 = _r531_t0.length;
            var _r531_t2 = 0;
            while (_r531_t2 < _r531_t1) {
                r531_sign = _r531_t0[_r531_t2];
                r531_currentGlyph.include(r313_SStrokeAlt(new r313_xn$NamedParameterPair$2Lrc9b("df", r531_df), new r313_xn$NamedParameterPair$2Lrc9b("top", r313_CAP), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_Hook), new r313_xn$NamedParameterPair$2Lrc9b("swStart", r313_BBS * (r531_sign > 0 ? r313_CThin : 1)), new r313_xn$NamedParameterPair$2Lrc9b("swEnd", r313_BBS * (r531_sign < 0 ? r313_CThin : 1)), new r313_xn$NamedParameterPair$2Lrc9b("oXLeftTop", r313_O), new r313_xn$NamedParameterPair$2Lrc9b("ess", r313_BBD), new r313_xn$NamedParameterPair$2Lrc9b("offsetC", {
                    "x": 0.5 * r531_sign * r313_BBD * Math.sin(r531_theta),
                    "y": 0.5 * r531_sign * r313_BBD * Math.cos(r531_theta)
                }), new r313_xn$NamedParameterPair$2Lrc9b("offsetLT", {
                    "x": r531_sign > 0 ? r313_BBD / 2 : 0,
                    "y": (r531_sign > 0 ? 0.25 : 0.375) * r531_sign * r313_BBD * Math.cos(r531_theta)
                }), new r313_xn$NamedParameterPair$2Lrc9b("offsetRB", {
                    "x": r531_sign < 0 ? r313_BBD / 2 : 0,
                    "y": (r531_sign < 0 ? 0.25 : 0.375) * r531_sign * r313_BBD * Math.cos(r531_theta)
                })));
                _r531_t2 = _r531_t2 + 1;
            }
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/s", 120164, new r313_xn$Capture$2Lrc8.GlyphProc(function (r548_currentGlyph) {
            var r548_sign, _r548_t3, _r548_t4;
            var r548_df = r548_currentGlyph.include(r313_DfLower);
            r548_currentGlyph.include(r548_df.markSet.e());
            var r548_theta = Math.PI / 5;
            var _r548_t0 = [+1, -1];
            var _r548_t1 = _r548_t0.length;
            var _r548_t2 = 0;
            while (_r548_t2 < _r548_t1) {
                r548_sign = _r548_t0[_r548_t2];
                r548_currentGlyph.include(r313_SStrokeAlt(new r313_xn$NamedParameterPair$2Lrc9b("df", r548_df), new r313_xn$NamedParameterPair$2Lrc9b("top", r313_XH), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_SHook), new r313_xn$NamedParameterPair$2Lrc9b("swStart", r313_BBS * (r548_sign > 0 ? r313_CThin : 1)), new r313_xn$NamedParameterPair$2Lrc9b("swEnd", r313_BBS * (r548_sign < 0 ? r313_CThin : 1)), new r313_xn$NamedParameterPair$2Lrc9b("oXLeftTop", r313_OX / 8), new r313_xn$NamedParameterPair$2Lrc9b("ess", r313_BBD), new r313_xn$NamedParameterPair$2Lrc9b("offsetC", {
                    "x": 0.5 * r548_sign * r313_BBD * Math.sin(r548_theta),
                    "y": 0.5 * r548_sign * r313_BBD * Math.cos(r548_theta)
                }), new r313_xn$NamedParameterPair$2Lrc9b("offsetLT", {
                    "x": r548_sign > 0 ? r313_BBD / 2 : 0,
                    "y": (r548_sign > 0 ? 0.25 : 0.375) * r548_sign * r313_BBD * Math.cos(r548_theta)
                }), new r313_xn$NamedParameterPair$2Lrc9b("offsetRB", {
                    "x": r548_sign < 0 ? r313_BBD / 2 : 0,
                    "y": (r548_sign < 0 ? 0.25 : 0.375) * r548_sign * r313_BBD * Math.cos(r548_theta)
                })));
                _r548_t2 = _r548_t2 + 1;
            }
            return void 0;
        }));
        var r313_DollarConfig = r1_SuffixCfg.weave({
            "": 0,
            "slanted": 0.08
        }, {
            "open": 0,
            "through": 1,
            "interrupted": 2
        }, {
            "": [0.05, 0.95, r313_Descender / 2, "std"],
            "cap": [0.12, 0.88, 0, "cap"]
        });
        var _r313_t18 = _r1_t2(r313_DollarConfig)[Symbol.iterator]();
        var _r313_t19 = void 0;
        while (!(_r313_t19 = _r313_t18.next()).done) {
            _r313_t20 = _r313_t19.value;
            r313_suffix = _r313_t20[0];
            r313_sl = _r313_t20[1][0];
            r313_fillType = _r313_t20[1][1];
            r313_kBot = _r313_t20[1][2][0];
            r313_kTop = _r313_t20[1][2][1];
            r313_overflow = _r313_t20[1][2][2];
            r313_selector = _r313_t20[1][2][3];
            _r313_t20[1][2];
            _r313_t20[1];
            (function () {
                var r567_xBot = function (r568_df) {
                    var _r568_t0, _r568_t1;
                    return r1_mix(r568_df.leftSB, r568_df.rightSB, 0.5 - r313_sl);
                };
                var r567_xTop = function (r569_df) {
                    var _r569_t0, _r569_t1;
                    return r1_mix(r569_df.leftSB, r569_df.rightSB, 0.5 + r313_sl);
                };
                var r567_bot = r1_mix(0, r313_CAP, r313_kBot);
                var r567_top = r1_mix(0, r313_CAP, r313_kTop);
                var r567_swBarThick = r313_AdviceStroke(3);
                var r567_swBarFine = r313_AdviceStroke(r313_StrokeWidthBlend(3, 5.5));
                var r567_FullBar = function (r570_df, r570_sw) {
                    var _r570_t0, _r570_t1;
                    return r313_dispiro(r313_flat(r567_xBot(r570_df), 0 + r313_overflow, r313_widths.center.heading(r570_sw, r313_Downward)), r313_curl(r567_xTop(r570_df), r313_CAP - r313_overflow, r313_widths.center.heading(r570_sw, r313_Downward)));
                };
                var r567_InterruptBar = function (r571_df) {
                    var _r571_t0, _r571_t1;
                    var r571_cofine = r313_AdviceStroke(4);
                    return r313_union(r313_dispiro(r313_flat(r567_xTop(r571_df), r313_CAP - r313_overflow, r313_widths.center.heading(r571_cofine, r313_Downward)), r313_curl(r571_df.middle, r1_mix(r567_top, r567_bot, 0.5), r313_widths.center.heading(r567_swBarFine, r313_Downward))), r313_dispiro(r313_flat(r567_xBot(r571_df), 0 + r313_overflow, r313_widths.center.heading(r571_cofine, r313_Upward)), r313_curl(r571_df.middle, r1_mix(r567_bot, r567_top, 0.5), r313_widths.center.heading(r567_swBarFine, r313_Upward))));
                };
                var r567_DollarMask = function (r572_df, r572_stroke) {
                    var _r572_t0, _r572_t1, _r572_t2, _r572_t3, _r572_t4, _r572_t5;
                    var r572_archDepthA = r313_AdviceSArchDepth(r567_top - r567_bot, -1, r572_stroke);
                    var r572_archDepthB = r313_AdviceSArchDepth(r567_top - r567_bot, +1, r572_stroke);
                    return (_r572_t0 = r572_df.leftSB + 0.5 * r572_stroke, _r572_t1 = r567_top - 0.5 * r572_stroke, _r572_t2 = r572_df.rightSB - 0.5 * r572_stroke, _r572_t3 = r567_bot + 0.5 * r572_stroke, r313_xn$spirooutline$1aao(r313_curl(_r572_t0, _r572_t1 - r572_archDepthA), r313_Arch.rhs(new r313_xn$NamedParameterPair$2Lrc9b("sw", r572_stroke), _r572_t1), r313_flat(_r572_t2, _r572_t1 - r572_archDepthB), r313_curl(_r572_t2, _r572_t3 + r572_archDepthA), r313_Arch.rhs(new r313_xn$NamedParameterPair$2Lrc9b("sw", r572_stroke), _r572_t3), r313_flat(_r572_t0, _r572_t3 + r572_archDepthB)));
                };
                var r567_InterruptMask = function (r576_df) {
                    var _r576_t0, _r576_t1;
                    var r576_gap = r567_swBarThick * r313_EssRatioUpper + Math.max((r567_top - r567_bot) / 6, r313_AdviceStroke2(3, 3, r567_top - r567_bot));
                    var r576_yMid = r1_mix(r567_bot, r567_top, 0.5);
                    var r576_yTermLeft = r1_mix(r576_yMid, r567_top - r313_AdviceSArchDepth(r567_top - r567_bot, -1, r567_swBarThick), 0.5);
                    var r576_yTermRight = r1_mix(r576_yMid, r567_bot + r313_AdviceSArchDepth(r567_top - r567_bot, -1, r567_swBarThick), 0.5);
                    return r313_ExtLineCenter(0, r576_yTermLeft, r313_Width, r576_yTermRight, r576_gap);
                };
                return r313_xn$GlyphSaveSink$2Lrc4b.save("dollar/bar." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r579_currentGlyph) {
                    var r579___, _r579_t0, _r579_t1, _r579_t2;
                    var r579_df = r579_currentGlyph.include(r313_DfUpper);
                    r579_currentGlyph.setBaseAnchor("cvDecompose", r579_df.middle, r313_CAP / 2);
                    r1_DependentSelector.set(r579_currentGlyph, r313_selector);
                    var r579_outlineMask = function () {
                        var _r582_t0, _r582_t1;
                        return r567_DollarMask(r579_df, r313_AdviceStroke2(2, 3, r313_CAP));
                    };
                    r579_currentGlyph.include(r313_difference(r567_FullBar(r579_df, r567_swBarThick), r579_outlineMask()));
                    r579_currentGlyph.include((_r579_t0 = r313_fillType, _r579_t0 === 1 ? r313_intersection(r567_FullBar(r579_df, r567_swBarFine), r579_outlineMask()) : _r579_t0 === 2 ? r313_intersection(r567_InterruptBar(r579_df), r313_difference(r579_outlineMask(), r567_InterruptMask(r579_df))) : (r579___ = _r579_t0, r313_xn$noshape$3cah())));
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("dollar/bar", new r313_xn$NamedParameterPair$2Lrc9b("follow", "dollar"));
        return r313_CreateDependentComposite("dollar", "$", "dollar/bar", {
            "std": "S/dollarKernelStd",
            "cap": "S/dollarKernelCap"
        });
    });
    return void 0;
});


