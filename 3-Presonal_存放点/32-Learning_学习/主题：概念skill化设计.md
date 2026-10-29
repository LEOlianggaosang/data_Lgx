# 设计层：由我编辑
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
- 技能入口：设计层为生成层必要补齐的东西
1. 定义：一句话，设计用途，负责职责
2. 原则：关键设计理念，汇总
3. 边界：按需补充
4. 触发：调用内容根据情况而定，有特殊情况在后续页面提及
	- 联动触发：默认联动其他个人skill
	- 职责触发
	- 单指令显式触发：
	- 有内容显式触发：
## 衍生列表
- 生成/lgx-skill：把用户对库的的概念或需求转化为可复用的个人技能
	- 记录当前个人技能列表可供查阅调用，实际记录时仅名称
- 清净/lgx-clear：本轮会话忽略根目录规则
- 重建/lgx-rebuild：负责重建本库
	- 职责/lgx-job：负责根目录文件职责界定
		- 约束/lgx-agent：负责管理当前库核心规则
		- 计划/lgx-plan：负责当前库规划相关，引导工作流
			- 结构理论/lgx-design：负责管理本库设计时使用的理论
			- 知识流动/lgx-workflow：负责管理本库工作流
			- 流程图/lgx-flow：为本库规划设计流程图
		- 目录/lgx-index：负载本库目录相关，引导元数据设计
			- 树状视图/lgx-tree：为本库目录设计树状视图
			- 元数据/lgx-yaml：负责管理本库元数据相关
		- 差异/lgx-diff：负责明确本库相关差异，引导本库变更
			- 两库差异/lgx-vault：负责界定本库与灵感库的定义
			- 更改记录/lgx-change-log：负责管理本库更改记录相关规则
			- 会话记录/lgx-session-log：负责管理本库更改会话记录相关规则
		- 说明/lgx-readme：负载本库说明相关，引导入口
			- 声明/lgx-statement：负责归纳本库概念，列出可供调用列表
			- 源控/lgx-git：负责管理本库与git有关的策略
			- 知识库/lgx-obsidian：负责管理本库与obsidian有关的策略
	- 结构/lgx-struct：负责本库目录文件夹结构性设计，负责分布式约束概念
		- 收集/lgx-inbox
		- 项目/lgx-project
		- 领域/lgx-area
		- 资源/lgx-resource
		- 归档/lgx-archive
		- 系统/lgx-system
## 设计原则补充
根据每个个人技能的补充设定在这里进行编辑，每轮增量补充
- lgx-skill：这部分后续个人技能也需要参考
	- 以前缀区分是否为个人skill
	- 与库内容解耦，不绑定某个知识库
	- 各skill模块化拼接，职责查重，自包含边界
	- 规则在skill里面内化，实际在库中的输出描述简化
- lgx-rebuild
	- 调用lgx-clear忽视规则
	- 清理根目录文件与目录，界定清理规则
	- 调用skill进行重建
- lgx-design
	- 当前是CODE-PARA
- lgx-vault
	- 两库分工
	- 编辑主体
	- 日记用途
- lgx-agent
	- 直接负责 AGENT.md
	- 改前阅读根目录部分：涉及规划看plan，涉及目录看index，涉及更改看diff，涉及概念与应用时看readme，提取 job 根目录文件列表
	- 模块化描述参考 lgx-skill
	- 结构化描述参考 lgx-struct
- lgx-plan
	- 直接负责 PLAN.md
	- 提取 lgx-design 的设计理论
	- 参考 lgx-job 与 lgx-struct 对规划根目录文件与目录的要求
	- 参考 lgx-workflow 对工作流规划，确定本库规划与归位参考
	- 用 lgx-flow 附加图示
- lgx-diff
	- 直接负责 DIFF.md
	- 个人技能名称列表，关联 lgx-skill
	- 更改记录相关，关联 lgx-change-log，补充入口，实质变更归类变更/答疑不计
	- 会话记录相关，关联 lgx-session-log，补充入口
- lgx-index
	- 直接负责 INDEX.md
	- 骨架创建调度，关联 lgx-job 与 lgx-struct，首次创建时预留的骨架内容
	- 元数据相关，关联 lgx-yaml，补充入口，
- lgx-tree
	- 目录树视图：库内容精确到文件夹，隐藏文件夹只列一级
	- 骨架：根目录文件+目录
	- 根文件入口：别名
	- 内容入口：别名，精确到二级
- lgx-yaml
	- 具体维护放在系统文件夹中
	- 在index中提及
- lgx-readme
	- 接负责 README.md
	- 概念声明：与 lgx-statement 相关
	- 要求更改完成前核验且未经明确授权不提交或推送，与 lgx-git 相关
	- 知识库要求与 lgx-obsidian 相关
	- 骨架入口用obsidian格式链接
- lgx-statement
	- 大部分概念都与个人技能相关，因为个人技能就是本库的概念skill化
- lgx-struct
	- 负责概念：分布式约束
	- 用命名格式强调结构化文件的重要性
	- 每个分支目录都有对应的个人技能关联
- lgx-inbox
- lgx-project
- lgx-area
- lgx-resource
- lgx-archive
- gx-system
## 根文件模版
- 与 lgx-job 相关
- AGENT/别名：约束
	- **核心规则（极致精简/改前阅读/模块化/结构化）**
- PLAN/别名：规划
	- 章节：**结构理论+本库规划+工作流**
- INDEX/别名：导航
	- 章节：**目录树视图+骨架创建调度+元数据**
- DIFF/别名：差异
	- 章节：**个人skill列表+两库差异+更改记录+会话记录**
- README/别名：说明
	- 章节：**概念声明+应用边界+根文件入口+目录内容入口**
## 目录模版
- 与 lgx-struct 相关
	- 结构说明
		- 隐藏文件夹：点号命名
		- 目录文件夹：主要负责对象
		- 根目录文件：与 lgx-job 相关
	- 格式说明
		- 结构化文件用英文命名，强调固有属性
			- 根目录文件：使用大写英文
			- 目录文件夹：开头使用大写英文
			- 目录内文件：使用小写英文
		- 正文文件用中文命名
	- 职责说明
		- 核心约束集中根目录约束
		- 库内一级文件夹存放就近维护的具体细则：INSTRUCTIONS
		- 二级文件夹存放就近维护的具体细则：Instructions，大写开头
		- 后续文件夹有需要说明使用小写
	- 二级文件夹通用结构拆解
		- 介绍/说明/分布式约束：Instructions
		- 通用结构性笔记拆解：用小写英文命名，要求互不干涉
			- 任务/待办
			- 看板/总览
			- 历史：有历史版本存放进三级文件夹中
			- 计划
			- 关键决策
			- 列表/目录/入口
		- 衍生文件拆分进三级文件夹中，作为正文管理
# 生成层：由agent编辑
## lgx-skill
## lgx-clear
## lgx-rebuild
## lgx-job