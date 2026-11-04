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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Pictograph-Metric-Marks", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t7, _r312_t8;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_fontMetrics = _r312_t0.fontMetrics;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_UPM = _r312_t1.UPM;
        var r312_Width = _r312_t1.Width;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var r312_Descender = _r312_t1.Descender;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_ParenTop = _r312_t1.ParenTop;
        var r312_ParenBot = _r312_t1.ParenBot;
        var r312_Middle = _r312_t1.Middle;
        var r312_ShoulderFine = _r312_t1.ShoulderFine;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_corner = _r312_t2.corner;
        var r312_xn$spirooutline$1aao = _r312_t2["spiro-outline"];
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_HBar = _r312_t5.HBar;
        var r312_VBar = _r312_t5.VBar;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        r312_xn$GlyphSaveSink$2Lrc4b.save("metmark", 63647, new r312_xn$Capture$2Lrc8.GlyphProc(function (r317_currentGlyph) {
            var _r317_t0, _r317_t1;
            r317_currentGlyph.include(r312_VBar.m(r312_Middle, -r312_fontMetrics.os2.usWinDescent, r312_fontMetrics.os2.usWinAscent, r312_ShoulderFine));
            r317_currentGlyph.include(r312_HBar.m(r312_Middle, r312_Width, 0, r312_ShoulderFine));
            r317_currentGlyph.include(r312_HBar.m(r312_Middle, r312_Width, r312_CAP, r312_ShoulderFine));
            r317_currentGlyph.include(r312_HBar.m(r312_Middle, r312_Width, r312_XH, r312_ShoulderFine));
            r317_currentGlyph.include(r312_HBar.m(r312_Middle, r312_Width, r312_Descender, r312_ShoulderFine));
            r317_currentGlyph.include(r312_HBar.m(0, r312_Middle, r312_SymbolMid, r312_ShoulderFine));
            r317_currentGlyph.include(r312_HBar.m(0, r312_Middle, r312_ParenTop, r312_ShoulderFine));
            r317_currentGlyph.include(r312_HBar.m(0, r312_Middle, r312_ParenBot, r312_ShoulderFine));
            return void 0;
        }));
        var r312_MosaicTop = r312_fontMetrics.os2.sTypoAscender;
        var r312_MosaicBottom = r312_fontMetrics.os2.sTypoDescender;
        var r312_MarkerSize = r312_UPM / 12;
        var r312_MarkerBarWidth = r312_UPM / 50;
        r312_xn$GlyphSaveSink$2Lrc4b.save("boxMarkLeft", 63638, new r312_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
            var _r328_t0, _r328_t1;
            r328_currentGlyph.setWidth(0);
            r328_currentGlyph.include(r312_xn$spirooutline$1aao(r312_corner(0, r312_ParenTop), r312_corner(0, r312_ParenTop + r312_MarkerSize * 1.5), r312_corner(-r312_MarkerSize * 1.5, r312_ParenTop)));
            r328_currentGlyph.include(r312_xn$spirooutline$1aao(r312_corner(0, r312_ParenBot), r312_corner(0, r312_ParenBot - r312_MarkerSize * 1.5), r312_corner(-r312_MarkerSize * 1.5, r312_ParenBot)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("boxMarkRight", 63639, new r312_xn$Capture$2Lrc8.GlyphProc(function (r334_currentGlyph) {
            var _r334_t0, _r334_t1;
            r334_currentGlyph.setWidth(0);
            r334_currentGlyph.include(r312_xn$spirooutline$1aao(r312_corner(0, r312_ParenTop), r312_corner(0, r312_ParenTop + r312_MarkerSize * 1.5), r312_corner(+r312_MarkerSize * 1.5, r312_ParenTop)));
            r334_currentGlyph.include(r312_xn$spirooutline$1aao(r312_corner(0, r312_ParenBot), r312_corner(0, r312_ParenBot - r312_MarkerSize * 1.5), r312_corner(+r312_MarkerSize * 1.5, r312_ParenBot)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("mosaicMarkLeft", 63640, new r312_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
            var _r340_t0, _r340_t1;
            r340_currentGlyph.setWidth(0);
            r340_currentGlyph.include(r312_xn$spirooutline$1aao(r312_corner(0, r312_MosaicTop), r312_corner(0, r312_MosaicTop + r312_MarkerSize * 1.5), r312_corner(-r312_MarkerSize * 1.5, r312_MosaicTop)));
            r340_currentGlyph.include(r312_xn$spirooutline$1aao(r312_corner(0, r312_MosaicBottom), r312_corner(0, r312_MosaicBottom - r312_MarkerSize * 1.5), r312_corner(-r312_MarkerSize * 1.5, r312_MosaicBottom)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("mosaicMarkRight", 63641, new r312_xn$Capture$2Lrc8.GlyphProc(function (r346_currentGlyph) {
            var _r346_t0, _r346_t1;
            r346_currentGlyph.setWidth(0);
            r346_currentGlyph.include(r312_xn$spirooutline$1aao(r312_corner(0, r312_MosaicTop), r312_corner(0, r312_MosaicTop + r312_MarkerSize * 1.5), r312_corner(+r312_MarkerSize * 1.5, r312_MosaicTop)));
            r346_currentGlyph.include(r312_xn$spirooutline$1aao(r312_corner(0, r312_MosaicBottom), r312_corner(0, r312_MosaicBottom - r312_MarkerSize * 1.5), r312_corner(+r312_MarkerSize * 1.5, r312_MosaicBottom)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("baselineMarkUnder", 63642, new r312_xn$Capture$2Lrc8.GlyphProc(function (r352_currentGlyph) {
            var _r352_t0, _r352_t1;
            r352_currentGlyph.setWidth(0);
            r352_currentGlyph.include(r312_HBar.m(-r312_Width * 2, r312_Width * 2, 0, r312_MarkerBarWidth));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("baselineMarkLeft", 63643, new r312_xn$Capture$2Lrc8.GlyphProc(function (r357_currentGlyph) {
            var _r357_t0, _r357_t1;
            r357_currentGlyph.setWidth(0);
            r357_currentGlyph.include(r312_xn$spirooutline$1aao(r312_corner(0, 0), r312_corner(-r312_MarkerSize * 1.5, +r312_MarkerSize * 1.5), r312_corner(-r312_MarkerSize * 1.5, -r312_MarkerSize * 1.5)));
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("baselineMarkRight", 63644, new r312_xn$Capture$2Lrc8.GlyphProc(function (r362_currentGlyph) {
            var _r362_t0, _r362_t1;
            r362_currentGlyph.setWidth(0);
            r362_currentGlyph.include(r312_xn$spirooutline$1aao(r312_corner(0, 0), r312_corner(+r312_MarkerSize * 1.5, +r312_MarkerSize * 1.5), r312_corner(+r312_MarkerSize * 1.5, -r312_MarkerSize * 1.5)));
            return void 0;
        }));
    });
    return void 0;
});


