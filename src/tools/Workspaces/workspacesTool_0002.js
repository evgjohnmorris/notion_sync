/**
 * Generated Tool: workspacesTool_0002
 * Domain: Workspaces
 * ID: 0002
 */
exports.workspacesTool_0002 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0002:', error);
    throw error;
  }
};
