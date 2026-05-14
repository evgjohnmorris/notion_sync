/**
 * Generated Tool: workspacesTool_0063
 * Domain: Workspaces
 * ID: 0063
 */
exports.workspacesTool_0063 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0063:', error);
    throw error;
  }
};
