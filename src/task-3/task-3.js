
export default function filterTable(tbody, filters) {
    let fltRowNumber = 0;

    // iteration over rows
    for (const row of tbody.children) {
        let matched = true;

        // looks for filter option matching
        for (const [key, value] of Object.entries(filters)) {
            console.log(key);
            const td = row.querySelector(`[data-field-name="${key}"]`);
            if (td && !td.textContent.includes(value)) {
                matched = false;
                break;
            }
        }
        if (!matched) {
            row.classList.add("d-none");
            continue;
        }

        fltRowNumber++;
        row.classList.remove("d-none");
        row.children[0].textContent = `${fltRowNumber}`;
        if (fltRowNumber % 2) {
            row.classList.remove("table-row-even");
        } else {
            row.classList.add("table-row-even");
        }
    }
}
