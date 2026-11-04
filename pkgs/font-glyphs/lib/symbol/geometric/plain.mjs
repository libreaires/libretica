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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Geometric-Plain", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t5, _r313_t6, _r313_t7, _r313_tag8;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_Translate = _r313_t1.Translate;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_WideWidth1 = _r313_t1.WideWidth1;
        var r313_GeometryStroke = _r313_t1.GeometryStroke;
        var r313_UnicodeWeightGrade = _r313_t1.UnicodeWeightGrade;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_g2 = _r313_t2.g2;
        var r313_corner = _r313_t2.corner;
        var r313_close = _r313_t2.close;
        var r313_widths = _r313_t2.widths;
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
                    var _r319_t3, _r319_tag4, _r319_t5, _r319_tag6, _r319_t7, _r319_tag8, _r319_t9, _r319_tag10, _r319_t11, _r319_tag12, _r319_t13, _r319_tag14, _r319_t15, _r319_tag16, _r319_t17, _r319_tag18, _r319_t19, _r319_tag20, _r319_t21, _r319_tag22, _r319_t23, _r319_tag24, _r319_t25, _r319_tag26;
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
                    var r319_Circle = _r319_t0.Circle;
                    var r319_Ellipse = _r319_t0.Ellipse;
                    var r319_HBar = _r319_t0.HBar;
                    var r319_xn$withtransform$5sIl = _r319_t0["with-transform"];
                    var _r319_t1 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var r319_xn$referglyph$1aao = _r319_t1["refer-glyph"];
                    var r319_alias = _r319_t1.alias;
                    var _r319_t2 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Geometric-Shared"].resolve();
                    var r319_GeometricDim = _r319_t2.GeometricDim;
                    var r319_GeometricSizes = _r319_t2.GeometricSizes;
                    var r319_ConvexPolygonOutline = _r319_t2.ConvexPolygonOutline;
                    var r319_Geom = r319_GeometricDim(r319_MosaicUnitWidth, r316_MosaicWidth);
                    var r319_Size = r319_GeometricSizes(r319_Geom);
                    var r319_StdBlackShape = function (r325_fn, r325_name, r325_unicode, r325_props) {
                        var _r325_t0, _r325_t1;
                        var r325_pp = r1_fallback(r325_props, {});
                        return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName(r325_name), r319_MangleUnicode(r325_unicode), new r313_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
                            var _r328_t0, _r328_t1;
                            r328_currentGlyph.setWidth(r319_Geom.Width);
                            r328_currentGlyph.include(r325_fn(r1_fallback(r325_pp.cx, r319_Geom.MidX), r1_fallback(r325_pp.cy, r319_Geom.MidY), r319_Geom.Size * r1_fallback(r325_pp.size, 1), 0));
                            return void 0;
                        }));
                    };
                    var r319_StdWhiteShapeImpl = function (r331_fn, r331_s, r331_out, r331_in, r331_props) {
                        var _r331_t0, _r331_t1;
                        var r331_pp = r1_fallback(r331_props, {});
                        var r331_sw = r1_fallback(r331_pp.sw, r313_GeometryStroke);
                        return r313_difference(r331_fn(r1_fallback(r331_pp.cx, r319_Geom.MidX), r1_fallback(r331_pp.cy, r319_Geom.MidY), r331_s * r319_Geom.Size * r1_fallback(r331_pp.size, 1) + r331_out * r331_sw, -r331_out * r331_sw), r331_fn(r1_fallback(r331_pp.cx, r319_Geom.MidX), r1_fallback(r331_pp.cy, r319_Geom.MidY), r331_s * r319_Geom.Size * r1_fallback(r331_pp.size, 1) - r331_in * r331_sw, r331_in * r331_sw));
                    };
                    var r319_ConvexWhitePolygonImpl = function (r332_fn, r332_props) {
                        var _r332_t0, _r332_t1;
                        var r332_pp = r1_fallback(r332_props, {});
                        var r332_sh = r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, r332_fn(r1_fallback(r332_pp.cx, r319_Geom.MidX), r1_fallback(r332_pp.cy, r319_Geom.MidY), r319_Geom.Size * r1_fallback(r332_pp.size, 1), 0));
                        return r319_ConvexPolygonOutline(r332_sh, r1_fallback(r332_pp.sw, r313_GeometryStroke));
                    };
                    var r319_StdWhiteShape = function (r334_fn, r334_name, r334_unicode, r334_props) {
                        var _r334_t0, _r334_t1;
                        return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName(r334_name), r319_MangleUnicode(r334_unicode), new r313_xn$Capture$2Lrc8.GlyphProc(function (r337_currentGlyph) {
                            var _r337_t0, _r337_t1;
                            r337_currentGlyph.setWidth(r319_Geom.Width);
                            r337_currentGlyph.include(r319_StdWhiteShapeImpl(r334_fn, 1, 0, 1, r334_props));
                            return void 0;
                        }));
                    };
                    var r319_InnerShapeSize = function (r340_props) {
                        var _r340_t0, _r340_t1;
                        var r340_pp = r1_fallback(r340_props, {});
                        return r1_fallback(r340_pp.innerSize, 0.5) * (r319_Geom.Size * r1_fallback(r340_pp.size, 1) - r1_fallback(r340_pp.sw, r313_GeometryStroke));
                    };
                    var r319_StdWhiteContainingBlackShape = function (r341_fn, r341_name, r341_unicode, r341_props) {
                        var _r341_t0, _r341_t1;
                        var r341_pp = r1_fallback(r341_props, {});
                        return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName(r341_name), r319_MangleUnicode(r341_unicode), new r313_xn$Capture$2Lrc8.GlyphProc(function (r344_currentGlyph) {
                            var _r344_t0, _r344_t1;
                            r344_currentGlyph.setWidth(r319_Geom.Width);
                            r344_currentGlyph.include(r341_fn(r1_fallback(r341_pp.cx, r319_Geom.MidX), r1_fallback(r341_pp.cy, r319_Geom.MidY), r319_InnerShapeSize(r341_pp), 0));
                            r344_currentGlyph.include(r319_StdWhiteShapeImpl(r341_fn, 1, 0, 1, r341_props));
                            return void 0;
                        }));
                    };
                    var r319_ConvexPolygonWhiteContainingBlackShape = function (r348_fn, r348_name, r348_unicode, r348_props) {
                        var _r348_t0, _r348_t1;
                        var r348_pp = r1_fallback(r348_props, {});
                        return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName(r348_name), r319_MangleUnicode(r348_unicode), new r313_xn$Capture$2Lrc8.GlyphProc(function (r351_currentGlyph) {
                            var _r351_t0, _r351_t1;
                            r351_currentGlyph.setWidth(r319_Geom.Width);
                            var r351_sw = r1_fallback(r348_pp.sw, r313_GeometryStroke);
                            r351_currentGlyph.include(r348_fn(r1_fallback(r348_pp.cx, r319_Geom.MidX), r1_fallback(r348_pp.cy, r319_Geom.MidY), r319_InnerShapeSize(r348_pp), 0));
                            r351_currentGlyph.include(r319_ConvexWhitePolygonImpl(r348_fn, r348_props));
                            return void 0;
                        }));
                    };
                    var r319_StdGeomTargetShape = function (r355_fn, r355_name, r355_unicode, r355_props) {
                        var _r355_t0, _r355_t1;
                        var r355_pp = r1_fallback(r355_props, {});
                        return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName(r355_name), r319_MangleUnicode(r355_unicode), new r313_xn$Capture$2Lrc8.GlyphProc(function (r358_currentGlyph) {
                            var _r358_t0, _r358_t1;
                            r358_currentGlyph.setWidth(r319_Geom.Width);
                            var r358_sw = r1_fallback(r355_pp.sw, r313_GeometryStroke);
                            r358_currentGlyph.include(r355_fn(r1_fallback(r355_pp.cx, r319_Geom.MidX), r1_fallback(r355_pp.cy, r319_Geom.MidY), r1_fallback(r355_pp.innerSize, 0.25) * (r319_Geom.Size * r1_fallback(r355_pp.size, 1) - r358_sw * 2), 0));
                            r358_currentGlyph.include(r319_StdWhiteShapeImpl(r355_fn, 1, 0, 1, r355_props));
                            r358_currentGlyph.include(r319_StdWhiteShapeImpl(r355_fn, r1_mix(1, r1_fallback(r355_pp.innerSize, 0.25), 0.5), 0, 1, r355_props));
                            return void 0;
                        }));
                    };
                    var r319_StdDoubleWhite = function (r363_fn, r363_name, r363_unicode, r363_props) {
                        var _r363_t0, _r363_t1;
                        var r363_pp = r1_fallback(r363_props, {});
                        return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName(r363_name), r319_MangleUnicode(r363_unicode), new r313_xn$Capture$2Lrc8.GlyphProc(function (r366_currentGlyph) {
                            var _r366_t0, _r366_t1;
                            r366_currentGlyph.setWidth(r319_Geom.Width);
                            var r366_sw = r1_fallback(r363_pp.sw, r313_GeometryStroke);
                            r366_currentGlyph.include(r313_difference(r363_fn(r1_fallback(r363_pp.cx, r319_Geom.MidX), r1_fallback(r363_pp.cy, r319_Geom.MidY), 0.5 * (r319_Geom.Size * r1_fallback(r363_pp.size, 1) - r366_sw), 0), r363_fn(r1_fallback(r363_pp.cx, r319_Geom.MidX), r1_fallback(r363_pp.cy, r319_Geom.MidY), 0.5 * (r319_Geom.Size * r1_fallback(r363_pp.size, 1) - r366_sw) - r366_sw, r366_sw)));
                            r366_currentGlyph.include(r313_difference(r363_fn(r1_fallback(r363_pp.cx, r319_Geom.MidX), r1_fallback(r363_pp.cy, r319_Geom.MidY), r319_Geom.Size * r1_fallback(r363_pp.size, 1), 0), r363_fn(r1_fallback(r363_pp.cx, r319_Geom.MidX), r1_fallback(r363_pp.cy, r319_Geom.MidY), r319_Geom.Size * r1_fallback(r363_pp.size, 1) - r366_sw, r366_sw)));
                            return void 0;
                        }));
                    };
                    var r319_ConvexWhitePolygon = function (r370_fn, r370_name, r370_unicode, r370_props) {
                        var _r370_t0, _r370_t1;
                        return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName(r370_name), r319_MangleUnicode(r370_unicode), new r313_xn$Capture$2Lrc8.GlyphProc(function (r373_currentGlyph) {
                            var _r373_t0, _r373_t1;
                            r373_currentGlyph.setWidth(r319_Geom.Width);
                            r373_currentGlyph.include(r319_ConvexWhitePolygonImpl(r370_fn, r370_props));
                            return void 0;
                        }));
                    };
                    (function () {
                        var r377_SquareShape = function (r378_cx, r378_cy, r378_size) {
                            var _r378_t0, _r378_t1;
                            return r313_xn$spirooutline$1aao(r313_corner(r378_cx - r378_size, r378_cy + r378_size), r313_corner(r378_cx + r378_size, r378_cy + r378_size), r313_corner(r378_cx + r378_size, r378_cy - r378_size), r313_corner(r378_cx - r378_size, r378_cy - r378_size));
                        };
                        r319_StdBlackShape(r377_SquareShape, "blackSquare", 9632);
                        r319_StdWhiteShape(r377_SquareShape, "whiteSquare", 9633);
                        r319_StdWhiteShape(r377_SquareShape, "lightWhiteSquare", 128910, {
                            "sw": r313_UnicodeWeightGrade(300, r319_Geom.Scalar, r313_GeometryStroke)
                        });
                        r319_StdWhiteShape(r377_SquareShape, "mediumWhiteSquare", 128911, {
                            "sw": r313_UnicodeWeightGrade(500, r319_Geom.Scalar, r313_GeometryStroke)
                        });
                        r319_StdWhiteShape(r377_SquareShape, "boldWhiteSquare", 128912, {
                            "sw": r313_UnicodeWeightGrade(700, r319_Geom.Scalar, r313_GeometryStroke)
                        });
                        r319_StdWhiteShape(r377_SquareShape, "heavyWhiteSquare", 128913, {
                            "sw": r313_UnicodeWeightGrade(900, r319_Geom.Scalar, r313_GeometryStroke)
                        });
                        r319_StdWhiteShape(r377_SquareShape, "veryHeavyWhiteSquare", 128914, {
                            "sw": r313_UnicodeWeightGrade(1000, r319_Geom.Scalar, r313_GeometryStroke)
                        });
                        r319_StdWhiteShape(r377_SquareShape, "exHeavyWhiteSquare", 128915, {
                            "sw": r313_UnicodeWeightGrade(1100, r319_Geom.Scalar, r313_GeometryStroke)
                        });
                        r319_StdBlackShape(r377_SquareShape, "blackLargeSquare", 11035, r319_Size.Large);
                        r319_StdBlackShape(r377_SquareShape, "blackMediumSquare", 9724, r319_Size.Medium);
                        r319_StdBlackShape(r377_SquareShape, "blackMediumSmallSquare", 9726, r319_Size.MediumSmall);
                        r319_StdBlackShape(r377_SquareShape, "blackSmallSquare", 9642, r319_Size.Small);
                        r319_StdBlackShape(r377_SquareShape, "blackVerySmallSquare", 11037, r319_Size.VerySmall);
                        r319_StdBlackShape(r377_SquareShape, "blackSlightlySmallSquare", 128909, r319_Size.SlightlySmall);
                        r319_StdBlackShape(r377_SquareShape, "blackTinySmallSquare", 128908, r319_Size.Tiny);
                        r319_StdBlackShape(r377_SquareShape, "blackCenteredSquare", 11200);
                        r319_StdWhiteShape(r377_SquareShape, "whiteLargeSquare", 11036, r319_Size.Large);
                        r319_StdWhiteShape(r377_SquareShape, "whiteMediumSquare", 9723, r319_Size.Medium);
                        r319_StdWhiteShape(r377_SquareShape, "whiteMediumSmallSquare", 9725, r319_Size.MediumSmall);
                        r319_StdWhiteShape(r377_SquareShape, "whiteSmallSquare", 9643, r319_Size.Small);
                        r319_StdWhiteShape(r377_SquareShape, "whiteVerySmallSquare", 11038, r319_Size.VerySmall);
                        r319_StdWhiteContainingBlackShape(r377_SquareShape, "whiteSquareWithCenter", 9635);
                        r319_StdWhiteContainingBlackShape(r377_SquareShape, "whiteSquareContainingBlackVerySmallSquare", 128916, r319_Size.TinyInner);
                        r319_StdWhiteContainingBlackShape(r377_SquareShape, "whiteSquareContainingBlackMediumSquare", 128917, r319_Size.MediumInner);
                        r319_StdWhiteContainingBlackShape(r377_SquareShape, "heavyWhiteSquareContainingBlackMediumSquare", 118277, Object.assign(r319_Size.TinyInner, {
                            "sw": r313_UnicodeWeightGrade(900, r319_Geom.Scalar, r313_GeometryStroke)
                        }));
                        r319_StdGeomTargetShape(r377_SquareShape, "squareTarget", 128918);
                        var r377_TriangleRBFill = function (r379_cx, r379_cy, r379_size) {
                            var _r379_t0, _r379_t1;
                            return r313_xn$spirooutline$1aao(r313_corner(r379_cx + r379_size, r379_cy + r379_size), r313_corner(r379_cx + r379_size, r379_cy - r379_size), r313_corner(r379_cx - r379_size, r379_cy - r379_size));
                        };
                        var r377_TriangleLBFill = function (r380_cx, r380_cy, r380_size) {
                            var _r380_t0, _r380_t1;
                            return r313_xn$spirooutline$1aao(r313_corner(r380_cx - r380_size, r380_cy + r380_size), r313_corner(r380_cx + r380_size, r380_cy - r380_size), r313_corner(r380_cx - r380_size, r380_cy - r380_size));
                        };
                        var r377_TriangleLTFill = function (r381_cx, r381_cy, r381_size) {
                            var _r381_t0, _r381_t1;
                            return r313_xn$spirooutline$1aao(r313_corner(r381_cx - r381_size, r381_cy + r381_size), r313_corner(r381_cx + r381_size, r381_cy + r381_size), r313_corner(r381_cx - r381_size, r381_cy - r381_size));
                        };
                        var r377_TriangleRTFill = function (r382_cx, r382_cy, r382_size) {
                            var _r382_t0, _r382_t1;
                            return r313_xn$spirooutline$1aao(r313_corner(r382_cx - r382_size, r382_cy + r382_size), r313_corner(r382_cx + r382_size, r382_cy + r382_size), r313_corner(r382_cx + r382_size, r382_cy - r382_size));
                        };
                        r319_StdBlackShape(r377_TriangleRBFill, "blackTriangleRB", 9698);
                        r319_ConvexWhitePolygon(r377_TriangleRBFill, "whiteTriangleRB", 9727);
                        r319_StdBlackShape(r377_TriangleLBFill, "blackTriangleLB", 9699);
                        r319_ConvexWhitePolygon(r377_TriangleLBFill, "whiteTriangleLB", 9722);
                        r319_StdBlackShape(r377_TriangleLTFill, "blackTriangleLT", 9700);
                        r319_ConvexWhitePolygon(r377_TriangleLTFill, "whiteTriangleLT", 9720);
                        r319_StdBlackShape(r377_TriangleRTFill, "blackTriangleRT", 9701);
                        r319_ConvexWhitePolygon(r377_TriangleRTFill, "whiteTriangleRT", 9721);
                        var r377_SquareOverlap = function (r383_name, r383_unicode, r383_rev, r383_square1, r383_square2) {
                            var _r383_t0, _r383_t1;
                            return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName(r383_name), r319_MangleUnicode(r383_unicode), new r313_xn$Capture$2Lrc8.GlyphProc(function (r386_currentGlyph) {
                                var _r386_t0, _r386_t1;
                                r386_currentGlyph.setWidth(r319_Geom.Width);
                                var r386_space = r319_Geom.Width * (1 - r319_Size.Medium.size);
                                var r386_offsetX = r386_space * 0.45 * (r383_rev ? -1 : +1);
                                var r386_offsetY = r386_space * 0.45;
                                r386_currentGlyph.include(r313_union(r319_xn$withtransform$5sIl(r313_Translate(-r386_offsetX, -r386_offsetY), r319_xn$referglyph$1aao(r319_MangleName(r383_square1 ? "blackMediumSquare" : "whiteMediumSquare"))), r319_xn$withtransform$5sIl(r313_Translate(+r386_offsetX, +r386_offsetY), r319_xn$referglyph$1aao(r319_MangleName(r383_square2 ? "blackMediumSquare" : "whiteMediumSquare")))));
                                return void 0;
                            }));
                        };
                        r377_SquareOverlap("revOverlapWWSquare", 10697, 1, 0, 0);
                        r377_SquareOverlap("overlapWWSquare", 11194, 0, 0, 0);
                        r377_SquareOverlap("overlapWBSquare", 11195, 0, 0, 1);
                        return r377_SquareOverlap("overlapBBSquare", 11196, 0, 1, 1);
                    })();
                    (function () {
                        var r390_HoriRectangleFill = function (r391_cx, r391_cy, r391_r) {
                            var _r391_t0, _r391_t1;
                            return r313_xn$spirooutline$1aao(r313_corner(r391_cx - r391_r, r391_cy + r391_r / 1.5), r313_corner(r391_cx + r391_r, r391_cy + r391_r / 1.5), r313_corner(r391_cx + r391_r, r391_cy - r391_r / 1.5), r313_corner(r391_cx - r391_r, r391_cy - r391_r / 1.5));
                        };
                        r319_StdBlackShape(r390_HoriRectangleFill, "blackHoriRectangle", 9644);
                        r319_ConvexWhitePolygon(r390_HoriRectangleFill, "whiteHoriRectangle", 9645);
                        var r390_VertRectangleFill = function (r392_cx, r392_cy, r392_r) {
                            var _r392_t0, _r392_t1;
                            return r313_xn$spirooutline$1aao(r313_corner(r392_cx - r392_r / 1.5, r392_cy + r392_r), r313_corner(r392_cx + r392_r / 1.5, r392_cy + r392_r), r313_corner(r392_cx + r392_r / 1.5, r392_cy - r392_r), r313_corner(r392_cx - r392_r / 1.5, r392_cy - r392_r));
                        };
                        r319_StdBlackShape(r390_VertRectangleFill, "blackVertRectangle", 9646);
                        r319_ConvexWhitePolygon(r390_VertRectangleFill, "whiteVertRectangle", 9647);
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("whiteVertRectangleBar"), r319_MangleUnicode(118278), new r313_xn$Capture$2Lrc8.GlyphProc(function (r395_currentGlyph) {
                            var _r395_t0, _r395_t1;
                            r395_currentGlyph.setWidth(r319_Geom.Width);
                            r395_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteVertRectangle")));
                            r395_currentGlyph.include(r319_HBar.m(r319_Geom.MidX - r319_Geom.Size, r319_Geom.MidX + r319_Geom.Size, r319_Geom.MidY, r313_GeometryStroke));
                            return void 0;
                        }));
                        var r390_ParallelogramFill = function (r399_cx, r399_cy, r399_r) {
                            var _r399_t0, _r399_t1;
                            var r399_skew = r399_r * 1 / 4;
                            return r313_xn$spirooutline$1aao(r313_corner(r399_cx - r399_r + r399_skew, r399_cy + r399_r / 1.5), r313_corner(r399_cx + r399_r + r399_skew, r399_cy + r399_r / 1.5), r313_corner(r399_cx + r399_r - r399_skew, r399_cy - r399_r / 1.5), r313_corner(r399_cx - r399_r - r399_skew, r399_cy - r399_r / 1.5));
                        };
                        r319_StdBlackShape(r390_ParallelogramFill, "blackParallelogram", 9648);
                        r319_ConvexWhitePolygon(r390_ParallelogramFill, "whiteParallelogram", 9649);
                        r319_alias(r319_MangleName("flatness"), r319_MangleUnicode(9189), r319_MangleName("whiteParallelogram"));
                        var r390_TrapeziumFill = function (r400_cx, r400_cy, r400_r) {
                            var _r400_t0, _r400_t1;
                            var r400_skew = r400_r * 1 / 4;
                            return r313_xn$spirooutline$1aao(r313_corner(r400_cx - r400_r, r400_cy + r400_r / 1.5), r313_corner(r400_cx + r400_r - r400_skew, r400_cy + r400_r / 1.5), r313_corner(r400_cx + r400_r, r400_cy - r400_r / 1.5), r313_corner(r400_cx - r400_r, r400_cy - r400_r / 1.5));
                        };
                        return r319_ConvexWhitePolygon(r390_TrapeziumFill, "whiteTrapezium", 9186);
                    })();
                    (function () {
                        var r402_triangleOvershoot = 0.7 * Math.sqrt(3);
                        var r402_TriangleUpFill = function (r403_cx, r403_cy, r403_size) {
                            var _r403_t0, _r403_t1;
                            return r313_xn$spirooutline$1aao(r313_corner(r403_cx, r403_cy + r403_size), r313_corner(r403_cx + r403_size * r402_triangleOvershoot, r403_cy - r403_size), r313_corner(r403_cx - r403_size * r402_triangleOvershoot, r403_cy - r403_size));
                        };
                        var r402_TriangleDownFill = function (r404_cx, r404_cy, r404_size) {
                            var _r404_t0, _r404_t1;
                            return r313_xn$spirooutline$1aao(r313_corner(r404_cx, r404_cy - r404_size), r313_corner(r404_cx + r404_size * r402_triangleOvershoot, r404_cy + r404_size), r313_corner(r404_cx - r404_size * r402_triangleOvershoot, r404_cy + r404_size));
                        };
                        var r402_TriangleLeftFill = function (r405_cx, r405_cy, r405_size) {
                            var _r405_t0, _r405_t1;
                            return r313_xn$spirooutline$1aao(r313_corner(r405_cx - r405_size, r405_cy), r313_corner(r405_cx + r405_size, r405_cy - r405_size * r402_triangleOvershoot), r313_corner(r405_cx + r405_size, r405_cy + r405_size * r402_triangleOvershoot));
                        };
                        var r402_TriangleLeftThinFill = function (r406_cx, r406_cy, r406_size) {
                            var _r406_t0, _r406_t1;
                            return r313_xn$spirooutline$1aao(r313_corner(r406_cx - r406_size, r406_cy), r313_corner(r406_cx + r406_size, r406_cy - r406_size * r402_triangleOvershoot * (2 / 3)), r313_corner(r406_cx + r406_size, r406_cy + r406_size * r402_triangleOvershoot * (2 / 3)));
                        };
                        var r402_TriangleRightFill = function (r407_cx, r407_cy, r407_size) {
                            var _r407_t0, _r407_t1;
                            return r313_xn$spirooutline$1aao(r313_corner(r407_cx + r407_size, r407_cy), r313_corner(r407_cx - r407_size, r407_cy - r407_size * r402_triangleOvershoot), r313_corner(r407_cx - r407_size, r407_cy + r407_size * r402_triangleOvershoot));
                        };
                        var r402_TriangleRightThinFill = function (r408_cx, r408_cy, r408_size) {
                            var _r408_t0, _r408_t1;
                            return r313_xn$spirooutline$1aao(r313_corner(r408_cx + r408_size, r408_cy), r313_corner(r408_cx - r408_size, r408_cy - r408_size * r402_triangleOvershoot * (2 / 3)), r313_corner(r408_cx - r408_size, r408_cy + r408_size * r402_triangleOvershoot * (2 / 3)));
                        };
                        var r402_IsoRtTriangleUpFill = function (r409_cx, r409_cy, r409_size) {
                            var _r409_t0, _r409_t1;
                            return r313_xn$spirooutline$1aao(r313_corner(r409_cx, r409_cy + r409_size / 2), r313_corner(r409_cx + r409_size, r409_cy - r409_size / 2), r313_corner(r409_cx - r409_size, r409_cy - r409_size / 2));
                        };
                        var r402_IsoRtTriangleDownFill = function (r410_cx, r410_cy, r410_size) {
                            var _r410_t0, _r410_t1;
                            return r313_xn$spirooutline$1aao(r313_corner(r410_cx + r410_size, r410_cy + r410_size / 2), r313_corner(r410_cx - r410_size, r410_cy + r410_size / 2), r313_corner(r410_cx, r410_cy - r410_size / 2));
                        };
                        var r402_IsoRtTriangleLeftFill = function (r411_cx, r411_cy, r411_size) {
                            var _r411_t0, _r411_t1;
                            return r313_xn$spirooutline$1aao(r313_corner(r411_cx - r411_size / 2, r411_cy), r313_corner(r411_cx + r411_size / 2, r411_cy - r411_size), r313_corner(r411_cx + r411_size / 2, r411_cy + r411_size));
                        };
                        var r402_IsoRtTriangleRightFill = function (r412_cx, r412_cy, r412_size) {
                            var _r412_t0, _r412_t1;
                            return r313_xn$spirooutline$1aao(r313_corner(r412_cx + r412_size / 2, r412_cy), r313_corner(r412_cx - r412_size / 2, r412_cy - r412_size), r313_corner(r412_cx - r412_size / 2, r412_cy + r412_size));
                        };
                        r319_StdBlackShape(r402_TriangleUpFill, "blackTriangleUp", 9650, r319_Size.Oblique);
                        r319_ConvexWhitePolygon(r402_TriangleUpFill, "whiteTriangleUp", 9651, r319_Size.Oblique);
                        r319_StdBlackShape(r402_TriangleUpFill, "blackSmallTriangleUp", 9652, r319_Size.SmallOblique);
                        r319_ConvexWhitePolygon(r402_TriangleUpFill, "whiteSmallTriangleUp", 9653, r319_Size.SmallOblique);
                        r319_StdBlackShape(r402_TriangleRightFill, "blackTriangleRight", 9654, r319_Size.Oblique);
                        r319_ConvexWhitePolygon(r402_TriangleRightFill, "whiteTriangleRight", 9655, r319_Size.Oblique);
                        r319_StdBlackShape(r402_TriangleRightFill, "blackSmallTriangleRight", 9656, r319_Size.SmallOblique);
                        r319_ConvexWhitePolygon(r402_TriangleRightFill, "whiteSmallTriangleRight", 9657, r319_Size.SmallOblique);
                        r319_StdBlackShape(r402_TriangleRightThinFill, "blackThinTriangleRight", 9658, r319_Size.Oblique);
                        r319_ConvexWhitePolygon(r402_TriangleRightThinFill, "whiteThinTriangleRight", 9659, r319_Size.Oblique);
                        r319_StdBlackShape(r402_TriangleDownFill, "blackTriangleDown", 9660, r319_Size.Oblique);
                        r319_ConvexWhitePolygon(r402_TriangleDownFill, "whiteTriangleDown", 9661, r319_Size.Oblique);
                        r319_StdBlackShape(r402_TriangleDownFill, "blackSmallTriangleDown", 9662, r319_Size.SmallOblique);
                        r319_ConvexWhitePolygon(r402_TriangleDownFill, "whiteSmallTriangleDown", 9663, r319_Size.SmallOblique);
                        r319_StdBlackShape(r402_TriangleLeftFill, "blackTriangleLeft", 9664, r319_Size.Oblique);
                        r319_ConvexWhitePolygon(r402_TriangleLeftFill, "whiteTriangleLeft", 9665, r319_Size.Oblique);
                        r319_StdBlackShape(r402_TriangleLeftFill, "blackSmallTriangleLeft", 9666, r319_Size.SmallOblique);
                        r319_ConvexWhitePolygon(r402_TriangleLeftFill, "whiteSmallTriangleLeft", 9667, r319_Size.SmallOblique);
                        r319_StdBlackShape(r402_TriangleLeftThinFill, "blackThinTriangleLeft", 9668, r319_Size.Oblique);
                        r319_ConvexWhitePolygon(r402_TriangleLeftThinFill, "whiteThinTriangleLeft", 9669, r319_Size.Oblique);
                        r319_StdBlackShape(r402_TriangleUpFill, "blackCenterMediumTriangleUp", 11205, r319_Size.MediumOblique);
                        r319_StdBlackShape(r402_TriangleDownFill, "blackCenterMediumTriangleDown", 11206, r319_Size.MediumOblique);
                        r319_StdBlackShape(r402_TriangleLeftFill, "blackCenterMediumTriangleLeft", 11207, r319_Size.MediumOblique);
                        r319_StdBlackShape(r402_TriangleRightFill, "blackCenterMediumTriangleRight", 11208, r319_Size.MediumOblique);
                        r319_StdBlackShape(r402_IsoRtTriangleLeftFill, "isoRtTriangleLeft", 128896, r319_Size.Oblique);
                        r319_StdBlackShape(r402_IsoRtTriangleUpFill, "isoRtTriangleUp", 128897, r319_Size.Oblique);
                        r319_StdBlackShape(r402_IsoRtTriangleRightFill, "isoRtTriangleRight", 128898, r319_Size.Oblique);
                        r319_StdBlackShape(r402_IsoRtTriangleDownFill, "isoRtTriangleDown", 128899, r319_Size.Oblique);
                        var r402_TriangularWedgeFill = function (r413_cx, r413_cy, r413_size) {
                            var _r413_t0, _r413_t1;
                            return r313_intersection(r402_TriangleUpFill(r413_cx, r413_cy, r413_size), r313_union(r313_dispiro(r313_widths.rhs(r313_GeometryStroke), r313_corner(r413_cx, r413_cy + r413_size), r313_corner(r413_cx + r413_size * r402_triangleOvershoot, r413_cy - r413_size)), r313_dispiro(r313_widths.lhs(r313_GeometryStroke), r313_corner(r413_cx, r413_cy + r413_size), r313_corner(r413_cx - r413_size * r402_triangleOvershoot, r413_cy - r413_size))));
                        };
                        var r402_TriangularVeeFill = function (r414_cx, r414_cy, r414_size) {
                            var _r414_t0, _r414_t1;
                            return r313_intersection(r402_TriangleDownFill(r414_cx, r414_cy, r414_size), r313_union(r313_dispiro(r313_widths.lhs(r313_GeometryStroke), r313_corner(r414_cx, r414_cy - r414_size), r313_corner(r414_cx + r414_size * r402_triangleOvershoot, r414_cy + r414_size)), r313_dispiro(r313_widths.rhs(r313_GeometryStroke), r313_corner(r414_cx, r414_cy - r414_size), r313_corner(r414_cx - r414_size * r402_triangleOvershoot, r414_cy + r414_size))));
                        };
                        r319_StdBlackShape(r402_TriangularWedgeFill, "triangularWedge", null);
                        return r319_StdBlackShape(r402_TriangularVeeFill, "triangularVee", null);
                    })();
                    (function () {
                        var r416_DiamondFill = function (r417_cx, r417_cy, r417_size) {
                            var _r417_t0, _r417_t1;
                            return r313_xn$spirooutline$1aao(r313_corner(r417_cx, r417_cy + r417_size), r313_corner(r417_cx + r417_size, r417_cy), r313_corner(r417_cx, r417_cy - r417_size), r313_corner(r417_cx - r417_size, r417_cy));
                        };
                        r319_StdBlackShape(r416_DiamondFill, "blackDiamond", 9670, r319_Size.Oblique);
                        r319_StdBlackShape(r416_DiamondFill, "blackCenteredDiamond", 11201, r319_Size.Oblique);
                        r319_StdWhiteShape(r416_DiamondFill, "whiteDiamond", 9671, r319_Size.Oblique);
                        r319_StdWhiteShape(r416_DiamondFill, "whiteDiamondOperatorImpl", null, Object.assign({}, r319_Size.Oblique, {
                            "sw": Math.SQRT2 * r313_AdviceStroke(4)
                        }));
                        r319_StdBlackShape(r416_DiamondFill, "blackMediumDiamond", 11045, r319_Size.MediumOblique);
                        r319_StdBlackShape(r416_DiamondFill, "blackSmallDiamond", 11049, r319_Size.SmallOblique);
                        r319_StdBlackShape(r416_DiamondFill, "blackTinyDiamond", 128919, r319_Size.TinyOblique);
                        r319_StdBlackShape(r416_DiamondFill, "blackVerySmallDiamond", 128920, r319_Size.VerySmallOblique);
                        r319_StdBlackShape(r416_DiamondFill, "blackMediumSmallDiamond", 128921, r319_Size.MediumSmallOblique);
                        r319_StdWhiteShape(r416_DiamondFill, "whiteMediumDiamond", 11046, r319_Size.MediumOblique);
                        r319_StdWhiteContainingBlackShape(r416_DiamondFill, "whiteDiamondWithCenter", 9672, r319_Size.Oblique);
                        r319_StdWhiteContainingBlackShape(r416_DiamondFill, "whiteDiamondContainingBlackVerySmallDiamond", 128922, Object.assign({}, r319_Size.TinyInner, r319_Size.Oblique));
                        r319_StdWhiteContainingBlackShape(r416_DiamondFill, "whiteDiamondContainingBlackMediumDiamond", 128923, Object.assign({}, r319_Size.MediumInner, r319_Size.Oblique));
                        return r319_StdGeomTargetShape(r416_DiamondFill, "diamondTarget", 128924, r319_Size.Oblique);
                    })();
                    (function () {
                        var r419_LozengeFill = function (r420_cx, r420_cy, r420_size) {
                            var _r420_t0, _r420_t1;
                            return r313_xn$spirooutline$1aao(r313_corner(r420_cx, r420_cy + r420_size), r313_corner(r420_cx + r420_size * 2 / 3, r420_cy), r313_corner(r420_cx, r420_cy - r420_size), r313_corner(r420_cx - r420_size * 2 / 3, r420_cy));
                        };
                        r319_StdBlackShape(r419_LozengeFill, "blackLozenge", 10731, r319_Size.Oblique);
                        r319_ConvexWhitePolygon(r419_LozengeFill, "whiteLozenge", 9674, r319_Size.Oblique);
                        r319_StdBlackShape(r419_LozengeFill, "blackMediumLozenge", 11047, r319_Size.MediumOblique);
                        r319_StdBlackShape(r419_LozengeFill, "blackSmallLozenge", 11050, r319_Size.SmallOblique);
                        r319_ConvexWhitePolygon(r419_LozengeFill, "whiteMediumLozenge", 11048, r319_Size.MediumOblique);
                        r319_ConvexWhitePolygon(r419_LozengeFill, "whiteSmallLozenge", 11051, r319_Size.SmallOblique);
                        r319_StdBlackShape(r419_LozengeFill, "blackTinyLozenge", 128925, r319_Size.TinyOblique);
                        r319_StdBlackShape(r419_LozengeFill, "blackVerySmallLozenge", 128926, r319_Size.VerySmallOblique);
                        r319_StdBlackShape(r419_LozengeFill, "blackMediumSmallLozenge", 128927, r319_Size.MediumSmallOblique);
                        return r319_ConvexPolygonWhiteContainingBlackShape(r419_LozengeFill, "whiteLozengeContainingBlackSmallLozenge", 128928, Object.assign({}, r319_Size.SmallInner, r319_Size.Oblique));
                    })();
                    (function () {
                        var r422_SquareLozengeShape = function (r423_cx, r423_cy, r423_size) {
                            var _r423_t0, _r423_t1;
                            var r423_p = 0.7;
                            return r313_xn$spirooutline$1aao(r313_corner(r423_cx - r423_size, r423_cy + r423_size), r313_g4(r423_cx, r423_cy + r423_p * r423_size), r313_corner(r423_cx + r423_size, r423_cy + r423_size), r313_g4(r423_cx + r423_p * r423_size, r423_cy), r313_corner(r423_cx + r423_size, r423_cy - r423_size), r313_g4(r423_cx, r423_cy - r423_p * r423_size), r313_corner(r423_cx - r423_size, r423_cy - r423_size), r313_g4(r423_cx - r423_p * r423_size, r423_cy), r313_close());
                        };
                        r319_StdWhiteShape(r422_SquareLozengeShape, "squareLozenge", 8977, r319_Size.SmallOblique);
                        r319_StdWhiteShape(r422_SquareLozengeShape, "rotatedWhiteFourPointedCusp", 11215, r319_Size.MediumOblique);
                        return r319_StdBlackShape(r422_SquareLozengeShape, "rotatedBlackFourPointedCusp", 11213, r319_Size.MediumOblique);
                    })();
                    (function () {
                        var r425_DiamondLazongeShape = function (r426_cx, r426_cy, r426_size) {
                            var _r426_t0, _r426_t1;
                            var r426_p = 0.7;
                            return r313_xn$spirooutline$1aao(r313_corner(r426_cx - r426_size, r426_cy), r313_g4(r1_mix(r426_cx, r1_mix(r426_cx - r426_size, r426_cx, 0.5), r426_p), r1_mix(r426_cy, r1_mix(r426_cy, r426_cy - r426_size, 0.5), r426_p)), r313_corner(r426_cx, r426_cy - r426_size), r313_g4(r1_mix(r426_cx, r1_mix(r426_cx, r426_cx + r426_size, 0.5), r426_p), r1_mix(r426_cy, r1_mix(r426_cy - r426_size, r426_cy, 0.5), r426_p)), r313_corner(r426_cx + r426_size, r426_cy), r313_g4(r1_mix(r426_cx, r1_mix(r426_cx + r426_size, r426_cx, 0.5), r426_p), r1_mix(r426_cy, r1_mix(r426_cy, r426_cy + r426_size, 0.5), r426_p)), r313_corner(r426_cx, r426_cy + r426_size), r313_g4(r1_mix(r426_cx, r1_mix(r426_cx, r426_cx - r426_size, 0.5), r426_p), r1_mix(r426_cy, r1_mix(r426_cy + r426_size, r426_cy, 0.5), r426_p)), r313_close());
                        };
                        r319_StdWhiteShape(r425_DiamondLazongeShape, "whiteConcaveSidedDiamond", 10209, Object.assign({}, r319_Size.Oblique, {
                            "sw": Math.SQRT2 * r313_UnicodeWeightGrade(600, r319_Geom.Scalar, r313_GeometryStroke)
                        }));
                        r319_StdBlackShape(r425_DiamondLazongeShape, "lightFourPointedBlackCusp", 11212, r319_Size.Oblique);
                        return r319_StdWhiteShape(r425_DiamondLazongeShape, "whiteFourPointedBlackCusp", 11214, r319_Size.ObliqueSA);
                    })();
                    (function () {
                        var r428_CircleShape = function (r429_cx, r429_cy, r429_size) {
                            var _r429_t0, _r429_t1;
                            return r313_xn$spirooutline$1aao(r313_g4(r429_cx - r429_size, r429_cy), r313_arcvh.superness(2), r313_g4(r429_cx, r429_cy - r429_size), r313_archv.superness(2), r313_g4(r429_cx + r429_size, r429_cy), r313_arcvh.superness(2), r313_g4(r429_cx, r429_cy + r429_size), r313_archv.superness(2), r313_close());
                        };
                        var r428_CircleInvertInnerShape = function (r430_cx, r430_cy, r430_size, r430_sw) {
                            var _r430_t0, _r430_t1;
                            var r430_sizeOrig = r430_size + r430_sw;
                            var r430_rs = r319_Geom.TallSize / (r430_sizeOrig * 1.5);
                            return r428_CircleShape(r430_cx, r430_cy, r430_sizeOrig * r430_rs - r430_sw);
                        };
                        r319_StdBlackShape(r428_CircleShape, "blackCircleO", null, {
                            "size": 0.995
                        });
                        r319_StdBlackShape(r428_CircleShape, "blackCircle", 9679);
                        r319_StdWhiteShape(r428_CircleShape, "whiteCircle", 9675);
                        r319_StdWhiteShape(r428_CircleShape, "mediumWhiteCircle", 128901, {
                            "sw": r313_UnicodeWeightGrade(600, r319_Geom.Scalar, r313_GeometryStroke)
                        });
                        r319_StdWhiteShape(r428_CircleShape, "boldWhiteCircle", 128902, {
                            "sw": r313_UnicodeWeightGrade(700, r319_Geom.Scalar, r313_GeometryStroke)
                        });
                        r319_StdWhiteShape(r428_CircleShape, "heavyWhiteCircle", 128903, {
                            "sw": r313_UnicodeWeightGrade(900, r319_Geom.Scalar, r313_GeometryStroke)
                        });
                        r319_StdWhiteShape(r428_CircleShape, "veryHeavyWhiteCircle", 128904, {
                            "sw": r313_UnicodeWeightGrade(1000, r319_Geom.Scalar, r313_GeometryStroke)
                        });
                        r319_StdWhiteShape(r428_CircleShape, "exHeavyWhiteCircle", 128905, {
                            "sw": r313_UnicodeWeightGrade(1100, r319_Geom.Scalar, r313_GeometryStroke)
                        });
                        r319_StdWhiteShape(r428_CircleShape, "heavyLargeCircle", 11093, Object.assign({
                            "sw": r313_UnicodeWeightGrade(900, r319_Geom.Scalar, r313_GeometryStroke)
                        }, r319_Size.Large));
                        r319_StdBlackShape(r428_CircleShape, "blackVerySmallCircle", null, r319_Size.VerySmall);
                        r319_StdBlackShape(r428_CircleShape, "blackSmallCircle", null, r319_Size.Small);
                        r319_StdBlackShape(r428_CircleShape, "blackMediumSmallCircle", 10625, r319_Size.MediumSmall);
                        r319_StdBlackShape(r428_CircleShape, "blackSlightlySmallCircle", 128900, r319_Size.SlightlySmall);
                        r319_StdBlackShape(r428_CircleShape, "blackMediumCircle", 9899, r319_Size.Medium);
                        r319_StdBlackShape(r428_CircleShape, "blackLargeCircle", 11044, r319_Size.Large);
                        r319_StdWhiteShape(r428_CircleShape, "whiteVerySmallCircle", null, r319_Size.VerySmall);
                        r319_StdWhiteShape(r428_CircleShape, "whiteSmallCircle", null, r319_Size.Small);
                        r319_StdWhiteShape(r428_CircleShape, "whiteSlightlySmallCircle", null, r319_Size.SlightlySmall);
                        r319_StdWhiteShape(r428_CircleShape, "whiteMediumSmallCircle", 9900, r319_Size.MediumSmall);
                        r319_StdWhiteShape(r428_CircleShape, "whiteMediumCircle", 9898, r319_Size.Medium);
                        r319_StdWhiteShape(r428_CircleShape, "whiteLargeCircle", 9711, r319_Size.Large);
                        r319_StdDoubleWhite(r428_CircleShape, "doubleWhiteCircle", 9678, {
                            "sw": Math.min(r313_GeometryStroke, r313_AdviceStroke(4, r319_Geom.Scalar))
                        });
                        r319_StdWhiteContainingBlackShape(r428_CircleShape, "whiteCircleWithCenter", 9673);
                        r319_StdWhiteContainingBlackShape(r428_CircleShape, "whiteCircleContainingBlackSmallCircle", 128906, r319_Size.SmallInner);
                        r319_StdGeomTargetShape(r428_CircleShape, "circleTarget", 128907);
                        r319_StdBlackShape(r428_CircleInvertInnerShape, "blackInvInnerCircle", null);
                        r319_StdWhiteShape(r428_CircleInvertInnerShape, "whiteInvInnerCircle", null);
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("blackCircleMinusQuarterLeft"), r319_MangleUnicode(117867), new r313_xn$Capture$2Lrc8.GlyphProc(function (r433_currentGlyph) {
                            var _r433_t0, _r433_t1;
                            r433_currentGlyph.setWidth(r319_Geom.Width);
                            r433_currentGlyph.include(r313_difference(r319_xn$referglyph$1aao(r319_MangleName("blackCircle")), r313_xn$spirooutline$1aao(r313_corner(r319_Geom.MidX - r319_Geom.Size, r319_Geom.MidY + r319_Geom.Size), r313_corner(r319_Geom.MidX, r319_Geom.MidY), r313_corner(r319_Geom.MidX - r319_Geom.Size, r319_Geom.MidY - r319_Geom.Size))));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("blackCircleMinusQuarterUp"), r319_MangleUnicode(117868), new r313_xn$Capture$2Lrc8.GlyphProc(function (r438_currentGlyph) {
                            var _r438_t0, _r438_t1;
                            r438_currentGlyph.setWidth(r319_Geom.Width);
                            r438_currentGlyph.include(r313_difference(r319_xn$referglyph$1aao(r319_MangleName("blackCircle")), r313_xn$spirooutline$1aao(r313_corner(r319_Geom.MidX + r319_Geom.Size, r319_Geom.MidY + r319_Geom.Size), r313_corner(r319_Geom.MidX, r319_Geom.MidY), r313_corner(r319_Geom.MidX - r319_Geom.Size, r319_Geom.MidY + r319_Geom.Size))));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("blackCircleMinusQuarterRight"), r319_MangleUnicode(117869), new r313_xn$Capture$2Lrc8.GlyphProc(function (r443_currentGlyph) {
                            var _r443_t0, _r443_t1;
                            r443_currentGlyph.setWidth(r319_Geom.Width);
                            r443_currentGlyph.include(r313_difference(r319_xn$referglyph$1aao(r319_MangleName("blackCircle")), r313_xn$spirooutline$1aao(r313_corner(r319_Geom.MidX + r319_Geom.Size, r319_Geom.MidY - r319_Geom.Size), r313_corner(r319_Geom.MidX, r319_Geom.MidY), r313_corner(r319_Geom.MidX + r319_Geom.Size, r319_Geom.MidY + r319_Geom.Size))));
                            return void 0;
                        }));
                        return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("blackCircleMinusQuarterDown"), r319_MangleUnicode(117870), new r313_xn$Capture$2Lrc8.GlyphProc(function (r448_currentGlyph) {
                            var _r448_t0, _r448_t1;
                            r448_currentGlyph.setWidth(r319_Geom.Width);
                            r448_currentGlyph.include(r313_difference(r319_xn$referglyph$1aao(r319_MangleName("blackCircle")), r313_xn$spirooutline$1aao(r313_corner(r319_Geom.MidX - r319_Geom.Size, r319_Geom.MidY - r319_Geom.Size), r313_corner(r319_Geom.MidX, r319_Geom.MidY), r313_corner(r319_Geom.MidX + r319_Geom.Size, r319_Geom.MidY - r319_Geom.Size))));
                            return void 0;
                        }));
                    })();
                    (function () {
                        var r452_EllipseFillT = function (r453_kx, r453_ky) {
                            var _r453_t0, _r453_t1;
                            return function (r454_cx, r454_cy, r454_r, r454_s) {
                                var _r454_t0, _r454_t1;
                                var r454_rOrig = r454_r + r454_s;
                                return r313_xn$spirooutline$1aao(r313_g4(r454_cx - (r454_rOrig * r453_kx - r454_s), r454_cy), r313_arcvh.superness(2), r313_g4(r454_cx, r454_cy - (r454_rOrig * r453_ky - r454_s)), r313_archv.superness(2), r313_g4(r454_cx + (r454_rOrig * r453_kx - r454_s), r454_cy), r313_arcvh.superness(2), r313_g4(r454_cx, r454_cy + (r454_rOrig * r453_ky - r454_s)), r313_archv.superness(2), r313_close());
                            };
                        };
                        r319_StdBlackShape(r452_EllipseFillT(1, 2 / 3), "blackEllipse", 11052);
                        r319_StdWhiteShape(r452_EllipseFillT(1, 2 / 3), "whiteEllipse", 11053);
                        r319_StdBlackShape(r452_EllipseFillT(2 / 3, 1), "blackLongEllipse", 11054);
                        return r319_StdWhiteShape(r452_EllipseFillT(2 / 3, 1), "whiteLongEllipse", 11055);
                    })();
                    (function () {
                        var r456_RegularPolygonFill = function (r457_sides, r457_skip, r457_overflow, r457_phase) {
                            var _r457_t0, _r457_t1;
                            return function (r458_cx, r458_cy, r458_size) {
                                var r458_angle, _r458_t2, _r458_t3;
                                var r458_corners = [];
                                var _r458_t0 = 0;
                                var _r458_t1 = r457_sides;
                                var r458_j = _r458_t0;
                                while (r458_j < _r458_t1) {
                                    r458_angle = 2 * Math.PI * r458_j * r457_skip / r457_sides + Math.PI * r457_phase;
                                    r458_corners.push(r313_corner(r458_cx + r458_size * r457_overflow * Math.sin(r458_angle), r458_cy + r458_size * r457_overflow * Math.cos(r458_angle)));
                                    r458_j = r458_j + 1;
                                }
                                return r313_xn$spirooutline$1aao(r458_corners);
                            };
                        };
                        r319_StdBlackShape(r456_RegularPolygonFill(5, 1, 1.05, 0), "blackPentagon", 11039);
                        r319_StdBlackShape(r456_RegularPolygonFill(5, 1, 1.05, 1), "turnBlackPentagon", 11202);
                        r319_ConvexWhitePolygon(r456_RegularPolygonFill(5, 1, 1.05, 0), "whitePentagon", 11040);
                        r319_StdBlackShape(r456_RegularPolygonFill(5, 1, 1.05, 0.5), "rhBlackPentagon", 11091);
                        r319_ConvexWhitePolygon(r456_RegularPolygonFill(5, 1, 1.05, 0.5), "rhWhitePentagon", 11092);
                        r319_StdBlackShape(r456_RegularPolygonFill(6, 1, 1.05, 0), "blackHexagon", 11042);
                        r319_ConvexWhitePolygon(r456_RegularPolygonFill(6, 1, 1.05, 0), "whiteHexagon", 11041);
                        r319_ConvexWhitePolygon(r456_RegularPolygonFill(6, 1, 1.05, 0.5), "hWhiteHexagon", 9108);
                        r319_StdBlackShape(r456_RegularPolygonFill(6, 1, 1.05, 0.5), "hBlackHexagon", 11043);
                        r319_StdBlackShape(r456_RegularPolygonFill(8, 1, 1.05, 0), "blackHorizontalOctagon", 11203);
                        r319_StdBlackShape(r456_RegularPolygonFill(8, 1, 1.05, 0.128), "blackOctagon", 11204);
                        r319_ConvexWhitePolygon(r456_RegularPolygonFill(3, 1, 1, 1), "whiteEqualTriangleDown", null);
                        r319_StdBlackShape(r456_RegularPolygonFill(4, 1, 1, 0.5), "blackMediumEqualDiamond", null);
                        r319_ConvexWhitePolygon(r456_RegularPolygonFill(4, 1, 1, 0.5), "whiteMediumEqualDiamond", null);
                        var r456_PentagramSw = function (r461_c) {
                            var _r461_t0, _r461_t1;
                            return {
                                "sw": r313_AdviceStroke(r461_c, Math.sqrt(r319_Geom.Scalar)) * Math.sqrt(5)
                            };
                        };
                        r319_StdBlackShape(r456_RegularPolygonFill(5, 2, 1.1, 0), "blackStar", 9733);
                        r319_StdWhiteShape(r456_RegularPolygonFill(5, 2, 1.1, 0), "whiteStar", 9734, r456_PentagramSw(5.5));
                        r319_StdWhiteShape(r456_RegularPolygonFill(5, 2, 1.1, 0), "lightWhiteStar", null, {
                            "sw": r313_UnicodeWeightGrade(300, Math.sqrt(r319_Geom.Scalar), r313_GeometryStroke) * Math.sqrt(5)
                        });
                        r319_StdWhiteShape(r456_RegularPolygonFill(5, 2, 1.1, 0), "whiteMediumStar", 11088, Object.assign(r456_PentagramSw(7), r319_Size.Medium));
                        r319_StdBlackShape(r456_RegularPolygonFill(5, 2, 1.1, 0), "blackSmallStar", 11089, r319_Size.Small);
                        r319_StdWhiteShape(r456_RegularPolygonFill(5, 2, 1.1, 0), "whiteSmallStar", 11090, Object.assign(r456_PentagramSw(3), r319_Size.Small));
                        return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("Hexagram"), r319_MangleUnicode(10017), new r313_xn$Capture$2Lrc8.GlyphProc(function (r464_currentGlyph) {
                            var _r464_t0, _r464_t1;
                            r464_currentGlyph.setWidth(r319_Geom.Width);
                            var r464_offset = r319_Geom.Size / 3;
                            r464_currentGlyph.include(r313_union(r319_xn$withtransform$5sIl(r313_Translate(0, r464_offset), r319_xn$referglyph$1aao(r319_MangleName("whiteTriangleUp"))), r319_xn$withtransform$5sIl(r313_Translate(0, -r464_offset), r319_xn$referglyph$1aao(r319_MangleName("whiteTriangleDown")))));
                            return void 0;
                        }));
                    })();
                    (function () {
                        var r468_CurlyEdgeStar = function (r469_sides, r469_shrink, r469_overflow, r469_phase) {
                            var _r469_t0, _r469_t1;
                            return function (r470_cx, r470_cy, r470_size) {
                                var r470_angleCorner, r470_angleArc, _r470_t2, _r470_t3;
                                var r470_corners = [];
                                var _r470_t0 = 0;
                                var _r470_t1 = r469_sides;
                                var r470_j = _r470_t0;
                                while (r470_j < _r470_t1) {
                                    r470_angleCorner = 2 * Math.PI * r470_j / r469_sides + Math.PI * r469_phase;
                                    r470_angleArc = 2 * Math.PI * (r470_j + 1 / 2) / r469_sides + Math.PI * r469_phase;
                                    r470_corners.push(r313_corner(r470_cx + r470_size * r469_overflow * Math.sin(r470_angleCorner), r470_cy + r470_size * r469_overflow * Math.cos(r470_angleCorner)));
                                    r470_corners.push(r313_g2(r470_cx + r470_size * r469_shrink * Math.sin(r470_angleArc), r470_cy + r470_size * r469_shrink * Math.cos(r470_angleArc)));
                                    r470_j = r470_j + 1;
                                }
                                return r313_xn$spirooutline$1aao(r470_corners, r313_close());
                            };
                        };
                        var r468_PentagramSw = function (r473_c) {
                            var _r473_t0, _r473_t1;
                            return {
                                "sw": r313_AdviceStroke(r473_c, Math.sqrt(r319_Geom.Scalar)) * Math.sqrt(5)
                            };
                        };
                        r319_StdBlackShape(r468_CurlyEdgeStar(4, 0.6, 1.1, 0), "blackFourPointedStar", 10022);
                        return r319_StdWhiteShape(r468_CurlyEdgeStar(4, 0.6, 1.1, 0), "whiteFourPointedStar", 10023, r468_PentagramSw(5));
                    })();
                    return (function () {
                        var r475_RightArrowHeadShape = function (r476_cx, r476_cy, r476_size) {
                            var _r476_t0, _r476_t1;
                            return r313_xn$spirooutline$1aao(r313_corner(r476_cx - r476_size, r476_cy + r476_size), r313_corner(r476_cx + r476_size, r476_cy), r313_corner(r476_cx - r476_size, r476_cy - r476_size), r313_corner(r476_cx - 0.5 * r476_size, r476_cy));
                        };
                        r319_StdBlackShape(r475_RightArrowHeadShape, "blackArrowHeadRight", 10148, r319_Size.Oblique);
                        return r319_StdWhiteShape(r475_RightArrowHeadShape, "whiteArrowHeadRight", null, {
                            "sw": Math.min(r313_GeometryStroke, r313_AdviceStroke(4.75, Math.sqrt(r319_Geom.Scalar))) * Math.sqrt(5)
                        });
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


