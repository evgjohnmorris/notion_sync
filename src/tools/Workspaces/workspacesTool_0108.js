/**
 * Generated Tool: workspacesTool_0108
 * Domain: Workspaces
 * ID: 0108
 */
exports.workspacesTool_0108 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0108:', error);
    throw error;
  }
};
