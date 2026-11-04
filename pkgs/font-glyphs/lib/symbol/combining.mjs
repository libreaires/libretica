"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/geometry/box";
import * as _s0_t2 from "@iosevka/glyph/relation";
import * as _s0_t3 from "../meta/aesthetics.mjs";
var _s0_t4;
export {_s0_t4 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Box = _r1_t9.Box;
var _r1_t10 = _s0_t2;
var r1_Joining = _r1_t10.Joining;
var r1_NeqLigationSlashDotted = _r1_t10.NeqLigationSlashDotted;
var _r1_t11 = _s0_t3;
var r1_DesignParameters = _r1_t11.DesignParameters;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t4 = r1_apply = function () {
    var r310_block, _r310_t4, _r310_t6;
    var _r310_t3 = this;
    var _r310_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r310_t1 = _r310_t0.length;
    var _r310_t2 = 0;
    var _r310_t5 = _r310_t2 < _r310_t1;
    while (_r310_t5) {
        _r310_t6 = (r310_block = _r310_t0[_r310_t2], r310_block(_r310_t3), _r310_t2 = _r310_t2 + 1);
        _r310_t5 = _r310_t2 < _r310_t1;
    }
    return _r310_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r314_xn$Capture_Ext$2Lrc2b) {
    var _r314_t0, _r314_t1;
    r314_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r314_xn$Capture_Ext$2Lrc2b, "Symbols-Combining-Cyrillic-Numeric", function (r315_xn$Capture$2Lrc8, r315_xn$ExportCapture$2Lrc4b) {
        var r315_suffix, r315_DrawAt, r315_kDotRadius, r315_overshoot, _r315_t10, _r315_t11, _r315_t12, _r315_t13, _r315_tag14;
        var _r315_t0 = r315_xn$Capture$2Lrc8;
        var r315_xn$GlyphSaveSink$2Lrc4b = _r315_t0["$GlyphSaveSink$"];
        var r315_xn$NamedParameterPair$2Lrc9b = _r315_t0["$NamedParameterPair$"];
        var r315_xn$Exec$2Lrc5 = _r315_t0["$Exec$"];
        var _r315_t1 = r315_xn$Capture$2Lrc8.Metrics;
        var r315_XH = _r315_t1.XH;
        var r315_Ascender = _r315_t1.Ascender;
        var r315_Descender = _r315_t1.Descender;
        var r315_Scale = _r315_t1.Scale;
        var r315_ApparentTranslate = _r315_t1.ApparentTranslate;
        var r315_Rotate = _r315_t1.Rotate;
        var r315_Upward = _r315_t1.Upward;
        var r315_Downward = _r315_t1.Downward;
        var r315_Leftward = _r315_t1.Leftward;
        var r315_AdviceStroke = _r315_t1.AdviceStroke;
        var r315_xn$VERYFAR$5sIl = _r315_t1["VERY-FAR"];
        var _r315_t2 = r315_xn$Capture$2Lrc8.SpiroFns;
        var r315_g2 = _r315_t2.g2;
        var r315_end = _r315_t2.end;
        var r315_widths = _r315_t2.widths;
        var r315_heading = _r315_t2.heading;
        var r315_archv = _r315_t2.archv;
        var r315_dispiro = _r315_t2.dispiro;
        var _r315_t3 = r315_xn$Capture$2Lrc8.SpiroFns;
        var r315_xn$decor$0cao = _r315_t3["decor@"];
        var r315_xn$decor$0cao1 = _r315_t3["decor@@"];
        var r315_xn$decor$0cao11 = _r315_t3["decor@@@"];
        var _r315_t4 = r315_xn$Capture$2Lrc8.BooleFns;
        var r315_union = _r315_t4.union;
        var r315_difference = _r315_t4.difference;
        var _r315_t5 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r315_Rect = _r315_t5.Rect;
        var r315_RingAt = _r315_t5.RingAt;
        var r315_RingStrokeAt = _r315_t5.RingStrokeAt;
        var r315_HBar = _r315_t5.HBar;
        var r315_VBar = _r315_t5.VBar;
        var r315_Ungizmo = _r315_t5.Ungizmo;
        var r315_Regizmo = _r315_t5.Regizmo;
        var r315_ExtLineCenter = _r315_t5.ExtLineCenter;
        var r315_DotVariants = _r315_t5.DotVariants;
        var _r315_t6 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r315_xn$referglyph$1aao = _r315_t6["refer-glyph"];
        var r315_xn$selectvariant$7Hrq = _r315_t6["select-variant"];
        var _r315_t7 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r315_markExtend = _r315_t7.markExtend;
        var r315_markMiddle = _r315_t7.markMiddle;
        var r315_MarkStroke = _r315_t7.MarkStroke;
        var r315_markDotsRadius = _r315_t7.markDotsRadius;
        var r315_CenterX = r315_markMiddle;
        var r315_CenterY = r315_XH / 2;
        var r315_RingRadius = (r1_mix(r315_XH, r315_Ascender, 1.5) - r1_mix(0, r315_Descender, 1.5)) / 2;
        var r315_SmallMarkSize = 0.75 * r315_markExtend;
        var r315_Sw = r315_AdviceStroke(7);
        var r315_CyrillicStdRingShape = function (r319_fn) {
            var _r319_t0, _r319_t1;
            return new r315_xn$Capture$2Lrc8.GlyphProc(function (r321_currentGlyph) {
                var r321_angle, _r321_t2, _r321_t3;
                r321_currentGlyph.setWidth(0);
                r321_currentGlyph.setMarkAnchor("slash", r315_CenterX, r315_CenterY, r315_CenterX, r315_CenterY);
                var _r321_t0 = 0;
                var _r321_t1 = 12;
                var r321_i = _r321_t0;
                while (r321_i < _r321_t1) {
                    r321_angle = r321_i / 12 * 360;
                    r321_currentGlyph.include(r315_xn$GlyphSaveSink$2Lrc4b.save(null, null, r319_fn(r315_CenterX, r315_CenterY, r315_RingRadius, r321_angle)));
                    r321_i = r321_i + 1;
                }
                return void 0;
            });
        };
        r315_xn$GlyphSaveSink$2Lrc4b.save("cyrl/tenThousands", 1160, r315_CyrillicStdRingShape(function (r328_cx, r328_cy, r328_r, r328_angle) {
            var _r328_t0, _r328_t1;
            return new r315_xn$Capture$2Lrc8.GlyphProc(function (r330_currentGlyph) {
                var _r330_t0, _r330_t1;
                var r330_mcx = r328_cx + r328_r * r315_archv.sCos(r328_angle);
                var r330_mcy = r328_cy + r328_r * r315_archv.sSin(r328_angle) - 0.5 * r315_SmallMarkSize;
                r330_currentGlyph.include(r315_dispiro(r315_widths.center(r315_Sw), r315_g2.up.start(r330_mcx + r315_SmallMarkSize, r330_mcy, r315_heading(r315_Upward)), r315_g2.left.mid(r330_mcx, r330_mcy + r315_SmallMarkSize, r315_heading(r315_Leftward)), r315_g2.down.end(r330_mcx - r315_SmallMarkSize, r330_mcy, r315_heading(r315_Downward))));
                return void 0;
            });
        }));
        var _r315_t8 = Object.entries(r315_DotVariants)[Symbol.iterator]();
        var _r315_t9 = void 0;
        while (!(_r315_t9 = _r315_t8.next()).done) {
            _r315_t10 = _r315_t9.value;
            r315_suffix = _r315_t10[0];
            r315_DrawAt = _r315_t10[1][0];
            r315_kDotRadius = _r315_t10[1][1];
            r315_overshoot = _r315_t10[1][2];
            _r315_t10[1];
            (function () {
                return r315_xn$GlyphSaveSink$2Lrc4b.save("cyrl/millions." + r315_suffix, null, r315_CyrillicStdRingShape(function (r336_cx, r336_cy, r336_r, r336_angle) {
                    var _r336_t0, _r336_t1;
                    return new r315_xn$Capture$2Lrc8.GlyphProc(function (r338_currentGlyph) {
                        var _r338_t0, _r338_t1;
                        var r338_mcx = r336_cx + r336_r * r315_archv.sCos(r336_angle);
                        var r338_mcy = r336_cy + r336_r * r315_archv.sSin(r336_angle);
                        r338_currentGlyph.include(r315_xn$referglyph$1aao("commaAboveZero." + r315_suffix));
                        r338_currentGlyph.include(r315_Ungizmo());
                        r338_currentGlyph.include(r315_Scale(0.75));
                        r338_currentGlyph.include(r315_Rotate((r336_angle + 90) / 180 * Math.PI));
                        r338_currentGlyph.include(r315_Regizmo());
                        r338_currentGlyph.include(r315_ApparentTranslate(r338_mcx, r338_mcy));
                        return void 0;
                    });
                }));
            })();
        }
        r315_xn$selectvariant$7Hrq("cyrl/millions", 1161, new r315_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        r315_xn$GlyphSaveSink$2Lrc4b.save("cyrl/tenMillions", 42608, r315_CyrillicStdRingShape(function (r347_cx, r347_cy, r347_r, r347_angle) {
            var _r347_t0, _r347_t1;
            return new r315_xn$Capture$2Lrc8.GlyphProc(function (r349_currentGlyph) {
                var _r349_t0, _r349_t1;
                var r349_mcx = r347_cx + r347_r * r315_archv.sCos(r347_angle);
                var r349_mcy = r347_cy + r347_r * r315_archv.sSin(r347_angle);
                var r349_s = r315_SmallMarkSize;
                r349_currentGlyph.include(r315_ExtLineCenter(r349_mcx - r349_s, r349_mcy - r349_s, r349_mcx + r349_s, r349_mcy + r349_s, r315_Sw));
                r349_currentGlyph.include(r315_ExtLineCenter(r349_mcx + r349_s, r349_mcy - r349_s, r349_mcx - r349_s, r349_mcy + r349_s, r315_Sw));
                return void 0;
            });
        }));
        r315_xn$GlyphSaveSink$2Lrc4b.save("cyrl/hundredMillions", 42609, new r315_xn$Capture$2Lrc8.GlyphProc(function (r354_currentGlyph) {
            var _r354_t0, _r354_t1;
            r354_currentGlyph.setWidth(0);
            r354_currentGlyph.setMarkAnchor("slash", r315_CenterX, r315_CenterY, r315_CenterX, r315_CenterY);
            var r354_cx = r315_CenterX;
            var r354_cy = r315_CenterY;
            var r354_r = r315_RingRadius;
            var r354_cut = 0.625 * r315_RingRadius;
            r354_currentGlyph.include(r315_union(r315_difference(r315_RingStrokeAt(r354_cx, r354_cy, r354_r, r315_Sw), r315_Rect(r354_cy + r354_cut, r354_cy - r354_cut, -r315_xn$VERYFAR$5sIl, +r315_xn$VERYFAR$5sIl)), r315_difference(r315_union(r315_HBar.b(r354_cx - r354_r, r354_cx + r354_r, r354_cy + r354_cut, r315_Sw), r315_HBar.t(r354_cx - r354_r, r354_cx + r354_r, r354_cy - r354_cut, r315_Sw)), r315_RingAt(r354_cx, r354_cy, r354_r - 0.5 * r315_Sw))));
            return void 0;
        }));
        r315_xn$GlyphSaveSink$2Lrc4b.save("cyrl/billions", 42610, new r315_xn$Capture$2Lrc8.GlyphProc(function (r360_currentGlyph) {
            var _r360_t0, _r360_t1;
            r360_currentGlyph.setWidth(0);
            r360_currentGlyph.setMarkAnchor("slash", r315_CenterX, r315_CenterY, r315_CenterX, r315_CenterY);
            var r360_cx = r315_CenterX;
            var r360_cy = r315_CenterY;
            var r360_r = r315_RingRadius;
            var r360_s = r315_SmallMarkSize;
            r360_currentGlyph.include(r315_HBar.m(r360_cx - r360_s, r360_cx + r360_s, r360_cy + r360_r, r315_Sw));
            r360_currentGlyph.include(r315_VBar.m(r360_cx, r360_cy + r360_r - r360_s, r360_cy + r360_r + r360_s, r315_Sw));
            r360_currentGlyph.include(r315_VBar.m(r360_cx - 0.5 * r360_r, r360_cy - r360_r - r360_s, r360_cy - r360_r + r360_s, r315_Sw));
            r360_currentGlyph.include(r315_VBar.m(r360_cx, r360_cy - r360_r - r360_s, r360_cy - r360_r + r360_s, r315_Sw));
            r360_currentGlyph.include(r315_VBar.m(r360_cx + 0.5 * r360_r, r360_cy - r360_r - r360_s, r360_cy - r360_r + r360_s, r315_Sw));
            r360_currentGlyph.include(r315_HBar.m(r360_cx - r360_r - r360_s, r360_cx - r360_r + r360_s, r360_cy + 0.5 * r360_r, r315_Sw));
            r360_currentGlyph.include(r315_HBar.m(r360_cx - r360_r - r360_s, r360_cx - r360_r + r360_s, r360_cy, r315_Sw));
            r360_currentGlyph.include(r315_HBar.m(r360_cx - r360_r - r360_s, r360_cx - r360_r + r360_s, r360_cy - 0.5 * r360_r, r315_Sw));
            r360_currentGlyph.include(r315_HBar.m(r360_cx + r360_r - r360_s, r360_cx + r360_r + r360_s, r360_cy + 0.5 * r360_r, r315_Sw));
            r360_currentGlyph.include(r315_HBar.m(r360_cx + r360_r - r360_s, r360_cx + r360_r + r360_s, r360_cy, r315_Sw));
            r360_currentGlyph.include(r315_HBar.m(r360_cx + r360_r - r360_s, r360_cx + r360_r + r360_s, r360_cy - 0.5 * r360_r, r315_Sw));
            return void 0;
        }));
        return r315_xn$GlyphSaveSink$2Lrc4b.save("combSymbol/enclosingCircle", 8413, new r315_xn$Capture$2Lrc8.GlyphProc(function (r376_currentGlyph) {
            var _r376_t0, _r376_t1;
            r376_currentGlyph.setWidth(0);
            r376_currentGlyph.setMarkAnchor("slash", r315_CenterX, r315_CenterY, r315_CenterX, r315_CenterY);
            var r376_cx = r315_CenterX;
            var r376_cy = r315_CenterY;
            var r376_r = r315_RingRadius;
            var r376_cut = 0.625 * r315_RingRadius;
            r376_currentGlyph.include(r315_RingStrokeAt(r376_cx, r376_cy, r376_r, r315_Sw));
            return void 0;
        }));
    });
    return void 0;
});


