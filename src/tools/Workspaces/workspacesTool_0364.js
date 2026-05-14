/**
 * Generated Tool: workspacesTool_0364
 * Domain: Workspaces
 * ID: 0364
 */
exports.workspacesTool_0364 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0364:', error);
    throw error;
  }
};
