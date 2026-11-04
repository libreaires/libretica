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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Geometric-Shaded", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t5, _r313_t6, _r313_t7, _r313_tag8;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_Downward = _r313_t1.Downward;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_WideWidth1 = _r313_t1.WideWidth1;
        var r313_GeometryStroke = _r313_t1.GeometryStroke;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_dispiro = _r313_t2.dispiro;
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
                    var r319_VBar = _r319_t0.VBar;
                    var _r319_t1 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var r319_xn$referglyph$1aao = _r319_t1["refer-glyph"];
                    var _r319_t2 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Geometric-Shared"].resolve();
                    var r319_GeometricDim = _r319_t2.GeometricDim;
                    var r319_GeometricSizes = _r319_t2.GeometricSizes;
                    var r319_Geom = r319_GeometricDim(r319_MosaicUnitWidth, r316_MosaicWidth);
                    var r319_Size = r319_GeometricSizes(r319_Geom);
                    var r319_boxShadeSw = Math.min(r313_GeometryStroke, (r319_Geom.Size * 2 - r313_GeometryStroke * 2) * 1 / 11);
                    var r319_boxBarSw = Math.min(r313_GeometryStroke, r313_AdviceStroke(5, r319_Geom.Scalar));
                    var r319_boxTop = r319_Geom.MidY + r319_Geom.Size - r313_GeometryStroke + r319_boxShadeSw / 2;
                    var r319_boxBot = r319_Geom.MidY - (r319_boxTop - r319_Geom.MidY);
                    var r319_boxRight = r319_Geom.MidX + r319_Geom.Size - r313_GeometryStroke + r319_boxShadeSw / 2;
                    var r319_boxLeft = r319_Geom.MidX - (r319_boxRight - r319_Geom.MidX);
                    var r319_HBoxShadeShape = function () {
                        var _r325_t0, _r325_t1;
                        return r313_union(r313_dispiro(r313_widths.center(r319_boxShadeSw), r313_flat(r319_Geom.Left, r1_mix(r319_boxTop, r319_boxBot, 0.25), r313_heading(r313_Rightward)), r313_curl(r319_Geom.Right, r1_mix(r319_boxTop, r319_boxBot, 0.25), r313_heading(r313_Rightward))), r313_dispiro(r313_widths.center(r319_boxShadeSw), r313_flat(r319_Geom.Left, r1_mix(r319_boxTop, r319_boxBot, 0.5), r313_heading(r313_Rightward)), r313_curl(r319_Geom.Right, r1_mix(r319_boxTop, r319_boxBot, 0.5), r313_heading(r313_Rightward))), r313_dispiro(r313_widths.center(r319_boxShadeSw), r313_flat(r319_Geom.Left, r1_mix(r319_boxTop, r319_boxBot, 0.75), r313_heading(r313_Rightward)), r313_curl(r319_Geom.Right, r1_mix(r319_boxTop, r319_boxBot, 0.75), r313_heading(r313_Rightward))));
                    };
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("hShadeSquare"), r319_MangleUnicode(9636), new r313_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
                        var _r328_t0, _r328_t1;
                        r328_currentGlyph.setWidth(r319_Geom.Width);
                        r328_currentGlyph.include(r313_union(r319_xn$referglyph$1aao(r319_MangleName("whiteSquare")), r313_intersection(r319_xn$referglyph$1aao(r319_MangleName("blackSquare")), r319_HBoxShadeShape())));
                        return void 0;
                    }));
                    var r319_VBoxShadeShape = function () {
                        var _r331_t0, _r331_t1;
                        return r313_union(r313_dispiro(r313_widths.center(r319_boxShadeSw), r313_flat(r1_mix(r319_boxLeft, r319_boxRight, 0.25), r319_Geom.Top, r313_heading(r313_Downward)), r313_curl(r1_mix(r319_boxLeft, r319_boxRight, 0.25), r319_Geom.Bot, r313_heading(r313_Downward))), r313_dispiro(r313_widths.center(r319_boxShadeSw), r313_flat(r1_mix(r319_boxLeft, r319_boxRight, 0.5), r319_Geom.Top, r313_heading(r313_Downward)), r313_curl(r1_mix(r319_boxLeft, r319_boxRight, 0.5), r319_Geom.Bot, r313_heading(r313_Downward))), r313_dispiro(r313_widths.center(r319_boxShadeSw), r313_flat(r1_mix(r319_boxLeft, r319_boxRight, 0.75), r319_Geom.Top, r313_heading(r313_Downward)), r313_curl(r1_mix(r319_boxLeft, r319_boxRight, 0.75), r319_Geom.Bot, r313_heading(r313_Downward))));
                    };
                    r319_VBar.mShadeShape = function () {
                        var _r332_t0, _r332_t1;
                        return r313_union(r313_dispiro(r313_widths.center(r319_boxBarSw), r313_flat(r319_Geom.MidX, r319_Geom.Top, r313_heading(r313_Downward)), r313_curl(r319_Geom.MidX, r319_Geom.Bot, r313_heading(r313_Downward))));
                    };
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("vShadeSquare"), r319_MangleUnicode(9637), new r313_xn$Capture$2Lrc8.GlyphProc(function (r335_currentGlyph) {
                        var _r335_t0, _r335_t1;
                        r335_currentGlyph.setWidth(r319_Geom.Width);
                        r335_currentGlyph.include(r313_union(r319_xn$referglyph$1aao(r319_MangleName("whiteSquare")), r313_intersection(r319_xn$referglyph$1aao(r319_MangleName("blackSquare")), r319_VBoxShadeShape())));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("vBarSquare"), r319_MangleUnicode(9707), new r313_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
                        var _r340_t0, _r340_t1;
                        r340_currentGlyph.setWidth(r319_Geom.Width);
                        r340_currentGlyph.include(r313_union(r319_xn$referglyph$1aao(r319_MangleName("whiteSquare")), r313_intersection(r319_xn$referglyph$1aao(r319_MangleName("blackSquare")), r319_VBar.mShadeShape())));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("hvShadeSquare"), r319_MangleUnicode(9638), new r313_xn$Capture$2Lrc8.GlyphProc(function (r345_currentGlyph) {
                        var _r345_t0, _r345_t1;
                        r345_currentGlyph.setWidth(r319_Geom.Width);
                        r345_currentGlyph.include(r313_union(r319_xn$referglyph$1aao(r319_MangleName("hShadeSquare")), r319_xn$referglyph$1aao(r319_MangleName("vShadeSquare"))));
                        return void 0;
                    }));
                    var r319_DDiagBoxShadeShape = function () {
                        var _r348_t0, _r348_t1;
                        return new r313_xn$Capture$2Lrc8.GlyphProc(function (r350_currentGlyph) {
                            var _r350_t2, _r350_t3;
                            var _r350_t0 = -10;
                            var _r350_t1 = 10;
                            var r350_j = _r350_t0;
                            while (r350_j <= _r350_t1) {
                                r350_currentGlyph.include(r313_dispiro(r313_widths.center(r319_boxShadeSw), r313_flat(r319_Geom.Left, r1_mix(r319_Geom.Top, r319_Geom.Bot, r350_j / 4), r313_heading(r313_Rightward)), r313_curl(r319_Geom.Right, r1_mix(r319_Geom.Top, r319_Geom.Bot, r350_j / 4 + 1), r313_heading(r313_Rightward))));
                                r350_j = r350_j + 1;
                            }
                            return void 0;
                        });
                    };
                    var r319_UDiagBoxShadeShape = function () {
                        var _r354_t0, _r354_t1;
                        return new r313_xn$Capture$2Lrc8.GlyphProc(function (r356_currentGlyph) {
                            var _r356_t2, _r356_t3;
                            var _r356_t0 = -10;
                            var _r356_t1 = 10;
                            var r356_j = _r356_t0;
                            while (r356_j <= _r356_t1) {
                                r356_currentGlyph.include(r313_dispiro(r313_widths.center(r319_boxShadeSw), r313_flat(r319_Geom.Left, r1_mix(r319_Geom.Top, r319_Geom.Bot, r356_j / 4), r313_heading(r313_Rightward)), r313_curl(r319_Geom.Right, r1_mix(r319_Geom.Top, r319_Geom.Bot, r356_j / 4 - 1), r313_heading(r313_Rightward))));
                                r356_j = r356_j + 1;
                            }
                            return void 0;
                        });
                    };
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("dDiagShadeSquare"), r319_MangleUnicode(9639), new r313_xn$Capture$2Lrc8.GlyphProc(function (r362_currentGlyph) {
                        var _r362_t0, _r362_t1;
                        r362_currentGlyph.setWidth(r319_Geom.Width);
                        r362_currentGlyph.include(r313_union(r319_xn$referglyph$1aao(r319_MangleName("whiteSquare")), r313_intersection(r319_xn$referglyph$1aao(r319_MangleName("blackSquare")), r319_DDiagBoxShadeShape())));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("uDiagShadeSquare"), r319_MangleUnicode(9640), new r313_xn$Capture$2Lrc8.GlyphProc(function (r367_currentGlyph) {
                        var _r367_t0, _r367_t1;
                        r367_currentGlyph.setWidth(r319_Geom.Width);
                        r367_currentGlyph.include(r313_union(r319_xn$referglyph$1aao(r319_MangleName("whiteSquare")), r313_intersection(r319_xn$referglyph$1aao(r319_MangleName("blackSquare")), r319_UDiagBoxShadeShape())));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("udDiagShadeSquare"), r319_MangleUnicode(9641), new r313_xn$Capture$2Lrc8.GlyphProc(function (r372_currentGlyph) {
                        var _r372_t0, _r372_t1;
                        r372_currentGlyph.setWidth(r319_Geom.Width);
                        r372_currentGlyph.include(r313_union(r319_xn$referglyph$1aao(r319_MangleName("dDiagShadeSquare")), r319_xn$referglyph$1aao(r319_MangleName("uDiagShadeSquare"))));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("vShadeCircle"), r319_MangleUnicode(9677), new r313_xn$Capture$2Lrc8.GlyphProc(function (r377_currentGlyph) {
                        var _r377_t0, _r377_t1;
                        r377_currentGlyph.setWidth(r319_Geom.Width);
                        r377_currentGlyph.include(r313_union(r319_xn$referglyph$1aao(r319_MangleName("whiteCircle")), r313_intersection(r319_xn$referglyph$1aao(r319_MangleName("blackCircleO")), r319_VBoxShadeShape())));
                        return void 0;
                    }));
                    return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("vShadeStar"), r319_MangleUnicode(null), new r313_xn$Capture$2Lrc8.GlyphProc(function (r382_currentGlyph) {
                        var _r382_t0, _r382_t1;
                        r382_currentGlyph.setWidth(r319_Geom.Width);
                        r382_currentGlyph.include(r313_union(r319_xn$referglyph$1aao(r319_MangleName("lightWhiteStar")), r313_intersection(r319_xn$referglyph$1aao(r319_MangleName("blackStar")), r319_VBoxShadeShape())));
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
r1_xn$GlyphBlocks$2Lrc2b.push(function (r387_xn$Capture_Ext$2Lrc2b) {
    var _r387_t0, _r387_t1;
    r387_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r387_xn$Capture_Ext$2Lrc2b, "Symbol-Geometric-Shaded-Narrow", function (r388_xn$Capture$2Lrc8, r388_xn$ExportCapture$2Lrc4b) {
        var _r388_t5, _r388_t6, _r388_t7, _r388_tag8;
        var _r388_t0 = r388_xn$Capture$2Lrc8;
        var r388_xn$GlyphSaveSink$2Lrc4b = _r388_t0["$GlyphSaveSink$"];
        var r388_xn$NamedParameterPair$2Lrc9b = _r388_t0["$NamedParameterPair$"];
        var r388_xn$Exec$2Lrc5 = _r388_t0["$Exec$"];
        var _r388_t1 = r388_xn$Capture$2Lrc8.Metrics;
        var r388_Width = _r388_t1.Width;
        var r388_WideWidth4 = _r388_t1.WideWidth4;
        var r388_GeometryStroke = _r388_t1.GeometryStroke;
        var r388_UnicodeWeightGrade = _r388_t1.UnicodeWeightGrade;
        var _r388_t2 = r388_xn$Capture$2Lrc8.SpiroFns;
        var _r388_t3 = r388_xn$Capture$2Lrc8.SpiroFns;
        var r388_xn$decor$0cao = _r388_t3["decor@"];
        var r388_xn$decor$0cao1 = _r388_t3["decor@@"];
        var r388_xn$decor$0cao11 = _r388_t3["decor@@@"];
        var _r388_t4 = r388_xn$Capture$2Lrc8.BooleFns;
        var r388_union = _r388_t4.union;
        var r388_intersection = _r388_t4.intersection;
        return (function () {
            var r391_FMosaicWide, r391_MosaicNameSuffix, r391_MosaicWidth, r391_MosaicWidthScalar, _r391_t3, _r391_t5, _r391_t6, _r391_tag7;
            var r391_WidthKinds = [[0, ".NWID", r388_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r388_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r391_t0 = r391_WidthKinds;
            var _r391_t1 = _r391_t0.length;
            var _r391_t2 = 0;
            var _r391_t4 = _r391_t2 < _r391_t1;
            while (_r391_t4) {
                _r391_t3 = _r391_t0[_r391_t2];
                r391_FMosaicWide = _r391_t3[0];
                r391_MosaicNameSuffix = _r391_t3[1];
                r391_MosaicWidth = _r391_t3[2];
                r391_MosaicWidthScalar = _r391_t3[3];
                (function () {
                    var r394_MosaicDesiredWidth = r388_WideWidth4;
                    var r394_MosaicMiddle = r391_MosaicWidth / 2;
                    var r394_MosaicUnitWidth = r391_MosaicWidth / r391_MosaicWidthScalar;
                    var r394_MangleUnicode = function (r395_unicode, r395__desiredOverride) {
                        var _r395_t0, _r395_t1;
                        return r391_MosaicWidth === (r395__desiredOverride || r394_MosaicDesiredWidth) ? r395_unicode : void 0;
                    };
                    var r394_MangleName = function (r396_name) {
                        var _r396_t0, _r396_t1;
                        return r396_name + r391_MosaicNameSuffix;
                    };
                    var _r394_t0 = r388_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
                    var r394_ExtLineCenter = _r394_t0.ExtLineCenter;
                    var _r394_t1 = r388_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var r394_xn$referglyph$1aao = _r394_t1["refer-glyph"];
                    var _r394_t2 = r388_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Geometric-Shared"].resolve();
                    var r394_GeometricDim = _r394_t2.GeometricDim;
                    var r394_Geom = r394_GeometricDim(r394_MosaicUnitWidth, r391_MosaicWidth);
                    return r388_xn$GlyphSaveSink$2Lrc4b.save(r394_MangleName("symbolForDeleteFormTwo"), r394_MangleUnicode(9253), new r388_xn$Capture$2Lrc8.GlyphProc(function (r402_currentGlyph) {
                        var _r402_t0, _r402_t1;
                        var r402_sw = r388_UnicodeWeightGrade(300, r394_Geom.Scalar, r388_GeometryStroke);
                        var r402_gap = 0.75 * r402_sw + Math.max(r394_Geom.Size * 0.125, r402_sw / 2);
                        r402_currentGlyph.setWidth(r394_Geom.Width);
                        r402_currentGlyph.include(r388_intersection(r394_xn$referglyph$1aao(r394_MangleName("blackSquare")), r388_union(r394_ExtLineCenter(r394_Geom.MidX - r394_Geom.Size, r394_Geom.MidY - r394_Geom.Size, r394_Geom.MidX + r394_Geom.Size, r394_Geom.MidY + r394_Geom.Size, r402_sw, 4), r394_ExtLineCenter(r394_Geom.MidX - r394_Geom.Size + r402_gap, r394_Geom.MidY - r394_Geom.Size - r402_gap, r394_Geom.MidX + r394_Geom.Size + r402_gap, r394_Geom.MidY + r394_Geom.Size - r402_gap, r402_sw, 4), r394_ExtLineCenter(r394_Geom.MidX - r394_Geom.Size - r402_gap, r394_Geom.MidY - r394_Geom.Size + r402_gap, r394_Geom.MidX + r394_Geom.Size - r402_gap, r394_Geom.MidY + r394_Geom.Size + r402_gap, r402_sw, 4))));
                        return void 0;
                    }));
                })();
                _r391_t5 = _r391_t2 = _r391_t2 + 1;
                _r391_t4 = _r391_t2 < _r391_t1;
            }
            return _r391_t5;
        })();
    });
    return void 0;
});


