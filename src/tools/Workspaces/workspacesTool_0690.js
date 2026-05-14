/**
 * Generated Tool: workspacesTool_0690
 * Domain: Workspaces
 * ID: 0690
 */
exports.workspacesTool_0690 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0690:', error);
    throw error;
  }
};
