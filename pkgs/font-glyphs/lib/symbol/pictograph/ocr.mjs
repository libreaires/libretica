"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/geometry/transform";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Transform = _r1_t9.Transform;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Pictograph-OCR", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t7, _r313_t8;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_XH = _r313_t1.XH;
        var r313_SymbolMid = _r313_t1.SymbolMid;
        var r313_OperTop = _r313_t1.OperTop;
        var r313_OperBot = _r313_t1.OperBot;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_xn$withknockout$5sIl = _r313_t4["with-knockout"];
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_turned = _r313_t6.turned;
        r313_xn$GlyphSaveSink$2Lrc4b.save("ockHook", 9280, new r313_xn$Capture$2Lrc8.GlyphProc(function (r318_currentGlyph) {
            var _r318_t0, _r318_t1;
            var r318_df = r318_currentGlyph.include(r313_DivFrame(1));
            var r318_sw = r318_df.adviceStroke(3);
            r318_currentGlyph.include(r313_VBar.l(r318_df.leftSB, r313_OperBot, r313_SymbolMid, r318_sw));
            r318_currentGlyph.include(r313_VBar.m(r318_df.middle, r313_OperBot, r313_OperTop, r318_sw));
            r318_currentGlyph.include(r313_VBar.r(r318_df.rightSB, r313_SymbolMid, r313_OperTop, r318_sw));
            r318_currentGlyph.include(r313_HBar.b(r318_df.leftSB, r318_df.middle, r313_OperBot, r318_sw));
            r318_currentGlyph.include(r313_HBar.t(r318_df.middle, r318_df.rightSB, r313_OperTop, r318_sw));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("ocrChair", 9281, new r313_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
            var _r327_t0, _r327_t1;
            var r327_df = r327_currentGlyph.include(r313_DivFrame(1));
            var r327_sw = r327_df.adviceStroke(3);
            r327_currentGlyph.include(r313_VBar.l(r327_df.leftSB, r313_OperBot, r313_SymbolMid, r327_sw));
            r327_currentGlyph.include(r313_VBar.r(r327_df.rightSB, r313_OperBot, r313_OperTop, r327_sw));
            r327_currentGlyph.include(r313_HBar.m(r327_df.leftSB, r327_df.rightSB, r313_SymbolMid, r327_sw));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("ocrFork", 9282, new r313_xn$Capture$2Lrc8.GlyphProc(function (r334_currentGlyph) {
            var _r334_t0, _r334_t1;
            var r334_df = r334_currentGlyph.include(r313_DivFrame(1));
            var r334_sw = r334_df.adviceStroke(3);
            r334_currentGlyph.include(r313_VBar.l(r334_df.leftSB, r313_SymbolMid, r313_OperTop, r334_sw));
            r334_currentGlyph.include(r313_VBar.r(r334_df.rightSB, r313_SymbolMid, r313_OperTop, r334_sw));
            r334_currentGlyph.include(r313_VBar.m(r334_df.middle, r313_OperBot, r313_SymbolMid, r334_sw));
            r334_currentGlyph.include(r313_HBar.m(r334_df.leftSB, r334_df.rightSB, r313_SymbolMid, r334_sw));
            return void 0;
        }));
        r313_turned("ocrInvertedFork", 9283, "ocrFork", r313_DivFrame(1).middle, r313_SymbolMid);
        r313_xn$GlyphSaveSink$2Lrc4b.save("ocrBeltBuckle", 9284, new r313_xn$Capture$2Lrc8.GlyphProc(function (r342_currentGlyph) {
            var _r342_t0, _r342_t1;
            var r342_df = r342_currentGlyph.include(r313_DivFrame(1));
            var r342_sw = r342_df.adviceStroke(3);
            var r342_gap = Math.max(r313_XH / 4, r342_df.adviceStroke2(6, 6, r313_XH));
            r342_currentGlyph.include(r313_HBar.t(r342_df.leftSB, r342_df.rightSB, r313_OperTop, r342_sw));
            r342_currentGlyph.include(r313_HBar.b(r342_df.leftSB, r342_df.rightSB, r313_OperBot, r342_sw));
            r342_currentGlyph.include(r313_VBar.m(r342_df.middle, r313_OperBot, r313_OperTop, r342_sw));
            r342_currentGlyph.include(r313_xn$withknockout$5sIl(r313_HBar.m(r313_OperBot, r342_df.width, r313_SymbolMid, r342_gap), r313_VBar.l(r342_df.leftSB, r313_OperBot, r313_OperTop, r342_sw), r313_VBar.r(r342_df.rightSB, r313_OperBot, r313_OperTop, r342_sw)));
            return void 0;
        }));
        return r313_xn$GlyphSaveSink$2Lrc4b.save("ocrBowTie", 9285, new r313_xn$Capture$2Lrc8.GlyphProc(function (r350_currentGlyph) {
            var _r350_t0, _r350_t1;
            var r350_df = r350_currentGlyph.include(r313_DivFrame(1));
            var r350_sw = r350_df.adviceStroke2(4, 6, r313_OperTop - r313_OperBot);
            var r350_y0 = r1_mix(r313_OperBot, r313_OperTop, 0.35);
            var r350_y1 = r1_mix(r313_OperBot, r313_OperTop, 0.65);
            r350_currentGlyph.include(r313_VBar.l(r350_df.leftSB, r350_y0, r350_y1, r350_sw));
            r350_currentGlyph.include(r313_VBar.r(r350_df.rightSB, r350_y0, r350_y1, r350_sw));
            r350_currentGlyph.include(r313_dispiro(r313_flat(r350_df.leftSB, r350_y0, r313_widths.rhs(r350_sw)), r313_curl(r350_df.rightSB, r350_y1, r313_widths.lhs(r350_sw))));
            r350_currentGlyph.include(r313_dispiro(r313_flat(r350_df.leftSB, r350_y1, r313_widths.lhs(r350_sw)), r313_curl(r350_df.rightSB, r350_y0, r313_widths.rhs(r350_sw))));
            return void 0;
        }));
    });
    return void 0;
});


