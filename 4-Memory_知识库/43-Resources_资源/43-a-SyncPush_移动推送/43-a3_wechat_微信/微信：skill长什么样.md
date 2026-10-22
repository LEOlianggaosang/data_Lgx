#Agent/Skill
# 描述格式/目录层次

| 链接  | [Agent Skills 完全指南：从概念入门、机制原理到应用实践](https://mp.weixin.qq.com/s/zp-CENUz9gTeV1HGirxAKg) |
| :-- | :------------------------------------------------------------------------------------- |
| 时间  | 2026-10-22                                                                             |
| 标记  | 资料补充                                                                                   |
| 关键词 | skill                                                                                  |
| 概述  | 理解/机制/结构/设计/区别/应用                                                                      |
| 备注  |                                                                                        |
- 是什么
	- 使用说明书
	- 图书馆查资料
- 为什么
	- 每次可复用prompt
	- 项目级规则md精简上下文长度：token成本，注意力分散
	- 模块化：按需/渐进式加载
- 核心机制：渐进式披露
	- 目录/元数据：md
		- `name`
		- `description`
		- 启动时加载/获知能力
	- 指令触发：分支目录
		- `references`
		- `scripts`
		- `resources`
- ==🟣文件结构==
	```
	my-skill/
	├── SKILL.md              # 主文件负责以图识别流程路由（必须）
	├── scripts/              # 可执行脚本（可选）
	├── references/           # 详细参考文档（可选，按需加载）
	├── resources/            # 模板、清单等资源（可选）
	└── examples/             # 示例（可选）
	```
	- 分层关系
		• 主文件层/主控层：由主文件负责意图识别与流程路由（SKILL.md 文件） 
		• 知识层或引用层：由参考文件提供垂直领域的深度知识与基准（references/下的文件）
		• 规范层：由模板确保输出格式的高度一致性（resources/或templates/）
		• 执行层：由脚本封装确定性的计算逻辑，消除幻觉风险（scripts/文件）
	- 示例
- ==🟣Frontmatter格式规范==
	```
	---
	name:my-skill # 唯一标识符，小写连字符
	description:  # 最关键——LLM 通过它决定是否加载
	---
	# 是什么
	## 参考对象
	## 分析流程
		推理
		收集
		处理依据
		报告位置
	## 输出规范
		展示过程
		解释含义
		提供信息
		给出建议
		主动请求
	```
	- Description 构成：技能解决的问题+什么时候触发+触发词
	- 示例
- 设计闭环
	- 持续打磨：遵循经典提示词工程迭代的闭环
		- 想法 → 实现 → 实验 → 分析 → 迭代循环
		- Skill 的设计就是不断在这个闭环里收敛，直到 AI 能稳定、按预期地执行
	- 定义：一句话描述 + 触发短语
	- 编写：可运行的 Skill 目录
	- 评估：运行日志 / 产出物，验证报告
	- 诊断：问题清单 + 优化点
- 概念引申
	- Prompt 封装
	- MCP 互补
	- Node.js 脚本
- skill应用
	- 参考
		- https://skillhub.cn/skills?sortBy=score  SkillHub 技能市场
		- https://github.com/anthropics/skills  anthropics skills
		- https://www.skills.sh/ The Open Agent Skills Ecosystem
		- skillsmp.com 最大的 Skill 市场
		- https://github.com/alirezarezvani/claude-skills Claude 技能市场
		- VoltAgent/awesome-agent-skills：500+ Skill 索引
		- travisvn/awesome-claude-skills：精选列表
	- 使用
		- 工作区 `.<agentName>/skills/`
		- 智能体根目录
	- 交付
		```
		output/<技能名>/
		├── docs/              # 设计文档 + 实现计划
		└── skill/<技能名>/
			├── SKILL.md       # 技能入口（触发词、流程指令）
			├── scripts/       # 执行层：确定性计算脚本
			├── reference/     # 知识层：按需加载的参考知识
			├── templates/     # 规范层：标准化输出模板
			└── VERIFICATION.md # 验证报告
		```