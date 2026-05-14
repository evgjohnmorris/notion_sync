/**
 * Generated Tool: workspacesTool_0053
 * Domain: Workspaces
 * ID: 0053
 */
exports.workspacesTool_0053 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0053:', error);
    throw error;
  }
};
