/**
 * Generated Tool: workspacesTool_0811
 * Domain: Workspaces
 * ID: 0811
 */
exports.workspacesTool_0811 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0811:', error);
    throw error;
  }
};
