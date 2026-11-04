"use strict";
import * as _s0_t0 from "@iosevka/util";
var _s0_t1;
export {_s0_t1 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Mark-Adjustment", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t5, _r312_t6, _r312_t7, _r312_tag8;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_Hook = _r312_t1.Hook;
        var r312_Stroke = _r312_t1.Stroke;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r314_t0, _r314_t1;
            return {
                "ExtendBelowBaseAnchors": r312_ExtendBelowBaseAnchors
            };
        });
        var r312_ExtendBelowBaseAnchors = function (r315_y) {
            var _r315_t0, _r315_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r317_currentGlyph) {
                var r317_a, _r317_t0, _r317_t1;
                if (r317_currentGlyph.baseAnchors.below) {
                    r317_a = r317_currentGlyph.gizmo.unapply(r317_currentGlyph.baseAnchors.below);
                    if (r317_a.y > r315_y) r317_currentGlyph.setBaseAnchor("below", r317_a.x, r315_y);
                }
                if (r317_currentGlyph.baseAnchors.leaningBelow) {
                    r317_a = r317_currentGlyph.gizmo.unapply(r317_currentGlyph.baseAnchors.leaningBelow);
                    if (r317_a.y > r315_y) r317_currentGlyph.setBaseAnchor("leaningBelow", r317_a.x, r315_y);
                }
                return void 0;
            });
        };
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r321_t0, _r321_t1;
            return {
                "ExtendAboveBaseAnchors": r312_ExtendAboveBaseAnchors
            };
        });
        var r312_ExtendAboveBaseAnchors = function (r322_y) {
            var _r322_t0, _r322_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r324_currentGlyph) {
                var r324_a, _r324_t0, _r324_t1;
                if (r324_currentGlyph.baseAnchors.above) {
                    r324_a = r324_currentGlyph.gizmo.unapply(r324_currentGlyph.baseAnchors.above);
                    if (r324_a.y < r322_y) r324_currentGlyph.setBaseAnchor("above", r324_a.x, r322_y);
                }
                if (r324_currentGlyph.baseAnchors.leaningAbove) {
                    r324_a = r324_currentGlyph.gizmo.unapply(r324_currentGlyph.baseAnchors.leaningAbove);
                    if (r324_a.y < r322_y) r324_currentGlyph.setBaseAnchor("leaningAbove", r324_a.x, r322_y);
                }
                return void 0;
            });
        };
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r328_t0, _r328_t1;
            return {
                "TurnMarks": r312_TurnMarks
            };
        });
        var r312_TurnMarks = function (r329_cx, r329_cy, r329__df) {
            var _r329_t0, _r329_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
                var _r331_t0, _r331_t1;
                var r331_bAbove = r331_currentGlyph.gizmo.unapplyIfPresent(r331_currentGlyph.baseAnchors.above);
                var r331_bBelow = r331_currentGlyph.gizmo.unapplyIfPresent(r331_currentGlyph.baseAnchors.below);
                var r331_bLeaningAbove = r331_currentGlyph.gizmo.unapplyIfPresent(r331_currentGlyph.baseAnchors.leaningAbove);
                var r331_bLeaningBelow = r331_currentGlyph.gizmo.unapplyIfPresent(r331_currentGlyph.baseAnchors.leaningBelow);
                if (!r331_bAbove || !r331_bBelow) return void 0;
                var r331_df = r1_fallback(r329__df, r331_currentGlyph.divFrameParams ? r312_DivFrame.fromParams(r331_currentGlyph.divFrameParams) : r312_DivFrame(r331_currentGlyph.advanceWidth / r312_Width));
                var r331_topAfterFlip = r1_mix(r329_cy, r331_bBelow.y, -1);
                var r331_botAfterFlip = r1_mix(r329_cy, r331_bAbove.y, -1);
                var r331_markSet = r331_df.markSet.OfZone({
                    "top": r331_topAfterFlip,
                    "bot": r331_botAfterFlip
                });
                r331_currentGlyph.include(r331_markSet());
                if (r331_bBelow && r331_currentGlyph.baseAnchors.above) r331_currentGlyph.setBaseAnchor("above", r1_mix(r329_cx, r331_bBelow.x, -1), r331_currentGlyph.baseAnchors.above.y);
                if (r331_bAbove && r331_currentGlyph.baseAnchors.below) r331_currentGlyph.setBaseAnchor("below", r1_mix(r329_cx, r331_bAbove.x, -1), r331_currentGlyph.baseAnchors.below.y);
                if (r331_bLeaningBelow && r331_currentGlyph.baseAnchors.above) r331_currentGlyph.setBaseAnchor("leaningAbove", r1_mix(r329_cx, r331_bLeaningBelow.x, -1), r331_currentGlyph.baseAnchors.above.y);
                if (r331_bLeaningAbove && r331_currentGlyph.baseAnchors.below) r331_currentGlyph.setBaseAnchor("leaningBelow", r1_mix(r329_cx, r331_bLeaningAbove.x, -1), r331_currentGlyph.baseAnchors.below.y);
                return void 0;
            });
        };
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r338_t0, _r338_t1;
            return {
                "TieAnchorMap": r312_TieAnchorMap
            };
        });
        var r312_TieAnchorMap = [["above", "tieAbove"], ["below", "tieBelow"]];
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r340_t0, _r340_t1;
            return {
                "LeaningAnchorMap": r312_LeaningAnchorMap
            };
        });
        var r312_LeaningAnchorMap = [["above", "leaningAbove"], ["below", "leaningBelow"]];
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r342_t0, _r342_t1;
            return {
                "LeaningAnchor": r312_LeaningAnchor
            };
        });
        var r312_LeaningAnchor = (function () {
            var r345_Above, r345_Below;
            var r345_exports = {};
            var r345_SetProcImpl = function (r352_mkCenter, r352_mkLeaning, r352_x) {
                var _r352_t0, _r352_t1;
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r354_currentGlyph) {
                    var _r354_t0, _r354_t1;
                    var r354_existing = r354_currentGlyph.baseAnchors[r352_mkCenter];
                    if (!r354_existing) return void 0;
                    var r354_existingNT = r354_currentGlyph.gizmo.unapply(r354_existing);
                    r354_currentGlyph.setBaseAnchor(r352_mkLeaning, r352_x, r354_existingNT.y);
                    return void 0;
                });
            };
            var r345_Impl = function (r355_mkCenter, r355_mkLeaning) {
                var _r355_t0, _r355_t1, _r355_t2, _r355_tag3;
                return (function () {
                    var r358_At, r358_VBar, r358_Hook, _r358_t2, _r358_tag3;
                    var r358_exports = {};
                    r358_exports.At = r358_At = function (r366_x) {
                        var _r366_t0, _r366_t1;
                        return r345_SetProcImpl(r355_mkCenter, r355_mkLeaning, r366_x);
                    };
                    var _r358_t0 = r358_exports;
                    var _r358_t1 = "VBar";
                    _r358_t0[_r358_t1] = r358_VBar = (function () {
                        var r370_m, r370_l, r370_r;
                        var r370_exports = {};
                        r370_exports.m = r370_m = function (r378_x, r378_sw) {
                            var _r378_t0, _r378_t1;
                            return r358_At(r378_x);
                        };
                        r370_exports.l = r370_l = function (r380_x, r380_sw) {
                            var _r380_t0, _r380_t1;
                            return r358_At(r380_x + r312_HSwToV(0.5 * r1_fallback(r380_sw, r312_Stroke)));
                        };
                        r370_exports.r = r370_r = function (r382_x, r382_sw) {
                            var _r382_t0, _r382_t1;
                            return r358_At(r382_x - r312_HSwToV(0.5 * r1_fallback(r382_sw, r312_Stroke)));
                        };
                        return r370_exports;
                    })();
                    r358_exports.Hook = r358_Hook = function (r384_xOutsideBar, r384_xOutsideHook, r384_sw) {
                        var _r384_t0, _r384_t1;
                        var r384_xAnchor = r1_mix(r384_xOutsideBar, r384_xOutsideHook, 7 / 16);
                        return r345_SetProcImpl(r355_mkCenter, r355_mkLeaning, r384_xAnchor);
                    };
                    return r358_exports;
                })();
            };
            r345_exports.Above = r345_Above = r345_Impl("above", "leaningAbove");
            r345_exports.Below = r345_Below = r345_Impl("below", "leaningBelow");
            return r345_exports;
        })();
        r312_xn$GlyphSaveSink$2Lrc4b.save("mark/suppressLeaningAboveAnchor", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r389_currentGlyph) {
            var _r389_t0, _r389_t1;
            r389_currentGlyph.setWidth(0);
            r389_currentGlyph.setMarkAnchor("leaningAbove", 0, 0);
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("mark/suppressLeaningBelowAnchor", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r394_currentGlyph) {
            var _r394_t0, _r394_t1;
            r394_currentGlyph.setWidth(0);
            r394_currentGlyph.setMarkAnchor("leaningBelow", 0, 0);
            return void 0;
        }));
    });
    return void 0;
});


