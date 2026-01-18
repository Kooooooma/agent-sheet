Skip to main content

This article is also available in Simplified Chinese.

GitHub Docs

Home
GitHub Copilot
GitHub Copilot/Get started/
Best practices for using GitHub Copilot
Learn how to get the most out of Copilot.

In this article
Understand Copilot's strengths and weaknesses
GitHub Copilot is an AI coding assistant that helps you write code faster and with less effort, allowing you to focus more energy on problem solving and collaboration. Before you start working with Copilot, it's important to understand when you should and shouldn't use it.

Some of the things Copilot does best include:

Writing tests and repetitive code
Debugging and correcting syntax
Explaining and commenting code
Generating regular expressions
Copilot is not designed to:

Respond to prompts unrelated to coding and technology
Replace your expertise and skills. Remember that you are in charge, and Copilot is a powerful tool at your service.
Choose the right Copilot tool for the job
While Copilot inline suggestions and Copilot Chat share some functionality, the two tools are best used in different circumstances.

Inline suggestions work best for:

Completing code snippets, variable names, and functions as you write them
Generating repetitive code
Generating code from inline comments in natural language
Generating tests for test-driven development
Alternatively, Copilot Chat is best suited for:

Answering questions about code in natural language
Generating large sections of code, then iterating on that code to meet your needs
Accomplishing specific tasks with keywords and skills. Copilot Chat has built-in keywords and skills designed to provide important context for prompts and accomplish common tasks quickly. Different types of keywords and skills are available in different Copilot Chat platforms. See Asking GitHub Copilot questions in your IDE.
Completing a task as a specific persona. For example, you can tell Copilot Chat that it is a Senior C++ Developer who cares greatly about code quality, readability, and efficiency, then ask it to review your code.
Create thoughtful prompts
Prompt engineering, or structuring your request so Copilot can easily understand and respond to it, plays a critical role in Copilot's ability to generate a valuable response. Here are a few quick tips you should remember while crafting your prompts:

Break down complex tasks.
Be specific about your requirements.
Provide examples of things like input data, outputs, and implementations.
Follow good coding practices.
To learn more, see Prompt engineering for GitHub Copilot Chat.

Check Copilot's work
While Copilot is very powerful, it is still a tool capable of making mistakes, and you should always validate the code it suggests. Use the following tips to ensure you are accepting accurate, secure suggestions:

Understand suggested code before you implement it. To ensure you fully understand Copilot's suggestion, you can ask Copilot Chat to explain the code.
Review Copilot's suggestions carefully. Consider not just the functionality and security of the suggested code, but also the readability and maintainability of the code moving forward.
Use automated tests and tooling to check Copilot's work. With the help of tools like linting, code scanning, and IP scanning, you can automate an additional layer of security and accuracy checks.
Tip

Optionally, you may want to check Copilot's work for similarities to existing public code. If you don't want to use similar code, you can turn off suggestions matching public code. See Managing GitHub Copilot policies as an individual subscriber or Managing policies and features for GitHub Copilot in your organization.

Guide Copilot towards helpful outputs
There are several adjustments you can make to steer Copilot towards more valuable responses:

Provide Copilot with helpful context:
If you are using Copilot in your IDE, open relevant files and close irrelevant files.
In Copilot Chat, if a particular request is no longer helpful context, delete that request from the conversation. Alternatively, if none of the context of a particular conversation is helpful, start a new conversation.
If you are using Copilot Chat in GitHub, provide specific repositories, files, symbols, and more as context. See Asking GitHub Copilot questions in GitHub.
If you are using Copilot Chat in your IDE, use keywords to focus Copilot on a specific task or piece of context. See Asking GitHub Copilot questions in your IDE.
Rewrite your prompts to generate different responses. If Copilot is not providing a helpful response, try rephrasing your prompt, or even breaking your request down into multiple smaller prompts.
Pick the best available suggestion. When you are using inline suggestions, Copilot might offer more than one suggestion. You can use keyboard shortcuts to quickly look through all available suggestions. For the default keyboard shortcuts for your operating system, see Configuring GitHub Copilot in your environment.
Provide feedback to improve future suggestions. You can provide feedback in many ways:
For inline suggestions, accept or reject Copilot's suggestion.
For individual responses in Copilot Chat, click the thumbs up or thumbs down icons next to the response.
For Copilot Chat in your IDE, see Asking GitHub Copilot questions in your IDE for instructions specific to your environment.
For Copilot Chat in GitHub, leave a comment on the feedback discussion.
Stay up-to-date on Copilot's features
New features are regularly added to Copilot to create new abilities, build on existing features, and improve the user experience. To stay up-to-date with Copilot's features, see the changelog.

Help and support
Did you find what you needed?

Privacy policy
Help us make these docs great!
All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.

Learn how to contribute

Still need help?
Ask the GitHub community
Contact support
Legal
© 2026 GitHub, Inc.
Terms
Privacy
Status
Pricing
Expert services
Blog
Best practices for using GitHub Copilot - GitHub Docs

Skip to main content

This article is also available in Simplified Chinese.

GitHub Docs

Home
GitHub Copilot
GitHub Copilot/Get started/
GitHub Copilot features
GitHub Copilot offers a suite of features. Copilot also offers a suite of features for administrators.

In this article
GitHub Copilot features
Inline suggestions
Autocomplete-style suggestions from Copilot in supported IDEs (Visual Studio Code, Visual Studio, JetBrains IDEs, Azure Data Studio, Xcode, Vim/Neovim, and Eclipse). See Getting code suggestions in your IDE with GitHub Copilot.

If you use VS Code, Xcode, and Eclipse, you can also use next edit suggestions (public preview), which will predict the location of the next edit you are likely to make and suggest a completion for it.

Copilot Chat
A chat interface that lets you ask coding-related questions. GitHub Copilot Chat is available on the GitHub website, in GitHub Mobile, in supported IDEs (Visual Studio Code, Visual Studio, JetBrains IDEs, Eclipse IDE, and Xcode), and in Windows Terminal. Users can also use skills with Copilot Chat. See Asking GitHub Copilot questions in GitHub and Asking GitHub Copilot questions in your IDE.

Copilot coding agent
An autonomous AI agent that can make code changes for you. You can assign a GitHub issue to Copilot and the agent will work on making the required changes, and will create a pull request for you to review. You can also ask Copilot to create a pull request from Copilot Chat. See GitHub Copilot coding agent.

Copilot CLI (public preview)
A command line interface that lets you use Copilot from within the terminal. You can get answers to questions, or you can ask Copilot to make changes to your local files. You can also use Copilot CLI to interact with GitHub.com—for example, listing your open pull requests, or asking Copilot to create an issue. See About GitHub Copilot CLI.

Copilot code review
AI-generated code review suggestions to help you write better code. See Using GitHub Copilot code review.

New tools in Copilot code review is in public preview and subject to change. See About GitHub Copilot code review.

Copilot pull request summaries
AI-generated summaries of the changes that were made in a pull request, which files they impact, and what a reviewer should focus on when they conduct their review. See Creating a pull request summary with GitHub Copilot.

Copilot text completion (public preview)
AI-generated text completion to help you write pull request descriptions quickly and accurately. See Writing pull request descriptions with GitHub Copilot text completion.

Copilot Edits
Copilot Edits is available in Visual Studio Code, Visual Studio, and JetBrains IDEs. Use Copilot Edits to make changes across multiple files directly from a single Copilot Chat prompt. Copilot Edits has the following modes:

Edit mode
Edit mode is only available in Visual Studio Code and JetBrains IDEs.

Use edit mode when you want more granular control over the edits that Copilot proposes. In edit mode, you choose which files Copilot can make changes to, provide context to Copilot with each iteration, and decide whether or not to accept the suggested edits after each turn.

Edit mode is best suited to use cases where:

You want to make a quick, specific update to a defined set of files.
You want full control over the number of LLM requests Copilot uses.
Agent mode
Use agent mode when you have a specific task in mind and want to enable Copilot to autonomously edit your code. In agent mode, Copilot determines which files to make changes to, offers code changes and terminal commands to complete the task, and iterates to remediate issues until the original task is complete.

Agent mode is best suited to use cases where:

Your task is complex, and involves multiple steps, iterations, and error handling.
You want Copilot to determine the necessary steps to take to complete the task.
The task requires Copilot to integrate with external applications, such as an MCP server.
Copilot custom instructions
Enhance Copilot Chat responses by providing contextual details on your preferences, tools, and requirements. See About customizing GitHub Copilot responses.

Copilot Memory (public preview)
Copilot can deduce and store useful information about a repository, which Copilot coding agent and Copilot code review can use to improve the quality of their output when working in that repository. For more information, see About agentic memory for GitHub Copilot.

Copilot in GitHub Desktop
Automatically generate commit messages and descriptions with Copilot in GitHub Desktop based on the changes you make to your project.

Copilot Spaces
Organize and centralize relevant content—like code, docs, specs, and more—into Spaces that ground Copilot’s responses in the right context for a specific task. See About GitHub Copilot Spaces.

GitHub Spark (public preview)
Build and deploy full-stack applications using natural-language prompts that seamlessly integrate with the GitHub platform for advanced development. See Building and deploying AI-powered apps with GitHub Spark.

GitHub Copilot features for administrators
The following features are available to organization and enterprise owners with a Copilot Business or Copilot Enterprise plan.

Policy management
Manage policies for Copilot in your organization or enterprise. See Managing policies and features for GitHub Copilot in your organization and Managing policies and features for GitHub Copilot in your enterprise.

Access management
Enterprise owners can specify which organizations in the enterprise can use Copilot, and organization owners can specify which organization members can use Copilot. See Managing access to GitHub Copilot in your organization and Managing access to Copilot in your enterprise.

Usage data
Review Copilot usage data within your organization or enterprise to inform how to manage access and drive adoption of Copilot. See Reviewing user activity data for GitHub Copilot in your organization and Viewing Copilot license usage in your enterprise.

Audit logs
Review audit logs for Copilot in your organization to understand what actions have been taken and by which users. See Reviewing audit logs for GitHub Copilot Business.

Exclude files
Configure Copilot to ignore certain files. This can be useful if you have files that you don't want to be available to Copilot. See Excluding content from GitHub Copilot.

Next steps
To learn more about the plans available for GitHub Copilot, see Plans for GitHub Copilot.
To start using Copilot, see Setting up GitHub Copilot.
Help and support
Did you find what you needed?

Privacy policy
Help us make these docs great!
All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.

Learn how to contribute

Still need help?
Ask the GitHub community
Contact support
Legal
© 2026 GitHub, Inc.
Terms
Privacy
Status
Pricing
Expert services
Blog
GitHub Copilot features - GitHub Docs

Skip to main content

This article is also available in Simplified Chinese.

GitHub Docs

Home
GitHub Copilot
GitHub Copilot/How-tos/Configure custom instructions/
Adding personal custom instructions for GitHub Copilot
Customize GitHub Copilot Chat responses to match your personal preferences.

In this article
Note

Personal custom instructions are currently only supported for GitHub Copilot Chat in GitHub.

For an overview of the methods you can use to customize GitHub Copilot Chat responses, see About customizing GitHub Copilot responses.

About personal custom instructions for GitHub Copilot Chat
You can add custom instructions for GitHub Copilot Chat in order to receive chat responses that are customized to your personal preferences, across your conversations on the GitHub website. For example, you can choose to always have Copilot Chat respond in a preferred language or with a particular style. Some examples of instructions you could add are:

Always respond in Spanish.
Your style is a helpful colleague, minimize explanations but provide enough context to understand the code.
Always provide examples in TypeScript.
Note

Multiple types of custom instructions can apply to a request sent to Copilot. Personal instructions take the highest priority, followed by repository instructions, with organization instructions prioritized last. However, all sets of relevant instructions are still combined and provided to Copilot.
Whenever possible, you should avoid providing conflicting sets of instructions. If you are concerned about response quality, you can also choose to temporarily disable repository instructions. See Adding repository custom instructions for GitHub Copilot.
Adding personal custom instructions
You can add personal custom instructions in Copilot Chat in GitHub.

Open Copilot Chat.

In the bottom left corner, click your profile picture, then click  Personal instructions.

Add natural language instructions to the text box.

You can write your instructions in any format you prefer. For example, you can write them as a single block of text, each on a new line, or separated by blank lines.

Optionally, click  to view templates you can use for common instructions. If you click on one of the boxes, such as "Communication", instructions will be added to the text box with placeholders, such as {format} that you can replace with your preferences.

Click Save. Your instructions are now active, and will stay active until you change or remove them.

Did you successfully add personal custom instructions?

 

Further reading
Custom instructions—a curated collection of examples
Help and support
Did you find what you needed?

Privacy policy
Help us make these docs great!
All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.

Learn how to contribute

Still need help?
Ask the GitHub community
Contact support
Legal
© 2026 GitHub, Inc.
Terms
Privacy
Status
Pricing
Expert services
Blog

Skip to main content

This article is also available in Simplified Chinese.

GitHub Docs

Home
GitHub Copilot
GitHub Copilot/How-tos/Configure custom instructions/
Adding repository custom instructions for GitHub Copilot
Create repository custom instructions files that give Copilot additional context on how to understand your project and how to build, test and validate its changes.

Tool navigation
Visual Studio Code
JetBrains IDEs
Visual Studio
Web browser
Eclipse
In this article
This version of this article is for using repository custom instructions in JetBrains IDEs. Click the tabs above for instructions on using custom instructions in other environments.

Introduction
Repository custom instructions let you provide Copilot with repository-specific guidance and preferences. For more information, see About customizing GitHub Copilot responses.

Prerequisites for repository custom instructions
You must have a custom instructions file (see the instructions below).
The latest version of the Copilot extension must be installed in your JetBrains IDE.
Creating custom instructions
JetBrains IDEs support a single .github/copilot-instructions.md custom instructions file stored in the repository, and a locally stored global-copilot-instructions.md file.

You can create the .github/copilot-instructions.md file in your repository using the Copilot settings page, or you can create the file manually.

Whitespace between instructions is ignored, so the instructions can be written as a single paragraph, each on a new line, or separated by blank lines for legibility.

Using the settings page
In your JetBrains IDE, click the File menu (Windows), or the name of the application in the menu bar (macOS), then click Settings.
Under Tools, click GitHub Copilot, then click Customizations.
Under "Copilot Instructions", click Workspace or Global to choose whether the custom instructions apply to the current workspace or all workspaces.
Manually creating a workspace custom instructions file
In the root of your repository, create a file named .github/copilot-instructions.md.

Create the .github directory if it does not already exist.

Add natural language instructions to the file, in Markdown format.

Once saved, these instructions will apply to the current workspace in JetBrains IDEs that you open with Copilot enabled.

Manually creating a global custom instructions file
To apply the same instructions across all workspaces in JetBrains IDEs, you can create a global custom instructions file on your local machine.

Open your file explorer or terminal.

Navigate to the appropriate location for your operating system:

macOS: /Users/YOUR-USERNAME/.config/github-copilot/intellij/
Windows: C:\Users\YOUR-USERNAME\AppData\Local\github-copilot\intellij\
Create a file named global-copilot-instructions.md in that directory.

Add your custom instructions in natural language, using Markdown format.

Once saved, these instructions will apply globally across all workspaces in JetBrains IDEs that you open with Copilot enabled.

Did you successfully add a custom instructions file to your repository?

 

Repository custom instructions in use
The instructions in the file(s) are available for use by Copilot as soon as you save the file(s). The complete set of instructions will be automatically added to requests that you submit to Copilot in the context of that repository. For example, they are added to the prompt you submit to Copilot Chat.

Custom instructions are not visible in the Chat view or inline chat, but you can verify that they are being used by Copilot by looking at the References list of a response in the Chat view. If custom instructions were added to the prompt that was sent to the model, the .github/copilot-instructions.md file is listed as a reference. You can click the reference to open the file.

Using prompt files
Note

Copilot prompt files are in public preview and subject to change. Prompt files are only available in VS Code, Visual Studio, and JetBrains IDEs. See About customizing GitHub Copilot responses.
For community-contributed examples of prompt files for specific languages and scenarios, see the Awesome GitHub Copilot Customizations repository.
Prompt files let you build and share reusable prompt instructions with additional context. A prompt file is a Markdown file, stored in your workspace, that mimics the existing format of writing prompts in Copilot Chat (for example, Rewrite #file:x.ts). You can have multiple prompt files in your workspace, each of which defines a prompt for a different purpose.

When writing prompt instructions, you can reference other files in the workspace by using Markdown links—for example, [index](../../web/index.ts)—or by using the #file:../../web/index.ts syntax. Paths are relative to the prompt file. Referencing other files allows you to provide additional context, such as API specifications or product documentation.

Once prompt files are saved, their instructions will apply to the current workspace in JetBrains IDEs that you open with Copilot enabled.

Creating prompt files using the command line
Create the .github/prompts directory if it doesn't already exist in your workspace. This directory will be the location for your prompt files.
Create a prompt file in the .github/prompts directory. The prompt file name can contain alphanumeric characters and spaces and should describe the purpose of the prompt information the file will contain. The file name must end with the .prompt.md file name extension, for example TESTPROMPT.prompt.md.
Write the prompt instructions using Markdown formatting, and save the file.
Creating prompt files using the settings page
In your JetBrains IDE, click the File menu (Windows), or the name of the application in the menu bar (macOS), then click Settings.
Under Tools, under GitHub Copilot, click Edit Settings.
Under "Settings Categories", click Customizations.
Under "Prompt Files", click Workspace, to create a prompt file in your workspace.
Enter a name for the prompt file, excluding the .prompt.md file name extension. The prompt file name can contain alphanumeric characters and spaces and should describe the purpose of the prompt information the file will contain.
Click Ok to save the prompt file name.
Write the prompt instructions using Markdown formatting, and save the file.
Using prompt files
In the chat input box, type / followed by the name of the prompt file. For example, /TESTPROMPT.

Optionally, attach additional files, to provide more context.

Optionally, type additional information in the chat prompt box.

Whether you need to do this or not depends on the contents of the prompt you are using.

Submit the chat prompt.

Further reading
Customization library
Help and support
Did you find what you needed?

Privacy policy
Help us make these docs great!
All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.

Learn how to contribute

Still need help?
Ask the GitHub community
Contact support
Legal
© 2026 GitHub, Inc.
Terms
Privacy
Status
Pricing
Expert services
Blog
Adding repository custom instructions for GitHub Copilot - GitHub Docs
Skip to main content

This article is also available in Simplified Chinese.

GitHub Docs

Home
GitHub Copilot
GitHub Copilot/How-tos/Configure custom instructions/
Adding repository custom instructions for GitHub Copilot
Create repository custom instructions files that give Copilot additional context on how to understand your project and how to build, test and validate its changes.

Tool navigation
Visual Studio Code
JetBrains IDEs
Visual Studio
Web browser
Eclipse
In this article
This version of this article is for using repository custom instructions and prompt files in VS Code. Click the tabs above for instructions on using custom instructions in other environments.

Introduction
Repository custom instructions let you provide Copilot with repository-specific guidance and preferences. For more information, see About customizing GitHub Copilot responses.

Prerequisites for repository custom instructions
You must have a custom instructions file (see the instructions below).
Custom instructions must be enabled. This feature is enabled by default. See Enabling or disabling repository custom instructions later in this article.
Creating custom instructions
VS Code supports three types of repository custom instructions. For details of which GitHub Copilot features support these types of instructions, see About customizing GitHub Copilot responses.

Repository-wide custom instructions, which apply to all requests made in the context of a repository.

These are specified in a copilot-instructions.md file in the .github directory of the repository. See Creating repository-wide custom instructions.

Path-specific custom instructions, which apply to requests made in the context of files that match a specified path.

These are specified in one or more NAME.instructions.md files within or below the .github/instructions directory in the repository. See Creating path-specific custom instructions.

If the path you specify matches a file that Copilot is working on, and a repository-wide custom instructions file also exists, then the instructions from both files are used.

Agent instructions are used by AI agents.

You can create one or more AGENTS.md files, stored anywhere within the repository. When Copilot is working, the nearest AGENTS.md file in the directory tree will take precedence. For more information, see the openai/agents.md repository.

Note

Support of AGENTS.md files outside of the workspace root is currently turned off by default. For details of how to enable this feature, see Use custom instructions in VS Code in the VS Code documentation.

Creating repository-wide custom instructions
In the root of your repository, create a file named .github/copilot-instructions.md.

Create the .github directory if it does not already exist.

Add natural language instructions to the file, in Markdown format.

Whitespace between instructions is ignored, so the instructions can be written as a single paragraph, each on a new line, or separated by blank lines for legibility.

Creating path-specific custom instructions
Create the .github/instructions directory if it does not already exist.

Create one or more NAME.instructions.md files, where NAME indicates the purpose of the instructions. The file name must end with .instructions.md.

At the start of the file, create a frontmatter block containing the applyTo keyword. Use glob syntax to specify what files or directories the instructions apply to.

For example:

---
applyTo: "app/models/**/*.rb"
---
You can specify multiple patterns by separating them with commas. For example, to apply the instructions to all TypeScript files in the repository, you could use the following frontmatter block:

---
applyTo: "**/*.ts,**/*.tsx"
---
Glob examples:

* - will all match all files in the current directory.
** or **/* - will all match all files in all directories.
*.py - will match all .py files in the current directory.
**/*.py - will recursively match all .py files in all directories.
src/*.py - will match all .py files in the src directory. For example, src/foo.py and src/bar.py but not src/foo/bar.py.
src/**/*.py - will recursively match all .py files in the src directory. For example, src/foo.py, src/foo/bar.py, and src/foo/bar/baz.py.
**/subdir/**/*.py - will recursively match all .py files in any subdir directory at any depth. For example, subdir/foo.py, subdir/nested/bar.py, parent/subdir/baz.py, and deep/parent/subdir/nested/qux.py, but not foo.py at a path that does not contain a subdir directory.
Optionally, to prevent the file from being used by either Copilot coding agent or Copilot code review, add the excludeAgent keyword to the frontmatter block. Use either "code-review" or "coding-agent".

For example, the following file will only be read by Copilot coding agent.

---
applyTo: "**"
excludeAgent: "code-review"
---
If the excludeAgent keyword is not included in the front matterblock, both Copilot code review and Copilot coding agent will use your instructions.

Add your custom instructions in natural language, using Markdown format. Whitespace between instructions is ignored, so the instructions can be written as a single paragraph, each on a new line, or separated by blank lines for legibility.

Did you successfully add a custom instructions file to your repository?

 

Repository custom instructions in use
The instructions in the file(s) are available for use by Copilot as soon as you save the file(s). The complete set of instructions will be automatically added to requests that you submit to Copilot in the context of that repository. For example, they are added to the prompt you submit to Copilot Chat.

Custom instructions are not visible in the Chat view or inline chat, but you can verify that they are being used by Copilot by looking at the References list of a response in the Chat view. If custom instructions were added to the prompt that was sent to the model, the .github/copilot-instructions.md file is listed as a reference. You can click the reference to open the file.

Screenshot of an expanded References list, showing the 'copilot-instructions.md' file highlighted with a dark orange outline.

Enabling or disabling repository custom instructions
You can choose whether or not you want Copilot to use repository-based custom instructions.

Enabling or disabling custom instructions for Copilot Chat
Custom instructions are enabled for Copilot Chat by default but you can disable, or re-enable, them at any time. This applies to your own use of Copilot Chat and does not affect other users.

Open the Setting editor by using the keyboard shortcut Command+, (Mac) / Ctrl+, (Linux/Windows).
Type instruction file in the search box.
Select or clear the checkbox under Code Generation: Use Instruction Files.
Enabling or disabling custom instructions for Copilot code review
Custom instructions are enabled for Copilot code review by default but you can disable, or re-enable, them in the repository settings on GitHub.com. This applies to Copilot's use of custom instructions for all code reviews it performs in this repository.

On GitHub, navigate to the main page of the repository.

Under your repository name, click  Settings. If you cannot see the "Settings" tab, select the  dropdown menu, then click Settings.

Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.
In the "Code & automation" section of the sidebar, click  Copilot, then Code review.

Toggle the “Use custom instructions when reviewing pull requests” option on or off.

Enabling and using prompt files
Note

Copilot prompt files are in public preview and subject to change. Prompt files are only available in VS Code, Visual Studio, and JetBrains IDEs. See About customizing GitHub Copilot responses.
For community-contributed examples of prompt files for specific languages and scenarios, see the Awesome GitHub Copilot Customizations repository.
Prompt files let you build and share reusable prompt instructions with additional context. A prompt file is a Markdown file, stored in your workspace, that mimics the existing format of writing prompts in Copilot Chat (for example, Rewrite #file:x.ts). You can have multiple prompt files in your workspace, each of which defines a prompt for a different purpose.

Enabling prompt files
To enable prompt files, configure the workspace settings.

Open the command palette by pressing Ctrl+Shift+P (Windows/Linux) / Command+Shift+P (Mac).
Type "Open Workspace Settings (JSON)" and select the option that's displayed.
In the settings.json file, add "chat.promptFiles": true to enable the .github/prompts folder as the location for prompt files. This folder will be created if it does not already exist.
Creating prompt files
Open the command palette by pressing Ctrl+Shift+P (Windows/Linux) / Command+Shift+P (Mac).

Type "prompt" and select Chat: Create Prompt.

Enter a name for the prompt file, excluding the .prompt.md file name extension. The name can contain alphanumeric characters and spaces and should describe the purpose of the prompt information the file will contain.

Write the prompt instructions, using Markdown formatting.

You can reference other files in the workspace by using Markdown links—for example, [index](../../web/index.ts)—or by using the #file:../../web/index.ts syntax. Paths are relative to the prompt file. Referencing other files allows you to provide additional context, such as API specifications or product documentation.

Using prompt files
At the bottom of the Copilot Chat view, click the Attach context icon ().

In the dropdown menu, click Prompt... and choose the prompt file you want to use.

Optionally, attach additional files, including prompt files, to provide more context.

Optionally, type additional information in the chat prompt box.

Whether you need to do this or not depends on the contents of the prompt you are using.

Submit the chat prompt.

For more information about prompt files, see Use prompt files in Visual Studio Code in the Visual Studio Code documentation.

Further reading
Customization library—a curated collection of examples
Help and support
Did you find what you needed?

Privacy policy
Help us make these docs great!
All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.

Learn how to contribute

Still need help?
Ask the GitHub community
Contact support
Legal
© 2026 GitHub, Inc.
Terms
Privacy
Status
Pricing
Expert services
Blog
Adding repository custom instructions for GitHub Copilot - GitHub Docs
Skip to main content

This article is also available in Simplified Chinese.

GitHub Docs

Home
GitHub Copilot
GitHub Copilot/How-tos/Configure custom instructions/
Adding organization custom instructions for GitHub Copilot
Customize Copilot responses for members of your organization.

Who can use this feature?
Organization owners

Organizations with a GitHub Copilot Business or GitHub Copilot Enterprise plan

Note

This feature is currently in public preview and is subject to change.

Support: Organization custom instructions are currently only supported for Copilot Chat on GitHub.com, Copilot code review on GitHub.com and Copilot coding agent on GitHub.com.

Organization owners can add instructions for Copilot, to tailor responses to specific needs and preferences across the organization. For an overview of this, and other types of custom instructions for Copilot, see About customizing GitHub Copilot responses.

Adding organization custom instructions
You can add organization custom instructions via your organization settings.

In the upper-right corner of GitHub, click your profile picture, then click  Organizations.

Next to the organization, click Settings.

In the left sidebar, click  Copilot then click Custom instructions.

Under "Preferences and instructions", add natural language instructions to the text box.

You can write your instructions in any format you prefer. For example, you can write them as a single block of text, each on a new line, or separated by blank lines.

Click Save changes. Your instructions are now active, and will stay active until you change or remove them.

To see your instructions in action, go to https://github.com/copilot and start a conversation.

Did you successfully add custom instructions for your organization?

 

Help and support
Did you find what you needed?

Privacy policy
Help us make these docs great!
All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.

Learn how to contribute

Still need help?
Ask the GitHub community
Contact support
Legal
© 2026 GitHub, Inc.
Terms
Privacy
Status
Pricing
Expert services
Blog
Adding organization custom instructions for GitHub Copilot - GitHub Docs

Skip to main content

This article is also available in Simplified Chinese.

GitHub Docs

Home
GitHub Copilot
GitHub Copilot/Concepts/Agents/Coding agent/
About custom agents
Custom agents enhance Copilot coding agent with specialized assistance tailored to your needs.

Who can use this feature?
Copilot coding agent is available with the GitHub Copilot Pro, GitHub Copilot Pro+, GitHub Copilot Business and GitHub Copilot Enterprise plans. The agent is available in all repositories stored on GitHub, except repositories owned by managed user accounts and where it has been explicitly disabled.

In this article
About custom agents
Custom agents are specialized versions of Copilot coding agent that you can tailor to your unique workflows, coding conventions, and use cases. Instead of repeatedly providing the same instructions and context, custom agents allow you to define specialized agents that act like tailored teammates—following standards, using the right tools, and implementing team-specific practices.

Custom agents are defined using Markdown files, called agent profiles, that specify prompts, tools, and MCP servers. This allows individuals and teams to encode their conventions, frameworks, and desired outcomes directly into Copilot. The agent profile serves as the artifact that defines the custom agent's behavior, and assigning the agent to a task or issue instantiates the custom agent.

Agent profile format
Agent profiles are Markdown files with YAML frontmatter. In their simplest form, they include:

Name: A unique identifier for the custom agent
Description: Explains the agent's purpose and capabilities
Prompt: Custom instructions that define the agent's behavior and expertise
Tools: Specific tools the agent can access. This is optional, and the default is access to all available tools, including built-in tools and MCP server tools.
Organization and enterprise-level agent profiles can also include MCP server configurations within the agent profile, using the mcp-server property.

Example agent profile
This is a basic agent profile with name, description, and prompt configured.

---
name: readme-creator
description: Agent specializing in creating and improving README files
---

You are a documentation specialist focused on README files. Your scope is limited to README  files or other related documentation files only - do not modify or analyze code files.

Focus on the following instructions:
- Create and update README.md files with clear project descriptions
- Structure README sections logically: overview, installation, usage, contributing
- Write scannable content with proper headings and formatting
- Add appropriate badges, links, and navigation elements
- Use relative links (e.g., `docs/CONTRIBUTING.md`) instead of absolute URLs for files within the repository
- Make links descriptive and add alt text to images
Where you can configure custom agents
You can define agent profiles at the repository level (.github/agents/CUSTOM-AGENT-NAME.md in your repository) for project-specific agents, or at the organization or enterprise level (/agents/CUSTOM-AGENT-NAME.md in a .github-private repository) for broader availability. See Preparing to use custom agents in your organization and Preparing to use custom agents in your enterprise.

Where you can use custom agents
Note

Custom agents are in public preview for JetBrains IDEs, Eclipse, and Xcode, and subject to change.

Once created, your custom agents are available wherever you can use Copilot coding agent, including GitHub.com (the agents tab and panel, issue assignment, pull requests), the GitHub Copilot CLI, and in Visual Studio Code, JetBrains IDEs, Eclipse, and Xcode.

Agent profiles can be used directly in Visual Studio Code, JetBrains IDEs, Eclipse, and Xcode, though some properties may function differently, or be ignored, between environments.

For more information on using custom agents in Visual Studio Code specifically, see Custom agents in VS Code in the VS Code documentation.

Next steps
To start creating your own custom agents, see Creating custom agents.

Help and support
Did you find what you needed?

Privacy policy
Help us make these docs great!
All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.

Learn how to contribute

Still need help?
Ask the GitHub community
Contact support
Legal
© 2026 GitHub, Inc.
Terms
Privacy
Status
Pricing
Expert services
Blog
About custom agents - GitHub Docs
Skip to main content

This article is also available in Simplified Chinese.

GitHub Docs

Home
GitHub Copilot
GitHub Copilot/Concepts/Agents/Coding agent/
About hooks
Extend and customize GitHub Copilot agent behavior by executing custom shell commands at key points during agent execution.

Who can use this feature?
Copilot coding agent is available with the GitHub Copilot Pro, GitHub Copilot Pro+, GitHub Copilot Business and GitHub Copilot Enterprise plans. The agent is available in all repositories stored on GitHub, except repositories owned by managed user accounts and where it has been explicitly disabled.

In this article
About hooks
Hooks enable you to execute custom shell commands at strategic points in an agent's workflow, such as when an agent session starts or ends, or before and after a prompt is entered or a tool is called.

Hooks receive detailed information about agent actions via JSON input, enabling context-aware automation. For example, you can use hooks to:

Programmatically approve or deny tool executions.
Utilize built-in security features like secret scanning to prevent credential leaks.
Implement custom validation rules and audit logging for compliance.
Copilot agents support hooks stored in JSON files in your repository at .github/hooks/*.json.

Hooks are available for use with:

Copilot coding agent on GitHub
GitHub Copilot CLI in the terminal
Types of hooks
The following types of hooks are available:

sessionStart: Executed when a new agent session begins or when resuming an existing session. Can be used to initialize environments, log session starts for auditing, validate project state, and set up temporary resources.
sessionEnd: Executed when the agent session completes or is terminated. Can be used to cleanup temporary resources, generate and archive session reports and logs, or send notifications about session completion.
userPromptSubmitted: Executed when the user submits a prompt to the agent. Can be used to log user requests for auditing and usage analysis.
preToolUse: Executed before the agent uses any tool (such as bash, edit, view). This is the most powerful hook as it can approve or deny tool executions. Use this hook to block dangerous commands, enforce security policies and coding standards, require approval for sensitive operations, or log tool usage for compliance.
postToolUse: Executed after a tool completes execution (whether successful or failed). Can be used to log execution results, track usage statistics, generate audit trails, monitor performance metrics, and send failure alerts.
errorOccurred: Executed when an error occurs during agent execution. Can be used to log errors for debugging, send notifications, track error patterns, and generate reports.
To see a complete reference of hook types with example use cases, best practices, and advanced patterns, see Hooks configuration.

Hook configuration format
You configure hooks using a special JSON format. The JSON must contain a version field with a value of 1 and a hooks object containing arrays of hook definitions.

JSON
{
  "version": 1,
  "hooks": {
    "sessionStart": [
      {
        "type": "command",
        "bash": "string (optional)",
        "powershell": "string (optional)",
        "cwd": "string (optional)",
        "env": { "KEY": "value" },
        "timeoutSec": 30
      }
    ],
  }
}
The hook object can contain the following keys:

Property	Required	Description
type	Yes	Must be "command"
bash	Yes (on Unix systems)	Path to the bash script to execute
powershell	Yes (on Windows)	Path to the PowerShell script to execute
cwd	No	Working directory for the script (relative to repository root)
env	No	Additional environment variables that are merged with the existing environment
timeoutSec	No	Maximum execution time in seconds (default: 30)
Example hook configuration file
This is an example configuration file that lives in ~/.github/hooks/project-hooks.json within a repository.

JSON
{
  "version": 1,
  "hooks": {
    "sessionStart": [
      {
        "type": "command",
        "bash": "echo \"Session started: $(date)\" >> logs/session.log",
        "powershell": "Add-Content -Path logs/session.log -Value \"Session started: $(Get-Date)\"",
        "cwd": ".",
        "timeoutSec": 10
      }
    ],
    "userPromptSubmitted": [
      {
        "type": "command",
        "bash": "./scripts/log-prompt.sh",
        "powershell": "./scripts/log-prompt.ps1",
        "cwd": "scripts",
        "env": {
          "LOG_LEVEL": "INFO"
        }
      }
    ],
    "preToolUse": [
      {
        "type": "command",
        "bash": "./scripts/security-check.sh",
        "powershell": "./scripts/security-check.ps1",
        "cwd": "scripts",
        "timeoutSec": 15
      },
      {
        "type": "command",
        "bash": "./scripts/log-tool-use.sh",
        "powershell": "./scripts/log-tool-use.ps1",
        "cwd": "scripts"
      }
    ],
    "postToolUse": [
      {
        "type": "command",
        "bash": "cat >> logs/tool-results.jsonl",
        "powershell": "$input | Add-Content -Path logs/tool-results.jsonl"
      }
    ],
    "sessionEnd": [
      {
        "type": "command",
        "bash": "./scripts/cleanup.sh",
        "powershell": "./scripts/cleanup.ps1",
        "cwd": "scripts",
        "timeoutSec": 60
      }
    ]
  }
}
Performance considerations
Hooks run synchronously and block agent execution. To ensure a responsive experience, keep the following considerations in mind:

Minimize execution time: Keep hook execution time under 5 seconds when possible.
Optimize logging: Use asynchronous logging, like appending to files, rather than synchronous I/O.
Use background processing: For expensive operations, consider background processing.
Cache results: Cache expensive computations when possible.
Security considerations
To ensure security is maintained when using hooks, keep the following considerations in mind:

Always validate and sanitize the input processed by hooks. Untrusted input could lead to unexpected behavior.
Use proper shell escaping when constructing commands. This prevents command injection vulnerabilities.
Never log sensitive data, such as tokens or passwords.
Ensure hook scripts and logs have the appropriate permissions.
Be cautious with hooks that make external network calls. These can introduce latency, failures, or expose data to third parties.
Set appropriate timeouts to prevent resource exhaustion. Long-running hooks can block agent execution and degrade performance.
Next steps
To start creating hooks, see Using hooks with GitHub Copilot agents.

Help and support
Did you find what you needed?

Privacy policy
Help us make these docs great!
All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.

Learn how to contribute

Still need help?
Ask the GitHub community
Contact support
Legal
© 2026 GitHub, Inc.
Terms
Privacy
Status
Pricing
Expert services
Blog
About hooks - GitHub Docs
Skip to main content

This article is also available in Simplified Chinese.

GitHub Docs

Home
GitHub Copilot
GitHub Copilot/Concepts/Agents/Coding agent/
Model Context Protocol (MCP) and GitHub Copilot coding agent
Find out about using the Model Context Protocol (MCP) with Copilot coding agent.

In this article
Overview
The Model Context Protocol (MCP) is an open standard that defines how applications share context with large language models (LLMs). MCP provides a standardized way to connect AI models to different data sources and tools, enabling them to work together more effectively.

You can use MCP to extend the capabilities of Copilot coding agent by connecting it to other tools and services.

The agent can use tools provided by local and remote MCP servers. Some MCP servers are configured by default to provide the best experience for getting started.

For more information on MCP, see the official MCP documentation. For information on some of the currently available MCP servers, see the MCP servers repository.

Note

Copilot coding agent only supports tools provided by MCP servers. It does not support resources or prompts.
Copilot coding agent does not currently support remote MCP servers that leverage OAuth for authentication and authorization.
Default MCP servers
The following MCP servers are configured automatically for Copilot coding agent:

GitHub: The GitHub MCP server gives Copilot access to GitHub data like issues and pull requests. To learn more, see Using the GitHub MCP Server.

By default, the GitHub MCP server connects to GitHub using a specially scoped token that only has read-only access to the current repository. You can customize it to use a different token with broader access. For more details, see Extending GitHub Copilot coding agent with the Model Context Protocol (MCP).
Playwright: The Playwright MCP server gives Copilot access to web pages, including the ability to read, interact and take screenshots.

By default, the Playwright MCP server is only able to access web resources hosted within Copilot's own environment, accessible on localhost or 127.0.0.1.
Setting up MCP servers in a repository
Repository administrators can configure MCP servers for use within that repository. This is done via a JSON-formatted configuration that specifies the details of the MCP servers that Copilot coding agent can use.

Once MCP servers are configured for use within a repository, the tools specified in the configuration will be available to Copilot coding agent during each assigned task.

Copilot will use available tools autonomously, and will not ask for approval before use.

For details of how to set up MCP servers for Copilot coding agent in a repository, see Extending GitHub Copilot coding agent with the Model Context Protocol (MCP).

MCP servers for custom agents
Organization and enterprise administrators can also configure MCP servers as part of custom agents.

MCP servers configured in custom agents are available only to that specific agent and follow the same processing order as other MCP configurations, with custom agent MCP settings processed after default servers but before repository-level configurations.

For more information on configuring MCP servers for custom agents, see Custom agents configuration.

Best practices
Enabling third-party MCP servers for use may impact the performance of the agent and the quality of the outputs. Review the third-party MCP server thoroughly and ensure that it meets your organization’s requirements.

By default, Copilot coding agent does not have access to write MCP server tools. However, some MCP servers do contain such tools. Be sure to review the tools available in the MCP server you want to use. Update the tools field in the MCP configuration with only the necessary tooling.

Carefully review the configured MCP servers prior to saving the configuration to ensure the correct servers are configured for use.

Help and support
Did you find what you needed?

Privacy policy
Help us make these docs great!
All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.

Learn how to contribute

Still need help?
Ask the GitHub community
Contact support
Legal
© 2026 GitHub, Inc.
Terms
Privacy
Status
Pricing
Expert services
Blog
Model Context Protocol (MCP) and GitHub Copilot coding agent - GitHub Docs
Skip to main content

This article is also available in Simplified Chinese.

GitHub Docs

Home
GitHub Copilot
GitHub Copilot/Concepts/Agents/
About Agent Skills
Agent Skills enhance the ability of Copilot coding agent, the GitHub Copilot CLI and Visual Studio Code Insiders to perform specialized tasks.

Who can use this feature?
Copilot coding agent is available with the GitHub Copilot Pro, GitHub Copilot Pro+, GitHub Copilot Business and GitHub Copilot Enterprise plans. The agent is available in all repositories stored on GitHub, except repositories owned by managed user accounts and where it has been explicitly disabled.

GitHub Copilot CLI is available with the GitHub Copilot Pro, GitHub Copilot Pro+, GitHub Copilot Business and GitHub Copilot Enterprise plans. If you receive Copilot from an organization, the Copilot CLI policy must be enabled in the organization's settings.

In this article
About Agent Skills
Agent Skills are folders of instructions, scripts, and resources that Copilot can load when relevant to improve its performance in specialized tasks. Agent Skills is an open standard, used by a range of different agents.

Agent Skills work with Copilot coding agent, the GitHub Copilot CLI and agent mode in Visual Studio Code Insiders. Support in the stable version of VS Code is coming soon.

You can create your own skills to teach Copilot to perform tasks in a specific, repeatable way—or use skills shared online, for example in the anthropics/skills repository or GitHub's community created github/awesome-copilot collection.

Copilot supports:

Project skills, stored in your repository (.github/skills or .claude/skills)
Personal skills, stored in your home directory and shared across projects (~/.copilot/skills or ~/.claude/skills) (Copilot coding agent and GitHub Copilot CLI only)
Support for organization-level and enterprise-level skills is coming soon.

Note

GitHub Copilot CLI is in public preview with data protection and subject to change.

Creating and adding skills
Create a subdirectory for your new skill. Each skill should have its own directory (for example, .github/skills/webapp-testing). Skill directory names should be lowercase, use hyphens for spaces, and typically match the name in the SKILL.md frontmatter.

For project skills, specific to a single repository, store your skill under .github/skills or .claude/skills.

For personal skills, shared across projects, store your skill under ~/.copilot/skills or ~/.claude/skills.

Create a SKILL.md file with your skill's instructions.

Note

Skill files must be named SKILL.md.

SKILL.md files are Markdown files with YAML frontmatter. In their simplest form, they include:

YAML frontmatter
name (required): A unique identifier for the skill. This must be lowercase, using hyphens for spaces.
description (required): A description of what the skill does, and when Copilot should use it.
license (optional): A description of the license that applies to this skill.
A Markdown body, with the instructions, examples and guidelines for Copilot to follow.
Optionally, add scripts, examples or other resources to your skill's directory. For example, if you were writing a skill for converting images between different formats, you might include a script for converting SVG images to PNG.

Example SKILL.md file
For a project skill, this file would be located in the /path/to/repository/.github/skills/github-actions-failure-debugging directory.

For a personal skill, this file would be located in the ~/.copilot/skills/github-actions-failure-debugging directory.

Markdown
---
name: github-actions-failure-debugging
description: Guide for debugging failing GitHub Actions workflows. Use this when asked to debug failing GitHub Actions workflows.
---

To debug failing GitHub Actions workflows in a pull request, follow this process, using tools provided from the GitHub MCP Server:

1. Use the `list_workflow_runs` tool to look up recent workflow runs for the pull request and their status
2. Use the `summarize_job_log_failures` tool to get an AI summary of the logs for failed jobs, to understand what went wrong without filling your context windows with thousands of lines of logs
3. If you still need more information, use the `get_job_logs` or `get_workflow_run_logs` tool to get the full, detailed failure logs
4. Try to reproduce the failure yourself in your own environment.
5. Fix the failing build. If you were able to reproduce the failure yourself, make sure it is fixed before committing your changes.
How Copilot uses skills
When performing tasks, Copilot will decide when to use your skills based on your prompt and the skill's description.

When Copilot chooses to use a skill, the SKILL.md file will be injected in the agent's context, giving the agent access to your instructions. It can then follow those instructions, and use any scripts or examples you may have included in the skill's directory.

Skills versus custom instructions
You can use both skills and custom instructions to teach Copilot how to work in your repository and how to perform specific tasks.

We recommend using custom instructions for simple instructions relevant to almost every task (for example information about your repository's coding standards), and skills for more detailed instructions that Copilot should access when relevant.

To learn more about repository custom instructions, see Adding repository custom instructions for GitHub Copilot.

Help and support
Did you find what you needed?

Privacy policy
Help us make these docs great!
All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.

Learn how to contribute

Still need help?
Ask the GitHub community
Contact support
Legal
© 2026 GitHub, Inc.
Terms
Privacy
Status
Pricing
Expert services
Blog
About Agent Skills - GitHub Docs
Skip to main content

This article is also available in Simplified Chinese.

GitHub Docs

Home
GitHub Copilot
GitHub Copilot/Concepts/Prompting/
About customizing GitHub Copilot responses
Learn about customizing the behavior of GitHub Copilot to fit with your preferences and requirements.

Tool navigation
Visual Studio Code
JetBrains IDEs
Visual Studio
Web browser
Eclipse
Xcode
In this article
Note

This version of this article is about custom instructions and prompt files in VS Code. Click the tabs above for other environments.

About customizing Copilot responses
GitHub Copilot can provide responses that are tailored to the way your team works, the tools you use, or the specifics of your project, if you provide it with enough context to do so. Instead of repeatedly adding this contextual detail to your prompts, you can create files in your repository that automatically add this information for you.

There are two types of files you can use to provide context and instructions to Copilot in VS Code:

Repository custom instructions allow you to specify instructions and preferences that Copilot will consider when working in the context of the repository.
Prompt files (public preview) allow you to save common prompt instructions and relevant context in Markdown files (*.prompt.md) that you can then reuse in your chat prompts. Prompt files are only available in VS Code, Visual Studio, and JetBrains IDEs.
While custom instructions help to add codebase-wide context to each AI workflow, prompt files let you add instructions to a specific chat interaction.

Note

Due to the non-deterministic nature of AI, Copilot may not always follow your custom instructions in exactly the same way every time they are used.

About repository custom instructions
You can use three types of repository custom instructions in VS Code:

Repository-wide custom instructions, which apply to all requests made in the context of a repository.

These are specified in a copilot-instructions.md file in the .github directory of the repository.

Path-specific custom instructions, which apply to requests made in the context of files that match a specified path.

These are specified in one or more NAME.instructions.md files within or below the .github/instructions directory in the repository.

By using path-specific instructions you can avoid overloading your repository-wide instructions with information that only applies to files of certain types, or in certain directories.

Agent instructions, which are similar to repository-wide custom instructions, but are currently not supported by all Copilot features.

These are specified in files called AGENTS.md, CLAUDE.md, or GEMINI.md.

For details of support for each of these types of repository custom instructions across different Copilot features, see Support for different types of custom instructions.

For a curated collection of examples, see Custom instructions.

About prompt files
Note

Prompt files are public preview and subject to change.

Prompt files let you build and share reusable prompt instructions with additional context. A prompt file is a Markdown file, stored in your workspace, that mimics the existing format of writing prompts in Copilot Chat (for example, Rewrite #file:x.ts). This allows blending natural language instructions, additional context, and even linking to other prompt files as dependencies.

Common use cases include:

Code generation. Create reusable prompts for components, tests, or migrations (for example, React forms, or API mocks).
Domain expertise. Share specialized knowledge through prompts, such as security practices, or compliance checks.
Team collaboration. Document patterns and guidelines with references to specs and documentation.
Onboarding. Create step-by-step guides for complex processes or project-specific patterns.
You can have multiple prompt files in your workspace, each of which defines a prompt for a different purpose.

Examples
The following examples demonstrate how to use prompt files.

New React form.prompt.md - contains instructions for a reusable task to generate a form using React.

Your goal is to generate a new React form component.

Ask for the form name and fields if not provided.

Requirements for the form:
- Use form design system components: [design-system/Form.md](../docs/design-system/Form.md)
- Use `react-hook-form` for form state management:
  - Always define TypeScript types for your form data
  - Prefer *uncontrolled* components using register
  - Use `defaultValues` to prevent unnecessary rerenders
- Use `yup` for validation:
  - Create reusable validation schemas in separate files
  - Use TypeScript types to ensure type safety
  - Customize UX-friendly validation rules
API security review.prompt.md - contains reusable information about security practices for REST APIs, which can be used to do security reviews of REST APIs.

Secure REST API review:
- Ensure all endpoints are protected by authentication and authorization
- Validate all user inputs and sanitize data
- Implement rate limiting and throttling
- Implement logging and monitoring for security events
…
For information on how to enable, create, and use prompt files, see Adding repository custom instructions for GitHub Copilot.

Writing effective custom instructions
The instructions you add to your custom instruction file(s) should be short, self-contained statements that provide Copilot with relevant information to help it work in this repository. Because the instructions are sent with every chat message, they should be broadly applicable to most requests you will make in the context of the repository.

The exact structure you utilize for your instructions file(s) will vary by project and need, but the following guidelines provide a good starting point:

Provide an overview of the project you're working on, including its purpose, goals, and any relevant background information.
Include the folder structure of the repository, including any important directories or files that are relevant to the project.
Specify the coding standards and conventions that should be followed, such as naming conventions, formatting rules, and best practices.
Include any specific tools, libraries, or frameworks that are used in the project, along with any relevant version numbers or configurations.
The following instructions file is an example of these practices in action:

# Project Overview

This project is a web application that allows users to manage their tasks and to-do lists. It is built using React and Node.js, and uses MongoDB for data storage.

## Folder Structure

- `/src`: Contains the source code for the frontend.
- `/server`: Contains the source code for the Node.js backend.
- `/docs`: Contains documentation for the project, including API specifications and user guides.

## Libraries and Frameworks

- React and Tailwind CSS for the frontend.
- Node.js and Express for the backend.
- MongoDB for data storage.

## Coding Standards

- Use semicolons at the end of each statement.
- Use single quotes for strings.
- Use function based components in React.
- Use arrow functions for callbacks.

## UI guidelines

- A toggle is provided to switch between light and dark mode.
- Application should have a modern and clean design.
You should also consider the size and complexity of your repository. The following types of instructions may work for a small repository with only a few contributors, but for a large and diverse repository, these may cause problems:

Requests to refer to external resources when formulating a response
Instructions to answer in a particular style
Requests to always respond with a certain level of detail
For example, the following instructions may not have the intended results:

Always conform to the coding styles defined in styleguide.md in repo my-org/my-repo when generating code.

Use @terminal when answering questions about Git.

Answer all questions in the style of a friendly colleague, using informal language.

Answer all questions in less than 1000 characters, and words of no more than 12 characters.
Next steps
Adding repository custom instructions for GitHub Copilot
Using custom instructions to unlock the power of Copilot code review
Help and support
Did you find what you needed?

Privacy policy
Help us make these docs great!
All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.

Learn how to contribute

Still need help?
Ask the GitHub community
Contact support
Legal
© 2026 GitHub, Inc.
Terms
Privacy
Status
Pricing
Expert services
Blog
About customizing GitHub Copilot responses - GitHub Docs
Skip to main content

This article is also available in Simplified Chinese.

GitHub Docs

Home
GitHub Copilot
GitHub Copilot/Concepts/Prompting/
About customizing GitHub Copilot responses
Learn about customizing the behavior of GitHub Copilot to fit with your preferences and requirements.

Tool navigation
Visual Studio Code
JetBrains IDEs
Visual Studio
Web browser
Eclipse
Xcode
In this article
Note

This version of this article is about custom instructions and prompt files in JetBrains IDEs. Click the tabs above for other environments.

About customizing Copilot responses
GitHub Copilot can provide responses that are tailored to the way your team works, the tools you use, or the specifics of your project, if you provide it with enough context to do so. Instead of repeatedly adding this contextual detail to your prompts, you can create a custom instructions file in your repository that automatically adds this information for you.

There are two types of files you can use to provide context and instructions to Copilot in JetBrains IDEs:

Repository custom instructions allow you to specify instructions and preferences that Copilot will consider when working in the context of the repository.
Prompt files (public preview) allow you to save common prompt instructions and relevant context in Markdown files (*.prompt.md) that you can then reuse in your chat prompts. Prompt files are only available in VS Code, Visual Studio, and JetBrains IDEs.
While custom instructions help to add codebase-wide context to each AI workflow, prompt files let you add instructions to a specific chat interaction.

Note

Due to the non-deterministic nature of AI, Copilot may not always follow your custom instructions in exactly the same way every time they are used.

About repository custom instructions
In JetBrains IDEs, repository custom instructions consist of a single file, .github/copilot-instructions.md, that you create in a repository. The instructions you add to the file should be short, self-contained statements that add context or relevant information to supplement a Copilot prompt.

Support for repository custom instructions
For details of which types of custom instructions are supported across various environments, see Support for different types of custom instructions.

Use cases for custom instructions
Common use cases for custom instructions include:

Test generation. Create instructions for test generation, such as specifying the use of a certain test framework.
Code review. Specify instructions for reviewing code, such as telling a reviewer to look for a specific error in the code.
Commit message generation. Write instructions for generating commit messages, such as format or the type of information to include.
Example
This example of a .github/copilot-instructions.md file contains three instructions for Copilot.

We use Bazel for managing our Java dependencies, not Maven, so when talking about Java packages, always give me instructions and code samples that use Bazel.

We always write JavaScript with double quotes and tabs for indentation, so when your responses include JavaScript code, please follow those conventions.

Our team uses Jira for tracking items of work.
For a curated collection of examples, see Custom instructions.

About prompt files
Note

Prompt files are public preview and subject to change.

Prompt files let you build and share reusable prompt instructions with additional context. A prompt file is a Markdown file, stored in your workspace, that mimics the existing format of writing prompts in Copilot Chat (for example, Rewrite #file:x.ts). This allows blending natural language instructions and additional context.

Common use cases include:

Code generation. Create reusable prompts for components, tests, or migrations (for example, React forms, or API mocks).
Domain expertise. Share specialized knowledge through prompts, such as security practices, or compliance checks.
Team collaboration. Document patterns and guidelines with references to specs and documentation.
Onboarding. Create step-by-step guides for complex processes or project-specific patterns.
You can have multiple prompt files in your workspace, each of which defines a prompt for a different purpose.

Examples
The following examples demonstrate how to use prompt files.

New React form.prompt.md - contains instructions for a reusable task to generate a form using React.

Your goal is to generate a new React form component.

Ask for the form name and fields if not provided.

Requirements for the form:
- Use form design system components: [design-system/Form.md](../docs/design-system/Form.md)
- Use `react-hook-form` for form state management:
  - Always define TypeScript types for your form data
  - Prefer *uncontrolled* components using register
  - Use `defaultValues` to prevent unnecessary rerenders
- Use `yup` for validation:
  - Create reusable validation schemas in separate files
  - Use TypeScript types to ensure type safety
  - Customize UX-friendly validation rules
API security review.prompt.md - contains reusable information about security practices for REST APIs, which can be used to do security reviews of REST APIs.

Secure REST API review:
- Ensure all endpoints are protected by authentication and authorization
- Validate all user inputs and sanitize data
- Implement rate limiting and throttling
- Implement logging and monitoring for security events
…
For a curated collection of examples, see Prompt files.

Writing effective custom instructions
The instructions you add to your custom instruction file(s) should be short, self-contained statements that provide Copilot with relevant information to help it work in this repository. Because the instructions are sent with every chat message, they should be broadly applicable to most requests you will make in the context of the repository.

The exact structure you utilize for your instructions file(s) will vary by project and need, but the following guidelines provide a good starting point:

Provide an overview of the project you're working on, including its purpose, goals, and any relevant background information.
Include the folder structure of the repository, including any important directories or files that are relevant to the project.
Specify the coding standards and conventions that should be followed, such as naming conventions, formatting rules, and best practices.
Include any specific tools, libraries, or frameworks that are used in the project, along with any relevant version numbers or configurations.
The following instructions file is an example of these practices in action:

# Project Overview

This project is a web application that allows users to manage their tasks and to-do lists. It is built using React and Node.js, and uses MongoDB for data storage.

## Folder Structure

- `/src`: Contains the source code for the frontend.
- `/server`: Contains the source code for the Node.js backend.
- `/docs`: Contains documentation for the project, including API specifications and user guides.

## Libraries and Frameworks

- React and Tailwind CSS for the frontend.
- Node.js and Express for the backend.
- MongoDB for data storage.

## Coding Standards

- Use semicolons at the end of each statement.
- Use single quotes for strings.
- Use function based components in React.
- Use arrow functions for callbacks.

## UI guidelines

- A toggle is provided to switch between light and dark mode.
- Application should have a modern and clean design.
You should also consider the size and complexity of your repository. The following types of instructions may work for a small repository with only a few contributors, but for a large and diverse repository, these may cause problems:

Requests to refer to external resources when formulating a response
Instructions to answer in a particular style
Requests to always respond with a certain level of detail
For example, the following instructions may not have the intended results:

Always conform to the coding styles defined in styleguide.md in repo my-org/my-repo when generating code.

Use @terminal when answering questions about Git.

Answer all questions in the style of a friendly colleague, using informal language.

Answer all questions in less than 1000 characters, and words of no more than 12 characters.
Next steps
Adding repository custom instructions for GitHub Copilot
Using custom instructions to unlock the power of Copilot code review
Help and support
Did you find what you needed?

Privacy policy
Help us make these docs great!
All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.

Learn how to contribute

Still need help?
Ask the GitHub community
Contact support
Legal
© 2026 GitHub, Inc.
Terms
Privacy
Status
Pricing
Expert services
Blog
About customizing GitHub Copilot responses - GitHub Docs
Skip to main content

This article is also available in Simplified Chinese.

GitHub Docs

Home
GitHub Copilot
GitHub Copilot/Concepts/Context/
About Model Context Protocol (MCP)
Model Context Protocol (MCP) is a protocol that allows you to extend the capabilities of GitHub Copilot by integrating it with other systems.

In this article
Overview of Model Context Protocol (MCP)
The Model Context Protocol (MCP) is an open standard that defines how applications share context with large language models (LLMs). MCP provides a standardized way to connect AI models to different data sources and tools, enabling them to work together more effectively.

You can use MCP to extend the capabilities of Copilot Chat by integrating it with a wide range of existing tools and services. For example, the GitHub MCP server allows you to use Copilot Chat in your IDE to perform tasks on GitHub. You can also use MCP to create new tools and services that work with Copilot Chat, allowing you to customize and enhance your experience.

For more information on MCP, see the official MCP documentation. For information on currently available MCP servers, see the MCP servers repository.

To learn how to configure and use MCP servers with Copilot Chat, see Extending GitHub Copilot Chat with Model Context Protocol (MCP) servers.

Enterprises and organizations can choose to enable or disable use of MCP for members of their organization or enterprise with the MCP servers in Copilot policy. The policy is disabled by default. See Managing policies and features for GitHub Copilot in your enterprise and Managing policies and features for GitHub Copilot in your organization. The MCP policy only applies to users who have a Copilot Business or Copilot Enterprise subscription from an organization or enterprise that configures the policy. Copilot Free, Copilot Pro, or Copilot Pro+ do not have their MCP access governed by this policy.

Availability
There is currently broad support for local MCP servers in clients such as Visual Studio Code, JetBrains IDEs, XCode, and others.

Support for remote MCP servers is growing, with editors like Visual Studio Code, Visual Studio, JetBrains IDEs, Xcode, Eclipse, and Cursor providing this functionality with OAuth or PAT, and Windsurf supporting PAT only.

To find out if your preferred editor supports remote MCP servers, check the documentation for your specific editor.

About the GitHub MCP server
The GitHub MCP server is a Model Context Protocol (MCP) server provided and maintained by GitHub.

GitHub MCP server can be used to:

Automate and streamline code-related tasks.
Connect third-party tools (like Cursor, Windsurf, or future integrations) to leverage GitHub’s context and AI capabilities.
Enable cloud-based workflows that work from any device, without local setup.
Invoke GitHub tools, such as Copilot coding agent (requires GitHub Copilot subscription) and code scanning (requires GitHub Advanced Security subscription), to assist with code generation and security analysis.
To learn how to set up and use the GitHub MCP server, see Using the GitHub MCP Server.

Remote access
You can access the GitHub MCP server remotely through Copilot Chat in Visual Studio Code without any local setup. The remote server has access to additional toolsets only available in the remote GitHub MCP server. For a list of such tools, see Additional toolsets in the github/github-mcp-server repository.

The GitHub MCP server can also run locally in any MCP-compatible editor, if necessary.

Toolset customization
Important

Always review the GitHub MCP server repository at github/github-mcp-server for the latest toolsets and authoritative configuration guidance.

The GitHub MCP server supports enabling or disabling specific groups of functionalities via toolsets. Toolsets allow you to control which GitHub API capabilities are available to your AI tools.

Enabling only the toolsets you need improves your AI assistant's performance and security. Fewer tools means better tool selection accuracy and fewer errors. Disabling unused toolsets also frees up tokens in the AI's context window.

Toolsets do not only include tools, but also relevant MCP resources and prompts where applicable.

To learn how to configure toolsets for the GitHub MCP server, see Configuring toolsets for the GitHub MCP Server.

Security
For all public repositories, and private repositories covered by GitHub Advanced Security, interactions with the GitHub MCP server are secured by push protection, which blocks secrets from being included in AI-generated responses and prevents you from exposing secrets through any actions you perform using the server, such as creating an issue. For more information, see Working with push protection and the GitHub MCP server.

About the GitHub MCP Registry
The GitHub MCP Registry is a curated list of MCP servers from partners and the community. You can use the registry to discover new MCP servers and find ones that meet your specific needs. See the GitHub MCP Registry.

Note

The GitHub MCP Registry is currently in public preview and subject to change.

Next steps
Extending GitHub Copilot Chat with Model Context Protocol (MCP) servers
Using the GitHub MCP Server
Enhancing GitHub Copilot agent mode with MCP
Help and support
Did you find what you needed?

Privacy policy
Help us make these docs great!
All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.

Learn how to contribute

Still need help?
Ask the GitHub community
Contact support
Legal
© 2026 GitHub, Inc.
Terms
Privacy
Status
Pricing
Expert services
Blog
About Model Context Protocol (MCP) - GitHub Docs
Skip to main content

This article is also available in Simplified Chinese.

GitHub Docs

Home
GitHub Copilot
GitHub Copilot/Concepts/Context/
About GitHub Copilot Spaces
Understand how organizing and sharing context with Copilot Spaces can improve your Copilot Chat in GitHub results and help your collaborators.

Who can use this feature?
Anyone with a Copilot license can use Spaces.

In this article
Copilot Spaces let you organize the context that Copilot uses to answer your questions. Spaces can include repositories, code, pull requests, issues, free-text content like transcripts or notes, images, and file uploads. You can ask Copilot questions grounded in that context, or share the space with your team, or share publicly, to support collaboration and knowledge sharing.

Why use Copilot Spaces?
Whether you’re working solo or collaborating across a team, Spaces help you make Copilot more useful.

With Copilot Spaces you can:

Get more relevant, specific answers from Copilot.
Stay in flow by collecting what you need for a task in one place.
Reduce repeated questions by sharing knowledge with your team.
Support onboarding and reuse with self-service context that lives beyond chat history.
Your spaces stay in sync as your project evolves. GitHub files and other GitHub-based sources added to a space are automatically updated as they change, making Copilot an evergreen expert in your project.

Who can use Spaces?
Anyone with a Copilot license, including Copilot Free, can create and use Spaces.

Who can I share Spaces with?
Spaces can belong to a personal account or to an organization, and the sharing options differ depending on who the space belongs to.

Organization-owned spaces
Organization-owned spaces can be shared with other organization members, and you decide which level of access you want to grant other members (admin, editor, viewer).

Alternatively, you can choose to grant "No access" to organization members, and keep the space hidden.

Individual-owned spaces
Spaces belonging to a personal account can be shared publicly, shared with specific GitHub users, or kept private to the person who created the space.

Publicly shared spaces are view-only by default.

Viewers can only see sources that they have access to.

Eligibility to create or use Spaces is user-based and depends on the organization that grants the user a Copilot seat. Currently, the system does not block the creation of a space under an organization that has not configured Spaces, or has Spaces disabled. This means users can create spaces in such organizations if their Copilot seat comes from another organization where Spaces are enabled.

Where can I use Spaces?
You can use Copilot Spaces in Copilot Chat in GitHub. You can also leverage Copilot Spaces in your IDE, using the GitHub MCP server in your IDE to access context from your spaces.

How does using Spaces affect my usage?
Questions you submit in a space count as Copilot Chat requests.

If you're a Copilot Free user, this usage counts toward your monthly chat limit.
If you use Spaces with a premium model, this usage counts toward your premium usage quota. Every question you submit to a premium model counts as one premium request, multiplied by the model's multiplier. For information about the multipliers applied to each model, see Requests in GitHub Copilot.
Next steps
To start using Spaces, see Creating GitHub Copilot Spaces.

Help and support
Did you find what you needed?

Privacy policy
Help us make these docs great!
All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.

Learn how to contribute

Still need help?
Ask the GitHub community
Contact support
Legal
© 2026 GitHub, Inc.
Terms
Privacy
Status
Pricing
Expert services
Blog
About GitHub Copilot Spaces - GitHub Docs

Skip to main content

This article is also available in Simplified Chinese.

GitHub Docs

Home
GitHub Copilot
GitHub Copilot/Concepts/
MCP server usage in your company
You can manage MCP server usage to provide your developers with valuable tools while maintaining security and compliance.

In this article
You can manage Model Context Protocol (MCP) server usage in your organization or enterprise by configuring a series of MCP policies on GitHub.com. Through these policies, you can allow or block MCP server usage entirely, or restrict access to a list of servers that you define in an MCP registry.

MCP registries
An MCP registry is a directory of MCP servers that acts like a catalog for IDEs and Copilot. Each registry entry points to a server's manifest, which describes the tools, resources, and prompts that server provides.

After you create your MCP registry, you can make it available to your company, allowing you to:

Curate a catalog of MCP servers your developers can discover and use without context switching
Restrict access to unapproved servers for increased security and compliance
Provide clarity to developers when a server is blocked by policy
MCP policy settings
The following settings let you control how MCP servers are discovered and accessed in your organization or enterprise:

MCP servers in Copilot: Manage the use of MCP servers for all users with Copilot seats in your organization or enterprise.
MCP Registry URL: Specify the URL of your MCP registry, allowing your developers to discover and use approved MCP servers in supported surfaces.
Restrict MCP access to registry servers: Choose whether to allow all MCP servers or restrict access to only those listed in your configured registry.
Supported surfaces
MCP management features are supported as follows:

Surface	Registry display	Allowlist enforcement
Copilot CLI		
Copilot coding agent		
Eclipse		
JetBrains		
Visual Studio		
VS Code		
VS Code Insiders		
Xcode		
Note

For Eclipse, JetBrains, and Xcode, MCP management features are supported in the pre-release versions of Copilot.

Next steps
To create your own MCP registry, see Configure an MCP registry for your organization or enterprise.

Help and support
Did you find what you needed?

Privacy policy
Help us make these docs great!
All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.

Learn how to contribute

Still need help?
Ask the GitHub community
Contact support
Legal
© 2026 GitHub, Inc.
Terms
Privacy
Status
Pricing
Expert services
Blog
MCP server usage in your company - GitHub Docs

Skip to main content

This article is also available in Simplified Chinese.

GitHub Docs

Home
GitHub Copilot
GitHub Copilot/Reference/
Custom agents configuration
Reference for configuring custom agents.

In this article
This reference article provides detailed configuration information for custom agents. For general information about creating custom agents, see Creating custom agents.

Note

Custom agents are in public preview for JetBrains IDEs, Eclipse, and Xcode, and subject to change.

YAML frontmatter properties
The following table outlines the properties that are supported in repository-level agent profiles, organization or enterprise level agent profiles, and in VS Code. The configuration file's name (minus .md or .agent.md) is used for deduplication between levels so that the lowest level configuration takes precedence.

Property	Type	Purpose	Repository	Organization / enterprise	VS Code, JetBrains IDEs, Eclipse, and Xcode
name	string	Display name for the custom agent. Optional.			
description	Required string	Description of the custom agent's purpose and capabilities			
target	string	Target environment or context for the custom agent (vscode or github-copilot). If unset, defaults to both environments.			
tools	list of strings, string	List of tool names the custom agent can use. Supports both a comma separated string and yaml string array. If unset, defaults to all tools. See Tools.			
infer	boolean	Controls whether Copilot coding agent can automatically use this custom agent based on task context. When false, the agent must be manually selected. If unset, defaults to true.			
mcp-servers	object	Additional MCP servers and tools that should be used by the custom agent.			
metadata	object consisting of a name and value pair, both strings	Allows annotation of the agent with useful data			
Define the agent's behavior, expertise, and instructions in the Markdown content below the YAML frontmatter. The prompt can be a maximum of 30,000 characters.

Note

The model, argument-hint, and handoffs properties from VS Code and other IDE custom agents are currently not supported for Copilot coding agent on GitHub.com. They are ignored to ensure compatibility. For more information on custom agent file structure in VS Code, see Custom agents in VS Code in the VS Code documentation.

Tools
The custom agent tools property controls which tools are available to your agent, including those from MCP servers.

While you cannot configure MCP servers directly within an agent profile for repository-level custom agents, your custom agent will have access to MCP server tools that have been configured in the repository settings. For more information on configuring MCP servers for coding agent in a repository, see Extending GitHub Copilot coding agent with the Model Context Protocol (MCP).

You can configure tools using the following approaches:

Enable all available tools: Omit the tools property entirely or use tools: ["*"] to enable all available tools. This will include all MCP server tools configured in the repository settings.
Enable specific tools: Provide a list of specific tool names or aliases (for example, tools: ["read", "edit", "search"]) to enable only those tools. For available tool aliases, see Tool aliases below.
Note that if your repository has MCP servers configured, you can choose to make only specific tools from those servers available to your custom agent. Tool names from specific MCP servers can be prefixed with the server name followed by a /. For example, some-mcp-server/some-tool.
You can also explicitly enable all tools from a specific MCP server using some-mcp-server/*.
Tools from VS Code extensions can use the extension name as a proxy, like azure.some-extension/some-tool.
Disable all tools: Use an empty list (tools: []) to disable all tools for the agent.
All unrecognized tool names are ignored, which allows product-specific tools to be specified in an agent profile without causing problems.

Tool aliases
The following tool aliases are available for custom agents. All aliases are case insensitive:

Primary alias	Compatible aliases	Coding agent mapping	Purpose
execute	shell, Bash, powershell	Shell tools: bash or powershell	Execute a command in the appropriate shell for the operating system.
read	Read, NotebookRead	view	Read file contents.
edit	Edit, MultiEdit, Write, NotebookEdit	Edit tools: e.g. str_replace, str_replace_editor	Allow LLM to edit. Exact arguments can vary.
search	Grep, Glob	search	Search for files or text in files.
agent	custom-agent, Task	"Custom agent" tools	Allows a different custom agent to be invoked to accomplish a task.
web	WebSearch, WebFetch	Currently not applicable for coding agent.	Allows fetching content from URLs and performing a web search
todo	TodoWrite	Currently not applicable for coding agent.	Creates and manages structured task lists. Not supported in coding agent today, but supported by VS Code.
Tool names for "out-of-the-box" MCP servers
The following MCP servers are available out-of-box for Copilot coding agent and can be referenced using namespacing:

MCP server name	Available tools
github	All read-only tools are available by default, but the token the server receives is scoped to the source repository. github/* includes all of them, or you can reference github/<tool name> where <tool name> is a value from the MCP server documentation.
playwright	All playwright tools are available by default, but the server is configured to only access localhost. playwright/* includes all of them, or you can reference playwright/<tool name> where <tool name> is a value from the MCP server documentation. By default the token it has access to is scoped to the source code repository.
MCP server configuration details
Note

MCP servers can only be configured directly within custom agent profiles at the organization and enterprise level. Repository-level custom agents cannot have MCP servers configured directly in their profiles, but can use tools from MCP servers configured in the repository's settings.

The following sample agent profile shows an organization-level agent with MCP server and secret configured. Additionally, only one tool from the MCP server has been enabled in the tools property in the YAML frontmatter:

---
name: my-custom-agent-with-mcp
description: Custom agent description
tools: ['tool-a', 'tool-b', 'custom-mcp/tool-1']
mcp-servers:
  custom-mcp:
    type: 'local'
    command: 'some-command'
    args: ['--arg1', '--arg2']
    tools: ["*"]
    env:
      ENV_VAR_NAME: $
---

Prompt with suggestions for behavior and output
The mcp-servers property in an agent profile is a YAML representation of the JSON configuration format used to configure MCP servers for Copilot coding agent.

Most sub-properties are the same as the JSON representation. The following sections describe changes from the initial implementation of MCP configuration in Copilot coding agent that are relevant to custom agents. For more information about the JSON configuration format, see Extending GitHub Copilot coding agent with the Model Context Protocol (MCP).

MCP server type
For compatibility, the stdio type used by Claude Code and VS Code is mapped to coding agent's local type.

MCP server environment variables and secrets
Note

If your MCP server requires secrets or environment variables, these must be configured in the Copilot environment in each repository where the custom agent will be used. For more information on setting up environment variables, see Customizing the development environment for GitHub Copilot coding agent.

Custom agent MCP configuration supports the same environment variable and secret replacement capabilities as existing repository-level MCP configurations. Similar to repository-level configurations, secrets and variables can be sourced from the "copilot" environment in the repository's settings. The syntax for referencing these values has been expanded to support common patterns used in GitHub Actions and Claude Code.

Both the repository-level MCP JSON configuration and the custom agent YAML configuration support the following syntax patterns:

COPILOT_MCP_ENV_VAR_VALUE - Environment variable only (not recommended due to header differences)
$COPILOT_MCP_ENV_VAR_VALUE - Environment variable and header
${COPILOT_MCP_ENV_VAR_VALUE} - Environment variable and header (Claude Code syntax)
The custom agent YAML configuration supports the following additional syntax patterns:

${{ secrets.COPILOT_MCP_ENV_VAR_VALUE }} - Environment variable and header
${{ var.COPILOT_MCP_ENV_VAR_VALUE }} - Environment variable and header
Example agent profile configurations
The following examples demonstrate what an agent profile could look like for the common tasks of writing tests or planning the implementation of a project. For additional inspiration, see the Custom agents examples in the customization library. You can also find more specific examples in the awesome-copilot community collection.

Testing specialist
This example enables all tools by omitting the tools property.

Text
---
name: test-specialist
description: Focuses on test coverage, quality, and testing best practices without modifying production code
---

You are a testing specialist focused on improving code quality through comprehensive testing. Your responsibilities:

- Analyze existing tests and identify coverage gaps
- Write unit tests, integration tests, and end-to-end tests following best practices
- Review test quality and suggest improvements for maintainability
- Ensure tests are isolated, deterministic, and well-documented
- Focus only on test files and avoid modifying production code unless specifically requested

Always include clear test descriptions and use appropriate testing patterns for the language and framework.
Implementation planner
This example only enables a subset of tools.

Text
---
name: implementation-planner
description: Creates detailed implementation plans and technical specifications in markdown format
tools: ["read", "search", "edit"]
---

You are a technical planning specialist focused on creating comprehensive implementation plans. Your responsibilities:

- Analyze requirements and break them down into actionable tasks
- Create detailed technical specifications and architecture documentation
- Generate implementation plans with clear steps, dependencies, and timelines
- Document API designs, data models, and system interactions
- Create markdown files with structured plans that development teams can follow

Always structure your plans with clear headings, task breakdowns, and acceptance criteria. Include considerations for testing, deployment, and potential risks. Focus on creating thorough documentation rather than implementing code.
Processing of custom agents
Custom agents names
In the case of naming conflicts, the lowest level configuration overrides higher-level configurations. This means that a repository-level agent would take precedence over an organization-level agent, and the organization-level agent would override an enterprise-level agent.

Versioning
Custom agent versioning is based on Git commit SHAs for the agent profile file. This allows you to create branches or tags with different versions of custom agents as needed. When you assign a custom agent to a task, the custom agent will be instantiated using the latest version of the agent profile for that repository and branch. When the agent creates a pull request, interactions within the pull request use the same version of the custom agent for consistency.

Tools processing
The tools list filters the set of tools that are made available to the agent - whether built-in or sourced from MCP servers. When you configure tools in your agent profile, the behavior depends on what you specify:

If no tools are specified, all available tools are enabled
An empty tools list (tools: []) disables all tools
A specific list (tools: [...]) enables only those tools
MCP server configurations
For MCP server configurations, there is a specific processing order that ensures proper override behavior: out-of-the-box MCP configurations (like the GitHub MCP) are processed first, followed by the custom agent MCP configuration (supported for organization or enterprise level custom agents only), and finally repository-level MCP configurations. This allows each level to override settings from the previous level as appropriate.

Help and support
Did you find what you needed?

Privacy policy
Help us make these docs great!
All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.

Learn how to contribute

Still need help?
Ask the GitHub community
Contact support
Legal
© 2026 GitHub, Inc.
Terms
Privacy
Status
Pricing
Expert services
Blog
Custom agents configuration - GitHub Docs
Skip to main content

This article is also available in Simplified Chinese.

GitHub Docs

Home
GitHub Copilot
GitHub Copilot/Reference/
Hooks configuration
Find information about configuring hooks for use with GitHub Copilot CLI and Copilot coding agent.

In this article
This reference article describes the available hook types with examples, including their input and output formats, script best practices, and advanced patterns for logging, security enforcement, and external integrations. For general information about creating hooks, see Using hooks with GitHub Copilot agents.

Hook types
Session start hook
Executed when a new agent session begins or when resuming an existing session.

Input JSON:

JSON
{
  "timestamp": 1704614400000,
  "cwd": "/path/to/project",
  "source": "new",
  "initialPrompt": "Create a new feature"
}
Fields:

timestamp: Unix timestamp in milliseconds
cwd: Current working directory
source: Either "new" (new session), "resume" (resumed session), or "startup"
initialPrompt: The user's initial prompt (if provided)
Output: Ignored (no return value processed)

Example hook:

JSON
{
  "type": "command",
  "bash": "./scripts/session-start.sh",
  "powershell": "./scripts/session-start.ps1",
  "cwd": "scripts",
  "timeoutSec": 30
}
Example script (Bash):

Shell
#!/bin/bash
INPUT=$(cat)
SOURCE=$(echo "$INPUT" | jq -r '.source')
TIMESTAMP=$(echo "$INPUT" | jq -r '.timestamp')

echo "Session started from $SOURCE at $TIMESTAMP" >> session.log
Session end hook
Executed when the agent session completes or is terminated.

Input JSON:

JSON
{
  "timestamp": 1704618000000,
  "cwd": "/path/to/project",
  "reason": "complete"
}
Fields:

timestamp: Unix timestamp in milliseconds
cwd: Current working directory
reason: One of "complete", "error", "abort", "timeout", or "user_exit"
Output: Ignored

Example script:

Shell
#!/bin/bash
INPUT=$(cat)
REASON=$(echo "$INPUT" | jq -r '.reason')

echo "Session ended: $REASON" >> session.log
# Cleanup temporary files
rm -rf /tmp/session-*
User prompt submitted hook
Executed when the user submits a prompt to the agent.

Input JSON:

JSON
{
  "timestamp": 1704614500000,
  "cwd": "/path/to/project",
  "prompt": "Fix the authentication bug"
}
Fields:

timestamp: Unix timestamp in milliseconds
cwd: Current working directory
prompt: The exact text the user submitted
Output: Ignored (prompt modification not currently supported in customer hooks)

Example script:

Shell
#!/bin/bash
INPUT=$(cat)
PROMPT=$(echo "$INPUT" | jq -r '.prompt')
TIMESTAMP=$(echo "$INPUT" | jq -r '.timestamp')

# Log to a structured file
echo "$(date -d @$((TIMESTAMP/1000))): $PROMPT" >> prompts.log
Pre-tool use hook
Executed before the agent uses any tool (such as bash, edit, view). This is the most powerful hook as it can approve or deny tool executions.

Input JSON:

JSON
{
  "timestamp": 1704614600000,
  "cwd": "/path/to/project",
  "toolName": "bash",
  "toolArgs": "{\"command\":\"rm -rf dist\",\"description\":\"Clean build directory\"}"
}
Fields:

timestamp: Unix timestamp in milliseconds
cwd: Current working directory
toolName: Name of the tool being invoked (such as "bash", "edit", "view", "create")
toolArgs: JSON string containing the tool's arguments
Output JSON (optional):

JSON
{
  "permissionDecision": "deny",
  "permissionDecisionReason": "Destructive operations require approval"
}
Output fields:

permissionDecision: Either "allow", "deny", or "ask" (only "deny" is currently processed)
permissionDecisionReason: Human-readable explanation for the decision
Example hook to block dangerous commands:

Shell
#!/bin/bash
INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')
TOOL_ARGS=$(echo "$INPUT" | jq -r '.toolArgs')

# Log the tool use
echo "$(date): Tool=$TOOL_NAME Args=$TOOL_ARGS" >> tool-usage.log

# Check for dangerous patterns
if echo "$TOOL_ARGS" | grep -qE "rm -rf /|format|DROP TABLE"; then
  echo '{"permissionDecision":"deny","permissionDecisionReason":"Dangerous command detected"}'
  exit 0
fi

# Allow by default (or omit output to allow)
echo '{"permissionDecision":"allow"}'
Example hook to enforce file permissions:

Shell
#!/bin/bash
INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')

# Only allow editing specific directories
if [ "$TOOL_NAME" = "edit" ]; then
  PATH_ARG=$(echo "$INPUT" | jq -r '.toolArgs' | jq -r '.path')
  
  if [[ ! "$PATH_ARG" =~ ^(src/|test/) ]]; then
    echo '{"permissionDecision":"deny","permissionDecisionReason":"Can only edit files in src/ or test/ directories"}'
    exit 0
  fi
fi

# Allow all other tools
Post-tool use hook
Executed after a tool completes execution (whether successful or failed).

Example input JSON:

JSON
{
  "timestamp": 1704614700000,
  "cwd": "/path/to/project",
  "toolName": "bash",
  "toolArgs": "{\"command\":\"npm test\"}",
  "toolResult": {
    "resultType": "success",
    "textResultForLlm": "All tests passed (15/15)"
  }
}
Fields:

timestamp: Unix timestamp in milliseconds
cwd: Current working directory
toolName: Name of the tool that was executed
toolArgs: JSON string containing the tool's arguments
toolResult: Result object containing:
resultType: Either "success", "failure", or "denied"
textResultForLlm: The result text shown to the agent
Output: Ignored (result modification is not currently supported)

Example script that logs tool execution statistics to a CSV file:

This script logs tool execution statistics to a CSV file and sends an email alert when a tool fails.

Shell
#!/bin/bash
INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')
RESULT_TYPE=$(echo "$INPUT" | jq -r '.toolResult.resultType')

# Track statistics
echo "$(date),${TOOL_NAME},${RESULT_TYPE}" >> tool-stats.csv

# Alert on failures
if [ "$RESULT_TYPE" = "failure" ]; then
  RESULT_TEXT=$(echo "$INPUT" | jq -r '.toolResult.textResultForLlm')
  echo "FAILURE: $TOOL_NAME - $RESULT_TEXT" | mail -s "Agent Tool Failed" admin@example.com
fi
Error occurred hook
Executed when an error occurs during agent execution.

Example input JSON:

JSON
{
  "timestamp": 1704614800000,
  "cwd": "/path/to/project",
  "error": {
    "message": "Network timeout",
    "name": "TimeoutError",
    "stack": "TimeoutError: Network timeout\n    at ..."
  }
}
Fields:

timestamp: Unix timestamp in milliseconds
cwd: Current working directory
error: Error object containing:
message: Error message
name: Error type/name
stack: Stack trace (if available)
Output: Ignored (error handling modification is not currently supported)

Example script that extracts error details to a log file:

Shell
#!/bin/bash
INPUT=$(cat)
ERROR_MSG=$(echo "$INPUT" | jq -r '.error.message')
ERROR_NAME=$(echo "$INPUT" | jq -r '.error.name')

echo "$(date): [$ERROR_NAME] $ERROR_MSG" >> errors.log
Script best practices
Reading input
This example script reads JSON input from stdin into a variable, then uses jq to extract the timestamp and cwd fields.

Bash:

Shell
#!/bin/bash
# Read JSON from stdin
INPUT=$(cat)

# Parse with jq
TIMESTAMP=$(echo "$INPUT" | jq -r '.timestamp')
CWD=$(echo "$INPUT" | jq -r '.cwd')
PowerShell:

PowerShell
# Read JSON from stdin
$input = [Console]::In.ReadToEnd() | ConvertFrom-Json

# Access properties
$timestamp = $input.timestamp
$cwd = $input.cwd
Outputting JSON
This example script shows how to output valid JSON from your hook script. Use jq -c in Bash for compact single-line output, or ConvertTo-Json -Compress in PowerShell.

Bash:

Shell
#!/bin/bash
# Use jq to compact the JSON output to a single line
echo '{"permissionDecision":"deny","permissionDecisionReason":"Security policy violation"}' | jq -c

# Or construct with variables
REASON="Too dangerous"
jq -n --arg reason "$REASON" '{permissionDecision: "deny", permissionDecisionReason: $reason}'
PowerShell:

PowerShell
# Use ConvertTo-Json to compact the JSON output to a single line
$output = @{
    permissionDecision = "deny"
    permissionDecisionReason = "Security policy violation"
}
$output | ConvertTo-Json -Compress
Error handling
This script example demonstrates how to handle errors in hook scripts.

Bash:

Shell
#!/bin/bash
set -e  # Exit on error

INPUT=$(cat)
# ... process input ...

# Exit with 0 for success
exit 0
PowerShell:

PowerShell
$ErrorActionPreference = "Stop"

try {
    $input = [Console]::In.ReadToEnd() | ConvertFrom-Json
    # ... process input ...
    exit 0
} catch {
    Write-Error $_.Exception.Message
    exit 1
}
Handling timeouts
Hooks have a default timeout of 30 seconds. For longer operations, increase timeoutSec:

JSON
{
  "type": "command",
  "bash": "./scripts/slow-validation.sh",
  "timeoutSec": 120
}
Advanced patterns
Multiple hooks of the same type
You can define multiple hooks for the same event. They execute in order:

JSON
{
  "version": 1,
  "hooks": {
    "preToolUse": [
      {
        "type": "command",
        "bash": "./scripts/security-check.sh",
        "comment": "Security validation - runs first"
      },
      {
        "type": "command", 
        "bash": "./scripts/audit-log.sh",
        "comment": "Audit logging - runs second"
      },
      {
        "type": "command",
        "bash": "./scripts/metrics.sh",
        "comment": "Metrics collection - runs third"
      }
    ]
  }
}
Conditional logic in scripts
Example: Only block specific tools

Shell
#!/bin/bash
INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')

# Only validate bash commands
if [ "$TOOL_NAME" != "bash" ]; then
  exit 0  # Allow all non-bash tools
fi

# Check bash command for dangerous patterns
COMMAND=$(echo "$INPUT" | jq -r '.toolArgs' | jq -r '.command')
if echo "$COMMAND" | grep -qE "rm -rf|sudo|mkfs"; then
  echo '{"permissionDecision":"deny","permissionDecisionReason":"Dangerous system command"}'
fi
Structured logging
Example: JSON Lines format

Shell
#!/bin/bash
INPUT=$(cat)
TIMESTAMP=$(echo "$INPUT" | jq -r '.timestamp')
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')
RESULT_TYPE=$(echo "$INPUT" | jq -r '.toolResult.resultType')

# Output structured log entry
jq -n \
  --arg ts "$TIMESTAMP" \
  --arg tool "$TOOL_NAME" \
  --arg result "$RESULT_TYPE" \
  '{timestamp: $ts, tool: $tool, result: $result}' >> logs/audit.jsonl
Integration with external systems
Example: Send alerts to Slack

Shell
#!/bin/bash
INPUT=$(cat)
ERROR_MSG=$(echo "$INPUT" | jq -r '.error.message')

WEBHOOK_URL="https://hooks.slack.com/services/YOUR/WEBHOOK/URL"

curl -X POST "$WEBHOOK_URL" \
  -H 'Content-Type: application/json' \
  -d "{\"text\":\"Agent Error: $ERROR_MSG\"}"
Example use cases
Compliance audit trail
Log all agent actions for compliance requirements by utilizing log scripts:

JSON
{
  "version": 1,
  "hooks": {
    "sessionStart": [{"type": "command", "bash": "./audit/log-session-start.sh"}],
    "userPromptSubmitted": [{"type": "command", "bash": "./audit/log-prompt.sh"}],
    "preToolUse": [{"type": "command", "bash": "./audit/log-tool-use.sh"}],
    "postToolUse": [{"type": "command", "bash": "./audit/log-tool-result.sh"}],
    "sessionEnd": [{"type": "command", "bash": "./audit/log-session-end.sh"}]
  }
}
Cost tracking
Track tool usage for cost allocation:

Shell
#!/bin/bash
INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')
TIMESTAMP=$(echo "$INPUT" | jq -r '.timestamp')
USER=${USER:-unknown}

echo "$TIMESTAMP,$USER,$TOOL_NAME" >> /var/log/copilot/usage.csv
Code quality enforcement
Prevent commits that violate code standards:

Shell
#!/bin/bash
INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')

if [ "$TOOL_NAME" = "edit" ] || [ "$TOOL_NAME" = "create" ]; then
  # Run linter before allowing edits
  npm run lint-staged
  if [ $? -ne 0 ]; then
    echo '{"permissionDecision":"deny","permissionDecisionReason":"Code does not pass linting"}'
  fi
fi
Notification system
Send notifications on important events:

Shell
#!/bin/bash
INPUT=$(cat)
PROMPT=$(echo "$INPUT" | jq -r '.prompt')

# Notify on production-related prompts
if echo "$PROMPT" | grep -iq "production"; then
  echo "ALERT: Production-related prompt: $PROMPT" | mail -s "Agent Alert" team@example.com
fi
Help and support
Did you find what you needed?

Privacy policy
Help us make these docs great!
All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.

Learn how to contribute

Still need help?
Ask the GitHub community
Contact support
Legal
© 2026 GitHub, Inc.
Terms
Privacy
Status
Pricing
Expert services
Blog
Hooks configuration - GitHub Docs

Skip to main content

This article is also available in Simplified Chinese.

GitHub Docs

Home
GitHub Copilot
GitHub Copilot/Reference/
Support for different types of custom instructions
Find out which environments support which types of custom instructions.

In this article
This reference article provides details of which types of custom instructions are supported in various environments. For more information about the various types of custom instructions for GitHub Copilot, see About customizing GitHub Copilot responses.

GitHub.com
Copilot feature	Types of custom instructions supported
Copilot Chat	
👤  Personal instructions.
📦  Repository-wide instructions (using the .github/copilot-instructions.md file).
🏢  Organization instructions.
Copilot coding agent	
📦  Repository-wide instructions (using the .github/copilot-instructions.md file).
📂  Path-specific instructions (using .github/instructions/**/*.instructions.md files).
🤖  Agent instructions (using AGENTS.md, CLAUDE.md or GEMINI.md files).
🏢  Organization instructions.
Copilot code review	
📦  Repository-wide instructions (using the .github/copilot-instructions.md file).
📂  Path-specific instructions (using .github/instructions/**/*.instructions.md files).
🏢  Organization instructions.
Visual Studio Code
Copilot feature	Types of custom instructions supported
Copilot Chat	
📦  Repository-wide instructions (using the .github/copilot-instructions.md file).
📂  Path-specific instructions (using .github/instructions/**/*.instructions.md files).
🤖  Agent instructions (using an AGENTS.md file).
Copilot coding agent	
📦  Repository-wide instructions (using the .github/copilot-instructions.md file).
📂  Path-specific instructions (using .github/instructions/**/*.instructions.md files).
🤖  Agent instructions (using AGENTS.md, CLAUDE.md or GEMINI.md files).
Copilot code review	
📦  Repository-wide instructions (using the .github/copilot-instructions.md file).
Visual Studio
Copilot feature	Types of custom instructions supported
Copilot Chat	
📦  Repository-wide instructions (using the .github/copilot-instructions.md file).
📂  Path-specific instructions (using .github/instructions/**/*.instructions.md files).
Copilot code review	
📦  Repository-wide instructions (using the .github/copilot-instructions.md file).
JetBrains IDEs
Copilot feature	Types of custom instructions supported
Copilot Chat	
📦  Repository-wide instructions (using the .github/copilot-instructions.md file).
📂  Path-specific instructions (using .github/instructions/**/*.instructions.md files).
Copilot coding agent	
📦  Repository-wide instructions (using the .github/copilot-instructions.md file).
📂  Path-specific instructions (using .github/instructions/**/*.instructions.md files).
🤖  Agent instructions (using AGENTS.md, CLAUDE.md or GEMINI.md files).
Copilot code review	
📦  Repository-wide instructions (using the .github/copilot-instructions.md file).
📂  Path-specific instructions (using .github/instructions/**/*.instructions.md files).
Eclipse
Copilot feature	Types of custom instructions supported
Copilot Chat	
📦  Repository-wide instructions (using the .github/copilot-instructions.md file).
Copilot coding agent	
📦  Repository-wide instructions (using the .github/copilot-instructions.md file).
📂  Path-specific instructions (using .github/instructions/**/*.instructions.md files).
🤖  Agent instructions (using AGENTS.md, CLAUDE.md or GEMINI.md files).
Copilot code review	
Custom instructions are currently not supported.
Xcode
Copilot feature	Types of custom instructions supported
Copilot Chat	
📦  Repository-wide instructions (using the .github/copilot-instructions.md file).
📂  Path-specific instructions (using .github/instructions/**/*.instructions.md files).
Copilot coding agent	
📦  Repository-wide instructions (using the .github/copilot-instructions.md file).
📂  Path-specific instructions (using .github/instructions/**/*.instructions.md files).
🤖  Agent instructions (using AGENTS.md, CLAUDE.md or GEMINI.md files).
Copilot code review	
📦  Repository-wide instructions (using the .github/copilot-instructions.md file).
📂  Path-specific instructions (using .github/instructions/**/*.instructions.md files).
Copilot CLI
📦  Repository-wide instructions (using the .github/copilot-instructions.md file).
📂  Path-specific instructions (using .github/instructions/**/*.instructions.md files).
🤖  Agent instructions (using an AGENTS.md file).
Further reading
Adding repository custom instructions for GitHub Copilot
Adding personal custom instructions for GitHub Copilot
Adding organization custom instructions for GitHub Copilot
Help and support
Did you find what you needed?

Privacy policy
Help us make these docs great!
All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.

Learn how to contribute

Still need help?
Ask the GitHub community
Contact support
Legal
© 2026 GitHub, Inc.
Terms
Privacy
Status
Pricing
Expert services
Blog
Support for different types of custom instructions - GitHub Docs
