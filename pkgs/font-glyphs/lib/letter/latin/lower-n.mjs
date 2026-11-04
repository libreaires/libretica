"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var r1_boole = _r1_t8.boole;
var _r1_t9 = _s0_t1;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
var r1_Joining = _r1_t9.Joining;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Lower-N", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_Body, r313_tailed, r313_sLT, r313_sLB, r313_sRB, _r313_t14, _r313_t16, _r313_t17, _r313_t18, _r313_tag19;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_MarkSet = _r313_t0.MarkSet;
        var r313_AS_BASE = _r313_t0.AS_BASE;
        var r313_ALSO_METRICS = _r313_t0.ALSO_METRICS;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Ascender = _r313_t1.Ascender;
        var r313_Descender = _r313_t1.Descender;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Downward = _r313_t1.Downward;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_Hook = _r313_t1.Hook;
        var r313_HookX = _r313_t1.HookX;
        var r313_SmallArchDepth = _r313_t1.SmallArchDepth;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_Jut = _r313_t1.Jut;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_SideJut = _r313_t1.SideJut;
        var r313_DToothlessRise = _r313_t1.DToothlessRise;
        var r313_ShoulderFine = _r313_t1.ShoulderFine;
        var r313_StrokeWidthBlend = _r313_t1.StrokeWidthBlend;
        var r313_ArchDepthAOf = _r313_t1.ArchDepthAOf;
        var r313_ArchDepthBOf = _r313_t1.ArchDepthBOf;
        var r313_ArchDepthA = _r313_t1.ArchDepthA;
        var r313_ArchDepthB = _r313_t1.ArchDepthB;
        var r313_SmallArchDepthA = _r313_t1.SmallArchDepthA;
        var r313_SmallArchDepthB = _r313_t1.SmallArchDepthB;
        var r313_TINY = _r313_t1.TINY;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_straight = _r313_t2.straight;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_intersection = _r313_t4.intersection;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_xn$noshape$3cah = _r313_t5["no-shape"];
        var r313_MaskBelow = _r313_t5.MaskBelow;
        var r313_MaskLeft = _r313_t5.MaskLeft;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_xn$derivecomposites$7Hrq = _r313_t6["derive-composites"];
        var r313_alias = _r313_t6.alias;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_LeaningAnchor = _r313_t7.LeaningAnchor;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateAccentedComposition = _r313_t8.CreateAccentedComposition;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_CurlyTail = _r313_t9.CurlyTail;
        var r313_nShoulder = _r313_t9.nShoulder;
        var r313_RightwardTailedBar = _r313_t9.RightwardTailedBar;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_MidHook = _r313_t10.MidHook;
        var r313_CyrDescender = _r313_t10.CyrDescender;
        var r313_PalatalHook = _r313_t10.PalatalHook;
        var r313_RetroflexHook = _r313_t10.RetroflexHook;
        var _r313_t11 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_VerticalHook = _r313_t11.VerticalHook;
        var r313_EngHook = _r313_t11.EngHook;
        var r313_SerifFrame = _r313_t11.SerifFrame;
        var r313_AdjustTrailingAnchor = function () {
            var _r321_t0, _r321_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r323_currentGlyph) {
                var _r323_t0, _r323_t1;
                var r323_trAnchor = r323_currentGlyph.baseAnchors.trailing;
                if (r323_trAnchor) r323_currentGlyph.setBaseAnchor("trailing", r323_trAnchor.x + r313_SideJut, r323_trAnchor.y);
                return void 0;
            });
        };
        var r313_NHTB = function (r325_df, r325_top) {
            var _r325_t0, _r325_t1;
            return r313_VBar.l(r325_df.leftSB, 0, r325_top);
        };
        var r313_NTopLeftSerif = function (r326_df, r326_top, r326__sw) {
            var _r326_t0, _r326_t1;
            var r326_sf = r313_SerifFrame.fromDf(r326_df, r326_top, 0, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r326__sw));
            return r326_sf.lt.outer;
        };
        var r313_NBottomLeftSerif = function (r328_df, r328_y, r328__sw) {
            var _r328_t0, _r328_t1;
            var r328_sf = r313_SerifFrame.fromDf(r328_df, r313_Ascender, r328_y, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r328__sw));
            return r328_sf.lb.full;
        };
        var r313_NBottomLeftOuterSerif = function (r330_df, r330_y, r330__sw) {
            var _r330_t0, _r330_t1;
            var r330_sf = r313_SerifFrame.fromDf(r330_df, r313_Ascender, r330_y, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r330__sw));
            return r330_sf.lb.outer;
        };
        var r313_NBottomLeftSerifAsymmetric = function (r332_df, r332_y, r332__sw) {
            var _r332_t0, _r332_t1;
            var r332_sf = r313_SerifFrame.fromDf(r332_df, r313_Ascender, r332_y, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r332__sw));
            return r332_sf.lb.fullSide;
        };
        var r313_NBottomLeftYatSerif = function (r334_df, r334_y, r334__sw) {
            var _r334_t0, _r334_t1;
            var r334_sf = r313_SerifFrame.fromDf(r334_df, r313_Ascender, r334_y, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r334__sw));
            return r334_sf.enoughSpaceForFullSerifs ? r334_sf.lb.full : r334_sf.lb.outer;
        };
        var r313_NBottomRightSerifUpright = function (r336_df, r336_y, r336__sw) {
            var _r336_t0, _r336_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r338_currentGlyph) {
                var _r338_t0, _r338_t1;
                var r338_sf = r313_SerifFrame.fromDf(r336_df, r313_Ascender, r336_y, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r336__sw));
                r338_currentGlyph.include(r338_sf.rb.full);
                r338_currentGlyph.include(r313_AdjustTrailingAnchor());
                return void 0;
            });
        };
        var r313_NBottomRightSerifItalic = function (r342_df, r342_y, r342__sw) {
            var _r342_t0, _r342_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r344_currentGlyph) {
                var _r344_t0, _r344_t1;
                var r344_sf = r313_SerifFrame.fromDf(r342_df, r313_Ascender, r342_y, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r342__sw));
                r344_currentGlyph.include(r344_sf.rb.outer);
                r344_currentGlyph.include(r313_AdjustTrailingAnchor());
                return void 0;
            });
        };
        var r313_NBottomRightSerifAsymmetric = function (r348_df, r348_y, r348__sw) {
            var _r348_t0, _r348_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r350_currentGlyph) {
                var _r350_t0, _r350_t1;
                var r350_sf = r313_SerifFrame.fromDf(r348_df, r313_Ascender, r348_y, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r348__sw));
                r350_currentGlyph.include(r350_sf.rb.fullSide);
                r350_currentGlyph.include(r313_AdjustTrailingAnchor());
                return void 0;
            });
        };
        var r313_NBottomRightYatSerif = function (r354_df, r354_y, r354__sw) {
            var _r354_t0, _r354_t1;
            var r354_sf = r313_SerifFrame.fromDf(r354_df, r313_Ascender, r354_y, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r354__sw));
            return r354_sf.enoughSpaceForFullSerifs ? r354_sf.rb.full : r313_xn$noshape$3cah();
        };
        var r313_EaredBody = function (r356_top, r356_left, r356_right, r356_yBR, r356_sw, r356__ada, r356__adb) {
            var _r356_t0, _r356_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r358_currentGlyph) {
                var _r358_t0, _r358_t1;
                r358_currentGlyph.include(r313_VBar.l(r356_left, 0, r356_top, r356_sw));
                var r358_ada = r1_fallback(r356__ada, r313_SmallArchDepthA);
                var r358_adb = r1_fallback(r356__adb, r313_SmallArchDepthB);
                r358_currentGlyph.include(r313_nShoulder.shape(new r313_xn$NamedParameterPair$2Lrc9b("left", r356_left + r313_HSwToV(r356_sw)), new r313_xn$NamedParameterPair$2Lrc9b("right", r356_right), new r313_xn$NamedParameterPair$2Lrc9b("top", r356_top), new r313_xn$NamedParameterPair$2Lrc9b("bottom", r356_yBR), new r313_xn$NamedParameterPair$2Lrc9b("ada", r358_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r358_adb), new r313_xn$NamedParameterPair$2Lrc9b("fine", r313_ShoulderFine * (r356_sw / r313_Stroke)), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r356_sw)));
                r358_currentGlyph.setBaseAnchor("overlay", r1_mix(r356_left, r356_right, 0.5), r356_top / 2);
                r358_currentGlyph.setBaseAnchor("strike", r1_mix(r356_left, r356_right, 0.5), r356_top / 2);
                return void 0;
            });
        };
        var r313_FlatTopBody = function (r371_top, r371_left, r371_right, r371_yBR, r371_sw, r371__ada, r371__adb) {
            var _r371_t0, _r371_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r373_currentGlyph) {
                var _r373_t0, _r373_t1;
                r373_currentGlyph.include(r313_VBar.l(r371_left, 0, r371_top, r371_sw));
                var r373_ada = r1_fallback(r371__ada, r313_SmallArchDepthA);
                var r373_adb = r1_fallback(r371__adb, r313_SmallArchDepthB);
                r373_currentGlyph.include(r313_nShoulder.earlessCorner(new r313_xn$NamedParameterPair$2Lrc9b("left", r371_left), new r313_xn$NamedParameterPair$2Lrc9b("right", r371_right), new r313_xn$NamedParameterPair$2Lrc9b("top", r371_top), new r313_xn$NamedParameterPair$2Lrc9b("bottom", r371_yBR), new r313_xn$NamedParameterPair$2Lrc9b("ada", r373_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r373_adb), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r371_sw), new r313_xn$NamedParameterPair$2Lrc9b("rise", 0)));
                r373_currentGlyph.setBaseAnchor("overlay", r1_mix(r371_left, r371_right, 0.5), r371_top / 2);
                r373_currentGlyph.setBaseAnchor("strike", r1_mix(r371_left, r371_right, 0.5), r371_top / 2);
                return void 0;
            });
        };
        var r313_EarlessCornerBody = function (r386_top, r386_left, r386_right, r386_yBR, r386_sw, r386__ada, r386__adb) {
            var _r386_t0, _r386_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r388_currentGlyph) {
                var _r388_t0, _r388_t1;
                r388_currentGlyph.include(r313_VBar.l(r386_left, 0, r386_top - r313_DToothlessRise, r386_sw));
                var r388_ada = r1_fallback(r386__ada, r313_SmallArchDepthA);
                var r388_adb = r1_fallback(r386__adb, r313_SmallArchDepthB);
                r388_currentGlyph.include(r313_nShoulder.earlessCorner(new r313_xn$NamedParameterPair$2Lrc9b("left", r386_left), new r313_xn$NamedParameterPair$2Lrc9b("right", r386_right), new r313_xn$NamedParameterPair$2Lrc9b("top", r386_top), new r313_xn$NamedParameterPair$2Lrc9b("bottom", r386_yBR), new r313_xn$NamedParameterPair$2Lrc9b("ada", r388_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r388_adb), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r386_sw)));
                r388_currentGlyph.setBaseAnchor("overlay", r1_mix(r386_left, r386_right, 0.5), r386_top / 2);
                r388_currentGlyph.setBaseAnchor("strike", r1_mix(r386_left, r386_right, 0.5), r386_top / 2);
                return void 0;
            });
        };
        var r313_EarlessRoundedBody = function (r400_top, r400_left, r400_right, r400_yBR, r400_sw, r400__ada, r400__adb) {
            var _r400_t0, _r400_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r402_currentGlyph) {
                var _r402_t0, _r402_t1;
                var r402_ada = r1_fallback(r400__ada, r313_SmallArchDepthA);
                var r402_adb = r1_fallback(r400__adb, r313_SmallArchDepthB);
                r402_currentGlyph.include(r313_nShoulder.earlessRounded(new r313_xn$NamedParameterPair$2Lrc9b("left", r400_left), new r313_xn$NamedParameterPair$2Lrc9b("right", r400_right), new r313_xn$NamedParameterPair$2Lrc9b("top", r400_top), new r313_xn$NamedParameterPair$2Lrc9b("bottom", r400_yBR), new r313_xn$NamedParameterPair$2Lrc9b("ada", r402_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r402_adb), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r400_sw), new r313_xn$NamedParameterPair$2Lrc9b("leftY0", 0)));
                r402_currentGlyph.setBaseAnchor("overlay", r1_mix(r400_left, r400_right, 0.5), r400_top / 2);
                r402_currentGlyph.setBaseAnchor("strike", r1_mix(r400_left, r400_right, 0.5), r400_top / 2);
                return void 0;
            });
        };
        var r313_EndingTail = function (r414_right, r414_yBot, r414_yBR, r414_sw) {
            var _r414_t0, _r414_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r416_currentGlyph) {
                var _r416_t0, _r416_t1;
                r416_currentGlyph.include(r313_RightwardTailedBar(r414_right, r414_yBot, r414_yBR, r414_sw));
                r416_currentGlyph.include(r313_AdjustTrailingAnchor());
                return void 0;
            });
        };
        var r313_NConfig = r1_SuffixCfg.weave({
            "": r313_EaredBody,
            "flatTop": r313_FlatTopBody,
            "earlessCorner": r313_EarlessCornerBody,
            "earlessRounded": r313_EarlessRoundedBody,
            "earlessCornerHTB": r313_EarlessCornerBody,
            "earlessRoundedHTB": r313_EarlessRoundedBody
        }, {
            "straight": 0,
            "tailed": 1
        }, function (r419_body, r419_tail) {
            var r419___, _r419_t0, _r419_t1, _r419_t2, _r419_t3, _r419_t4, _r419_t5, _r419_t6;
            return {
                "serifless": [void 0, void 0, void 0],
                "topLeftSerifed": [(_r419_t0 = r419_body, _r419_t0 === "earlessCorner" || _r419_t0 === "earlessRounded" ? void 0 : _r419_t0 === "earlessCornerHTB" || _r419_t0 === "earlessRoundedHTB" ? r313_NHTB : (r419___ = _r419_t0, r313_NTopLeftSerif)), void 0, void 0],
                "motionSerifed": [(_r419_t1 = r419_body, _r419_t1 === "earlessCorner" || _r419_t1 === "earlessRounded" ? void 0 : _r419_t1 === "earlessCornerHTB" || _r419_t1 === "earlessRoundedHTB" ? r313_NHTB : (r419___ = _r419_t1, r313_NTopLeftSerif)), void 0, r419_tail !== "tailed" ? r313_NBottomRightSerifItalic : void 0],
                "serifed": [(_r419_t2 = r419_body, _r419_t2 === "earlessCorner" || _r419_t2 === "earlessRounded" ? void 0 : _r419_t2 === "earlessCornerHTB" || _r419_t2 === "earlessRoundedHTB" ? r313_NHTB : (r419___ = _r419_t2, r313_NTopLeftSerif)), r313_NBottomLeftSerif, r419_tail !== "tailed" ? r313_NBottomRightSerifUpright : void 0],
                "serifedItalicYatCorner": [(_r419_t3 = r419_body, _r419_t3 === "earlessCorner" || _r419_t3 === "earlessRounded" ? void 0 : _r419_t3 === "earlessCornerHTB" || _r419_t3 === "earlessRoundedHTB" ? r313_NHTB : (r419___ = _r419_t3, r313_NTopLeftSerif)), r313_NBottomLeftYatSerif, r313_NBottomRightYatSerif],
                "serifedItalicYatCursive": [(_r419_t4 = r419_body, _r419_t4 === "earlessCorner" || _r419_t4 === "earlessRounded" ? void 0 : _r419_t4 === "earlessCornerHTB" || _r419_t4 === "earlessRoundedHTB" ? r313_NHTB : (r419___ = _r419_t4, r313_NTopLeftSerif)), r313_NBottomLeftYatSerif, void 0]
            };
        });
        var _r313_t12 = Object.entries(r313_NConfig)[Symbol.iterator]();
        var _r313_t13 = void 0;
        while (!(_r313_t13 = _r313_t12.next()).done) {
            _r313_t14 = _r313_t13.value;
            r313_suffix = _r313_t14[0];
            r313_Body = _r313_t14[1][0];
            r313_tailed = _r313_t14[1][1];
            r313_sLT = _r313_t14[1][2][0];
            r313_sLB = _r313_t14[1][2][1];
            r313_sRB = _r313_t14[1][2][2];
            _r313_t14[1][2];
            _r313_t14[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("n." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r425_currentGlyph) {
                    var _r425_t0, _r425_t1;
                    r425_currentGlyph.include(r313_MarkSet.e());
                    r425_currentGlyph.setBaseAnchor("trailing", r313_RightSB, 0);
                    r425_currentGlyph.include(r313_Body(r313_XH, r313_SB, r313_RightSB, r313_tailed ? r313_XH - r313_SmallArchDepthB + r313_O : 0, r313_Stroke));
                    if (r313_tailed) r425_currentGlyph.include(r313_EndingTail(r313_RightSB, 0, r313_XH - r313_SmallArchDepthB, r313_Stroke));
                    if (r313_sLT) r425_currentGlyph.include(r313_sLT(r313_DivFrame(1), r313_XH));
                    if (r313_sLB) r425_currentGlyph.include(r313_sLB(r313_DivFrame(1), 0));
                    if (r313_sRB) r425_currentGlyph.include(r313_sRB(r313_DivFrame(1), 0));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("nHookLeft." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r435_currentGlyph) {
                    var _r435_t0, _r435_t1;
                    r435_currentGlyph.include(r313_xn$referglyph$1aao("n." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r435_currentGlyph.ejectTagged("serifLB");
                    r435_currentGlyph.include(r313_PalatalHook.lExt(r313_SB, 0));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("nCapLongLeg." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r441_currentGlyph) {
                    var _r441_t0, _r441_t1;
                    r441_currentGlyph.include(r313_MarkSet.capDesc());
                    r441_currentGlyph.include(r313_LeaningAnchor.Below.VBar.r(r313_RightSB));
                    r441_currentGlyph.include(r313_Body(r313_CAP, r313_SB, r313_RightSB, r313_tailed ? r313_CAP - r313_SmallArchDepthB + r313_O : r313_Descender, r313_Stroke, r313_ArchDepthA, r313_ArchDepthB));
                    if (r313_tailed) r441_currentGlyph.include(r313_EndingTail(r313_RightSB, r313_Descender, r313_CAP - r313_SmallArchDepthB, r313_Stroke));
                    if (r313_sLT) r441_currentGlyph.include(r313_sLT(r313_DivFrame(1), r313_CAP));
                    if (r313_sLB) r441_currentGlyph.include(r313_sLB(r313_DivFrame(1), 0));
                    if (r313_sRB) r441_currentGlyph.include((r313_sLB ? r313_NBottomRightSerifAsymmetric : r313_NBottomRightSerifItalic)(r313_DivFrame(1), r313_Descender));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("nLongLeg." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r451_currentGlyph) {
                    var _r451_t0, _r451_t1;
                    r451_currentGlyph.include(r313_MarkSet.p());
                    r451_currentGlyph.include(r313_LeaningAnchor.Below.VBar.r(r313_RightSB));
                    r451_currentGlyph.include(r313_Body(r313_XH, r313_SB, r313_RightSB, r313_tailed ? r313_XH - r313_SmallArchDepthB + r313_O : r313_Descender, r313_Stroke));
                    if (r313_tailed) r451_currentGlyph.include(r313_EndingTail(r313_RightSB, r313_Descender, r313_XH - r313_SmallArchDepthB, r313_Stroke));
                    if (r313_sLT) r451_currentGlyph.include(r313_sLT(r313_DivFrame(1), r313_XH));
                    if (r313_sLB) r451_currentGlyph.include(r313_sLB(r313_DivFrame(1), 0));
                    if (r313_sRB) r451_currentGlyph.include((r313_sLB ? r313_NBottomRightSerifAsymmetric : r313_NBottomRightSerifItalic)(r313_DivFrame(1), r313_Descender));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/peMidHook.italic." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r461_currentGlyph) {
                    var _r461_t0, _r461_t1;
                    var r461_df = r461_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                    r461_currentGlyph.include(r461_df.markSet.p());
                    var r461_subDf = r461_df.slice(3, 2);
                    r461_currentGlyph.include(r313_Body(r313_XH, r461_subDf.leftSB, r461_subDf.rightSB, r313_tailed ? r313_XH - r461_subDf.smallArchDepthB + r313_O : 0, r461_df.mvs, r461_subDf.smallArchDepthA, r461_subDf.smallArchDepthB));
                    if (r313_tailed) r461_currentGlyph.include(r313_EndingTail(r461_subDf.rightSB, 0, r313_XH - r461_subDf.smallArchDepthB, r461_df.mvs));
                    if (r313_sLT) r461_currentGlyph.include(r313_sLT(r461_subDf, r313_XH));
                    if (r313_sLB) r461_currentGlyph.include(r313_sLB(r461_subDf, 0));
                    if (r313_sRB) r461_currentGlyph.include(r313_sRB(r461_subDf, 0));
                    r461_currentGlyph.include(r313_MidHook.m(r461_df, r313_XH));
                    return void 0;
                }));
                return !r313_tailed ? (r313_xn$GlyphSaveSink$2Lrc4b.save("nRTail." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r472_currentGlyph) {
                    var _r472_t0, _r472_t1;
                    r472_currentGlyph.include(r313_MarkSet.e());
                    r472_currentGlyph.include(r313_Body(r313_XH, r313_SB, r313_RightSB, 0, r313_Stroke));
                    r472_currentGlyph.include(r313_RetroflexHook.rExt(r313_RightSB, 0));
                    if (r313_sLT) r472_currentGlyph.include(r313_sLT(r313_DivFrame(1), r313_XH));
                    if (r313_sLB) r472_currentGlyph.include(r313_sLB(r313_DivFrame(1), 0));
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("nCurlyTail." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r480_currentGlyph) {
                    var _r480_t0, _r480_t1;
                    r480_currentGlyph.include(r313_MarkSet.e());
                    var r480_fine = r313_AdviceStroke(4);
                    var r480_rinner = r1_clamp(r313_Width * 0.065, r313_XH * 0.05, r480_fine * 0.35);
                    var r480_sw = r313_AdviceStroke(2.75);
                    var r480_m1 = Math.min(r313_RightSB, r313_Width - r480_rinner * 2 - r480_fine - r313_OX);
                    var r480_mockWidth = r480_m1 + r313_SB;
                    var r480_mockAdws = r480_mockWidth / r313_Width;
                    r480_currentGlyph.include(r313_Body(r313_XH, r313_SB, r480_m1, r480_rinner * 2 + r480_fine, r480_sw, r313_ArchDepthAOf(r313_SmallArchDepth * r480_mockAdws, r480_mockWidth), r313_ArchDepthBOf(r313_SmallArchDepth * r480_mockAdws, r480_mockWidth)));
                    r480_currentGlyph.include(r313_dispiro(r313_widths.lhs(r480_sw), r313_straight.down.start(r480_m1 - r313_HSwToV(r480_sw), r480_rinner * 2 + r480_fine - r313_O, r313_heading(r313_Downward)), r313_CurlyTail.n(r480_fine, 0, r480_m1 + r480_rinner * 2 + r480_fine, new r313_xn$NamedParameterPair$2Lrc9b("x2", r1_mix(r313_SB, r480_m1, 0.5) - r313_HSwToV(0.5 * r480_fine)), new r313_xn$NamedParameterPair$2Lrc9b("y2", 0), new r313_xn$NamedParameterPair$2Lrc9b("swBefore", r480_sw))));
                    if (r313_sLT) r480_currentGlyph.include(r313_sLT(r313_DivFrame(1), r313_XH, r480_sw));
                    if (r313_sLB) r480_currentGlyph.include(r313_sLB(r313_DivFrame(1), 0, r480_sw));
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("nCrossedTail." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r491_currentGlyph) {
                    var _r491_t0, _r491_t1;
                    r491_currentGlyph.include(r313_MarkSet.e());
                    var r491_fine = r313_AdviceStroke(4);
                    var r491_rinner = r313_XH * 0.15 - r491_fine * 0.75;
                    var r491_sw = r313_AdviceStroke(3);
                    var r491_m2 = r313_Middle - r313_HSwToV(0.5 * r491_fine);
                    var r491_x2 = r313_RightSB + r313_SideJut;
                    var r491_y2 = r491_rinner * 2 + r491_fine - r313_O;
                    r491_currentGlyph.include(r313_Body(r313_XH, r313_SB, r313_RightSB, r491_y2 + r313_O, r491_sw));
                    r491_currentGlyph.include(r313_dispiro(r313_straight.down.start(r313_RightSB, r491_y2, r313_widths.rhs.heading(r491_sw, r313_Downward)), r313_CurlyTail.f(r491_fine, 0, r491_m2, r491_x2, new r313_xn$NamedParameterPair$2Lrc9b("swBefore", r491_sw))));
                    if (r313_sLT) r491_currentGlyph.include(r313_sLT(r313_DivFrame(1), r313_XH, r491_sw));
                    if (r313_sLB) r491_currentGlyph.include(r313_sLB(r313_DivFrame(1), 0, r491_sw));
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("engCap." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r500_currentGlyph) {
                    var _r500_t0, _r500_t1;
                    r500_currentGlyph.include(r313_MarkSet.capital());
                    r500_currentGlyph.include(r313_Body(r313_CAP, r313_SB, r313_RightSB, r313_O + r313_Hook + r313_HalfStroke, r313_Stroke, r313_ArchDepthA, r313_ArchDepthB));
                    var r500_xHookDepth = Math.min(1.2 * r313_HookX, r1_mix(r313_RightSB - r313_HSwToV(r313_HalfStroke) - r313_Middle, r313_Jut, r1_clamp(0, r1_boole(r313_sLB), r313_StrokeWidthBlend(0, 1))));
                    r500_currentGlyph.include(r313_VerticalHook.r(new r313_xn$NamedParameterPair$2Lrc9b("x", r313_RightSB), new r313_xn$NamedParameterPair$2Lrc9b("y", r313_O + r313_Hook + r313_HalfStroke), new r313_xn$NamedParameterPair$2Lrc9b("xDepth", -r500_xHookDepth), new r313_xn$NamedParameterPair$2Lrc9b("yDepth", r313_Hook)));
                    if (r313_sLT) r500_currentGlyph.include(r313_sLT(r313_DivFrame(1), r313_CAP));
                    if (r313_sLB) r500_currentGlyph.include(r313_sLB(r313_DivFrame(1), 0));
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("eng." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r512_currentGlyph) {
                    var _r512_t0, _r512_t1;
                    r512_currentGlyph.include(r313_MarkSet.p());
                    r512_currentGlyph.include(r313_Body(r313_XH, r313_SB, r313_RightSB, 0, r313_Stroke));
                    r512_currentGlyph.include(r313_EngHook(r313_RightSB, 0, r313_Descender));
                    if (r313_sLT) r512_currentGlyph.include(r313_sLT(r313_DivFrame(1), r313_XH));
                    if (r313_sLB) r512_currentGlyph.include(r313_sLB(r313_DivFrame(1), 0));
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("engCrossedTail." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r520_currentGlyph) {
                    var _r520_t0, _r520_t1;
                    r520_currentGlyph.include(r313_MarkSet.p());
                    r520_currentGlyph.include(r313_Body(r313_XH, r313_SB, r313_RightSB, 0, r313_Stroke));
                    var r520_fine = r313_AdviceStroke(3.5);
                    r520_currentGlyph.include(r313_dispiro(r313_straight.down.start(r313_RightSB, -r313_O, r313_widths.rhs.heading(r313_Stroke, r313_Downward)), r313_CurlyTail.n(r520_fine, r313_Descender, r313_RightSB - r313_HookX - r313_HSwToV(r313_Stroke), new r313_xn$NamedParameterPair$2Lrc9b("x2", r313_RightSB + r313_HSwToV(0.75 * r520_fine)), new r313_xn$NamedParameterPair$2Lrc9b("y2", r313_Descender + 0.5 * r520_fine), new r313_xn$NamedParameterPair$2Lrc9b("yLoopTop", 0))));
                    if (r313_sLT) r520_currentGlyph.include(r313_sLT(r313_DivFrame(1), r313_XH));
                    if (r313_sLB) r520_currentGlyph.include(r313_sLB(r313_DivFrame(1), 0));
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("engPalatalHook." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r531_currentGlyph) {
                    var _r531_t0, _r531_t1;
                    var r531_df = r531_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleM, 1));
                    r531_currentGlyph.include(r531_df.markSet.p());
                    var r531_subDf = r313_DivFrame(0.75 * r313_para.advanceScaleM, 2);
                    r531_currentGlyph.include(r313_Body(r313_XH, r531_subDf.leftSB, r531_subDf.rightSB, 0, r531_subDf.mvs, r531_subDf.smallArchDepthA, r531_subDf.smallArchDepthB));
                    r531_currentGlyph.include(r313_EngHook(r531_subDf.rightSB, 0, r313_Descender, new r313_xn$NamedParameterPair$2Lrc9b("sw", r531_subDf.mvs)));
                    if (r313_sLT) r531_currentGlyph.include(r313_sLT(r531_subDf, r313_XH));
                    if (r313_sLB) r531_currentGlyph.include(r313_sLB(r531_subDf, 0));
                    r531_currentGlyph.include(r313_PalatalHook.r(new r313_xn$NamedParameterPair$2Lrc9b("x", r531_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("y", 0), new r313_xn$NamedParameterPair$2Lrc9b("xLink", r531_subDf.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("refSw", r531_subDf.mvs), new r313_xn$NamedParameterPair$2Lrc9b("maskOut", r313_intersection(r313_MaskBelow(0), r313_MaskLeft(r531_subDf.rightSB)))));
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("grek/eta." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r547_currentGlyph) {
                    var _r547_t0, _r547_t1;
                    r547_currentGlyph.include(r313_MarkSet.p());
                    r547_currentGlyph.include(r313_LeaningAnchor.Below.VBar.r(r313_RightSB));
                    r547_currentGlyph.include(r313_Body(r313_XH, r313_SB, r313_RightSB, r313_Descender, r313_Stroke));
                    if (r313_sLT) r547_currentGlyph.include(r313_sLT(r313_DivFrame(1), r313_XH));
                    if (r313_sLB) r547_currentGlyph.include(r313_sLB(r313_DivFrame(1), 0));
                    r547_currentGlyph.setBaseAnchor("lf", r313_SB + r313_HSwToV(r313_HalfStroke), 0);
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/yat.italic/base." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r556_currentGlyph) {
                    var _r556_t0, _r556_t1;
                    var r556_df = r556_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                    r556_currentGlyph.include(r556_df.markSet.e());
                    var r556_subDf = r556_df.slice(3, 2);
                    r556_currentGlyph.include(r313_Body(r313_XH, r556_subDf.leftSB, r556_subDf.rightSB, r313_XH - r556_subDf.smallArchDepthB - r313_TINY, r556_subDf.mvs, r556_subDf.smallArchDepthA, r556_subDf.smallArchDepthB));
                    if (r313_sLT) r556_currentGlyph.include(r313_sLT(r556_subDf, r313_XH));
                    if (r313_sLB) r556_currentGlyph.include(r313_sLB(r556_subDf, 0));
                    if (r313_sRB) r556_currentGlyph.include(r313_sRB(r556_subDf, 0));
                    return void 0;
                })), !r313_sRB ? (r313_xn$GlyphSaveSink$2Lrc4b.save("RInsular." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r565_currentGlyph) {
                    var _r565_t0, _r565_t1;
                    r565_currentGlyph.include(r313_MarkSet.capDesc());
                    r565_currentGlyph.include(r313_LeaningAnchor.Below.VBar.l(r313_SB));
                    r565_currentGlyph.include(r313_Body(r313_CAP, r313_SB, r313_RightSB, -r313_Descender, r313_Stroke, r313_ArchDepthA, r313_ArchDepthB));
                    r565_currentGlyph.include(r313_RetroflexHook.rExt(r313_RightSB, -r313_Descender));
                    r565_currentGlyph.include(r313_VBar.l(r313_SB, r313_Descender, 0));
                    if (r313_sLT) r565_currentGlyph.include(r313_sLT(r313_DivFrame(1), r313_CAP));
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("rInsular." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r574_currentGlyph) {
                    var _r574_t0, _r574_t1;
                    r574_currentGlyph.include(r313_MarkSet.p());
                    r574_currentGlyph.include(r313_LeaningAnchor.Below.VBar.l(r313_SB));
                    r574_currentGlyph.include(r313_Body(r313_XH, r313_SB, r313_RightSB, -r313_Descender, r313_Stroke));
                    r574_currentGlyph.include(r313_RetroflexHook.rExt(r313_RightSB, -r313_Descender));
                    r574_currentGlyph.include(r313_VBar.l(r313_SB, r313_Descender, 0));
                    if (r313_sLT) r574_currentGlyph.include(r313_sLT(r313_DivFrame(1), r313_XH));
                    return void 0;
                }))) : void 0) : void 0;
            })();
        }
        r313_xn$selectvariant$7Hrq("n", "n");
        r313_xn$linkreducedvariant$5sIl8("n/sansSerif", "n", r1_MathSansSerif);
        r313_xn$linkreducedvariant$5sIl8("n/descBase", "n");
        r313_xn$selectvariant$7Hrq("cyrl/pe.italic", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "n"));
        r313_xn$selectvariant$7Hrq("cyrl/pe.italic/descBase", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "n"));
        r313_alias("cyrl/pe.BGR", null, "cyrl/pe.italic");
        r313_xn$selectvariant$7Hrq("Eng", 330, new r313_xn$NamedParameterPair$2Lrc9b("follow", "eng"), new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "engCap"));
        r313_xn$selectvariant$7Hrq("eng", 331);
        r313_xn$linkreducedvariant$5sIl8("eng/phoneticRight", "eng");
        r313_xn$selectvariant$7Hrq("nCurlyTail", 565, new r313_xn$NamedParameterPair$2Lrc9b("follow", "eng"));
        r313_xn$selectvariant$7Hrq("nHookLeft", 626);
        r313_xn$selectvariant$7Hrq("nRTail", 627, new r313_xn$NamedParameterPair$2Lrc9b("follow", "eng"));
        r313_xn$selectvariant$7Hrq("nCrossedTail", 43835, new r313_xn$NamedParameterPair$2Lrc9b("follow", "eng"));
        r313_xn$selectvariant$7Hrq("engCrossedTail", 43836, new r313_xn$NamedParameterPair$2Lrc9b("follow", "eng"));
        r313_xn$selectvariant$7Hrq("engPalatalHook", 122644, new r313_xn$NamedParameterPair$2Lrc9b("follow", "eng"));
        r313_xn$selectvariant$7Hrq("RInsular", 42882, new r313_xn$NamedParameterPair$2Lrc9b("follow", "engHookLeft"));
        r313_xn$selectvariant$7Hrq("rInsular", 42883, new r313_xn$NamedParameterPair$2Lrc9b("follow", "engHookLeft"));
        r313_xn$selectvariant$7Hrq("NLongLeg", 544, new r313_xn$NamedParameterPair$2Lrc9b("follow", "n"), new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "nCapLongLeg"));
        r313_xn$selectvariant$7Hrq("nLongLeg", 414, new r313_xn$NamedParameterPair$2Lrc9b("follow", "n"));
        r313_xn$selectvariant$7Hrq("grek/eta", 951);
        r313_xn$linkreducedvariant$5sIl8("grek/eta/sansSerif", "grek/eta", r1_MathSansSerif);
        r313_xn$derivecomposites$7Hrq("nDescender", 42897, "n/descBase", r313_CyrDescender.rSideJut(r313_RightSB, 0));
        r313_xn$derivecomposites$7Hrq("nPalatalHook", 7559, "n/descBase", r313_PalatalHook.rSideJut(r313_RightSB, 0));
        r313_xn$derivecomposites$7Hrq("cyrl/peDescender.italic", null, "cyrl/pe.italic/descBase", r313_CyrDescender.rSideJut(r313_RightSB, 0));
        r313_xn$selectvariant$7Hrq("cyrl/peMidHook.italic", new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/pe.italic"));
        r313_xn$selectvariant$7Hrq("cyrl/yat.italic/base/corner", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "cyrl/yat.italic/base"));
        r313_xn$selectvariant$7Hrq("cyrl/yat.italic/base/cursive", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "cyrl/yat.italic/base"));
        r313_CreateAccentedComposition("nAcute", 324, "n", "acuteAbove");
        r313_CreateAccentedComposition("nAcute.PLK", null, "n", "kreskaAbove");
        r313_CreateAccentedComposition("nApostrophe", 329, "n", "commaTL/asPunctuation");
        var _r313_t15 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t15.BBS;
        var r313_BBD = _r313_t15.BBD;
        var r313_BBBarLeft = _r313_t15.BBBarLeft;
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/n", 120159, new r313_xn$Capture$2Lrc8.GlyphProc(function (r601_currentGlyph) {
            var _r601_t0, _r601_t1;
            var r601_df = r601_currentGlyph.include(r313_DivFrame(1, 2));
            r601_currentGlyph.include(r601_df.markSet.e());
            var r601_bbs = r313_BBS;
            var r601_bbd = r313_BBD;
            r601_currentGlyph.include(r313_BBBarLeft(r601_df.leftSB, 0, r313_XH));
            r601_currentGlyph.include(r313_HBar.b(r601_df.rightSB - r601_bbd, r601_df.rightSB, 0, r601_bbs));
            r601_currentGlyph.include(r313_nShoulder.shape(new r313_xn$NamedParameterPair$2Lrc9b("stroke", r601_bbs), new r313_xn$NamedParameterPair$2Lrc9b("left", r601_df.leftSB + r601_bbd + r313_HSwToV(r601_bbs)), new r313_xn$NamedParameterPair$2Lrc9b("right", r601_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("fine", r313_ShoulderFine)));
            r601_currentGlyph.include(r313_intersection(r313_VBar.r(r601_df.rightSB - r601_bbd, 0, r313_XH, r601_bbs), r313_nShoulder.mask(new r313_xn$NamedParameterPair$2Lrc9b("stroke", r601_bbs), new r313_xn$NamedParameterPair$2Lrc9b("left", r601_df.leftSB + 1 + r601_bbd + r313_HSwToV(r601_bbs)), new r313_xn$NamedParameterPair$2Lrc9b("right", r601_df.rightSB - 1), new r313_xn$NamedParameterPair$2Lrc9b("top", r313_XH - 1), new r313_xn$NamedParameterPair$2Lrc9b("fine", r313_ShoulderFine))));
            return void 0;
        }));
    });
    return void 0;
});


