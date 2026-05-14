/**
 * Generated Tool: workspacesTool_0892
 * Domain: Workspaces
 * ID: 0892
 */
exports.workspacesTool_0892 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0892:', error);
    throw error;
  }
};
