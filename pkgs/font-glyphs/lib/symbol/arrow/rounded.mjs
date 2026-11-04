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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Arrow-Rounded", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t5, _r312_t6, _r312_t7, _r312_tag8;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_WideWidth1 = _r312_t1.WideWidth1;
        var r312_GeometryStroke = _r312_t1.GeometryStroke;
        var r312_UnicodeWeightGrade = _r312_t1.UnicodeWeightGrade;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_widths = _r312_t2.widths;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
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
                    var _r318_t4, _r318_tag5;
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
                    var r318_Ellipse = _r318_t0.Ellipse;
                    var r318_PointingTo = _r318_t0.PointingTo;
                    var _r318_t1 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var _r318_t2 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Arrow-Shared"].resolve();
                    var r318_ArrowDims = _r318_t2.ArrowDims;
                    var r318_MkArrowT = _r318_t2.MkArrowT;
                    var r318_dims = r318_ArrowDims(r315_MosaicWidth);
                    var r318_MkArrow = r318_MkArrowT(r318_dims);
                    var _r318_t3 = r318_dims;
                    var r318_arrowHeight = _r318_t3.arrowHeight;
                    var r318_arrowWidth = _r318_t3.arrowWidth;
                    var r318_arrowTop = _r318_t3.arrowTop;
                    var r318_arrowBot = _r318_t3.arrowBot;
                    var r318_arrowMidX = _r318_t3.arrowMidX;
                    var r318_arrowSB = _r318_t3.arrowSB;
                    var r318_arrowRSB = _r318_t3.arrowRSB;
                    var r318_RoundArrow = (function () {
                        var r326_Shape;
                        var r326_exports = {};
                        var r326_Blob = function (r333_x, r333_y, r333_sw) {
                            var _r333_t0, _r333_t1;
                            return r318_Ellipse.Outline.RoundStrokeTerminalAt(r333_x, r333_y, r333_sw / 2);
                        };
                        var r326_Bar = function (r334_x1, r334_y1, r334_x2, r334_y2, r334_sw) {
                            var _r334_t0, _r334_t1;
                            return r318_PointingTo(r334_x1, r334_y1, r334_x2, r334_y2, function (r335_mag) {
                                var _r335_t0, _r335_t1;
                                return r312_union(r326_Blob(0, 0, r334_sw), r326_Blob(r335_mag, 0, r334_sw), r312_dispiro(r312_widths.center(r334_sw), r312_flat(0, 0), r312_curl(r335_mag, 0)));
                            });
                        };
                        var r326_Head = function (r336_x1, r336_y1, r336_x2, r336_y2, r336_sw, r336_headLen, r336_headWidth) {
                            var _r336_t0, _r336_t1;
                            return r318_PointingTo(r336_x1, r336_y1, r336_x2, r336_y2, function (r337_mag) {
                                var _r337_t0, _r337_t1;
                                return r312_union(r326_Blob(r336_headLen, r336_headWidth, r336_sw), r326_Blob(r336_headLen, -r336_headWidth, r336_sw), r312_dispiro(r312_widths.center(r336_sw), r312_flat(0, 0), r312_curl(r336_headLen, r336_headWidth)), r312_dispiro(r312_widths.center(r336_sw), r312_flat(0, 0), r312_curl(r336_headLen, -r336_headWidth)));
                            });
                        };
                        r326_exports.Shape = r326_Shape = function (r339_sw) {
                            var _r339_t0, _r339_t1;
                            return function (r340_x1, r340_y1, r340_x2, r340_y2) {
                                var _r340_t0, _r340_t1;
                                var r340_headLen = r318_MosaicUnitWidth * Math.sqrt(r315_MosaicWidthScalar) * 0.5;
                                var r340_headWidth = r340_headLen * 1;
                                var r340_mag = Math.hypot(r340_x2 - r340_x1, r340_y2 - r340_y1);
                                var r340_p = 1 - r339_sw / r340_mag;
                                var r340_pHalf = r1_mix(1, r340_p, 0.5);
                                var r340_x1a = r1_mix(r1_mix(r340_x1, r340_x2, 0.5), r340_x1, r340_p);
                                var r340_x2a = r1_mix(r1_mix(r340_x1, r340_x2, 0.5), r340_x2, r340_p);
                                var r340_y1a = r1_mix(r1_mix(r340_y1, r340_y2, 0.5), r340_y1, r340_p);
                                var r340_y2a = r1_mix(r1_mix(r340_y1, r340_y2, 0.5), r340_y2, r340_p);
                                return r312_union(r326_Bar(r340_x1a, r340_y1a, r340_x2a, r340_y2a, r339_sw), r326_Head(r340_x1a, r340_y1a, r340_x2a, r340_y2a, r339_sw, r340_pHalf * r340_headLen, r340_pHalf * r340_headWidth));
                            };
                        };
                        return r326_exports;
                    })();
                    var r318_sw = r312_UnicodeWeightGrade(900, r315_MosaicWidthScalar, r312_GeometryStroke);
                    return r318_MkArrow.single(r318_RoundArrow.Shape(r318_sw), r318_MangleName("heavyRoundArrowRight"), r318_MangleUnicode(10140), r318_arrowSB, r312_SymbolMid, r318_arrowRSB, r312_SymbolMid);
                })();
                _r315_t5 = _r315_t2 = _r315_t2 + 1;
                _r315_t4 = _r315_t2 < _r315_t1;
            }
            return _r315_t5;
        })();
    });
    return void 0;
});


