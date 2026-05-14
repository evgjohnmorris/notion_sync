/**
 * Generated Tool: workspacesTool_0246
 * Domain: Workspaces
 * ID: 0246
 */
exports.workspacesTool_0246 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0246:', error);
    throw error;
  }
};
