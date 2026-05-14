/**
 * Generated Tool: workspacesTool_0740
 * Domain: Workspaces
 * ID: 0740
 */
exports.workspacesTool_0740 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0740:', error);
    throw error;
  }
};
