import { createContext } from "react";

/**
 * 页面编辑器上下文
 */
export interface PageEditorContextType {
}

// 页面编辑器上下文初始值
export const contextInitValue = {
 }

// 页面编辑器上下文创建
export const PageEditorContext = createContext<PageEditorContextType>(contextInitValue);