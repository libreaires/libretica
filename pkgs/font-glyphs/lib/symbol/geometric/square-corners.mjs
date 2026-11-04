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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Geometric-Square-Corners", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t5, _r313_t6, _r313_t7, _r313_tag8;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_WideWidth1 = _r313_t1.WideWidth1;
        var r313_GeometryStroke = _r313_t1.GeometryStroke;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
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
                    var _r319_t3, _r319_tag4;
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
                    var r319_MaskAbove = _r319_t0.MaskAbove;
                    var r319_MaskBelow = _r319_t0.MaskBelow;
                    var r319_MaskLeft = _r319_t0.MaskLeft;
                    var r319_MaskRight = _r319_t0.MaskRight;
                    var r319_RingAt = _r319_t0.RingAt;
                    var _r319_t1 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var r319_xn$referglyph$1aao = _r319_t1["refer-glyph"];
                    var _r319_t2 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Geometric-Shared"].resolve();
                    var r319_GeometricDim = _r319_t2.GeometricDim;
                    var r319_GeometricSizes = _r319_t2.GeometricSizes;
                    var r319_Geom = r319_GeometricDim(r319_MosaicUnitWidth, r316_MosaicWidth);
                    var r319_lineWidth = Math.min(r313_GeometryStroke, (r319_Geom.Size * 2 - r313_GeometryStroke * 2) * 1 / 11);
                    var r319_aperature = r319_Geom.Size / 3;
                    return (function () {
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("squareCorners"), r319_MangleUnicode(9974), new r313_xn$Capture$2Lrc8.GlyphProc(function (r329_currentGlyph) {
                            var _r329_t0, _r329_t1;
                            r329_currentGlyph.setWidth(r319_Geom.Width);
                            r329_currentGlyph.include(r313_difference(r319_xn$referglyph$1aao(r319_MangleName("whiteSquare")), r313_union(r313_intersection(r319_MaskBelow(r319_Geom.MidY + r319_Geom.Size / 3), r319_MaskAbove(r319_Geom.MidY - r319_Geom.Size / 3)), r313_intersection(r319_MaskLeft(r319_Geom.MidX + r319_Geom.Size / 3), r319_MaskRight(r319_Geom.MidX - r319_Geom.Size / 3)))));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("driveSlowSign"), r319_MangleUnicode(9946), new r313_xn$Capture$2Lrc8.GlyphProc(function (r334_currentGlyph) {
                            var _r334_t0, _r334_t1;
                            r334_currentGlyph.setWidth(r319_Geom.Width);
                            r334_currentGlyph.include(r313_intersection(r319_xn$referglyph$1aao(r319_MangleName("blackSquare")), r313_union(r319_RingAt(r319_Geom.Left, r319_Geom.Top, r319_Geom.Size / 2), r319_RingAt(r319_Geom.Left, r319_Geom.Bot, r319_Geom.Size / 2), r319_RingAt(r319_Geom.Right, r319_Geom.Top, r319_Geom.Size / 2), r319_RingAt(r319_Geom.Right, r319_Geom.Bot, r319_Geom.Size / 2))));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("squareCornersSaltires"), r319_MangleUnicode(117897), new r313_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
                            var _r339_t0, _r339_t1;
                            r339_currentGlyph.setWidth(r319_Geom.Width);
                            r339_currentGlyph.include(r313_intersection(r313_difference(r319_xn$referglyph$1aao(r319_MangleName("blackSquare")), r313_union(r313_intersection(r319_MaskBelow(r319_Geom.MidY + r319_Geom.Size / 3), r319_MaskAbove(r319_Geom.MidY - r319_Geom.Size / 3)), r313_intersection(r319_MaskLeft(r319_Geom.MidX + r319_Geom.Size / 3), r319_MaskRight(r319_Geom.MidX - r319_Geom.Size / 3)))), r313_union(r313_dispiro(r313_widths.center(r319_lineWidth), r313_flat(r319_Geom.MidX, r319_Geom.MidY + r319_Geom.Size * (4 / 3)), r313_curl(r319_Geom.MidX + r319_Geom.Size * (4 / 3), r319_Geom.MidY)), r313_dispiro(r313_widths.center(r319_lineWidth), r313_flat(r319_Geom.MidX + r319_Geom.Size * (4 / 3), r319_Geom.MidY), r313_curl(r319_Geom.MidX, r319_Geom.MidY - r319_Geom.Size * (4 / 3))), r313_dispiro(r313_widths.center(r319_lineWidth), r313_flat(r319_Geom.MidX, r319_Geom.MidY - r319_Geom.Size * (4 / 3)), r313_curl(r319_Geom.MidX - r319_Geom.Size * (4 / 3), r319_Geom.MidY)), r313_dispiro(r313_widths.center(r319_lineWidth), r313_flat(r319_Geom.MidX - r319_Geom.Size * (4 / 3), r319_Geom.MidY), r313_curl(r319_Geom.MidX, r319_Geom.MidY + r319_Geom.Size * (4 / 3))), r313_dispiro(r313_widths.center(r319_lineWidth), r313_flat(r319_Geom.MidX - r319_Geom.Size, r319_Geom.MidY + r319_Geom.Size), r313_curl(r319_Geom.MidX + r319_Geom.Size, r319_Geom.MidY - r319_Geom.Size)), r313_dispiro(r313_widths.center(r319_lineWidth), r313_flat(r319_Geom.MidX - r319_Geom.Size, r319_Geom.MidY - r319_Geom.Size), r313_curl(r319_Geom.MidX + r319_Geom.Size, r319_Geom.MidY + r319_Geom.Size)))));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("squareCornersDiagonals"), r319_MangleUnicode(117898), new r313_xn$Capture$2Lrc8.GlyphProc(function (r344_currentGlyph) {
                            var _r344_t0, _r344_t1;
                            r344_currentGlyph.setWidth(r319_Geom.Width);
                            r344_currentGlyph.include(r313_intersection(r319_xn$referglyph$1aao(r319_MangleName("blackSquare")), r313_union(r313_dispiro(r313_widths.lhs(r319_lineWidth), r313_flat(r319_Geom.MidX, r319_Geom.MidY + r319_Geom.Size * (4 / 3)), r313_curl(r319_Geom.MidX + r319_Geom.Size * (4 / 3), r319_Geom.MidY)), r313_dispiro(r313_widths.lhs(r319_lineWidth), r313_flat(r319_Geom.MidX + r319_Geom.Size * (4 / 3), r319_Geom.MidY), r313_curl(r319_Geom.MidX, r319_Geom.MidY - r319_Geom.Size * (4 / 3))), r313_dispiro(r313_widths.lhs(r319_lineWidth), r313_flat(r319_Geom.MidX, r319_Geom.MidY - r319_Geom.Size * (4 / 3)), r313_curl(r319_Geom.MidX - r319_Geom.Size * (4 / 3), r319_Geom.MidY)), r313_dispiro(r313_widths.lhs(r319_lineWidth), r313_flat(r319_Geom.MidX - r319_Geom.Size * (4 / 3), r319_Geom.MidY), r313_curl(r319_Geom.MidX, r319_Geom.MidY + r319_Geom.Size * (4 / 3))))));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("squareCornersTriangles"), r319_MangleUnicode(117899), new r313_xn$Capture$2Lrc8.GlyphProc(function (r349_currentGlyph) {
                            var _r349_t0, _r349_t1;
                            r349_currentGlyph.setWidth(r319_Geom.Width);
                            r349_currentGlyph.include(r313_difference(r319_xn$referglyph$1aao(r319_MangleName("blackSquare")), r313_xn$spirooutline$1aao(r313_corner(r319_Geom.MidX, r319_Geom.MidY + r319_Geom.Size * (4 / 3)), r313_corner(r319_Geom.MidX + r319_Geom.Size * (4 / 3), r319_Geom.MidY), r313_corner(r319_Geom.MidX, r319_Geom.MidY - r319_Geom.Size * (4 / 3)), r313_corner(r319_Geom.MidX - r319_Geom.Size * (4 / 3), r319_Geom.MidY))));
                            return void 0;
                        }));
                        return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("squareAperature"), r319_MangleUnicode(117900), new r313_xn$Capture$2Lrc8.GlyphProc(function (r354_currentGlyph) {
                            var _r354_t0, _r354_t1;
                            r354_currentGlyph.setWidth(r319_Geom.Width);
                            r354_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteSquare")));
                            r354_currentGlyph.include(r313_intersection(r319_xn$referglyph$1aao(r319_MangleName("blackSquare")), r313_union(r313_intersection(r313_xn$spirooutline$1aao(r313_corner(r319_Geom.MidX - r319_Geom.Size - r319_aperature, r319_Geom.MidY + r319_Geom.Size), r313_corner(r319_Geom.MidX + r319_Geom.Size, r319_Geom.MidY + r319_Geom.Size), r313_corner(r319_Geom.MidX + r319_Geom.Size, r319_Geom.MidY - r319_Geom.Size - r319_aperature)), r313_dispiro(r313_widths.center(r319_lineWidth), r313_flat(r319_Geom.MidX - r319_Geom.Size, r319_Geom.MidY - r319_Geom.Size + r319_aperature), r313_curl(r319_Geom.MidX + r319_Geom.Size, r319_Geom.MidY + r319_Geom.Size + r319_aperature))), r313_intersection(r313_xn$spirooutline$1aao(r313_corner(r319_Geom.MidX + r319_Geom.Size, r319_Geom.MidY + r319_Geom.Size + r319_aperature), r313_corner(r319_Geom.MidX + r319_Geom.Size, r319_Geom.MidY - r319_Geom.Size), r313_corner(r319_Geom.MidX - r319_Geom.Size - r319_aperature, r319_Geom.MidY - r319_Geom.Size)), r313_dispiro(r313_widths.center(r319_lineWidth), r313_flat(r319_Geom.MidX - r319_Geom.Size + r319_aperature, r319_Geom.MidY + r319_Geom.Size), r313_curl(r319_Geom.MidX + r319_Geom.Size + r319_aperature, r319_Geom.MidY - r319_Geom.Size))), r313_intersection(r313_xn$spirooutline$1aao(r313_corner(r319_Geom.MidX + r319_Geom.Size + r319_aperature, r319_Geom.MidY - r319_Geom.Size), r313_corner(r319_Geom.MidX - r319_Geom.Size, r319_Geom.MidY - r319_Geom.Size), r313_corner(r319_Geom.MidX - r319_Geom.Size, r319_Geom.MidY + r319_Geom.Size + r319_aperature)), r313_dispiro(r313_widths.center(r319_lineWidth), r313_flat(r319_Geom.MidX - r319_Geom.Size, r319_Geom.MidY - r319_Geom.Size - r319_aperature), r313_curl(r319_Geom.MidX + r319_Geom.Size, r319_Geom.MidY + r319_Geom.Size - r319_aperature))), r313_intersection(r313_xn$spirooutline$1aao(r313_corner(r319_Geom.MidX - r319_Geom.Size, r319_Geom.MidY - r319_Geom.Size - r319_aperature), r313_corner(r319_Geom.MidX - r319_Geom.Size, r319_Geom.MidY + r319_Geom.Size), r313_corner(r319_Geom.MidX + r319_Geom.Size + r319_aperature, r319_Geom.MidY + r319_Geom.Size)), r313_dispiro(r313_widths.center(r319_lineWidth), r313_flat(r319_Geom.MidX - r319_Geom.Size - r319_aperature, r319_Geom.MidY + r319_Geom.Size), r313_curl(r319_Geom.MidX + r319_Geom.Size - r319_aperature, r319_Geom.MidY - r319_Geom.Size))))));
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


