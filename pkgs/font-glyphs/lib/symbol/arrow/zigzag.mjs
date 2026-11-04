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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Arrow-Zigzag", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t5, _r312_t6, _r312_t7, _r312_tag8;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_O = _r312_t1.O;
        var r312_WideWidth1 = _r312_t1.WideWidth1;
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
        var r312_difference = _r312_t4.difference;
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
                    var _r318_t4, _r318_tag5, _r318_t6, _r318_tag7;
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
                    var r318_MaskAboveLine = _r318_t0.MaskAboveLine;
                    var r318_MaskBelowLine = _r318_t0.MaskBelowLine;
                    var r318_MaskLeftLine = _r318_t0.MaskLeftLine;
                    var r318_MaskRightLine = _r318_t0.MaskRightLine;
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
                    var r318_arrowHeadSize = _r318_t3.arrowHeadSize;
                    var r318_o = r312_O * 2;
                    (function () {
                        var r325_x2 = r1_mix(r318_arrowMidX, r318_arrowSB, 0.875 / Math.sqrt(r315_MosaicWidthScalar));
                        var r325_x3 = r1_mix(r318_arrowMidX, r318_arrowRSB, 0.875 / Math.sqrt(r315_MosaicWidthScalar));
                        var r325_x1 = r1_mix(r325_x2, r325_x3, 1 / 3);
                        var r325_x4 = r1_mix(r325_x2, r325_x3, 2 / 3);
                        var r325_y1 = r318_arrowTop;
                        var r325_y4 = r318_arrowBot;
                        var r325_y2 = r1_mix(r325_y1, r325_y4, 0.625);
                        var r325_y3 = r1_mix(r325_y1, r325_y4, 0.375);
                        var r325_magLastSeg = Math.hypot(r325_x3 - r325_x4, r325_y3 - r325_y4);
                        var r325_pLastSeg = (r325_magLastSeg - r318_o - 0.55 * r318_arrowSw) / r325_magLastSeg;
                        var r325_ZigZagArrowBar = function () {
                            var _r326_t0, _r326_t1;
                            return r312_union(r312_difference(r312_dispiro(r312_flat(r1_mix(r325_x3, r325_x4, r325_pLastSeg), r1_mix(r325_y3, r325_y4, r325_pLastSeg), r312_widths.center(r318_arrowSw)), r312_curl(r325_x3, r325_y3, r312_widths.lhs(r318_arrowSw))), r318_MaskAboveLine(r325_x2, r325_y2, r325_x3, r325_y3)), r312_difference(r312_dispiro(r312_flat(r325_x3, r325_y3, r312_widths.lhs(r318_arrowSw)), r312_curl(r325_x2, r325_y2, r312_widths.rhs(r318_arrowSw))), r318_MaskRightLine(r325_x3, r325_y3, r325_x4, r325_y4), r318_MaskLeftLine(r325_x2, r325_y2, r325_x1, r325_y1)), r312_difference(r312_dispiro(r312_flat(r325_x2, r325_y2, r312_widths.rhs(r318_arrowSw)), r312_curl(r325_x1, r325_y1, r312_widths.center(r318_arrowSw))), r318_MaskBelowLine(r325_x2, r325_y2, r325_x3, r325_y3)));
                        };
                        var r325_x3ArrowHeadMock = r325_x3 - (r325_x3 - r325_x4) / r325_magLastSeg * r312_HSwToV(r318_arrowSw);
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("zigZagArrow"), r318_MangleUnicode(8623), new r312_xn$Capture$2Lrc8.GlyphProc(function (r329_currentGlyph) {
                            var _r329_t0, _r329_t1;
                            r329_currentGlyph.setWidth(r315_MosaicWidth);
                            r329_currentGlyph.include(r312_union(r318_ArrowHead.shape(r325_x3ArrowHeadMock, r325_y3, r325_x4, r325_y4, r318_arrowHeadSize), r325_ZigZagArrowBar()));
                            return void 0;
                        }));
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("zigZagTrigArrow"), r318_MangleUnicode(11085), new r312_xn$Capture$2Lrc8.GlyphProc(function (r334_currentGlyph) {
                            var _r334_t0, _r334_t1;
                            r334_currentGlyph.setWidth(r315_MosaicWidth);
                            r334_currentGlyph.include(r312_union(r318_ArrowHead.trigShape(r325_x3ArrowHeadMock, r325_y3, r325_x4, r325_y4, r318_arrowHeadSize * 0.75), r325_ZigZagArrowBar()));
                            return void 0;
                        }));
                    })();
                    return (function () {
                        var r338_x1 = r1_mix(r318_arrowMidX, r318_arrowRSB, 0.875 / Math.sqrt(r315_MosaicWidthScalar));
                        var r338_x2 = r1_mix(r318_arrowMidX, r318_arrowSB, 0.875 / Math.sqrt(r315_MosaicWidthScalar));
                        var r338_x3 = r338_x1;
                        var r338_y1 = r318_arrowTop;
                        var r338_y3 = r318_arrowBot;
                        var r338_y2 = r1_mix(r338_y1, r338_y3, 0.5);
                        var r338_magLastSeg = Math.hypot(r338_x3 - r338_x2, r338_y3 - r338_y2);
                        var r338_pLastSeg = (r338_magLastSeg - r318_o - 0.55 * r318_arrowSw) / r338_magLastSeg;
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("lightning"), r318_MangleUnicode(9735), new r312_xn$Capture$2Lrc8.GlyphProc(function (r341_currentGlyph) {
                            var _r341_t0, _r341_t1;
                            r341_currentGlyph.setWidth(r315_MosaicWidth);
                            r341_currentGlyph.include(r312_dispiro(r312_flat(r338_x1, r338_y1, r312_widths.center(r318_arrowSw)), r312_curl(r1_mix(r338_x2, r338_x1, 0.2), r1_mix(r338_y2, r338_y1, 0.2)), r312_flat(r1_mix(r338_x2, r338_x3, 0.2), r1_mix(r338_y2, r338_y3, 0.2)), r312_curl(r1_mix(r338_x2, r338_x3, r338_pLastSeg), r1_mix(r338_y2, r338_y3, r338_pLastSeg))));
                            r341_currentGlyph.include(r318_ArrowHead.shape(r338_x2, r338_y2, r338_x3, r338_y3, r318_arrowHeadSize));
                            return void 0;
                        }));
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


