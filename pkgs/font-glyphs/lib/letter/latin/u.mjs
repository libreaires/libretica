"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-U", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_Base, r313_xRB, r313_yRB, r313_Slabs, r313_fSlabLT, _r313_t16, _r313_t19, _r313_t21, _r313_t22, _r313_t23, _r313_tag24, _r313_t25, _r313_tag26, _r313_t27, _r313_tag28;
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
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Descender = _r313_t1.Descender;
        var r313_Translate = _r313_t1.Translate;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Upward = _r313_t1.Upward;
        var r313_O = _r313_t1.O;
        var r313_TailY = _r313_t1.TailY;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_AccentHeight = _r313_t1.AccentHeight;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_SideJut = _r313_t1.SideJut;
        var r313_DToothlessRise = _r313_t1.DToothlessRise;
        var r313_ShoulderFine = _r313_t1.ShoulderFine;
        var r313_ArchDepthA = _r313_t1.ArchDepthA;
        var r313_ArchDepthB = _r313_t1.ArchDepthB;
        var r313_SmallArchDepthA = _r313_t1.SmallArchDepthA;
        var r313_SmallArchDepthB = _r313_t1.SmallArchDepthB;
        var r313_YSmoothMidR = _r313_t1.YSmoothMidR;
        var r313_TINY = _r313_t1.TINY;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_end = _r313_t2.end;
        var r313_straight = _r313_t2.straight;
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
        var r313_xn$noshape$3cah = _r313_t5["no-shape"];
        var r313_tagged = _r313_t5.tagged;
        var r313_UShape = _r313_t5.UShape;
        var r313_UShapeOutline = _r313_t5.UShapeOutline;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_FlipAround = _r313_t5.FlipAround;
        var r313_PointingTo = _r313_t5.PointingTo;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_xn$deriveglyphs$7Hrq = _r313_t6["derive-glyphs"];
        var r313_xn$derivecomposites$7Hrq = _r313_t6["derive-composites"];
        var r313_alias = _r313_t6.alias;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r313_markMiddle = _r313_t7.markMiddle;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_LeaningAnchor = _r313_t8.LeaningAnchor;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateAccentedComposition = _r313_t9.CreateAccentedComposition;
        var r313_SetGrekUpperTonos = _r313_t9.SetGrekUpperTonos;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_uBowl = _r313_t10.uBowl;
        var r313_RightwardTailedBar = _r313_t10.RightwardTailedBar;
        var r313_SerifFrame = _r313_t10.SerifFrame;
        var _r313_t11 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_CyrDescender = _r313_t11.CyrDescender;
        var r313_CyrTailDescender = _r313_t11.CyrTailDescender;
        var r313_CyrCurlDescender = _r313_t11.CyrCurlDescender;
        var _r313_t12 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_RetroflexHook = _r313_t12.RetroflexHook;
        var r313_TopHook = _r313_t12.TopHook;
        var _r313_t13 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Upper-Q"].resolve();
        var r313_QCurlyTail = _r313_t13.QCurlyTail;
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r324_t0, _r324_t1;
            return {
                "UShapeGroup": r313_UShapeGroup
            };
        });
        var r313_UShapeGroup = function (r325_ada, r325_adb) {
            var _r325_t0, _r325_t1, _r325_t2, _r325_tag3;
            return (function () {
                var r328_Toothed, r328_Tailed, r328_FlatBottom, r328_ToothlessCorner, r328_ToothlessRounded;
                var r328_exports = {};
                r328_exports.Toothed = r328_Toothed = function (r336_df, r336_top, r336_sw, r336_fHookLeft, r336_fShortLeg) {
                    var _r336_t0, _r336_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r338_currentGlyph) {
                        var _r338_t0, _r338_t1;
                        r338_currentGlyph.setBaseAnchor("trailing", r336_df.rightSB, 0);
                        var r338_yTL = r336_top - (r336_fHookLeft ? r313_TailY + r313_HalfStroke : 0);
                        var r338_yTR = r336_fShortLeg ? r1_mix(Math.min(r325_ada, r313_YSmoothMidR(r336_top, 0, r325_ada, r325_adb)), r336_top, 0.5) : r336_top;
                        r338_currentGlyph.include(r313_uBowl.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r338_yTL), new r313_xn$NamedParameterPair$2Lrc9b("bottom", 0), new r313_xn$NamedParameterPair$2Lrc9b("left", r336_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r336_df.rightSB - r313_HSwToV(r336_sw)), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r336_sw), new r313_xn$NamedParameterPair$2Lrc9b("fine", r313_ShoulderFine * (r336_sw / r313_Stroke)), new r313_xn$NamedParameterPair$2Lrc9b("ada", r325_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r325_adb), new r313_xn$NamedParameterPair$2Lrc9b("rightY0", Math.min(r325_ada + r313_TINY, r338_yTR - 0))));
                        if (r336_fHookLeft) r338_currentGlyph.include(r313_TopHook.toLeft.lBarInner(r336_df.leftSB, Math.min(r325_adb + r313_TINY, r338_yTL - 0), r336_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r336_sw)));
                        r338_currentGlyph.include(r313_tagged("strokeR", r313_VBar.r(r336_df.rightSB, 0, r338_yTR, r336_sw)));
                        r338_currentGlyph.setBaseAnchor("strike", r336_df.middle, r336_top / 2);
                        r338_currentGlyph.setBaseAnchor("overlay", r336_df.middle, r336_top / 2);
                        return void 0;
                    });
                };
                r328_exports.Tailed = r328_Tailed = function (r356_df, r356_top, r356_sw, r356_fHookLeft, r356_fShortLeg) {
                    var _r356_t0, _r356_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r358_currentGlyph) {
                        var _r358_t0, _r358_t1;
                        r358_currentGlyph.setBaseAnchor("trailing", r356_df.rightSB + r313_SideJut, 0);
                        var r358_yTL = r356_top - (r356_fHookLeft ? r313_TailY + r313_HalfStroke : 0);
                        var r358_yTR = r356_fShortLeg ? r1_mix(Math.min(r325_ada, r313_YSmoothMidR(r356_top, 0, r325_ada, r325_adb)), r356_top, 0.5) : r356_top;
                        r358_currentGlyph.include(r313_uBowl.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r358_yTL), new r313_xn$NamedParameterPair$2Lrc9b("bottom", 0), new r313_xn$NamedParameterPair$2Lrc9b("left", r356_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r356_df.rightSB - r313_HSwToV(r356_sw)), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r356_sw), new r313_xn$NamedParameterPair$2Lrc9b("fine", r313_ShoulderFine * (r356_sw / r313_Stroke)), new r313_xn$NamedParameterPair$2Lrc9b("ada", r325_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r325_adb), new r313_xn$NamedParameterPair$2Lrc9b("rightY0", Math.min(r325_ada + r313_TINY, r358_yTR - 0))));
                        if (r356_fHookLeft) r358_currentGlyph.include(r313_TopHook.toLeft.lBarInner(r356_df.leftSB, Math.min(r325_adb + r313_TINY, r358_yTL - 0), r356_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r356_sw)));
                        r358_currentGlyph.include(r313_tagged("strokeR", r313_RightwardTailedBar(r356_df.rightSB, 0, r358_yTR, new r313_xn$NamedParameterPair$2Lrc9b("sw", r356_sw))));
                        r358_currentGlyph.setBaseAnchor("strike", r356_df.middle, r356_top / 2);
                        r358_currentGlyph.setBaseAnchor("overlay", r356_df.middle, r356_top / 2);
                        return void 0;
                    });
                };
                r328_exports.FlatBottom = r328_FlatBottom = function (r377_df, r377_top, r377_sw, r377_fHookLeft, r377_fShortLeg) {
                    var _r377_t0, _r377_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r379_currentGlyph) {
                        var _r379_t0, _r379_t1;
                        var r379_yTL = r377_top - (r377_fHookLeft ? r313_TailY + r313_HalfStroke : 0);
                        var r379_yTR = r377_fShortLeg ? r1_mix(Math.min(r325_ada, r313_YSmoothMidR(r377_top, 0, r325_ada, r325_adb)), r377_top, 0.5) : r377_top;
                        r379_currentGlyph.include(r313_uBowl.toothlessCorner(new r313_xn$NamedParameterPair$2Lrc9b("top", r379_yTL), new r313_xn$NamedParameterPair$2Lrc9b("bottom", 0), new r313_xn$NamedParameterPair$2Lrc9b("left", r377_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r377_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r377_sw), new r313_xn$NamedParameterPair$2Lrc9b("ada", r325_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r325_adb), new r313_xn$NamedParameterPair$2Lrc9b("rise", 0)));
                        if (r377_fHookLeft) r379_currentGlyph.include(r313_TopHook.toLeft.lBarInner(r377_df.leftSB, Math.min(r325_adb + r313_TINY, r379_yTL - 0), r377_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r377_sw)));
                        r379_currentGlyph.include(r313_tagged("strokeR", r313_VBar.r(r377_df.rightSB, 0, r379_yTR, r377_sw)));
                        r379_currentGlyph.setBaseAnchor("strike", r377_df.middle, r377_top / 2);
                        r379_currentGlyph.setBaseAnchor("overlay", r377_df.middle, r377_top / 2);
                        return void 0;
                    });
                };
                r328_exports.ToothlessCorner = r328_ToothlessCorner = function (r395_df, r395_top, r395_sw, r395_fHookLeft, r395_fShortLeg) {
                    var _r395_t0, _r395_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r397_currentGlyph) {
                        var _r397_t0, _r397_t1;
                        var r397_yTL = r395_top - (r395_fHookLeft ? r313_TailY + r313_HalfStroke : 0);
                        var r397_yTR = r395_fShortLeg ? r1_mix(Math.min(r325_ada, r313_YSmoothMidR(r395_top, 0, r325_ada, r325_adb)), r395_top, 0.5) : r395_top;
                        r397_currentGlyph.include(r313_uBowl.toothlessCorner(new r313_xn$NamedParameterPair$2Lrc9b("top", r397_yTL), new r313_xn$NamedParameterPair$2Lrc9b("bottom", 0), new r313_xn$NamedParameterPair$2Lrc9b("left", r395_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r395_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r395_sw), new r313_xn$NamedParameterPair$2Lrc9b("ada", r325_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r325_adb)));
                        if (r395_fHookLeft) r397_currentGlyph.include(r313_TopHook.toLeft.lBarInner(r395_df.leftSB, Math.min(r325_adb + r313_TINY, r397_yTL - 0), r395_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r395_sw)));
                        r397_currentGlyph.include(r313_tagged("strokeR", r313_VBar.r(r395_df.rightSB, r313_DToothlessRise, r397_yTR, r395_sw)));
                        r397_currentGlyph.setBaseAnchor("strike", r395_df.middle, r395_top / 2);
                        r397_currentGlyph.setBaseAnchor("overlay", r395_df.middle, r395_top / 2);
                        return void 0;
                    });
                };
                r328_exports.ToothlessRounded = r328_ToothlessRounded = function (r412_df, r412_top, r412_sw, r412_fHookLeft, r412_fShortLeg) {
                    var _r412_t0, _r412_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r414_currentGlyph) {
                        var _r414_t0, _r414_t1;
                        var r414_yTL = r412_top - (r412_fHookLeft ? r313_TailY + r313_HalfStroke : 0);
                        var r414_yTR = r412_fShortLeg ? r1_mix(Math.min(r325_ada, r313_YSmoothMidR(r412_top, 0, r325_ada, r325_adb)), r412_top, 0.5) : r412_top;
                        r414_currentGlyph.include(r313_uBowl.toothlessRounded(new r313_xn$NamedParameterPair$2Lrc9b("top", r414_yTL), new r313_xn$NamedParameterPair$2Lrc9b("bottom", 0), new r313_xn$NamedParameterPair$2Lrc9b("left", r412_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r412_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r412_sw), new r313_xn$NamedParameterPair$2Lrc9b("ada", r325_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r325_adb), new r313_xn$NamedParameterPair$2Lrc9b("rightY0", r414_yTR)));
                        if (r412_fHookLeft) r414_currentGlyph.include(r313_TopHook.toLeft.lBarInner(r412_df.leftSB, Math.min(r325_adb + r313_TINY, r414_yTL - 0), r412_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r412_sw)));
                        r414_currentGlyph.setBaseAnchor("strike", r412_df.middle, r412_top / 2);
                        r414_currentGlyph.setBaseAnchor("overlay", r412_df.middle, r412_top / 2);
                        return void 0;
                    });
                };
                return r328_exports;
            })();
        };
        var r313_UUpper = r313_UShapeGroup(r313_ArchDepthA, r313_ArchDepthB);
        var r313_ULower = r313_UShapeGroup(r313_SmallArchDepthA, r313_SmallArchDepthB);
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r429_t0, _r429_t1;
            return {
                "USerifs": r313_USerifs
            };
        });
        var r313_USerifs = (function () {
            var r432_BottomRight, r432_Toothless, r432_SmallToothless, r432_Toothed, r432_SmallToothed, r432_BilateralMotion, r432_MotionToothless, r432_MotionToothed;
            var r432_exports = {};
            r432_exports.BottomRight = r432_BottomRight = function (r440_df, r440_top, r440__sw) {
                var _r440_t0, _r440_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r442_currentGlyph) {
                    var _r442_t0, _r442_t1;
                    var r442_sf = r313_SerifFrame.fromDf(r440_df, r440_top, 0, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r440__sw));
                    r442_currentGlyph.include(r442_sf.rb.outer);
                    var r442_trAnchor = r442_currentGlyph.baseAnchors.trailing;
                    if (r442_trAnchor) r442_currentGlyph.setBaseAnchor("trailing", r442_trAnchor.x + r442_sf.sideJut, r442_trAnchor.y);
                    return void 0;
                });
            };
            r432_exports.Toothless = r432_Toothless = function (r447_df, r447_top, r447__sw) {
                var _r447_t0, _r447_t1;
                var r447_sf = r313_SerifFrame.fromDf(r447_df, r447_top, 0, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r447__sw));
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r450_currentGlyph) {
                    var _r450_t0, _r450_t1;
                    r450_currentGlyph.include(r447_sf.lt.full, true, true);
                    r450_currentGlyph.include(r447_sf.rt.full);
                    return void 0;
                });
            };
            r432_exports.SmallToothless = r432_SmallToothless = function (r454_df, r454_top, r454__sw) {
                var _r454_t0, _r454_t1;
                var r454_sf = r313_SerifFrame.fromDf(r454_df, r454_top, 0, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r454__sw));
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r457_currentGlyph) {
                    var _r457_t0, _r457_t1;
                    r457_currentGlyph.include(r454_sf.lt.outer, true, true);
                    r457_currentGlyph.include(r454_sf.rt.inner);
                    return void 0;
                });
            };
            r432_exports.Toothed = r432_Toothed = function (r461_df, r461_top, r461__sw) {
                var _r461_t0, _r461_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r463_currentGlyph) {
                    var _r463_t0, _r463_t1;
                    r463_currentGlyph.include(r432_Toothless(r461_df, r461_top, r461__sw));
                    r463_currentGlyph.include(r432_BottomRight(r461_df, r461_top, r461__sw));
                    return void 0;
                });
            };
            r432_exports.SmallToothed = r432_SmallToothed = function (r467_df, r467_top, r467__sw) {
                var _r467_t0, _r467_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r469_currentGlyph) {
                    var _r469_t0, _r469_t1;
                    r469_currentGlyph.include(r432_SmallToothless(r467_df, r467_top, r467__sw));
                    r469_currentGlyph.include(r432_BottomRight(r467_df, r467_top, r467__sw));
                    return void 0;
                });
            };
            r432_exports.BilateralMotion = r432_BilateralMotion = function (r473_df, r473_top, r473__sw) {
                var _r473_t0, _r473_t1;
                var r473_sf = r313_SerifFrame.fromDf(r473_df, r473_top, 0, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r473__sw));
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r476_currentGlyph) {
                    var _r476_t0, _r476_t1;
                    r476_currentGlyph.include(r473_sf.lt.outer, true, true);
                    r476_currentGlyph.include(r473_sf.rt.outer);
                    return void 0;
                });
            };
            r432_exports.MotionToothless = r432_MotionToothless = function (r480_df, r480_top, r480__sw) {
                var _r480_t0, _r480_t1;
                var r480_sf = r313_SerifFrame.fromDf(r480_df, r480_top, 0, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r480__sw));
                return r480_sf.lt.outer;
            };
            r432_exports.MotionToothed = r432_MotionToothed = function (r483_df, r483_top, r483__sw) {
                var _r483_t0, _r483_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r485_currentGlyph) {
                    var _r485_t0, _r485_t1;
                    r485_currentGlyph.include(r432_MotionToothless(r483_df, r483_top, r483__sw));
                    r485_currentGlyph.include(r432_BottomRight(r483_df, r483_top, r483__sw));
                    return void 0;
                });
            };
            return r432_exports;
        })();
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r489_t0, _r489_t1;
            return {
                "CapitalUConfigT": r313_CapitalUConfigT
            };
        });
        var r313_CapitalUConfigT = function (r490_shapeGroup) {
            var _r490_t0, _r490_t1;
            return r1_SuffixCfg.weave({
                "toothed": [r490_shapeGroup.Toothed, r313_RightSB, 0],
                "tailed": [r490_shapeGroup.Tailed, r313_RightSB + r313_SideJut, 0],
                "flatBottom": [r490_shapeGroup.FlatBottom, r313_RightSB, 0],
                "toothlessCorner": [r490_shapeGroup.ToothlessCorner, r313_RightSB, r313_DToothlessRise],
                "toothlessRounded": [r490_shapeGroup.ToothlessRounded, null, null]
            }, function (r491_body) {
                var r491___, _r491_t0, _r491_t1, _r491_t2, _r491_t3;
                return {
                    "serifless": [r313_xn$noshape$3cah, false],
                    "bottomRightSerifed": [r313_USerifs.BottomRight, false],
                    "bilateralMotionSerifed": [r313_USerifs.BilateralMotion, true],
                    "motionSerifed": (_r491_t0 = r491_body, _r491_t0 === "toothed" || _r491_t0 === "flatBottom" ? [r313_USerifs.MotionToothed, true] : (r491___ = _r491_t0, [r313_USerifs.MotionToothless, true])),
                    "serifed": (_r491_t1 = r491_body, _r491_t1 === "toothed" || _r491_t1 === "flatBottom" ? [r313_USerifs.Toothed, true] : (r491___ = _r491_t1, [r313_USerifs.Toothless, true]))
                };
            });
        };
        var _r313_t14 = Object.entries(r313_CapitalUConfigT(r313_UUpper))[Symbol.iterator]();
        var _r313_t15 = void 0;
        while (!(_r313_t15 = _r313_t14.next()).done) {
            _r313_t16 = _r313_t15.value;
            r313_suffix = _r313_t16[0];
            r313_Base = _r313_t16[1][0][0];
            r313_xRB = _r313_t16[1][0][1];
            r313_yRB = _r313_t16[1][0][2];
            _r313_t16[1][0];
            r313_Slabs = _r313_t16[1][1][0];
            r313_fSlabLT = _r313_t16[1][1][1];
            _r313_t16[1][1];
            _r313_t16[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("U." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r497_currentGlyph) {
                    var _r497_t0, _r497_t1;
                    var r497_df = r497_currentGlyph.include(r313_DivFrame(1));
                    r497_currentGlyph.include(r497_df.markSet.capital());
                    r497_currentGlyph.include(r313_Base(r497_df, r313_CAP, r313_Stroke));
                    r497_currentGlyph.include(r313_Slabs(r497_df, r313_CAP, r313_Stroke));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("U/withTonos." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r504_currentGlyph) {
                    var _r504_t0, _r504_t1;
                    r504_currentGlyph.include(r313_xn$referglyph$1aao("U." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r504_currentGlyph.include(r313_SetGrekUpperTonos(r313_fSlabLT ? -r313_SideJut : 0));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("URTail." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r509_currentGlyph) {
                    var _r509_t0, _r509_t1;
                    var r509_df = r509_currentGlyph.include(r313_DivFrame(1));
                    r509_currentGlyph.include(r509_df.markSet.capDesc());
                    r509_currentGlyph.include(r313_Base(r509_df, r313_CAP, r313_Stroke));
                    r509_currentGlyph.include(r313_Slabs(r509_df, r313_CAP, r313_Stroke));
                    r509_currentGlyph.ejectTagged("serifRB");
                    r509_currentGlyph.include(r313_xRB ? r313_RetroflexHook.rExt(r313_xRB, 0, new r313_xn$NamedParameterPair$2Lrc9b("yAttach", r313_yRB)) : r313_QCurlyTail(r509_df));
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("smcpU." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r519_currentGlyph) {
                    var _r519_t0, _r519_t1;
                    var r519_df = r519_currentGlyph.include(r313_DivFrame(1));
                    r519_currentGlyph.include(r519_df.markSet.e());
                    r519_currentGlyph.include(r313_Base(r519_df, r313_XH, r313_Stroke));
                    r519_currentGlyph.include(r313_Slabs(r519_df, r313_XH, r313_Stroke));
                    return void 0;
                }));
            })();
        }
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r525_t0, _r525_t1;
            return {
                "SmallUConfigT": r313_SmallUConfigT
            };
        });
        var r313_SmallUConfigT = function (r526_shapeGroup) {
            var _r526_t0, _r526_t1;
            return r1_SuffixCfg.weave({
                "toothed": [r526_shapeGroup.Toothed, r313_RightSB, 0],
                "tailed": [r526_shapeGroup.Tailed, r313_RightSB + r313_SideJut, 0],
                "flatBottom": [r526_shapeGroup.FlatBottom, r313_RightSB, 0],
                "toothlessCorner": [r526_shapeGroup.ToothlessCorner, r313_RightSB, r313_DToothlessRise],
                "toothlessRounded": [r526_shapeGroup.ToothlessRounded, null, null],
                "descBase": [r526_shapeGroup.Toothed, r313_RightSB, 0]
            }, function (r527_body) {
                var r527___, _r527_t0, _r527_t1, _r527_t2, _r527_t3;
                return {
                    "serifless": r313_xn$noshape$3cah,
                    "bottomRightSerifed": r313_USerifs.BottomRight,
                    "motionSerifed": (_r527_t0 = r527_body, _r527_t0 === "toothed" || _r527_t0 === "flatBottom" ? r313_USerifs.MotionToothed : (r527___ = _r527_t0, r313_USerifs.MotionToothless)),
                    "serifed": (_r527_t1 = r527_body, _r527_t1 === "toothed" || _r527_t1 === "flatBottom" ? r313_USerifs.SmallToothed : (r527___ = _r527_t1, r313_USerifs.SmallToothless))
                };
            });
        };
        var _r313_t17 = Object.entries(r313_SmallUConfigT(r313_ULower))[Symbol.iterator]();
        var _r313_t18 = void 0;
        while (!(_r313_t18 = _r313_t17.next()).done) {
            _r313_t19 = _r313_t18.value;
            r313_suffix = _r313_t19[0];
            r313_Base = _r313_t19[1][0][0];
            r313_xRB = _r313_t19[1][0][1];
            r313_yRB = _r313_t19[1][0][2];
            _r313_t19[1][0];
            r313_Slabs = _r313_t19[1][1];
            _r313_t19[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("u." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r533_currentGlyph) {
                    var _r533_t0, _r533_t1;
                    var r533_df = r533_currentGlyph.include(r313_DivFrame(1));
                    r533_currentGlyph.include(r533_df.markSet.e());
                    r533_currentGlyph.include(r313_Base(r533_df, r313_XH, r313_Stroke));
                    r533_currentGlyph.include(r313_Slabs(r533_df, r313_XH, r313_Stroke));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("grek/mu." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r540_currentGlyph) {
                    var _r540_t0, _r540_t1;
                    var r540_df = r540_currentGlyph.include(r313_DivFrame(1));
                    r540_currentGlyph.include(r540_df.markSet.p());
                    r540_currentGlyph.include(r313_union(r313_Base(r540_df, r313_XH, r313_Stroke), r313_dispiro(r313_widths.rhs(), r313_flat(r540_df.leftSB, r313_Descender, r313_heading(r313_Upward)), r313_curl(r540_df.leftSB, r1_mix(r313_Descender, 0, 0.5), r313_heading(r313_Upward)), r313_straight.up.end(r540_df.leftSB, r313_SmallArchDepthB, r313_widths.rhs.heading(r313_AdviceStroke(4), r313_Upward)))));
                    r540_currentGlyph.include(r313_Slabs(r540_df, r313_XH, r313_Stroke));
                    r540_currentGlyph.include(r313_LeaningAnchor.Below.VBar.l(r540_df.leftSB));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/tse.italic." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r548_currentGlyph) {
                    var _r548_t0, _r548_t1;
                    var r548_df = r548_currentGlyph.include(r313_DivFrame(1));
                    r548_currentGlyph.include(r548_df.markSet.e());
                    r548_currentGlyph.include(r313_Base(r548_df, r313_XH, r313_Stroke));
                    r548_currentGlyph.include(r313_Slabs(r548_df, r313_XH, r313_Stroke));
                    r548_currentGlyph.ejectTagged("serifRB");
                    r548_currentGlyph.include(r313_CyrDescender.rSideJut(r548_df.rightSB, 0));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/tswe.italic." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r557_currentGlyph) {
                    var _r557_t0, _r557_t1;
                    var r557_df = r557_currentGlyph.include(r313_DivFrame(1));
                    r557_currentGlyph.include(r557_df.markSet.p());
                    r557_currentGlyph.include(r313_Base(r557_df, r313_XH, r313_Stroke));
                    r557_currentGlyph.include(r313_Slabs(r557_df, r313_XH, r313_Stroke));
                    r557_currentGlyph.ejectTagged("serifRB");
                    r557_currentGlyph.include(r313_CyrCurlDescender.rSideJut(r557_df.rightSB, 0));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/revtse.italic." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r566_currentGlyph) {
                    var _r566_t0, _r566_t1;
                    var r566_df = r566_currentGlyph.include(r313_DivFrame(1));
                    r566_currentGlyph.include(r566_df.markSet.e());
                    r566_currentGlyph.include(r313_union(r313_Base(r566_df, r313_XH, r313_Stroke), r313_dispiro(r313_widths.rhs(r313_AdviceStroke(4)), r313_flat(r566_df.leftSB, 0, r313_heading(r313_Upward)), r313_curl(r566_df.leftSB, r313_SmallArchDepthB, r313_heading(r313_Upward)))));
                    r566_currentGlyph.include(r313_Slabs(r566_df, r313_XH, r313_Stroke));
                    r566_currentGlyph.include(r313_CyrDescender.lSideJut(r566_df.leftSB, 0));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("turnh." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r574_currentGlyph) {
                    var r574_sf, _r574_t0, _r574_t1;
                    var r574_df = r574_currentGlyph.include(r313_DivFrame(1));
                    r574_currentGlyph.include(r574_df.markSet.p());
                    r574_currentGlyph.include(r313_Base(r574_df, r313_XH, r313_Stroke));
                    r574_currentGlyph.ejectTagged("strokeR");
                    r574_currentGlyph.include(r313_VBar.r(r574_df.rightSB, r313_Descender, r313_XH, r313_Stroke));
                    r574_currentGlyph.include(r313_Slabs(r574_df, r313_XH, r313_Stroke));
                    r574_currentGlyph.ejectTagged("serifRB");
                    if (r313_Slabs !== r313_xn$noshape$3cah) {
                        r574_sf = r313_SerifFrame.fromDf(r574_df, r313_XH, r313_Descender);
                        r574_currentGlyph.include(r574_sf.rb[r313_para.isItalic ? "outer" : "fullSide"]);
                    }
                    r574_currentGlyph.include(r313_LeaningAnchor.Below.VBar.r(r574_df.rightSB));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("uShortLeg." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r586_currentGlyph) {
                    var _r586_t0, _r586_t1;
                    var r586_df = r586_currentGlyph.include(r313_DivFrame(1));
                    r586_currentGlyph.include(r586_df.markSet.e());
                    r586_currentGlyph.include(r313_Base(r586_df, r313_XH, r313_Stroke, false, true));
                    r586_currentGlyph.include(r313_Slabs(r586_df, r313_XH, r313_Stroke));
                    r586_currentGlyph.ejectTagged("serifRT");
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("uHookLeft." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r594_currentGlyph) {
                    var _r594_t0, _r594_t1;
                    var r594_df = r594_currentGlyph.include(r313_DivFrame(1));
                    r594_currentGlyph.include(r594_df.markSet.e());
                    r594_currentGlyph.include(r313_Base(r594_df, r313_XH, r313_Stroke, true));
                    r594_currentGlyph.include(r313_Slabs(r594_df, r313_XH, r313_Stroke));
                    r594_currentGlyph.ejectTagged("serifLT");
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("uRTail." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r602_currentGlyph) {
                    var _r602_t0, _r602_t1;
                    var r602_df = r602_currentGlyph.include(r313_DivFrame(1));
                    r602_currentGlyph.include(r602_df.markSet.p());
                    r602_currentGlyph.include(r313_Base(r602_df, r313_XH, r313_Stroke));
                    r602_currentGlyph.include(r313_Slabs(r602_df, r313_XH, r313_Stroke));
                    r602_currentGlyph.ejectTagged("serifRB");
                    r602_currentGlyph.include(r313_xRB ? r313_RetroflexHook.rExt(r313_xRB, 0, new r313_xn$NamedParameterPair$2Lrc9b("yAttach", r313_yRB)) : r313_QCurlyTail(r602_df));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("turnhHookLeft." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r612_currentGlyph) {
                    var r612_sf, _r612_t0, _r612_t1;
                    var r612_df = r612_currentGlyph.include(r313_DivFrame(1));
                    r612_currentGlyph.include(r612_df.markSet.p());
                    r612_currentGlyph.include(r313_Base(r612_df, r313_XH, r313_Stroke, true));
                    r612_currentGlyph.ejectTagged("strokeR");
                    r612_currentGlyph.include(r313_VBar.r(r612_df.rightSB, r313_Descender, r313_XH, r313_Stroke));
                    r612_currentGlyph.include(r313_Slabs(r612_df, r313_XH, r313_Stroke));
                    r612_currentGlyph.ejectTagged("serifLT");
                    r612_currentGlyph.ejectTagged("serifRB");
                    if (r313_Slabs !== r313_xn$noshape$3cah) {
                        r612_sf = r313_SerifFrame.fromDf(r612_df, r313_XH, r313_Descender);
                        r612_currentGlyph.include(r612_sf.rb[r313_para.isItalic ? "outer" : "fullSide"]);
                    }
                    r612_currentGlyph.include(r313_LeaningAnchor.Below.VBar.r(r612_df.rightSB));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("turnhHookLeftRTail." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r625_currentGlyph) {
                    var _r625_t0, _r625_t1;
                    var r625_df = r625_currentGlyph.include(r313_DivFrame(1));
                    r625_currentGlyph.include(r625_df.markSet.p());
                    r625_currentGlyph.include(r313_Base(r625_df, r313_XH, r313_Stroke, true));
                    r625_currentGlyph.ejectTagged("strokeR");
                    r625_currentGlyph.include(r313_VBar.r(r625_df.rightSB, 0, r313_XH, r313_Stroke));
                    r625_currentGlyph.include(r313_Slabs(r625_df, r313_XH, r313_Stroke));
                    r625_currentGlyph.ejectTagged("serifLT");
                    r625_currentGlyph.ejectTagged("serifRB");
                    r625_currentGlyph.include(r313_RetroflexHook.rExt(r625_df.rightSB, r313_Descender + r313_TailY + r313_HalfStroke, new r313_xn$NamedParameterPair$2Lrc9b("yAttach", 0)));
                    r625_currentGlyph.include(r313_LeaningAnchor.Below.VBar.r(r625_df.rightSB));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("uSideways." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r639_currentGlyph) {
                    var _r639_t0, _r639_t1;
                    var r639_df = r313_DivFrame(r313_XH / r313_Width, 2, r313_XH * 0.1 / r313_SB);
                    r639_currentGlyph.include(r639_df.markSet.e());
                    r639_currentGlyph.include(r313_PointingTo(r313_Width, r313_XH, r313_Width, 0, function () {
                        var _r642_t0, _r642_t1;
                        return new r313_xn$Capture$2Lrc8.GlyphProc(function (r644_currentGlyph) {
                            var _r644_t0, _r644_t1;
                            r644_currentGlyph.include(r313_Base(r639_df, r313_RightSB, r313_Stroke));
                            r644_currentGlyph.include(r313_Slabs(r639_df, r313_RightSB, r313_Stroke));
                            r644_currentGlyph.include(r313_Translate(0, r313_SB / 2));
                            return void 0;
                        });
                    }));
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("uDieresisSideways/base." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r650_currentGlyph) {
                    var _r650_t0, _r650_t1;
                    var r650_df = r313_DivFrame(r313_XH / r313_Width, 2, r313_XH * 0.1 / r313_SB);
                    r650_currentGlyph.include(r650_df.markSet.e());
                    var r650_ww = r313_Width * r313_para.advanceScaleM;
                    r650_currentGlyph.setWidth(r650_ww);
                    r650_currentGlyph.setBaseAnchor("cvDecompose", 0, 0);
                    r650_currentGlyph.include(r313_PointingTo(r650_ww, r313_XH, r650_ww, 0, function () {
                        var _r655_t0, _r655_t1;
                        return new r313_xn$Capture$2Lrc8.GlyphProc(function (r657_currentGlyph) {
                            var _r657_t0, _r657_t1;
                            r657_currentGlyph.include(r313_Base(r650_df, Math.min(r313_RightSB, r650_ww - r313_SB - r313_AccentHeight * 0.75 * r313_para.advanceScaleM), r313_Stroke));
                            r657_currentGlyph.include(r313_Slabs(r650_df, Math.min(r313_RightSB, r650_ww - r313_SB - r313_AccentHeight * 0.75 * r313_para.advanceScaleM), r313_Stroke));
                            r657_currentGlyph.include(r313_Translate(0, r313_SB / 2));
                            return void 0;
                        });
                    }));
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("U", "U");
        r313_xn$linkreducedvariant$5sIl8("U/sansSerif", "U", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("U/withTonos", new r313_xn$NamedParameterPair$2Lrc9b("follow", "U"));
        r313_xn$selectvariant$7Hrq("smcpU", 7452, new r313_xn$NamedParameterPair$2Lrc9b("follow", "U"));
        r313_xn$selectvariant$7Hrq("URTail", 122746);
        r313_xn$selectvariant$7Hrq("uCap", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "U"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "u"));
        r313_xn$selectvariant$7Hrq("u", "u");
        r313_xn$linkreducedvariant$5sIl8("u/sansSerif", "u", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("u/descBase", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "u"));
        r313_xn$selectvariant$7Hrq("turnh", 613, new r313_xn$NamedParameterPair$2Lrc9b("follow", "uLongLeg"));
        r313_xn$selectvariant$7Hrq("uShortLeg", 43854);
        r313_xn$selectvariant$7Hrq("uHookLeft", 43858);
        r313_xn$selectvariant$7Hrq("uRTail", 122747);
        r313_xn$selectvariant$7Hrq("turnhHookLeft", 686, new r313_xn$NamedParameterPair$2Lrc9b("follow", "uHookLeftLongLeg"));
        r313_xn$selectvariant$7Hrq("turnhHookLeftRTail", 687, new r313_xn$NamedParameterPair$2Lrc9b("follow", "uHookLeftLongLegRTail"));
        r313_xn$selectvariant$7Hrq("uSideways", 7453, new r313_xn$NamedParameterPair$2Lrc9b("follow", "u"));
        r313_xn$selectvariant$7Hrq("uDieresisSideways/base", new r313_xn$NamedParameterPair$2Lrc9b("follow", "u"));
        r313_xn$selectvariant$7Hrq("grek/mu", 956);
        r313_xn$linkreducedvariant$5sIl8("grek/mu/sansSerif", "grek/mu", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("micro", 181, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "grek/mu"));
        r313_xn$selectvariant$7Hrq("cyrl/i.italic", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "u"));
        r313_xn$selectvariant$7Hrq("cyrl/i.italic/descBase", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "u"));
        r313_xn$selectvariant$7Hrq("cyrl/tse.italic");
        r313_xn$selectvariant$7Hrq("cyrl/revtse.italic");
        r313_xn$selectvariant$7Hrq("cyrl/tswe.italic", new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/tse.italic"));
        r313_xn$selectvariant$7Hrq("cyrl/dzhe.italic/base", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "u"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/dzhe.italic"));
        r313_CreateAccentedComposition("cyrl/dzhe.italic", null, "cyrl/dzhe.italic/base", "descenderBarBelow");
        r313_alias("cyrl/i.BGR", null, "cyrl/i.italic");
        r313_alias("cyrl/tse.BGR", null, "cyrl/tse.italic");
        r313_CreateAccentedComposition("cyrl/iBreve.BGR", null, "cyrl/i.BGR", "breveAbove");
        r313_CreateAccentedComposition("cyrl/iGrave.BGR", null, "cyrl/i.BGR", "graveAbove");
        r313_xn$derivecomposites$7Hrq("cyrl/iTail.italic", null, "cyrl/i.italic/descBase", r313_CyrTailDescender.rSideJut(r313_RightSB, 0));
        r313_CreateAccentedComposition("cyrl/pe.SRB", null, "cyrl/i.italic", "cyrl/pe.SRB/overlineAbove");
        r313_CreateAccentedComposition("cyrl/tetse.italic", null, "cyrl/tse.italic", "tildeAbove");
        r313_xn$derivecomposites$7Hrq("uRetroflexHook", 7577, "u/descBase", r313_RetroflexHook.rSideJut(r313_RightSB, 0, new r313_xn$NamedParameterPair$2Lrc9b("yOverflow", r313_Stroke)));
        r313_xn$deriveglyphs$7Hrq("uWithLightCentralizationStroke", null, "u", function (r678_src, r678_gr) {
            var _r678_t0, _r678_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r680_currentGlyph) {
                var _r680_t0, _r680_t1;
                r680_currentGlyph.include(r313_MarkSet.p());
                r680_currentGlyph.include(r313_xn$referglyph$1aao(r678_src));
                var r680_fine = r313_AdviceStroke(4);
                var r680_outStand = r313_SB * 0.75 + r680_fine * 0.25;
                var r680_outStandY = r313_SmallArchDepthB / 2 - r313_Descender * 0.6;
                var r680_yTurn = r313_SmallArchDepthB / 2;
                r680_currentGlyph.include(r313_difference(r313_dispiro(r313_widths.lhs(r680_fine), r313_corner(r313_SB + r680_outStand, r680_yTurn + r680_outStandY), r313_corner(r313_SB - r680_outStand, r680_yTurn - r680_outStandY)), r313_UShapeOutline(r313_XH, 0, r313_SB - r313_O, r313_RightSB + r313_O, void 0, r313_SmallArchDepthA, r313_SmallArchDepthB)));
                return void 0;
            });
        });
        r313_CreateAccentedComposition("uDieresis", 252, "u", "dieresisAbove");
        r313_CreateAccentedComposition("uBar", 649, "u", "hStrike");
        r313_CreateAccentedComposition("turnhBar", 122686, "turnh", "hStrike");
        r313_xn$deriveglyphs$7Hrq("uDieresisSideways/mark", null, "dieresisAbove/alwaysUpright", function (r684_gns) {
            var _r684_t0, _r684_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r686_currentGlyph) {
                var _r686_t0, _r686_t1;
                var r686_ww = r313_Width * r313_para.advanceScaleM;
                r686_currentGlyph.setWidth(0);
                r686_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                r686_currentGlyph.include(r313_PointingTo(r686_ww, r313_XH, r686_ww, 0, function () {
                    var _r690_t0, _r690_t1;
                    return new r313_xn$Capture$2Lrc8.GlyphProc(function (r692_currentGlyph) {
                        var _r692_t0, _r692_t1;
                        r692_currentGlyph.include(r313_xn$referglyph$1aao(r684_gns));
                        r692_currentGlyph.include(r313_Translate(r313_XH / 2 - r313_markMiddle, Math.min(r313_RightSB, r686_ww - r313_SB - r313_AccentHeight) - r313_XH));
                        r692_currentGlyph.include(r313_Translate(0, r313_SB / 2));
                        return void 0;
                    });
                }));
                return void 0;
            });
        });
        r313_CreateAccentedComposition("uDieresisSideways", 7454, "uDieresisSideways/base", "uDieresisSideways/mark");
        var _r313_t20 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t20.BBS;
        var r313_BBD = _r313_t20.BBD;
        var r313_BBBarRight = _r313_t20.BBBarRight;
        r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/U", 120140, new r313_xn$Capture$2Lrc8.GlyphProc(function (r699_currentGlyph) {
            var _r699_t0, _r699_t1;
            r699_currentGlyph.include(r313_MarkSet.capital());
            r699_currentGlyph.include(r313_HBar.t(r313_SB, r313_SB + r313_BBD, r313_CAP, r313_BBS));
            r699_currentGlyph.include(r313_UShape(r313_CAP, 0, r313_SB, r313_RightSB, r313_BBS));
            r699_currentGlyph.include(r313_intersection(r313_VBar.l(r313_SB + r313_BBD, 0, r313_CAP, r313_BBS), r313_UShapeOutline(r313_CAP, 1, r313_SB + 1, r313_RightSB - 1, r313_BBS)));
            return void 0;
        }));
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/u", 120166, new r313_xn$Capture$2Lrc8.GlyphProc(function (r706_currentGlyph) {
            var _r706_t0, _r706_t1;
            r706_currentGlyph.include(r313_MarkSet.e());
            r706_currentGlyph.include(r313_xn$referglyph$1aao("mathbb/n"));
            r706_currentGlyph.include(r313_FlipAround(r313_Middle, r313_XH / 2));
            return void 0;
        }));
    });
    return void 0;
});


