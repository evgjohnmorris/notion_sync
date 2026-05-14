/**
 * Generated Tool: workspacesTool_0000
 * Domain: Workspaces
 * ID: 0000
 */
exports.workspacesTool_0000 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0000:', error);
    throw error;
  }
};
