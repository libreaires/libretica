"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "../../meta/aesthetics.mjs";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_DesignParameters = _r1_t9.DesignParameters;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t2 = r1_apply = function () {
    var r308_block, _r308_t4, _r308_t6;
    var _r308_t3 = this;
    var _r308_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r308_t1 = _r308_t0.length;
    var _r308_t2 = 0;
    var _r308_t5 = _r308_t2 < _r308_t1;
    while (_r308_t5) {
        _r308_t6 = (r308_block = _r308_t0[_r308_t2], r308_block(_r308_t3), _r308_t2 = _r308_t2 + 1);
        _r308_t5 = _r308_t2 < _r308_t1;
    }
    return _r308_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r312_xn$Capture_Ext$2Lrc2b) {
    var _r312_t0, _r312_t1;
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Greek-Upper-Theta", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t7, _r313_t8;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_MarkSet = _r313_t0.MarkSet;
        var r313_AS_BASE = _r313_t0.AS_BASE;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_O = _r313_t1.O;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_VJut = _r313_t1.VJut;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_RightSB = _r313_t1.RightSB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        return r313_xn$GlyphSaveSink$2Lrc4b.save("grek/Theta", 920, new r313_xn$Capture$2Lrc8.GlyphProc(function (r318_currentGlyph) {
            var r318_jutSw, r318_jut, _r318_t0, _r318_t1;
            r318_currentGlyph.include(r313_MarkSet.capital());
            var r318_xMidLeft = r313_SB + r313_HSwToV(r313_Stroke) - r313_O * 3;
            var r318_xMidRight = r313_RightSB - r313_HSwToV(r313_Stroke) + r313_O * 3;
            var r318_yBar = 0.5 * r313_CAP;
            r318_currentGlyph.include(r313_xn$referglyph$1aao("O"), r313_AS_BASE);
            r318_currentGlyph.include(r313_HBar.m(r318_xMidLeft, r318_xMidRight, r318_yBar));
            if (r313_SLAB) {
                r318_jutSw = Math.min(r313_AdviceStroke(4), 0.33 * (r318_xMidRight - r318_xMidLeft));
                r318_jut = Math.min(r313_VJut, r313_Stroke + 2 * r318_jutSw);
                r318_currentGlyph.include(r313_VBar.l(r318_xMidLeft, r318_yBar - 0.5 * r318_jut, r318_yBar + 0.5 * r318_jut, r318_jutSw));
                r318_currentGlyph.include(r313_VBar.r(r318_xMidRight, r318_yBar - 0.5 * r318_jut, r318_yBar + 0.5 * r318_jut, r318_jutSw));
            }
            return void 0;
        }));
    });
    return void 0;
});


