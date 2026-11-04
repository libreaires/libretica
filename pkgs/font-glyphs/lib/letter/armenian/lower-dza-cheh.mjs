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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Armenian-Lower-Dza-Cheh", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t8, _r313_t9, _r313_t10, _r313_tag11, _r313_t12, _r313_tag13;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_XH = _r313_t1.XH;
        var r313_Ascender = _r313_t1.Ascender;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Downward = _r313_t1.Downward;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_Leftward = _r313_t1.Leftward;
        var r313_Jut = _r313_t1.Jut;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_SmallArchDepthA = _r313_t1.SmallArchDepthA;
        var r313_SmallArchDepthB = _r313_t1.SmallArchDepthB;
        var r313_xn$VERYFAR$5sIl = _r313_t1["VERY-FAR"];
        var r313_TINY = _r313_t1.TINY;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_end = _r313_t2.end;
        var r313_straight = _r313_t2.straight;
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
        var r313_Arch = _r313_t5.Arch;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_SerifFrame = _r313_t7.SerifFrame;
        var r313_barPos = r313_XH / 2;
        var r313_highBarPos = r313_XH;
        var r313_jut = r313_Jut;
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/dza", 1393, new r313_xn$Capture$2Lrc8.GlyphProc(function (r321_currentGlyph) {
                var r321_sf, _r321_t0, _r321_t1;
                var r321_df = r321_currentGlyph.include(r313_DivFrame(1));
                r321_currentGlyph.include(r321_df.markSet.b());
                var r321_x1 = r1_mix(r321_df.leftSB, r321_df.rightSB, 0.25);
                var r321_x2 = r1_mix(r321_df.leftSB, r321_df.rightSB, 0.75);
                var r321_y2 = r1_mix(r313_XH, r313_Ascender, 0.5);
                r321_currentGlyph.include(r313_dispiro(r313_widths.center(r321_df.mvs), r313_straight.down.start(r321_x1, r313_Ascender, r313_heading(r313_Downward)), r313_arcvh(), r313_flat(r321_df.middle, r321_y2), r313_curl(r321_x2, r321_y2, r313_heading(r313_Rightward))));
                var r321_knots = function () {
                    var _r325_t0, _r325_t1;
                    return [r313_straight.left.start(r321_x2, r321_y2 + 0.5 * r321_df.mvs, r313_heading(r313_Leftward)), r313_archv(), r313_flat(r321_df.leftSB, Math.max(r321_y2 + 0.5 * r321_df.mvs - 1.5 * r313_SmallArchDepthA, 0 + r313_SmallArchDepthB + r313_TINY)), r313_curl(r321_df.leftSB, 0 + r313_SmallArchDepthB, r313_heading(r313_Downward))];
                };
                r321_currentGlyph.include(r313_dispiro(r313_widths.lhs(r321_df.mvs), r321_knots(), r313_Arch.lhs(0, new r313_xn$NamedParameterPair$2Lrc9b("sw", r321_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("swAfter", r321_df.shoulderFine)), r313_straight.up.end(r321_df.rightSB - r313_HSwToV(r321_df.mvs - r321_df.shoulderFine), 0 + r313_SmallArchDepthA, r313_widths.lhs(r321_df.shoulderFine))));
                r321_currentGlyph.include(r313_intersection(r313_xn$spirooutline$1aao(r321_knots(), r313_corner(r321_df.leftSB, 0), r313_corner(r313_xn$VERYFAR$5sIl, 0), r313_corner(r313_xn$VERYFAR$5sIl, r321_y2 + 0.5 * r321_df.mvs)), r313_dispiro(r313_widths.rhs(r321_df.mvs), r313_flat(r321_df.leftSB, r313_XH), r313_curl(r321_df.middle, r313_XH, r313_heading(r313_Rightward)), r313_archv(), r313_flat(r321_df.rightSB, Math.max(r313_XH - r313_SmallArchDepthB, 0 + r313_TINY)), r313_curl(r321_df.rightSB, 0, r313_heading(r313_Downward)))));
                if (r313_SLAB) {
                    r321_sf = r313_SerifFrame.fromDf(r321_df, r313_Ascender, 0);
                    r321_currentGlyph.include(r321_sf.rb.outer);
                }
                return void 0;
            }));
        })();
        return (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/cheh", 1395, new r313_xn$Capture$2Lrc8.GlyphProc(function (r335_currentGlyph) {
                var r335_sf, _r335_t0, _r335_t1;
                var r335_df = r335_currentGlyph.include(r313_DivFrame(1));
                r335_currentGlyph.include(r335_df.markSet.b());
                var r335_x1 = r1_mix(r335_df.leftSB, r335_df.rightSB, 0.75);
                r335_currentGlyph.include(r313_dispiro(r313_widths.lhs(r335_df.mvs), r313_flat(r335_x1, r313_Ascender), r313_curl(r335_df.middle, r313_Ascender, r313_heading(r313_Leftward)), r313_archv(), r313_flat(r335_df.leftSB, r313_Ascender - r313_SmallArchDepthA), r313_curl(r335_df.leftSB, 0 + r313_SmallArchDepthB, r313_heading(r313_Downward)), r313_Arch.lhs(0, new r313_xn$NamedParameterPair$2Lrc9b("sw", r335_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("swAfter", r335_df.shoulderFine)), r313_straight.up.end(r335_df.rightSB - r313_HSwToV(r335_df.mvs - r335_df.shoulderFine), 0 + r313_SmallArchDepthA, r313_widths.lhs(r335_df.shoulderFine))));
                r335_currentGlyph.include(r313_dispiro(r313_widths.rhs(r335_df.mvs), r313_flat(r335_df.leftSB + r313_HSwToV(0.5 * r335_df.mvs) - r313_jut, r313_highBarPos), r313_curl(r335_df.middle, r313_highBarPos, r313_heading(r313_Rightward)), r313_archv(), r313_flat(r335_df.rightSB, Math.max(r313_highBarPos - r313_SmallArchDepthB, 0 + r313_TINY)), r313_curl(r335_df.rightSB, 0, r313_heading(r313_Downward))));
                if (r313_SLAB) {
                    r335_sf = r313_SerifFrame.fromDf(r335_df, r313_Ascender, 0);
                    r335_currentGlyph.include(r335_sf.rb.outer);
                }
                return void 0;
            }));
        })();
    });
    return void 0;
});


