/**
 * Generated Tool: workspacesTool_0489
 * Domain: Workspaces
 * ID: 0489
 */
exports.workspacesTool_0489 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0489:', error);
    throw error;
  }
};
