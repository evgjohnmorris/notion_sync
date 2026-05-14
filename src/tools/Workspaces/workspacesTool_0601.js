/**
 * Generated Tool: workspacesTool_0601
 * Domain: Workspaces
 * ID: 0601
 */
exports.workspacesTool_0601 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0601:', error);
    throw error;
  }
};
