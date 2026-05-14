/**
 * Generated Tool: workspacesTool_0614
 * Domain: Workspaces
 * ID: 0614
 */
exports.workspacesTool_0614 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0614:', error);
    throw error;
  }
};
