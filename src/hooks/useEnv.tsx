export const useEnv = () => {
  const rpcUrl = process.env.REACT_APP_SOLANA_RPC_HOST?.toString();
  const cluster = process.env.REACT_APP_SOLANA_NETWORK?.toString();
  const candyMachineId = process.env.REACT_APP_CANDY_MACHINE_ID?.toString();

  const checkEnvError = () => {
    if (!rpcUrl || !candyMachineId || !cluster) {
      if (!rpcUrl) {
        console.error("RPC URL not populated");
      }
      if (!candyMachineId) {
        console.error("Candy Machine ID not populated");
      }
      if (!cluster) {
        console.error("Environment not populated");
      }
      return true;
    }
    if (candyMachineId.length < 32 || candyMachineId.length > 44) {
      console.error(
        "Candy Machine Public Key is invalid. Enter a length in-between 32 and 44 characters"
      );
      return true;
    }
    return false;
  }

  return {
    envError: checkEnvError(),
    rpcUrl,
    cluster,
    candyMachineId,
  }
}