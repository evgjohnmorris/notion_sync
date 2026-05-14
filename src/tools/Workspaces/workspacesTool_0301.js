/**
 * Generated Tool: workspacesTool_0301
 * Domain: Workspaces
 * ID: 0301
 */
exports.workspacesTool_0301 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0301:', error);
    throw error;
  }
};
