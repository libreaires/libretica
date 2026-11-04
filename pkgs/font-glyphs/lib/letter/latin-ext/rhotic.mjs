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
var r1_IsSuperscript = _r1_t9.IsSuperscript;
var r1_IsSubscript = _r1_t9.IsSubscript;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Rhotic", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t8, _r313_t9;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_AS_BASE = _r313_t0.AS_BASE;
        var r313_ALSO_METRICS = _r313_t0.ALSO_METRICS;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Descender = _r313_t1.Descender;
        var r313_Scale = _r313_t1.Scale;
        var r313_Translate = _r313_t1.Translate;
        var r313_ApparentTranslate = _r313_t1.ApparentTranslate;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_AccentStackOffset = _r313_t1.AccentStackOffset;
        var r313_Middle = _r313_t1.Middle;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_Ungizmo = _r313_t5.Ungizmo;
        var r313_Regizmo = _r313_t5.Regizmo;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_RhoticHookShape = _r313_t7.RhoticHookShape;
        r313_xn$GlyphSaveSink$2Lrc4b.save("rhoticHook", 734, new r313_xn$Capture$2Lrc8.GlyphProc(function (r319_currentGlyph) {
            var _r319_t0, _r319_t1;
            r319_currentGlyph.include(r313_RhoticHookShape(-r313_HSwToV(r313_Stroke), r313_Width, r313_XH / 2, r313_XH * 0.3, r313_Stroke, true));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("rhoticHook/sup", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r323_currentGlyph) {
            var _r323_t0, _r323_t1;
            var r323_sw = r313_AdviceStroke(3.5) / 0.7;
            r323_currentGlyph.include(r313_RhoticHookShape(-r313_HSwToV(r313_Stroke) - 3 * r313_SB, r313_Width, r313_XH / 2, r313_XH * 0.3, r323_sw, true));
            r323_currentGlyph.include(r313_Ungizmo());
            r323_currentGlyph.include(r313_Translate(-r313_Middle, -r313_CAP));
            r323_currentGlyph.include(r313_Scale(0.7));
            r323_currentGlyph.include(r313_Translate(r313_Middle, r313_CAP + r313_AccentStackOffset / 2));
            r323_currentGlyph.include(r313_Regizmo());
            r1_IsSuperscript.set(r323_currentGlyph);
            return void 0;
        }));
        return r313_xn$GlyphSaveSink$2Lrc4b.save("rhoticHook/sub", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r332_currentGlyph) {
            var _r332_t0, _r332_t1;
            r332_currentGlyph.include(r313_xn$referglyph$1aao("rhoticHook/sup"), r313_AS_BASE, r313_ALSO_METRICS);
            r332_currentGlyph.include(r313_ApparentTranslate(0, r313_Descender / 2 - (r313_CAP + r313_AccentStackOffset / 2) + 0.7 * r313_CAP));
            r1_IsSubscript.set(r332_currentGlyph);
            return void 0;
        }));
    });
    return void 0;
});


