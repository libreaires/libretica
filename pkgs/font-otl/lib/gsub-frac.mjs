"use strict";
import * as _s0_t0 from "@iosevka/glyph/relation";
var _s0_t1;
export {_s0_t1 as buildFrac};
var r1_buildFrac, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_NumeratorForm = _r1_t8.NumeratorForm;
var r1_DenominatorForm = _r1_t8.DenominatorForm;
_s0_t1 = r1_buildFrac = function (r146_gsub, r146_glyphStore) {
    var r146_gid, r146_g, r146_numForm, r146_denForm, _r146_t3, _r146_t4, _r146_t5;
    var r146_rec = r146_gsub.beginBlock();
    var r146_frac = r146_gsub.addCommonFeature(r146_gsub.createFeature("frac"));
    var _r146_t0 = r146_gsub.ChainRuleBuilder();
    var r146_xn$chainrule$1aao = _r146_t0[0];
    var r146_xn$reverserule$3qIs = _r146_t0[1];
    var r146_digitSet = [];
    var r146_numSet = [];
    var r146_denSet = [];
    var _r146_t1 = r146_glyphStore.namedEntries()[Symbol.iterator]();
    var _r146_t2 = void 0;
    while (!(_r146_t2 = _r146_t1.next()).done) {
        _r146_t3 = _r146_t2.value;
        r146_gid = _r146_t3[0];
        r146_g = _r146_t3[1];
        if (r146_gid[0] !== ".") {
            r146_numForm = r1_NumeratorForm.get(r146_g);
            r146_denForm = r1_DenominatorForm.get(r146_g);
            if (r146_numForm && r146_denForm) {
                r146_digitSet.push(r146_gid);
                r146_numSet.push(r146_numForm);
                r146_denSet.push(r146_denForm);
            }
        }
    }
    var r146_subSolidus = r146_gsub.createLookup({
        "type": "gsub_chaining",
        "rules": [r146_xn$chainrule$1aao(r146_digitSet, {
            "left": ["solidus", "slash"],
            "right": ["fractionBar", "fractionBar"]
        }, r146_digitSet)]
    });
    var r146_subDen = r146_gsub.createLookup({
        "type": "gsub_chaining",
        "rules": [r146_xn$chainrule$1aao(["fractionBar"].concat(r146_denSet), {
            "left": r146_digitSet,
            "right": r146_denSet
        })]
    });
    var r146_subNum = r146_gsub.createLookup({
        "type": "gsub_reverse",
        "rules": [r146_xn$reverserule$3qIs({
            "left": r146_digitSet,
            "right": r146_numSet
        }, ["fractionBar"].concat(r146_numSet))]
    });
    r146_frac.addLookup(r146_subSolidus);
    r146_frac.addLookup(r146_subDen);
    r146_frac.addLookup(r146_subNum);
    r146_gsub.setDependency(r146_subSolidus, r146_subDen);
    r146_gsub.setDependency(r146_subSolidus, r146_subNum);
    return r146_gsub.endBlock(r146_rec);
};
var r1_objectIsNotEmpty = function (r151_obj) {
    var _r151_t0, _r151_t1;
    return r151_obj && Object.keys(r151_obj).length;
};


