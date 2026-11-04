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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-V", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_fStraightBar, r313_Serifs, r313_pxBar, r313_doSerif, _r313_t11, _r313_t14, _r313_t16, _r313_t17, _r313_t18, _r313_tag19, _r313_t20, _r313_tag21;
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
        var r313_Translate = _r313_t1.Translate;
        var r313_ApparentTranslate = _r313_t1.ApparentTranslate;
        var r313_TanSlope = _r313_t1.TanSlope;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_VSwToH = _r313_t1.VSwToH;
        var r313_Downward = _r313_t1.Downward;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_Hook = _r313_t1.Hook;
        var r313_TailX = _r313_t1.TailX;
        var r313_TailY = _r313_t1.TailY;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_Jut = _r313_t1.Jut;
        var r313_VJutStroke = _r313_t1.VJutStroke;
        var r313_CThin = _r313_t1.CThin;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_SideJut = _r313_t1.SideJut;
        var r313_TightBendInnerRadius = _r313_t1.TightBendInnerRadius;
        var r313_StrokeWidthBlend = _r313_t1.StrokeWidthBlend;
        var r313_ArchDepthA = _r313_t1.ArchDepthA;
        var r313_ArchDepthB = _r313_t1.ArchDepthB;
        var r313_SmallArchDepthA = _r313_t1.SmallArchDepthA;
        var r313_SmallArchDepthB = _r313_t1.SmallArchDepthB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_g2 = _r313_t2.g2;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_straight = _r313_t2.straight;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_unimportant = _r313_t2.unimportant;
        var r313_quadControls = _r313_t2.quadControls;
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
        var r313_xn$noshape$3cah = _r313_t5["no-shape"];
        var r313_tagged = _r313_t5.tagged;
        var r313_Rect = _r313_t5.Rect;
        var r313_OShape = _r313_t5.OShape;
        var r313_HSerif = _r313_t5.HSerif;
        var r313_NeedSlab = _r313_t5.NeedSlab;
        var r313_DiagCor = _r313_t5.DiagCor;
        var r313_DiagCorDs = _r313_t5.DiagCorDs;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_Arch = _r313_t5.Arch;
        var r313_xn$withtransform$5sIl = _r313_t5["with-transform"];
        var r313_ExtLineCenter = _r313_t5.ExtLineCenter;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_xn$derivecomposites$7Hrq = _r313_t6["derive-composites"];
        var r313_HalfAdvance = _r313_t6.HalfAdvance;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateTurnedLetter = _r313_t7.CreateTurnedLetter;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_SerifFrame = _r313_t8.SerifFrame;
        var r313_PalatalHook = _r313_t8.PalatalHook;
        var r313_uBowl = _r313_t8.uBowl;
        var r313_VerticalHook = _r313_t8.VerticalHook;
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r319_t0, _r319_t1;
            return {
                "VCornerHalfWidth": r313_VCornerHalfWidth
            };
        });
        var r313_VCornerHalfWidth = r313_HSwToV(1.15 * r313_HalfStroke);
        var r313_VCurviness = 0.3;
        var r313_VShapeFine = Math.max(r313_Stroke * (r313_SLAB ? r313_para.vtipfineSlab : r313_para.vtipfine), r313_VCornerHalfWidth * 1.2);
        var r313_VShapeFineStraight = 1.15 * (r313_Stroke * r313_CThin);
        var r313_pInktrap = 2 / 3;
        var r313_VShapeMiddleWidth = Math.min(r1_mix(r313_Stroke, r313_VShapeFineStraight, r313_pInktrap), r313_AdviceStroke(3));
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r321_t0, _r321_t1;
            return {
                "VStraightSbShrink": r313_VStraightSbShrink,
                "VStraightSbOffset": r313_VStraightSbOffset
            };
        });
        var r313_VStraightSbShrink = r1_mix(1, r313_DesignParameters.straightVShapeSbShrink * r313_StrokeWidthBlend(1, 0.75), r313_SLAB ? 0.75 : 1);
        var r313_VStraightSbOffset = r313_OX * r313_StrokeWidthBlend(1, 2);
        var r313_VShapeTopFlat = function (r322_top) {
            var _r322_t0, _r322_t1;
            return Math.min(r322_top * 0.9, r322_top - (r313_SLAB ? r313_Stroke : 0));
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r324_t0, _r324_t1;
            return {
                "VShapeOutline": r313_VShapeOutline
            };
        });
        var r313_VShapeOutline = function () {
            var _r325_t5;
            var _r325_t6 = arguments;
            var r325_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r325_t6, 0);
            var _r325_t0 = [];
            var _r325_t1 = 0;
            while (_r325_t1 < r325_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r325_xn$flexarguments$2Lrc7uIe5[_r325_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r325_t0.push(r325_xn$flexarguments$2Lrc7uIe5[_r325_t1]);
                _r325_t1 = _r325_t1 + 1;
            }
            var _r325_t2 = r325_xn$flexarguments$2Lrc7uIe5;
            var _r325_t3 = _r325_t2.length;
            var _r325_t4 = 0;
            while (_r325_t4 < _r325_t3) {
                _r325_t1 = _r325_t2[_r325_t4];
                if (_r325_t1 && _r325_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r325_t1.left === "df") r325_df = _r325_t1.right;
                if (_r325_t1 && _r325_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r325_t1.left === "fBarStraight") r325_fBarStraight = _r325_t1.right;
                if (_r325_t1 && _r325_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r325_t1.left === "top") r325_top = _r325_t1.right;
                if (_r325_t1 && _r325_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r325_t1.left === "sw") r325_sw = _r325_t1.right;
                _r325_t4 = _r325_t4 + 1;
            }
            var r325_df = r1_fallback(r325_df, _r325_t0[0]);
            var r325_fBarStraight = r1_fallback(r325_fBarStraight, _r325_t0[1]);
            var r325_top = r1_fallback(r325_top, _r325_t0[2]);
            var r325_sw = r1_fallback(r325_sw, _r325_t0[3], r313_Stroke);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
                var _r331_t0, _r331_t1, _r331_t2, _r331_tag3, _r331_t4, _r331_tag5;
                var r331_cornerHW = r313_VCornerHalfWidth * (r325_sw / r313_Stroke);
                var r331_clearance = -r313_OX;
                var r331_sbScale = r325_fBarStraight ? r313_VStraightSbShrink : 1;
                var r331_vxStartL = r1_mix(0, r325_df.leftSB, r331_sbScale) + r331_clearance;
                var r331_vxStartR = r1_mix(r325_df.width, r325_df.rightSB, r331_sbScale) - r331_clearance;
                var r331_vxEndL = r325_df.middle - r331_cornerHW + r331_clearance;
                var r331_vxEndR = r325_df.middle + r331_cornerHW - r331_clearance;
                if (r325_fBarStraight) (function () {
                    return r331_currentGlyph.include(r313_xn$spirooutline$1aao(r313_flat(r1_mix(r331_vxStartL, r331_vxEndL, 0), r1_mix(r325_top, 0, 0)), r313_curl(r1_mix(r331_vxStartL, r331_vxEndL, r313_pInktrap), r1_mix(r325_top, 0, r313_pInktrap)), r313_corner(r1_mix(r331_vxStartL, r331_vxEndL, 1), r1_mix(r325_top, 0, 1)), r313_corner(r1_mix(r331_vxStartR, r331_vxEndR, 1), r1_mix(r325_top, 0, 1)), r313_flat(r1_mix(r331_vxStartR, r331_vxEndR, r313_pInktrap), r1_mix(r325_top, 0, r313_pInktrap)), r313_curl(r1_mix(r331_vxStartR, r331_vxEndR, 0), r1_mix(r325_top, 0, 0))));
                })(); else (function () {
                    return r331_currentGlyph.include(r313_xn$spirooutline$1aao(r313_flat(r331_vxStartL, r325_top), r313_curl(r331_vxStartL, r313_VShapeTopFlat(r325_top)), r313_quadControls(0, 0 + r313_VCurviness, 9, r313_unimportant), r313_corner(r331_vxEndL, 0), r313_corner(r331_vxEndR, 0), r313_quadControls(1, 1 - r313_VCurviness, 9, r313_unimportant), r313_flat(r331_vxStartR, r313_VShapeTopFlat(r325_top)), r313_curl(r331_vxStartR, r325_top)));
                })();
                return void 0;
            });
        };
        var r313_VBottomCapShape = function (r338_df, r338_fBarStraight, r338_sw) {
            var _r338_t0, _r338_t1;
            var r338_cornerHW = r313_VCornerHalfWidth * (r338_sw / r313_Stroke);
            return r313_xn$spirooutline$1aao(r313_corner(r338_df.middle + r338_cornerHW, 0), r313_corner(r338_df.middle - r338_cornerHW, 0), r313_corner(r338_df.middle, Math.min(r338_sw, r338_fBarStraight ? r313_VShapeFineStraight : r313_VShapeFine)));
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r340_t0, _r340_t1;
            return {
                "VShape": r313_VShape
            };
        });
        var r313_VShape = function () {
            var _r341_t5;
            var _r341_t6 = arguments;
            var r341_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r341_t6, 0);
            var _r341_t0 = [];
            var _r341_t1 = 0;
            while (_r341_t1 < r341_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r341_xn$flexarguments$2Lrc7uIe5[_r341_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r341_t0.push(r341_xn$flexarguments$2Lrc7uIe5[_r341_t1]);
                _r341_t1 = _r341_t1 + 1;
            }
            var _r341_t2 = r341_xn$flexarguments$2Lrc7uIe5;
            var _r341_t3 = _r341_t2.length;
            var _r341_t4 = 0;
            while (_r341_t4 < _r341_t3) {
                _r341_t1 = _r341_t2[_r341_t4];
                if (_r341_t1 && _r341_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r341_t1.left === "df") r341_df = _r341_t1.right;
                if (_r341_t1 && _r341_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r341_t1.left === "fBarStraight") r341_fBarStraight = _r341_t1.right;
                if (_r341_t1 && _r341_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r341_t1.left === "top") r341_top = _r341_t1.right;
                if (_r341_t1 && _r341_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r341_t1.left === "sw") r341_sw = _r341_t1.right;
                _r341_t4 = _r341_t4 + 1;
            }
            var r341_df = r1_fallback(r341_df, _r341_t0[0]);
            var r341_fBarStraight = r1_fallback(r341_fBarStraight, _r341_t0[1]);
            var r341_top = r1_fallback(r341_top, _r341_t0[2]);
            var r341_sw = r1_fallback(r341_sw, _r341_t0[3], r313_Stroke);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r347_currentGlyph) {
                var _r347_t0, _r347_t1, _r347_t2, _r347_tag3, _r347_t4, _r347_tag5;
                var r347_cornerHW = r313_VCornerHalfWidth * (r341_sw / r313_Stroke);
                var r347_sbScale = r341_fBarStraight ? r313_VStraightSbShrink : 1;
                var r347_vxStartL = r1_mix(0, r341_df.leftSB, r347_sbScale);
                var r347_vxStartR = r1_mix(r341_df.width, r341_df.rightSB, r347_sbScale);
                var r347_vxEndL = r341_df.middle - r347_cornerHW;
                var r347_vxEndR = r341_df.middle + r347_cornerHW;
                if (r341_fBarStraight) (function () {
                    var r349_dgCor = r313_DiagCor(r341_top - 0, r347_vxEndL - r347_vxStartL);
                    var r349_startSW = r349_dgCor * r341_sw;
                    var r349_midSW = r349_dgCor * r313_VShapeMiddleWidth * (r341_sw / r313_Stroke);
                    var r349_endSW = Math.min(r341_sw, r313_VShapeFineStraight * (r341_sw / r313_Stroke));
                    r347_currentGlyph.include(r313_tagged("strokeDown", r313_dispiro(r313_flat(r1_mix(r347_vxStartL, r347_vxEndL, 0), r1_mix(r341_top, 0, 0), r313_widths.lhs.heading(r349_startSW, r313_Downward)), r313_curl(r1_mix(r347_vxStartL, r347_vxEndL, r313_pInktrap), r1_mix(r341_top, 0, r313_pInktrap), r313_widths.lhs.heading(r349_midSW, r313_Downward)), r313_g4(r1_mix(r347_vxStartL, r347_vxEndL, 1), r1_mix(r341_top, 0, 1), r313_widths.lhs.heading(r349_endSW, r313_Downward)))));
                    return r347_currentGlyph.include(r313_tagged("strokeUp", r313_dispiro(r313_flat(r1_mix(r347_vxStartR, r347_vxEndR, 0), r1_mix(r341_top, 0, 0), r313_widths.rhs.heading(r349_startSW, r313_Downward)), r313_curl(r1_mix(r347_vxStartR, r347_vxEndR, r313_pInktrap), r1_mix(r341_top, 0, r313_pInktrap), r313_widths.rhs.heading(r349_midSW, r313_Downward)), r313_g4(r1_mix(r347_vxStartR, r347_vxEndR, 1), r1_mix(r341_top, 0, 1), r313_widths.rhs.heading(r349_endSW, r313_Downward)))));
                })(); else (function () {
                    var r353_fine = Math.min(r341_sw, r313_VShapeFine * (r341_sw / r313_Stroke));
                    r347_currentGlyph.include(r313_tagged("strokeDown", r313_dispiro(r313_widths.lhs(r341_sw), r313_flat(r347_vxStartL, r341_top, r313_heading(r313_Downward)), r313_curl(r347_vxStartL, r313_VShapeTopFlat(r341_top), r313_heading(r313_Downward)), r313_quadControls(0, r313_VCurviness, 9, r313_unimportant), r313_g4(r347_vxEndL, 0, r313_widths.lhs(r353_fine)))));
                    r347_currentGlyph.include(r313_tagged("strokeUp", r313_dispiro(r313_widths.rhs(r341_sw), r313_flat(r347_vxStartR, r341_top, r313_heading(r313_Downward)), r313_curl(r347_vxStartR, r313_VShapeTopFlat(r341_top), r313_heading(r313_Downward)), r313_quadControls(0, r313_VCurviness, 9, r313_unimportant), r313_g4(r347_vxEndR, 0, r313_widths.rhs(r353_fine)))));
                    return r347_currentGlyph.include(r313_tagged("bottomCap", r313_VBottomCapShape(r341_df, r341_fBarStraight, r341_sw)));
                })();
                return void 0;
            });
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r358_t0, _r358_t1;
            return {
                "VHookRightShape": r313_VHookRightShape
            };
        });
        var r313_VHookRightShape = function () {
            var _r359_t5;
            var _r359_t6 = arguments;
            var r359_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r359_t6, 0);
            var _r359_t0 = [];
            var _r359_t1 = 0;
            while (_r359_t1 < r359_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r359_xn$flexarguments$2Lrc7uIe5[_r359_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r359_t0.push(r359_xn$flexarguments$2Lrc7uIe5[_r359_t1]);
                _r359_t1 = _r359_t1 + 1;
            }
            var _r359_t2 = r359_xn$flexarguments$2Lrc7uIe5;
            var _r359_t3 = _r359_t2.length;
            var _r359_t4 = 0;
            while (_r359_t4 < _r359_t3) {
                _r359_t1 = _r359_t2[_r359_t4];
                if (_r359_t1 && _r359_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r359_t1.left === "df") r359_df = _r359_t1.right;
                if (_r359_t1 && _r359_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r359_t1.left === "fBarStraight") r359_fBarStraight = _r359_t1.right;
                if (_r359_t1 && _r359_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r359_t1.left === "top") r359_top = _r359_t1.right;
                if (_r359_t1 && _r359_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r359_t1.left === "sw") r359_sw = _r359_t1.right;
                if (_r359_t1 && _r359_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r359_t1.left === "hookWidthOuter") r359_hookWidthOuter = _r359_t1.right;
                if (_r359_t1 && _r359_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r359_t1.left === "hookWidthInner") r359_hookWidthInner = _r359_t1.right;
                _r359_t4 = _r359_t4 + 1;
            }
            var r359_df = r1_fallback(r359_df, _r359_t0[0]);
            var r359_fBarStraight = r1_fallback(r359_fBarStraight, _r359_t0[1]);
            var r359_top = r1_fallback(r359_top, _r359_t0[2]);
            var r359_sw = r1_fallback(r359_sw, _r359_t0[3], r313_Stroke);
            var r359_hookWidthOuter = r1_fallback(r359_hookWidthOuter, _r359_t0[4], r313_TailX / 3);
            var r359_hookWidthInner = r1_fallback(r359_hookWidthInner, _r359_t0[5], r313_TailX / 3);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r365_currentGlyph) {
                var _r365_t0, _r365_t1;
                r365_currentGlyph.include(r313_VShape(r359_df, r359_fBarStraight, r359_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r359_sw)));
                r365_currentGlyph.ejectTagged("strokeUp");
                r365_currentGlyph.ejectTagged("bottomCap");
                var r365_cornerHW = r313_VCornerHalfWidth * (r359_sw / r313_Stroke);
                var r365_fine = r313_VShapeFine * (r359_sw / r313_Stroke);
                r365_currentGlyph.include(r313_union(r313_VBottomCapShape(r359_df, r359_fBarStraight, r359_sw), r313_dispiro(r313_widths.rhs(r359_sw), r313_straight.left.start(r359_df.rightSB + r359_hookWidthOuter - Math.min(0, 1.2 * r359_sw * r313_TanSlope), r359_top - r313_O - r359_sw), r313_g4(r359_df.rightSB - r359_hookWidthInner, r359_top - r313_TailY - 0.5 * r359_sw), r313_quadControls(0.4, 0.75, 64, r313_unimportant), r313_g4(r359_df.middle + r365_cornerHW, 0, r313_widths.rhs(r365_fine)))));
                return void 0;
            });
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r372_t0, _r372_t1;
            return {
                "VHookLeftShape": r313_VHookLeftShape
            };
        });
        var r313_VHookLeftShape = function () {
            var _r373_t5;
            var _r373_t6 = arguments;
            var r373_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r373_t6, 0);
            var _r373_t0 = [];
            var _r373_t1 = 0;
            while (_r373_t1 < r373_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r373_xn$flexarguments$2Lrc7uIe5[_r373_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r373_t0.push(r373_xn$flexarguments$2Lrc7uIe5[_r373_t1]);
                _r373_t1 = _r373_t1 + 1;
            }
            var _r373_t2 = r373_xn$flexarguments$2Lrc7uIe5;
            var _r373_t3 = _r373_t2.length;
            var _r373_t4 = 0;
            while (_r373_t4 < _r373_t3) {
                _r373_t1 = _r373_t2[_r373_t4];
                if (_r373_t1 && _r373_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r373_t1.left === "df") r373_df = _r373_t1.right;
                if (_r373_t1 && _r373_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r373_t1.left === "fBarStraight") r373_fBarStraight = _r373_t1.right;
                if (_r373_t1 && _r373_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r373_t1.left === "top") r373_top = _r373_t1.right;
                if (_r373_t1 && _r373_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r373_t1.left === "sw") r373_sw = _r373_t1.right;
                if (_r373_t1 && _r373_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r373_t1.left === "hookWidthOuter") r373_hookWidthOuter = _r373_t1.right;
                if (_r373_t1 && _r373_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r373_t1.left === "hookWidthInner") r373_hookWidthInner = _r373_t1.right;
                _r373_t4 = _r373_t4 + 1;
            }
            var r373_df = r1_fallback(r373_df, _r373_t0[0]);
            var r373_fBarStraight = r1_fallback(r373_fBarStraight, _r373_t0[1]);
            var r373_top = r1_fallback(r373_top, _r373_t0[2]);
            var r373_sw = r1_fallback(r373_sw, _r373_t0[3], r313_Stroke);
            var r373_hookWidthOuter = r1_fallback(r373_hookWidthOuter, _r373_t0[4], r313_TailX / 3);
            var r373_hookWidthInner = r1_fallback(r373_hookWidthInner, _r373_t0[5], r313_TailX / 3);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r379_currentGlyph) {
                var _r379_t0, _r379_t1;
                r379_currentGlyph.include(r313_VShape(r373_df, r373_fBarStraight, r373_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r373_sw)));
                r379_currentGlyph.ejectTagged("strokeDown");
                r379_currentGlyph.ejectTagged("bottomCap");
                var r379_cornerHW = r313_VCornerHalfWidth * (r373_sw / r313_Stroke);
                var r379_fine = r313_VShapeFine * (r373_sw / r313_Stroke);
                r379_currentGlyph.include(r313_union(r313_VBottomCapShape(r373_df, r373_fBarStraight, r373_sw), r313_dispiro(r313_widths.lhs(r373_sw), r313_straight.right.start(r373_df.leftSB - r373_hookWidthOuter - Math.max(0, 1.2 * r373_sw * r313_TanSlope), r373_top - r313_O - r373_sw), r313_g4(r373_df.leftSB + r373_hookWidthInner, r373_top - r313_TailY - 0.5 * r373_sw), r313_quadControls(0.6, 0.75, 64, r313_unimportant), r313_g4(r373_df.middle - r379_cornerHW, 0, r313_widths.lhs(r379_fine)))));
                return void 0;
            });
        };
        var r313_VLoopShape = function () {
            var _r385_t5;
            var _r385_t6 = arguments;
            var r385_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r385_t6, 0);
            var _r385_t0 = [];
            var _r385_t1 = 0;
            while (_r385_t1 < r385_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r385_xn$flexarguments$2Lrc7uIe5[_r385_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r385_t0.push(r385_xn$flexarguments$2Lrc7uIe5[_r385_t1]);
                _r385_t1 = _r385_t1 + 1;
            }
            var _r385_t2 = r385_xn$flexarguments$2Lrc7uIe5;
            var _r385_t3 = _r385_t2.length;
            var _r385_t4 = 0;
            while (_r385_t4 < _r385_t3) {
                _r385_t1 = _r385_t2[_r385_t4];
                if (_r385_t1 && _r385_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r385_t1.left === "df") r385_df = _r385_t1.right;
                if (_r385_t1 && _r385_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r385_t1.left === "fBarStraight") r385_fBarStraight = _r385_t1.right;
                if (_r385_t1 && _r385_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r385_t1.left === "top") r385_top = _r385_t1.right;
                if (_r385_t1 && _r385_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r385_t1.left === "sw") r385_sw = _r385_t1.right;
                _r385_t4 = _r385_t4 + 1;
            }
            var r385_df = r1_fallback(r385_df, _r385_t0[0]);
            var r385_fBarStraight = r1_fallback(r385_fBarStraight, _r385_t0[1]);
            var r385_top = r1_fallback(r385_top, _r385_t0[2]);
            var r385_sw = r1_fallback(r385_sw, _r385_t0[3], r313_Stroke);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r391_currentGlyph) {
                var _r391_t0, _r391_t1;
                r391_currentGlyph.include(r313_VShape(r385_df, r385_fBarStraight, r385_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r385_sw)));
                r391_currentGlyph.ejectTagged("strokeDown");
                r391_currentGlyph.ejectTagged("bottomCap");
                var r391_cornerHW = r313_VCornerHalfWidth * (r385_sw / r313_Stroke);
                var r391_fine = r313_VShapeFine * (r385_sw / r313_Stroke);
                var r391_sbScale = r385_fBarStraight ? r313_VStraightSbShrink : 1;
                var r391_vxStartL = r1_mix(0, r385_df.leftSB, r391_sbScale);
                var r391_vxEndL = r385_df.middle - r391_cornerHW;
                var r391_swLoop = r313_AdviceStroke(4.5);
                var r391_xLoopL = r1_mix(r385_df.leftSB, r391_vxEndL, 0.1);
                var r391_xLoopR = r385_df.middle + r313_HSwToV(0.5 * r391_swLoop);
                var r391_yLoopB = Math.max(r385_top - (r391_xLoopR - r391_xLoopL), 0.5 * r385_top - 0.5 * r391_swLoop);
                var r391_coFine = r1_mix(r385_sw, r391_fine, 0.5);
                var r391_swLoopMix1 = r1_mix(r391_swLoop, r391_coFine, 0.375);
                var r391_swLoopMix2 = r1_mix(r391_swLoop, r391_coFine, 0.75);
                r391_currentGlyph.include(r313_union(r313_VBottomCapShape(r385_df, r385_fBarStraight, r385_sw), r313_dispiro(r313_widths.lhs(r391_swLoop), r313_flat(r1_mix(0, r385_df.leftSB, 0.5), r391_yLoopB), r313_curl(r1_mix(r391_xLoopL, r391_xLoopR, 0.5), r391_yLoopB), r313_archv(), r313_g4(r391_xLoopR - r313_O, r1_mix(r391_yLoopB, r385_top, 0.5)), r313_Arch.lhs(r385_top, new r313_xn$NamedParameterPair$2Lrc9b("swBefore", r391_swLoop), new r313_xn$NamedParameterPair$2Lrc9b("sw", r391_swLoopMix1), new r313_xn$NamedParameterPair$2Lrc9b("swAfter", r391_swLoopMix2)), r313_g4(r391_xLoopL + 0, r1_mix(r385_top, r391_yLoopB, 0.5), r313_widths.lhs(r391_swLoopMix2)), r313_flat(r1_mix(r391_vxStartL, r391_vxEndL, r385_fBarStraight ? 0.5 : 0.425), r1_mix(r385_top, 0, 0.5), r313_widths.lhs(r391_coFine)), r313_curl(r391_vxEndL, 0, r313_widths.lhs(r391_fine)))));
                return void 0;
            });
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r401_t0, _r401_t1;
            return {
                "VSerifs": r313_VSerifs
            };
        });
        var r313_VSerifs = function () {
            var _r402_t5;
            var _r402_t6 = arguments;
            var r402_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r402_t6, 0);
            var _r402_t0 = [];
            var _r402_t1 = 0;
            while (_r402_t1 < r402_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r402_xn$flexarguments$2Lrc7uIe5[_r402_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r402_t0.push(r402_xn$flexarguments$2Lrc7uIe5[_r402_t1]);
                _r402_t1 = _r402_t1 + 1;
            }
            var _r402_t2 = r402_xn$flexarguments$2Lrc7uIe5;
            var _r402_t3 = _r402_t2.length;
            var _r402_t4 = 0;
            while (_r402_t4 < _r402_t3) {
                _r402_t1 = _r402_t2[_r402_t4];
                if (_r402_t1 && _r402_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r402_t1.left === "df") r402_df = _r402_t1.right;
                if (_r402_t1 && _r402_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r402_t1.left === "fBarStraight") r402_fBarStraight = _r402_t1.right;
                if (_r402_t1 && _r402_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r402_t1.left === "top") r402_top = _r402_t1.right;
                if (_r402_t1 && _r402_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r402_t1.left === "sw") r402_sw = _r402_t1.right;
                if (_r402_t1 && _r402_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r402_t1.left === "swRef") r402_swRef = _r402_t1.right;
                _r402_t4 = _r402_t4 + 1;
            }
            var r402_df = r1_fallback(r402_df, _r402_t0[0]);
            var r402_fBarStraight = r1_fallback(r402_fBarStraight, _r402_t0[1]);
            var r402_top = r1_fallback(r402_top, _r402_t0[2]);
            var r402_sw = r1_fallback(r402_sw, _r402_t0[3], r313_Stroke);
            var r402_swRef = r1_fallback(r402_swRef, _r402_t0[4], r402_sw);
            var r402_sbScale = r402_fBarStraight ? r313_VStraightSbShrink : 1;
            var r402_sbOffset = r402_fBarStraight ? r313_VStraightSbOffset : 0;
            var r402_sf = r313_SerifFrame(r402_top, 0, r1_mix(0, r402_df.leftSB, r402_sbScale) - r402_sbOffset, r1_mix(r402_df.width, r402_df.rightSB, r402_sbScale) + r402_sbOffset, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r402_swRef), new r313_xn$NamedParameterPair$2Lrc9b("swSerif", r402_sw));
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r410_currentGlyph) {
                var _r410_t0, _r410_t1;
                r410_currentGlyph.include(r402_sf.lt.full, true, true);
                r410_currentGlyph.include(r402_sf.rt.full);
                return void 0;
            });
        };
        var r313_VAutoSerifs = function () {
            var _r413_t5;
            var _r413_t6 = arguments;
            var r413_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r413_t6, 0);
            var _r413_t0 = [];
            var _r413_t1 = 0;
            while (_r413_t1 < r413_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r413_xn$flexarguments$2Lrc7uIe5[_r413_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r413_t0.push(r413_xn$flexarguments$2Lrc7uIe5[_r413_t1]);
                _r413_t1 = _r413_t1 + 1;
            }
            var _r413_t2 = r413_xn$flexarguments$2Lrc7uIe5;
            var _r413_t3 = _r413_t2.length;
            var _r413_t4 = 0;
            while (_r413_t4 < _r413_t3) {
                _r413_t1 = _r413_t2[_r413_t4];
                if (_r413_t1 && _r413_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r413_t1.left === "df") r413_df = _r413_t1.right;
                if (_r413_t1 && _r413_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r413_t1.left === "fBarStraight") r413_fBarStraight = _r413_t1.right;
                if (_r413_t1 && _r413_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r413_t1.left === "top") r413_top = _r413_t1.right;
                if (_r413_t1 && _r413_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r413_t1.left === "sw") r413_sw = _r413_t1.right;
                if (_r413_t1 && _r413_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r413_t1.left === "swRef") r413_swRef = _r413_t1.right;
                _r413_t4 = _r413_t4 + 1;
            }
            var r413_df = r1_fallback(r413_df, _r413_t0[0]);
            var r413_fBarStraight = r1_fallback(r413_fBarStraight, _r413_t0[1]);
            var r413_top = r1_fallback(r413_top, _r413_t0[2]);
            var r413_sw = r1_fallback(r413_sw, _r413_t0[3], r313_Stroke);
            var r413_swRef = r1_fallback(r413_swRef, _r413_t0[4], r413_sw);
            return r313_NeedSlab(r313_SLAB, r313_VSerifs(r413_df, r413_fBarStraight, r413_top, r413_sw, r413_swRef));
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r419_t0, _r419_t1;
            return {
                "VMotionSerifs": r313_VMotionSerifs
            };
        });
        var r313_VMotionSerifs = function () {
            var _r420_t5;
            var _r420_t6 = arguments;
            var r420_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r420_t6, 0);
            var _r420_t0 = [];
            var _r420_t1 = 0;
            while (_r420_t1 < r420_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r420_xn$flexarguments$2Lrc7uIe5[_r420_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r420_t0.push(r420_xn$flexarguments$2Lrc7uIe5[_r420_t1]);
                _r420_t1 = _r420_t1 + 1;
            }
            var _r420_t2 = r420_xn$flexarguments$2Lrc7uIe5;
            var _r420_t3 = _r420_t2.length;
            var _r420_t4 = 0;
            while (_r420_t4 < _r420_t3) {
                _r420_t1 = _r420_t2[_r420_t4];
                if (_r420_t1 && _r420_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r420_t1.left === "df") r420_df = _r420_t1.right;
                if (_r420_t1 && _r420_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r420_t1.left === "fBarStraight") r420_fBarStraight = _r420_t1.right;
                if (_r420_t1 && _r420_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r420_t1.left === "top") r420_top = _r420_t1.right;
                if (_r420_t1 && _r420_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r420_t1.left === "sw") r420_sw = _r420_t1.right;
                if (_r420_t1 && _r420_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r420_t1.left === "swRef") r420_swRef = _r420_t1.right;
                _r420_t4 = _r420_t4 + 1;
            }
            var r420_df = r1_fallback(r420_df, _r420_t0[0]);
            var r420_fBarStraight = r1_fallback(r420_fBarStraight, _r420_t0[1]);
            var r420_top = r1_fallback(r420_top, _r420_t0[2]);
            var r420_sw = r1_fallback(r420_sw, _r420_t0[3], r313_Stroke);
            var r420_swRef = r1_fallback(r420_swRef, _r420_t0[4], r420_sw);
            var r420_sbScale = r420_fBarStraight ? r313_VStraightSbShrink : 1;
            var r420_sbOffset = r420_fBarStraight ? r313_VStraightSbOffset : 0;
            var r420_sf = r313_SerifFrame(r420_top, 0, r1_mix(0, r420_df.leftSB, r420_sbScale) - r420_sbOffset, r1_mix(r420_df.width, r420_df.rightSB, r420_sbScale) + r420_sbOffset, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r420_swRef), new r313_xn$NamedParameterPair$2Lrc9b("swSerif", r420_sw));
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r428_currentGlyph) {
                var _r428_t0, _r428_t1;
                r428_currentGlyph.include(r420_sf.lt.outer, true, true);
                return void 0;
            });
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r431_t0, _r431_t1;
            return {
                "VSlashOverlayShape": r313_VSlashOverlayShape
            };
        });
        var r313_VSlashOverlayShape = function () {
            var _r432_t5;
            var _r432_t6 = arguments;
            var r432_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r432_t6, 0);
            var _r432_t0 = [];
            var _r432_t1 = 0;
            while (_r432_t1 < r432_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r432_xn$flexarguments$2Lrc7uIe5[_r432_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r432_t0.push(r432_xn$flexarguments$2Lrc7uIe5[_r432_t1]);
                _r432_t1 = _r432_t1 + 1;
            }
            var _r432_t2 = r432_xn$flexarguments$2Lrc7uIe5;
            var _r432_t3 = _r432_t2.length;
            var _r432_t4 = 0;
            while (_r432_t4 < _r432_t3) {
                _r432_t1 = _r432_t2[_r432_t4];
                if (_r432_t1 && _r432_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r432_t1.left === "df") r432_df = _r432_t1.right;
                if (_r432_t1 && _r432_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r432_t1.left === "fBarStraight") r432_fBarStraight = _r432_t1.right;
                if (_r432_t1 && _r432_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r432_t1.left === "top") r432_top = _r432_t1.right;
                if (_r432_t1 && _r432_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r432_t1.left === "swRef") r432_swRef = _r432_t1.right;
                _r432_t4 = _r432_t4 + 1;
            }
            var r432_df = r1_fallback(r432_df, _r432_t0[0]);
            var r432_fBarStraight = r1_fallback(r432_fBarStraight, _r432_t0[1]);
            var r432_top = r1_fallback(r432_top, _r432_t0[2]);
            var r432_swRef = r1_fallback(r432_swRef, _r432_t0[3], r313_Stroke);
            var r432_cornerHW = r313_VCornerHalfWidth * (r432_swRef / r313_Stroke);
            var r432_sbScale = r432_fBarStraight ? r313_VStraightSbShrink : 1;
            var r432_vxStartR = r1_mix(r432_df.width, r432_df.rightSB, r432_sbScale);
            var r432_vxEndR = r432_df.middle + r432_cornerHW;
            return r313_xn$withtransform$5sIl(r313_Translate(r432_df.middle - r432_vxStartR, 0), r313_ExtLineCenter(r432_vxEndR, 0, r432_vxStartR, r432_top, r313_AdviceStroke(6) * (r432_swRef / r313_Stroke), 0.1));
        };
        var r313_VStandardConfig = r1_SuffixCfg.weave({
            "straight": true,
            "curly": false
        }, {
            "": r313_VAutoSerifs,
            "serifless": r313_xn$noshape$3cah,
            "motionSerifed": r313_VMotionSerifs,
            "serifed": r313_VSerifs
        });
        var _r313_t9 = Object.entries(r313_VStandardConfig)[Symbol.iterator]();
        var _r313_t10 = void 0;
        while (!(_r313_t10 = _r313_t9.next()).done) {
            _r313_t11 = _r313_t10.value;
            r313_suffix = _r313_t11[0];
            r313_fStraightBar = _r313_t11[1][0];
            r313_Serifs = _r313_t11[1][1];
            _r313_t11[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("V." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r442_currentGlyph) {
                    var _r442_t0, _r442_t1;
                    r442_currentGlyph.include(r313_MarkSet.capital());
                    r442_currentGlyph.include(r313_VShape(r313_DivFrame(1), r313_fStraightBar, r313_CAP, r313_Stroke));
                    r442_currentGlyph.include(r313_Serifs(r313_DivFrame(1), r313_fStraightBar, r313_CAP, r313_Stroke));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("v." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r448_currentGlyph) {
                    var _r448_t0, _r448_t1;
                    r448_currentGlyph.include(r313_MarkSet.e());
                    r448_currentGlyph.include(r313_VShape(r313_DivFrame(1), r313_fStraightBar, r313_XH, r313_Stroke));
                    r448_currentGlyph.include(r313_Serifs(r313_DivFrame(1), r313_fStraightBar, r313_XH, r313_Stroke));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("vPalatalHook." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r454_currentGlyph) {
                    var _r454_t0, _r454_t1;
                    r454_currentGlyph.include(r313_xn$referglyph$1aao("v." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r454_currentGlyph.include(r313_PalatalHook.r(new r313_xn$NamedParameterPair$2Lrc9b("xLink", r313_Middle), new r313_xn$NamedParameterPair$2Lrc9b("x", r313_Middle + r313_HSwToV(r313_HalfStroke) + r313_PalatalHook.adviceGap(r313_Stroke)), new r313_xn$NamedParameterPair$2Lrc9b("y", 0)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("VSlash." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r462_currentGlyph) {
                    var _r462_t0, _r462_t1;
                    r462_currentGlyph.include(r313_xn$referglyph$1aao("V." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r462_currentGlyph.include(r313_VSlashOverlayShape(r313_DivFrame(1), r313_fStraightBar, r313_CAP));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("vSlash." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r467_currentGlyph) {
                    var _r467_t0, _r467_t1;
                    r467_currentGlyph.include(r313_xn$referglyph$1aao("v." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r467_currentGlyph.include(r313_VSlashOverlayShape(r313_DivFrame(1), r313_fStraightBar, r313_XH));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("VHookRight." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r472_currentGlyph) {
                    var _r472_t0, _r472_t1;
                    r472_currentGlyph.include(r313_MarkSet.capital());
                    r472_currentGlyph.include(r313_VHookRightShape(r313_DivFrame(1), r313_fStraightBar, r313_CAP));
                    r472_currentGlyph.include(r313_Serifs(r313_DivFrame(1), r313_fStraightBar, r313_CAP));
                    r472_currentGlyph.ejectTagged("serifRT");
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("vHookRight." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r479_currentGlyph) {
                    var _r479_t0, _r479_t1;
                    r479_currentGlyph.include(r313_MarkSet.e());
                    r479_currentGlyph.include(r313_VHookRightShape(r313_DivFrame(1), r313_fStraightBar, r313_XH));
                    r479_currentGlyph.include(r313_Serifs(r313_DivFrame(1), r313_fStraightBar, r313_XH));
                    r479_currentGlyph.ejectTagged("serifRT");
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("vLoop." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r486_currentGlyph) {
                    var _r486_t0, _r486_t1;
                    r486_currentGlyph.include(r313_MarkSet.e());
                    r486_currentGlyph.include(r313_VLoopShape(r313_DivFrame(1), r313_fStraightBar, r313_XH));
                    r486_currentGlyph.include(r313_Serifs(r313_DivFrame(1), r313_fStraightBar, r313_XH));
                    r486_currentGlyph.ejectTagged("serifLT");
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Uk." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r493_currentGlyph) {
                    var _r493_t0, _r493_t1;
                    r493_currentGlyph.include(r313_MarkSet.capital());
                    var r493_yBarPos = r313_CAP * 0.55;
                    var r493_sw = r313_AdviceStroke(2.75);
                    r493_currentGlyph.include(r313_OShape(r493_yBarPos + 0.5 * r493_sw + r313_O, 0, r313_SB, r313_RightSB, r493_sw, r313_ArchDepthA, r313_ArchDepthB));
                    var r493_fine = Math.min(r313_VJutStroke, r313_VSwToH(0.5 * (r313_RightSB - r313_SB - r313_HSwToV(2 * r493_sw))));
                    r493_currentGlyph.include(r313_VBar.m(r313_Middle, r1_mix(r313_O, r493_yBarPos + 0.5 * r493_sw, 0.5), r493_yBarPos, r493_fine));
                    r493_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(0, r493_yBarPos - 0.5 * r493_sw), new r313_xn$Capture$2Lrc8.GlyphProc(function (r499_currentGlyph) {
                        var _r499_t0, _r499_t1;
                        r499_currentGlyph.include(r313_VHookRightShape(r313_DivFrame(1), r313_fStraightBar, r313_CAP - (r493_yBarPos - 0.5 * r493_sw)));
                        r499_currentGlyph.include(r313_Serifs(r313_DivFrame(1), r313_fStraightBar, r313_CAP - (r493_yBarPos - 0.5 * r493_sw)));
                        r499_currentGlyph.ejectTagged("serifRT");
                        return void 0;
                    })));
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/ukUnblended." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r505_currentGlyph) {
                    var _r505_t0, _r505_t1;
                    r505_currentGlyph.include(r313_MarkSet.b());
                    var r505_yBarPos = r313_Ascender * 0.55;
                    var r505_subDf = r313_DivFrame(5 / 6, 2);
                    r505_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(0.5 * (r313_Width - r505_subDf.width), 0), r313_OShape(r505_yBarPos + 0.5 * r505_subDf.mvs + r313_O, 0, r505_subDf.leftSB, r505_subDf.rightSB, r505_subDf.mvs, r505_subDf.smallArchDepthA, r505_subDf.smallArchDepthB)));
                    r505_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(0, r505_yBarPos - 0.5 * r505_subDf.mvs), new r313_xn$Capture$2Lrc8.GlyphProc(function (r510_currentGlyph) {
                        var _r510_t0, _r510_t1;
                        r510_currentGlyph.include(r313_VHookRightShape(r313_DivFrame(1), r313_fStraightBar, r313_Ascender - (r505_yBarPos - 0.5 * r505_subDf.mvs)));
                        r510_currentGlyph.include(r313_Serifs(r313_DivFrame(1), r313_fStraightBar, r313_Ascender - (r505_yBarPos - 0.5 * r505_subDf.mvs)));
                        r510_currentGlyph.ejectTagged("serifRT");
                        return void 0;
                    })));
                    return void 0;
                }));
            })();
        }
        var r313_VCursiveShape = function () {
            var _r514_t5;
            var _r514_t6 = arguments;
            var r514_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r514_t6, 0);
            var _r514_t0 = [];
            var _r514_t1 = 0;
            while (_r514_t1 < r514_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r514_xn$flexarguments$2Lrc7uIe5[_r514_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r514_t0.push(r514_xn$flexarguments$2Lrc7uIe5[_r514_t1]);
                _r514_t1 = _r514_t1 + 1;
            }
            var _r514_t2 = r514_xn$flexarguments$2Lrc7uIe5;
            var _r514_t3 = _r514_t2.length;
            var _r514_t4 = 0;
            while (_r514_t4 < _r514_t3) {
                _r514_t1 = _r514_t2[_r514_t4];
                if (_r514_t1 && _r514_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r514_t1.left === "k") r514_k = _r514_t1.right;
                if (_r514_t1 && _r514_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r514_t1.left === "top") r514_top = _r514_t1.right;
                if (_r514_t1 && _r514_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r514_t1.left === "sw") r514_sw = _r514_t1.right;
                _r514_t4 = _r514_t4 + 1;
            }
            var r514_k = r1_fallback(r514_k, _r514_t0[0]);
            var r514_top = r1_fallback(r514_top, _r514_t0[1]);
            var r514_sw = r1_fallback(r514_sw, _r514_t0[2], r313_Stroke);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r520_currentGlyph) {
                var _r520_t0, _r520_t1;
                var r520_xBar = r313_VCursiveShape.xBarPos(r514_k);
                var r520_xArcRight = r313_RightSB - r313_OX;
                var r520_yArcRight = r1_mix(0, r514_top, 0.6) - r514_sw * 0.2;
                var r520_xArcEnd = r1_mix(r313_SB, r313_RightSB, 0.8) + r514_sw * 0.375;
                var r520_yArcEnd = r514_top - r313_O;
                var r520_rInY = 1 * r313_TightBendInnerRadius;
                var r520_xArcMidBottom = r313_Arch["adjust-x"].bot(r520_xBar + r313_HSwToV(r514_sw + r520_rInY), r514_sw);
                var r520_yArcMidBottom = 0 + r313_O;
                r520_currentGlyph.include(r313_dispiro(r313_widths.lhs(r514_sw), r313_flat(r520_xBar, r514_top, r313_heading(r313_Downward)), r313_curl(r520_xBar, (r514_sw + r520_rInY) * (1 + r313_TanSlope)), r313_arcvh(), r313_g2.right.mid(r520_xArcMidBottom, r520_yArcMidBottom), r313_archv.superness(2), r313_g4(r520_xArcRight, r520_yArcRight), r313_g4(r520_xArcEnd, r520_yArcEnd)));
                r520_currentGlyph.setBaseAnchor("palatalHookAttach", r1_mix(r520_xArcMidBottom, r520_xArcRight, 0.5), r1_mix(r520_yArcMidBottom, r520_yArcRight, r313_archv.yFromX(0.5, 2)));
                return void 0;
            });
        };
        r313_VCursiveShape.xBarPos = function (r523_k) {
            var _r523_t0, _r523_t1;
            return r1_mix(r313_SB, r313_RightSB, r523_k);
        };
        var r313_VCursiveConfig = {
            "cursiveSerifless": [1 / 24, false],
            "cursiveSerifed": [1 / 16, true]
        };
        var _r313_t12 = Object.entries(r313_VCursiveConfig)[Symbol.iterator]();
        var _r313_t13 = void 0;
        while (!(_r313_t13 = _r313_t12.next()).done) {
            _r313_t14 = _r313_t13.value;
            r313_suffix = _r313_t14[0];
            r313_pxBar = _r313_t14[1][0];
            r313_doSerif = _r313_t14[1][1];
            _r313_t14[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("v." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r529_currentGlyph) {
                    var r529_xBar, _r529_t0, _r529_t1;
                    r529_currentGlyph.include(r313_MarkSet.e());
                    r529_currentGlyph.include(r313_VCursiveShape(r313_pxBar, r313_XH, r313_Stroke));
                    if (r313_doSerif) {
                        r529_xBar = r313_VCursiveShape.xBarPos(r313_pxBar);
                        r529_currentGlyph.include(r313_tagged("serifLT", r313_HSerif.lt(r529_xBar, r313_XH, r313_SideJut + (r529_xBar - r313_SB))));
                    }
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("vPalatalHook." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r535_currentGlyph) {
                    var _r535_t0, _r535_t1;
                    r535_currentGlyph.include(r313_xn$referglyph$1aao("v." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    var r535_attach = r535_currentGlyph.gizmo.unapply(r535_currentGlyph.baseAnchors.palatalHookAttach);
                    r535_currentGlyph.include(r313_PalatalHook.r(new r313_xn$NamedParameterPair$2Lrc9b("x", r535_attach.x), new r313_xn$NamedParameterPair$2Lrc9b("y", 0), new r313_xn$NamedParameterPair$2Lrc9b("yAttach", r535_attach.y)));
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("vSlash." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r543_currentGlyph) {
                    var _r543_t0, _r543_t1;
                    r543_currentGlyph.include(r313_xn$referglyph$1aao("v." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    var r543_xBar = r313_VCursiveShape.xBarPos(r313_pxBar);
                    r543_currentGlyph.include(r313_ExtLineCenter(r1_mix(r543_xBar + r313_HSwToV(r313_HalfStroke), r313_Middle, -1), 0, r313_Middle, r313_XH, r313_AdviceStroke(6), 0.1));
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("V", "V");
        r313_xn$linkreducedvariant$5sIl8("V/sansSerif", "V", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("smcpV", 7456, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "v"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "V"));
        r313_xn$selectvariant$7Hrq("v", "v");
        r313_xn$linkreducedvariant$5sIl8("v/sansSerif", "v", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("vPalatalHook", 7564, new r313_xn$NamedParameterPair$2Lrc9b("follow", "v"));
        r313_xn$selectvariant$7Hrq("vHookRight", 11377);
        r313_xn$selectvariant$7Hrq("vLoop", 11380);
        r313_xn$selectvariant$7Hrq("VSlash", 42846, new r313_xn$NamedParameterPair$2Lrc9b("follow", "V"));
        r313_xn$selectvariant$7Hrq("vSlash", 42847, new r313_xn$NamedParameterPair$2Lrc9b("follow", "v"));
        r313_xn$selectvariant$7Hrq("cyrl/Izhitsa", 1140, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "VHookRight"));
        r313_xn$selectvariant$7Hrq("cyrl/izhitsa", 1141, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "vHookRight"));
        r313_xn$selectvariant$7Hrq("cyrl/Uk", 42570, new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Izhitsa"));
        r313_xn$selectvariant$7Hrq("cyrl/ukUnblended", 7304, new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/izhitsa"));
        r313_CreateTurnedLetter("turnV", 581, "V", r313_HalfAdvance, r313_CAP / 2);
        r313_CreateTurnedLetter("turnv", 652, "v", r313_HalfAdvance, r313_XH / 2);
        var r313_VScriptShape = function (r555_df, r555_top, r555_ada, r555_adb) {
            var _r555_t0, _r555_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r557_currentGlyph) {
                var _r557_t0, _r557_t1;
                r557_currentGlyph.include(r313_uBowl.toothlessRounded(new r313_xn$NamedParameterPair$2Lrc9b("top", r555_top), new r313_xn$NamedParameterPair$2Lrc9b("bottom", 0), new r313_xn$NamedParameterPair$2Lrc9b("left", r555_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r555_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("ada", r555_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r555_adb), new r313_xn$NamedParameterPair$2Lrc9b("rightY0", r555_top - r313_Hook - r313_HalfStroke)));
                r557_currentGlyph.include(r313_VerticalHook.r(new r313_xn$NamedParameterPair$2Lrc9b("x", r555_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("y", r555_top - r313_Hook - r313_HalfStroke), new r313_xn$NamedParameterPair$2Lrc9b("xDepth", r555_df.middle + r313_HSwToV(r313_HalfStroke) - r555_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("yDepth", -r313_Hook)));
                return void 0;
            });
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save("VScript.roundedSerifless", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r573_currentGlyph) {
            var _r573_t0, _r573_t1;
            r573_currentGlyph.include(r313_MarkSet.capital());
            r573_currentGlyph.include(r313_VScriptShape(r313_DivFrame(1), r313_CAP, r313_ArchDepthA, r313_ArchDepthB));
            r313_xn$GlyphSaveSink$2Lrc4b.save("VScript.roundedMotionSerifed", null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r573_currentGlyph, r313_tagged("serifLT", r313_HSerif.lt(r313_SB, r313_CAP, r313_SideJut))));
            r313_xn$GlyphSaveSink$2Lrc4b.save("VScript.roundedSerifed", null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r573_currentGlyph, r313_tagged("serifLT", r313_HSerif.mt(r313_SB + r313_HSwToV(r313_HalfStroke), r313_CAP, r313_Jut))));
            return void 0;
        }));
        r313_xn$selectvariant$7Hrq("VScript", 434);
        r313_xn$GlyphSaveSink$2Lrc4b.save("vScript.roundedSerifless", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r582_currentGlyph) {
            var _r582_t0, _r582_t1;
            r582_currentGlyph.include(r313_MarkSet.e());
            r582_currentGlyph.include(r313_VScriptShape(r313_DivFrame(1), r313_XH, r313_SmallArchDepthA, r313_SmallArchDepthB));
            r313_xn$GlyphSaveSink$2Lrc4b.save("vScript.roundedMotionSerifed", null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r582_currentGlyph, r313_tagged("serifLT", r313_HSerif.lt(r313_SB, r313_XH, r313_SideJut))));
            r313_xn$GlyphSaveSink$2Lrc4b.save("vScript.roundedSerifed", null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r582_currentGlyph, r313_tagged("serifLT", r313_HSerif.mt(r313_SB + r313_HSwToV(r313_HalfStroke), r313_XH, r313_Jut))));
            return void 0;
        }));
        r313_xn$selectvariant$7Hrq("vScript", 651);
        r313_xn$derivecomposites$7Hrq("vScriptPalatalHook", 122681, "vScript", r313_PalatalHook.r(new r313_xn$NamedParameterPair$2Lrc9b("x", r1_mix(r313_Arch["adjust-x"].bot(r313_Middle), r313_RightSB, 0.75)), new r313_xn$NamedParameterPair$2Lrc9b("y", 0), new r313_xn$NamedParameterPair$2Lrc9b("yAttach", r1_mix(r313_O, r313_SmallArchDepthA, r313_archv.yFromX(0.75)))));
        var _r313_t15 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t15.BBS;
        var r313_BBD = _r313_t15.BBD;
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r594_t0, _r594_t1;
            return {
                "BBVShape": r313_BBVShape,
                "BBVInnerMaskShape": r313_BBVInnerMaskShape,
                "BBVOuterMaskShape": r313_BBVOuterMaskShape
            };
        });
        var r313_BBVShape = function (r595_l, r595_r, r595_kd, r595_ks, r595_top) {
            var _r595_t0, _r595_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r597_currentGlyph) {
                var _r597_t0, _r597_t1;
                var r597_m = r1_mix(r595_l, r595_r, 0.5);
                var r597_bbd = r313_BBD * r595_kd;
                var r597_bbs = r313_BBS * r595_ks;
                var r597_kDiag = r313_DiagCorDs(r595_top, (r595_r - r595_l) / 2, r597_bbd / 2);
                r597_currentGlyph.include(r313_intersection(r313_Rect(r595_top, 0, -r313_Width, 2 * r313_Width), r313_union(r313_ExtLineCenter(r595_l, r595_top, r597_m - r597_kDiag * r597_bbd / 2, 0, r597_bbs, 1), r313_ExtLineCenter(r595_l + r597_kDiag * r597_bbd, r595_top, r597_m + r597_kDiag * r597_bbd / 2, 0, r597_bbs, 1), r313_ExtLineCenter(r595_r, r595_top, r597_m + r597_kDiag * r597_bbd / 2, 0, r597_bbs, 1))));
                r597_currentGlyph.include(r313_HBar.t(r595_l, r595_l + r597_kDiag * r597_bbd, r595_top, r597_bbs));
                r597_currentGlyph.include(r313_HBar.b(r597_m - r597_kDiag * r597_bbd / 2, r597_m + r597_kDiag * r597_bbd / 2, 0, r597_bbs));
                return void 0;
            });
        };
        var r313_BBVInnerMaskShape = function (r601_l, r601_r, r601_kd, r601_ks, r601_top) {
            var _r601_t0, _r601_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r603_currentGlyph) {
                var _r603_t0, _r603_t1;
                var r603_m = r1_mix(r601_l, r601_r, 0.5);
                var r603_bbd = r313_BBD * r601_kd;
                var r603_kDiag = r313_DiagCorDs(r601_top, (r601_r - r601_l) / 2, r603_bbd / 2);
                r603_currentGlyph.include(r313_xn$spirooutline$1aao(r313_corner(r601_l + r603_kDiag * r603_bbd, r601_top), r313_corner(r601_r, r601_top), r313_corner(r603_m + r603_kDiag * r603_bbd / 2, 0)));
                return void 0;
            });
        };
        var r313_BBVOuterMaskShape = function (r605_l, r605_r, r605_kd, r605_ks, r605_top) {
            var _r605_t0, _r605_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r607_currentGlyph) {
                var _r607_t0, _r607_t1;
                var r607_m = r1_mix(r605_l, r605_r, 0.5);
                var r607_bbd = r313_BBD * r605_kd;
                var r607_kDiag = r313_DiagCorDs(r605_top, (r605_r - r605_l) / 2, r607_bbd / 2);
                r607_currentGlyph.include(r313_xn$spirooutline$1aao(r313_corner(r605_l, r605_top), r313_corner(r605_r, r605_top), r313_corner(r607_m + r607_kDiag * r607_bbd / 2, 0), r313_corner(r607_m - r607_kDiag * r607_bbd / 2, 0)));
                return void 0;
            });
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/V", 120141, new r313_xn$Capture$2Lrc8.GlyphProc(function (r611_currentGlyph) {
            var _r611_t0, _r611_t1;
            r611_currentGlyph.include(r313_MarkSet.capital(), true, true);
            r611_currentGlyph.include(r313_BBVShape(r313_SB, r313_RightSB, 1, 1, r313_CAP));
            return void 0;
        }));
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/v", 120167, new r313_xn$Capture$2Lrc8.GlyphProc(function (r616_currentGlyph) {
            var _r616_t0, _r616_t1;
            r616_currentGlyph.include(r313_MarkSet.e(), true, true);
            r616_currentGlyph.include(r313_BBVShape(r313_SB, r313_RightSB, 1, 1, r313_XH));
            return void 0;
        }));
    });
    return void 0;
});


