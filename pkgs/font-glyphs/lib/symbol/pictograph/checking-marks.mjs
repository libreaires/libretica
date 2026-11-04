"use strict";
import * as _s0_t0 from "@iosevka/geometry/box";
import * as _s0_t1 from "@iosevka/util";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t2 = function _r1_t10(r373_t) {
    var r373_n, r373_i, r373_a, _r373_t3, _r373_t4, _r373_t5, _r373_t6, _r373_t7, _r373_t8, _r373_t9, _r373_t10, _r373_t11, _r373_t12, _r373_t13, _r373_t14, _r373_t15, _r373_t16, _r373_t17, _r373_t18, _r373_t19, _r373_t20, _r373_t21, _r373_t22, _r373_t23, _r373_t24, _r373_t25, _r373_t26;
    var _r373_t0 = function () {
        _r373_t7 = function (_r373_t8) {
            _r373_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r373_t8
            };
        };
        _r373_t9 = r373_t instanceof Array;
        if (_r373_t9) {
            _r373_t10 = r373_n = r373_t.length;
            _r373_t11 = r373_i = 0;
            _r373_t12 = function (_r373_t14) {
                return _r373_t7(_r373_t14);
            };
            _r373_t13 = function (_r373_t15) {
                _r373_t16 = r373_i < r373_n;
                if (_r373_t16) {
                    _r373_t0 = function (_r373_t17) {
                        return _r373_t13(r373_i = r373_i + 1);
                    };
                    return {
                        "value": [r373_i, r373_t[r373_i]],
                        "done": false
                    };
                } else return _r373_t12(_r373_t15);
            };
            return _r373_t13();
        } else {
            _r373_t18 = r373_a = Object.keys(r373_t);
            _r373_t19 = r373_n = r373_a.length;
            _r373_t20 = r373_i = 0;
            _r373_t21 = function (_r373_t23) {
                return _r373_t7(_r373_t23);
            };
            _r373_t22 = function (_r373_t24) {
                _r373_t25 = r373_i < r373_n;
                if (_r373_t25) {
                    _r373_t0 = function (_r373_t26) {
                        return _r373_t22(r373_i = r373_i + 1);
                    };
                    return {
                        "value": [r373_a[r373_i], r373_t[r373_a[r373_i]]],
                        "done": false
                    };
                } else return _r373_t21(_r373_t24);
            };
            return _r373_t22();
        }
    };
    var _r373_t1 = function (x) {
        try {
            return _r373_t0(x);
        } catch (ex) {
            return _r373_t2(ex);
        }
    };
    var _r373_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10) _r373_t3 = this; else {
        _r373_t4 = function () {
            void 0;
        };
        _r373_t4.prototype = _r1_t10.prototype;
        _r373_t3 = new _r373_t4();
    }
    _r373_t3[Symbol.iterator] = function () {
        return _r373_t3;
    };
    _r373_t3.next = _r373_t1;
    _r373_t3.throw = function (x) {
        return _r373_t2(x);
    };
    return _r373_t3;
};
var _r1_t8 = _s0_t0;
var r1_Box = _r1_t8.Box;
var _r1_t9 = _s0_t1;
var r1_mix = _r1_t9.mix;
var r1_linreg = _r1_t9.linreg;
var r1_clamp = _r1_t9.clamp;
var r1_fallback = _r1_t9.fallback;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Pictograph-Checking-Marks", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t8, _r313_t9, _r313_t10, _r313_tag11, _r313_t12, _r313_tag13;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_SymbolMid = _r313_t1.SymbolMid;
        var r313_ParenTop = _r313_t1.ParenTop;
        var r313_ParenBot = _r313_t1.ParenBot;
        var r313_Upward = _r313_t1.Upward;
        var r313_Downward = _r313_t1.Downward;
        var r313_OX = _r313_t1.OX;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_WideWidth1 = _r313_t1.WideWidth1;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_GeometryStroke = _r313_t1.GeometryStroke;
        var r313_UnicodeWeightGrade = _r313_t1.UnicodeWeightGrade;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_corner = _r313_t2.corner;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_alsoThru = _r313_t2.alsoThru;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_union = _r313_t4.union;
        var r313_difference = _r313_t4.difference;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_DiagCor = _r313_t5.DiagCor;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_NameUni = _r313_t6.NameUni;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Geometric-Shared"].resolve();
        var r313_GeometricDim = _r313_t7.GeometricDim;
        (function () {
            var r319_FMosaicWide, r319_MosaicNameSuffix, r319_MosaicWidth, r319_MosaicWidthScalar, _r319_t3, _r319_t5, _r319_t6, _r319_tag7;
            var r319_WidthKinds = [[0, ".NWID", r313_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r313_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r319_t0 = r319_WidthKinds;
            var _r319_t1 = _r319_t0.length;
            var _r319_t2 = 0;
            var _r319_t4 = _r319_t2 < _r319_t1;
            while (_r319_t4) {
                _r319_t3 = _r319_t0[_r319_t2];
                r319_FMosaicWide = _r319_t3[0];
                r319_MosaicNameSuffix = _r319_t3[1];
                r319_MosaicWidth = _r319_t3[2];
                r319_MosaicWidthScalar = _r319_t3[3];
                (function () {
                    var _r322_t0, _r322_tag1;
                    var r322_MosaicDesiredWidth = r313_WideWidth1;
                    var r322_MosaicMiddle = r319_MosaicWidth / 2;
                    var r322_MosaicUnitWidth = r319_MosaicWidth / r319_MosaicWidthScalar;
                    var r322_MangleUnicode = function (r323_unicode, r323__desiredOverride) {
                        var _r323_t0, _r323_t1;
                        return r319_MosaicWidth === (r323__desiredOverride || r322_MosaicDesiredWidth) ? r323_unicode : void 0;
                    };
                    var r322_MangleName = function (r324_name) {
                        var _r324_t0, _r324_t1;
                        return r324_name + r319_MosaicNameSuffix;
                    };
                    return (function () {
                        var r326_unicode, r326_sw, _r326_t3, _r326_t7, _r326_t11;
                        var r326_Geom = r313_GeometricDim(r322_MosaicUnitWidth, r319_MosaicWidth);
                        var r326_lightSw = r313_UnicodeWeightGrade(300, r326_Geom.Scalar, r313_GeometryStroke);
                        var r326_boldSw = r313_UnicodeWeightGrade(700, r326_Geom.Scalar, r313_GeometryStroke);
                        var r326_heavySw = r313_UnicodeWeightGrade(900, r326_Geom.Scalar, r313_GeometryStroke);
                        var r326_ptMaxWidth = r319_MosaicWidth - r313_SB;
                        var r326_ptHeight0 = 1.5 * (r313_Width - r313_SB / 2) * Math.pow(r319_MosaicWidthScalar, 1 / 4);
                        var r326_ptHeight = Math.pow(r326_ptHeight0, 2) / Math.hypot(r326_ptHeight0, Math.min(r326_ptHeight0, r326_ptMaxWidth));
                        var r326_ptWidth = Math.min(r326_ptMaxWidth, r326_ptHeight);
                        var r326_ptMidX = r319_MosaicWidth / 2;
                        var r326_plainBox = r1_Box.fromPointAndSize(r319_MosaicWidth / 2, r313_SymbolMid, r326_ptWidth, r326_ptHeight);
                        var r326_ptSB = (r319_MosaicWidth - r326_ptWidth) / 2;
                        var r326_ptRSB = r319_MosaicWidth - r326_ptSB;
                        var r326_ptTop = r313_SymbolMid + r326_ptHeight / 2;
                        var r326_ptBot = r313_SymbolMid - r326_ptHeight / 2;
                        var r326_checkMarkShape = function (r329_box, r329_sw) {
                            var _r329_t0, _r329_t1;
                            return r313_union(r313_dispiro(r313_widths.center(r329_sw), r313_g4(r329_box.l, r329_box.yp(0.46) + 0.5 * r329_sw), r313_alsoThru(0.5, 0.4), r313_g4(r329_box.xp(0.4), r329_box.yp(0.05), r313_heading(r313_Downward))), r313_dispiro(r313_widths.center(r329_sw), r313_g4(r329_box.xp(0.4), r329_box.yp(0.05), r313_heading(r313_Upward)), r313_alsoThru(0.5, 0.6), r313_g4(r329_box.r, r329_box.yp(0.9))));
                        };
                        var _r326_t0 = [[10003, r326_lightSw], [10004, r326_heavySw]];
                        var _r326_t1 = _r326_t0.length;
                        var _r326_t2 = 0;
                        while (_r326_t2 < _r326_t1) {
                            _r326_t3 = _r326_t0[_r326_t2];
                            r326_unicode = _r326_t3[0];
                            r326_sw = _r326_t3[1];
                            r313_xn$GlyphSaveSink$2Lrc4b.save(r322_MangleName(r313_NameUni(r326_unicode)), r322_MangleUnicode(r326_unicode), new r313_xn$Capture$2Lrc8.GlyphProc(function (r334_currentGlyph) {
                                var _r334_t0, _r334_t1;
                                r334_currentGlyph.setWidth(r319_MosaicWidth);
                                r334_currentGlyph.include(r326_checkMarkShape(r326_plainBox, r326_sw));
                                return void 0;
                            }));
                            _r326_t2 = _r326_t2 + 1;
                        }
                        var r326_straightCrossShape = function (r337_box, r337_sw) {
                            var _r337_t0, _r337_t1;
                            return r313_union(r313_dispiro(r313_widths.center(r337_sw), r313_g4(r337_box.r, r337_box.t), r313_g4(r337_box.l, r337_box.b)), r313_dispiro(r313_widths.center(r337_sw), r313_g4(r337_box.l, r337_box.t), r313_g4(r337_box.r, r337_box.b)));
                        };
                        var _r326_t4 = [[10005, r326_lightSw], [10006, r326_heavySw]];
                        var _r326_t5 = _r326_t4.length;
                        var _r326_t6 = 0;
                        while (_r326_t6 < _r326_t5) {
                            _r326_t7 = _r326_t4[_r326_t6];
                            r326_unicode = _r326_t7[0];
                            r326_sw = _r326_t7[1];
                            r313_xn$GlyphSaveSink$2Lrc4b.save(r322_MangleName(r313_NameUni(r326_unicode)), r322_MangleUnicode(r326_unicode), new r313_xn$Capture$2Lrc8.GlyphProc(function (r342_currentGlyph) {
                                var _r342_t0, _r342_t1;
                                r342_currentGlyph.setWidth(r319_MosaicWidth);
                                r342_currentGlyph.include(r326_straightCrossShape(r326_plainBox, r326_sw));
                                return void 0;
                            }));
                            _r326_t6 = _r326_t6 + 1;
                        }
                        var r326_curlyCrossShape = function (r345_box, r345_sw) {
                            var _r345_t0, _r345_t1;
                            return r313_union(r313_dispiro(r313_widths.center(r345_sw), r313_g4(r345_box.xp(1.05), r345_box.yp(1.01)), r313_alsoThru(0.53, 0.45), r313_g4(r345_box.xp(-0.05), r345_box.yp(-0.025))), r313_dispiro(r313_widths.center(r345_sw), r313_g4(r345_box.l, r345_box.yp(0.96)), r313_alsoThru(0.47, 0.5), r313_g4(r345_box.r, r345_box.yp(0.05))));
                        };
                        var _r326_t8 = [[10007, r326_lightSw], [10008, r326_heavySw]];
                        var _r326_t9 = _r326_t8.length;
                        var _r326_t10 = 0;
                        while (_r326_t10 < _r326_t9) {
                            _r326_t11 = _r326_t8[_r326_t10];
                            r326_unicode = _r326_t11[0];
                            r326_sw = _r326_t11[1];
                            r313_xn$GlyphSaveSink$2Lrc4b.save(r322_MangleName(r313_NameUni(r326_unicode)), r322_MangleUnicode(r326_unicode), new r313_xn$Capture$2Lrc8.GlyphProc(function (r350_currentGlyph) {
                                var _r350_t0, _r350_t1;
                                r350_currentGlyph.setWidth(r319_MosaicWidth);
                                r350_currentGlyph.include(r326_curlyCrossShape(r326_plainBox, r326_sw));
                                return void 0;
                            }));
                            _r326_t10 = _r326_t10 + 1;
                        }
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r322_MangleName("halfCheck"), r322_MangleUnicode(9083), new r313_xn$Capture$2Lrc8.GlyphProc(function (r355_currentGlyph) {
                            var _r355_t0, _r355_t1;
                            r355_currentGlyph.setWidth(r319_MosaicWidth);
                            r355_currentGlyph.include(r313_xn$referglyph$1aao(r322_MangleName(r313_NameUni(10003))));
                            r355_currentGlyph.include(r313_dispiro(r313_widths.center(r326_lightSw), r313_g4(r1_mix(r326_ptSB, r326_ptRSB, 0.5), r1_mix(r326_ptBot, r326_ptTop, 0.82)), r313_alsoThru(0.47, 0.5), r313_g4(r326_ptRSB, r1_mix(r326_ptBot, r326_ptTop, 0.42))));
                            return void 0;
                        }));
                        var r326_instLabelBox = r1_Box.fromPointAndHalfSize(r319_MosaicWidth / 2, r313_SymbolMid, r326_Geom.Size).pad(Math.max(r319_MosaicWidth / 16, r313_AdviceStroke(4)));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r322_MangleName(9989), r322_MangleUnicode(9989), new r313_xn$Capture$2Lrc8.GlyphProc(function (r361_currentGlyph) {
                            var _r361_t0, _r361_t1;
                            r361_currentGlyph.setWidth(r319_MosaicWidth);
                            r361_currentGlyph.include(r313_difference(r313_xn$referglyph$1aao(r322_MangleName("blackSquare")), r326_checkMarkShape(r326_instLabelBox, r326_boldSw)));
                            return void 0;
                        }));
                        return r313_xn$GlyphSaveSink$2Lrc4b.save(r322_MangleName(10062), r322_MangleUnicode(10062), new r313_xn$Capture$2Lrc8.GlyphProc(function (r366_currentGlyph) {
                            var _r366_t0, _r366_t1;
                            r366_currentGlyph.setWidth(r319_MosaicWidth);
                            r366_currentGlyph.include(r313_difference(r313_xn$referglyph$1aao(r322_MangleName("blackSquare")), r326_straightCrossShape(r326_instLabelBox, r326_boldSw)));
                            return void 0;
                        }));
                    })();
                })();
                _r319_t5 = _r319_t2 = _r319_t2 + 1;
                _r319_t4 = _r319_t2 < _r319_t1;
            }
            return _r319_t5;
        })();
        return (function () {
            var r370_unicode, r370_sw, r370_side, r370_suffix, r370_widthScale, r370_heightScale, _r370_t3, _r370_t4, _r370_t5, _r370_t6, _r370_t8;
            var r370_Geom = r313_GeometricDim(r313_Width, r313_Width);
            var r370_mediumSw = r313_UnicodeWeightGrade(500, r370_Geom.Scalar, r313_GeometryStroke);
            var r370_heavySw = r313_UnicodeWeightGrade(900, r370_Geom.Scalar, r313_GeometryStroke);
            var r370_xHeavySw = r313_UnicodeWeightGrade(1100, r370_Geom.Scalar, r313_GeometryStroke);
            var r370_HeightConfig = {
                "tall": [1, 1],
                "middle": [0.8, 0.75],
                "short": [0.55, 0.5]
            };
            var r370_CharConfig = [[10092, r370_mediumSw, 1], [10093, r370_mediumSw, 0], [10094, r370_heavySw, 1], [10095, r370_heavySw, 0], [10096, r370_xHeavySw, 1], [10097, r370_xHeavySw, 0]];
            var _r370_t0 = r370_CharConfig;
            var _r370_t1 = _r370_t0.length;
            var _r370_t2 = 0;
            var _r370_t7 = _r370_t2 < _r370_t1;
            while (_r370_t7) {
                _r370_t3 = _r370_t0[_r370_t2];
                r370_unicode = _r370_t3[0];
                r370_sw = _r370_t3[1];
                r370_side = _r370_t3[2];
                _r370_t4 = _r1_t2(r370_HeightConfig)[Symbol.iterator]();
                _r370_t5 = void 0;
                while (!(_r370_t5 = _r370_t4.next()).done) {
                    _r370_t6 = _r370_t5.value;
                    r370_suffix = _r370_t6[0];
                    r370_widthScale = _r370_t6[1][0];
                    r370_heightScale = _r370_t6[1][1];
                    _r370_t6[1];
                    r313_xn$GlyphSaveSink$2Lrc4b.save("" + r313_NameUni(r370_unicode) + "." + r370_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r377_currentGlyph) {
                        var _r377_t0, _r377_t1;
                        var r377_top = r1_mix(r313_SymbolMid, r313_ParenTop, r370_heightScale);
                        var r377_bot = r1_mix(r313_SymbolMid, r313_ParenBot, r370_heightScale);
                        var r377_left = r1_mix(r313_Middle, r313_SB, r370_widthScale);
                        var r377_right = r1_mix(r313_Middle, r313_RightSB, r370_widthScale);
                        var r377_cor = r313_DiagCor(r377_top - r377_bot, 2 * (r377_right - r377_left));
                        var r377_swC = r370_sw * r377_cor;
                        var r377_shift = 0.5 * r377_swC + r313_OX;
                        r377_currentGlyph.include(r313_dispiro(r313_widths.center(r377_swC), r313_corner(r1_mix(r377_left + r377_shift, r377_right - r377_shift, r370_side), r377_top, r313_heading(r313_Downward)), r313_corner(r1_mix(r377_left + r377_shift, r377_right - r377_shift, 1 - r370_side), r313_SymbolMid, r313_heading(r313_Downward)), r313_corner(r1_mix(r377_left + r377_shift, r377_right - r377_shift, r370_side), r377_bot, r313_heading(r313_Downward))));
                        return void 0;
                    }));
                }
                r313_xn$selectvariant$7Hrq(r313_NameUni(r370_unicode), r370_unicode, new r313_xn$NamedParameterPair$2Lrc9b("follow", "decorativeAngleBracket"));
                _r370_t8 = _r370_t2 = _r370_t2 + 1;
                _r370_t7 = _r370_t2 < _r370_t1;
            }
            return _r370_t8;
        })();
    });
    return void 0;
});


