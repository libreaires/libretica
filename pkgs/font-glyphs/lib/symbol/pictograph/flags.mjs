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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Pictograph-Flags", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t7, _r312_t8;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_SB = _r312_t1.SB;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_ParenTop = _r312_t1.ParenTop;
        var r312_ParenBot = _r312_t1.ParenBot;
        var r312_PictTop = _r312_t1.PictTop;
        var r312_PictBot = _r312_t1.PictBot;
        var r312_Translate = _r312_t1.Translate;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_Rightward = _r312_t1.Rightward;
        var r312_Leftward = _r312_t1.Leftward;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_Middle = _r312_t1.Middle;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_corner = _r312_t2.corner;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_close = _r312_t2.close;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_alsoThru = _r312_t2.alsoThru;
        var r312_dispiro = _r312_t2.dispiro;
        var r312_xn$spirooutline$1aao = _r312_t2["spiro-outline"];
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_VBar = _r312_t5.VBar;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_sw = r312_AdviceStroke(5);
        var r312_flagDown = 0.07 * (r312_ParenTop - r312_ParenBot);
        var r312_delta = 1;
        var r312_curliness = 0.85;
        var r312_FlagBar = function () {
            var _r315_t0, _r315_t1;
            return r312_VBar.m(r312_SB, r312_PictBot, r312_PictTop, r312_sw);
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("blackflag", 9873, new r312_xn$Capture$2Lrc8.GlyphProc(function (r318_currentGlyph) {
            var _r318_t0, _r318_t1;
            r318_currentGlyph.include(r312_xn$spirooutline$1aao(r312_corner(r312_SB, r312_PictTop), r312_curl(r312_SB + r312_delta, r312_PictTop), r312_alsoThru(0.5, 1 - r312_curliness), r312_g4(r312_Middle, r312_PictTop - r312_flagDown / 2), r312_alsoThru(0.5, r312_curliness), r312_flat(r312_RightSB - r312_delta, r312_PictTop - r312_flagDown), r312_corner(r312_RightSB, r312_PictTop - r312_flagDown), r312_corner(r312_RightSB, r312_SymbolMid - r312_flagDown), r312_curl(r312_RightSB - r312_delta, r312_SymbolMid - r312_flagDown), r312_alsoThru(0.5, 1 - r312_curliness), r312_g4(r312_Middle, r312_SymbolMid - r312_flagDown / 2), r312_alsoThru(0.5, r312_curliness), r312_flat(r312_SB + r312_delta, r312_SymbolMid), r312_corner(r312_SB, r312_SymbolMid), r312_close()));
            r318_currentGlyph.include(r312_Translate(r312_HSwToV(0.5 * r312_sw), 0));
            r318_currentGlyph.include(r312_FlagBar());
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("whiteflag", 9872, new r312_xn$Capture$2Lrc8.GlyphProc(function (r324_currentGlyph) {
            var _r324_t0, _r324_t1;
            r324_currentGlyph.include(r312_VBar.r(r312_RightSB, r312_SymbolMid - r312_flagDown, r312_PictTop - r312_flagDown, r312_sw));
            r324_currentGlyph.include(r312_dispiro(r312_widths.rhs(r312_sw), r312_flat(r312_SB, r312_PictTop, r312_heading(r312_Rightward)), r312_curl(r312_SB + r312_delta, r312_PictTop, r312_heading(r312_Rightward)), r312_alsoThru(0.5, 1 - r312_curliness), r312_g4(r312_Middle, r312_PictTop - r312_flagDown / 2), r312_alsoThru(0.5, r312_curliness), r312_flat(r312_RightSB - r312_delta, r312_PictTop - r312_flagDown, r312_heading(r312_Rightward)), r312_curl(r312_RightSB, r312_PictTop - r312_flagDown, r312_heading(r312_Rightward))));
            r324_currentGlyph.include(r312_dispiro(r312_widths.rhs(r312_sw), r312_flat(r312_RightSB, r312_SymbolMid - r312_sw / 2 - r312_flagDown, r312_heading(r312_Leftward)), r312_curl(r312_RightSB - r312_delta, r312_SymbolMid - r312_sw / 2 - r312_flagDown, r312_heading(r312_Leftward)), r312_alsoThru(0.5, 1 - r312_curliness), r312_g4(r312_Middle, r312_SymbolMid - r312_sw / 2 - r312_flagDown / 2), r312_alsoThru(0.5, r312_curliness), r312_flat(r312_SB + r312_delta, r312_SymbolMid - r312_sw / 2, r312_heading(r312_Leftward)), r312_curl(r312_SB, r312_SymbolMid - r312_sw / 2, r312_heading(r312_Leftward))));
            r324_currentGlyph.include(r312_Translate(r312_HSwToV(0.5 * r312_sw), 0));
            r324_currentGlyph.include(r312_FlagBar());
            return void 0;
        }));
    });
    return void 0;
});


