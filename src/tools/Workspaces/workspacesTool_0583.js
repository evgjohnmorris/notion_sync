/**
 * Generated Tool: workspacesTool_0583
 * Domain: Workspaces
 * ID: 0583
 */
exports.workspacesTool_0583 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0583:', error);
    throw error;
  }
};
