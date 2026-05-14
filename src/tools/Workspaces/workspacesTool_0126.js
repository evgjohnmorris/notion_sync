/**
 * Generated Tool: workspacesTool_0126
 * Domain: Workspaces
 * ID: 0126
 */
exports.workspacesTool_0126 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0126:', error);
    throw error;
  }
};
