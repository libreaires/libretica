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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Arrow-Hook-Loop", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t5, _r312_t6, _r312_t7, _r312_tag8;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_Upward = _r312_t1.Upward;
        var r312_Downward = _r312_t1.Downward;
        var r312_Rightward = _r312_t1.Rightward;
        var r312_O = _r312_t1.O;
        var r312_WideWidth1 = _r312_t1.WideWidth1;
        var r312_TINY = _r312_t1.TINY;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_archv = _r312_t2.archv;
        var r312_arcvh = _r312_t2.arcvh;
        var r312_dispiro = _r312_t2.dispiro;
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
                    var r318_PointingTo = _r318_t0.PointingTo;
                    var _r318_t1 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var _r318_t2 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Arrow-Shared"].resolve();
                    var r318_ArrowDims = _r318_t2.ArrowDims;
                    var r318_ArrowHeadT = _r318_t2.ArrowHeadT;
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
                    var r318_arrowDiagRSB = _r318_t3.arrowDiagRSB;
                    var r318_arrowDiagSB = _r318_t3.arrowDiagSB;
                    var r318_arrowDiagBot = _r318_t3.arrowDiagBot;
                    var r318_arrowDiagTop = _r318_t3.arrowDiagTop;
                    var r318_halfArrowSw = _r318_t3.halfArrowSw;
                    var r318_o = r312_O * 2;
                    var r318_HookArrowBar = function (r324_x1, r324_y1, r324_x2, r324_y2, r324_halfSw, r324_s, r324_w) {
                        var _r324_t0, _r324_t1;
                        return r318_PointingTo(r324_x1, r324_y1, r324_x2, r324_y2, function (r325_mag) {
                            var _r325_t0, _r325_t1;
                            var r325_p = (r325_mag - r318_o - r324_halfSw * r1_fallback(r324_w, 1.1)) / r325_mag;
                            return r312_dispiro(r312_widths.center(r324_halfSw * 2), r312_g4(r325_mag - Math.abs(r324_s) / 2 - r312_TINY, r324_s), r312_g4(r325_mag - Math.abs(r324_s) / 2, r324_s), r312_archv(), r312_g4(r325_mag - r312_O, r324_s / 2), r312_arcvh(), r312_flat(r325_mag - Math.abs(r324_s) / 2, 0), r312_curl(r1_mix(r325_mag, 0, r325_p), 0));
                        });
                    };
                    var r318_LoopArrowBar = function (r326_x1, r326_y1, r326_x2, r326_y2, r326_halfSw, r326_s, r326_w) {
                        var _r326_t0, _r326_t1;
                        return r318_PointingTo(r326_x1, r326_y1, r326_x2, r326_y2, function (r327_mag) {
                            var _r327_t0, _r327_t1;
                            var r327_p = (r327_mag - r318_o - r326_halfSw * r1_fallback(r326_w, 1.1)) / r327_mag;
                            return r312_dispiro(r312_widths.center(r326_halfSw * 2), r312_flat(r327_mag - Math.abs(r326_s), -r326_s, r312_heading(r326_s > 0 ? r312_Upward : r312_Downward)), r312_curl(r327_mag - Math.abs(r326_s), r326_s / 2), r312_g4(r327_mag - Math.abs(r326_s) / 2, r326_s, r312_heading(r312_Rightward)), r312_archv(), r312_g4(r327_mag - r312_O, r326_s / 2), r312_arcvh(), r312_flat(r327_mag - Math.abs(r326_s) / 2, 0), r312_curl(r1_mix(r327_mag, 0, r327_p), 0));
                        });
                    };
                    var r318_ArrowHead = r318_ArrowHeadT(r318_dims);
                    var r318_HookArrowShape = function (r328_mul) {
                        var _r328_t0, _r328_t1;
                        return function (r329_x1, r329_y1, r329_x2, r329_y2, r329_size, r329__halfSw) {
                            var _r329_t0, _r329_t1;
                            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
                                var _r331_t0, _r331_t1;
                                var r331_halfSw = r1_fallback(r329__halfSw, r318_halfArrowSw);
                                r331_currentGlyph.include(r318_ArrowHead.shape(r329_x1, r329_y1, r329_x2, r329_y2, r329_size));
                                r331_currentGlyph.include(r318_HookArrowBar(r329_x1, r329_y1, r329_x2, r329_y2, r331_halfSw, r329_size * r328_mul));
                                return void 0;
                            });
                        };
                    };
                    var r318_LoopArrowShape = function (r334_mul) {
                        var _r334_t0, _r334_t1;
                        return function (r335_x1, r335_y1, r335_x2, r335_y2, r335_size, r335__halfSw) {
                            var _r335_t0, _r335_t1;
                            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r337_currentGlyph) {
                                var _r337_t0, _r337_t1;
                                var r337_halfSw = r1_fallback(r335__halfSw, r318_halfArrowSw);
                                r337_currentGlyph.include(r318_ArrowHead.shape(r335_x1, r335_y1, r335_x2, r335_y2, r335_size));
                                r337_currentGlyph.include(r318_LoopArrowBar(r335_x1, r335_y1, r335_x2, r335_y2, r337_halfSw, r335_size * r334_mul));
                                return void 0;
                            });
                        };
                    };
                    r318_MkArrow.single(r318_HookArrowShape(1), r318_MangleName("hookArrowLeft"), r318_MangleUnicode(8617), r318_arrowRSB, r312_SymbolMid, r318_arrowSB, r312_SymbolMid);
                    r318_MkArrow.single(r318_HookArrowShape(-1), r318_MangleName("hookArrowRight"), r318_MangleUnicode(8618), r318_arrowSB, r312_SymbolMid, r318_arrowRSB, r312_SymbolMid);
                    r318_MkArrow.single(r318_HookArrowShape(-1), r318_MangleName("hookArrowUpLeft"), r318_MangleUnicode(10531), r318_arrowDiagRSB, r318_arrowDiagBot, r318_arrowDiagSB, r318_arrowDiagTop);
                    r318_MkArrow.single(r318_HookArrowShape(1), r318_MangleName("hookArrowUpRight"), r318_MangleUnicode(10532), r318_arrowDiagSB, r318_arrowDiagBot, r318_arrowDiagRSB, r318_arrowDiagTop);
                    r318_MkArrow.single(r318_HookArrowShape(-1), r318_MangleName("hookArrowDownRight"), r318_MangleUnicode(10533), r318_arrowDiagSB, r318_arrowDiagTop, r318_arrowDiagRSB, r318_arrowDiagBot);
                    r318_MkArrow.single(r318_HookArrowShape(1), r318_MangleName("hookArrowDownLeft"), r318_MangleUnicode(10534), r318_arrowDiagRSB, r318_arrowDiagTop, r318_arrowDiagSB, r318_arrowDiagBot);
                    r318_MkArrow.single(r318_HookArrowShape(1), r318_MangleName("lowerHookArrowRight"), r318_MangleUnicode(129202), r318_arrowSB, r312_SymbolMid, r318_arrowRSB, r312_SymbolMid);
                    r318_MkArrow.single(r318_LoopArrowShape(1), r318_MangleName("loopArrowLeft"), r318_MangleUnicode(8619), r318_arrowRSB, r312_SymbolMid, r318_arrowSB, r312_SymbolMid);
                    return r318_MkArrow.single(r318_LoopArrowShape(-1), r318_MangleName("loopArrowRight"), r318_MangleUnicode(8620), r318_arrowSB, r312_SymbolMid, r318_arrowRSB, r312_SymbolMid);
                })();
                _r315_t5 = _r315_t2 = _r315_t2 + 1;
                _r315_t4 = _r315_t2 < _r315_t1;
            }
            return _r315_t5;
        })();
    });
    return void 0;
});


