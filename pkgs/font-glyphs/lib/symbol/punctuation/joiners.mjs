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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Punctuation-Joiners", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t5, _r312_t6, _r312_t7, _r312_tag8;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_CAP = _r312_t1.CAP;
        var r312_Descender = _r312_t1.Descender;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_corner = _r312_t2.corner;
        var r312_widths = _r312_t2.widths;
        var r312_dispiro = _r312_t2.dispiro;
        var r312_xn$spirooutline$1aao = _r312_t2["spiro-outline"];
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_difference = _r312_t4.difference;
        return (function () {
            var _r314_t0 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
            var r314_VBar = _r314_t0.VBar;
            var r314_fine = r312_AdviceStroke(6);
            var r314_size = r312_Width * 0.25;
            r312_xn$GlyphSaveSink$2Lrc4b.save("zwj", 8205, new r312_xn$Capture$2Lrc8.GlyphProc(function (r318_currentGlyph) {
                var _r318_t0, _r318_t1;
                r318_currentGlyph.setWidth(0);
                r318_currentGlyph.include(r314_VBar.m(0, r312_Descender, r312_CAP, r314_fine));
                r318_currentGlyph.include(r312_dispiro(r312_widths.center(r314_fine), r312_corner(-r314_size, r312_CAP), r312_corner(+r314_size, r312_CAP + 2 * r314_size)));
                r318_currentGlyph.include(r312_dispiro(r312_widths.center(r314_fine), r312_corner(+r314_size, r312_CAP), r312_corner(-r314_size, r312_CAP + 2 * r314_size)));
                return void 0;
            }));
            return r312_xn$GlyphSaveSink$2Lrc4b.save("zwnj", 8204, new r312_xn$Capture$2Lrc8.GlyphProc(function (r325_currentGlyph) {
                var _r325_t0, _r325_t1;
                r325_currentGlyph.setWidth(0);
                r325_currentGlyph.include(r314_VBar.m(0, r312_Descender, r312_CAP, r314_fine));
                var r325_outerSize = r314_size + r314_fine * Math.SQRT1_2;
                var r325_innerSize = r314_size - r314_fine * Math.SQRT1_2;
                r325_currentGlyph.include(r312_difference(r312_xn$spirooutline$1aao(r312_widths.center(r314_fine), r312_corner(-r325_outerSize, r312_CAP + r314_size), r312_corner(0, r312_CAP + r314_size - r325_outerSize), r312_corner(+r325_outerSize, r312_CAP + r314_size), r312_corner(0, r312_CAP + r314_size + r325_outerSize)), r312_xn$spirooutline$1aao(r312_widths.center(r314_fine), r312_corner(-r325_innerSize, r312_CAP + r314_size), r312_corner(0, r312_CAP + r314_size - r325_innerSize), r312_corner(+r325_innerSize, r312_CAP + r314_size), r312_corner(0, r312_CAP + r314_size + r325_innerSize))));
                return void 0;
            }));
        })();
    });
    return void 0;
});


