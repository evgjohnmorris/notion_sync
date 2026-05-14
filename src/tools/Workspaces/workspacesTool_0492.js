/**
 * Generated Tool: workspacesTool_0492
 * Domain: Workspaces
 * ID: 0492
 */
exports.workspacesTool_0492 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0492:', error);
    throw error;
  }
};
