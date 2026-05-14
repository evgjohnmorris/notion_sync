/**
 * Generated Tool: workspacesTool_0072
 * Domain: Workspaces
 * ID: 0072
 */
exports.workspacesTool_0072 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0072:', error);
    throw error;
  }
};
