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
var r1_DependentSelector = _r1_t9.DependentSelector;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Armenian-Feh", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t8, _r313_t9;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_CAP = _r313_t1.CAP;
        var r313_Ascender = _r313_t1.Ascender;
        var r313_Descender = _r313_t1.Descender;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_OX = _r313_t1.OX;
        var r313_Hook = _r313_t1.Hook;
        var r313_ArchDepth = _r313_t1.ArchDepth;
        var r313_SmallArchDepth = _r313_t1.SmallArchDepth;
        var r313_HBarPos = _r313_t1.HBarPos;
        var r313_SLAB = _r313_t1.SLAB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_end = _r313_t2.end;
        var r313_straight = _r313_t2.straight;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_archv = _r313_t2.archv;
        var r313_arcvh = _r313_t2.arcvh;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_VBar = _r313_t5.VBar;
        var r313_HookEnd = _r313_t5.HookEnd;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_SerifFrame = _r313_t7.SerifFrame;
        var r313_FehBody = function (r317_df, r317_top, r317_bot, r317_sw, r317_hook, r317_ada, r317_adb) {
            var _r317_t0, _r317_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r319_currentGlyph) {
                var _r319_t0, _r319_t1;
                var r319_midy = r1_mix(r317_bot, r317_top, r313_HBarPos);
                var r319_midyTop = r319_midy + 0.5 * r317_sw;
                var r319_midyBot = r319_midy - 0.5 * r317_sw;
                r319_currentGlyph.include(r313_dispiro(r313_widths.lhs(r317_sw), r313_straight.left.start(r317_df.middle, r317_top), r313_archv(), r313_g4(r317_df.leftSB, r1_mix(r317_top, r319_midyBot, r317_ada / (r317_ada + r317_adb))), r313_arcvh(), r313_straight.right.end(r317_df.middle, r319_midyBot, r313_heading(r313_Rightward))));
                r319_currentGlyph.include(r313_dispiro(r313_widths.rhs(r317_sw), r313_straight.right.start(r317_df.middle, r319_midyTop, r313_heading(r313_Rightward)), r313_archv(), r313_g4(r317_df.rightSB - r313_OX, r1_mix(r319_midyTop, r317_bot, r317_adb / (r317_ada + r317_adb))), r313_HookEnd(r317_bot, new r313_xn$NamedParameterPair$2Lrc9b("sw", r317_sw)), r313_g4(r317_df.leftSB + r313_OX, r317_bot + r317_hook)));
                return void 0;
            });
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save("armn/Feh", 1366, new r313_xn$Capture$2Lrc8.GlyphProc(function (r325_currentGlyph) {
            var r325_sf, _r325_t0, _r325_t1;
            var r325_df = r325_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleM, 3));
            r325_currentGlyph.include(r325_df.markSet.capital());
            var r325_sw = r325_df.adviceThinnerStroke2(3, 3, r313_CAP);
            var r325_ada = r325_df.archDepthAOf(r313_ArchDepth, r325_sw);
            var r325_adb = r325_df.archDepthBOf(r313_ArchDepth, r325_sw);
            r325_currentGlyph.include(r313_FehBody(r325_df, r313_CAP, 0, r325_sw, r313_Hook, r325_ada, r325_adb));
            r325_currentGlyph.include(r313_VBar.m(r325_df.middle, 0, r313_CAP, r325_sw));
            if (r313_SLAB) {
                r325_sf = r313_SerifFrame.fromDf(r325_df, r313_CAP, 0, new r313_xn$NamedParameterPair$2Lrc9b("swSerif", r325_sw));
                r325_currentGlyph.include(r325_sf.mt.right);
            }
            return void 0;
        }));
        return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/feh", 1414, new r313_xn$Capture$2Lrc8.GlyphProc(function (r334_currentGlyph) {
            var r334_sf, _r334_t0, _r334_t1;
            var r334_df = r334_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleM, 3));
            r334_currentGlyph.include(r334_df.markSet.bp());
            var r334_sw = r334_df.adviceThinnerStroke2(3, 3, r313_Ascender);
            var r334_ada = r334_df.archDepthAOf(r313_SmallArchDepth, r334_sw);
            var r334_adb = r334_df.archDepthBOf(r313_SmallArchDepth, r334_sw);
            r334_currentGlyph.include(r313_FehBody(r334_df, r313_Ascender, 0, r334_sw, r313_Hook, r334_ada, r334_adb));
            r334_currentGlyph.include(r313_VBar.m(r334_df.middle, r313_Descender, r313_Ascender, r334_sw));
            if (r313_SLAB && !r313_para.isItalic) {
                r334_sf = r313_SerifFrame.fromDf(r334_df, r313_Ascender, r313_Descender, new r313_xn$NamedParameterPair$2Lrc9b("swSerif", r334_sw));
                r334_currentGlyph.include(r334_sf.mb.fullCenter);
            }
            return void 0;
        }));
    });
    return void 0;
});


