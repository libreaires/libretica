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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Punctuation-Section", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t7, _r312_t8;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_SB = _r312_t1.SB;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_ParenTop = _r312_t1.ParenTop;
        var r312_ParenBot = _r312_t1.ParenBot;
        var r312_Leftward = _r312_t1.Leftward;
        var r312_O = _r312_t1.O;
        var r312_Hook = _r312_t1.Hook;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_QuarterStroke = _r312_t1.QuarterStroke;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_Middle = _r312_t1.Middle;
        var r312_ArchDepthA = _r312_t1.ArchDepthA;
        var r312_TINY = _r312_t1.TINY;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_corner = _r312_t2.corner;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_alsoThru = _r312_t2.alsoThru;
        var r312_arcvh = _r312_t2.arcvh;
        var r312_dispiro = _r312_t2.dispiro;
        var r312_xn$spirooutline$1aao = _r312_t2["spiro-outline"];
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var r312_intersection = _r312_t4.intersection;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_MaskAbove = _r312_t5.MaskAbove;
        var r312_HookStart = _r312_t5.HookStart;
        var r312_Arch = _r312_t5.Arch;
        var r312_FlipAround = _r312_t5.FlipAround;
        var r312_xn$withtransform$5sIl = _r312_t5["with-transform"];
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        return r312_xn$GlyphSaveSink$2Lrc4b.save("section", 167, new r312_xn$Capture$2Lrc8.GlyphProc(function (r317_currentGlyph) {
            var _r317_t0, _r317_t1;
            var r317_top = r312_ParenTop;
            var r317_bot = r312_ParenBot;
            var r317_ada = r312_ArchDepthA;
            var r317_s = function (r318_sink, r318_offset) {
                var _r318_t0, _r318_t1;
                var r318_sBot = r1_mix(r317_bot, r317_top, 0.32) - r312_QuarterStroke;
                return r318_sink(r312_widths.lhs(), r312_g4(r312_RightSB - r318_offset, r317_top - r312_Hook), r312_HookStart(r317_top - r318_offset), r312_g4(r312_SB + r318_offset, r317_top - r317_ada), r312_alsoThru(0.5, 0.5, r312_widths.center(r312_Stroke)), r312_g4(r312_RightSB - r318_offset, r318_sBot + r317_ada, r312_widths.rhs()), r312_arcvh(), r312_flat(r312_Arch["adjust-x"].bot(r312_Middle), r318_sBot + r318_offset + r312_O), (r318_sink === r312_dispiro ? r312_curl : r312_corner)(0, r318_sBot + r318_offset + r312_O, r312_heading(r312_Leftward)), r318_sink === r312_dispiro ? [] : [r312_corner(0, r1_mix(r317_bot, r317_top, 2)), r312_corner(r312_Width, r1_mix(r317_bot, r317_top, 2)), r312_corner(r312_Width, r317_top - r312_Hook - r312_TINY), r312_corner(r312_RightSB, r317_top - r312_Hook - r312_TINY)]);
            };
            var r317_halfShape = function () {
                var _r319_t0, _r319_t1;
                return r312_intersection(r317_s(r312_dispiro, 0), r312_union(r312_MaskAbove(r312_SymbolMid), r312_xn$withtransform$5sIl(r312_FlipAround(r312_Middle, r312_SymbolMid), r317_s(r312_xn$spirooutline$1aao, 0.1))));
            };
            r317_currentGlyph.include(r312_union(r317_halfShape(), r312_xn$withtransform$5sIl(r312_FlipAround(r312_Middle, r312_SymbolMid), r317_halfShape())));
            return void 0;
        }));
    });
    return void 0;
});


