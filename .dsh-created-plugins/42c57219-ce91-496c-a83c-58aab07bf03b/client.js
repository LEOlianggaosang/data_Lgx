window.__ModuleLoader__.load({
  id: '@dsh-local/view-42c57219-ce91-496c-a83c-58aab07bf03b',
  factory(require) {
    /**
     * Browser half of the knowledge-tree design editor.
     *
     * Registers one right-Sidebar page type (`view-42c57219-knowledge-tree`) with
     * a guide entry, its body and its chip title, keeps the draft in this
     * browser's localStorage under a plugin-owned key, and opens the page once
     * per on-screen Session. It reads no workspace files and calls no Host
     * service: the design tree is data authored by the user in this panel.
     */
    const React = require('react')
    const h = React.createElement
    const { useEffect, useMemo, useRef, useState } = React

    const PKG = '@dsh-local/view-42c57219-ce91-496c-a83c-58aab07bf03b'
    /** Copy namespace registered on the Client locale service. */
    const NS = 'knowledgeTreeDesign'
    /** Page kind: unique, prefixed with this package's short id. */
    const KIND = 'view-42c57219-knowledge-tree'
    /** Tab-type identity; also the key its body and title register under. */
    const TAB_ID = PKG + '/knowledge-tree'
    /** Plugin-owned browser storage; not a Session layout key. */
    const STORAGE_KEY = 'dsh.knowledge-tree-design.v1'
    const STORAGE_VERSION = 1
    const MAX_DEPTH = 40
    const MAX_NODES = 4000
    /** Debounce for name typing; structural edits save immediately. */
    const SAVE_DELAY = 300
    const NEW_NAME_EN = 'NewChild'
    const NEW_NAME_ZH = '新节点'

    /** The design drawing this page starts from, exactly as authored. */
    const INITIAL_TREE = {
  "en": "Tree",
  "zh": "知识树",
  "center": true,
  "children": [
    {
      "en": "Job",
      "zh": "工作领域",
      "children": [
        {
          "en": "Occupational",
          "zh": "职业相关",
          "children": [
            {
              "en": "JuWen",
              "zh": "钜文",
              "center": true
            },
            {
              "en": "ProductType",
              "zh": "产品类型",
              "children": [
                {
                  "en": "DishWasher",
                  "zh": "柜机",
                  "children": [
                    {
                      "en": "Series1",
                      "zh": "系列1",
                      "children": [
                        {
                          "en": "60MachineOriginal",
                          "zh": "60机原体",
                          "children": [
                            {
                              "en": "ContentType",
                              "zh": "内容类型",
                              "children": [
                                {
                                  "en": "Spec",
                                  "zh": "规格书"
                                },
                                {
                                  "en": "Software",
                                  "zh": "软件"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "en": "45MachineVariant",
                          "zh": "45机变体"
                        },
                        {
                          "en": "60MachineNewPanel",
                          "zh": "60机新面板"
                        }
                      ]
                    },
                    {
                      "en": "Series2",
                      "zh": "系列2",
                      "children": [
                        {
                          "en": "60MachineAutoDoor",
                          "zh": "60机嵌入式自动门"
                        }
                      ]
                    }
                  ]
                },
                {
                  "en": "BottleWasher",
                  "zh": "奶瓶机",
                  "children": [
                    {
                      "en": "Development",
                      "zh": "软件开发",
                      "children": [
                        {
                          "en": "Version0",
                          "zh": "版本0"
                        },
                        {
                          "en": "Version1",
                          "zh": "版本1"
                        },
                        {
                          "en": "Version2",
                          "zh": "版本2"
                        }
                      ]
                    },
                    {
                      "en": "ProblemSolving",
                      "zh": "问题处理"
                    }
                  ]
                }
              ]
            },
            {
              "en": "Collaborator",
              "zh": "协作方",
              "children": [
                {
                  "en": "HuaTuoDesign",
                  "zh": "华拓设计"
                },
                {
                  "en": "ZhuoAoHardware",
                  "zh": "卓奥硬件"
                }
              ]
            }
          ]
        },
        {
          "en": "Professional",
          "zh": "专业相关",
          "children": [
            {
              "en": "EmbeddedSoftware",
              "zh": "嵌入式软件",
              "children": [
                {
                  "en": "C51System",
                  "zh": "C51系统",
                  "children": [
                    {
                      "en": "C51",
                      "zh": "C51",
                      "center": true
                    }
                  ]
                },
                {
                  "en": "STM32System",
                  "zh": "STM32系统",
                  "children": [
                    {
                      "en": "STM32",
                      "zh": "STM32",
                      "center": true
                    }
                  ]
                },
                {
                  "en": "RTOSSystem",
                  "zh": "RTOS系统",
                  "children": [
                    {
                      "en": "RTOS",
                      "zh": "RTOS",
                      "center": true
                    }
                  ]
                },
                {
                  "en": "LinuxSystem",
                  "zh": "Linux系统",
                  "children": [
                    {
                      "en": "Linux",
                      "zh": "Linux",
                      "center": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "en": "Ability",
          "zh": "能力相关",
          "children": [
            {
              "en": "AbilityType",
              "zh": "能力种类",
              "children": [
                {
                  "en": "Modularization",
                  "zh": "模块化"
                },
                {
                  "en": "Certification",
                  "zh": "认证"
                },
                {
                  "en": "Hardware",
                  "zh": "硬件"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "en": "Knowledge",
      "zh": "知识领域",
      "children": [
        {
          "en": "SystemKnowledge",
          "zh": "系统知识",
          "children": [
            {
              "en": "ToolType",
              "zh": "工具类别",
              "children": [
                {
                  "en": "Obsidian",
                  "zh": "黑曜石",
                  "children": [
                    {
                      "en": "Resource",
                      "zh": "资料",
                      "children": [
                        {
                          "en": "Syntax",
                          "zh": "语法"
                        },
                        {
                          "en": "Feature",
                          "zh": "功能"
                        },
                        {
                          "en": "Usage",
                          "zh": "应用"
                        },
                        {
                          "en": "Enhance",
                          "zh": "强化"
                        }
                      ]
                    },
                    {
                      "en": "Format",
                      "zh": "文档格式",
                      "children": [
                        {
                          "en": "Markdown",
                          "zh": "文本"
                        },
                        {
                          "en": "YAML",
                          "zh": "元属性"
                        },
                        {
                          "en": "Mermaid",
                          "zh": "流程图"
                        }
                      ]
                    }
                  ]
                },
                {
                  "en": "Vscode",
                  "zh": "编辑器",
                  "children": [
                    {
                      "en": "Component",
                      "zh": "组成",
                      "children": [
                        {
                          "en": "Resource",
                          "zh": "资料"
                        },
                        {
                          "en": "Extension",
                          "zh": "插件"
                        },
                        {
                          "en": "Copilot",
                          "zh": "副驾驶",
                          "children": [
                            {
                              "en": "Session",
                              "zh": "会话",
                              "children": [
                                {
                                  "en": "SessionManage",
                                  "zh": "会话管理"
                                },
                                {
                                  "en": "SessionParse",
                                  "zh": "会话解析"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "en": "Edge",
                  "zh": "浏览器",
                  "children": [
                    {
                      "en": "Component",
                      "zh": "组成",
                      "children": [
                        {
                          "en": "Microsoft",
                          "zh": "微软"
                        },
                        {
                          "en": "Frontend",
                          "zh": "前端"
                        },
                        {
                          "en": "Backend",
                          "zh": "后端"
                        }
                      ]
                    }
                  ]
                },
                {
                  "en": "Agent",
                  "zh": "智能体",
                  "children": [
                    {
                      "en": "AgentType",
                      "zh": "知识类型",
                      "children": [
                        {
                          "en": "AgentConcept",
                          "zh": "概念",
                          "children": [
                            {
                              "en": "ConceptType",
                              "zh": "概念分类",
                              "children": [
                                {
                                  "en": "Constraint",
                                  "zh": "约束文件"
                                },
                                {
                                  "en": "Skill",
                                  "zh": "技能"
                                },
                                {
                                  "en": "SessionMeta",
                                  "zh": "会话元"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "en": "AgentTheory",
                          "zh": "理论"
                        },
                        {
                          "en": "AgentFramework",
                          "zh": "框架",
                          "children": [
                            {
                              "en": "FrameworkType",
                              "zh": "框架分类",
                              "children": [
                                {
                                  "en": "DeepSeek",
                                  "zh": "DS"
                                },
                                {
                                  "en": "WorkBuddy",
                                  "zh": "WB"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "en": "AgentAssist",
                          "zh": "辅助"
                        }
                      ]
                    }
                  ]
                },
                {
                  "en": "Git",
                  "zh": "源代码管理",
                  "children": [
                    {
                      "en": "KnowledgeType",
                      "zh": "知识类型",
                      "children": [
                        {
                          "en": "gitTheory",
                          "zh": "理论",
                          "children": [
                            {
                              "en": "TheoryType",
                              "zh": "理论分类",
                              "children": [
                                {
                                  "en": "gitWebsite",
                                  "zh": "官网"
                                },
                                {
                                  "en": "gitWorkflow",
                                  "zh": "工作流"
                                },
                                {
                                  "en": "gitAdvanced",
                                  "zh": "进阶"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "en": "gitApplication",
                          "zh": "应用"
                        },
                        {
                          "en": "gitSCM",
                          "zh": "SCM"
                        },
                        {
                          "en": "Github",
                          "zh": "GitHub"
                        },
                        {
                          "en": "Gitlens",
                          "zh": "GitLens",
                          "children": [
                            {
                              "en": "Content",
                              "zh": "内容",
                              "children": [
                                {
                                  "en": "GitlensResource",
                                  "zh": "资料"
                                },
                                {
                                  "en": "GitkrakenWebsite",
                                  "zh": "官网"
                                },
                                {
                                  "en": "GitlensExtension",
                                  "zh": "插件"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "en": "Steam",
                  "zh": "平台",
                  "children": [
                    {
                      "en": "Component",
                      "zh": "组成",
                      "children": [
                        {
                          "en": "Value",
                          "zh": "发行商",
                          "children": [
                            {
                              "en": "Device",
                              "zh": "设备",
                              "children": [
                                {
                                  "en": "SteamDeck",
                                  "zh": "掌机"
                                },
                                {
                                  "en": "SteamController",
                                  "zh": "手柄"
                                },
                                {
                                  "en": "SteamMachine",
                                  "zh": "主机"
                                },
                                {
                                  "en": "SteamFrame",
                                  "zh": "VR"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "en": "SteamClient",
                          "zh": "客户端"
                        },
                        {
                          "en": "SteamStore",
                          "zh": "商店"
                        },
                        {
                          "en": "SteamOS",
                          "zh": "系统"
                        },
                        {
                          "en": "SteamLink",
                          "zh": "串流"
                        },
                        {
                          "en": "SteamInput",
                          "zh": "原生"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "en": "BuildingKnowledge",
          "zh": "构建知识",
          "children": [
            {
              "en": "BuildingType",
              "zh": "构建类型",
              "children": [
                {
                  "en": "Thinking",
                  "zh": "思考"
                },
                {
                  "en": "ToDo",
                  "zh": "待办策略"
                },
                {
                  "en": "Solution",
                  "zh": "应用"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "en": "Relax",
      "zh": "娱乐领域",
      "children": [
        {
          "en": "Games",
          "zh": "主机游戏",
          "children": [
            {
              "en": "Publisher",
              "zh": "厂商",
              "children": [
                {
                  "en": "CAPCOM",
                  "zh": "卡普空",
                  "children": [
                    {
                      "en": "Series",
                      "zh": "系列",
                      "children": [
                        {
                          "en": "MHRise",
                          "zh": "怪猎崛起",
                          "children": [
                            {
                              "en": "ContentType",
                              "zh": "内容分类",
                              "children": [
                                {
                                  "en": "Weapon",
                                  "zh": "武器"
                                },
                                {
                                  "en": "Skill",
                                  "zh": "技能"
                                },
                                {
                                  "en": "Monster",
                                  "zh": "怪物"
                                },
                                {
                                  "en": "Progress",
                                  "zh": "进度"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "en": "MHWorld",
                          "zh": "怪猎世界"
                        },
                        {
                          "en": "MHWild",
                          "zh": "怪猎荒野",
                          "children": [
                            {
                              "en": "ContentType",
                              "zh": "内容分类",
                              "children": [
                                {
                                  "en": "WildEndgame",
                                  "zh": "上位终盘"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "en": "MHStories2",
                          "zh": "怪猎物语2"
                        },
                        {
                          "en": "MHStories3",
                          "zh": "怪猎物语3"
                        }
                      ]
                    }
                  ]
                },
                {
                  "en": "2KGames",
                  "zh": "2K",
                  "children": [
                    {
                      "en": "Series",
                      "zh": "系列",
                      "children": [
                        {
                          "en": "Borderlands4",
                          "zh": "无主之地4"
                        },
                        {
                          "en": "Borderlands3",
                          "zh": "无主之地3"
                        }
                      ]
                    }
                  ]
                },
                {
                  "en": "ProjectRed",
                  "zh": "CDPR",
                  "children": [
                    {
                      "en": "Series",
                      "zh": "系列",
                      "children": [
                        {
                          "en": "2077",
                          "zh": "赛博朋克2077"
                        }
                      ]
                    }
                  ]
                },
                {
                  "en": "Remedy",
                  "zh": "绿美迪",
                  "children": [
                    {
                      "en": "Series",
                      "zh": "系列",
                      "children": [
                        {
                          "en": "Control",
                          "zh": "控制共振"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "en": "Fantasy",
          "zh": "奇幻作品",
          "children": [
            {
              "en": "Type",
              "zh": "作品类型",
              "children": [
                {
                  "en": "Novel",
                  "zh": "小说"
                }
              ]
            }
          ]
        },
        {
          "en": "Abstract",
          "zh": "抽象模因"
        }
      ]
    },
    {
      "en": "Social",
      "zh": "社会领域",
      "children": [
        {
          "en": "PlatformContent",
          "zh": "平台内容"
        },
        {
          "en": "Event",
          "zh": "事件与人物"
        },
        {
          "en": "Discourse",
          "zh": "话术与观念"
        }
      ]
    },
    {
      "en": "Life",
      "zh": "生活领域",
      "children": [
        {
          "en": "Purchase",
          "zh": "消费",
          "children": [
            {
              "en": "Selection",
              "zh": "选型",
              "children": [
                {
                  "en": "ProductSelection",
                  "zh": "商品选型"
                }
              ]
            }
          ]
        },
        {
          "en": "Experience",
          "zh": "经验"
        },
        {
          "en": "Problem",
          "zh": "问题处理",
          "children": [
            {
              "en": "ProblemType",
              "zh": "问题类型",
              "children": [
                {
                  "en": "AfterSale",
                  "zh": "售后"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "en": "Profiles",
      "zh": "隐私领域",
      "children": [
        {
          "en": "XP",
          "zh": "XP",
          "children": [
            {
              "en": "Type",
              "zh": "类型",
              "children": [
                {
                  "en": "Platform",
                  "zh": "平台"
                },
                {
                  "en": "Author",
                  "zh": "作者"
                },
                {
                  "en": "Work",
                  "zh": "作品"
                }
              ]
            }
          ]
        },
        {
          "en": "Bill",
          "zh": "账单"
        },
        {
          "en": "ID",
          "zh": "账号"
        }
      ]
    }
  ]
}

    const CSS = `
.kt-panel{display:flex;flex-direction:column;height:100%;min-height:0;color:var(--dsw-alias-label-primary);font-family:var(--dsw-font-family);font-size:13px;line-height:1.4}
.kt-head{display:flex;flex-direction:column;gap:6px;padding:10px 12px 8px;border-bottom:1px solid var(--dsw-alias-border-l1);flex:none}
.kt-head-row{display:flex;align-items:center;gap:8px;min-width:0}
.kt-head-title{font-size:14px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;min-width:0}
.kt-status{display:inline-flex;align-items:center;gap:4px;font-size:11px;color:var(--dsw-alias-label-tertiary);white-space:nowrap;flex:none}
.kt-status:before{content:"";width:5px;height:5px;border-radius:50%;background:var(--dsw-alias-state-success-primary)}
.kt-status.warn:before{background:var(--dsw-alias-state-warn-primary)}
.kt-actions{display:flex;align-items:center;gap:6px;flex:none}
.kt-btn{appearance:none;border:1px solid var(--dsw-alias-border-l2);background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;font-size:11px;line-height:1.4;padding:3px 8px;border-radius:6px;cursor:pointer;white-space:nowrap}
.kt-btn:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}
.kt-btn:disabled{opacity:.45;background:transparent;cursor:default}
.kt-inspector{display:flex;flex-direction:column;gap:6px;padding:8px 12px;border-bottom:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-1);flex:none}
.kt-inspector-top{display:flex;align-items:center;gap:6px;min-width:0}
.kt-code{font-family:var(--dsh-font-family-code);font-size:11px;color:var(--dsw-alias-label-primary-bluish);background:var(--dsw-alias-bg-layer-2);border:1px solid var(--dsw-alias-border-l1);border-radius:4px;padding:0 5px;white-space:nowrap;flex:none}
.kt-role{font-size:10px;color:var(--dsw-alias-label-tertiary);border:1px solid var(--dsw-alias-border-l1);border-radius:999px;padding:0 6px;white-space:nowrap;flex:none}
.kt-role-center{color:var(--dsw-alias-state-business-primary);border-color:var(--dsw-alias-border-selected)}
.kt-fields{display:flex;flex-wrap:wrap;gap:6px;min-width:0}
.kt-input{flex:1 1 96px;min-width:0;font:inherit;font-size:12px;color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-layer-2);border:1px solid var(--dsw-alias-border-l2);border-radius:6px;padding:4px 7px}
.kt-input:focus{outline:none;border-color:var(--dsw-alias-border-selected)}
.kt-input::placeholder{color:var(--dsw-alias-label-tertiary)}
.kt-inspector-actions{display:flex;flex-wrap:wrap;align-items:center;gap:6px}
.kt-scroll{flex:1;min-height:0;overflow:auto;padding:4px 6px 8px}
.kt-row{display:flex;align-items:center;gap:6px;min-width:0;padding:3px 6px;border-radius:6px;cursor:default}
.kt-row:hover{background:var(--dsw-alias-interactive-bg-hover)}
.kt-row.sel{background:var(--dsw-alias-interactive-bg-hover);box-shadow:inset 0 0 0 1px var(--dsw-alias-border-selected)}
.kt-row.dragging{opacity:.45}
.kt-row.drop-before{box-shadow:inset 0 2px 0 0 var(--dsw-alias-brand-primary)}
.kt-row.drop-after{box-shadow:inset 0 -2px 0 0 var(--dsw-alias-brand-primary)}
.kt-row.drop-inside{box-shadow:inset 0 0 0 1px var(--dsw-alias-brand-primary)}
.kt-caret{display:inline-flex;align-items:center;justify-content:center;width:14px;flex:none;border:0;background:none;padding:0;color:var(--dsw-alias-label-tertiary);font-size:11px;line-height:1;cursor:pointer}
.kt-caret-empty{cursor:default}
.kt-caret-glyph{display:inline-block;transition:transform .12s ease}
.kt-caret-glyph.open{transform:rotate(90deg)}
.kt-grip{flex:none;color:var(--dsw-alias-label-tertiary);cursor:grab;font-size:11px;letter-spacing:-1px;padding:0 1px;border-radius:3px;user-select:none;-webkit-user-select:none}
.kt-grip:hover{color:var(--dsw-alias-label-secondary);background:var(--dsw-alias-bg-layer-2)}
.kt-zh{flex:0 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12.5px;color:var(--dsw-alias-label-primary)}
.kt-en{flex:0 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:11px;color:var(--dsw-alias-label-tertiary)}
.kt-foot{flex:none;padding:6px 12px 8px;border-top:1px solid var(--dsw-alias-border-l1);font-size:10.5px;line-height:1.5;color:var(--dsw-alias-label-caption)}
.kt-chip{display:inline-flex;align-items:center;gap:5px;min-width:0}
.kt-chip-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
`

    /** Simplified Chinese copy. */
    const zh = {
      'tab.title': '知识树设计图',
      'guide.title': '知识树设计图',
      'guide.description': '编辑编号、名称与父子关系',
      'editor.title': '知识树设计图',
      'status.local': '已暂存到本机',
      'status.initial': '初始设计图',
      'status.reset': '已恢复初始设计图',
      'status.storageFailed': '本机暂存不可用',
      'action.expandAll': '展开全部',
      'action.collapseAll': '收起全部',
      'action.reset': '重置',
      'reset.note': '重置会丢弃本机暂存并恢复初始设计图。',
      'field.code': '编号',
      'field.en': '英文名',
      'field.zh': '中文名',
      'action.addChild': '新增子节点',
      'action.moveUp': '上移',
      'action.moveDown': '下移',
      'role.root': '根 · 中心',
      'role.center': '中心',
      'role.edge': '边',
      'role.node': '节点',
      'hint.rules': '拖动 ≡ 调整顺序或父级，编号自动重算：40 为根、41–46 为领域，数字=边／字母=节点逐层交替，0=中心。',
      'drag.handle': '拖动以调整位置',
      'unnamed': '（未命名）',
      'caret.expand': '展开',
      'caret.collapse': '收起',
    }

    /** English copy. */
    const en = {
      'tab.title': 'Knowledge tree',
      'guide.title': 'Knowledge tree design',
      'guide.description': 'Edit codes, names, and parents',
      'editor.title': 'Knowledge tree design',
      'status.local': 'Saved on this device',
      'status.initial': 'Initial design',
      'status.reset': 'Initial design restored',
      'status.storageFailed': 'Local storage unavailable',
      'action.expandAll': 'Expand all',
      'action.collapseAll': 'Collapse all',
      'action.reset': 'Reset',
      'reset.note': 'Resetting discards the local draft and restores the initial design.',
      'field.code': 'Code',
      'field.en': 'English name',
      'field.zh': 'Chinese name',
      'action.addChild': 'Add child',
      'action.moveUp': 'Move up',
      'action.moveDown': 'Move down',
      'role.root': 'Root · center',
      'role.center': 'Center',
      'role.edge': 'Edge',
      'role.node': 'Node',
      'hint.rules': 'Drag ≡ to reorder or change a parent; codes recompute: 40 root, 41–46 domains, digits as edges and letters as nodes alternating by level, 0 as the center.',
      'drag.handle': 'Drag to move',
      'unnamed': '(unnamed)',
      'caret.expand': 'Expand',
      'caret.collapse': 'Collapse',
    }

    // ---------------------------------------------------------------------
    // Tree model
    // ---------------------------------------------------------------------

    /**
     * One editor's id allocator; ids never leave the browser and never collide
     * with another mounted editor's ids.
     * @returns the next-id function.
     */
    function makeAllocator() {
      let seed = 0
      return () => {
        seed += 1
        return 'k' + seed
      }
    }

    /**
     * Deep-copy plain tree data (names, center flag, children).
     * @param value - JSON-shaped node data.
     * @returns an independent copy.
     */
    function copy(value) {
      return JSON.parse(JSON.stringify(value))
    }

    /**
     * Attach stable runtime ids in pre-order.
     * @param root - copied tree data.
     * @param nextId - that editor's allocator.
     * @returns the same root.
     */
    function withIds(root, nextId) {
      const walk = (node) => {
        node.id = nextId()
        if (Array.isArray(node.children)) node.children.forEach(walk)
      }
      walk(root)
      return root
    }

    /**
     * @param nextId - the editor's allocator; a fresh one is made when omitted.
     * @returns a fresh editing tree from the initial design.
     */
    function makeInitialTree(nextId) {
      const allocator = typeof nextId === 'function' ? nextId : makeAllocator()
      return normalizeTree(withIds(copy(INITIAL_TREE), allocator))
    }

    /**
     * Enforce the design's level rules on a tree in place: a digit-level child
     * list keeps at most one center (segment 0) and lists it first; letter-level
     * lists carry no center. The root's own children are edges 41–46, so they
     * carry no center either.
     * @param root - editing tree.
     * @returns the same root.
     */
    function normalizeTree(root) {
      const walk = (node, depth) => {
        if (!Array.isArray(node.children)) return
        const childDepth = depth + 1
        const digitLevel = childDepth % 2 === 1
        if (digitLevel && depth > 0) {
          const index = node.children.findIndex((child) => child.center === true)
          if (index > 0) {
            const center = node.children.splice(index, 1)[0]
            node.children.unshift(center)
          }
          node.children.forEach((child, position) => {
            if (position > 0 && child.center === true) delete child.center
          })
        } else {
          for (const child of node.children) delete child.center
        }
        node.children.forEach((child) => walk(child, childDepth))
      }
      walk(root, 0)
      return root
    }

    /**
     * Whether stored or imported data is a usable tree.
     * @param value - candidate tree data.
     * @returns whether every node has string names and a bounded shape.
     */
    function isValidTree(value) {
      let count = 0
      const valid = (node, depth) => {
        if (typeof node !== 'object' || node === null) return false
        if (typeof node.en !== 'string' || typeof node.zh !== 'string') return false
        if (node.center !== undefined && typeof node.center !== 'boolean') return false
        if (depth > MAX_DEPTH) return false
        count += 1
        if (count > MAX_NODES) return false
        if (node.children === undefined) return true
        if (!Array.isArray(node.children)) return false
        return node.children.every((child) => valid(child, depth + 1))
      }
      return valid(value, 0)
    }

    /** @returns a deep copy without runtime ids, safe to persist. */
    function withoutIds(root) {
      const strip = (node) => {
        const out = { en: node.en, zh: node.zh }
        if (node.center === true) out.center = true
        if (Array.isArray(node.children) && node.children.length > 0) out.children = node.children.map(strip)
        return out
      }
      return strip(root)
    }

    /** @returns a 1-based letter segment: 1 → A, 27 → AA. */
    function letterOf(index) {
      let n = index
      let out = ''
      while (n > 0) {
        out = String.fromCharCode(65 + ((n - 1) % 26)) + out
        n = Math.floor((n - 1) / 26)
      }
      return out
    }

    /**
     * Recompute every node's code from its position, per the design rules:
     * root 40; digits at odd depths are edges (a center child is 0), letters at
     * even depths are nodes; the first level reads 41, 42, … after the fixed 「4」.
     * @param root - editing tree.
     * @returns node id → { code, depth }.
     */
    function analyzeTree(root) {
      const info = new Map()
      const walk = (node, depth, code) => {
        info.set(node.id, { code, depth })
        const children = Array.isArray(node.children) ? node.children : []
        if (children.length === 0) return
        const childDepth = depth + 1
        const digitLevel = childDepth % 2 === 1
        const allowCenter = digitLevel && depth > 0
        let index = 0
        let centerUsed = false
        for (const child of children) {
          let segment
          if (digitLevel) {
            if (allowCenter && !centerUsed && child.center === true) {
              centerUsed = true
              segment = '0'
            } else {
              index += 1
              segment = String(index)
            }
          } else {
            index += 1
            segment = letterOf(index)
          }
          walk(child, childDepth, depth === 0 ? '4' + segment : code + segment)
        }
      }
      walk(root, 0, '40')
      return info
    }

    /**
     * Find one node with its parent and sibling index.
     * @param root - editing tree.
     * @param id - node id.
     * @returns the located entry, or undefined.
     */
    function findEntry(root, id) {
      const walk = (node, parent, index) => {
        if (node.id === id) return { node, parent, index }
        const children = Array.isArray(node.children) ? node.children : []
        for (let position = 0; position < children.length; position += 1) {
          const found = walk(children[position], node, position)
          if (found !== undefined) return found
        }
        return undefined
      }
      return walk(root, null, -1)
    }

    /** @returns whether `id` names a node inside `node`'s subtree. */
    function isInSubtree(node, id) {
      if (node.id === id) return true
      const children = Array.isArray(node.children) ? node.children : []
      return children.some((child) => isInSubtree(child, id))
    }

    /**
     * Rename one node.
     * @param root - editing tree.
     * @param id - node id.
     * @param field - `en` or `zh`.
     * @param value - new name.
     * @returns a new tree, or the same tree when nothing changed.
     */
    function renameNode(root, id, field, value) {
      const entry = findEntry(root, id)
      if (entry === undefined || entry.node[field] === value) return root
      const next = copy(root)
      const target = findEntry(next, id)
      if (target === undefined) return root
      target.node[field] = value
      return next
    }

    /**
     * Append one child.
     * @param root - editing tree.
     * @param parentId - parent node id.
     * @param nextId - the editor's allocator.
     * @returns the new tree and the created node's id.
     */
    function appendChild(root, parentId, nextId) {
      const next = copy(root)
      const entry = findEntry(next, parentId)
      if (entry === undefined) return { tree: root, childId: undefined }
      if (!Array.isArray(entry.node.children)) entry.node.children = []
      const child = { id: nextId(), en: NEW_NAME_EN, zh: NEW_NAME_ZH }
      entry.node.children.push(child)
      normalizeTree(next)
      return { tree: next, childId: child.id }
    }

    /**
     * Move one node before, after, or inside another.
     * @param root - editing tree.
     * @param sourceId - dragged node id; the root cannot move.
     * @param targetId - reference node id.
     * @param position - `before`, `after`, or `inside`.
     * @returns a new tree, or the same tree when the move is invalid or a no-op.
     */
    function moveNode(root, sourceId, targetId, position) {
      if (sourceId === targetId) return root
      const source = findEntry(root, sourceId)
      const reference = findEntry(root, targetId)
      if (source === undefined || reference === undefined) return root
      if (source.parent === null) return root
      if (position !== 'inside' && reference.parent === null) return root
      if (isInSubtree(source.node, targetId)) return root
      const next = copy(root)
      const from = findEntry(next, sourceId)
      if (from === undefined || from.parent === null) return root
      from.parent.children.splice(from.index, 1)
      const target = findEntry(next, targetId)
      if (target === undefined) return root
      if (position === 'inside') {
        if (!Array.isArray(target.node.children)) target.node.children = []
        target.node.children.push(from.node)
      } else {
        if (target.parent === null) return root
        const at = target.index + (position === 'after' ? 1 : 0)
        target.parent.children.splice(at, 0, from.node)
      }
      normalizeTree(next)
      return next
    }

    /**
     * Flatten the expanded part of the tree for rendering.
     * @param root - editing tree.
     * @param expanded - ids whose children are visible.
     * @param info - computed codes and depths.
     * @returns the visible rows in display order.
     */
    function flattenTree(root, expanded, info) {
      const rows = []
      const walk = (node, depth) => {
        const children = Array.isArray(node.children) ? node.children : []
        rows.push({
          node,
          depth,
          code: info.get(node.id) === undefined ? '' : info.get(node.id).code,
          hasChildren: children.length > 0,
          open: expanded.has(node.id),
        })
        if (children.length > 0 && expanded.has(node.id)) children.forEach((child) => walk(child, depth + 1))
      }
      walk(root, 0)
      return rows
    }

    /** @returns every id that has children. */
    function collectParents(root) {
      const ids = []
      const walk = (node) => {
        if (Array.isArray(node.children) && node.children.length > 0) {
          ids.push(node.id)
          node.children.forEach(walk)
        }
      }
      walk(root)
      return ids
    }

    /** @returns the role key of one row. */
    function roleOf(depth, center) {
      if (depth === 0) return 'root'
      if (center === true) return 'center'
      return depth % 2 === 1 ? 'edge' : 'node'
    }

    /**
     * Read the stored draft, falling back to the initial design.
     * @returns the editing tree, its id allocator, expansion set, and whether storage is usable.
     */
    function loadDraft() {
      const alloc = makeAllocator()
      const initial = makeInitialTree(alloc)
      let raw = null
      let storageOk = true
      try {
        raw = localStorage.getItem(STORAGE_KEY)
      } catch (error) {
        storageOk = false
      }
      if (raw !== null && raw !== undefined) {
        try {
          const saved = JSON.parse(raw)
          if (saved !== null && typeof saved === 'object' && saved.version === STORAGE_VERSION && isValidTree(saved.tree)) {
            const tree = normalizeTree(withIds(copy(saved.tree), alloc))
            return { tree, alloc, expanded: new Set(collectParents(tree)), storageOk, restored: true }
          }
        } catch (error) {
          // Invalid draft: keep editing from the initial design without deleting the bytes.
        }
      }
      return { tree: initial, alloc, expanded: new Set(collectParents(initial)), storageOk, restored: false }
    }

    // ---------------------------------------------------------------------
    // Components
    // ---------------------------------------------------------------------

    /**
     * Tree glyph used by the tab chip and the guide entry.
     * @param props - optional `size` and `className`.
     * @returns an inline SVG.
     */
    function TreeIcon(props) {
      const size = props !== null && props !== undefined && typeof props.size === 'number' ? props.size : 18
      const className = props !== null && props !== undefined ? props.className : undefined
      return h('svg', {
        className,
        width: size,
        height: size,
        viewBox: '0 0 36 36',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        strokeLinecap: 'round',
        'aria-hidden': true,
        focusable: false,
      },
        h('path', { d: 'M18 12V16' }),
        h('path', { d: 'M9 16H27' }),
        h('path', { d: 'M9 16V21.7' }),
        h('path', { d: 'M27 16V21.7' }),
        h('circle', { cx: 18, cy: 8.5, r: 3.4, fill: 'currentColor', stroke: 'none' }),
        h('circle', { cx: 9, cy: 24.5, r: 2.8, fill: 'currentColor', stroke: 'none' }),
        h('circle', { cx: 27, cy: 24.5, r: 2.8, fill: 'currentColor', stroke: 'none' }),
      )
    }

    /**
     * Tab chip content: glyph plus the live localized title.
     * @param props - injected locale translator.
     * @returns the chip.
     */
    function TreeTabTitle(props) {
      const translate = typeof props.t === 'function' ? props.t : (key) => key
      return h('span', { className: 'kt-chip' },
        h(TreeIcon, { size: 14 }),
        h('span', { className: 'kt-chip-label' }, translate('tab.title')),
      )
    }

    /**
     * One visible tree row.
     * @param props - row data, drag and selection callbacks.
     * @returns the row.
     */
    function TreeRow(props) {
      const { node, depth, code, hasChildren, open, translate, selected, dragging, dropPosition } = props
      const classes = ['kt-row']
      if (selected) classes.push('sel')
      if (dragging) classes.push('dragging')
      if (dropPosition === 'before') classes.push('drop-before')
      else if (dropPosition === 'after') classes.push('drop-after')
      else if (dropPosition === 'inside') classes.push('drop-inside')
      const zhName = node.zh !== '' ? node.zh : node.en
      const enName = node.zh !== '' && node.en !== '' ? node.en : ''
      return h('div', {
        className: classes.join(' '),
        style: { paddingLeft: 4 + depth * 12 },
        'data-node-id': node.id,
        onClick: () => props.onSelect(node.id),
        onDoubleClick: () => { if (hasChildren) props.onToggle(node.id) },
        onDragOver: (event) => props.onDragOver(event, node),
        onDrop: (event) => props.onDrop(event, node),
      },
        hasChildren
          ? h('button', {
            className: 'kt-caret', type: 'button',
            'aria-label': open ? translate('caret.collapse') : translate('caret.expand'),
            'aria-expanded': open,
            onClick: (event) => { event.stopPropagation(); props.onToggle(node.id) },
          }, h('span', { className: 'kt-caret-glyph' + (open ? ' open' : '') }, '▸'))
          : h('span', { className: 'kt-caret kt-caret-empty', 'aria-hidden': true }),
        h('span', {
          className: 'kt-grip',
          draggable: true,
          title: translate('drag.handle'),
          'aria-hidden': true,
          onDragStart: (event) => props.onDragStart(event, node),
          onDragEnd: () => props.onDragEnd(),
          onClick: (event) => event.stopPropagation(),
        }, '≡'),
        h('span', { className: 'kt-code' }, code),
        h('span', { className: 'kt-zh', title: zhName === '' ? translate('unnamed') : zhName }, zhName === '' ? translate('unnamed') : zhName),
        enName === '' ? null : h('span', { className: 'kt-en', title: enName }, enName),
      )
    }

    /**
     * The knowledge-tree design editor page.
     * @param props - injected locale translator.
     * @returns the editor panel.
     */
    function TreeEditor(props) {
      const translate = typeof props.t === 'function' ? props.t : (key) => key
      const loaded = useMemo(loadDraft, [])
      const [tree, setTree] = useState(loaded.tree)
      const [expanded, setExpanded] = useState(loaded.expanded)
      const [selectedId, setSelectedId] = useState(loaded.tree.id)
      const [statusKey, setStatusKey] = useState(loaded.storageOk ? (loaded.restored === true ? 'status.local' : 'status.initial') : 'status.storageFailed')
      const [dragId, setDragId] = useState(null)
      const [drop, setDrop] = useState(null)
      const treeRef = useRef(tree)
      const allocRef = useRef(loaded.alloc)
      const dirtyRef = useRef(false)
      const saveTimer = useRef(null)

      treeRef.current = tree

      const info = useMemo(() => analyzeTree(tree), [tree])
      const rows = useMemo(() => flattenTree(tree, expanded, info), [tree, expanded, info])
      const parentCount = useMemo(() => collectParents(tree).length, [tree])
      const allExpanded = expanded.size >= parentCount

      /** @returns whether the draft reached this browser's storage. */
      const persist = (next) => {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: STORAGE_VERSION, savedAt: Date.now(), tree: withoutIds(next) }))
          return true
        } catch (error) {
          return false
        }
      }

      const clearSaveTimer = () => {
        if (saveTimer.current !== null) {
          clearTimeout(saveTimer.current)
          saveTimer.current = null
        }
      }

      /** Persist now, reporting the outcome in the status line. */
      const saveNow = (next) => {
        clearSaveTimer()
        dirtyRef.current = false
        setStatusKey(persist(next) ? 'status.local' : 'status.storageFailed')
      }

      /** Persist after the typing pause. */
      const saveLater = (next) => {
        clearSaveTimer()
        dirtyRef.current = true
        saveTimer.current = setTimeout(() => {
          saveTimer.current = null
          const ok = persist(treeRef.current)
          dirtyRef.current = false
          setStatusKey(ok ? 'status.local' : 'status.storageFailed')
        }, SAVE_DELAY)
      }

      /** Apply one whole-tree change. */
      const commit = (next, immediate) => {
        if (next === tree) return
        treeRef.current = next
        setTree(next)
        if (immediate) saveNow(next)
        else saveLater(next)
      }

      // Unmount: stop the save timer and flush a pending name edit so it survives a remount.
      useEffect(() => () => {
        if (saveTimer.current !== null) {
          clearTimeout(saveTimer.current)
          saveTimer.current = null
          if (dirtyRef.current) persist(treeRef.current)
          dirtyRef.current = false
        }
      }, [])

      const entry = findEntry(tree, selectedId)
      const selected = entry === undefined ? tree : entry.node
      const selectedInfo = info.get(selected.id) === undefined ? { code: '40', depth: 0 } : info.get(selected.id)
      const role = roleOf(selectedInfo.depth, selected.center)
      const siblings = entry === undefined || entry.parent === null ? null : entry.parent.children
      const canMoveUp = siblings !== null
        && selected.center !== true
        && entry.index > 0
        && !(entry.index === 1 && siblings[0] !== undefined && siblings[0].center === true)
      const canMoveDown = siblings !== null && selected.center !== true && entry.index < siblings.length - 1

      const renameField = (field, value) => {
        commit(renameNode(tree, selected.id, field, value), false)
      }

      const addChild = () => {
        const added = appendChild(tree, selected.id, allocRef.current)
        if (added.childId === undefined) return
        commit(added.tree, true)
        setExpanded((previous) => {
          const nextSet = new Set(previous)
          nextSet.add(selected.id)
          return nextSet
        })
        setSelectedId(added.childId)
      }

      const moveSibling = (delta) => {
        if (siblings === null) return
        const neighbour = siblings[entry.index + delta]
        if (neighbour === undefined) return
        applyMove(selected.id, neighbour.id, delta < 0 ? 'before' : 'after')
      }

      const toggleExpanded = (id) => {
        setExpanded((previous) => {
          const nextSet = new Set(previous)
          if (nextSet.has(id)) nextSet.delete(id)
          else nextSet.add(id)
          return nextSet
        })
      }

      const toggleAll = () => {
        setExpanded(allExpanded ? new Set() : new Set(collectParents(tree)))
      }

      const resetTree = () => {
        clearSaveTimer()
        dirtyRef.current = false
        try {
          localStorage.removeItem(STORAGE_KEY)
        } catch (error) {
          // The in-memory reset still applies.
        }
        const allocator = makeAllocator()
        const fresh = makeInitialTree(allocator)
        allocRef.current = allocator
        treeRef.current = fresh
        setTree(fresh)
        setSelectedId(fresh.id)
        setExpanded(new Set(collectParents(fresh)))
        setDragId(null)
        setDrop(null)
        setStatusKey(loaded.storageOk ? 'status.reset' : 'status.storageFailed')
      }

      const positionFor = (event, node) => {
        if (node.id === tree.id) return 'inside'
        const rect = event.currentTarget.getBoundingClientRect()
        if (rect.height <= 0) return 'inside'
        const ratio = (event.clientY - rect.top) / rect.height
        if (ratio < 0.3) return 'before'
        if (ratio > 0.7) return 'after'
        return 'inside'
      }

      const canDrop = (sourceId, targetId, position) => {
        if (sourceId === null || sourceId === targetId) return false
        const source = findEntry(tree, sourceId)
        const target = findEntry(tree, targetId)
        if (source === undefined || target === undefined || source.parent === null) return false
        if (position !== 'inside' && target.parent === null) return false
        return !isInSubtree(source.node, targetId)
      }

      const onDragStart = (event, node) => {
        if (node.id === tree.id) {
          event.preventDefault()
          return
        }
        try {
          event.dataTransfer.effectAllowed = 'move'
          event.dataTransfer.setData('text/plain', node.id)
        } catch (error) {
          // Some environments expose a restricted dataTransfer; dragging still works.
        }
        setDragId(node.id)
        setDrop(null)
      }

      const onDragOver = (event, node) => {
        if (dragId === null) return
        const position = positionFor(event, node)
        if (!canDrop(dragId, node.id, position)) {
          if (drop !== null && drop.id === node.id) setDrop(null)
          return
        }
        event.preventDefault()
        try {
          event.dataTransfer.dropEffect = 'move'
        } catch (error) {
          // Ignore a restricted dataTransfer.
        }
        setDrop((previous) => (previous !== null && previous.id === node.id && previous.position === position ? previous : { id: node.id, position }))
      }

      const applyMove = (sourceId, targetId, position) => {
        const next = moveNode(tree, sourceId, targetId, position)
        if (next === tree) return
        commit(next, true)
        if (position === 'inside') {
          setExpanded((previous) => {
            const nextSet = new Set(previous)
            nextSet.add(targetId)
            return nextSet
          })
        }
        setSelectedId(sourceId)
      }

      const onDrop = (event, node) => {
        event.preventDefault()
        const position = positionFor(event, node)
        const sourceId = dragId
        setDragId(null)
        setDrop(null)
        if (sourceId === null || !canDrop(sourceId, node.id, position)) return
        applyMove(sourceId, node.id, position)
      }

      const onDragEnd = () => {
        setDragId(null)
        setDrop(null)
      }

      return h('div', { className: 'kt-panel' },
        h('div', { className: 'kt-head' },
          h('div', { className: 'kt-head-row' },
            h('span', { className: 'kt-head-title' }, translate('editor.title')),
            h('span', { className: 'kt-status' + (statusKey === 'status.storageFailed' ? ' warn' : '') }, translate(statusKey)),
          ),
          h('div', { className: 'kt-head-row' },
            h('div', { className: 'kt-actions' },
              h('button', { className: 'kt-btn', type: 'button', onClick: toggleAll }, allExpanded ? translate('action.collapseAll') : translate('action.expandAll')),
              h('button', { className: 'kt-btn', type: 'button', title: translate('reset.note'), onClick: resetTree }, translate('action.reset')),
            ),
          ),
        ),
        h('div', { className: 'kt-inspector' },
          h('div', { className: 'kt-inspector-top' },
            h('span', { className: 'kt-code', title: translate('field.code') }, selectedInfo.code),
            h('span', { className: 'kt-role' + (role === 'center' || role === 'root' ? ' kt-role-center' : '') }, translate('role.' + role)),
          ),
          h('div', { className: 'kt-fields' },
            h('input', {
              className: 'kt-input', type: 'text', spellCheck: false, value: selected.en,
              placeholder: translate('field.en'), 'aria-label': translate('field.en'),
              onChange: (event) => renameField('en', event.target.value),
              onKeyDown: (event) => { if (event.key === 'Enter') event.currentTarget.blur() },
            }),
            h('input', {
              className: 'kt-input', type: 'text', spellCheck: false, value: selected.zh,
              placeholder: translate('field.zh'), 'aria-label': translate('field.zh'),
              onChange: (event) => renameField('zh', event.target.value),
              onKeyDown: (event) => { if (event.key === 'Enter') event.currentTarget.blur() },
            }),
          ),
          h('div', { className: 'kt-inspector-actions' },
            h('button', { className: 'kt-btn', type: 'button', onClick: addChild }, translate('action.addChild')),
            h('button', { className: 'kt-btn', type: 'button', disabled: !canMoveUp, onClick: () => moveSibling(-1) }, translate('action.moveUp')),
            h('button', { className: 'kt-btn', type: 'button', disabled: !canMoveDown, onClick: () => moveSibling(1) }, translate('action.moveDown')),
          ),
        ),
        h('div', {
          className: 'kt-scroll',
          onDragLeave: (event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setDrop(null)
          },
        }, rows.map((row) => h(TreeRow, {
          key: row.node.id,
          node: row.node,
          depth: row.depth,
          code: row.code,
          hasChildren: row.hasChildren,
          open: row.open,
          translate,
          selected: row.node.id === selectedId,
          dragging: row.node.id === dragId,
          dropPosition: drop !== null && drop.id === row.node.id ? drop.position : null,
          onSelect: setSelectedId,
          onToggle: toggleExpanded,
          onDragStart,
          onDragOver,
          onDrop,
          onDragEnd,
        }))),
        h('div', { className: 'kt-foot' }, translate('hint.rules')),
      )
    }

    /** Required Client services: the slot registry, copy, and the right Sidebar faces. */
    const inject = ['slots', 'locale', 'sidebarRight', 'sidebarRightTabs']

    /**
     * Client plugin body: dictionaries, styles, the page type, its body and
     * title, and the once-per-Session opening of the page.
     * @param ctx - Client root Context.
     */
    function apply(ctx) {
      const t = ctx.locale.bind(NS)
      ctx.effect(() => {
        if (typeof document === 'undefined') return
        const style = document.createElement('style')
        style.dataset.plugin = PKG
        style.dataset.pluginCss = PKG + '/knowledge-tree.css'
        style.textContent = CSS
        document.head.appendChild(style)
        return () => { style.remove() }
      }, 'knowledge-tree: styles')
      ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'knowledge-tree: dictionaries')
      ctx.effect(() => ctx.sidebarRightTabs.register({
        id: TAB_ID,
        kind: KIND,
        keepMounted: true,
        title: () => t('tab.title'),
        guide: [{
          id: 'design',
          order: 30,
          title: () => t('guide.title'),
          description: () => t('guide.description'),
          icon: TreeIcon,
        }],
      }), 'knowledge-tree: page type')
      ctx.effect(() => ctx.slots.inject('sidebar.right.pane.tab', () => ctx.slots.register({
        name: 'sidebar.right.pane.tab', key: TAB_ID, locale: NS,
      }, TreeEditor)), 'knowledge-tree: page body')
      ctx.effect(() => ctx.slots.inject('sidebar.right.pane.tab.title', () => ctx.slots.register({
        name: 'sidebar.right.pane.tab.title', key: TAB_ID, locale: NS,
      }, TreeTabTitle)), 'knowledge-tree: page title')
      ctx.effect(() => {
        let timer = null
        const opened = new Set()
        const attempts = new Map()
        const stopTimer = () => {
          if (timer !== null) {
            clearTimeout(timer)
            timer = null
          }
        }
        const attempt = () => {
          timer = null
          let sessionId
          try {
            sessionId = ctx.sidebarRight.mounted.getSnapshot()
          } catch (error) {
            return
          }
          if (sessionId === undefined || opened.has(sessionId)) return
          let present = false
          try {
            present = ctx.sidebarRight.tabsIn(sessionId).some((tab) => tab.kind === KIND)
          } catch (error) {
            present = false
          }
          if (present) {
            opened.add(sessionId)
            return
          }
          try {
            ctx.sidebarRight.openTab(KIND)
            opened.add(sessionId)
          } catch (error) {
            const used = (attempts.get(sessionId) === undefined ? 0 : attempts.get(sessionId)) + 1
            attempts.set(sessionId, used)
            if (used <= 25) timer = setTimeout(attempt, 80)
          }
        }
        const schedule = () => {
          stopTimer()
          timer = setTimeout(attempt, 60)
        }
        const unsubscribe = ctx.sidebarRight.mounted.subscribe(schedule)
        schedule()
        return () => {
          unsubscribe()
          stopTimer()
          try {
            for (const tab of ctx.sidebarRight.openTabs.getSnapshot()) {
              if (tab.kind === KIND) ctx.sidebarRight.closeIn(tab.sessionId, tab.tabId)
            }
          } catch (error) {
            console.error('Knowledge tree design: closing its tabs failed', error)
          }
        }
      }, 'knowledge-tree: opening and teardown')
    }

    return { inject, apply }
  },
})
