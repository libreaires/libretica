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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Arrow-Angled", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t5, _r312_t6, _r312_t7, _r312_tag8;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_Rightward = _r312_t1.Rightward;
        var r312_Leftward = _r312_t1.Leftward;
        var r312_WideWidth1 = _r312_t1.WideWidth1;
        var r312_StrokeWidthBlend = _r312_t1.StrokeWidthBlend;
        var r312_TINY = _r312_t1.TINY;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_widths = _r312_t2.widths;
        var r312_xn$disablecontrast$3qIs = _r312_t2["disable-contrast"];
        var r312_heading = _r312_t2.heading;
        var r312_archv = _r312_t2.archv;
        var r312_arcvh = _r312_t2.arcvh;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var r312_intersection = _r312_t4.intersection;
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
                    var r318_MaskBelow = _r318_t0.MaskBelow;
                    var r318_MaskLeftLine = _r318_t0.MaskLeftLine;
                    var r318_MaskRightLine = _r318_t0.MaskRightLine;
                    var _r318_t1 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var _r318_t2 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Arrow-Shared"].resolve();
                    var r318_ArrowDims = _r318_t2.ArrowDims;
                    var r318_ArrowT = _r318_t2.ArrowT;
                    var r318_MkArrowT = _r318_t2.MkArrowT;
                    var r318_dims = r318_ArrowDims(r315_MosaicWidth);
                    var r318_Arrow = r318_ArrowT(r318_dims);
                    var _r318_t3 = r318_dims;
                    var r318_arrowWidth = _r318_t3.arrowWidth;
                    var r318_arrowTop = _r318_t3.arrowTop;
                    var r318_arrowBot = _r318_t3.arrowBot;
                    var r318_arrowMidX = _r318_t3.arrowMidX;
                    var r318_arrowSB = _r318_t3.arrowSB;
                    var r318_arrowRSB = _r318_t3.arrowRSB;
                    var r318_arrowSw = _r318_t3.arrowSw;
                    var r318_halfArrowSw = _r318_t3.halfArrowSw;
                    var r318_arrowHeadSize = _r318_t3.arrowHeadSize;
                    var r318_compactHeadSize = _r318_t3.compactHeadSize;
                    var r318_bendL = r1_mix(r318_arrowMidX, r318_arrowSB, Math.max(r318_compactHeadSize / (r318_arrowMidX - r318_arrowSB), Math.pow(0.6, 2 / r315_MosaicWidthScalar)));
                    var r318_bendR = r1_mix(r318_arrowMidX, r318_arrowRSB, Math.max(r318_compactHeadSize / (r318_arrowMidX - r318_arrowSB), Math.pow(0.6, 2 / r315_MosaicWidthScalar)));
                    var r318_bendT = r312_SymbolMid + r318_compactHeadSize * 2;
                    var r318_bendB = r312_SymbolMid - r318_compactHeadSize * 2;
                    var r318_MkAngleArrow = function (r326_shape, r326_bar, r326_id, r326_unicode, r326_x1, r326_y1, r326_x2, r326_y2, r326_x3, r326_y3, r326_size) {
                        var _r326_t0, _r326_t1;
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r326_id, r326_unicode, new r312_xn$Capture$2Lrc8.GlyphProc(function (r329_currentGlyph) {
                            var _r329_t0, _r329_t1;
                            r329_currentGlyph.setWidth(r315_MosaicWidth);
                            r329_currentGlyph.include(r312_union(r326_shape(r326_x2, r326_y2, r326_x3, r326_y3, r1_fallback(r326_size, r318_arrowHeadSize)), r326_bar(r326_x1, r326_y1, r326_x2, r326_y2)));
                            return void 0;
                        }));
                    };
                    var r318_VBS = function (r332_x1, r332_y1, r332_x2, r332_y2) {
                        var _r332_t0, _r332_t1;
                        return r318_Arrow.Bar.shape(r332_x1, r332_y1, r332_x2, r332_y2 - r318_halfArrowSw, r318_halfArrowSw, 0, 0);
                    };
                    var r318_VBE = function (r333_x1, r333_y1, r333_x2, r333_y2) {
                        var _r333_t0, _r333_t1;
                        return r318_Arrow.Bar.shape(r333_x1, r333_y1, r333_x2, r333_y2 + r318_halfArrowSw, r318_halfArrowSw, 0, 0);
                    };
                    var r318_HBS = function (r334_x1, r334_y1, r334_x2, r334_y2) {
                        var _r334_t0, _r334_t1;
                        return r318_Arrow.Bar.shape(r334_x1, r334_y1, r334_x2 - r318_halfArrowSw, r334_y2, r318_halfArrowSw, 0, 0);
                    };
                    var r318_HBE = function (r335_x1, r335_y1, r335_x2, r335_y2) {
                        var _r335_t0, _r335_t1;
                        return r318_Arrow.Bar.shape(r335_x1, r335_y1, r335_x2 + r318_halfArrowSw, r335_y2, r318_halfArrowSw, 0, 0);
                    };
                    r318_MkAngleArrow(r318_Arrow.shape, r318_VBE, r318_MangleName("arrowUpTipBendLeft"), r318_MangleUnicode(8624), r318_bendR, r318_arrowBot, r318_bendR, r318_arrowTop - r318_compactHeadSize, r318_bendL, r318_arrowTop - r318_compactHeadSize, r318_compactHeadSize);
                    r318_MkAngleArrow(r318_Arrow.shape, r318_VBE, r318_MangleName("arrowUpTipBendRight"), r318_MangleUnicode(8625), r318_bendL, r318_arrowBot, r318_bendL, r318_arrowTop - r318_compactHeadSize, r318_bendR, r318_arrowTop - r318_compactHeadSize, r318_compactHeadSize);
                    r318_MkAngleArrow(r318_Arrow.shape, r318_VBS, r318_MangleName("arrowDownTipBendLeft"), r318_MangleUnicode(8626), r318_bendR, r318_arrowTop, r318_bendR, r318_arrowBot + r318_compactHeadSize, r318_bendL, r318_arrowBot + r318_compactHeadSize, r318_compactHeadSize);
                    r318_MkAngleArrow(r318_Arrow.shape, r318_VBS, r318_MangleName("arrowDownTipBendRight"), r318_MangleUnicode(8627), r318_bendL, r318_arrowTop, r318_bendL, r318_arrowBot + r318_compactHeadSize, r318_bendR, r318_arrowBot + r318_compactHeadSize, r318_compactHeadSize);
                    r318_MkAngleArrow(r318_Arrow.shape, r318_HBE, r318_MangleName("arrowRightTipBendDown"), r318_MangleUnicode(11022), r318_arrowSB, r312_SymbolMid, r318_arrowRSB - r318_compactHeadSize, r312_SymbolMid, r318_arrowRSB - r318_compactHeadSize, r318_bendB, r318_compactHeadSize);
                    r318_MkAngleArrow(r318_Arrow.shape, r318_HBE, r318_MangleName("arrowRightTipBendUp"), r318_MangleUnicode(11023), r318_arrowSB, r312_SymbolMid, r318_arrowRSB - r318_compactHeadSize, r312_SymbolMid, r318_arrowRSB - r318_compactHeadSize, r318_bendT, r318_compactHeadSize);
                    r318_MkAngleArrow(r318_Arrow.shape, r318_HBS, r318_MangleName("arrowLeftTipBendDown"), r318_MangleUnicode(11024), r318_arrowRSB, r312_SymbolMid, r318_arrowSB + r318_compactHeadSize, r312_SymbolMid, r318_arrowSB + r318_compactHeadSize, r318_bendB, r318_compactHeadSize);
                    r318_MkAngleArrow(r318_Arrow.shape, r318_HBS, r318_MangleName("arrowLeftTipBendUp"), r318_MangleUnicode(11025), r318_arrowRSB, r312_SymbolMid, r318_arrowSB + r318_compactHeadSize, r312_SymbolMid, r318_arrowSB + r318_compactHeadSize, r318_bendT, r318_compactHeadSize);
                    r318_MkAngleArrow(r318_Arrow.shape, r318_HBE, r318_MangleName("arrowRightCornerDown"), r318_MangleUnicode(8628), r318_arrowSB, r318_arrowTop, r318_arrowRSB - r318_arrowHeadSize, r318_arrowTop, r318_arrowRSB - r318_arrowHeadSize, r318_arrowBot, r318_arrowHeadSize);
                    r318_MkAngleArrow(r318_Arrow.shape, r318_VBS, r318_MangleName("arrowDownCornerLeft"), r318_MangleUnicode(8629), r318_arrowRSB, r318_arrowTop, r318_arrowRSB, r318_arrowBot + r318_arrowHeadSize, r318_arrowSB, r318_arrowBot + r318_arrowHeadSize, r318_arrowHeadSize);
                    var r318_hcDist = Math.max(r318_halfArrowSw * 5, r318_arrowWidth / 2);
                    var r318_vcDist = r318_arrowHeadSize * 1.75;
                    var r318_yLower = r312_SymbolMid - r318_vcDist / 2;
                    var r318_yUpper = r312_SymbolMid + r318_vcDist / 2;
                    var r318_xLeft = r318_arrowMidX - r318_hcDist / 2;
                    var r318_xRight = r318_arrowMidX + r318_hcDist / 2;
                    var r318_arrowSB2 = r318_arrowSB + r318_halfArrowSw;
                    var r318_arrowRSB2 = r318_arrowRSB - r318_halfArrowSw;
                    r318_MkAngleArrow(r318_Arrow.trigShape, r318_VBS, r318_MangleName("trigArrowDownLongBendLeft"), r318_MangleUnicode(11168), r318_arrowRSB2, r318_yUpper, r318_arrowRSB2, r318_yLower, r318_arrowSB, r318_yLower);
                    r318_MkAngleArrow(r318_Arrow.trigShape, r318_VBS, r318_MangleName("trigArrowDownLongBendRight"), r318_MangleUnicode(11169), r318_arrowSB2, r318_yUpper, r318_arrowSB2, r318_yLower, r318_arrowRSB, r318_yLower);
                    r318_MkAngleArrow(r318_Arrow.trigShape, r318_VBE, r318_MangleName("trigArrowUpLongBendLeft"), r318_MangleUnicode(11170), r318_arrowRSB2, r318_yLower, r318_arrowRSB2, r318_yUpper, r318_arrowSB, r318_yUpper);
                    r318_MkAngleArrow(r318_Arrow.trigShape, r318_VBE, r318_MangleName("trigArrowUpLongBendRight"), r318_MangleUnicode(11171), r318_arrowSB2, r318_yLower, r318_arrowSB2, r318_yUpper, r318_arrowRSB, r318_yUpper);
                    r318_MkAngleArrow(r318_Arrow.trigShape, r318_HBS, r318_MangleName("trigArrowLeftLongBendUp"), r318_MangleUnicode(11172), r318_xRight, r318_arrowBot, r318_xLeft, r318_arrowBot, r318_xLeft, r318_arrowTop);
                    r318_MkAngleArrow(r318_Arrow.trigShape, r318_HBE, r318_MangleName("trigArrowRightLongBendUp"), r318_MangleUnicode(11173), r318_xLeft, r318_arrowBot, r318_xRight, r318_arrowBot, r318_xRight, r318_arrowTop);
                    r318_MkAngleArrow(r318_Arrow.trigShape, r318_HBS, r318_MangleName("trigArrowLeftLongBendDown"), r318_MangleUnicode(11174), r318_xRight, r318_arrowTop, r318_xLeft, r318_arrowTop, r318_xLeft, r318_arrowBot);
                    r318_MkAngleArrow(r318_Arrow.trigShape, r318_HBE, r318_MangleName("trigArrowRightLongBendDown"), r318_MangleUnicode(11175), r318_xLeft, r318_arrowTop, r318_xRight, r318_arrowTop, r318_xRight, r318_arrowBot);
                    var r318_pSlant = 0.2;
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("arrowReturnLeft"), r318_MangleUnicode(11152), new r312_xn$Capture$2Lrc8.GlyphProc(function (r338_currentGlyph) {
                        var _r338_t0, _r338_t1;
                        r338_currentGlyph.setWidth(r315_MosaicWidth);
                        var r338_x1 = r1_mix(r318_arrowRSB, r318_arrowSB, r318_pSlant);
                        r338_currentGlyph.include(r318_Arrow.trigShape(r338_x1, r318_yLower, r318_arrowSB, r318_yLower, r318_arrowHeadSize));
                        r338_currentGlyph.include(r312_intersection(r318_MaskBelow(r318_yUpper + r318_halfArrowSw), r312_dispiro(r312_widths.lhs(r318_arrowSw), r312_xn$disablecontrast$3qIs(), r312_flat(r338_x1, r318_yLower - r318_halfArrowSw), r312_curl(r318_arrowRSB, r318_yUpper + r318_halfArrowSw))));
                        r338_currentGlyph.include(r312_intersection(r318_MaskLeftLine(r338_x1, r318_yLower - r318_halfArrowSw, r318_arrowRSB, r318_yUpper + r318_halfArrowSw), r318_Arrow.Bar.shape(r318_arrowMidX, r318_yUpper, r318_arrowRSB, r318_yUpper, r318_halfArrowSw, 0, 0)));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("arrowReturnRight"), r318_MangleUnicode(11153), new r312_xn$Capture$2Lrc8.GlyphProc(function (r345_currentGlyph) {
                        var _r345_t0, _r345_t1;
                        r345_currentGlyph.setWidth(r315_MosaicWidth);
                        var r345_x1 = r1_mix(r318_arrowSB, r318_arrowRSB, r318_pSlant);
                        r345_currentGlyph.include(r318_Arrow.trigShape(r345_x1, r318_yLower, r318_arrowRSB, r318_yLower, r318_arrowHeadSize));
                        r345_currentGlyph.include(r312_intersection(r318_MaskBelow(r318_yUpper + r318_halfArrowSw), r312_dispiro(r312_widths.rhs(r318_arrowSw), r312_xn$disablecontrast$3qIs(), r312_flat(r345_x1, r318_yLower - r318_halfArrowSw), r312_curl(r318_arrowSB, r318_yUpper + r318_halfArrowSw))));
                        r345_currentGlyph.include(r312_intersection(r318_MaskRightLine(r345_x1, r318_yLower - r318_halfArrowSw, r318_arrowSB, r318_yUpper + r318_halfArrowSw), r318_Arrow.Bar.shape(r318_arrowMidX, r318_yUpper, r318_arrowSB, r318_yUpper, r318_halfArrowSw, 0, 0)));
                        return void 0;
                    }));
                    var r318_pNewline = 0.35;
                    var r318_pGap = r312_StrokeWidthBlend(0.1, 0.05);
                    var r318_arrowGapX = r318_pGap * (r318_arrowRSB - r318_arrowSB);
                    var r318_arrowGapX2 = 0.1 * (r318_arrowRSB - r318_arrowSB);
                    var r318_arrowGapY = r318_pGap * (r318_arrowTop - r318_arrowBot);
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("arrowNewlineLeft"), r318_MangleUnicode(11154), new r312_xn$Capture$2Lrc8.GlyphProc(function (r352_currentGlyph) {
                        var _r352_t0, _r352_t1;
                        r352_currentGlyph.setWidth(r315_MosaicWidth);
                        var r352_x1 = r1_mix(r318_arrowRSB, r318_arrowSB, r318_pNewline);
                        var r352_x2 = r1_mix(r318_arrowSB, r318_arrowRSB, r318_pNewline);
                        var r352_x3 = r318_arrowRSB - r318_halfArrowSw;
                        r352_currentGlyph.include(r318_Arrow.Bar.shape(r318_arrowSB, r318_yUpper, r352_x1 - r318_arrowGapX2, r318_yUpper, r318_halfArrowSw, 0, 0));
                        r352_currentGlyph.include(r318_Arrow.Bar.shape(r352_x1, r318_yUpper, r318_arrowRSB, r318_yUpper, r318_halfArrowSw, 0, 0));
                        r352_currentGlyph.include(r318_Arrow.Bar.shape(r352_x3, r318_yUpper, r352_x3, r318_yLower, r318_halfArrowSw, 0, 0));
                        r352_currentGlyph.include(r318_Arrow.trigShape(r318_arrowRSB, r318_yLower, r352_x2, r318_yLower, r318_arrowHeadSize));
                        r352_currentGlyph.include(r318_Arrow.Bar.shape(r352_x2 - r318_arrowGapX, r318_yLower, r318_arrowSB, r318_yLower, r318_halfArrowSw, 0, 0));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("arrowNewlineRight"), r318_MangleUnicode(11155), new r312_xn$Capture$2Lrc8.GlyphProc(function (r361_currentGlyph) {
                        var _r361_t0, _r361_t1;
                        r361_currentGlyph.setWidth(r315_MosaicWidth);
                        var r361_x1 = r1_mix(r318_arrowSB, r318_arrowRSB, r318_pNewline);
                        var r361_x2 = r1_mix(r318_arrowRSB, r318_arrowSB, r318_pNewline);
                        var r361_x3 = r318_arrowSB + r318_halfArrowSw;
                        r361_currentGlyph.include(r318_Arrow.Bar.shape(r318_arrowRSB, r318_yUpper, r361_x1 + r318_arrowGapX2, r318_yUpper, r318_halfArrowSw, 0, 0));
                        r361_currentGlyph.include(r318_Arrow.Bar.shape(r361_x1, r318_yUpper, r318_arrowSB, r318_yUpper, r318_halfArrowSw, 0, 0));
                        r361_currentGlyph.include(r318_Arrow.Bar.shape(r361_x3, r318_yUpper, r361_x3, r318_yLower, r318_halfArrowSw, 0, 0));
                        r361_currentGlyph.include(r318_Arrow.trigShape(r318_arrowSB, r318_yLower, r361_x2, r318_yLower, r318_arrowHeadSize));
                        r361_currentGlyph.include(r318_Arrow.Bar.shape(r361_x2 + r318_arrowGapX, r318_yLower, r318_arrowRSB, r318_yLower, r318_halfArrowSw, 0, 0));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("arrowCirclingCCW"), r318_MangleUnicode(11156), new r312_xn$Capture$2Lrc8.GlyphProc(function (r370_currentGlyph) {
                        var _r370_t0, _r370_t1;
                        r370_currentGlyph.setWidth(r315_MosaicWidth);
                        var r370_headSize = r318_arrowHeadSize * 0.5;
                        var r370_offset = 0.75 * r370_headSize / 2;
                        r370_currentGlyph.include(r318_VBE(r318_xRight, r312_SymbolMid + r370_offset + r318_arrowGapY, r318_xRight, r318_yUpper));
                        r370_currentGlyph.include(r318_Arrow.trigShape(r318_xRight, r318_yUpper, r318_arrowMidX - r370_offset, r318_yUpper, r370_headSize));
                        r370_currentGlyph.include(r318_HBS(r318_arrowMidX - r370_offset - r318_arrowGapX, r318_yUpper, r318_xLeft, r318_yUpper));
                        r370_currentGlyph.include(r318_Arrow.trigShape(r318_xLeft, r318_yUpper, r318_xLeft, r312_SymbolMid - r370_offset, r370_headSize));
                        r370_currentGlyph.include(r318_VBS(r318_xLeft, r312_SymbolMid - r370_offset - r318_arrowGapY, r318_xLeft, r318_yLower));
                        r370_currentGlyph.include(r318_Arrow.trigShape(r318_xLeft, r318_yLower, r318_arrowMidX + r370_offset, r318_yLower, r370_headSize));
                        r370_currentGlyph.include(r318_HBE(r318_arrowMidX + r370_offset + r318_arrowGapX, r318_yLower, r318_xRight, r318_yLower));
                        r370_currentGlyph.include(r318_Arrow.trigShape(r318_xRight, r318_yLower, r318_xRight, r312_SymbolMid + r370_offset, r370_headSize));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("trigArrowUShapeLeft"), r318_MangleUnicode(11148), new r312_xn$Capture$2Lrc8.GlyphProc(function (r382_currentGlyph) {
                        var _r382_t0, _r382_t1;
                        r382_currentGlyph.setWidth(r315_MosaicWidth);
                        r382_currentGlyph.include(r312_dispiro(r312_widths.center(r318_arrowSw), r312_xn$disablecontrast$3qIs(), r312_flat(r318_arrowSB, r318_yLower, r312_heading(r312_Rightward)), r312_curl(r318_arrowRSB2 - r318_vcDist / 2, r318_yLower), r312_archv(), r312_g4(r318_arrowRSB2, r312_SymbolMid), r312_arcvh(), r312_flat(r318_arrowRSB2 - r318_vcDist / 2, r318_yUpper), r312_curl(r318_arrowMidX, r318_yUpper, r312_heading(r312_Leftward))));
                        r382_currentGlyph.include(r318_Arrow.trigShape(r318_arrowMidX, r318_yUpper, r318_arrowSB, r318_yUpper, r318_arrowHeadSize));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("trigArrowUShapeUp"), r318_MangleUnicode(11149), new r312_xn$Capture$2Lrc8.GlyphProc(function (r388_currentGlyph) {
                        var _r388_t0, _r388_t1;
                        r388_currentGlyph.setWidth(r315_MosaicWidth);
                        r388_currentGlyph.include(r312_dispiro(r312_widths.center(r318_arrowSw), r312_xn$disablecontrast$3qIs(), r312_flat(r318_xLeft, r318_arrowTop, r312_heading({
                            "x": 1,
                            "y": 0
                        })), r312_curl(r318_xLeft, r318_arrowBot + r318_hcDist / 2), r312_arcvh(), r312_g4(r318_arrowMidX, r318_arrowBot), r312_archv(), r312_flat(r318_xRight, r318_arrowBot + r318_hcDist / 2), r312_curl(r318_xRight, Math.max(r312_SymbolMid, r318_arrowBot + r318_hcDist / 2 + r312_TINY), r312_heading({
                            "x": -1,
                            "y": 0
                        }))));
                        r388_currentGlyph.include(r318_Arrow.trigShape(r318_xRight, r312_SymbolMid, r318_xRight, r318_arrowTop, r318_arrowHeadSize));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("trigArrowUShapeRight"), r318_MangleUnicode(11150), new r312_xn$Capture$2Lrc8.GlyphProc(function (r394_currentGlyph) {
                        var _r394_t0, _r394_t1;
                        r394_currentGlyph.setWidth(r315_MosaicWidth);
                        r394_currentGlyph.include(r312_dispiro(r312_widths.center(r318_arrowSw), r312_xn$disablecontrast$3qIs(), r312_flat(r318_arrowRSB, r318_yUpper, r312_heading(r312_Leftward)), r312_curl(r318_arrowSB2 + r318_vcDist / 2, r318_yUpper), r312_archv(), r312_g4(r318_arrowSB2, r312_SymbolMid), r312_arcvh(), r312_flat(r318_arrowSB2 + r318_vcDist / 2, r318_yLower), r312_curl(r318_arrowMidX, r318_yLower, r312_heading(r312_Rightward))));
                        r394_currentGlyph.include(r318_Arrow.trigShape(r318_arrowMidX, r318_yLower, r318_arrowRSB, r318_yLower, r318_arrowHeadSize));
                        return void 0;
                    }));
                    return r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("trigArrowUShapeDown"), r318_MangleUnicode(11151), new r312_xn$Capture$2Lrc8.GlyphProc(function (r400_currentGlyph) {
                        var _r400_t0, _r400_t1;
                        r400_currentGlyph.setWidth(r315_MosaicWidth);
                        r400_currentGlyph.include(r312_dispiro(r312_widths.center(r318_arrowSw), r312_xn$disablecontrast$3qIs(), r312_flat(r318_xRight, r318_arrowBot, r312_heading({
                            "x": -1,
                            "y": 0
                        })), r312_curl(r318_xRight, r318_arrowTop - r318_hcDist / 2), r312_arcvh(), r312_g4(r318_arrowMidX, r318_arrowTop), r312_archv(), r312_flat(r318_xLeft, r318_arrowTop - r318_hcDist / 2), r312_curl(r318_xLeft, Math.min(r312_SymbolMid, r318_arrowTop - r318_hcDist / 2 - r312_TINY), r312_heading({
                            "x": 1,
                            "y": 0
                        }))));
                        r400_currentGlyph.include(r318_Arrow.trigShape(r318_xLeft, r312_SymbolMid, r318_xLeft, r318_arrowBot, r318_arrowHeadSize));
                        return void 0;
                    }));
                })();
                _r315_t5 = _r315_t2 = _r315_t2 + 1;
                _r315_t4 = _r315_t2 < _r315_t1;
            }
            return _r315_t5;
        })();
    });
    return void 0;
});


