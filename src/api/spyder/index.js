import { connector } from './axios';

export async function getCommands() {
  const { data } = await connector.get('command/640203045a2a4c318c78b73f');
  return data;
}

export async function addCommands(body) {
  const { data } = await connector.post('command/', { ...body });
  return data;
}

export async function updateCommand(commandId, body) {
  const { data } = await connector.post(`command/640203045a2a4c318c78b73f/${commandId}`, { ...body });
  return data;
}

export async function deleteCommand(commandId) {
  const { data } = await connector.delete(`command/640203045a2a4c318c78b73f/${commandId}`);
  return data;
}

const Spyder = {
  getCommands,
  addCommands,
  updateCommand,
  deleteCommand
};

export default Spyder;
