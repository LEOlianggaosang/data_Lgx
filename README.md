#obsidian #知识库/理论 
> [!summary] 库类型
> 1. 个人库部分 # 同步 # 移动 # 按照核心需求自定义
> 2. 知识库部分 # 源控  # 理论
> 3. 项目库种类 # 智能体
[[主题：obsidian仓库构建#理念]]
# 仓库目录[^1]
	├── .git/ %% 自动生成/隐藏 %%  
	├── *.gitignore* %% 自动生成/隐藏 %%
	├── .vscode/ %% 自动生成/隐藏 %% 
	├── .obsidian/ %% 自动生成/隐藏 %% 
	├── 0-InBox/ # 收件箱 %% 缓存区 %%
	├── Files/ # 附件 %% 路径依赖 %%
	│ ├── Files/ # 图片与文档
	│ └── LFS/ # 音频与视频
	├── Templates/ # 模板 %% 路径依赖 %%
	├── Bases/ # 数据库 %% 路径依赖 %%
	├── Diff/ # diff文件目录 %% git/LLM %%
	├── AGENTS.md # 核心规则 %% git/LLM %%
	└── README.md # 使用指南 %% git/LLM %%

[[40B-Folder_目录备份#^cae214]]
# 仓库功能
1. 输入（断点/推送/传输/日记/吸收）：`0-Inbox_收件箱`/ `1-Dayly_日记本`
2. 处理（工作区/分解任务）：`2-Space_工作区`
3. 存放（存放点/分类）：`3-Presonal_存放点`
4. 关联（知识库/编织区）：`4-Memory_知识库`
5. 转化（agent协助）：`5-Distill_提炼`/`6-Express_表达`
# 个人需求[^2]
1. 日记/灵感/模版： `12-TimeLine_时间线`/`0-Inbox_收件箱`/`Templates`
2. 社会/对立：`35-Social_社会`
3. 学习/知识：`32-Learning_学习`/`33-ToDo_策略`
4. 工作/策略：`31-JUWEN_钜文`
5. 娱乐/游戏：`34-Relax_娱乐`
6. 生活/消费：`36-Life_生活`
7. 个人/隐私：`37-Profiles_隐私`
# GTD映射
1. Capture：`0-Inbox_收件箱`
2. Process：`1-Dayly_日记本`
3. Organize：`2-Space_工作区`
4. Review：`3-Presonal_存放点`
5. Do：`4-Memory_知识库`
# CODE映射
1. C：`0-Inbox_缓存区`/`1-Dayly_日记本`
2. O：`4-Memory_知识库`
3. D：`5-Distill_提炼`
4. E：`6-Express_表达`
# PARA映射
1. P：`41-Projects_项目`
2. A：`42-Areas_领域`
3. R：`43-Resources_资源`
4. A：`44-Archives_归档`
# 卡片盒映射
1. 闪念笔记：`1-Dayly_日记本`
2. 文献笔记：`43-Resources_资源`
3. 永久笔记：`51-Cards_卡片`
4. 索引笔记：`41-Projects_项目`/`42-Areas_领域`
# DIKW映射
1. 数据（Data）：`1-Dayly_日记本`
2. 信息（Information）：`3-Presonal_存放点`
3. 知识（Knowledge）：`4-Memory_知识库`
4. 智慧（Wisdom）：`53-Wisdom_智慧`
# LLM映射
1. raw：`44-a-raw_原始素材`/`Templates`
2. wiki：`61-Wiki_个人维基`
3. prompt：`AGENTS`/`README`
4. chat： `62-Chat_会话记录`

[^1]: 格式： 文件夹/ # 别称 `%% 存在方式 %%`

[^2]:  待处理：
	移动：日常/对立/策略/知识/游戏/收藏
	吸收：git体系/gitbash命令行/vscode容器/work工作规划/vibecoding知识树
