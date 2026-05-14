/**
 * Generated Tool: workspacesTool_0425
 * Domain: Workspaces
 * ID: 0425
 */
exports.workspacesTool_0425 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0425:', error);
    throw error;
  }
};
