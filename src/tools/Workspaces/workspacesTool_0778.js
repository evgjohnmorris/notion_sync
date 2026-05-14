/**
 * Generated Tool: workspacesTool_0778
 * Domain: Workspaces
 * ID: 0778
 */
exports.workspacesTool_0778 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0778:', error);
    throw error;
  }
};
