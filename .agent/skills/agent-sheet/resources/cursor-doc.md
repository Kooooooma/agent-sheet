Rules | Cursor Docs
Skip to main content
文档
API
学习

搜索文档...
⌘K
询问 AI⌘I
仪表板
Command Palette
Search for a command to run...


开始使用
欢迎
快速入门
概念
模型
定价
Agent
概述
模式
审查
终端
浏览器
安全性
钩子
上下文
规则
命令
技能
子代理
语义搜索
@ 提及

模型上下文协议 (MCP)
功能
Tab

云端

命令行界面

内联编辑
Bugbot
集成
Slack
Linear
GitHub
Git
GitLab
深层链接
配置
忽略的文件
扩展
键盘快捷键
主题
Shell 命令
并行 Agent

BYOK

语言

迁移
账户

账单
更新访问权限

团队

企业版
实用指南
Agent 工作流程
构建 MCP 服务器
Web 开发
数据科学
大型代码库
Mermaid 图表
使用 Bugbot 规则
故障排除
常见问题
获取请求 ID
故障排除指南
下载
上下文
规则
规则为 Agent 提供系统级指令。它们将提示词、脚本等内容打包在一起，便于在团队内管理和共享工作流。

Cursor 支持四种类型的规则：

项目规则

存储在 .cursor/rules 中，受版本控制，作用范围限定在你的代码库内。

用户规则

在整个 Cursor 环境中全局生效，由 Agent（Chat）使用。

团队规则

在控制台集中管理的团队级规则。适用于 Team 和 Enterprise 方案。

AGENTS.md

以 Markdown 格式编写的 Agent 指令，是 .cursor/rules 的简洁替代方案。

规则的工作原理
大型语言模型在不同补全之间不会保留记忆。规则在提示级别提供持久、可重用的上下文。

应用后，规则内容会被加入到模型上下文的开头。这为 AI 在生成代码、理解编辑或协助处理工作流时提供一致的指导。

在聊天上下文中应用的规则
项目规则
项目规则以 markdown 文件形式存放在 .cursor/rules 中，并纳入版本控制。规则可以通过路径模式限定作用范围，可手动触发，或根据相关性自动引入。

使用项目规则可以：

沉淀与你代码库相关的领域知识
自动化项目特定的工作流或模板
统一风格或架构决策
规则文件结构
每条规则对应一个 markdown 文件，文件名可以任意命名。Cursor 支持 .md 和 .mdc 扩展名。对于带有 frontmatter 的 .mdc 文件，你可以通过指定 description 和 globs 来更精细地控制规则的生效条件。


.cursor/rules/
  react-patterns.mdc       # 带前置元数据的规则(描述、globs)
  api-guidelines.md        # 简单 markdown 规则
  frontend/                # 在文件夹中组织规则
    components.md
规则结构
每条规则是一个带有 frontmatter 元数据和正文内容的 markdown 文件。通过类型下拉菜单可以控制规则的应用方式，该菜单会修改 description、globs、alwaysApply 等属性。

规则类型	描述
Always Apply	应用于每个聊天会话
Apply Intelligently	当 Agent 根据描述判断其相关时应用
Apply to Specific Files	当文件匹配指定模式时应用
Apply Manually	在对话中被 @ 提及时应用（例如：@my-rule）

---
globs:
alwaysApply: false
---
- 定义服务时使用我们内部的 RPC 模式
- 服务名称始终使用 snake_case 命名
@service-template.ts
创建规则
使用 New Cursor Rule 命令，或在 Cursor Settings > Rules, Commands 中创建规则。这会在 .cursor/rules 中创建一个新的规则文件。你可以在设置中查看所有规则及其状态。

简洁规则与冗长规则的对比
最佳实践
好的规则应当聚焦、可操作且范围明确。

将规则控制在 500 行以内
将较大的规则拆分为多个可组合的规则
提供具体示例或参考文件
避免模糊的指导，像写清晰的内部文档那样写规则
在聊天中重复使用提示时，复用已有规则
通过引用文件而不是复制其内容来使用文件——这样既能让规则保持简短，又能在代码变更时避免规则失效
规则中应避免的内容
整篇照搬风格指南：改用 linter。Agent 已经了解常见的风格约定。
逐条记录所有可能的命令：Agent 知道 npm、git、pytest 等常见工具。
为极少出现的边缘情况添加说明：让规则聚焦在你经常使用的模式上。
重复你代码库中已有的内容：引用标准示例，而不是复制代码。
先从简单的开始。只有在你发现 Agent 反复犯同一个错误时再添加规则。在真正理解自己的模式之前，不要过度优化。

把规则提交到 git，整个团队都能受益。每当你看到 Agent 出错，就更新对应规则。你甚至可以在 GitHub 的 issue 或 PR 中标记 @cursor，让 Agent 帮你更新规则。

规则文件格式
每条规则都是一个带有 frontmatter 元数据和正文内容的 Markdown 文件。frontmatter 元数据用于控制如何应用该规则，正文内容则是规则本身。


---
description: "This rule provides standards for frontend components and API validation"
alwaysApply: false
---
...rest of the rule content
如果 alwaysApply 为 true，则该规则会应用于每个聊天会话。否则，将把该规则的描述提供给 Cursor Agent，由其决定是否需要应用该规则。

示例

前端组件和 API 校验规范

Express 服务与 React 组件模板

自动化开发工作流与文档生成

在 Cursor 中添加新设置

服务提供商和各类框架都提供了示例。社区贡献的规则可以在众包集合和在线代码仓库中找到。

团队规则
Team 和 Enterprise 方案可以通过 Cursor 仪表盘 在整个组织范围内创建和强制执行规则。管理员可以配置每条规则对团队成员是否为必选项。

团队规则与其他规则类型协同工作，并优先生效，以确保在所有项目中维护组织标准。它们提供了一种强大的方式，在无需成员单独设置或配置的情况下，为整个团队统一编码规范、实践和工作流程。

管理团队规则
团队管理员可以直接在 Cursor 仪表板上创建和管理规则：

空的团队规则仪表板，团队管理员可以在此添加新规则
创建团队规则后，它们会自动应用于所有团队成员，并在仪表板中可见：

团队规则仪表板显示一条将对所有团队成员强制执行的团队规则
激活和强制执行
立即启用此规则：选中后，此规则会在创建后立即生效。未选中时，该规则会保存为草稿，在你稍后启用之前不会生效。
强制执行此规则：启用后，此规则对所有团队成员都是必需的，且无法在他们各自的 Cursor 设置中关闭。未强制执行时，团队成员可以在 Cursor Settings → Rules 的 Team Rules 部分中将此规则关闭。
默认情况下，未强制执行的 Team Rules 可以被用户关闭。请使用 强制执行此规则 来防止这种情况。

Team Rules 的格式和生效方式
纯文本：Team Rules 是自由文本。它们不使用 Project Rules 的文件夹结构，也不支持 globs、alwaysApply 或规则类型等元数据。
适用范围：当某条 Team Rule 被启用（且未被用户禁用，除非为强制规则）时，它会被加入该团队所有代码库和项目中 Agent（Chat）的模型上下文。
优先级：规则按以下顺序生效：Team Rules → Project Rules → User Rules。所有适用规则会被合并；当说明存在冲突时，前面的来源具有更高优先级。
一些团队会将强制规则作为内部合规流程的一部分。尽管这是受支持的，但 AI 指引不应成为你唯一的安全控制手段。

导入规则
你可以从外部来源导入规则，以复用现有配置或使用其他工具中的规则。

远程规则（通过 GitHub）
直接从你有访问权限的任何 GitHub 仓库导入规则——无论是公开还是私有仓库。

打开 Cursor Settings → Rules, Commands
点击 Project Rules 旁的 + Add Rule，然后选择 Remote Rule (GitHub)
粘贴包含该规则的 GitHub 仓库 URL
Cursor 会拉取该规则并同步到你的项目中
导入的规则会与其源仓库保持同步，因此远程规则的更新会自动体现在你的项目中。

Agent Skills
Cursor 可以从 Agent Skills 加载规则，这是一个用于为 AI Agent 扩展专用能力的开放标准。导入的这些技能始终作为由 Agent 决定是否应用的规则，这意味着 Cursor 会根据上下文判断它们何时相关。

要启用或禁用 Agent Skills：

打开 Cursor Settings → Rules
找到 Import Settings 部分
切换 Agent Skills 开关以开启或关闭
Agent Skills 会被视为由 Agent 决定的规则，无法配置为「始终应用」(always-apply) 或「手动」(manual) 规则。

AGENTS.md
AGENTS.md 是一个用于定义 agent 指令的简单 markdown 文件。将它放在项目根目录中，作为 .cursor/rules 的替代选项，适用于简单直接的用例。

与 Project Rules 不同，AGENTS.md 是一个没有元数据或复杂配置的纯 markdown 文件。对于只需要简单、易读指令，而不想引入结构化规则额外负担的项目来说，它是理想选择。

Cursor 支持位于项目根目录或其子目录中的 AGENTS.md。


# Project Instructions
## Code Style
- Use TypeScript for all new files
- Prefer functional components in React
- Use snake_case for database columns
## Architecture
- Follow the repository pattern
- Keep business logic in service layers
改进

支持嵌套 AGENTS.md
用户规则
用户规则是在 Cursor Settings → Rules 中定义的全局首选项，适用于所有项目。它们会被 Agent（Chat）使用，非常适合用来设定首选的交流风格或编码规范：


请以简洁风格回复。避免不必要的重复或冗余语言。
旧版 Cursor 规则
.cursorrules
项目根目录下的 .cursorrules（旧版）文件仍然受支持，但即将被废弃。我们建议迁移到 Project Rules 或 AGENTS.md 文件。

常见问题

为什么我的规则没有生效？

规则可以引用其他规则或文件吗？

我可以在聊天中创建规则吗？

规则会影响 Cursor Tab 或其他 AI 功能吗？

用户规则会应用到 Inline Edit（Cmd/Ctrl+K）吗？



简体中文
规则的工作原理
项目规则
规则文件结构
规则结构
创建规则
最佳实践
规则中应避免的内容
规则文件格式
示例
团队规则
管理团队规则
激活和强制执行
Team Rules 的格式和生效方式
导入规则
远程规则（通过 GitHub）
Agent Skills
AGENTS.md
改进
用户规则
旧版 Cursor 规则
`.cursorrules`
常见问题

复制页面

分享反馈

详细说明

询问有关文档的问题
Agent

Sonnet 4.5

Tokenizer Off
上下文: 0/200k (0%)

Commands | Cursor Docs
Skip to main content
文档
API
学习

搜索文档...
⌘K
询问 AI⌘I
仪表板
Command Palette
Search for a command to run...


开始使用
欢迎
快速入门
概念
模型
定价
Agent
概述
模式
审查
终端
浏览器
安全性
钩子
上下文
规则
命令
技能
子代理
语义搜索
@ 提及

模型上下文协议 (MCP)
功能
Tab

云端

命令行界面

内联编辑
Bugbot
集成
Slack
Linear
GitHub
Git
GitLab
深层链接
配置
忽略的文件
扩展
键盘快捷键
主题
Shell 命令
并行 Agent

BYOK

语言

迁移
账户

账单
更新访问权限

团队

企业版
实用指南
Agent 工作流程
构建 MCP 服务器
Web 开发
数据科学
大型代码库
Mermaid 图表
使用 Bugbot 规则
故障排除
常见问题
获取请求 ID
故障排除指南
下载
上下文
命令
自定义命令允许你创建可复用的工作流，并在聊天输入框中通过简单的 / 前缀来触发。这些命令有助于在团队内标准化流程，并让常见任务执行得更加高效。

命令输入示例
命令目前处于测试阶段。随着我们不断改进，此功能及其语法可能会发生变化。

命令的工作方式
命令以普通 Markdown 文件的形式定义，可以存放在三个位置：

项目命令：存放在你项目的 .cursor/commands 目录中
全局命令：存放在你主目录下的 ~/.cursor/commands 目录中
团队命令：由团队管理员在 Cursor Dashboard 中创建，并会自动对所有团队成员可用
当你在聊天输入框中键入 / 时，Cursor 会自动检测并显示来自所有位置的可用命令，让你在整个工作流中都能即时调用它们。

创建命令
在项目根目录下创建一个 .cursor/commands 目录
添加一些具有描述性名称的 .md 文件（例如 review-code.md、write-tests.md）
使用纯 Markdown 编写内容，描述该命令应该执行的操作
当你输入 / 时，命令会自动出现在聊天中
下面是你的 commands 目录结构可能的一个示例：


.cursor/
└── commands/
    ├── address-github-pr-comments.md
    ├── code-review-checklist.md
    ├── create-pr.md
    ├── light-review-existing-diffs.md
    ├── onboard-new-developer.md
    ├── run-all-tests-and-fix.md
    ├── security-audit.md
    └── setup-new-feature.md
团队命令
团队命令适用于 Team 和 Enterprise 方案。

团队管理员可以创建由服务器强制执行的自定义命令，并自动对所有团队成员生效。这样可以轻松在整个组织中共享标准化的提示和工作流。

创建团队命令
前往 Team Content dashboard
点击以创建新命令
填写以下内容：
Name：出现在 / 前缀之后的命令名称
Description（可选）：对命令用途的补充说明
Content：定义该命令行为的 Markdown 内容
保存命令
创建后，当成员在聊天输入框中键入 / 时，这些团队命令会立即对所有团队成员生效。团队成员无需手动同步或下载任何内容——命令会自动同步。

团队命令的优势
集中管理：只需更新一次命令，所有团队成员即可立即使用最新版本
标准化：确保所有人都使用一致的工作流程和最佳实践
便捷共享：无需在团队内分发文件或协调更新
访问控制：只有团队管理员可以创建和修改团队命令
参数
你可以在 Agent 聊天输入框中为命令提供额外的上下文。你在命令名称之后输入的任何内容，都会与上述输入一起一起包含在模型的提示词中。例如：


/commit and /pr these changes to address DX-523
示例
在你的项目中试用这些命令，体验它们的工作方式。


代码审查清单

安全审计

配置新功能

创建 Pull Request

运行测试并修复失败的用例

帮助新开发者上手



简体中文
命令的工作方式
创建命令
团队命令
创建团队命令
团队命令的优势
参数
示例

复制页面

分享反馈

详细说明

询问有关文档的问题
Agent

Sonnet 4.5

Tokenizer Off
上下文: 0/200k (0%)

Agent Skills | Cursor Docs
Skip to main content
文档
API
学习

搜索文档...
⌘K
询问 AI⌘I
仪表板
Command Palette
Search for a command to run...


开始使用
欢迎
快速入门
概念
模型
定价
Agent
概述
模式
审查
终端
浏览器
安全性
钩子
上下文
规则
命令
技能
子代理
语义搜索
@ 提及

模型上下文协议 (MCP)
功能
Tab

云端

命令行界面

内联编辑
Bugbot
集成
Slack
Linear
GitHub
Git
GitLab
深层链接
配置
忽略的文件
扩展
键盘快捷键
主题
Shell 命令
并行 Agent

BYOK

语言

迁移
账户

账单
更新访问权限

团队

企业版
实用指南
Agent 工作流程
构建 MCP 服务器
Web 开发
数据科学
大型代码库
Mermaid 图表
使用 Bugbot 规则
故障排除
常见问题
获取请求 ID
故障排除指南
下载
上下文
Agent Skills
Agent Skills 仅在 Nightly 更新渠道中可用。

要切换更新渠道，打开 Cursor 设置（
Ctrl+Shift+J
），选择 Beta，然后将更新渠道设置为 Nightly。更新完成后，你可能需要重新启动 Cursor。

Agent Skills 是一种用于为 AI Agent 扩展专门能力的开放标准。Skills 将特定领域的知识和工作流打包，Agent 可以利用这些内容来执行特定任务。

什么是技能？
技能是一种可移植、受版本控制的包，用于教会 Agent 如何执行特定领域的任务。

可移植

技能可以在任何支持 Agent Skills 标准的 Agent 中使用。

版本控制

技能以文件形式存储，可以在你的代码仓库中进行管理和追踪，或通过 GitHub 仓库链接安装。

技能如何工作
Cursor 启动时会自动从技能目录中发现技能，并将它们提供给 Agent。Agent 会查看可用的技能，并根据上下文决定何时使用。

也可以在 Agent 对话中输入 /，通过搜索技能名称手动调用技能。

技能目录
技能会自动从以下位置加载：

位置	范围
.cursor/skills/	项目级
.claude/skills/	项目级（Claude 兼容）
~/.cursor/skills/	用户级（全局）
~/.claude/skills/	用户级（全局）
每个技能都应是一个包含 SKILL.md 文件的文件夹：


.cursor/
└── skills/
    └── my-skill/
        └── SKILL.md
SKILL.md 文件格式
每个技能都在一个带有 YAML frontmatter 的 SKILL.md 文件中定义：


---
name: my-skill
description: Short description of what this skill does and when to use it.
---
# My Skill
Detailed instructions for the agent.
## When to Use
- Use this skill when...
- This skill is helpful for...
## Instructions
- Step-by-step guidance for the agent
- Domain-specific conventions
- Best practices and patterns
Frontmatter 字段
字段	是否必填	说明
description	是	在菜单中显示的简短描述。Agent 会用它来判断何时使用该技能。
name	否	便于阅读的名称。如果省略，将使用父文件夹的名称。
查看技能
要查看已发现的技能：

打开 Cursor Settings（在 Mac 上为 Cmd+Shift+J，在 Windows/Linux 上为 Ctrl+Shift+J）
导航到 Rules
技能会显示在 Agent Decides 部分
从 GitHub 安装技能
你可以从 GitHub 仓库导入技能：

打开 Cursor Settings → Rules
在 Project Rules 部分，点击 Add Rule
选择 Remote Rule (Github)
输入 GitHub 仓库 URL
了解更多
Agent Skills 是一个开放标准。了解详情请访问 agentskills.io。




简体中文
什么是技能？
技能如何工作
技能目录
SKILL.md 文件格式
Frontmatter 字段
查看技能
从 GitHub 安装技能
了解更多

复制页面

分享反馈

详细说明

询问有关文档的问题
Agent

Sonnet 4.5

Tokenizer Off
上下文: 0/200k (0%)

Subagents | Cursor Docs
Skip to main content
文档
API
学习

搜索文档...
⌘K
询问 AI⌘I
仪表板
Command Palette
Search for a command to run...


开始使用
欢迎
快速入门
概念
模型
定价
Agent
概述
模式
审查
终端
浏览器
安全性
钩子
上下文
规则
命令
技能
子代理
语义搜索
@ 提及

模型上下文协议 (MCP)
功能
Tab

云端

命令行界面

内联编辑
Bugbot
集成
Slack
Linear
GitHub
Git
GitLab
深层链接
配置
忽略的文件
扩展
键盘快捷键
主题
Shell 命令
并行 Agent

BYOK

语言

迁移
账户

账单
更新访问权限

团队

企业版
实用指南
Agent 工作流程
构建 MCP 服务器
Web 开发
数据科学
大型代码库
Mermaid 图表
使用 Bugbot 规则
故障排除
常见问题
获取请求 ID
故障排除指南
下载
上下文
子代理
子代理目前仅在 Nightly 更新通道中可用。

若要切换通道，打开 Cursor 设置（
Ctrl+Shift+J
），选择 Beta，然后将更新通道设置为 Nightly。更新完成后，你可能需要重启 Cursor。

子代理是 Cursor 主代理可以将任务委派给的专业化 AI 助手。每个子代理都在自己的上下文窗口中运行，处理特定类型的工作，并将结果返回给父代理。使用子代理可以拆解复杂任务、并行开展工作，并在主对话中保留上下文。

上下文隔离

每个子代理都有自己的上下文窗口。耗时较长的调研或探索任务不会占用主对话的上下文空间。

并行执行

可同时启动多个子代理。可以在代码库的不同部分并行工作，无需等待顺序执行完成。

专门领域能力

通过自定义提示词、工具访问权限和模型，为子代理配置特定领域的任务。

可复用

定义自定义子代理，并在多个项目之间复用。

子代理如何运作
当 Agent 遇到复杂任务时，它可以自动启动一个子代理。子代理会收到包含所有必要上下文的提示（prompt），自主执行，并在结束时返回一条包含结果的最终消息。

子代理在全新的上下文中启动。父代理会在提示中加入相关信息，因为子代理无法访问之前的对话历史。

前台 vs 后台
子代理可以以两种模式之一运行：

模式	行为	最适合
前台	阻塞直到子代理完成，并立即返回结果。	需要其输出的串行任务。
后台	立即返回，子代理独立运行。	长时间运行的任务或并行工作流。
何时使用 subagent
适合使用 subagent 的场景……	适合使用 skill 的场景……
你需要为耗时的调研任务隔离上下文	任务是单一用途的（生成 changelog、格式化等）
需要并行运行多个工作流	你希望有一个快速、可重复的操作
任务在多个步骤中需要专业知识	任务可以一次性完成
你希望对工作成果进行独立校验	你不需要单独的上下文窗口
如果你发现自己正为一个简单、单一用途的任务（例如 "generate a changelog" 或 "format imports"）创建 subagent，考虑改用一个 skill。

快速开始
Agent 会在合适的时候自动使用子代理。你也可以通过向 Agent 提示来创建自定义子代理：

在 .cursor/agents/verifier.md 创建一个子代理文件，文件开头使用 YAML frontmatter（name、description），后面紧跟提示内容。verifier 子代理应负责验证已完成的工作、检查实现是否可用、运行测试，并报告通过的部分和未完成的部分。

Try in Cursor
如果需要更精细的控制，可以在你的项目或用户目录中手动创建自定义子代理。

自定义子智能体
定义自定义子智能体，用于封装专业知识、落实团队规范或自动化重复性流程。

文件位置
类型	位置	适用范围
项目子代理	.cursor/agents/	仅当前项目
用户子代理	~/.cursor/agents/	当前用户的所有项目
当名称冲突时，项目子代理优先。

文件格式
每个 subagent 对应一个带有 YAML 头部信息的 Markdown 文件：


---
name: security-auditor
description: 安全专家。用于实现身份验证、支付或处理敏感数据时。
model: inherit
---
你是一位代码安全审计专家,负责审查代码漏洞。
调用时:
1. 识别安全敏感代码路径
2. 检查常见漏洞(注入、XSS、身份验证绕过)
3. 验证密钥未被硬编码
4. 审查输入验证和清理
按严重程度报告发现:
- Critical(部署前必须修复)
- High(尽快修复)
- Medium(尽可能处理)
配置字段
字段	必填	描述
name	否	唯一标识符。使用小写字母和连字符。默认为不带扩展名的文件名。
description	否	何时使用此子代理。代理会读取此字段以决定是否进行任务委派。
model	否	要使用的模型：fast、inherit，或具体模型 ID。默认为 inherit。
readonly	否	若为 true，子代理将以受限写入权限运行。
is_background	否	若为 true，子代理将在后台运行，而无需等待其完成。
使用子代理
自动委派
Agent 会根据以下因素主动委派任务：

任务的复杂度和范围
项目中自定义的 subagent 描述
当前上下文和可用工具
在 description 字段中加入诸如 “use proactively” 或 “always use for” 之类的短语，可以鼓励自动委派。

显式调用
在提示词中使用 /name 语法显式调用指定的子代理：


> /verifier confirm the auth flow is complete
> /debugger investigate this error
> /security-auditor review the payment module
你也可以在对话中自然提及它们来调用子代理：


> 使用 verifier 子代理来确认身份验证流程已完成
> Have the debugger subagent investigate this error
> Run the security-auditor subagent on the payment module
并行执行
同时启动多个子代理，以获得最大吞吐量：


> Review the API changes and update the documentation in parallel
Agent 会在单条消息中发出多个 Task 工具调用，因此子代理可以并行运行。

恢复子代理
可以恢复子代理以继续之前的会话。这对跨越多次调用的长时间运行任务非常有用。

每次子代理执行都会返回一个 agent ID。传入此 ID 即可在保留完整上下文的情况下恢复该子代理：


> Resume agent abc123 and analyze the remaining test failures
后台子代理在运行时会记录自己的状态。子代理完成后，你可以恢复该子代理，在保留上下文的情况下继续对话。

常见模式
验证代理
验证代理会独立验证声称已完成的工作是否确实已经完成。这样可以解决一个常见问题：AI 将任务标记为已完成，但实际实现却不完整或存在缺陷。


---
name: verifier
description: 验证已完成的工作。在任务标记为完成后使用,以确认实现功能正常。
model: fast
---
你是一个严格的验证者。你的工作是验证声称已完成的工作是否真正可用。
调用时:
1. 识别声称已完成的内容
2. 检查实现是否存在且功能正常
3. 运行相关测试或验证步骤
4. 查找可能遗漏的边界情况
要彻底且保持怀疑态度。报告:
- 已验证并通过的内容
- 声称完成但不完整或损坏的内容
- 需要解决的具体问题
不要轻信表面声明。测试所有内容。
在 .cursor/agents/verifier.md 中创建一个子代理文件，在 YAML frontmatter 中包含 name、description 和 model: fast。description 应为 'Validates completed work. Use after tasks are marked done to confirm implementations are functional.'。prompt 正文应指示它保持怀疑态度，通过运行测试来验证实现是否真的可用，并留意边界情况。

Try in Cursor
此模式适用于：

在将工单标记为完成之前，验证功能是否端到端可用
发现只部分实现的功能
确保测试实际通过（而不只是存在测试文件）
协调器模式
对于复杂的工作流，父级 Agent 可以按顺序协调多个专业子 Agent 的工作：

Planner 分析需求并创建技术方案
Implementer 根据方案实现功能
Verifier 确认实现符合需求
每次交接都会提供结构化输出，确保下一个 Agent 拥有清晰的上下文。

子代理示例
调试器

---
name: debugger
description: 错误和测试失败的调试专家。遇到问题时使用。
---
你是一位专注于根因分析的调试专家。
调用时：
1. 捕获错误信息和堆栈跟踪
2. 确定复现步骤
3. 定位故障位置
4. 实施最小化修复
5. 验证解决方案有效
针对每个问题，提供：
- 根因说明
- 支持诊断的证据
- 具体代码修复
- 测试方法
专注于修复根本问题，而非表面症状。
在 .cursor/agents/debugger.md 中创建一个子代理文件，在 YAML 头部区块中包含 name 和 description。debugger 子代理应专注于根因分析：捕获堆栈跟踪、识别复现步骤、隔离故障、进行最小化修复，并验证解决方案。

Try in Cursor
测试运行工具

---
name: test-runner
description: 测试自动化专家。主动运行测试并修复失败的测试。
---
你是一位测试自动化专家。
当你看到代码变更时,主动运行相应的测试。
如果测试失败:
1. 分析失败输出
2. 识别根本原因
3. 在保留测试意图的同时修复问题
4. 重新运行以验证
报告测试结果,包括:
- 通过/失败的测试数量
- 失败测试的摘要
- 为修复问题所做的更改
在 .cursor/agents/test-runner.md 中创建一个子代理文件，在 YAML frontmatter 中包含 name 和 description（描述中需提及 "Use proactively"）。test-runner 子代理应在检测到代码变更时主动运行测试，分析失败原因，在保持测试意图不变的前提下修复问题，并报告结果。

Try in Cursor
最佳实践
编写职责单一的子代理 — 每个子代理都应只有一个清晰的职责。避免泛用型的「辅助（helper）」代理。
投入精力写好描述 — description 字段决定 Agent 何时将任务委派给你的子代理。花时间打磨它。通过编写提示并检查是否触发了正确的子代理来进行测试。
保持提示简洁 — 冗长、散乱的提示会削弱聚焦度。要具体、直接。
将子代理纳入版本控制 — 把 .cursor/agents/ 提交到你的代码库，让整个团队都能受益。
从 Agent 生成的代理开始 — 先让 Agent 帮你起草初始配置，然后再进行自定义。
使用 hooks 进行文件输出 — 如果你需要子代理生成结构化的输出文件，考虑使用 hooks 来一致地处理并保存这些结果。
需要避免的反模式
不要创建几十个泛泛的子 Agent。 拥有 50+ 个只写着“帮助写代码”之类模糊说明的子 Agent 是低效的。Agent 不会知道什么时候该用它们，你也会在维护它们上浪费时间。

描述过于模糊 —— “用于通用任务”不会给 Agent 任何关于何时委托的信号。请具体一些：例如“在实现基于 OAuth 提供商的认证流程时使用”。
提示词过于冗长 —— 2,000 字的 prompt 并不会让子 Agent 更聪明，只会让它更慢、更难维护。
重复 slash 命令的功能 —— 如果任务是单一用途且不需要上下文隔离，请改用 slash 命令。
子 Agent 过多 —— 先从 2–3 个聚焦的子 Agent 开始。只有在出现清晰且彼此区分的使用场景时再增加。
管理子代理
创建子代理
创建子代理最简单的方式是让 Agent 帮你创建：

在 .cursor/agents/security-reviewer.md 路径下创建一个子代理文件，使用包含 name 和 description 的 YAML 头部信息。security-reviewer 子代理应检查代码中的常见漏洞，如注入、XSS 和硬编码密钥等。

Try in Cursor
你也可以在 .cursor/agents/（项目）或 ~/.cursor/agents/（用户）目录中添加 markdown 文件来手动创建子代理。

查看子代理
Agent 会将所有自定义子代理纳入其可用工具中。你可以在项目的 .cursor/agents/ 目录中查看已配置的子代理。

性能与成本
使用 Subagents 存在取舍。理解这些取舍有助于你决定何时使用它们。

优点	代价
上下文隔离	启动开销（每个 subagent 都需要自行收集上下文）
并行执行	更高的 token 消耗（多个上下文同时运行）
专门化能力	延迟（对于简单任务可能比主 agent 更慢）
Token 与成本考量
Subagent 会独立消耗 token — 每个 subagent 都有自己的上下文窗口和 token 用量。并行运行五个 subagent，消耗的 token 大约是单个 agent 的五倍。
评估额外开销 — 对于快速、简单的任务，主 agent 往往更快。Subagent 更适合处理复杂、长时间运行或需要并行的工作。
Subagent 可能更慢 — 它的优势在于上下文隔离，而不是速度。执行简单任务时，subagent 可能比主 agent 更慢，因为它是从零开始的。
常见问题

子代理可以启动其他子代理吗？

我该如何查看子代理在做什么？

如果子代理失败会发生什么？

我可以在子代理中使用 MCP 工具吗？

我该如何调试行为异常的子代理？



简体中文
子代理如何运作
前台 vs 后台
何时使用 subagent
快速开始
自定义子智能体
文件位置
文件格式
配置字段
使用子代理
自动委派
显式调用
并行执行
恢复子代理
常见模式
验证代理
协调器模式
子代理示例
调试器
测试运行工具
最佳实践
需要避免的反模式
管理子代理
创建子代理
查看子代理
性能与成本
Token 与成本考量
常见问题

复制页面

分享反馈

详细说明

询问有关文档的问题
Agent

Sonnet 4.5

Tokenizer Off
上下文: 0/200k (0%)

@ Mentions | Cursor Docs
Skip to main content
文档
API
学习

搜索文档...
⌘K
询问 AI⌘I
仪表板
Command Palette
Search for a command to run...


开始使用
欢迎
快速入门
概念
模型
定价
Agent
概述
模式
审查
终端
浏览器
安全性
钩子
上下文
规则
命令
技能
子代理
语义搜索
@ 提及

模型上下文协议 (MCP)
功能
Tab

云端

命令行界面

内联编辑
Bugbot
集成
Slack
Linear
GitHub
Git
GitLab
深层链接
配置
忽略的文件
扩展
键盘快捷键
主题
Shell 命令
并行 Agent

BYOK

语言

迁移
账户

账单
更新访问权限

团队

企业版
实用指南
Agent 工作流程
构建 MCP 服务器
Web 开发
数据科学
大型代码库
Mermaid 图表
使用 Bugbot 规则
故障排除
常见问题
获取请求 ID
故障排除指南
下载
上下文
@ 提及
使用方向键浏览建议项。按下 Enter 进行选择。若某条建议是 Files 之类的类别项，建议列表会被筛选，只显示该类别中最相关的项目。

@Files 与文件夹
引用文件
要引用整个文件，先选择 @Files & Folders，然后选择要搜索的文件名。你也可以将侧边栏中的文件直接拖入 Agent，添加为上下文。

@Files & Folders 符号
引用文件夹
当使用 @Folders 引用文件夹时，Cursor 会提供该文件夹的路径及其内容概览，帮助 AI 理解有哪些可用资源。

选中文件夹后，输入 / 以进入下一级并查看所有子文件夹。

@Folders 符号
上下文管理
大型文件和文件夹会自动精简，以适配上下文限制。详见文件和文件夹凝缩。

@Code
使用 @Code 符号引用特定代码片段。与 @Files & Folders 相比，它提供了更细粒度的控制，让你可以选择精确的代码片段，而非整个文件。

@Code symbol
@Docs
Docs feature
@Docs 功能可以让你利用文档来帮助编写代码。Cursor 内置了常用的文档资源，你也可以添加自己的文档。

使用现有文档
在聊天中输入 @Docs 查看可用文档。浏览并选择常用的框架和库。

添加你自己的文档
要添加当前尚未提供的文档：

输入 @Docs，然后选择 Add new doc
粘贴文档站点的 URL
Add new doc
添加后，Cursor 会读取并理解该文档，包括所有子页面。像使用其他文档一样使用它即可。

启用 Share with team，让团队中的所有成员都可以访问该文档。

管理文档
前往 Cursor Settings > Indexing & Docs 查看你添加的所有文档。在这里你可以：

编辑文档 URL
删除不再需要的文档
添加新的文档
管理文档
内置命令
Summarize：压缩上下文窗口，并对当前对话进行总结。
你也可以定义自定义命令并在对话中使用。

更新日志
Cursor 2.0 对上下文和 @ 提及进行了改进，并弃用了一些相关功能。

我们在界面上移除了提示输入框顶部用于展示已包含上下文的顶部栏。不过，Agent 依然能看到与之前相同的上下文。文件和目录现在以内联标签的形式显示。我们还改进了带有标记上下文的提示词在复制/粘贴时的体验。
我们移除了上下文菜单中的一些显式条目，包括 @Definitions、@Web、@Link、@Recent Changes、@Linter Errors 等。Agent 现在可以自动获取上下文，而无需在提示输入框中手动附加这些内容。比如，相比使用 @Git，你现在可以直接让 Agent 审查当前分支的变更，或某些特定的提交记录。
Notepads 已被弃用。
现在可以通过将鼠标悬停在提示输入框中的上下文指示条上来查看已应用的规则。



简体中文
@Files 与文件夹
引用文件
引用文件夹
上下文管理
@Code
@Docs
使用现有文档
添加你自己的文档
管理文档
内置命令
更新日志

复制页面

分享反馈

详细说明

询问有关文档的问题
Agent

Sonnet 4.5

Tokenizer Off
上下文: 0/200k (0%)

Model Context Protocol (MCP) | Cursor Docs
Skip to main content
文档
API
学习

搜索文档...
⌘K
询问 AI⌘I
仪表板
Command Palette
Search for a command to run...


开始使用
欢迎
快速入门
概念
模型
定价
Agent
概述
模式
审查
终端
浏览器
安全性
钩子
上下文
规则
命令
技能
子代理
语义搜索
@ 提及

模型上下文协议 (MCP)
概述
目录
安装链接
功能
Tab

云端

命令行界面

内联编辑
Bugbot
集成
Slack
Linear
GitHub
Git
GitLab
深层链接
配置
忽略的文件
扩展
键盘快捷键
主题
Shell 命令
并行 Agent

BYOK

语言

迁移
账户

账单
更新访问权限

团队

企业版
实用指南
Agent 工作流程
构建 MCP 服务器
Web 开发
数据科学
大型代码库
Mermaid 图表
使用 Bugbot 规则
故障排除
常见问题
获取请求 ID
故障排除指南
下载
上下文
模型上下文协议（MCP）
什么是 MCP？
Model Context Protocol（MCP） 让 Cursor 可以连接到外部工具和数据源。

服务器
浏览可用的 MCP 服务器。点击“Add to Cursor”即可直接安装到 Cursor。

Search by name, description, or transport
筛选
名称	安装	描述
Amplitude
Add to Cursor	Behavior analytics and experimentation platform for product data insights.
Apify
Add to Cursor	Extract data from any website with thousands of scrapers, crawlers, and automations
Astro docs server
Add to Cursor	This server provides up-to-date access to the official Astro documentation.
Atlassian
Add to Cursor	Project management and collaboration tools including Jira and Confluence.
Auth0
Add to Cursor	Manage Auth0 resources.
Show more servers
为什么使用 MCP？
MCP 能把 Cursor 连接到外部系统和数据。无需反复解释项目结构，可以直接与你的工具集成。

你可以使用任何可以向 stdout 输出或提供 HTTP 端点的语言来编写 MCP 服务器，例如 Python、JavaScript、Go 等。

工作原理
MCP 服务器通过协议暴露功能，使 Cursor 能连接到外部工具或数据源。

Cursor 支持三种传输方式：

传输方式	执行环境	部署方式	用户	输入	认证方式
stdio	本地	由 Cursor 管理	单用户	Shell 命令	手动
SSE	本地/远程	部署为服务器	多用户	SSE 端点 URL	OAuth
Streamable HTTP	本地/远程	部署为服务器	多用户	HTTP 端点 URL	OAuth
协议支持
Cursor 支持以下 MCP 协议能力：

功能	支持情况	描述
Tools	已支持	供 AI 模型执行的函数
Prompts	已支持	面向用户的消息模板和工作流
Resources	已支持	可读取和引用的结构化数据源
Roots	已支持	服务器发起的 URI 或文件系统边界查询
Elicitation	已支持	服务器发起的向用户请求更多信息的操作
安装 MCP 服务器
一键安装
从我们的 MCP 服务器库中安装 MCP 服务器，并通过 OAuth 完成认证。

浏览 MCP 工具

浏览可用的 MCP 服务器

Add to Cursor 按钮

创建一个“Add to Cursor”按钮


使用
mcp.json
通过 JSON 文件配置自定义 MCP 服务器：

CLI Server - Node.js

{
  "mcpServers": {
    "server-name": {
      "command": "npx",
      "args": ["-y", "mcp-server"],
      "env": {
        "API_KEY": "value"
      }
    }
  }
}
CLI Server - Python

{
  "mcpServers": {
    "server-name": {
      "command": "python",
      "args": ["mcp-server.py"],
      "env": {
        "API_KEY": "value"
      }
    }
  }
}
Remote Server

// 使用 HTTP 或 SSE 的 MCP 服务器 - 在服务器上运行
{
  "mcpServers": {
    "server-name": {
      "url": "http://localhost:3000/mcp",
      "headers": {
        "API_KEY": "value"
      }
    }
  }
}
远程服务器的静态 OAuth
对于使用 OAuth 的 MCP 服务器，你可以在 mcp.json 中提供静态 OAuth 客户端凭据，而不是使用动态客户端注册。适用于以下情况：

MCP 提供商给了你固定的 Client ID（以及可选的 Client Secret）
提供商要求将重定向 URL 加入白名单（例如 Figma、Linear）
提供商不支持 OAuth 2.0 动态客户端注册
在使用 url 的远程服务器配置项中添加一个 auth 对象：

Remote Server with Static OAuth

{
  "mcpServers": {
    "oauth-server": {
      "url": "https://api.example.com/mcp",
      "auth": {
        "CLIENT_ID": "your-oauth-client-id",
        "CLIENT_SECRET": "your-client-secret",
        "scopes": ["read", "write"]
      }
    }
  }
}
字段	必填	描述
CLIENT_ID	是	来自 MCP 提供商的 OAuth 2.0 Client ID
CLIENT_SECRET	否	OAuth 2.0 Client Secret（如果提供商使用机密客户端）
scopes	否	要请求的 OAuth scopes。如果省略，Cursor 将使用 /.well-known/oauth-authorization-server 来获取 scopes_supported
静态重定向 URL
Cursor 对所有 MCP 服务器使用 固定的 OAuth 重定向 URL：


cursor://anysphere.cursor-mcp/oauth/callback
在配置 MCP 提供者的 OAuth 应用时，将此 URL 注册为允许的重定向 URI。服务器是通过 OAuth 的 state 参数来标识的，因此一个重定向 URL 即可用于所有 MCP 服务器。

与配置插值配合使用
auth 的取值支持与其他字段相同的插值语法：


{
  "mcpServers": {
    "oauth-server": {
      "url": "https://api.example.com/mcp",
      "auth": {
        "CLIENT_ID": "${env:MCP_CLIENT_ID}",
        "CLIENT_SECRET": "${env:MCP_CLIENT_SECRET}"
      }
    }
  }
}
使用环境变量来配置 Client ID 和 Client Secret，而不是在代码中将它们硬编码。

STDIO 服务器配置
对于 STDIO 服务器（本地命令行服务器），请在你的 mcp.json 中配置以下字段：

字段	必填	说明	示例
type	Yes	服务器连接类型	"stdio"
command	Yes	启动服务器可执行文件的命令。该命令必须在系统 PATH 中可用，或包含其完整路径。	"npx", "node", "python", "docker"
args	No	传递给该命令的参数数组	["server.py", "--port", "3000"]
env	No	服务器的环境变量	{"API_KEY": "${env:api-key}"}
envFile	No	用于加载更多环境变量的环境文件路径	".env", "${workspaceFolder}/.env"
envFile 选项仅适用于 STDIO 服务器。远程服务器（HTTP/SSE）不支持 envFile。对于远程服务器，请使用 config interpolation，配合在 shell 配置文件或系统环境中设置的环境变量。

使用扩展 API
对于以编程方式注册 MCP 服务器，Cursor 提供了一个扩展 API，允许在不修改 mcp.json 文件的情况下进行动态配置。这对于企业环境和自动化配置流程尤其有用。

MCP 扩展 API 参考

了解如何使用 vscode.cursor.mcp.registerServer() 以编程方式注册 MCP 服务器


配置位置
项目配置

在你的项目中创建 .cursor/mcp.json，用于该项目专用的工具。

全局配置

在你的主目录中创建 ~/.cursor/mcp.json，用于在所有项目中可用的工具。

配置插值
在 mcp.json 中的字段值里使用变量。Cursor 会在这些字段中解析变量：command、args、env、url 和 headers。

支持的语法：

${env:NAME} 环境变量
${userHome} 你的用户主目录路径
${workspaceFolder} 项目根目录（包含 .cursor/mcp.json 的文件夹）
${workspaceFolderBasename} 项目根目录名称
${pathSeparator} 和 ${/} 操作系统路径分隔符
示例


{
  "mcpServers": {
    "local-server": {
      "command": "python",
      "args": ["${workspaceFolder}/tools/mcp_server.py"],
      "env": {
        "API_KEY": "${env:API_KEY}"
      }
    }
  }
}

{
  "mcpServers": {
    "remote-server": {
      "url": "https://api.example.com/mcp",
      "headers": {
        "Authorization": "Bearer ${env:MY_SERVICE_TOKEN}"
      }
    }
  }
}
身份验证
MCP 服务器通过环境变量进行身份验证。通过配置传递 API 密钥和令牌。

Cursor 支持对需要 OAuth 的服务器进行认证。

在聊天中使用 MCP
Agent 会在需要时自动使用列在 Available Tools 下的 MCP 工具，其中包括 Plan Mode。你可以按名称指定某个工具，或描述你的需求。可在设置中启用或禁用工具。

切换工具
可以直接在聊天界面中启用或禁用 MCP 工具。点击工具列表中的工具名称即可切换。已禁用的工具不会被加载到上下文中，Agent 也无法使用它们。

工具使用授权
默认情况下，Agent 在使用 MCP 工具前会先请求你的授权。点击工具名称旁边的箭头以查看参数。

工具使用确认提示
自动运行
启用自动运行，让 Agent 在无需确认的情况下使用 MCP 工具，其行为类似于在终端中执行命令。可在此处了解更多自动运行设置。

工具响应
Cursor 会在聊天中显示工具调用结果，并提供参数和结果的可展开视图：

MCP 工具调用结果
将图像用作上下文
MCP 服务器可以返回图像（截图、图表等），并以 base64 编码字符串的形式返回：


const RED_CIRCLE_BASE64 = "/9j/4AAQSkZJRgABAgEASABIAAD/2w...";
// ^ 完整 base64 已省略以提高可读性
server.tool("generate_image", async (params) => {
  return {
    content: [
      {
        type: "image",
        data: RED_CIRCLE_BASE64,
        mimeType: "image/jpeg",
      },
    ],
  };
});
有关实现细节，请参见此示例服务器。Cursor 会将返回的图像添加到对话中。如果模型支持图像，它也会对其进行分析。

安全注意事项
安装 MCP 服务器时，请注意以下安全做法：

验证来源：只从可信赖的开发者和代码仓库安装 MCP 服务器
检查权限：确认服务器将访问哪些数据和 API
限制 API 密钥：使用权限最小化的受限 API 密钥
审计代码：对于关键集成场景，审查服务器的源代码
请记住，MCP 服务器可以代表你访问外部服务并执行代码。安装前务必弄清该服务器的功能和行为。

实战示例
要了解 MCP 在实际开发中的用法，请参阅我们的 Web 开发指南，其中演示了如何将 Linear、Figma 和浏览器工具集成到你的开发流程中。

常见问题

MCP 服务器有什么用？

如何调试 MCP 服务器问题？

可以暂时禁用某个 MCP 服务器吗？

如果 MCP 服务器崩溃或超时会发生什么？

如何更新 MCP 服务器？

可以在处理敏感数据时使用 MCP 服务器吗？



简体中文
什么是 MCP？
服务器
为什么使用 MCP？
工作原理
协议支持
安装 MCP 服务器
一键安装
使用 `mcp.json`
远程服务器的静态 OAuth
静态重定向 URL
与配置插值配合使用
STDIO 服务器配置
使用扩展 API
配置位置
配置插值
身份验证
在聊天中使用 MCP
切换工具
工具使用授权
自动运行
工具响应
将图像用作上下文
安全注意事项
实战示例
常见问题

复制页面

分享反馈

详细说明

询问有关文档的问题
Agent

Sonnet 4.5

Tokenizer Off
上下文: 0/200k (0%)

