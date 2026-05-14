/**
 * Generated Tool: workspacesTool_0729
 * Domain: Workspaces
 * ID: 0729
 */
exports.workspacesTool_0729 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0729:', error);
    throw error;
  }
};
