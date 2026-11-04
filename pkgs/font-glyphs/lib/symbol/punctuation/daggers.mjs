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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Punctuation-Daggers", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
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
        var r312_RightSB = _r312_t1.RightSB;
        var r312_Middle = _r312_t1.Middle;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_HBar = _r312_t5.HBar;
        var r312_VBar = _r312_t5.VBar;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$referglyph$1aao = _r312_t6["refer-glyph"];
        var r312_turned = _r312_t6.turned;
        r312_xn$GlyphSaveSink$2Lrc4b.save("dagger", 8224, new r312_xn$Capture$2Lrc8.GlyphProc(function (r317_currentGlyph) {
            var _r317_t0, _r317_t1;
            r317_currentGlyph.include(r312_VBar.m(r312_Middle, r312_ParenBot, r312_ParenTop));
            r317_currentGlyph.include(r312_HBar.m(r312_SB, r312_RightSB, r1_mix(r312_ParenTop, r312_ParenBot, 0.33)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("doubledagger", 8225, new r312_xn$Capture$2Lrc8.GlyphProc(function (r322_currentGlyph) {
            var _r322_t0, _r322_t1;
            r322_currentGlyph.include(r312_xn$referglyph$1aao("dagger"));
            r322_currentGlyph.include(r312_HBar.m(r312_SB, r312_RightSB, r1_mix(r312_ParenTop, r312_ParenBot, 0.67)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("leftHalfDagger", 11830, new r312_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
            var _r327_t0, _r327_t1;
            r327_currentGlyph.include(r312_VBar.m(r312_Middle, r312_ParenBot, r312_ParenTop));
            r327_currentGlyph.include(r312_HBar.m(r312_SB, r312_Middle, r1_mix(r312_ParenTop, r312_ParenBot, 0.33)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("rightHalfDagger", 11831, new r312_xn$Capture$2Lrc8.GlyphProc(function (r332_currentGlyph) {
            var _r332_t0, _r332_t1;
            r332_currentGlyph.include(r312_VBar.m(r312_Middle, r312_ParenBot, r312_ParenTop));
            r332_currentGlyph.include(r312_HBar.m(r312_Middle, r312_RightSB, r1_mix(r312_ParenTop, r312_ParenBot, 0.33)));
            return void 0;
        }));
        r312_turned("turnDagger", 11832, "dagger", r312_Middle, r312_SymbolMid);
        return r312_xn$GlyphSaveSink$2Lrc4b.save("tripleDagger", 11851, new r312_xn$Capture$2Lrc8.GlyphProc(function (r337_currentGlyph) {
            var _r337_t0, _r337_t1;
            r337_currentGlyph.include(r312_VBar.m(r312_Middle, r312_ParenBot, r312_ParenTop));
            r337_currentGlyph.include(r312_HBar.m(r312_SB, r312_RightSB, r1_mix(r312_ParenTop, r312_ParenBot, 0.25)));
            r337_currentGlyph.include(r312_HBar.m(r312_SB, r312_RightSB, r312_SymbolMid));
            r337_currentGlyph.include(r312_HBar.m(r312_SB, r312_RightSB, r1_mix(r312_ParenTop, r312_ParenBot, 0.75)));
            return void 0;
        }));
    });
    return void 0;
});


