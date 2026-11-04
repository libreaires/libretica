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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Arrow-Circular", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t5, _r312_t6, _r312_t7, _r312_tag8;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_SB = _r312_t1.SB;
        var r312_CAP = _r312_t1.CAP;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_Downward = _r312_t1.Downward;
        var r312_Rightward = _r312_t1.Rightward;
        var r312_Leftward = _r312_t1.Leftward;
        var r312_SmallArchDepth = _r312_t1.SmallArchDepth;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_HalfStroke = _r312_t1.HalfStroke;
        var r312_WideWidth1 = _r312_t1.WideWidth1;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_ArchDepthAOf = _r312_t1.ArchDepthAOf;
        var r312_ArchDepthBOf = _r312_t1.ArchDepthBOf;
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
                    var _r318_t4, _r318_t5, _r318_tag6;
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
                    var r318_MaskAbove = _r318_t0.MaskAbove;
                    var r318_MaskBelow = _r318_t0.MaskBelow;
                    var r318_MaskLeft = _r318_t0.MaskLeft;
                    var r318_MaskRight = _r318_t0.MaskRight;
                    var r318_OShape = _r318_t0.OShape;
                    var r318_Arch = _r318_t0.Arch;
                    var _r318_t1 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var _r318_t2 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Arrow-Shared"].resolve();
                    var r318_ArrowDims = _r318_t2.ArrowDims;
                    var r318_ArrowT = _r318_t2.ArrowT;
                    var r318_dims = r318_ArrowDims(r315_MosaicWidth);
                    var r318_Arrow = r318_ArrowT(r318_dims);
                    var _r318_t3 = r318_dims;
                    var r318_arrowTop = _r318_t3.arrowTop;
                    var r318_arrowBot = _r318_t3.arrowBot;
                    var r318_arrowMidX = _r318_t3.arrowMidX;
                    var r318_arrowSB = _r318_t3.arrowSB;
                    var r318_arrowRSB = _r318_t3.arrowRSB;
                    var r318_arrowSw = _r318_t3.arrowSw;
                    var r318_arrowHeadSize = _r318_t3.arrowHeadSize;
                    var r318_fine = _r318_t3.fine;
                    var r318_arcSW = Math.min(r318_arrowSw, r312_AdviceStroke(5, r315_MosaicWidthScalar));
                    var r318_headSize = r1_mix(r318_arcSW, r318_arrowHeadSize, 0.5);
                    var r318_headLength = (r318_headSize + r318_fine) * Math.SQRT1_2;
                    var r318_l = r318_arrowSB + 0.5 * r318_headSize;
                    var r318_r = r318_arrowRSB - 0.5 * r318_headSize;
                    var r318_t = r318_arrowTop - 0.5 * r318_headSize;
                    var r318_b = r318_arrowBot + 0.5 * r318_headSize;
                    var r318_ada = r312_ArchDepthAOf(r312_SmallArchDepth * (r318_r - r318_l) / (r312_RightSB - r312_SB), r318_r - r318_l);
                    var r318_adb = r312_ArchDepthBOf(r312_SmallArchDepth * (r318_r - r318_l) / (r312_RightSB - r312_SB), r318_r - r318_l);
                    var r318_gapWidth = Math.max((r318_t - r318_b) * 0.05, r318_fine * Math.SQRT1_2);
                    var r318_HalfCircleArrow = function (r324_headFunc, r324_fCcw, r324_fGapped) {
                        var _r324_t0, _r324_t1;
                        return new r312_xn$Capture$2Lrc8.GlyphProc(function (r326_currentGlyph) {
                            var _r326_t0, _r326_t1;
                            var r326_arrowX = r324_fCcw ? r318_l + r312_HSwToV(0.5 * r318_arcSW) : r318_r - r312_HSwToV(0.5 * r318_arcSW);
                            var r326_arrowY = r312_SymbolMid;
                            var r326_arrowYS = r326_arrowY + 0.5 * r318_headLength;
                            var r326_arrowYE = r326_arrowY - 0.5 * r318_headLength;
                            r326_currentGlyph.setWidth(r315_MosaicWidth);
                            r326_currentGlyph.include(r312_union(r312_difference(r318_OShape.NoOvershoot(r318_t, r318_b, r318_l, r318_r, r318_arcSW, r318_ada, r318_adb), r324_fGapped ? r318_Arrow.Head.barbShape(r326_arrowX, r326_arrowYS, r326_arrowX, r326_arrowYE, r318_headSize, r318_headSize, -r318_gapWidth) : r318_MaskBelow(r326_arrowY)), r312_difference(r312_dispiro(r312_widths.center(r318_arcSW), r312_flat(r326_arrowX, r326_arrowY), r312_curl(r326_arrowX, r326_arrowYE, r312_heading(r312_Downward))), r318_Arrow.Head.outerMask(r326_arrowX, r326_arrowYS, r326_arrowX, r326_arrowYE, r318_headSize))));
                            r326_currentGlyph.include(r324_headFunc(r326_arrowX, r326_arrowYS, r326_arrowX, r326_arrowYE, r318_headSize));
                            return void 0;
                        });
                    };
                    var r318_ShareAlikeArrow = function (r330_headFunc) {
                        var _r330_t0, _r330_t1;
                        return new r312_xn$Capture$2Lrc8.GlyphProc(function (r332_currentGlyph) {
                            var _r332_t0, _r332_t1;
                            var r332_arrowX = r318_l + r312_HSwToV(r312_HalfStroke);
                            var r332_headLength = r318_headSize * Math.SQRT1_2;
                            var r332_gapSize = Math.max(2 * r332_headLength, r312_CAP - 0 - r318_ada - r318_adb);
                            var r332_gapTop = r312_CAP / 2 + 0.5 * r332_gapSize;
                            var r332_gapBot = r312_CAP / 2 - 0.5 * r332_gapSize;
                            r332_currentGlyph.setWidth(r315_MosaicWidth);
                            r332_currentGlyph.include(r312_union(r312_difference(r318_OShape.NoOvershoot(r312_CAP, 0, r318_l, r318_r, r312_Stroke, r318_ada, r318_adb), r312_xn$spirooutline$1aao(r312_corner(r318_arrowSB, r332_gapTop), r312_corner(r318_arrowMidX, r332_gapTop), r312_corner(r318_arrowMidX, r332_gapBot), r312_corner(r318_arrowSB, r332_gapBot)))));
                            r332_currentGlyph.include(r330_headFunc(r332_arrowX, r332_gapTop, r332_arrowX, r332_gapTop - r332_headLength, r318_headSize));
                            return void 0;
                        });
                    };
                    var r318_OpenCircleArrow = function (r336_headFunc, r336_fCcw, r336_fClosed) {
                        var _r336_t0, _r336_t1;
                        return new r312_xn$Capture$2Lrc8.GlyphProc(function (r338_currentGlyph) {
                            var _r338_t0, _r338_t1;
                            var r338_arrowX = r318_Arch["adjust-x"].top(r318_arrowMidX, r318_arcSW);
                            var r338_arrowXS = r338_arrowX + (r336_fCcw ? 0.5 : -0.5) * r318_headLength;
                            var r338_arrowXE = r338_arrowX + (r336_fCcw ? -0.5 : 0.5) * r318_headLength;
                            var r338_arrowY = r318_t - 0.5 * r318_arcSW;
                            var r338_circle = r318_OShape.NoOvershoot(r318_t, r318_b, r318_l, r318_r, r318_arcSW, r318_ada, r318_adb);
                            r338_currentGlyph.setWidth(r315_MosaicWidth);
                            if (r336_fClosed) r338_currentGlyph.include(r338_circle); else r338_currentGlyph.include(r312_union(r312_difference(r318_OShape.NoOvershoot(r318_t, r318_b, r318_l, r318_r, r318_arcSW, r318_ada, r318_adb), r312_intersection(r318_MaskAbove(r312_SymbolMid), (r336_fCcw ? r318_MaskLeft : r318_MaskRight)(r338_arrowX))), r312_difference(r312_dispiro(r312_widths.center(r318_arcSW), r312_flat(r338_arrowX, r338_arrowY), r312_curl(r338_arrowXE, r338_arrowY, r312_heading(r336_fCcw ? r312_Leftward : r312_Rightward))), r318_Arrow.Head.outerMask(r338_arrowXS, r338_arrowY, r338_arrowXE, r338_arrowY, r318_headSize))));
                            r338_currentGlyph.include(r336_headFunc(r338_arrowXS, r338_arrowY, r338_arrowXE, r338_arrowY, r318_headSize));
                            return void 0;
                        });
                    };
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("ccwHalfCircleArrow"), r318_MangleUnicode(8630), new r312_xn$Capture$2Lrc8.GlyphProc(function (r345_currentGlyph) {
                        var _r345_t0, _r345_t1;
                        r345_currentGlyph.include(r318_HalfCircleArrow(r318_Arrow.Head.shape, true, false));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("cwHalfCircleArrow"), r318_MangleUnicode(8631), new r312_xn$Capture$2Lrc8.GlyphProc(function (r349_currentGlyph) {
                        var _r349_t0, _r349_t1;
                        r349_currentGlyph.include(r318_HalfCircleArrow(r318_Arrow.Head.shape, false, false));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("ccwOpenCircleArrow"), r318_MangleUnicode(8634), new r312_xn$Capture$2Lrc8.GlyphProc(function (r353_currentGlyph) {
                        var _r353_t0, _r353_t1;
                        r353_currentGlyph.include(r318_OpenCircleArrow(r318_Arrow.Head.shape, true, false));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("cwOpenCircleArrow"), r318_MangleUnicode(8635), new r312_xn$Capture$2Lrc8.GlyphProc(function (r357_currentGlyph) {
                        var _r357_t0, _r357_t1;
                        r357_currentGlyph.include(r318_OpenCircleArrow(r318_Arrow.Head.shape, false, false));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("ccwGappedCircleArrow"), r318_MangleUnicode(10226), new r312_xn$Capture$2Lrc8.GlyphProc(function (r361_currentGlyph) {
                        var _r361_t0, _r361_t1;
                        r361_currentGlyph.include(r318_HalfCircleArrow(r318_Arrow.Head.shape, true, true));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("cwGappedCircleArrow"), r318_MangleUnicode(10227), new r312_xn$Capture$2Lrc8.GlyphProc(function (r365_currentGlyph) {
                        var _r365_t0, _r365_t1;
                        r365_currentGlyph.include(r318_HalfCircleArrow(r318_Arrow.Head.shape, false, true));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("ccwClosedCircleArrow"), r318_MangleUnicode(10560), new r312_xn$Capture$2Lrc8.GlyphProc(function (r369_currentGlyph) {
                        var _r369_t0, _r369_t1;
                        r369_currentGlyph.include(r318_OpenCircleArrow(r318_Arrow.Head.shape, true, true));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("cwClosedCircleArrow"), r318_MangleUnicode(10561), new r312_xn$Capture$2Lrc8.GlyphProc(function (r373_currentGlyph) {
                        var _r373_t0, _r373_t1;
                        r373_currentGlyph.include(r318_OpenCircleArrow(r318_Arrow.Head.shape, false, true));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("cwOpenCircleArrowTriangle"), r318_MangleUnicode(11118), new r312_xn$Capture$2Lrc8.GlyphProc(function (r377_currentGlyph) {
                        var _r377_t0, _r377_t1;
                        r377_currentGlyph.include(r318_OpenCircleArrow(r318_Arrow.Head.trigShape, false, false));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("ccwOpenCircleArrowTriangle"), r318_MangleUnicode(11119), new r312_xn$Capture$2Lrc8.GlyphProc(function (r381_currentGlyph) {
                        var _r381_t0, _r381_t1;
                        r381_currentGlyph.include(r318_OpenCircleArrow(r318_Arrow.Head.trigShape, true, false));
                        return void 0;
                    }));
                    if (r315_MosaicWidthScalar === 1) _r318_t4 = (function () {
                        return r312_xn$GlyphSaveSink$2Lrc4b.save("ccCcwArrow", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r387_currentGlyph) {
                            var _r387_t0, _r387_t1;
                            r387_currentGlyph.include(r318_ShareAlikeArrow(r318_Arrow.Head.trigShape));
                            return void 0;
                        }));
                    })();
                    return _r318_t4;
                })();
                _r315_t5 = _r315_t2 = _r315_t2 + 1;
                _r315_t4 = _r315_t2 < _r315_t1;
            }
            return _r315_t5;
        })();
    });
    return void 0;
});


