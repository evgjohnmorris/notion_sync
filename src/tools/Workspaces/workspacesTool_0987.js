/**
 * Generated Tool: workspacesTool_0987
 * Domain: Workspaces
 * ID: 0987
 */
exports.workspacesTool_0987 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0987:', error);
    throw error;
  }
};
