"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Lower-A", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_hookStyle, r313_body, r313_revBody, r313_xTrailing, r313_bar, r313_revBar, _r313_t13, _r313_t17, _r313_t18, _r313_t19, _r313_t20, _r313_tag21, _r313_t22, _r313_tag23, _r313_t24, _r313_tag25, _r313_t26, _r313_tag27, _r313_t28, _r313_tag29, _r313_t30, _r313_tag31;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_AS_BASE = _r313_t0.AS_BASE;
        var r313_ALSO_METRICS = _r313_t0.ALSO_METRICS;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_DesignParameters = _r313_t1.DesignParameters;
        var r313_HalfUPM = _r313_t1.HalfUPM;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_TanSlope = _r313_t1.TanSlope;
        var r313_HVContrast = _r313_t1.HVContrast;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Upward = _r313_t1.Upward;
        var r313_Downward = _r313_t1.Downward;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_Leftward = _r313_t1.Leftward;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_OXHook = _r313_t1.OXHook;
        var r313_AHook = _r313_t1.AHook;
        var r313_HookX = _r313_t1.HookX;
        var r313_ArchDepth = _r313_t1.ArchDepth;
        var r313_SmallArchDepth = _r313_t1.SmallArchDepth;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_OverlayPos = _r313_t1.OverlayPos;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_SideJut = _r313_t1.SideJut;
        var r313_DToothlessRise = _r313_t1.DToothlessRise;
        var r313_ShoulderFine = _r313_t1.ShoulderFine;
        var r313_StrokeWidthBlend = _r313_t1.StrokeWidthBlend;
        var r313_SmoothAdjust = _r313_t1.SmoothAdjust;
        var r313_ArchDepthAOf = _r313_t1.ArchDepthAOf;
        var r313_ArchDepthBOf = _r313_t1.ArchDepthBOf;
        var r313_ArchDepthA = _r313_t1.ArchDepthA;
        var r313_ArchDepthB = _r313_t1.ArchDepthB;
        var r313_YSmoothMidR = _r313_t1.YSmoothMidR;
        var r313_YSmoothMidL = _r313_t1.YSmoothMidL;
        var r313_ArchDepthAClamped = _r313_t1.ArchDepthAClamped;
        var r313_ArchDepthBClamped = _r313_t1.ArchDepthBClamped;
        var r313_TINY = _r313_t1.TINY;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_bezControls = _r313_t2.bezControls;
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
        var r313_Rect = _r313_t5.Rect;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_HookStart = _r313_t5.HookStart;
        var r313_flatside = _r313_t5.flatside;
        var r313_Arch = _r313_t5.Arch;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_xn$orthographicitalic$3DrD = _r313_t6["orthographic-italic"];
        var r313_xn$orthographicslab$3DrD = _r313_t6["orthographic-slab"];
        var r313_HalfAdvance = _r313_t6.HalfAdvance;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateAccentedComposition = _r313_t7.CreateAccentedComposition;
        var r313_CreateMultiAccentedComposition = _r313_t7.CreateMultiAccentedComposition;
        var r313_CreateTurnedLetter = _r313_t7.CreateTurnedLetter;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_SerifFrame = _r313_t8.SerifFrame;
        var r313_OBarRight = _r313_t8.OBarRight;
        var r313_OBarLeft = _r313_t8.OBarLeft;
        var r313_ArcStartSerif = _r313_t8.ArcStartSerif;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_RightwardTailedBar = _r313_t9.RightwardTailedBar;
        var r313_LeftwardTailedBar = _r313_t9.LeftwardTailedBar;
        var r313_RetroflexHook = _r313_t9.RetroflexHook;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_InwardSlabArcStart = _r313_t10.InwardSlabArcStart;
        var r313_xn$HOOKSLABNONE$5sIl5 = 0;
        var r313_xn$HOOKSLABCLASSICAL$5sIl5 = 1;
        var r313_xn$HOOKSLABINWARD$5sIl5 = 2;
        var r313_xn$HOOKHALF$5sIl = 3;
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r321_t0, _r321_t1;
            return {
                "DoubleStorey": r313_DoubleStorey
            };
        });
        var r313_DoubleStorey = (function () {
            var r324_Sw, r324_SmoothA, r324_SmoothB, r324_HookAndBar, r324_HookAndBarMask, r324_Arc, r324_ArcMask, r324_Serifless, r324_Serifed, r324_Tailed, r324_FlatBottomSerifless, r324_FlatBottomSerifed, r324_ToothlessCorner, r324_ToothlessRounded, r324_Mask;
            var r324_exports = {};
            r324_exports.Sw = r324_Sw = function (r332_df) {
                var _r332_t0, _r332_t1;
                return r332_df.adviceStroke2(2, 3, r313_XH);
            };
            r324_exports.SmoothA = r324_SmoothA = function (r334_df) {
                var _r334_t0, _r334_t1;
                var r334_sw = r324_Sw(r334_df);
                var r334_ad = r313_ArchDepth * r313_StrokeWidthBlend(0.9, 0.81, r334_sw);
                return r313_ArchDepthAClamped(r313_XH, 0, r334_df.archDepthAOf(r334_ad, r334_sw), r334_df.archDepthBOf(r334_ad, r334_sw));
            };
            r324_exports.SmoothB = r324_SmoothB = function (r336_df) {
                var _r336_t0, _r336_t1;
                var r336_sw = r324_Sw(r336_df);
                var r336_ad = r313_ArchDepth * r313_StrokeWidthBlend(0.9, 0.81, r336_sw);
                return r313_ArchDepthBClamped(r313_XH, 0, r336_df.archDepthAOf(r336_ad, r336_sw), r336_df.archDepthBOf(r336_ad, r336_sw));
            };
            var r324_HookAndBarT = function (r337_sink) {
                var _r337_t0, _r337_t1;
                return function (r338_df, r338_hookStyle, r338_y0, r338_stroke, r338_fine) {
                    var r338___, _r338_t0, _r338_t1, _r338_t2, _r338_t3;
                    var r338_isMask = r337_sink === r313_xn$spirooutline$1aao;
                    var r338_barRightX = r338_df.rightSB - r313_HSwToV(r338_stroke - r1_fallback(r338_fine, r338_stroke));
                    var r338_hookLeftX = (_r338_t0 = r338_hookStyle, _r338_t0 === r313_xn$HOOKHALF$5sIl ? Math.min(r338_barRightX - r313_HSwToV(r1_fallback(r338_fine, r338_stroke) + 0.125 * r338_stroke) - r313_TINY - Math.abs(r313_TanSlope * r338_stroke), r313_Arch["adjust-x"].top(r338_barRightX - r313_HSwToV(0.5 * r1_fallback(r338_fine, r338_stroke)) - r313_HookX, new r313_xn$NamedParameterPair$2Lrc9b("sw", r1_mix(r338_stroke, r1_fallback(r338_fine, r338_stroke), 0.5))) + r313_OXHook) : (r338___ = _r338_t0, r338_df.leftSB + 0));
                    return r337_sink(r313_widths.rhs(r338_stroke), (_r338_t1 = r338_hookStyle, _r338_t1 === r313_xn$HOOKSLABINWARD$5sIl5 ? r313_InwardSlabArcStart.LtrRhs(r338_hookLeftX, r313_XH, r338_stroke, r313_AHook, new r313_xn$NamedParameterPair$2Lrc9b("swAfter", r338_fine)) : _r338_t1 === r313_xn$HOOKHALF$5sIl ? [r313_g4.right.start(r338_hookLeftX, r313_XH - r313_O), r313_archv()] : (r338___ = _r338_t1, r338_fine ? [r313_g4.up.start(r338_hookLeftX, r313_XH - r313_AHook, r313_heading(r313_Upward)), r313_Arch.rhs(r313_XH, new r313_xn$NamedParameterPair$2Lrc9b("sw", r338_stroke), new r313_xn$NamedParameterPair$2Lrc9b("swAfter", r338_fine))] : [r313_g4(r338_hookLeftX, r313_XH - r313_AHook), r313_HookStart(r313_XH, new r313_xn$NamedParameterPair$2Lrc9b("sw", r338_stroke))])), r313_flat(r338_barRightX, Math.max(r313_XH - r324_SmoothB(r338_df), r338_y0 + r313_TINY + r313_HSwToV(Math.abs(r313_TanSlope * r1_fallback(r338_fine, r338_stroke)))), r338_fine ? r313_widths.rhs(r338_fine) : void 0), (r338_isMask ? r313_corner : r313_curl)(r338_barRightX, r338_y0, r313_heading(r313_Downward)), r338_isMask ? [r313_corner(r338_hookLeftX, r338_y0)] : []);
                };
            };
            r324_exports.HookAndBar = r324_HookAndBar = function (r345_df, r345_hookStyle, r345_y0, r345_stroke, r345_fine) {
                var _r345_t0, _r345_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r347_currentGlyph) {
                    var r347___, _r347_t0, _r347_t1, _r347_t2;
                    var r347_sw = r1_fallback(r345_stroke, r324_Sw(r345_df));
                    r347_currentGlyph.include(r324_HookAndBarT(r313_dispiro)(r345_df, r345_hookStyle, r345_y0, r347_sw, r345_fine));
                    r347_currentGlyph.include((_r347_t0 = r345_hookStyle, _r347_t0 === r313_xn$HOOKSLABINWARD$5sIl5 ? r313_ArcStartSerif.InwardL(r345_df.leftSB, r313_XH, r347_sw, r313_AHook) : (r347___ = _r347_t0, r313_xn$noshape$3cah())));
                    return void 0;
                });
            };
            r324_exports.HookAndBarMask = r324_HookAndBarMask = function (r351_df, r351_hookStyle, r351_y0, r351_stroke, r351_fine) {
                var _r351_t0, _r351_t1;
                var r351_sw = r1_fallback(r351_stroke, r324_Sw(r351_df));
                return r324_HookAndBarT(r313_xn$spirooutline$1aao)(r351_df, r351_hookStyle, r351_y0, r351_sw, r351_fine);
            };
            var r324_ArcT = function (r352_sink) {
                var _r352_t0, _r352_t1;
                return function (r353_df, r353_kind, r353_rise, r353_stroke, r353_fine, r353_bbd) {
                    var _r353_t0, _r353_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r355_currentGlyph) {
                        var _r355_t0, _r355_t1, _r355_t2;
                        var r355_isMask = r352_sink === r313_xn$spirooutline$1aao;
                        var r355_barTop = r1_mix(0, r313_XH, r313_DesignParameters.aBarPos) + r353_stroke * (0.5 + r313_DesignParameters.aBarStrokeAdj);
                        var r355_ada = r353_df.archDepthAOf(r313_SmallArchDepth * 0.9, r353_stroke);
                        var r355_adb = r353_df.archDepthBOf(r313_SmallArchDepth * 0.9, r353_stroke);
                        var r355_ada2 = r313_ArchDepthAOf(r313_SmallArchDepth * r313_DesignParameters.aBarPos);
                        var r355_adb2 = r313_ArchDepthBOf(r313_SmallArchDepth * r313_DesignParameters.aBarPos);
                        var r355_leftSlopeS = 0.1 * (r353_df.width / r313_HalfUPM);
                        var r355_leftSlope = r1_clamp(-1, +1, r355_leftSlopeS - r313_TanSlope);
                        r355_currentGlyph.include(r352_sink(r313_widths.lhs(r353_stroke), (r355_isMask ? r313_corner : r313_flat)(r353_df.rightSB + r313_O, r355_barTop, r313_heading(r313_Leftward)), r313_curl(r1_mix(r353_df.rightSB, r353_df.middle, 0.9), r355_barTop), r313_archv(), r313_g4(r353_df.leftSB + r313_OX, r313_YSmoothMidL(r355_barTop, 0, r355_ada2, r355_adb2) - r313_HSwToV(r355_leftSlopeS) * r313_SmoothAdjust, r313_heading({
                            "x": +r313_HVContrast,
                            "y": +r355_leftSlope
                        })), (_r355_t0 = r353_kind, 0 === _r355_t0 ? [r313_Arch.lhs(0, new r313_xn$NamedParameterPair$2Lrc9b("sw", r353_stroke), new r313_xn$NamedParameterPair$2Lrc9b("swAfter", r353_fine)), r313_flat(r353_df.rightSB - r353_bbd - r313_HSwToV(r353_stroke - r353_fine), Math.min(r355_barTop - r313_TINY - r313_HSwToV(Math.abs(r353_fine * r313_TanSlope)), 0 + r355_ada), r313_widths.lhs(r353_fine)), (r355_isMask ? r313_corner : r313_curl)(r353_df.rightSB - r353_bbd - r313_HSwToV(r353_stroke - r353_fine), r355_barTop, r313_heading(r313_Upward))] : 1 === _r355_t0 ? r353_rise ? [r313_Arch.lhs(0, new r313_xn$NamedParameterPair$2Lrc9b("sw", r353_stroke), new r313_xn$NamedParameterPair$2Lrc9b("blendPost", [])), r313_g4(r353_df.rightSB, r353_rise)] : [r313_arcvh(), r313_flat(r313_Arch["adjust-x"].bot(r353_df.middle, new r313_xn$NamedParameterPair$2Lrc9b("sw", r353_stroke)), 0), r313_curl(r353_df.rightSB + r313_O, 0, r313_heading(r313_Rightward))] : 2 === _r355_t0 ? [r313_Arch.lhs(0, new r313_xn$NamedParameterPair$2Lrc9b("sw", r353_stroke)), r313_flat(r353_df.rightSB, Math.min(r353_rise, r313_YSmoothMidR(r355_barTop, 0, r355_ada2, r355_adb2))), r313_curl(r353_df.rightSB, r353_rise + r313_TINY + r313_HSwToV(Math.abs(r353_stroke * r313_TanSlope)), r313_heading(r313_Upward))] : void 0)));
                        return void 0;
                    });
                };
            };
            r324_exports.Arc = r324_Arc = function (r364_df, r364_kind, r364_rise, r364__sw, r364__fine, r364__bbd) {
                var _r364_t0, _r364_t1;
                return r324_ArcT(r313_dispiro)(r364_df, r364_kind, r364_rise, r1_fallback(r364__sw, r324_Sw(r364_df)), r1_fallback(r364__fine, r364_df.shoulderFine), r1_fallback(r364__bbd, 0));
            };
            r324_exports.ArcMask = r324_ArcMask = function (r366_df, r366_kind, r366_rise, r366__sw, r366__fine, r366__bbd) {
                var _r366_t0, _r366_t1;
                return r324_ArcT(r313_xn$spirooutline$1aao)(r366_df, r366_kind, r366_rise, r1_fallback(r366__sw, r324_Sw(r366_df)), r1_fallback(r366__fine, r366_df.shoulderFine), r1_fallback(r366__bbd, 0));
            };
            r324_exports.Serifless = r324_Serifless = function (r368_df, r368_hookStyle, r368__sw) {
                var _r368_t0, _r368_t1;
                return r313_union(r324_HookAndBar(r368_df, r368_hookStyle, 0, r368__sw), r324_Arc(r368_df, 0, 0, r368__sw));
            };
            r324_exports.Serifed = r324_Serifed = function (r370_df, r370_hookStyle, r370__sw) {
                var _r370_t0, _r370_t1;
                return r313_union(r324_Serifless(r370_df, r370_hookStyle, r370__sw), r313_SerifFrame.fromDf(r370_df, r313_XH, 0, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r1_fallback(r370__sw, r324_Sw(r370_df))), new r313_xn$NamedParameterPair$2Lrc9b("swSerif", r370_df.mvs)).rb.outer);
            };
            r324_exports.Tailed = r324_Tailed = function (r374_df, r374_hookStyle, r374__sw) {
                var _r374_t0, _r374_t1;
                return r313_union(r324_HookAndBar(r374_df, r374_hookStyle, r324_SmoothA(r374_df), r374__sw), r324_Arc(r374_df, 0, 0, r374__sw), r313_RightwardTailedBar(r374_df.rightSB, 0, r313_XH - r324_SmoothB(r374_df), r1_fallback(r374__sw, r324_Sw(r374_df))));
            };
            r324_exports.FlatBottomSerifless = r324_FlatBottomSerifless = function (r376_df, r376_hookStyle, r376__sw) {
                var _r376_t0, _r376_t1;
                return r313_union(r324_HookAndBar(r376_df, r376_hookStyle, 0, r376__sw), r324_Arc(r376_df, 1, 0, r376__sw));
            };
            r324_exports.FlatBottomSerifed = r324_FlatBottomSerifed = function (r378_df, r378_hookStyle, r378__sw) {
                var _r378_t0, _r378_t1;
                return r313_union(r324_FlatBottomSerifless(r378_df, r378_hookStyle, r378__sw), r313_SerifFrame.fromDf(r378_df, r313_XH, 0, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r1_fallback(r378__sw, r324_Sw(r378_df))), new r313_xn$NamedParameterPair$2Lrc9b("swSerif", r378_df.mvs)).rb.outer);
            };
            r324_exports.ToothlessCorner = r324_ToothlessCorner = function (r382_df, r382_hookStyle, r382__sw) {
                var _r382_t0, _r382_t1;
                return r313_union(r324_HookAndBar(r382_df, r382_hookStyle, r313_DToothlessRise, r382__sw), r324_Arc(r382_df, 1, r313_DToothlessRise, r382__sw));
            };
            r324_exports.ToothlessRounded = r324_ToothlessRounded = function (r384_df, r384_hookStyle, r384__sw) {
                var _r384_t0, _r384_t1;
                return r313_union(r324_HookAndBar(r384_df, r384_hookStyle, r324_SmoothA(r384_df), r384__sw), r324_Arc(r384_df, 2, r324_SmoothA(r384_df), r384__sw));
            };
            r324_exports.Mask = r324_Mask = function (r386_shapeFn, r386_df, r386__sw) {
                var r386___, _r386_t1, _r386_t2;
                var _r386_t0 = r386_shapeFn;
                return _r386_t0 === r324_FlatBottomSerifless ? r324_ArcMask(r386_df, 1, 0, r386__sw) : _r386_t0 === r324_FlatBottomSerifed ? r324_ArcMask(r386_df, 1, 0, r386__sw) : _r386_t0 === r324_ToothlessCorner ? r324_ArcMask(r386_df, 1, r313_DToothlessRise, r386__sw) : _r386_t0 === r324_ToothlessRounded ? r324_ArcMask(r386_df, 2, r324_SmoothA(r386_df), r386__sw) : (r386___ = _r386_t0, r324_ArcMask(r386_df, 0, 0, r386__sw));
            };
            return r324_exports;
        })();
        var r313_RevDoubleStorey = (function () {
            var r389_Sw, r389_SmoothA, r389_SmoothB, r389_HookAndBar, r389_Arc, r389_Serifless, r389_Serifed, r389_Tailed, r389_FlatBottomSerifless, r389_FlatBottomSerifed, r389_ToothlessCorner, r389_ToothlessRounded;
            var r389_exports = {};
            r389_exports.Sw = r389_Sw = function (r397_df) {
                var _r397_t0, _r397_t1;
                return r397_df.adviceStroke2(2, 3, r313_XH);
            };
            r389_exports.SmoothA = r389_SmoothA = function (r399_df) {
                var _r399_t0, _r399_t1;
                var r399_sw = r389_Sw(r399_df);
                var r399_ad = r313_ArchDepth * r313_StrokeWidthBlend(0.9, 0.81, r399_sw);
                return r313_ArchDepthAClamped(r313_XH, 0, r399_df.archDepthAOf(r399_ad, r399_sw), r399_df.archDepthBOf(r399_ad, r399_sw));
            };
            r389_exports.SmoothB = r389_SmoothB = function (r401_df) {
                var _r401_t0, _r401_t1;
                var r401_sw = r389_Sw(r401_df);
                var r401_ad = r313_ArchDepth * r313_StrokeWidthBlend(0.9, 0.81, r401_sw);
                return r313_ArchDepthBClamped(r313_XH, 0, r401_df.archDepthAOf(r401_ad, r401_sw), r401_df.archDepthBOf(r401_ad, r401_sw));
            };
            r389_exports.HookAndBar = r389_HookAndBar = function (r403_df, r403_hookStyle, r403_y0, r403_stroke) {
                var _r403_t0, _r403_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r405_currentGlyph) {
                    var r405___, _r405_t0, _r405_t1, _r405_t2, _r405_t3;
                    var r405_sw = r1_fallback(r403_stroke, r389_Sw(r403_df));
                    r405_currentGlyph.include(r313_dispiro(r313_widths.lhs(r405_sw), (_r405_t0 = r403_hookStyle, _r405_t0 === r313_xn$HOOKSLABINWARD$5sIl5 ? r313_InwardSlabArcStart.RtlLhs(r403_df.rightSB, r313_XH, r405_sw, r313_AHook) : (r405___ = _r405_t0, [r313_g4(r403_df.rightSB, r313_XH - r313_AHook), r313_HookStart(r313_XH, new r313_xn$NamedParameterPair$2Lrc9b("sw", r405_sw))])), r313_flat(r403_df.leftSB, Math.max(r313_XH - r389_SmoothA(r403_df), r403_y0 + r313_TINY + r313_HSwToV(Math.abs(r313_TanSlope * r405_sw)))), r313_curl(r403_df.leftSB, r403_y0, r313_heading(r313_Downward))));
                    r405_currentGlyph.include((_r405_t1 = r403_hookStyle, _r405_t1 === r313_xn$HOOKSLABINWARD$5sIl5 ? r313_ArcStartSerif.InwardR(r403_df.rightSB, r313_XH, r405_sw, r313_AHook) : (r405___ = _r405_t1, r313_xn$noshape$3cah())));
                    return void 0;
                });
            };
            r389_exports.Arc = r389_Arc = function (r410_df, r410_kind, r410_rise, r410__sw) {
                var _r410_t0, _r410_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r412_currentGlyph) {
                    var _r412_t0, _r412_t1, _r412_t2;
                    var r412_stroke = r1_fallback(r410__sw, r389_Sw(r410_df));
                    var r412_barTop = r1_mix(0, r313_XH, r313_DesignParameters.aBarPos) + r412_stroke * (0.5 + r313_DesignParameters.aBarStrokeAdj);
                    var r412_ada = r410_df.archDepthAOf(r313_SmallArchDepth * 0.9, r412_stroke);
                    var r412_adb = r410_df.archDepthBOf(r313_SmallArchDepth * 0.9, r412_stroke);
                    var r412_ada2 = r313_ArchDepthAOf(r313_SmallArchDepth * r313_DesignParameters.aBarPos);
                    var r412_adb2 = r313_ArchDepthBOf(r313_SmallArchDepth * r313_DesignParameters.aBarPos);
                    var r412_rightSlopeS = 0.1 * (r410_df.width / r313_HalfUPM);
                    var r412_rightSlope = r1_clamp(-1, +1, r412_rightSlopeS + r313_TanSlope);
                    r412_currentGlyph.include(r313_dispiro(r313_widths.rhs(r412_stroke), r313_flat(r410_df.leftSB - r313_O, r412_barTop, r313_heading(r313_Rightward)), r313_curl(r1_mix(r410_df.leftSB, r410_df.middle, 0.9), r412_barTop), r313_archv(), r313_g4(r410_df.rightSB - r313_OX, r313_YSmoothMidR(r412_barTop, 0, r412_ada2, r412_adb2) - r313_HSwToV(r412_rightSlopeS) * r313_SmoothAdjust, r313_heading({
                        "x": +r313_HVContrast,
                        "y": -r412_rightSlope
                    })), (_r412_t0 = r410_kind, 0 === _r412_t0 ? [r313_Arch.rhs(0, new r313_xn$NamedParameterPair$2Lrc9b("sw", r412_stroke), new r313_xn$NamedParameterPair$2Lrc9b("swAfter", r410_df.shoulderFine)), r313_flat(r410_df.leftSB + r313_HSwToV(r412_stroke - r410_df.shoulderFine), Math.min(r412_barTop - r313_TINY - r313_HSwToV(Math.abs(r410_df.shoulderFine * r313_TanSlope)), 0 + r412_adb), r313_widths.rhs(r410_df.shoulderFine)), r313_curl(r410_df.leftSB + r313_HSwToV(r412_stroke - r410_df.shoulderFine), r412_barTop, r313_heading(r313_Upward))] : 1 === _r412_t0 ? r410_rise ? [r313_Arch.rhs(0, new r313_xn$NamedParameterPair$2Lrc9b("sw", r412_stroke), new r313_xn$NamedParameterPair$2Lrc9b("blendPost", [])), r313_g4(r410_df.leftSB, r410_rise)] : [r313_arcvh(), r313_flat(r313_Arch["adjust-x"].bot(r410_df.middle, new r313_xn$NamedParameterPair$2Lrc9b("sw", r412_stroke)), 0), r313_curl(r410_df.leftSB - r313_O, 0, r313_heading(r313_Leftward))] : 2 === _r412_t0 ? [r313_Arch.rhs(0, new r313_xn$NamedParameterPair$2Lrc9b("sw", r412_stroke)), r313_flat(r410_df.leftSB, Math.min(r410_rise, r313_YSmoothMidL(r412_barTop, 0, r412_ada2, r412_adb2))), r313_curl(r410_df.leftSB, r410_rise + r313_TINY + r313_HSwToV(Math.abs(r412_stroke * r313_TanSlope)), r313_heading(r313_Upward))] : void 0)));
                    return void 0;
                });
            };
            r389_exports.Serifless = r389_Serifless = function (r421_df, r421_hookStyle, r421__sw) {
                var _r421_t0, _r421_t1;
                return r313_union(r389_HookAndBar(r421_df, r421_hookStyle, 0, r421__sw), r389_Arc(r421_df, 0, 0, r421__sw));
            };
            r389_exports.Serifed = r389_Serifed = function (r423_df, r423_hookStyle, r423__sw) {
                var _r423_t0, _r423_t1;
                return r313_union(r389_Serifless(r423_df, r423_hookStyle, r423__sw), r313_SerifFrame.fromDf(r423_df, r313_XH, 0, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r1_fallback(r423__sw, r389_Sw(r423_df))), new r313_xn$NamedParameterPair$2Lrc9b("swSerif", r423_df.mvs)).lb.outer);
            };
            r389_exports.Tailed = r389_Tailed = function (r427_df, r427_hookStyle, r427__sw) {
                var _r427_t0, _r427_t1;
                return r313_union(r389_HookAndBar(r427_df, r427_hookStyle, r389_SmoothB(r427_df), r427__sw), r389_Arc(r427_df, 0, 0, r427__sw), r313_LeftwardTailedBar(r427_df.leftSB, 0, r313_XH - r389_SmoothA(r427_df), r1_fallback(r427__sw, r389_Sw(r427_df))));
            };
            r389_exports.FlatBottomSerifless = r389_FlatBottomSerifless = function (r429_df, r429_hookStyle, r429__sw) {
                var _r429_t0, _r429_t1;
                return r313_union(r389_HookAndBar(r429_df, r429_hookStyle, 0, r429__sw), r389_Arc(r429_df, 1, 0, r429__sw));
            };
            r389_exports.FlatBottomSerifed = r389_FlatBottomSerifed = function (r431_df, r431_hookStyle, r431__sw) {
                var _r431_t0, _r431_t1;
                return r313_union(r389_FlatBottomSerifless(r431_df, r431_hookStyle, r431__sw), r313_SerifFrame.fromDf(r431_df, r313_XH, 0, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r1_fallback(r431__sw, r389_Sw(r431_df))), new r313_xn$NamedParameterPair$2Lrc9b("swSerif", r431_df.mvs)).lb.outer);
            };
            r389_exports.ToothlessCorner = r389_ToothlessCorner = function (r435_df, r435_hookStyle, r435__sw) {
                var _r435_t0, _r435_t1;
                return r313_union(r389_HookAndBar(r435_df, r435_hookStyle, r313_DToothlessRise, r435__sw), r389_Arc(r435_df, 1, r313_DToothlessRise, r435__sw));
            };
            r389_exports.ToothlessRounded = r389_ToothlessRounded = function (r437_df, r437_hookStyle, r437__sw) {
                var _r437_t0, _r437_t1;
                return r313_union(r389_HookAndBar(r437_df, r437_hookStyle, r389_SmoothB(r437_df), r437__sw), r389_Arc(r437_df, 2, r389_SmoothB(r437_df), r437__sw));
            };
            return r389_exports;
        })();
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r439_t0, _r439_t1;
            return {
                "DoubleStoreyConfig": r313_DoubleStoreyConfig
            };
        });
        var r313_DoubleStoreyConfig = r1_SuffixCfg.weave({
            "doubleStorey": r313_xn$HOOKSLABNONE$5sIl5,
            "doubleStoreyHookInwardSerifed": r313_xn$HOOKSLABINWARD$5sIl5
        }, {
            "serifless": [r313_DoubleStorey.Serifless, r313_RevDoubleStorey.Serifless, r313_RightSB],
            "serifed": [r313_DoubleStorey.Serifed, r313_RevDoubleStorey.Serifed, r313_RightSB + r313_SideJut],
            "tailed": [r313_DoubleStorey.Tailed, r313_RevDoubleStorey.Tailed, r313_RightSB + r313_SideJut],
            "flatBottomSerifless": [r313_DoubleStorey.FlatBottomSerifless, r313_RevDoubleStorey.FlatBottomSerifless, r313_RightSB],
            "flatBottomSerifed": [r313_DoubleStorey.FlatBottomSerifed, r313_RevDoubleStorey.FlatBottomSerifed, r313_RightSB + r313_SideJut],
            "toothlessCorner": [r313_DoubleStorey.ToothlessCorner, r313_RevDoubleStorey.ToothlessCorner, null],
            "toothlessRounded": [r313_DoubleStorey.ToothlessRounded, r313_RevDoubleStorey.ToothlessRounded, null]
        });
        var _r313_t11 = Object.entries(r313_DoubleStoreyConfig)[Symbol.iterator]();
        var _r313_t12 = void 0;
        while (!(_r313_t12 = _r313_t11.next()).done) {
            _r313_t13 = _r313_t12.value;
            r313_suffix = _r313_t13[0];
            r313_hookStyle = _r313_t13[1][0];
            r313_body = _r313_t13[1][1][0];
            r313_revBody = _r313_t13[1][1][1];
            r313_xTrailing = _r313_t13[1][1][2];
            _r313_t13[1][1];
            _r313_t13[1];
            (function () {
                var _r442_t0, _r442_tag1;
                (function () {
                    var r444_make = function (r445_df, r445__hookStyle) {
                        var _r445_t0, _r445_t1;
                        return new r313_xn$Capture$2Lrc8.GlyphProc(function (r447_currentGlyph) {
                            var _r447_t0, _r447_t1;
                            r447_currentGlyph.setWidth(r445_df.width);
                            r447_currentGlyph.include(r445_df.markSet.e());
                            var r447_sw = r313_DoubleStorey.Sw(r445_df);
                            var r447_bp = r1_mix(0, r313_XH, r313_DesignParameters.aBarPos) + r447_sw * r313_DesignParameters.aBarStrokeAdj;
                            r447_currentGlyph.setBaseAnchor("overlay", r445_df.middle, r1_mix(0, r447_bp + r447_sw / 2, 0.5));
                            r447_currentGlyph.setBaseAnchor("strike", r445_df.middle, r447_bp);
                            if (r313_xTrailing) r447_currentGlyph.setBaseAnchor("trailing", r313_xTrailing, 0);
                            r447_currentGlyph.include(r313_body(r445_df, r1_fallback(r445__hookStyle, r313_hookStyle)));
                            return void 0;
                        });
                    };
                    r313_xn$GlyphSaveSink$2Lrc4b.save("a." + r313_suffix, null, r444_make(r313_DivFrame(1)));
                    return !r313_hookStyle ? r313_xn$GlyphSaveSink$2Lrc4b.save("aHalf." + r313_suffix, null, r444_make(r313_DivFrame(1), r313_xn$HOOKHALF$5sIl)) : void 0;
                })();
                r313_xn$GlyphSaveSink$2Lrc4b.save("aSwash." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r458_currentGlyph) {
                    var _r458_t0, _r458_t1;
                    r458_currentGlyph.include(r313_xn$referglyph$1aao("a." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r458_currentGlyph.ejectTagged("serifRB");
                    r458_currentGlyph.include(r313_RetroflexHook.rExt(r313_RightSB, 0, new r313_xn$NamedParameterPair$2Lrc9b("yAttach", r313_DoubleStorey.SmoothA(r313_DivFrame(1))), new r313_xn$NamedParameterPair$2Lrc9b("sw", r313_DoubleStorey.Sw(r313_DivFrame(1)))));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("reva." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r466_currentGlyph) {
                    var _r466_t0, _r466_t1;
                    var r466_df = r466_currentGlyph.include(r313_DivFrame(1));
                    r466_currentGlyph.include(r466_df.markSet.e());
                    var r466_sw = r313_RevDoubleStorey.Sw(r466_df);
                    var r466_bp = r1_mix(0, r313_XH, r313_DesignParameters.aBarPos) + r466_sw * r313_DesignParameters.aBarStrokeAdj;
                    r466_currentGlyph.setBaseAnchor("overlay", r466_df.middle, r1_mix(0, r466_bp + r466_sw / 2, 0.5));
                    r466_currentGlyph.setBaseAnchor("strike", r466_df.middle, r466_bp);
                    r466_currentGlyph.include(r313_revBody(r466_df, r313_hookStyle));
                    return void 0;
                }));
                return r313_body === r313_DoubleStorey.Serifless ? r313_xn$GlyphSaveSink$2Lrc4b.save("aRetroflexHook." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r474_currentGlyph) {
                    var _r474_t0, _r474_t1;
                    r474_currentGlyph.include(r313_xn$referglyph$1aao("a." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r474_currentGlyph.include(r313_RetroflexHook.rSideJut(r313_RightSB, 0, new r313_xn$NamedParameterPair$2Lrc9b("yOverflow", r313_Stroke)));
                    return void 0;
                })) : void 0;
            })();
        }
        var _r313_t14 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t14.BBS;
        var r313_BBD = _r313_t14.BBD;
        r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/a", 120146, new r313_xn$Capture$2Lrc8.GlyphProc(function (r481_currentGlyph) {
            var _r481_t0, _r481_t1;
            var r481_df = r481_currentGlyph.include(r313_DivFrame(1));
            r481_currentGlyph.include(r481_df.markSet.e());
            r481_currentGlyph.include(r313_DoubleStorey.HookAndBar(r481_df, 0, 0, r313_BBS));
            r481_currentGlyph.include(r313_intersection(r313_DoubleStorey.HookAndBarMask(r481_df, 0, 0), r313_VBar.r(r313_RightSB - r313_BBD, 0, r313_XH, r313_BBS)));
            r481_currentGlyph.include(r313_difference(r313_union(r313_DoubleStorey.Arc(r481_df, 0, 0, r313_BBS, r313_ShoulderFine, r313_BBD), r313_intersection(r313_DoubleStorey.ArcMask(r481_df, 0, 0, r313_BBS, r313_ShoulderFine, r313_BBD), r313_VBar.l(r313_SB + r313_OX + r313_BBD, 0, r313_XH, r313_BBS))), r313_Rect(r313_XH, 0, r313_RightSB - r313_BBD, r313_Width)));
            r481_currentGlyph.include(r313_HBar.b(r313_RightSB - r313_BBD, r313_RightSB, 0, r313_BBS));
            return void 0;
        }));
        var r313_CrossingBody = function (r488_df, r488_top, r488__sw, r488__ada, r488__adb) {
            var _r488_t0, _r488_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r490_currentGlyph) {
                var _r490_t0, _r490_t1;
                var r490_sw = r1_fallback(r488__sw, r488_df.mvs);
                var r490_ada = r1_fallback(r488__ada, r488_df.archDepthAOf(r313_SmallArchDepth, r490_sw));
                var r490_adb = r1_fallback(r488__adb, r488_df.archDepthBOf(r313_SmallArchDepth, r490_sw));
                var r490_middle = r1_mix(r488_df.leftSB, r488_df.rightSB, 0.42);
                var r490_fine = r488_df.adviceStroke(3.25);
                var r490_k1 = 0.25;
                var r490_k2 = 0.5;
                var r490_k3 = 0.35;
                var r490_k4 = 1;
                r490_currentGlyph.include(r313_dispiro(r313_g4(r488_df.rightSB - r313_OX * 1.75, r488_top, r313_widths.rhs.heading(r490_fine, r313_Downward)), r313_bezControls(0 + r490_k1, 0 + r490_k2, 0 + r490_k3, 0 + r490_k4, 6), r313_Arch.rhs.centerAt.rtl.b(r490_middle, 0, new r313_xn$NamedParameterPair$2Lrc9b("sw", r488_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("swBefore", r490_fine)), r313_archv(), r313_flatside.lu(r488_df.leftSB, 0, r488_top, r490_ada, r490_adb, r313_OX * 2, r313_widths.rhs(r488_df.mvs)), r313_arcvh(), r313_Arch.rhs.centerAt.ltr.t(r490_middle, r488_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r488_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("swAfter", r490_fine)), r313_bezControls(1 - r490_k3, 1 - r490_k4, 1 - r490_k1, 1 - r490_k2, 6), r313_g4(r488_df.rightSB - r313_OX * 2, 0, r313_widths.rhs.heading(r490_fine, r313_Downward))));
                r490_currentGlyph.setBaseAnchor("overlay", r490_middle - r313_OX, r1_mix(0, r488_top, r313_OverlayPos));
                r490_currentGlyph.setBaseAnchor("strike", r490_middle - r313_OX, r1_mix(0, r488_top, 0.5));
                return void 0;
            });
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save("a.crossing", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r500_currentGlyph) {
            var _r500_t0, _r500_t1;
            var r500_df = r500_currentGlyph.include(r313_DivFrame(1));
            r500_currentGlyph.include(r500_df.markSet.e());
            r500_currentGlyph.include(r313_CrossingBody(r500_df, r313_XH));
            return void 0;
        }));
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r505_t0, _r505_t1;
            return {
                "SingleStorey": r313_SingleStorey
            };
        });
        var r313_SingleStorey = (function () {
            var r508_FullBarBody, r508_TopCutBody, r508_FlatTopBody, r508_EarlessCornerBody, r508_EarlessRoundedBody, r508_SeriflessBar, r508_BottomSerifedBar, r508_DoubleSerifedBar, r508_TailedBar, r508_TailedSerifedBar;
            var r508_exports = {};
            r508_exports.FullBarBody = r508_FullBarBody = function (r516_df, r516_top, r516_bar, r516__sw, r516__ada, r516__adb) {
                var _r516_t0, _r516_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r518_currentGlyph) {
                    var _r518_t0, _r518_t1;
                    var r518_sw = r1_fallback(r516__sw, r516_df.mvs);
                    var r518_ada = r1_fallback(r516__ada, r516_df.archDepthAOf(r313_SmallArchDepth, r518_sw));
                    var r518_adb = r1_fallback(r516__adb, r516_df.archDepthBOf(r313_SmallArchDepth, r518_sw));
                    r518_currentGlyph.include(r313_OBarRight.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r516_top), new r313_xn$NamedParameterPair$2Lrc9b("left", r516_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r516_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("sw", r518_sw), new r313_xn$NamedParameterPair$2Lrc9b("fine", r313_ShoulderFine * (r518_sw / r313_Stroke)), new r313_xn$NamedParameterPair$2Lrc9b("ada", r518_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r518_adb)));
                    r518_currentGlyph.include(r516_bar(r516_df, r516_top, r518_sw));
                    return void 0;
                });
            };
            r508_exports.TopCutBody = r508_TopCutBody = function (r529_df, r529_top, r529_bar, r529__sw, r529__ada, r529__adb) {
                var _r529_t0, _r529_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r531_currentGlyph) {
                    var _r531_t0, _r531_t1;
                    var r531_sw = r1_fallback(r529__sw, r529_df.mvs);
                    var r531_ada = r1_fallback(r529__ada, r529_df.archDepthAOf(r313_SmallArchDepth, r531_sw));
                    var r531_adb = r1_fallback(r529__adb, r529_df.archDepthBOf(r313_SmallArchDepth, r531_sw));
                    r531_currentGlyph.include(r313_OBarRight.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r529_top), new r313_xn$NamedParameterPair$2Lrc9b("left", r529_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r529_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("sw", r531_sw), new r313_xn$NamedParameterPair$2Lrc9b("fine", r313_ShoulderFine * (r531_sw / r313_Stroke)), new r313_xn$NamedParameterPair$2Lrc9b("ada", r531_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r531_adb)));
                    r531_currentGlyph.include(r529_bar(r529_df, r529_top - r313_HalfStroke, r531_sw));
                    r531_currentGlyph.include(r313_xn$spirooutline$1aao(r313_corner(r529_df.rightSB, r529_top), r313_corner(r529_df.rightSB, r529_top - r313_HalfStroke), r313_corner(r529_df.rightSB - r313_HSwToV(r531_sw), r529_top - r313_HalfStroke)));
                    return void 0;
                });
            };
            r508_exports.FlatTopBody = r508_FlatTopBody = function (r543_df, r543_top, r543_bar, r543__sw, r543__ada, r543__adb) {
                var _r543_t0, _r543_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r545_currentGlyph) {
                    var _r545_t0, _r545_t1;
                    var r545_sw = r1_fallback(r543__sw, r543_df.mvs);
                    var r545_ada = r1_fallback(r543__ada, r543_df.archDepthAOf(r313_SmallArchDepth, r545_sw));
                    var r545_adb = r1_fallback(r543__adb, r543_df.archDepthBOf(r313_SmallArchDepth, r545_sw));
                    r545_currentGlyph.include(r313_OBarRight.earlessCorner(new r313_xn$NamedParameterPair$2Lrc9b("top", r543_top), new r313_xn$NamedParameterPair$2Lrc9b("left", r543_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r543_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("sw", r545_sw), new r313_xn$NamedParameterPair$2Lrc9b("fine", r313_ShoulderFine * (r545_sw / r313_Stroke)), new r313_xn$NamedParameterPair$2Lrc9b("ada", r545_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r545_adb), new r313_xn$NamedParameterPair$2Lrc9b("rise", 0)));
                    r545_currentGlyph.include(r543_bar(r543_df, r543_top, r545_sw));
                    return void 0;
                });
            };
            r508_exports.EarlessCornerBody = r508_EarlessCornerBody = function (r557_df, r557_top, r557_bar, r557__sw, r557__ada, r557__adb) {
                var _r557_t0, _r557_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r559_currentGlyph) {
                    var _r559_t0, _r559_t1;
                    var r559_sw = r1_fallback(r557__sw, r557_df.mvs);
                    var r559_ada = r1_fallback(r557__ada, r557_df.archDepthAOf(r313_SmallArchDepth, r559_sw));
                    var r559_adb = r1_fallback(r557__adb, r557_df.archDepthBOf(r313_SmallArchDepth, r559_sw));
                    r559_currentGlyph.include(r313_OBarRight.earlessCorner(new r313_xn$NamedParameterPair$2Lrc9b("top", r557_top), new r313_xn$NamedParameterPair$2Lrc9b("left", r557_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r557_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("sw", r559_sw), new r313_xn$NamedParameterPair$2Lrc9b("fine", r313_ShoulderFine * (r559_sw / r313_Stroke)), new r313_xn$NamedParameterPair$2Lrc9b("ada", r559_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r559_adb)));
                    r559_currentGlyph.include(r557_bar(r557_df, r557_top - r313_DToothlessRise, r559_sw));
                    return void 0;
                });
            };
            r508_exports.EarlessRoundedBody = r508_EarlessRoundedBody = function (r570_df, r570_top, r570_bar, r570__sw, r570__ada, r570__adb) {
                var _r570_t0, _r570_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r572_currentGlyph) {
                    var _r572_t0, _r572_t1;
                    var r572_sw = r1_fallback(r570__sw, r570_df.mvs);
                    var r572_ada = r1_fallback(r570__ada, r570_df.archDepthAOf(r313_SmallArchDepth, r572_sw));
                    var r572_adb = r1_fallback(r570__adb, r570_df.archDepthBOf(r313_SmallArchDepth, r572_sw));
                    r572_currentGlyph.include(r313_OBarRight.earlessRounded(new r313_xn$NamedParameterPair$2Lrc9b("top", r570_top), new r313_xn$NamedParameterPair$2Lrc9b("left", r570_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r570_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("sw", r572_sw), new r313_xn$NamedParameterPair$2Lrc9b("fine", r313_ShoulderFine * (r572_sw / r313_Stroke)), new r313_xn$NamedParameterPair$2Lrc9b("ada", r572_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r572_adb), new r313_xn$NamedParameterPair$2Lrc9b("yTerminal", r572_ada)));
                    r572_currentGlyph.include(r570_bar(r570_df, r570_top - r572_adb, r572_sw));
                    return void 0;
                });
            };
            r508_exports.SeriflessBar = r508_SeriflessBar = function (r584_df, r584_top, r584__sw) {
                var _r584_t0, _r584_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r586_currentGlyph) {
                    var _r586_t0, _r586_t1;
                    r586_currentGlyph.setBaseAnchor("trailing", r584_df.rightSB, 0);
                    r586_currentGlyph.include(r313_VBar.r(r584_df.rightSB, 0, r584_top, r584__sw));
                    return void 0;
                });
            };
            r508_exports.BottomSerifedBar = r508_BottomSerifedBar = function (r590_df, r590_top, r590__sw) {
                var _r590_t0, _r590_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r592_currentGlyph) {
                    var _r592_t0, _r592_t1;
                    r592_currentGlyph.include(r508_SeriflessBar(r590_df, r590_top, r590__sw));
                    var r592_sf = r313_SerifFrame.fromDf(r590_df, r590_top, 0, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r590__sw));
                    r592_currentGlyph.include(r592_sf.rb.outer);
                    return void 0;
                });
            };
            r508_exports.DoubleSerifedBar = r508_DoubleSerifedBar = function (r597_df, r597_top, r597__sw) {
                var _r597_t0, _r597_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r599_currentGlyph) {
                    var _r599_t0, _r599_t1;
                    r599_currentGlyph.include(r508_SeriflessBar(r597_df, r597_top, r597__sw));
                    var r599_sf = r313_SerifFrame.fromDf(r597_df, r597_top, 0, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r597__sw));
                    r599_currentGlyph.include(new r313_xn$Capture$2Lrc8.GlyphProc(function (r604_currentGlyph) {
                        var _r604_t0, _r604_t1;
                        r604_currentGlyph.include(r599_sf.rt.outer, true, true);
                        r604_currentGlyph.include(r599_sf.rb.outer);
                        return void 0;
                    }));
                    return void 0;
                });
            };
            r508_exports.TailedBar = r508_TailedBar = function (r608_df, r608_top, r608__sw) {
                var _r608_t0, _r608_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r610_currentGlyph) {
                    var _r610_t0, _r610_t1;
                    r610_currentGlyph.setBaseAnchor("trailing", r608_df.rightSB + r313_SideJut, 0);
                    r610_currentGlyph.include(r313_RightwardTailedBar(r608_df.rightSB, 0, r608_top, r608__sw));
                    return void 0;
                });
            };
            r508_exports.TailedSerifedBar = r508_TailedSerifedBar = function (r614_df, r614_top, r614__sw) {
                var _r614_t0, _r614_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r616_currentGlyph) {
                    var _r616_t0, _r616_t1;
                    r616_currentGlyph.include(r508_TailedBar(r614_df, r614_top, r614__sw));
                    var r616_sf = r313_SerifFrame.fromDf(r614_df, r614_top, 0, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r614__sw));
                    r616_currentGlyph.include(r616_sf.rt.outer);
                    return void 0;
                });
            };
            return r508_exports;
        })();
        var r313_RevSingleStorey = (function () {
            var r622_FullBarBody, r622_TopCutBody, r622_FlatTopBody, r622_EarlessCornerBody, r622_EarlessRoundedBody, r622_SeriflessBar, r622_BottomSerifedBar, r622_DoubleSerifedBar, r622_TailedBar, r622_TailedSerifedBar;
            var r622_exports = {};
            r622_exports.FullBarBody = r622_FullBarBody = function (r630_df, r630_top, r630_bar, r630__sw, r630__ada, r630__adb) {
                var _r630_t0, _r630_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r632_currentGlyph) {
                    var _r632_t0, _r632_t1;
                    var r632_sw = r1_fallback(r630__sw, r630_df.mvs);
                    var r632_ada = r1_fallback(r630__ada, r630_df.archDepthAOf(r313_SmallArchDepth, r632_sw));
                    var r632_adb = r1_fallback(r630__adb, r630_df.archDepthBOf(r313_SmallArchDepth, r632_sw));
                    r632_currentGlyph.include(r313_OBarLeft.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r630_top), new r313_xn$NamedParameterPair$2Lrc9b("left", r630_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r630_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("sw", r632_sw), new r313_xn$NamedParameterPair$2Lrc9b("fine", r313_ShoulderFine * (r632_sw / r313_Stroke)), new r313_xn$NamedParameterPair$2Lrc9b("ada", r632_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r632_adb)));
                    r632_currentGlyph.include(r630_bar(r630_df, r630_top, r632_sw));
                    return void 0;
                });
            };
            r622_exports.TopCutBody = r622_TopCutBody = function (r643_df, r643_top, r643_bar, r643__sw, r643__ada, r643__adb) {
                var _r643_t0, _r643_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r645_currentGlyph) {
                    var _r645_t0, _r645_t1;
                    var r645_sw = r1_fallback(r643__sw, r643_df.mvs);
                    var r645_ada = r1_fallback(r643__ada, r643_df.archDepthAOf(r313_SmallArchDepth, r645_sw));
                    var r645_adb = r1_fallback(r643__adb, r643_df.archDepthBOf(r313_SmallArchDepth, r645_sw));
                    r645_currentGlyph.include(r313_OBarLeft.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r643_top), new r313_xn$NamedParameterPair$2Lrc9b("left", r643_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r643_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("sw", r645_sw), new r313_xn$NamedParameterPair$2Lrc9b("fine", r313_ShoulderFine * (r645_sw / r313_Stroke)), new r313_xn$NamedParameterPair$2Lrc9b("ada", r645_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r645_adb)));
                    r645_currentGlyph.include(r643_bar(r643_df, r643_top - r313_HalfStroke, r645_sw));
                    r645_currentGlyph.include(r313_xn$spirooutline$1aao(r313_corner(r643_df.leftSB, r643_top), r313_corner(r643_df.leftSB, r643_top - r313_HalfStroke), r313_corner(r643_df.leftSB + r313_HSwToV(r645_sw), r643_top - r313_HalfStroke)));
                    return void 0;
                });
            };
            r622_exports.FlatTopBody = r622_FlatTopBody = function (r657_df, r657_top, r657_bar, r657__sw, r657__ada, r657__adb) {
                var _r657_t0, _r657_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r659_currentGlyph) {
                    var _r659_t0, _r659_t1;
                    var r659_sw = r1_fallback(r657__sw, r657_df.mvs);
                    var r659_ada = r1_fallback(r657__ada, r657_df.archDepthAOf(r313_SmallArchDepth, r659_sw));
                    var r659_adb = r1_fallback(r657__adb, r657_df.archDepthBOf(r313_SmallArchDepth, r659_sw));
                    r659_currentGlyph.include(r313_OBarLeft.earlessCorner(new r313_xn$NamedParameterPair$2Lrc9b("top", r657_top), new r313_xn$NamedParameterPair$2Lrc9b("left", r657_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r657_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("sw", r659_sw), new r313_xn$NamedParameterPair$2Lrc9b("fine", r313_ShoulderFine * (r659_sw / r313_Stroke)), new r313_xn$NamedParameterPair$2Lrc9b("ada", r659_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r659_adb), new r313_xn$NamedParameterPair$2Lrc9b("rise", 0)));
                    r659_currentGlyph.include(r657_bar(r657_df, r657_top, r659_sw));
                    return void 0;
                });
            };
            r622_exports.EarlessCornerBody = r622_EarlessCornerBody = function (r671_df, r671_top, r671_bar, r671__sw, r671__ada, r671__adb) {
                var _r671_t0, _r671_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r673_currentGlyph) {
                    var _r673_t0, _r673_t1;
                    var r673_sw = r1_fallback(r671__sw, r671_df.mvs);
                    var r673_ada = r1_fallback(r671__ada, r671_df.archDepthAOf(r313_SmallArchDepth, r673_sw));
                    var r673_adb = r1_fallback(r671__adb, r671_df.archDepthBOf(r313_SmallArchDepth, r673_sw));
                    r673_currentGlyph.include(r313_OBarLeft.earlessCorner(new r313_xn$NamedParameterPair$2Lrc9b("top", r671_top), new r313_xn$NamedParameterPair$2Lrc9b("left", r671_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r671_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("sw", r673_sw), new r313_xn$NamedParameterPair$2Lrc9b("fine", r313_ShoulderFine * (r673_sw / r313_Stroke)), new r313_xn$NamedParameterPair$2Lrc9b("ada", r673_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r673_adb)));
                    r673_currentGlyph.include(r671_bar(r671_df, r671_top - r313_DToothlessRise, r673_sw));
                    return void 0;
                });
            };
            r622_exports.EarlessRoundedBody = r622_EarlessRoundedBody = function (r684_df, r684_top, r684_bar, r684__sw, r684__ada, r684__adb) {
                var _r684_t0, _r684_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r686_currentGlyph) {
                    var _r686_t0, _r686_t1;
                    var r686_sw = r1_fallback(r684__sw, r684_df.mvs);
                    var r686_ada = r1_fallback(r684__ada, r684_df.archDepthAOf(r313_SmallArchDepth, r686_sw));
                    var r686_adb = r1_fallback(r684__adb, r684_df.archDepthBOf(r313_SmallArchDepth, r686_sw));
                    r686_currentGlyph.include(r313_OBarLeft.earlessRounded(new r313_xn$NamedParameterPair$2Lrc9b("top", r684_top), new r313_xn$NamedParameterPair$2Lrc9b("left", r684_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r684_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("sw", r686_sw), new r313_xn$NamedParameterPair$2Lrc9b("fine", r313_ShoulderFine * (r686_sw / r313_Stroke)), new r313_xn$NamedParameterPair$2Lrc9b("ada", r686_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r686_adb), new r313_xn$NamedParameterPair$2Lrc9b("yTerminal", r686_adb)));
                    r686_currentGlyph.include(r684_bar(r684_df, r684_top - r686_ada, r686_sw));
                    return void 0;
                });
            };
            r622_exports.SeriflessBar = r622_SeriflessBar = function (r698_df, r698_top, r698__sw) {
                var _r698_t0, _r698_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r700_currentGlyph) {
                    var _r700_t0, _r700_t1;
                    r700_currentGlyph.include(r313_VBar.l(r698_df.leftSB, 0, r698_top, r698__sw));
                    return void 0;
                });
            };
            r622_exports.BottomSerifedBar = r622_BottomSerifedBar = function (r703_df, r703_top, r703__sw) {
                var _r703_t0, _r703_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r705_currentGlyph) {
                    var _r705_t0, _r705_t1;
                    r705_currentGlyph.include(r622_SeriflessBar(r703_df, r703_top, r703__sw));
                    var r705_sf = r313_SerifFrame.fromDf(r703_df, r703_top, 0, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r703__sw));
                    r705_currentGlyph.include(r705_sf.lb.outer);
                    return void 0;
                });
            };
            r622_exports.DoubleSerifedBar = r622_DoubleSerifedBar = function (r710_df, r710_top, r710__sw) {
                var _r710_t0, _r710_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r712_currentGlyph) {
                    var _r712_t0, _r712_t1;
                    r712_currentGlyph.include(r622_SeriflessBar(r710_df, r710_top, r710__sw));
                    var r712_sf = r313_SerifFrame.fromDf(r710_df, r710_top, 0, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r710__sw));
                    r712_currentGlyph.include(new r313_xn$Capture$2Lrc8.GlyphProc(function (r717_currentGlyph) {
                        var _r717_t0, _r717_t1;
                        r717_currentGlyph.include(r712_sf.lt.outer, true, true);
                        r717_currentGlyph.include(r712_sf.lb.outer);
                        return void 0;
                    }));
                    return void 0;
                });
            };
            r622_exports.TailedBar = r622_TailedBar = function (r721_df, r721_top, r721__sw) {
                var _r721_t0, _r721_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r723_currentGlyph) {
                    var _r723_t0, _r723_t1;
                    r723_currentGlyph.include(r313_LeftwardTailedBar(r721_df.leftSB, 0, r721_top, r721__sw));
                    return void 0;
                });
            };
            r622_exports.TailedSerifedBar = r622_TailedSerifedBar = function (r726_df, r726_top, r726__sw) {
                var _r726_t0, _r726_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r728_currentGlyph) {
                    var _r728_t0, _r728_t1;
                    r728_currentGlyph.include(r622_TailedBar(r726_df, r726_top, r726__sw));
                    var r728_sf = r313_SerifFrame.fromDf(r726_df, r726_top, 0, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r726__sw));
                    r728_currentGlyph.include(r728_sf.lt.outer);
                    return void 0;
                });
            };
            return r622_exports;
        })();
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r733_t0, _r733_t1;
            return {
                "SingleStoreyConfig": r313_SingleStoreyConfig
            };
        });
        var r313_SingleStoreyConfig = {
            "singleStoreySerifless": [r313_SingleStorey.FullBarBody, r313_SingleStorey.SeriflessBar, r313_RevSingleStorey.FullBarBody, r313_RevSingleStorey.SeriflessBar],
            "singleStoreyTopCutSerifless": [r313_SingleStorey.TopCutBody, r313_SingleStorey.SeriflessBar, r313_RevSingleStorey.TopCutBody, r313_RevSingleStorey.SeriflessBar],
            "singleStoreyFlatTopSerifless": [r313_SingleStorey.FlatTopBody, r313_SingleStorey.SeriflessBar, r313_RevSingleStorey.FlatTopBody, r313_RevSingleStorey.SeriflessBar],
            "singleStoreyEarlessCornerSerifless": [r313_SingleStorey.EarlessCornerBody, r313_SingleStorey.SeriflessBar, r313_RevSingleStorey.EarlessCornerBody, r313_RevSingleStorey.SeriflessBar],
            "singleStoreyEarlessRoundedSerifless": [r313_SingleStorey.EarlessRoundedBody, r313_SingleStorey.SeriflessBar, r313_RevSingleStorey.EarlessRoundedBody, r313_RevSingleStorey.SeriflessBar],
            "singleStoreySerifed": [r313_SingleStorey.FullBarBody, r313_SingleStorey.BottomSerifedBar, r313_RevSingleStorey.FullBarBody, r313_RevSingleStorey.BottomSerifedBar],
            "singleStoreyTopCutSerifed": [r313_SingleStorey.TopCutBody, r313_SingleStorey.BottomSerifedBar, r313_RevSingleStorey.TopCutBody, r313_RevSingleStorey.BottomSerifedBar],
            "singleStoreyFlatTopSerifed": [r313_SingleStorey.FlatTopBody, r313_SingleStorey.BottomSerifedBar, r313_RevSingleStorey.FlatTopBody, r313_RevSingleStorey.BottomSerifedBar],
            "singleStoreyEarlessCornerSerifed": [r313_SingleStorey.EarlessCornerBody, r313_SingleStorey.BottomSerifedBar, r313_RevSingleStorey.EarlessCornerBody, r313_RevSingleStorey.BottomSerifedBar],
            "singleStoreyEarlessRoundedSerifed": [r313_SingleStorey.EarlessRoundedBody, r313_SingleStorey.BottomSerifedBar, r313_RevSingleStorey.EarlessRoundedBody, r313_RevSingleStorey.BottomSerifedBar],
            "singleStoreyDoubleSerifed": [r313_SingleStorey.FullBarBody, r313_SingleStorey.DoubleSerifedBar, r313_RevSingleStorey.FullBarBody, r313_RevSingleStorey.DoubleSerifedBar],
            "singleStoreyFlatTopDoubleSerifed": [r313_SingleStorey.FlatTopBody, r313_SingleStorey.DoubleSerifedBar, r313_RevSingleStorey.FlatTopBody, r313_RevSingleStorey.DoubleSerifedBar],
            "singleStoreyTailed": [r313_SingleStorey.FullBarBody, r313_SingleStorey.TailedBar, r313_RevSingleStorey.FullBarBody, r313_RevSingleStorey.TailedBar],
            "singleStoreyTopCutTailed": [r313_SingleStorey.TopCutBody, r313_SingleStorey.TailedBar, r313_RevSingleStorey.TopCutBody, r313_RevSingleStorey.TailedBar],
            "singleStoreyFlatTopTailed": [r313_SingleStorey.FlatTopBody, r313_SingleStorey.TailedBar, r313_RevSingleStorey.FlatTopBody, r313_RevSingleStorey.TailedBar],
            "singleStoreyEarlessCornerTailed": [r313_SingleStorey.EarlessCornerBody, r313_SingleStorey.TailedBar, r313_RevSingleStorey.EarlessCornerBody, r313_RevSingleStorey.TailedBar],
            "singleStoreyEarlessRoundedTailed": [r313_SingleStorey.EarlessRoundedBody, r313_SingleStorey.TailedBar, r313_RevSingleStorey.EarlessRoundedBody, r313_RevSingleStorey.TailedBar],
            "singleStoreyTailedSerifed": [r313_SingleStorey.FullBarBody, r313_SingleStorey.TailedSerifedBar, r313_RevSingleStorey.FullBarBody, r313_RevSingleStorey.TailedSerifedBar],
            "singleStoreyFlatTopTailedSerifed": [r313_SingleStorey.FlatTopBody, r313_SingleStorey.TailedSerifedBar, r313_RevSingleStorey.FlatTopBody, r313_RevSingleStorey.TailedSerifedBar]
        };
        var _r313_t15 = Object.entries(r313_SingleStoreyConfig)[Symbol.iterator]();
        var _r313_t16 = void 0;
        while (!(_r313_t16 = _r313_t15.next()).done) {
            _r313_t17 = _r313_t16.value;
            r313_suffix = _r313_t17[0];
            r313_body = _r313_t17[1][0];
            r313_bar = _r313_t17[1][1];
            r313_revBody = _r313_t17[1][2];
            r313_revBar = _r313_t17[1][3];
            _r313_t17[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("a." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r739_currentGlyph) {
                    var _r739_t0, _r739_t1;
                    var r739_df = r739_currentGlyph.include(r313_DivFrame(1));
                    r739_currentGlyph.include(r739_df.markSet.e());
                    r739_currentGlyph.include(r313_body(r739_df, r313_XH, r313_bar));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("aCap." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r745_currentGlyph) {
                    var _r745_t0, _r745_t1;
                    var r745_df = r745_currentGlyph.include(r313_DivFrame(1));
                    r745_currentGlyph.include(r745_df.markSet.capital());
                    r745_currentGlyph.include(r313_body(r745_df, r313_CAP, r313_bar, void 0, r313_ArchDepthA, r313_ArchDepthB));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("reva." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r751_currentGlyph) {
                    var _r751_t0, _r751_t1;
                    var r751_df = r751_currentGlyph.include(r313_DivFrame(1));
                    r751_currentGlyph.include(r751_df.markSet.e());
                    r751_currentGlyph.include(r313_revBody(r751_df, r313_XH, r313_revBar));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("aSwash." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r757_currentGlyph) {
                    var _r757_t0, _r757_t1;
                    r757_currentGlyph.include(r313_xn$referglyph$1aao("a." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r757_currentGlyph.ejectTagged("serifRB");
                    r757_currentGlyph.include(r313_RetroflexHook.rExt(r313_RightSB, 0));
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("aRetroflexHook." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r763_currentGlyph) {
                    var _r763_t0, _r763_t1;
                    r763_currentGlyph.include(r313_xn$referglyph$1aao("a." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r763_currentGlyph.ejectTagged("serifRB");
                    r763_currentGlyph.include(r313_RetroflexHook.rSideJut(r313_RightSB, 0, new r313_xn$NamedParameterPair$2Lrc9b("yOverflow", r313_Stroke)));
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("a", "a");
        r313_xn$linkreducedvariant$5sIl8("a/sansSerif", "a", r1_MathSansSerif);
        r313_xn$linkreducedvariant$5sIl8("a/doubleStorey", "a");
        r313_xn$selectvariant$7Hrq("aHalf", 122714);
        r313_xn$selectvariant$7Hrq("cyrl/a", 1072, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "a"));
        r313_CreateTurnedLetter("turna", 592, "a/doubleStorey", r313_HalfAdvance, r313_XH / 2);
        r313_xn$selectvariant$7Hrq("aRetroflexHook", 7567);
        r313_xn$linkreducedvariant$5sIl8("aRetroflexHook/doubleStorey", "aRetroflexHook");
        r313_xn$selectvariant$7Hrq("aSwash", 122729, new r313_xn$NamedParameterPair$2Lrc9b("follow", "aRTail"));
        r313_xn$selectvariant$7Hrq("aRoundTop.upright", new r313_xn$NamedParameterPair$2Lrc9b("follow", "a/doubleStorey"), new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "reva"));
        r313_xn$selectvariant$7Hrq("grek/alpha", 945, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "a"));
        r313_xn$linkreducedvariant$5sIl8("grek/alpha/sansSerif", "grek/alpha", r1_MathSansSerif, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "a"));
        r313_xn$selectvariant$7Hrq("AScript.slab.upright", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "aCap"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "a/singleStorey.slab.upright"));
        r313_xn$selectvariant$7Hrq("AScript.slab.italic", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "aCap"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "a/singleStorey.slab.italic"));
        r313_xn$orthographicitalic$3DrD("AScript.slab", null);
        r313_xn$selectvariant$7Hrq("AScript.sans", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "aCap"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "a/singleStorey.sans"));
        r313_xn$orthographicslab$3DrD(r313_SLAB, "AScript", 11373);
        r313_CreateTurnedLetter("turnAScript", 11376, "AScript", r313_HalfAdvance, r313_CAP / 2);
        r313_xn$selectvariant$7Hrq("aScript.slab.upright", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "a"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "a/singleStorey.slab.upright"));
        r313_xn$selectvariant$7Hrq("aScript.slab.italic", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "a"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "a/singleStorey.slab.italic"));
        r313_xn$orthographicitalic$3DrD("aScript.slab", null);
        r313_xn$selectvariant$7Hrq("aScript.sans", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "a"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "a/singleStorey.sans"));
        r313_xn$orthographicslab$3DrD(r313_SLAB, "aScript", 593);
        r313_CreateTurnedLetter("turnaScript", 594, "aScript", r313_HalfAdvance, r313_XH / 2);
        r313_xn$selectvariant$7Hrq("revaScript.slab.upright", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "reva"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "a/singleStorey.slab.upright"));
        r313_xn$selectvariant$7Hrq("revaScript.slab.italic", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "reva"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "a/singleStorey.slab.italic"));
        r313_xn$orthographicitalic$3DrD("revaScript.slab", null);
        r313_xn$selectvariant$7Hrq("revaScript.sans", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "reva"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "a/singleStorey.sans"));
        r313_xn$orthographicslab$3DrD(r313_SLAB, "revaScript", null);
        r313_CreateTurnedLetter("invaScript", 43876, "revaScript", r313_HalfAdvance, r313_XH / 2);
        r313_xn$selectvariant$7Hrq("aScriptRetroflexHook.slab.upright", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "aRetroflexHook"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "aRetroflexHook/singleStorey.slab.upright"));
        r313_xn$selectvariant$7Hrq("aScriptRetroflexHook.slab.italic", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "aRetroflexHook"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "aRetroflexHook/singleStorey.slab.italic"));
        r313_xn$orthographicitalic$3DrD("aScriptRetroflexHook.slab", null);
        r313_xn$selectvariant$7Hrq("aScriptRetroflexHook.sans", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "aRetroflexHook"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "aRetroflexHook/singleStorey.sans"));
        r313_xn$orthographicslab$3DrD(r313_SLAB, "aScriptRetroflexHook", 7568);
        r313_CreateAccentedComposition("aScriptBar", 43824, "aScript", "hStrike");
        r313_CreateAccentedComposition("aGrave", 224, "a", "graveAbove");
        r313_CreateAccentedComposition("aAcute", 225, "a", "acuteAbove");
        r313_CreateAccentedComposition("aCircumflex", 226, "a", "circumflexAbove");
        r313_CreateAccentedComposition("aTilde", 227, "a", "tildeAbove");
        r313_CreateAccentedComposition("aDieresis", 228, "a", "dieresisAbove");
        r313_CreateAccentedComposition("aRing", 229, "a", "ringAbove");
        r313_CreateAccentedComposition("aMacron", 257, "a", "macronAbove");
        r313_CreateAccentedComposition("aBreve", 259, "a", "breveAbove");
        r313_CreateAccentedComposition("aOgonek", 261, "a", "ogonekBelow");
        r313_CreateAccentedComposition("aCaron", 462, "a", "caronAbove");
        r313_CreateAccentedComposition("aDblGrave", 513, "a", "doubleGraveAbove");
        r313_CreateAccentedComposition("aInvBreve", 515, "a", "invBreveAbove");
        r313_CreateAccentedComposition("aDot", 551, "a", "dotAbove");
        r313_CreateAccentedComposition("aBelowring", 7681, "a", "ringBelow");
        r313_CreateAccentedComposition("aBelowdot", 7841, "a", "dotBelow");
        r313_CreateAccentedComposition("aHook", 7843, "a", "hookAbove");
        r313_CreateAccentedComposition("aBar", 122689, "a", "hStrike");
        r313_CreateAccentedComposition("aRightHalfRingTR", 7834, "a", "rightHalfRingTR");
        r313_CreateMultiAccentedComposition("aDieresisMacron", 479, "a", ["dieresisAbove", "macronAbove"]);
        r313_CreateMultiAccentedComposition("aDotMacron", 481, "a", ["dotAbove", "macronAbove"]);
        r313_CreateMultiAccentedComposition("aRingAcute", 507, "a", ["ringAbove", "acuteAbove"]);
        r313_CreateMultiAccentedComposition("aCircumflexAcute", 7845, "a", ["circumflexAbove", "acuteAbove"]);
        r313_CreateMultiAccentedComposition("aCircumflexGrave", 7847, "a", ["circumflexAbove", "graveAbove"]);
        r313_CreateMultiAccentedComposition("aCircumflexHook", 7849, "a", ["circumflexAbove", "hookAbove"]);
        r313_CreateMultiAccentedComposition("aCircumflexTilde", 7851, "a", ["circumflexAbove", "tildeAbove"]);
        r313_CreateMultiAccentedComposition("aBelowdotCircumflex", 7853, "a", ["dotBelow", "circumflexAbove"]);
        r313_CreateMultiAccentedComposition("aBreveAcute", 7855, "a", ["breveAbove", "acuteAbove"]);
        r313_CreateMultiAccentedComposition("aBreveGrave", 7857, "a", ["breveAbove", "graveAbove"]);
        r313_CreateMultiAccentedComposition("aBreveHook", 7859, "a", ["breveAbove", "hookAbove"]);
        r313_CreateMultiAccentedComposition("aBreveTilde", 7861, "a", ["breveAbove", "tildeAbove"]);
        r313_CreateMultiAccentedComposition("aBelowdotBreve", 7863, "a", ["dotBelow", "breveAbove"]);
        r313_CreateAccentedComposition("aGrave/doubleStorey", null, "a/doubleStorey", "graveAbove");
        r313_CreateAccentedComposition("aAcute/doubleStorey", null, "a/doubleStorey", "acuteAbove");
        r313_CreateAccentedComposition("aCircumflex/doubleStorey", null, "a/doubleStorey", "circumflexAbove");
        r313_CreateAccentedComposition("aTilde/doubleStorey", null, "a/doubleStorey", "tildeAbove");
        r313_CreateAccentedComposition("aDieresis/doubleStorey", null, "a/doubleStorey", "dieresisAbove");
        r313_CreateAccentedComposition("aRing/doubleStorey", null, "a/doubleStorey", "ringAbove");
        r313_CreateAccentedComposition("aMacron/doubleStorey", null, "a/doubleStorey", "macronAbove");
        r313_CreateAccentedComposition("aBreve/doubleStorey", null, "a/doubleStorey", "breveAbove");
        r313_CreateAccentedComposition("aOgonek/doubleStorey", null, "a/doubleStorey", "ogonekBelow");
        r313_CreateAccentedComposition("aWedge/doubleStorey", null, "a/doubleStorey", "caronAbove");
        r313_CreateAccentedComposition("aDblGrave/doubleStorey", null, "a/doubleStorey", "doubleGraveAbove");
        r313_CreateAccentedComposition("aInvBreve/doubleStorey", null, "a/doubleStorey", "invBreveAbove");
        r313_CreateAccentedComposition("aDot/doubleStorey", null, "a/doubleStorey", "dotAbove");
        r313_CreateAccentedComposition("aBelowring/doubleStorey", null, "a/doubleStorey", "ringBelow");
        r313_CreateAccentedComposition("aBelowdot/doubleStorey", null, "a/doubleStorey", "dotBelow");
        r313_CreateAccentedComposition("aHook/doubleStorey", null, "a/doubleStorey", "hookAbove");
        r313_CreateAccentedComposition("aBar/doubleStorey", null, "a/doubleStorey", "hStrike");
        r313_CreateAccentedComposition("aRightHalfRing/doubleStorey", null, "a/doubleStorey", "rightHalfRingAbove");
        r313_CreateMultiAccentedComposition("aDieresisMacron/doubleStorey", null, "a/doubleStorey", ["dieresisAbove", "macronAbove"]);
        r313_CreateMultiAccentedComposition("aDotMacron/doubleStorey", null, "a/doubleStorey", ["dotAbove", "macronAbove"]);
        r313_CreateMultiAccentedComposition("aRingAcute/doubleStorey", null, "a/doubleStorey", ["ringAbove", "acuteAbove"]);
        r313_CreateMultiAccentedComposition("aCircumflexAcute/doubleStorey", null, "a/doubleStorey", ["circumflexAbove", "acuteAbove"]);
        r313_CreateMultiAccentedComposition("aCircumflexGrave/doubleStorey", null, "a/doubleStorey", ["circumflexAbove", "graveAbove"]);
        r313_CreateMultiAccentedComposition("aCircumflexHook/doubleStorey", null, "a/doubleStorey", ["circumflexAbove", "hookAbove"]);
        r313_CreateMultiAccentedComposition("aCircumflexTilde/doubleStorey", null, "a/doubleStorey", ["circumflexAbove", "tildeAbove"]);
        r313_CreateMultiAccentedComposition("aBelowdotCircumflex/doubleStorey", null, "a/doubleStorey", ["dotBelow", "circumflexAbove"]);
        r313_CreateMultiAccentedComposition("aBreveAcute/doubleStorey", null, "a/doubleStorey", ["breveAbove", "acuteAbove"]);
        r313_CreateMultiAccentedComposition("aBreveGrave/doubleStorey", null, "a/doubleStorey", ["breveAbove", "graveAbove"]);
        r313_CreateMultiAccentedComposition("aBreveHook/doubleStorey", null, "a/doubleStorey", ["breveAbove", "hookAbove"]);
        r313_CreateMultiAccentedComposition("aBreveTilde/doubleStorey", null, "a/doubleStorey", ["breveAbove", "tildeAbove"]);
        r313_CreateMultiAccentedComposition("aBelowdotBreve/doubleStorey", null, "a/doubleStorey", ["dotBelow", "breveAbove"]);
        return r313_CreateAccentedComposition("aSbRsbUnderlineBelow", null, "a", "sbRsbUnderlineBelow");
    });
    return void 0;
});


