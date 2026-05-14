/**
 * Generated Tool: workspacesTool_0581
 * Domain: Workspaces
 * ID: 0581
 */
exports.workspacesTool_0581 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0581:', error);
    throw error;
  }
};
