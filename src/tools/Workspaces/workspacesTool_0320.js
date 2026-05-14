/**
 * Generated Tool: workspacesTool_0320
 * Domain: Workspaces
 * ID: 0320
 */
exports.workspacesTool_0320 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0320:', error);
    throw error;
  }
};
