/**
 * Generated Tool: workspacesTool_0073
 * Domain: Workspaces
 * ID: 0073
 */
exports.workspacesTool_0073 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0073:', error);
    throw error;
  }
};
