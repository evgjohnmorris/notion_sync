/**
 * Generated Tool: workspacesTool_0454
 * Domain: Workspaces
 * ID: 0454
 */
exports.workspacesTool_0454 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0454:', error);
    throw error;
  }
};
