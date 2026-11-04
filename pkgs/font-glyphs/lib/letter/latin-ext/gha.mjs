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
var r1_SuffixCfg = _r1_t8.SuffixCfg;
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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Gha", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var r312_suffix, r312_terminal, r312_slabType, _r312_t11, _r312_t12, _r312_t13, _r312_t14, _r312_tag15;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var r312_Descender = _r312_t1.Descender;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_Rightward = _r312_t1.Rightward;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_Jut = _r312_t1.Jut;
        var r312_MidJutSide = _r312_t1.MidJutSide;
        var r312_SideJut = _r312_t1.SideJut;
        var r312_DToothlessRise = _r312_t1.DToothlessRise;
        var r312_ArchDepthA = _r312_t1.ArchDepthA;
        var r312_ArchDepthB = _r312_t1.ArchDepthB;
        var r312_SmallArchDepthA = _r312_t1.SmallArchDepthA;
        var r312_SmallArchDepthB = _r312_t1.SmallArchDepthB;
        var r312_TINY = _r312_t1.TINY;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_alsoThru = _r312_t2.alsoThru;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_xn$noshape$3cah = _r312_t5["no-shape"];
        var r312_tagged = _r312_t5.tagged;
        var r312_HSerif = _r312_t5.HSerif;
        var r312_VBar = _r312_t5.VBar;
        var r312_flatside = _r312_t5.flatside;
        var r312_Arch = _r312_t5.Arch;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r312_RightwardTailedBar = _r312_t7.RightwardTailedBar;
        var r312_RightwardDiagTailedBar = _r312_t7.RightwardDiagTailedBar;
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r312_LeaningAnchor = _r312_t8.LeaningAnchor;
        var r312_xn$TERMINALNORMAL$9XZu = 0;
        var r312_xn$TERMINALTAILED$9XZu = 1;
        var r312_xn$TERMINALDIAG$9XZu = 2;
        var r312_xn$SLABNONE$5sIl = 0;
        var r312_xn$SLABOUTER$5sIl = 1;
        var r312_xn$SLABFULL$5sIl = 2;
        var r312_GhaShape = function (r317_df, r317_terminal, r317_top, r317_bot, r317_ada, r317_adb, r317_slabType) {
            var _r317_t0, _r317_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r319_currentGlyph) {
                var r319___, _r319_t0, _r319_t1, _r319_t2, _r319_t3;
                var r319_sw = r317_df.adviceThinnerStroke(2, 0.75);
                var r319_gap = 0.375 * (r317_df.rightSB - r317_df.leftSB) - r312_HSwToV(0.25 * r319_sw) + r319_sw / 16;
                var r319_subDf = r312_DivFrame(Math.min((r317_df.width - r319_gap) / r312_Width, 0.75 * r317_df.adws), 2);
                r319_currentGlyph.include(r312_union(r312_VBar.r(r319_subDf.rightSB, 0 + r312_DToothlessRise, r317_top - r312_DToothlessRise, r319_sw), r312_dispiro(r312_widths.lhs(r319_sw), r312_g4(r319_subDf.rightSB, r317_top - r312_DToothlessRise), r312_Arch.lhs(r317_top, new r312_xn$NamedParameterPair$2Lrc9b("sw", r319_sw), new r312_xn$NamedParameterPair$2Lrc9b("blendPre", [])), r312_flatside.ld(r319_subDf.leftSB, 0, r317_top, r317_ada * 0.75 * r317_df.adws, r317_adb * 0.75 * r317_df.adws), r312_Arch.lhs(0, new r312_xn$NamedParameterPair$2Lrc9b("sw", r319_sw), new r312_xn$NamedParameterPair$2Lrc9b("blendPost", [])), r312_g4(r319_subDf.rightSB, 0 + r312_DToothlessRise))));
                r319_currentGlyph.include((_r319_t0 = r317_terminal, _r319_t0 === r312_xn$TERMINALTAILED$9XZu ? r312_RightwardTailedBar(r317_df.rightSB, r317_bot, r317_top, r319_sw) : _r319_t0 === r312_xn$TERMINALDIAG$9XZu ? r312_RightwardDiagTailedBar(r317_df.rightSB, r317_bot, r317_top, r319_sw) : (r319___ = _r319_t0, r312_VBar.r(r317_df.rightSB, r317_bot, r317_top, r319_sw))));
                r319_currentGlyph.include(r312_dispiro(r312_widths.lhs(r319_sw), r312_flat(r319_subDf.rightSB - r312_HSwToV(0.5 * r319_sw), r317_top - r312_DToothlessRise - r319_sw, r312_heading(r312_Rightward)), r312_curl(r319_subDf.rightSB - r312_HSwToV(0.5 * r319_sw) + r312_TINY, r317_top - r312_DToothlessRise - r319_sw, r312_heading(r312_Rightward)), r312_alsoThru(0.5, 0.15), r312_g4(r317_df.rightSB - r312_HSwToV(r319_sw), r317_top, r312_widths.rhs(r319_sw))));
                r319_currentGlyph.include(r312_tagged("serifRB", (_r319_t1 = r317_slabType, _r319_t1 === r312_xn$SLABOUTER$5sIl ? r312_HSerif.rb(r317_df.rightSB, r317_bot, r312_SideJut, r319_sw) : _r319_t1 === r312_xn$SLABFULL$5sIl ? r317_bot ? r312_union(r312_HSerif.rb(r317_df.rightSB - r312_HSwToV(0.5 * r319_sw), r317_bot, r312_Jut - r312_HSwToV(0.5 * (r312_Stroke - r319_sw)), r319_sw), r312_HSerif.lb(r317_df.rightSB - r312_HSwToV(0.5 * r319_sw), r317_bot, r312_MidJutSide - r312_HSwToV(0.5 * (r312_Stroke - r319_sw)), r319_sw)) : r312_HSerif.mb(r317_df.rightSB - r312_HSwToV(0.5 * r319_sw), r317_bot, r312_Jut - r312_HSwToV(0.5 * (r312_Stroke - r319_sw)), r319_sw) : (r319___ = _r319_t1, r312_xn$noshape$3cah()))));
                if (r317_bot) r319_currentGlyph.include(r312_LeaningAnchor.Below.VBar.r(r317_df.rightSB, r319_sw));
                return void 0;
            });
        };
        var r312_GhaConfig = {
            "serifless": [r312_xn$TERMINALNORMAL$9XZu, r312_xn$SLABNONE$5sIl],
            "motionBottomSerifed": [r312_xn$TERMINALNORMAL$9XZu, r312_xn$SLABOUTER$5sIl],
            "bottomSerifed": [r312_xn$TERMINALNORMAL$9XZu, r312_xn$SLABFULL$5sIl],
            "tailedSerifless": [r312_xn$TERMINALTAILED$9XZu, r312_xn$SLABNONE$5sIl],
            "diagonalTailedSerifless": [r312_xn$TERMINALDIAG$9XZu, r312_xn$SLABNONE$5sIl]
        };
        var _r312_t9 = Object.entries(r312_GhaConfig)[Symbol.iterator]();
        var _r312_t10 = void 0;
        while (!(_r312_t10 = _r312_t9.next()).done) {
            _r312_t11 = _r312_t10.value;
            r312_suffix = _r312_t11[0];
            r312_terminal = _r312_t11[1][0];
            r312_slabType = _r312_t11[1][1];
            _r312_t11[1];
            (function () {
                r312_xn$GlyphSaveSink$2Lrc4b.save("Gha." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r334_currentGlyph) {
                    var _r334_t0, _r334_t1;
                    var r334_df = r334_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
                    r334_currentGlyph.include(r334_df.markSet.capital());
                    r334_currentGlyph.include(r312_GhaShape(r334_df, r312_terminal, r312_CAP, 0, r312_ArchDepthA, r312_ArchDepthB, r312_slabType));
                    return void 0;
                }));
                return r312_xn$GlyphSaveSink$2Lrc4b.save("gha." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
                    var _r340_t0, _r340_t1;
                    var r340_df = r340_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
                    r340_currentGlyph.include(r340_df.markSet.p());
                    r340_currentGlyph.include(r312_GhaShape(r340_df, r312_terminal, r312_XH, r312_Descender, r312_SmallArchDepthA, r312_SmallArchDepthB, r312_slabType));
                    return void 0;
                }));
            })();
        }
        r312_xn$selectvariant$7Hrq("Gha", 418, new r312_xn$NamedParameterPair$2Lrc9b("follow", "gha"));
        return r312_xn$selectvariant$7Hrq("gha", 419);
    });
    return void 0;
});


