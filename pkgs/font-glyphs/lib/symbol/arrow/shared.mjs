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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Arrow-Shared", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t7, _r312_t8, _r312_t9, _r312_tag10;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_DesignParameters = _r312_t1.DesignParameters;
        var r312_Width = _r312_t1.Width;
        var r312_SB = _r312_t1.SB;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_Upward = _r312_t1.Upward;
        var r312_Downward = _r312_t1.Downward;
        var r312_O = _r312_t1.O;
        var r312_AdviceStrokeInSpace = _r312_t1.AdviceStrokeInSpace;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_OperatorStroke = _r312_t1.OperatorStroke;
        var r312_xn$VERYFAR$5sIl = _r312_t1["VERY-FAR"];
        var r312_TINY = _r312_t1.TINY;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_corner = _r312_t2.corner;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_dispiro = _r312_t2.dispiro;
        var r312_xn$spirooutline$1aao = _r312_t2["spiro-outline"];
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var r312_intersection = _r312_t4.intersection;
        var r312_difference = _r312_t4.difference;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_Rect = _r312_t5.Rect;
        var r312_PointingTo = _r312_t5.PointingTo;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_o = r312_O * 2;
        var r312_ArrowDims = function () {
            var _r316_t5;
            var _r316_t6 = arguments;
            var r316_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r316_t6, 0);
            var _r316_t0 = [];
            var _r316_t1 = 0;
            while (_r316_t1 < r316_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r316_xn$flexarguments$2Lrc7uIe5[_r316_t1] instanceof r312_xn$NamedParameterPair$2Lrc9b)) _r316_t0.push(r316_xn$flexarguments$2Lrc7uIe5[_r316_t1]);
                _r316_t1 = _r316_t1 + 1;
            }
            var _r316_t2 = r316_xn$flexarguments$2Lrc7uIe5;
            var _r316_t3 = _r316_t2.length;
            var _r316_t4 = 0;
            while (_r316_t4 < _r316_t3) {
                _r316_t1 = _r316_t2[_r316_t4];
                if (_r316_t1 && _r316_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r316_t1.left === "advance") r316_advance = _r316_t1.right;
                if (_r316_t1 && _r316_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r316_t1.left === "arrowHeight") r316_arrowHeight = _r316_t1.right;
                if (_r316_t1 && _r316_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r316_t1.left === "arrowWidth") r316_arrowWidth = _r316_t1.right;
                if (_r316_t1 && _r316_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r316_t1.left === "arrowSw") r316_arrowSw = _r316_t1.right;
                if (_r316_t1 && _r316_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r316_t1.left === "fine") r316_fine = _r316_t1.right;
                if (_r316_t1 && _r316_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r316_t1.left === "terminal") r316_terminal = _r316_t1.right;
                if (_r316_t1 && _r316_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r316_t1.left === "overlaySw") r316_overlaySw = _r316_t1.right;
                if (_r316_t1 && _r316_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r316_t1.left === "arrowMidX") r316_arrowMidX = _r316_t1.right;
                if (_r316_t1 && _r316_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r316_t1.left === "arrowMidY") r316_arrowMidY = _r316_t1.right;
                _r316_t4 = _r316_t4 + 1;
            }
            var r316_advance = r1_fallback(r316_advance, _r316_t0[0], r312_Width);
            var r316_arrowHeight = r1_fallback(r316_arrowHeight, _r316_t0[1], r312_para.arrowHeight * (r312_Width - r312_SB / 2) * Math.cbrt(r316_advance / r312_Width));
            var r316_arrowWidth = r1_fallback(r316_arrowWidth, _r316_t0[2], Math.min(r316_advance - r312_SB / 2, r316_arrowHeight));
            var r316_arrowSw = r1_fallback(r316_arrowSw, _r316_t0[3], r312_OperatorStroke);
            var r316_fine = r1_fallback(r316_fine, _r316_t0[4], r312_AdviceStroke(3.5));
            var r316_terminal = r1_fallback(r316_terminal, _r316_t0[5], r312_AdviceStroke(5));
            var r316_overlaySw = r1_fallback(r316_overlaySw, _r316_t0[6], r312_AdviceStroke(6));
            var r316_arrowMidX = r1_fallback(r316_arrowMidX, _r316_t0[7], r316_advance / 2);
            var r316_arrowMidY = r1_fallback(r316_arrowMidY, _r316_t0[8], r312_SymbolMid);
            var r316_diagPropX = Math.pow(2, -0.25);
            var r316_diagPropY = Math.pow(2, -0.25);
            var r316_arrowTop = r316_arrowMidY + r316_arrowHeight / 2;
            var r316_arrowBot = r316_arrowMidY - r316_arrowHeight / 2;
            var r316_arrowSB = r316_arrowMidX - r316_arrowWidth / 2;
            var r316_arrowRSB = r316_arrowMidX + r316_arrowWidth / 2;
            var r316_arrowDiagRSB = r1_mix(r316_arrowMidX, r316_arrowRSB, r316_diagPropX);
            var r316_arrowDiagSB = r1_mix(r316_arrowMidX, r316_arrowSB, r316_diagPropX);
            var r316_arrowDiagBot = r1_mix(r316_arrowMidX, r316_arrowBot, r316_diagPropY);
            var r316_arrowDiagTop = r1_mix(r316_arrowMidX, r316_arrowTop, r316_diagPropY);
            var r316_advanceScale = r316_advance / r312_Width;
            var r316_arrowHeadSize = (r312_Width - r312_SB) * r312_DesignParameters.arrow_size * Math.sqrt(r316_arrowWidth / r312_Width) - r312_AdviceStroke(5) / 4;
            var r316_halfArrowSw = r316_arrowSw / 2;
            var r316_halfTerminal = r316_terminal / 2;
            var r316_compactHeadSize = r1_mix(r316_arrowSw, r316_arrowHeadSize, 0.75);
            var r316_doubleBarSpan = r316_arrowHeadSize * 1.1;
            var r316_doubleHeadGap = Math.max(1.5 * r316_fine, 0.175 * r312_Width, 0.15 * r316_advance);
            var r316_strokeSpan1 = r1_mix(r316_halfArrowSw, r316_arrowHeadSize, 0.6);
            var r316_strokeSpan2 = r1_mix(0.5 * r316_doubleBarSpan, r316_arrowHeadSize, 0.75);
            var r316_strokeSpan = r1_mix(r316_strokeSpan1, r316_strokeSpan2, r1_clamp(0, 1, r316_advanceScale - 1));
            var r316_dblArrSpace = r316_arrowWidth - 2 * r316_strokeSpan - 2 * r316_terminal;
            var r316_dhtArrSpace = Math.max(r312_Width * 0.1, r316_arrowWidth - r316_strokeSpan - r316_doubleHeadGap - r316_arrowHeadSize - 0.5 * r316_fine);
            var r316_dblArrSw = Math.min(r316_overlaySw, r312_AdviceStrokeInSpace(r316_dblArrSpace, 2));
            var r316_dhtArrSw = Math.min(r316_overlaySw, r312_AdviceStrokeInSpace(r316_dhtArrSpace, 2));
            return {
                "advance": r316_advance,
                "advanceScale": r316_advanceScale,
                "arrowHeight": r316_arrowHeight,
                "arrowWidth": r316_arrowWidth,
                "arrowMidY": r316_arrowMidY,
                "arrowTop": r316_arrowTop,
                "arrowBot": r316_arrowBot,
                "arrowMidX": r316_arrowMidX,
                "arrowSB": r316_arrowSB,
                "arrowRSB": r316_arrowRSB,
                "diagPropX": r316_diagPropX,
                "diagPropY": r316_diagPropY,
                "arrowDiagRSB": r316_arrowDiagRSB,
                "arrowDiagSB": r316_arrowDiagSB,
                "arrowDiagBot": r316_arrowDiagBot,
                "arrowDiagTop": r316_arrowDiagTop,
                "arrowHeadSize": r316_arrowHeadSize,
                "arrowSw": r316_arrowSw,
                "halfArrowSw": r316_halfArrowSw,
                "fine": r316_fine,
                "terminal": r316_terminal,
                "halfTerminal": r316_halfTerminal,
                "compactHeadSize": r316_compactHeadSize,
                "doubleBarSpan": r316_doubleBarSpan,
                "doubleHeadGap": r316_doubleHeadGap,
                "overlaySw": r316_overlaySw,
                "strokeSpan": r316_strokeSpan,
                "strokeSpan2": r316_strokeSpan2,
                "dblArrSpace": r316_dblArrSpace,
                "dhtArrSpace": r316_dhtArrSpace,
                "dblArrSw": r316_dblArrSw,
                "dhtArrSw": r316_dhtArrSw
            };
        };
        var r312_ArrowBarT = function (r322_dims) {
            var _r322_t0, _r322_t1, _r322_t2, _r322_tag3;
            return (function () {
                var r325_shape, r325_dblShape, r325_tripleShape, r325_quadrupleShape;
                var r325_exports = {};
                var _r325_t0 = r322_dims;
                var r325_arrowSw = _r325_t0.arrowSw;
                r325_exports.shape = r325_shape = function (r333_x1, r333_y1, r333_x2, r333_y2, r333_halfSw, r333_w, r333__offset) {
                    var _r333_t0, _r333_t1;
                    return r312_PointingTo(r333_x1, r333_y1, r333_x2, r333_y2, function (r334_mag) {
                        var _r334_t0, _r334_t1;
                        var r334_p = (r334_mag - r1_fallback(r333__offset, r312_o + r333_halfSw * r1_fallback(r333_w, 1.1))) / r334_mag;
                        return r312_dispiro(r312_widths.center(r333_halfSw * 2), r312_flat(r334_mag * (1 - r334_p), 0), r312_curl(r334_mag, 0));
                    });
                };
                r325_exports.dblShape = r325_dblShape = function (r336_w) {
                    var _r336_t0, _r336_t1;
                    return function (r337_x1, r337_y1, r337_x2, r337_y2) {
                        var _r337_t0, _r337_t1;
                        return r312_PointingTo(r337_x1, r337_y1, r337_x2, r337_y2, function (r338_mag) {
                            var _r338_t0, _r338_t1;
                            var r338_fine = Math.min(r336_w / 3, r325_arrowSw);
                            var r338_coFine = r336_w / 2 - r338_fine / 2;
                            return r312_union(r312_dispiro(r312_widths.center(r338_fine), r312_flat(0, +r338_coFine), r312_curl(r338_mag, +r338_coFine)), r312_dispiro(r312_widths.center(r338_fine), r312_flat(0, -r338_coFine), r312_curl(r338_mag, -r338_coFine)));
                        });
                    };
                };
                r325_exports.tripleShape = r325_tripleShape = function (r340_w) {
                    var _r340_t0, _r340_t1;
                    return function (r341_x1, r341_y1, r341_x2, r341_y2) {
                        var _r341_t0, _r341_t1;
                        return r312_PointingTo(r341_x1, r341_y1, r341_x2, r341_y2, function (r342_mag) {
                            var _r342_t0, _r342_t1;
                            var r342_fine = Math.min(r340_w / 4, r325_arrowSw);
                            var r342_coFine = r340_w / 2 - r342_fine / 2;
                            return r312_union(r312_dispiro(r312_widths.center(r342_fine), r312_flat(0, +r342_coFine), r312_curl(r342_mag, +r342_coFine)), r312_dispiro(r312_widths.center(r342_fine), r312_flat(0, 0), r312_curl(r342_mag, 0)), r312_dispiro(r312_widths.center(r342_fine), r312_flat(0, -r342_coFine), r312_curl(r342_mag, -r342_coFine)));
                        });
                    };
                };
                r325_exports.quadrupleShape = r325_quadrupleShape = function (r344_w) {
                    var _r344_t0, _r344_t1;
                    return function (r345_x1, r345_y1, r345_x2, r345_y2) {
                        var _r345_t0, _r345_t1;
                        return r312_PointingTo(r345_x1, r345_y1, r345_x2, r345_y2, function (r346_mag) {
                            var _r346_t0, _r346_t1;
                            var r346_fine = Math.min(r344_w / 6.4, r325_arrowSw);
                            var r346_coFine = r344_w / 2 - r346_fine / 2;
                            return r312_union(r312_dispiro(r312_widths.center(r346_fine), r312_flat(0, +r346_coFine), r312_curl(r346_mag, +r346_coFine)), r312_dispiro(r312_widths.center(r346_fine), r312_flat(0, +r346_coFine / 3), r312_curl(r346_mag, +r346_coFine / 3)), r312_dispiro(r312_widths.center(r346_fine), r312_flat(0, -r346_coFine / 3), r312_curl(r346_mag, -r346_coFine / 3)), r312_dispiro(r312_widths.center(r346_fine), r312_flat(0, -r346_coFine), r312_curl(r346_mag, -r346_coFine)));
                        });
                    };
                };
                return r325_exports;
            })();
        };
        var r312_ArrowHeadT = function (r347_dims) {
            var _r347_t0, _r347_t1, _r347_t2, _r347_tag3;
            return (function () {
                var r350_shape, r350_ssShape, r350_trigShape, r350_barbShape, r350_outerMask, r350_outerMaskWithOffset, r350_barShape, r350_diamondShape, r350_rectShape;
                var r350_exports = {};
                var _r350_t0 = r347_dims;
                var r350_arrowHeadSize = _r350_t0.arrowHeadSize;
                var r350_doubleHeadGap = _r350_t0.doubleHeadGap;
                var r350_fine = _r350_t0.fine;
                var r350_terminal = _r350_t0.terminal;
                r350_exports.shape = r350_shape = function (r358_x1, r358_y1, r358_x2, r358_y2, r358__size) {
                    var _r358_t0, _r358_t1;
                    return r312_union(r350_shape.lhs(r358_x1, r358_y1, r358_x2, r358_y2, 0, r358__size), r350_shape.rhs(r358_x1, r358_y1, r358_x2, r358_y2, 0, r358__size));
                };
                r350_exports.ssShape = r350_ssShape = function (r360_x1, r360_y1, r360_x2, r360_y2, r360__size) {
                    var _r360_t0, _r360_t1;
                    return r312_union(r350_ssShape.lhs(r360_x1, r360_y1, r360_x2, r360_y2, 0, r360__size), r350_ssShape.rhs(r360_x1, r360_y1, r360_x2, r360_y2, 0, r360__size));
                };
                r350_shape.lhs = function (r361_x1, r361_y1, r361_x2, r361_y2, r361_width, r361__size) {
                    var _r361_t0, _r361_t1;
                    var r361_size = r1_fallback(r361__size, r350_arrowHeadSize);
                    return r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, r312_PointingTo(r361_x1, r361_y1, r361_x2, r361_y2, function (r363_mag) {
                        var _r363_t0, _r363_t1;
                        return r312_dispiro(r312_widths.lhs(r350_fine), r312_flat(r312_o, r361_width / 2, r312_heading(r312_Downward)), r312_curl(r312_o + r361_size, -r361_size, r312_widths.lhs(r350_terminal)));
                    }));
                };
                r350_shape.rhs = function (r364_x1, r364_y1, r364_x2, r364_y2, r364_width, r364__size) {
                    var _r364_t0, _r364_t1;
                    var r364_size = r1_fallback(r364__size, r350_arrowHeadSize);
                    return r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, r312_PointingTo(r364_x1, r364_y1, r364_x2, r364_y2, function (r366_mag) {
                        var _r366_t0, _r366_t1;
                        return r312_dispiro(r312_widths.rhs(r350_fine), r312_flat(r312_o, -r364_width / 2, r312_heading(r312_Upward)), r312_curl(r312_o + r364_size, r364_size, r312_widths.rhs(r350_terminal)));
                    }));
                };
                r350_ssShape.lhs = function (r367_x1, r367_y1, r367_x2, r367_y2, r367_width, r367__size) {
                    var _r367_t0, _r367_t1;
                    var r367_size = r1_fallback(r367__size, r350_arrowHeadSize);
                    return r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, r312_PointingTo(r367_x1, r367_y1, r367_x2, r367_y2, function (r369_mag) {
                        var _r369_t0, _r369_t1;
                        return r312_dispiro(r312_widths.lhs(r350_fine), r312_flat(r312_o, r367_width / 2, r312_heading(r312_Downward)), r312_curl(r312_o + r367_size, -r367_size));
                    }));
                };
                r350_ssShape.rhs = function (r370_x1, r370_y1, r370_x2, r370_y2, r370_width, r370__size) {
                    var _r370_t0, _r370_t1;
                    var r370_size = r1_fallback(r370__size, r350_arrowHeadSize);
                    return r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, r312_PointingTo(r370_x1, r370_y1, r370_x2, r370_y2, function (r372_mag) {
                        var _r372_t0, _r372_t1;
                        return r312_dispiro(r312_widths.rhs(r350_fine), r312_flat(r312_o, -r370_width / 2, r312_heading(r312_Upward)), r312_curl(r312_o + r370_size, r370_size));
                    }));
                };
                r350_exports.trigShape = r350_trigShape = function (r374_x1, r374_y1, r374_x2, r374_y2, r374_width, r374__length) {
                    var _r374_t0, _r374_t1;
                    var r374_length = r1_fallback(r374__length, r374_width);
                    return r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, r312_PointingTo(r374_x1, r374_y1, r374_x2, r374_y2, function (r376_mag) {
                        var _r376_t0, _r376_t1;
                        return r312_xn$spirooutline$1aao(r312_corner(r312_o, 0), r312_corner(r374_length, r374_width - r312_o), r312_corner(r374_length, -r374_width + r312_o));
                    }));
                };
                r350_exports.barbShape = r350_barbShape = function (r378_x1, r378_y1, r378_x2, r378_y2, r378_width, r378_length, r378_thickness) {
                    var _r378_t0, _r378_t1;
                    return r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r381_currentGlyph) {
                        var _r381_t0, _r381_t1;
                        r381_currentGlyph.include(r312_PointingTo(r378_x1, r378_y1, r378_x2, r378_y2, function (r383_mag) {
                            var _r383_t0, _r383_t1;
                            return r312_xn$spirooutline$1aao(r312_corner(r312_o, 0), r312_corner(r378_length, r378_width - r312_o), r312_corner(r378_length + r378_thickness, r378_width - r312_o), r312_corner(r312_o + r378_thickness, 0), r312_corner(r378_length + r378_thickness, -r378_width + r312_o), r312_corner(r378_length, -r378_width + r312_o));
                        }));
                        return void 0;
                    }));
                };
                r350_exports.outerMask = r350_outerMask = function (r385_x1, r385_y1, r385_x2, r385_y2, r385_width, r385__length) {
                    var _r385_t0, _r385_t1;
                    return r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r388_currentGlyph) {
                        var _r388_t0, _r388_t1;
                        var r388_length = r1_fallback(r385__length, r385_width);
                        r388_currentGlyph.include(r312_PointingTo(r385_x1, r385_y1, r385_x2, r385_y2, function (r390_mag) {
                            var _r390_t0, _r390_t1;
                            return r312_xn$spirooutline$1aao(r312_corner(r312_o, 0), r312_corner(r388_length, r385_width - r312_o), r312_corner(r388_length - r312_xn$VERYFAR$5sIl, r385_width - r312_o), r312_corner(r388_length - r312_xn$VERYFAR$5sIl, -r385_width + r312_o), r312_corner(r388_length, -r385_width + r312_o));
                        }));
                        return void 0;
                    }));
                };
                r350_exports.outerMaskWithOffset = r350_outerMaskWithOffset = function (r392_delta, r392_x1, r392_y1, r392_x2, r392_y2, r392_width, r392__length) {
                    var _r392_t0, _r392_t1;
                    return r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r395_currentGlyph) {
                        var _r395_t0, _r395_t1;
                        var r395_length = r1_fallback(r392__length, r392_width);
                        r395_currentGlyph.include(r312_PointingTo(r392_x1, r392_y1, r392_x2, r392_y2, function (r397_mag) {
                            var _r397_t0, _r397_t1;
                            return r312_xn$spirooutline$1aao(r312_corner(r312_o + r392_delta, 0), r312_corner(r395_length, r392_width - r392_delta - r312_o), r312_corner(r395_length - r312_xn$VERYFAR$5sIl, r392_width - r392_delta - r312_o), r312_corner(r395_length - r312_xn$VERYFAR$5sIl, -r392_width + r392_delta + r312_o), r312_corner(r395_length, -r392_width + r392_delta + r312_o));
                        }));
                        return void 0;
                    }));
                };
                r350_exports.barShape = r350_barShape = function (r399_x1, r399_y1, r399_x2, r399_y2, r399_size, r399__sw) {
                    var _r399_t0, _r399_t1;
                    var r399_sw = r1_fallback(r399__sw, r350_fine);
                    return r312_PointingTo(r399_x1, r399_y1, r399_x2, r399_y2, function (r400_mag) {
                        var _r400_t0, _r400_t1;
                        return r312_dispiro(r312_widths.rhs(r399_sw), r312_flat(0, -r399_size), r312_curl(0, r399_size));
                    });
                };
                r350_exports.diamondShape = r350_diamondShape = function (r402_x1, r402_y1, r402_x2, r402_y2, r402_size) {
                    var _r402_t0, _r402_t1;
                    return r312_PointingTo(r402_x1, r402_y1, r402_x2, r402_y2, function (r403_mag) {
                        var _r403_t0, _r403_t1;
                        return r312_xn$spirooutline$1aao(r312_corner(r312_o, 0), r312_corner(r402_size, r402_size - r312_o), r312_corner(2 * r402_size - r312_o, 0), r312_corner(r402_size, -r402_size + r312_o));
                    });
                };
                r350_exports.rectShape = r350_rectShape = function (r405_x1, r405_y1, r405_x2, r405_y2, r405_width, r405__length, r405__width2) {
                    var _r405_t0, _r405_t1;
                    var r405_length = r1_fallback(r405__length, r405_width);
                    return r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, r312_PointingTo(r405_x1, r405_y1, r405_x2, r405_y2, function (r407_mag) {
                        var _r407_t0, _r407_t1;
                        return r312_Rect(r405_width, -r1_fallback(r405__width2, r405_width), 0, r405_length);
                    }));
                };
                return r350_exports;
            })();
        };
        var r312_ArrowT = function (r408_dims) {
            var _r408_t0, _r408_t1, _r408_t2, _r408_tag3;
            return (function () {
                var r411_Head, r411_Bar, r411_shape, r411_ssShape, r411_trigShape, r411_lhsShape, r411_rhsShape, r411_dblShape, r411_dblTrigShape, r411_openShape, r411_tailShape, r411_dblTailShape, r411_multibarShapeT, r411_barTailShapeT, r411_toBarShapeT, r411_toDiamondShapeT;
                var r411_exports = {};
                var _r411_t0 = r408_dims;
                var r411_advance = _r411_t0.advance;
                var r411_advanceScale = _r411_t0.advanceScale;
                var r411_fine = _r411_t0.fine;
                var r411_arrowSw = _r411_t0.arrowSw;
                var r411_halfArrowSw = _r411_t0.halfArrowSw;
                var r411_arrowHeadSize = _r411_t0.arrowHeadSize;
                var r411_doubleHeadGap = _r411_t0.doubleHeadGap;
                r411_exports.Head = r411_Head = r312_ArrowHeadT(r408_dims);
                r411_exports.Bar = r411_Bar = r312_ArrowBarT(r408_dims);
                r411_exports.shape = r411_shape = function (r421_x1, r421_y1, r421_x2, r421_y2, r421_size, r421__halfSw) {
                    var _r421_t0, _r421_t1;
                    return new r312_xn$Capture$2Lrc8.GlyphProc(function (r423_currentGlyph) {
                        var _r423_t0, _r423_t1;
                        var r423_halfSw = r1_fallback(r421__halfSw, r411_halfArrowSw);
                        r423_currentGlyph.include(r411_Head.shape(r421_x1, r421_y1, r421_x2, r421_y2, r421_size));
                        r423_currentGlyph.include(r411_Bar.shape(r421_x1, r421_y1, r421_x2, r421_y2, r423_halfSw));
                        return void 0;
                    });
                };
                r411_exports.ssShape = r411_ssShape = function (r427_x1, r427_y1, r427_x2, r427_y2, r427_size, r427__halfSw) {
                    var _r427_t0, _r427_t1;
                    return new r312_xn$Capture$2Lrc8.GlyphProc(function (r429_currentGlyph) {
                        var _r429_t0, _r429_t1;
                        var r429_halfSw = r1_fallback(r427__halfSw, r411_halfArrowSw);
                        r429_currentGlyph.include(r411_Head.ssShape(r427_x1, r427_y1, r427_x2, r427_y2, r427_size));
                        r429_currentGlyph.include(r411_Bar.shape(r427_x1, r427_y1, r427_x2, r427_y2, r429_halfSw));
                        return void 0;
                    });
                };
                r411_exports.trigShape = r411_trigShape = function (r433_x1, r433_y1, r433_x2, r433_y2, r433_size, r433__halfSw) {
                    var _r433_t0, _r433_t1;
                    return new r312_xn$Capture$2Lrc8.GlyphProc(function (r435_currentGlyph) {
                        var _r435_t0, _r435_t1;
                        var r435_halfSw = r1_fallback(r433__halfSw, r411_halfArrowSw);
                        r435_currentGlyph.include(r411_Head.trigShape(r433_x1, r433_y1, r433_x2, r433_y2, 0.75 * r433_size));
                        r435_currentGlyph.include(r411_Bar.shape(r433_x1, r433_y1, r433_x2, r433_y2, r435_halfSw));
                        return void 0;
                    });
                };
                var r411_halfShape = function (r438_side) {
                    var _r438_t0, _r438_t1;
                    return function (r439_x1, r439_y1, r439_x2, r439_y2, r439_size, r439__halfSw) {
                        var _r439_t0, _r439_t1;
                        return new r312_xn$Capture$2Lrc8.GlyphProc(function (r441_currentGlyph) {
                            var _r441_t0, _r441_t1;
                            var r441_halfSw = r1_fallback(r439__halfSw, r411_halfArrowSw);
                            r441_currentGlyph.include(r438_side(r439_x1, r439_y1, r439_x2, r439_y2, r411_arrowSw, r439_size));
                            r441_currentGlyph.include(r411_Bar.shape(r439_x1, r439_y1, r439_x2, r439_y2, r441_halfSw, 1.75));
                            return void 0;
                        });
                    };
                };
                r411_exports.lhsShape = r411_lhsShape = r411_halfShape(r411_Head.shape.lhs);
                r411_exports.rhsShape = r411_rhsShape = r411_halfShape(r411_Head.shape.rhs);
                r411_exports.dblShape = r411_dblShape = function (r447_x1, r447_y1, r447_x2, r447_y2, r447_size, r447__halfSw) {
                    var _r447_t0, _r447_t1;
                    return new r312_xn$Capture$2Lrc8.GlyphProc(function (r449_currentGlyph) {
                        var _r449_t0, _r449_t1;
                        var r449_halfSw = r1_fallback(r447__halfSw, r411_halfArrowSw);
                        var r449_mag = Math.hypot(r447_y2 - r447_y1, r447_x2 - r447_x1);
                        var r449_p = 1 - r411_doubleHeadGap / r449_mag;
                        var r449_x3 = r1_mix(r447_x1, r447_x2, r449_p);
                        var r449_y3 = r1_mix(r447_y1, r447_y2, r449_p);
                        r449_currentGlyph.include(r411_Head.shape(r447_x1, r447_y1, r447_x2, r447_y2, r447_size));
                        r449_currentGlyph.include(r411_Head.shape(r447_x1, r447_y1, r449_x3, r449_y3, r447_size));
                        r449_currentGlyph.include(r411_Bar.shape(r447_x1, r447_y1, r447_x2, r447_y2, r449_halfSw));
                        return void 0;
                    });
                };
                r411_exports.dblTrigShape = r411_dblTrigShape = function (r454_x1, r454_y1, r454_x2, r454_y2, r454_size, r454__halfSw) {
                    var _r454_t0, _r454_t1;
                    return new r312_xn$Capture$2Lrc8.GlyphProc(function (r456_currentGlyph) {
                        var _r456_t0, _r456_t1;
                        var r456_halfSw = r1_fallback(r454__halfSw, r411_halfArrowSw);
                        var r456_mag = Math.hypot(r454_y2 - r454_y1, r454_x2 - r454_x1);
                        var r456_p = 1 - (0.75 * r454_size - r312_o) / r456_mag;
                        var r456_x3 = r1_mix(r454_x1, r454_x2, r456_p);
                        var r456_y3 = r1_mix(r454_y1, r454_y2, r456_p);
                        r456_currentGlyph.include(r411_Head.trigShape(r454_x1, r454_y1, r454_x2, r454_y2, 0.75 * r454_size));
                        r456_currentGlyph.include(r411_Head.trigShape(r454_x1, r454_y1, r456_x3, r456_y3, 0.75 * r454_size));
                        r456_currentGlyph.include(r411_Bar.shape(r454_x1, r454_y1, r456_x3, r456_y3, r456_halfSw));
                        return void 0;
                    });
                };
                r411_exports.openShape = r411_openShape = function (r461_x1, r461_y1, r461_x2, r461_y2, r461_size, r461__halfSw) {
                    var _r461_t0, _r461_t1;
                    return new r312_xn$Capture$2Lrc8.GlyphProc(function (r463_currentGlyph) {
                        var _r463_t0, _r463_t1;
                        var r463_halfSw = r1_fallback(r461__halfSw, r411_halfArrowSw);
                        var r463_fine = Math.min(r312_AdviceStroke(5), 0.75 * r461_size / 3);
                        var r463_mag = Math.hypot(r461_y2 - r461_y1, r461_x2 - r461_x1);
                        var r463_p = (r463_mag - r463_fine) / r463_mag;
                        var r463_p2 = (r463_mag - r463_fine * Math.SQRT2) / r463_mag;
                        var r463_innerHeaderLengthShrink = r463_fine * (1 + Math.SQRT2);
                        var r463_x1a = r1_mix(r461_x1, r461_x2, 1 - r463_p);
                        var r463_y1a = r1_mix(r461_y1, r461_y2, 1 - r463_p);
                        var r463_x2a = r1_mix(r461_x1, r461_x2, r463_p2);
                        var r463_y2a = r1_mix(r461_y1, r461_y2, r463_p2);
                        r463_currentGlyph.include(r312_difference(r312_union(r411_Bar.shape(r461_x1, r461_y1, r461_x2, r461_y2, r463_halfSw), r411_Head.trigShape(r461_x1, r461_y1, r461_x2, r461_y2, 0.75 * r461_size)), r411_Head.trigShape(r463_x1a, r463_y1a, r463_x2a, r463_y2a, 0.75 * r461_size - r463_innerHeaderLengthShrink)));
                        return void 0;
                    });
                };
                r411_exports.tailShape = r411_tailShape = function (r466_x1, r466_y1, r466_x2, r466_y2, r466_size, r466__halfSw) {
                    var _r466_t0, _r466_t1;
                    return new r312_xn$Capture$2Lrc8.GlyphProc(function (r468_currentGlyph) {
                        var _r468_t0, _r468_t1;
                        var r468_halfSw = r1_fallback(r466__halfSw, r411_halfArrowSw);
                        var r468_mag = Math.hypot(r466_y2 - r466_y1, r466_x2 - r466_x1);
                        var r468_p = 1 - r466_size / r468_mag;
                        var r468_x3 = r1_mix(r466_x1, r466_x2, r468_p);
                        var r468_y3 = r1_mix(r466_y1, r466_y2, r468_p);
                        r468_currentGlyph.include(r411_Head.shape(r466_x2, r466_y2, r468_x3, r468_y3, r466_size));
                        r468_currentGlyph.include(r312_intersection(r411_Bar.shape(r466_x1, r466_y1, r466_x2, r466_y2, r468_halfSw, 0, 0), r411_Head.outerMaskWithOffset(r312_TINY, r466_x2, r466_y2, r468_x3, r468_y3, r466_size)));
                        return void 0;
                    });
                };
                r411_exports.dblTailShape = r411_dblTailShape = function (r472_x1, r472_y1, r472_x2, r472_y2, r472_size, r472__halfSw) {
                    var _r472_t0, _r472_t1;
                    return new r312_xn$Capture$2Lrc8.GlyphProc(function (r474_currentGlyph) {
                        var _r474_t0, _r474_t1;
                        var r474_halfSw = r1_fallback(r472__halfSw, r411_halfArrowSw);
                        var r474_mag = Math.hypot(r472_y2 - r472_y1, r472_x2 - r472_x1);
                        var r474_p = 1 - r472_size / r474_mag;
                        var r474_p2 = 1 - (r472_size + r411_doubleHeadGap) / r474_mag;
                        var r474_x3 = r1_mix(r472_x1, r472_x2, r474_p);
                        var r474_y3 = r1_mix(r472_y1, r472_y2, r474_p);
                        var r474_x4 = r1_mix(r472_x1, r472_x2, r474_p2);
                        var r474_y4 = r1_mix(r472_y1, r472_y2, r474_p2);
                        r474_currentGlyph.include(r411_Head.shape(r472_x2, r472_y2, r474_x3, r474_y3, r472_size));
                        r474_currentGlyph.include(r411_Head.shape(r472_x2, r472_y2, r474_x4, r474_y4, r472_size));
                        r474_currentGlyph.include(r312_intersection(r411_Bar.shape(r472_x1, r472_y1, r472_x2, r472_y2, r474_halfSw, 0, 0), r411_Head.outerMaskWithOffset(r312_TINY, r472_x2, r472_y2, r474_x3, r474_y3, r472_size)));
                        return void 0;
                    });
                };
                r411_exports.multibarShapeT = r411_multibarShapeT = function (r479_barFunc) {
                    var _r479_t0, _r479_t1;
                    return function (r480_x1, r480_y1, r480_x2, r480_y2, r480_size, r480__halfSw) {
                        var _r480_t0, _r480_t1;
                        return new r312_xn$Capture$2Lrc8.GlyphProc(function (r482_currentGlyph) {
                            var _r482_t0, _r482_t1;
                            r482_currentGlyph.include(r411_Head.shape(r480_x1, r480_y1, r480_x2, r480_y2, r480_size));
                            r482_currentGlyph.include(r312_difference(r479_barFunc(r480_x1, r480_y1, r480_x2, r480_y2), r411_Head.outerMaskWithOffset(r312_TINY, r480_x1, r480_y1, r480_x2, r480_y2, r480_size)));
                            return void 0;
                        });
                    };
                };
                r411_exports.barTailShapeT = r411_barTailShapeT = function (r486_barFunc) {
                    var _r486_t0, _r486_t1;
                    return function (r487_x1, r487_y1, r487_x2, r487_y2, r487_size, r487__halfSw) {
                        var _r487_t0, _r487_t1;
                        return new r312_xn$Capture$2Lrc8.GlyphProc(function (r489_currentGlyph) {
                            var _r489_t0, _r489_t1;
                            var r489_halfSw = r1_fallback(r487__halfSw, r411_halfArrowSw);
                            var r489_dx = Math.abs(r487_x1 - r487_x2);
                            var r489_dy = Math.abs(r487_y1 - r487_y2);
                            var r489_barShrink = r487_size * Math.min(r489_dx / r489_dy, r489_dy / r489_dx);
                            var r489_p = 1 - r489_barShrink / Math.hypot(r489_dx, r489_dy);
                            var r489_x3 = r1_mix(r487_x1, r487_x2, r489_p);
                            var r489_y3 = r1_mix(r487_y1, r487_y2, r489_p);
                            r489_currentGlyph.include(r411_Head.barShape(r487_x1, r487_y1, r489_x3, r489_y3, r487_size));
                            r489_currentGlyph.include(r486_barFunc(r487_x1, r487_y1, r489_x3, r489_y3, r489_halfSw, 0, 0));
                            return void 0;
                        });
                    };
                };
                r411_exports.toBarShapeT = r411_toBarShapeT = function (r493_arrowFunc) {
                    var _r493_t0, _r493_t1;
                    return function (r494_x1, r494_y1, r494_x2, r494_y2, r494_size, r494__halfSw) {
                        var _r494_t0, _r494_t1;
                        return new r312_xn$Capture$2Lrc8.GlyphProc(function (r496_currentGlyph) {
                            var _r496_t0, _r496_t1;
                            var r496_halfSw = r1_fallback(r494__halfSw, r411_halfArrowSw);
                            var r496_mag = Math.hypot(r494_y2 - r494_y1, r494_x2 - r494_x1);
                            var r496_p = 1 - r411_fine / r496_mag;
                            var r496_p2 = 1 + 0.5 * r411_fine / r496_mag;
                            r496_currentGlyph.include(r493_arrowFunc(r494_x1, r494_y1, r1_mix(r494_x1, r494_x2, r496_p), r1_mix(r494_y1, r494_y2, r496_p), r494_size, r494__halfSw));
                            r496_currentGlyph.include(r411_Head.barShape(r494_x1, r494_y1, r1_mix(r494_x1, r494_x2, r496_p2), r1_mix(r494_y1, r494_y2, r496_p2), r494_size, r411_fine));
                            return void 0;
                        });
                    };
                };
                r411_exports.toDiamondShapeT = r411_toDiamondShapeT = function (r500_arrowFunc) {
                    var _r500_t0, _r500_t1;
                    return function (r501_x1, r501_y1, r501_x2, r501_y2, r501_size, r501__halfSw) {
                        var _r501_t0, _r501_t1;
                        return new r312_xn$Capture$2Lrc8.GlyphProc(function (r503_currentGlyph) {
                            var _r503_t0, _r503_t1;
                            var r503_halfSw = r1_fallback(r501__halfSw, r411_halfArrowSw);
                            var r503_mag = Math.hypot(r501_y2 - r501_y1, r501_x2 - r501_x1);
                            var r503_diaSize = Math.min(1.5, r411_advanceScale) * 0.75 * r501_size;
                            var r503_p = 1 - (r503_diaSize - 2 * r312_o) / r503_mag;
                            r503_currentGlyph.include(r500_arrowFunc(r501_x1, r501_y1, r1_mix(r501_x1, r501_x2, r503_p), r1_mix(r501_y1, r501_y2, r503_p), r501_size, r501__halfSw));
                            r503_currentGlyph.include(r411_Head.diamondShape(r501_x1, r501_y1, r501_x2, r501_y2, 0.5 * r503_diaSize));
                            return void 0;
                        });
                    };
                };
                return r411_exports;
            })();
        };
        var r312_MkArrowT = function (r506_dims) {
            var _r506_t0, _r506_t1, _r506_t2, _r506_tag3;
            return (function () {
                var r509_singleAnchorAt, r509_single, r509_doubleAnchorAt, r509_double;
                var r509_exports = {};
                var _r509_t0 = r506_dims;
                var r509_advance = _r509_t0.advance;
                var r509_advanceScale = _r509_t0.advanceScale;
                var r509_arrowHeadSize = _r509_t0.arrowHeadSize;
                r509_exports.singleAnchorAt = r509_singleAnchorAt = function (r517_p) {
                    var _r517_t0, _r517_t1;
                    return function (r518_shape, r518_id, r518_unicode, r518_x1, r518_y1, r518_x2, r518_y2, r518_width, r518_headSize) {
                        var _r518_t0, _r518_t1;
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r518_id, r518_unicode, new r312_xn$Capture$2Lrc8.GlyphProc(function (r521_currentGlyph) {
                            var _r521_t0, _r521_t1;
                            r521_currentGlyph.setWidth(r1_fallback(r518_width, r509_advance));
                            r521_currentGlyph.setBaseAnchor("slash", r1_mix(r518_x1, r518_x2, r517_p), r1_mix(r518_y1, r518_y2, r517_p));
                            r521_currentGlyph.include(r518_shape(r518_x1, r518_y1, r518_x2, r518_y2, r1_fallback(r518_headSize, r509_arrowHeadSize)));
                            return void 0;
                        }));
                    };
                };
                r509_exports.single = r509_single = r509_singleAnchorAt(2 / 5);
                r509_exports.doubleAnchorAt = r509_doubleAnchorAt = function (r527_pAnchor, r527__pMid) {
                    var _r527_t0, _r527_t1;
                    return function (r528_shape1, r528_shape2, r528_id, r528_unicode, r528_x1, r528_y1, r528_x2, r528_y2) {
                        var _r528_t0, _r528_t1;
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r528_id, r528_unicode, new r312_xn$Capture$2Lrc8.GlyphProc(function (r531_currentGlyph) {
                            var _r531_t0, _r531_t1;
                            r531_currentGlyph.setWidth(r509_advance);
                            var r531_pMid = r1_fallback(r527__pMid, r527_pAnchor);
                            var r531_xm = r1_mix(r528_x1, r528_x2, r531_pMid);
                            var r531_ym = r1_mix(r528_y1, r528_y2, r531_pMid);
                            r531_currentGlyph.setBaseAnchor("slash", r1_mix(r528_x1, r528_x2, r527_pAnchor), r1_mix(r528_y1, r528_y2, r527_pAnchor));
                            r531_currentGlyph.include(r528_shape1(r531_xm, r531_ym, r528_x1, r528_y1, r509_arrowHeadSize));
                            r531_currentGlyph.include(r528_shape2(r531_xm, r531_ym, r528_x2, r528_y2, r509_arrowHeadSize));
                            return void 0;
                        }));
                    };
                };
                r509_exports.double = r509_double = r509_doubleAnchorAt(1 / 2);
                return r509_exports;
            })();
        };
        return (function () {
            var r538_dims = r312_ArrowDims();
            var r538_arrow = r312_ArrowT(r538_dims);
            var r538_ArrowShape = r538_arrow.shape;
            var r538_ArrowHead = r538_arrow.Head.shape;
            var r538_ArrowBar = r538_arrow.Bar.shape;
            var r538_TrigArrowShape = r538_arrow.trigShape;
            var r538_TriangleArrowHead = r538_arrow.Head.trigShape;
            r312_xn$ExportCapture$2Lrc4b(function () {
                var _r540_t0, _r540_t1;
                return {
                    "ArrowShape": r538_ArrowShape,
                    "ArrowHead": r538_ArrowHead,
                    "ArrowBar": r538_ArrowBar,
                    "TrigArrowShape": r538_TrigArrowShape,
                    "TriangleArrowHead": r538_TriangleArrowHead
                };
            });
            return r312_xn$ExportCapture$2Lrc4b(function () {
                var _r542_t0, _r542_t1;
                return {
                    "ArrowDims": r312_ArrowDims,
                    "ArrowBarT": r312_ArrowBarT,
                    "ArrowHeadT": r312_ArrowHeadT,
                    "ArrowT": r312_ArrowT,
                    "MkArrowT": r312_MkArrowT
                };
            });
        })();
    });
    return void 0;
});


