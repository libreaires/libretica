"use strict";
import * as _s0_t0 from "@iosevka/util";
var _s0_t1;
export {_s0_t1 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t1 = r1_apply = function () {
    var r307_block, _r307_t4, _r307_t6;
    var _r307_t3 = this;
    var _r307_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r307_t1 = _r307_t0.length;
    var _r307_t2 = 0;
    var _r307_t5 = _r307_t2 < _r307_t1;
    while (_r307_t5) {
        _r307_t6 = (r307_block = _r307_t0[_r307_t2], r307_block(_r307_t3), _r307_t2 = _r307_t2 + 1);
        _r307_t5 = _r307_t2 < _r307_t1;
    }
    return _r307_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r311_xn$Capture_Ext$2Lrc2b) {
    var _r311_t0, _r311_t1;
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Latin-O", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t13, _r312_t14;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_MarkSet = _r312_t0.MarkSet;
        var r312_AS_BASE = _r312_t0.AS_BASE;
        var r312_ALSO_METRICS = _r312_t0.ALSO_METRICS;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_DesignParameters = _r312_t1.DesignParameters;
        var r312_Width = _r312_t1.Width;
        var r312_SB = _r312_t1.SB;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var r312_Descender = _r312_t1.Descender;
        var r312_Translate = _r312_t1.Translate;
        var r312_ApparentTranslate = _r312_t1.ApparentTranslate;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_VSwToH = _r312_t1.VSwToH;
        var r312_Upward = _r312_t1.Upward;
        var r312_Downward = _r312_t1.Downward;
        var r312_Rightward = _r312_t1.Rightward;
        var r312_Leftward = _r312_t1.Leftward;
        var r312_O = _r312_t1.O;
        var r312_OX = _r312_t1.OX;
        var r312_Hook = _r312_t1.Hook;
        var r312_ArchDepth = _r312_t1.ArchDepth;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_AdviceStroke2 = _r312_t1.AdviceStroke2;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_HalfStroke = _r312_t1.HalfStroke;
        var r312_QuarterStroke = _r312_t1.QuarterStroke;
        var r312_OverlayStroke = _r312_t1.OverlayStroke;
        var r312_LongVJut = _r312_t1.LongVJut;
        var r312_VJutStroke = _r312_t1.VJutStroke;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_Middle = _r312_t1.Middle;
        var r312_DotRadius = _r312_t1.DotRadius;
        var r312_StrokeWidthBlend = _r312_t1.StrokeWidthBlend;
        var r312_ArchDepthAOf = _r312_t1.ArchDepthAOf;
        var r312_ArchDepthBOf = _r312_t1.ArchDepthBOf;
        var r312_ArchDepthA = _r312_t1.ArchDepthA;
        var r312_ArchDepthB = _r312_t1.ArchDepthB;
        var r312_SmallArchDepthA = _r312_t1.SmallArchDepthA;
        var r312_SmallArchDepthB = _r312_t1.SmallArchDepthB;
        var r312_YSmoothMidR = _r312_t1.YSmoothMidR;
        var r312_YSmoothMidL = _r312_t1.YSmoothMidL;
        var r312_ArchDepthAClamped = _r312_t1.ArchDepthAClamped;
        var r312_ArchDepthBClamped = _r312_t1.ArchDepthBClamped;
        var r312_TINY = _r312_t1.TINY;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_corner = _r312_t2.corner;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_archv = _r312_t2.archv;
        var r312_arcvh = _r312_t2.arcvh;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var r312_intersection = _r312_t4.intersection;
        var r312_difference = _r312_t4.difference;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_MaskLeft = _r312_t5.MaskLeft;
        var r312_MaskRight = _r312_t5.MaskRight;
        var r312_DotAt = _r312_t5.DotAt;
        var r312_OShape = _r312_t5.OShape;
        var r312_OShapeOutline = _r312_t5.OShapeOutline;
        var r312_OShapeFlatTB = _r312_t5.OShapeFlatTB;
        var r312_HBar = _r312_t5.HBar;
        var r312_VBar = _r312_t5.VBar;
        var r312_flatside = _r312_t5.flatside;
        var r312_Arch = _r312_t5.Arch;
        var r312_PointingTo = _r312_t5.PointingTo;
        var r312_xn$withtransform$5sIl = _r312_t5["with-transform"];
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$referglyph$1aao = _r312_t6["refer-glyph"];
        var r312_xn$derivemultipartglyphs$7Hrq65 = _r312_t6["derive-multi-part-glyphs"];
        var r312_xn$derivecomposites$7Hrq = _r312_t6["derive-composites"];
        var r312_alias = _r312_t6.alias;
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Horn-And-Angle"].resolve();
        var r312_HornBaseAnchor = _r312_t7.HornBaseAnchor;
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Above"].resolve();
        var r312_RingDims = _r312_t8.RingDims;
        var r312_RingShape = _r312_t8.RingShape;
        var _r312_t9 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r312_ExtendAboveBaseAnchors = _r312_t9.ExtendAboveBaseAnchors;
        var r312_ExtendBelowBaseAnchors = _r312_t9.ExtendBelowBaseAnchors;
        var _r312_t10 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r312_CreateAccentedComposition = _r312_t10.CreateAccentedComposition;
        var r312_SetGrekUpperTonos = _r312_t10.SetGrekUpperTonos;
        var _r312_t11 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r312_RetroflexHook = _r312_t11.RetroflexHook;
        var r312_FlatHookDepth = _r312_t11.FlatHookDepth;
        var _r312_t12 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r312_BBS = _r312_t12.BBS;
        var r312_BBD = _r312_t12.BBD;
        r312_xn$GlyphSaveSink$2Lrc4b.save("O", "O", new r312_xn$Capture$2Lrc8.GlyphProc(function (r323_currentGlyph) {
            var _r323_t0, _r323_t1;
            r323_currentGlyph.include(r312_MarkSet.capital());
            r323_currentGlyph.include(r312_OShape(r312_CAP, 0, r312_SB, r312_RightSB, void 0, r312_ArchDepthA, r312_ArchDepthB));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("smcpO", 7439, new r312_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
            var _r328_t0, _r328_t1;
            r328_currentGlyph.include(r312_MarkSet.e());
            r328_currentGlyph.include(r312_OShape(r312_XH, 0, r312_SB, r312_RightSB, void 0, r312_ArchDepthA, r312_ArchDepthB));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("o", "o", new r312_xn$Capture$2Lrc8.GlyphProc(function (r333_currentGlyph) {
            var _r333_t0, _r333_t1;
            r333_currentGlyph.include(r312_MarkSet.e());
            r333_currentGlyph.include(r312_OShape(r312_XH, 0, r312_SB, r312_RightSB, void 0, void 0, void 0));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("grek/Omicron", 927, new r312_xn$Capture$2Lrc8.GlyphProc(function (r338_currentGlyph) {
            var _r338_t0, _r338_t1;
            r338_currentGlyph.include(r312_xn$referglyph$1aao("O"), r312_AS_BASE, r312_ALSO_METRICS);
            r338_currentGlyph.include(r312_SetGrekUpperTonos(0));
            return void 0;
        }));
        r312_alias("grek/omicron", 959, "o");
        r312_alias("cyrl/O", 1054, "O");
        r312_alias("cyrl/o", 1086, "o");
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/oNarrow", 7298, new r312_xn$Capture$2Lrc8.GlyphProc(function (r343_currentGlyph) {
            var _r343_t0, _r343_t1;
            var r343_df = r343_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleF, 2));
            r343_currentGlyph.include(r343_df.markSet.e());
            var r343_subDf = r312_DivFrame(5 / 6, 2);
            r343_currentGlyph.include(r312_xn$withtransform$5sIl(r312_ApparentTranslate(0.5 * (r343_df.width - r343_subDf.width), 0), r312_OShape(r312_XH, 0, r343_subDf.leftSB, r343_subDf.rightSB, r343_subDf.mvs, r343_subDf.smallArchDepthA, r343_subDf.smallArchDepthB)));
            return void 0;
        }));
        var r312_rBroadOn = r312_DotRadius * r312_StrokeWidthBlend(1.625, 1);
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/BroadOn", 1146, new r312_xn$Capture$2Lrc8.GlyphProc(function (r349_currentGlyph) {
            var _r349_t0, _r349_t1;
            var r349_df = r349_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleT, 3));
            r349_currentGlyph.include(r349_df.markSet.capital());
            var r349_dist = r349_df.rightSB - r349_df.leftSB;
            r349_currentGlyph.include(r312_OShapeFlatTB(r312_CAP, 0, r349_df.leftSB, r349_df.rightSB, r349_df.mvs, r349_df.archDepthA, r349_df.archDepthB, Math.min(Math.max(0.25 * r349_dist, r312_HSwToV(Math.SQRT2 * r312_rBroadOn)), Math.max(r349_dist - r312_HSwToV(3 * r349_df.mvs), r312_HSwToV(r349_df.mvs)))));
            r349_currentGlyph.include(r312_DotAt(r349_df.middle, 0 + r349_df.mvs / 2, r312_rBroadOn));
            r349_currentGlyph.include(r312_DotAt(r349_df.middle, r312_CAP - r349_df.mvs / 2, r312_rBroadOn));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/broadOn", 1147, new r312_xn$Capture$2Lrc8.GlyphProc(function (r357_currentGlyph) {
            var _r357_t0, _r357_t1;
            var r357_df = r357_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleT, 3));
            r357_currentGlyph.include(r357_df.markSet.e());
            var r357_dist = r357_df.rightSB - r357_df.leftSB;
            r357_currentGlyph.include(r312_OShapeFlatTB(r312_XH, 0, r357_df.leftSB, r357_df.rightSB, r357_df.mvs, r357_df.smallArchDepthA, r357_df.smallArchDepthB, Math.min(Math.max(0.25 * r357_dist, r312_HSwToV(Math.SQRT2 * r312_rBroadOn)), Math.max(r357_dist - r312_HSwToV(3 * r357_df.mvs), r312_HSwToV(r357_df.mvs)))));
            r357_currentGlyph.include(r312_DotAt(r357_df.middle, 0 + r357_df.mvs / 2, r312_rBroadOn));
            r357_currentGlyph.include(r312_DotAt(r357_df.middle, r312_XH - r357_df.mvs / 2, r312_rBroadOn));
            return void 0;
        }));
        r312_xn$derivemultipartglyphs$7Hrq65("OHorn", 416, ["O", "longHorn"], function (r363_srcs, r363_gr) {
            var _r363_t0, _r363_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r365_currentGlyph) {
                var _r365_t1, _r365_t2;
                var _r365_t0 = r363_srcs;
                var r365_base = _r365_t0[0];
                var r365_horn = _r365_t0[1];
                r365_currentGlyph.include(r312_MarkSet.capital());
                r365_currentGlyph.include(r312_HornBaseAnchor(r312_RightSB, r312_CAP, r312_Width / 2, r312_ArchDepthB, 0.5));
                r365_currentGlyph.include(r312_difference(r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r371_currentGlyph) {
                    var _r371_t0, _r371_t1;
                    r371_currentGlyph.include(r312_MarkSet.capital());
                    r371_currentGlyph.include(r312_xn$referglyph$1aao(r365_horn));
                    return void 0;
                })), r312_OShapeOutline.NoOvershoot(r312_CAP, 0, r312_SB, r312_RightSB, void 0, r312_ArchDepthA, r312_ArchDepthB)));
                r365_currentGlyph.include(r312_xn$referglyph$1aao(r365_base));
                return void 0;
            });
        });
        r312_xn$derivemultipartglyphs$7Hrq65("oHorn", 417, ["o", "longHorn"], function (r375_srcs, r375_gr) {
            var _r375_t0, _r375_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r377_currentGlyph) {
                var _r377_t1, _r377_t2;
                var _r377_t0 = r375_srcs;
                var r377_base = _r377_t0[0];
                var r377_horn = _r377_t0[1];
                r377_currentGlyph.include(r312_MarkSet.e());
                r377_currentGlyph.include(r312_HornBaseAnchor(r312_RightSB, r312_XH, r312_Width / 2, r312_ArchDepthB, 0.5));
                r377_currentGlyph.include(r312_difference(r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r383_currentGlyph) {
                    var _r383_t0, _r383_t1;
                    r383_currentGlyph.include(r312_MarkSet.e());
                    r383_currentGlyph.include(r312_xn$referglyph$1aao(r377_horn));
                    return void 0;
                })), r312_OShapeOutline.NoOvershoot(r312_XH, 0, r312_SB, r312_RightSB, void 0, void 0, void 0)));
                r377_currentGlyph.include(r312_xn$referglyph$1aao(r377_base));
                return void 0;
            });
        });
        r312_xn$GlyphSaveSink$2Lrc4b.save("OSlash", 216, new r312_xn$Capture$2Lrc8.GlyphProc(function (r389_currentGlyph) {
            var _r389_t0, _r389_t1;
            var r389_fine = 0.5 * r312_OverlayStroke;
            r389_currentGlyph.include(r312_xn$referglyph$1aao("O"), r312_AS_BASE);
            r389_currentGlyph.include(r312_dispiro(r312_widths.center(2 * r389_fine), r312_flat(r312_SB + r312_O + r389_fine, r1_mix(r312_CAP, 0, 1.05)), r312_curl(r312_RightSB - r312_O - r389_fine, r1_mix(0, r312_CAP, 1.05))));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("oSlash", 248, new r312_xn$Capture$2Lrc8.GlyphProc(function (r394_currentGlyph) {
            var _r394_t0, _r394_t1;
            var r394_fine = 0.5 * r312_OverlayStroke;
            r394_currentGlyph.include(r312_xn$referglyph$1aao("o"), r312_AS_BASE);
            r394_currentGlyph.include(r312_dispiro(r312_widths.center(2 * r394_fine), r312_flat(r312_SB + r312_O + r394_fine, r1_mix(r312_XH, 0, 1.05)), r312_curl(r312_RightSB - r312_O - r394_fine, r1_mix(0, r312_XH, 1.05))));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("oSideways", 7441, new r312_xn$Capture$2Lrc8.GlyphProc(function (r399_currentGlyph) {
            var _r399_t0, _r399_t1;
            r399_currentGlyph.include(r312_MarkSet.e());
            r399_currentGlyph.include(r312_PointingTo(r312_Width, r312_XH, r312_Width, 0, function () {
                var _r402_t0, _r402_t1;
                return r312_OShape(r312_Width - r312_SB / 2, r312_SB / 2, r312_XH * 0.1, r312_XH * 0.9, void 0, void 0, void 0);
            }));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("oSlashSideways", 7443, new r312_xn$Capture$2Lrc8.GlyphProc(function (r405_currentGlyph) {
            var _r405_t0, _r405_t1;
            r405_currentGlyph.include(r312_MarkSet.e());
            r405_currentGlyph.include(r312_PointingTo(r312_Width, r312_XH, r312_Width, 0, function () {
                var _r408_t0, _r408_t1;
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r410_currentGlyph) {
                    var _r410_t0, _r410_t1;
                    var r410_fine = 0.5 * r312_OverlayStroke;
                    r410_currentGlyph.include(r312_OShape(r312_Width - r312_SB / 2, r312_SB / 2, r312_XH * 0.1, r312_XH * 0.9, void 0, void 0, void 0));
                    r410_currentGlyph.include(r312_dispiro(r312_widths.center(2 * r410_fine), r312_flat(0 + r312_SB + r312_O + r410_fine, r1_mix(r312_Width, 0, 1.05)), r312_curl(r312_XH - r312_SB - r312_O - r410_fine, r1_mix(0, r312_Width, 1.05))));
                    return void 0;
                });
            }));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("OBar", 415, new r312_xn$Capture$2Lrc8.GlyphProc(function (r415_currentGlyph) {
            var _r415_t0, _r415_t1;
            r415_currentGlyph.include(r312_MarkSet.capital());
            var r415_stroke = r312_AdviceStroke2(2, 3, r312_CAP);
            r415_currentGlyph.include(r312_OShape(r312_CAP, 0, r312_SB, r312_RightSB, r415_stroke, r312_ArchDepthA, r312_ArchDepthB));
            r415_currentGlyph.include(r312_intersection(r312_OShapeOutline.NoOvershoot(r312_CAP, 0, r312_SB, r312_RightSB, r415_stroke, r312_ArchDepthA, r312_ArchDepthB), r312_HBar.m(r312_SB + r312_OX, r312_RightSB - r312_OX, r312_CAP * 0.5, r415_stroke)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("oBar", 629, new r312_xn$Capture$2Lrc8.GlyphProc(function (r421_currentGlyph) {
            var _r421_t0, _r421_t1;
            r421_currentGlyph.include(r312_MarkSet.e());
            var r421_stroke = r312_AdviceStroke2(2, 3, r312_XH);
            r421_currentGlyph.include(r312_OShape(r312_XH, 0, r312_SB, r312_RightSB, r421_stroke, void 0, void 0));
            r421_currentGlyph.include(r312_intersection(r312_OShapeOutline.NoOvershoot(r312_XH, 0, r312_SB, r312_RightSB, r421_stroke, void 0, void 0), r312_HBar.m(r312_SB + r312_OX, r312_RightSB - r312_OX, r312_XH * 0.5, r421_stroke)));
            return void 0;
        }));
        r312_alias("grek/ThetaSymbol", 1012, "OBar");
        r312_alias("cyrl/Oe", 1256, "OBar");
        r312_alias("cyrl/oe", 1257, "oBar");
        r312_xn$derivecomposites$7Hrq("cyrl/OMonocular", 42600, "O", "innerDot");
        r312_xn$derivecomposites$7Hrq("cyrl/oMonocular", 42601, "o", "innerDotSmall");
        r312_xn$derivecomposites$7Hrq("cyrl/OBinocular", 42602, "O", "innerDoubleDot");
        r312_xn$derivecomposites$7Hrq("cyrl/oBinocular", 42603, "o", "innerDoubleDotSmall");
        r312_alias("bullsEye", 664, "cyrl/OMonocular");
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/OCross", 42650, new r312_xn$Capture$2Lrc8.GlyphProc(function (r427_currentGlyph) {
            var _r427_t0, _r427_t1;
            r427_currentGlyph.include(r312_MarkSet.capital());
            var r427_stroke = r312_AdviceStroke2(3, 3, r312_CAP);
            r427_currentGlyph.include(r312_OShape(r312_CAP, 0, r312_SB, r312_RightSB, r427_stroke, r312_ArchDepthA, r312_ArchDepthB));
            r427_currentGlyph.include(r312_intersection(r312_OShapeOutline.NoOvershoot(r312_CAP, 0, r312_SB, r312_RightSB, r427_stroke, r312_ArchDepthA, r312_ArchDepthB), r312_union(r312_HBar.m(r312_SB + r312_OX, r312_RightSB - r312_OX, r312_CAP * 0.5, r427_stroke), r312_VBar.m(r312_Middle, r312_O, r312_CAP - r312_O, Math.min(r427_stroke, r312_VSwToH(0.5 * (r312_RightSB - r312_SB - r312_HSwToV(2 * r427_stroke))))))));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/oCross", 42651, new r312_xn$Capture$2Lrc8.GlyphProc(function (r433_currentGlyph) {
            var _r433_t0, _r433_t1;
            r433_currentGlyph.include(r312_MarkSet.e());
            var r433_stroke = r312_AdviceStroke2(3, 3, r312_XH);
            r433_currentGlyph.include(r312_OShape(r312_XH, 0, r312_SB, r312_RightSB, r433_stroke, void 0, void 0));
            r433_currentGlyph.include(r312_intersection(r312_OShapeOutline.NoOvershoot(r312_XH, 0, r312_SB, r312_RightSB, r433_stroke, void 0, void 0), r312_union(r312_HBar.m(r312_SB + r312_OX, r312_RightSB - r312_OX, r312_XH * 0.5, r433_stroke), r312_VBar.m(r312_Middle, r312_O, r312_XH - r312_O, Math.min(r433_stroke, r312_VSwToH(0.5 * (r312_RightSB - r312_SB - r312_HSwToV(2 * r433_stroke))))))));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("romanThousandCD", 8576, new r312_xn$Capture$2Lrc8.GlyphProc(function (r439_currentGlyph) {
            var _r439_t0, _r439_t1;
            var r439_df = r439_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleMM, 3));
            r439_currentGlyph.include(r439_df.markSet.capital());
            var r439_dist = r439_df.rightSB - r439_df.leftSB;
            var r439_gap = Math.max(r439_dist / 4, r312_HSwToV(r439_df.mvs));
            var r439_ada = r312_ArchDepthA * r439_df.adws;
            var r439_adb = r312_ArchDepthB * r439_df.adws;
            r439_currentGlyph.include(r312_OShapeFlatTB(r312_CAP, 0, r439_df.leftSB, r439_df.rightSB, r439_df.mvs, r439_ada, r439_adb, r439_gap));
            r439_currentGlyph.include(r312_VBar.m(r439_df.middle, r439_df.mvs / 2, r312_CAP - r439_df.mvs / 2, r439_df.mvs));
            r439_currentGlyph.setBaseAnchor("trailing", r312_Middle, 0);
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("romanTenThousand", 8578, new r312_xn$Capture$2Lrc8.GlyphProc(function (r447_currentGlyph) {
            var _r447_t0, _r447_t1;
            var r447_df = r447_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleMM, 5));
            r447_currentGlyph.include(r447_df.markSet.capital());
            var r447_dist = r447_df.rightSB - r447_df.leftSB;
            var r447_gap = Math.max(r447_dist / 4, r312_HSwToV(r447_df.mvs));
            var r447_gapInner = Math.max(r447_dist / 8, r312_HSwToV(r447_df.mvs));
            var r447_ada = r312_ArchDepthA * r447_df.adws;
            var r447_adb = r312_ArchDepthB * r447_df.adws;
            var r447_innerDist = r447_dist - r312_HSwToV(5 * r447_df.mvs);
            var r447_arcXL = r447_df.leftSB + r447_innerDist * (1 / 4) + r312_HSwToV(1 * r447_df.mvs);
            var r447_arcXR = r447_df.leftSB + r447_innerDist * (3 / 4) + r312_HSwToV(4 * r447_df.mvs);
            var r447_heightGap = Math.min(r312_CAP / 5 + r447_df.mvs / 5, r447_innerDist / 4 + r447_df.mvs);
            var r447_heightInner = r312_CAP - 2 * r447_heightGap;
            var r447_smInner = r1_clamp(r447_df.mvs * 1.5, r447_heightInner / 2 - r312_TINY, r312_ArchDepth * r447_heightInner / r312_CAP);
            var r447_adaInner = r312_ArchDepthAOf(r447_smInner, r447_arcXR - r447_arcXL + r447_df.leftSB * 2) * r447_df.adws;
            var r447_adbInner = r312_ArchDepthBOf(r447_smInner, r447_arcXR - r447_arcXL + r447_df.leftSB * 2) * r447_df.adws;
            r447_currentGlyph.include(r312_OShapeFlatTB(r312_CAP, 0, r447_df.leftSB, r447_df.rightSB, r447_df.mvs, r447_ada, r447_adb, r447_gap));
            r447_currentGlyph.include(r312_OShapeFlatTB(r312_CAP - r447_heightGap, 0 + r447_heightGap, r447_arcXL, r447_arcXR, r447_df.mvs, r447_adaInner, r447_adbInner, r447_gapInner));
            r447_currentGlyph.include(r312_VBar.m(r447_df.middle, r447_df.mvs / 2, r312_CAP - r447_df.mvs / 2, r447_df.mvs));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("romanHundredThousand", 8584, new r312_xn$Capture$2Lrc8.GlyphProc(function (r455_currentGlyph) {
            var _r455_t0, _r455_t1;
            var r455_df = r455_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleMM, 7));
            r455_currentGlyph.include(r455_df.markSet.capital());
            var r455_dist = r455_df.rightSB - r455_df.leftSB;
            var r455_gap = Math.max(r455_dist / 4, r312_HSwToV(r455_df.mvs));
            var r455_gapInner1 = Math.max(r455_dist / 6, r312_HSwToV(r455_df.mvs));
            var r455_gapInner2 = Math.max(r455_dist / 12, r312_HSwToV(r455_df.mvs));
            var r455_ada = r312_ArchDepthA * r455_df.adws;
            var r455_adb = r312_ArchDepthB * r455_df.adws;
            var r455_innerDist = r455_dist - r312_HSwToV(7 * r455_df.mvs);
            var r455_arcXL1 = r455_df.leftSB + r455_innerDist * (1 / 6) + r312_HSwToV(1 * r455_df.mvs);
            var r455_arcXR1 = r455_df.leftSB + r455_innerDist * (5 / 6) + r312_HSwToV(6 * r455_df.mvs);
            var r455_arcXL2 = r455_df.leftSB + r455_innerDist * (2 / 6) + r312_HSwToV(2 * r455_df.mvs);
            var r455_arcXR2 = r455_df.leftSB + r455_innerDist * (4 / 6) + r312_HSwToV(5 * r455_df.mvs);
            var r455_heightGap = Math.min(r312_CAP / 7 + r455_df.mvs / 7, r455_innerDist / 6 + r455_df.mvs);
            var r455_heightInner1 = r312_CAP - 2 * r455_heightGap;
            var r455_heightInner2 = r312_CAP - 4 * r455_heightGap;
            var r455_smInner1 = r1_clamp(r455_df.mvs * 1.5, r455_heightInner1 / 2 - r312_TINY, r312_ArchDepth * (r455_heightInner1 / r312_CAP));
            var r455_adaInner1 = r312_ArchDepthAOf(r455_smInner1, r455_arcXR1 - r455_arcXL1 + r455_df.leftSB * 2) * r455_df.adws;
            var r455_adbInner1 = r312_ArchDepthBOf(r455_smInner1, r455_arcXR1 - r455_arcXL1 + r455_df.leftSB * 2) * r455_df.adws;
            var r455_smInner2 = r1_clamp(r455_df.mvs * 1.5, r455_heightInner2 / 2 - r312_TINY, r312_ArchDepth * (r455_heightInner2 / r312_CAP));
            var r455_adaInner2 = r312_ArchDepthAOf(r455_smInner2, r455_arcXR2 - r455_arcXL2 + r455_df.leftSB * 2) * r455_df.adws;
            var r455_adbInner2 = r312_ArchDepthBOf(r455_smInner2, r455_arcXR2 - r455_arcXL2 + r455_df.leftSB * 2) * r455_df.adws;
            r455_currentGlyph.include(r312_OShapeFlatTB(r312_CAP, 0, r455_df.leftSB, r455_df.rightSB, r455_df.mvs, r455_ada, r455_adb, r455_gap));
            r455_currentGlyph.include(r312_OShapeFlatTB(r312_CAP - r455_heightGap, 0 + r455_heightGap, r455_arcXL1, r455_arcXR1, r455_df.mvs, r455_adaInner1, r455_adbInner1, r455_gapInner1));
            r455_currentGlyph.include(r312_OShapeFlatTB(r312_CAP - 2 * r455_heightGap, 0 + 2 * r455_heightGap, r455_arcXL2, r455_arcXR2, r455_df.mvs, r455_adaInner2, r455_adbInner2, r455_gapInner2));
            r455_currentGlyph.include(r312_VBar.m(r455_df.middle, r455_df.mvs / 2, r312_CAP - r455_df.mvs / 2, r455_df.mvs));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("oTopHalf", 7446, new r312_xn$Capture$2Lrc8.GlyphProc(function (r464_currentGlyph) {
            var _r464_t0, _r464_t1;
            r464_currentGlyph.include(r312_MarkSet.e());
            r464_currentGlyph.include(r312_dispiro(r312_widths.rhs(), r312_flat(r312_SB + r312_OX, r312_XH / 2, r312_heading(r312_Upward)), r312_curl(r312_SB + r312_OX, r312_XH - Math.min(r312_SmallArchDepthA, r312_XH / 2 - r312_TINY)), r312_Arch.rhs(r312_XH), r312_flat(r312_RightSB - r312_OX, r312_XH - Math.min(r312_SmallArchDepthB, r312_XH / 2 - r312_TINY)), r312_curl(r312_RightSB - r312_OX, r312_XH / 2, r312_heading(r312_Downward))));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("oBottomHalf", 7447, new r312_xn$Capture$2Lrc8.GlyphProc(function (r469_currentGlyph) {
            var _r469_t0, _r469_t1;
            r469_currentGlyph.include(r312_MarkSet.e());
            r469_currentGlyph.include(r312_dispiro(r312_widths.lhs(), r312_flat(r312_SB + r312_OX, r312_XH / 2, r312_heading(r312_Downward)), r312_curl(r312_SB + r312_OX, Math.min(r312_SmallArchDepthB, r312_XH / 2 - r312_TINY)), r312_Arch.lhs(0), r312_flat(r312_RightSB - r312_OX, Math.min(r312_SmallArchDepthA, r312_XH / 2 - r312_TINY)), r312_curl(r312_RightSB - r312_OX, r312_XH / 2, r312_heading(r312_Upward))));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("oWithLightCentralizationStroke", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r474_currentGlyph) {
            var _r474_t0, _r474_t1;
            r474_currentGlyph.include(r312_MarkSet.p());
            r474_currentGlyph.include(r312_xn$referglyph$1aao("o"));
            var r474_fine = r312_AdviceStroke(4);
            var r474_outStand = r312_SB * 0.75 + r474_fine * 0.25;
            var r474_outStandY = r312_SmallArchDepthB / 2 - r312_Descender * 0.6;
            var r474_yTurn = r312_SmallArchDepthB / 2;
            r474_currentGlyph.include(r312_difference(r312_dispiro(r312_widths.lhs(r474_fine), r312_corner(r312_Middle, r474_yTurn + r474_outStandY), r312_corner(r312_SB - r474_outStand, r474_yTurn - r474_outStandY)), r312_OShapeOutline.NoOvershoot(r312_XH, 0, r312_SB, r312_RightSB, void 0, void 0, void 0)));
            return void 0;
        }));
        r312_CreateAccentedComposition("OAcute", 211, "O", "acuteAbove");
        r312_CreateAccentedComposition("oAcute", 243, "o", "acuteAbove");
        r312_CreateAccentedComposition("OAcute.PLK", null, "O", "kreskaAbove");
        r312_CreateAccentedComposition("oAcute.PLK", null, "o", "kreskaAbove");
        r312_CreateAccentedComposition("oDieresis", 246, "o", "dieresisAbove");
        r312_xn$GlyphSaveSink$2Lrc4b.save("numeroRightHalf", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r480_currentGlyph) {
            var _r480_t0, _r480_t1;
            var r480_obot = Math.max(r312_CAP * 0.1, r312_OverlayStroke + r312_HalfStroke);
            r480_currentGlyph.include(r312_OShape(r312_XH, r480_obot, r312_SB, r312_RightSB, r312_AdviceStroke2(2, 2, r312_XH - r480_obot), void 0, void 0));
            r480_currentGlyph.include(r312_HBar.b(r312_SB, r312_RightSB, 0, r312_OverlayStroke));
            return void 0;
        }));
        r312_CreateAccentedComposition("oSbRsbUnderlineBelow", null, "o", "sbRsbUnderlineBelow");
        r312_xn$GlyphSaveSink$2Lrc4b.save("oLowRingInside", 11386, new r312_xn$Capture$2Lrc8.GlyphProc(function (r485_currentGlyph) {
            var _r485_t1, _r485_t2;
            r485_currentGlyph.include(r312_xn$referglyph$1aao("o"), r312_AS_BASE);
            var _r485_t0 = r312_RingDims();
            var r485_radiusIn = _r485_t0.radiusIn;
            var r485_radiusOut = _r485_t0.radiusOut;
            r485_currentGlyph.include(r312_RingShape(r312_Middle, r312_O + r312_Stroke + r485_radiusIn));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("OPolish", 42944, new r312_xn$Capture$2Lrc8.GlyphProc(function (r490_currentGlyph) {
            var _r490_t0, _r490_t1;
            r490_currentGlyph.include(r312_xn$referglyph$1aao("O"), r312_AS_BASE);
            r490_currentGlyph.include(r312_MarkSet.capital());
            r490_currentGlyph.include(r312_ExtendAboveBaseAnchors(r312_CAP + r312_LongVJut - r312_QuarterStroke));
            r490_currentGlyph.include(r312_ExtendBelowBaseAnchors(0 - r312_LongVJut + r312_QuarterStroke));
            r490_currentGlyph.include(r312_VBar.m(r312_Middle, r312_CAP, r312_CAP + r312_LongVJut - r312_QuarterStroke, r312_VJutStroke));
            r490_currentGlyph.include(r312_VBar.m(r312_Middle, 0 - r312_LongVJut + r312_QuarterStroke, 0, r312_VJutStroke));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("oPolish", 42945, new r312_xn$Capture$2Lrc8.GlyphProc(function (r499_currentGlyph) {
            var _r499_t0, _r499_t1;
            r499_currentGlyph.include(r312_xn$referglyph$1aao("o"), r312_AS_BASE);
            r499_currentGlyph.include(r312_MarkSet.e());
            r499_currentGlyph.include(r312_ExtendAboveBaseAnchors(r312_XH + r312_LongVJut - r312_QuarterStroke));
            r499_currentGlyph.include(r312_ExtendBelowBaseAnchors(0 - r312_LongVJut + r312_QuarterStroke));
            r499_currentGlyph.include(r312_VBar.m(r312_Middle, r312_XH, r312_XH + r312_LongVJut - r312_QuarterStroke, r312_VJutStroke));
            r499_currentGlyph.include(r312_VBar.m(r312_Middle, 0 - r312_LongVJut + r312_QuarterStroke, 0, r312_VJutStroke));
            return void 0;
        }));
        r312_xn$derivecomposites$7Hrq("oRetroflexHook", 122651, "o", r312_RetroflexHook.l(new r312_xn$NamedParameterPair$2Lrc9b("x", r1_mix(r312_Arch["adjust-x"].bot(r312_Middle), r312_SB, 0.75)), new r312_xn$NamedParameterPair$2Lrc9b("y", 0), new r312_xn$NamedParameterPair$2Lrc9b("yAttach", r1_mix(r312_O, r312_SmallArchDepthB, r312_archv.yFromX(0.75)))));
        var r312_OFlourishShape = function (r509_sign, r509_df, r509_top, r509__ada, r509__adb) {
            var _r509_leti0, _r509_t1, _r509_t2, _r509_t3, _r509_t4, _r509_t5, _r509_t6, _r509_tag7;
            var r509_ada = r1_fallback(r509__ada, r312_SmallArchDepthA) * 0.75 * r509_df.adws;
            var r509_adb = r1_fallback(r509__adb, r312_SmallArchDepthB) * 0.75 * r509_df.adws;
            var r509_stroke = r509_df.adviceThinnerStroke2(2, 3, r312_XH - 0, 0.75);
            var r509_fine = r509_df.adviceThinnerStroke2(3, 3, r312_XH - 0, 0.75);
            var r509_gap = 0.375 * (r509_df.rightSB - r509_df.leftSB) - r312_HSwToV(0.25 * r509_stroke) + r509_stroke / 16;
            var r509_subDf = r312_DivFrame(Math.min((r509_df.width - r509_gap) / r312_Width, 0.75 * r509_df.adws), 2);
            var r509_hd = r312_FlatHookDepth(r509_df);
            var r509_yBarBottom = r509_top - r1_mix(r312_XH, 0, r312_DesignParameters.eBarPos) - r509_fine / 2;
            if (r509_sign >= 0) return r312_union(r312_intersection(r312_MaskRight(r509_subDf.rightSB), r312_dispiro(r312_widths.lhs(r509_stroke), r312_flat(r509_df.rightSB + r312_HSwToV(0.25 * r509_stroke), r509_yBarBottom + r509_fine - r312_Hook, r312_heading(r312_Upward)), r312_curl(r509_df.rightSB + r312_HSwToV(0.25 * r509_stroke), r509_yBarBottom + r509_fine - Math.max(r312_Hook, r509_hd.y) + 0.25 * r509_stroke, r312_heading(r312_Upward)), r312_arcvh(), r312_flat(Math.max(r509_df.rightSB - r509_hd.x + r312_HSwToV(0.5 * r509_stroke), r509_subDf.rightSB), r509_yBarBottom + r509_fine), r312_curl(r509_subDf.middle, r509_yBarBottom + r509_fine))), r312_dispiro(r312_widths.rhs(r509_fine), r312_flat(r509_subDf.rightSB, r509_yBarBottom, r312_heading(r312_Leftward)), r312_curl(r312_Arch["adjust-x"].bot(r509_subDf.middle, new r312_xn$NamedParameterPair$2Lrc9b("sw", r509_subDf.mvs)), r509_yBarBottom), r312_g4(r509_subDf.leftSB + r312_OX, r312_YSmoothMidL(r509_top, r509_yBarBottom, r509_ada, r509_adb)), r312_Arch.rhs(r509_top, new r312_xn$NamedParameterPair$2Lrc9b("sw", r509_stroke), new r312_xn$NamedParameterPair$2Lrc9b("swBefore", r509_fine)), r312_flatside.rd(r509_subDf.rightSB, 0, r509_top, r509_ada, r509_adb), r312_Arch.rhs(0, new r312_xn$NamedParameterPair$2Lrc9b("sw", r509_fine), new r312_xn$NamedParameterPair$2Lrc9b("swBefore", r509_stroke)), r312_flat(r509_subDf.leftSB + r312_OX, 0 + r312_ArchDepthBClamped(r509_top, 0, r509_ada, r509_adb)), r312_curl(r509_subDf.leftSB + r312_OX, r312_YSmoothMidL(r509_top, r509_yBarBottom, r509_ada, r509_adb), r312_heading(r312_Upward)))); else if (true) {
                _r509_t5 = r509_df.width - r509_subDf.width;
                return (function (_r509_leti0) {
                    var r510_shift = _r509_leti0;
                    return r312_union(r312_intersection(r312_MaskLeft(r509_subDf.leftSB + r510_shift), r312_dispiro(r312_widths.rhs(r509_stroke), r312_flat(r509_df.leftSB - r312_HSwToV(0.25 * r509_stroke), r509_yBarBottom + r509_fine - r312_Hook, r312_heading(r312_Upward)), r312_curl(r509_df.leftSB - r312_HSwToV(0.25 * r509_stroke), r509_yBarBottom + r509_fine - Math.max(r312_Hook, r509_hd.y) + 0.25 * r509_stroke, r312_heading(r312_Upward)), r312_arcvh(), r312_flat(Math.min(r509_df.leftSB + r509_hd.x - r312_HSwToV(0.5 * r509_stroke), r509_subDf.leftSB + r510_shift), r509_yBarBottom + r509_fine), r312_curl(r509_subDf.middle + r510_shift, r509_yBarBottom + r509_fine))), r312_xn$withtransform$5sIl(r312_Translate(r510_shift, 0), r312_dispiro(r312_widths.lhs(r509_fine), r312_flat(r509_subDf.leftSB, r509_yBarBottom, r312_heading(r312_Rightward)), r312_curl(r312_Arch["adjust-x"].bot(r509_subDf.middle, new r312_xn$NamedParameterPair$2Lrc9b("sw", r509_subDf.mvs)), r509_yBarBottom), r312_g4(r509_subDf.rightSB - r312_OX, r312_YSmoothMidR(r509_top, r509_yBarBottom, r509_ada, r509_adb)), r312_Arch.lhs(r509_top, new r312_xn$NamedParameterPair$2Lrc9b("sw", r509_stroke), new r312_xn$NamedParameterPair$2Lrc9b("swBefore", r509_fine)), r312_flatside.ld(r509_subDf.leftSB, 0, r509_top, r509_ada, r509_adb), r312_Arch.lhs(0, new r312_xn$NamedParameterPair$2Lrc9b("sw", r509_fine), new r312_xn$NamedParameterPair$2Lrc9b("swBefore", r509_stroke)), r312_flat(r509_subDf.rightSB - r312_OX, 0 + r312_ArchDepthAClamped(r509_top, 0, r509_ada, r509_adb)), r312_curl(r509_subDf.rightSB - r312_OX, r312_YSmoothMidR(r509_top, r509_yBarBottom, r509_ada, r509_adb), r312_heading(r312_Upward)))));
                })(_r509_t5);
            } else return void 0;
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r523_currentGlyph) {
            var _r523_t0, _r523_t1;
            var r523_df = r523_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
            r523_currentGlyph.include(r523_df.markSet.capital());
            r312_xn$GlyphSaveSink$2Lrc4b.save("OFlourish.upright", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r523_currentGlyph, r312_OFlourishShape(+1, r523_df, r312_CAP, r312_ArchDepthA, r312_ArchDepthB)));
            r312_xn$GlyphSaveSink$2Lrc4b.save("OFlourish.italic", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r523_currentGlyph, r312_OFlourishShape(-1, r523_df, r312_CAP, r312_ArchDepthA, r312_ArchDepthB)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r532_currentGlyph) {
            var _r532_t0, _r532_t1;
            var r532_df = r532_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
            r532_currentGlyph.include(r532_df.markSet.e());
            r312_xn$GlyphSaveSink$2Lrc4b.save("oFlourish.upright", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r532_currentGlyph, r312_OFlourishShape(+1, r532_df, r312_XH, void 0, void 0)));
            r312_xn$GlyphSaveSink$2Lrc4b.save("oFlourish.italic", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r532_currentGlyph, r312_OFlourishShape(-1, r532_df, r312_XH, void 0, void 0)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("mathbb/O", 120134, new r312_xn$Capture$2Lrc8.GlyphProc(function (r541_currentGlyph) {
            var _r541_t0, _r541_t1;
            r541_currentGlyph.include(r312_MarkSet.capital());
            r541_currentGlyph.include(r312_OShape(r312_CAP, 0, r312_SB, r312_RightSB, r312_BBS, r312_ArchDepthA, r312_ArchDepthB));
            r541_currentGlyph.include(r312_intersection(r312_OShapeOutline.NoOvershoot(r312_CAP, 0, r312_SB, r312_RightSB, r312_BBS, r312_ArchDepthA, r312_ArchDepthB), r312_union(r312_VBar.l(r312_SB + r312_OX + r312_BBD, 0, r312_CAP, r312_BBS), r312_VBar.r(r312_RightSB - r312_OX - r312_BBD, 0, r312_CAP, r312_BBS))));
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("mathbb/o", 120160, new r312_xn$Capture$2Lrc8.GlyphProc(function (r547_currentGlyph) {
            var _r547_t0, _r547_t1;
            r547_currentGlyph.include(r312_MarkSet.e());
            r547_currentGlyph.include(r312_OShape(r312_XH, 0, r312_SB, r312_RightSB, r312_BBS));
            r547_currentGlyph.include(r312_intersection(r312_OShapeOutline.NoOvershoot(r312_XH, 0, r312_SB, r312_RightSB, r312_BBS), r312_union(r312_VBar.l(r312_SB + r312_OX + r312_BBD, 0, r312_XH, r312_BBS), r312_VBar.r(r312_RightSB - r312_OX - r312_BBD, 0, r312_XH, r312_BBS))));
            return void 0;
        }));
    });
    return void 0;
});


