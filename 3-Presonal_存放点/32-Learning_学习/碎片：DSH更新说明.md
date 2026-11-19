# 信息来源
- 实际更新时间
- 安装时询问的会话
- github 项目
	- readme：相对于项目结构
		- 歧路：项目怎么看
	- 发布页：Releases/Tag
		- github支持页
	- 项目：提交信息/提交差异
	- 项目文档部分：升级指南
# 更新版本
[deepseek-ai/deepseek-harness: DeepSeek Harness: Everything is a Plugin.](https://github.com/deepseek-ai/deepseek-harness)
## v0.2.2
### v0.2.2-rc.5
- 2026-11-18/小版本
- **DeepSeek 模型改用 DeepSeek 服务端搜索，搜索不按次收费**；其他模型仍默认走 DeepSeek Search API
### v0.2.2-rc.4
- 2026-11-17/小版本
- 修复
	- 修复 **LiveShare 在桌面端无法创建分享**的问题
	- 优化模型请求收到异常消息响应时的表现（不再出现异常的报错/卡住表现）
### v0.2.2-rc.3
- 2026-11-13/小版本
- 新增实验性 **「DeepSeek 会话导入」插件**：把 DeepSeek App / 网页版的历史会话导入工作区并继续对话
- **修复 Windows 桌面版应用内更新可能失败、无法自动重新打开**的问题
### v0.2.2-rc.2
- 2026-11-11
- **Git Worktree** 增强
	- 类copilot：新会话勾选
	- 归档会话默认清理符合条件的 Git 工作树（保留分支与提交）
- **SubAgent** 支持具名、多层协作；AgentTeam 可按会话开启，共用成员与任务面板
	- AgentTeam 改用统一的具名子代理，中断工具默认关闭；共享会话的进程要同步升级
- 优化
	- 侧栏：文件搜索，插件支持，终端接管
	- 聊天：更早消息，diff渲染，上下文渲染
	- 粘贴寻路，UI优化
	- Office 改用原生工具
- **网页搜索默认改用 DeepSeek Search API**
- 模式
	- PTC 按运行时限限制工具调用总量；Session 支持批量追加事件；工具失败有更明确的错误类型/代码
	- Creator 开发指引统一到 dsh-doc（旧技能名/路径需迁移）；Computer Use 默认不移动系统鼠标
### v0.2.2-rc.1
[Release v0.2.2-rc.1 · deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.2-rc.1)
- 汇总了自 v0.2.1-rc.5 以来的主要变更
	- 新增功能
		- **移动端适配大幅完善**
		- **引用插入**：可把聊天文本作为引用插入输入框，发送后显示紧凑预览
		- **复制完整会话**：完整历史可复制为 Markdown，附原始日志路径
		- **工作步骤收起后保留全部助手文字回复**
		- **统一右键/键盘菜单**：覆盖会话、工作区、侧栏，支持插件扩展
		- **文件预览常驻目录树**
		- **插件管理增强**：富文本详情页；支持更新第三方插件包，热更新失败可回滚旧版
		- **实验性插件**：`subagent_oar`（把任务交给本机 Codex/Claude CLI）、个性化推荐、开发者工具-统计、变更请求与工作树（在独立 Git worktree 中运行会话并查看/评审 diff）
	- 体验优化
		- 输入：消息草稿，附件上传，回答气泡
		- 回复：轮次，收起步骤，实时工具/子调用查看，搜索摘要
		- 插件支持：会话列表
		- 交互：模型选择
	- 问题修复
	- 其他变更
		- node.js版本需求
		- Session Projection 注册 API
		- 工具：可按步骤条件启用；原生与 PTC 工具执行拆分为 Agent 作用域插件
		- PTC Node 控制通道
		- “Git 工作树”并入“变更请求与工作树”/profile
		- “自定义插件市场”更名为“自定义插件索引”；自动化任务改为宿主级统一管理
	- 贡献
## v0.2.1
### v0.2.1-rc.5
- 调整了对话中“思考过程”的呈现方式
- 思维火花
	- 思考过程
	- 签名
	- 折叠过滤
	- 插件影响
	- 真正的思考文字
