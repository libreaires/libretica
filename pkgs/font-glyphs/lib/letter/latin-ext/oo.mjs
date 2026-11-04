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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Latin-OO", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var r312_suffix, r312_DrawAt, r312_kdr, _r312_t11, _r312_t12, _r312_t13, _r312_t14, _r312_tag15;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_O = _r312_t1.O;
        var r312_OX = _r312_t1.OX;
        var r312_HookX = _r312_t1.HookX;
        var r312_ArchDepth = _r312_t1.ArchDepth;
        var r312_SmallArchDepth = _r312_t1.SmallArchDepth;
        var r312_CThin = _r312_t1.CThin;
        var r312_ArchDepthAClamped = _r312_t1.ArchDepthAClamped;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_widths = _r312_t2.widths;
        var r312_archv = _r312_t2.archv;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_DotAt = _r312_t5.DotAt;
        var r312_flatside = _r312_t5.flatside;
        var r312_Arch = _r312_t5.Arch;
        var r312_DotVariants = _r312_t5.DotVariants;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var r312_xn$derivecomposites$7Hrq = _r312_t6["derive-composites"];
        var r312_alias = _r312_t6.alias;
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Overlay"].resolve();
        var r312_InnerDot = _r312_t7.InnerDot;
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r312_OBarLeft = _r312_t8.OBarLeft;
        var r312_OBarRight = _r312_t8.OBarRight;
        var r312_OOShape = function (r317_df, r317_top, r317_ad) {
            var _r317_t0, _r317_t1;
            var r317_subDf = r317_df.slice(3, 2, r312_OX);
            var r317_ada = r317_subDf.archDepthAOf(r317_ad, r317_df.mvs);
            var r317_adb = r317_subDf.archDepthBOf(r317_ad, r317_df.mvs);
            return r312_union(r312_OBarRight.shape(new r312_xn$NamedParameterPair$2Lrc9b("top", r317_top), new r312_xn$NamedParameterPair$2Lrc9b("left", r317_df.leftSB), new r312_xn$NamedParameterPair$2Lrc9b("right", r317_df.middle + r312_HSwToV(0.5 * r317_df.mvs)), new r312_xn$NamedParameterPair$2Lrc9b("sw", r317_df.mvs), new r312_xn$NamedParameterPair$2Lrc9b("fine", r317_df.mvs * r312_CThin), new r312_xn$NamedParameterPair$2Lrc9b("ada", r317_ada), new r312_xn$NamedParameterPair$2Lrc9b("adb", r317_adb)), r312_OBarLeft.shape(new r312_xn$NamedParameterPair$2Lrc9b("top", r317_top), new r312_xn$NamedParameterPair$2Lrc9b("left", r317_df.middle - r312_HSwToV(0.5 * r317_df.mvs)), new r312_xn$NamedParameterPair$2Lrc9b("right", r317_df.rightSB), new r312_xn$NamedParameterPair$2Lrc9b("sw", r317_df.mvs), new r312_xn$NamedParameterPair$2Lrc9b("fine", r317_df.mvs * r312_CThin), new r312_xn$NamedParameterPair$2Lrc9b("ada", r317_ada), new r312_xn$NamedParameterPair$2Lrc9b("adb", r317_adb)));
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("OO", 42830, new r312_xn$Capture$2Lrc8.GlyphProc(function (r334_currentGlyph) {
            var _r334_t0, _r334_t1;
            var r334_df = r334_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleMM, 3));
            r334_currentGlyph.include(r334_df.markSet.capital());
            r334_currentGlyph.include(r312_OOShape(r334_df, r312_CAP, r312_ArchDepth));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("oo", 42831, new r312_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
            var _r340_t0, _r340_t1;
            var r340_df = r340_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleMM, 3));
            r340_currentGlyph.include(r340_df.markSet.e());
            r340_currentGlyph.include(r312_OOShape(r340_df, r312_XH, r312_SmallArchDepth));
            return void 0;
        }));
        r312_alias("cyrl/OO", 42648, "OO");
        r312_alias("cyrl/oo", 42649, "oo");
        r312_xn$GlyphSaveSink$2Lrc4b.save("turnooOpen", 43843, new r312_xn$Capture$2Lrc8.GlyphProc(function (r346_currentGlyph) {
            var _r346_t0, _r346_t1;
            var r346_df = r346_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleMM, 3));
            r346_currentGlyph.include(r346_df.markSet.e());
            r346_currentGlyph.setBaseAnchor("cvDecompose", 0, 0);
            var r346_subDf = r346_df.slice(3, 2, r312_OX);
            r346_currentGlyph.include(r312_dispiro(r312_widths.lhs(r346_df.mvs), r312_g4.left.start(Math.min(r346_df.leftSB + r312_HookX + r312_HSwToV(0.5 * r346_df.mvs), r312_Arch["adjust-x"].top(r346_subDf.middle, new r312_xn$NamedParameterPair$2Lrc9b("sw", r346_df.mvs))), r312_XH - r312_O), r312_archv(), r312_flatside.ld(r346_df.leftSB, 0, r312_XH, r346_subDf.smallArchDepthA, r346_subDf.smallArchDepthB), r312_OBarRight.arcEnd(new r312_xn$NamedParameterPair$2Lrc9b("bot", 0), new r312_xn$NamedParameterPair$2Lrc9b("left", r346_df.leftSB), new r312_xn$NamedParameterPair$2Lrc9b("right", r346_df.middle + r312_HSwToV(0.5 * r346_df.mvs)), new r312_xn$NamedParameterPair$2Lrc9b("sw", r346_df.mvs), new r312_xn$NamedParameterPair$2Lrc9b("fine", r346_df.mvs * r312_CThin), new r312_xn$NamedParameterPair$2Lrc9b("ada", r346_subDf.smallArchDepthA), new r312_xn$NamedParameterPair$2Lrc9b("adb", r346_subDf.smallArchDepthB), new r312_xn$NamedParameterPair$2Lrc9b("yend", r312_XH - r312_ArchDepthAClamped(r312_XH, 0, r346_subDf.smallArchDepthA, r346_subDf.smallArchDepthB) + r312_O))));
            r346_currentGlyph.include(r312_OBarLeft.earlessRounded(new r312_xn$NamedParameterPair$2Lrc9b("top", r312_XH), new r312_xn$NamedParameterPair$2Lrc9b("left", r346_df.middle - r312_HSwToV(0.5 * r346_df.mvs)), new r312_xn$NamedParameterPair$2Lrc9b("right", r346_df.rightSB), new r312_xn$NamedParameterPair$2Lrc9b("yTerminal", r312_XH / 2), new r312_xn$NamedParameterPair$2Lrc9b("sw", r346_df.mvs), new r312_xn$NamedParameterPair$2Lrc9b("fine", r346_df.mvs * r312_CThin), new r312_xn$NamedParameterPair$2Lrc9b("ada", r346_subDf.smallArchDepthA), new r312_xn$NamedParameterPair$2Lrc9b("adb", r346_subDf.smallArchDepthB), new r312_xn$NamedParameterPair$2Lrc9b("yend", r312_XH - r312_ArchDepthAClamped(r312_XH, 0, r346_subDf.smallArchDepthA, r346_subDf.smallArchDepthB) + r312_O)));
            return void 0;
        }));
        r312_xn$derivecomposites$7Hrq("turnooOpenSlash", 43844, "turnooOpen", "turnoeSlash/oSlash/overlay");
        var r312_CyrBinocularOODots = function (r370_df, r370_kHeight, r370_fRound, r370_kdr) {
            var _r370_t0, _r370_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r372_currentGlyph) {
                var _r372_t0, _r372_t1;
                var r372_space = r312_InnerDot.spaceOfDf(r370_df.slice(3, 2, r312_OX));
                var r372_spaceN = r312_InnerDot.spaceOfDf(r312_DivFrame(1));
                var r372_kHeight2 = r370_kHeight * Math.sqrt(r372_spaceN / r372_space);
                var r372_offset = 0.5 * (r372_space - 0) + r312_HSwToV(0.5 * r370_df.mvs);
                r372_currentGlyph.include(r312_InnerDot(-r372_offset, 0, r372_kHeight2, r370_fRound, r370_kdr, r372_space, 3));
                r372_currentGlyph.include(r312_InnerDot(+r372_offset, 0, r372_kHeight2, r370_fRound, r370_kdr, r372_space, 3));
                return void 0;
            });
        };
        var _r312_t9 = Object.entries(r312_DotVariants)[Symbol.iterator]();
        var _r312_t10 = void 0;
        while (!(_r312_t10 = _r312_t9.next()).done) {
            _r312_t11 = _r312_t10.value;
            r312_suffix = _r312_t11[0];
            r312_DrawAt = _r312_t11[1][0];
            r312_kdr = _r312_t11[1][1];
            _r312_t11[1];
            (function () {
                r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/OOBinocular/dots." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r380_currentGlyph) {
                    var _r380_t0, _r380_t1;
                    r380_currentGlyph.setWidth(0);
                    r380_currentGlyph.setMarkAnchor("slash", 0, 0, 0, 0);
                    var r380_df = r312_DivFrame(r312_para.advanceScaleMM, 3);
                    r380_currentGlyph.include(r312_CyrBinocularOODots(r380_df, 2, r312_DrawAt === r312_DotAt, r312_kdr));
                    return void 0;
                }));
                return r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/ooBinocular/dots." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r386_currentGlyph) {
                    var _r386_t0, _r386_t1;
                    r386_currentGlyph.setWidth(0);
                    r386_currentGlyph.setMarkAnchor("slash", 0, 0, 0, 0);
                    var r386_df = r312_DivFrame(r312_para.advanceScaleMM, 3);
                    r386_currentGlyph.include(r312_CyrBinocularOODots(r386_df, 1.5, r312_DrawAt === r312_DotAt, r312_kdr));
                    return void 0;
                }));
            })();
        }
        r312_xn$selectvariant$7Hrq("cyrl/OOBinocular/dots", new r312_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r312_xn$selectvariant$7Hrq("cyrl/ooBinocular/dots", new r312_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r312_xn$derivecomposites$7Hrq("cyrl/OOBinocular", 42604, "cyrl/OO", "cyrl/OOBinocular/dots");
        return r312_xn$derivecomposites$7Hrq("cyrl/ooBinocular", 42605, "cyrl/oo", "cyrl/ooBinocular/dots");
    });
    return void 0;
});


