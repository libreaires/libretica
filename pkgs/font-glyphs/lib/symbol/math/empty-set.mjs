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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Math-Empty-Set", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t8, _r312_t9;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_MarkSet = _r312_t0.MarkSet;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_SB = _r312_t1.SB;
        var r312_CAP = _r312_t1.CAP;
        var r312_O = _r312_t1.O;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_OverlayStroke = _r312_t1.OverlayStroke;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_OperatorStroke = _r312_t1.OperatorStroke;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_widths = _r312_t2.widths;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$derivecomposites$7Hrq = _r312_t6["derive-composites"];
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-OShape-Variants"].resolve();
        var r312_OvalShapeT = _r312_t7.OvalShapeT;
        r312_xn$GlyphSaveSink$2Lrc4b.save("emptySet", 8709, new r312_xn$Capture$2Lrc8.GlyphProc(function (r318_currentGlyph) {
            var _r318_t0, _r318_t1;
            r318_currentGlyph.include(r312_MarkSet.capital());
            r318_currentGlyph.include(r312_OvalShapeT(r312_dispiro, r312_CAP, 0, r312_SB, r312_RightSB, r312_OperatorStroke));
            var r318_fine = 0.5 * (r312_OverlayStroke * (r312_OperatorStroke / r312_Stroke));
            r318_currentGlyph.include(r312_dispiro(r312_widths.center(2 * r318_fine), r312_flat(r312_SB + r312_O + r318_fine, r1_mix(r312_CAP, 0, 1.05)), r312_curl(r312_RightSB - r312_O - r318_fine, r1_mix(0, r312_CAP, 1.05))));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("revEmptySet", 10672, new r312_xn$Capture$2Lrc8.GlyphProc(function (r324_currentGlyph) {
            var _r324_t0, _r324_t1;
            r324_currentGlyph.include(r312_MarkSet.capital());
            r324_currentGlyph.include(r312_OvalShapeT(r312_dispiro, r312_CAP, 0, r312_SB, r312_RightSB, r312_OperatorStroke));
            var r324_fine = 0.5 * (r312_OverlayStroke * (r312_OperatorStroke / r312_Stroke));
            r324_currentGlyph.include(r312_dispiro(r312_widths.center(2 * r324_fine), r312_flat(r312_RightSB - r312_O - r324_fine, r1_mix(r312_CAP, 0, 1.05)), r312_curl(r312_SB + r312_O + r324_fine, r1_mix(0, r312_CAP, 1.05))));
            return void 0;
        }));
        r312_xn$derivecomposites$7Hrq("emptysetOverbar", 10673, "emptySet", "sbRsbOverlineAbove");
        r312_xn$derivecomposites$7Hrq("emptysetRing", 10674, "emptySet", "ringAbove");
        r312_xn$derivecomposites$7Hrq("emptysetRightArrow", 10675, "emptySet", "rightArrowAbove");
        return r312_xn$derivecomposites$7Hrq("emptysetLeftArrow", 10676, "emptySet", "leftArrowAbove");
    });
    return void 0;
});


