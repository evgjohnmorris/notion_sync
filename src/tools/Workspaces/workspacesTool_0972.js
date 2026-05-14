/**
 * Generated Tool: workspacesTool_0972
 * Domain: Workspaces
 * ID: 0972
 */
exports.workspacesTool_0972 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0972:', error);
    throw error;
  }
};
