/**
 * Generated Tool: workspacesTool_0284
 * Domain: Workspaces
 * ID: 0284
 */
exports.workspacesTool_0284 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0284:', error);
    throw error;
  }
};
