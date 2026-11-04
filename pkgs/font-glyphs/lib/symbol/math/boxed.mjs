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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Math-Boxed", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t7, _r312_t8;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_intersection = _r312_t4.intersection;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$referglyph$1aao = _r312_t6["refer-glyph"];
        var r312_xn$deriveglyphs$7Hrq = _r312_t6["derive-glyphs"];
        var r312_MakeMathBoxed = function (r315_u, r315_inner) {
            var _r315_t0, _r315_t1;
            return r312_xn$deriveglyphs$7Hrq("mathBoxed{" + r315_inner + "}", r315_u, r315_inner, function (r316_src, r316_gr) {
                var _r316_t0, _r316_t1;
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r318_currentGlyph) {
                    var _r318_t0, _r318_t1;
                    r318_currentGlyph.include(r312_xn$referglyph$1aao("mathBox"), true, true);
                    r318_currentGlyph.include(r312_intersection(r312_xn$referglyph$1aao("mathBox/outline"), r312_xn$referglyph$1aao(r316_src)));
                    return void 0;
                });
            });
        };
        r312_MakeMathBoxed(8862, "innerPlus");
        r312_MakeMathBoxed(8863, "innerMinus");
        r312_MakeMathBoxed(8864, "innerMultiply");
        r312_MakeMathBoxed(8865, "mathCDotInner");
        r312_MakeMathBoxed(10692, "innerMultiply/stroke1");
        r312_MakeMathBoxed(10693, "innerMultiply/stroke2");
        r312_MakeMathBoxed(10694, "opAsterisk");
        r312_MakeMathBoxed(10695, "whiteVerySmallCircle.NWID");
        return r312_MakeMathBoxed(10696, "whiteVerySmallSquare.NWID");
    });
    return void 0;
});


