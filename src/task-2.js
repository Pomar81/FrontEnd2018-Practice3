
export default class EnhancedSet extends Set {

    union(s) {
        return new EnhancedSet([...this, ...s]);
    }

    intersection(s) {
        const result = new EnhancedSet();
        for (const entry of s) {
            if (this.has(entry)) {
                result.add(entry);
            }
        }
        return result;
    }

    difference(s) {
        const result = new EnhancedSet([...this]);
        for (const entry of s) {
            if (result.has(entry)) {
                result.delete(entry);
            }
        }
        return result;
    }

    symmetricDifference(s) {
        return s.union(this).difference(s.intersection(this));

    }

    isSuperset(s) {
        for (const entry of s) {
            if (!this.has(entry)) {
                return false;
            }
        }
        return true;
    }

    isSubset(s) {
        for (const entry of this) {
            if (!s.has(entry)) {
                return false;
            }
        }
        return true;
    }
}
