/**
 * Generated Tool: workspacesTool_0349
 * Domain: Workspaces
 * ID: 0349
 */
exports.workspacesTool_0349 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0349:', error);
    throw error;
  }
};
