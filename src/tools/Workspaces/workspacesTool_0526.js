/**
 * Generated Tool: workspacesTool_0526
 * Domain: Workspaces
 * ID: 0526
 */
exports.workspacesTool_0526 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0526:', error);
    throw error;
  }
};
