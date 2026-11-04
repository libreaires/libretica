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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Geometric-Ballot-Box", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t5, _r313_t6, _r313_t7, _r313_tag8;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_AS_BASE = _r313_t0.AS_BASE;
        var r313_ALSO_METRICS = _r313_t0.ALSO_METRICS;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_WideWidth1 = _r313_t1.WideWidth1;
        var r313_GeometryStroke = _r313_t1.GeometryStroke;
        var r313_UnicodeWeightGrade = _r313_t1.UnicodeWeightGrade;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_corner = _r313_t2.corner;
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
                    var r319_MaskLeft = _r319_t0.MaskLeft;
                    var r319_MaskRight = _r319_t0.MaskRight;
                    var _r319_t1 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var r319_xn$referglyph$1aao = _r319_t1["refer-glyph"];
                    var r319_alias = _r319_t1.alias;
                    var _r319_t2 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Geometric-Shared"].resolve();
                    var r319_GeometricDim = _r319_t2.GeometricDim;
                    var r319_GeometricSizes = _r319_t2.GeometricSizes;
                    var r319_Geom = r319_GeometricDim(r319_MosaicUnitWidth, r316_MosaicWidth);
                    r319_alias(r319_MangleName("ballotBox"), r319_MangleUnicode(9744), r319_MangleName("whiteSquare"));
                    var r319_CrossMark = function (r325_cx, r325_cy, r325_size, r325_sw) {
                        var _r325_t0, _r325_t1;
                        return new r313_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
                            var _r327_t0, _r327_t1;
                            r327_currentGlyph.include(r313_dispiro(r313_widths.center(r325_sw), r313_corner(r325_cx - r325_size, r325_cy - r325_size), r313_corner(r325_cx + r325_size, r325_cy + r325_size)));
                            r327_currentGlyph.include(r313_dispiro(r313_widths.center(r325_sw), r313_corner(r325_cx + r325_size, r325_cy - r325_size), r313_corner(r325_cx - r325_size, r325_cy + r325_size)));
                            return void 0;
                        });
                    };
                    var r319_UpArrowMark = function (r330_cx, r330_cy, r330_size, r330_sw) {
                        var _r330_t0, _r330_t1;
                        return new r313_xn$Capture$2Lrc8.GlyphProc(function (r332_currentGlyph) {
                            var _r332_t0, _r332_t1;
                            var r332_size2 = r330_size / 1.5;
                            r332_currentGlyph.include(r313_intersection(r319_MaskLeft(r330_cx), r313_dispiro(r313_widths.center(r330_sw), r313_corner(r330_cx - r332_size2 * 2, r330_cy - r332_size2), r313_corner(r330_cx + r332_size2, r330_cy + r332_size2 * 2))));
                            r332_currentGlyph.include(r313_intersection(r319_MaskRight(r330_cx), r313_dispiro(r313_widths.center(r330_sw), r313_corner(r330_cx - r332_size2, r330_cy + r332_size2 * 2), r313_corner(r330_cx + r332_size2 * 2, r330_cy - r332_size2))));
                            return void 0;
                        });
                    };
                    var r319_bbGap = Math.max(r319_Geom.Size / 6, r313_AdviceStroke(5, r319_Geom.Scalar));
                    var r319_swMark = Math.min(r313_GeometryStroke, r313_AdviceStroke(5, r319_Geom.Scalar));
                    var r319_lightSwMark = r313_UnicodeWeightGrade(300, r319_Geom.Scalar, r313_GeometryStroke);
                    var r319_boldSwMark = r313_UnicodeWeightGrade(700, r319_Geom.Scalar, r313_GeometryStroke);
                    var r319_bbSize = r319_Geom.Size - r319_bbGap - r319_swMark * 0.75;
                    var r319_circXSize = (r319_Geom.Size - r319_bbGap) * Math.SQRT1_2 - r319_swMark * 0.75;
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("checkedBallotBox"), r319_MangleUnicode(9745), new r313_xn$Capture$2Lrc8.GlyphProc(function (r337_currentGlyph) {
                        var _r337_t0, _r337_t1;
                        var r337_k1 = 0.4;
                        var r337_k2 = 0.425;
                        var r337_k3 = 1;
                        r337_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteSquare")), r313_AS_BASE, r313_ALSO_METRICS);
                        var r337_z1 = r313_corner(r319_Geom.MidX - r319_bbSize, r1_mix(r319_Geom.MidY - r319_bbSize, r319_Geom.MidY + r319_bbSize, r337_k1));
                        var r337_z2 = r313_corner(r1_mix(r319_Geom.MidX - r319_bbSize, r319_Geom.MidX + r319_bbSize, r337_k2), r319_Geom.MidY - r319_bbSize);
                        var r337_z3 = r313_corner(r319_Geom.MidX + r319_bbSize, r1_mix(r319_Geom.MidY - r319_bbSize, r319_Geom.MidY + r319_bbSize, r337_k3));
                        r337_currentGlyph.include(r313_intersection(r313_xn$spirooutline$1aao(r337_z1, r337_z2, r337_z3, r313_corner(r337_z1.x, r337_z3.y)), r313_union(r313_dispiro(r313_widths.lhs(r319_swMark), r337_z1, r337_z2), r313_dispiro(r313_widths.lhs(r319_swMark), r337_z2, r337_z3))));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("crossBallotBox"), r319_MangleUnicode(9746), new r313_xn$Capture$2Lrc8.GlyphProc(function (r342_currentGlyph) {
                        var _r342_t0, _r342_t1;
                        r342_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteSquare")), r313_AS_BASE, r313_ALSO_METRICS);
                        r342_currentGlyph.include(r319_CrossMark(r319_Geom.MidX, r319_Geom.MidY, r319_bbSize, r319_swMark));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("lightCrossBallotBox"), r319_MangleUnicode(11197), new r313_xn$Capture$2Lrc8.GlyphProc(function (r347_currentGlyph) {
                        var _r347_t0, _r347_t1;
                        r347_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteSquare")), r313_AS_BASE, r313_ALSO_METRICS);
                        r347_currentGlyph.include(r319_CrossMark(r319_Geom.MidX, r319_Geom.MidY, r319_bbSize, r319_lightSwMark));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("crossCircle"), r319_MangleUnicode(11198), new r313_xn$Capture$2Lrc8.GlyphProc(function (r352_currentGlyph) {
                        var _r352_t0, _r352_t1;
                        r352_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteCircle")), r313_AS_BASE, r313_ALSO_METRICS);
                        r352_currentGlyph.include(r319_CrossMark(r319_Geom.MidX, r319_Geom.MidY, r319_circXSize, r319_swMark));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("boldCrossCircle"), r319_MangleUnicode(11199), new r313_xn$Capture$2Lrc8.GlyphProc(function (r357_currentGlyph) {
                        var _r357_t0, _r357_t1;
                        r357_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteCircle")), r313_AS_BASE, r313_ALSO_METRICS);
                        r357_currentGlyph.include(r319_CrossMark(r319_Geom.MidX, r319_Geom.MidY, r319_circXSize, r319_boldSwMark));
                        return void 0;
                    }));
                    return (function () {
                        var _r361_t0 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Geometric-Shared"].resolve();
                        var r361_ConvexPolygonOutline = _r361_t0.ConvexPolygonOutline;
                        var r361_delGap = Math.max(r319_Geom.Size / 6, r313_AdviceStroke(5, r319_Geom.Scalar));
                        var r361_delSize = (r319_Geom.Size - r361_delGap) / 1.5 - r319_swMark * 0.75;
                        var r361_RightFingerpostFill = function (r363_cx, r363_cy, r363_r) {
                            var _r363_t0, _r363_t1;
                            var r363_skew = r363_r * 1 / 4;
                            return r313_xn$spirooutline$1aao(r313_corner(r363_cx - r363_r, r363_cy + r363_r / 1.5), r313_corner(r363_cx + r363_r - r363_skew, r363_cy + r363_r / 1.5), r313_corner(r363_cx + r363_r + r363_skew, r363_cy), r313_corner(r363_cx + r363_r - r363_skew, r363_cy - r363_r / 1.5), r313_corner(r363_cx - r363_r, r363_cy - r363_r / 1.5));
                        };
                        var r361_LeftFingerpostFill = function (r364_cx, r364_cy, r364_r) {
                            var _r364_t0, _r364_t1;
                            var r364_skew = r364_r * 1 / 4;
                            return r313_xn$spirooutline$1aao(r313_corner(r364_cx + r364_r, r364_cy - r364_r / 1.5), r313_corner(r364_cx + r364_r, r364_cy + r364_r / 1.5), r313_corner(r364_cx - r364_r + r364_skew, r364_cy + r364_r / 1.5), r313_corner(r364_cx - r364_r - r364_skew, r364_cy), r313_corner(r364_cx - r364_r + r364_skew, r364_cy - r364_r / 1.5));
                        };
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("UpArrowInRectangle"), r319_MangleUnicode(11193), new r313_xn$Capture$2Lrc8.GlyphProc(function (r367_currentGlyph) {
                            var _r367_t0, _r367_t1;
                            r367_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteHoriRectangle")), r313_AS_BASE, r313_ALSO_METRICS);
                            r367_currentGlyph.include(r319_UpArrowMark(r319_Geom.MidX, r319_Geom.MidY, r361_delSize, r319_swMark));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("xInRectangle"), r319_MangleUnicode(8999), new r313_xn$Capture$2Lrc8.GlyphProc(function (r372_currentGlyph) {
                            var _r372_t0, _r372_t1;
                            r372_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteHoriRectangle")), r313_AS_BASE, r313_ALSO_METRICS);
                            r372_currentGlyph.include(r319_CrossMark(r319_Geom.MidX, r319_Geom.MidY, r361_delSize, r319_swMark));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("deleteRight"), r319_MangleUnicode(8998), new r313_xn$Capture$2Lrc8.GlyphProc(function (r377_currentGlyph) {
                            var _r377_t0, _r377_t1;
                            r377_currentGlyph.setWidth(r319_Geom.Width);
                            r377_currentGlyph.include(r361_ConvexPolygonOutline(r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, r361_RightFingerpostFill(r319_Geom.MidX, r319_Geom.MidY, r319_Geom.Size)), r313_GeometryStroke));
                            r377_currentGlyph.include(r319_CrossMark(r319_Geom.MidX, r319_Geom.MidY, r361_delSize, r319_swMark));
                            return void 0;
                        }));
                        return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("deleteLeft"), r319_MangleUnicode(9003), new r313_xn$Capture$2Lrc8.GlyphProc(function (r384_currentGlyph) {
                            var _r384_t0, _r384_t1;
                            r384_currentGlyph.setWidth(r319_Geom.Width);
                            r384_currentGlyph.include(r361_ConvexPolygonOutline(r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, r361_LeftFingerpostFill(r319_Geom.MidX, r319_Geom.MidY, r319_Geom.Size)), r313_GeometryStroke));
                            r384_currentGlyph.include(r319_CrossMark(r319_Geom.MidX, r319_Geom.MidY, r361_delSize, r319_swMark));
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


