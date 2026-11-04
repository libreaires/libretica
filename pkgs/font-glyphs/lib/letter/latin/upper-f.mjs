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
var r1_MathSansSerif = _r1_t9.MathSansSerif;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Upper-F", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_lt, r313_lb, r313_rt, r313_rm, _r313_t13, _r313_t15, _r313_t16, _r313_t17, _r313_tag18;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_MarkSet = _r313_t0.MarkSet;
        var r313_AS_BASE = _r313_t0.AS_BASE;
        var r313_ALSO_METRICS = _r313_t0.ALSO_METRICS;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_O = _r313_t1.O;
        var r313_AdviceStroke2 = _r313_t1.AdviceStroke2;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_Jut = _r313_t1.Jut;
        var r313_MidJutSide = _r313_t1.MidJutSide;
        var r313_VJutStroke = _r313_t1.VJutStroke;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_SideJut = _r313_t1.SideJut;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_union = _r313_t4.union;
        var r313_difference = _r313_t4.difference;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_tagged = _r313_t5.tagged;
        var r313_Rect = _r313_t5.Rect;
        var r313_HSerif = _r313_t5.HSerif;
        var r313_VSerif = _r313_t5.VSerif;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_xn$deriveglyphs$7Hrq = _r313_t6["derive-glyphs"];
        var r313_alias = _r313_t6.alias;
        var r313_HalfAdvance = _r313_t6.HalfAdvance;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_LeaningAnchor = _r313_t7.LeaningAnchor;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateTurnedLetter = _r313_t8.CreateTurnedLetter;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Metrics"].resolve();
        var r313_EFMidBarShrinkK = _r313_t9.EFMidBarShrinkK;
        var r313_EFMidBarPosY = _r313_t9.EFMidBarPosY;
        var r313_EFVJutLength = _r313_t9.EFVJutLength;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_LetterBarOverlay = _r313_t10.LetterBarOverlay;
        var r313_PalatalHook = _r313_t10.PalatalHook;
        var r313_kSB = 1.5;
        var r313_xFBarLeft = r1_mix(0, r313_SB, r313_kSB) - 0;
        var r313_xRevFBarRight = r1_mix(r313_Width, r313_RightSB, r313_kSB) + 0;
        var r313_FShape = function (r320_top, r320_serifLT, r320_serifLB, r320_serifRT, r320_serifRM, r320__stroke, r320__jutTop) {
            var _r320_t0, _r320_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r322_currentGlyph) {
                var _r322_t1, _r322_t2;
                var r322_stroke = r1_fallback(r320__stroke, r313_Stroke);
                var r322_xMidBarRight = r1_mix(r313_Width, r313_RightSB, r313_EFMidBarShrinkK(r313_DivFrame(1), r320_serifRT));
                var r322_barPos = r313_EFMidBarPosY(r320_top, 0);
                r322_currentGlyph.include(r313_VBar.l(r313_xFBarLeft, 0, r320_top, r322_stroke));
                r322_currentGlyph.include(r313_HBar.t(r313_xFBarLeft - r313_O, r313_RightSB, r320_top, r322_stroke));
                r322_currentGlyph.include(r313_tagged("crossBar", r313_HBar.m(r313_xFBarLeft - r313_O, r322_xMidBarRight, r322_barPos, r322_stroke)));
                if (r320_serifLT) r322_currentGlyph.include(r313_HSerif.lt(r313_xFBarLeft, r320_top, r313_SideJut, r322_stroke));
                if (r320_serifLB) r322_currentGlyph.include(r313_tagged("serifLB", r313_union(r313_HSerif.lb(r313_xFBarLeft + r313_HSwToV(0.5 * r322_stroke), 0, r313_Jut - r313_HSwToV(0.5 * (r313_Stroke - r322_stroke)), r322_stroke), r313_HSerif.rb(r313_xFBarLeft + r313_HSwToV(0.5 * r322_stroke), 0, r313_MidJutSide - r313_HSwToV(0.5 * (r313_Stroke - r322_stroke)), r322_stroke))));
                var _r322_t0 = r313_EFVJutLength(r320_top, 0, void 0, r322_stroke, r320__jutTop);
                var r322_jutTop = _r322_t0[0];
                var r322_jutBot = _r322_t0[1];
                var r322_jutMid = _r322_t0[2];
                var r322_swVJut = r313_VJutStroke * (r322_stroke / r313_Stroke);
                if (r320_serifRT) r322_currentGlyph.include(r313_VSerif.dr(r313_RightSB, r320_top, r322_jutTop, r322_swVJut));
                if (r320_serifRM) r322_currentGlyph.include(r313_VSerif.mr(r322_xMidBarRight, r322_barPos, r322_jutMid, r322_swVJut));
                return void 0;
            });
        };
        var r313_FConfig = {
            "serifless": [false, false, false, false],
            "topLeftSerifed": [true, false, false, false],
            "serifed": [true, true, true, false],
            "serifedCapped": [true, true, true, true]
        };
        var _r313_t11 = Object.entries(r313_FConfig)[Symbol.iterator]();
        var _r313_t12 = void 0;
        while (!(_r313_t12 = _r313_t11.next()).done) {
            _r313_t13 = _r313_t12.value;
            r313_suffix = _r313_t13[0];
            r313_lt = _r313_t13[1][0];
            r313_lb = _r313_t13[1][1];
            r313_rt = _r313_t13[1][2];
            r313_rm = _r313_t13[1][3];
            _r313_t13[1];
            (function () {
                var r332_swCap = r313_AdviceStroke2(2, 3, r313_CAP);
                var r332_swXH = r313_AdviceStroke2(2, 3, r313_XH);
                r313_xn$GlyphSaveSink$2Lrc4b.save("F." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r335_currentGlyph) {
                    var _r335_t0, _r335_t1;
                    r335_currentGlyph.include(r313_MarkSet.capital());
                    r335_currentGlyph.include(r313_LeaningAnchor.Below.VBar.l(r313_xFBarLeft, r332_swCap));
                    r335_currentGlyph.include(r313_FShape(r313_CAP, r313_lt, r313_lb, r313_rt, r313_rm, r332_swCap));
                    return void 0;
                }));
                if (!r313_rm) r313_xn$GlyphSaveSink$2Lrc4b.save("currency/frenchFrancSign." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r341_currentGlyph) {
                    var _r341_t0, _r341_t1;
                    r341_currentGlyph.include(r313_xn$referglyph$1aao("F." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r341_currentGlyph.ejectTagged("crossBar");
                    r341_currentGlyph.include(r313_LetterBarOverlay.l.in(new r313_xn$NamedParameterPair$2Lrc9b("x", r313_xFBarLeft), new r313_xn$NamedParameterPair$2Lrc9b("bot", 0), new r313_xn$NamedParameterPair$2Lrc9b("top", r313_CAP), new r313_xn$NamedParameterPair$2Lrc9b("py", 0.375)));
                    r341_currentGlyph.include(r313_LetterBarOverlay.l.in(new r313_xn$NamedParameterPair$2Lrc9b("x", r313_xFBarLeft), new r313_xn$NamedParameterPair$2Lrc9b("bot", 0), new r313_xn$NamedParameterPair$2Lrc9b("top", r313_CAP - r313_Stroke), new r313_xn$NamedParameterPair$2Lrc9b("py", 0.625)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("FBar." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r356_currentGlyph) {
                    var _r356_t0, _r356_t1;
                    r356_currentGlyph.include(r313_xn$referglyph$1aao("F." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r356_currentGlyph.include(r313_LetterBarOverlay.l.in(new r313_xn$NamedParameterPair$2Lrc9b("x", r313_xFBarLeft), new r313_xn$NamedParameterPair$2Lrc9b("bot", r313_EFMidBarPosY(r313_CAP, 0) + r313_HalfStroke), new r313_xn$NamedParameterPair$2Lrc9b("top", r313_CAP - r313_Stroke), new r313_xn$NamedParameterPair$2Lrc9b("space", [0, r313_RightSB - (r313_rt ? r313_HSwToV(r313_VJutStroke) : 0)])));
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("smcpF." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r365_currentGlyph) {
                    var _r365_t0, _r365_t1;
                    r365_currentGlyph.include(r313_MarkSet.e());
                    r365_currentGlyph.include(r313_LeaningAnchor.Below.VBar.l(r313_xFBarLeft, r332_swXH));
                    r365_currentGlyph.include(r313_FShape(r313_XH, r313_lt, r313_lb, r313_rt, r313_rm, r332_swXH));
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("F", "F");
        r313_xn$linkreducedvariant$5sIl8("F/sansSerif", "F", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("smcpF", 42800, new r313_xn$NamedParameterPair$2Lrc9b("follow", "F"));
        r313_xn$selectvariant$7Hrq("FBar", 42904, new r313_xn$NamedParameterPair$2Lrc9b("follow", "F"));
        r313_xn$selectvariant$7Hrq("currency/frenchFrancSign", 8355);
        r313_alias("cyrl/Ghayn.BSH", null, "F");
        r313_alias("cyrl/ghayn.BSH", null, "smcpF");
        r313_CreateTurnedLetter("turnF", 8498, "F", r313_HalfAdvance, r313_CAP / 2);
        r313_CreateTurnedLetter("turnf", 8526, "smcpF", r313_HalfAdvance, r313_XH / 2);
        r313_xn$deriveglyphs$7Hrq("FHookBottom", 401, "F", function (r371_src, r371_gr) {
            var _r371_t0, _r371_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r373_currentGlyph) {
                var _r373_t0, _r373_t1;
                r373_currentGlyph.include(r313_xn$referglyph$1aao(r371_src), r313_AS_BASE, r313_ALSO_METRICS);
                r373_currentGlyph.ejectTagged("serifLB");
                r373_currentGlyph.include(r313_PalatalHook.lExt(r313_xFBarLeft, 0));
                return void 0;
            });
        });
        var _r313_t14 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t14.BBS;
        var r313_BBD = _r313_t14.BBD;
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/F", 120125, new r313_xn$Capture$2Lrc8.GlyphProc(function (r380_currentGlyph) {
            var _r380_t0, _r380_t1;
            r380_currentGlyph.include(r313_MarkSet.capital());
            r380_currentGlyph.include(r313_union(r313_VBar.l(r313_xFBarLeft + r313_BBD, 0, r313_CAP, r313_BBS), r313_HBar.b(r313_xFBarLeft, r313_xFBarLeft + r313_BBD, 0, r313_BBS), r313_difference(r313_FShape(r313_CAP, false, false, false, false, r313_BBS), r313_Rect(r313_CAP - r313_BBS, r313_BBS, r313_xFBarLeft + r313_HSwToV(r313_BBS), r313_xFBarLeft + r313_BBD))));
            return void 0;
        }));
    });
    return void 0;
});


