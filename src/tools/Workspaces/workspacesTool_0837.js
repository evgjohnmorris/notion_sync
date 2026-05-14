/**
 * Generated Tool: workspacesTool_0837
 * Domain: Workspaces
 * ID: 0837
 */
exports.workspacesTool_0837 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0837:', error);
    throw error;
  }
};
