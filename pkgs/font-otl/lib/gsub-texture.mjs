"use strict";
import * as _s0_t0 from "@iosevka/glyph/relation";
var _s0_t1;
export {_s0_t1 as buildGsubTexture};
var r1_buildGsubTexture, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var r1_Set = Set;
var _r1_t8 = _s0_t0;
var r1_Texture = _r1_t8.Texture;
var r1_CvDecompose = _r1_t8.CvDecompose;
_s0_t1 = r1_buildGsubTexture = function (r147_gsub, r147_glyphStore, r147_markGlyphs, r147_cvs) {
    var r147_gid, r147_g, r147_extL, r147_extR, r147_extLR, r147_shrL, r147_shrR, r147_shrLR, r147_cv, r147_decompose, r147_gn, r147_glyph, r147_parts, r147_influenced, r147_part, _r147_t3, _r147_t4, _r147_t5, _r147_t6, _r147_t7, _r147_t8, _r147_t9, _r147_t10, _r147_t11, _r147_t12, _r147_t13;
    var r147_anyMark = Array.from(r147_markGlyphs.all);
    var r147_rec = r147_gsub.beginBlock();
    var r147_txtr = r147_gsub.addCommonFeature(r147_gsub.createFeature("TXTR"));
    var _r147_t0 = r147_gsub.ChainRuleBuilder();
    var r147_xn$chainrule$1aao = _r147_t0[0];
    var r147_xn$reverserule$3qIs = _r147_t0[1];
    var r147_xn$lookaround$5sIl = null;
    var r147_extLFrom = [];
    var r147_extRFrom = [];
    var r147_extLRFrom = [];
    var r147_extLTo = [];
    var r147_extRTo = [];
    var r147_extLRTo = [];
    var r147_shrLFrom = [];
    var r147_shrRFrom = [];
    var r147_shrLRFrom = [];
    var r147_shrLTo = [];
    var r147_shrRTo = [];
    var r147_shrLRTo = [];
    var r147_anyInfluence = new r1_Set();
    var _r147_t1 = r147_glyphStore.namedEntries()[Symbol.iterator]();
    var _r147_t2 = void 0;
    while (!(_r147_t2 = _r147_t1.next()).done) {
        _r147_t3 = _r147_t2.value;
        r147_gid = _r147_t3[0];
        r147_g = _r147_t3[1];
        if (r147_gid[0] !== ".") {
            r147_extL = r1_Texture.ExtL.get(r147_g);
            r147_extR = r1_Texture.ExtR.get(r147_g);
            r147_extLR = r1_Texture.ExtLR.get(r147_g);
            r147_shrL = r1_Texture.ShrL.get(r147_g);
            r147_shrR = r1_Texture.ShrR.get(r147_g);
            r147_shrLR = r1_Texture.ShrLR.get(r147_g);
            if (r147_extL) {
                r147_extLFrom.push(r147_gid);
                r147_extLTo.push(r147_extL);
            }
            if (r147_extR) {
                r147_extRFrom.push(r147_gid);
                r147_extRTo.push(r147_extR);
            }
            if (r147_extLR) {
                r147_extLRFrom.push(r147_gid);
                r147_extLRTo.push(r147_extLR);
            }
            if (r147_extL || r147_extR || r147_extLR) r147_anyInfluence.add(r147_gid);
            if (r147_shrL) {
                r147_shrLFrom.push(r147_gid);
                r147_shrLTo.push(r147_shrL);
            }
            if (r147_shrR) {
                r147_shrRFrom.push(r147_gid);
                r147_shrRTo.push(r147_shrR);
            }
            if (r147_shrLR) {
                r147_shrLRFrom.push(r147_gid);
                r147_shrLRTo.push(r147_shrLR);
            }
        }
    }
    var r147_sub = r147_gsub.createLookup({
        "type": "gsub_chaining",
        "ignoreGlyphs": r147_anyMark,
        "rules": [r147_xn$chainrule$1aao({
            "left": [].concat(r147_shrRTo, r147_shrLRTo),
            "right": r147_xn$lookaround$5sIl
        }, {
            "left": r147_extLRFrom,
            "right": r147_extLRTo
        }, {
            "left": [].concat(r147_shrLFrom, r147_shrLRFrom),
            "right": r147_xn$lookaround$5sIl
        }), r147_xn$chainrule$1aao({
            "left": [].concat(r147_extRTo, r147_extLRTo),
            "right": r147_xn$lookaround$5sIl
        }, {
            "left": r147_shrLRFrom,
            "right": r147_shrLRTo
        }, {
            "left": [].concat(r147_extLFrom, r147_extLRFrom),
            "right": r147_xn$lookaround$5sIl
        }), r147_xn$chainrule$1aao({
            "left": [].concat(r147_shrRTo, r147_shrLRTo),
            "right": r147_xn$lookaround$5sIl
        }, {
            "left": r147_extLFrom,
            "right": r147_extLTo
        }), r147_xn$chainrule$1aao({
            "left": [].concat(r147_extRTo, r147_extLRTo),
            "right": r147_xn$lookaround$5sIl
        }, {
            "left": r147_shrLFrom,
            "right": r147_shrLTo
        }), r147_xn$chainrule$1aao({
            "left": r147_extRFrom,
            "right": r147_extRTo
        }, {
            "left": [].concat(r147_shrLFrom, r147_shrLRFrom),
            "right": r147_xn$lookaround$5sIl
        }), r147_xn$chainrule$1aao({
            "left": r147_shrRFrom,
            "right": r147_shrRTo
        }, {
            "left": [].concat(r147_extLFrom, r147_extLRFrom),
            "right": r147_xn$lookaround$5sIl
        })]
    });
    r147_txtr.addLookup(r147_sub);
    if (r147_cvs) {
        _r147_t4 = r147_cvs.values()[Symbol.iterator]();
        _r147_t5 = void 0;
        while (!(_r147_t5 = _r147_t4.next()).done) {
            r147_cv = _r147_t5.value;
            if (r147_cv.decompositionLookup) {
                r147_txtr.addLookup(r147_cv.decompositionLookup);
                r147_gsub.setDependency(r147_cv.decompositionLookup, r147_sub);
            }
        }
    } else {
        r147_decompose = r147_gsub.createLookup({
            "type": "gsub_multiple",
            "substitutions": {}
        });
        _r147_t6 = r147_glyphStore.namedEntries()[Symbol.iterator]();
        _r147_t7 = void 0;
        while (!(_r147_t7 = _r147_t6.next()).done) {
            _r147_t8 = _r147_t7.value;
            r147_gn = _r147_t8[0];
            r147_glyph = _r147_t8[1];
            r147_parts = r1_CvDecompose.get(r147_glyph);
            if (r147_parts) {
                r147_influenced = r147_anyInfluence.has(r147_gn);
                _r147_t9 = r147_parts;
                _r147_t10 = _r147_t9.length;
                _r147_t11 = 0;
                while (_r147_t11 < _r147_t10) {
                    r147_part = _r147_t9[_r147_t11];
                    if (r147_anyInfluence.has(r147_part)) r147_influenced = true;
                    _r147_t11 = _r147_t11 + 1;
                }
                if (r147_influenced) r147_decompose.substitutions[r147_gn] = r147_parts;
            }
        }
        r147_txtr.addLookup(r147_decompose);
        r147_gsub.setDependency(r147_decompose, r147_sub);
    }
    return r147_gsub.endBlock(r147_rec);
};


