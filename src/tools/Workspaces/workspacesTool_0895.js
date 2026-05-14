/**
 * Generated Tool: workspacesTool_0895
 * Domain: Workspaces
 * ID: 0895
 */
exports.workspacesTool_0895 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0895:', error);
    throw error;
  }
};
