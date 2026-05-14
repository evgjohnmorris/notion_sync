/**
 * Generated Tool: workspacesTool_0176
 * Domain: Workspaces
 * ID: 0176
 */
exports.workspacesTool_0176 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0176:', error);
    throw error;
  }
};
