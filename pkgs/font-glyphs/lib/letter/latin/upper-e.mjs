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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Upper-E", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_lt, r313_lb, r313_rt, r313_rb, r313_rm, _r313_t12, _r313_t14, _r313_t15, _r313_t16, _r313_tag17;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_MarkSet = _r313_t0.MarkSet;
        var r313_AS_BASE = _r313_t0.AS_BASE;
        var r313_ALSO_METRICS = _r313_t0.ALSO_METRICS;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_DesignParameters = _r313_t1.DesignParameters;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Upward = _r313_t1.Upward;
        var r313_Leftward = _r313_t1.Leftward;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_Hook = _r313_t1.Hook;
        var r313_RHook = _r313_t1.RHook;
        var r313_AdviceStroke2 = _r313_t1.AdviceStroke2;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_VJutStroke = _r313_t1.VJutStroke;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_SideJut = _r313_t1.SideJut;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_arcvh = _r313_t2.arcvh;
        var r313_dispiro = _r313_t2.dispiro;
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
        var r313_Arch = _r313_t5.Arch;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_alias = _r313_t6.alias;
        var r313_HalfAdvance = _r313_t6.HalfAdvance;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateAccentedComposition = _r313_t7.CreateAccentedComposition;
        var r313_SetGrekUpperTonos = _r313_t7.SetGrekUpperTonos;
        var r313_CreateTurnedLetter = _r313_t7.CreateTurnedLetter;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Metrics"].resolve();
        var r313_EFMidBarShrinkK = _r313_t8.EFMidBarShrinkK;
        var r313_EFMidBarPosY = _r313_t8.EFMidBarPosY;
        var r313_EFVJutLength = _r313_t8.EFVJutLength;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_LetterBarOverlay = _r313_t9.LetterBarOverlay;
        var r313_kSB = 1;
        var r313_xEBarLeft = r1_mix(0, r313_SB, r313_kSB) - r313_O;
        var r313_xRevEBarRight = r1_mix(r313_Width, r313_RightSB, r313_kSB) + r313_O;
        var r313_EShape = function (r319_top, r319_serifLT, r319_serifLB, r319_serifRT, r319_serifRB, r319_serifRM, r319__stroke, r319__jutTop, r319__jutBot) {
            var _r319_t0, _r319_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r321_currentGlyph) {
                var _r321_t1, _r321_t2;
                var r321_stroke = r1_fallback(r319__stroke, r313_Stroke);
                var r321_xMidBarRight = r1_mix(r313_Width, r313_RightSB, r313_EFMidBarShrinkK(r313_DivFrame(1), r319_serifRT));
                var r321_barPos = r313_EFMidBarPosY(r319_top, 0);
                r321_currentGlyph.include(r313_tagged("strokeL", r313_VBar.l(r313_xEBarLeft, 0, r319_top, r321_stroke)));
                r321_currentGlyph.include(r313_tagged("strokeT", r313_HBar.t(r313_xEBarLeft - r313_O, r313_RightSB, r319_top, r321_stroke)));
                r321_currentGlyph.include(r313_tagged("strokeM", r313_HBar.m(r313_xEBarLeft - r313_O, r321_xMidBarRight, r321_barPos, r321_stroke)));
                r321_currentGlyph.include(r313_tagged("strokeB", r313_HBar.b(r313_xEBarLeft - r313_O, r313_RightSB, 0, r321_stroke)));
                if (r319_serifLT) r321_currentGlyph.include(r313_tagged("serifLT", r313_HSerif.lt(r313_xEBarLeft, r319_top, r313_SideJut, r321_stroke)));
                if (r319_serifLB) r321_currentGlyph.include(r313_tagged("serifLB", r313_HSerif.lb(r313_xEBarLeft, 0, r313_SideJut, r321_stroke)));
                var _r321_t0 = r313_EFVJutLength(r319_top, 0, void 0, r321_stroke, r319__jutTop, r319__jutBot);
                var r321_jutTop = _r321_t0[0];
                var r321_jutBot = _r321_t0[1];
                var r321_jutMid = _r321_t0[2];
                var r321_swVJut = r313_VJutStroke * (r321_stroke / r313_Stroke);
                if (r319_serifRT) r321_currentGlyph.include(r313_tagged("serifRT", r313_VSerif.dr(r313_RightSB, r319_top, r321_jutTop, r321_swVJut)));
                if (r319_serifRB) r321_currentGlyph.include(r313_tagged("serifRB", r313_VSerif.ur(r313_RightSB, 0, r321_jutBot, r321_swVJut)));
                if (r319_serifRM) r321_currentGlyph.include(r313_tagged("serifRM", r313_VSerif.mr(r321_xMidBarRight, r321_barPos, r321_jutMid, r321_swVJut)));
                return void 0;
            });
        };
        var r313_RevEShape = function (r331_top, r331_serifRT, r331_serifRB, r331_serifLT, r331_serifLB, r331_serifLM, r331__stroke, r331__jutTop, r331__jutBot) {
            var _r331_t0, _r331_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r333_currentGlyph) {
                var _r333_t1, _r333_t2;
                var r333_stroke = r1_fallback(r331__stroke, r313_Stroke);
                var r333_xMidBarLeft = r1_mix(0, r313_SB, r313_EFMidBarShrinkK(r313_DivFrame(1), r331_serifLT));
                var r333_barPos = r313_EFMidBarPosY(r331_top, 0);
                r333_currentGlyph.include(r313_tagged("strokeR", r313_VBar.r(r313_xRevEBarRight, 0, r331_top, r333_stroke)));
                r333_currentGlyph.include(r313_tagged("strokeT", r313_HBar.t(r313_SB, r313_xRevEBarRight + r313_O, r331_top, r333_stroke)));
                r333_currentGlyph.include(r313_tagged("strokeM", r313_HBar.m(r333_xMidBarLeft, r313_xRevEBarRight + r313_O, r333_barPos, r333_stroke)));
                r333_currentGlyph.include(r313_tagged("strokeB", r313_HBar.b(r313_SB, r313_xRevEBarRight + r313_O, 0, r333_stroke)));
                if (r331_serifRT) r333_currentGlyph.include(r313_tagged("serifRT", r313_HSerif.rt(r313_xRevEBarRight, r331_top, r313_SideJut, r333_stroke)));
                if (r331_serifRB) r333_currentGlyph.include(r313_tagged("serifRB", r313_HSerif.rb(r313_xRevEBarRight, 0, r313_SideJut, r333_stroke)));
                var _r333_t0 = r313_EFVJutLength(r331_top, 0, void 0, r333_stroke, r331__jutTop, r331__jutBot);
                var r333_jutTop = _r333_t0[0];
                var r333_jutBot = _r333_t0[1];
                var r333_jutMid = _r333_t0[2];
                var r333_swVJut = r313_VJutStroke * (r333_stroke / r313_Stroke);
                if (r331_serifLT) r333_currentGlyph.include(r313_tagged("serifLT", r313_VSerif.dl(r313_SB, r331_top, r333_jutTop, r333_swVJut)));
                if (r331_serifLB) r333_currentGlyph.include(r313_tagged("serifLB", r313_VSerif.ul(r313_SB, 0, r333_jutBot, r333_swVJut)));
                if (r331_serifLM) r333_currentGlyph.include(r313_tagged("serifLM", r313_VSerif.ml(r333_xMidBarLeft, r333_barPos, r333_jutMid, r333_swVJut)));
                return void 0;
            });
        };
        var r313_EConfig = {
            "serifless": [false, false, false, false, false],
            "topLeftSerifed": [true, false, false, false, false],
            "serifed": [true, true, true, true, false],
            "serifedCapped": [true, true, true, true, true]
        };
        var _r313_t10 = Object.entries(r313_EConfig)[Symbol.iterator]();
        var _r313_t11 = void 0;
        while (!(_r313_t11 = _r313_t10.next()).done) {
            _r313_t12 = _r313_t11.value;
            r313_suffix = _r313_t12[0];
            r313_lt = _r313_t12[1][0];
            r313_lb = _r313_t12[1][1];
            r313_rt = _r313_t12[1][2];
            r313_rb = _r313_t12[1][3];
            r313_rm = _r313_t12[1][4];
            _r313_t12[1];
            (function () {
                var r345_swCap = r313_AdviceStroke2(2, 3, r313_CAP);
                var r345_swXH = r313_AdviceStroke2(2, 3, r313_XH);
                r313_xn$GlyphSaveSink$2Lrc4b.save("E." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r348_currentGlyph) {
                    var _r348_t0, _r348_t1;
                    r348_currentGlyph.include(r313_MarkSet.capital());
                    r348_currentGlyph.include(r313_EShape(r313_CAP, r313_lt, r313_lb, r313_rt, r313_rb, r313_rm, r345_swCap));
                    r348_currentGlyph.setBaseAnchor("trailing", r313_RightSB, 0);
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("grek/Epsilon." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r354_currentGlyph) {
                    var _r354_t0, _r354_t1;
                    r354_currentGlyph.include(r313_xn$referglyph$1aao("E." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r354_currentGlyph.include(r313_SetGrekUpperTonos(r313_lt ? -r313_SideJut : 0));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("smcpE." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r359_currentGlyph) {
                    var _r359_t0, _r359_t1;
                    r359_currentGlyph.include(r313_MarkSet.e());
                    r359_currentGlyph.include(r313_EShape(r313_XH, r313_lt, r313_lb, r313_rt, r313_rb, r313_rm, r345_swXH));
                    r359_currentGlyph.setBaseAnchor("trailing", r313_RightSB, 0);
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("smcpEBar." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r365_currentGlyph) {
                    var _r365_t0, _r365_t1;
                    r365_currentGlyph.include(r313_xn$referglyph$1aao("smcpE." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    var r365_barPos = r313_EFMidBarPosY(r313_XH, 0);
                    var r365_swVJut = r313_VJutStroke * (r345_swXH / r313_Stroke);
                    var r365_xRight = r313_rm ? r1_mix(r313_Width, r313_RightSB, r313_EFMidBarShrinkK(r313_DivFrame(1), r313_rt)) - r313_HSwToV(r365_swVJut) : r313_rb ? r313_RightSB - r313_HSwToV(r365_swVJut) : true ? r313_Width : void 0;
                    r365_currentGlyph.include(r313_LetterBarOverlay.l.in(new r313_xn$NamedParameterPair$2Lrc9b("x", r313_xEBarLeft), new r313_xn$NamedParameterPair$2Lrc9b("top", r365_barPos - r345_swXH / 2), new r313_xn$NamedParameterPair$2Lrc9b("bot", 0 + r345_swXH), new r313_xn$NamedParameterPair$2Lrc9b("space", [0, r365_xRight])));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("EHookRight." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r374_currentGlyph) {
                    var _r374_t0, _r374_t1;
                    r374_currentGlyph.include(r313_MarkSet.capital());
                    var r374_hook = Math.min(r313_Hook, r313_RHook * (r313_CAP / r313_XH) + r345_swCap / 2, r1_mix(r345_swCap, r313_CAP - (r313_EFMidBarPosY(r313_CAP, 0) + r345_swCap / 2), 0.554));
                    r374_currentGlyph.include(r313_EShape(r313_CAP, r313_lt, r313_lb, r313_rt, r313_rb, r313_rm, r345_swCap, r374_hook));
                    r374_currentGlyph.ejectTagged("serifRT");
                    r374_currentGlyph.ejectTagged("strokeT");
                    r374_currentGlyph.include(r313_dispiro(r313_widths.lhs(r345_swCap), r313_g4.up.start(r313_RightSB - r313_OX, r313_CAP - r374_hook, r313_heading(r313_Upward)), r313_arcvh(void 0, r313_DesignParameters.rHookSuperness), r313_flat(r313_Arch["adjust-x"].top(r1_mix(r313_RightSB, Math.max(r313_xEBarLeft, r1_mix(0, r313_SB, 1.5) + 0.75 * r313_OX), 0.5), new r313_xn$NamedParameterPair$2Lrc9b("sw", r345_swCap)), r313_CAP), r313_curl(r313_xEBarLeft - r313_O, r313_CAP, r313_heading(r313_Leftward))));
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("revE." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r383_currentGlyph) {
                    var _r383_t0, _r383_t1;
                    r383_currentGlyph.include(r313_MarkSet.capital());
                    r383_currentGlyph.include(r313_RevEShape(r313_CAP, r313_lt, r313_lb, r313_rt, r313_rb, r313_rm, r345_swCap));
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("E", "E");
        r313_xn$linkreducedvariant$5sIl8("E/sansSerif", "E", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("grek/Epsilon", 917, new r313_xn$NamedParameterPair$2Lrc9b("follow", "E"));
        r313_xn$linkreducedvariant$5sIl8("grek/Epsilon/sansSerif", "grek/Epsilon", r1_MathSansSerif, new r313_xn$NamedParameterPair$2Lrc9b("follow", "E/sansSerif"));
        r313_alias("cyrl/Ye", 1045, "E");
        r313_xn$selectvariant$7Hrq("revE", 398, new r313_xn$NamedParameterPair$2Lrc9b("follow", "E"));
        r313_xn$selectvariant$7Hrq("exists", 8707, new r313_xn$NamedParameterPair$2Lrc9b("follow", "E/sansSerif"), new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "revE"));
        r313_CreateAccentedComposition("notExists", 8708, "exists", "longSlash");
        r313_xn$selectvariant$7Hrq("smcpE", 7431, new r313_xn$NamedParameterPair$2Lrc9b("follow", "E"));
        r313_xn$selectvariant$7Hrq("smcpEBar", 122691, new r313_xn$NamedParameterPair$2Lrc9b("follow", "E"));
        r313_CreateTurnedLetter("smcpTurnE", 11387, "smcpE", r313_HalfAdvance, r313_XH / 2);
        r313_xn$selectvariant$7Hrq("EHookRight", 122753, new r313_xn$NamedParameterPair$2Lrc9b("follow", "E"));
        var _r313_t13 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t13.BBS;
        var r313_BBD = _r313_t13.BBD;
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/E", 120124, new r313_xn$Capture$2Lrc8.GlyphProc(function (r397_currentGlyph) {
            var _r397_t0, _r397_t1;
            r397_currentGlyph.include(r313_MarkSet.capital());
            r397_currentGlyph.include(r313_union(r313_difference(r313_EShape(r313_CAP, false, false, false, false, false, r313_BBS), r313_Rect(r313_CAP - r313_BBS, r313_BBS, r313_xEBarLeft + r313_HSwToV(r313_BBS), r313_xEBarLeft + r313_BBD)), r313_VBar.l(r313_xEBarLeft + r313_BBD, 0, r313_CAP, r313_BBS)));
            return void 0;
        }));
    });
    return void 0;
});


