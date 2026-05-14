/**
 * Generated Tool: workspacesTool_0088
 * Domain: Workspaces
 * ID: 0088
 */
exports.workspacesTool_0088 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0088:', error);
    throw error;
  }
};
