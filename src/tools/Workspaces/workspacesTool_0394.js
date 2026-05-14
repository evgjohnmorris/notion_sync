/**
 * Generated Tool: workspacesTool_0394
 * Domain: Workspaces
 * ID: 0394
 */
exports.workspacesTool_0394 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0394:', error);
    throw error;
  }
};
