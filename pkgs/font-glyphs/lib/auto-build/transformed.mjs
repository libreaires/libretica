"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
import * as _s0_t2 from "@iosevka/geometry";
import * as _s0_t3 from "@iosevka/geometry/transform";
import * as _s0_t4 from "./transformed-jobs-data.mjs";
var _s0_t5;
export {_s0_t5 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_getGrTree = _r1_t9.getGrTree;
var r1_IsSuperscript = _r1_t9.IsSuperscript;
var r1_IsSubscript = _r1_t9.IsSubscript;
var r1_AnyCvOrCherryPicking = _r1_t9.AnyCvOrCherryPicking;
var _r1_t10 = _s0_t1;
var r1_AnyLocalizedForm = _r1_t10.AnyLocalizedForm;
var r1_DotlessOrNot = _r1_t10.DotlessOrNot;
var r1_CvDecompose = _r1_t10.CvDecompose;
var r1_MathSansSerif = _r1_t10.MathSansSerif;
var _r1_t11 = _s0_t1;
var r1_Texture = _r1_t11.Texture;
var r1_Joining = _r1_t11.Joining;
var _r1_t12 = _s0_t2;
var r1_BooleanGeometry = _r1_t12.BooleanGeometry;
var r1_StrokeGeometry = _r1_t12.StrokeGeometry;
var _r1_t13 = _s0_t1;
var r1_NumeratorForm = _r1_t13.NumeratorForm;
var r1_DenominatorForm = _r1_t13.DenominatorForm;
var _r1_t14 = _s0_t3;
var r1_Transform = _r1_t14.Transform;
var r1_JobsData = _s0_t4;
var r1_Map = Map;
var r1_Set = Set;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t5 = r1_apply = function () {
    var r316_block, _r316_t4, _r316_t6;
    var _r316_t3 = this;
    var _r316_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r316_t1 = _r316_t0.length;
    var _r316_t2 = 0;
    var _r316_t5 = _r316_t2 < _r316_t1;
    while (_r316_t5) {
        _r316_t6 = (r316_block = _r316_t0[_r316_t2], r316_block(_r316_t3), _r316_t2 = _r316_t2 + 1);
        _r316_t5 = _r316_t2 < _r316_t1;
    }
    return _r316_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r320_xn$Capture_Ext$2Lrc2b) {
    var _r320_t0, _r320_t1;
    r320_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r320_xn$Capture_Ext$2Lrc2b, "Autobuild-Transformed-Shared", function (r321_xn$Capture$2Lrc8, r321_xn$ExportCapture$2Lrc4b) {
        var _r321_t7, _r321_t8;
        var _r321_t0 = r321_xn$Capture$2Lrc8;
        var r321_xn$GlyphSaveSink$2Lrc4b = _r321_t0["$GlyphSaveSink$"];
        var r321_xn$NamedParameterPair$2Lrc9b = _r321_t0["$NamedParameterPair$"];
        var r321_xn$Exec$2Lrc5 = _r321_t0["$Exec$"];
        var r321_DivFrame = _r321_t0.DivFrame;
        var _r321_t1 = r321_xn$Capture$2Lrc8.Metrics;
        var r321_CAP = _r321_t1.CAP;
        var r321_Descender = _r321_t1.Descender;
        var r321_Scale = _r321_t1.Scale;
        var r321_Translate = _r321_t1.Translate;
        var r321_AccentStackOffset = _r321_t1.AccentStackOffset;
        var _r321_t2 = r321_xn$Capture$2Lrc8.SpiroFns;
        var _r321_t3 = r321_xn$Capture$2Lrc8.SpiroFns;
        var r321_xn$decor$0cao = _r321_t3["decor@"];
        var r321_xn$decor$0cao1 = _r321_t3["decor@@"];
        var r321_xn$decor$0cao11 = _r321_t3["decor@@@"];
        var _r321_t4 = r321_xn$Capture$2Lrc8.BooleFns;
        var _r321_t5 = r321_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r321_Ungizmo = _r321_t5.Ungizmo;
        var r321_Regizmo = _r321_t5.Regizmo;
        var _r321_t6 = r321_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r321_xn$queryglyph$1aao = _r321_t6["query-glyph"];
        r321_xn$ExportCapture$2Lrc4b(function () {
            var _r325_t0, _r325_t1;
            return {
                "wrapName": r321_wrapName
            };
        });
        var r321_wrapName = function (r326_groupID, r326_baseName) {
            var _r326_t0, _r326_t1;
            return "" + r326_groupID + "{" + r326_baseName + "}";
        };
        var r321_suggestName = function (r327__name) {
            var r327_j, _r327_t0, _r327_t1;
            var r327_name = r327__name;
            if (r321_xn$queryglyph$1aao(r327_name)) {
                r327_j = 2;
                while (r321_xn$queryglyph$1aao(r327_name + r327_j)) r327_j = r327_j + 1;
                r327_name = r327_name + r327_j;
            }
            return r327_name;
        };
        r321_xn$ExportCapture$2Lrc4b(function () {
            var _r329_t0, _r329_t1;
            return {
                "suggestMappedName": r321_suggestMappedName
            };
        });
        var r321_suggestMappedName = function (r330_map, r330_key, r330_name) {
            var _r330_t0, _r330_t1;
            if (r330_map[r330_key]) return r330_map[r330_key];
            var r330_amended = r321_suggestName(r330_name);
            r330_map[r330_key] = r330_amended;
            return r330_amended;
        };
        r321_xn$ExportCapture$2Lrc4b(function () {
            var _r332_t0, _r332_t1;
            return {
                "extendRelatedGlyphs": r321_extendRelatedGlyphs
            };
        });
        var r321_extendRelatedGlyphs = function (r333_groupID, r333_records) {
            var r333_record, r333_srcName, r333_dstName, r333_tree, r333_gr, r333_origSrcName, r333_relSrcName, r333_origDstName, r333_relDstName, r333_relatedRecord, _r333_t3, _r333_t4, _r333_t5, _r333_t6, _r333_t7, _r333_t8;
            var r333_relatedRecords = [];
            var r333_relSets = [];
            var r333_targetNameMap = {};
            var r333_TraverseGrList = [r1_AnyLocalizedForm, r1_DotlessOrNot, r1_AnyCvOrCherryPicking];
            var _r333_t0 = r333_records;
            var _r333_t1 = _r333_t0.length;
            var _r333_t2 = 0;
            while (_r333_t2 < _r333_t1) {
                r333_record = _r333_t0[_r333_t2];
                r333_srcName = r333_record[1];
                r333_dstName = r321_wrapName(r333_groupID, r333_srcName);
                r321_suggestMappedName(r333_targetNameMap, r333_srcName, r333_dstName);
                r333_tree = r1_getGrTree(r333_srcName, r333_TraverseGrList, r321_xn$queryglyph$1aao);
                _r333_t3 = r333_tree;
                _r333_t4 = _r333_t3.length;
                _r333_t5 = 0;
                while (_r333_t5 < _r333_t4) {
                    _r333_t6 = _r333_t3[_r333_t5];
                    r333_gr = _r333_t6[0];
                    r333_origSrcName = _r333_t6[1];
                    r333_relSrcName = _r333_t6[2];
                    if (r321_xn$queryglyph$1aao(r333_relSrcName)) {
                        r333_origDstName = r321_suggestMappedName(r333_targetNameMap, r333_origSrcName, r321_wrapName(r333_groupID, r333_origSrcName));
                        r333_relDstName = r321_suggestMappedName(r333_targetNameMap, r333_relSrcName, r321_wrapName(r333_groupID, r333_relSrcName));
                        r333_relatedRecord = r333_record.slice(0);
                        r333_relatedRecord[0] = null;
                        r333_relatedRecord[1] = r333_relSrcName;
                        r333_relatedRecord[2] = true;
                        r333_relatedRecords.push(r333_relatedRecord);
                        r333_relSets.push([r333_gr, r333_origDstName, r333_relDstName]);
                    }
                    _r333_t5 = _r333_t5 + 1;
                }
                _r333_t2 = _r333_t2 + 1;
            }
            return [r333_records.concat(r333_relatedRecords), r333_relSets, r333_targetNameMap];
        };
        r321_xn$ExportCapture$2Lrc4b(function () {
            var _r339_t0, _r339_t1;
            return {
                "link-relations": r321_xn$linkrelations$5sIl
            };
        });
        var r321_xn$linkrelations$5sIl = function (r340_relSets) {
            var r340_gr, r340_origDstName, r340_relDstName, _r340_t3, _r340_t4, _r340_t5, _r340_t7;
            var r340_rs = new r1_Set();
            var _r340_t0 = r340_relSets;
            var _r340_t1 = _r340_t0.length;
            var _r340_t2 = 0;
            var _r340_t6 = _r340_t2 < _r340_t1;
            while (_r340_t6) {
                _r340_t7 = (_r340_t3 = _r340_t0[_r340_t2], r340_gr = _r340_t3[0], r340_origDstName = _r340_t3[1], r340_relDstName = _r340_t3[2], r321_xn$queryglyph$1aao(r340_origDstName) ? (r340_gr.set(r321_xn$queryglyph$1aao(r340_origDstName), r340_relDstName), r321_xn$queryglyph$1aao(r340_relDstName) ? r321_xn$queryglyph$1aao(r340_origDstName).tryBecomeMirrorOf(r321_xn$queryglyph$1aao(r340_relDstName), r340_rs) : void 0) : void 0, _r340_t2 = _r340_t2 + 1);
                _r340_t6 = _r340_t2 < _r340_t1;
            }
            return _r340_t7;
        };
        r321_xn$ExportCapture$2Lrc4b(function () {
            var _r344_t0, _r344_t1;
            return {
                "ToSuperscript": r321_ToSuperscript
            };
        });
        var r321_ToSuperscript = function (r345_adws) {
            var _r345_t0, _r345_t1;
            return new r321_xn$Capture$2Lrc8.GlyphProc(function (r347_currentGlyph) {
                var _r347_t0, _r347_t1;
                var r347_df = r321_DivFrame(r345_adws);
                r347_currentGlyph.include(r321_Ungizmo(), true);
                r347_currentGlyph.include(r321_Translate(-r347_df.middle, -r321_CAP), true);
                r347_currentGlyph.include(r321_Scale(r321_ToSuperscript.crowdAdjScale), true);
                r347_currentGlyph.include(r321_Translate(r347_df.middle, r321_CAP + r321_AccentStackOffset / 2), true);
                r347_currentGlyph.include(r321_Regizmo(), true);
                return void 0;
            });
        };
        r321_ToSuperscript.crowd = 3.5;
        r321_ToSuperscript.crowdAdjScale = 0.7;
        r321_xn$ExportCapture$2Lrc4b(function () {
            var _r354_t0, _r354_t1;
            return {
                "ToSubscript": r321_ToSubscript
            };
        });
        var r321_ToSubscript = function (r355_adws) {
            var _r355_t0, _r355_t1;
            return new r321_xn$Capture$2Lrc8.GlyphProc(function (r357_currentGlyph) {
                var _r357_t0, _r357_t1;
                var r357_df = r321_DivFrame(r355_adws);
                r357_currentGlyph.include(r321_Ungizmo(), true);
                r357_currentGlyph.include(r321_Translate(-r357_df.middle, 0), true);
                r357_currentGlyph.include(r321_Scale(r321_ToSubscript.crowdAdjScale), true);
                r357_currentGlyph.include(r321_Translate(r357_df.middle, r321_Descender / 2), true);
                r357_currentGlyph.include(r321_Regizmo(), true);
                return void 0;
            });
        };
        r321_ToSubscript.crowd = 3.5;
        return r321_ToSubscript.crowdAdjScale = 0.7;
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r365_xn$Capture_Ext$2Lrc2b) {
    var _r365_t0, _r365_t1;
    r365_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r365_xn$Capture_Ext$2Lrc2b, "Autobuild-Transformed", function (r366_xn$Capture$2Lrc8, r366_xn$ExportCapture$2Lrc4b) {
        var _r366_t14, _r366_t15;
        var _r366_t0 = r366_xn$Capture$2Lrc8;
        var r366_xn$GlyphSaveSink$2Lrc4b = _r366_t0["$GlyphSaveSink$"];
        var r366_xn$NamedParameterPair$2Lrc9b = _r366_t0["$NamedParameterPair$"];
        var r366_xn$Exec$2Lrc5 = _r366_t0["$Exec$"];
        var r366_para = _r366_t0.para;
        var r366_AS_BASE = _r366_t0.AS_BASE;
        var r366_ALSO_METRICS = _r366_t0.ALSO_METRICS;
        var _r366_t1 = r366_xn$Capture$2Lrc8.Metrics;
        var r366_Width = _r366_t1.Width;
        var r366_CAP = _r366_t1.CAP;
        var r366_XH = _r366_t1.XH;
        var r366_Ascender = _r366_t1.Ascender;
        var r366_Descender = _r366_t1.Descender;
        var r366_Scale = _r366_t1.Scale;
        var r366_Translate = _r366_t1.Translate;
        var r366_GlobalTransform = _r366_t1.GlobalTransform;
        var _r366_t2 = r366_xn$Capture$2Lrc8.SpiroFns;
        var _r366_t3 = r366_xn$Capture$2Lrc8.SpiroFns;
        var r366_xn$decor$0cao = _r366_t3["decor@"];
        var r366_xn$decor$0cao1 = _r366_t3["decor@@"];
        var r366_xn$decor$0cao11 = _r366_t3["decor@@@"];
        var _r366_t4 = r366_xn$Capture$2Lrc8.BooleFns;
        var _r366_t5 = r366_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r366_Ungizmo = _r366_t5.Ungizmo;
        var r366_Regizmo = _r366_t5.Regizmo;
        var r366_ScaleAround = _r366_t5.ScaleAround;
        var _r366_t6 = r366_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r366_xn$queryglyph$1aao = _r366_t6["query-glyph"];
        var _r366_t7 = r366_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Recursive-Build"].resolve();
        var r366_Fork = _r366_t7.Fork;
        var r366_MiniatureParaT = _r366_t7.MiniatureParaT;
        var r366_Miniature = _r366_t7.Miniature;
        var _r366_t8 = r366_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r366_markMiddle = _r366_t8.markMiddle;
        var _r366_t9 = r366_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Above"].resolve();
        var r366_aboveMarkBot = _r366_t9.aboveMarkBot;
        var r366_aboveMarkMid = _r366_t9.aboveMarkMid;
        var r366_aboveMarkTop = _r366_t9.aboveMarkTop;
        var _r366_t10 = r366_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Below"].resolve();
        var r366_belowMarkBot = _r366_t10.belowMarkBot;
        var r366_belowMarkMid = _r366_t10.belowMarkMid;
        var r366_belowMarkTop = _r366_t10.belowMarkTop;
        var _r366_t11 = r366_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Autobuild-Transformed-Shared"].resolve();
        var r366_extendRelatedGlyphs = _r366_t11.extendRelatedGlyphs;
        var r366_xn$linkrelations$5sIl = _r366_t11["link-relations"];
        var _r366_t12 = r366_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Autobuild-Transformed-Shared"].resolve();
        var r366_ToSuperscript = _r366_t12.ToSuperscript;
        var r366_ToSubscript = _r366_t12.ToSubscript;
        var _r366_t13 = r366_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Recursive-Build-ParaTfm"].resolve();
        var r366_ForkTfm = _r366_t13.ForkTfm;
        var r366_BuildTransformedSimple = function (r376_records, r376_relSets, r376_targetNameMap, r376_gr, r376_miniatureFont, r376_tfFn) {
            var r376_unicode, r376_glyphid, r376_fRelated, _r376_t3, _r376_t4, _r376_t5;
            var _r376_t0 = r376_records;
            var _r376_t1 = _r376_t0.length;
            var _r376_t2 = 0;
            while (_r376_t2 < _r376_t1) {
                _r376_t3 = _r376_t0[_r376_t2];
                r376_unicode = _r376_t3[0];
                r376_glyphid = _r376_t3[1];
                r376_fRelated = _r376_t3[2];
                if (!r366_xn$queryglyph$1aao(r376_targetNameMap[r376_glyphid])) {
                    if (!r376_miniatureFont.queryByName(r376_glyphid)) throw new Error("Cannot find glyph " + r376_glyphid);
                    r366_xn$GlyphSaveSink$2Lrc4b.save(r376_targetNameMap[r376_glyphid], r376_unicode, r376_tfFn(r376_miniatureFont.queryByName(r376_glyphid)));
                    if (!r376_fRelated && r376_gr) r376_gr.set(r366_xn$queryglyph$1aao(r376_glyphid), r376_targetNameMap[r376_glyphid]);
                }
                _r376_t2 = _r376_t2 + 1;
            }
            r366_xn$linkrelations$5sIl(r376_relSets);
            return [r376_targetNameMap, r376_records];
        };
        var r366_createSuperscripts = function (r379_prefix, r379_gr, r379__records) {
            var _r379_t1, _r379_t2;
            var _r379_t0 = r366_extendRelatedGlyphs(r379_prefix, r379__records);
            var r379_records = _r379_t0[0];
            var r379_relSets = _r379_t0[1];
            var r379_targetNameMap = _r379_t0[2];
            var r379_pendingGlyphs = r379_records.map(function (r380_record) {
                var _r380_t0, _r380_t1;
                return r380_record[1];
            });
            var r379_miniatureFont = r366_Miniature(r379_pendingGlyphs, new r366_xn$NamedParameterPair$2Lrc9b("crowd", r366_ToSuperscript.crowd), new r366_xn$NamedParameterPair$2Lrc9b("scale", r366_ToSuperscript.crowdAdjScale), new r366_xn$NamedParameterPair$2Lrc9b("sbscale", 0.75));
            return r366_BuildTransformedSimple(r379_records, r379_relSets, r379_targetNameMap, r379_gr, r379_miniatureFont, function (r384_derived) {
                var _r384_t0, _r384_t1;
                return new r366_xn$Capture$2Lrc8.GlyphProc(function (r386_currentGlyph) {
                    var _r386_t0, _r386_t1;
                    r386_currentGlyph.include(r384_derived, r366_AS_BASE, r366_ALSO_METRICS);
                    r386_currentGlyph.include(r366_ToSuperscript(r386_currentGlyph.advanceWidth / r366_Width));
                    r1_IsSuperscript.set(r386_currentGlyph);
                    return void 0;
                });
            });
        };
        r366_createSuperscripts("sup", null, r1_JobsData.Superscript);
        r366_createSuperscripts("numerator", r1_NumeratorForm, r1_JobsData.Numerator);
        var r366_createItalicSuperscripts = function (r389_prefix, r389_gr, r389__records) {
            var _r389_t1, _r389_t2;
            var _r389_t0 = r366_extendRelatedGlyphs(r389_prefix, r389__records);
            var r389_records = _r389_t0[0];
            var r389_relSets = _r389_t0[1];
            var r389_targetNameMap = _r389_t0[2];
            var r389_pendingGlyphs = r389_records.map(function (r390_record) {
                var _r390_t0, _r390_t1;
                return r390_record[1];
            });
            var r389_forkedPara = r366_MiniatureParaT(r366_para.createFork(r366_ForkTfm.Italic), new r366_xn$NamedParameterPair$2Lrc9b("crowd", r366_ToSuperscript.crowd), new r366_xn$NamedParameterPair$2Lrc9b("scale", r366_ToSuperscript.crowdAdjScale), new r366_xn$NamedParameterPair$2Lrc9b("sbscale", 0.75));
            var r389_miniatureFont = r366_Fork(r389_pendingGlyphs, r389_forkedPara);
            return r366_BuildTransformedSimple(r389_records, r389_relSets, r389_targetNameMap, r389_gr, r389_miniatureFont, function (r394_derived) {
                var _r394_t0, _r394_t1;
                return new r366_xn$Capture$2Lrc8.GlyphProc(function (r396_currentGlyph) {
                    var _r396_t0, _r396_t1;
                    r396_currentGlyph.include(r394_derived, r366_AS_BASE, r366_ALSO_METRICS);
                    r396_currentGlyph.include(r366_ToSuperscript(r396_currentGlyph.advanceWidth / r366_Width));
                    r1_IsSuperscript.set(r396_currentGlyph);
                    return void 0;
                });
            });
        };
        r366_createItalicSuperscripts("italsup", null, r1_JobsData.ItalicSuperscript);
        var r366_createSubscripts = function (r399_prefix, r399_gr, r399__records) {
            var _r399_t1, _r399_t2;
            var _r399_t0 = r366_extendRelatedGlyphs(r399_prefix, r399__records);
            var r399_records = _r399_t0[0];
            var r399_relSets = _r399_t0[1];
            var r399_targetNameMap = _r399_t0[2];
            var r399_pendingGlyphs = r399_records.map(function (r400_record) {
                var _r400_t0, _r400_t1;
                return r400_record[1];
            });
            var r399_miniatureFont = r366_Miniature(r399_pendingGlyphs, new r366_xn$NamedParameterPair$2Lrc9b("crowd", r366_ToSubscript.crowd), new r366_xn$NamedParameterPair$2Lrc9b("scale", r366_ToSubscript.crowdAdjScale), new r366_xn$NamedParameterPair$2Lrc9b("sbscale", 0.75));
            return r366_BuildTransformedSimple(r399_records, r399_relSets, r399_targetNameMap, r399_gr, r399_miniatureFont, function (r404_derived) {
                var _r404_t0, _r404_t1;
                return new r366_xn$Capture$2Lrc8.GlyphProc(function (r406_currentGlyph) {
                    var _r406_t0, _r406_t1;
                    r406_currentGlyph.include(r404_derived, r366_AS_BASE, r366_ALSO_METRICS);
                    r406_currentGlyph.include(r366_ToSubscript(r406_currentGlyph.advanceWidth / r366_Width));
                    r1_IsSubscript.set(r406_currentGlyph);
                    return void 0;
                });
            });
        };
        r366_createSubscripts("sub", null, r1_JobsData.Subscript);
        r366_createSubscripts("denominator", r1_DenominatorForm, r1_JobsData.Denominator);
        var r366_createMedievalCombs = function (r409_defaultLow, r409_defaultHigh, r409__records) {
            var _r409_t1, _r409_t2;
            var _r409_t0 = r366_extendRelatedGlyphs("medievalAbove", r409__records);
            var r409_records = _r409_t0[0];
            var r409_relSets = _r409_t0[1];
            var r409_targetNameMap = _r409_t0[2];
            var r409_pendingGlyphs = r409_records.map(function (r410_record) {
                var _r410_t0, _r410_t1;
                return r410_record[1];
            });
            var r409_miniatureFont = r366_Miniature(r409_pendingGlyphs, new r366_xn$NamedParameterPair$2Lrc9b("crowd", 7), new r366_xn$NamedParameterPair$2Lrc9b("scale", 0.4), new r366_xn$NamedParameterPair$2Lrc9b("mono", true), new r366_xn$NamedParameterPair$2Lrc9b("sbscale", 1));
            return r366_BuildTransformedSimple(r409_records, r409_relSets, r409_targetNameMap, null, r409_miniatureFont, function (r415_derived) {
                var _r415_t0, _r415_t1;
                return new r366_xn$Capture$2Lrc8.GlyphProc(function (r417_currentGlyph) {
                    var _r417_t0, _r417_t1;
                    r417_currentGlyph.setWidth(0);
                    var r417_low = r409_defaultLow;
                    var r417_high = r409_defaultHigh;
                    if (r415_derived && r415_derived.baseAnchors.above && r415_derived.baseAnchors.below) {
                        r417_low = r415_derived.baseAnchors.below.y;
                        r417_high = r415_derived.baseAnchors.above.y;
                    }
                    var r417_middle = r415_derived.advanceWidth / 2;
                    r417_currentGlyph.include(r415_derived);
                    r417_currentGlyph.include(r366_Ungizmo());
                    r417_currentGlyph.include(r366_Translate(-r417_middle, -r417_low));
                    r417_currentGlyph.include(r366_Scale(0.4));
                    r417_currentGlyph.include(r366_Translate(r366_markMiddle, r366_aboveMarkBot));
                    r417_currentGlyph.include(r366_Regizmo());
                    var r417_markHeight = 0.4 * (r417_high - r417_low);
                    r417_currentGlyph.setMarkAnchor("above", r366_markMiddle, r366_XH, r366_markMiddle, r366_aboveMarkBot + r417_markHeight);
                    r417_currentGlyph.setBaseAnchor("aboveBraceL", r366_markMiddle, r366_aboveMarkBot + 0.5 * r417_markHeight);
                    r417_currentGlyph.setBaseAnchor("aboveBraceR", r366_markMiddle, r366_aboveMarkBot + 0.5 * r417_markHeight);
                    return void 0;
                });
            });
        };
        r366_createMedievalCombs(0, r366_XH, r1_JobsData.MedievalComb_e);
        r366_createMedievalCombs(0, r366_Ascender, r1_JobsData.MedievalComb_b);
        r366_createMedievalCombs(0, r366_CAP, r1_JobsData.MedievalComb_CAP);
        r366_createMedievalCombs(r366_Descender, r366_XH, r1_JobsData.MedievalComb_p);
        r366_createMedievalCombs(r366_Descender, r366_Ascender, r1_JobsData.MedievalComb_bp);
        var r366_createMedievalBelowCombs = function (r428_defaultLow, r428_defaultHigh, r428__records) {
            var _r428_t1, _r428_t2;
            var _r428_t0 = r366_extendRelatedGlyphs("medievalBelow", r428__records);
            var r428_records = _r428_t0[0];
            var r428_relSets = _r428_t0[1];
            var r428_targetNameMap = _r428_t0[2];
            var r428_pendingGlyphs = r428_records.map(function (r429_record) {
                var _r429_t0, _r429_t1;
                return r429_record[1];
            });
            var r428_miniatureFont = r366_Miniature(r428_pendingGlyphs, new r366_xn$NamedParameterPair$2Lrc9b("crowd", 7), new r366_xn$NamedParameterPair$2Lrc9b("scale", 0.4), new r366_xn$NamedParameterPair$2Lrc9b("mono", true), new r366_xn$NamedParameterPair$2Lrc9b("sbscale", 1));
            return r366_BuildTransformedSimple(r428_records, r428_relSets, r428_targetNameMap, null, r428_miniatureFont, function (r434_derived) {
                var _r434_t0, _r434_t1;
                return new r366_xn$Capture$2Lrc8.GlyphProc(function (r436_currentGlyph) {
                    var _r436_t0, _r436_t1;
                    r436_currentGlyph.setWidth(0);
                    var r436_low = r428_defaultLow;
                    var r436_high = r428_defaultHigh;
                    if (r434_derived && r434_derived.baseAnchors.above && r434_derived.baseAnchors.below) {
                        r436_low = r434_derived.baseAnchors.below.y;
                        r436_high = r434_derived.baseAnchors.above.y;
                    }
                    var r436_middle = r434_derived.advanceWidth / 2;
                    r436_currentGlyph.include(r434_derived);
                    r436_currentGlyph.include(r366_Ungizmo());
                    r436_currentGlyph.include(r366_Translate(-r436_middle, -r436_high));
                    r436_currentGlyph.include(r366_Scale(0.4));
                    r436_currentGlyph.include(r366_Translate(r366_markMiddle, r366_belowMarkTop));
                    r436_currentGlyph.include(r366_Regizmo());
                    var r436_markHeight = 0.4 * (r436_high - r436_low) + 0 * (r366_aboveMarkTop - r366_aboveMarkBot);
                    r436_currentGlyph.setMarkAnchor("below", r366_markMiddle, 0, r366_markMiddle, r366_belowMarkTop - r436_markHeight);
                    r436_currentGlyph.setBaseAnchor("belowBraceL", r366_markMiddle, r366_belowMarkTop - 0.5 * r436_markHeight);
                    r436_currentGlyph.setBaseAnchor("belowBraceR", r366_markMiddle, r366_belowMarkTop - 0.5 * r436_markHeight);
                    return void 0;
                });
            });
        };
        r366_createMedievalBelowCombs(0, r366_XH, r1_JobsData.MedievalBelowComb_e);
        var r366_createReversed = function (r447__records) {
            var _r447_t1, _r447_t2;
            var _r447_t0 = r366_extendRelatedGlyphs("reversed", r447__records);
            var r447_records = _r447_t0[0];
            var r447_relSets = _r447_t0[1];
            var r447_targetNameMap = _r447_t0[2];
            var r447_pendingGlyphs = r447_records.map(function (r448_record) {
                var _r448_t0, _r448_t1;
                return r448_record[1];
            });
            var r447_forkedPara = r366_para.createFork(function (r449_p) {
                var _r449_t0, _r449_t1;
                return r449_p.shape.slopeAngle = -r449_p.shape.slopeAngle;
            });
            var r447_miniatureFont = r366_Fork(r447_pendingGlyphs, r447_forkedPara);
            return r366_BuildTransformedSimple(r447_records, r447_relSets, r447_targetNameMap, null, r447_miniatureFont, function (r450_g1) {
                var _r450_t0, _r450_t1;
                return new r366_xn$Capture$2Lrc8.GlyphProc(function (r452_currentGlyph) {
                    var _r452_t0, _r452_t1;
                    r452_currentGlyph.include(r450_g1, r366_AS_BASE, r366_ALSO_METRICS);
                    r452_currentGlyph.gizmo = r450_g1.gizmo;
                    r452_currentGlyph.include(r366_Ungizmo());
                    r452_currentGlyph.gizmo = r1_Transform.Id();
                    r452_currentGlyph.include(r366_ScaleAround(r452_currentGlyph.advanceWidth / 2, 0, -1, 1));
                    r452_currentGlyph.gizmo = r366_GlobalTransform;
                    r452_currentGlyph.include(r366_GlobalTransform);
                    var r452_bLeaningAbove = r450_g1.gizmo.unapplyIfPresent(r452_currentGlyph.baseAnchors.leaningAbove);
                    var r452_bLeaningBelow = r450_g1.gizmo.unapplyIfPresent(r452_currentGlyph.baseAnchors.leaningBelow);
                    if (r452_bLeaningAbove) r452_currentGlyph.setBaseAnchor("leaningAbove", r452_currentGlyph.advanceWidth - r452_bLeaningAbove.x, r452_bLeaningAbove.y);
                    if (r452_bLeaningBelow) r452_currentGlyph.setBaseAnchor("leaningBelow", r452_currentGlyph.advanceWidth - r452_bLeaningBelow.x, r452_bLeaningBelow.y);
                    return void 0;
                });
            });
        };
        return r366_createReversed(r1_JobsData.Reversed);
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r461_xn$Capture_Ext$2Lrc2b) {
    var _r461_t0, _r461_t1;
    r461_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r461_xn$Capture_Ext$2Lrc2b, "Autobuild-Transformed-Texture", function (r462_xn$Capture$2Lrc8, r462_xn$ExportCapture$2Lrc4b) {
        var _r462_t9, _r462_t10;
        var _r462_t0 = r462_xn$Capture$2Lrc8;
        var r462_xn$GlyphSaveSink$2Lrc4b = _r462_t0["$GlyphSaveSink$"];
        var r462_xn$NamedParameterPair$2Lrc9b = _r462_t0["$NamedParameterPair$"];
        var r462_xn$Exec$2Lrc5 = _r462_t0["$Exec$"];
        var r462_para = _r462_t0.para;
        var r462_glyphStore = _r462_t0.glyphStore;
        var r462_AS_BASE = _r462_t0.AS_BASE;
        var r462_ALSO_METRICS = _r462_t0.ALSO_METRICS;
        var _r462_t1 = r462_xn$Capture$2Lrc8.Metrics;
        var r462_Width = _r462_t1.Width;
        var r462_Translate = _r462_t1.Translate;
        var _r462_t2 = r462_xn$Capture$2Lrc8.SpiroFns;
        var _r462_t3 = r462_xn$Capture$2Lrc8.SpiroFns;
        var r462_xn$decor$0cao = _r462_t3["decor@"];
        var r462_xn$decor$0cao1 = _r462_t3["decor@@"];
        var r462_xn$decor$0cao11 = _r462_t3["decor@@@"];
        var _r462_t4 = r462_xn$Capture$2Lrc8.BooleFns;
        if (!(r462_para.buildTextureFeature && !r462_para.isQuasiProportional)) return void 0;
        var _r462_t5 = r462_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var _r462_t6 = r462_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r462_xn$queryglyph$1aao = _r462_t6["query-glyph"];
        var _r462_t7 = r462_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Recursive-Build"].resolve();
        var r462_Fork = _r462_t7.Fork;
        var _r462_t8 = r462_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Autobuild-Transformed-Shared"].resolve();
        var r462_extendRelatedGlyphs = _r462_t8.extendRelatedGlyphs;
        var r462_xn$linkrelations$5sIl = _r462_t8["link-relations"];
        var r462_wrapName = _r462_t8.wrapName;
        var r462_createTextureDerivatives = function (r467_gr, r467_extL, r467_extR, r467__records) {
            var r467_unicode, r467_glyphid, r467_glyphT, r467_glyphO, _r467_t4, _r467_t5, _r467_t6, _r467_t8;
            var _r467_t0 = r462_extendRelatedGlyphs(r467_gr.key, r467__records);
            var r467_records = _r467_t0[0];
            var r467_relSets = _r467_t0[1];
            var r467_targetNameMap = _r467_t0[2];
            var r467_pendingGlyphs = r467_records.map(function (r468_record) {
                var _r468_t0, _r468_t1;
                return r468_record[1];
            });
            var r467_forkedPara = Object.assign({}, r462_para);
            if (r467_extL + r467_extR > 0) {
                r467_forkedPara.advanceScaleMM = 1 + r467_extL + r467_extR;
                r467_forkedPara.advanceScaleM = 1 + r467_extL + r467_extR;
                r467_forkedPara.advanceScaleT = 1 + r467_extL + r467_extR;
            } else {
                r467_forkedPara.advanceScaleF = 1 + r467_extL + r467_extR;
                r467_forkedPara.advanceScaleI = 1 + r467_extL + r467_extR;
                r467_forkedPara.advanceScaleII = 1 + r467_extL + r467_extR;
                r467_forkedPara.advanceScaleSp = 1 + r467_extL + r467_extR;
            }
            var r467_forked = r462_Fork(r467_pendingGlyphs, r467_forkedPara);
            var _r467_t1 = r467_records;
            var _r467_t2 = _r467_t1.length;
            var _r467_t3 = 0;
            var _r467_t7 = _r467_t3 < _r467_t2;
            while (_r467_t7) {
                _r467_t8 = (_r467_t4 = _r467_t1[_r467_t3], r467_unicode = _r467_t4[0], r467_glyphid = _r467_t4[1], !r462_xn$queryglyph$1aao(r467_targetNameMap[r467_glyphid]) ? (r467_glyphT = r467_forked.queryByName(r467_glyphid), r467_glyphO = r462_glyphStore.queryByName(r467_glyphid), r467_glyphT && r467_glyphO && r467_glyphT.advanceWidth !== r467_glyphO.advanceWidth ? (r467_gr.set(r467_glyphO, r467_targetNameMap[r467_glyphid]), r462_xn$GlyphSaveSink$2Lrc4b.save(r467_targetNameMap[r467_glyphid], r467_unicode, new r462_xn$Capture$2Lrc8.GlyphProc(function (r472_currentGlyph) {
                    var r472_shift, _r472_t0, _r472_t1;
                    r472_currentGlyph.include(r467_glyphT, r462_AS_BASE, r462_ALSO_METRICS);
                    r472_currentGlyph.setWidth(r462_Width);
                    if (r467_extL > 0) r1_Joining.or(r472_currentGlyph, r1_Joining.Classes.Left);
                    if (r467_extR > 0) r1_Joining.or(r472_currentGlyph, r1_Joining.Classes.Right);
                    if (r467_extL) {
                        r472_shift = (r467_glyphT.advanceWidth - r462_Width) * r467_extL / (r467_extL + r467_extR);
                        r472_currentGlyph.applyTransform(r462_Translate(-r472_shift, 0), true);
                    }
                    return void 0;
                }))) : void 0) : void 0, _r467_t3 = _r467_t3 + 1);
                _r467_t7 = _r467_t3 < _r467_t2;
            }
            return _r467_t8;
        };
        var r462_jobs = function (r475_base) {
            var r475_results, r475_low, r475_high, r475_lch, r475_source, _r475_t3, _r475_t4, _r475_t5, _r475_t6, _r475_t7, _r475_t10;
            var _r475_t8 = r475_results = [];
            var _r475_t0 = r1_JobsData.TextureHandlingRanges;
            var _r475_t1 = _r475_t0.length;
            var _r475_t2 = 0;
            var _r475_t9 = _r475_t2 < _r475_t1;
            while (_r475_t9) {
                _r475_t3 = _r475_t0[_r475_t2];
                r475_low = _r475_t3[0];
                r475_high = _r475_t3[1];
                _r475_t4 = r475_low;
                _r475_t5 = r475_high;
                r475_lch = _r475_t4;
                while (r475_lch <= _r475_t5) {
                    r475_source = r462_glyphStore.queryNameByUnicode(r475_lch);
                    if (r475_source) r475_results.push([null, r475_source]);
                    r475_lch = r475_lch + 1;
                }
                _r475_t10 = _r475_t2 = _r475_t2 + 1;
                _r475_t9 = _r475_t2 < _r475_t1;
            }
            return r475_results;
        };
        var r462_EXTENSION = 1 / 12;
        var r462_SHRINK = -1 / 12;
        r462_createTextureDerivatives(r1_Texture.ExtL, r462_EXTENSION, 0, r462_jobs(61440));
        r462_createTextureDerivatives(r1_Texture.ExtR, 0, r462_EXTENSION, r462_jobs(61696));
        r462_createTextureDerivatives(r1_Texture.ExtLR, r462_EXTENSION, r462_EXTENSION, r462_jobs(61952));
        r462_createTextureDerivatives(r1_Texture.ShrL, r462_SHRINK, 0, r462_jobs(62208));
        r462_createTextureDerivatives(r1_Texture.ShrR, 0, r462_SHRINK, r462_jobs(62464));
        return r462_createTextureDerivatives(r1_Texture.ShrLR, r462_SHRINK, r462_SHRINK, r462_jobs(62720));
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r480_xn$Capture_Ext$2Lrc2b) {
    var _r480_t0, _r480_t1;
    r480_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r480_xn$Capture_Ext$2Lrc2b, "Autobuild-Transformed-Mathematical", function (r481_xn$Capture$2Lrc8, r481_xn$ExportCapture$2Lrc4b) {
        var _r481_t10, _r481_t11;
        var _r481_t0 = r481_xn$Capture$2Lrc8;
        var r481_xn$GlyphSaveSink$2Lrc4b = _r481_t0["$GlyphSaveSink$"];
        var r481_xn$NamedParameterPair$2Lrc9b = _r481_t0["$NamedParameterPair$"];
        var r481_xn$Exec$2Lrc5 = _r481_t0["$Exec$"];
        var r481_para = _r481_t0.para;
        var r481_glyphStore = _r481_t0.glyphStore;
        var r481_AS_BASE = _r481_t0.AS_BASE;
        var r481_ALSO_METRICS = _r481_t0.ALSO_METRICS;
        var _r481_t1 = r481_xn$Capture$2Lrc8.Metrics;
        var r481_GlobalTransform = _r481_t1.GlobalTransform;
        var r481_HVContrast = _r481_t1.HVContrast;
        var _r481_t2 = r481_xn$Capture$2Lrc8.SpiroFns;
        var _r481_t3 = r481_xn$Capture$2Lrc8.SpiroFns;
        var r481_xn$decor$0cao = _r481_t3["decor@"];
        var r481_xn$decor$0cao1 = _r481_t3["decor@@"];
        var r481_xn$decor$0cao11 = _r481_t3["decor@@@"];
        var _r481_t4 = r481_xn$Capture$2Lrc8.BooleFns;
        var _r481_t5 = r481_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var _r481_t6 = r481_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r481_xn$queryglyph$1aao = _r481_t6["query-glyph"];
        var r481_alias = _r481_t6.alias;
        var _r481_t7 = r481_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Recursive-Build"].resolve();
        var r481_Fork = _r481_t7.Fork;
        var _r481_t8 = r481_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Autobuild-Transformed-Shared"].resolve();
        var r481_extendRelatedGlyphs = _r481_t8.extendRelatedGlyphs;
        var r481_xn$linkrelations$5sIl = _r481_t8["link-relations"];
        var r481_wrapName = _r481_t8.wrapName;
        var _r481_t9 = r481_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Recursive-Build-ParaTfm"].resolve();
        var r481_ForkTfm = _r481_t9.ForkTfm;
        var r481_createMathDerivedSeriesImpl = function (r487_groupName, r487_tfm, r487__records, r487_postProcessing) {
            var r487_unicode, r487_glyphid, _r487_t4, _r487_t5, _r487_t6;
            var _r487_t0 = r481_extendRelatedGlyphs(r487_groupName, r487__records);
            var r487_records = _r487_t0[0];
            var r487_relSets = _r487_t0[1];
            var r487_targetNameMap = _r487_t0[2];
            var r487_pendingGlyphs = r487_records.map(function (r488_record) {
                var _r488_t0, _r488_t1;
                return r488_record[1];
            });
            var r487_forkedPara = r481_para.createFork(r487_tfm);
            var r487_forked = r481_Fork(r487_pendingGlyphs, r487_forkedPara);
            var _r487_t1 = r487_records;
            var _r487_t2 = _r487_t1.length;
            var _r487_t3 = 0;
            while (_r487_t3 < _r487_t2) {
                _r487_t4 = _r487_t1[_r487_t3];
                r487_unicode = _r487_t4[0];
                r487_glyphid = _r487_t4[1];
                if (!r481_xn$queryglyph$1aao(r487_targetNameMap[r487_glyphid])) r481_xn$GlyphSaveSink$2Lrc4b.save(r487_targetNameMap[r487_glyphid], r487_unicode, new r481_xn$Capture$2Lrc8.GlyphProc(function (r492_currentGlyph) {
                    var _r492_t0, _r492_t1;
                    var r492_glyphT = r487_forked.queryByName(r487_glyphid);
                    if (!r492_glyphT) console.log(r487_glyphid);
                    r492_currentGlyph.include(r492_glyphT, r481_AS_BASE, r481_ALSO_METRICS);
                    r492_currentGlyph.gizmo = r492_glyphT.gizmo;
                    if (r487_postProcessing) r492_currentGlyph.include(r487_postProcessing(r481_para, r487_forkedPara));
                    return void 0;
                }));
                _r487_t3 = _r487_t3 + 1;
            }
            return r481_xn$linkrelations$5sIl(r487_relSets);
        };
        var r481_Digits = Array.from("0123456789");
        var r481_UpperLatin = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        var r481_LowerLatin = Array.from("abcdefghijklmnopqrstuvwxyz");
        var r481_LowerLatin2 = Array.from("abcdefghijklmnopqrstuvwxyzħıȷ𝾕");
        var r481_UpperGreek = Array.from("ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡϴΣΤΥΦΧΨΩ∇");
        var r481_LowerGreek = Array.from("αβγδεζηθικλμνξοπρςστυφχψω∂ϵϑϰϕϱϖ");
        var r481_Greek2 = Array.from("Ϝϝ");
        var r481_ObliqueBlackboardBolds = Array.from("𝔻𝕕𝕖𝕚𝕛");
        var r481_CreateMathDerivatives = function (r495_groupName, r495_tfm, r495_gr, r495_base, r495_letters, r495_overrides, r495_postProcessing) {
            var r495_letter, r495_source, r495_dst, _r495_t2, _r495_t3;
            var r495_jobs = [];
            var r495_overrideMap = new r1_Map(r495_overrides || []);
            var _r495_t0 = 0;
            var _r495_t1 = r495_letters.length;
            var r495_j = _r495_t0;
            while (r495_j < _r495_t1) {
                r495_letter = r495_letters[r495_j];
                r495_source = r481_glyphStore.queryNameByUnicode(r495_letter.codePointAt(0));
                if (r495_gr && r495_gr.get(r481_xn$queryglyph$1aao(r495_source))) r495_source = r495_gr.get(r481_xn$queryglyph$1aao(r495_source));
                r495_dst = r495_base + r495_j;
                if (r495_overrideMap.has(r495_letter)) r495_dst = r495_overrideMap.get(r495_letter);
                if (r495_source) r495_jobs.push([r495_dst, r495_source]);
                r495_j = r495_j + 1;
            }
            return r481_createMathDerivedSeriesImpl(r495_groupName, r495_tfm, r495_jobs, r495_postProcessing);
        };
        var r481_CreateMathAliasableImpl = function (r497_groupName, r497_altGroupName, r497_tfm, r497_gr, r497_base, r497_letters, r497_overrides) {
            var r497_letter, r497_source, r497_uDst, _r497_t2, _r497_t3, _r497_t5;
            var r497_overrideMap = new r1_Map(r497_overrides || []);
            var _r497_t0 = 0;
            var _r497_t1 = r497_letters.length;
            var r497_j = _r497_t0;
            var _r497_t4 = r497_j < _r497_t1;
            while (_r497_t4) {
                _r497_t5 = (r497_letter = r497_letters[r497_j], r497_source = r481_glyphStore.queryNameByUnicode(r497_letter.codePointAt(0)), r497_source && r497_altGroupName ? r497_source = r481_wrapName(r497_altGroupName, r497_source) : void 0, r497_uDst = r497_base + r497_j, r497_overrideMap.has(r497_letter) ? r497_uDst = r497_overrideMap.get(r497_letter) : void 0, r497_source ? r481_alias(r481_wrapName(r497_groupName, r497_source), r497_uDst, r497_source) : void 0, r497_j = r497_j + 1);
                _r497_t4 = r497_j < _r497_t1;
            }
            return _r497_t5;
        };
        var r481_CreateMathAliasable = function (r499_cond, r499_groupName, r499_altGroupName, r499_tfm, r499_gr, r499_base, r499_letters, r499_overrides) {
            var _r499_t0, _r499_t1;
            return r499_cond ? r481_CreateMathDerivatives(r499_groupName, r499_tfm, r499_gr, r499_base, r499_letters, r499_overrides) : r481_CreateMathAliasableImpl(r499_groupName, r499_altGroupName, r499_tfm, r499_gr, r499_base, r499_letters, r499_overrides);
        };
        r481_CreateMathDerivatives("mathbf", r481_ForkTfm.Bold, null, 119808, r481_UpperLatin);
        r481_CreateMathDerivatives("mathbf", r481_ForkTfm.Bold, null, 119834, r481_LowerLatin);
        r481_CreateMathDerivatives("mathbf", r481_ForkTfm.Bold, null, 120488, r481_UpperGreek);
        r481_CreateMathDerivatives("mathbf", r481_ForkTfm.Bold, null, 120514, r481_LowerGreek);
        r481_CreateMathDerivatives("mathbf", r481_ForkTfm.Bold, null, 120782, r481_Digits);
        r481_CreateMathDerivatives("mathbf", r481_ForkTfm.Bold, null, 120778, r481_Greek2);
        r481_CreateMathDerivatives("mathit", r481_ForkTfm.Italic, null, 119860, r481_UpperLatin);
        r481_CreateMathDerivatives("mathit", r481_ForkTfm.Italic, null, 119886, r481_LowerLatin2, [["h", 8462], ["ħ", 8463], ["ı", 120484], ["ȷ", 120485], ["𝾕", 120486]]);
        r481_CreateMathDerivatives("mathit", r481_ForkTfm.Italic, null, 120546, r481_UpperGreek);
        r481_CreateMathDerivatives("mathit", r481_ForkTfm.Italic, null, 120572, r481_LowerGreek);
        r481_CreateMathDerivatives("mathbi", r481_ForkTfm.BoldItalic, null, 119912, r481_UpperLatin);
        r481_CreateMathDerivatives("mathbi", r481_ForkTfm.BoldItalic, null, 119938, r481_LowerLatin);
        r481_CreateMathDerivatives("mathbi", r481_ForkTfm.BoldItalic, null, 120604, r481_UpperGreek);
        r481_CreateMathDerivatives("mathbi", r481_ForkTfm.BoldItalic, null, 120630, r481_LowerGreek);
        r481_CreateMathDerivatives("mathss", r481_ForkTfm.Sans, r1_MathSansSerif, 120224, r481_UpperLatin);
        r481_CreateMathDerivatives("mathss", r481_ForkTfm.Sans, r1_MathSansSerif, 120250, r481_LowerLatin);
        r481_CreateMathDerivatives("mathss", r481_ForkTfm.Sans, r1_MathSansSerif, 120802, r481_Digits);
        r481_CreateMathDerivatives("mathsi", r481_ForkTfm.SansItalic, r1_MathSansSerif, 120328, r481_UpperLatin);
        r481_CreateMathDerivatives("mathsi", r481_ForkTfm.SansItalic, r1_MathSansSerif, 120354, r481_LowerLatin);
        r481_CreateMathDerivatives("mathsb", r481_ForkTfm.SansBold, r1_MathSansSerif, 120276, r481_UpperLatin);
        r481_CreateMathDerivatives("mathsb", r481_ForkTfm.SansBold, r1_MathSansSerif, 120302, r481_LowerLatin);
        r481_CreateMathDerivatives("mathsb", r481_ForkTfm.SansBold, r1_MathSansSerif, 120662, r481_UpperGreek);
        r481_CreateMathDerivatives("mathsb", r481_ForkTfm.SansBold, r1_MathSansSerif, 120688, r481_LowerGreek);
        r481_CreateMathDerivatives("mathsb", r481_ForkTfm.SansBold, r1_MathSansSerif, 120812, r481_Digits);
        r481_CreateMathDerivatives("mathsz", r481_ForkTfm.SansBoldItalic, r1_MathSansSerif, 120380, r481_UpperLatin);
        r481_CreateMathDerivatives("mathsz", r481_ForkTfm.SansBoldItalic, r1_MathSansSerif, 120406, r481_LowerLatin);
        r481_CreateMathDerivatives("mathsz", r481_ForkTfm.SansBoldItalic, r1_MathSansSerif, 120720, r481_UpperGreek);
        r481_CreateMathDerivatives("mathsz", r481_ForkTfm.SansBoldItalic, r1_MathSansSerif, 120746, r481_LowerGreek);
        var r481_doTypewriter = r481_para.isQuasiProportional;
        r481_CreateMathAliasable(r481_doTypewriter, "mathtt", null, r481_ForkTfm.TypeWriter, null, 120432, r481_UpperLatin);
        r481_CreateMathAliasable(r481_doTypewriter, "mathtt", null, r481_ForkTfm.TypeWriter, null, 120458, r481_LowerLatin);
        r481_CreateMathAliasable(r481_doTypewriter, "mathtt", null, r481_ForkTfm.TypeWriter, null, 120822, r481_Digits);
        r481_CreateMathDerivatives("mathit", r481_ForkTfm.Italic, null, 8517, r481_ObliqueBlackboardBolds);
        var r481_TfOutline = function (r500_para, r500_forkedPara) {
            var _r500_t0, _r500_t1;
            return new r481_xn$Capture$2Lrc8.GlyphProc(function (r502_currentGlyph) {
                var _r502_t0, _r502_t1;
                var r502_g = r502_currentGlyph.geometry;
                var r502_sw = r500_forkedPara.stroke / 4;
                var r502_gizmo = r502_currentGlyph.gizmo || r481_GlobalTransform;
                r502_currentGlyph.geometry = new r1_StrokeGeometry(r502_g, r502_gizmo, r502_sw, r481_HVContrast, true);
                return void 0;
            });
        };
        r481_CreateMathDerivatives("legacyComputingOutlined", r481_ForkTfm.Bold, null, 117974, r481_UpperLatin, null, r481_TfOutline);
        r481_CreateMathDerivatives("legacyComputingOutlined", r481_ForkTfm.Bold, null, 118000, r481_Digits, null, r481_TfOutline);
        var r481_CreateMathBoldFraktur = function (r503_base, r503_letters) {
            var _r503_t2, _r503_t3;
            var r503_jobs = [];
            var _r503_t0 = 0;
            var _r503_t1 = r503_letters.length;
            var r503_j = _r503_t0;
            while (r503_j < _r503_t1) {
                r503_jobs.push([r503_base + r503_j, "frak/" + r503_letters[r503_j]]);
                r503_j = r503_j + 1;
            }
            return r481_createMathDerivedSeriesImpl("frakbf", r481_ForkTfm.Bold, r503_jobs);
        };
        r481_CreateMathBoldFraktur(120172, r481_UpperLatin);
        return r481_CreateMathBoldFraktur(120198, r481_LowerLatin);
    });
    return void 0;
});


