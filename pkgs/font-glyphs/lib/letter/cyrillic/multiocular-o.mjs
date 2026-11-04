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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Cyrillic-Multiocular-O", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var r312_suffix, r312_DrawAt, r312_kdr, _r312_t10, _r312_t11, _r312_t12, _r312_t13, _r312_tag14;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Ascender = _r312_t1.Ascender;
        var r312_Descender = _r312_t1.Descender;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_DotAt = _r312_t5.DotAt;
        var r312_OShape = _r312_t5.OShape;
        var r312_DotVariants = _r312_t5.DotVariants;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Overlay"].resolve();
        var r312_InnerDot = _r312_t7.InnerDot;
        var _r312_t8 = Object.entries(r312_DotVariants)[Symbol.iterator]();
        var _r312_t9 = void 0;
        while (!(_r312_t9 = _r312_t8.next()).done) {
            _r312_t10 = _r312_t9.value;
            r312_suffix = _r312_t10[0];
            r312_DrawAt = _r312_t10[1][0];
            r312_kdr = _r312_t10[1][1];
            _r312_t10[1];
            (function () {
                return r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/multiocularO." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r321_currentGlyph) {
                    var _r321_t0, _r321_t1;
                    var r321_df = r321_currentGlyph.include(r312_DivFrame(r1_mix(1, r312_para.advanceScaleM, 2), 6));
                    r321_currentGlyph.include(r321_df.markSet.bp());
                    var r321_subDf = r321_df.slice(5, 2);
                    var r321_pMidRowBottom = +0.327;
                    var r321_pMidRowSw = -0.25;
                    var r321_middleRowBottom = r1_mix(r312_Descender, r312_Ascender, 0 + r321_pMidRowBottom) + r321_pMidRowSw * r321_df.mvs;
                    var r321_middleRowTop = r1_mix(r312_Descender, r312_Ascender, 1 - r321_pMidRowBottom) - r321_pMidRowSw * r321_df.mvs;
                    var r321_SingleEye = function (r324_pX, r324_pY) {
                        var _r324_t0, _r324_t1;
                        var r324_yBot = r321_middleRowBottom + r324_pY * (r321_middleRowBottom - r312_Descender);
                        var r324_yTop = r321_middleRowTop + r324_pY * (r312_Ascender - r321_middleRowTop);
                        var r324_xLeft = r321_subDf.leftSB + r324_pX / 3 * (r321_df.width - r321_subDf.width);
                        var r324_xRight = r321_subDf.rightSB + r324_pX / 3 * (r321_df.width - r321_subDf.width);
                        var r324_dotSpace = r312_InnerDot.spaceOfDf(r321_subDf);
                        var r324_kHeight2 = Math.sqrt(r312_InnerDot.spaceOfDf(r312_DivFrame(1)) / r324_dotSpace) * 1.5;
                        return r312_union(r312_OShape.NoOvershoot(r324_yTop, r324_yBot, r324_xLeft, r324_xRight, r321_subDf.mvs, r321_subDf.smallArchDepthA, r321_subDf.smallArchDepthB), r312_InnerDot(r1_mix(r324_xLeft, r324_xRight, 0.5), r1_mix(r324_yTop, r324_yBot, 0.5), r324_kHeight2, r312_DrawAt === r312_DotAt, r312_kdr, r324_dotSpace, 5));
                    };
                    r321_currentGlyph.include(r321_SingleEye(0, 0));
                    r321_currentGlyph.include(r321_SingleEye(1, 0));
                    r321_currentGlyph.include(r321_SingleEye(2, 0));
                    r321_currentGlyph.include(r321_SingleEye(3, 0));
                    r321_currentGlyph.include(r321_SingleEye(0.5, +1));
                    r321_currentGlyph.include(r321_SingleEye(1.5, +1));
                    r321_currentGlyph.include(r321_SingleEye(2.5, +1));
                    r321_currentGlyph.include(r321_SingleEye(0.5, -1));
                    r321_currentGlyph.include(r321_SingleEye(1.5, -1));
                    r321_currentGlyph.include(r321_SingleEye(2.5, -1));
                    return void 0;
                }));
            })();
        }
        return r312_xn$selectvariant$7Hrq("cyrl/multiocularO", 42606, new r312_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
    });
    return void 0;
});


