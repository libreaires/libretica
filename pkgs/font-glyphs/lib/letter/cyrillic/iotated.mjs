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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Cyrillic-Iotated", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t9, _r312_t10, _r312_t11, _r312_tag12, _r312_t13, _r312_tag14, _r312_t15, _r312_tag16, _r312_t17, _r312_tag18, _r312_t19, _r312_tag20;
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
        var r312_ApparentTranslate = _r312_t1.ApparentTranslate;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_VSwToH = _r312_t1.VSwToH;
        var r312_OX = _r312_t1.OX;
        var r312_Hook = _r312_t1.Hook;
        var r312_AHook = _r312_t1.AHook;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_VJutStroke = _r312_t1.VJutStroke;
        var r312_SLAB = _r312_t1.SLAB;
        var r312_ArchDepthA = _r312_t1.ArchDepthA;
        var r312_ArchDepthB = _r312_t1.ArchDepthB;
        var r312_SmallArchDepthA = _r312_t1.SmallArchDepthA;
        var r312_SmallArchDepthB = _r312_t1.SmallArchDepthB;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_intersection = _r312_t4.intersection;
        var r312_difference = _r312_t4.difference;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_tagged = _r312_t5.tagged;
        var r312_MaskBelow = _r312_t5.MaskBelow;
        var r312_MaskLeft = _r312_t5.MaskLeft;
        var r312_VSerif = _r312_t5.VSerif;
        var r312_HBar = _r312_t5.HBar;
        var r312_VBar = _r312_t5.VBar;
        var r312_xn$withtransform$5sIl = _r312_t5["with-transform"];
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Metrics"].resolve();
        var r312_EFVJutLength = _r312_t7.EFVJutLength;
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r312_SerifFrame = _r312_t8.SerifFrame;
        var r312_RightwardTailedBar = _r312_t8.RightwardTailedBar;
        var r312_xn$SLABNONE$5sIl = 0;
        var r312_xn$SLABFULL$5sIl = 1;
        var r312_xn$SLABOUTWARD$5sIl = 2;
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r318_t0, _r318_t1;
            return {
                "Iotation": r312_Iotation
            };
        });
        var r312_Iotation = (function () {
            var r321_Shape, r321_RevShape, r321_full, r321_outer, r321_A, r321_ascender;
            var r321_exports = {};
            r321_exports.Shape = r321_Shape = function () {
                var _r329_t5;
                var _r329_t6 = arguments;
                var r329_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r329_t6, 0);
                var _r329_t0 = [];
                var _r329_t1 = 0;
                while (_r329_t1 < r329_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r329_xn$flexarguments$2Lrc7uIe5[_r329_t1] instanceof r312_xn$NamedParameterPair$2Lrc9b)) _r329_t0.push(r329_xn$flexarguments$2Lrc7uIe5[_r329_t1]);
                    _r329_t1 = _r329_t1 + 1;
                }
                var _r329_t2 = r329_xn$flexarguments$2Lrc7uIe5;
                var _r329_t3 = _r329_t2.length;
                var _r329_t4 = 0;
                while (_r329_t4 < _r329_t3) {
                    _r329_t1 = _r329_t2[_r329_t4];
                    if (_r329_t1 && _r329_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r329_t1.left === "df") r329_df = _r329_t1.right;
                    if (_r329_t1 && _r329_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r329_t1.left === "top") r329_top = _r329_t1.right;
                    if (_r329_t1 && _r329_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r329_t1.left === "hBarRight") r329_hBarRight = _r329_t1.right;
                    if (_r329_t1 && _r329_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r329_t1.left === "hBarY") r329_hBarY = _r329_t1.right;
                    if (_r329_t1 && _r329_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r329_t1.left === "slabTop") r329_slabTop = _r329_t1.right;
                    if (_r329_t1 && _r329_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r329_t1.left === "slabBottom") r329_slabBottom = _r329_t1.right;
                    if (_r329_t1 && _r329_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r329_t1.left === "swRef") r329_swRef = _r329_t1.right;
                    if (_r329_t1 && _r329_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r329_t1.left === "swSerif") r329_swSerif = _r329_t1.right;
                    if (_r329_t1 && _r329_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r329_t1.left === "fForceSymmetric") r329_fForceSymmetric = _r329_t1.right;
                    _r329_t4 = _r329_t4 + 1;
                }
                var r329_df = r1_fallback(r329_df, _r329_t0[0]);
                var r329_top = r1_fallback(r329_top, _r329_t0[1]);
                var r329_hBarRight = r1_fallback(r329_hBarRight, _r329_t0[2]);
                var r329_hBarY = r1_fallback(r329_hBarY, _r329_t0[3], r329_top / 2);
                var r329_slabTop = r1_fallback(r329_slabTop, _r329_t0[4], r312_xn$SLABNONE$5sIl);
                var r329_slabBottom = r1_fallback(r329_slabBottom, _r329_t0[5], r312_xn$SLABNONE$5sIl);
                var r329_swRef = r1_fallback(r329_swRef, _r329_t0[6], r329_df.mvs);
                var r329_swSerif = r1_fallback(r329_swSerif, _r329_t0[7], r329_swRef);
                var r329_fForceSymmetric = r1_fallback(r329_fForceSymmetric, _r329_t0[8], false);
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r335_currentGlyph) {
                    var r335_sf, r335___, _r335_t0, _r335_t1, _r335_t2, _r335_t3;
                    r335_currentGlyph.include(r312_VBar.l(r329_df.leftSB, 0, r329_top, r329_swRef));
                    if (r329_hBarRight > r329_df.leftSB) r335_currentGlyph.include(r312_HBar.m(r329_df.leftSB, r329_hBarRight, r329_hBarY, r329_swRef));
                    if (r312_SLAB) {
                        r335_sf = r312_SerifFrame.fromDf(r329_df, r329_top, 0, new r312_xn$NamedParameterPair$2Lrc9b("swRef", r329_swRef), new r312_xn$NamedParameterPair$2Lrc9b("swSerif", r329_swSerif), new r312_xn$NamedParameterPair$2Lrc9b("fForceSymmetric", r329_fForceSymmetric));
                        r335_currentGlyph.include(r312_tagged("serifLT", (_r335_t0 = r329_slabTop, _r335_t0 === r312_xn$SLABFULL$5sIl ? r335_sf.lt.full : _r335_t0 === r312_xn$SLABOUTWARD$5sIl ? r335_sf.lt.outer : (r335___ = _r335_t0, new r312_xn$Capture$2Lrc8.GlyphProc(function (r343_currentGlyph) {
                            var _r343_t0, _r343_t1;
                            return void 0;
                        })))));
                        r335_currentGlyph.include(r312_tagged("serifLB", (_r335_t1 = r329_slabBottom, _r335_t1 === r312_xn$SLABFULL$5sIl ? r335_sf.lb.full : _r335_t1 === r312_xn$SLABOUTWARD$5sIl ? r335_sf.lb.outer : (r335___ = _r335_t1, new r312_xn$Capture$2Lrc8.GlyphProc(function (r346_currentGlyph) {
                            var _r346_t0, _r346_t1;
                            return void 0;
                        })))));
                    }
                    return void 0;
                });
            };
            r321_exports.RevShape = r321_RevShape = function () {
                var _r348_t5;
                var _r348_t6 = arguments;
                var r348_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r348_t6, 0);
                var _r348_t0 = [];
                var _r348_t1 = 0;
                while (_r348_t1 < r348_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r348_xn$flexarguments$2Lrc7uIe5[_r348_t1] instanceof r312_xn$NamedParameterPair$2Lrc9b)) _r348_t0.push(r348_xn$flexarguments$2Lrc7uIe5[_r348_t1]);
                    _r348_t1 = _r348_t1 + 1;
                }
                var _r348_t2 = r348_xn$flexarguments$2Lrc7uIe5;
                var _r348_t3 = _r348_t2.length;
                var _r348_t4 = 0;
                while (_r348_t4 < _r348_t3) {
                    _r348_t1 = _r348_t2[_r348_t4];
                    if (_r348_t1 && _r348_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r348_t1.left === "df") r348_df = _r348_t1.right;
                    if (_r348_t1 && _r348_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r348_t1.left === "top") r348_top = _r348_t1.right;
                    if (_r348_t1 && _r348_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r348_t1.left === "hBarLeft") r348_hBarLeft = _r348_t1.right;
                    if (_r348_t1 && _r348_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r348_t1.left === "hBarY") r348_hBarY = _r348_t1.right;
                    if (_r348_t1 && _r348_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r348_t1.left === "slabTop") r348_slabTop = _r348_t1.right;
                    if (_r348_t1 && _r348_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r348_t1.left === "slabBottom") r348_slabBottom = _r348_t1.right;
                    if (_r348_t1 && _r348_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r348_t1.left === "swRef") r348_swRef = _r348_t1.right;
                    if (_r348_t1 && _r348_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r348_t1.left === "swSerif") r348_swSerif = _r348_t1.right;
                    if (_r348_t1 && _r348_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r348_t1.left === "fTailed") r348_fTailed = _r348_t1.right;
                    _r348_t4 = _r348_t4 + 1;
                }
                var r348_df = r1_fallback(r348_df, _r348_t0[0]);
                var r348_top = r1_fallback(r348_top, _r348_t0[1]);
                var r348_hBarLeft = r1_fallback(r348_hBarLeft, _r348_t0[2]);
                var r348_hBarY = r1_fallback(r348_hBarY, _r348_t0[3], r348_top / 2);
                var r348_slabTop = r1_fallback(r348_slabTop, _r348_t0[4], r312_xn$SLABNONE$5sIl);
                var r348_slabBottom = r1_fallback(r348_slabBottom, _r348_t0[5], r312_xn$SLABNONE$5sIl);
                var r348_swRef = r1_fallback(r348_swRef, _r348_t0[6], r348_df.mvs);
                var r348_swSerif = r1_fallback(r348_swSerif, _r348_t0[7], r348_swRef);
                var r348_fTailed = r1_fallback(r348_fTailed, _r348_t0[8], false);
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r354_currentGlyph) {
                    var r354_sf, r354___, _r354_t0, _r354_t1, _r354_t2, _r354_t3;
                    r354_currentGlyph.include(r348_fTailed ? r312_RightwardTailedBar(r348_df.rightSB, 0, r348_top, r348_swRef) : r312_VBar.r(r348_df.rightSB, 0, r348_top, r348_swRef));
                    if (r348_hBarLeft < r348_df.rightSB) r354_currentGlyph.include(r312_HBar.m(r348_hBarLeft, r348_df.rightSB, r348_hBarY, r348_swRef));
                    if (r312_SLAB) {
                        r354_sf = r312_SerifFrame.fromDf(r348_df, r348_top, 0, new r312_xn$NamedParameterPair$2Lrc9b("swRef", r348_swRef), new r312_xn$NamedParameterPair$2Lrc9b("swSerif", r348_swSerif));
                        r354_currentGlyph.include(r312_tagged("serifRT", (_r354_t0 = r348_slabTop, _r354_t0 === r312_xn$SLABFULL$5sIl ? r354_sf.rt.full : _r354_t0 === r312_xn$SLABOUTWARD$5sIl ? r354_sf.rt.outer : (r354___ = _r354_t0, new r312_xn$Capture$2Lrc8.GlyphProc(function (r361_currentGlyph) {
                            var _r361_t0, _r361_t1;
                            return void 0;
                        })))));
                        if (!r348_fTailed) r354_currentGlyph.include(r312_tagged("serifRB", (_r354_t1 = r348_slabBottom, _r354_t1 === r312_xn$SLABFULL$5sIl ? r354_sf.rb.full : _r354_t1 === r312_xn$SLABOUTWARD$5sIl ? r354_sf.rb.outer : (r354___ = _r354_t1, new r312_xn$Capture$2Lrc8.GlyphProc(function (r364_currentGlyph) {
                            var _r364_t0, _r364_t1;
                            return void 0;
                        })))));
                    }
                    return void 0;
                });
            };
            r321_exports.full = r321_full = function () {
                var _r366_t5;
                var _r366_t6 = arguments;
                var r366_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r366_t6, 0);
                var _r366_t0 = [];
                var _r366_t1 = 0;
                while (_r366_t1 < r366_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r366_xn$flexarguments$2Lrc7uIe5[_r366_t1] instanceof r312_xn$NamedParameterPair$2Lrc9b)) _r366_t0.push(r366_xn$flexarguments$2Lrc7uIe5[_r366_t1]);
                    _r366_t1 = _r366_t1 + 1;
                }
                var _r366_t2 = r366_xn$flexarguments$2Lrc7uIe5;
                var _r366_t3 = _r366_t2.length;
                var _r366_t4 = 0;
                while (_r366_t4 < _r366_t3) {
                    _r366_t1 = _r366_t2[_r366_t4];
                    if (_r366_t1 && _r366_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r366_t1.left === "df") r366_df = _r366_t1.right;
                    if (_r366_t1 && _r366_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r366_t1.left === "top") r366_top = _r366_t1.right;
                    if (_r366_t1 && _r366_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r366_t1.left === "hBarRight") r366_hBarRight = _r366_t1.right;
                    if (_r366_t1 && _r366_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r366_t1.left === "hBarY") r366_hBarY = _r366_t1.right;
                    if (_r366_t1 && _r366_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r366_t1.left === "fCapital") r366_fCapital = _r366_t1.right;
                    if (_r366_t1 && _r366_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r366_t1.left === "swRef") r366_swRef = _r366_t1.right;
                    if (_r366_t1 && _r366_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r366_t1.left === "swSerif") r366_swSerif = _r366_t1.right;
                    _r366_t4 = _r366_t4 + 1;
                }
                var r366_df = r1_fallback(r366_df, _r366_t0[0]);
                var r366_top = r1_fallback(r366_top, _r366_t0[1]);
                var r366_hBarRight = r1_fallback(r366_hBarRight, _r366_t0[2]);
                var r366_hBarY = r1_fallback(r366_hBarY, _r366_t0[3]);
                var r366_fCapital = r1_fallback(r366_fCapital, _r366_t0[4], false);
                var r366_swRef = r1_fallback(r366_swRef, _r366_t0[5], r366_df.mvs);
                var r366_swSerif = r1_fallback(r366_swSerif, _r366_t0[6], r366_swRef);
                var r366_useItalicShape = !r366_fCapital && r312_para.isItalic;
                return r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, r321_Shape(new r312_xn$NamedParameterPair$2Lrc9b("df", r366_df), new r312_xn$NamedParameterPair$2Lrc9b("top", r366_top), new r312_xn$NamedParameterPair$2Lrc9b("hBarRight", r366_hBarRight), new r312_xn$NamedParameterPair$2Lrc9b("hBarY", r366_hBarY), new r312_xn$NamedParameterPair$2Lrc9b("slabTop", r366_useItalicShape ? r312_xn$SLABOUTWARD$5sIl : r312_xn$SLABFULL$5sIl), new r312_xn$NamedParameterPair$2Lrc9b("slabBottom", r366_useItalicShape ? r312_xn$SLABNONE$5sIl : r312_xn$SLABFULL$5sIl), new r312_xn$NamedParameterPair$2Lrc9b("swRef", r366_swRef), new r312_xn$NamedParameterPair$2Lrc9b("swSerif", r366_swSerif)));
            };
            r321_exports.outer = r321_outer = function () {
                var _r381_t5;
                var _r381_t6 = arguments;
                var r381_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r381_t6, 0);
                var _r381_t0 = [];
                var _r381_t1 = 0;
                while (_r381_t1 < r381_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r381_xn$flexarguments$2Lrc7uIe5[_r381_t1] instanceof r312_xn$NamedParameterPair$2Lrc9b)) _r381_t0.push(r381_xn$flexarguments$2Lrc7uIe5[_r381_t1]);
                    _r381_t1 = _r381_t1 + 1;
                }
                var _r381_t2 = r381_xn$flexarguments$2Lrc7uIe5;
                var _r381_t3 = _r381_t2.length;
                var _r381_t4 = 0;
                while (_r381_t4 < _r381_t3) {
                    _r381_t1 = _r381_t2[_r381_t4];
                    if (_r381_t1 && _r381_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r381_t1.left === "df") r381_df = _r381_t1.right;
                    if (_r381_t1 && _r381_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r381_t1.left === "top") r381_top = _r381_t1.right;
                    if (_r381_t1 && _r381_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r381_t1.left === "hBarRight") r381_hBarRight = _r381_t1.right;
                    if (_r381_t1 && _r381_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r381_t1.left === "hBarY") r381_hBarY = _r381_t1.right;
                    if (_r381_t1 && _r381_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r381_t1.left === "fCapital") r381_fCapital = _r381_t1.right;
                    if (_r381_t1 && _r381_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r381_t1.left === "swRef") r381_swRef = _r381_t1.right;
                    if (_r381_t1 && _r381_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r381_t1.left === "swSerif") r381_swSerif = _r381_t1.right;
                    _r381_t4 = _r381_t4 + 1;
                }
                var r381_df = r1_fallback(r381_df, _r381_t0[0]);
                var r381_top = r1_fallback(r381_top, _r381_t0[1]);
                var r381_hBarRight = r1_fallback(r381_hBarRight, _r381_t0[2]);
                var r381_hBarY = r1_fallback(r381_hBarY, _r381_t0[3]);
                var r381_fCapital = r1_fallback(r381_fCapital, _r381_t0[4], false);
                var r381_swRef = r1_fallback(r381_swRef, _r381_t0[5], r381_df.mvs);
                var r381_swSerif = r1_fallback(r381_swSerif, _r381_t0[6], r381_swRef);
                var r381_useItalicShape = !r381_fCapital && r312_para.isItalic;
                return r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, r321_Shape(new r312_xn$NamedParameterPair$2Lrc9b("df", r381_df), new r312_xn$NamedParameterPair$2Lrc9b("top", r381_top), new r312_xn$NamedParameterPair$2Lrc9b("hBarRight", r381_hBarRight), new r312_xn$NamedParameterPair$2Lrc9b("hBarY", r381_hBarY), new r312_xn$NamedParameterPair$2Lrc9b("slabTop", r312_xn$SLABOUTWARD$5sIl), new r312_xn$NamedParameterPair$2Lrc9b("slabBottom", r381_useItalicShape ? r312_xn$SLABNONE$5sIl : r312_xn$SLABOUTWARD$5sIl), new r312_xn$NamedParameterPair$2Lrc9b("swRef", r381_swRef), new r312_xn$NamedParameterPair$2Lrc9b("swSerif", r381_swSerif)));
            };
            r321_exports.A = r321_A = function () {
                var _r396_t5;
                var _r396_t6 = arguments;
                var r396_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r396_t6, 0);
                var _r396_t0 = [];
                var _r396_t1 = 0;
                while (_r396_t1 < r396_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r396_xn$flexarguments$2Lrc7uIe5[_r396_t1] instanceof r312_xn$NamedParameterPair$2Lrc9b)) _r396_t0.push(r396_xn$flexarguments$2Lrc7uIe5[_r396_t1]);
                    _r396_t1 = _r396_t1 + 1;
                }
                var _r396_t2 = r396_xn$flexarguments$2Lrc7uIe5;
                var _r396_t3 = _r396_t2.length;
                var _r396_t4 = 0;
                while (_r396_t4 < _r396_t3) {
                    _r396_t1 = _r396_t2[_r396_t4];
                    if (_r396_t1 && _r396_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r396_t1.left === "df") r396_df = _r396_t1.right;
                    if (_r396_t1 && _r396_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r396_t1.left === "top") r396_top = _r396_t1.right;
                    if (_r396_t1 && _r396_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r396_t1.left === "hBarRight") r396_hBarRight = _r396_t1.right;
                    if (_r396_t1 && _r396_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r396_t1.left === "hBarY") r396_hBarY = _r396_t1.right;
                    if (_r396_t1 && _r396_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r396_t1.left === "fCapital") r396_fCapital = _r396_t1.right;
                    if (_r396_t1 && _r396_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r396_t1.left === "swRef") r396_swRef = _r396_t1.right;
                    if (_r396_t1 && _r396_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r396_t1.left === "swSerif") r396_swSerif = _r396_t1.right;
                    _r396_t4 = _r396_t4 + 1;
                }
                var r396_df = r1_fallback(r396_df, _r396_t0[0]);
                var r396_top = r1_fallback(r396_top, _r396_t0[1]);
                var r396_hBarRight = r1_fallback(r396_hBarRight, _r396_t0[2]);
                var r396_hBarY = r1_fallback(r396_hBarY, _r396_t0[3]);
                var r396_fCapital = r1_fallback(r396_fCapital, _r396_t0[4], false);
                var r396_swRef = r1_fallback(r396_swRef, _r396_t0[5], r396_df.mvs);
                var r396_swSerif = r1_fallback(r396_swSerif, _r396_t0[6], r396_swRef);
                var r396_useItalicShape = !r396_fCapital && r312_para.isItalic;
                return r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, r321_Shape(new r312_xn$NamedParameterPair$2Lrc9b("df", r396_df), new r312_xn$NamedParameterPair$2Lrc9b("top", r396_top), new r312_xn$NamedParameterPair$2Lrc9b("hBarRight", r396_hBarRight), new r312_xn$NamedParameterPair$2Lrc9b("hBarY", r396_hBarY), new r312_xn$NamedParameterPair$2Lrc9b("slabTop", r396_useItalicShape ? r312_xn$SLABOUTWARD$5sIl : r312_xn$SLABFULL$5sIl), new r312_xn$NamedParameterPair$2Lrc9b("slabBottom", r396_useItalicShape ? r312_xn$SLABNONE$5sIl : r312_xn$SLABOUTWARD$5sIl), new r312_xn$NamedParameterPair$2Lrc9b("swRef", r396_swRef), new r312_xn$NamedParameterPair$2Lrc9b("swSerif", r396_swSerif), new r312_xn$NamedParameterPair$2Lrc9b("fForceSymmetric", true)));
            };
            r321_exports.ascender = r321_ascender = function () {
                var _r412_t5;
                var _r412_t6 = arguments;
                var r412_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r412_t6, 0);
                var _r412_t0 = [];
                var _r412_t1 = 0;
                while (_r412_t1 < r412_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r412_xn$flexarguments$2Lrc7uIe5[_r412_t1] instanceof r312_xn$NamedParameterPair$2Lrc9b)) _r412_t0.push(r412_xn$flexarguments$2Lrc7uIe5[_r412_t1]);
                    _r412_t1 = _r412_t1 + 1;
                }
                var _r412_t2 = r412_xn$flexarguments$2Lrc7uIe5;
                var _r412_t3 = _r412_t2.length;
                var _r412_t4 = 0;
                while (_r412_t4 < _r412_t3) {
                    _r412_t1 = _r412_t2[_r412_t4];
                    if (_r412_t1 && _r412_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r412_t1.left === "df") r412_df = _r412_t1.right;
                    if (_r412_t1 && _r412_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r412_t1.left === "top") r412_top = _r412_t1.right;
                    if (_r412_t1 && _r412_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r412_t1.left === "hBarRight") r412_hBarRight = _r412_t1.right;
                    if (_r412_t1 && _r412_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r412_t1.left === "hBarY") r412_hBarY = _r412_t1.right;
                    if (_r412_t1 && _r412_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r412_t1.left === "fCapital") r412_fCapital = _r412_t1.right;
                    if (_r412_t1 && _r412_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r412_t1.left === "swRef") r412_swRef = _r412_t1.right;
                    if (_r412_t1 && _r412_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r412_t1.left === "swSerif") r412_swSerif = _r412_t1.right;
                    _r412_t4 = _r412_t4 + 1;
                }
                var r412_df = r1_fallback(r412_df, _r412_t0[0]);
                var r412_top = r1_fallback(r412_top, _r412_t0[1]);
                var r412_hBarRight = r1_fallback(r412_hBarRight, _r412_t0[2]);
                var r412_hBarY = r1_fallback(r412_hBarY, _r412_t0[3]);
                var r412_fCapital = r1_fallback(r412_fCapital, _r412_t0[4], false);
                var r412_swRef = r1_fallback(r412_swRef, _r412_t0[5], r412_df.mvs);
                var r412_swSerif = r1_fallback(r412_swSerif, _r412_t0[6], r412_swRef);
                var r412_useItalicShape = !r412_fCapital && r312_para.isItalic;
                return r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, r321_Shape(new r312_xn$NamedParameterPair$2Lrc9b("df", r412_df), new r312_xn$NamedParameterPair$2Lrc9b("top", r412_top), new r312_xn$NamedParameterPair$2Lrc9b("hBarRight", r412_hBarRight), new r312_xn$NamedParameterPair$2Lrc9b("hBarY", r412_hBarY), new r312_xn$NamedParameterPair$2Lrc9b("slabTop", r312_xn$SLABOUTWARD$5sIl), new r312_xn$NamedParameterPair$2Lrc9b("slabBottom", r412_useItalicShape ? r312_xn$SLABNONE$5sIl : r312_xn$SLABFULL$5sIl), new r312_xn$NamedParameterPair$2Lrc9b("swRef", r412_swRef), new r312_xn$NamedParameterPair$2Lrc9b("swSerif", r412_swSerif)));
            };
            return r321_exports;
        })();
        (function () {
            var r427_suffix, r427_bodyShape, r427_slabKind, _r427_t3, _r427_t5, _r427_t6, _r427_tag7;
            var _r427_t0 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Upper-A"].resolve();
            var r427_AShape = _r427_t0.AShape;
            var r427_AConfig = _r427_t0.AConfig;
            var _r427_t1 = Object.entries(r427_AConfig)[Symbol.iterator]();
            var _r427_t2 = void 0;
            var _r427_t4 = !(_r427_t2 = _r427_t1.next()).done;
            while (_r427_t4) {
                _r427_t3 = _r427_t2.value;
                r427_suffix = _r427_t3[0];
                r427_bodyShape = _r427_t3[1][0];
                r427_slabKind = _r427_t3[1][1];
                _r427_t3[1];
                _r427_t5 = (function () {
                    return r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/AIotated." + r427_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r434_currentGlyph) {
                        var _r434_t0, _r434_t1;
                        var r434_df = r434_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3.5));
                        r434_currentGlyph.include(r434_df.markSet.capital());
                        var r434_sw = r434_df.adviceThinnerStroke(2, 0.75);
                        var r434_gap = (r434_df.rightSB - r434_df.leftSB) / 3;
                        var r434_subDf = r312_DivFrame(Math.min((r434_df.width - r434_gap) / r312_Width, 0.75 * r434_df.adws), 2);
                        var r434_shift = r434_df.width - r434_subDf.width;
                        var r434_xIotifiedBarRight = r434_df.leftSB + r312_HSwToV(r434_sw);
                        var r434_botGap = Math.max(0.08 * (r434_df.rightSB - r434_df.leftSB), r312_AdviceStroke(6));
                        r434_currentGlyph.include(r312_difference(r312_xn$withtransform$5sIl(r312_ApparentTranslate(r434_shift, 0), r427_AShape.Letter(r434_subDf, r427_bodyShape, r427_slabKind, r312_CAP, r434_sw)), r312_intersection(r312_MaskBelow(r434_sw), r312_MaskLeft(r1_mix(r434_xIotifiedBarRight, Math.min(r434_subDf.leftSB + r434_shift, r434_xIotifiedBarRight + r434_botGap), 0.5)))));
                        r434_currentGlyph.include(r312_difference(r312_Iotation.A(r434_df, r312_CAP, r1_mix(r434_df.leftSB, r434_df.rightSB, 0.75), r312_CAP / 2, new r312_xn$NamedParameterPair$2Lrc9b("fCapital", true), new r312_xn$NamedParameterPair$2Lrc9b("swRef", r434_sw)), r312_xn$withtransform$5sIl(r312_ApparentTranslate(r434_shift, 0), r427_AShape.Mask(r434_subDf, r427_bodyShape, r312_CAP, r434_sw))));
                        return void 0;
                    }));
                })();
                _r427_t4 = !(_r427_t2 = _r427_t1.next()).done;
            }
            return _r427_t5;
        })();
        (function () {
            var r442_suffix, r442_hookStyle, r442_body, r442_bar, _r442_t3, _r442_t6, _r442_t8, _r442_t9, _r442_tag10, _r442_t11, _r442_tag12;
            var _r442_t0 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Lower-A"].resolve();
            var r442_DoubleStorey = _r442_t0.DoubleStorey;
            var r442_DoubleStoreyConfig = _r442_t0.DoubleStoreyConfig;
            var r442_SingleStorey = _r442_t0.SingleStorey;
            var r442_SingleStoreyConfig = _r442_t0.SingleStoreyConfig;
            var _r442_t1 = Object.entries(r442_DoubleStoreyConfig)[Symbol.iterator]();
            var _r442_t2 = void 0;
            while (!(_r442_t2 = _r442_t1.next()).done) {
                _r442_t3 = _r442_t2.value;
                r442_suffix = _r442_t3[0];
                r442_hookStyle = _r442_t3[1][0];
                r442_body = _r442_t3[1][1][0];
                _r442_t3[1][1];
                _r442_t3[1];
                (function () {
                    return r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/aIotated." + r442_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r449_currentGlyph) {
                        var _r449_t0, _r449_t1;
                        var r449_df = r449_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
                        r449_currentGlyph.include(r449_df.markSet.e());
                        var r449_sw = r449_df.adviceThinnerStroke2(2, 3, r312_XH, 0.75);
                        var r449_gap = 0.375 * (r449_df.rightSB - r449_df.leftSB) - r312_HSwToV(0.25 * r449_sw) + r449_sw / 16;
                        var r449_subDf = r312_DivFrame(Math.min((r449_df.width - r449_gap) / r312_Width, 0.75 * r449_df.adws), 2);
                        var r449_shift = r449_df.width - r449_subDf.width;
                        r449_currentGlyph.include(r312_xn$withtransform$5sIl(r312_ApparentTranslate(r449_shift, 0), r442_body(r449_subDf, r442_hookStyle, r449_sw)));
                        r449_currentGlyph.include(r312_difference(r312_Iotation.full(r449_df, r312_XH, r1_mix(r449_df.leftSB, r449_df.rightSB, 0.75), r312_XH / 2, new r312_xn$NamedParameterPair$2Lrc9b("swRef", r449_sw), new r312_xn$NamedParameterPair$2Lrc9b("swSerif", r449_subDf.mvs)), r312_xn$withtransform$5sIl(r312_ApparentTranslate(r449_shift, 0), r442_DoubleStorey.Mask(r442_body, r449_df, r449_sw))));
                        return void 0;
                    }));
                })();
            }
            var _r442_t4 = Object.entries(r442_SingleStoreyConfig)[Symbol.iterator]();
            var _r442_t5 = void 0;
            var _r442_t7 = !(_r442_t5 = _r442_t4.next()).done;
            while (_r442_t7) {
                _r442_t6 = _r442_t5.value;
                r442_suffix = _r442_t6[0];
                r442_body = _r442_t6[1][0];
                r442_bar = _r442_t6[1][1];
                _r442_t6[1];
                _r442_t8 = (function () {
                    return r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/aIotated." + r442_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r461_currentGlyph) {
                        var _r461_t0, _r461_t1;
                        var r461_df = r461_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
                        r461_currentGlyph.include(r461_df.markSet.e());
                        var r461_sw = r461_df.adviceThinnerStroke(2, 0.75);
                        var r461_gap = 0.375 * (r461_df.rightSB - r461_df.leftSB) - r312_HSwToV(0.25 * r461_sw) + r461_sw / 16;
                        var r461_subDf = r312_DivFrame(Math.min((r461_df.width - r461_gap) / r312_Width, 0.75 * r461_df.adws), 2);
                        var r461_shift = r461_df.width - r461_subDf.width;
                        r461_currentGlyph.include(r312_xn$withtransform$5sIl(r312_ApparentTranslate(r461_shift, 0), r442_body(r461_subDf, r312_XH, r442_bar, r461_sw)));
                        r461_currentGlyph.include(r312_Iotation.full(r461_df, r312_XH, r461_subDf.leftSB + r312_OX + r312_HSwToV(0.5 * r461_sw) + r461_shift, r312_XH / 2, new r312_xn$NamedParameterPair$2Lrc9b("swRef", r461_sw), new r312_xn$NamedParameterPair$2Lrc9b("swSerif", r461_subDf.mvs)));
                        return void 0;
                    }));
                })();
                _r442_t7 = !(_r442_t5 = _r442_t4.next()).done;
            }
            return _r442_t8;
        })();
        (function () {
            var r469_suffix, r469_styTop, r469_styBot, _r469_t3, _r469_t5, _r469_t6, _r469_tag7;
            var _r469_t0 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-C"].resolve();
            var r469_CLetterForm = _r469_t0.CLetterForm;
            var r469_CConfig = _r469_t0.CConfig;
            var _r469_t1 = Object.entries(r469_CConfig)[Symbol.iterator]();
            var _r469_t2 = void 0;
            var _r469_t4 = !(_r469_t2 = _r469_t1.next()).done;
            while (_r469_t4) {
                _r469_t3 = _r469_t2.value;
                r469_suffix = _r469_t3[0];
                r469_styTop = _r469_t3[1][0];
                r469_styBot = _r469_t3[1][1];
                _r469_t3[1];
                _r469_t5 = (function () {
                    var r473_IotatedEShape = function (r474_fCapital, r474_fMidSerif, r474_df, r474_top, r474_ada, r474_adb) {
                        var _r474_t0, _r474_t1;
                        return new r312_xn$Capture$2Lrc8.GlyphProc(function (r476_currentGlyph) {
                            var r476_jutTop, r476_jutBot, r476_jutMid, r476_swVJut, _r476_t0, _r476_t1, _r476_t2;
                            var r476_sw = r474_df.adviceThinnerStroke2(2, 3, r474_top, 0.75);
                            var r476_gap = 0.375 * (r474_df.rightSB - r474_df.leftSB) - r312_HSwToV(0.25 * r476_sw) + r476_sw / 16;
                            var r476_subDf = r312_DivFrame(Math.min((r474_df.width - r476_gap) / r312_Width, 0.75 * r474_df.adws), 2);
                            var r476_lf = r469_CLetterForm(r476_subDf, r469_styTop, r469_styBot, r474_top, 0, new r312_xn$NamedParameterPair$2Lrc9b("ada", r474_ada * 0.75 * r474_df.adws), new r312_xn$NamedParameterPair$2Lrc9b("adb", r474_adb * 0.75 * r474_df.adws), new r312_xn$NamedParameterPair$2Lrc9b("sw", r476_sw));
                            var r476_shift = r474_df.width - r476_subDf.width;
                            r476_currentGlyph.include(r312_xn$withtransform$5sIl(r312_ApparentTranslate(r476_shift, 0), r476_lf.full()));
                            var r476_xMidBarRight = (r474_fMidSerif && !r474_fCapital ? r476_subDf.middle : r1_mix(r476_subDf.rightSB, r476_subDf.leftSB, 0.35)) + r476_shift;
                            r476_currentGlyph.include(r312_Iotation.full(r474_df, r474_top, new r312_xn$NamedParameterPair$2Lrc9b("hBarRight", r476_xMidBarRight), new r312_xn$NamedParameterPair$2Lrc9b("hBarY", r474_top / 2), new r312_xn$NamedParameterPair$2Lrc9b("fCapital", r474_fCapital), new r312_xn$NamedParameterPair$2Lrc9b("swRef", r476_sw)));
                            if (r474_fMidSerif) {
                                _r476_t0 = r312_EFVJutLength(r474_top, 0, 0.5, r476_sw, r474_fCapital ? r312_Hook : void 0, r474_fCapital ? r312_Hook : void 0);
                                r476_jutTop = _r476_t0[0];
                                r476_jutBot = _r476_t0[1];
                                r476_jutMid = _r476_t0[2];
                                r476_swVJut = Math.min(r312_VJutStroke * (r476_sw / r312_Stroke), r312_VSwToH((r474_fCapital ? 0.8 : 0.625) * ((r474_fCapital ? r476_xMidBarRight : r476_subDf.rightSB - r312_HSwToV(r476_sw) + r476_shift) - (r476_subDf.leftSB + r312_HSwToV(r476_sw) + r476_shift))));
                                r476_currentGlyph.include(r312_VSerif.mr(r476_xMidBarRight + (r474_fCapital ? 0 : r312_HSwToV(0.5 * r476_swVJut)), r474_top / 2, r476_jutMid, r476_swVJut));
                            }
                            return void 0;
                        });
                    };
                    r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/EIotated." + r469_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r489_currentGlyph) {
                        var _r489_t0, _r489_t1;
                        var r489_df = r489_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
                        r489_currentGlyph.include(r489_df.markSet.capital());
                        r489_currentGlyph.include(r473_IotatedEShape(true, false, r489_df, r312_CAP, r312_ArchDepthA, r312_ArchDepthB));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/EIotated." + r469_suffix + "Capped", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r495_currentGlyph) {
                        var _r495_t0, _r495_t1;
                        var r495_df = r495_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
                        r495_currentGlyph.include(r495_df.markSet.capital());
                        r495_currentGlyph.include(r473_IotatedEShape(true, true, r495_df, r312_CAP, r312_ArchDepthA, r312_ArchDepthB));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/eIotated." + r469_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r501_currentGlyph) {
                        var _r501_t0, _r501_t1;
                        var r501_df = r501_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
                        r501_currentGlyph.include(r501_df.markSet.e());
                        r501_currentGlyph.include(r473_IotatedEShape(false, false, r501_df, r312_XH, r312_SmallArchDepthA, r312_SmallArchDepthB));
                        return void 0;
                    }));
                    return r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/eIotated." + r469_suffix + "Capped", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r507_currentGlyph) {
                        var _r507_t0, _r507_t1;
                        var r507_df = r507_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
                        r507_currentGlyph.include(r507_df.markSet.e());
                        r507_currentGlyph.include(r473_IotatedEShape(false, true, r507_df, r312_XH, r312_SmallArchDepthA, r312_SmallArchDepthB));
                        return void 0;
                    }));
                })();
                _r469_t4 = !(_r469_t2 = _r469_t1.next()).done;
            }
            return _r469_t5;
        })();
        (function () {
            var r512_suffix, r512_body, r512_revbody, _r512_t3, _r512_t5, _r512_t6, _r512_tag7;
            var _r512_t0 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Lower-E"].resolve();
            var r512_SmallEConfig = _r512_t0.SmallEConfig;
            var _r512_t1 = Object.entries(r512_SmallEConfig)[Symbol.iterator]();
            var _r512_t2 = void 0;
            var _r512_t4 = !(_r512_t2 = _r512_t1.next()).done;
            while (_r512_t4) {
                _r512_t3 = _r512_t2.value;
                r512_suffix = _r512_t3[0];
                r512_body = _r512_t3[1][0];
                r512_revbody = _r512_t3[1][1];
                _r512_t3[1];
                _r512_t5 = (function () {
                    return r312_xn$GlyphSaveSink$2Lrc4b.save("latn/eIotated." + r512_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r519_currentGlyph) {
                        var _r519_t0, _r519_t1;
                        var r519_df = r519_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
                        r519_currentGlyph.include(r519_df.markSet.e());
                        var r519_sw = r519_df.adviceThinnerStroke2(2, 3, r312_XH, 0.75);
                        var r519_gap = 0.375 * (r519_df.rightSB - r519_df.leftSB) - r312_HSwToV(0.25 * r519_sw) + r519_sw / 16;
                        var r519_subDf = r312_DivFrame(Math.min((r519_df.width - r519_gap) / r312_Width, 0.75 * r519_df.adws), 2);
                        var r519_shift = r519_df.width - r519_subDf.width;
                        r519_currentGlyph.include(r312_xn$withtransform$5sIl(r312_ApparentTranslate(r519_shift, 0), r512_body(r519_subDf, r312_XH, new r312_xn$NamedParameterPair$2Lrc9b("stroke", r519_sw), new r312_xn$NamedParameterPair$2Lrc9b("hook", r312_AHook), new r312_xn$NamedParameterPair$2Lrc9b("ada", r312_SmallArchDepthA * 0.75 * r519_df.adws), new r312_xn$NamedParameterPair$2Lrc9b("adb", r312_SmallArchDepthB * 0.75 * r519_df.adws))));
                        r519_currentGlyph.include(r312_Iotation.full(r519_df, r312_XH, r519_subDf.leftSB + r312_OX + r312_HSwToV(0.5 * r519_sw) + r519_shift, r312_XH / 2, new r312_xn$NamedParameterPair$2Lrc9b("swRef", r519_sw)));
                        return void 0;
                    }));
                })();
                _r512_t4 = !(_r512_t2 = _r512_t1.next()).done;
            }
            return _r512_t5;
        })();
        r312_xn$selectvariant$7Hrq("cyrl/AIotated", 42582, new r312_xn$NamedParameterPair$2Lrc9b("follow", "A"));
        r312_xn$selectvariant$7Hrq("cyrl/aIotated", 42583, new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/a"));
        r312_xn$selectvariant$7Hrq("cyrl/EIotated", 1124, new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/YeUkrainian"));
        r312_xn$selectvariant$7Hrq("cyrl/eIotated", 1125, new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/yeUkrainian"));
        return r312_xn$selectvariant$7Hrq("latn/eIotated", 43873, new r312_xn$NamedParameterPair$2Lrc9b("follow", "e"));
    });
    return void 0;
});


