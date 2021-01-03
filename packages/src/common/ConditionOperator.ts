/**
 * 条件的操作符
 */
export default interface ConditionOperator {
    SIGN: string; // 符号
    TITLE: string; // 显示的值
}

/**
 * 等于操作符
 */
export const EqualsConditionOperator: ConditionOperator = {
    SIGN: 'EQ',
    TITLE: '等于'
}

/**
 * 小于操作符
 */
export const LessThanConditionOperator: ConditionOperator = {
    SIGN: 'LT',
    TITLE: '小于'
}

/**
 * 大小操作符
 */
export const GreatThanConditionOperator: ConditionOperator = {
    SIGN: 'GT',
    TITLE: '大于'
}

/**
 * 小于等于操作符
 */
export const LessEqualThanConditionOperator: ConditionOperator = {
    SIGN: 'LE',
    TITLE: '小于等于'
}

/**
 * 等于操作符
 */
export const GreatEquanThanConditionOperator: ConditionOperator = {
    SIGN: 'GE',
    TITLE: '大于等于'
}

/**
 * 包含操作符
 */
export const ContainsConditionOperator: ConditionOperator = {
    SIGN: 'CT',
    TITLE: '包含'
}


// 所有操作符
export const ConditionOperators: ConditionOperator[] = [
    EqualsConditionOperator, 
    LessThanConditionOperator,
    GreatThanConditionOperator,
    LessEqualThanConditionOperator,
    GreatEquanThanConditionOperator,
    ContainsConditionOperator
];
