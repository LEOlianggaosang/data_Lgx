# 项目
## vscode工作区
- 切换**vscode工作区**问题
	- .code-workspace一切换就更改？
		- 跟随编辑器
		- 新建窗口
	- 限制切文件夹路径返回父层级其他子层级选择
		- 输入删除刷新
	- 遗留git仓库：独立于工作区
	- 通过Keil Assistant打开项目切换工作区失败
		- c_cpp_properties.json文件工程打开路径D盘被删除
		- 项目目录中的.vscode文件夹
	- 以前的工作区记录与会话记录全部丢失
## gitflow工作流
- 工程问题
	- 工作区应该对应git仓库还是工程文件根目录？
	- **gitflow工作流原则**
	- **编译文件是否需要git忽略**
		- git库根.vscode增加settings.json
		- 工程启动文件夹.vscode单独存放c_cpp_properties.json
		- 存在代价git看不见
		- vscode文件资源可见
			- 灰色忽略
			- 橙色删除跟踪 `D`
			- 绿色新增跟踪 `U`
			- 黄色新增修改 `M`
		```
		- 之前全局忽略
		*.lst：一次编译生成太多/Listings
		*.obj：一次编译生成太多/Objects
		*.__i：一次编译生成太多/Objects
		*.uvgui.*：用户界面容易改变
		*.uvguix.*：用户界面容易改变
		extdll.iex：编译工具生成
		- 新增全局忽略
		*.log：vscode的keil插件生成keil-assistant.log/.vscode
		*.map：工程编译链接/Listings
		*.build_log.htm：编译文本提示/Objects编译生成1
		*.SBR：二进制文件/Objects编译生成2
		*.lnp：.obj文件路径/Objects编译生成3
		- 本地忽略
		同名无后缀：二进制文件/Objects编译生成4
		同名.hex：可烧录文件/Objects编译生成5
		- 保留
		!*.socprj：生成并命名的某版本烧录工程文件
		```
- 已存在但被新忽略的文件？--全局/局部/本地
	1. 全局忽略
		- `git config --global core.excludefile ~/.gitignore`
	2. 单个仓库下忽略（远程共用）
		- `.gitignore` #git
		- [ ] 语法/配置规则/指定模式
			- 忽略特定文件类型
			- 忽略特定目录
			- 忽略特定文件
			- 符号 [Git - gitignore Documentation](https://git-scm.com/docs/gitignore/zh_HANS-CN)
				- 强关联符号 `/` 与文件夹路径规则
					- 针对特定`.gitignore`
					- 限制在某一层级目录中
		- 无后缀文件？
			- 直接对文件右键增加忽略
			- 在与全路径名匹配的模式中，`**` 可能有特殊含义：
			```
			无效：只加一个名字会把自根目录沿途同名文件夹及内容清除
				SC95F8617B_8616B_BW1_R_NEWFORM0
				SC92F8463B_BW1_P
			无效：
				Objects/SC95F8617B_8616B_BW1_R_NEWFORM0
				Objects/SC92F8463B_BW1_P
			无效：
				奶瓶机显示板/**/Objects/SC95F8617B_8616B_BW1_R_NEWFORM0
				奶瓶机电源板/**/Objects/SC92F8463B_BW1_P
			有效：全路径
				奶瓶机显示板/SC95F8617B_8616B_BW1_R _NEWFORM0/SC95F8617B_8616B_BW1_R_NEWFORM0/Objects/SC95F8617B_8616B_BW1_R_NEWFORM0
				奶瓶机电源板/SC92F8463B_BW1_P/Objects/SC92F8463B_BW1_P
			有效：匹配任何文件或目录中直接位于目录"`Objects`"之下的"`*`"
				**/Objects/SC95F8617B_8616B_BW1_R_NEWFORM0
				**/Objects/SC92F8463B_BW1_P
			```
	3. 单个仓库下忽略（本机使用）
		- `.git/info/exclude`
	4. 忽略已跟踪文件的改动（本机使用）
		- **添加.gitignore配置之前有的文件已经被跟踪**
			- `git rm --cached 文件`
		- **尝试清理 Git 的缓存**
			- `git rm -r --cached .` 清空暂存区，不动工作区
			- `git add .`
		- **忽略/恢复跟踪**
			- `git update-index --assume-unchanged 文件路径`
			- `git update-index --no-assume-unchanged 文件路径`
	- 注意命令执行时终端的路径 `cd`
	- 只更改git跟踪不更改实际存在的文件
