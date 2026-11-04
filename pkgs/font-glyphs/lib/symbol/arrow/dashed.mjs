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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Arrow-Dashed", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t5, _r312_t6, _r312_t7, _r312_tag8;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_O = _r312_t1.O;
        var r312_AdviceStrokeInSpace = _r312_t1.AdviceStrokeInSpace;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
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
                    var r318_suffix, r318_fDot, r318_kDotR, r318_oDot, _r318_t6, _r318_t7, _r318_tag8;
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
                    var r318_MaskRight = _r318_t0.MaskRight;
                    var r318_PointingTo = _r318_t0.PointingTo;
                    var r318_DotVariants = _r318_t0.DotVariants;
                    var _r318_t1 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var r318_xn$selectvariant$7Hrq = _r318_t1["select-variant"];
                    var _r318_t2 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Arrow-Shared"].resolve();
                    var r318_ArrowDims = _r318_t2.ArrowDims;
                    var r318_ArrowT = _r318_t2.ArrowT;
                    var r318_MkArrowT = _r318_t2.MkArrowT;
                    var r318_dims = r318_ArrowDims(r315_MosaicWidth);
                    var r318_Arrow = r318_ArrowT(r318_dims);
                    var r318_MkArrow = r318_MkArrowT(r318_dims);
                    var _r318_t3 = r318_dims;
                    var r318_arrowHeight = _r318_t3.arrowHeight;
                    var r318_arrowWidth = _r318_t3.arrowWidth;
                    var r318_arrowTop = _r318_t3.arrowTop;
                    var r318_arrowBot = _r318_t3.arrowBot;
                    var r318_arrowMidX = _r318_t3.arrowMidX;
                    var r318_arrowSB = _r318_t3.arrowSB;
                    var r318_arrowRSB = _r318_t3.arrowRSB;
                    var r318_halfArrowSw = _r318_t3.halfArrowSw;
                    var r318_fine = _r318_t3.fine;
                    var r318_doubleHeadGap = _r318_t3.doubleHeadGap;
                    var r318_o = r312_O * 2;
                    var r318_DashedArrowBar = function (r324_x1, r324_y1, r324_x2, r324_y2, r324_halfSw, r324_gap, r324_segLen, r324_w) {
                        var _r324_t0, _r324_t1;
                        return r318_PointingTo(r324_x1, r324_y1, r324_x2, r324_y2, function (r325_mag) {
                            var _r325_t0, _r325_t1;
                            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
                                var _r327_t0, _r327_t1;
                                var r327_p = (r325_mag - r318_o - r324_halfSw * r1_fallback(r324_w, 1.1)) / r325_mag;
                                var r327_fullLen = r325_mag * r327_p;
                                var r327_x0 = r325_mag * (1 - r327_p);
                                var r327_dt0 = r324_segLen / r327_fullLen;
                                var r327_dt = (r324_gap + r324_segLen) / r327_fullLen;
                                var r327_t = 0;
                                while (r327_t < 1) {
                                    r327_currentGlyph.include(r312_dispiro(r312_widths.center(r324_halfSw * 2), r312_flat(r1_mix(r327_x0, r325_mag, r327_t), 0), r312_curl(r1_mix(r327_x0, r325_mag, Math.min(1, r327_t + r327_dt0)), 0)));
                                    r327_t = r327_t + r327_dt;
                                }
                                return void 0;
                            });
                        });
                    };
                    var r318_SegmentArrowBar = function (r329_x1, r329_y1, r329_x2, r329_y2, r329_halfSw, r329_gap, r329_segCnt, r329_w) {
                        var _r329_t0, _r329_t1;
                        return r318_PointingTo(r329_x1, r329_y1, r329_x2, r329_y2, function (r330_mag) {
                            var _r330_t0, _r330_t1;
                            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r332_currentGlyph) {
                                var _r332_t0, _r332_t1;
                                var r332_p = (r330_mag - r318_o - r329_halfSw * r1_fallback(r329_w, 1.1)) / r330_mag;
                                var r332_fullLen = r330_mag * r332_p;
                                var r332_x0 = r330_mag * (1 - r332_p);
                                var r332_dt = (1 + r329_gap / r332_fullLen) / r329_segCnt;
                                var r332_dt0 = r332_dt - r329_gap / r332_fullLen;
                                var r332_t = 0;
                                while (r332_t < 1) {
                                    r332_currentGlyph.include(r312_dispiro(r312_widths.center(r329_halfSw * 2), r312_flat(r1_mix(r332_x0, r330_mag, r332_t), 0), r312_curl(r1_mix(r332_x0, r330_mag, Math.min(1, r332_t + r332_dt0)), 0)));
                                    r332_t = r332_t + r332_dt;
                                }
                                return void 0;
                            });
                        });
                    };
                    var r318_DottedArrowBar = function (r334_x1, r334_y1, r334_x2, r334_y2, r334_fDot, r334_kDotR, r334_oDot, r334_halfSw, r334_gap, r334_w) {
                        var _r334_t0, _r334_t1;
                        return r318_PointingTo(r334_x1, r334_y1, r334_x2, r334_y2, function (r335_mag) {
                            var _r335_t0, _r335_t1;
                            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r337_currentGlyph) {
                                var _r337_t0, _r337_t1;
                                var r337_p = (r335_mag - r318_o - r334_halfSw * r1_fallback(r334_w, 1.1)) / r335_mag;
                                var r337_fullLen = r335_mag * r337_p;
                                var r337_x0 = r335_mag * (1 - r337_p);
                                var r337_dt0 = 2 * r334_halfSw * r334_kDotR / r337_fullLen;
                                var r337_dt = r337_dt0 + r334_gap / r337_fullLen;
                                var r337_dots = [];
                                var r337_t = 0;
                                while (r337_t < 1 + r337_dt0) {
                                    r337_dots.push(r334_fDot(r1_mix(r335_mag, r337_x0, r337_t + r337_dt0 / 2), 0, r334_halfSw * r334_kDotR));
                                    r337_t = r337_t + r337_dt;
                                }
                                r337_currentGlyph.include(r312_intersection(r318_MaskRight(r337_x0), r312_union.apply(null, r337_dots)));
                                return void 0;
                            });
                        });
                    };
                    var r318_dashGap = r312_AdviceStroke(6);
                    var r318_dashLen = Math.max(r312_Width / 5, r318_dashGap * 3);
                    var r318_DashedArrowShape = function (r339_x1, r339_y1, r339_x2, r339_y2, r339_size, r339__halfSw) {
                        var _r339_t0, _r339_t1;
                        return new r312_xn$Capture$2Lrc8.GlyphProc(function (r341_currentGlyph) {
                            var _r341_t0, _r341_t1;
                            var r341_halfSw = r1_fallback(r339__halfSw, r318_halfArrowSw);
                            r341_currentGlyph.include(r318_Arrow.Head.shape(r339_x1, r339_y1, r339_x2, r339_y2, r339_size));
                            r341_currentGlyph.include(r318_DashedArrowBar(r339_x1, r339_y1, r339_x2, r339_y2, r341_halfSw, r318_dashGap, r318_dashLen));
                            return void 0;
                        });
                    };
                    var r318_DashedTrigArrowShape = function (r344_x1, r344_y1, r344_x2, r344_y2, r344_size, r344__halfSw) {
                        var _r344_t0, _r344_t1;
                        return new r312_xn$Capture$2Lrc8.GlyphProc(function (r346_currentGlyph) {
                            var _r346_t0, _r346_t1;
                            var r346_halfSw = r1_fallback(r344__halfSw, r318_halfArrowSw);
                            r346_currentGlyph.include(r318_Arrow.Head.trigShape(r344_x1, r344_y1, r344_x2, r344_y2, 0.75 * r344_size));
                            r346_currentGlyph.include(r318_DashedArrowBar(r344_x1, r344_y1, r344_x2, r344_y2, r346_halfSw, r318_dashGap, r318_dashLen));
                            return void 0;
                        });
                    };
                    var r318_nSegArrowShapeT = function (r349_n) {
                        var _r349_t0, _r349_t1;
                        return function (r350_x1, r350_y1, r350_x2, r350_y2, r350_size, r350__halfSw) {
                            var _r350_t0, _r350_t1;
                            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r352_currentGlyph) {
                                var _r352_t0, _r352_t1;
                                var r352_halfSw = r1_fallback(r350__halfSw, r318_halfArrowSw);
                                r352_currentGlyph.include(r318_Arrow.Head.shape(r350_x1, r350_y1, r350_x2, r350_y2, r350_size));
                                r352_currentGlyph.include(r318_SegmentArrowBar(r350_x1, r350_y1, r350_x2, r350_y2, r352_halfSw, r318_dashGap, r349_n));
                                return void 0;
                            });
                        };
                    };
                    var r318_TwoSegArrowShape = r318_nSegArrowShapeT(2);
                    var r318_ThreeSegArrowShape = r318_nSegArrowShapeT(3);
                    var r318_DottedArrowShapeT = function (r355_fDot, r355_kDotR, r355_oDot) {
                        var _r355_t0, _r355_t1;
                        return function (r356_x1, r356_y1, r356_x2, r356_y2, r356_size, r356__halfSw) {
                            var _r356_t0, _r356_t1;
                            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r358_currentGlyph) {
                                var _r358_t0, _r358_t1;
                                var r358_halfSw = r1_fallback(r356__halfSw, r318_halfArrowSw);
                                r358_currentGlyph.include(r318_Arrow.Head.shape(r356_x1, r356_y1, r356_x2, r356_y2, r356_size));
                                r358_currentGlyph.include(r318_DottedArrowBar(r356_x1, r356_y1, r356_x2, r356_y2, r355_fDot, r355_kDotR, r355_oDot, r358_halfSw, r318_dashGap));
                                return void 0;
                            });
                        };
                    };
                    var r318_DhtThreeSegArrowShape = function (r361_x1, r361_y1, r361_x2, r361_y2, r361_size, r361__halfSw) {
                        var _r361_t0, _r361_t1;
                        return new r312_xn$Capture$2Lrc8.GlyphProc(function (r363_currentGlyph) {
                            var _r363_t0, _r363_t1;
                            var r363_halfSw = r1_fallback(r361__halfSw, r318_halfArrowSw);
                            var r363_mag = Math.hypot(r361_y2 - r361_y1, r361_x2 - r361_x1);
                            var r363_pFine = 0.5 * r318_fine / r363_mag;
                            var r363_pHead = 1 - r318_doubleHeadGap / r363_mag;
                            var r363_xHead = r1_mix(r361_x1, r361_x2, r363_pHead);
                            var r363_yHead = r1_mix(r361_y1, r361_y2, r363_pHead);
                            var r363_xCoHead = r1_mix(r361_x1, r361_x2, r363_pHead - r363_pFine);
                            var r363_yCoHead = r1_mix(r361_y1, r361_y2, r363_pHead - r363_pFine);
                            var r363_pTail = r361_size / r363_mag;
                            var r363_xTail = r1_mix(r361_x1, r361_x2, r363_pTail);
                            var r363_yTail = r1_mix(r361_y1, r361_y2, r363_pTail);
                            var r363_xCoTail = r1_mix(r361_x1, r361_x2, r363_pTail - r363_pFine);
                            var r363_yCoTail = r1_mix(r361_y1, r361_y2, r363_pTail - r363_pFine);
                            var r363_gap = r312_AdviceStrokeInSpace(r363_mag - r318_doubleHeadGap - r361_size - r318_fine, 6);
                            r363_currentGlyph.include(r318_Arrow.shape(r363_xCoHead, r363_yCoHead, r361_x2, r361_y2, r361_size));
                            r363_currentGlyph.include(r318_Arrow.Head.shape(r361_x1, r361_y1, r363_xHead, r363_yHead, r361_size));
                            var r363_bar = r318_Arrow.Bar.shape(r363_xCoTail, r363_yCoTail, r363_xCoHead, r363_yCoHead, r363_halfSw);
                            var r363_dash = r318_SegmentArrowBar(r363_xCoTail, r363_yCoTail, r363_xCoHead, r363_yCoHead, r363_halfSw, r363_gap, 3);
                            r363_currentGlyph.include(r363_dash);
                            r363_currentGlyph.include(r312_difference(r318_Arrow.Head.shape(r361_x1, r361_y1, r363_xTail, r363_yTail, r361_size), r312_difference(r363_bar, r363_dash)));
                            return void 0;
                        });
                    };
                    r318_MkArrow.single(r318_DashedArrowShape, r318_MangleName("dashArrowLeft"), r318_MangleUnicode(8672), r318_arrowRSB, r312_SymbolMid, r318_arrowSB, r312_SymbolMid);
                    r318_MkArrow.single(r318_DashedArrowShape, r318_MangleName("dashArrowUp"), r318_MangleUnicode(8673), r318_arrowMidX, r318_arrowBot, r318_arrowMidX, r318_arrowTop);
                    r318_MkArrow.single(r318_DashedArrowShape, r318_MangleName("dashArrowRight"), r318_MangleUnicode(8674), r318_arrowSB, r312_SymbolMid, r318_arrowRSB, r312_SymbolMid);
                    r318_MkArrow.single(r318_DashedArrowShape, r318_MangleName("dashArrowDown"), r318_MangleUnicode(8675), r318_arrowMidX, r318_arrowTop, r318_arrowMidX, r318_arrowBot);
                    r318_MkArrow.single(r318_DashedTrigArrowShape, r318_MangleName("trigDashArrowLeft"), r318_MangleUnicode(11114), r318_arrowRSB, r312_SymbolMid, r318_arrowSB, r312_SymbolMid);
                    r318_MkArrow.single(r318_DashedTrigArrowShape, r318_MangleName("trigDashArrowUp"), r318_MangleUnicode(11115), r318_arrowMidX, r318_arrowBot, r318_arrowMidX, r318_arrowTop);
                    r318_MkArrow.single(r318_DashedTrigArrowShape, r318_MangleName("trigDashArrowRight"), r318_MangleUnicode(11116), r318_arrowSB, r312_SymbolMid, r318_arrowRSB, r312_SymbolMid);
                    r318_MkArrow.single(r318_DashedTrigArrowShape, r318_MangleName("trigDashArrowDown"), r318_MangleUnicode(11117), r318_arrowMidX, r318_arrowTop, r318_arrowMidX, r318_arrowBot);
                    r318_MkArrow.single(r318_TwoSegArrowShape, r318_MangleName("twoDashArrowLeft"), r318_MangleUnicode(10508), r318_arrowRSB, r312_SymbolMid, r318_arrowSB, r312_SymbolMid);
                    r318_MkArrow.single(r318_TwoSegArrowShape, r318_MangleName("twoDashArrowRight"), r318_MangleUnicode(10509), r318_arrowSB, r312_SymbolMid, r318_arrowRSB, r312_SymbolMid);
                    r318_MkArrow.single(r318_ThreeSegArrowShape, r318_MangleName("threeDashArrowLeft"), r318_MangleUnicode(10510), r318_arrowRSB, r312_SymbolMid, r318_arrowSB, r312_SymbolMid);
                    r318_MkArrow.single(r318_ThreeSegArrowShape, r318_MangleName("threeDashArrowRight"), r318_MangleUnicode(10511), r318_arrowSB, r312_SymbolMid, r318_arrowRSB, r312_SymbolMid);
                    r318_MkArrow.single(r318_DhtThreeSegArrowShape, r318_MangleName("dhtThreeDashArrowLeft"), r318_MangleUnicode(11063), r318_arrowRSB, r312_SymbolMid, r318_arrowSB, r312_SymbolMid);
                    r318_MkArrow.single(r318_DhtThreeSegArrowShape, r318_MangleName("dhtThreeDashArrowRight"), r318_MangleUnicode(10512), r318_arrowSB, r312_SymbolMid, r318_arrowRSB, r312_SymbolMid);
                    var _r318_t4 = Object.entries(r318_DotVariants)[Symbol.iterator]();
                    var _r318_t5 = void 0;
                    while (!(_r318_t5 = _r318_t4.next()).done) {
                        _r318_t6 = _r318_t5.value;
                        r318_suffix = _r318_t6[0];
                        r318_fDot = _r318_t6[1][0];
                        r318_kDotR = _r318_t6[1][1];
                        r318_oDot = _r318_t6[1][2];
                        _r318_t6[1];
                        (function () {
                            var r370_DottedArrowShape = r318_DottedArrowShapeT(r318_fDot, r318_kDotR, r318_oDot);
                            r318_MkArrow.single(r370_DottedArrowShape, "" + r318_MangleName("dottedArrowLeft") + "." + r318_suffix, null, r318_arrowRSB, r312_SymbolMid, r318_arrowSB, r312_SymbolMid);
                            return r318_MkArrow.single(r370_DottedArrowShape, "" + r318_MangleName("dottedArrowRight") + "." + r318_suffix, null, r318_arrowSB, r312_SymbolMid, r318_arrowRSB, r312_SymbolMid);
                        })();
                    }
                    r318_xn$selectvariant$7Hrq(r318_MangleName("dottedArrowLeft"), r318_MangleUnicode(11064), new r312_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
                    return r318_xn$selectvariant$7Hrq(r318_MangleName("dottedArrowRight"), r318_MangleUnicode(10513), new r312_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
                })();
                _r315_t5 = _r315_t2 = _r315_t2 + 1;
                _r315_t4 = _r315_t2 < _r315_t1;
            }
            return _r315_t5;
        })();
    });
    return void 0;
});


