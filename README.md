# CLI-tool

Learning the ins and outs of command line tools to know how they parse arguments, while creating a skeleton framework for a new CLI tool.

#### Setting up

1. Make sure you have nodeJs version 14+ installed to properly use this tool.
2. To run the tool on your environment clone the git repository.
3. Install the dependencies with, "npm install".
4. Use "npm link" in the tool folder to link the tool, and now you can run the "tool" in any project.

#### Description of tool

There is a tool folder that represents the main CLI tool, and using npm link, it simulates an installation of the tool in the testProject folder.

#### Testing the tool

To test the tool with the provided test project, simply enter the testProject folder and use "tool --start" or "tool --build" to see how the tool runs.

There are debug options provided by running "DEBUG=\* tool --start" to see the logs of the run. "DEBUG=commands:\*,bin" to include both commands and bin logs.
We can also call it with "DEBUG=\*,-bin" to exclude bin logs.
