/**
 * Lightweight SQL-to-Notion Parser
 * Converts simple SQL WHERE clauses into Notion's JSON filter format.
 */

function parseCondition(conditionStr) {
    // Basic regex to match: Property Operator Value
    // e.g. Status = 'Done' -> ["Status = 'Done'", "Status", "=", "'Done'"]
    const match = conditionStr.trim().match(/^"?([^"!=><]+)"?\s*(!=|>=|<=|=|>|<)\s*"?([^"]+)"?$/);
    
    if (!match) return null;

    const property = match[1].trim();
    const operator = match[2].trim();
    let value = match[3].trim();

    // Strip quotes if it's a string
    if (value.startsWith("'") && value.endsWith("'")) {
        value = value.slice(1, -1);
    } else if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
    } else if (!isNaN(Number(value))) {
        value = Number(value);
    } else if (value.toLowerCase() === 'true') {
        value = true;
    } else if (value.toLowerCase() === 'false') {
        value = false;
    }

    // Map SQL operators to Notion filter operators
    const isNumber = typeof value === 'number';
    const type = isNumber ? 'number' : 'rich_text';
    
    let notionOp = 'equals';
    if (operator === '=') notionOp = 'equals';
    else if (operator === '!=') notionOp = 'does_not_equal';
    else if (operator === '>') notionOp = 'greater_than';
    else if (operator === '<') notionOp = 'less_than';
    else if (operator === '>=') notionOp = 'greater_than_or_equal_to';
    else if (operator === '<=') notionOp = 'less_than_or_equal_to';

    const filterObj = { property: property };
    filterObj[type] = {};
    filterObj[type][notionOp] = value;

    return filterObj;
}

function sqlToNotionFilter(sqlString) {
    // Extract WHERE clause
    const whereMatch = sqlString.match(/WHERE\s+(.*)/i);
    if (!whereMatch) return undefined; // No filter

    let whereClause = whereMatch[1];
    
    // Remove semi-colon if exists
    if (whereClause.endsWith(';')) {
        whereClause = whereClause.slice(0, -1);
    }

    // Handle basic AND
    if (whereClause.toUpperCase().includes(' AND ')) {
        const conditions = whereClause.split(/ AND /i);
        return {
            and: conditions.map(parseCondition).filter(Boolean)
        };
    }
    
    // Handle basic OR
    if (whereClause.toUpperCase().includes(' OR ')) {
        const conditions = whereClause.split(/ OR /i);
        return {
            or: conditions.map(parseCondition).filter(Boolean)
        };
    }

    // Single condition
    return parseCondition(whereClause);
}

module.exports = { sqlToNotionFilter };
