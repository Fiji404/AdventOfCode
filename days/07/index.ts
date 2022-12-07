import { getFormattedData } from '../../utils';

const fileSystemTree = {};

const terminalOutputs = getFormattedData('./input.txt');

const infoAboutCurrent = { command: '', folder: '' };

const getTerminalOutputLine = () => {
    for (const terminalOutput of terminalOutputs) {
        const typeOfAction = terminalOutput.includes('$') ? 'command' : 'output';
        if (typeOfAction === 'command') {
            const userCommand = terminalOutput.includes('ls');
            if (userCommand) infoAboutCurrent.command = 'ls';
        }
    }
};

getTerminalOutputLine();