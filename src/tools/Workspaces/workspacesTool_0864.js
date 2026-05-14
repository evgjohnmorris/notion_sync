/**
 * Generated Tool: workspacesTool_0864
 * Domain: Workspaces
 * ID: 0864
 */
exports.workspacesTool_0864 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0864:', error);
    throw error;
  }
};
