/**
 * Generated Tool: workspacesTool_0765
 * Domain: Workspaces
 * ID: 0765
 */
exports.workspacesTool_0765 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0765:', error);
    throw error;
  }
};
