/**
 * Generated Tool: workspacesTool_0794
 * Domain: Workspaces
 * ID: 0794
 */
exports.workspacesTool_0794 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0794:', error);
    throw error;
  }
};
