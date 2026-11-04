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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Arrow-Thick", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t5, _r312_t6, _r312_t7, _r312_tag8;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_O = _r312_t1.O;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_WideWidth1 = _r312_t1.WideWidth1;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_straight = _r312_t2.straight;
        var r312_widths = _r312_t2.widths;
        var r312_arcvh = _r312_t2.arcvh;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var r312_intersection = _r312_t4.intersection;
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
                    var r318_Rect = _r318_t0.Rect;
                    var r318_PointingTo = _r318_t0.PointingTo;
                    var _r318_t1 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var r318_xn$referglyph$1aao = _r318_t1["refer-glyph"];
                    var _r318_t2 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Arrow-Shared"].resolve();
                    var r318_ArrowDims = _r318_t2.ArrowDims;
                    var r318_ArrowT = _r318_t2.ArrowT;
                    var r318_MkArrowT = _r318_t2.MkArrowT;
                    var r318_dims = r318_ArrowDims(r315_MosaicWidth);
                    var r318_Arrow = r318_ArrowT(r318_dims);
                    var r318_MkArrow = r318_MkArrowT(r318_dims);
                    var _r318_t3 = r318_dims;
                    var r318_arrowTop = _r318_t3.arrowTop;
                    var r318_arrowBot = _r318_t3.arrowBot;
                    var r318_arrowMidX = _r318_t3.arrowMidX;
                    var r318_arrowSB = _r318_t3.arrowSB;
                    var r318_arrowRSB = _r318_t3.arrowRSB;
                    var r318_arrowDiagRSB = _r318_t3.arrowDiagRSB;
                    var r318_arrowDiagSB = _r318_t3.arrowDiagSB;
                    var r318_arrowDiagBot = _r318_t3.arrowDiagBot;
                    var r318_arrowDiagTop = _r318_t3.arrowDiagTop;
                    var r318_halfTerminal = _r318_t3.halfTerminal;
                    var r318_o = r312_O * 2;
                    var r318_SemiHookArrowBar = function (r324_x1, r324_y1, r324_x2, r324_y2, r324_halfSw, r324_halfFine, r324_s, r324_w) {
                        var _r324_t0, _r324_t1;
                        return r318_PointingTo(r324_x1, r324_y1, r324_x2, r324_y2, function (r325_mag) {
                            var _r325_t0, _r325_t1;
                            var r325_p = (r325_mag - r318_o - r324_halfSw * r1_fallback(r324_w, 1.1)) / r325_mag;
                            return r312_dispiro(r312_straight[r324_s > 0 ? "down" : "up"].start(r325_mag - r312_O, r324_s, r312_widths.center(r324_halfFine * 2)), r312_arcvh(), r312_flat(r325_mag - Math.abs(r324_s) / 2, 0, r312_widths.center(r324_halfSw * 2)), r312_curl(r1_mix(r325_mag, 0, r325_p), 0));
                        });
                    };
                    var r318_TriangleArrowHeadBar = function (r326_x1, r326_y1, r326_x2, r326_y2, r326_width, r326_sw, r326__length) {
                        var _r326_t0, _r326_t1;
                        var r326_length = r1_fallback(r326__length, r326_width);
                        return r312_intersection(r318_Arrow.Head.trigShape(r326_x1, r326_y1, r326_x2, r326_y2, r326_width, r326__length), r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, r318_PointingTo(r326_x1, r326_y1, r326_x2, r326_y2, function (r328_mag) {
                            var _r328_t0, _r328_t1;
                            return r318_Rect(r326_width, -r326_width, 0.6 * r326_length - 0.5 * r326_sw, 0.6 * r326_length + 0.5 * r326_sw);
                        })));
                    };
                    var r318_ThickArrowShape = function (r329_color) {
                        var _r329_t0, _r329_t1;
                        return function (r330_x1, r330_y1, r330_x2, r330_y2) {
                            var _r330_t0, _r330_t1, _r330_t2;
                            var r330_headLen = r318_MosaicUnitWidth * Math.sqrt(r315_MosaicWidthScalar) * 0.4;
                            var r330_halfBarWidth = r330_headLen / 3;
                            var r330_headWidth = r330_halfBarWidth * 2;
                            var r330_fine = Math.min(r312_AdviceStroke(5), r330_halfBarWidth * 0.6);
                            var r330_turnWidth = r330_headWidth * 1.5;
                            var r330_barLen = r330_headLen * 0.2 + r330_fine * 2;
                            var r330_dotGap = r330_barLen - r330_fine * 2;
                            var r330_doubleHeadOffset = r330_headLen * 0.4;
                            var r330_whiteDoubleHeadOffset = r330_headLen * 0.4 + 0.75 * r330_fine;
                            var r330_mag = Math.hypot(r330_y2 - r330_y1, r330_x2 - r330_x1);
                            var r330_p = (r330_mag - r330_fine) / r330_mag;
                            var r330_p2 = (r330_mag - r330_fine * Math.sqrt(13) / 2) / r330_mag;
                            var r330_innerHeaderLengthShrink = r330_fine * (1 + Math.sqrt(13) / 2);
                            var r330_p3 = (r330_mag - r330_doubleHeadOffset) / r330_mag;
                            var r330_p4 = (r330_mag - r330_fine * Math.sqrt(13) / 2 - r330_doubleHeadOffset) / r330_mag;
                            var r330_p3WD = (r330_mag - r330_whiteDoubleHeadOffset) / r330_mag;
                            var r330_p4WD = (r330_mag - r330_fine * Math.sqrt(13) / 2 - r330_whiteDoubleHeadOffset) / r330_mag;
                            var r330_x1a = r1_mix(r330_x1, r330_x2, 1 - r330_p);
                            var r330_y1a = r1_mix(r330_y1, r330_y2, 1 - r330_p);
                            var r330_x2FlatA = r1_mix(r330_x1, r330_x2, r330_p);
                            var r330_y2FlatA = r1_mix(r330_y1, r330_y2, r330_p);
                            var r330_x2a = r1_mix(r330_x1, r330_x2, r330_p2);
                            var r330_y2a = r1_mix(r330_y1, r330_y2, r330_p2);
                            var r330_x1CoA = r1_mix(r330_x1, r330_x2, -0.05);
                            var r330_y1CoA = r1_mix(r330_y1, r330_y2, -0.05);
                            return (_r330_t0 = r329_color, _r330_t0 === "white" ? r312_difference(r312_union(r318_Arrow.Head.trigShape(r330_x1, r330_y1, r330_x2, r330_y2, r330_headWidth, r330_headLen), r318_Arrow.Bar.shape(r330_x1, r330_y1, r330_x2, r330_y2, r330_halfBarWidth + r330_fine / 2, 2)), r312_union(r318_Arrow.Head.trigShape(r330_x1a, r330_y1a, r330_x2a, r330_y2a, r330_headWidth - r330_innerHeaderLengthShrink * r330_headWidth / r330_headLen, r330_headLen - r330_innerHeaderLengthShrink), r318_Arrow.Bar.shape(r330_x1a, r330_y1a, r330_x2a, r330_y2a, r330_halfBarWidth - r330_fine / 2, 2))) : _r330_t0 === "white-open" ? r312_difference(r312_union(r318_Arrow.Head.trigShape(r330_x1, r330_y1, r330_x2, r330_y2, r330_headWidth, r330_headLen), r318_Arrow.Bar.shape(r330_x1, r330_y1, r330_x2, r330_y2, r330_halfBarWidth + r330_fine / 2, 2)), r312_union(r318_Arrow.Head.trigShape(r330_x1CoA, r330_y1CoA, r330_x2a, r330_y2a, r330_headWidth - r330_innerHeaderLengthShrink * r330_headWidth / r330_headLen, r330_headLen - r330_innerHeaderLengthShrink), r318_Arrow.Bar.shape(r330_x1CoA, r330_y1CoA, r330_x2a, r330_y2a, r330_halfBarWidth - r330_fine / 2, 2))) : _r330_t0 === "white-closing" ? r312_difference(r318_Arrow.Bar.shape(r330_x1, r330_y1, r330_x2, r330_y2, r330_halfBarWidth + r330_fine / 2, 0, 0), r318_Arrow.Bar.shape(r330_x1CoA, r330_y1CoA, r330_x2FlatA, r330_y2FlatA, r330_halfBarWidth - r330_fine / 2, 0, 0)) : _r330_t0 === "whiteDouble" ? r312_difference(r312_union(r312_difference(r318_Arrow.Head.trigShape(r330_x1, r330_y1, r330_x2, r330_y2, r330_headWidth, r330_headLen), r318_Arrow.Head.trigShape(r330_x1a, r330_y1a, r330_x2a, r330_y2a, r330_headWidth - r330_innerHeaderLengthShrink * r330_headWidth / r330_headLen, r330_headLen - r330_innerHeaderLengthShrink)), r318_Arrow.Head.trigShape(r330_x1, r330_y1, r1_mix(r330_x1, r330_x2, r330_p3WD), r1_mix(r330_y1, r330_y2, r330_p3WD), r330_headWidth, r330_headLen), r318_Arrow.Bar.shape(r330_x1, r330_y1, r1_mix(r330_x1, r330_x2, r330_p3WD), r1_mix(r330_y1, r330_y2, r330_p3WD), r330_halfBarWidth + r330_fine / 2, 2)), r312_union(r318_Arrow.Head.trigShape(r330_x1a, r330_y1a, r1_mix(r330_x1, r330_x2, r330_p4WD), r1_mix(r330_y1, r330_y2, r330_p4WD), r330_headWidth - r330_innerHeaderLengthShrink * r330_headWidth / r330_headLen, r330_headLen - r330_innerHeaderLengthShrink), r318_Arrow.Bar.shape(r330_x1CoA, r330_y1CoA, r1_mix(r330_x1, r330_x2, r330_p4WD), r1_mix(r330_y1, r330_y2, r330_p4WD), r330_halfBarWidth - r330_fine / 2, 2))) : _r330_t0 === "whiteBarred" ? r312_union(r312_difference(r312_union(r318_Arrow.Head.trigShape(r330_x1, r330_y1, r330_x2, r330_y2, r330_headWidth, r330_headLen), r318_Arrow.Bar.shape(r330_x1, r330_y1, r330_x2, r330_y2, r330_halfBarWidth + r330_fine / 2, 2)), r312_union(r318_Arrow.Head.trigShape(r330_x1CoA, r330_y1CoA, r330_x2a, r330_y2a, r330_headWidth - r330_innerHeaderLengthShrink * r330_headWidth / r330_headLen, r330_headLen - r330_innerHeaderLengthShrink), r318_Arrow.Bar.shape(r330_x1CoA, r330_y1CoA, r330_x2a, r330_y2a, r330_halfBarWidth - r330_fine / 2, 2))), r318_TriangleArrowHeadBar(r330_x1, r330_y1, r330_x2, r330_y2, r330_headWidth, r330_fine, r330_headLen)) : _r330_t0 === "whiteDot" ? r312_difference(r312_union(r318_Arrow.Head.rectShape(r330_x1, r330_y1, r330_x2, r330_y2, r330_halfBarWidth + r330_fine / 2, r330_barLen), r318_Arrow.Bar.shape(r330_x1, r330_y1, r330_x2, r330_y2, r330_halfBarWidth + r330_fine / 2, 0, r330_barLen + r330_dotGap)), r312_union(r318_Arrow.Head.rectShape(r330_x1a, r330_y1a, r330_x2FlatA, r330_y2FlatA, r330_halfBarWidth - r330_fine / 2, r330_barLen - r330_fine * 2), r318_Arrow.Bar.shape(r330_x1CoA, r330_y1CoA, r330_x2FlatA, r330_y2FlatA, r330_halfBarWidth - r330_fine / 2, 0, r330_barLen + r330_dotGap))) : _r330_t0 === "whiteRect" ? r312_difference(r312_union(r318_Arrow.Head.rectShape(r330_x1, r330_y1, r330_x2, r330_y2, r330_headWidth, r330_barLen), r318_Arrow.Bar.shape(r330_x1, r330_y1, r330_x2, r330_y2, r330_halfBarWidth + r330_fine / 2, 0.5)), r312_union(r318_Arrow.Head.rectShape(r330_x1a, r330_y1a, r330_x2FlatA, r330_y2FlatA, r330_headWidth - r330_fine, r330_barLen - r330_fine * 2), r318_Arrow.Bar.shape(r330_x1CoA, r330_y1CoA, r330_x2FlatA, r330_y2FlatA, r330_halfBarWidth - r330_fine / 2, 0.5))) : _r330_t0 === "whiteLeftTurn" ? r312_difference(r312_union(r318_Arrow.Head.rectShape(r330_x1, r330_y1, r330_x2, r330_y2, r330_halfBarWidth + r330_fine / 2, r330_halfBarWidth * 2 + r330_fine * 1.5, r330_turnWidth), r318_Arrow.Bar.shape(r330_x1, r330_y1, r330_x2, r330_y2, r330_halfBarWidth + r330_fine / 2, 1)), r312_union(r318_Arrow.Head.rectShape(r330_x1a, r330_y1a, r330_x2FlatA, r330_y2FlatA, r330_halfBarWidth - r330_fine / 2, r330_halfBarWidth * 2 - r330_fine / 2, r330_turnWidth - r330_fine), r318_Arrow.Bar.shape(r330_x1CoA, r330_y1CoA, r330_x2FlatA, r330_y2FlatA, r330_halfBarWidth - r330_fine / 2, 1))) : _r330_t0 === "black" ? r312_union(r318_Arrow.Head.trigShape(r330_x1, r330_y1, r330_x2, r330_y2, r330_headWidth, r330_headLen), r318_Arrow.Bar.shape(r330_x1, r330_y1, r330_x2, r330_y2, r330_halfBarWidth, 2)) : _r330_t0 === "blackSemiHookR" ? r312_union(r318_Arrow.Head.trigShape(r330_x1, r330_y1, r330_x2, r330_y2, r330_headWidth, r330_headLen), r318_SemiHookArrowBar(r330_x1, r330_y1, r330_x2, r330_y2, r330_halfBarWidth, r318_halfTerminal, r330_headWidth, 2)) : _r330_t0 === "blackSemiHookL" ? r312_union(r318_Arrow.Head.trigShape(r330_x1, r330_y1, r330_x2, r330_y2, r330_headWidth, r330_headLen), r318_SemiHookArrowBar(r330_x1, r330_y1, r330_x2, r330_y2, r330_halfBarWidth, r318_halfTerminal, -r330_headWidth, 2)) : void 0);
                        };
                    };
                    r318_MkArrow.single(r318_ThickArrowShape("white"), r318_MangleName("uni21E6"), r318_MangleUnicode(8678), r318_arrowRSB, r312_SymbolMid, r318_arrowSB, r312_SymbolMid);
                    r318_MkArrow.single(r318_ThickArrowShape("white"), r318_MangleName("uni21E7"), r318_MangleUnicode(8679), r318_arrowMidX, r318_arrowBot, r318_arrowMidX, r318_arrowTop);
                    r318_MkArrow.single(r318_ThickArrowShape("white"), r318_MangleName("uni21E8"), r318_MangleUnicode(8680), r318_arrowSB, r312_SymbolMid, r318_arrowRSB, r312_SymbolMid);
                    r318_MkArrow.single(r318_ThickArrowShape("white"), r318_MangleName("uni21E9"), r318_MangleUnicode(8681), r318_arrowMidX, r318_arrowTop, r318_arrowMidX, r318_arrowBot);
                    r318_MkArrow.single(r318_ThickArrowShape("white"), r318_MangleName("uni2B00"), r318_MangleUnicode(11008), r318_arrowDiagSB, r318_arrowDiagBot, r318_arrowDiagRSB, r318_arrowDiagTop);
                    r318_MkArrow.single(r318_ThickArrowShape("white"), r318_MangleName("uni2B01"), r318_MangleUnicode(11009), r318_arrowDiagRSB, r318_arrowDiagBot, r318_arrowDiagSB, r318_arrowDiagTop);
                    r318_MkArrow.single(r318_ThickArrowShape("white"), r318_MangleName("uni2B02"), r318_MangleUnicode(11010), r318_arrowDiagSB, r318_arrowDiagTop, r318_arrowDiagRSB, r318_arrowDiagBot);
                    r318_MkArrow.single(r318_ThickArrowShape("white"), r318_MangleName("uni2B03"), r318_MangleUnicode(11011), r318_arrowDiagRSB, r318_arrowDiagTop, r318_arrowDiagSB, r318_arrowDiagBot);
                    r318_MkArrow.double(r318_ThickArrowShape("white-open"), r318_ThickArrowShape("white-open"), r318_MangleName("uni2B04"), r318_MangleUnicode(11012), r318_arrowSB, r312_SymbolMid, r318_arrowRSB, r312_SymbolMid);
                    r318_MkArrow.double(r318_ThickArrowShape("white-open"), r318_ThickArrowShape("white-open"), r318_MangleName("uni21F3"), r318_MangleUnicode(8691), r318_arrowMidX, r318_arrowBot, r318_arrowMidX, r318_arrowTop);
                    r318_MkArrow.double(r318_ThickArrowShape("whiteDot"), r318_ThickArrowShape("white-open"), r318_MangleName("uni21EA"), r318_MangleUnicode(8682), r318_arrowMidX, r318_arrowBot, r318_arrowMidX, r318_arrowTop);
                    r318_MkArrow.double(r318_ThickArrowShape("whiteRect"), r318_ThickArrowShape("white-open"), r318_MangleName("uni21EB"), r318_MangleUnicode(8683), r318_arrowMidX, r318_arrowBot, r318_arrowMidX, r318_arrowTop);
                    r318_MkArrow.double(r318_ThickArrowShape("whiteRect"), r318_ThickArrowShape("whiteBarred"), r318_MangleName("uni21EC"), r318_MangleUnicode(8684), r318_arrowMidX, r318_arrowBot, r318_arrowMidX, r318_arrowTop);
                    r318_MkArrow.double(r318_ThickArrowShape("white-closing"), r318_ThickArrowShape("whiteDouble"), r318_MangleName("uni21EE"), r318_MangleUnicode(8686), r318_arrowMidX, r318_arrowBot, r318_arrowMidX, r318_arrowTop);
                    r318_MkArrow.double(r318_ThickArrowShape("whiteRect"), r318_ThickArrowShape("whiteDouble"), r318_MangleName("uni21EF"), r318_MangleUnicode(8687), r318_arrowMidX, r318_arrowBot, r318_arrowMidX, r318_arrowTop);
                    r318_MkArrow.double(r318_ThickArrowShape("whiteRect"), r318_ThickArrowShape("white-open"), r318_MangleName("uni21F0"), r318_MangleUnicode(8688), r318_arrowSB, r312_SymbolMid, r318_arrowRSB, r312_SymbolMid);
                    r318_MkArrow.double(r318_ThickArrowShape("whiteDot"), r318_ThickArrowShape("whiteBarred"), r318_MangleName("uni2BB8"), r318_MangleUnicode(11192), r318_arrowMidX, r318_arrowBot, r318_arrowMidX, r318_arrowTop);
                    r318_MkArrow.double(r318_ThickArrowShape("whiteLeftTurn"), r318_ThickArrowShape("white-open"), r318_MangleName("uni23CE"), r318_MangleUnicode(9166), r318_arrowRSB, r312_SymbolMid, r318_arrowSB, r312_SymbolMid);
                    r318_MkArrow.single(r318_ThickArrowShape("black"), r318_MangleName("uni2B05"), r318_MangleUnicode(11013), r318_arrowRSB, r312_SymbolMid, r318_arrowSB, r312_SymbolMid);
                    r318_MkArrow.single(r318_ThickArrowShape("black"), r318_MangleName("uni2B06"), r318_MangleUnicode(11014), r318_arrowMidX, r318_arrowBot, r318_arrowMidX, r318_arrowTop);
                    r318_MkArrow.single(r318_ThickArrowShape("black"), r318_MangleName("uni27A1"), r318_MangleUnicode(10145), r318_arrowSB, r312_SymbolMid, r318_arrowRSB, r312_SymbolMid);
                    r318_MkArrow.single(r318_ThickArrowShape("black"), r318_MangleName("uni2B95"), r318_MangleUnicode(11157), r318_arrowSB, r312_SymbolMid, r318_arrowRSB, r312_SymbolMid);
                    r318_MkArrow.single(r318_ThickArrowShape("black"), r318_MangleName("uni2B07"), r318_MangleUnicode(11015), r318_arrowMidX, r318_arrowTop, r318_arrowMidX, r318_arrowBot);
                    r318_MkArrow.single(r318_ThickArrowShape("black"), r318_MangleName("uni2B08"), r318_MangleUnicode(11016), r318_arrowDiagSB, r318_arrowDiagBot, r318_arrowDiagRSB, r318_arrowDiagTop);
                    r318_MkArrow.single(r318_ThickArrowShape("black"), r318_MangleName("uni2B09"), r318_MangleUnicode(11017), r318_arrowDiagRSB, r318_arrowDiagBot, r318_arrowDiagSB, r318_arrowDiagTop);
                    r318_MkArrow.single(r318_ThickArrowShape("black"), r318_MangleName("uni2B0A"), r318_MangleUnicode(11018), r318_arrowDiagSB, r318_arrowDiagTop, r318_arrowDiagRSB, r318_arrowDiagBot);
                    r318_MkArrow.single(r318_ThickArrowShape("black"), r318_MangleName("uni2B0B"), r318_MangleUnicode(11019), r318_arrowDiagRSB, r318_arrowDiagTop, r318_arrowDiagSB, r318_arrowDiagBot);
                    r318_MkArrow.double(r318_ThickArrowShape("black"), r318_ThickArrowShape("black"), r318_MangleName("uni2B0C"), r318_MangleUnicode(11020), r318_arrowSB, r312_SymbolMid, r318_arrowRSB, r312_SymbolMid);
                    r318_MkArrow.double(r318_ThickArrowShape("black"), r318_ThickArrowShape("black"), r318_MangleName("uni2B0D"), r318_MangleUnicode(11021), r318_arrowMidX, r318_arrowBot, r318_arrowMidX, r318_arrowTop);
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni21ED"), r318_MangleUnicode(8685), new r312_xn$Capture$2Lrc8.GlyphProc(function (r333_currentGlyph) {
                        var _r333_t0, _r333_t1;
                        r333_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("uni21EB")), true, true);
                        r333_currentGlyph.include(r312_intersection(r318_xn$referglyph$1aao(r318_MangleName("uni2B06")), r318_Rect(r318_arrowTop, r318_arrowBot, r318_arrowMidX - r312_AdviceStroke(5) / 2, r318_arrowMidX + r312_AdviceStroke(5) / 2)));
                        return void 0;
                    }));
                    r318_MkArrow.single(r318_ThickArrowShape("blackSemiHookL"), r318_MangleName("uni27A5"), r318_MangleUnicode(10149), r318_arrowSB, r312_SymbolMid, r318_arrowRSB, r312_SymbolMid);
                    r318_MkArrow.single(r318_ThickArrowShape("blackSemiHookR"), r318_MangleName("uni27A6"), r318_MangleUnicode(10150), r318_arrowSB, r312_SymbolMid, r318_arrowRSB, r312_SymbolMid);
                    return r318_MkArrow.single(r318_Arrow.toBarShapeT(r318_ThickArrowShape("black")), r318_MangleName("blackArrowBarDown"), r318_MangleUnicode(129203), r318_arrowMidX, r318_arrowTop, r318_arrowMidX, r318_arrowBot);
                })();
                _r315_t5 = _r315_t2 = _r315_t2 + 1;
                _r315_t4 = _r315_t2 < _r315_t1;
            }
            return _r315_t5;
        })();
    });
    return void 0;
});


