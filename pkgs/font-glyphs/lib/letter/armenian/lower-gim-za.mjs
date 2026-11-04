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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Armenian-Lower-Gim-Za", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t9, _r313_t10, _r313_t11, _r313_tag12, _r313_t13, _r313_tag14;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_XH = _r313_t1.XH;
        var r313_Descender = _r313_t1.Descender;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_SmallArchDepthA = _r313_t1.SmallArchDepthA;
        var r313_SmallArchDepthB = _r313_t1.SmallArchDepthB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_VBar = _r313_t5.VBar;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_OBarRight = _r313_t7.OBarRight;
        var r313_SerifFrame = _r313_t7.SerifFrame;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Armenian-Shared-Shapes"].resolve();
        var r313_ArmHBar = _r313_t8.ArmHBar;
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/gim", 1379, new r313_xn$Capture$2Lrc8.GlyphProc(function (r322_currentGlyph) {
                var r322_sf, _r322_t0, _r322_t1;
                var r322_df = r322_currentGlyph.include(r313_DivFrame(1));
                r322_currentGlyph.include(r322_df.markSet.p());
                r322_currentGlyph.include(r313_OBarRight.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r313_XH), new r313_xn$NamedParameterPair$2Lrc9b("bot", 0), new r313_xn$NamedParameterPair$2Lrc9b("left", r322_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r322_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("sw", r322_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r322_df.shoulderFine), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB)));
                r322_currentGlyph.include(r313_VBar.r(r322_df.rightSB, r313_Descender, r313_XH, r322_df.mvs));
                r322_currentGlyph.include(r313_ArmHBar.right(r322_df).base());
                if (r313_SLAB) {
                    r322_sf = r313_SerifFrame.fromDf(r322_df, r313_XH, r313_Descender);
                    r322_currentGlyph.include(r313_para.isItalic ? r322_sf.rb.outer : new r313_xn$Capture$2Lrc8.GlyphProc(function (r338_currentGlyph) {
                        var _r338_t0, _r338_t1;
                        r338_currentGlyph.include(r322_sf.rt.outer, true, true);
                        r338_currentGlyph.include(r322_sf.rb.fullSide);
                        return void 0;
                    }));
                }
                return void 0;
            }));
        })();
        return (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/za", 1382, new r313_xn$Capture$2Lrc8.GlyphProc(function (r345_currentGlyph) {
                var r345_sf, _r345_t0, _r345_t1;
                var r345_df = r345_currentGlyph.include(r313_DivFrame(1));
                r345_currentGlyph.include(r345_df.markSet.p());
                r345_currentGlyph.include(r313_OBarRight.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r313_XH), new r313_xn$NamedParameterPair$2Lrc9b("bot", 0), new r313_xn$NamedParameterPair$2Lrc9b("left", r345_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r345_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("sw", r345_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r345_df.shoulderFine), new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB)));
                r345_currentGlyph.include(r313_VBar.r(r345_df.rightSB, r313_Descender, r313_XH, r345_df.mvs));
                r345_currentGlyph.include(r313_ArmHBar.right(r345_df).desc());
                if (r313_SLAB && !r313_para.isItalic) {
                    r345_sf = r313_SerifFrame.fromDf(r345_df, r313_XH, r313_Descender);
                    r345_currentGlyph.include(r345_sf.rt.outer);
                }
                return void 0;
            }));
        })();
    });
    return void 0;
});


