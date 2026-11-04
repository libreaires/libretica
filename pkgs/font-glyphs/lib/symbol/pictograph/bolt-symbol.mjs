"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/geometry/box";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_distP = _r1_t8.distP;
var _r1_t9 = _s0_t1;
var r1_Box = _r1_t9.Box;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Pictograph-Bold-Symbol", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t7, _r313_t8;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_SymbolMid = _r313_t1.SymbolMid;
        var r313_PictTop = _r313_t1.PictTop;
        var r313_PictBot = _r313_t1.PictBot;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_RightSB = _r313_t1.RightSB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_virt = _r313_t2.virt;
        var r313_widths = _r313_t2.widths;
        var r313_important = _r313_t2.important;
        var r313_alsoThru = _r313_t2.alsoThru;
        var r313_dispiro = _r313_t2.dispiro;
        var r313_xn$spirooutline$1aao = _r313_t2["spiro-outline"];
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        r313_xn$GlyphSaveSink$2Lrc4b.save("boltSymbol", 9889, new r313_xn$Capture$2Lrc8.GlyphProc(function (r318_currentGlyph) {
            var _r318_t0, _r318_t1;
            var r318_sw = r313_AdviceStroke(3) / 2;
            var r318_kInside = 0.5;
            var r318_kOutside = 2.5;
            var r318_l = r1_mix(r313_SB, r313_RightSB, 0.1);
            var r318_r = r1_mix(r313_RightSB, r313_SB, 0.1);
            r318_currentGlyph.include(r313_xn$spirooutline$1aao(r313_corner(r1_mix(r318_l, r318_r, 0.6), r313_PictTop), r313_corner(r318_l - r318_sw * r318_kInside, r313_SymbolMid - r318_sw), r313_corner(r318_r - r318_sw * r318_kOutside, r313_SymbolMid - r318_sw), r313_corner(r1_mix(r318_r, r318_l, 0.6), r313_PictBot), r313_corner(r318_r + r318_sw * r318_kInside, r313_SymbolMid + r318_sw), r313_corner(r318_l + r318_sw * r318_kOutside, r313_SymbolMid + r318_sw)));
            return void 0;
        }));
        return r313_xn$GlyphSaveSink$2Lrc4b.save("cautionSign", 9761, new r313_xn$Capture$2Lrc8.GlyphProc(function (r322_currentGlyph) {
            var _r322_t0, _r322_t1, _r322_t2, _r322_t3, _r322_t4, _r322_t5, _r322_t6, _r322_t7, _r322_t8, _r322_t9;
            var r322_sw = r313_Stroke;
            var r322_box = new r1_Box(r313_CAP - 0.5 * r322_sw, 0.5 * r322_sw, r313_SB, r313_RightSB);
            var r322_angleSize = 1.5 * r322_sw;
            r322_currentGlyph.include((_r322_t0 = r322_box.l, _r322_t1 = r322_box.t, _r322_t2 = r322_box.r, _r322_t3 = r322_box.yp(0.95), _r322_t4 = r322_box.l, _r322_t5 = r322_box.yp(0.05), _r322_t6 = r322_box.r, _r322_t7 = r322_box.b, r313_dispiro(r313_widths.center(), r313_flat(_r322_t0, _r322_t1), r313_xn$decor$0cao(r313_alsoThru.curl.distTillEnd(r322_angleSize, r313_important)), r313_virt(_r322_t2, _r322_t3), r313_xn$decor$0cao(r313_alsoThru.flat.distFromStart(r322_angleSize, r313_important)), r313_xn$decor$0cao(r313_alsoThru.curl.distTillEnd(r322_angleSize, r313_important)), r313_virt(_r322_t4, _r322_t5), r313_xn$decor$0cao(r313_alsoThru.flat.distFromStart(r322_angleSize, r313_important)), r313_curl(_r322_t6, _r322_t7))));
            return void 0;
        }));
    });
    return void 0;
});


