/**
 * Generated Tool: workspacesTool_0660
 * Domain: Workspaces
 * ID: 0660
 */
exports.workspacesTool_0660 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0660:', error);
    throw error;
  }
};
