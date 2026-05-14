/**
 * Generated Tool: workspacesTool_0127
 * Domain: Workspaces
 * ID: 0127
 */
exports.workspacesTool_0127 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0127:', error);
    throw error;
  }
};
