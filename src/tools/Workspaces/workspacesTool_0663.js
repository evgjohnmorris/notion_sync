/**
 * Generated Tool: workspacesTool_0663
 * Domain: Workspaces
 * ID: 0663
 */
exports.workspacesTool_0663 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0663:', error);
    throw error;
  }
};
