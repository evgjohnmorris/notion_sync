/**
 * Generated Tool: workspacesTool_0147
 * Domain: Workspaces
 * ID: 0147
 */
exports.workspacesTool_0147 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0147:', error);
    throw error;
  }
};
