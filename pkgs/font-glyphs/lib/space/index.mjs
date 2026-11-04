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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Spaces", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t7, _r313_t8, _r313_t9, _r313_tag10;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_UPM = _r313_t1.UPM;
        var r313_WideWidth1 = _r313_t1.WideWidth1;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_alias = _r313_t6.alias;
        r313_xn$GlyphSaveSink$2Lrc4b.save(".null", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r318_currentGlyph) {
            var _r318_t0, _r318_t1;
            r318_currentGlyph.setWidth(0);
            r318_currentGlyph.glyphRank = 9998;
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("space", " ", new r313_xn$Capture$2Lrc8.GlyphProc(function (r322_currentGlyph) {
            var _r322_t0, _r322_t1;
            var r322_df = r322_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleSp));
            return void 0;
        }));
        r313_alias("nbsp", 160, "space");
        r313_xn$GlyphSaveSink$2Lrc4b.save("markBaseSpace", 63645, new r313_xn$Capture$2Lrc8.GlyphProc(function (r326_currentGlyph) {
            var _r326_t0, _r326_t1;
            var r326_df = r326_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleSp));
            r326_currentGlyph.include(r326_df.markSet.e());
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("markBaseSpace/adwsN", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
            var _r331_t0, _r331_t1;
            var r331_df = r331_currentGlyph.include(r313_DivFrame(1));
            r331_currentGlyph.include(r331_df.markSet.e());
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("markDemoBaseSpace", 63646, new r313_xn$Capture$2Lrc8.GlyphProc(function (r336_currentGlyph) {
            var _r336_t0, _r336_t1;
            var r336_df = r336_currentGlyph.include(r313_DivFrame(1));
            r336_currentGlyph.include(r336_df.markSet.plus());
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("sp1", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r341_currentGlyph) {
            var _r341_t0, _r341_t1;
            var r341_df = r341_currentGlyph.include(r313_DivFrame(1));
            return void 0;
        }));
        r313_alias("enquad", 8192, "sp1");
        r313_alias("ensp", 8194, "sp1");
        r313_alias("brailleBlank", 10240, "sp1");
        r313_alias("figureSpace", 8199, "sp1");
        r313_xn$GlyphSaveSink$2Lrc4b.save("punctuationSpace", 8200, new r313_xn$Capture$2Lrc8.GlyphProc(function (r345_currentGlyph) {
            var _r345_t0, _r345_t1;
            var r345_df = r345_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleI));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("zwsp", 8203, new r313_xn$Capture$2Lrc8.GlyphProc(function (r349_currentGlyph) {
            var _r349_t0, _r349_t1;
            r349_currentGlyph.setWidth(0);
            return void 0;
        }));
        r313_alias("nonmarkingreturn", 13, "zwsp");
        r313_alias("lineSeparator", 8232, "zwsp");
        r313_alias("paragraphSeparator", 8233, "zwsp");
        r313_alias("wj", 8288, "zwsp");
        r313_alias("funcApp", 8289, "zwsp");
        r313_alias("invisibleTimes", 8290, "zwsp");
        r313_alias("invisibleSeparator", 8291, "zwsp");
        r313_alias("invisiblePlus", 8292, "zwsp");
        r313_alias("zwnbsp", 65279, "zwsp");
        r313_xn$GlyphSaveSink$2Lrc4b.save("cgj", 847, new r313_xn$Capture$2Lrc8.GlyphProc(function (r353_currentGlyph) {
            var _r353_t0, _r353_t1;
            r353_currentGlyph.setWidth(0);
            r1_Joining.set(r353_currentGlyph, r1_Joining.Classes.Mid);
            return void 0;
        }));
        var r313_FractionEmSp = function (r355_name, r355_code, r355_d) {
            var _r355_t0, _r355_t1;
            return r313_xn$GlyphSaveSink$2Lrc4b.save(r355_name, r355_code, new r313_xn$Capture$2Lrc8.GlyphProc(function (r358_currentGlyph) {
                var _r358_t0, _r358_t1;
                var r358_df = r358_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleII < 1 ? 2 / r355_d : 1));
                return void 0;
            }));
        };
        r313_FractionEmSp("threePerEmSp", 8196, 3);
        r313_FractionEmSp("fourPerEmsp", 8197, 4);
        r313_FractionEmSp("sixPerEmsp", 8198, 6);
        r313_FractionEmSp("thinSp", 8201, 6);
        r313_FractionEmSp("hairSp", 8202, 12);
        r313_FractionEmSp("mediumSp", 8287, 4.5);
        r313_alias("nnbsp", 8239, "thinSp");
        return (function () {
            var r362_FMosaicWide, r362_MosaicNameSuffix, r362_MosaicWidth, r362_MosaicWidthScalar, _r362_t3, _r362_t5, _r362_t6, _r362_tag7;
            var r362_WidthKinds = [[0, ".NWID", r313_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r313_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r362_t0 = r362_WidthKinds;
            var _r362_t1 = _r362_t0.length;
            var _r362_t2 = 0;
            var _r362_t4 = _r362_t2 < _r362_t1;
            while (_r362_t4) {
                _r362_t3 = _r362_t0[_r362_t2];
                r362_FMosaicWide = _r362_t3[0];
                r362_MosaicNameSuffix = _r362_t3[1];
                r362_MosaicWidth = _r362_t3[2];
                r362_MosaicWidthScalar = _r362_t3[3];
                (function () {
                    var r365_MosaicDesiredWidth = r313_WideWidth1;
                    var r365_MosaicMiddle = r362_MosaicWidth / 2;
                    var r365_MosaicUnitWidth = r362_MosaicWidth / r362_MosaicWidthScalar;
                    var r365_MangleUnicode = function (r366_unicode, r366__desiredOverride) {
                        var _r366_t0, _r366_t1;
                        return r362_MosaicWidth === (r366__desiredOverride || r365_MosaicDesiredWidth) ? r366_unicode : void 0;
                    };
                    var r365_MangleName = function (r367_name) {
                        var _r367_t0, _r367_t1;
                        return r367_name + r362_MosaicNameSuffix;
                    };
                    r313_xn$GlyphSaveSink$2Lrc4b.save(r365_MangleName("emsp"), r365_MangleUnicode(8195), new r313_xn$Capture$2Lrc8.GlyphProc(function (r370_currentGlyph) {
                        var _r370_t0, _r370_t1;
                        r370_currentGlyph.setWidth(r313_para.isQuasiProportional && r362_MosaicWidthScalar > 1 ? r313_UPM : r362_MosaicWidth);
                        return void 0;
                    }));
                    return r313_alias(r365_MangleName("emquad"), r365_MangleUnicode(8193), r365_MangleName("emsp"));
                })();
                _r362_t5 = _r362_t2 = _r362_t2 + 1;
                _r362_t4 = _r362_t2 < _r362_t1;
            }
            return _r362_t5;
        })();
    });
    return void 0;
});


