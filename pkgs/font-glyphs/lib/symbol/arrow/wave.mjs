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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Arrow-Wave", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t5, _r312_t6, _r312_t7, _r312_tag8;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_DesignParameters = _r312_t1.DesignParameters;
        var r312_Width = _r312_t1.Width;
        var r312_SB = _r312_t1.SB;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_O = _r312_t1.O;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_WideWidth1 = _r312_t1.WideWidth1;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g2 = _r312_t2.g2;
        var r312_corner = _r312_t2.corner;
        var r312_widths = _r312_t2.widths;
        var r312_dispiro = _r312_t2.dispiro;
        var r312_xn$spirooutline$1aao = _r312_t2["spiro-outline"];
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
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
                    var _r318_t4, _r318_tag5, _r318_t6, _r318_tag7, _r318_t8, _r318_tag9;
                    var r318_MosaicDesiredWidth = r312_WideWidth1;
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
                    var _r318_t1 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var _r318_t2 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Arrow-Shared"].resolve();
                    var r318_ArrowDims = _r318_t2.ArrowDims;
                    var r318_ArrowHeadT = _r318_t2.ArrowHeadT;
                    var r318_MkArrowT = _r318_t2.MkArrowT;
                    var r318_dims = r318_ArrowDims(r315_MosaicWidth);
                    var r318_ArrowHead = r318_ArrowHeadT(r318_dims);
                    var _r318_t3 = r318_dims;
                    var r318_arrowWidth = _r318_t3.arrowWidth;
                    var r318_arrowTop = _r318_t3.arrowTop;
                    var r318_arrowBot = _r318_t3.arrowBot;
                    var r318_arrowMidX = _r318_t3.arrowMidX;
                    var r318_arrowSB = _r318_t3.arrowSB;
                    var r318_arrowRSB = _r318_t3.arrowRSB;
                    var r318_arrowSw = _r318_t3.arrowSw;
                    var r318_halfArrowSw = _r318_t3.halfArrowSw;
                    var r318_kLongArrowSB = r312_DivFrame(r315_MosaicWidthScalar, 4).leftSB / r312_DivFrame(r315_MosaicWidthScalar, 2).leftSB;
                    var r318_o = r312_O * 2;
                    var r318_waveArrowAmplitude = (r312_Width - r312_SB) * r312_DesignParameters.arrow_size * (0.7 + 0.4 * r315_MosaicWidthScalar);
                    var r318_WaveSw = r312_AdviceStroke(5.5 - r315_MosaicWidthScalar);
                    var r318_waveDist = r318_waveArrowAmplitude * 0.4 + r318_WaveSw / 4 * r315_MosaicWidthScalar;
                    (function () {
                        var _r325_t0 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Shared-Symbol-Shapes"].resolve();
                        var r325_CreateWaveShape = _r325_t0.CreateWaveShape;
                        var r325_WaveShape = r325_CreateWaveShape(r318_waveDist, r318_WaveSw);
                        var r325_rightTBias = r315_MosaicWidth / r318_MosaicUnitWidth - 1;
                        var r325_freeCoT = r318_arrowSB / r315_MosaicWidth;
                        var r325_connectedCoT = r318_arrowSB / r315_MosaicWidth + 9 / 32 * r315_MosaicWidthScalar;
                        var r325_mag = r318_arrowRSB - r318_arrowSB;
                        var r325_p = (r325_mag - r318_o - r318_halfArrowSw * 1.1) / r325_mag;
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("waveArrowLeftRight"), r318_MangleUnicode(8621), new r312_xn$Capture$2Lrc8.GlyphProc(function (r329_currentGlyph) {
                            var _r329_t0, _r329_t1;
                            r329_currentGlyph.setWidth(r315_MosaicWidth);
                            r329_currentGlyph.include(r325_WaveShape(new r312_xn$NamedParameterPair$2Lrc9b("left", -r325_connectedCoT), new r312_xn$NamedParameterPair$2Lrc9b("right", r325_rightTBias - r325_connectedCoT), new r312_xn$NamedParameterPair$2Lrc9b("xsJoin", r1_mix(r318_arrowSB, r318_arrowRSB, 1 - r325_p)), new r312_xn$NamedParameterPair$2Lrc9b("xfJoin", r1_mix(r318_arrowSB, r318_arrowRSB, r325_p)), new r312_xn$NamedParameterPair$2Lrc9b("unitWidth", r318_MosaicUnitWidth), new r312_xn$NamedParameterPair$2Lrc9b("waveCount", 2 / r315_MosaicWidthScalar)));
                            r329_currentGlyph.include(r318_ArrowHead.shape(r318_arrowSB, r312_SymbolMid, r318_arrowRSB, r312_SymbolMid));
                            r329_currentGlyph.include(r318_ArrowHead.shape(r318_arrowRSB, r312_SymbolMid, r318_arrowSB, r312_SymbolMid));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("waveArrowLeft"), r318_MangleUnicode(8604), new r312_xn$Capture$2Lrc8.GlyphProc(function (r342_currentGlyph) {
                            var _r342_t0, _r342_t1;
                            r342_currentGlyph.setWidth(r315_MosaicWidth);
                            r342_currentGlyph.include(r325_WaveShape(new r312_xn$NamedParameterPair$2Lrc9b("left", -r325_connectedCoT), new r312_xn$NamedParameterPair$2Lrc9b("right", r325_rightTBias - r325_freeCoT), new r312_xn$NamedParameterPair$2Lrc9b("xsJoin", r1_mix(r318_arrowSB, r318_arrowRSB, 1 - r325_p)), new r312_xn$NamedParameterPair$2Lrc9b("unitWidth", r318_MosaicUnitWidth), new r312_xn$NamedParameterPair$2Lrc9b("waveCount", 2 / r315_MosaicWidthScalar)));
                            r342_currentGlyph.include(r318_ArrowHead.shape(r318_arrowRSB, r312_SymbolMid, r318_arrowSB, r312_SymbolMid));
                            return void 0;
                        }));
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("waveArrowRight"), r318_MangleUnicode(8605), new r312_xn$Capture$2Lrc8.GlyphProc(function (r353_currentGlyph) {
                            var _r353_t0, _r353_t1;
                            r353_currentGlyph.setWidth(r315_MosaicWidth);
                            r353_currentGlyph.include(r325_WaveShape(new r312_xn$NamedParameterPair$2Lrc9b("left", -r325_freeCoT), new r312_xn$NamedParameterPair$2Lrc9b("right", r325_rightTBias - r325_connectedCoT), new r312_xn$NamedParameterPair$2Lrc9b("xfJoin", r1_mix(r318_arrowSB, r318_arrowRSB, r325_p)), new r312_xn$NamedParameterPair$2Lrc9b("unitWidth", r318_MosaicUnitWidth), new r312_xn$NamedParameterPair$2Lrc9b("waveCount", 2 / r315_MosaicWidthScalar)));
                            r353_currentGlyph.include(r318_ArrowHead.shape(r318_arrowSB, r312_SymbolMid, r318_arrowRSB, r312_SymbolMid));
                            return void 0;
                        }));
                    })();
                    (function () {
                        var r363_mag = r318_arrowRSB - r318_arrowSB;
                        var r363_p = (r363_mag - r318_o - r318_halfArrowSw) / r363_mag;
                        var r363_waveMagnitude = r318_waveDist * (3 / 4) - r318_WaveSw / 2;
                        var r363_waveSpan = r318_MosaicUnitWidth * r315_MosaicWidthScalar / 2 / (r363_mag * r363_p);
                        var r363_waveBias = 6 / 8;
                        var r363_waveSamples = 256;
                        var r363_SingleWave = function (r364_l, r364_r, r364_bias) {
                            var _r364_t0, _r364_t1;
                            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r366_currentGlyph) {
                                var r366_k, r366_f, _r366_t2, _r366_t3;
                                var r366_center = 1 / 2 + r364_bias * (1 - r363_waveSpan) / 2;
                                var r366_wl = r1_mix(r364_l, r364_r, r366_center - r363_waveSpan / 2);
                                var r366_wr = r1_mix(r364_l, r364_r, r366_center + r363_waveSpan / 2);
                                var r366_knots = [];
                                r366_knots.push(r312_g2(r364_l, r312_SymbolMid));
                                r366_knots.push(r312_g2(r1_mix(r364_l, r366_wl, 1 / 2), r312_SymbolMid));
                                var _r366_t0 = 0;
                                var _r366_t1 = r363_waveSamples;
                                var r366_j = _r366_t0;
                                while (r366_j <= _r366_t1) {
                                    r366_k = r366_j / r363_waveSamples;
                                    r366_f = -1 + Math.cos(2 * Math.PI * r366_k) - 0.075 * (Math.cos(2 * Math.PI * 3 * r366_k) - 1);
                                    r366_knots.push(r312_g2(r1_mix(r366_wl, r366_wr, r366_k), r312_SymbolMid - r363_waveMagnitude * r366_f));
                                    r366_j = r366_j + 1;
                                }
                                r366_knots.push(r312_g2(r1_mix(r366_wr, r364_r, 1 / 2), r312_SymbolMid));
                                r366_knots.push(r312_g2(r364_r, r312_SymbolMid));
                                r366_currentGlyph.include(r312_dispiro(r312_widths.center(r318_WaveSw), r366_knots));
                                return void 0;
                            });
                        };
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("waveArrowDirectLeft"), r318_MangleUnicode(11071), new r312_xn$Capture$2Lrc8.GlyphProc(function (r372_currentGlyph) {
                            var _r372_t0, _r372_t1;
                            r372_currentGlyph.setWidth(r315_MosaicWidth);
                            r372_currentGlyph.include(r363_SingleWave(r1_mix(r318_arrowSB, r318_arrowRSB, 1 - r363_p), r318_arrowRSB, r363_waveBias));
                            r372_currentGlyph.include(r318_ArrowHead.shape(r318_arrowRSB, r312_SymbolMid, r318_arrowSB, r312_SymbolMid));
                            return void 0;
                        }));
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("waveArrowDirectRight"), r318_MangleUnicode(10547), new r312_xn$Capture$2Lrc8.GlyphProc(function (r378_currentGlyph) {
                            var _r378_t0, _r378_t1;
                            r378_currentGlyph.setWidth(r315_MosaicWidth);
                            r378_currentGlyph.include(r363_SingleWave(r318_arrowSB, r1_mix(r318_arrowSB, r318_arrowRSB, r363_p), -r363_waveBias));
                            r378_currentGlyph.include(r318_ArrowHead.shape(r318_arrowSB, r312_SymbolMid, r318_arrowRSB, r312_SymbolMid));
                            return void 0;
                        }));
                    })();
                    return (function () {
                        var _r383_t1, _r383_t2, _r383_tag3;
                        var _r383_t0 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Shared-Symbol-Shapes"].resolve();
                        var r383_CreateWaveShape = _r383_t0.CreateWaveShape;
                        var r383_WaveSw = r312_AdviceStroke(5.5 - r315_MosaicWidthScalar);
                        var r383_SquiggleArrowBarSide = function (r385_kMag1, r385_kMag2, r385_l, r385_r, r385_kL, r385_kR, r385_y0) {
                            var _r385_t2, _r385_t3;
                            var r385_mag = r385_r - r385_l;
                            var r385_p = (r385_mag - r318_o - r318_halfArrowSw * 1.1) / r385_mag;
                            var r385_p2 = 0.75;
                            var r385_p2L = r1_mix(1, r385_p2, r1_mix(1, r385_kL, 1 / 2));
                            var r385_p2R = r1_mix(1, r385_p2, r1_mix(1, r385_kR, 1 / 2));
                            var r385_innerStops = 3 * r315_MosaicWidthScalar;
                            var r385_knots = [];
                            r385_knots.push(r312_corner(r1_mix(r385_l, r385_r, r1_mix(0, 1 - r385_p, r385_kL)), r385_y0));
                            r385_knots.push(r312_corner(r1_mix(r385_l, r385_r, 1 - r385_p2L), r385_y0));
                            var _r385_t0 = 0;
                            var _r385_t1 = r385_innerStops;
                            var r385_j = _r385_t0;
                            while (r385_j < _r385_t1) {
                                r385_knots.push(r312_corner(r1_mix(r385_l, r385_r, r1_mix(1 - r385_p2L, r385_p2R, (r385_j + 1 / 2) / r385_innerStops)), r385_y0 + r318_waveArrowAmplitude * (r385_j % 2 ? r385_kMag1 : r385_kMag2)));
                                r385_j = r385_j + 1;
                            }
                            r385_knots.push(r312_corner(r1_mix(r385_l, r385_r, r385_p2R), r385_y0));
                            r385_knots.push(r312_corner(r1_mix(r385_l, r385_r, r1_mix(1, r385_p, r385_kR)), r385_y0));
                            return r385_knots;
                        };
                        var r383_SquiggleArrowBar = function (r387_kL, r387_kR) {
                            var _r387_t0, _r387_t1;
                            return r312_xn$spirooutline$1aao(r383_SquiggleArrowBarSide(0.3, -0.25, r318_arrowSB, r318_arrowRSB, r387_kL, r387_kR, r312_SymbolMid + r318_halfArrowSw), r383_SquiggleArrowBarSide(0.25, -0.3, r318_arrowSB, r318_arrowRSB, r387_kL, r387_kR, r312_SymbolMid - r318_halfArrowSw).reverse());
                        };
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("squiggleArrowLeft"), r318_MangleUnicode(8668), new r312_xn$Capture$2Lrc8.GlyphProc(function (r390_currentGlyph) {
                            var _r390_t0, _r390_t1;
                            r390_currentGlyph.setWidth(r315_MosaicWidth);
                            r390_currentGlyph.include(r383_SquiggleArrowBar(1, 0));
                            r390_currentGlyph.include(r318_ArrowHead.shape(r318_arrowRSB, r312_SymbolMid, r318_arrowSB, r312_SymbolMid));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("squiggleArrowRight"), r318_MangleUnicode(8669), new r312_xn$Capture$2Lrc8.GlyphProc(function (r396_currentGlyph) {
                            var _r396_t0, _r396_t1;
                            r396_currentGlyph.setWidth(r315_MosaicWidth);
                            r396_currentGlyph.include(r383_SquiggleArrowBar(0, 1));
                            r396_currentGlyph.include(r318_ArrowHead.shape(r318_arrowSB, r312_SymbolMid, r318_arrowRSB, r312_SymbolMid));
                            return void 0;
                        }));
                        if (r315_MosaicWidthScalar > 1 && !r312_para.forceMonospace) _r383_t1 = (function () {
                            var r401_l = r1_mix(0, r318_arrowSB, r318_kLongArrowSB);
                            var r401_r = r1_mix(r315_MosaicWidth, r318_arrowRSB, r318_kLongArrowSB);
                            var r401_LongSquiggleArrowBar = function (r402_kL, r402_kR) {
                                var _r402_t0, _r402_t1;
                                return r312_xn$spirooutline$1aao(r383_SquiggleArrowBarSide(0.3, -0.25, r401_l, r401_r, r402_kL, r402_kR, r312_SymbolMid + r318_halfArrowSw), r383_SquiggleArrowBarSide(0.25, -0.3, r401_l, r401_r, r402_kL, r402_kR, r312_SymbolMid - r318_halfArrowSw).reverse());
                            };
                            r312_xn$GlyphSaveSink$2Lrc4b.save("longSquiggleArrowLeft", 11059, new r312_xn$Capture$2Lrc8.GlyphProc(function (r405_currentGlyph) {
                                var _r405_t0, _r405_t1;
                                r405_currentGlyph.setWidth(r315_MosaicWidth);
                                r405_currentGlyph.include(r401_LongSquiggleArrowBar(1, 0));
                                r405_currentGlyph.include(r318_ArrowHead.shape(r401_r, r312_SymbolMid, r401_l, r312_SymbolMid));
                                return void 0;
                            }));
                            return r312_xn$GlyphSaveSink$2Lrc4b.save("longSquiggleArrowRight", 10239, new r312_xn$Capture$2Lrc8.GlyphProc(function (r411_currentGlyph) {
                                var _r411_t0, _r411_t1;
                                r411_currentGlyph.setWidth(r315_MosaicWidth);
                                r411_currentGlyph.include(r401_LongSquiggleArrowBar(0, 1));
                                r411_currentGlyph.include(r318_ArrowHead.shape(r401_l, r312_SymbolMid, r401_r, r312_SymbolMid));
                                return void 0;
                            }));
                        })();
                        return _r383_t1;
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


