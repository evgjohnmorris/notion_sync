/**
 * Generated Tool: workspacesTool_0909
 * Domain: Workspaces
 * ID: 0909
 */
exports.workspacesTool_0909 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0909:', error);
    throw error;
  }
};
