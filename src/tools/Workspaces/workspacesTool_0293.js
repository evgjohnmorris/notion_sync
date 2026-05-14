/**
 * Generated Tool: workspacesTool_0293
 * Domain: Workspaces
 * ID: 0293
 */
exports.workspacesTool_0293 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0293:', error);
    throw error;
  }
};
