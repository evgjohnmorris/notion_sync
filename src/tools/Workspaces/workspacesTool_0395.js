/**
 * Generated Tool: workspacesTool_0395
 * Domain: Workspaces
 * ID: 0395
 */
exports.workspacesTool_0395 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0395:', error);
    throw error;
  }
};
