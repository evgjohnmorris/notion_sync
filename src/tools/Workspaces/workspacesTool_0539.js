/**
 * Generated Tool: workspacesTool_0539
 * Domain: Workspaces
 * ID: 0539
 */
exports.workspacesTool_0539 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0539:', error);
    throw error;
  }
};
