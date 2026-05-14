/**
 * Generated Tool: workspacesTool_0828
 * Domain: Workspaces
 * ID: 0828
 */
exports.workspacesTool_0828 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0828:', error);
    throw error;
  }
};
