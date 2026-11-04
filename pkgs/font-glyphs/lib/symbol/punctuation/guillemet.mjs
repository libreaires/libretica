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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Punctuation-Guillemet", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
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
        var r312_Translate = _r312_t1.Translate;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_Middle = _r312_t1.Middle;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_widths = _r312_t2.widths;
        var r312_quadControls = _r312_t2.quadControls;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_intersection = _r312_t4.intersection;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_MaskAboveLine = _r312_t5.MaskAboveLine;
        var r312_MaskBelowLine = _r312_t5.MaskBelowLine;
        var r312_VBar = _r312_t5.VBar;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$referglyph$1aao = _r312_t6["refer-glyph"];
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var r312_xn$deriveglyphs$7Hrq = _r312_t6["derive-glyphs"];
        var r312_turned = _r312_t6.turned;
        var r312_guilTop = r1_mix(r312_SymbolMid, r312_ParenTop, 0.5);
        var r312_guilBot = r1_mix(r312_SymbolMid, r312_ParenBot, 0.5);
        var r312_extension = 0.55;
        var r312_guilLeft = r1_mix(r312_Middle, r312_SB, r312_extension);
        var r312_guilRight = r1_mix(r312_Middle, r312_RightSB, r312_extension);
        r312_xn$GlyphSaveSink$2Lrc4b.save("singleGuillemetLeft.straight", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r317_currentGlyph) {
            var _r317_t0, _r317_t1;
            var r317_extension = 0.55;
            var r317_sw = r312_AdviceStroke(3);
            var r317_fine = r312_AdviceStroke(4);
            r317_currentGlyph.include(r312_intersection(r312_MaskAboveLine(r312_guilLeft, r312_SymbolMid, r312_guilRight, r1_mix(r312_SymbolMid, r312_guilBot, 0.5), 2), r312_dispiro(r312_flat(r312_guilLeft, r312_SymbolMid, r312_widths.rhs(r317_sw)), r312_curl(r312_guilRight, r312_guilTop, r312_widths.center(r317_fine)))));
            r317_currentGlyph.include(r312_intersection(r312_MaskBelowLine(r312_guilLeft, r312_SymbolMid, r312_guilRight, r1_mix(r312_SymbolMid, r312_guilTop, 0.5), 2), r312_dispiro(r312_flat(r312_guilLeft, r312_SymbolMid, r312_widths.lhs(r317_sw)), r312_curl(r312_guilRight, r312_guilBot, r312_widths.center(r317_fine)))));
            r317_currentGlyph.include(r312_Translate(-(r312_RightSB - r312_SB) * 0.05, 0));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("singleGuillemetLeft.curly", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r323_currentGlyph) {
            var _r323_t0, _r323_t1;
            var r323_extension = 0.55;
            var r323_sw = r312_AdviceStroke(3);
            var r323_fine = r312_AdviceStroke(4);
            r323_currentGlyph.include(r312_intersection(r312_MaskAboveLine(r312_guilLeft, r312_SymbolMid, r312_guilRight, r1_mix(r312_SymbolMid, r312_guilBot, 0.5), 2), r312_dispiro(r312_g4(r312_guilLeft, r312_SymbolMid + r323_sw * 0.25, r312_widths.rhs(r323_sw)), r312_quadControls(0.6, 0.3), r312_g4(r312_guilRight, r312_guilTop, r312_widths.center(r323_fine)))));
            r323_currentGlyph.include(r312_intersection(r312_MaskBelowLine(r312_guilLeft, r312_SymbolMid, r312_guilRight, r1_mix(r312_SymbolMid, r312_guilTop, 0.5), 2), r312_dispiro(r312_g4(r312_guilLeft, r312_SymbolMid - r323_sw * 0.25, r312_widths.lhs(r323_sw)), r312_quadControls(0.6, 0.3), r312_g4(r312_guilRight, r312_guilBot, r312_widths.center(r323_fine)))));
            r323_currentGlyph.include(r312_VBar.l(r312_guilLeft, r312_SymbolMid - r323_sw * 0.25, r312_SymbolMid + r323_sw * 0.25, r323_sw));
            r323_currentGlyph.include(r312_Translate(-(r312_RightSB - r312_SB) * 0.05, 0));
            return void 0;
        }));
        r312_xn$selectvariant$7Hrq("singleGuillemetLeft", 8249, new r312_xn$NamedParameterPair$2Lrc9b("follow", "guillemet"));
        r312_xn$deriveglyphs$7Hrq("guillemetLeft", 171, "singleGuillemetLeft", function (r329_src, r329_sel) {
            var _r329_t0, _r329_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
                var _r331_t0, _r331_t1;
                r331_currentGlyph.include(r312_xn$referglyph$1aao(r329_src));
                r331_currentGlyph.include(r312_Translate((r312_RightSB - r312_SB) * 0.5, 0));
                r331_currentGlyph.include(r312_xn$referglyph$1aao(r329_src));
                r331_currentGlyph.include(r312_Translate(-(r312_RightSB - r312_SB) * 0.25, 0));
                return void 0;
            });
        });
        r312_turned("singleGuillemetRight", 8250, "singleGuillemetLeft", r312_Middle, r312_SymbolMid);
        return r312_turned("guillemetRight", 187, "guillemetLeft", r312_Middle, r312_SymbolMid);
    });
    return void 0;
});


