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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Wynn", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var r312_suffix, r312_Serifs, r312_doBS, _r312_t11, _r312_t12, _r312_t13, _r312_t14, _r312_tag15;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_MarkSet = _r312_t0.MarkSet;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_SB = _r312_t1.SB;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var r312_Descender = _r312_t1.Descender;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_O = _r312_t1.O;
        var r312_Hook = _r312_t1.Hook;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_HalfStroke = _r312_t1.HalfStroke;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_ArchDepthBOf = _r312_t1.ArchDepthBOf;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_widths = _r312_t2.widths;
        var r312_important = _r312_t2.important;
        var r312_alsoThru = _r312_t2.alsoThru;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_xn$noshape$3cah = _r312_t5["no-shape"];
        var r312_VBar = _r312_t5.VBar;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r312_LeaningAnchor = _r312_t7.LeaningAnchor;
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r312_SerifFrame = _r312_t8.SerifFrame;
        var r312_SerifedArcStart = _r312_t8.SerifedArcStart;
        var r312_SerifLT = function (r317_top, r317_bot) {
            var _r317_t0, _r317_t1;
            return r312_SerifFrame.fromDf(r312_DivFrame(1), r317_top, r317_bot).lt.outer;
        };
        var r312_SerifLB = function (r318_top, r318_bot) {
            var _r318_t0, _r318_t1;
            return r312_SerifFrame.fromDf(r312_DivFrame(1), r318_top, r318_bot).lb.fullSide;
        };
        var r312_FullSerifs = function (r319_top, r319_bot) {
            var _r319_t0, _r319_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r321_currentGlyph) {
                var _r321_t0, _r321_t1;
                r321_currentGlyph.include(r312_SerifLT(r319_top, r319_bot), true, true);
                r321_currentGlyph.include(r312_SerifLB(r319_top, r319_bot));
                return void 0;
            });
        };
        var r312_MotionSerif = function (r324_top, r324_bot) {
            var _r324_t0, _r324_t1;
            return r312_SerifLT(r324_top, r324_bot);
        };
        var r312_WynnShape = function (r325_bot, r325_top) {
            var _r325_t0, _r325_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
                var _r327_t0, _r327_t1;
                r327_currentGlyph.include(r312_VBar.l(r312_SB, r325_bot, r325_top));
                var r327_bowlBottom = r1_mix(r325_bot, r325_top, 0.15) + r312_HalfStroke;
                var r327_bowlStartDepth = 0.15 * (r325_top - r327_bowlBottom);
                var r327_yCounterPesudoBottom = r1_mix(r327_bowlBottom, r325_top, 0.333);
                r327_currentGlyph.include(r312_dispiro(r312_SerifedArcStart.LtrRhs(r312_SB, r325_top, r312_Stroke, Math.max(r312_Hook, r327_bowlStartDepth), r312_Stroke), r312_g4(r312_RightSB - r312_O, r325_top - r312_ArchDepthBOf(0.5 * (r325_top - r327_yCounterPesudoBottom)), r312_widths.rhs()), r312_alsoThru(0.25, 0.45, r312_important), r312_g4(r312_SB + r312_HSwToV(r312_Stroke), r327_bowlBottom)));
                return void 0;
            });
        };
        var r312_WynnConfig = {
            "serifless": [r312_xn$noshape$3cah, false],
            "motionSerifed": [r312_MotionSerif, false],
            "serifed": [r312_FullSerifs, true]
        };
        var _r312_t9 = Object.entries(r312_WynnConfig)[Symbol.iterator]();
        var _r312_t10 = void 0;
        while (!(_r312_t10 = _r312_t9.next()).done) {
            _r312_t11 = _r312_t10.value;
            r312_suffix = _r312_t11[0];
            r312_Serifs = _r312_t11[1][0];
            r312_doBS = _r312_t11[1][1];
            _r312_t11[1];
            (function () {
                r312_xn$GlyphSaveSink$2Lrc4b.save("Wynn." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r335_currentGlyph) {
                    var _r335_t0, _r335_t1;
                    r335_currentGlyph.include(r312_MarkSet.capital());
                    r335_currentGlyph.include(r312_LeaningAnchor.Below.VBar.l(r312_SB));
                    r335_currentGlyph.include(r312_WynnShape(0, r312_CAP));
                    r335_currentGlyph.include(r312_Serifs(r312_CAP, 0));
                    return void 0;
                }));
                return r312_xn$GlyphSaveSink$2Lrc4b.save("wynn." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r342_currentGlyph) {
                    var _r342_t0, _r342_t1;
                    r342_currentGlyph.include(r312_MarkSet.p());
                    r342_currentGlyph.include(r312_LeaningAnchor.Below.VBar.l(r312_SB));
                    r342_currentGlyph.include(r312_WynnShape(r312_Descender, r312_XH));
                    r342_currentGlyph.include(r312_Serifs(r312_XH, r312_Descender));
                    return void 0;
                }));
            })();
        }
        r312_xn$selectvariant$7Hrq("Wynn", 503);
        return r312_xn$selectvariant$7Hrq("wynn", 447);
    });
    return void 0;
});


