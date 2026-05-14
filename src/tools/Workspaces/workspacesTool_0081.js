/**
 * Generated Tool: workspacesTool_0081
 * Domain: Workspaces
 * ID: 0081
 */
exports.workspacesTool_0081 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0081:', error);
    throw error;
  }
};
