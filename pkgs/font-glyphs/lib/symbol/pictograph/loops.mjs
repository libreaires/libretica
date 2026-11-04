"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/geometry/box";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Box = _r1_t9.Box;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Pictograph-Loops", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t5, _r313_t6, _r313_t7, _r313_tag8;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_XH = _r313_t1.XH;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_WideWidth1 = _r313_t1.WideWidth1;
        var r313_GeometryStroke = _r313_t1.GeometryStroke;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_widths = _r313_t2.widths;
        var r313_dispiro = _r313_t2.dispiro;
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
                    var r319_Arch = _r319_t0.Arch;
                    var r319_FlipAround = _r319_t0.FlipAround;
                    var _r319_t1 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var _r319_t2 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Geometric-Shared"].resolve();
                    var r319_GeometricDim = _r319_t2.GeometricDim;
                    var r319_Geom = r319_GeometricDim(r319_MosaicUnitWidth, r316_MosaicWidth);
                    var r319_box = new r1_Box(r319_Geom.Top, r319_Geom.Bot, r319_Geom.Left, r319_Geom.Right);
                    var r319_LoopImpl = function (r325_bound, r325_nLoops, r325_sw, r325__kX) {
                        var _r325_t0, _r325_t1;
                        return new r313_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
                            var _r327_t2, _r327_t3;
                            var r327_xDroop = (r325_bound.right - r325_bound.left) * (0.2 / r325_nLoops);
                            var r327_left = r325_bound.left + r327_xDroop;
                            var r327_right = r325_bound.right - r327_xDroop;
                            var r327_yTerm = r325_bound.mixY(1 - 0.05 / r325_nLoops);
                            var r327_yInter = r325_bound.mixY(0.9);
                            var r327_ySide = r325_bound.mixY(0.4);
                            var r327_kX = r1_fallback(r325__kX, 0.1);
                            var r327_loopPart = [];
                            var _r327_t0 = 0;
                            var _r327_t1 = r325_nLoops;
                            var r327_i = _r327_t0;
                            while (r327_i < _r327_t1) {
                                r327_loopPart.push([r313_g4.right.mid(r1_mix(r327_left, r327_right, r327_i / r325_nLoops), r325_bound.top), r313_g4(r1_mix(r327_left, r327_right, (r327_i + 0.5) / r325_nLoops), r327_yInter), r313_g4.down.mid(r1_mix(r327_left, r327_right, (r327_i + 1 - r327_kX) / r325_nLoops), r327_ySide), r319_Arch.rhs(r325_bound.bot, new r313_xn$NamedParameterPair$2Lrc9b("sw", r325_sw)), r313_g4.up.mid(r1_mix(r327_left, r327_right, (r327_i + r327_kX) / r325_nLoops), r327_ySide), r313_g4(r1_mix(r327_left, r327_right, (r327_i + 0.5) / r325_nLoops), r327_yInter)]);
                                r327_i = r327_i + 1;
                            }
                            r327_currentGlyph.include(r313_dispiro(r313_widths.rhs(r325_sw), r313_g4(r325_bound.left, r327_yTerm), r327_loopPart, r313_g4.right.mid(r327_right, r325_bound.top), r313_g4(r325_bound.right, r327_yTerm)));
                            return void 0;
                        });
                    };
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("curlyLoop"), r319_MangleUnicode(10160), new r313_xn$Capture$2Lrc8.GlyphProc(function (r334_currentGlyph) {
                        var _r334_t0, _r334_t1;
                        r334_currentGlyph.setWidth(r319_Geom.Width);
                        r334_currentGlyph.include(r319_LoopImpl(r319_box, 1, r313_GeometryStroke));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("doubleCurlyLoop"), r319_MangleUnicode(10175), new r313_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
                        var _r339_t0, _r339_t1;
                        r339_currentGlyph.setWidth(r319_Geom.Width);
                        r339_currentGlyph.include(r319_LoopImpl(r319_box, 2, r313_AdviceStroke(8 / r316_MosaicWidthScalar), 0.05));
                        return void 0;
                    }));
                    return r313_xn$GlyphSaveSink$2Lrc4b.save(r319_MangleName("samaritanSource"), r319_MangleUnicode(8527), new r313_xn$Capture$2Lrc8.GlyphProc(function (r344_currentGlyph) {
                        var _r344_t0, _r344_t1;
                        r344_currentGlyph.setWidth(r319_Geom.Width);
                        var r344_lowBox = new r1_Box(r313_XH / 2, 0, r313_SB, r316_MosaicWidth - r313_SB);
                        r344_currentGlyph.include(r319_LoopImpl(r344_lowBox, 3, r313_AdviceStroke(10 / r316_MosaicWidthScalar)));
                        r344_currentGlyph.include(r319_FlipAround(r344_lowBox.xMid, r344_lowBox.yMid));
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


