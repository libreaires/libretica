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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Punctuation-At", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var r312_suffix, r312_body, r312_height, r312_fSolidInner, _r312_t9, _r312_t10, _r312_t11, _r312_t12, _r312_tag13;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_SB = _r312_t1.SB;
        var r312_CAP = _r312_t1.CAP;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_ParenTop = _r312_t1.ParenTop;
        var r312_ParenBot = _r312_t1.ParenBot;
        var r312_OperTop = _r312_t1.OperTop;
        var r312_OperBot = _r312_t1.OperBot;
        var r312_TanSlope = _r312_t1.TanSlope;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_Upward = _r312_t1.Upward;
        var r312_Downward = _r312_t1.Downward;
        var r312_Leftward = _r312_t1.Leftward;
        var r312_O = _r312_t1.O;
        var r312_Hook = _r312_t1.Hook;
        var r312_ArchDepth = _r312_t1.ArchDepth;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_HalfStroke = _r312_t1.HalfStroke;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_Middle = _r312_t1.Middle;
        var r312_ArchDepthAOf = _r312_t1.ArchDepthAOf;
        var r312_ArchDepthBOf = _r312_t1.ArchDepthBOf;
        var r312_ArchDepthA = _r312_t1.ArchDepthA;
        var r312_ArchDepthB = _r312_t1.ArchDepthB;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_corner = _r312_t2.corner;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_end = _r312_t2.end;
        var r312_straight = _r312_t2.straight;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_archv = _r312_t2.archv;
        var r312_arcvh = _r312_t2.arcvh;
        var r312_dispiro = _r312_t2.dispiro;
        var r312_xn$spirooutline$1aao = _r312_t2["spiro-outline"];
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_HookEnd = _r312_t5.HookEnd;
        var r312_Arch = _r312_t5.Arch;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var r312_ThreeFoldShape = function (r315_height, r315_fSolidInner) {
            var _r315_t0, _r315_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r317_currentGlyph) {
                var _r317_t0, _r317_t1;
                var r317_top = r312_SymbolMid + r315_height / 2;
                var r317_bot = r312_SymbolMid - r315_height / 2;
                var r317_otop = r1_mix(r317_bot, r317_top, 0.75);
                var r317_obot = r1_mix(r317_top, r317_bot, 0.8);
                var r317_sw = r312_AdviceStroke(3.5);
                var r317_m1 = r315_fSolidInner ? r1_mix(r312_SB, r312_RightSB, 0.5) : r1_mix(r312_SB + r317_sw, r312_RightSB - r317_sw, 0.47) - r317_sw / 2;
                var r317_m2 = r1_mix(r317_m1, r312_RightSB, 0.52) + r312_TanSlope * r317_sw;
                var r317_ada = r312_ArchDepthA * ((r312_RightSB - r317_m1) / (r312_RightSB - r312_SB) * 1.1);
                var r317_adb = r312_ArchDepthB * ((r312_RightSB - r317_m1) / (r312_RightSB - r312_SB) * 1.1);
                r317_currentGlyph.include(r312_union((r315_fSolidInner ? r312_xn$spirooutline$1aao : r312_dispiro)(r312_widths.lhs(r317_sw), r312_flat(r312_RightSB, r317_otop - r312_O, r312_heading(r312_Leftward)), r312_curl(r317_m2, r317_otop - r312_O), r312_archv(), r312_flat(r317_m1, r317_otop - r317_ada), r312_curl(r317_m1, r317_obot + r317_adb), r312_Arch.lhs(r317_obot, new r312_xn$NamedParameterPair$2Lrc9b("sw", r317_sw)), r312_flat(r312_RightSB, r317_obot + r317_ada), r312_curl(r312_RightSB, r317_otop - r312_O)), r312_dispiro(r312_widths.lhs(r317_sw), r312_flat(r312_RightSB, r317_obot + r317_ada), r312_curl(r312_RightSB, r317_top - r312_ArchDepthB), r312_Arch.lhs(r317_top), r312_flat(r312_SB, r317_top - r312_ArchDepthA, r312_widths.lhs(r317_sw)), r312_curl(r312_SB, r317_bot + r312_ArchDepthB), r312_arcvh(), r312_Arch.lhs.centerAt.ltr.b(r312_Middle, r317_bot, new r312_xn$NamedParameterPair$2Lrc9b("knot-ty", r312_flat)), r312_curl(r312_RightSB - r312_HalfStroke + r312_TanSlope * r317_sw, r317_bot + r312_O))));
                return void 0;
            });
        };
        var r312_FourFoldShape = function (r321_height, r321_fSolidInner) {
            var _r321_t0, _r321_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r323_currentGlyph) {
                var _r323_t0, _r323_t1;
                var r323_df = r323_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, r321_fSolidInner ? 3.25 : 4));
                var r323_top = r312_SymbolMid + r321_height / 2;
                var r323_bot = r312_SymbolMid - r321_height / 2;
                var r323_otop = r1_mix(r323_bot, r323_top, 0.75);
                var r323_obot = r1_mix(r323_top, r323_bot, 0.8);
                var r323_sw = r312_AdviceStroke(r321_fSolidInner ? 3.25 : 4, r323_df.adws);
                var r323_swh = r312_AdviceStroke(r321_fSolidInner ? 3.25 : 3.75, r323_df.adws);
                var r323_kM12 = r321_fSolidInner ? 0.4 : 1 / 3;
                var r323_kM12Sw = r321_fSolidInner ? 0.25 : 0.5;
                var r323_m1 = r1_mix(r323_df.leftSB + r312_HSwToV(r323_sw / 2), r323_df.rightSB - r312_HSwToV(r323_sw / 2), r323_kM12) - r312_HSwToV(r323_sw * r323_kM12Sw);
                var r323_m2 = r1_mix(r323_df.leftSB + r312_HSwToV(r323_sw / 2), r323_df.rightSB - r312_HSwToV(r323_sw / 2), 1 - r323_kM12) + r312_HSwToV(r323_sw * r323_kM12Sw);
                var r323_ad = r312_ArchDepth * Math.sqrt(r323_df.adws);
                var r323_ada = r312_ArchDepthAOf(r323_ad, r323_df.width);
                var r323_adb = r312_ArchDepthBOf(r323_ad, r323_df.width);
                var r323_adInner = Math.max(r323_ad * (r323_m2 - r323_m1) / (r323_df.rightSB - r323_df.leftSB), r323_sw * 1.25);
                var r323_adaInner = r312_ArchDepthAOf(r323_adInner, r323_m2 - r323_m1 + r323_df.leftSB * 2);
                var r323_adbInner = r312_ArchDepthBOf(r323_adInner, r323_m2 - r323_m1 + r323_df.leftSB * 2);
                r323_currentGlyph.include(r312_union(r312_dispiro(r312_widths.lhs(r323_sw), r321_fSolidInner ? [] : [r312_flat(r323_m2, r323_obot - r312_O, r312_heading(r312_Upward)), r312_curl(r323_m2, r323_otop - r323_adbInner), r312_Arch.lhs(r323_otop, new r312_xn$NamedParameterPair$2Lrc9b("sw", r323_sw)), r312_flat(r323_m1, r323_otop - r323_adaInner), r312_curl(r323_m1, r323_obot + r323_adbInner), r312_arcvh()], r312_flat(r323_df.middle, r323_obot), r312_curl(r323_df.rightSB - Math.max((r323_m2 - r323_m1) / 2, r312_HSwToV(1.5 * r323_sw)), r323_obot), r312_archv(), r312_flat(r323_df.rightSB, r323_obot + Math.max(r323_adaInner, r323_sw * 1.5)), r312_curl(r323_df.rightSB, r323_top - r323_adb), r312_Arch.lhs(r323_top, new r312_xn$NamedParameterPair$2Lrc9b("sw", r323_swh)), r312_flat(r323_df.leftSB, r323_top - r323_ada, r312_widths.lhs(r323_sw)), r312_curl(r323_df.leftSB, r323_bot + r323_adb), r312_arcvh(), r312_Arch.lhs.centerAt.ltr.b(r323_df.middle, r323_bot, new r312_xn$NamedParameterPair$2Lrc9b("knot-ty", r312_flat)), r312_curl(r323_df.rightSB - r312_HalfStroke + r312_TanSlope * r323_sw, r323_bot + r312_O)), r321_fSolidInner ? r312_xn$spirooutline$1aao(r312_corner(r323_m2, r323_obot), r312_curl(r323_m2, r323_otop - r323_adbInner), r312_Arch.lhs(r323_otop, new r312_xn$NamedParameterPair$2Lrc9b("sw", r323_sw)), r312_flat(r323_m1, r323_otop - r323_adaInner), r312_curl(r323_m1, r323_obot + r323_adbInner), r312_arcvh(), r312_flat(r323_df.middle, r323_obot)) : new r312_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
                    var _r331_t0, _r331_t1;
                    return void 0;
                })));
                return void 0;
            });
        };
        var r312_CompactShape = function () {
            var _r332_t0, _r332_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r334_currentGlyph) {
                var _r334_t0, _r334_t1;
                var r334_top = r312_CAP;
                var r334_obot = 0;
                var r334_otop = r1_mix(r334_obot, r334_top, 0.675);
                var r334_sw = r312_AdviceStroke(3.5);
                var r334_m1 = r1_mix(r312_SB + r334_sw, r312_RightSB - r334_sw, 0.53) + r334_sw / 2;
                var r334_m2 = r1_mix(r312_SB, r334_m1, 0.5) + r312_TanSlope * r334_sw;
                var r334_ada = r312_ArchDepthA * ((r334_m1 - r312_SB) / (r312_RightSB - r312_SB) * 1.1);
                var r334_adb = r312_ArchDepthB * ((r334_m1 - r312_SB) / (r312_RightSB - r312_SB) * 1.1);
                var r334_atTurnBot = r334_obot - r334_ada / 4;
                var r334_shrink = 0.6;
                r334_currentGlyph.include(r312_dispiro(r312_straight.up.start(r334_m1 - r312_HSwToV(r334_sw * (1 - r334_shrink)), r334_otop - r334_adb, r312_widths.heading(r334_sw * r334_shrink, 0, r312_Upward)), r312_Arch.lhs(r334_otop, new r312_xn$NamedParameterPair$2Lrc9b("sw", r334_sw), new r312_xn$NamedParameterPair$2Lrc9b("swBefore", r334_sw * r334_shrink)), r312_flat(r312_SB, r334_otop - r334_ada), r312_curl(r312_SB, r334_obot + r334_adb), r312_Arch.lhs(r334_obot, new r312_xn$NamedParameterPair$2Lrc9b("sw", r334_sw), new r312_xn$NamedParameterPair$2Lrc9b("swAfter", r334_sw * r334_shrink)), r312_straight.up.end(r334_m1 - r312_HSwToV(r334_sw * (1 - r334_shrink)), r334_obot + r334_ada, r312_widths.heading(r334_sw * r334_shrink, 0, r312_Upward))));
                r334_currentGlyph.include(r312_dispiro(r312_widths.lhs(r334_sw), r312_corner(r334_m1, r334_atTurnBot + r334_ada, r312_heading(r312_Upward)), r312_corner(r334_m1, r334_otop - r334_adb, r312_heading(r312_Upward)), r312_corner(r334_m1, r334_otop, r312_widths.heading(r334_sw * r334_shrink, 0, r312_Upward))));
                r334_currentGlyph.include(r312_dispiro(r312_widths.lhs(r334_sw * r334_shrink), r312_straight.down.start(r334_m1 - r334_sw * r312_HSwToV(r334_shrink), r334_atTurnBot + r334_ada, r312_heading(r312_Downward)), r312_Arch.lhs(r334_atTurnBot, new r312_xn$NamedParameterPair$2Lrc9b("sw", r334_sw), new r312_xn$NamedParameterPair$2Lrc9b("swBefore", r334_sw * r334_shrink)), r312_flat(r312_RightSB, r334_atTurnBot + r334_ada), r312_curl(r312_RightSB, r334_top - r312_ArchDepthB), r312_HookEnd(r334_top, new r312_xn$NamedParameterPair$2Lrc9b("sw", r334_sw)), r312_g4(r312_SB, r334_top - r312_Hook)));
                return void 0;
            });
        };
        var r312_NormalHeight = r1_mix(r312_OperTop - r312_OperBot, r312_ParenTop - r312_ParenBot, 0.6);
        var r312_TallHeight = r1_mix(r312_OperTop - r312_OperBot, r312_ParenTop - r312_ParenBot, 0.875);
        var r312_AtConfig = {
            "threefold": [r312_ThreeFoldShape, r312_NormalHeight, false],
            "threefoldTall": [r312_ThreeFoldShape, r312_TallHeight, false],
            "threefoldSolidInner": [r312_ThreeFoldShape, r312_NormalHeight, true],
            "threefoldSolidInnerTall": [r312_ThreeFoldShape, r312_TallHeight, true],
            "fourfold": [r312_FourFoldShape, r312_NormalHeight, false],
            "fourfoldTall": [r312_FourFoldShape, r312_TallHeight, false],
            "fourfoldSolidInner": [r312_FourFoldShape, r312_NormalHeight, true],
            "fourfoldSolidInnerTall": [r312_FourFoldShape, r312_TallHeight, true],
            "compact": [r312_CompactShape, r312_CAP, false]
        };
        var _r312_t7 = Object.entries(r312_AtConfig)[Symbol.iterator]();
        var _r312_t8 = void 0;
        while (!(_r312_t8 = _r312_t7.next()).done) {
            _r312_t9 = _r312_t8.value;
            r312_suffix = _r312_t9[0];
            r312_body = _r312_t9[1][0];
            r312_height = _r312_t9[1][1];
            r312_fSolidInner = _r312_t9[1][2];
            _r312_t9[1];
            (function () {
                return r312_xn$GlyphSaveSink$2Lrc4b.save("at." + r312_suffix, null, r312_body(r312_height, r312_fSolidInner));
            })();
        }
        return r312_xn$selectvariant$7Hrq("at", "@");
    });
    return void 0;
});


