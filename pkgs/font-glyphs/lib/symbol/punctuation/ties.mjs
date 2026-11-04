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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Punctuation-Ties", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t7, _r312_t8;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_SB = _r312_t1.SB;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var r312_Descender = _r312_t1.Descender;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_Rightward = _r312_t1.Rightward;
        var r312_OX = _r312_t1.OX;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_Middle = _r312_t1.Middle;
        var r312_OperatorStroke = _r312_t1.OperatorStroke;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_quadControls = _r312_t2.quadControls;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_TieShape = function (r315_y, r315_k) {
            var _r315_t0, _r315_t1;
            return r312_dispiro(r312_widths[r315_k > 0 ? "rhs" : "lhs"](r312_OperatorStroke), r312_g4(r312_SB + r312_OX, r315_y), r312_quadControls(0.5, 1), r312_g4.right.mid(r312_Middle, r315_y - r315_k * r312_Descender / 3, r312_heading(r312_Rightward)), r312_quadControls(0.5, 0), r312_g4(r312_RightSB - r312_OX, r315_y));
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("overTie", 8256, r312_TieShape(r312_CAP, 1));
        r312_xn$GlyphSaveSink$2Lrc4b.save("underTie", 8255, r312_TieShape(0, -1));
        r312_xn$GlyphSaveSink$2Lrc4b.save("overAndUnderTie", 8272, r312_union(r312_TieShape(r312_CAP, 1), r312_TieShape(0, -1)));
        r312_xn$GlyphSaveSink$2Lrc4b.save("invertedUnderTie", 8276, r312_TieShape(0, 1));
        r312_xn$GlyphSaveSink$2Lrc4b.save("symbolMidTie", null, r312_TieShape(-r312_Descender / 3, 2));
        r312_xn$GlyphSaveSink$2Lrc4b.save("frown", 8994, r312_TieShape(r312_SymbolMid + r312_Descender / 3 + r312_OperatorStroke / 4, 2));
        r312_xn$GlyphSaveSink$2Lrc4b.save("smile", 8995, r312_TieShape(r312_SymbolMid - r312_Descender / 3 - r312_OperatorStroke / 4, -2));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("kali/cwi", 43310, r312_TieShape(r312_XH / 2 + r312_Descender / 3 + r312_OperatorStroke / 4, 2));
    });
    return void 0;
});


