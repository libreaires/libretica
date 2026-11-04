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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Greek-Upper-Xi", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t8, _r313_t9;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_MarkSet = _r313_t0.MarkSet;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_OX = _r313_t1.OX;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_RightSB = _r313_t1.RightSB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_VSerif = _r313_t5.VSerif;
        var r313_HBar = _r313_t5.HBar;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Metrics"].resolve();
        var r313_EFVJutLength = _r313_t7.EFVJutLength;
        var r313_EFMidBarPosY = _r313_t7.EFMidBarPosY;
        return r313_xn$GlyphSaveSink$2Lrc4b.save("grek/Xi", 926, new r313_xn$Capture$2Lrc8.GlyphProc(function (r319_currentGlyph) {
            var r319_jutTop, r319_jutBot, r319_jutMid, _r319_t0, _r319_t1, _r319_t2;
            r319_currentGlyph.include(r313_MarkSet.capital());
            var r319_xMidLeft = r1_mix(r313_SB, r313_RightSB, 0.125);
            var r319_xMidRight = r1_mix(r313_RightSB, r313_SB, 0.125);
            var r319_yBar = r313_EFMidBarPosY(r313_CAP, 0);
            r319_currentGlyph.include(r313_HBar.t(r313_SB + r313_OX, r313_RightSB - r313_OX, r313_CAP));
            r319_currentGlyph.include(r313_HBar.b(r313_SB + r313_OX, r313_RightSB - r313_OX, 0));
            r319_currentGlyph.include(r313_HBar.m(r319_xMidLeft, r319_xMidRight, r319_yBar));
            if (r313_SLAB) {
                _r319_t0 = r313_EFVJutLength(r313_CAP, 0);
                r319_jutTop = _r319_t0[0];
                r319_jutBot = _r319_t0[1];
                r319_jutMid = _r319_t0[2];
                r319_currentGlyph.include(r313_VSerif.dl(r313_SB + r313_OX, r313_CAP, r319_jutTop));
                r319_currentGlyph.include(r313_VSerif.dr(r313_RightSB - r313_OX, r313_CAP, r319_jutTop));
                r319_currentGlyph.include(r313_VSerif.ul(r313_SB + r313_OX, 0, r319_jutBot));
                r319_currentGlyph.include(r313_VSerif.ur(r313_RightSB - r313_OX, 0, r319_jutBot));
                r319_currentGlyph.include(r313_VSerif.ml(r319_xMidLeft, r319_yBar, r319_jutMid));
                r319_currentGlyph.include(r313_VSerif.mr(r319_xMidRight, r319_yBar, r319_jutMid));
            }
            return void 0;
        }));
    });
    return void 0;
});


