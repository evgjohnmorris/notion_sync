/**
 * Generated Tool: workspacesTool_0484
 * Domain: Workspaces
 * ID: 0484
 */
exports.workspacesTool_0484 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0484:', error);
    throw error;
  }
};
