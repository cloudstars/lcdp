/**
 * 实体
 */
export default interface Entity {

    // ID
    id: string;

    // 名称
    name: string;

    // 属性列表
    fields: {
        id:string;
        name: string;
    } [];
}