/**
 * Generated Tool: workspacesTool_0400
 * Domain: Workspaces
 * ID: 0400
 */
exports.workspacesTool_0400 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0400:', error);
    throw error;
  }
};
