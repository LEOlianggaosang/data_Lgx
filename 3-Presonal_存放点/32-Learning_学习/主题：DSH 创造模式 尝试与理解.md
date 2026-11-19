# 自定义插件
## 会话颜色标记
# 个性化页面
## 个人库结构设计图编辑器
### 过程
- 未使用库空间
- 依赖dsh
	- 可选gui位置api
		1. 侧边栏
		2. 会话tab
		3. 全局视图
		4. 其他位置
	- 创造模式：插件
		- bundle：DSH 的插件交付单位
		- 声明了 `dsh.bundle.patch` 的 npm 包
		- **bundle 与 plugin 的关系**：bundle 是“箱子”，里面可以有一行或多行 plugin；插件行才是真正被 Loader 加载的 Host 模块。Client 半边（页面/面板）通过 `dsh.client.inject` 注入到 UI 槽位
		- 给 package 一个 Loader 行）加一个 Client 模块（真正画右侧栏编辑器的 `client.js`）
- 交付子代理处理
	- 子代理相关：机制与边界
			- subagent
			- subagent_fork
			- send_message
			- *Client*
	- 增加需求
		- 从纯前端到增加host服务
		- 子代理交接清单：*宿主-客户端桥API*
			- 给身份，定边界
			- 背景说明
			- 参考文件
				- D:\DSH\resources\app.asar\dsh\node_modules\@deepseek-ai\dsh-agent-preset\skills\dsh-doc\ 重点读这些参考文件：
					- references/configuration.md 
					- references/user-actions.md 
					- references/practices.md 
					- references/host-plugin.md 
					- references/packages.md 
					- references/ui-plugin.md 
					- references/composition-reference.md
			- 回应需求
				- 如何做到
				- 给出最小片段
			- 注意事项
				- 防御性
				- 只读权限
				- 回复格式
		- 结论速览
- 交互优化
### 解析
- 简述：*生成过程*
	- 交付子代理处理
		- 触发：由**个性化推荐插件**启动
		- 输入/js：*方案交接* 
		- 模版/js：*插件开发文档*
		- 输出/js：*结果回执*
- 确认：*实现原理*
	- 是插件：**交付形态** 生成一个**纯前端本地插件包**
	- 插入清单：装进桌面 profile 的 `created-plugins\42c57219-…` 目录
	- 一切皆插件机制：*页面注册*
		- 代码接口：样式注入
		- UI归属：右侧边栏注册
		- 交互途径：可打开页类型
		- 文本登记：文案
	- 对象：
		- 编号算法：实现动态编号
		- 检查器：中心/边/节点识别，数据更改/输入框
		- 唤出处理：侧边栏
		- 交互？控件？
- 说明：*使用方式*
	- ![[构建：知识树设计图#使用说明]]
### 优化计划
- 适用性扩展：增加章节
- 模块化与通用化
	- 输入与输出
	- 通用拓展/md特性
- 关联库与解耦dsh
	- 独立应用程序
	- obsidian插件
# 管理插件地址