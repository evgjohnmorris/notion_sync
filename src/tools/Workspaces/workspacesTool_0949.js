/**
 * Generated Tool: workspacesTool_0949
 * Domain: Workspaces
 * ID: 0949
 */
exports.workspacesTool_0949 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0949:', error);
    throw error;
  }
};
