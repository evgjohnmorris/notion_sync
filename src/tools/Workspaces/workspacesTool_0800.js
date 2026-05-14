/**
 * Generated Tool: workspacesTool_0800
 * Domain: Workspaces
 * ID: 0800
 */
exports.workspacesTool_0800 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0800:', error);
    throw error;
  }
};
