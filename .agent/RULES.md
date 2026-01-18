# Project-Specific Rules

## Python Environment Management

### Virtual Environment Requirement
- **All Python commands MUST run inside a virtual environment (venv)**
- Before running any Python script or command, ensure the virtual environment is activated
- If venv doesn't exist, create it first with `python -m venv venv`

### Virtual Environment Activation

**Windows (PowerShell):**
```powershell
.\venv\Scripts\Activate.ps1
```

**Windows (CMD):**
```cmd
.\venv\Scripts\activate.bat
```

**macOS/Linux:**
```bash
source venv/bin/activate
```

### Auto-Run Policy for Virtual Environment Commands

**All commands executed within the activated virtual environment are safe to auto-run**, including:
- `pip install <package>`
- `pip install -r requirements.txt`
- `python <script>.py`
- `pytest`
- Any other Python-related commands

**Implementation:**
- Set `SafeToAutoRun: true` for all commands after venv activation
- No user approval needed for pip installs or Python script execution in venv

## NPM Commands

### Auto-Run Policy for NPM

**All npm commands in this project (`d:\apps\agent-sheet`) are safe to auto-run**, including:
- `npm install`
- `npm install <package>`
- `npm run <script>`
- `npm run dev`
- `npm run build`
- `npm test`
- `npx <command>`

**Implementation:**
- Set `SafeToAutoRun: true` for all npm/npx commands in project directory
- No user approval needed for any npm-related operations

## Command Execution Guidelines

### Always Auto-Run (SafeToAutoRun: true)
1. All commands in activated Python venv
2. All npm/npx commands in project directory
3. Read-only operations (ls, cat, git status, etc.)
4. Package manager queries (npm list, pip list, etc.)

### Require Approval (SafeToAutoRun: false)
1. System-wide installations outside venv
2. File deletion commands (rm, del)
3. Git commits and pushes
4. Commands that modify system configuration

## Example Workflows

### Python Workflow
```powershell
# 1. Create venv if not exists (may need approval)
python -m venv venv

# 2. Activate venv (may need approval)
.\venv\Scripts\Activate.ps1

# 3. All subsequent commands auto-run
pip install requests  # SafeToAutoRun: true
python script.py      # SafeToAutoRun: true
```

### NPM Workflow
```powershell
# All these can auto-run in this project
npm install           # SafeToAutoRun: true
npm run dev          # SafeToAutoRun: true
npx create-vite app  # SafeToAutoRun: true
```

## Notes

- These rules apply specifically to the `d:\apps\agent-sheet` project
- When in doubt about safety, default to requiring user approval
- These auto-run policies help streamline development workflow while maintaining safety
