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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Arrow-Legacy", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t5, _r312_t6, _r312_t7, _r312_tag8;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_AS_BASE = _r312_t0.AS_BASE;
        var r312_ALSO_METRICS = _r312_t0.ALSO_METRICS;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_ApparentTranslate = _r312_t1.ApparentTranslate;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_Leftward = _r312_t1.Leftward;
        var r312_WideWidth1 = _r312_t1.WideWidth1;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_corner = _r312_t2.corner;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_arcvh = _r312_t2.arcvh;
        var r312_dispiro = _r312_t2.dispiro;
        var r312_xn$spirooutline$1aao = _r312_t2["spiro-outline"];
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
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
                    var r318_Rect = _r318_t0.Rect;
                    var r318_HBar = _r318_t0.HBar;
                    var r318_VBar = _r318_t0.VBar;
                    var r318_FlipAround = _r318_t0.FlipAround;
                    var r318_xn$withtransform$5sIl = _r318_t0["with-transform"];
                    var _r318_t1 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var r318_xn$referglyph$1aao = _r318_t1["refer-glyph"];
                    var _r318_t2 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Arrow-Shared"].resolve();
                    var r318_ArrowDims = _r318_t2.ArrowDims;
                    var r318_ArrowT = _r318_t2.ArrowT;
                    var r318_dims = r318_ArrowDims(r315_MosaicWidth);
                    var r318_Arrow = r318_ArrowT(r318_dims);
                    var _r318_t3 = r318_dims;
                    var r318_arrowWidth = _r318_t3.arrowWidth;
                    var r318_arrowHeight = _r318_t3.arrowHeight;
                    var r318_arrowTop = _r318_t3.arrowTop;
                    var r318_arrowBot = _r318_t3.arrowBot;
                    var r318_arrowMidX = _r318_t3.arrowMidX;
                    var r318_arrowSB = _r318_t3.arrowSB;
                    var r318_arrowRSB = _r318_t3.arrowRSB;
                    var r318_arrowSw = _r318_t3.arrowSw;
                    var r318_halfArrowSw = _r318_t3.halfArrowSw;
                    var r318_bodyWidth = Math.min(r318_arrowWidth, r318_arrowHeight * 0.6);
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("arrowUpThenNW"), r318_MangleUnicode(129200), new r312_xn$Capture$2Lrc8.GlyphProc(function (r326_currentGlyph) {
                        var _r326_t0, _r326_t1;
                        r326_currentGlyph.setWidth(r315_MosaicWidth);
                        var r326_x1 = r318_arrowMidX + r318_bodyWidth / 2;
                        var r326_y1 = r318_arrowTop - r318_bodyWidth;
                        var r326_x2 = r318_arrowMidX - r318_bodyWidth / 2;
                        var r326_y2 = r318_arrowTop + 0;
                        r326_currentGlyph.include(r318_Arrow.Head.shape(r326_x1, r326_y1, r326_x2, r326_y2));
                        r326_currentGlyph.include(r312_intersection(r318_Rect(r318_arrowTop, r318_arrowBot, 0, r326_x1), r318_Arrow.Bar.shape(r326_x1, r326_y1, r326_x2, r326_y2, r318_halfArrowSw)));
                        r326_currentGlyph.include(r312_intersection(r318_VBar.r(r326_x1, r318_arrowBot, r318_arrowTop, r318_arrowSw), r312_xn$spirooutline$1aao(r312_corner(r326_x1, r326_y1), r312_corner(r326_x2, r326_y2), r312_corner(r326_x2, r318_arrowBot), r312_corner(r326_x1, r318_arrowBot))));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("arrowRightThenCurlbSW"), r318_MangleUnicode(129201), new r312_xn$Capture$2Lrc8.GlyphProc(function (r333_currentGlyph) {
                        var _r333_t0, _r333_t1;
                        r333_currentGlyph.setWidth(r315_MosaicWidth);
                        var r333_x1 = r318_arrowMidX + r318_bodyWidth / 2;
                        var r333_y1 = r318_arrowBot + r318_bodyWidth;
                        var r333_x2 = r318_arrowMidX - r318_bodyWidth / 2;
                        var r333_y2 = r318_arrowBot + 0;
                        r333_currentGlyph.include(r318_Arrow.Head.shape(r333_x1, r333_y1, r333_x2, r333_y2));
                        r333_currentGlyph.include(r312_intersection(r318_Rect(r1_mix(r333_y1, r333_y2, 1 / 2), r318_arrowBot, 0, r333_x1), r318_Arrow.Bar.shape(r333_x1, r333_y1, r333_x2, r333_y2, r318_halfArrowSw)));
                        r333_currentGlyph.include(r312_intersection(r318_Rect(r1_mix(r333_y1, r333_y2, 1), r318_arrowTop, r333_x2, r333_x1), r312_dispiro(r312_widths(r318_halfArrowSw, r318_halfArrowSw), r312_flat(r333_x2, r333_y2), r312_curl(r1_mix(r333_x2, r333_x1, 2 / 3), r1_mix(r333_y2, r333_y1, 2 / 3)), r312_g4.up.mid(r333_x1 - r312_HSwToV(r318_halfArrowSw), r1_mix(r333_y2, r318_arrowTop - r318_halfArrowSw, 0.75) - r318_halfArrowSw * 0.6), r312_arcvh(), r312_flat(r1_mix(r333_x2, r333_x1 - r312_HSwToV(r318_halfArrowSw), 0.5), r318_arrowTop - r318_halfArrowSw), r312_curl(r333_x2, r318_arrowTop - r318_halfArrowSw, r312_heading(r312_Leftward)))));
                        return void 0;
                    }));
                    var r318_enclosedSize = r318_bodyWidth * 1.2 + r318_arrowSw;
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni21B8"), r318_MangleUnicode(8632), new r312_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
                        var _r340_t0, _r340_t1;
                        r340_currentGlyph.setWidth(r315_MosaicWidth);
                        var r340_x1 = r318_arrowMidX + r318_bodyWidth / 2;
                        var r340_x2 = r318_arrowMidX - r318_bodyWidth / 2;
                        r340_currentGlyph.include(r318_HBar.t(r340_x2, r340_x1, r312_SymbolMid + r318_enclosedSize / 2, r318_arrowSw));
                        r340_currentGlyph.include(r318_xn$withtransform$5sIl(r312_ApparentTranslate(0, (r318_bodyWidth - r318_enclosedSize) / 2), r318_Arrow.shape(r340_x1, r312_SymbolMid - r318_bodyWidth / 2, r340_x2, r312_SymbolMid + r318_bodyWidth / 2)));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni21F1"), r318_MangleUnicode(8689), new r312_xn$Capture$2Lrc8.GlyphProc(function (r346_currentGlyph) {
                        var _r346_t0, _r346_t1;
                        r346_currentGlyph.setWidth(r315_MosaicWidth);
                        var r346_x1 = r318_arrowMidX + r318_bodyWidth / 2;
                        var r346_x2 = r318_arrowMidX - r318_bodyWidth / 2;
                        var r346_y1 = r312_SymbolMid - r318_bodyWidth / 2;
                        var r346_y2 = r312_SymbolMid + r318_bodyWidth / 2;
                        r346_currentGlyph.include(r318_xn$withtransform$5sIl(r312_ApparentTranslate((r318_enclosedSize - r318_bodyWidth) / 2, (r318_bodyWidth - r318_enclosedSize) / 2), r318_Arrow.shape(r346_x1, r346_y1, r346_x2, r346_y2)));
                        r346_currentGlyph.include(r318_HBar.t(r318_arrowMidX - r318_enclosedSize / 2, r318_arrowMidX + r318_enclosedSize / 2, r312_SymbolMid + r318_enclosedSize / 2, r318_arrowSw));
                        r346_currentGlyph.include(r318_VBar.l(r318_arrowMidX - r318_enclosedSize / 2, r312_SymbolMid - r318_enclosedSize / 2, r312_SymbolMid + r318_enclosedSize / 2, r318_arrowSw));
                        return void 0;
                    }));
                    return r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni21F2"), r318_MangleUnicode(8690), new r312_xn$Capture$2Lrc8.GlyphProc(function (r353_currentGlyph) {
                        var _r353_t0, _r353_t1;
                        r353_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("uni21F1")), r312_AS_BASE, r312_ALSO_METRICS);
                        r353_currentGlyph.include(r318_FlipAround(r318_arrowMidX, r312_SymbolMid));
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


