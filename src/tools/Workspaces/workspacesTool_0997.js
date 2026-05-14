/**
 * Generated Tool: workspacesTool_0997
 * Domain: Workspaces
 * ID: 0997
 */
exports.workspacesTool_0997 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0997:', error);
    throw error;
  }
};
