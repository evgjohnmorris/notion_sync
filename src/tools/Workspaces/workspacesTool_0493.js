/**
 * Generated Tool: workspacesTool_0493
 * Domain: Workspaces
 * ID: 0493
 */
exports.workspacesTool_0493 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0493:', error);
    throw error;
  }
};
