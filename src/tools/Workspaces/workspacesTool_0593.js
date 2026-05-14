/**
 * Generated Tool: workspacesTool_0593
 * Domain: Workspaces
 * ID: 0593
 */
exports.workspacesTool_0593 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0593:', error);
    throw error;
  }
};
