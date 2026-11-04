"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Lower-G", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_hookShape, r313_hookEnd, r313_bodyShape, r313_hookStart, _r313_t13, _r313_t15, _r313_t16, _r313_t17, _r313_tag18, _r313_t19, _r313_tag20;
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
        var r313_DesignParameters = _r313_t1.DesignParameters;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Descender = _r313_t1.Descender;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Downward = _r313_t1.Downward;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_SHook = _r313_t1.SHook;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_OverlayStroke = _r313_t1.OverlayStroke;
        var r313_CThin = _r313_t1.CThin;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_SideJut = _r313_t1.SideJut;
        var r313_DToothlessRise = _r313_t1.DToothlessRise;
        var r313_ArchDepthA = _r313_t1.ArchDepthA;
        var r313_ArchDepthB = _r313_t1.ArchDepthB;
        var r313_SmallArchDepthA = _r313_t1.SmallArchDepthA;
        var r313_SmallArchDepthB = _r313_t1.SmallArchDepthB;
        var r313_YSmoothMidR = _r313_t1.YSmoothMidR;
        var r313_YSmoothMidL = _r313_t1.YSmoothMidL;
        var r313_TINY = _r313_t1.TINY;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_archv = _r313_t2.archv;
        var r313_arcvh = _r313_t2.arcvh;
        var r313_dispiro = _r313_t2.dispiro;
        var r313_xn$spirooutline$1aao = _r313_t2["spiro-outline"];
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_intersection = _r313_t4.intersection;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_tagged = _r313_t5.tagged;
        var r313_MaskBelow = _r313_t5.MaskBelow;
        var r313_MaskLeft = _r313_t5.MaskLeft;
        var r313_OShape = _r313_t5.OShape;
        var r313_OShapeOutline = _r313_t5.OShapeOutline;
        var r313_HSerif = _r313_t5.HSerif;
        var r313_HBar = _r313_t5.HBar;
        var r313_HOverlayBar = _r313_t5.HOverlayBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_HookEnd = _r313_t5.HookEnd;
        var r313_Arch = _r313_t5.Arch;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_xn$deriveglyphs$7Hrq = _r313_t6["derive-glyphs"];
        var r313_xn$derivecomposites$7Hrq = _r313_t6["derive-composites"];
        var r313_alias = _r313_t6.alias;
        var r313_xn$orthographicitalic$3DrD = _r313_t6["orthographic-italic"];
        var r313_xn$orthographicslab$3DrD = _r313_t6["orthographic-slab"];
        var r313_HalfAdvance = _r313_t6.HalfAdvance;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_ExtendAboveBaseAnchors = _r313_t7.ExtendAboveBaseAnchors;
        var r313_LeaningAnchor = _r313_t7.LeaningAnchor;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateAccentedComposition = _r313_t8.CreateAccentedComposition;
        var r313_CreateTurnedLetter = _r313_t8.CreateTurnedLetter;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_LetterBarOverlay = _r313_t9.LetterBarOverlay;
        var r313_OBarRight = _r313_t9.OBarRight;
        var r313_FlatHookDepth = _r313_t9.FlatHookDepth;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_CurlyTail = _r313_t10.CurlyTail;
        var r313_PalatalHook = _r313_t10.PalatalHook;
        var r313_TopHook = _r313_t10.TopHook;
        var r313_OverlayW = function (r320_bw) {
            var _r320_t0, _r320_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r322_currentGlyph) {
                var _r322_t0, _r322_t1;
                var r322_l = r1_mix(0, r313_SB, 0.3);
                var r322_r = r1_mix(r313_Width, r313_RightSB, 0.3);
                r322_currentGlyph.include(r313_dispiro(r313_widths.center(r320_bw), r313_flat(r322_l, r322_currentGlyph.baseAnchors.overlay.y), r313_curl(r322_r, r322_currentGlyph.baseAnchors.overlay.y)));
                return void 0;
            });
        };
        var r313_obwDoubleStorey = Math.min((r313_XH - r313_Descender) * (1 / 6) - r313_Stroke * (2 / 3), r313_AdviceStroke(5));
        r313_xn$GlyphSaveSink$2Lrc4b.save("g.doubleStoreyClosed", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r326_currentGlyph) {
            var _r326_t0, _r326_t1;
            r326_currentGlyph.include(r313_MarkSet.p());
            var r326_obot = r1_mix(0, r313_XH, r313_DesignParameters.gBarPos) - r313_Stroke * 0.4;
            r326_currentGlyph.include(r313_OShape(r313_XH, r326_obot - r313_O, r313_SB, r1_mix(r313_Width, r313_RightSB, 1.3)));
            var r326_fine = r313_Stroke * r313_CThin;
            var r326_gleftx = r1_mix(0, r313_SB, 0.85) + r313_OX;
            var r326_grightx = r1_mix(r313_Width, r313_RightSB, 0.825) - r313_OX;
            var r326_groundy = Math.round(r1_mix(r313_Descender, r1_mix(0, r313_XH, r313_DesignParameters.gBarPos), 0.64) + r313_HalfStroke);
            var r326_gtipy = r1_mix(r326_groundy, r326_obot + r313_Stroke, 1.005) - r326_fine;
            r326_currentGlyph.include(r313_dispiro(r313_g4.left.start(r1_mix(r313_SB, r313_RightSB, 0.4), r326_gtipy, r313_widths.rhs(r326_fine)), r313_g4(r1_mix(r313_SB, r313_RightSB, 0.0575) + r313_Stroke * 0.85, r1_mix(r326_gtipy, r326_groundy, 0.5), r313_widths.rhs(r1_mix(r326_fine, r313_Stroke, 0.5))), r313_flat(r1_mix(r313_SB, r313_RightSB, 0.435), r326_groundy, r313_widths.rhs(r313_Stroke)), r313_curl(r1_mix(r313_SB, r313_RightSB, 0.565), r326_groundy), r313_archv(4), r313_g4(r326_grightx, r1_mix(r313_Descender + r313_O, r313_YSmoothMidR(r326_groundy, r313_Descender + r313_O, r313_SmallArchDepthA, r313_SmallArchDepthB), 1.06)), r313_Arch.rhs(r313_Descender), r313_g4(r326_gleftx, r1_mix(r313_Descender + r313_O, r313_YSmoothMidL(r326_groundy, r313_Descender + r313_O, r313_SmallArchDepthA, r313_SmallArchDepthB), 1.06)), r313_arcvh(), r313_g4(r1_mix(r313_SB, r313_RightSB, 0.435), r326_groundy, r313_heading(r313_Rightward))));
            var r326_gm = r1_mix(r313_SB, r1_mix(r313_Width, r313_RightSB, 1.3), 0.5);
            r326_currentGlyph.include(r313_xn$spirooutline$1aao(r313_corner(r1_mix(r313_Width, r313_RightSB, 0.75) - r313_OX, r313_XH), r313_corner(r1_mix(r313_Width, r313_RightSB, 0.75) - r313_OX, r313_XH - r313_Stroke), r313_corner(r326_gm, r313_XH - r313_Stroke - r313_O), r313_corner(r326_gm, r313_XH)));
            r326_currentGlyph.setBaseAnchor("overlay", r313_Middle, r1_mix(r313_Descender + r313_O, r326_groundy, 0.5));
            r326_currentGlyph.setBaseAnchor("strike", r313_Middle, r1_mix(r326_obot - r313_O, r313_XH, 0.5));
            return void 0;
        }));
        r313_xn$derivecomposites$7Hrq("gStroke.doubleStoreyClosed", null, "g.doubleStoreyClosed", r313_OverlayW(r313_obwDoubleStorey));
        r313_xn$GlyphSaveSink$2Lrc4b.save("g.doubleStoreyOpen", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r335_currentGlyph) {
            var _r335_t0, _r335_t1;
            r335_currentGlyph.include(r313_MarkSet.p());
            var r335_obot = r1_mix(0, r313_XH, r313_DesignParameters.gBarPos) - r313_Stroke * 0.4;
            r335_currentGlyph.include(r313_OShape(r313_XH, r335_obot - r313_O, r313_SB, r1_mix(r313_Width, r313_RightSB, 1.3)));
            var r335_fine = r313_Stroke * r313_CThin;
            var r335_gleftx = r1_mix(0, r313_SB, 0.85) + r313_OX;
            var r335_grightx = r1_mix(r313_Width, r313_RightSB, 0.825) - r313_OX;
            var r335_groundy = Math.round(r1_mix(r313_Descender, r1_mix(0, r313_XH, r313_DesignParameters.gBarPos), 0.64) + r313_HalfStroke);
            var r335_gtipy = r1_mix(r335_groundy, r335_obot + r313_Stroke, 1.005) - r335_fine;
            r335_currentGlyph.include(r313_dispiro(r313_g4.left.start(r1_mix(r313_SB, r313_RightSB, 0.4), r335_gtipy, r313_widths.rhs(r335_fine)), r313_g4(r1_mix(r313_SB, r313_RightSB, 0.0575) + r313_Stroke * 0.85, r1_mix(r335_gtipy, r335_groundy, 0.5), r313_widths.rhs(r1_mix(r335_fine, r313_Stroke, 0.5))), r313_flat(r1_mix(r313_SB, r313_RightSB, 0.435), r335_groundy, r313_widths.rhs(r313_Stroke)), r313_curl(r1_mix(r313_SB, r313_RightSB, 0.565), r335_groundy), r313_archv(4), r313_g4(r335_grightx, r1_mix(r313_Descender + r313_O, r313_YSmoothMidR(r335_groundy, r313_Descender + r313_O, r313_SmallArchDepthA, r313_SmallArchDepthB), 1.06)), r313_HookEnd(r313_Descender), r313_g4(r335_gleftx, r313_Descender + r313_SHook)));
            var r335_gm = r1_mix(r313_SB, r1_mix(r313_Width, r313_RightSB, 1.3), 0.5);
            r335_currentGlyph.include(r313_xn$spirooutline$1aao(r313_corner(r1_mix(r313_Width, r313_RightSB, 0.75) - r313_OX, r313_XH), r313_corner(r1_mix(r313_Width, r313_RightSB, 0.75) - r313_OX, r313_XH - r313_Stroke), r313_corner(r335_gm, r313_XH - r313_Stroke - r313_O), r313_corner(r335_gm, r313_XH)));
            r335_currentGlyph.setBaseAnchor("overlay", r313_Middle, r1_mix(r313_Descender + r313_O, r335_groundy, 0.5));
            r335_currentGlyph.setBaseAnchor("strike", r313_Middle, r1_mix(r335_obot - r313_O, r313_XH, 0.5));
            return void 0;
        }));
        r313_xn$derivecomposites$7Hrq("gStroke.doubleStoreyOpen", null, "g.doubleStoreyOpen", r313_OverlayW(r313_obwDoubleStorey));
        var r313_SingleStorey = (function () {
            var r344_BentHookT, r344_BentHook, r344_FlatHook, r344_CrossedHook, r344_SeriflessBody, r344_SerifedBody, r344_TopCutBody, r344_FlatTopSeriflessBody, r344_FlatTopSerifedBody, r344_EarlessCornerBody, r344_EarlessRoundedBody;
            var r344_exports = {};
            r344_exports.BentHookT = r344_BentHookT = function (r352_sink, r352_df, r352_yTop, r352_offset, r352_sw, r352__ada, r352__adb) {
                var _r352_t0, _r352_t1;
                var r352_ada = r1_fallback(r352__ada, r352_df.smallArchDepthA);
                var r352_adb = r1_fallback(r352__adb, r352_df.smallArchDepthB);
                return r352_sink(r313_widths.rhs(r352_sw), (r352_sink === r313_xn$spirooutline$1aao ? r313_corner : r313_flat)(r352_df.rightSB - r352_offset, r352_yTop, r313_heading(r313_Downward)), r313_curl(r352_df.rightSB - r352_offset, r313_Descender + r352_ada), r313_HookEnd(r313_Descender + r352_offset, new r313_xn$NamedParameterPair$2Lrc9b("sw", r352_sw)), r313_g4(r352_df.leftSB + r352_offset, r313_Descender + r313_SHook), r352_sink === r313_xn$spirooutline$1aao ? [r313_corner(r352_df.leftSB, r313_XH)] : []);
            };
            r344_exports.BentHook = r344_BentHook = function (r355_df, r355_y0, r355__ada, r355__adb) {
                var _r355_t0, _r355_t1;
                return r344_BentHookT(r313_dispiro, r355_df, r355_y0, 0, r355_df.mvs, r355__ada, r355__adb);
            };
            r344_exports.FlatHook = r344_FlatHook = function (r357_df, r357_y0, r357__ada, r357__adb) {
                var _r357_t0, _r357_t1;
                var r357_hd = r313_FlatHookDepth(r357_df, 9 / 8);
                var r357_xTerminal = Math.min(r357_df.rightSB - r357_hd.x - r313_TINY, r1_mix(r357_df.leftSB, r357_df.rightSB, 1 / 5));
                return r313_dispiro(r313_widths.rhs(r357_df.mvs), r313_flat(r357_df.rightSB, r357_y0, r313_heading(r313_Downward)), r313_curl(r357_df.rightSB, r313_Descender + r357_hd.y), r313_arcvh.superness(r313_DesignParameters.tightHookSuperness), r313_flat(r357_df.rightSB - r357_hd.x, r313_Descender), r313_curl(r357_xTerminal, r313_Descender));
            };
            r344_exports.CrossedHook = r344_CrossedHook = function (r359_df, r359_y0, r359__ada, r359__adb) {
                var _r359_t0, _r359_t1;
                var r359_ada = r1_fallback(r359__ada, r359_df.smallArchDepthA);
                var r359_adb = r1_fallback(r359__adb, r359_df.smallArchDepthB);
                var r359_fine = r359_df.adviceStroke(3.5);
                return r313_dispiro(r313_widths.rhs(r359_df.mvs), r313_flat(r359_df.rightSB, r359_y0, r313_heading(r313_Downward)), r313_curl(r359_df.rightSB, r313_Descender + r359_ada), r313_CurlyTail.n(r359_fine, r313_Descender, r359_df.leftSB, r359_df.width, r313_Descender + 0.5 * r359_fine, new r313_xn$NamedParameterPair$2Lrc9b("yLoopTop", r1_mix(r313_Descender, 0, 0.85) + 0.25 * r359_fine)));
            };
            r344_exports.SeriflessBody = r344_SeriflessBody = function (r362_df, r362_top, r362__ada, r362__adb) {
                var _r362_t0, _r362_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r364_currentGlyph) {
                    var _r364_t0, _r364_t1;
                    var r364_ada = r1_fallback(r362__ada, r362_df.smallArchDepthA);
                    var r364_adb = r1_fallback(r362__adb, r362_df.smallArchDepthB);
                    r364_currentGlyph.include(r313_OBarRight.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r362_top), new r313_xn$NamedParameterPair$2Lrc9b("left", r362_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r362_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("sw", r362_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r362_df.shoulderFine), new r313_xn$NamedParameterPair$2Lrc9b("ada", r364_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r364_adb)));
                    return void 0;
                });
            };
            r344_exports.SerifedBody = r344_SerifedBody = function (r374_df, r374_top, r374__ada, r374__adb) {
                var _r374_t0, _r374_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r376_currentGlyph) {
                    var _r376_t0, _r376_t1;
                    r376_currentGlyph.include(r344_SeriflessBody(r374_df, r374_top, r374__ada, r374__adb));
                    r376_currentGlyph.include(r313_tagged("serifRT", r313_HSerif.rt(r374_df.rightSB, r374_top, r313_SideJut, r374_df.mvs)));
                    return void 0;
                });
            };
            r344_exports.TopCutBody = r344_TopCutBody = function (r380_df, r380_top, r380__ada, r380__adb) {
                var _r380_t0, _r380_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r382_currentGlyph) {
                    var _r382_t0, _r382_t1;
                    r382_currentGlyph.include(r344_SeriflessBody(r380_df, r380_top, r380__ada, r380__adb));
                    r382_currentGlyph.include(r313_xn$spirooutline$1aao(r313_corner(r380_df.rightSB, r380_top), r313_corner(r380_df.rightSB, r380_top - r313_HalfStroke), r313_corner(r380_df.rightSB - r313_HSwToV(r380_df.mvs), r380_top - r313_HalfStroke)));
                    return void 0;
                });
            };
            r344_exports.FlatTopSeriflessBody = r344_FlatTopSeriflessBody = function (r386_df, r386_top, r386__ada, r386__adb) {
                var _r386_t0, _r386_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r388_currentGlyph) {
                    var _r388_t0, _r388_t1;
                    var r388_ada = r1_fallback(r386__ada, r386_df.smallArchDepthA);
                    var r388_adb = r1_fallback(r386__adb, r386_df.smallArchDepthB);
                    r388_currentGlyph.include(r313_OBarRight.earlessCorner(new r313_xn$NamedParameterPair$2Lrc9b("top", r386_top), new r313_xn$NamedParameterPair$2Lrc9b("left", r386_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r386_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("sw", r386_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r386_df.shoulderFine), new r313_xn$NamedParameterPair$2Lrc9b("ada", r388_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r388_adb), new r313_xn$NamedParameterPair$2Lrc9b("rise", 0)));
                    return void 0;
                });
            };
            r344_exports.FlatTopSerifedBody = r344_FlatTopSerifedBody = function (r399_df, r399_top, r399__ada, r399__adb) {
                var _r399_t0, _r399_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r401_currentGlyph) {
                    var _r401_t0, _r401_t1;
                    r401_currentGlyph.include(r344_FlatTopSeriflessBody(r399_df, r399_top, r399__ada, r399__adb));
                    r401_currentGlyph.include(r313_tagged("serifRT", r313_HSerif.rt(r399_df.rightSB, r399_top, r313_SideJut, r399_df.mvs)));
                    return void 0;
                });
            };
            r344_exports.EarlessCornerBody = r344_EarlessCornerBody = function (r405_df, r405_top, r405__ada, r405__adb) {
                var _r405_t0, _r405_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r407_currentGlyph) {
                    var _r407_t0, _r407_t1;
                    var r407_ada = r1_fallback(r405__ada, r405_df.smallArchDepthA);
                    var r407_adb = r1_fallback(r405__adb, r405_df.smallArchDepthB);
                    r407_currentGlyph.include(r313_OBarRight.earlessCorner(new r313_xn$NamedParameterPair$2Lrc9b("top", r405_top), new r313_xn$NamedParameterPair$2Lrc9b("left", r405_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r405_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("sw", r405_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r405_df.shoulderFine), new r313_xn$NamedParameterPair$2Lrc9b("ada", r407_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r407_adb)));
                    return void 0;
                });
            };
            r344_exports.EarlessRoundedBody = r344_EarlessRoundedBody = function (r417_df, r417_top, r417__ada, r417__adb) {
                var _r417_t0, _r417_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r419_currentGlyph) {
                    var _r419_t0, _r419_t1;
                    var r419_ada = r1_fallback(r417__ada, r417_df.smallArchDepthA);
                    var r419_adb = r1_fallback(r417__adb, r417_df.smallArchDepthB);
                    r419_currentGlyph.include(r313_OBarRight.earlessRounded(new r313_xn$NamedParameterPair$2Lrc9b("top", r417_top), new r313_xn$NamedParameterPair$2Lrc9b("left", r417_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r417_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("yTerminal", r417_df.smallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("sw", r417_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r417_df.shoulderFine), new r313_xn$NamedParameterPair$2Lrc9b("ada", r419_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r419_adb)));
                    return void 0;
                });
            };
            return r344_exports;
        })();
        var r313_SingleStoreyConfig = r1_SuffixCfg.weave({
            "singleStoreyBentHook": [r313_SingleStorey.BentHook, r313_SHook],
            "singleStoreyFlatHook": [r313_SingleStorey.FlatHook, 0]
        }, {
            "serifless": [r313_SingleStorey.SeriflessBody, 0],
            "serifed": [r313_SingleStorey.SerifedBody, 0],
            "topCut": [r313_SingleStorey.TopCutBody, r313_HalfStroke],
            "flatTopSerifless": [r313_SingleStorey.FlatTopSeriflessBody, 0],
            "flatTopSerifed": [r313_SingleStorey.FlatTopSerifedBody, 0],
            "earlessCorner": [r313_SingleStorey.EarlessCornerBody, r313_DToothlessRise],
            "earlessCornerHTB": [r313_SingleStorey.EarlessCornerBody, 0],
            "earlessRounded": [r313_SingleStorey.EarlessRoundedBody, r313_XH - r313_SmallArchDepthA]
        });
        var _r313_t11 = Object.entries(r313_SingleStoreyConfig)[Symbol.iterator]();
        var _r313_t12 = void 0;
        while (!(_r313_t12 = _r313_t11.next()).done) {
            _r313_t13 = _r313_t12.value;
            r313_suffix = _r313_t13[0];
            r313_hookShape = _r313_t13[1][0][0];
            r313_hookEnd = _r313_t13[1][0][1];
            _r313_t13[1][0];
            r313_bodyShape = _r313_t13[1][1][0];
            r313_hookStart = _r313_t13[1][1][1];
            _r313_t13[1][1];
            _r313_t13[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("g." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r434_currentGlyph) {
                    var _r434_t0, _r434_t1;
                    var r434_df = r434_currentGlyph.include(r313_DivFrame(1));
                    r434_currentGlyph.include(r434_df.markSet.p());
                    r434_currentGlyph.setBaseAnchor("overlay", r434_df.middle, r1_mix(r313_O, r313_Descender + Math.max(r313_hookEnd, r434_df.mvs), 0.5));
                    r434_currentGlyph.setBaseAnchor("strike", r434_df.middle, r313_XH / 2);
                    r434_currentGlyph.include(r313_bodyShape(r434_df, r313_XH));
                    r434_currentGlyph.include(r313_hookShape(r434_df, r313_XH - r313_hookStart));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("gCap." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r443_currentGlyph) {
                    var _r443_t0, _r443_t1;
                    var r443_df = r443_currentGlyph.include(r313_DivFrame(1));
                    r443_currentGlyph.include(r443_df.markSet.capDesc());
                    r443_currentGlyph.setBaseAnchor("overlay", r443_df.middle, r1_mix(r313_O, r313_Descender + Math.max(r313_hookEnd, r443_df.mvs), 0.5));
                    r443_currentGlyph.setBaseAnchor("strike", r443_df.middle, r313_CAP / 2);
                    r443_currentGlyph.include(r313_bodyShape(r443_df, r313_CAP, r313_ArchDepthA, r313_ArchDepthB));
                    r443_currentGlyph.include(r313_hookShape(r443_df, r313_CAP - r313_hookStart, r313_ArchDepthA, r313_ArchDepthB));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("gStroke." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r452_currentGlyph) {
                    var _r452_t0, _r452_t1;
                    r452_currentGlyph.include(r313_xn$referglyph$1aao("g." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r452_currentGlyph.include(r313_LetterBarOverlay.r.in(new r313_xn$NamedParameterPair$2Lrc9b("x", r313_RightSB), new r313_xn$NamedParameterPair$2Lrc9b("top", 0), new r313_xn$NamedParameterPair$2Lrc9b("bot", r313_Descender + r313_Stroke), new r313_xn$NamedParameterPair$2Lrc9b("space", [r313_hookEnd ? r313_SB + r313_HSwToV(r313_Stroke) : 0, r313_Width])));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("gPalatalHook." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r461_currentGlyph) {
                    var _r461_t0, _r461_t1;
                    var r461_df = r461_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleM, 1));
                    r461_currentGlyph.include(r461_df.markSet.p());
                    var r461_subDf = r313_DivFrame(0.75 * r313_para.advanceScaleM, 2);
                    r461_currentGlyph.setBaseAnchor("overlay", r461_subDf.middle, r1_mix(r313_O, r313_Descender + Math.max(r313_hookEnd, r461_subDf.mvs), 0.5));
                    r461_currentGlyph.setBaseAnchor("strike", r461_subDf.middle, r313_XH / 2);
                    r461_currentGlyph.include(r313_bodyShape(r461_subDf, r313_XH));
                    r461_currentGlyph.include(r313_hookShape(r461_subDf, r313_XH - r313_hookStart));
                    r461_currentGlyph.include(r313_PalatalHook.r(new r313_xn$NamedParameterPair$2Lrc9b("x", r461_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("y", 0), new r313_xn$NamedParameterPair$2Lrc9b("xLink", r461_subDf.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("refSw", r461_subDf.mvs), new r313_xn$NamedParameterPair$2Lrc9b("maskOut", r313_intersection(r313_MaskBelow(0), r313_MaskLeft(r461_subDf.rightSB)))));
                    r313_xn$GlyphSaveSink$2Lrc4b.save("gBarPalatalHook." + r313_suffix, null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r461_currentGlyph, r313_HOverlayBar(r1_mix(0, r461_subDf.leftSB, 0.3), r1_mix(r461_subDf.width, r461_subDf.rightSB, 0.3), r313_XH / 2, Math.min(r313_OverlayStroke, r461_subDf.adviceStroke2(2, 3, r313_XH)))));
                    return void 0;
                }));
                return r313_hookShape === r313_SingleStorey.BentHook ? r313_xn$GlyphSaveSink$2Lrc4b.save("gCrossedTail." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r478_currentGlyph) {
                    var _r478_t0, _r478_t1;
                    var r478_df = r478_currentGlyph.include(r313_DivFrame(1));
                    r478_currentGlyph.include(r478_df.markSet.p());
                    r478_currentGlyph.setBaseAnchor("overlay", r478_df.middle, r1_mix(r313_O, r313_Descender + Math.max(r313_hookEnd, r478_df.mvs), 0.5));
                    r478_currentGlyph.setBaseAnchor("strike", r478_df.middle, r313_XH / 2);
                    r478_currentGlyph.include(r313_bodyShape(r478_df, r313_XH));
                    r478_currentGlyph.include(r313_SingleStorey.CrossedHook(r478_df, r313_XH - r313_hookStart));
                    return void 0;
                })) : void 0;
            })();
        }
        r313_xn$selectvariant$7Hrq("g", "g");
        r313_xn$linkreducedvariant$5sIl8("g/sansSerif", "g", r1_MathSansSerif);
        r313_xn$linkreducedvariant$5sIl8("g/doubleStorey", "g");
        r313_xn$selectvariant$7Hrq("gStroke", 485, new r313_xn$NamedParameterPair$2Lrc9b("follow", "g"));
        r313_CreateTurnedLetter("turng", 7543, "g", r313_HalfAdvance, r1_mix(r313_Descender, r313_XH, 0.5));
        r313_xn$selectvariant$7Hrq("GScript.slab.upright", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "gCap"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "g/singleStorey.slab.upright"));
        r313_xn$selectvariant$7Hrq("GScript.slab.italic", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "gCap"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "g/singleStorey.slab.italic"));
        r313_xn$orthographicitalic$3DrD("GScript.slab", null);
        r313_xn$selectvariant$7Hrq("GScript.sans", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "gCap"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "g/singleStorey.sans"));
        r313_xn$orthographicslab$3DrD(r313_SLAB, "GScript", 42924);
        r313_xn$selectvariant$7Hrq("gScript.slab.upright", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "g"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "g/singleStorey.slab.upright"));
        r313_xn$selectvariant$7Hrq("gScript.slab.italic", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "g"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "g/singleStorey.slab.italic"));
        r313_xn$orthographicitalic$3DrD("gScript.slab", null);
        r313_xn$selectvariant$7Hrq("gScript.sans", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "g"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "g/singleStorey.sans"));
        r313_xn$orthographicslab$3DrD(r313_SLAB, "gScript", 609);
        r313_xn$selectvariant$7Hrq("gScriptPalatalHook.slab.upright", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "gPalatalHook"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "g/singleStorey.slab.upright"));
        r313_xn$selectvariant$7Hrq("gScriptPalatalHook.slab.italic", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "gPalatalHook"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "g/singleStorey.slab.italic"));
        r313_xn$orthographicitalic$3DrD("gScriptPalatalHook.slab", null);
        r313_xn$selectvariant$7Hrq("gScriptPalatalHook.sans", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "gPalatalHook"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "g/singleStorey.sans"));
        r313_xn$orthographicslab$3DrD(r313_SLAB, "gScriptPalatalHook", 7555);
        r313_xn$selectvariant$7Hrq("gScriptCrossedTail.slab.upright", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "gCrossedTail"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "gCrossedTail/singleStorey.slab.upright"));
        r313_xn$selectvariant$7Hrq("gScriptCrossedTail.slab.italic", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "gCrossedTail"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "gCrossedTail/singleStorey.slab.italic"));
        r313_xn$orthographicitalic$3DrD("gScriptCrossedTail.slab", null);
        r313_xn$selectvariant$7Hrq("gScriptCrossedTail.sans", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "gCrossedTail"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "gCrossedTail/singleStorey.sans"));
        r313_xn$orthographicslab$3DrD(r313_SLAB, "gScriptCrossedTail", 43830);
        r313_CreateAccentedComposition("gScriptBar", null, "gScript", "hStrike");
        r313_xn$selectvariant$7Hrq("gScriptBarPalatalHook.slab.upright", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "gBarPalatalHook"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "g/singleStorey.slab.upright"));
        r313_xn$selectvariant$7Hrq("gScriptBarPalatalHook.slab.italic", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "gBarPalatalHook"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "g/singleStorey.slab.italic"));
        r313_xn$orthographicitalic$3DrD("gScriptBarPalatalHook.slab", null);
        r313_xn$selectvariant$7Hrq("gScriptBarPalatalHook.sans", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "gBarPalatalHook"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "g/singleStorey.sans"));
        r313_xn$orthographicslab$3DrD(r313_SLAB, "gScriptBarPalatalHook", 122693);
        r313_alias("cyrl/de.BGR", null, "gScript");
        r313_alias("cyrl/de.SRB", null, r313_SLAB ? "gScript.slab.italic" : "gScript.sans");
        r313_alias("cyrl/deLongLeg.italic", null, r313_SLAB ? "gScript.slab.italic" : "gScript.sans");
        r313_xn$selectvariant$7Hrq("g/hookTopBase", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "g"));
        r313_xn$deriveglyphs$7Hrq("gHookTop", 608, "g/hookTopBase", function (r517_src, r517_gr) {
            var _r517_t0, _r517_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r519_currentGlyph) {
                var _r519_t0, _r519_t1;
                r519_currentGlyph.include(r313_xn$referglyph$1aao(r517_src), r313_AS_BASE, r313_ALSO_METRICS);
                r519_currentGlyph.include(r313_TopHook.toRight.rBarOuter(r313_RightSB, 0, r313_XH));
                r519_currentGlyph.include(r313_LeaningAnchor.Above.VBar.r(r313_RightSB));
                return void 0;
            });
        });
        var _r313_t14 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t14.BBS;
        var r313_BBD = _r313_t14.BBD;
        var r313_BBBarRight = _r313_t14.BBBarRight;
        r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/g", 120152, new r313_xn$Capture$2Lrc8.GlyphProc(function (r526_currentGlyph) {
            var _r526_t0, _r526_t1;
            r526_currentGlyph.include(r313_MarkSet.p());
            r526_currentGlyph.include(r313_intersection(r313_OShapeOutline.NoOvershoot(r313_XH, 0, r313_SB, r313_RightSB - r313_BBD - r313_HSwToV(r313_BBS)), r313_VBar.l(r313_SB + r313_BBD + r313_OX, 0, r313_XH, r313_BBS)));
            r526_currentGlyph.include(r313_OBarRight.shape(new r313_xn$NamedParameterPair$2Lrc9b("left", r313_SB), new r313_xn$NamedParameterPair$2Lrc9b("right", r313_RightSB - r313_BBD), new r313_xn$NamedParameterPair$2Lrc9b("sw", r313_BBS)));
            r526_currentGlyph.include(r313_SingleStorey.BentHookT(r313_dispiro, r313_DivFrame(1), r313_XH, 0, r313_BBS));
            r526_currentGlyph.include(r313_HBar.t(r313_RightSB - r313_BBD, r313_RightSB, r313_XH, r313_BBS));
            r526_currentGlyph.include(r313_intersection(r313_VBar.r(r313_RightSB - r313_BBD, r313_Descender, r313_XH, r313_BBS), r313_SingleStorey.BentHookT(r313_xn$spirooutline$1aao, r313_DivFrame(1), r313_XH, 1, r313_BBS)));
            return void 0;
        }));
        r313_CreateAccentedComposition("gCircumflex", 285, "g", "circumflexAbove");
        r313_CreateAccentedComposition("gBreve", 287, "g", "breveAbove");
        r313_CreateAccentedComposition("gDot", 289, "g", "dotAbove");
        r313_CreateAccentedComposition("gComma", 291, "g", "turnCommaAbove");
        r313_CreateAccentedComposition("gCaron", 487, "g", "caronAbove");
        r313_CreateAccentedComposition("gAcute", 501, "g", "acuteAbove");
        r313_CreateAccentedComposition("gMacron", 7713, "g", "macronAbove");
        r313_CreateAccentedComposition("gCircumflex/doubleStorey", null, "g/doubleStorey", "circumflexAbove");
        r313_CreateAccentedComposition("gBreve/doubleStorey", null, "g/doubleStorey", "breveAbove");
        r313_CreateAccentedComposition("gDot/doubleStorey", null, "g/doubleStorey", "dotAbove");
        r313_CreateAccentedComposition("gWedge/doubleStorey", null, "g/doubleStorey", "caronAbove");
        r313_CreateAccentedComposition("gAcute/doubleStorey", null, "g/doubleStorey", "acuteAbove");
        r313_CreateAccentedComposition("gMacron/doubleStorey", null, "g/doubleStorey", "macronAbove");
        return r313_xn$derivecomposites$7Hrq("gCedilla/doubleStorey", null, "g/doubleStorey", "cedillaExtShapeBelowSOArc");
    });
    return void 0;
});


