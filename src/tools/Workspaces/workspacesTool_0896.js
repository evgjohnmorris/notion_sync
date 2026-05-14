/**
 * Generated Tool: workspacesTool_0896
 * Domain: Workspaces
 * ID: 0896
 */
exports.workspacesTool_0896 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0896:', error);
    throw error;
  }
};
