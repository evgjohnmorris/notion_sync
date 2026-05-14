/**
 * Generated Tool: workspacesTool_0937
 * Domain: Workspaces
 * ID: 0937
 */
exports.workspacesTool_0937 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0937:', error);
    throw error;
  }
};
