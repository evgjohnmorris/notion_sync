/**
 * Generated Tool: workspacesTool_0696
 * Domain: Workspaces
 * ID: 0696
 */
exports.workspacesTool_0696 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0696:', error);
    throw error;
  }
};
