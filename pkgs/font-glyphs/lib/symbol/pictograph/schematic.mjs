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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Pictograph-Schematic", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t5, _r312_t6, _r312_t7, _r312_tag8;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_AS_BASE = _r312_t0.AS_BASE;
        var r312_ALSO_METRICS = _r312_t0.ALSO_METRICS;
        var r312_fontMetrics = _r312_t0.fontMetrics;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_ApparentTranslate = _r312_t1.ApparentTranslate;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_OX = _r312_t1.OX;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_WideWidth4 = _r312_t1.WideWidth4;
        var r312_StrokeWidthBlend = _r312_t1.StrokeWidthBlend;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_corner = _r312_t2.corner;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_close = _r312_t2.close;
        var r312_end = _r312_t2.end;
        var r312_straight = _r312_t2.straight;
        var r312_widths = _r312_t2.widths;
        var r312_quadControls = _r312_t2.quadControls;
        var r312_archv = _r312_t2.archv;
        var r312_arcvh = _r312_t2.arcvh;
        var r312_dispiro = _r312_t2.dispiro;
        var r312_xn$spirooutline$1aao = _r312_t2["spiro-outline"];
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var r312_intersection = _r312_t4.intersection;
        var r312_difference = _r312_t4.difference;
        return (function () {
            var r315_FMosaicWide, r315_MosaicNameSuffix, r315_MosaicWidth, r315_MosaicWidthScalar, _r315_t3, _r315_t5, _r315_t6, _r315_tag7;
            var r315_WidthKinds = [[0, ".NWID", r312_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r312_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r315_t0 = r315_WidthKinds;
            var _r315_t1 = _r315_t0.length;
            var _r315_t2 = 0;
            var _r315_t4 = _r315_t2 < _r315_t1;
            while (_r315_t4) {
                _r315_t3 = _r315_t0[_r315_t2];
                r315_FMosaicWide = _r315_t3[0];
                r315_MosaicNameSuffix = _r315_t3[1];
                r315_MosaicWidth = _r315_t3[2];
                r315_MosaicWidthScalar = _r315_t3[3];
                (function () {
                    var _r318_t4, _r318_tag5, _r318_t6, _r318_tag7, _r318_t8, _r318_tag9, _r318_t10, _r318_tag11, _r318_t12, _r318_tag13, _r318_t14, _r318_tag15, _r318_t16, _r318_tag17, _r318_t18, _r318_tag19, _r318_t20, _r318_tag21, _r318_t22, _r318_tag23, _r318_t24, _r318_tag25, _r318_t26, _r318_tag27, _r318_t28, _r318_tag29, _r318_t30, _r318_tag31, _r318_t32, _r318_tag33;
                    var r318_MosaicDesiredWidth = r312_WideWidth4;
                    var r318_MosaicMiddle = r315_MosaicWidth / 2;
                    var r318_MosaicUnitWidth = r315_MosaicWidth / r315_MosaicWidthScalar;
                    var r318_MangleUnicode = function (r319_unicode, r319__desiredOverride) {
                        var _r319_t0, _r319_t1;
                        return r315_MosaicWidth === (r319__desiredOverride || r318_MosaicDesiredWidth) ? r319_unicode : void 0;
                    };
                    var r318_MangleName = function (r320_name) {
                        var _r320_t0, _r320_t1;
                        return r320_name + r315_MosaicNameSuffix;
                    };
                    var _r318_t0 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
                    var r318_Rect = _r318_t0.Rect;
                    var r318_MaskAbove = _r318_t0.MaskAbove;
                    var r318_MaskBelow = _r318_t0.MaskBelow;
                    var r318_MaskAboveLine = _r318_t0.MaskAboveLine;
                    var r318_MaskBelowLine = _r318_t0.MaskBelowLine;
                    var r318_MaskLeftLine = _r318_t0.MaskLeftLine;
                    var r318_MaskRightLine = _r318_t0.MaskRightLine;
                    var r318_HBar = _r318_t0.HBar;
                    var r318_VBar = _r318_t0.VBar;
                    var r318_Arch = _r318_t0.Arch;
                    var r318_ForceUpright = _r318_t0.ForceUpright;
                    var r318_xn$withtransform$5sIl = _r318_t0["with-transform"];
                    var r318_ExtLineCenter = _r318_t0.ExtLineCenter;
                    var _r318_t1 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var r318_xn$referglyph$1aao = _r318_t1["refer-glyph"];
                    var r318_NameUni = _r318_t1.NameUni;
                    var _r318_t2 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Shared-Symbol-Shapes"].resolve();
                    var r318_TriangleShape = _r318_t2.TriangleShape;
                    var _r318_t3 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Geometric-Shared"].resolve();
                    var r318_GeometricDim = _r318_t3.GeometricDim;
                    var r318_top = r312_fontMetrics.os2.sTypoAscender;
                    var r318_bottom = r312_fontMetrics.os2.sTypoDescender;
                    var r318_left = 0;
                    var r318_right = r315_MosaicWidth;
                    var r318_midx = r1_mix(r318_left, r318_right, 0.5);
                    var r318_midy = r1_mix(r318_bottom, r318_top, 0.5);
                    var r318_MosaicHeight = r318_top - r318_bottom;
                    var r318_Geom = r318_GeometricDim(r318_MosaicUnitWidth, r315_MosaicWidth);
                    var r318_boxDrawingStroke = r312_AdviceStroke(3.5);
                    var r318_fineStroke = r312_AdviceStroke(3.5, Math.sqrt(r315_MosaicWidthScalar / 2));
                    var r318_gateSize = r318_MosaicHeight / 4 * r315_MosaicWidthScalar;
                    var r318_gateBot = r318_midy - r318_gateSize;
                    var r318_gateTop = r318_midy + r318_gateSize;
                    var r318_ringSize = Math.min(r318_Geom.Size * 0.5, r315_MosaicWidth / 6);
                    var r318_InvertRingAt = function (r325_x, r325_y, r325_fMask) {
                        var _r325_t0, _r325_t1;
                        return (r325_fMask ? r312_xn$spirooutline$1aao : r312_dispiro)(r325_fMask ? [] : [r312_widths.rhs(r318_fineStroke)], r312_g4(r325_x, r325_y - r318_ringSize), r312_archv(32, 2), r312_g4(r325_x - r318_ringSize, r325_y), r312_arcvh(32, 2), r312_g4(r325_x, r325_y + r318_ringSize), r312_archv(32, 2), r312_g4(r325_x + r318_ringSize, r325_y), r312_arcvh(32, 2), r312_close());
                    };
                    (function () {
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("monostable"), r318_MangleUnicode(9101), new r312_xn$Capture$2Lrc8.GlyphProc(function (r330_currentGlyph) {
                            var _r330_t0, _r330_t1;
                            r330_currentGlyph.setWidth(r315_MosaicWidth);
                            r330_currentGlyph.include(r318_HBar.b(r318_Geom.Left, r318_Geom.MidX - r318_Geom.Size * 0.5, r318_Geom.Bot, r318_boxDrawingStroke));
                            r330_currentGlyph.include(r318_VBar.m(r318_Geom.MidX - r318_Geom.Size * 0.5, r318_Geom.Bot, r318_Geom.Top, r318_boxDrawingStroke));
                            r330_currentGlyph.include(r318_HBar.t(r318_Geom.MidX - r318_Geom.Size * 0.5, r318_Geom.MidX + r318_Geom.Size * 0.5, r318_Geom.Top, r318_boxDrawingStroke));
                            r330_currentGlyph.include(r318_VBar.m(r318_Geom.MidX + r318_Geom.Size * 0.5, r318_Geom.Bot, r318_Geom.Top, r318_boxDrawingStroke));
                            r330_currentGlyph.include(r318_HBar.b(r318_Geom.MidX + r318_Geom.Size * 0.5, r318_Geom.Right, r318_Geom.Bot, r318_boxDrawingStroke));
                            return void 0;
                        }));
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("bellSymbol"), r318_MangleUnicode(9086), new r312_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
                            var _r339_t0, _r339_t1;
                            r339_currentGlyph.setWidth(r315_MosaicWidth);
                            r339_currentGlyph.include(r312_intersection(r318_MaskBelow(r318_Geom.MidY), r318_xn$referglyph$1aao(r318_MangleName("monostable"))));
                            r339_currentGlyph.include(r318_xn$withtransform$5sIl(r312_ApparentTranslate(0, r318_Geom.Size / 2), r318_xn$referglyph$1aao(r318_MangleName("segment"))));
                            return void 0;
                        }));
                    })();
                    (function () {
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("fuse"), r318_MangleUnicode(9179), new r312_xn$Capture$2Lrc8.GlyphProc(function (r347_currentGlyph) {
                            var _r347_t0, _r347_t1;
                            r347_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName(r318_NameUni(9472))), r312_AS_BASE, r312_ALSO_METRICS);
                            r347_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("whiteHoriRectangle")));
                            return void 0;
                        }));
                    })();
                    (function () {
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("earthGround"), r318_MangleUnicode(9178), new r312_xn$Capture$2Lrc8.GlyphProc(function (r354_currentGlyph) {
                            var _r354_t0, _r354_t1;
                            r354_currentGlyph.setWidth(r315_MosaicWidth);
                            r354_currentGlyph.include(r318_ForceUpright());
                            r354_currentGlyph.include(r318_VBar.m(r318_midx, r318_midy, r318_top, r318_boxDrawingStroke));
                            r354_currentGlyph.include(r318_HBar.m(r318_Geom.Left, r318_Geom.Right, r318_midy, r318_boxDrawingStroke));
                            r354_currentGlyph.include(r318_HBar.m(r318_Geom.MidX - r318_Geom.Size * 0.6, r318_Geom.MidX + r318_Geom.Size * 0.6, r1_mix(r318_bottom, r318_top, 0.4), r318_boxDrawingStroke));
                            r354_currentGlyph.include(r318_HBar.m(r318_Geom.MidX - r318_Geom.Size * 0.3, r318_Geom.MidX + r318_Geom.Size * 0.3, r1_mix(r318_bottom, r318_top, 0.3), r318_boxDrawingStroke));
                            return void 0;
                        }));
                    })();
                    (function () {
                        var r362_horizon = r318_Geom.MidY - r318_Geom.Size * 0.8;
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("explosionHorizon"), r318_MangleUnicode(118274), new r312_xn$Capture$2Lrc8.GlyphProc(function (r365_currentGlyph) {
                            var _r365_t0, _r365_t1;
                            r365_currentGlyph.setWidth(r315_MosaicWidth);
                            r365_currentGlyph.include(r318_HBar.m(r318_Geom.Left, r318_Geom.Right, r362_horizon, r318_boxDrawingStroke));
                            r365_currentGlyph.include(r312_dispiro(r312_widths.center(r318_fineStroke), r312_corner(r318_Geom.MidX - r318_Geom.Size * 0.8, r362_horizon + r318_Geom.Size * 0.7), r312_corner(r318_Geom.MidX - r318_Geom.Size * 0.4, r362_horizon + r318_Geom.Size * 0.3)));
                            r365_currentGlyph.include(r312_dispiro(r312_widths.center(r318_fineStroke), r312_corner(r318_Geom.MidX + r318_Geom.Size * 0.8, r362_horizon + r318_Geom.Size * 0.7), r312_corner(r318_Geom.MidX + r318_Geom.Size * 0.4, r362_horizon + r318_Geom.Size * 0.3)));
                            r365_currentGlyph.include(r312_dispiro(r312_widths.center(r318_fineStroke), r312_corner(r318_Geom.MidX - r318_Geom.Size * 0.4, r362_horizon + r318_Geom.Size * 1.4), r312_corner(r318_Geom.MidX - r318_Geom.Size * 0.2, r362_horizon + r318_Geom.Size * 0.4)));
                            r365_currentGlyph.include(r312_dispiro(r312_widths.center(r318_fineStroke), r312_corner(r318_Geom.MidX + r318_Geom.Size * 0.4, r362_horizon + r318_Geom.Size * 1.4), r312_corner(r318_Geom.MidX + r318_Geom.Size * 0.2, r362_horizon + r318_Geom.Size * 0.4)));
                            return void 0;
                        }));
                    })();
                    (function () {
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("funnel"), r318_MangleUnicode(118280), new r312_xn$Capture$2Lrc8.GlyphProc(function (r376_currentGlyph) {
                            var _r376_t0, _r376_t1;
                            r376_currentGlyph.setWidth(r315_MosaicWidth);
                            r376_currentGlyph.include(r318_ForceUpright());
                            r376_currentGlyph.include(r318_TriangleShape(r318_Geom.Left, r318_Geom.Top, r318_Geom.Right, r318_Geom.Top, r318_Geom.MidX, r318_Geom.Bot, r318_boxDrawingStroke));
                            r376_currentGlyph.include(r318_VBar.m(r318_midx, r318_bottom, r318_Geom.Bot + r318_boxDrawingStroke * 2, r318_boxDrawingStroke));
                            return void 0;
                        }));
                    })();
                    (function () {
                        var r382_rodLeft = r318_Geom.Left + r312_HSwToV(r318_boxDrawingStroke / 2);
                        var r382_rodRight = r318_Geom.Right - r312_HSwToV(r318_boxDrawingStroke / 2);
                        var r382_rodTop = r318_Geom.Top;
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("antenna"), r318_MangleUnicode(117768), new r312_xn$Capture$2Lrc8.GlyphProc(function (r385_currentGlyph) {
                            var _r385_t0, _r385_t1;
                            r385_currentGlyph.setWidth(r315_MosaicWidth);
                            r385_currentGlyph.include(r318_ForceUpright());
                            r385_currentGlyph.include(r318_VBar.m(r318_midx, r318_bottom, r382_rodTop, r318_boxDrawingStroke));
                            r385_currentGlyph.include(r312_intersection(r318_MaskBelow(r382_rodTop), r312_union(r312_dispiro(r312_widths.center(r318_boxDrawingStroke), r312_corner(r1_mix(r318_midx, r382_rodLeft, 2), r1_mix(r318_midy, r382_rodTop, 2)), r312_corner(r318_midx, r318_midy)), r312_dispiro(r312_widths.center(r318_boxDrawingStroke), r312_corner(r1_mix(r318_midx, r382_rodRight, 2), r1_mix(r318_midy, r382_rodTop, 2)), r312_corner(r318_midx, r318_midy)))));
                            return void 0;
                        }));
                    })();
                    (function () {
                        var _r391_t0 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Shared-Symbol-Shapes"].resolve();
                        var r391_HZigzag = _r391_t0.HZigzag;
                        var r391_VZigzag = _r391_t0.VZigzag;
                        var r391_amplitude = r318_Geom.Size * 0.8;
                        var r391_vWaves = 2;
                        var r391_hWaves = r315_MosaicWidthScalar;
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("resistorHori"), r318_MangleUnicode(117769), new r312_xn$Capture$2Lrc8.GlyphProc(function (r395_currentGlyph) {
                            var _r395_t0, _r395_t1;
                            r395_currentGlyph.setWidth(r315_MosaicWidth);
                            r395_currentGlyph.include(r318_ForceUpright());
                            var r395_segs = 2 * r391_hWaves;
                            var r395_mask = (r318_right - r318_left) / (r395_segs * 2);
                            r395_currentGlyph.include(r312_difference(r391_HZigzag.fromCenter(r318_midy, r318_left, r318_right, r391_amplitude, r395_segs, 0, r318_boxDrawingStroke, 1), r318_MaskLeftLine(r318_left + r395_mask, r318_bottom, r318_left + r395_mask, r318_midy - r318_boxDrawingStroke / 2), r318_MaskRightLine(r318_right - r395_mask, r318_midy + r318_boxDrawingStroke / 2, r318_right - r395_mask, r318_top)));
                            return void 0;
                        }));
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("resistorVert"), r318_MangleUnicode(117770), new r312_xn$Capture$2Lrc8.GlyphProc(function (r401_currentGlyph) {
                            var _r401_t0, _r401_t1;
                            r401_currentGlyph.setWidth(r315_MosaicWidth);
                            r401_currentGlyph.include(r318_ForceUpright());
                            var r401_segs = 2 * r391_vWaves;
                            var r401_mask = (r318_top - r318_bottom) / (r401_segs * 2);
                            r401_currentGlyph.include(r312_difference(r391_VZigzag.fromCenter(r318_midx, r318_bottom, r318_top, r391_amplitude, r401_segs, 0, r318_boxDrawingStroke, 1), r318_MaskBelowLine(r318_left, r318_bottom + r401_mask, r318_midx - r312_HSwToV(r318_boxDrawingStroke / 2), r318_bottom + r401_mask), r318_MaskAboveLine(r318_midx + r312_HSwToV(r318_boxDrawingStroke / 2), r318_top - r401_mask, r318_right, r318_top - r401_mask)));
                            return void 0;
                        }));
                    })();
                    (function () {
                        var _r406_t0 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Mosaic-Split-Graphic"].resolve();
                        var r406_Multicell = _r406_t0.Multicell;
                        var r406_multicell = r406_Multicell(r315_MosaicWidth);
                        var r406_amplitude = r318_Geom.Size * 0.8;
                        var r406_CoilImpl = function (r408_top, r408_bot, r408_left, r408_right) {
                            var _r408_t0, _r408_t1;
                            var r408_mid1 = r1_mix(r408_left, r408_right, 1 / 3);
                            var r408_mid2 = r1_mix(r408_left, r408_right, 2 / 3);
                            var r408_midy = r1_mix(r408_bot, r408_top, 0.5);
                            var r408_yTerm = r408_midy + r318_boxDrawingStroke / 2;
                            var r408_yTop = r408_midy + r406_amplitude;
                            var r408_yBot = r408_midy - r406_amplitude;
                            var r408_yInter = r1_mix(r408_yBot, r408_yTop, 0.95);
                            var r408_ySide = r1_mix(r408_yBot, r408_yTop, 0.45);
                            var r408_kX = 0.1;
                            var r408_kX2 = 0.15;
                            var r408_kX3 = r312_StrokeWidthBlend(0.24, 0.21);
                            return r312_dispiro(r312_widths.rhs(r318_boxDrawingStroke), r312_straight.right.start(r408_left, r408_yTerm), r312_g4(r1_mix(r408_left, r408_mid1, r408_kX3), r1_mix(r408_yTerm, r408_yTop, 0.4)), r312_g4.right.mid(r1_mix(r408_left, r408_mid1, 0.5 + r408_kX2), r408_yTop), r312_g4(r408_mid1, r408_yInter), r312_g4.down.mid(r1_mix(r408_mid1, r408_mid2, 0.5 - r408_kX), r408_ySide), r318_Arch.rhs(r408_yBot, new r312_xn$NamedParameterPair$2Lrc9b("sw", r318_boxDrawingStroke)), r312_g4.up.mid(r1_mix(r408_left, r408_mid1, 0.5 + r408_kX), r408_ySide), r312_g4(r408_mid1, r408_yInter), r312_flat(r1_mix(r408_mid1, r408_mid2, 0.5 - r408_kX2), r408_yTop), r312_curl(r1_mix(r408_mid1, r408_mid2, 0.5 + r408_kX2), r408_yTop), r312_g4(r408_mid2, r408_yInter), r312_g4.down.mid(r1_mix(r408_mid2, r408_right, 0.5 - r408_kX), r408_ySide), r318_Arch.rhs(r408_yBot, new r312_xn$NamedParameterPair$2Lrc9b("sw", r318_boxDrawingStroke)), r312_g4.up.mid(r1_mix(r408_mid1, r408_mid2, 0.5 + r408_kX), r408_ySide), r312_g4(r408_mid2, r408_yInter), r312_g4.right.mid(r1_mix(r408_mid2, r408_right, 0.5 - r408_kX2), r408_yTop), r312_g4(r1_mix(r408_right, r408_mid2, r408_kX3), r1_mix(r408_yTerm, r408_yTop, 0.4)), r312_straight.right.end(r408_right, r408_yTerm));
                        };
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r413_currentGlyph) {
                            var _r413_t0, _r413_t1;
                            r413_currentGlyph.setWidth(r315_MosaicWidth);
                            r413_currentGlyph.include(r318_ForceUpright());
                            r413_currentGlyph.include(r406_multicell.Split(r318_top, r318_bottom, r318_left, r318_right, 1, 3, r406_CoilImpl, [[0, 0, r318_MangleName("inductorLeftThird"), r318_MangleUnicode(117771)], [0, 1, r318_MangleName("inductorMiddleThird"), r318_MangleUnicode(117772)], [0, 2, r318_MangleName("inductorRightThird"), r318_MangleUnicode(117773)]]));
                            return void 0;
                        }));
                    })();
                    (function () {
                        var r418_diodeGap = r315_MosaicWidth / 9;
                        var r418_diodeLeft = r318_left + r418_diodeGap;
                        var r418_diodeRight = r318_right - r418_diodeGap;
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("diodeLeft"), r318_MangleUnicode(117774), new r312_xn$Capture$2Lrc8.GlyphProc(function (r421_currentGlyph) {
                            var _r421_t0, _r421_t1;
                            r421_currentGlyph.setWidth(r315_MosaicWidth);
                            r421_currentGlyph.include(r318_ForceUpright());
                            r421_currentGlyph.include(r318_HBar.m(r318_left, r418_diodeLeft, r318_midy, r318_boxDrawingStroke));
                            r421_currentGlyph.include(r318_HBar.m(r418_diodeRight, r318_right, r318_midy, r318_boxDrawingStroke));
                            r421_currentGlyph.include(r318_VBar.l(r418_diodeLeft, r318_gateBot, r318_gateTop, r318_boxDrawingStroke));
                            r421_currentGlyph.include(r318_TriangleShape(r418_diodeLeft, r318_midy, r418_diodeRight, r318_gateTop, r418_diodeRight, r318_gateBot, r318_boxDrawingStroke));
                            return void 0;
                        }));
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("diodeRight"), r318_MangleUnicode(117775), new r312_xn$Capture$2Lrc8.GlyphProc(function (r430_currentGlyph) {
                            var _r430_t0, _r430_t1;
                            r430_currentGlyph.setWidth(r315_MosaicWidth);
                            r430_currentGlyph.include(r318_ForceUpright());
                            r430_currentGlyph.include(r318_HBar.m(r318_left, r418_diodeLeft, r318_midy, r318_boxDrawingStroke));
                            r430_currentGlyph.include(r318_HBar.m(r418_diodeRight, r318_right, r318_midy, r318_boxDrawingStroke));
                            r430_currentGlyph.include(r318_VBar.r(r418_diodeRight, r318_gateBot, r318_gateTop, r318_boxDrawingStroke));
                            r430_currentGlyph.include(r318_TriangleShape(r418_diodeLeft, r318_gateBot, r418_diodeLeft, r318_gateTop, r418_diodeRight, r318_midy, r318_boxDrawingStroke));
                            return void 0;
                        }));
                    })();
                    (function () {
                        var r438_slope = r318_MosaicHeight / r315_MosaicWidth;
                        var r438_tipDx = Math.max(r318_Geom.Size / 5, r318_boxDrawingStroke / r438_slope);
                        var r438_tipDy = r438_tipDx * -r438_slope;
                        var r438_baseDx = -r438_tipDy / Math.sqrt(3) * 2;
                        var r438_baseDy = r438_baseDx / -r438_slope;
                        var r438_arrowPos = (1 - r312_HSwToV(r318_boxDrawingStroke) / r318_MosaicMiddle) * 0.4;
                        var r438_VerticalPart = function () {
                            var _r439_t0, _r439_t1;
                            return r312_intersection(r318_Rect(r318_top, r318_bottom, r318_left, r318_midx + r312_HSwToV(0.5 * r318_boxDrawingStroke)), r312_union(r318_ExtLineCenter(r318_midx, r318_bottom, r318_left, r318_midy, r318_boxDrawingStroke, 1), r318_ExtLineCenter(r318_left, r318_midy, r318_midx, r318_top, r318_boxDrawingStroke, 1)));
                        };
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("transistorPNP"), r318_MangleUnicode(117776), new r312_xn$Capture$2Lrc8.GlyphProc(function (r442_currentGlyph) {
                            var _r442_t0, _r442_t1;
                            r442_currentGlyph.setWidth(r315_MosaicWidth);
                            r442_currentGlyph.include(r318_ForceUpright());
                            r442_currentGlyph.include(r318_VBar.l(r318_left, r318_gateBot, r318_gateTop, r318_boxDrawingStroke));
                            r442_currentGlyph.include(r438_VerticalPart());
                            var r442_arrowCx = r1_mix(r318_midx, r318_left, r438_arrowPos);
                            var r442_arrowCy = r1_mix(r318_bottom, r318_midy, r438_arrowPos);
                            r442_currentGlyph.include(r312_xn$spirooutline$1aao(r312_corner(r442_arrowCx + r438_tipDx, r442_arrowCy + r438_tipDy), r312_corner(r442_arrowCx - r438_tipDx - r438_baseDx, r442_arrowCy - r438_tipDy + r438_baseDy), r312_corner(r442_arrowCx - r438_tipDx + r438_baseDx, r442_arrowCy - r438_tipDy - r438_baseDy)));
                            return void 0;
                        }));
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("transistorNPN"), r318_MangleUnicode(117777), new r312_xn$Capture$2Lrc8.GlyphProc(function (r450_currentGlyph) {
                            var _r450_t0, _r450_t1;
                            r450_currentGlyph.setWidth(r315_MosaicWidth);
                            r450_currentGlyph.include(r318_ForceUpright());
                            r450_currentGlyph.include(r318_VBar.l(r318_left, r318_gateBot, r318_gateTop, r318_boxDrawingStroke));
                            r450_currentGlyph.include(r438_VerticalPart());
                            var r450_arrowCx = r1_mix(r318_midx, r318_left, r438_arrowPos);
                            var r450_arrowCy = r1_mix(r318_top, r318_midy, r438_arrowPos);
                            r450_currentGlyph.include(r312_xn$spirooutline$1aao(r312_corner(r450_arrowCx - r438_tipDx, r450_arrowCy + r438_tipDy), r312_corner(r450_arrowCx + r438_tipDx - r438_baseDx, r450_arrowCy - r438_tipDy - r438_baseDy), r312_corner(r450_arrowCx + r438_tipDx + r438_baseDx, r450_arrowCy - r438_tipDy + r438_baseDy)));
                            return void 0;
                        }));
                    })();
                    (function () {
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("receptacle"), r318_MangleUnicode(117778), new r312_xn$Capture$2Lrc8.GlyphProc(function (r460_currentGlyph) {
                            var _r460_t0, _r460_t1;
                            r460_currentGlyph.setWidth(r315_MosaicWidth);
                            r460_currentGlyph.include(r318_ForceUpright());
                            r460_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName(r318_NameUni(130011))));
                            r460_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName(r318_NameUni(9590))));
                            return void 0;
                        }));
                    })();
                    (function () {
                        var r466_capacitorSize = r318_Geom.Size;
                        var r466_capacitorGap = r318_Geom.Size / 4;
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("capacitorHori"), r318_MangleUnicode(117779), new r312_xn$Capture$2Lrc8.GlyphProc(function (r469_currentGlyph) {
                            var _r469_t0, _r469_t1;
                            r469_currentGlyph.setWidth(r315_MosaicWidth);
                            r469_currentGlyph.include(r318_ForceUpright());
                            r469_currentGlyph.include(r318_HBar.m(r318_left, r318_midx - r466_capacitorGap, r318_midy, r318_boxDrawingStroke));
                            r469_currentGlyph.include(r318_VBar.r(r318_midx - r466_capacitorGap, r318_midy - r466_capacitorSize, r318_midy + r466_capacitorSize, r318_boxDrawingStroke));
                            r469_currentGlyph.include(r318_VBar.l(r318_midx + r466_capacitorGap, r318_midy - r466_capacitorSize, r318_midy + r466_capacitorSize, r318_boxDrawingStroke));
                            r469_currentGlyph.include(r318_HBar.m(r318_midx + r466_capacitorGap, r318_right, r318_midy, r318_boxDrawingStroke));
                            return void 0;
                        }));
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("capacitorVert"), r318_MangleUnicode(117780), new r312_xn$Capture$2Lrc8.GlyphProc(function (r478_currentGlyph) {
                            var _r478_t0, _r478_t1;
                            r478_currentGlyph.setWidth(r315_MosaicWidth);
                            r478_currentGlyph.include(r318_ForceUpright());
                            r478_currentGlyph.include(r318_VBar.m(r318_midx, r318_bottom, r318_midy - r466_capacitorGap, r318_boxDrawingStroke));
                            r478_currentGlyph.include(r318_HBar.t(r318_midx - r466_capacitorSize, r318_midx + r466_capacitorSize, r318_midy - r466_capacitorGap, r318_boxDrawingStroke));
                            r478_currentGlyph.include(r318_HBar.b(r318_midx - r466_capacitorSize, r318_midx + r466_capacitorSize, r318_midy + r466_capacitorGap, r318_boxDrawingStroke));
                            r478_currentGlyph.include(r318_VBar.m(r318_midx, r318_midy + r466_capacitorGap, r318_top, r318_boxDrawingStroke));
                            return void 0;
                        }));
                    })();
                    (function () {
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("twoRings"), r318_MangleUnicode(117896), new r312_xn$Capture$2Lrc8.GlyphProc(function (r489_currentGlyph) {
                            var _r489_t0, _r489_t1;
                            r489_currentGlyph.setWidth(r315_MosaicWidth);
                            r489_currentGlyph.include(r318_ForceUpright());
                            r489_currentGlyph.include(r318_InvertRingAt(r318_left + r318_ringSize, r318_midy));
                            r489_currentGlyph.include(r318_InvertRingAt(r318_right - r318_ringSize, r318_midy));
                            return void 0;
                        }));
                        var r486_InvertedInputImpl = function (r494_spread) {
                            var _r494_t0, _r494_t1;
                            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r496_currentGlyph) {
                                var _r496_t0, _r496_t1;
                                var r496_limit = r318_MosaicHeight / 2 - r318_ringSize;
                                var r496_spread2 = Math.min(r494_spread - r318_boxDrawingStroke / 2, r496_limit);
                                r496_currentGlyph.include(r318_InvertRingAt(r318_right - r318_ringSize, r318_midy + r496_spread2));
                                r496_currentGlyph.include(r318_InvertRingAt(r318_right - r318_ringSize, r318_midy - r496_spread2));
                                if (r494_spread >= r318_MosaicHeight / 2) {
                                    r496_currentGlyph.include(r312_difference(r318_HBar.t(r318_left, r318_right - r318_ringSize, r318_top, r318_boxDrawingStroke), r318_InvertRingAt(r318_right - r318_ringSize, r318_midy + r496_spread2, 1)));
                                    r496_currentGlyph.include(r312_difference(r318_HBar.b(r318_left, r318_right - r318_ringSize, r318_bottom, r318_boxDrawingStroke), r318_InvertRingAt(r318_right - r318_ringSize, r318_midy - r496_spread2, 1)));
                                } else {
                                    r496_currentGlyph.include(r318_HBar.t(r318_left, r318_midx, r318_top, r318_boxDrawingStroke));
                                    r496_currentGlyph.include(r318_HBar.b(r318_left, r318_midx, r318_bottom, r318_boxDrawingStroke));
                                    r496_currentGlyph.include(r318_VBar.m(r318_midx, r318_midy + r494_spread - r318_boxDrawingStroke, r318_top, r318_boxDrawingStroke));
                                    r496_currentGlyph.include(r318_VBar.m(r318_midx, r318_bottom, r318_midy - r494_spread + r318_boxDrawingStroke, r318_boxDrawingStroke));
                                    r496_currentGlyph.include(r312_difference(r318_HBar.t(r318_midx, r318_right - r318_ringSize, r318_midy + r494_spread, r318_boxDrawingStroke), r318_InvertRingAt(r318_right - r318_ringSize, r318_midy + r496_spread2, 1)));
                                    r496_currentGlyph.include(r312_difference(r318_HBar.b(r318_midx, r318_right - r318_ringSize, r318_midy - r494_spread, r318_boxDrawingStroke), r318_InvertRingAt(r318_right - r318_ringSize, r318_midy - r496_spread2, 1)));
                                }
                                return void 0;
                            });
                        };
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("invertedInputs"), r318_MangleUnicode(117783), new r312_xn$Capture$2Lrc8.GlyphProc(function (r509_currentGlyph) {
                            var _r509_t0, _r509_t1;
                            r509_currentGlyph.setWidth(r315_MosaicWidth);
                            r509_currentGlyph.include(r318_ForceUpright());
                            r509_currentGlyph.include(r486_InvertedInputImpl(r318_gateSize - (r315_MosaicWidthScalar < 2 ? r318_ringSize - r318_boxDrawingStroke / 2 : 0)));
                            return void 0;
                        }));
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("invertedOutput"), r318_MangleUnicode(117784), new r312_xn$Capture$2Lrc8.GlyphProc(function (r515_currentGlyph) {
                            var _r515_t0, _r515_t1;
                            r515_currentGlyph.setWidth(r315_MosaicWidth);
                            r515_currentGlyph.include(r318_ForceUpright());
                            r515_currentGlyph.include(r318_InvertRingAt(r318_left + r318_ringSize, r318_midy));
                            r515_currentGlyph.include(r318_HBar.m(r318_left + r318_ringSize * 2 - r318_fineStroke / 2, r318_right, r318_midy, r318_boxDrawingStroke));
                            return void 0;
                        }));
                    })();
                    (function () {
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("bufferGate"), r318_MangleUnicode(117785), new r312_xn$Capture$2Lrc8.GlyphProc(function (r524_currentGlyph) {
                            var _r524_t0, _r524_t1;
                            r524_currentGlyph.setWidth(r315_MosaicWidth);
                            r524_currentGlyph.include(r318_ForceUpright());
                            r524_currentGlyph.include(r318_HBar.m(r318_left, r318_midx, r318_midy, r318_boxDrawingStroke));
                            r524_currentGlyph.include(r318_TriangleShape(r318_midx, r318_gateBot, r318_midx, r318_gateTop, r318_right, r318_midy, r318_boxDrawingStroke));
                            return void 0;
                        }));
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("invertedBufferGate"), r318_MangleUnicode(117786), new r312_xn$Capture$2Lrc8.GlyphProc(function (r531_currentGlyph) {
                            var _r531_t0, _r531_t1;
                            r531_currentGlyph.setWidth(r315_MosaicWidth);
                            r531_currentGlyph.include(r318_ForceUpright());
                            r531_currentGlyph.include(r318_HBar.m(r318_left, r318_midx - r318_ringSize * 2 + r318_fineStroke / 2, r318_midy, r318_boxDrawingStroke));
                            r531_currentGlyph.include(r318_InvertRingAt(r318_midx - r318_ringSize, r318_midy));
                            r531_currentGlyph.include(r318_TriangleShape(r318_midx, r318_gateBot, r318_midx, r318_gateTop, r318_right, r318_midy, r318_boxDrawingStroke));
                            return void 0;
                        }));
                    })();
                    return (function () {
                        var r538_andCurlX = Math.max(r318_midx, r318_right - r318_gateSize);
                        var r538_leftOX = r318_left - r312_OX;
                        var r538_orCurlX1 = r1_mix(r538_leftOX, r318_right, 0.15);
                        var r538_orCurlX2 = r1_mix(r538_leftOX, r318_right, 0.4);
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("andGate"), r318_MangleUnicode(117782), new r312_xn$Capture$2Lrc8.GlyphProc(function (r541_currentGlyph) {
                            var _r541_t0, _r541_t1;
                            r541_currentGlyph.setWidth(r315_MosaicWidth);
                            r541_currentGlyph.include(r318_ForceUpright());
                            r541_currentGlyph.include(r318_VBar.l(r318_left, r318_gateBot, r318_gateTop, r318_boxDrawingStroke));
                            r541_currentGlyph.include(r312_dispiro(r312_widths.lhs(r318_boxDrawingStroke), r312_flat(r318_left, r318_gateBot), r312_curl(r318_right - r538_andCurlX, r318_gateBot), r312_archv(), r312_g4(r318_right, r318_midy), r312_arcvh(), r312_flat(r318_right - r538_andCurlX, r318_gateTop), r312_corner(r318_left, r318_gateTop)));
                            return void 0;
                        }));
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("orGate"), r318_MangleUnicode(117781), new r312_xn$Capture$2Lrc8.GlyphProc(function (r548_currentGlyph) {
                            var _r548_t0, _r548_t1;
                            r548_currentGlyph.setWidth(r315_MosaicWidth);
                            r548_currentGlyph.include(r318_ForceUpright());
                            r548_currentGlyph.include(r312_intersection(r318_Rect(r318_gateTop, r318_gateBot, r538_leftOX, r318_right), r312_dispiro(r312_widths.lhs(r318_boxDrawingStroke), r312_g4(r538_leftOX, r318_gateTop), r312_quadControls(1, 0.3), r312_g4(r538_orCurlX1, r318_midy), r312_quadControls(0, 0.7), r312_g4(r538_leftOX, r318_gateBot))));
                            r548_currentGlyph.include(r312_difference(r312_union(r312_intersection(r318_MaskBelow(r318_midy), r312_dispiro(r312_widths.lhs(r318_boxDrawingStroke), r312_flat(r538_leftOX, r318_gateBot), r312_curl(r538_orCurlX2, r318_gateBot), r312_quadControls(0.7, 0), r312_g4(r318_right, r318_midy))), r312_intersection(r318_MaskAbove(r318_midy), r312_dispiro(r312_widths.rhs(r318_boxDrawingStroke), r312_flat(r538_leftOX, r318_gateTop), r312_curl(r538_orCurlX2, r318_gateTop), r312_quadControls(0.7, 0), r312_g4(r318_right, r318_midy)))), r312_xn$spirooutline$1aao(r312_g4(r538_leftOX, r318_gateTop), r312_quadControls(1, 0.3), r312_g4(r538_orCurlX1, r318_midy), r312_quadControls(0, 0.7), r312_g4(r538_leftOX, r318_gateBot), r312_close())));
                            return void 0;
                        }));
                    })();
                })();
                _r315_t5 = _r315_t2 = _r315_t2 + 1;
                _r315_t4 = _r315_t2 < _r315_t1;
            }
            return _r315_t5;
        })();
    });
    return void 0;
});


