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
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Upper-H", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_fTailed, r313_slabType, _r313_t18, _r313_t20, _r313_t21, _r313_t22, _r313_tag23;
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
        var r313_Descender = _r313_t1.Descender;
        var r313_Translate = _r313_t1.Translate;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_VSwToH = _r313_t1.VSwToH;
        var r313_O = _r313_t1.O;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_HBarPos = _r313_t1.HBarPos;
        var r313_OverlayStroke = _r313_t1.OverlayStroke;
        var r313_VJut = _r313_t1.VJut;
        var r313_VJutStroke = _r313_t1.VJutStroke;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_SideJut = _r313_t1.SideJut;
        var r313_ArchDepthA = _r313_t1.ArchDepthA;
        var r313_ArchDepthB = _r313_t1.ArchDepthB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_tagged = _r313_t5.tagged;
        var r313_VSerif = _r313_t5.VSerif;
        var r313_HBar = _r313_t5.HBar;
        var r313_HOverlayBar = _r313_t5.HOverlayBar;
        var r313_VBar = _r313_t5.VBar;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_xn$deriveglyphs$7Hrq = _r313_t6["derive-glyphs"];
        var r313_xn$derivecomposites$7Hrq = _r313_t6["derive-composites"];
        var r313_alias = _r313_t6.alias;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r313_markMiddle = _r313_t7.markMiddle;
        var r313_markExtend = _r313_t7.markExtend;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_LeaningAnchor = _r313_t8.LeaningAnchor;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Below"].resolve();
        var r313_belowMarkMid = _r313_t9.belowMarkMid;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_SetGrekUpperTonos = _r313_t10.SetGrekUpperTonos;
        var _r313_t11 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateSelectorVariants = _r313_t11.CreateSelectorVariants;
        var r313_DefineSelectorGlyph = _r313_t11.DefineSelectorGlyph;
        var _r313_t12 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Metrics"].resolve();
        var r313_EFMidBarShrinkK = _r313_t12.EFMidBarShrinkK;
        var r313_EFVJutLength = _r313_t12.EFVJutLength;
        var _r313_t13 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_SerifFrame = _r313_t13.SerifFrame;
        var r313_RightwardTailedBar = _r313_t13.RightwardTailedBar;
        var _r313_t14 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_LeftHook = _r313_t14.LeftHook;
        var r313_MidHook = _r313_t14.MidHook;
        var r313_EngHook = _r313_t14.EngHook;
        var r313_UpwardHookShape = _r313_t14.UpwardHookShape;
        var _r313_t15 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_CyrDescender = _r313_t15.CyrDescender;
        var r313_CyrTailDescender = _r313_t15.CyrTailDescender;
        var r313_PalatalHook = _r313_t15.PalatalHook;
        var r313_xn$SLABNONE$5sIl = 0;
        var r313_xn$SLABTL$5sIl = 1;
        var r313_xn$SLABTLBR$5sIl3 = 2;
        var r313_xn$SLABTAILED$5sIl = 3;
        var r313_xn$SLABALL$5sIl = 4;
        var r313_xn$SLABALLBGR$5sIl4 = 5;
        var r313_xn$SLABTAILEDBGR$5sIl7 = 6;
        var r313_HShape = function () {
            var _r326_t5;
            var _r326_t6 = arguments;
            var r326_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r326_t6, 0);
            var _r326_t0 = [];
            var _r326_t1 = 0;
            while (_r326_t1 < r326_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r326_xn$flexarguments$2Lrc7uIe5[_r326_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r326_t0.push(r326_xn$flexarguments$2Lrc7uIe5[_r326_t1]);
                _r326_t1 = _r326_t1 + 1;
            }
            var _r326_t2 = r326_xn$flexarguments$2Lrc7uIe5;
            var _r326_t3 = _r326_t2.length;
            var _r326_t4 = 0;
            while (_r326_t4 < _r326_t3) {
                _r326_t1 = _r326_t2[_r326_t4];
                if (_r326_t1 && _r326_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r326_t1.left === "df") r326_df = _r326_t1.right;
                if (_r326_t1 && _r326_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r326_t1.left === "top") r326_top = _r326_t1.right;
                if (_r326_t1 && _r326_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r326_t1.left === "slabType") r326_slabType = _r326_t1.right;
                if (_r326_t1 && _r326_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r326_t1.left === "fTailed") r326_fTailed = _r326_t1.right;
                if (_r326_t1 && _r326_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r326_t1.left === "stroke") r326_stroke = _r326_t1.right;
                _r326_t4 = _r326_t4 + 1;
            }
            var r326_df = r1_fallback(r326_df, _r326_t0[0]);
            var r326_top = r1_fallback(r326_top, _r326_t0[1]);
            var r326_slabType = r1_fallback(r326_slabType, _r326_t0[2]);
            var r326_fTailed = r1_fallback(r326_fTailed, _r326_t0[3], false);
            var r326_stroke = r1_fallback(r326_stroke, _r326_t0[4], r326_df.mvs);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
                var r331___, _r331_t0, _r331_t1, _r331_t2;
                r331_currentGlyph.include(r313_tagged("strokeL", r313_VBar.l(r326_df.leftSB, 0, r326_top, r326_stroke)));
                r331_currentGlyph.include(r313_tagged("strokeR", r326_fTailed ? r313_RightwardTailedBar(r326_df.rightSB, 0, r326_top, r326_stroke) : r313_VBar.r(r326_df.rightSB, 0, r326_top, r326_stroke)));
                r331_currentGlyph.include(r313_tagged("crossbar", r313_HBar.m(r326_df.leftSB - r313_O, r326_df.rightSB + r313_O, r1_mix(0, r326_top, r313_HBarPos), r326_stroke)));
                var r331_sf = r313_SerifFrame.fromDf(r326_df, r326_top, 0, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r326_stroke));
                r331_currentGlyph.include((_r331_t0 = r326_slabType, _r331_t0 === r313_xn$SLABTL$5sIl ? r331_sf.lt.outer : _r331_t0 === r313_xn$SLABTLBR$5sIl3 ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r362_currentGlyph) {
                    var _r362_t0, _r362_t1;
                    r362_currentGlyph.include(r331_sf.lt.outer, true, true);
                    r362_currentGlyph.include(r331_sf.rb.outer);
                    return void 0;
                }) : _r331_t0 === r313_xn$SLABTAILED$5sIl ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r357_currentGlyph) {
                    var _r357_t0, _r357_t1;
                    r357_currentGlyph.include(r331_sf.lt.full, true, true);
                    r357_currentGlyph.include(r331_sf.rt.full);
                    r357_currentGlyph.include(r331_sf.lb.full);
                    return void 0;
                }) : _r331_t0 === r313_xn$SLABALL$5sIl ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r351_currentGlyph) {
                    var _r351_t0, _r351_t1;
                    r351_currentGlyph.include(r331_sf.lt.full, true, true);
                    r351_currentGlyph.include(r331_sf.rt.full);
                    r351_currentGlyph.include(r331_sf.lb.full);
                    r351_currentGlyph.include(r331_sf.rb.full);
                    return void 0;
                }) : _r331_t0 === r313_xn$SLABALLBGR$5sIl4 ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r345_currentGlyph) {
                    var _r345_t0, _r345_t1;
                    r345_currentGlyph.include(r331_sf.lt.outer, true, true);
                    r345_currentGlyph.include(r331_sf.rt.inner);
                    r345_currentGlyph.include(r331_sf.lb.full);
                    r345_currentGlyph.include(r331_sf.rb.full);
                    return void 0;
                }) : _r331_t0 === r313_xn$SLABTAILEDBGR$5sIl7 ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
                    var _r340_t0, _r340_t1;
                    r340_currentGlyph.include(r331_sf.lt.outer, true, true);
                    r340_currentGlyph.include(r331_sf.rt.inner);
                    r340_currentGlyph.include(r331_sf.lb.full);
                    return void 0;
                }) : (r331___ = _r331_t0, new r313_xn$Capture$2Lrc8.GlyphProc(function (r338_currentGlyph) {
                    var _r338_t0, _r338_t1;
                    return void 0;
                }))));
                return void 0;
            });
        };
        var r313_TurnedHShape = function () {
            var _r366_t5;
            var _r366_t6 = arguments;
            var r366_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r366_t6, 0);
            var _r366_t0 = [];
            var _r366_t1 = 0;
            while (_r366_t1 < r366_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r366_xn$flexarguments$2Lrc7uIe5[_r366_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r366_t0.push(r366_xn$flexarguments$2Lrc7uIe5[_r366_t1]);
                _r366_t1 = _r366_t1 + 1;
            }
            var _r366_t2 = r366_xn$flexarguments$2Lrc7uIe5;
            var _r366_t3 = _r366_t2.length;
            var _r366_t4 = 0;
            while (_r366_t4 < _r366_t3) {
                _r366_t1 = _r366_t2[_r366_t4];
                if (_r366_t1 && _r366_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r366_t1.left === "df") r366_df = _r366_t1.right;
                if (_r366_t1 && _r366_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r366_t1.left === "top") r366_top = _r366_t1.right;
                if (_r366_t1 && _r366_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r366_t1.left === "slabType") r366_slabType = _r366_t1.right;
                if (_r366_t1 && _r366_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r366_t1.left === "fTailed") r366_fTailed = _r366_t1.right;
                if (_r366_t1 && _r366_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r366_t1.left === "stroke") r366_stroke = _r366_t1.right;
                _r366_t4 = _r366_t4 + 1;
            }
            var r366_df = r1_fallback(r366_df, _r366_t0[0]);
            var r366_top = r1_fallback(r366_top, _r366_t0[1]);
            var r366_slabType = r1_fallback(r366_slabType, _r366_t0[2]);
            var r366_fTailed = r1_fallback(r366_fTailed, _r366_t0[3], false);
            var r366_stroke = r1_fallback(r366_stroke, _r366_t0[4], r366_df.mvs);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r371_currentGlyph) {
                var r371___, _r371_t0, _r371_t1, _r371_t2;
                r371_currentGlyph.include(r313_LeaningAnchor.Below.VBar.r(r366_df.rightSB, r366_stroke));
                r371_currentGlyph.include(r313_tagged("strokeL", r313_VBar.l(r366_df.leftSB, r1_mix(0, r366_top, r313_HBarPos) - r366_stroke / 2, r366_top, r366_stroke)));
                r371_currentGlyph.include(r313_tagged("strokeR", r366_fTailed ? r313_RightwardTailedBar(r366_df.rightSB, 0, r366_top, r366_stroke) : r313_VBar.r(r366_df.rightSB, 0, r366_top, r366_stroke)));
                r371_currentGlyph.include(r313_tagged("crossbar", r313_HBar.m(r366_df.leftSB - r313_O, r366_df.rightSB + r313_O, r1_mix(0, r366_top, r313_HBarPos), r366_stroke)));
                var r371_sf = r313_SerifFrame.fromDf(r366_df, r366_top, 0, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r366_stroke));
                r371_currentGlyph.include((_r371_t0 = r366_slabType, _r371_t0 === r313_xn$SLABTL$5sIl ? r371_sf.lt.outer : _r371_t0 === r313_xn$SLABTLBR$5sIl3 ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r390_currentGlyph) {
                    var _r390_t0, _r390_t1;
                    r390_currentGlyph.include(r371_sf.lt.outer, true, true);
                    r390_currentGlyph.include(r371_sf.rb.outer);
                    return void 0;
                }) : _r371_t0 === r313_xn$SLABTAILED$5sIl ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r386_currentGlyph) {
                    var _r386_t0, _r386_t1;
                    r386_currentGlyph.include(r371_sf.lt.full, true, true);
                    r386_currentGlyph.include(r371_sf.rt.full);
                    return void 0;
                }) : _r371_t0 === r313_xn$SLABALL$5sIl ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r381_currentGlyph) {
                    var _r381_t0, _r381_t1;
                    r381_currentGlyph.include(r371_sf.lt.full, true, true);
                    r381_currentGlyph.include(r371_sf.rt.full);
                    r381_currentGlyph.include(r371_sf.rb.fullSide);
                    return void 0;
                }) : (r371___ = _r371_t0, new r313_xn$Capture$2Lrc8.GlyphProc(function (r379_currentGlyph) {
                    var _r379_t0, _r379_t1;
                    return void 0;
                }))));
                return void 0;
            });
        };
        var r313_LeftHalfHShape = function () {
            var _r394_t5;
            var _r394_t6 = arguments;
            var r394_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r394_t6, 0);
            var _r394_t0 = [];
            var _r394_t1 = 0;
            while (_r394_t1 < r394_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r394_xn$flexarguments$2Lrc7uIe5[_r394_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r394_t0.push(r394_xn$flexarguments$2Lrc7uIe5[_r394_t1]);
                _r394_t1 = _r394_t1 + 1;
            }
            var _r394_t2 = r394_xn$flexarguments$2Lrc7uIe5;
            var _r394_t3 = _r394_t2.length;
            var _r394_t4 = 0;
            while (_r394_t4 < _r394_t3) {
                _r394_t1 = _r394_t2[_r394_t4];
                if (_r394_t1 && _r394_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r394_t1.left === "df") r394_df = _r394_t1.right;
                if (_r394_t1 && _r394_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r394_t1.left === "top") r394_top = _r394_t1.right;
                if (_r394_t1 && _r394_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r394_t1.left === "slabType") r394_slabType = _r394_t1.right;
                if (_r394_t1 && _r394_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r394_t1.left === "fTailed") r394_fTailed = _r394_t1.right;
                if (_r394_t1 && _r394_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r394_t1.left === "stroke") r394_stroke = _r394_t1.right;
                _r394_t4 = _r394_t4 + 1;
            }
            var r394_df = r1_fallback(r394_df, _r394_t0[0]);
            var r394_top = r1_fallback(r394_top, _r394_t0[1]);
            var r394_slabType = r1_fallback(r394_slabType, _r394_t0[2]);
            var r394_fTailed = r1_fallback(r394_fTailed, _r394_t0[3], false);
            var r394_stroke = r1_fallback(r394_stroke, _r394_t0[4], r394_df.mvs);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r399_currentGlyph) {
                var r399___, _r399_t0, _r399_t1, _r399_t2;
                var r399_xMockLeft = r1_mix(0, r394_df.leftSB, 1.5);
                var r399_xMockRight = r1_mix(r394_df.width, r394_df.rightSB, r313_EFMidBarShrinkK(r394_df, r394_slabType === r313_xn$SLABALL$5sIl));
                var r399_xMockMiddle = r1_mix(r399_xMockLeft - (r394_slabType === r313_xn$SLABNONE$5sIl ? 0 : r313_SideJut), r399_xMockRight, 0.5);
                var r399_xLeft = r399_xMockLeft + (r394_df.middle - r399_xMockMiddle);
                var r399_xRight = r399_xMockRight + (r394_df.middle - r399_xMockMiddle);
                r399_currentGlyph.include(r313_LeaningAnchor.Above.VBar.l(r399_xLeft, r394_stroke));
                r399_currentGlyph.include(r313_LeaningAnchor.Below.VBar.l(r399_xLeft, r394_stroke));
                r399_currentGlyph.include(r313_tagged("strokeL", r313_VBar.l(r399_xLeft, 0, r394_top, r394_stroke)));
                r399_currentGlyph.include(r313_tagged("crossbar", r313_HBar.m(r399_xLeft - r313_O, r399_xRight, r1_mix(0, r394_top, r313_HBarPos), r394_stroke)));
                var r399_sf = r313_SerifFrame(r394_top, 0, r399_xLeft, r399_xRight, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r394_stroke));
                r399_currentGlyph.include((_r399_t0 = r394_slabType, _r399_t0 === r313_xn$SLABTL$5sIl ? r399_sf.lt.outer : _r399_t0 === r313_xn$SLABTLBR$5sIl3 ? r399_sf.lt.outer : _r399_t0 === r313_xn$SLABTAILED$5sIl ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r418_currentGlyph) {
                    var _r418_t0, _r418_t1;
                    r418_currentGlyph.include(r399_sf.lt.fullSide, true, true);
                    r418_currentGlyph.include(r399_sf.lb.fullSide);
                    return void 0;
                }) : _r399_t0 === r313_xn$SLABALL$5sIl ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r409_currentGlyph) {
                    var _r409_t0, _r409_t1;
                    r409_currentGlyph.include(r399_sf.lt.fullSide, true, true);
                    r409_currentGlyph.include(r399_sf.lb.fullSide);
                    r409_currentGlyph.include(r313_tagged("serifMR", r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r415_currentGlyph) {
                        var _r415_t1, _r415_t2;
                        var _r415_t0 = r313_EFVJutLength(r394_top, 0, r313_HBarPos, r394_stroke);
                        var r415_jutTop = _r415_t0[0];
                        var r415_jutBot = _r415_t0[1];
                        var r415_jutMid = _r415_t0[2];
                        var r415_swVJut = r313_VJutStroke * (r394_stroke / r313_Stroke);
                        r415_currentGlyph.include(r313_VSerif.mr(r399_xRight, r1_mix(0, r394_top, r313_HBarPos), r415_jutMid, r415_swVJut));
                        return void 0;
                    }))));
                    return void 0;
                }) : (r399___ = _r399_t0, new r313_xn$Capture$2Lrc8.GlyphProc(function (r407_currentGlyph) {
                    var _r407_t0, _r407_t1;
                    return void 0;
                }))));
                return void 0;
            });
        };
        var r313_RightHalfHShape = function () {
            var _r422_t5;
            var _r422_t6 = arguments;
            var r422_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r422_t6, 0);
            var _r422_t0 = [];
            var _r422_t1 = 0;
            while (_r422_t1 < r422_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r422_xn$flexarguments$2Lrc7uIe5[_r422_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r422_t0.push(r422_xn$flexarguments$2Lrc7uIe5[_r422_t1]);
                _r422_t1 = _r422_t1 + 1;
            }
            var _r422_t2 = r422_xn$flexarguments$2Lrc7uIe5;
            var _r422_t3 = _r422_t2.length;
            var _r422_t4 = 0;
            while (_r422_t4 < _r422_t3) {
                _r422_t1 = _r422_t2[_r422_t4];
                if (_r422_t1 && _r422_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r422_t1.left === "df") r422_df = _r422_t1.right;
                if (_r422_t1 && _r422_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r422_t1.left === "top") r422_top = _r422_t1.right;
                if (_r422_t1 && _r422_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r422_t1.left === "slabType") r422_slabType = _r422_t1.right;
                if (_r422_t1 && _r422_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r422_t1.left === "fTailed") r422_fTailed = _r422_t1.right;
                if (_r422_t1 && _r422_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r422_t1.left === "stroke") r422_stroke = _r422_t1.right;
                _r422_t4 = _r422_t4 + 1;
            }
            var r422_df = r1_fallback(r422_df, _r422_t0[0]);
            var r422_top = r1_fallback(r422_top, _r422_t0[1]);
            var r422_slabType = r1_fallback(r422_slabType, _r422_t0[2]);
            var r422_fTailed = r1_fallback(r422_fTailed, _r422_t0[3], false);
            var r422_stroke = r1_fallback(r422_stroke, _r422_t0[4], r422_df.mvs);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r427_currentGlyph) {
                var r427___, _r427_t0, _r427_t1, _r427_t2;
                var r427_xMockLeft = r1_mix(0, r422_df.leftSB, r313_EFMidBarShrinkK(r422_df, r422_slabType === r313_xn$SLABALL$5sIl));
                var r427_xMockRight = r1_mix(r422_df.width, r422_df.rightSB, 1.5);
                var r427_xMockMiddle = r1_mix(r427_xMockLeft, r427_xMockRight + (r422_slabType === r313_xn$SLABNONE$5sIl ? 0 : r313_SideJut), 0.5);
                var r427_xLeft = r427_xMockLeft + (r422_df.middle - r427_xMockMiddle);
                var r427_xRight = r427_xMockRight + (r422_df.middle - r427_xMockMiddle);
                r427_currentGlyph.include(r313_LeaningAnchor.Above.VBar.r(r427_xRight, r422_stroke));
                r427_currentGlyph.include(r313_LeaningAnchor.Below.VBar.r(r427_xRight, r422_stroke));
                r427_currentGlyph.include(r313_tagged("strokeR", r422_fTailed ? r313_RightwardTailedBar(r427_xRight, 0, r422_top, r422_stroke) : r313_VBar.r(r427_xRight, 0, r422_top, r422_stroke)));
                r427_currentGlyph.include(r313_tagged("crossbar", r313_HBar.m(r427_xLeft, r427_xRight + r313_O, r1_mix(0, r422_top, r313_HBarPos), r422_stroke)));
                var r427_sf = r313_SerifFrame(r422_top, 0, r427_xLeft, r427_xRight, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r422_stroke));
                r427_currentGlyph.include((_r427_t0 = r422_slabType, _r427_t0 === r313_xn$SLABTLBR$5sIl3 ? r427_sf.rb.outer : _r427_t0 === r313_xn$SLABTAILED$5sIl ? r427_sf.rt.fullSide : _r427_t0 === r313_xn$SLABALL$5sIl ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r437_currentGlyph) {
                    var _r437_t0, _r437_t1;
                    r437_currentGlyph.include(r427_sf.rt.fullSide, true, true);
                    r437_currentGlyph.include(r427_sf.rb.fullSide);
                    r437_currentGlyph.include(r313_tagged("serifML", r313_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r443_currentGlyph) {
                        var _r443_t1, _r443_t2;
                        var _r443_t0 = r313_EFVJutLength(r422_top, 0, r313_HBarPos, r422_stroke);
                        var r443_jutTop = _r443_t0[0];
                        var r443_jutBot = _r443_t0[1];
                        var r443_jutMid = _r443_t0[2];
                        var r443_swVJut = r313_VJutStroke * (r422_stroke / r313_Stroke);
                        r443_currentGlyph.include(r313_VSerif.ml(r427_xLeft, r1_mix(0, r422_top, r313_HBarPos), r443_jutMid, r443_swVJut));
                        return void 0;
                    }))));
                    return void 0;
                }) : (r427___ = _r427_t0, new r313_xn$Capture$2Lrc8.GlyphProc(function (r435_currentGlyph) {
                    var _r435_t0, _r435_t1;
                    return void 0;
                }))));
                return void 0;
            });
        };
        var r313_EnGheShape = function () {
            var _r446_t5;
            var _r446_t6 = arguments;
            var r446_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r446_t6, 0);
            var _r446_t0 = [];
            var _r446_t1 = 0;
            while (_r446_t1 < r446_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r446_xn$flexarguments$2Lrc7uIe5[_r446_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r446_t0.push(r446_xn$flexarguments$2Lrc7uIe5[_r446_t1]);
                _r446_t1 = _r446_t1 + 1;
            }
            var _r446_t2 = r446_xn$flexarguments$2Lrc7uIe5;
            var _r446_t3 = _r446_t2.length;
            var _r446_t4 = 0;
            while (_r446_t4 < _r446_t3) {
                _r446_t1 = _r446_t2[_r446_t4];
                if (_r446_t1 && _r446_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r446_t1.left === "df") r446_df = _r446_t1.right;
                if (_r446_t1 && _r446_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r446_t1.left === "top") r446_top = _r446_t1.right;
                if (_r446_t1 && _r446_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r446_t1.left === "slabType") r446_slabType = _r446_t1.right;
                if (_r446_t1 && _r446_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r446_t1.left === "fTailed") r446_fTailed = _r446_t1.right;
                if (_r446_t1 && _r446_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r446_t1.left === "stroke") r446_stroke = _r446_t1.right;
                if (_r446_t1 && _r446_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r446_t1.left === "serifTR") r446_serifTR = _r446_t1.right;
                _r446_t4 = _r446_t4 + 1;
            }
            var r446_df = r1_fallback(r446_df, _r446_t0[0]);
            var r446_top = r1_fallback(r446_top, _r446_t0[1]);
            var r446_slabType = r1_fallback(r446_slabType, _r446_t0[2]);
            var r446_fTailed = r1_fallback(r446_fTailed, _r446_t0[3], false);
            var r446_stroke = r1_fallback(r446_stroke, _r446_t0[4], Math.min(r446_df.adviceThinnerStroke(2.75, 1), r446_df.adviceThinnerStroke(2, 0.75)));
            var r446_serifTR = r1_fallback(r446_serifTR, _r446_t0[5], r313_SLAB);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r451_currentGlyph) {
                var r451_swVJut, _r451_t0, _r451_t1;
                var r451_subDf = r313_DivFrame(0.75 * r446_df.adws, 2);
                r451_currentGlyph.include(r313_HShape(r451_subDf, r446_top, r446_slabType, r446_fTailed, r446_stroke));
                var r451_xTopBarRightEnd = r1_mix(r446_df.width, r446_df.rightSB, r446_serifTR ? 0.25 : 0.375);
                r451_currentGlyph.include(r313_HBar.t(r451_subDf.rightSB - r313_HSwToV(r446_stroke) - r313_O, r451_xTopBarRightEnd, r446_top, r446_stroke));
                if (r446_serifTR) {
                    r451_swVJut = Math.min(r313_VJutStroke * (r446_stroke / r313_Stroke), r313_VSwToH(0.625 * (r451_xTopBarRightEnd - r451_subDf.rightSB)));
                    r451_currentGlyph.include(r313_tagged("serifTR", r313_VSerif.dr(r451_xTopBarRightEnd, r446_top, r313_VJut, r451_swVJut)));
                }
                return void 0;
            });
        };
        var r313_HwairShape = function () {
            var _r456_t5;
            var _r456_t6 = arguments;
            var r456_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r456_t6, 0);
            var _r456_t0 = [];
            var _r456_t1 = 0;
            while (_r456_t1 < r456_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r456_xn$flexarguments$2Lrc7uIe5[_r456_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r456_t0.push(r456_xn$flexarguments$2Lrc7uIe5[_r456_t1]);
                _r456_t1 = _r456_t1 + 1;
            }
            var _r456_t2 = r456_xn$flexarguments$2Lrc7uIe5;
            var _r456_t3 = _r456_t2.length;
            var _r456_t4 = 0;
            while (_r456_t4 < _r456_t3) {
                _r456_t1 = _r456_t2[_r456_t4];
                if (_r456_t1 && _r456_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r456_t1.left === "df") r456_df = _r456_t1.right;
                if (_r456_t1 && _r456_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r456_t1.left === "top") r456_top = _r456_t1.right;
                if (_r456_t1 && _r456_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r456_t1.left === "slabType") r456_slabType = _r456_t1.right;
                if (_r456_t1 && _r456_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r456_t1.left === "fTailed") r456_fTailed = _r456_t1.right;
                if (_r456_t1 && _r456_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r456_t1.left === "stroke") r456_stroke = _r456_t1.right;
                if (_r456_t1 && _r456_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r456_t1.left === "serifTR") r456_serifTR = _r456_t1.right;
                if (_r456_t1 && _r456_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r456_t1.left === "yend") r456_yend = _r456_t1.right;
                _r456_t4 = _r456_t4 + 1;
            }
            var r456_df = r1_fallback(r456_df, _r456_t0[0]);
            var r456_top = r1_fallback(r456_top, _r456_t0[1]);
            var r456_slabType = r1_fallback(r456_slabType, _r456_t0[2]);
            var r456_fTailed = r1_fallback(r456_fTailed, _r456_t0[3], false);
            var r456_stroke = r1_fallback(r456_stroke, _r456_t0[4], r456_df.mvs);
            var r456_serifTR = r1_fallback(r456_serifTR, _r456_t0[5], r313_SLAB);
            var r456_yend = r1_fallback(r456_yend, _r456_t0[6], r313_XH);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r461_currentGlyph) {
                var r461_sf2, _r461_t0, _r461_t1;
                var r461_subDf = r456_df.slice(3, 2);
                r461_currentGlyph.include(r313_HShape(r461_subDf, r456_top, r456_slabType, r456_fTailed, r456_stroke));
                r461_currentGlyph.ejectTagged("strokeR");
                r461_currentGlyph.ejectTagged("serifRB");
                r461_currentGlyph.include(r313_UpwardHookShape(new r313_xn$NamedParameterPair$2Lrc9b("left", r461_subDf.rightSB - r313_HSwToV(r456_stroke)), new r313_xn$NamedParameterPair$2Lrc9b("right", r456_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("ybegin", r456_top), new r313_xn$NamedParameterPair$2Lrc9b("yend", r456_yend), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_ArchDepthA * (2 / r456_df.hPack) * r456_df.adws), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_ArchDepthB * (2 / r456_df.hPack) * r456_df.adws), new r313_xn$NamedParameterPair$2Lrc9b("sw", r456_stroke)));
                if (r456_serifTR) {
                    r461_sf2 = r313_SerifFrame.fromDf(r456_df, r456_yend, 0, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r456_stroke)).slice(1, 2);
                    r461_currentGlyph.include(r461_sf2.rt.full);
                }
                return void 0;
            });
        };
        var r313_OverlayStrokeShape = function (r475_top, r475_slabType) {
            var _r475_t0, _r475_t1;
            var r475_yb = r1_mix(0, r475_top, r313_HBarPos) + r313_HalfStroke;
            var r475_yt = r475_top - (r475_slabType ? r313_Stroke : 0);
            return r313_HOverlayBar(r1_mix(r313_SB, 0, 0.7), r1_mix(r313_RightSB, r313_Width, 0.7), r1_mix(r475_yb, r475_yt, 0.5), Math.min(r313_OverlayStroke, 0.625 * (r475_yt - r475_yb)));
        };
        var r313_HConfig = r1_SuffixCfg.combine(r1_SuffixCfg.weave({
            "": false,
            "tailed": true
        }, function (r476_tail) {
            var r476___, _r476_t0, _r476_t1, _r476_t2, _r476_t3, _r476_t4;
            return {
                "serifless": r313_xn$SLABNONE$5sIl,
                "topLeftSerifed": r313_xn$SLABTL$5sIl,
                "topLeftBottomRightSerifed": (_r476_t0 = r476_tail, _r476_t0 === "tailed" ? r313_xn$SLABTL$5sIl : (r476___ = _r476_t0, r313_xn$SLABTLBR$5sIl3)),
                "serifed": (_r476_t1 = r476_tail, _r476_t1 === "tailed" ? r313_xn$SLABTAILED$5sIl : (r476___ = _r476_t1, r313_xn$SLABALL$5sIl)),
                "serifedBGR": (_r476_t2 = r476_tail, _r476_t2 === "tailed" ? r313_xn$SLABTAILEDBGR$5sIl7 : (r476___ = _r476_t2, r313_xn$SLABALLBGR$5sIl4))
            };
        }), {
            "serifedExceptBottomRight": [false, r313_xn$SLABTAILED$5sIl]
        });
        var r313_EnGheGheConfig = {
            "serifless": false,
            "topRightSerifed": true
        };
        var r313_HwairVConfig = {
            "roundedSerifless": false,
            "roundedSerifed": true
        };
        var _r313_t16 = Object.entries(r313_HConfig)[Symbol.iterator]();
        var _r313_t17 = void 0;
        while (!(_r313_t17 = _r313_t16.next()).done) {
            _r313_t18 = _r313_t17.value;
            r313_suffix = _r313_t18[0];
            r313_fTailed = _r313_t18[1][0];
            r313_slabType = _r313_t18[1][1];
            _r313_t18[1];
            (function () {
                var r479_suffixGhe, r479_serifGhe, r479_suffixV, r479_serifV, _r479_t2, _r479_t5, _r479_t6, _r479_tag7, _r479_t8, _r479_tag9;
                r313_xn$GlyphSaveSink$2Lrc4b.save("H." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r482_currentGlyph) {
                    var _r482_t0, _r482_t1;
                    r482_currentGlyph.include(r313_MarkSet.capital());
                    r482_currentGlyph.include(r313_HShape(r313_DivFrame(1), r313_CAP, r313_slabType, r313_fTailed));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("grek/Eta." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r487_currentGlyph) {
                    var _r487_t0, _r487_t1;
                    r487_currentGlyph.include(r313_xn$referglyph$1aao("H." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r487_currentGlyph.include(r313_SetGrekUpperTonos(r313_slabType === r313_xn$SLABNONE$5sIl ? 0 : -r313_SideJut));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("turnhCap." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r492_currentGlyph) {
                    var _r492_t0, _r492_t1;
                    r492_currentGlyph.include(r313_MarkSet.capital());
                    r492_currentGlyph.include(r313_TurnedHShape(r313_DivFrame(1), r313_CAP, r313_slabType, r313_fTailed));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("smcpH." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r497_currentGlyph) {
                    var _r497_t0, _r497_t1;
                    r497_currentGlyph.include(r313_MarkSet.e());
                    r497_currentGlyph.include(r313_HShape(r313_DivFrame(1), r313_XH, r313_slabType, r313_fTailed));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("HLeftHalf." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r502_currentGlyph) {
                    var _r502_t0, _r502_t1;
                    r502_currentGlyph.include(r313_MarkSet.capital());
                    r502_currentGlyph.include(r313_LeftHalfHShape(r313_DivFrame(1), r313_CAP, r313_slabType, r313_fTailed));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("HRightHalf." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r507_currentGlyph) {
                    var _r507_t0, _r507_t1;
                    r507_currentGlyph.include(r313_MarkSet.capital());
                    r507_currentGlyph.include(r313_RightHalfHShape(r313_DivFrame(1), r313_CAP, r313_slabType, r313_fTailed));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("smcpHLeftHalf." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r512_currentGlyph) {
                    var _r512_t0, _r512_t1;
                    r512_currentGlyph.include(r313_MarkSet.e());
                    r512_currentGlyph.include(r313_LeftHalfHShape(r313_DivFrame(1), r313_XH, r313_slabType, r313_fTailed));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("smcpHRightHalf." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r517_currentGlyph) {
                    var _r517_t0, _r517_t1;
                    r517_currentGlyph.include(r313_MarkSet.e());
                    r517_currentGlyph.include(r313_RightHalfHShape(r313_DivFrame(1), r313_XH, r313_slabType, r313_fTailed));
                    return void 0;
                }));
                var r479_enGheDf = r313_DivFrame(r313_para.advanceScaleM, 3);
                r313_DefineSelectorGlyph("cyrl/EnGhe", r313_suffix, r479_enGheDf, "capital");
                r313_DefineSelectorGlyph("cyrl/enghe", r313_suffix, r479_enGheDf, "e");
                var _r479_t0 = Object.entries(r313_EnGheGheConfig)[Symbol.iterator]();
                var _r479_t1 = void 0;
                while (!(_r479_t1 = _r479_t0.next()).done) {
                    _r479_t2 = _r479_t1.value;
                    r479_suffixGhe = _r479_t2[0];
                    r479_serifGhe = _r479_t2[1];
                    (function () {
                        r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/EnGhe." + r313_suffix + "." + r479_suffixGhe, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r525_currentGlyph) {
                            var _r525_t0, _r525_t1;
                            r525_currentGlyph.setWidth(0);
                            r525_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                            r525_currentGlyph.include(r313_EnGheShape(r479_enGheDf, r313_CAP, r313_slabType, r313_fTailed, new r313_xn$NamedParameterPair$2Lrc9b("serifTR", r479_serifGhe)));
                            return void 0;
                        }));
                        return r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/enghe." + r313_suffix + "." + r479_suffixGhe, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r532_currentGlyph) {
                            var _r532_t0, _r532_t1;
                            r532_currentGlyph.setWidth(0);
                            r532_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                            r532_currentGlyph.include(r313_EnGheShape(r479_enGheDf, r313_XH, r313_slabType, r313_fTailed, new r313_xn$NamedParameterPair$2Lrc9b("serifTR", r479_serifGhe)));
                            return void 0;
                        }));
                    })();
                }
                r313_xn$selectvariant$7Hrq("cyrl/EnGhe." + r313_suffix, new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/EnGhe/Ghe"));
                r313_xn$selectvariant$7Hrq("cyrl/enghe." + r313_suffix, new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/enghe/ghe"));
                var r479_hwairDf = r313_DivFrame(r313_para.advanceScaleMM, 3);
                r313_DefineSelectorGlyph("Hwair", r313_suffix, r479_hwairDf, "capital");
                var _r479_t3 = Object.entries(r313_HwairVConfig)[Symbol.iterator]();
                var _r479_t4 = void 0;
                while (!(_r479_t4 = _r479_t3.next()).done) {
                    _r479_t5 = _r479_t4.value;
                    r479_suffixV = _r479_t5[0];
                    r479_serifV = _r479_t5[1];
                    (function () {
                        return r313_xn$GlyphSaveSink$2Lrc4b.save("Hwair." + r313_suffix + "." + r479_suffixV, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r544_currentGlyph) {
                            var _r544_t0, _r544_t1;
                            r544_currentGlyph.setWidth(0);
                            r544_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                            r544_currentGlyph.include(r313_HwairShape(r479_hwairDf, r313_CAP, r313_slabType, r313_fTailed, new r313_xn$NamedParameterPair$2Lrc9b("serifTR", r479_serifV)));
                            return void 0;
                        }));
                    })();
                }
                r313_xn$selectvariant$7Hrq("Hwair." + r313_suffix, new r313_xn$NamedParameterPair$2Lrc9b("follow", "Hv/v"));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/NjeKomi." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r552_currentGlyph) {
                    var _r552_t0, _r552_t1;
                    var r552_df = r552_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                    r552_currentGlyph.include(r552_df.markSet.capital());
                    r552_currentGlyph.include(r313_HwairShape(r552_df, r313_CAP, r313_slabType, r313_fTailed, new r313_xn$NamedParameterPair$2Lrc9b("yend", r313_CAP / 2 + r313_HalfStroke)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/njeKomi." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r559_currentGlyph) {
                    var _r559_t0, _r559_t1;
                    var r559_df = r559_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                    r559_currentGlyph.include(r559_df.markSet.e());
                    r559_currentGlyph.include(r313_HwairShape(r559_df, r313_XH, r313_slabType, r313_fTailed, new r313_xn$NamedParameterPair$2Lrc9b("yend", r313_XH / 2 + r313_HalfStroke)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("HHookLeft." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r566_currentGlyph) {
                    var _r566_t0, _r566_t1;
                    r566_currentGlyph.include(r313_xn$referglyph$1aao("H." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r566_currentGlyph.ejectTagged("serifLT");
                    r566_currentGlyph.include(r313_LeftHook(r313_SB, r313_CAP));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("Heng." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r572_currentGlyph) {
                    var _r572_t0, _r572_t1;
                    r572_currentGlyph.include(r313_MarkSet.capDesc());
                    r572_currentGlyph.include(r313_xn$referglyph$1aao("H." + r313_suffix));
                    r572_currentGlyph.ejectTagged("serifRB");
                    r572_currentGlyph.include(r313_EngHook(r313_RightSB, 0, r313_Descender));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("smcpHeng." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r579_currentGlyph) {
                    var _r579_t0, _r579_t1;
                    r579_currentGlyph.include(r313_MarkSet.p());
                    r579_currentGlyph.include(r313_xn$referglyph$1aao("smcpH." + r313_suffix));
                    r579_currentGlyph.ejectTagged("serifRB");
                    r579_currentGlyph.include(r313_EngHook(r313_RightSB, 0, r313_Descender));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("HStroke." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r586_currentGlyph) {
                    var _r586_t0, _r586_t1;
                    r586_currentGlyph.include(r313_xn$referglyph$1aao("H." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r586_currentGlyph.include(r313_OverlayStrokeShape(r313_CAP, r313_slabType));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("smcpHStroke." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r591_currentGlyph) {
                    var _r591_t0, _r591_t1;
                    r591_currentGlyph.include(r313_xn$referglyph$1aao("smcpH." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r591_currentGlyph.include(r313_OverlayStrokeShape(r313_XH, r313_slabType));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("smcpHDblBar." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r596_currentGlyph) {
                    var _r596_t0, _r596_t1;
                    r596_currentGlyph.include(r313_xn$referglyph$1aao("smcpH." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r596_currentGlyph.ejectTagged("crossbar");
                    var r596_bp1 = r1_mix(0, r313_XH, r313_HBarPos + 0.05);
                    var r596_bp2 = r1_mix(0, r313_XH, r313_HBarPos - 0.05);
                    var r596_barSw = Math.min(r313_OverlayStroke, 0.625 * (r313_XH - (r313_slabType === r313_xn$SLABALL$5sIl ? r313_Stroke : 0) - r596_bp1), 0.625 * (r596_bp2 - (r313_slabType === r313_xn$SLABALL$5sIl ? r313_Stroke : 0)));
                    r596_currentGlyph.include(r313_HBar.b(r313_SB - r313_O, r313_RightSB + r313_O, r596_bp1, r596_barSw));
                    r596_currentGlyph.include(r313_HBar.t(r313_SB - r313_O, r313_RightSB + r313_O, r596_bp2, r596_barSw));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/EnMidHook." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r603_currentGlyph) {
                    var _r603_t0, _r603_t1;
                    var r603_df = r603_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                    r603_currentGlyph.include(r603_df.markSet.capDesc());
                    r603_currentGlyph.include(r313_HShape(r603_df.slice(3, 2), r313_CAP, r313_slabType, r313_fTailed, r603_df.mvs));
                    r603_currentGlyph.include(r313_MidHook.m(r603_df, r313_CAP));
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/enMidHook." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r610_currentGlyph) {
                    var _r610_t0, _r610_t1;
                    var r610_df = r610_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                    r610_currentGlyph.include(r610_df.markSet.p());
                    r610_currentGlyph.include(r313_HShape(r610_df.slice(3, 2), r313_XH, r313_slabType, r313_fTailed, r610_df.mvs));
                    r610_currentGlyph.include(r313_MidHook.m(r610_df, r313_XH));
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("H", "H");
        r313_xn$linkreducedvariant$5sIl8("H/sansSerif", "H", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("H/descBase", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "H"));
        r313_xn$selectvariant$7Hrq("smcpH", 668, new r313_xn$NamedParameterPair$2Lrc9b("follow", "H"));
        r313_xn$selectvariant$7Hrq("turnH", 42893, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "turnhCap"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "H"));
        r313_xn$selectvariant$7Hrq("HLeftHalf", 11381);
        r313_xn$selectvariant$7Hrq("hLeftHalf", 11382, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "smcpHLeftHalf"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "HLeftHalf"));
        r313_xn$selectvariant$7Hrq("HRightHalf", 42997);
        r313_xn$selectvariant$7Hrq("hRightHalf", 42998, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "smcpHRightHalf"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "HRightHalf"));
        r313_xn$selectvariant$7Hrq("grek/Eta", 919, new r313_xn$NamedParameterPair$2Lrc9b("follow", "H"));
        r313_xn$linkreducedvariant$5sIl8("grek/Eta/sansSerif", "grek/Eta", r1_MathSansSerif, new r313_xn$NamedParameterPair$2Lrc9b("follow", "H/sansSerif"));
        r313_alias("grek/Heta", 880, "HLeftHalf");
        r313_alias("grek/heta", 881, r313_SLAB ? "smcpHLeftHalf.topLeftSerifed" : "smcpHLeftHalf.serifless");
        r313_xn$selectvariant$7Hrq("cyrl/En", 1053, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "H"));
        r313_xn$selectvariant$7Hrq("cyrl/En/descBase", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "H"));
        r313_xn$selectvariant$7Hrq("cyrl/en", 1085, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "smcpH"));
        r313_xn$selectvariant$7Hrq("cyrl/en/descBase", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "smcpH"));
        r313_xn$selectvariant$7Hrq("cyrl/en.BGR", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "smcpH"));
        r313_CreateSelectorVariants("cyrl/EnGhe", 1188, Object.keys(r313_HConfig), new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/En"));
        r313_CreateSelectorVariants("cyrl/enghe", 1189, Object.keys(r313_HConfig), new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/en"));
        r313_CreateSelectorVariants("Hwair", 502, Object.keys(r313_HConfig), new r313_xn$NamedParameterPair$2Lrc9b("follow", "Hv/H"));
        r313_xn$selectvariant$7Hrq("HHookLeft", 42922);
        r313_xn$selectvariant$7Hrq("Heng", 42790, new r313_xn$NamedParameterPair$2Lrc9b("follow", "H/descBase"));
        r313_xn$selectvariant$7Hrq("HStroke", 294, new r313_xn$NamedParameterPair$2Lrc9b("follow", "H"));
        r313_xn$selectvariant$7Hrq("smcpHStroke", new r313_xn$NamedParameterPair$2Lrc9b("follow", "H"));
        r313_xn$selectvariant$7Hrq("smcpHDblBar", new r313_xn$NamedParameterPair$2Lrc9b("follow", "H"));
        r313_xn$selectvariant$7Hrq("cyrl/EnHook", 1223, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "Heng"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/En/descBase"));
        r313_xn$selectvariant$7Hrq("cyrl/enHook", 1224, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "smcpHeng"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/en/descBase"));
        r313_xn$selectvariant$7Hrq("cyrl/EnMidHook", 1314, new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/En"));
        r313_xn$selectvariant$7Hrq("cyrl/enMidHook", 1315, new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/en"));
        r313_xn$selectvariant$7Hrq("cyrl/NjeKomi", 1290);
        r313_xn$selectvariant$7Hrq("cyrl/njeKomi", 1291);
        r313_xn$deriveglyphs$7Hrq("HCedilla", 7720, "H", function (r643_src, r643_gr) {
            var _r643_t0, _r643_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r645_currentGlyph) {
                var _r645_t0, _r645_t1;
                var r645_shift = r313_SB + r313_HSwToV(r313_HalfStroke) - r313_markMiddle;
                r645_currentGlyph.include(r313_xn$referglyph$1aao("cedillaBelow"));
                r645_currentGlyph.include(r313_Translate(r645_shift, 0));
                r645_currentGlyph.include(r313_xn$referglyph$1aao(r643_src));
                r645_currentGlyph.include(r313_MarkSet.capDesc());
                r645_currentGlyph.setBaseAnchor("belowBraceL", r313_markMiddle + r645_shift - 0.5 * r313_markExtend, r313_belowMarkMid);
                r645_currentGlyph.setBaseAnchor("belowBraceR", r313_markMiddle + r645_shift + 0.5 * r313_markExtend, r313_belowMarkMid);
                return void 0;
            });
        });
        r313_xn$derivecomposites$7Hrq("HDescender", 11367, "H/descBase", r313_CyrDescender.rSideJut(r313_RightSB, 0));
        r313_xn$derivecomposites$7Hrq("cyrl/EnDescender", 1186, "cyrl/En/descBase", r313_CyrDescender.rSideJut(r313_RightSB, 0));
        r313_xn$derivecomposites$7Hrq("cyrl/enDescender", 1187, "cyrl/en/descBase", r313_CyrDescender.rSideJut(r313_RightSB, 0));
        r313_xn$derivecomposites$7Hrq("cyrl/EnTail", 1225, "cyrl/En/descBase", r313_CyrTailDescender.rSideJut(r313_RightSB, 0));
        r313_xn$derivecomposites$7Hrq("cyrl/enTail", 1226, "cyrl/en/descBase", r313_CyrTailDescender.rSideJut(r313_RightSB, 0));
        r313_xn$deriveglyphs$7Hrq("cyrl/EnHookLeft", 1320, "cyrl/En", function (r652_src, r652_srl) {
            var _r652_t0, _r652_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r654_currentGlyph) {
                var _r654_t0, _r654_t1;
                r654_currentGlyph.include(r313_xn$referglyph$1aao(r652_src), r313_AS_BASE, r313_ALSO_METRICS);
                r654_currentGlyph.ejectTagged("serifLB");
                r654_currentGlyph.include(r313_PalatalHook.lExt(r313_SB, 0));
                return void 0;
            });
        });
        r313_xn$deriveglyphs$7Hrq("cyrl/enHookLeft", 1321, "cyrl/en", function (r658_src, r658_srl) {
            var _r658_t0, _r658_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r660_currentGlyph) {
                var _r660_t0, _r660_t1;
                r660_currentGlyph.include(r313_xn$referglyph$1aao(r658_src), r313_AS_BASE, r313_ALSO_METRICS);
                r660_currentGlyph.ejectTagged("serifLB");
                r660_currentGlyph.include(r313_PalatalHook.lExt(r313_SB, 0));
                return void 0;
            });
        });
        var _r313_t19 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t19.BBS;
        var r313_BBD = _r313_t19.BBD;
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/H", 8461, new r313_xn$Capture$2Lrc8.GlyphProc(function (r667_currentGlyph) {
            var _r667_t0, _r667_t1;
            r667_currentGlyph.include(r313_MarkSet.capital());
            r667_currentGlyph.include(r313_VBar.l(r313_SB, 0, r313_CAP, r313_BBS));
            r667_currentGlyph.include(r313_VBar.r(r313_RightSB, 0, r313_CAP, r313_BBS));
            r667_currentGlyph.include(r313_VBar.l(r313_SB + r313_BBD, 0, r313_CAP, r313_BBS));
            r667_currentGlyph.include(r313_VBar.r(r313_RightSB - r313_BBD, 0, r313_CAP, r313_BBS));
            r667_currentGlyph.include(r313_HBar.m(r313_SB + r313_BBD, r313_RightSB - r313_BBD, r1_mix(0, r313_CAP, r313_HBarPos), r313_BBS));
            r667_currentGlyph.include(r313_HBar.t(r313_SB, r313_SB + r313_BBD, r313_CAP, r313_BBS));
            r667_currentGlyph.include(r313_HBar.b(r313_SB, r313_SB + r313_BBD, 0, r313_BBS));
            r667_currentGlyph.include(r313_HBar.t(r313_RightSB - r313_BBD, r313_RightSB, r313_CAP, r313_BBS));
            r667_currentGlyph.include(r313_HBar.b(r313_RightSB - r313_BBD, r313_RightSB, 0, r313_BBS));
            return void 0;
        }));
    });
    return void 0;
});


