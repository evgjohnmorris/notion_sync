/**
 * Generated Tool: workspacesTool_0128
 * Domain: Workspaces
 * ID: 0128
 */
exports.workspacesTool_0128 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0128:', error);
    throw error;
  }
};
