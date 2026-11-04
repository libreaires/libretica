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
var r1_Gr = _s0_t1;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Mosaic-Masked", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t5, _r313_t6, _r313_t7, _r313_tag8;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_fontMetrics = _r313_t0.fontMetrics;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_ApparentTranslate = _r313_t1.ApparentTranslate;
        var r313_WideWidth1 = _r313_t1.WideWidth1;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_corner = _r313_t2.corner;
        var r313_xn$spirooutline$1aao = _r313_t2["spiro-outline"];
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
                    var r319_xn$withtransform$5sIl = _r319_t0["with-transform"];
                    var _r319_t1 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var r319_xn$referglyph$1aao = _r319_t1["refer-glyph"];
                    var r319_MosaicTop = r313_fontMetrics.os2.sTypoAscender;
                    var r319_MosaicBottom = r313_fontMetrics.os2.sTypoDescender;
                    var r319_CellMask = function () {
                        var _r324_t0, _r324_t1;
                        return r313_xn$spirooutline$1aao(r313_corner(0, r319_MosaicTop), r313_corner(r316_MosaicWidth, r319_MosaicTop), r313_corner(r316_MosaicWidth, r319_MosaicBottom), r313_corner(0, r319_MosaicBottom));
                    };
                    var r319_halfHeight = 0.5 * (r319_MosaicTop - r319_MosaicBottom);
                    var r319_halfWidth = 0.5 * r316_MosaicWidth;
                    var r319_SplitShape = function (r325_dstName, r325_dstUnicode, r325_srcName, r325_dx, r325_dy) {
                        var _r325_t0, _r325_t1;
                        return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName(r325_dstName), r319_MangleUnicode(r325_dstUnicode), new r313_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
                            var _r328_t0, _r328_t1;
                            r328_currentGlyph.setWidth(r316_MosaicWidth);
                            r328_currentGlyph.include(r313_intersection(r319_CellMask(), r319_xn$withtransform$5sIl(r313_ApparentTranslate(r325_dx, r325_dy), r319_xn$referglyph$1aao(r319_MangleName(r325_srcName)))));
                            return void 0;
                        }));
                    };
                    r319_SplitShape("whiteCircleLowerHalfJustified", 130016, "whiteCircle", 0, r319_halfHeight);
                    r319_SplitShape("whiteCircleLeftHalfJustified", 130017, "whiteCircle", r319_halfWidth, 0);
                    r319_SplitShape("whiteCircleUpperHalfJustified", 130018, "whiteCircle", 0, -r319_halfHeight);
                    r319_SplitShape("whiteCircleRightHalfJustified", 130019, "whiteCircle", -r319_halfWidth, 0);
                    r319_SplitShape("blackCircleLowerHalfJustified", 130024, "blackCircle", 0, r319_halfHeight);
                    r319_SplitShape("blackCircleLeftHalfJustified", 130025, "blackCircle", r319_halfWidth, 0);
                    r319_SplitShape("blackCircleUpperHalfJustified", 130026, "blackCircle", 0, -r319_halfHeight);
                    r319_SplitShape("blackCircleRightHalfJustified", 130027, "blackCircle", -r319_halfWidth, 0);
                    r319_SplitShape("blackCircleLBQuarterJustified", 130028, "blackCircle", r319_halfWidth, r319_halfHeight);
                    r319_SplitShape("blackCircleRTQuarterJustified", 130029, "blackCircle", -r319_halfWidth, -r319_halfHeight);
                    r319_SplitShape("blackCircleLTQuarterJustified", 130030, "blackCircle", r319_halfWidth, -r319_halfHeight);
                    r319_SplitShape("blackCircleRBQuarterJustified", 130031, "blackCircle", -r319_halfWidth, r319_halfHeight);
                    r319_SplitShape("whiteEllipseLeftHalfJustified", 118283, "whiteEllipse", r319_halfWidth, 0);
                    r319_SplitShape("whiteEllipseRightHalfJustified", 118284, "whiteEllipse", -r319_halfWidth, 0);
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("whiteCircleLeftRightHalf"), r319_MangleUnicode(118273), new r313_xn$Capture$2Lrc8.GlyphProc(function (r333_currentGlyph) {
                        var _r333_t0, _r333_t1;
                        r333_currentGlyph.setWidth(r316_MosaicWidth);
                        r333_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteCircleLowerHalfJustified")));
                        r333_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteCircleUpperHalfJustified")));
                        return void 0;
                    }));
                    return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("whiteCircleUpperLowerHalf"), r319_MangleUnicode(118272), new r313_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
                        var _r339_t0, _r339_t1;
                        r339_currentGlyph.setWidth(r316_MosaicWidth);
                        r339_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteCircleLeftHalfJustified")));
                        r339_currentGlyph.include(r319_xn$referglyph$1aao(r319_MangleName("whiteCircleRightHalfJustified")));
                        return void 0;
                    }));
                })();
                _r316_t5 = _r316_t2 = _r316_t2 + 1;
                _r316_t4 = _r316_t2 < _r316_t1;
            }
            return _r316_t5;
        })();
    });
    return void 0;
});


