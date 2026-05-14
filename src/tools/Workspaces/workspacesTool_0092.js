/**
 * Generated Tool: workspacesTool_0092
 * Domain: Workspaces
 * ID: 0092
 */
exports.workspacesTool_0092 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0092:', error);
    throw error;
  }
};
