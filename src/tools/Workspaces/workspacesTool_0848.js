/**
 * Generated Tool: workspacesTool_0848
 * Domain: Workspaces
 * ID: 0848
 */
exports.workspacesTool_0848 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0848:', error);
    throw error;
  }
};
