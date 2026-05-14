/**
 * Generated Tool: workspacesTool_0897
 * Domain: Workspaces
 * ID: 0897
 */
exports.workspacesTool_0897 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0897:', error);
    throw error;
  }
};
