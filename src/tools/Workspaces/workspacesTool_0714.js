/**
 * Generated Tool: workspacesTool_0714
 * Domain: Workspaces
 * ID: 0714
 */
exports.workspacesTool_0714 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0714:', error);
    throw error;
  }
};
