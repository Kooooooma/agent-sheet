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


Your first custom instructions
Create and test your first custom instruction with this simple example.

In this article
Note

The examples in this library are intended for inspiration—you are encouraged to adjust them to be more specific to your projects, languages, and team processes.
For community-contributed examples of custom instructions for specific languages and scenarios, see the Awesome GitHub Copilot Customizations repository.
You can apply custom instructions across different scopes, depending on the platform or IDE where you are creating them. For more information, see "About customizing GitHub Copilot responses."
About customizations
You can customize GitHub Copilot's responses using two types of files:

Custom instructions provide ongoing guidance for how GitHub Copilot should behave across all your interactions.
Prompt files (public preview) define reusable prompts for specific tasks that you can invoke when needed. Prompt files are only available in VS Code, Visual Studio, and JetBrains IDEs. For an introductory example, see Your first prompt file.
While custom instructions help to add context to each AI workflow, prompt files let you add instructions to a specific chat interaction.

Repository custom instructions are the most commonly used and supported, but you can also define personal and organization custom instructions, only for GitHub Copilot Chat in GitHub. You can create repository custom instructions in two ways:

Repository-wide instructions: Create a single copilot-instructions.md file at the repository root that applies to all files in the repository.
Path-specific instructions: Create one or more .instructions.md files with an applyTo field that apply only to specific files or directories. Path-specific instructions are currently supported for Copilot Chat in Visual Studio Code, Visual Studio, and GitHub Copilot coding agent.
Your first instructions
Start with these core custom instructions that helps GitHub Copilot understand your coding preferences.

Instructions on writing functions
Markdown
When writing functions, always:
- Add descriptive JSDoc comments
- Include input validation
- Use early returns for error conditions
- Add meaningful variable names
- Include at least one example usage in comments
These instructions will change how GitHub Copilot generates functions.

Test it out
To quickly test out the difference that custom instructions can make, you can use personal custom instructions in Copilot Chat.

First, go to github.com/copilot and enter this prompt:

Create a JavaScript function that calculates the area of a circle

Without custom instructions, you might get:

function areaOfCircle(radius) {
    if (typeof radius !== 'number' || radius < 0) {
        throw new Error('Radius must be a non-negative number');
    }
    return Math.PI * radius * radius;
}
Now access your personal custom instructions by clicking on your profile picture in the bottom left of the page, then click Personal instructions. Paste the above instructions into the text box, then click Save.

Now enter the same prompt that you entered previously.

With custom instructions, you'll get something like:

/**
 * Calculates the area of a circle given its radius.
 *
 * @param {number} radius - The radius of the circle. Must be a positive number.
 * @returns {number|null} The area of the circle, or null if the input is invalid.
 *
 * @example
 * // returns 78.53981633974483
 * areaOfCircle(5);
 *
 * @example
 * // returns null (invalid input)
 * areaOfCircle(-2);
 */
function areaOfCircle(radius) {
  if (typeof radius !== "number" || isNaN(radius) || radius <= 0) {
    // Invalid input: radius must be a positive number
    return null;
  }

  const area = Math.PI * Math.pow(radius, 2);
  return area;
}

// Example usage:
console.log(areaOfCircle(5));   // 78.53981633974483
console.log(areaOfCircle(-2));  // null
Further reading
About customizing GitHub Copilot responses - Overview of response customization in GitHub Copilot
Configure custom instructions for GitHub Copilot - How to configure custom instructions
Awesome GitHub Copilot Customizations - Repository of community-contributed custom instructions and other customizations for specific languages and scenarios


Your first prompt file
Create your first Copilot prompt file with this simple code explanation example that works for any programming language.

In this article
Note

Copilot prompt files are in public preview and subject to change. Prompt files are only available in VS Code, Visual Studio, and JetBrains IDEs. See About customizing GitHub Copilot responses.
For community-contributed examples of prompt files for specific languages and scenarios, see the Awesome GitHub Copilot Customizations repository.
About customizations
You can customize GitHub Copilot's responses using two types of files:

Custom instructions provide ongoing guidance for how GitHub Copilot should behave across all your interactions. For an introductory example, see Your first custom instructions.
Prompt files (public preview) define reusable prompts for specific tasks that you can invoke when needed. Prompt files are only available in VS Code, Visual Studio, and JetBrains IDEs.
Your first prompt file
Start with this simple prompt file that helps you write clear, well-documented code explanations.

Code explanation prompt
Text
---
agent: 'agent'
description: 'Generate a clear code explanation with examples'
---

Explain the following code in a clear, beginner-friendly way:

Code to explain: ${input:code:Paste your code here}
Target audience: ${input:audience:Who is this explanation for? (e.g., beginners, intermediate developers, etc.)}

Please provide:

* A brief overview of what the code does
* A step-by-step breakdown of the main parts
* Explanation of any key concepts or terminology
* A simple example showing how it works
* Common use cases or when you might use this approach

Use clear, simple language and avoid unnecessary jargon.
Test it out
Save the prompt file above as explain-code.prompt.md in your .github/prompts folder.

In Visual Studio Code, display the Copilot Chat view and enter /explain-code.

Copilot will switch to agent mode, if this is not already selected, and will prompt you to enter some code and an audience type.

Enter:

Text
The code is `function fibonacci(n) { return n <= 1 ? n : fibonacci(n-1) + fibonacci(n-2); }`. The audience is beginners.
Further reading
Use prompt files in Visual Studio Code in the Visual Studio Code documentation - Information on how to create and use prompt files
About customizing GitHub Copilot responses - Overview of response customization in GitHub Copilot
Awesome GitHub Copilot Customizations - Repository of community-contributed custom prompt files and other customizations for specific languages and scenarios


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

Creating custom agents
You can create specialized agents with tailored expertise for specific development tasks.

Who can use this feature?
Copilot coding agent is available with the GitHub Copilot Pro, GitHub Copilot Pro+, GitHub Copilot Business and GitHub Copilot Enterprise plans. The agent is available in all repositories stored on GitHub, except repositories owned by managed user accounts and where it has been explicitly disabled.

In this article
Custom agents allow you to create specialized agents with tailored expertise for specific tasks. For a conceptual overview of custom agents, see About custom agents.

Note

Custom agents are in public preview for JetBrains IDEs, Eclipse, and Xcode, and subject to change.

Creating a custom agent profile in a repository on GitHub
Navigate to the agents tab at https://github.com/copilot/agents.

Using the dropdown menu in the prompt box, select the repository you want to create the custom agent profile in.

Note

Organization and enterprise owners can create organization and enterprise-level custom agents in a .github-private repository that are available across all repositories within their organization or enterprise. For more information, see Preparing to use custom agents in your enterprise and Preparing to use custom agents in your organization.

Optionally, select the branch you want to create the agent profile in. The default is the main branch.

Click , then click  Create an agent. This will open a template agent profile called my-agent.agent.md in the .github/agents directory of your target repository.

If you are creating an organization or enterprise-level custom agent, delete the .github/ portion of the file path to move your template to the root agents directory.

Edit the filename (the text before .agent.md), selecting a unique, descriptive name that identifies the agent's purpose. Note that the filename may only contain the following characters: ., -, _, a-z, A-Z, 0-9.

Configure the agent profile, including the name, description, tools, and prompts. For more information on what the agent profile can include, see Configuring an agent profile.

Commit the file to the repository and merge it into the default branch. Go back to the agents tab and refresh the page if needed. Your custom agent will now appear in the dropdown when you click  in the prompt box.

Creating a custom agent profile in Visual Studio Code
Open GitHub Copilot Chat in Visual Studio Code.
From the agents dropdown at the bottom of the chat view, click Configure Custom Agents..., then click  Create new custom agent.
Choose the location where the agent profile should be created:
Workspace: Create the custom agent profile in the .github/agents folder of your workspace to only use it within that workspace.
User profile: Create the custom agent profile in the current user profile folder to use it across all your workspaces.
Enter a file name for the custom agent. This is the default name that appears in the agents dropdown.
Configure the agent profile in the newly created .agent.md file, including the description, tools, and prompts. For more information on what the agent profile can include, see Configuring an agent profile.
You can use the Configure Tools... button within the editor to open the "Configure Tools" dialog, where you can view and select available tools, including built-in tools and tools from MCP servers. Click OK to add selected tools to the agent profile.
To set which AI model the agent uses, add a model: property and select your preferred model from the autocomplete dropdown.
To update an agent profile, select Configure Custom Agents from the agents dropdown, and then click on an agent from the list to modify it. For more information on custom agents in VS Code, see Custom agents in VS Code.

Creating a custom agent profile in JetBrains IDEs
Open the GitHub Copilot Chat window in your JetBrains IDE.
From the agents dropdown at the bottom of the chat view, click Configure Agents..., then in the settings window, under "Chat Agents", click Workspace.
Enter a file name for the custom agent. This is the default name that appears in the agents dropdown.
Configure the agent profile in the newly created .agent.md file in the .github/agents directory, including the description, tools, and prompts. For more information on what the agent profile can include, see Configuring an agent profile.
You can use the Configure Tools... button within the editor to open the tools dialog, where you can view and select available tools, including built-in tools and tools from MCP servers. Click Apply to add selected tools to the agent profile.
To set which AI model the agent uses, add a model: property and select your preferred model from the autocomplete dropdown.
To update an agent profile, select Configure Custom Agents from the agents dropdown, and then click  next to the agent you want to modify.

Creating a custom agent profile in Eclipse
Open the GitHub Copilot Chat window in Eclipse.
From the agents dropdown at the bottom of the chat view, click Configure Agents..., then click Add....
Enter a file name for the custom agent. This is the default name that appears in the agents dropdown.
Configure the agent profile in the newly created .agent.md file in the .github/agents directory, including the description, tools, and prompts. For more information on what the agent profile can include, see Configuring an agent profile.
You can use the Configure Tools... button within the editor to open the "Configure Tools" dialog, where you can view and select available tools, including built-in tools and tools from MCP servers. Click Apply to add selected tools to the agent profile.
To set which AI model the agent uses, add a model: property and select your preferred model from the autocomplete dropdown.
To update an agent profile, select Configure Agents... from the agents dropdown, and then select the agent you want to modify and click Edit.

Creating a custom agent profile in Xcode
Open the GitHub Copilot Chat window in Xcode.
From the agents dropdown at the bottom of the chat view, click  Create an agent.
Enter a file name for the custom agent. This is the default name that appears in the agents dropdown.
Configure the agent profile in the newly created .agent.md file in the .github/agents directory, including the description, tools, and prompts. For more information on what the agent profile can include, see Configuring an agent profile.
You can use the Customize Agent button within the file editor to open a dialog, where you can select the AI model for the agent to use, select available tools (including built-in and MCP server tools), and configure the handoffs property for transitioning between custom agents. Click Apply to add selected options to the agent profile.
To update an agent profile, from the agents dropdown, click the pencil icon next to the agent you want to modify.

Configuring an agent profile
An agent profile is a Markdown file with YAML frontmatter that specifies the custom agent's name, description, available tools, and MCP server configurations (for organization/enterprise level agents). Configuring an agent profile involves defining the agent's identity, capabilities, tool access, and behavioral instructions.

For detailed configuration information about YAML properties, tools, MCP server setup, tool aliases, and how custom agents are processed, see Custom agents configuration.

To configure your agent profile:

Optionally, write a name for your custom agent. If unset, the name will default to the filename (without the .md or .agent.md suffix).
Write a brief description (required) explaining what your agent does and its specific capabilities or domain expertise.
In the tools property, define which tools the agent can use. This is a list of tool names or aliases, including tools from MCP servers configured in the repository settings or the agent profile (for example, tools: ["read", "edit", "search", "some-mcp-server/tool-1"]). If you omit this property, the agent will have access to all available tools.
If creating an organization or enterprise level agent on GitHub, you can use the mcp-servers property to optionally configure MCP servers that will be available only to this agent to extend its capabilities.
If you are creating and using the agent profile in VS Code, JetBrains IDEs, Eclipse, or Xcode, you can also use the model property to control which AI model the agent should use.
Optionally, set the target property to either vscode or github-copilot if you want to only use the agent in a specific environment. The agent will be available in both environments if you omit the property.
Write the agent's prompt. Define the agent's behavior, expertise, and instructions in the Markdown content below the YAML frontmatter. The prompt can be a maximum of 30,000 characters.
Example agent profiles
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
Using custom agents
Once you've created a custom agent, you can use it wherever Copilot coding agent is available.

When prompting Copilot coding agent with a task on GitHub.com, use the dropdown menu in the agents panel or agents tab to select your custom agent instead of the default coding agent.
When assigning Copilot coding agent to an issue, you can select your custom agent from the dropdown menu to handle the issue with your specialized configuration.
When using the GitHub Copilot CLI, you can choose to use a particular custom agent by using the /agent slash command or referencing the agent in a prompt or via a command-line argument. For more information, see Using GitHub Copilot CLI.
When Copilot opens pull requests, it will note which custom agent was used to complete the work in the pull request description.

For more information on using Copilot coding agent, see Asking GitHub Copilot to create a pull request.

Using custom agents in your IDE
You can also use your custom agent profiles directly in supported IDEs, including Visual Studio Code, JetBrains IDEs, Eclipse, and Xcode. You can switch between custom agents using the agent dropdown in the Chat window, allowing you to access specialized configurations for different tasks like planning, code editing, or research.

Note that some properties may function differently, or be ignored, between the GitHub.com and IDE environments. For more information on supported properties, see Custom agents configuration.

For more information on custom agents in VS Code specifically, see Custom agents in VS Code in the VS Code documentation.

Next steps
For a hands-on tutorial to create your first custom agent, see Your first custom agent.
For detailed configuration information, see Custom agents configuration.
For information on using coding agents, including your custom agents, to create pull requests, see Asking GitHub Copilot to create a pull request.


esting and releasing custom agents in your organization or enterprise
Ensure your custom agents are performant and compliant before releasing them to your company.

In this article
Note

Copilot custom agents are in public preview and subject to change.

Introduction
Before you release or update a custom agent in your organization or enterprise, you can test the agent privately to ensure it meets your standards. Once you are satisfied, you can then easily change the location of your agent profile to make it available across your company.

Prerequisites
Before you can test a custom agent, you need to set up your organization or enterprise for custom agents. See Preparing to use custom agents in your organization or Preparing to use custom agents in your enterprise.

1. Create your test custom agent
In your organization or enterprise's .github-private repository, create a new directory called .github/agents. Agents stored in this directory are only available to members of your organization or enterprise who have access to the .github-private repository, and can only be used when they start a task within that repository.
In your .github/agents directory, create the agent profile for your test agent. You can create a net-new profile or duplicate an existing profile to test potential updates. For information on configuring an agent profile, see Creating custom agents.
Merge your test agent profile into the default branch of your repository.
2. Test your custom agent
Navigate to the agents tab at https://github.com/copilot/agents.
Using the dropdown menu in the prompt box, select your .github-private repository.
Select , then click your test agent.
To test your custom agent, send Copilot a prompt.
In the "Recent sessions" section, click your session to see detailed information about your results.
Continue making changes and testing your custom agent as needed until you are satisfied with its performance.
3. Release your custom agent
In your .github-private repository, move your agent profile from the .github/agents directory into the agents directory.
Merge your changes into the default branch. Your custom agent is now available to all users in your organization or enterprise.
Next steps
To monitor the usage of custom agents in your organization, filter your organization's audit log by actor:Copilot. See Reviewing the audit log for your organization.

To monitor the usage of custom agents in your enterprise, see Monitoring agentic activity in your enterprise.


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
Support for different types of custom instructions
Customization library—a curated collection of examples
Using custom instructions to unlock the power of Copilot code review


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
Support for different types of custom instructions
Customization library—a curated collection of examples
Using custom instructions to unlock the power of Copilot code review


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


