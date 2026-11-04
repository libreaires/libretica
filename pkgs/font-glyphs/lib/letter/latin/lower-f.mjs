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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Lower-F", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_Body, r313_df, r313_pBar, r313_ch, r313_mk, r313_yBar, _r313_t13, _r313_t15, _r313_t16, _r313_t17, _r313_tag18;
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
        var r313_XH = _r313_t1.XH;
        var r313_Ascender = _r313_t1.Ascender;
        var r313_Descender = _r313_t1.Descender;
        var r313_Translate = _r313_t1.Translate;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Upward = _r313_t1.Upward;
        var r313_Downward = _r313_t1.Downward;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_Hook = _r313_t1.Hook;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_QuarterStroke = _r313_t1.QuarterStroke;
        var r313_Jut = _r313_t1.Jut;
        var r313_LongJut = _r313_t1.LongJut;
        var r313_MidJutCenter = _r313_t1.MidJutCenter;
        var r313_RBalance2 = _r313_t1.RBalance2;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_ArchDepthA = _r313_t1.ArchDepthA;
        var r313_SerifShiftS = _r313_t1.SerifShiftS;
        var r313_TINY = _r313_t1.TINY;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_archv = _r313_t2.archv;
        var r313_dispiro = _r313_t2.dispiro;
        var r313_xn$spirooutline$1aao = _r313_t2["spiro-outline"];
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_intersection = _r313_t4.intersection;
        var r313_difference = _r313_t4.difference;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_xn$noshape$3cah = _r313_t5["no-shape"];
        var r313_Rect = _r313_t5.Rect;
        var r313_MaskBelow = _r313_t5.MaskBelow;
        var r313_MaskLeft = _r313_t5.MaskLeft;
        var r313_HSerif = _r313_t5.HSerif;
        var r313_HBar = _r313_t5.HBar;
        var r313_HCrossBar = _r313_t5.HCrossBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_HookStart = _r313_t5.HookStart;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_LeaningAnchor = _r313_t7.LeaningAnchor;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateAccentedComposition = _r313_t8.CreateAccentedComposition;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_FlatHookDepth = _r313_t9.FlatHookDepth;
        var r313_DiagTail = _r313_t9.DiagTail;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_LetterBarOverlay = _r313_t10.LetterBarOverlay;
        var r313_PalatalHook = _r313_t10.PalatalHook;
        var r313_xn$CHNONE$3cah = 0;
        var r313_xn$CHSERIF$3cah = 1;
        var r313_xn$CHEXTENSION$3cah = 2;
        var r313_xn$CHHOOK$3cah = 3;
        var r313_xn$CHDIAGONALHOOK$3cah9 = 4;
        var r313_pNarrowFSide = r1_mix(1, r313_para.advanceScaleF, 1.5);
        var r313_dfN = r313_DivFrame(1);
        var r313_dfF = r313_DivFrame(r313_para.advanceScaleF, 1, 0.75);
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r321_t0, _r321_t1;
            return {
                "ySmallFBarPos": r313_ySmallFBarPos
            };
        });
        var r313_ySmallFBarPos = r1_mix(0, r313_XH, r313_DesignParameters.fBarPosToXH) + r313_Stroke * r313_DesignParameters.fbarStrokeAdj;
        var r313_SetPalatalHookPos = function (r322_barLeft) {
            var _r322_t0, _r322_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r324_currentGlyph) {
                var _r324_t0, _r324_t1;
                r324_currentGlyph.setBaseAnchor("palatalHookPos", r322_barLeft + r313_HSwToV(r313_Stroke) + r313_PalatalHook.adviceGap(r313_Stroke), 0);
                return void 0;
            });
        };
        var r313_SmallFBottomSerif = function (r326_df) {
            var _r326_t0, _r326_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
                var _r328_t0, _r328_t1;
                var r328_l = r1_mix(r326_df.leftSB, r326_df.rightSB, 0.02) + r313_SerifShiftS;
                var r328_r = r1_mix(r326_df.leftSB, r326_df.rightSB, 0.875) + r313_SerifShiftS;
                r328_currentGlyph.include(r313_dispiro(r313_widths.lhs(), r313_flat(r328_l, 0), r313_curl(r328_r, 0)));
                r328_currentGlyph.setBaseAnchor("palatalHookPos", r328_r, 0);
                return void 0;
            });
        };
        var r313_NarrowBottomSerif = function (r331_df) {
            var _r331_t0, _r331_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r333_currentGlyph) {
                var _r333_t0, _r333_t1;
                var r333_jut = Math.max(r313_MidJutCenter, r1_mix(r313_HSwToV(r313_HalfStroke), r313_LongJut, r331_df.adws));
                r333_currentGlyph.include(r313_HSerif.mb(r331_df.middle, 0, r333_jut));
                r333_currentGlyph.setBaseAnchor("palatalHookPos", r331_df.middle + r333_jut + r313_SerifShiftS, 0);
                return void 0;
            });
        };
        var r313_StdFShapeT = function (r336_sink, r336_df, r336_offset, r336_barleft, r336_sw) {
            var _r336_t0, _r336_t1;
            return r336_sink(r313_widths.lhs(r336_sw), r313_g4(Math.max(r336_barleft + r336_offset + r313_HSwToV(2.125 * r336_sw), r336_df.rightSB + r313_RBalance2 - (r313_OX - r313_O) - r336_offset), r313_Ascender - r313_Hook * 0.75), r313_HookStart(r313_Ascender - r336_offset, new r313_xn$NamedParameterPair$2Lrc9b("sw", r336_sw)), r313_flat(r336_barleft + r336_offset, r313_Ascender - r313_ArchDepthA * 0.8), (r336_offset ? r313_corner : r313_curl)(r336_barleft + r336_offset, 0, r313_heading(r313_Downward)), r336_offset ? [r313_corner(r336_df.rightSB + r313_RBalance2 - (r313_OX - r313_O) - r336_offset, 0)] : []);
        };
        var r313_SmallFDownExtension = function (r338_barLeft) {
            var _r338_t0, _r338_t1;
            return r313_VBar.l(r338_barLeft, r1_mix(0, r313_Descender, 0.9), r313_TINY);
        };
        var r313_SmallFDownHook = function (r339_df, r339_barRight, r339_counterHookLeft) {
            var _r339_t0, _r339_t1;
            var r339_hd = r313_FlatHookDepth(r339_df);
            return r313_dispiro(r313_widths.lhs(), r313_flat(r339_counterHookLeft, r313_Descender), r313_curl(Math.max(r339_barRight - r339_hd.x, r339_counterHookLeft + r313_TINY), r313_Descender), r313_archv.superness(r313_DesignParameters.tightHookSuperness), r313_flat(r339_barRight, Math.min(0, r313_Descender + r339_hd.y), r313_heading(r313_Upward)), r313_curl(r339_barRight, r313_TINY, r313_heading(r313_Upward)));
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r341_t0, _r341_t1;
            return {
                "SmallFDiagonalTail": r313_SmallFDiagonalTail
            };
        });
        var r313_SmallFDiagonalTail = function (r342_df, r342_barLeft) {
            var _r342_t0, _r342_t1;
            var r342_xBarMiddle = r342_barLeft + r313_HSwToV(r313_HalfStroke);
            return r313_dispiro(r313_widths.center(), r313_flat(r342_xBarMiddle, r313_TINY, r313_heading(r313_Downward)), r313_DiagTail.L(r342_xBarMiddle, r313_Descender, r313_DiagTail.StdDepth(r342_df, r313_Stroke) - r313_HalfStroke, r313_Stroke));
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r344_t0, _r344_t1;
            return {
                "StdSmallFBarLeftPos": r313_StdSmallFBarLeftPos
            };
        });
        var r313_StdSmallFBarLeftPos = function (r345_barAtCenter) {
            var _r345_t0, _r345_t1;
            return r1_mix(r313_SB, r313_RightSB, r345_barAtCenter ? 0.45 : 0.35) - r313_HSwToV(r313_Stroke * (r345_barAtCenter ? 0.45 : 0.25));
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r347_t0, _r347_t1;
            return {
                "StdSmallFBarLeftPos0": r313_StdSmallFBarLeftPos0
            };
        });
        var r313_StdSmallFBarLeftPos0 = function () {
            var _r348_t0, _r348_t1;
            return r1_mix(r313_SB, r313_RightSB, 0.35) - r313_HSwToV(r313_QuarterStroke);
        };
        var r313_StandardFShape = function (r349_df, r349_m, r349_bh, r349_counterHook) {
            var _r349_t0, _r349_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r351_currentGlyph) {
                var _r351_t0, _r351_t1, _r351_t2;
                var r351_barAtCenter = r349_counterHook === r313_xn$CHHOOK$3cah || r349_counterHook === r313_xn$CHDIAGONALHOOK$3cah9;
                var r351_crossLeft = r1_mix(0, r349_df.leftSB, r349_m);
                var r351_crossRight = r1_mix(r349_df.width, r349_df.rightSB, r349_m);
                var r351_barLeft0 = r313_StdSmallFBarLeftPos0();
                var r351_barLeft = r313_StdSmallFBarLeftPos(r351_barAtCenter);
                var r351_barRight = r351_barLeft + r313_HSwToV(r313_Stroke);
                r351_currentGlyph.include(r313_LeaningAnchor.Above.Hook(r351_barLeft, r349_df.rightSB + r351_barLeft - r351_barLeft0));
                r351_currentGlyph.setBaseAnchor("overlay", r351_barLeft + r313_HSwToV(r313_HalfStroke), r349_bh / 2);
                r351_currentGlyph.include(r313_StdFShapeT(r313_dispiro, r349_df, 0, r351_barLeft0, r313_Stroke));
                r351_currentGlyph.include(r313_Translate(r351_barLeft - r351_barLeft0, 0));
                r351_currentGlyph.include(r313_HCrossBar.top(r313_SB, r1_mix(r349_df.leftSB, r349_df.rightSB, r349_m), r349_bh));
                r351_currentGlyph.include((_r351_t0 = r349_counterHook, _r351_t0 === r313_xn$CHNONE$3cah ? r313_SetPalatalHookPos(r351_barLeft) : _r351_t0 === r313_xn$CHSERIF$3cah ? r313_SmallFBottomSerif(r349_df) : _r351_t0 === r313_xn$CHEXTENSION$3cah ? r313_SmallFDownExtension(r351_barLeft) : _r351_t0 === r313_xn$CHHOOK$3cah ? r313_SmallFDownHook(r349_df, r351_barRight, Math.max(r313_SB, r351_barRight - (r351_crossRight - r351_barLeft))) : _r351_t0 === r313_xn$CHDIAGONALHOOK$3cah9 ? r313_SmallFDiagonalTail(r349_df, r351_barLeft) : void 0));
                return void 0;
            });
        };
        var r313_NarrowStdFShapeT = function (r358_sink, r358_df, r358_offset, r358_barleft, r358_sw) {
            var _r358_t0, _r358_t1;
            var r358_pAdaptive = r313_para.advanceScaleF < 1 ? (1 - r358_df.adws) / (1 - r313_para.advanceScaleF) : 0;
            var r358_hookScale = r1_mix(0.9, 1, r358_pAdaptive);
            var r358_hookRight = r1_mix(r358_barleft, r358_df.rightSB + r313_RBalance2 - (r313_OX - r313_O), r358_hookScale);
            var r358_swTerminal = r1_mix(r358_sw, r358_df.adviceStroke(2.75), r1_mix(0.35, 0.1, r358_pAdaptive));
            return r358_sink(r313_widths.lhs(r358_sw), r313_g4(Math.max(r358_barleft + r358_offset + r313_HSwToV(2.125 * r358_sw), r358_hookRight - r358_offset), r313_Ascender - r313_Hook * 0.75), r313_HookStart(r313_Ascender - r358_offset, new r313_xn$NamedParameterPair$2Lrc9b("sw", r358_sw), new r313_xn$NamedParameterPair$2Lrc9b("swTerminal", r358_swTerminal)), r313_flat(r358_barleft + r358_offset, r313_Ascender - r313_ArchDepthA * 0.8), (r358_offset ? r313_corner : r313_curl)(r358_barleft + r358_offset, 0, r313_heading(r313_Downward)), r358_offset ? [r313_corner(r358_hookRight - r358_offset, 0)] : []);
        };
        var r313_NarrowStdFShape = function (r361_df, r361_m, r361_bh, r361_counterHook) {
            var _r361_t0, _r361_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r363_currentGlyph) {
                var _r363_t0, _r363_t1, _r363_t2;
                var r363_barAtCenter = r361_counterHook === r313_xn$CHHOOK$3cah || r361_counterHook === r313_xn$CHDIAGONALHOOK$3cah9;
                var r363_crossLeft = r1_mix(0, r361_df.leftSB, r361_m);
                var r363_crossRight = r1_mix(r361_df.width, r361_df.rightSB, r361_m);
                var r363_barLeft0 = r1_mix(r361_df.leftSB, r361_df.rightSB, 0.35) - r313_HSwToV(r313_QuarterStroke);
                var r363_barLeft = r1_mix(r361_df.leftSB, r361_df.rightSB, r363_barAtCenter ? 0.45 : 0.35) - r313_HSwToV(r313_Stroke * (r363_barAtCenter ? 0.45 : 0.25));
                var r363_barRight = r363_barLeft + r313_HSwToV(r313_Stroke);
                r363_currentGlyph.include(r313_LeaningAnchor.Above.Hook(r363_barLeft, r1_mix(r363_barLeft, r361_df.rightSB + r363_barLeft - r363_barLeft0, 0.75)));
                r363_currentGlyph.setBaseAnchor("overlay", r363_barLeft + r313_HSwToV(r313_HalfStroke), r361_bh / 2);
                r363_currentGlyph.include(r313_NarrowStdFShapeT(r313_dispiro, r361_df, 0, r363_barLeft0, r313_Stroke));
                r363_currentGlyph.include(r313_Translate(r363_barLeft - r363_barLeft0, 0));
                var r363_pAdaptive = r313_para.advanceScaleF < 1 ? (1 - r361_df.adws) / (1 - r313_para.advanceScaleF) : 0;
                var r363_stdCrossRight = r1_mix(r361_df.leftSB, r361_df.rightSB, r361_m);
                var r363_narrowCrossRight = r1_mix(r363_barLeft, r363_stdCrossRight, r1_mix(0.85, 1.4, r363_pAdaptive));
                var r363_narrowCrossLeft = r1_mix(r361_df.leftSB, r363_barLeft, r1_mix(0.5, 0.375, r363_pAdaptive));
                r363_currentGlyph.include(r313_HCrossBar.top(r363_narrowCrossLeft, r363_narrowCrossRight, r361_bh));
                r363_currentGlyph.include((_r363_t0 = r361_counterHook, _r363_t0 === r313_xn$CHNONE$3cah ? r313_SetPalatalHookPos(r363_barLeft) : _r363_t0 === r313_xn$CHSERIF$3cah ? r313_SmallFBottomSerif(r361_df) : _r363_t0 === r313_xn$CHEXTENSION$3cah ? r313_SmallFDownExtension(r363_barLeft) : _r363_t0 === r313_xn$CHHOOK$3cah ? r313_SmallFDownHook(r361_df, r363_barRight, Math.max(r361_df.leftSB, r363_barRight - 0.75 * (r363_crossRight - r363_barLeft))) : _r363_t0 === r313_xn$CHDIAGONALHOOK$3cah9 ? r313_SmallFDiagonalTail(r361_df, r363_barLeft) : void 0));
                return void 0;
            });
        };
        var r313_NarrowFShape = function (r370_clcStyle) {
            var _r370_t0, _r370_t1;
            return function (r371_df, r371_m, r371_bh, r371_counterHook) {
                var _r371_t0, _r371_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r373_currentGlyph) {
                    var r373___, _r373_t0, _r373_t1, _r373_t2, _r373_t3, _r373_t4, _r373_t5;
                    var r373_topHookExt = (_r373_t0 = r370_clcStyle, _r373_t0 === 1 ? r313_Width : _r373_t0 === 2 ? r313_Jut : _r373_t0 === 3 ? r313_Jut : _r373_t0 === 4 ? r313_Jut : (r373___ = _r373_t0, 0));
                    var r373_topHookHdExt = (_r373_t1 = r370_clcStyle, _r373_t1 === 1 ? 1 : (r373___ = _r373_t1, 0));
                    var r373_crossBarExt = (_r373_t2 = r370_clcStyle, _r373_t2 === 1 ? r313_Jut : _r373_t2 === 2 ? r313_Jut : _r373_t2 === 4 ? r313_Jut : (r373___ = _r373_t2, 0));
                    var r373_barAtCenter = r371_counterHook === r313_xn$CHHOOK$3cah || r371_counterHook === r313_xn$CHDIAGONALHOOK$3cah9;
                    var r373_crossLeft = r1_mix(0, r371_df.leftSB, r371_m);
                    var r373_crossRight = r1_mix(r371_df.width, r371_df.rightSB, r371_m);
                    var r373_barLeft = r373_barAtCenter ? r371_df.middle - r313_HSwToV(r313_HalfStroke) : r1_mix(r373_crossLeft, r373_crossRight, 0.42) - r313_HSwToV(0.375 * r313_Stroke);
                    var r373_barRight = r373_barLeft + r313_HSwToV(r313_Stroke);
                    var r373_hd = r313_FlatHookDepth(r371_df);
                    r373_currentGlyph.setBaseAnchor("overlay", r373_barLeft + r313_HSwToV(r313_HalfStroke), r371_bh / 2);
                    r373_currentGlyph.include(r313_LeaningAnchor.Above.Hook(r373_barLeft, r373_crossRight + r373_topHookExt));
                    r373_currentGlyph.include(r313_dispiro(r313_widths.lhs(), r313_flat(r373_crossRight + r373_topHookExt, r313_Ascender), r313_curl(Math.min(r373_barLeft + r373_hd.x * (1 + r373_topHookHdExt), r373_crossRight - r313_TINY), r313_Ascender), r313_archv.superness(r313_DesignParameters.tightHookSuperness), r313_flat(r373_barLeft, Math.max(r313_XH, r313_Ascender - r373_hd.y)), r313_curl(r373_barLeft, 0, r313_heading(r313_Downward))));
                    r373_currentGlyph.include(r313_HCrossBar.top(r373_crossLeft, r373_crossRight + r373_crossBarExt, r371_bh));
                    r373_currentGlyph.include((_r373_t3 = r371_counterHook, _r373_t3 === r313_xn$CHNONE$3cah ? r313_SetPalatalHookPos(r373_barLeft) : _r373_t3 === r313_xn$CHSERIF$3cah ? r313_NarrowBottomSerif(r371_df) : _r373_t3 === r313_xn$CHEXTENSION$3cah ? r313_SmallFDownExtension(r373_barLeft) : _r373_t3 === r313_xn$CHHOOK$3cah ? r313_SmallFDownHook(r371_df, r373_barRight, r373_barRight - (r373_crossRight - r373_barLeft)) : _r373_t3 === r313_xn$CHDIAGONALHOOK$3cah9 ? r313_SmallFDiagonalTail(r371_df, r373_barLeft) : void 0));
                    return void 0;
                });
            };
        };
        var r313_SmallFConfig = r1_SuffixCfg.weave({
            "": [r313_StandardFShape, r313_dfN],
            "narrow": [r313_NarrowStdFShape, r313_dfF],
            "flatHook": [r313_NarrowFShape(0), r313_dfF],
            "flatHookCLC1": [r313_NarrowFShape(1), r313_dfF],
            "flatHookCLC2": [r313_NarrowFShape(2), r313_dfF],
            "flatHookCLC3": [r313_NarrowFShape(3), r313_dfF],
            "flatHookCLC4": [r313_NarrowFShape(4), r313_dfF]
        }, function (r379_body) {
            var _r379_t0, _r379_t1;
            return {
                "serifless": [r379_body ? r313_pNarrowFSide : 0.95, r313_xn$CHNONE$3cah, "b"],
                "serifed": [r379_body ? r313_pNarrowFSide : 0.95, r313_xn$CHSERIF$3cah, "b"],
                "extended": [r379_body ? r313_pNarrowFSide : 0.95, r313_xn$CHEXTENSION$3cah, "bp"],
                "tailed": [r379_body ? r313_pNarrowFSide : 1, r313_xn$CHHOOK$3cah, "bp"],
                "diagonalTailed": [r379_body ? r313_pNarrowFSide : 1, r313_xn$CHDIAGONALHOOK$3cah9, "bp"]
            };
        }, {
            "": r313_ySmallFBarPos,
            "crossbarAtXHeight": r313_XH,
            "crossbarAtHalfAscenderHeight": r1_mix(0, r313_Ascender, 0.5) + r313_HalfStroke
        });
        var _r313_t11 = Object.entries(r313_SmallFConfig)[Symbol.iterator]();
        var _r313_t12 = void 0;
        while (!(_r313_t12 = _r313_t11.next()).done) {
            _r313_t13 = _r313_t12.value;
            r313_suffix = _r313_t13[0];
            r313_Body = _r313_t13[1][0][0];
            r313_df = _r313_t13[1][0][1];
            _r313_t13[1][0];
            r313_pBar = _r313_t13[1][1][0];
            r313_ch = _r313_t13[1][1][1];
            r313_mk = _r313_t13[1][1][2];
            _r313_t13[1][1];
            r313_yBar = _r313_t13[1][2];
            _r313_t13[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("f." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r385_currentGlyph) {
                    var _r385_t0, _r385_t1;
                    r385_currentGlyph.setWidth(r313_df.width);
                    r385_currentGlyph.include(r313_df.markSet[r313_mk]());
                    r385_currentGlyph.include(r313_Body(r313_df, r313_pBar, r313_yBar, r313_ch));
                    r385_currentGlyph.copyBaseAnchorIfAbsent("leaningAbove", "above");
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("fPalatalHook." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r391_currentGlyph) {
                    var _r391_t0, _r391_t1;
                    r391_currentGlyph.include(r313_xn$referglyph$1aao("f." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    var r391_attach = r391_currentGlyph.gizmo.unapply(r391_currentGlyph.baseAnchors.overlay);
                    var r391_pos = r391_currentGlyph.gizmo.unapplyIfPresent(r391_currentGlyph.baseAnchors.palatalHookPos);
                    r391_currentGlyph.include(r313_PalatalHook.r(new r313_xn$NamedParameterPair$2Lrc9b("xLink", r391_attach.x), new r313_xn$NamedParameterPair$2Lrc9b("x", r391_pos ? r391_pos.x : r391_attach.x + (r313_RightSB - r313_SB) / 2), new r313_xn$NamedParameterPair$2Lrc9b("y", r391_pos ? r391_pos.y : 0), new r313_xn$NamedParameterPair$2Lrc9b("refSw", r313_AdviceStroke(r391_pos ? 2 : 3)), new r313_xn$NamedParameterPair$2Lrc9b("maskOut", r391_pos ? r313_xn$noshape$3cah() : r313_intersection(r313_MaskBelow(0), r313_MaskLeft(r391_attach.x + r313_HSwToV(r313_HalfStroke))))));
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("f", "f");
        r313_xn$linkreducedvariant$5sIl8("f/sansSerif", "f", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("fHookBottom", 402, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "f"));
        r313_xn$selectvariant$7Hrq("fLenis", 43829, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "f"));
        r313_xn$selectvariant$7Hrq("fPalatalHook", 7554, new r313_xn$NamedParameterPair$2Lrc9b("follow", "f"));
        r313_xn$selectvariant$7Hrq("fLenisPalatalHook", new r313_xn$NamedParameterPair$2Lrc9b("follow", "fLenis"), new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "fPalatalHook"));
        r313_xn$selectvariant$7Hrq("f/phoneticLeft", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "f"));
        r313_xn$selectvariant$7Hrq("f/compLigLeft1", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "f"));
        r313_xn$selectvariant$7Hrq("f/compLigLeft2", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "f"));
        r313_xn$selectvariant$7Hrq("f/compLigLeft3", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "f"));
        r313_xn$selectvariant$7Hrq("f/compLigLeft4", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "f"));
        r313_CreateAccentedComposition("fTildeOver", 7534, "f", "tildeOver");
        r313_CreateAccentedComposition("fDot", 7711, "f", "dotAbove");
        r313_CreateAccentedComposition("fLenisTildeOver", null, "fLenis", "tildeOver");
        r313_CreateAccentedComposition("fLenisDot", null, "fLenis", "dotAbove");
        var _r313_t14 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t14.BBS;
        var r313_BBD = _r313_t14.BBD;
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/f", 120151, new r313_xn$Capture$2Lrc8.GlyphProc(function (r412_currentGlyph) {
            var _r412_t0, _r412_t1;
            r412_currentGlyph.include(r313_MarkSet.b());
            var r412_barLeft = r1_mix(r313_SB, r313_RightSB, 0.35) - r313_HSwToV(0.25 * r313_BBD);
            r412_currentGlyph.include(r313_StdFShapeT(r313_dispiro, r313_DivFrame(1), 0, r412_barLeft, r313_BBS));
            r412_currentGlyph.include(r313_intersection(r313_VBar.l(r412_barLeft + r313_BBD, 0, r313_Ascender, r313_BBS), r313_StdFShapeT(r313_xn$spirooutline$1aao, r313_DivFrame(1), 1, r412_barLeft, r313_BBS)));
            r412_currentGlyph.include(r313_difference(r313_HCrossBar.top(r313_SB, r1_mix(r313_SB, r313_RightSB, 0.95), r313_ySmallFBarPos, r313_BBS), r313_Rect(r313_Ascender, 0, r412_barLeft, r412_barLeft + r313_BBD)));
            r412_currentGlyph.include(r313_HBar.b(r412_barLeft, r412_barLeft + r313_BBD, 0, r313_BBS));
            return void 0;
        }));
    });
    return void 0;
});


