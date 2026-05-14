/**
 * Generated Tool: workspacesTool_0318
 * Domain: Workspaces
 * ID: 0318
 */
exports.workspacesTool_0318 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0318:', error);
    throw error;
  }
};
