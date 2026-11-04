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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Yogh", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var r312_suffix, r312_slabTop, _r312_t10, _r312_t11, _r312_t12, _r312_t13, _r312_tag14;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_MarkSet = _r312_t0.MarkSet;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_SB = _r312_t1.SB;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var r312_Descender = _r312_t1.Descender;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_O = _r312_t1.O;
        var r312_Hook = _r312_t1.Hook;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_QuarterStroke = _r312_t1.QuarterStroke;
        var r312_OverlayPos = _r312_t1.OverlayPos;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_Middle = _r312_t1.Middle;
        var r312_StrokeWidthBlend = _r312_t1.StrokeWidthBlend;
        var r312_YSmoothMidR = _r312_t1.YSmoothMidR;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_corner = _r312_t2.corner;
        var r312_widths = _r312_t2.widths;
        var r312_important = _r312_t2.important;
        var r312_alsoThruThem = _r312_t2.alsoThruThem;
        var r312_archv = _r312_t2.archv;
        var r312_dispiro = _r312_t2.dispiro;
        var r312_xn$spirooutline$1aao = _r312_t2["spiro-outline"];
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_difference = _r312_t4.difference;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_xn$noshape$3cah = _r312_t5["no-shape"];
        var r312_HookStart = _r312_t5.HookStart;
        var r312_Arch = _r312_t5.Arch;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r312_SerifedArcStart = _r312_t7.SerifedArcStart;
        var r312_InwardSlabArcStart = _r312_t7.InwardSlabArcStart;
        var r312_ArcStartSerif = _r312_t7.ArcStartSerif;
        var r312_xn$SLABNONE$5sIl = 0;
        var r312_xn$SLABCLASSICAL$5sIl = 1;
        var r312_xn$SLABINWARD$5sIl = 2;
        var r312_PhantomBotYOfUpperHalf = function (r316_top, r316_bot) {
            var _r316_t0, _r316_t1;
            return r1_mix(r316_bot, r316_top, r312_OverlayPos) - r312_QuarterStroke;
        };
        var r312_TopYOfLowerHalf = function (r317_top, r317_bot) {
            var _r317_t0, _r317_t1;
            return r1_mix(r317_bot, r317_top, r312_OverlayPos) + 0.06 * r312_Stroke;
        };
        var r312_UpperHalfT = function (r318_sink, r318_slab, r318_offset, r318_top, r318_bot) {
            var r318___, _r318_t0, _r318_t1, _r318_t2;
            var r318_py = r312_PhantomBotYOfUpperHalf(r318_top, r318_bot);
            var r318_yRightHalf = r312_YSmoothMidR(r318_top, r318_py);
            var r318_yBottomTerminal = r1_mix(r318_top, r318_py, 1.2);
            return r318_sink((_r318_t0 = r318_slab, _r318_t0 === r312_xn$SLABCLASSICAL$5sIl ? r312_SerifedArcStart.LtrRhs(r312_SB, r318_top - r318_offset, r312_Stroke, r312_Hook) : _r318_t0 === r312_xn$SLABINWARD$5sIl ? r312_InwardSlabArcStart.LtrRhs(r312_SB, r318_top - r318_offset, r312_Stroke, r312_Hook) : (r318___ = _r318_t0, [r312_g4(r312_SB, r318_top - r312_Hook, r312_widths.rhs()), r312_HookStart(r318_top - r318_offset)])), r312_g4(r312_RightSB - r318_offset, r318_yRightHalf), r312_alsoThruThem([[0.5, 0.8], [0.75, 0.92]], r312_important), (r318_sink === r312_dispiro ? r312_g4 : r312_corner)(r1_mix(r312_SB, r312_RightSB, 0.1) + r312_QuarterStroke, r318_yBottomTerminal));
        };
        var r312_LowerHalfT = function (r319_sink, r319_top, r319_bot) {
            var _r319_t0, _r319_t1;
            var r319_pyt = r1_mix(r319_bot, r312_TopYOfLowerHalf(r319_top, r319_bot), 1.2);
            var r319_pyb = r1_mix(r319_bot, r312_TopYOfLowerHalf(r319_top, r319_bot), 0.2);
            return r319_sink(r312_Arch.rhs.centerAt.ltr.t(r312_Middle, r319_pyt), r312_archv(), r312_g4(r312_RightSB, r312_YSmoothMidR(r319_pyt, r319_pyb)), r312_alsoThruThem([[0.25, r312_StrokeWidthBlend(0.63, 0.66)], [0.5, r312_StrokeWidthBlend(0.84, 0.85)]], r312_important), r312_g4(r312_SB + r312_HSwToV(0.1 * r312_Stroke), r319_bot + r312_O));
        };
        var r312_YoghShape = function (r320_slab, r320_top, r320_bot) {
            var _r320_t0, _r320_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r322_currentGlyph) {
                var r322___, _r322_t0, _r322_t1, _r322_t2;
                r322_currentGlyph.include(r312_UpperHalfT(r312_dispiro, r320_slab, 0, r320_top, r320_bot));
                r322_currentGlyph.include(r312_difference(r312_LowerHalfT(r312_dispiro, r320_top, r320_bot), r312_UpperHalfT(r312_xn$spirooutline$1aao, r320_slab, 0.1, r320_top, r320_bot)));
                r322_currentGlyph.include((_r322_t0 = r320_slab, _r322_t0 === r312_xn$SLABCLASSICAL$5sIl ? r312_ArcStartSerif.L(r312_SB, r320_top, r312_Stroke, r312_Hook) : _r322_t0 === r312_xn$SLABINWARD$5sIl ? r312_ArcStartSerif.InwardL(r312_SB, r320_top, r312_Stroke, r312_Hook) : (r322___ = _r322_t0, r312_xn$noshape$3cah())));
                return void 0;
            });
        };
        var r312_Config = {
            "serifless": [r312_xn$SLABNONE$5sIl],
            "unilateralSerifed": [r312_xn$SLABCLASSICAL$5sIl],
            "unilateralInwardSerifed": [r312_xn$SLABINWARD$5sIl]
        };
        var _r312_t8 = Object.entries(r312_Config)[Symbol.iterator]();
        var _r312_t9 = void 0;
        while (!(_r312_t9 = _r312_t8.next()).done) {
            _r312_t10 = _r312_t9.value;
            r312_suffix = _r312_t10[0];
            r312_slabTop = _r312_t10[1][0];
            _r312_t10[1];
            (function () {
                r312_xn$GlyphSaveSink$2Lrc4b.save("Yogh." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
                    var _r331_t0, _r331_t1;
                    r331_currentGlyph.include(r312_MarkSet.capital());
                    r331_currentGlyph.include(r312_YoghShape(r312_slabTop, r312_CAP, 0));
                    return void 0;
                }));
                return r312_xn$GlyphSaveSink$2Lrc4b.save("yogh." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r336_currentGlyph) {
                    var _r336_t0, _r336_t1;
                    r336_currentGlyph.include(r312_MarkSet.capital());
                    r336_currentGlyph.include(r312_YoghShape(r312_slabTop, r312_XH, r312_Descender));
                    return void 0;
                }));
            })();
        }
        r312_xn$selectvariant$7Hrq("Yogh", 540, new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Ze/topSerif"));
        return r312_xn$selectvariant$7Hrq("yogh", 541, new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/ze/topSerif"));
    });
    return void 0;
});


