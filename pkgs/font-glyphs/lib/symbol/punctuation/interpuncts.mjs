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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Punctuation-Interpuncts", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var r312_suffix, r312_DrawAt, r312_kDotRadius, r312_overshoot, _r312_t9, _r312_t10, _r312_t11, _r312_t12, _r312_tag13;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_PeriodRadius = _r312_t1.PeriodRadius;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_DotVariants = _r312_t5.DotVariants;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var r312_alias = _r312_t6.alias;
        r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Punctuation-Small"].resolve();
        var _r312_t7 = Object.entries(r312_DotVariants)[Symbol.iterator]();
        var _r312_t8 = void 0;
        while (!(_r312_t8 = _r312_t7.next()).done) {
            _r312_t9 = _r312_t8.value;
            r312_suffix = _r312_t9[0];
            r312_DrawAt = _r312_t9[1][0];
            r312_kDotRadius = _r312_t9[1][1];
            r312_overshoot = _r312_t9[1][2];
            _r312_t9[1];
            (function () {
                return r312_xn$GlyphSaveSink$2Lrc4b.save("interpunct." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r321_currentGlyph) {
                    var _r321_t0, _r321_t1;
                    var r321_df = r321_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleI));
                    r321_currentGlyph.include(r312_DrawAt(r321_df.middle, r312_SymbolMid, r312_PeriodRadius * r312_kDotRadius - r312_overshoot));
                    return void 0;
                }));
            })();
        }
        r312_xn$selectvariant$7Hrq("interpunct", 183, new r312_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r312_alias("period/mid", null, "interpunct");
        r312_alias("grek/semicolon", 903, "interpunct");
        r312_alias("hyphenpoint", 8231, "interpunct");
        return r312_alias("wordseparatormiddledot", 11825, "interpunct");
    });
    return void 0;
});


