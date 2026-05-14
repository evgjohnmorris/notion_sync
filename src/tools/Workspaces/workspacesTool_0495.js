/**
 * Generated Tool: workspacesTool_0495
 * Domain: Workspaces
 * ID: 0495
 */
exports.workspacesTool_0495 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0495:', error);
    throw error;
  }
};
