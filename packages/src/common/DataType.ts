import ConditionOperator, { ContainsConditionOperator, EqualsConditionOperator, LessEqualThanConditionOperator, GreatEquanThanConditionOperator, GreatThanConditionOperator, LessThanConditionOperator } from "./ConditionOperator";

/**
 * 数据类型
 */
export default interface DataType {

    // 真实的数据类型
    // realType: type;

    // 支持的操作符类型
    supportedConditionOperators: ConditionOperator[];

    
}

/**
 * 字符串数据类型
 */
export const StringDataType: DataType = {
    // type: typeof string,
    supportedConditionOperators: [
        ContainsConditionOperator
    ]
};

/**
 * 日期数据类型
 */
export const DateDataType: DataType = {
    // type: typeof string,
    supportedConditionOperators: [
        LessThanConditionOperator,
        GreatThanConditionOperator,
        LessEqualThanConditionOperator,
        GreatEquanThanConditionOperator,
    ]
};

/**
 * 用户数据类型
 */
export const UserDataType: DataType = {
    // type: typeof string,
    supportedConditionOperators: [
        EqualsConditionOperator
    ]
};

// 所有数据类型
export const DataTypes: DataType[] = [StringDataType, DateDataType, UserDataType];

