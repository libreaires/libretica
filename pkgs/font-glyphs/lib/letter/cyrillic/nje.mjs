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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Cyrillic-Nje", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_slabType, r313_Uc, r313_Lc, r313_BGRc, _r313_t12, _r313_t15, _r313_t16, _r313_t17, _r313_t18, _r313_tag19, _r313_t20, _r313_tag21;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_O = _r313_t1.O;
        var r313_HBarPos = _r313_t1.HBarPos;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_corner = _r313_t2.corner;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateDependentComposite = _r313_t7.CreateDependentComposite;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_SerifFrame = _r313_t8.SerifFrame;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Cyrillic-Yeri"].resolve();
        var r313_YeriConfig = _r313_t9.YeriConfig;
        var r313_xn$SLABNONE$5sIl = 0;
        var r313_xn$SLABTOPLEFT$5sIl4 = 1;
        var r313_xn$SLABTOPLEFTBOTTOMRIGHT$5sIl457 = 2;
        var r313_xn$SLABTAILEDCYRILLIC$5sIl7 = 3;
        var r313_xn$SLABALL$5sIl = 4;
        var r313_CyrNjeStroke = function (r319_df, r319_top) {
            var _r319_t0, _r319_t1;
            return r319_df.adviceThinnerStroke2(3, 3, r319_top);
        };
        var r313_LeftHalf = function (r320_slabType, r320_df, r320_top) {
            var _r320_t0, _r320_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r322_currentGlyph) {
                var _r322_t0, _r322_t1, _r322_t2;
                var r322_sw = r313_CyrNjeStroke(r320_df, r320_top);
                var r322_subDf = r320_df.slice(3, 2);
                r322_currentGlyph.include(r313_VBar.l(r322_subDf.leftSB, 0, r320_top, r322_sw));
                r322_currentGlyph.include(r313_HBar.m(r322_subDf.leftSB, r322_subDf.rightSB, r1_mix(0, r320_top, r313_HBarPos), r322_sw));
                var r322_sf = r313_SerifFrame.fromDf(r322_subDf, r320_top, 0, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r322_sw));
                r322_currentGlyph.include((_r322_t0 = r320_slabType, _r322_t0 === r313_xn$SLABNONE$5sIl ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r353_currentGlyph) {
                    var _r353_t0, _r353_t1;
                    return void 0;
                }) : _r322_t0 === r313_xn$SLABTOPLEFT$5sIl4 ? r322_sf.lt.outer : _r322_t0 === r313_xn$SLABTOPLEFTBOTTOMRIGHT$5sIl457 ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r349_currentGlyph) {
                    var _r349_t0, _r349_t1;
                    r349_currentGlyph.include(r322_sf.lt.outer, true, true);
                    r349_currentGlyph.include(r322_sf.rb.outer);
                    return void 0;
                }) : _r322_t0 === r313_xn$SLABTAILEDCYRILLIC$5sIl7 ? r322_sf.enoughSpaceForFullSerifs ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
                    var _r339_t0, _r339_t1;
                    r339_currentGlyph.include(r322_sf.lt.full, true, true);
                    r339_currentGlyph.include(r322_sf.rt.full);
                    r339_currentGlyph.include(r322_sf.lb.full);
                    return void 0;
                }) : new r313_xn$Capture$2Lrc8.GlyphProc(function (r344_currentGlyph) {
                    var _r344_t0, _r344_t1;
                    r344_currentGlyph.include(r322_sf.lt.outer, true, true);
                    r344_currentGlyph.include(r322_sf.rt.outer);
                    r344_currentGlyph.include(r322_sf.lb.outer);
                    return void 0;
                }) : _r322_t0 === r313_xn$SLABALL$5sIl ? r322_sf.enoughSpaceForFullSerifs ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
                    var _r328_t0, _r328_t1;
                    r328_currentGlyph.include(r322_sf.lt.full, true, true);
                    r328_currentGlyph.include(r322_sf.rt.full);
                    r328_currentGlyph.include(r322_sf.lb.full);
                    r328_currentGlyph.include(r322_sf.rb.inner);
                    return void 0;
                }) : new r313_xn$Capture$2Lrc8.GlyphProc(function (r334_currentGlyph) {
                    var _r334_t0, _r334_t1;
                    r334_currentGlyph.include(r322_sf.lt.outer, true, true);
                    r334_currentGlyph.include(r322_sf.rt.outer);
                    r334_currentGlyph.include(r322_sf.lb.outer);
                    return void 0;
                }) : void 0));
                return void 0;
            });
        };
        var r313_RightHalf = function (r354_Yeri, r354_df, r354_top) {
            var _r354_t0, _r354_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r356_currentGlyph) {
                var _r356_t0, _r356_t1;
                var r356_sw = r313_CyrNjeStroke(r354_df, r354_top);
                r356_currentGlyph.include(r354_Yeri(r354_top, new r313_xn$NamedParameterPair$2Lrc9b("left", r354_df.middle - r313_HSwToV(0.5 * r356_sw)), new r313_xn$NamedParameterPair$2Lrc9b("right", r354_df.rightSB - r313_O), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r356_sw), new r313_xn$NamedParameterPair$2Lrc9b("fSlab", false)));
                return void 0;
            });
        };
        var r313_LeftHalfConfig = {
            "serifless": [r313_xn$SLABNONE$5sIl],
            "topLeftSerifed": [r313_xn$SLABTOPLEFT$5sIl4],
            "topLeftBottomRightSerifed": [r313_xn$SLABTOPLEFTBOTTOMRIGHT$5sIl457],
            "serifed": [r313_xn$SLABALL$5sIl],
            "serifedExceptBottomRight": [r313_xn$SLABTAILEDCYRILLIC$5sIl7]
        };
        var _r313_t10 = Object.entries(r313_LeftHalfConfig)[Symbol.iterator]();
        var _r313_t11 = void 0;
        while (!(_r313_t11 = _r313_t10.next()).done) {
            _r313_t12 = _r313_t11.value;
            r313_suffix = _r313_t12[0];
            r313_slabType = _r313_t12[1][0];
            _r313_t12[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Nje/leftHalf." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r367_currentGlyph) {
                    var _r367_t0, _r367_t1;
                    var r367_df = r367_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                    r367_currentGlyph.include(r367_df.markSet.capital());
                    r367_currentGlyph.include(r313_LeftHalf(r313_slabType, r367_df, r313_CAP));
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/nje/leftHalf." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r373_currentGlyph) {
                    var _r373_t0, _r373_t1;
                    var r373_df = r373_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                    r373_currentGlyph.include(r373_df.markSet.e());
                    r373_currentGlyph.include(r313_LeftHalf(r313_slabType, r373_df, r313_XH));
                    return void 0;
                }));
            })();
        }
        var _r313_t13 = Object.entries(r313_YeriConfig)[Symbol.iterator]();
        var _r313_t14 = void 0;
        while (!(_r313_t14 = _r313_t13.next()).done) {
            _r313_t15 = _r313_t14.value;
            r313_suffix = _r313_t15[0];
            r313_Uc = _r313_t15[1][0];
            r313_Lc = _r313_t15[1][1];
            r313_BGRc = _r313_t15[1][2];
            _r313_t15[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Nje/rightHalf." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r382_currentGlyph) {
                    var _r382_t0, _r382_t1;
                    var r382_df = r382_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                    r382_currentGlyph.include(r382_df.markSet.capital());
                    r382_currentGlyph.include(r313_RightHalf(r313_Uc, r382_df, r313_CAP));
                    r1_DependentSelector.set(r382_currentGlyph, r313_suffix === "corner" ? "full" : "reduced");
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/nje/rightHalf." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r388_currentGlyph) {
                    var _r388_t0, _r388_t1;
                    var r388_df = r388_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                    r388_currentGlyph.include(r388_df.markSet.e());
                    r388_currentGlyph.include(r313_RightHalf(r313_Lc, r388_df, r313_XH));
                    r1_DependentSelector.set(r388_currentGlyph, r313_suffix === "corner" ? "full" : "reduced");
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("cyrl/Nje/leftHalf/full", new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Nje/leftHalf"), new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "cyrl/Nje/leftHalf"));
        r313_xn$selectvariant$7Hrq("cyrl/nje/leftHalf/full", new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/nje/leftHalf"), new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "cyrl/nje/leftHalf"));
        r313_xn$selectvariant$7Hrq("cyrl/Nje/leftHalf/reduced", new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Nje/leftHalf/reduced"), new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "cyrl/Nje/leftHalf"));
        r313_xn$selectvariant$7Hrq("cyrl/nje/leftHalf/reduced", new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/nje/leftHalf/reduced"), new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "cyrl/nje/leftHalf"));
        r313_xn$selectvariant$7Hrq("cyrl/Nje/rightHalf");
        r313_xn$selectvariant$7Hrq("cyrl/nje/rightHalf");
        r313_CreateDependentComposite("cyrl/Nje", 1034, "cyrl/Nje/rightHalf", {
            "full": "cyrl/Nje/leftHalf/full",
            "reduced": "cyrl/Nje/leftHalf/reduced"
        });
        return r313_CreateDependentComposite("cyrl/nje", 1114, "cyrl/nje/rightHalf", {
            "full": "cyrl/nje/leftHalf/full",
            "reduced": "cyrl/nje/leftHalf/reduced"
        });
    });
    return void 0;
});


