/**
 * Generated Tool: workspacesTool_0137
 * Domain: Workspaces
 * ID: 0137
 */
exports.workspacesTool_0137 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0137:', error);
    throw error;
  }
};
