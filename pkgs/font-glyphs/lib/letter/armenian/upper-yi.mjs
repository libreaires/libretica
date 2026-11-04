"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_DependentSelector = _r1_t9.DependentSelector;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Armenian-Upper-Yi", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t9, _r313_t10, _r313_t11, _r313_tag12;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_CAP = _r313_t1.CAP;
        var r313_O = _r313_t1.O;
        var r313_Hook = _r313_t1.Hook;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HBarPos = _r313_t1.HBarPos;
        var r313_VJutStroke = _r313_t1.VJutStroke;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_ArchDepthA = _r313_t1.ArchDepthA;
        var r313_ArchDepthB = _r313_t1.ArchDepthB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_VSerif = _r313_t5.VSerif;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Metrics"].resolve();
        var r313_EFVJutLength = _r313_t7.EFVJutLength;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Cyrillic-Ze"].resolve();
        var r313_CyrZe = _r313_t8.CyrZe;
        return (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/Yi", 1349, new r313_xn$Capture$2Lrc8.GlyphProc(function (r322_currentGlyph) {
                var r322_stroke, r322_midx, r322_midy, r322_jutTop, r322_jutBot, r322_jutMid, _r322_t0, _r322_t1, _r322_t2, _r322_t3;
                var r322_df = r322_currentGlyph.include(r313_DivFrame(1));
                r322_currentGlyph.include(r322_df.markSet.capital());
                var r322_ze = r313_CyrZe(0, 0, r313_CAP, 0, new r313_xn$NamedParameterPair$2Lrc9b("left", r322_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r322_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("blend", 1 + 2 * r313_O / (r322_df.rightSB - r322_df.leftSB)), new r313_xn$NamedParameterPair$2Lrc9b("hook", r313_Hook), new r313_xn$NamedParameterPair$2Lrc9b("barPos", r313_HBarPos), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_ArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_ArchDepthB));
                r322_currentGlyph.include(r322_ze.Shape());
                if (r313_SLAB) {
                    _r322_t0 = r322_ze.Dim();
                    r322_stroke = _r322_t0.stroke;
                    r322_midx = _r322_t0.midx;
                    r322_midy = _r322_t0.midy;
                    _r322_t1 = r313_EFVJutLength(r313_CAP, 0, r313_HBarPos, r322_stroke, r313_Hook, r313_Hook);
                    r322_jutTop = _r322_t1[0];
                    r322_jutBot = _r322_t1[1];
                    r322_jutMid = _r322_t1[2];
                    r322_currentGlyph.include(r313_VSerif.ml(r322_midx, r322_midy, r322_jutMid, r313_VJutStroke * (r322_stroke / r313_Stroke)));
                }
                return void 0;
            }));
        })();
    });
    return void 0;
});


