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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Arrow-Weighted", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t5, _r312_t6, _r312_t7, _r312_tag8;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_O = _r312_t1.O;
        var r312_WideWidth1 = _r312_t1.WideWidth1;
        var r312_GeometryStroke = _r312_t1.GeometryStroke;
        var r312_UnicodeWeightGrade = _r312_t1.UnicodeWeightGrade;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
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
                    var _r318_t5, _r318_tag6, _r318_t7, _r318_tag8;
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
                    var _r318_t1 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var _r318_t2 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Arrow-Shared"].resolve();
                    var r318_ArrowDims = _r318_t2.ArrowDims;
                    var r318_MkArrowT = _r318_t2.MkArrowT;
                    var r318_ArrowT = _r318_t2.ArrowT;
                    var _r318_t3 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Geometric-Shared"].resolve();
                    var r318_GeometricDim = _r318_t3.GeometricDim;
                    var r318_GeometricSizes = _r318_t3.GeometricSizes;
                    var r318_dims = r318_ArrowDims(r315_MosaicWidth);
                    var r318_MkArrow = r318_MkArrowT(r318_dims);
                    var r318_Arrow = r318_ArrowT(r318_dims);
                    var _r318_t4 = r318_dims;
                    var r318_arrowWidth = _r318_t4.arrowWidth;
                    var r318_arrowTop = _r318_t4.arrowTop;
                    var r318_arrowBot = _r318_t4.arrowBot;
                    var r318_arrowMidX = _r318_t4.arrowMidX;
                    var r318_arrowSB = _r318_t4.arrowSB;
                    var r318_arrowRSB = _r318_t4.arrowRSB;
                    var r318_arrowDiagRSB = _r318_t4.arrowDiagRSB;
                    var r318_arrowDiagSB = _r318_t4.arrowDiagSB;
                    var r318_arrowDiagBot = _r318_t4.arrowDiagBot;
                    var r318_arrowDiagTop = _r318_t4.arrowDiagTop;
                    var r318_halfArrowSw = _r318_t4.halfArrowSw;
                    var r318_arrowHeadSize = _r318_t4.arrowHeadSize;
                    var r318_o = r312_O * 2;
                    var r318_WeightedTrigArrowShapeT = function (r325_sw, r325_w, r325_h) {
                        var _r325_t0, _r325_t1;
                        return function (r326_x1, r326_y1, r326_x2, r326_y2, r326_size, r326__halfSw) {
                            var _r326_t0, _r326_t1;
                            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
                                var _r328_t0, _r328_t1;
                                var r328_halfSw = r1_fallback(r326__halfSw, r318_halfArrowSw);
                                r328_currentGlyph.include(r318_Arrow.Head.trigShape(r326_x1, r326_y1, r326_x2, r326_y2, 0.75 * r325_w * r326_size, 0.75 * r1_fallback(r325_h, r325_w) * r326_size));
                                r328_currentGlyph.include(r318_Arrow.Bar.shape(r326_x1, r326_y1, r326_x2, r326_y2, r325_sw / 2, 0, 0.75 * r1_fallback(r325_h, r325_w) * r326_size));
                                return void 0;
                            });
                        };
                    };
                    var r318_BarbArrowShapeT = function (r331_k, r331_thickness) {
                        var _r331_t0, _r331_t1;
                        return function (r332_x1, r332_y1, r332_x2, r332_y2) {
                            var _r332_t0, _r332_t1;
                            var r332_headLen = r318_MosaicUnitWidth * Math.sqrt(r315_MosaicWidthScalar) * r331_k;
                            var r332_halfBarWidth = r331_thickness / 2;
                            return r312_union(r318_Arrow.Head.barbShape(r332_x1, r332_y1, r332_x2, r332_y2, r332_headLen, r332_headLen, r331_thickness * 1.125), r318_Arrow.Bar.shape(r332_x1, r332_y1, r332_x2, r332_y2, r332_halfBarWidth, 2));
                        };
                    };
                    (function () {
                        var r334_BarbHeavyWideHeaded = r318_BarbArrowShapeT(0.25, r312_UnicodeWeightGrade(900, r315_MosaicWidthScalar, r312_GeometryStroke));
                        r318_MkArrow.single(r334_BarbHeavyWideHeaded, r318_MangleName("uni2794"), r318_MangleUnicode(10132), r318_arrowSB, r312_SymbolMid, r318_arrowRSB, r312_SymbolMid);
                        var r334_BarbGroup = function (r335_prefix, r335_b, r335_k, r335_w) {
                            var _r335_t0, _r335_t1;
                            var r335_BarbArrowShape = r318_BarbArrowShapeT(r335_k, r312_UnicodeWeightGrade(r335_w, r315_MosaicWidthScalar, r312_GeometryStroke));
                            r318_MkArrow.single(r335_BarbArrowShape, r318_MangleName("" + r335_prefix + "Left"), r318_MangleUnicode(r335_b + 0), r318_arrowRSB, r312_SymbolMid, r318_arrowSB, r312_SymbolMid);
                            r318_MkArrow.single(r335_BarbArrowShape, r318_MangleName("" + r335_prefix + "Up"), r318_MangleUnicode(r335_b + 1), r318_arrowMidX, r318_arrowBot, r318_arrowMidX, r318_arrowTop);
                            r318_MkArrow.single(r335_BarbArrowShape, r318_MangleName("" + r335_prefix + "Right"), r318_MangleUnicode(r335_b + 2), r318_arrowSB, r312_SymbolMid, r318_arrowRSB, r312_SymbolMid);
                            r318_MkArrow.single(r335_BarbArrowShape, r318_MangleName("" + r335_prefix + "Down"), r318_MangleUnicode(r335_b + 3), r318_arrowMidX, r318_arrowTop, r318_arrowMidX, r318_arrowBot);
                            r318_MkArrow.single(r335_BarbArrowShape, r318_MangleName("" + r335_prefix + "LT"), r318_MangleUnicode(r335_b + 4), r318_arrowDiagRSB, r318_arrowDiagBot, r318_arrowDiagSB, r318_arrowDiagTop);
                            r318_MkArrow.single(r335_BarbArrowShape, r318_MangleName("" + r335_prefix + "RT"), r318_MangleUnicode(r335_b + 5), r318_arrowDiagSB, r318_arrowDiagBot, r318_arrowDiagRSB, r318_arrowDiagTop);
                            r318_MkArrow.single(r335_BarbArrowShape, r318_MangleName("" + r335_prefix + "RB"), r318_MangleUnicode(r335_b + 6), r318_arrowDiagSB, r318_arrowDiagTop, r318_arrowDiagRSB, r318_arrowDiagBot);
                            return r318_MkArrow.single(r335_BarbArrowShape, r318_MangleName("" + r335_prefix + "LB"), r318_MangleUnicode(r335_b + 7), r318_arrowDiagRSB, r318_arrowDiagTop, r318_arrowDiagSB, r318_arrowDiagBot);
                        };
                        r334_BarbGroup("barbArrowLight", 129120, 0.375, 300);
                        r334_BarbGroup("barbArrow", 129128, 0.375, 500);
                        r334_BarbGroup("barbArrowMedium", 129136, 0.375, 700);
                        r334_BarbGroup("barbArrowHeavy", 129144, 0.375, 900);
                        return r334_BarbGroup("barbArrowVeryHeavy", 129152, 0.375, 1000);
                    })();
                    return (function () {
                        var r337_Geom = r318_GeometricDim(r318_MosaicUnitWidth, r315_MosaicWidth);
                        var r337_Size = r318_GeometricSizes(r337_Geom);
                        var r337_eqHeight = Math.sqrt(3);
                        var r337_trigArrowSize = 0.75 * r318_arrowHeadSize;
                        var r337_squatRange = 1.5 * r337_Geom.Size * r337_Size.VerySmall.size;
                        var r337_kSmall = 2 * r337_Geom.Size * r337_Size.VerySmall.size / r337_trigArrowSize;
                        var r337_kMedium = 2 * r337_Geom.Size * r337_Size.Small.size / r337_trigArrowSize;
                        var r337_TrigGroupSquat = function (r338_prefix, r338_b, r338_sw, r338_w, r338_h) {
                            var _r338_t0, _r338_t1;
                            var r338_WeightedTrigArrowShape = r318_WeightedTrigArrowShapeT(r338_sw, r338_w, r338_h);
                            r318_MkArrow.single(r338_WeightedTrigArrowShape, r318_MangleName("" + r338_prefix + "Left"), r318_MangleUnicode(r338_b + 0), r318_arrowMidX + r337_squatRange, r312_SymbolMid, r318_arrowMidX - r337_squatRange, r312_SymbolMid);
                            r318_MkArrow.single(r338_WeightedTrigArrowShape, r318_MangleName("" + r338_prefix + "Up"), r318_MangleUnicode(r338_b + 1), r318_arrowMidX, r312_SymbolMid - r337_squatRange, r318_arrowMidX, r312_SymbolMid + r337_squatRange);
                            r318_MkArrow.single(r338_WeightedTrigArrowShape, r318_MangleName("" + r338_prefix + "Right"), r318_MangleUnicode(r338_b + 2), r318_arrowMidX - r337_squatRange, r312_SymbolMid, r318_arrowMidX + r337_squatRange, r312_SymbolMid);
                            return r318_MkArrow.single(r338_WeightedTrigArrowShape, r318_MangleName("" + r338_prefix + "Down"), r318_MangleUnicode(r338_b + 3), r318_arrowMidX, r312_SymbolMid + r337_squatRange, r318_arrowMidX, r312_SymbolMid - r337_squatRange);
                        };
                        var r337_TrigGroup = function (r339_prefix, r339_b, r339_sw, r339_w, r339_h) {
                            var _r339_t0, _r339_t1;
                            var r339_WeightedTrigArrowShape = r318_WeightedTrigArrowShapeT(r339_sw, r339_w, r339_h);
                            r318_MkArrow.single(r339_WeightedTrigArrowShape, r318_MangleName("" + r339_prefix + "Left"), r318_MangleUnicode(r339_b + 0), r318_arrowRSB, r312_SymbolMid, r318_arrowSB, r312_SymbolMid);
                            r318_MkArrow.single(r339_WeightedTrigArrowShape, r318_MangleName("" + r339_prefix + "Up"), r318_MangleUnicode(r339_b + 1), r318_arrowMidX, r318_arrowBot, r318_arrowMidX, r318_arrowTop);
                            r318_MkArrow.single(r339_WeightedTrigArrowShape, r318_MangleName("" + r339_prefix + "Right"), r318_MangleUnicode(r339_b + 2), r318_arrowSB, r312_SymbolMid, r318_arrowRSB, r312_SymbolMid);
                            return r318_MkArrow.single(r339_WeightedTrigArrowShape, r318_MangleName("" + r339_prefix + "Down"), r318_MangleUnicode(r339_b + 3), r318_arrowMidX, r318_arrowTop, r318_arrowMidX, r318_arrowBot);
                        };
                        r337_TrigGroup("trigArrowSmallHead", 129024, r312_UnicodeWeightGrade(300, r315_MosaicWidthScalar, r312_GeometryStroke), r337_Size.Small.size);
                        r337_TrigGroup("trigArrowMediumHead", 129028, r312_UnicodeWeightGrade(500, r315_MosaicWidthScalar, r312_GeometryStroke), r337_Size.Medium.size);
                        r337_TrigGroup("trigArrowLargeHead", 129032, r312_UnicodeWeightGrade(700, r315_MosaicWidthScalar, r312_GeometryStroke), r337_Size.Large.size);
                        r337_TrigGroup("trigArrowSmallEqHead", 129040, r312_UnicodeWeightGrade(300, r315_MosaicWidthScalar, r312_GeometryStroke), r337_Size.Small.size, r337_Size.Small.size * r337_eqHeight);
                        r337_TrigGroup("trigArrowEqHead", 129044, r312_UnicodeWeightGrade(400, r315_MosaicWidthScalar, r312_GeometryStroke), 1, r337_eqHeight);
                        r337_TrigGroup("trigArrowEqHeadHeavy", 129048, r312_UnicodeWeightGrade(500, r315_MosaicWidthScalar, r312_GeometryStroke), 1, r337_eqHeight);
                        r337_TrigGroup("trigArrowLargeEqHeadHeavy", 129052, r312_UnicodeWeightGrade(700, r315_MosaicWidthScalar, r312_GeometryStroke), r337_Size.Large.size, r337_Size.Large.size * r337_eqHeight);
                        r337_TrigGroup("trigArrowNarrowShaft", 129056, r312_UnicodeWeightGrade(300, r315_MosaicWidthScalar, r312_GeometryStroke), 1);
                        r337_TrigGroup("trigArrowMediumShaft", 129060, r312_UnicodeWeightGrade(500, r315_MosaicWidthScalar, r312_GeometryStroke), 1);
                        r337_TrigGroup("trigArrowBoldShaft", 129064, r312_UnicodeWeightGrade(700, r315_MosaicWidthScalar, r312_GeometryStroke), 1);
                        r337_TrigGroup("trigArrowHeavyShaft", 129068, r312_UnicodeWeightGrade(900, r315_MosaicWidthScalar, r312_GeometryStroke), 1);
                        r337_TrigGroup("trigArrowVeryHeavyShaft", 129072, r312_UnicodeWeightGrade(1000, r315_MosaicWidthScalar, r312_GeometryStroke), 1);
                        r337_TrigGroup("fingerPost", 129076, 2 * (r337_trigArrowSize - r318_o), 1);
                        r337_TrigGroup("trigArrowHeavy", 129092, 2 * (r337_trigArrowSize - r318_o), r337_kMedium);
                        r337_TrigGroupSquat("trigArrowSquared", 129080, 2 * r337_Geom.Size * r337_Size.VerySmall.size, r337_kSmall);
                        r337_TrigGroupSquat("trigArrowCompressed", 129084, 2 * r337_Geom.Size * r337_Size.Small.size, r337_kMedium, r337_kSmall);
                        r337_TrigGroupSquat("trigArrowCompressedHeavy", 129088, 2 * r337_Geom.Size * r337_Size.MediumSmall.size, r337_kMedium, r337_kSmall);
                        r318_MkArrow.single(r318_WeightedTrigArrowShapeT(r312_UnicodeWeightGrade(400, r315_MosaicWidthScalar, r312_GeometryStroke), 1), r318_MangleName("uni279D"), r318_MangleUnicode(10141), r318_arrowSB, r312_SymbolMid, r318_arrowRSB, r312_SymbolMid);
                        r318_MkArrow.single(r318_WeightedTrigArrowShapeT(r312_UnicodeWeightGrade(900, r315_MosaicWidthScalar, r312_GeometryStroke), 1), r318_MangleName("uni279E"), r318_MangleUnicode(10142), r318_arrowSB, r312_SymbolMid, r318_arrowRSB, r312_SymbolMid);
                        return r318_MkArrow.single(r318_WeightedTrigArrowShapeT(2 * r337_Geom.Size * r337_Size.Medium.size, r337_kMedium, r337_kSmall), r318_MangleName("trigArrowSquatBlackRight"), r318_MangleUnicode(10151), r318_arrowMidX - r337_squatRange, r312_SymbolMid, r318_arrowMidX + r337_squatRange, r312_SymbolMid);
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


