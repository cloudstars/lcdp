import ConditionOperator from "./ConditionOperator";
import DataType from "./DataType"

/**
 * 一个最基础的条件
 */
export interface Condition {

    entity: string; // 实体

    field: string; // 属性

    operator: ConditionOperator; // 操作符
 
    values: any[]; // 值

    dataType: DataType; // 数据类型
}

/**
 * 条件表达式的操作符
 */
export enum ConditionExpresionOperator {
    AND, // 与
    OR, // 或
}


/**
 * 条件表达式
 */
export default interface ConditionExpresion {

    operator: ConditionExpresionOperator;

    conditions: (Condition | ConditionExpresion)[];
}
