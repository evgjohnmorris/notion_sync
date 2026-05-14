/**
 * Generated Tool: workspacesTool_0791
 * Domain: Workspaces
 * ID: 0791
 */
exports.workspacesTool_0791 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0791:', error);
    throw error;
  }
};
