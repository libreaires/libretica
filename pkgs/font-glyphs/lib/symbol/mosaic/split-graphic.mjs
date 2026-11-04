"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/geometry/transform";
import * as _s0_t2 from "@iosevka/geometry/box";
var _s0_t3;
export {_s0_t3 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Transform = _r1_t9.Transform;
var _r1_t10 = _s0_t2;
var r1_Box = _r1_t10.Box;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t3 = r1_apply = function () {
    var r309_block, _r309_t4, _r309_t6;
    var _r309_t3 = this;
    var _r309_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r309_t1 = _r309_t0.length;
    var _r309_t2 = 0;
    var _r309_t5 = _r309_t2 < _r309_t1;
    while (_r309_t5) {
        _r309_t6 = (r309_block = _r309_t0[_r309_t2], r309_block(_r309_t3), _r309_t2 = _r309_t2 + 1);
        _r309_t5 = _r309_t2 < _r309_t1;
    }
    return _r309_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r313_xn$Capture_Ext$2Lrc2b) {
    var _r313_t0, _r313_t1;
    r313_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r313_xn$Capture_Ext$2Lrc2b, "Symbol-Mosaic-Split-Graphic", function (r314_xn$Capture$2Lrc8, r314_xn$ExportCapture$2Lrc4b) {
        var _r314_t10, _r314_t11, _r314_t12, _r314_tag13;
        var _r314_t0 = r314_xn$Capture$2Lrc8;
        var r314_xn$GlyphSaveSink$2Lrc4b = _r314_t0["$GlyphSaveSink$"];
        var r314_xn$NamedParameterPair$2Lrc9b = _r314_t0["$NamedParameterPair$"];
        var r314_xn$Exec$2Lrc5 = _r314_t0["$Exec$"];
        var r314_fontMetrics = _r314_t0.fontMetrics;
        var _r314_t1 = r314_xn$Capture$2Lrc8.Metrics;
        var r314_Translate = _r314_t1.Translate;
        var r314_HSwToV = _r314_t1.HSwToV;
        var r314_AdviceStroke = _r314_t1.AdviceStroke;
        var r314_WideWidth4 = _r314_t1.WideWidth4;
        var r314_DotRadius = _r314_t1.DotRadius;
        var _r314_t2 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_g4 = _r314_t2.g4;
        var r314_corner = _r314_t2.corner;
        var r314_close = _r314_t2.close;
        var r314_widths = _r314_t2.widths;
        var r314_archv = _r314_t2.archv;
        var r314_arcvh = _r314_t2.arcvh;
        var r314_dispiro = _r314_t2.dispiro;
        var r314_xn$spirooutline$1aao = _r314_t2["spiro-outline"];
        var _r314_t3 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_xn$decor$0cao = _r314_t3["decor@"];
        var r314_xn$decor$0cao1 = _r314_t3["decor@@"];
        var r314_xn$decor$0cao11 = _r314_t3["decor@@@"];
        var _r314_t4 = r314_xn$Capture$2Lrc8.BooleFns;
        var r314_union = _r314_t4.union;
        var r314_intersection = _r314_t4.intersection;
        var r314_difference = _r314_t4.difference;
        var _r314_t5 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r314_MaskBelow = _r314_t5.MaskBelow;
        var r314_MaskLeft = _r314_t5.MaskLeft;
        var r314_MaskRight = _r314_t5.MaskRight;
        var r314_DotAt = _r314_t5.DotAt;
        var r314_HBar = _r314_t5.HBar;
        var r314_VBar = _r314_t5.VBar;
        var r314_ForceUpright = _r314_t5.ForceUpright;
        var _r314_t6 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r314_t7 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-OShape-Variants"].resolve();
        var r314_RoundRectShapeT = _r314_t7.RoundRectShapeT;
        var _r314_t8 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Pictograph-Stick-Figure"].resolve();
        var r314_StickFigureKit = _r314_t8.StickFigureKit;
        var _r314_t9 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Pictograph-Keyboard"].resolve();
        var r314_KeyGen = _r314_t9.KeyGen;
        var r314_boxDrawingStroke = r314_AdviceStroke(3.5);
        var r314_graphicSw = r314_AdviceStroke(3.5);
        var r314_top = r314_fontMetrics.os2.sTypoAscender;
        var r314_bottom = r314_fontMetrics.os2.sTypoDescender;
        var r314_left = 0;
        var r314_MosaicHeight = r314_top - r314_bottom;
        r314_xn$ExportCapture$2Lrc4b(function () {
            var _r321_t0, _r321_t1;
            return {
                "Multicell": r314_Multicell
            };
        });
        var r314_Multicell = function (r322_MosaicWidth) {
            var _r322_t0, _r322_t1, _r322_t2, _r322_tag3;
            return (function () {
                var r325_NBox, r325_Split, r325_Select;
                var r325_exports = {};
                var r325_Mask = function () {
                    var _r332_t0, _r332_t1;
                    return r314_xn$spirooutline$1aao(r314_corner(r314_left, r314_top), r314_corner(r314_left + r322_MosaicWidth, r314_top), r314_corner(r314_left + r322_MosaicWidth, r314_bottom), r314_corner(r314_left, r314_bottom));
                };
                r325_exports.NBox = r325_NBox = function (r334_t, r334_b, r334_l, r334_r, r334_vspan, r334_hspan) {
                    var _r334_t0, _r334_t1;
                    var r334_r2 = r334_r + r322_MosaicWidth * (r334_hspan - 1);
                    var r334_t2 = r334_t + r314_MosaicHeight * (r334_vspan - 1);
                    return new r1_Box(r334_t2, r334_b, r334_l, r334_r2);
                };
                r325_exports.Split = r325_Split = function (r336_t, r336_b, r336_l, r336_r, r336_vspan, r336_hspan, r336_shapeFunc, r336_mappings) {
                    var _r336_t0, _r336_t1;
                    return new r314_xn$Capture$2Lrc8.GlyphProc(function (r338_currentGlyph) {
                        var r338_vidx, r338_hidx, r338_name, r338_code, _r338_t3, _r338_t4, _r338_t5;
                        var r338_box = r325_NBox(r336_t, r336_b, r336_l, r336_r, r336_vspan, r336_hspan);
                        var r338_shape = r336_shapeFunc(r338_box.top, r338_box.bottom, r338_box.left, r338_box.right);
                        var r338_gizmo = r338_currentGlyph.gizmo;
                        var _r338_t0 = r336_mappings;
                        var _r338_t1 = _r338_t0.length;
                        var _r338_t2 = 0;
                        while (_r338_t2 < _r338_t1) {
                            _r338_t3 = _r338_t0[_r338_t2];
                            r338_vidx = _r338_t3[0];
                            r338_hidx = _r338_t3[1];
                            r338_name = _r338_t3[2];
                            r338_code = _r338_t3[3];
                            r314_xn$GlyphSaveSink$2Lrc4b.save(r338_name, r338_code, new r314_xn$Capture$2Lrc8.ForkGlyphProc(r338_currentGlyph, new r314_xn$Capture$2Lrc8.GlyphProc(function (r342_currentGlyph) {
                                var _r342_t0, _r342_t1;
                                r342_currentGlyph.gizmo = r338_gizmo;
                                r342_currentGlyph.include(r314_intersection(r325_Mask(), new r314_xn$Capture$2Lrc8.GlyphProc(function (r345_currentGlyph) {
                                    var _r345_t0, _r345_t1;
                                    r345_currentGlyph.include(r338_shape, true, true);
                                    r345_currentGlyph.include(r314_Translate(-r338_hidx * r322_MosaicWidth, -r338_vidx * r314_MosaicHeight));
                                    return void 0;
                                })));
                                return void 0;
                            })));
                            _r338_t2 = _r338_t2 + 1;
                        }
                        return void 0;
                    });
                };
                r325_exports.Select = r325_Select = function (r349_t, r349_b, r349_l, r349_r, r349_vspan, r349_hspan, r349_shapeFunc, r349_vidx, r349_hidx) {
                    var _r349_t0, _r349_t1;
                    return new r314_xn$Capture$2Lrc8.GlyphProc(function (r351_currentGlyph) {
                        var _r351_t0, _r351_t1;
                        var r351_box = r325_NBox(r349_t, r349_b, r349_l, r349_r, r349_vspan, r349_hspan);
                        var r351_shape = r349_shapeFunc(r351_box.top, r351_box.bottom, r351_box.left, r351_box.right);
                        r351_currentGlyph.include(r314_intersection(r325_Mask(), new r314_xn$Capture$2Lrc8.GlyphProc(function (r354_currentGlyph) {
                            var _r354_t0, _r354_t1;
                            r354_currentGlyph.include(r351_shape, true, true);
                            r354_currentGlyph.include(r314_Translate(-r349_hidx * r322_MosaicWidth, -r349_vidx * r314_MosaicHeight));
                            return void 0;
                        })));
                        return void 0;
                    });
                };
                return r325_exports;
            })();
        };
        return (function () {
            var r359_FMosaicWide, r359_MosaicNameSuffix, r359_MosaicWidth, r359_MosaicWidthScalar, _r359_t3, _r359_t5, _r359_t6, _r359_tag7;
            var r359_WidthKinds = [[0, ".NWID", r314_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r314_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r359_t0 = r359_WidthKinds;
            var _r359_t1 = _r359_t0.length;
            var _r359_t2 = 0;
            var _r359_t4 = _r359_t2 < _r359_t1;
            while (_r359_t4) {
                _r359_t3 = _r359_t0[_r359_t2];
                r359_FMosaicWide = _r359_t3[0];
                r359_MosaicNameSuffix = _r359_t3[1];
                r359_MosaicWidth = _r359_t3[2];
                r359_MosaicWidthScalar = _r359_t3[3];
                (function () {
                    var _r362_t0, _r362_tag1, _r362_t2, _r362_tag3, _r362_t4, _r362_tag5, _r362_t6, _r362_tag7;
                    var r362_MosaicDesiredWidth = r314_WideWidth4;
                    var r362_MosaicMiddle = r359_MosaicWidth / 2;
                    var r362_MosaicUnitWidth = r359_MosaicWidth / r359_MosaicWidthScalar;
                    var r362_MangleUnicode = function (r363_unicode, r363__desiredOverride) {
                        var _r363_t0, _r363_t1;
                        return r359_MosaicWidth === (r363__desiredOverride || r362_MosaicDesiredWidth) ? r363_unicode : void 0;
                    };
                    var r362_MangleName = function (r364_name) {
                        var _r364_t0, _r364_t1;
                        return r364_name + r359_MosaicNameSuffix;
                    };
                    var r362_right = r359_MosaicWidth;
                    var r362_multicell = r314_Multicell(r359_MosaicWidth);
                    (function () {
                        var r366_CircleTouchingBox = function (r367_top, r367_bot, r367_left, r367_right) {
                            var _r367_t0, _r367_t1;
                            return r314_dispiro(r314_widths.lhs(r314_boxDrawingStroke), r314_g4(r367_left, r1_mix(r367_top, r367_bot, 0.5)), r314_arcvh.superness(2), r314_g4(r1_mix(r367_left, r367_right, 0.5), r367_bot), r314_archv.superness(2), r314_g4(r367_right, r1_mix(r367_top, r367_bot, 0.5)), r314_arcvh.superness(2), r314_g4(r1_mix(r367_left, r367_right, 0.5), r367_top), r314_archv.superness(2), r314_close());
                        };
                        return r314_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r370_currentGlyph) {
                            var _r370_t0, _r370_t1;
                            r370_currentGlyph.setWidth(r359_MosaicWidth);
                            r370_currentGlyph.include(r314_ForceUpright());
                            r370_currentGlyph.include(r362_multicell.Split(r314_top, r314_bottom, r314_left, r362_right, 2, 2, r366_CircleTouchingBox, [[1, 0, r362_MangleName("quarterCircleLT"), r362_MangleUnicode(117813)], [1, 1, r362_MangleName("quarterCircleRT"), r362_MangleUnicode(117814)], [0, 0, r362_MangleName("quarterCircleLB"), r362_MangleUnicode(117817)], [0, 1, r362_MangleName("quarterCircleRB"), r362_MangleUnicode(117818)]]));
                            r370_currentGlyph.include(r362_multicell.Split(r314_top, r314_bottom, r314_left, r362_right, 4, 4, r366_CircleTouchingBox, [[3, 0, r362_MangleName("twelfthCircleLT"), r362_MangleUnicode(117808)], [3, 1, r362_MangleName("twelfthCircleCLT"), r362_MangleUnicode(117809)], [3, 2, r362_MangleName("twelfthCircleCRT"), r362_MangleUnicode(117810)], [3, 3, r362_MangleName("twelfthCircleRT"), r362_MangleUnicode(117811)], [2, 0, r362_MangleName("twelfthCircleLMT"), r362_MangleUnicode(117812)], [2, 3, r362_MangleName("twelfthCircleRMT"), r362_MangleUnicode(117815)], [1, 0, r362_MangleName("twelfthCircleLMB"), r362_MangleUnicode(117816)], [1, 3, r362_MangleName("twelfthCircleRMB"), r362_MangleUnicode(117819)], [0, 0, r362_MangleName("twelfthCircleLB"), r362_MangleUnicode(117820)], [0, 1, r362_MangleName("twelfthCircleCLB"), r362_MangleUnicode(117821)], [0, 2, r362_MangleName("twelfthCircleCRB"), r362_MangleUnicode(117822)], [0, 3, r362_MangleName("twelfthCircleRB"), r362_MangleUnicode(117823)]]));
                            return void 0;
                        }));
                    })();
                    (function () {
                        var r376_scaffold = {};
                        r376_scaffold.legSize = 1 / 6;
                        r376_scaffold.dotSize = r314_DotRadius;
                        r376_scaffold.dotXOffset = (r314_top - r314_bottom) / 9;
                        r376_scaffold.dotYOffset = (r314_top - r314_bottom) / 6;
                        r376_scaffold.screenInset = (r314_top - r314_bottom) / 8;
                        r376_scaffold.cornerRad = (r314_top - r314_bottom) / 8;
                        var r376_Screen = function (r377_top, r377_bot, r377_left, r377_right) {
                            var _r377_t0, _r377_t1;
                            return r314_RoundRectShapeT(r314_dispiro, r377_top, r377_bot, r377_left, r377_right, r314_graphicSw, r376_scaffold.cornerRad);
                        };
                        var r376_Television = function (r378_top, r378_bot, r378_left, r378_right) {
                            var _r378_t0, _r378_t1;
                            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r380_currentGlyph) {
                                var _r380_t0, _r380_t1;
                                var r380_tvBot = r1_mix(r378_bot, r378_top, r376_scaffold.legSize);
                                var r380_legWidth = (r378_right - r378_left) * r376_scaffold.legSize * (2 / r359_MosaicWidthScalar);
                                var r380_legLeft = r378_left + r314_HSwToV(r314_graphicSw);
                                var r380_legRight = r378_right - r314_HSwToV(r314_graphicSw);
                                var r380_dotX = r378_right - r314_HSwToV(r314_graphicSw) - r376_scaffold.dotXOffset;
                                r380_currentGlyph.include(r314_HBar.t(r378_left, r378_right, r378_top, r314_graphicSw));
                                r380_currentGlyph.include(r314_HBar.b(r378_left, r378_right, r380_tvBot, r314_graphicSw));
                                r380_currentGlyph.include(r314_VBar.l(r378_left, r380_tvBot, r378_top, r314_graphicSw));
                                r380_currentGlyph.include(r314_VBar.r(r378_right, r380_tvBot, r378_top, r314_graphicSw));
                                r380_currentGlyph.include(r314_xn$spirooutline$1aao(r314_corner(r380_legLeft, r380_tvBot), r314_corner(r380_legLeft + r380_legWidth / 3, r378_bot), r314_corner(r380_legLeft + r380_legWidth * 2 / 3, r378_bot), r314_corner(r380_legLeft + r380_legWidth, r380_tvBot)));
                                r380_currentGlyph.include(r314_xn$spirooutline$1aao(r314_corner(r380_legRight, r380_tvBot), r314_corner(r380_legRight - r380_legWidth / 3, r378_bot), r314_corner(r380_legRight - r380_legWidth * 2 / 3, r378_bot), r314_corner(r380_legRight - r380_legWidth, r380_tvBot)));
                                r380_currentGlyph.include(r314_DotAt(r380_dotX, r378_top - r314_graphicSw - r376_scaffold.dotYOffset * 1, r376_scaffold.dotSize));
                                r380_currentGlyph.include(r314_DotAt(r380_dotX, r378_top - r314_graphicSw - r376_scaffold.dotYOffset * 2, r376_scaffold.dotSize));
                                r380_currentGlyph.include(r314_DotAt(r380_dotX, r378_top - r314_graphicSw - r376_scaffold.dotYOffset * 3, r376_scaffold.dotSize));
                                r380_currentGlyph.include(r376_Screen(r378_top - r376_scaffold.screenInset, r380_tvBot + r376_scaffold.screenInset, r378_left + r376_scaffold.screenInset, r380_dotX - r376_scaffold.dotXOffset));
                                return void 0;
                            });
                        };
                        return r314_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r393_currentGlyph) {
                            var _r393_t0, _r393_t1;
                            r393_currentGlyph.setWidth(r359_MosaicWidth);
                            r393_currentGlyph.include(r314_ForceUpright());
                            r393_currentGlyph.include(r362_multicell.Split(r314_top, r314_bottom, r314_left, r362_right, 2, 2, r376_Television, [[1, 0, r362_MangleName("televisionLT"), r362_MangleUnicode(117938)], [1, 1, r362_MangleName("televisionRT"), r362_MangleUnicode(117939)], [0, 0, r362_MangleName("televisionLB"), r362_MangleUnicode(117940)], [0, 1, r362_MangleName("televisionRB"), r362_MangleUnicode(117941)]]));
                            return void 0;
                        }));
                    })();
                    (function () {
                        var r398_scaffold = {};
                        r398_scaffold.blank = 1 / 6;
                        r398_scaffold.dotSize = r314_DotRadius;
                        r398_scaffold.dotXOffset = (r314_top - r314_bottom) / 9;
                        r398_scaffold.dotYOffset = (r314_top - r314_bottom) / 6;
                        r398_scaffold.keyInset = (r314_top - r314_bottom) / 8 * (r359_MosaicWidthScalar / 2);
                        var r398_Microcomputer = function (r399_top, r399_bot, r399_left, r399_right) {
                            var _r399_t0, _r399_t1;
                            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r401_currentGlyph) {
                                var _r401_t0, _r401_t1;
                                var r401_cpuTop = r1_mix(r399_top, r399_bot, r398_scaffold.blank);
                                var r401_dotX = r399_right - r314_HSwToV(r314_graphicSw) - r398_scaffold.dotXOffset;
                                var r401_dotY = r401_cpuTop - r314_graphicSw - r398_scaffold.dotYOffset;
                                var r401_kbdTop = r401_dotY - r398_scaffold.dotYOffset;
                                var r401_keyLeft = r399_left + r314_HSwToV(r314_graphicSw) + r398_scaffold.keyInset;
                                var r401_keyRight = r399_right - r314_HSwToV(r314_graphicSw) - r398_scaffold.keyInset;
                                r401_currentGlyph.include(r314_HBar.t(r399_left, r399_right, r401_cpuTop, r314_graphicSw));
                                r401_currentGlyph.include(r314_HBar.t(r399_left, r399_right, r401_kbdTop, r314_graphicSw));
                                r401_currentGlyph.include(r314_HBar.b(r399_left, r399_right, r399_bot, r314_graphicSw));
                                r401_currentGlyph.include(r314_VBar.l(r399_left, r399_bot, r401_cpuTop, r314_graphicSw));
                                r401_currentGlyph.include(r314_VBar.r(r399_right, r399_bot, r401_cpuTop, r314_graphicSw));
                                r401_currentGlyph.include(r314_HBar.m(r401_keyLeft, r401_dotX - r398_scaffold.dotSize / 2 - r398_scaffold.keyInset, r401_dotY, r314_graphicSw));
                                r401_currentGlyph.include(r314_DotAt(r401_dotX, r401_dotY, r398_scaffold.dotSize));
                                r401_currentGlyph.include(r314_KeyGen(r401_kbdTop - r314_graphicSw - r398_scaffold.keyInset, r399_bot + r314_graphicSw + r398_scaffold.keyInset, r401_keyLeft, r401_keyRight, 28, 4, r314_graphicSw, [[3, 0, 2], [3, 4, 6], [3, 8, 10], [3, 12, 14], [3, 16, 18], [3, 20, 22], [3, 24, 28], [2, 0, 3], [2, 5, 7], [2, 9, 11], [2, 13, 15], [2, 17, 19], [2, 21, 23], [2, 25, 28], [1, 0, 4], [1, 6, 8], [1, 10, 12], [1, 14, 16], [1, 18, 20], [1, 22, 28], [0, 6, 22]]));
                                return void 0;
                            });
                        };
                        return r314_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r412_currentGlyph) {
                            var _r412_t0, _r412_t1;
                            r412_currentGlyph.setWidth(r359_MosaicWidth);
                            r412_currentGlyph.include(r314_ForceUpright());
                            r412_currentGlyph.include(r362_multicell.Split(r314_top, r314_bottom, r314_left, r362_right, 2, 2, r398_Microcomputer, [[1, 0, r362_MangleName("microcomputerLT"), r362_MangleUnicode(117942)], [1, 1, r362_MangleName("microcomputerRT"), r362_MangleUnicode(117943)], [0, 0, r362_MangleName("microcomputerLB"), r362_MangleUnicode(117944)], [0, 1, r362_MangleName("microcomputerRB"), r362_MangleUnicode(117945)]]));
                            return void 0;
                        }));
                    })();
                    return (function () {
                        var r417_StandingKnight = function (r418_top, r418_bot, r418_left, r418_right) {
                            var _r418_t0, _r418_t1;
                            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r420_currentGlyph) {
                                var _r420_t0, _r420_t1;
                                var r420_box = new r1_Box(r418_top, r418_bot, r418_left, r418_right);
                                var r420_sw1 = r314_graphicSw * r359_MosaicWidthScalar;
                                var r420_sw2 = r314_graphicSw * 2 * Math.sqrt(r359_MosaicWidthScalar);
                                var r420_kit1 = r314_StickFigureKit(r420_box, r1_Transform.Id(), r420_sw1);
                                var r420_kit2 = r314_StickFigureKit(r420_box, r314_Translate(r420_sw2 - r420_sw1, 0), r420_sw2);
                                var r420_kit3 = r314_StickFigureKit(r420_box, r314_Translate(r420_sw1 / 2, 0), r420_sw1);
                                var r420_flagMidX = r420_box.mixX(13 / 16) + (r420_sw2 - r420_sw1);
                                r420_currentGlyph.include(r314_union(r420_kit1.RoundSeg(1, 0, 1, 1, 0, 0, -1), r314_intersection(r314_MaskRight(r420_flagMidX), r420_kit2.RoundSeg(16 / 16, 1, 13 / 16, 13 / 16, 0, 0, 1)), r314_intersection(r314_MaskLeft(r420_flagMidX), r420_kit2.RoundSeg(13 / 16, 13 / 16, 10 / 16, 1, 0, 0, 1))));
                                var r420_HelmetX1 = r420_box.mixX(6 / 16);
                                var r420_HelmetMask = r314_union(r420_kit1.Arc(0.75, 0.5, 6 / 16, 14 / 16, 0.75, 10 / 16, 0, 0, 1, 1), r314_MaskLeft(r420_HelmetX1));
                                r420_currentGlyph.include(r314_union(r314_difference(r314_union(r420_kit1.RoundSeg(4 / 16, 25 / 32, 6 / 16, 14 / 16, 0, 0, 1), r420_kit1.Arc(6 / 16, 14 / 16, 10 / 16, 14 / 16, 8 / 16, 31 / 32, 0, 0, 1), r420_kit1.RoundSeg(10 / 16, 14 / 16, 12 / 16, 25 / 32, 0, 0, 1), r420_kit1.Arc(12 / 16, 25 / 32, 13 / 16, 11 / 16, 13 / 16, 47 / 64, 0, 0, 1), r420_kit1.ArcVH(13 / 16, 11 / 16, 11 / 16, 8 / 16, 0, 0, 1)), r420_HelmetMask), r314_intersection(r314_union(r420_kit1.Arc(2 / 16, 5 / 8, 6 / 16, 14 / 16, 2 / 16, 6 / 8, 0, 0, 1, 1), r314_MaskRight(r420_HelmetX1)), r420_kit1.Arc(0.75, 0.5, 6 / 16, 14 / 16, 0.75, 10 / 16, 0, 0, -1)), r314_intersection(r420_HelmetMask, r314_union(r420_kit1.RoundSeg(0.75, 0.5, 0.25, 0.5, 0, 0, 1), r420_kit1.ArcHV(4 / 16, 0.5, 2 / 16, 5 / 8, 0, 0, 1), r420_kit1.ArcHV(6 / 16, 0.5, 4 / 16, 5 / 8, 0, 0, 1), r420_kit1.ArcHV(8 / 16, 0.5, 6 / 16, 5 / 8, 0, 0, 1), r420_kit1.ArcHV(10 / 16, 0.5, 8 / 16, 5 / 8, 0, 0, 1), r420_kit1.ArcHV(12 / 16, 0.5, 10 / 16, 5 / 8, 0, 0, 1), r420_kit1.Arc(2 / 16, 5 / 8, 6 / 16, 14 / 16, 2 / 16, 6 / 8, 0, 0, 1), r420_kit1.Arc(4 / 16, 5 / 8, 8 / 16, 14 / 16, 4 / 16, 6 / 8, 0, 0, 1), r420_kit1.Arc(6 / 16, 5 / 8, 10 / 16, 14 / 16, 6 / 16, 6 / 8, 0, 0, 1), r420_kit1.Arc(8 / 16, 5 / 8, 12 / 16, 14 / 16, 8 / 16, 6 / 8, 0, 0, 1), r420_kit1.Arc(10 / 16, 5 / 8, 14 / 16, 14 / 16, 10 / 16, 6 / 8, 0, 0, 1)))));
                                r420_currentGlyph.include(r314_union(r314_difference(r314_union(r420_kit1.ArcVH(12 / 16, 8 / 16, 7 / 16, 4 / 16, 0, 0, 1), r420_kit1.ArcHV(7 / 16, 4 / 16, 3 / 16, 6 / 16, 0, 0, 1), r420_kit1.Arc(3 / 16, 6 / 16, 4 / 16, 8 / 16, 3 / 16, 7 / 16, 0, 0, 1)), r420_kit1.ArcHV(7 / 16, 6 / 16, 4 / 16, 8 / 16, 0, 0, 1, 1)), r314_intersection(r314_MaskBelow(r420_box.mixY(0.5)), r420_kit1.Arc(12 / 16, 8 / 16, 7 / 16, 6 / 16, 9 / 16, 6 / 16, 0, 0, 1)), r420_kit1.ArcHV(7 / 16, 6 / 16, 4 / 16, 8 / 16, 0, 0, 1)));
                                r420_currentGlyph.include(r314_difference(r314_union(r420_kit1.RoundSeg(1, 0.5, 5 / 8, 0.5, 0, 0, -1), r420_kit1.RoundSeg(1, 0.5, 5 / 8, 0.5, 0, 0, -3), r420_kit1.RoundSeg(1, 0.5, 1, Math.min(17 / 32, 8 / 16 + 2 * r420_sw1 / (r418_top - r418_bot)), 0, 1, -3), r420_kit3.RoundSeg(0 / 16, 7 / 16, 4 / 16, 7 / 16, 1, 0, 1), r420_kit3.RoundSeg(0 / 16, 7 / 16, 4 / 16, 7 / 16, 1, 0, 3), r420_kit3.RoundSeg(1 / 32, 7 / 16, 1 / 32, Math.min(15 / 32, 7 / 16 + 2 * r420_sw1 / (r418_top - r418_bot)), 0, 1, 1), r420_kit1.RoundSeg(8 / 16, 0, 8 / 16, 5 / 16, 0, 0, 1), r420_kit1.RoundSeg(7 / 16, 0, 7 / 16, 5 / 16, 0, 0, -1)), r314_union(r420_kit1.ArcVH(12 / 16, 8 / 16, 7 / 16, 4 / 16, 0, 0, 1, 1), r420_kit1.ArcHV(7 / 16, 4 / 16, 3 / 16, 6 / 16, 0, 0, 1, 1), r420_kit1.Arc(3 / 16, 6 / 16, 4 / 16, 8 / 16, 3 / 16, 7 / 16, 0, 0, 1, 1), r420_kit1.Box(4 / 16, 6 / 16, 8 / 16, 8 / 16))));
                                r420_currentGlyph.include(r314_difference(r314_xn$spirooutline$1aao(r314_corner(r418_left, r418_bot), r314_g4(r420_box.mixX(1 / 4), r418_bot + r420_sw2), r314_g4(r420_box.mixX(2 / 4), r418_bot + 0.99 * r420_sw2), r314_g4(r420_box.mixX(3 / 4), r418_bot + r420_sw2), r314_corner(r420_box.mixX(7 / 8), r418_bot)), r314_intersection(r314_MaskRight(r420_box.mixX(7 / 16)), r314_MaskLeft(r420_box.mixX(1 / 2)))));
                                return void 0;
                            });
                        };
                        return r314_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r428_currentGlyph) {
                            var _r428_t0, _r428_t1;
                            r428_currentGlyph.setWidth(r359_MosaicWidth);
                            r428_currentGlyph.include(r314_ForceUpright());
                            r428_currentGlyph.include(r362_multicell.Split(r314_top, r314_bottom, r314_left, r362_right, 2, 2, r417_StandingKnight, [[1, 0, r362_MangleName("standingknightLT"), r362_MangleUnicode(117970)], [1, 1, r362_MangleName("standingknightRT"), r362_MangleUnicode(117971)], [0, 0, r362_MangleName("standingknightLB"), r362_MangleUnicode(117972)], [0, 1, r362_MangleName("standingknightRB"), r362_MangleUnicode(117973)]]));
                            return void 0;
                        }));
                    })();
                })();
                _r359_t5 = _r359_t2 = _r359_t2 + 1;
                _r359_t4 = _r359_t2 < _r359_t1;
            }
            return _r359_t5;
        })();
    });
    return void 0;
});


