export type MemAPIData = {
  tnxs: Record<string, string[]>;
  publicFunctions: {
    store: string[];
  };
};

export type TxnData = {
  username: string;
  timestamp: string;
  guildID: string;
  channelID: string;
  content: string;
};
