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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Cross", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t5, _r313_t6, _r313_t7, _r313_tag8;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_WideWidth1 = _r313_t1.WideWidth1;
        var r313_GeometryStroke = _r313_t1.GeometryStroke;
        var r313_UnicodeWeightGrade = _r313_t1.UnicodeWeightGrade;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
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
                    var r319_RingStrokeAt = _r319_t0.RingStrokeAt;
                    var _r319_t1 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var _r319_t2 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Geometric-Shared"].resolve();
                    var r319_GeometricDim = _r319_t2.GeometricDim;
                    var r319_GeometricSizes = _r319_t2.GeometricSizes;
                    var r319_Geom = r319_GeometricDim(r319_MosaicUnitWidth, r316_MosaicWidth);
                    var r319_Size = r319_GeometricSizes(r319_Geom);
                    var r319_normalSw = r313_UnicodeWeightGrade(400, r319_Geom.Scalar, r313_GeometryStroke);
                    var r319_mediumSw = r313_UnicodeWeightGrade(500, r319_Geom.Scalar, r313_GeometryStroke);
                    var r319_heavySw = r313_UnicodeWeightGrade(900, r319_Geom.Scalar, r313_GeometryStroke);
                    var r319_pBottom = 2;
                    var r319_pShortBar = 0.6;
                    var r319_pRing = 0.6;
                    var r319_crossHeight = r319_Geom.Size * r319_Size.Large.size * 2;
                    var r319_shortSize = r319_crossHeight / (r319_pBottom + 1);
                    var r319_yTop = r319_Geom.MidY + 0.5 * r319_crossHeight;
                    var r319_yBot = r319_Geom.MidY - 0.5 * r319_crossHeight;
                    var r319_yCenter = r319_yTop - r319_shortSize;
                    var r319_LatinCross = function (r325_sw, r325_fSecondBar) {
                        var _r325_t0, _r325_t1;
                        return new r313_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
                            var _r327_t0, _r327_t1;
                            r327_currentGlyph.include(r313_dispiro(r313_corner(r319_Geom.MidX, r319_yTop, r313_widths.center(r325_sw)), r313_corner(r319_Geom.MidX, r319_yBot)));
                            r327_currentGlyph.include(r313_dispiro(r313_corner(r319_Geom.MidX - r319_shortSize, r319_yCenter, r313_widths.center(r325_sw)), r313_corner(r319_Geom.MidX + r319_shortSize, r319_yCenter)));
                            if (r325_fSecondBar) r327_currentGlyph.include(r313_dispiro(r313_corner(r319_Geom.MidX - r319_pShortBar * r319_shortSize, r1_mix(r319_yCenter, r319_yTop, 0.5), r313_widths.center(r325_sw)), r313_corner(r319_Geom.MidX + r319_pShortBar * r319_shortSize, r1_mix(r319_yCenter, r319_yTop, 0.5))));
                            return void 0;
                        });
                    };
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("latinCross"), r319_MangleUnicode(10013), new r313_xn$Capture$2Lrc8.GlyphProc(function (r333_currentGlyph) {
                        var _r333_t0, _r333_t1;
                        r333_currentGlyph.setWidth(r319_Geom.Width);
                        r333_currentGlyph.include(r319_LatinCross(r319_mediumSw, false));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("heavyLatinCross"), r319_MangleUnicode(128327), new r313_xn$Capture$2Lrc8.GlyphProc(function (r338_currentGlyph) {
                        var _r338_t0, _r338_t1;
                        r338_currentGlyph.setWidth(r319_Geom.Width);
                        r338_currentGlyph.include(r319_LatinCross(r319_heavySw, false));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("lorraineCross"), r319_MangleUnicode(9768), new r313_xn$Capture$2Lrc8.GlyphProc(function (r343_currentGlyph) {
                        var _r343_t0, _r343_t1;
                        r343_currentGlyph.setWidth(r319_Geom.Width);
                        r343_currentGlyph.include(r319_LatinCross(r319_mediumSw, true));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("orthodoxCross"), r319_MangleUnicode(9766), new r313_xn$Capture$2Lrc8.GlyphProc(function (r348_currentGlyph) {
                        var _r348_t0, _r348_t1;
                        r348_currentGlyph.setWidth(r319_Geom.Width);
                        r348_currentGlyph.include(r319_LatinCross(r319_mediumSw, true));
                        r348_currentGlyph.include(r313_dispiro(r313_corner(r319_Geom.MidX - r319_pShortBar * r319_shortSize, r1_mix(r319_yBot, r319_yCenter, 0.45), r313_widths.center(r319_mediumSw)), r313_corner(r319_Geom.MidX + r319_pShortBar * r319_shortSize, r1_mix(r319_yBot, r319_yCenter, 0.3))));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("celticCross"), r319_MangleUnicode(128328), new r313_xn$Capture$2Lrc8.GlyphProc(function (r354_currentGlyph) {
                        var _r354_t0, _r354_t1;
                        r354_currentGlyph.setWidth(r319_Geom.Width);
                        r354_currentGlyph.include(r319_LatinCross(r319_mediumSw, false));
                        r354_currentGlyph.include(r319_RingStrokeAt(r319_Geom.MidX, r319_yCenter, r319_pRing * r319_shortSize + 0.5 * r319_mediumSw, r319_mediumSw));
                        return void 0;
                    }));
                    return (function () {
                        return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("malteseCross"), r319_MangleUnicode(10016), new r313_xn$Capture$2Lrc8.GlyphProc(function (r362_currentGlyph) {
                            var _r362_t0, _r362_t1, _r362_t2, _r362_t3, _r362_t4, _r362_t5, _r362_t6, _r362_t7, _r362_t8, _r362_t9, _r362_t10, _r362_t11, _r362_t12, _r362_t13, _r362_t14, _r362_t15, _r362_t16, _r362_t17, _r362_t18, _r362_t19, _r362_t20, _r362_t21;
                            r362_currentGlyph.setWidth(r319_Geom.Width);
                            var r362_span = r319_normalSw / 2 + r319_Geom.Size * 4.5 / 7;
                            var r362_sw = r319_normalSw;
                            r362_currentGlyph.include((_r362_t0 = r319_Geom.Left, _r362_t1 = r319_Geom.MidY + r362_span, _r362_t2 = _r362_t0 + r313_HSwToV(0.5 * r362_sw), _r362_t3 = _r362_t0 + r362_span, _r362_t4 = r319_Geom.MidY + r362_sw / 2, _r362_t6 = r319_Geom.Right, _r362_t5 = _r362_t6 - r362_span, _r362_t7 = _r362_t6 - r313_HSwToV(0.5 * r362_sw), _r362_t8 = r319_Geom.MidY - r362_span, _r362_t9 = r319_Geom.MidY - r362_sw / 2, r313_xn$spirooutline$1aao(r313_corner(_r362_t0, _r362_t1), r313_corner(_r362_t2, _r362_t1), r313_arcvh(), r313_flat(_r362_t3, _r362_t4), r313_curl(_r362_t5, _r362_t4), r313_archv(), r313_corner(_r362_t7, _r362_t1), r313_corner(_r362_t6, _r362_t1), r313_corner(_r362_t6, _r362_t8), r313_corner(_r362_t7, _r362_t8), r313_arcvh(), r313_flat(_r362_t5, _r362_t9), r313_curl(_r362_t3, _r362_t9), r313_archv(), r313_corner(_r362_t2, _r362_t8), r313_corner(_r362_t0, _r362_t8))));
                            r362_currentGlyph.include((_r362_t10 = r319_Geom.MidX + r362_span, _r362_t11 = r319_Geom.Top, _r362_t12 = _r362_t11 - r362_sw / 2, _r362_t13 = r319_Geom.MidX + r313_HSwToV(0.5 * r362_sw), _r362_t14 = _r362_t11 - r362_span, _r362_t16 = r319_Geom.Bot, _r362_t15 = _r362_t16 + r362_span, _r362_t17 = _r362_t16 + r362_sw / 2, _r362_t18 = r319_Geom.MidX - r362_span, _r362_t19 = r319_Geom.MidX - r313_HSwToV(0.5 * r362_sw), r313_xn$spirooutline$1aao(r313_corner(_r362_t10, _r362_t11), r313_corner(_r362_t10, _r362_t12), r313_archv(), r313_flat(_r362_t13, _r362_t14), r313_curl(_r362_t13, _r362_t15), r313_arcvh(), r313_corner(_r362_t10, _r362_t17), r313_corner(_r362_t10, _r362_t16), r313_corner(_r362_t18, _r362_t16), r313_corner(_r362_t18, _r362_t17), r313_archv(), r313_flat(_r362_t19, _r362_t15), r313_curl(_r362_t19, _r362_t14), r313_arcvh(), r313_corner(_r362_t18, _r362_t12), r313_corner(_r362_t18, _r362_t11))));
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


