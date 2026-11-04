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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Punctuation-Asterisk", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var r312_sides, r312_size, r312_rot, r312_pFine, r312_stroke, r312_name, r312_dual, r312_triple, r312_high, r312_slashTop, r312_sMid, r312_halfXH, r312_slashBot, _r312_t10, _r312_t11, _r312_t12, _r312_t13, _r312_tag14, _r312_t15, _r312_tag16;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_XH = _r312_t1.XH;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_ParenTop = _r312_t1.ParenTop;
        var r312_ApparentTranslate = _r312_t1.ApparentTranslate;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_LongJut = _r312_t1.LongJut;
        var r312_WideWidth1 = _r312_t1.WideWidth1;
        var r312_Middle = _r312_t1.Middle;
        var r312_GeometryStroke = _r312_t1.GeometryStroke;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_corner = _r312_t2.corner;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_widths = _r312_t2.widths;
        var r312_dispiro = _r312_t2.dispiro;
        var r312_xn$spirooutline$1aao = _r312_t2["spiro-outline"];
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var r312_difference = _r312_t4.difference;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_ScaleAround = _r312_t5.ScaleAround;
        var r312_xn$withtransform$5sIl = _r312_t5["with-transform"];
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$referglyph$1aao = _r312_t6["refer-glyph"];
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var r312_yHigh = r312_ParenTop - r312_LongJut * 2;
        var r312_yHigh_DT = r312_ParenTop - r312_LongJut * 1.5;
        var r312_yLow = r1_mix(r312_SymbolMid, r312_yHigh, -1);
        var r312_yLow_DT = r1_mix(r312_SymbolMid, r312_yHigh_DT, -1);
        var r312_asteriskKinds = [[[5, 1.2, 0, 0.4, r312_Stroke], ["asterisk", "dualAsterisk", "asterism"], ["pentaHigh", "pentaST", "pentaSMid", "pentaHalfXH", "pentaSB"]], [[6, 1.2, 0, 0.4, r312_Stroke], ["asterisk", "dualAsterisk", "asterism"], ["hexHigh", "hexST", "hexSMid", "hexHalfXH", "hexSB"]], [[5, 1.2, 1, 0.4, r312_Stroke], ["asterisk", "dualAsterisk", "asterism"], ["turnPentaHigh", "turnPentaST", "turnPentaSMid", "turnPentaHalfXH", "turnPentaSB"]], [[6, 1.2, 0.5, 0.4, r312_Stroke], ["asterisk", "dualAsterisk", "asterism"], ["turnHexHigh", "turnHexST", "turnHexSMid", "turnHexHalfXH", "turnHexSB"]], [[5, 1.2, 0, 0.4, r312_GeometryStroke], ["opAsterisk", "", ""], ["", "", "penta", "", ""]], [[6, 1.2, 0, 0.4, r312_GeometryStroke], ["opAsterisk", "", ""], ["", "", "hex", "", ""]], [[5, 1.2, 1, 0.4, r312_GeometryStroke], ["opAsterisk", "", ""], ["", "", "turnPenta", "", ""]], [[6, 1.2, 0.5, 0.4, r312_GeometryStroke], ["opAsterisk", "", ""], ["", "", "turnHex", "", ""]], [[8, 1.2, 0.5, 0.4, r312_AdviceStroke(3)], ["flower", "", ""], ["high", "ST", "sMid", "", ""]]];
        var _r312_t7 = r312_asteriskKinds;
        var _r312_t8 = _r312_t7.length;
        var _r312_t9 = 0;
        while (_r312_t9 < _r312_t8) {
            _r312_t10 = _r312_t7[_r312_t9];
            r312_sides = _r312_t10[0][0];
            r312_size = _r312_t10[0][1];
            r312_rot = _r312_t10[0][2];
            r312_pFine = _r312_t10[0][3];
            r312_stroke = _r312_t10[0][4];
            _r312_t10[0];
            r312_name = _r312_t10[1][0];
            r312_dual = _r312_t10[1][1];
            r312_triple = _r312_t10[1][2];
            _r312_t10[1];
            r312_high = _r312_t10[2][0];
            r312_slashTop = _r312_t10[2][1];
            r312_sMid = _r312_t10[2][2];
            r312_halfXH = _r312_t10[2][3];
            r312_slashBot = _r312_t10[2][4];
            _r312_t10[2];
            r312_xn$GlyphSaveSink$2Lrc4b.save(r312_name + "." + r312_sMid, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r319_currentGlyph) {
                var r319_s, r319_c, _r319_t2, _r319_t3;
                var r319_radius = r312_LongJut * r312_size;
                var r319_fine = r312_stroke * r312_pFine;
                var r319_final = 0.5 * Math.min(r312_stroke, r319_radius * Math.PI / r312_sides);
                var _r319_t0 = 0;
                var _r319_t1 = r312_sides;
                var r319_j = _r319_t0;
                while (r319_j < _r319_t1) {
                    r319_s = Math.sin((2 * r319_j / r312_sides + r312_rot) * Math.PI);
                    r319_c = Math.cos((2 * r319_j / r312_sides + r312_rot) * Math.PI);
                    r319_currentGlyph.include(r312_dispiro(r312_flat(r312_Middle, r312_SymbolMid, r312_widths.center(2 * r319_fine)), r312_curl(r312_Middle + r319_radius * r319_s, r312_SymbolMid + r319_radius * r319_c, r312_widths.center(2 * r319_final))));
                    r319_j = r319_j + 1;
                }
                return void 0;
            }));
            if (r312_high) r312_xn$GlyphSaveSink$2Lrc4b.save(r312_name + "." + r312_high, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r324_currentGlyph) {
                var _r324_t0, _r324_t1;
                r324_currentGlyph.include(r312_xn$referglyph$1aao(r312_name + "." + r312_sMid), true, true);
                r324_currentGlyph.include(r312_ApparentTranslate(0, 2 * (r312_yHigh - r312_SymbolMid)));
                return void 0;
            }));
            if (r312_slashTop) r312_xn$GlyphSaveSink$2Lrc4b.save(r312_name + "." + r312_slashTop, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r329_currentGlyph) {
                var _r329_t0, _r329_t1;
                r329_currentGlyph.include(r312_xn$referglyph$1aao(r312_name + "." + r312_sMid), true, true);
                r329_currentGlyph.include(r312_ApparentTranslate(0, r312_yHigh - r312_SymbolMid));
                return void 0;
            }));
            if (r312_halfXH) r312_xn$GlyphSaveSink$2Lrc4b.save(r312_name + "." + r312_halfXH, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r334_currentGlyph) {
                var _r334_t0, _r334_t1;
                r334_currentGlyph.include(r312_xn$referglyph$1aao(r312_name + "." + r312_sMid), true, true);
                r334_currentGlyph.include(r312_ApparentTranslate(0, r312_XH / 2 - r312_SymbolMid));
                return void 0;
            }));
            if (r312_slashBot) r312_xn$GlyphSaveSink$2Lrc4b.save(r312_name + "." + r312_slashBot, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
                var _r339_t0, _r339_t1;
                r339_currentGlyph.include(r312_xn$referglyph$1aao(r312_name + "." + r312_sMid), true, true);
                r339_currentGlyph.include(r312_ApparentTranslate(0, r312_yLow - r312_SymbolMid));
                return void 0;
            }));
            if (r312_dual) r312_xn$GlyphSaveSink$2Lrc4b.save(r312_dual + "." + r312_sMid, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r344_currentGlyph) {
                var _r344_t0, _r344_t1;
                r344_currentGlyph.include(r312_xn$withtransform$5sIl(r312_ApparentTranslate(0, r312_yHigh_DT - r312_SymbolMid), r312_xn$referglyph$1aao(r312_name + "." + r312_sMid)), true, true);
                r344_currentGlyph.include(r312_xn$withtransform$5sIl(r312_ApparentTranslate(0, r312_yLow_DT - r312_SymbolMid), r312_xn$referglyph$1aao(r312_name + "." + r312_sMid)));
                return void 0;
            }));
            if (r312_triple) (function () {
                var r349_FMosaicWide, r349_MosaicNameSuffix, r349_MosaicWidth, r349_MosaicWidthScalar, _r349_t3, _r349_t5, _r349_t6, _r349_tag7;
                var r349_WidthKinds = [[0, ".NWID", r312_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r312_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
                var _r349_t0 = r349_WidthKinds;
                var _r349_t1 = _r349_t0.length;
                var _r349_t2 = 0;
                var _r349_t4 = _r349_t2 < _r349_t1;
                while (_r349_t4) {
                    _r349_t3 = _r349_t0[_r349_t2];
                    r349_FMosaicWide = _r349_t3[0];
                    r349_MosaicNameSuffix = _r349_t3[1];
                    r349_MosaicWidth = _r349_t3[2];
                    r349_MosaicWidthScalar = _r349_t3[3];
                    (function () {
                        var r352_MosaicDesiredWidth = r312_WideWidth1;
                        var r352_MosaicMiddle = r349_MosaicWidth / 2;
                        var r352_MosaicUnitWidth = r349_MosaicWidth / r349_MosaicWidthScalar;
                        var r352_MangleUnicode = function (r353_unicode, r353__desiredOverride) {
                            var _r353_t0, _r353_t1;
                            return r349_MosaicWidth === (r353__desiredOverride || r352_MosaicDesiredWidth) ? r353_unicode : void 0;
                        };
                        var r352_MangleName = function (r354_name) {
                            var _r354_t0, _r354_t1;
                            return r354_name + r349_MosaicNameSuffix;
                        };
                        var r352_scale = Math.sqrt(r349_MosaicWidthScalar / 2);
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r352_MangleName(r312_triple) + "." + r312_sMid, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r357_currentGlyph) {
                            var _r357_t0, _r357_t1;
                            r357_currentGlyph.setWidth(r349_MosaicWidth);
                            r357_currentGlyph.include(r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r362_currentGlyph) {
                                var _r362_t0, _r362_t1;
                                r362_currentGlyph.include(r312_xn$referglyph$1aao(r312_name + "." + r312_sMid), true, true);
                                r362_currentGlyph.include(r312_ScaleAround(r312_Middle, r312_SymbolMid, r352_scale, r352_scale));
                                r362_currentGlyph.include(r312_ApparentTranslate(r349_MosaicWidth * 0.5 - r312_Width / 2, r312_yHigh_DT - r312_SymbolMid));
                                return void 0;
                            })));
                            r357_currentGlyph.include(r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r369_currentGlyph) {
                                var _r369_t0, _r369_t1;
                                r369_currentGlyph.include(r312_xn$referglyph$1aao(r312_name + "." + r312_sMid), true, true);
                                r369_currentGlyph.include(r312_ScaleAround(r312_Middle, r312_SymbolMid, r352_scale, r352_scale));
                                r369_currentGlyph.include(r312_ApparentTranslate(r349_MosaicWidth * 0.75 - r312_Width / 2, r312_yLow_DT - r312_SymbolMid));
                                return void 0;
                            })));
                            r357_currentGlyph.include(r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r376_currentGlyph) {
                                var _r376_t0, _r376_t1;
                                r376_currentGlyph.include(r312_xn$referglyph$1aao(r312_name + "." + r312_sMid), true, true);
                                r376_currentGlyph.include(r312_ScaleAround(r312_Middle, r312_SymbolMid, r352_scale, r352_scale));
                                r376_currentGlyph.include(r312_ApparentTranslate(r349_MosaicWidth * 0.25 - r312_Width / 2, r312_yLow_DT - r312_SymbolMid));
                                return void 0;
                            })));
                            return void 0;
                        }));
                    })();
                    _r349_t5 = _r349_t2 = _r349_t2 + 1;
                    _r349_t4 = _r349_t2 < _r349_t1;
                }
                return _r349_t5;
            })();
            _r312_t9 = _r312_t9 + 1;
        }
        r312_xn$selectvariant$7Hrq("asterisk", "*");
        r312_xn$selectvariant$7Hrq("asterisk/slashTop", new r312_xn$NamedParameterPair$2Lrc9b("shapeFrom", "asterisk"));
        r312_xn$selectvariant$7Hrq("asterisk/slashBot", 8270, new r312_xn$NamedParameterPair$2Lrc9b("shapeFrom", "asterisk"));
        r312_xn$selectvariant$7Hrq("asterisk/halfXH", new r312_xn$NamedParameterPair$2Lrc9b("shapeFrom", "asterisk"));
        r312_xn$selectvariant$7Hrq("asterisk/sMid", new r312_xn$NamedParameterPair$2Lrc9b("shapeFrom", "asterisk"));
        r312_xn$selectvariant$7Hrq("asterisk/sMid/ligComment", new r312_xn$NamedParameterPair$2Lrc9b("shapeFrom", "asterisk"), new r312_xn$NamedParameterPair$2Lrc9b("follow", "asterisk/sMid"));
        r312_xn$selectvariant$7Hrq("dualAsterisk", 8273, new r312_xn$NamedParameterPair$2Lrc9b("follow", "asterisk/sMid"));
        r312_xn$selectvariant$7Hrq("flower", 8277);
        r312_xn$selectvariant$7Hrq("opAsterisk", 8727);
        (function () {
            var r389_FMosaicWide, r389_MosaicNameSuffix, r389_MosaicWidth, r389_MosaicWidthScalar, _r389_t3, _r389_t5, _r389_t6, _r389_tag7;
            var r389_WidthKinds = [[0, ".NWID", r312_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r312_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r389_t0 = r389_WidthKinds;
            var _r389_t1 = _r389_t0.length;
            var _r389_t2 = 0;
            var _r389_t4 = _r389_t2 < _r389_t1;
            while (_r389_t4) {
                _r389_t3 = _r389_t0[_r389_t2];
                r389_FMosaicWide = _r389_t3[0];
                r389_MosaicNameSuffix = _r389_t3[1];
                r389_MosaicWidth = _r389_t3[2];
                r389_MosaicWidthScalar = _r389_t3[3];
                (function () {
                    var r392_MosaicDesiredWidth = r312_WideWidth1;
                    var r392_MosaicMiddle = r389_MosaicWidth / 2;
                    var r392_MosaicUnitWidth = r389_MosaicWidth / r389_MosaicWidthScalar;
                    var r392_MangleUnicode = function (r393_unicode, r393__desiredOverride) {
                        var _r393_t0, _r393_t1;
                        return r389_MosaicWidth === (r393__desiredOverride || r392_MosaicDesiredWidth) ? r393_unicode : void 0;
                    };
                    var r392_MangleName = function (r394_name) {
                        var _r394_t0, _r394_t1;
                        return r394_name + r389_MosaicNameSuffix;
                    };
                    return r312_xn$selectvariant$7Hrq(r392_MangleName("asterism"), r392_MangleUnicode(8258), new r312_xn$NamedParameterPair$2Lrc9b("follow", "asterisk/sMid"));
                })();
                _r389_t5 = _r389_t2 = _r389_t2 + 1;
                _r389_t4 = _r389_t2 < _r389_t1;
            }
            return _r389_t5;
        })();
        return r312_xn$GlyphSaveSink$2Lrc4b.save("slavonicAsterisk", 42611, new r312_xn$Capture$2Lrc8.GlyphProc(function (r398_currentGlyph) {
            var _r398_t0, _r398_t1;
            var r398_zAtAngle = function (r399_cx, r399_cy, r399_r, r399_degrees) {
                var _r399_t0, _r399_t1;
                var r399_angle = (r399_degrees + 90) * Math.PI / 180;
                return r312_corner(r399_cx + r399_r * Math.cos(r399_angle), r399_cy + r399_r * Math.sin(r399_angle));
            };
            var r398_starBaseShape = function (r400_cx, r400_cy, r400_r) {
                var _r400_t0, _r400_t1;
                return r312_union(r312_xn$spirooutline$1aao(r398_zAtAngle(r400_cx, r400_cy, r400_r, 0), r398_zAtAngle(r400_cx, r400_cy, r400_r, 120), r398_zAtAngle(r400_cx, r400_cy, r400_r, 240)), r312_xn$spirooutline$1aao(r398_zAtAngle(r400_cx, r400_cy, r400_r, 60), r398_zAtAngle(r400_cx, r400_cy, r400_r, 180), r398_zAtAngle(r400_cx, r400_cy, r400_r, 300)));
            };
            var r398_sw = r312_AdviceStroke(4);
            var r398_rDiff = r398_sw * Math.sqrt(3);
            r398_currentGlyph.include(r312_difference(r398_starBaseShape(r312_Width / 2, r1_mix(r312_SymbolMid, r312_yHigh, 2), r312_LongJut * 1.2), r398_starBaseShape(r312_Width / 2, r1_mix(r312_SymbolMid, r312_yHigh, 2), r312_LongJut * 1.2 - r398_rDiff)));
            return void 0;
        }));
    });
    return void 0;
});


