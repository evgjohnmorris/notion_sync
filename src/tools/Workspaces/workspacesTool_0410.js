/**
 * Generated Tool: workspacesTool_0410
 * Domain: Workspaces
 * ID: 0410
 */
exports.workspacesTool_0410 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0410:', error);
    throw error;
  }
};
