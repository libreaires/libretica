"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/geometry/box";
import * as _s0_t2 from "@iosevka/geometry/transform";
var _s0_t3;
export {_s0_t3 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Box = _r1_t9.Box;
var _r1_t10 = _s0_t2;
var r1_Transform = _r1_t10.Transform;
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
    r313_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r313_xn$Capture_Ext$2Lrc2b, "Symbol-Pictograph-Geometric", function (r314_xn$Capture$2Lrc8, r314_xn$ExportCapture$2Lrc4b) {
        var _r314_t5, _r314_t6, _r314_t7, _r314_tag8;
        var _r314_t0 = r314_xn$Capture$2Lrc8;
        var r314_xn$GlyphSaveSink$2Lrc4b = _r314_t0["$GlyphSaveSink$"];
        var r314_xn$NamedParameterPair$2Lrc9b = _r314_t0["$NamedParameterPair$"];
        var r314_xn$Exec$2Lrc5 = _r314_t0["$Exec$"];
        var r314_fontMetrics = _r314_t0.fontMetrics;
        var _r314_t1 = r314_xn$Capture$2Lrc8.Metrics;
        var r314_Width = _r314_t1.Width;
        var r314_SB = _r314_t1.SB;
        var r314_OperTop = _r314_t1.OperTop;
        var r314_OperBot = _r314_t1.OperBot;
        var r314_Upward = _r314_t1.Upward;
        var r314_Downward = _r314_t1.Downward;
        var r314_Rightward = _r314_t1.Rightward;
        var r314_Leftward = _r314_t1.Leftward;
        var r314_AdviceStroke = _r314_t1.AdviceStroke;
        var r314_WideWidth4 = _r314_t1.WideWidth4;
        var r314_RightSB = _r314_t1.RightSB;
        var r314_GeometryStroke = _r314_t1.GeometryStroke;
        var _r314_t2 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_flat = _r314_t2.flat;
        var r314_curl = _r314_t2.curl;
        var r314_widths = _r314_t2.widths;
        var r314_xn$disablecontrast$3qIs = _r314_t2["disable-contrast"];
        var r314_heading = _r314_t2.heading;
        var r314_dispiro = _r314_t2.dispiro;
        var _r314_t3 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_xn$decor$0cao = _r314_t3["decor@"];
        var r314_xn$decor$0cao1 = _r314_t3["decor@@"];
        var r314_xn$decor$0cao11 = _r314_t3["decor@@@"];
        var _r314_t4 = r314_xn$Capture$2Lrc8.BooleFns;
        var r314_intersection = _r314_t4.intersection;
        return (function () {
            var r317_FMosaicWide, r317_MosaicNameSuffix, r317_MosaicWidth, r317_MosaicWidthScalar, _r317_t3, _r317_t5, _r317_t6, _r317_tag7;
            var r317_WidthKinds = [[0, ".NWID", r314_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r314_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r317_t0 = r317_WidthKinds;
            var _r317_t1 = _r317_t0.length;
            var _r317_t2 = 0;
            var _r317_t4 = _r317_t2 < _r317_t1;
            while (_r317_t4) {
                _r317_t3 = _r317_t0[_r317_t2];
                r317_FMosaicWide = _r317_t3[0];
                r317_MosaicNameSuffix = _r317_t3[1];
                r317_MosaicWidth = _r317_t3[2];
                r317_MosaicWidthScalar = _r317_t3[3];
                (function () {
                    var _r320_t4, _r320_tag5, _r320_t6, _r320_tag7, _r320_t8, _r320_tag9, _r320_t10, _r320_tag11;
                    var r320_MosaicDesiredWidth = r314_WideWidth4;
                    var r320_MosaicMiddle = r317_MosaicWidth / 2;
                    var r320_MosaicUnitWidth = r317_MosaicWidth / r317_MosaicWidthScalar;
                    var r320_MangleUnicode = function (r321_unicode, r321__desiredOverride) {
                        var _r321_t0, _r321_t1;
                        return r317_MosaicWidth === (r321__desiredOverride || r320_MosaicDesiredWidth) ? r321_unicode : void 0;
                    };
                    var r320_MangleName = function (r322_name) {
                        var _r322_t0, _r322_t1;
                        return r322_name + r317_MosaicNameSuffix;
                    };
                    var _r320_t0 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
                    var r320_HBar = _r320_t0.HBar;
                    var r320_VBar = _r320_t0.VBar;
                    var _r320_t1 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var r320_xn$referglyph$1aao = _r320_t1["refer-glyph"];
                    var _r320_t2 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Geometric-Shared"].resolve();
                    var r320_GeometricDim = _r320_t2.GeometricDim;
                    var _r320_t3 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Mosaic-Block"].resolve();
                    var r320_HShade = _r320_t3.HShade;
                    var r320_VShade = _r320_t3.VShade;
                    var r320_top = r314_fontMetrics.os2.sTypoAscender;
                    var r320_bottom = r314_fontMetrics.os2.sTypoDescender;
                    var r320_left = 0;
                    var r320_right = r317_MosaicWidth;
                    var r320_midX = r1_mix(r320_left, r320_right, 0.5);
                    var r320_midY = r1_mix(r320_top, r320_bottom, 0.5);
                    var r320_Geom = r320_GeometricDim(r320_MosaicUnitWidth, r317_MosaicWidth);
                    (function () {
                        var r328_directions = [{
                            "dx": 1,
                            "dy": 0,
                            "heading": r314_Rightward
                        }, {
                            "dx": 0,
                            "dy": 1,
                            "heading": r314_Upward
                        }, {
                            "dx": -1,
                            "dy": 0,
                            "heading": r314_Leftward
                        }, {
                            "dx": 0,
                            "dy": -1,
                            "heading": r314_Downward
                        }];
                        var r328_spiralSw = r314_AdviceStroke(4, Math.sqrt(r317_MosaicWidthScalar / 2));
                        var r328_oneStep = r320_Geom.Size / 4.5;
                        var r328_stepsPerTurn = [9, 9, 9, 7, 7, 5, 5, 3, 3];
                        var r328_SquareSpiral = function (r329_startx, r329_starty, r329_startidx) {
                            var _r329_t0, _r329_t1;
                            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
                                var r331_dx, r331_dy, r331_dir, r331_x2, r331_y2, _r331_t2, _r331_t3, _r331_t4;
                                var r331_x1 = r329_startx;
                                var r331_y1 = r329_starty;
                                var _r331_t0 = 0;
                                var _r331_t1 = r328_stepsPerTurn.length;
                                var r331_idx = _r331_t0;
                                while (r331_idx < _r331_t1) {
                                    _r331_t2 = r328_directions[(r329_startidx + r331_idx) % 4];
                                    r331_dx = _r331_t2.dx;
                                    r331_dy = _r331_t2.dy;
                                    r331_dir = _r331_t2.heading;
                                    r331_x2 = r331_x1 + r331_dx * r328_oneStep * r328_stepsPerTurn[r331_idx];
                                    r331_y2 = r331_y1 + r331_dy * r328_oneStep * r328_stepsPerTurn[r331_idx];
                                    r331_currentGlyph.include(r314_dispiro(r314_widths.lhs(r328_spiralSw), r314_xn$disablecontrast$3qIs(), r314_flat(r331_x1, r331_y1, r314_heading(r331_dir)), r314_curl(r331_x2, r331_y2, r314_heading(r331_dir))));
                                    r331_x1 = r331_x2;
                                    r331_y1 = r331_y2;
                                    r331_idx = r331_idx + 1;
                                }
                                return void 0;
                            });
                        };
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("squareSpiralFromTopLeft"), r320_MangleUnicode(117884), new r314_xn$Capture$2Lrc8.GlyphProc(function (r337_currentGlyph) {
                            var _r337_t0, _r337_t1;
                            r337_currentGlyph.setWidth(r317_MosaicWidth);
                            r337_currentGlyph.include(r328_SquareSpiral(r320_Geom.Left, r320_Geom.Top, 3));
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("squareSpiralFromTopRight"), r320_MangleUnicode(117885), new r314_xn$Capture$2Lrc8.GlyphProc(function (r342_currentGlyph) {
                            var _r342_t0, _r342_t1;
                            r342_currentGlyph.setWidth(r317_MosaicWidth);
                            r342_currentGlyph.include(r328_SquareSpiral(r320_Geom.Right, r320_Geom.Top, 2));
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("squareSpiralFromBottomRight"), r320_MangleUnicode(117886), new r314_xn$Capture$2Lrc8.GlyphProc(function (r347_currentGlyph) {
                            var _r347_t0, _r347_t1;
                            r347_currentGlyph.setWidth(r317_MosaicWidth);
                            r347_currentGlyph.include(r328_SquareSpiral(r320_Geom.Right, r320_Geom.Bot, 1));
                            return void 0;
                        }));
                        return r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("squareSpiralFromBottomLeft"), r320_MangleUnicode(117887), new r314_xn$Capture$2Lrc8.GlyphProc(function (r352_currentGlyph) {
                            var _r352_t0, _r352_t1;
                            r352_currentGlyph.setWidth(r317_MosaicWidth);
                            r352_currentGlyph.include(r328_SquareSpiral(r320_Geom.Left, r320_Geom.Bot, 0));
                            return void 0;
                        }));
                    })();
                    (function () {
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("vertLadder"), r320_MangleUnicode(117892), new r314_xn$Capture$2Lrc8.GlyphProc(function (r359_currentGlyph) {
                            var _r359_t0, _r359_t1;
                            r359_currentGlyph.setWidth(r317_MosaicWidth);
                            r359_currentGlyph.include(r320_HShade(8, r320_top, r320_bottom, r320_Geom.Left, r320_Geom.Right));
                            r359_currentGlyph.include(r320_VBar.l(r320_Geom.Left, r320_bottom, r320_top, r314_GeometryStroke));
                            r359_currentGlyph.include(r320_VBar.r(r320_Geom.Right, r320_bottom, r320_top, r314_GeometryStroke));
                            return void 0;
                        }));
                        return r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("horiLadder"), r320_MangleUnicode(117893), new r314_xn$Capture$2Lrc8.GlyphProc(function (r366_currentGlyph) {
                            var _r366_t0, _r366_t1;
                            r366_currentGlyph.setWidth(r317_MosaicWidth);
                            r366_currentGlyph.include(r320_VShade(4 * r317_MosaicWidthScalar, r320_Geom.Top, r320_Geom.Bot, r320_left, r320_right));
                            r366_currentGlyph.include(r320_HBar.b(r320_left, r320_right, r320_Geom.Bot, r314_GeometryStroke));
                            r366_currentGlyph.include(r320_HBar.t(r320_left, r320_right, r320_Geom.Top, r314_GeometryStroke));
                            return void 0;
                        }));
                    })();
                    (function () {
                        var r372_stripes = 2 + 2 * r317_MosaicWidthScalar;
                        var r372_coTop = r1_mix(r320_Geom.Top, r320_Geom.Bot, 0 - 1 / (2 * r372_stripes));
                        var r372_coBot = r1_mix(r320_Geom.Top, r320_Geom.Bot, 1 + 1 / (2 * r372_stripes));
                        var r372_coLeft = r1_mix(r320_Geom.Left, r320_Geom.Right, 0 - 1 / (2 * r372_stripes));
                        var r372_coRight = r1_mix(r320_Geom.Left, r320_Geom.Right, 1 + 1 / (2 * r372_stripes));
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("stripedTriangleLeft"), r320_MangleUnicode(117888), new r314_xn$Capture$2Lrc8.GlyphProc(function (r375_currentGlyph) {
                            var _r375_t0, _r375_t1;
                            r375_currentGlyph.setWidth(r317_MosaicWidth);
                            r375_currentGlyph.include(r314_intersection(r320_xn$referglyph$1aao(r320_MangleName("blackTriangleLeft")), r320_VShade(r372_stripes, r320_top, r320_bottom, r372_coLeft, r372_coRight)));
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("stripedTriangleUp"), r320_MangleUnicode(117889), new r314_xn$Capture$2Lrc8.GlyphProc(function (r380_currentGlyph) {
                            var _r380_t0, _r380_t1;
                            r380_currentGlyph.setWidth(r317_MosaicWidth);
                            r380_currentGlyph.include(r314_intersection(r320_xn$referglyph$1aao(r320_MangleName("blackTriangleUp")), r320_HShade(r372_stripes, r372_coTop, r372_coBot, r320_left, r320_right)));
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("stripedTriangleRight"), r320_MangleUnicode(117890), new r314_xn$Capture$2Lrc8.GlyphProc(function (r385_currentGlyph) {
                            var _r385_t0, _r385_t1;
                            r385_currentGlyph.setWidth(r317_MosaicWidth);
                            r385_currentGlyph.include(r314_intersection(r320_xn$referglyph$1aao(r320_MangleName("blackTriangleRight")), r320_VShade(r372_stripes, r320_top, r320_bottom, r372_coLeft, r372_coRight)));
                            return void 0;
                        }));
                        return r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("stripedTriangleDown"), r320_MangleUnicode(117891), new r314_xn$Capture$2Lrc8.GlyphProc(function (r390_currentGlyph) {
                            var _r390_t0, _r390_t1;
                            r390_currentGlyph.setWidth(r317_MosaicWidth);
                            r390_currentGlyph.include(r314_intersection(r320_xn$referglyph$1aao(r320_MangleName("blackTriangleDown")), r320_HShade(r372_stripes, r372_coTop, r372_coBot, r320_left, r320_right)));
                            return void 0;
                        }));
                    })();
                    return (function () {
                        var _r394_t0 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Shared-Symbol-Shapes"].resolve();
                        var r394_HZigzag = _r394_t0.HZigzag;
                        return r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("horiZigzag"), r320_MangleUnicode(118448), new r314_xn$Capture$2Lrc8.GlyphProc(function (r398_currentGlyph) {
                            var _r398_t0, _r398_t1;
                            r398_currentGlyph.setWidth(r320_Geom.Width);
                            var r398_left = r314_SB * r317_MosaicWidthScalar;
                            var r398_right = r314_RightSB * r317_MosaicWidthScalar;
                            var r398_amp = (r314_OperTop - r314_OperBot) / 8;
                            var r398_sgmts = 4 * r317_MosaicWidthScalar + 1;
                            r398_currentGlyph.include(r394_HZigzag.fromSide(r320_Geom.MidY, r398_left, r398_right, r398_amp, r398_sgmts, 1, r314_GeometryStroke));
                            return void 0;
                        }));
                    })();
                })();
                _r317_t5 = _r317_t2 = _r317_t2 + 1;
                _r317_t4 = _r317_t2 < _r317_t1;
            }
            return _r317_t5;
        })();
    });
    return void 0;
});


