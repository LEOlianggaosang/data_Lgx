## 用途
这适合在**不切换主题**的前提下，只把某一篇或某一类笔记调整得不一样。常见用途有：
- 图片统一加框/水印、隐藏标题、隐藏属性区
- 宽屏阅读、更大的行距、不同字体
- 给“日记”“读书笔记”“归档”这类笔记加不同的背景色或标记
## 三步操作
**1）建 CSS 片段**
依次打开 设置 → 外观 → CSS 片段 → 点击“打开片段文件夹”（对应 `.obsidian/snippets/`），新建一个 `.css` 文件，比如 `wiki.css`。
**2）启用片段**
回到 设置 → 外观 → CSS 片段，点“Reload snippets”刷新，再打开开关。之后**保存 CSS 文件就会自动生效**，不用重启（如果当前主题或笔记没刷新，用命令面板执行一次“Reload app without saving”）。
**3）在笔记里声明类名**
## 完整示例
**`.obsidian/snippets/wiki.css`**

```css
/* 1. 图片红色边框（官方示例） */
.red-border img {
  border: 2px solid #ff0000;
  border-radius: 4px;
}

/* 2. 隐藏这篇笔记的标题 */
.no-title .inline-title {
  display: none;
}

/* 3. 宽屏：加大正文宽度 */
.wide .markdown-preview-view,
.wide .markdown-source-view {
  --file-line-width: 100%;
}

/* 4. 属性区换色 */
.warm .metadata-container {
  background: #fff3e0;
  border-radius: 6px;
  padding: 6px 10px;
}
```

```yaml
---
cssclasses:
  - red-border
  - wide
  - warm
---
```

这样这篇笔记的图片会带红框、正文变宽、属性区变成暖色底，而其他笔记完全不受影响。
## 变量
- 主页 -> 学习 -> 帮助/开发者/更新日志...
- 开发者文档
	- 社区目录
	- 插件
	- 主题
	- 参考
		- CSS变量
			- ...
			- **变量总集** <-
		- TypeScript API
			- ...
- [CSS 变量 - 开发者文档](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables)
	- 基础：颜色、间距、排版等抽象变量
	- 组件：应用中使用的交互组件
	- 编辑：用于编辑和阅读文本文件的内容类型和变量
	- 插件：与核心插件中接口元素相关的变量
	- 窗口：与 Obsidian 应用窗口 Chrome 相关的变量
	- 发布：Obsidian Publish 网站的变量