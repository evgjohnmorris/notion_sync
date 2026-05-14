/**
 * Generated Tool: workspacesTool_0422
 * Domain: Workspaces
 * ID: 0422
 */
exports.workspacesTool_0422 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0422:', error);
    throw error;
  }
};
