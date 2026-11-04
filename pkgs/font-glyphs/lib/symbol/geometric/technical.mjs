"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "../../meta/aesthetics.mjs";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_DesignParameters = _r1_t9.DesignParameters;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Geometric-Technical", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t5, _r313_t6, _r313_t7, _r313_tag8;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Upward = _r313_t1.Upward;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_AdviceStrokeInSpace = _r313_t1.AdviceStrokeInSpace;
        var r313_AdviceStroke2 = _r313_t1.AdviceStroke2;
        var r313_WideWidth1 = _r313_t1.WideWidth1;
        var r313_GeometryStroke = _r313_t1.GeometryStroke;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_xn$disablecontrast$3qIs = _r313_t2["disable-contrast"];
        var r313_heading = _r313_t2.heading;
        var r313_archv = _r313_t2.archv;
        var r313_arcvh = _r313_t2.arcvh;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_intersection = _r313_t4.intersection;
        return (function () {
            var r316_FMosaicWide, r316_MosaicNameSuffix, r316_MosaicWidth, r316_MosaicWidthScalar, _r316_t3, _r316_t5, _r316_t6, _r316_tag7;
            var r316_WidthKinds = [[0, ".NWID", r313_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r313_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r316_t0 = r316_WidthKinds;
            var _r316_t1 = _r316_t0.length;
            var _r316_t2 = 0;
            var _r316_t4 = _r316_t2 < _r316_t1;
            while (_r316_t4) {
                _r316_t3 = _r316_t0[_r316_t2];
                r316_FMosaicWide = _r316_t3[0];
                r316_MosaicNameSuffix = _r316_t3[1];
                r316_MosaicWidth = _r316_t3[2];
                r316_MosaicWidthScalar = _r316_t3[3];
                (function () {
                    var _r319_t5, _r319_tag6, _r319_t7, _r319_tag8;
                    var r319_MosaicDesiredWidth = r313_WideWidth1;
                    var r319_MosaicMiddle = r316_MosaicWidth / 2;
                    var r319_MosaicUnitWidth = r316_MosaicWidth / r316_MosaicWidthScalar;
                    var r319_MangleUnicode = function (r320_unicode, r320__desiredOverride) {
                        var _r320_t0, _r320_t1;
                        return r316_MosaicWidth === (r320__desiredOverride || r319_MosaicDesiredWidth) ? r320_unicode : void 0;
                    };
                    var r319_MangleName = function (r321_name) {
                        var _r321_t0, _r321_t1;
                        return r321_name + r316_MosaicNameSuffix;
                    };
                    var _r319_t0 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
                    var r319_MaskLeft = _r319_t0.MaskLeft;
                    var r319_MaskRight = _r319_t0.MaskRight;
                    var r319_HBar = _r319_t0.HBar;
                    var r319_VBar = _r319_t0.VBar;
                    var r319_xn$sharpcorner$1aao = _r319_t0["sharp-corner"];
                    var _r319_t1 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var _r319_t2 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Geometric-Shared"].resolve();
                    var r319_GeometricDim = _r319_t2.GeometricDim;
                    var r319_GeometricSizes = _r319_t2.GeometricSizes;
                    var _r319_t3 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Shared-Symbol-Shapes"].resolve();
                    var r319_TriangleShape = _r319_t3.TriangleShape;
                    var r319_Polyline = _r319_t3.Polyline;
                    var _r319_t4 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Arrow-Shared"].resolve();
                    var r319_ArrowShape = _r319_t4.ArrowShape;
                    var r319_ArrowHead = _r319_t4.ArrowHead;
                    var r319_TrigArrowShape = _r319_t4.TrigArrowShape;
                    var r319_Geom = r319_GeometricDim(r319_MosaicUnitWidth, r316_MosaicWidth);
                    var r319_Size = r319_GeometricSizes(r319_Geom);
                    var r319_fineGeometryStroke = r313_AdviceStroke2(4, 4, r319_Geom.Size);
                    (function () {
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("straightness"), r319_MangleUnicode(9188), new r313_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
                            var _r331_t0, _r331_t1;
                            r331_currentGlyph.setWidth(r319_Geom.Width);
                            r331_currentGlyph.include(r319_HBar.m(r319_Geom.Left, r319_Geom.Right, r319_Geom.MidY, r313_GeometryStroke));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("symmetry"), r319_MangleUnicode(9007), new r313_xn$Capture$2Lrc8.GlyphProc(function (r336_currentGlyph) {
                            var _r336_t0, _r336_t1;
                            r336_currentGlyph.setWidth(r319_Geom.Width);
                            var r336_yOffset = r319_Geom.Size * 0.4;
                            var r336_xShrink = r319_Geom.Size * 0.25;
                            r336_currentGlyph.include(r319_HBar.m(r319_Geom.Left, r319_Geom.Right, r319_Geom.MidY, r313_GeometryStroke));
                            r336_currentGlyph.include(r319_HBar.b(r319_Geom.Left + r336_xShrink, r319_Geom.Right - r336_xShrink, r319_Geom.MidY + r336_yOffset, r313_GeometryStroke));
                            r336_currentGlyph.include(r319_HBar.t(r319_Geom.Left + r336_xShrink, r319_Geom.Right - r336_xShrink, r319_Geom.MidY - r336_yOffset, r313_GeometryStroke));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("totalRunoff"), r319_MangleUnicode(9008), new r313_xn$Capture$2Lrc8.GlyphProc(function (r343_currentGlyph) {
                            var _r343_t0, _r343_t1;
                            r343_currentGlyph.setWidth(r319_Geom.Width);
                            var r343_headSize = r319_Geom.Size * 0.375 / Math.SQRT1_2;
                            var r343_offset = r319_Geom.Size * 0.4;
                            var r343_x0 = r319_Geom.Left;
                            var r343_x1 = r319_Geom.Left + r343_offset;
                            var r343_x2 = r319_Geom.Right - r343_offset - r343_headSize * 0.35;
                            var r343_x3 = r319_Geom.Right - r343_headSize * 0.35;
                            var r343_vsw = r313_HSwToV(0.5 * r313_GeometryStroke);
                            r343_currentGlyph.include(r313_dispiro(r313_xn$disablecontrast$3qIs(), r313_flat(r1_mix(r343_x0, r343_x1, 0.75) + r343_vsw, r1_mix(r319_Geom.Bot, r319_Geom.Top, 0.75), r313_widths.center(r313_GeometryStroke)), r319_xn$sharpcorner$1aao(r343_x0 + r343_vsw, r319_Geom.Bot, new r313_xn$NamedParameterPair$2Lrc9b("contrast", 1)), r313_corner(r319_Geom.MidX, r319_Geom.Bot, r313_widths.lhs(r313_GeometryStroke)), r319_xn$sharpcorner$1aao(r343_x2 - r343_vsw, r319_Geom.Bot, new r313_xn$NamedParameterPair$2Lrc9b("contrast", 1)), r313_curl(r1_mix(r343_x2, r343_x3, 0.75) - r343_vsw, r1_mix(r319_Geom.Bot, r319_Geom.Top, 0.75), r313_widths.center(r313_GeometryStroke))));
                            r343_currentGlyph.include(r319_TrigArrowShape(r1_mix(r343_x0, r343_x1, 0.5) + r343_vsw, r319_Geom.MidY, r343_x1 + r343_vsw, r319_Geom.Top, r343_headSize, r313_GeometryStroke / 2));
                            r343_currentGlyph.include(r319_TrigArrowShape(r1_mix(r343_x2, r343_x3, 0.5) - r343_vsw, r319_Geom.MidY, r343_x3 - r343_vsw, r319_Geom.Top, r343_headSize, r313_GeometryStroke / 2));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("conicalTaper"), r319_MangleUnicode(9010), new r313_xn$Capture$2Lrc8.GlyphProc(function (r352_currentGlyph) {
                            var _r352_t0, _r352_t1;
                            r352_currentGlyph.setWidth(r319_Geom.Width);
                            r352_currentGlyph.include(r319_TriangleShape(r319_Geom.Left, r319_Geom.MidY - r319_Geom.Size * 0.8, r319_Geom.Left, r319_Geom.MidY + r319_Geom.Size * 0.8, r319_Geom.Right, r319_Geom.MidY, r319_fineGeometryStroke));
                            r352_currentGlyph.include(r319_HBar.m(r1_mix(0, r319_Geom.Left, 0.5), r1_mix(r319_Geom.Right, r319_Geom.Width, 0.5), r319_Geom.MidY, r313_GeometryStroke));
                            return void 0;
                        }));
                        return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("slope"), r319_MangleUnicode(9011), new r313_xn$Capture$2Lrc8.GlyphProc(function (r358_currentGlyph) {
                            var _r358_t0, _r358_t1;
                            r358_currentGlyph.setWidth(r319_Geom.Width);
                            r358_currentGlyph.include(r319_TriangleShape(r319_Geom.Left, r319_Geom.Bot, r319_Geom.Left, r319_Geom.MidY, r319_Geom.Right, r319_Geom.Bot, r319_fineGeometryStroke));
                            return void 0;
                        }));
                    })();
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("electricArrow"), r319_MangleUnicode(8961), new r313_xn$Capture$2Lrc8.GlyphProc(function (r363_currentGlyph) {
                        var _r363_t0, _r363_t1;
                        r363_currentGlyph.setWidth(r319_Geom.Width);
                        var r363_amp = r319_Geom.Size / 2;
                        var r363_amp2 = r319_Geom.Size / 4;
                        r363_currentGlyph.include(r313_intersection(r319_MaskRight(r319_Geom.Left), r319_MaskLeft(r319_Geom.Right), r313_dispiro(r313_corner(r319_Geom.MidX - r319_Geom.Size * 2, r319_Geom.MidY + r363_amp2 * 4, r313_widths.center(r313_GeometryStroke)), r319_xn$sharpcorner$1aao(r319_Geom.MidX, r319_Geom.MidY - r363_amp), r313_corner(r319_Geom.MidX, r319_Geom.MidY, r313_widths.center.heading(r313_GeometryStroke, r313_Upward)), r319_xn$sharpcorner$1aao(r319_Geom.MidX, r319_Geom.MidY + r363_amp), r313_corner(r319_Geom.MidX + r319_Geom.Size * 2, r319_Geom.MidY - r363_amp2 * 4, r313_widths.center(r313_GeometryStroke)))));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("viewdataSquare"), r319_MangleUnicode(8983), new r313_xn$Capture$2Lrc8.GlyphProc(function (r368_currentGlyph) {
                        var _r368_t0, _r368_t1;
                        r368_currentGlyph.setWidth(r319_Geom.Width);
                        var r368_shrink = r319_Geom.Size * 2 * 0.13;
                        r368_currentGlyph.include(r319_HBar.t(r319_Geom.Left, r319_Geom.Right, r319_Geom.Top - r368_shrink, r313_GeometryStroke));
                        r368_currentGlyph.include(r319_HBar.b(r319_Geom.Left, r319_Geom.Right, r319_Geom.Bot + r368_shrink, r313_GeometryStroke));
                        r368_currentGlyph.include(r319_VBar.l(r319_Geom.Left + r368_shrink, r319_Geom.Bot, r319_Geom.Top, r313_GeometryStroke));
                        r368_currentGlyph.include(r319_VBar.r(r319_Geom.Right - r368_shrink, r319_Geom.Bot, r319_Geom.Top, r313_GeometryStroke));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("loopedSquare"), r319_MangleUnicode(8984), new r313_xn$Capture$2Lrc8.GlyphProc(function (r376_currentGlyph) {
                        var _r376_t0, _r376_t1, _r376_t2, _r376_t3, _r376_t4, _r376_t5, _r376_t6, _r376_t7, _r376_t8, _r376_t9, _r376_t10, _r376_t11, _r376_t12, _r376_t13;
                        r376_currentGlyph.setWidth(r319_Geom.Width);
                        var r376_stroke = r313_AdviceStrokeInSpace(r319_Geom.Size * 2, 6);
                        var r376_gap = (r319_Geom.Size * 2 - r313_HSwToV(r376_stroke * 4)) / 6;
                        r376_currentGlyph.include((_r376_t0 = r319_Geom.MidY + r376_gap, _r376_t2 = r319_Geom.MidX + r376_gap, _r376_t3 = r319_Geom.Right, _r376_t1 = r1_mix(_r376_t2, _r376_t3, 0.5), _r376_t5 = r319_Geom.Top, _r376_t4 = r1_mix(_r376_t5, _r376_t0, 0.5), _r376_t8 = r319_Geom.MidY - r376_gap, _r376_t7 = r319_Geom.Bot, _r376_t6 = r1_mix(_r376_t8, _r376_t7, 0.5), _r376_t10 = r319_Geom.Left, _r376_t11 = r319_Geom.MidX - r376_gap, _r376_t9 = r1_mix(_r376_t10, _r376_t11, 0.5), r313_dispiro(r313_widths.lhs(r376_stroke), r313_flat(r319_Geom.MidX, _r376_t0), r313_curl(_r376_t1, _r376_t0), r313_archv(4), r313_g4.up.mid(_r376_t3, _r376_t4), r313_arcvh(4), r313_g4.left.mid(_r376_t1, _r376_t5), r313_archv(4), r313_flat(_r376_t2, _r376_t4), r313_curl(_r376_t2, _r376_t6), r313_arcvh(4), r313_g4.right.mid(_r376_t1, _r376_t7), r313_archv(4), r313_g4.up.mid(_r376_t3, _r376_t6), r313_arcvh(4), r313_flat(_r376_t1, _r376_t8), r313_curl(_r376_t9, _r376_t8), r313_archv(4), r313_g4.down.mid(_r376_t10, _r376_t6), r313_arcvh(4), r313_g4.right.mid(_r376_t9, _r376_t7), r313_archv(4), r313_flat(_r376_t11, _r376_t6), r313_curl(_r376_t11, _r376_t4), r313_arcvh(4), r313_g4.left.mid(_r376_t9, _r376_t5), r313_archv(4), r313_g4.down.mid(_r376_t10, _r376_t4), r313_arcvh(4), r313_flat(_r376_t9, _r376_t0), r313_curl(r319_Geom.MidX, _r376_t0))));
                        return void 0;
                    }));
                    return (function () {
                        var r381_topLine = r319_Geom.MidY + r319_Geom.Size / 1.5;
                        var r381_botLine = r319_Geom.MidY - r319_Geom.Size / 1.5;
                        var r381_topLineC = r381_topLine - r313_GeometryStroke / 2;
                        var r381_botLineC = r381_botLine + r313_GeometryStroke / 2;
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("arrowHeadUpBetweenBars"), r319_MangleUnicode(8996), new r313_xn$Capture$2Lrc8.GlyphProc(function (r384_currentGlyph) {
                            var _r384_t0, _r384_t1;
                            r384_currentGlyph.setWidth(r316_MosaicWidth);
                            r384_currentGlyph.include(r319_ArrowHead(r319_Geom.MidX, r319_Geom.Bot, r319_Geom.MidX, r381_topLine));
                            r384_currentGlyph.include(r319_HBar.t(r319_Geom.Left, r319_Geom.MidX - r319_Geom.Size / 3, r381_topLine, r313_GeometryStroke));
                            r384_currentGlyph.include(r319_HBar.t(r319_Geom.MidX + r319_Geom.Size / 3, r319_Geom.Right, r381_topLine, r313_GeometryStroke));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("optionKey"), r319_MangleUnicode(8997), new r313_xn$Capture$2Lrc8.GlyphProc(function (r391_currentGlyph) {
                            var _r391_t0, _r391_t1;
                            r391_currentGlyph.setWidth(r319_Geom.Width);
                            r391_currentGlyph.include(r313_dispiro(r319_Polyline(r313_widths.center(r313_GeometryStroke), new r313_xn$NamedParameterPair$2Lrc9b("points", [[r319_Geom.Left, r381_topLineC], [r319_Geom.MidX - r319_Geom.Size / 3, r381_topLineC], [r319_Geom.MidX + r319_Geom.Size / 3, r381_botLineC], [r319_Geom.Right, r381_botLineC]]), new r313_xn$NamedParameterPair$2Lrc9b("startAf", r313_widths.center.heading(r313_GeometryStroke, r313_Rightward)), new r313_xn$NamedParameterPair$2Lrc9b("endAf", r313_widths.center.heading(r313_GeometryStroke, r313_Rightward)))));
                            r391_currentGlyph.include(r319_HBar.t(r319_Geom.MidX + r319_Geom.Size / 3, r319_Geom.Right, r381_topLine, r313_GeometryStroke));
                            return void 0;
                        }));
                        return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("alternateKey"), r319_MangleUnicode(9095), new r313_xn$Capture$2Lrc8.GlyphProc(function (r400_currentGlyph) {
                            var _r400_t0, _r400_t1;
                            r400_currentGlyph.setWidth(r319_Geom.Width);
                            r400_currentGlyph.include(r313_dispiro(r319_Polyline(r313_widths.center(r313_GeometryStroke), new r313_xn$NamedParameterPair$2Lrc9b("points", [[r319_Geom.Left, r381_botLineC], [r319_Geom.MidX - r319_Geom.Size / 3, r381_botLineC], [r319_Geom.MidX + r319_Geom.Size / 3, r381_topLineC], [r319_Geom.Right - r319_Geom.Size / 6, r381_topLineC]]), new r313_xn$NamedParameterPair$2Lrc9b("startAf", r313_widths.center.heading(r313_GeometryStroke, r313_Rightward)), new r313_xn$NamedParameterPair$2Lrc9b("endAf", r313_widths.center.heading(r313_GeometryStroke, r313_Rightward)))));
                            r400_currentGlyph.include(r319_ArrowShape(r319_Geom.Right - r319_Geom.Size / 6, r381_topLineC, r319_Geom.Right + r313_GeometryStroke / 2, r381_topLineC, r313_GeometryStroke / 2 + r319_Geom.Size / 3));
                            r400_currentGlyph.include(r319_HBar.b(r319_Geom.MidX + r319_Geom.Size / 3, r319_Geom.Right, r381_botLine, r313_GeometryStroke));
                            return void 0;
                        }));
                    })();
                })();
                _r316_t5 = _r316_t2 = _r316_t2 + 1;
                _r316_t4 = _r316_t2 < _r316_t1;
            }
            return _r316_t5;
        })();
    });
    return void 0;
});


