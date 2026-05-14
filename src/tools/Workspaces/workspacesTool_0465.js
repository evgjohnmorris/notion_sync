/**
 * Generated Tool: workspacesTool_0465
 * Domain: Workspaces
 * ID: 0465
 */
exports.workspacesTool_0465 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0465:', error);
    throw error;
  }
};
