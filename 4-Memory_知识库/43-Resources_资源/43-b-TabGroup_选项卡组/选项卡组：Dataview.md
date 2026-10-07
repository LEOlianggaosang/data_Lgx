---
type: tab
owners: PARA
workspace: lgx
color: 紫色
tags:
  - Edge
  - Obsidian
  - Dataview
---
## 目标
从 [[选项卡组：Obsidian拓展插件]]中派生，专门研究此插件
## 标签页
### 搜索 `dataview`
- [工具软件 - Obsidian 达人成长之路 1：使用终极工具 Dataview 释放笔记库的潜力 · DQL查询语言 - wujie520303 - SegmentFault 思否](https://segmentfault.com/a/1190000044914761)
- [obsidian系列第六篇 -- Dataview 插件使用 - 知乎](https://zhuanlan.zhihu.com/p/2047340127291283324)
	1. 入门：语法/库结构/配置/json/**插件**/模版 [Obsidian 新手入门：安装、结构到第一篇双链笔记，一篇带你完整上手 - 知乎](https://zhuanlan.zhihu.com/p/2032373258398479175)
	2. 提效：信息结构 [如何使用Obsidian软件？ - 知乎](https://www.zhihu.com/question/401972085/answer/2026987831516513129)
		- 顶层规划
			```
			- 00总览/入口
				- 知识地图/我从哪里进入整个知识库
				- 复习面板
				- 最近更新
				- 文章录入流程/新文章以后怎么稳定录入
			- 10收件/未完成
				- Daily Notes 只负责捕捉
				- 只要进入正式知识库，就必须补完整元数据
			- 20领域/长期关注主题
				- 系列归类整理
			- 30资源库/沉淀主体
				- 拆分扩展
			- 90归档/过时、被替代、暂时不用
				- status: archived 状态变更/移动
			- 99模版/新内容一进库就符合规则
				- 文章/系列/知识/收件箱
			```
		- 关系设计
			```
			- 领域：这批内容长期属于哪条认知主线？
			- 专题：这是不是一篇独立可读的文章？
			- 系列：这批内容是不是按顺序学习更有价值？
			```
		- 命名规则：独立与系列
		- 链接体系：
			```
			- 每篇文章至少回链到知识地图
			- 系列文章必须回链到系列页
			- 领域页负责“长期入口”，MOC 负责“资源索引”
			```
		- 标签设计：过多/并存/难记，前缀系统
		- 插件保留：Dataview/拉取
			```
			- 某个目录下的文章
			- 某个系列下的文章
			- 某个领域下最近更新的内容
			```
		- frontmatter：统一元数据
			```text
			---
			title:
			domain:
			type:
			status:
			series:
			order:
			created:
			updated:
			next_review:
			tags:
			---
			这套字段解决的是 5 个问题：
			- 这篇文章属于哪个领域
			- 它是专题、系列还是系统页
			- 它现在是活跃内容还是归档内容
			- 它需不需要按顺序排
			- 它什么时候应该再次复习
			```
		- 工作流：新增/沉淀/补齐/入口
		- 智能体辅助
			```
			1. 设计知识库结构
			2. 批量迁移文章/判断归属
			3. 统一标题风格/补齐元数据
			4. 维护地图与系列
			5. 持续优化目录策略
			```
		- 总结：结构、入口、元数据、工作流
			```
			- 入口要明确
			- 结构要可扩展
			- 命名要统一
			- 元数据要稳定
			- 插件要克制
			- 日常维护要有流程
			```
	3. 链接/对应留空/同步更新，**脚本** [淘汰文件夹！我用双向链接重构知识体系，Obsidian让我效率翻倍 - 知乎](https://zhuanlan.zhihu.com/p/2033105619457156419) 
		- 碎片补全 [[碎片：Obsidian功能 链接]]
		- 图谱结构/点/团/桥/孤儿 [Obsidian 知识图谱与反向链接：如何把零散笔记变成知识网络？ - 知乎](https://zhuanlan.zhihu.com/p/2035312284680069692)
		- 碎片补全 [[碎片：Obsidian功能 知识图谱]]
- [[Obsidian/可视化/插件] Obsidian Dataview 插件: 把 Markdown 笔记变成可查询数据库 —— DQL 与 JavaScript 双引擎驱动的动态视图插件 - 千千寰宇 - 博客园](https://www.cnblogs.com/johnnyzen/p/22630494)
- [Obsidian Dataview终极指南：5个简单步骤将笔记库变为智能数据库-CSDN博客](https://blog.csdn.net/gitblog_00393/article/details/160275659)
#### 搜索 `dataview 怎么打开`
- [如何在Obsidian中正确配置Dataview插件？编程语言-CSDN问答](https://ask.csdn.net/questions/8683259)
- [Obsidian 插件（一）：DataView 的使用 - Kenny_LZK - 博客园](https://www.cnblogs.com/liuzhongkun/p/17062887.html)
