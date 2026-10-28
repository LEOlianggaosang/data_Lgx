# 设计层
## skill格式
- 结构：内容拆解
```
lgx-<skill>/
├── SKILL.md              # 技能入口（触发词、流程指令）（必须）
├── scripts/              # 执行层：可执行脚本（可选）
├── references/           # 知识层：按需加载的参考知识、设计文档（可选）
├── resources/            # 缓冲层：设计文档、实现计划（可选）
├── histroy/              # 缓冲层：历史记录、历史版本（可选）
├── templates/            # 规范层：标准化输出模板、示例（可选）
└── VERIFICATION.md # 验证报告
```
- 入口：必要补齐的东西
1. 定义
2. 原则
3. 边界
4. 触发
	- 联动触发
	- 显式触发
5. 调用内容
## 衍生列表
- 生成/lgx-skill：
- 重建/lgx-rebuild：
	- 职责/lgx-job
		- 约束/lgx-agent
		- 计划/lgx-plan
			- 结构理论/lgx-CODE-PARA
			- 流程图/lgx-flow
		- 目录/lgx-index
			- 树状视图/lgx-tree
		- 差异/lgx-diff
		- 说明/lgx-readme
			- 声明/lgx-statement
	- 结构/lgx-struct
		- 收集/lgx-inbox
		- 项目/lgx-project
		- 领域/lgx-area
		- 资源/lgx-resource
		- 归档/lgx-archive
		- 系统/lgx-system
## 根文件模版
- AGENT/别名：约束
	- 核心规则（极致精简/根目录/模块化/结构化）
	- 由 lgx-agent 直接负责：`极致精简` 维持原状。`根目录`描述提取 job 根目录文件列表，用于要求改前阅读，并且要求完成前核验且未经明确授权不提交或推送。模块化描述参考 lgx-skill。结构化描述参考 lgx-struct。
	- 改前阅读根目录列表/关联lgx-job
	- skill化描述/关联lgx-skill
	- 结构化描述/关联lgx-struct
- PLAN/别名：计划
	- 结构理论+骨架创建调度+工作流
	- 由 lgx-plant 直接负责：提取lgx-CODE-PARA的设计理论，提取 lgx-job 对五大根目录文件明确的职责，规划五大根目录文件+六大目录的骨架，由此建立工作流规划，用 lgx-flow 附加图示
	- 骨架创建
		- 五大根规划界定/关联lgx-struct
		- 六大目录规划/关联lgx-job
- INDEX/别名：目录
- DIFF/别名：差异
	- 调用列表参考/关联lgx-skill
- README：说明

- INDEX＝目录与导航，归位参考
- DIFF＝变更摘要与记录入口，实质变更归类变更/答疑不计
- README＝概念/用途/边界
## skill设计
### lgx-skill
- 定义：把用户对库的的概念或需求转化为可复用的个人技能
- 原则
	- 与库内容解耦，各skill模块化拼接
	- 规则在skill里面定好/内化，实际在库中的输出简化描述
- 边界
	- 以前缀区分是否为个人skill，作为个人技能设计入口/显式调用
	- 记录当前个人技能列表，清理并联动其他skill
- 触发
	- 联动触发：
		- 
	- 显式触发：
		- 单指令：优化自身
		- 有内容：
- 调用内容
### lgx-rebuild
- 定义：前置技能，检查职责仅为判断当前工作树是否满足起始条件
- 原则
- 边界
- 触发
	- 联动触发
	- 显式触发
- 调用内容
### lgx-job
- 定义：根目录文件职责界定
	- 根目录内容列表
		- AGENT＝核心约束：极致精简/根目录/模块化/结构化
		- PLAN＝结构理论/骨架创建调度/工作流
		- INDEX＝目录与导航，归位参考
		- DIFF＝变更摘要与记录入口，实质变更归类变更/答疑不计
		- README＝概念/用途/边界
	- 个人技能接口
		- rebuild重建时：优先调取获取根目录列表，随后拉取对应根目录skill。顺序是lgx-rebuild，lgx-job，lgx-agent，lgx-plan，lgx-index，lgx-diff，lgx-readme
		- lgx-job 斜杠指令触发审核根目录文件
			- 检查时：根文件是否职责混杂、重复或缺少必要引用；根据拟议变更判断内容归属、受影响根文件与对应处理接口。供用户和个人技能调用，均零写入。输出“证据/归属/联动对象/建议接口/待确认项”。
			- 调整时：调用对应skill，具体修改仍由对应技能负责
- 原则
- 边界
- 触发
	- 联动触发
	- 显式触发
- 调用内容
### lgx-agent
- 定义
- 原则
- 边界
- 触发
	- 联动触发
	- 显式触发
- 调用内容