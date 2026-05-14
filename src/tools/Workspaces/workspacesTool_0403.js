/**
 * Generated Tool: workspacesTool_0403
 * Domain: Workspaces
 * ID: 0403
 */
exports.workspacesTool_0403 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0403:', error);
    throw error;
  }
};
