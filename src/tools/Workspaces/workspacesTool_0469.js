/**
 * Generated Tool: workspacesTool_0469
 * Domain: Workspaces
 * ID: 0469
 */
exports.workspacesTool_0469 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0469:', error);
    throw error;
  }
};
