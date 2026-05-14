/**
 * Generated Tool: workspacesTool_0288
 * Domain: Workspaces
 * ID: 0288
 */
exports.workspacesTool_0288 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0288:', error);
    throw error;
  }
};
