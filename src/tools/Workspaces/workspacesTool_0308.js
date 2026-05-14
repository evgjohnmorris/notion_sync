/**
 * Generated Tool: workspacesTool_0308
 * Domain: Workspaces
 * ID: 0308
 */
exports.workspacesTool_0308 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0308:', error);
    throw error;
  }
};
