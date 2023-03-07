import { connector } from './axios';

export async function getCommands() {
  const { data } = await connector.get('command/640203045a2a4c318c78b73f');
  return data;
}

const Spyder = {
  getCommands,
};

export default Spyder;
