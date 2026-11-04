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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Mosaic-Dentistry", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t9, _r313_t10, _r313_t11, _r313_tag12, _r313_t13, _r313_tag14;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_WideWidth1 = _r313_t1.WideWidth1;
        var r313_WideWidth4 = _r313_t1.WideWidth4;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_ForceUpright = _r313_t5.ForceUpright;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_NameUni = _r313_t6.NameUni;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Geometric-Shared"].resolve();
        var r313_GeometricDim = _r313_t7.GeometricDim;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Above"].resolve();
        var r313_TildeShape = _r313_t8.TildeShape;
        var r313_boxDrawingStroke = r313_AdviceStroke(3.5);
        (function () {
            var r320_FMosaicWide, r320_MosaicNameSuffix, r320_MosaicWidth, r320_MosaicWidthScalar, _r320_t3, _r320_t5, _r320_t6, _r320_tag7;
            var r320_WidthKinds = [[0, ".NWID", r313_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r313_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r320_t0 = r320_WidthKinds;
            var _r320_t1 = _r320_t0.length;
            var _r320_t2 = 0;
            var _r320_t4 = _r320_t2 < _r320_t1;
            while (_r320_t4) {
                _r320_t3 = _r320_t0[_r320_t2];
                r320_FMosaicWide = _r320_t3[0];
                r320_MosaicNameSuffix = _r320_t3[1];
                r320_MosaicWidth = _r320_t3[2];
                r320_MosaicWidthScalar = _r320_t3[3];
                (function () {
                    var r323_MosaicDesiredWidth = r313_WideWidth4;
                    var r323_MosaicMiddle = r320_MosaicWidth / 2;
                    var r323_MosaicUnitWidth = r320_MosaicWidth / r320_MosaicWidthScalar;
                    var r323_MangleUnicode = function (r324_unicode, r324__desiredOverride) {
                        var _r324_t0, _r324_t1;
                        return r320_MosaicWidth === (r324__desiredOverride || r323_MosaicDesiredWidth) ? r324_unicode : void 0;
                    };
                    var r323_MangleName = function (r325_name) {
                        var _r325_t0, _r325_t1;
                        return r325_name + r320_MosaicNameSuffix;
                    };
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r323_MangleName("vertAndTopRightLine"), r323_MangleUnicode(9150), new r313_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
                        var _r328_t0, _r328_t1;
                        r328_currentGlyph.setWidth(r320_MosaicWidth);
                        r328_currentGlyph.include(r313_ForceUpright());
                        r328_currentGlyph.include(r313_xn$referglyph$1aao(r323_MangleName(r313_NameUni(9146))));
                        r328_currentGlyph.include(r313_xn$referglyph$1aao(r323_MangleName(r313_NameUni(9144))));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r323_MangleName("vertAndBottomRightLine"), r323_MangleUnicode(9151), new r313_xn$Capture$2Lrc8.GlyphProc(function (r335_currentGlyph) {
                        var _r335_t0, _r335_t1;
                        r335_currentGlyph.setWidth(r320_MosaicWidth);
                        r335_currentGlyph.include(r313_ForceUpright());
                        r335_currentGlyph.include(r313_xn$referglyph$1aao(r323_MangleName(r313_NameUni(9149))));
                        r335_currentGlyph.include(r313_xn$referglyph$1aao(r323_MangleName(r313_NameUni(9144))));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r323_MangleName("vertAndTopLeftLine"), r323_MangleUnicode(9163), new r313_xn$Capture$2Lrc8.GlyphProc(function (r342_currentGlyph) {
                        var _r342_t0, _r342_t1;
                        r342_currentGlyph.setWidth(r320_MosaicWidth);
                        r342_currentGlyph.include(r313_ForceUpright());
                        r342_currentGlyph.include(r313_xn$referglyph$1aao(r323_MangleName(r313_NameUni(9146))));
                        r342_currentGlyph.include(r313_xn$referglyph$1aao(r323_MangleName(r313_NameUni(9145))));
                        return void 0;
                    }));
                    return r313_xn$GlyphSaveSink$2Lrc4b.save(r323_MangleName("vertAndBottomLeftLine"), r323_MangleUnicode(9164), new r313_xn$Capture$2Lrc8.GlyphProc(function (r349_currentGlyph) {
                        var _r349_t0, _r349_t1;
                        r349_currentGlyph.setWidth(r320_MosaicWidth);
                        r349_currentGlyph.include(r313_ForceUpright());
                        r349_currentGlyph.include(r313_xn$referglyph$1aao(r323_MangleName(r313_NameUni(9149))));
                        r349_currentGlyph.include(r313_xn$referglyph$1aao(r323_MangleName(r313_NameUni(9145))));
                        return void 0;
                    }));
                })();
                _r320_t5 = _r320_t2 = _r320_t2 + 1;
                _r320_t4 = _r320_t2 < _r320_t1;
            }
            return _r320_t5;
        })();
        return (function () {
            var r356_FMosaicWide, r356_MosaicNameSuffix, r356_MosaicWidth, r356_MosaicWidthScalar, _r356_t3, _r356_t5, _r356_t6, _r356_tag7;
            var r356_WidthKinds = [[0, ".NWID", r313_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r313_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r356_t0 = r356_WidthKinds;
            var _r356_t1 = _r356_t0.length;
            var _r356_t2 = 0;
            var _r356_t4 = _r356_t2 < _r356_t1;
            while (_r356_t4) {
                _r356_t3 = _r356_t0[_r356_t2];
                r356_FMosaicWide = _r356_t3[0];
                r356_MosaicNameSuffix = _r356_t3[1];
                r356_MosaicWidth = _r356_t3[2];
                r356_MosaicWidthScalar = _r356_t3[3];
                (function () {
                    var r359_MosaicDesiredWidth = r313_WideWidth1;
                    var r359_MosaicMiddle = r356_MosaicWidth / 2;
                    var r359_MosaicUnitWidth = r356_MosaicWidth / r356_MosaicWidthScalar;
                    var r359_MangleUnicode = function (r360_unicode, r360__desiredOverride) {
                        var _r360_t0, _r360_t1;
                        return r356_MosaicWidth === (r360__desiredOverride || r359_MosaicDesiredWidth) ? r360_unicode : void 0;
                    };
                    var r359_MangleName = function (r361_name) {
                        var _r361_t0, _r361_t1;
                        return r361_name + r356_MosaicNameSuffix;
                    };
                    var r359_Geom = r313_GeometricDim(r359_MosaicUnitWidth, r356_MosaicWidth);
                    var r359_WaveShape = function () {
                        var _r362_t0, _r362_t1;
                        return r313_TildeShape(r359_Geom.MidY + r359_Geom.Size / 2, r359_Geom.MidY - r359_Geom.Size / 2, r359_Geom.Left, r359_Geom.Right, r313_boxDrawingStroke / 2);
                    };
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r359_MangleName("vertAndTopLine"), r359_MangleUnicode(9161), new r313_xn$Capture$2Lrc8.GlyphProc(function (r365_currentGlyph) {
                        var _r365_t0, _r365_t1;
                        r365_currentGlyph.setWidth(r356_MosaicWidth);
                        r365_currentGlyph.include(r313_ForceUpright());
                        r365_currentGlyph.include(r313_xn$referglyph$1aao(r359_MangleName(r313_NameUni(9474))));
                        r365_currentGlyph.include(r313_xn$referglyph$1aao(r359_MangleName(r313_NameUni(9146))));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r359_MangleName("vertAndBottomLine"), r359_MangleUnicode(9162), new r313_xn$Capture$2Lrc8.GlyphProc(function (r372_currentGlyph) {
                        var _r372_t0, _r372_t1;
                        r372_currentGlyph.setWidth(r356_MosaicWidth);
                        r372_currentGlyph.include(r313_ForceUpright());
                        r372_currentGlyph.include(r313_xn$referglyph$1aao(r359_MangleName(r313_NameUni(9474))));
                        r372_currentGlyph.include(r313_xn$referglyph$1aao(r359_MangleName(r313_NameUni(9149))));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r359_MangleName("vertLineWithCircle"), r359_MangleUnicode(9152), new r313_xn$Capture$2Lrc8.GlyphProc(function (r379_currentGlyph) {
                        var _r379_t0, _r379_t1;
                        r379_currentGlyph.setWidth(r356_MosaicWidth);
                        r379_currentGlyph.include(r313_ForceUpright());
                        r379_currentGlyph.include(r313_xn$referglyph$1aao(r359_MangleName(r313_NameUni(9474))));
                        r379_currentGlyph.include(r313_xn$referglyph$1aao(r359_MangleName("whiteCircle")));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r359_MangleName("vertAndTopLineWithCircle"), r359_MangleUnicode(9153), new r313_xn$Capture$2Lrc8.GlyphProc(function (r386_currentGlyph) {
                        var _r386_t0, _r386_t1;
                        r386_currentGlyph.setWidth(r356_MosaicWidth);
                        r386_currentGlyph.include(r313_ForceUpright());
                        r386_currentGlyph.include(r313_xn$referglyph$1aao(r359_MangleName("vertAndTopLine")));
                        r386_currentGlyph.include(r313_xn$referglyph$1aao(r359_MangleName("whiteCircle")));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r359_MangleName("vertAndBottomLineWithCircle"), r359_MangleUnicode(9154), new r313_xn$Capture$2Lrc8.GlyphProc(function (r393_currentGlyph) {
                        var _r393_t0, _r393_t1;
                        r393_currentGlyph.setWidth(r356_MosaicWidth);
                        r393_currentGlyph.include(r313_ForceUpright());
                        r393_currentGlyph.include(r313_xn$referglyph$1aao(r359_MangleName("vertAndBottomLine")));
                        r393_currentGlyph.include(r313_xn$referglyph$1aao(r359_MangleName("whiteCircle")));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r359_MangleName("vertLineWithTriangle"), r359_MangleUnicode(9155), new r313_xn$Capture$2Lrc8.GlyphProc(function (r400_currentGlyph) {
                        var _r400_t0, _r400_t1;
                        r400_currentGlyph.setWidth(r356_MosaicWidth);
                        r400_currentGlyph.include(r313_ForceUpright());
                        r400_currentGlyph.include(r313_xn$referglyph$1aao(r359_MangleName(r313_NameUni(9474))));
                        r400_currentGlyph.include(r313_xn$referglyph$1aao(r359_MangleName("whiteTriangleUp")));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r359_MangleName("vertAndTopLineWithTriangle"), r359_MangleUnicode(9156), new r313_xn$Capture$2Lrc8.GlyphProc(function (r407_currentGlyph) {
                        var _r407_t0, _r407_t1;
                        r407_currentGlyph.setWidth(r356_MosaicWidth);
                        r407_currentGlyph.include(r313_ForceUpright());
                        r407_currentGlyph.include(r313_xn$referglyph$1aao(r359_MangleName("vertAndTopLine")));
                        r407_currentGlyph.include(r313_xn$referglyph$1aao(r359_MangleName("whiteTriangleUp")));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r359_MangleName("vertAndBottomLineWithTriangle"), r359_MangleUnicode(9157), new r313_xn$Capture$2Lrc8.GlyphProc(function (r414_currentGlyph) {
                        var _r414_t0, _r414_t1;
                        r414_currentGlyph.setWidth(r356_MosaicWidth);
                        r414_currentGlyph.include(r313_ForceUpright());
                        r414_currentGlyph.include(r313_xn$referglyph$1aao(r359_MangleName("vertAndBottomLine")));
                        r414_currentGlyph.include(r313_xn$referglyph$1aao(r359_MangleName("whiteTriangleUp")));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r359_MangleName("vertLineWithWave"), r359_MangleUnicode(9158), new r313_xn$Capture$2Lrc8.GlyphProc(function (r421_currentGlyph) {
                        var _r421_t0, _r421_t1;
                        r421_currentGlyph.setWidth(r356_MosaicWidth);
                        r421_currentGlyph.include(r313_ForceUpright());
                        r421_currentGlyph.include(r313_xn$referglyph$1aao(r359_MangleName(r313_NameUni(9474))));
                        r421_currentGlyph.include(r359_WaveShape());
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r359_MangleName("vertAndTopLineWithWave"), r359_MangleUnicode(9159), new r313_xn$Capture$2Lrc8.GlyphProc(function (r428_currentGlyph) {
                        var _r428_t0, _r428_t1;
                        r428_currentGlyph.setWidth(r356_MosaicWidth);
                        r428_currentGlyph.include(r313_ForceUpright());
                        r428_currentGlyph.include(r313_xn$referglyph$1aao(r359_MangleName("vertAndTopLine")));
                        r428_currentGlyph.include(r359_WaveShape());
                        return void 0;
                    }));
                    return r313_xn$GlyphSaveSink$2Lrc4b.save(r359_MangleName("vertAndBottomLineWithWave"), r359_MangleUnicode(9160), new r313_xn$Capture$2Lrc8.GlyphProc(function (r435_currentGlyph) {
                        var _r435_t0, _r435_t1;
                        r435_currentGlyph.setWidth(r356_MosaicWidth);
                        r435_currentGlyph.include(r313_ForceUpright());
                        r435_currentGlyph.include(r313_xn$referglyph$1aao(r359_MangleName("vertAndBottomLine")));
                        r435_currentGlyph.include(r359_WaveShape());
                        return void 0;
                    }));
                })();
                _r356_t5 = _r356_t2 = _r356_t2 + 1;
                _r356_t4 = _r356_t2 < _r356_t1;
            }
            return _r356_t5;
        })();
    });
    return void 0;
});


