/**
 * Generated Tool: workspacesTool_0941
 * Domain: Workspaces
 * ID: 0941
 */
exports.workspacesTool_0941 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0941:', error);
    throw error;
  }
};
