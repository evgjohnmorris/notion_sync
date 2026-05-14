/**
 * Generated Tool: workspacesTool_0917
 * Domain: Workspaces
 * ID: 0917
 */
exports.workspacesTool_0917 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0917:', error);
    throw error;
  }
};
