/**
 * Generated Tool: workspacesTool_0096
 * Domain: Workspaces
 * ID: 0096
 */
exports.workspacesTool_0096 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0096:', error);
    throw error;
  }
};
