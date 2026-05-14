/**
 * Generated Tool: workspacesTool_0827
 * Domain: Workspaces
 * ID: 0827
 */
exports.workspacesTool_0827 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0827:', error);
    throw error;
  }
};
