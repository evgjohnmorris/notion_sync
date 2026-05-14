/**
 * Generated Tool: workspacesTool_0155
 * Domain: Workspaces
 * ID: 0155
 */
exports.workspacesTool_0155 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0155:', error);
    throw error;
  }
};
